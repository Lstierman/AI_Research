// Researcher dashboard: finished surveys, metrics, exports. Listens on localhost only by default,
// because it exposes all data and can delete surveys.

const path = require("path");
const express = require("express");
const { db } = require("../src/db");
const { loadCases } = require("../src/cases");
const { CONDITIONS, conditionSteps } = require("../src/design");
const { ACTIVE_HOURS } = require("../src/survey");
const { listen } = require("../participant/server");

const ANSWER_COLUMNS = `
  s.id AS survey_id, s.simulated, s.demo, s.condition_id, s.created_at AS survey_started, s.completed_at AS survey_completed,
  a.position, a.case_id, e.case_title, a.modality, a.version, e.flawed_question, a.difficulty AS question_difficulty,
  a.is_flaw_target, a.prompt, a.selected, a.selected_text, a.correct_option, a.flawed_option,
  a.is_correct, a.chose_flaw_option, a.adopted_flaw, a.confidence, a.response_ms, e.explanation_ms, e.plays, a.answered_at`;

function surveyFilter(include) {
  return include === "all" ? "1 = 1" : "s.completed_at IS NOT NULL";
}

function queries(include) {
  const where = surveyFilter(include);
  return {
    surveys: db
      .prepare(
        `SELECT s.*,
           (SELECT COUNT(*) FROM answers a WHERE a.survey_id = s.id) AS answered,
           (SELECT SUM(is_correct) FROM answers a WHERE a.survey_id = s.id) AS correct,
           (SELECT SUM(adopted_flaw) FROM answers a WHERE a.survey_id = s.id) AS flaws_adopted
         FROM surveys s WHERE ${where} ORDER BY s.created_at DESC`
      )
      .all(),
    explanations: db
      .prepare(`SELECT e.* FROM explanations e JOIN surveys s ON s.id = e.survey_id WHERE ${where} ORDER BY e.survey_id, e.position`)
      .all(),
    answers: db
      .prepare(
        `SELECT ${ANSWER_COLUMNS}
         FROM answers a
         JOIN surveys s ON s.id = a.survey_id
         JOIN explanations e ON e.survey_id = a.survey_id AND e.position = a.position
         WHERE ${where}
         ORDER BY s.created_at, a.position, CASE a.difficulty WHEN 'easy' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END`
      )
      .all(),
  };
}

function toCsv(rows) {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const esc = (v) => {
    if (v == null) return "";
    const s = String(v);
    return /[",\n\r;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\r\n");
}

function createApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/common", express.static(path.join(__dirname, "..", "common")));

  app.get("/api/data", (req, res) => {
    const counts = db
      .prepare(
        `SELECT COUNT(*) total, SUM(completed_at IS NOT NULL) completed, SUM(simulated) simulated, SUM(demo) demo,
           SUM(completed_at IS NULL) incomplete FROM surveys`
      )
      .get();
    res.json({ counts, ...queries(req.query.include) });
  });

  // Counterbalancing: real (non-simulated, non-demo) surveys per condition, split by status, plus what each condition shows.
  // The participant server always assigns the condition with the lowest completed + in-progress count.
  app.get("/api/balance", (req, res) => {
    const since = new Date(Date.now() - ACTIVE_HOURS * 3600e3).toISOString();
    const rows = db
      .prepare(
        `SELECT condition_id,
           SUM(completed_at IS NOT NULL) completed,
           SUM(completed_at IS NULL AND created_at > ?) in_progress,
           SUM(completed_at IS NULL AND created_at <= ?) abandoned
         FROM surveys WHERE simulated = 0 AND demo = 0 GROUP BY condition_id`
      )
      .all(since, since);
    const byId = Object.fromEntries(rows.map((r) => [r.condition_id, r]));
    const { cases, errors } = loadCases();
    const conditions = CONDITIONS.map((c) => ({
      id: c.id,
      completed: byId[c.id]?.completed || 0,
      in_progress: byId[c.id]?.in_progress || 0,
      abandoned: byId[c.id]?.abandoned || 0,
      steps: errors.length ? [] : conditionSteps(cases, c.id),
    }));
    // Finished explanations per case × modality × version
    const cells = db
      .prepare(
        `SELECT e.case_id, e.modality, e.version, COUNT(*) n FROM explanations e JOIN surveys s ON s.id = e.survey_id
         WHERE s.completed_at IS NOT NULL AND s.simulated = 0 AND s.demo = 0 GROUP BY e.case_id, e.modality, e.version`
      )
      .all();
    res.json({ activeHours: ACTIVE_HOURS, conditions, cells });
  });

  app.get("/api/cases", (req, res) => res.json(loadCases()));

  app.get("/api/export/:name", (req, res) => {
    const q = queries(req.query.include);
    const stamp = new Date().toISOString().slice(0, 10);
    const suffix = req.query.include === "all" ? "-incl-incomplete" : "";
    const files = {
      "answers.csv": () => toCsv(q.answers),
      "explanations.csv": () => toCsv(q.explanations),
      "surveys.csv": () => toCsv(q.surveys),
      "all.json": () => JSON.stringify(q, null, 2),
    };
    const make = files[req.params.name];
    if (!make) return res.status(404).send("Unknown export");
    const [base, ext] = req.params.name.split(".");
    res.attachment(`survey-${base}${suffix}-${stamp}.${ext}`);
    // BOM so Excel opens the CSV as UTF-8
    res.type(ext === "csv" ? "text/csv" : "application/json").send((ext === "csv" ? "﻿" : "") + make());
  });

  app.delete("/api/surveys/:id", (req, res) => {
    const r = db.prepare("DELETE FROM surveys WHERE id = ?").run(req.params.id);
    res.json({ deleted: r.changes });
  });

  // Bulk delete: ?which=simulated | demo | incomplete
  app.delete("/api/surveys", (req, res) => {
    const where = { simulated: "simulated = 1", demo: "demo = 1", incomplete: "completed_at IS NULL" }[req.query.which];
    if (!where) return res.status(400).json({ error: "which must be simulated, demo or incomplete" });
    const r = db.prepare(`DELETE FROM surveys WHERE ${where}`).run();
    res.json({ deleted: r.changes });
  });

  return app;
}

function start(port = Number(process.env.DASHBOARD_PORT) || 3001, host = process.env.DASHBOARD_HOST || "127.0.0.1") {
  return listen(createApp(), port, host, "Researcher dashboard:");
}

if (require.main === module) start();
module.exports = { start };
