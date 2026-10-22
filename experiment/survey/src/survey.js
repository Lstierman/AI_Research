// Survey operations: create, read a step, record explanation stats and answers, complete.
// Scoring happens here, server side, so the participant page never sees the answer keys.

const crypto = require("crypto");
const { db } = require("./db");
const { loadCases, DIFFICULTIES, MODALITIES, VERSIONS } = require("./cases");
const { CONDITIONS, conditionsShowing, buildPlan, nextConditionId } = require("./design");

const ACTIVE_HOURS = 2; // unfinished surveys younger than this still count towards their condition

function conditionCounts() {
  const rows = db
    .prepare(
      `SELECT condition_id, COUNT(*) n FROM surveys
       WHERE simulated = 0 AND demo = 0 AND (completed_at IS NOT NULL OR created_at > ?)
       GROUP BY condition_id`
    )
    .all(new Date(Date.now() - ACTIVE_HOURS * 3600e3).toISOString());
  return Object.fromEntries(rows.map((r) => [r.condition_id, r.n]));
}

const bad = (msg) => Object.assign(new Error(msg), { status: 400 });

// demo = { first, modality, version }: start with case `first`, optionally in that modality / version.
// Demo surveys are flagged and don't count towards the counterbalancing.
function createSurvey({ simulated = false, conditionId, demo } = {}) {
  const { cases, errors } = loadCases();
  if (errors.length) throw Object.assign(new Error("The cases are not set up correctly:\n" + errors.join("\n")), { status: 503 });

  let candidates = CONDITIONS;
  if (demo) {
    if (!cases.some((c) => c.id === demo.first)) throw bad(`Unknown case "${demo.first}". Use one of: ${cases.map((c) => c.id).join(", ")}`);
    if (demo.modality && !MODALITIES.includes(demo.modality)) throw bad(`modality must be one of: ${MODALITIES.join(", ")}`);
    if (demo.version && !VERSIONS.includes(demo.version)) throw bad(`version must be one of: ${VERSIONS.join(", ")}`);
    candidates = conditionsShowing(cases, demo.first, demo.modality, demo.version);
  }
  const condition = conditionId && CONDITIONS.some((c) => c.id === conditionId) ? conditionId : nextConditionId(conditionCounts(), candidates);
  const plan = buildPlan(cases, condition, demo && demo.first);
  const id = "S-" + crypto.randomBytes(4).toString("hex").toUpperCase();
  const byId = Object.fromEntries(cases.map((c) => [c.id, c]));

  const insertSurvey = db.prepare("INSERT INTO surveys (id, condition_id, plan, created_at, simulated, demo) VALUES (?, ?, ?, ?, ?, ?)");
  const insertStep = db.prepare(
    `INSERT INTO explanations (survey_id, position, case_id, case_title, modality, version, flawed_question)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  );
  db.transaction(() => {
    insertSurvey.run(id, condition, plan.map((s) => `${s.caseId}:${s.modality}:${s.version}`).join(" | "), new Date().toISOString(), simulated ? 1 : 0, demo ? 1 : 0);
    plan.forEach((s, i) => insertStep.run(id, i + 1, s.caseId, byId[s.caseId].title, s.modality, s.version, s.flawedQuestion));
  })();
  return { id, conditionId: condition, totalSteps: plan.length };
}

function getSurvey(id) {
  return db.prepare("SELECT * FROM surveys WHERE id = ?").get(id);
}

function getStep(surveyId, position) {
  return db.prepare("SELECT * FROM explanations WHERE survey_id = ? AND position = ?").get(surveyId, position);
}

// Where the participant should continue: the first step with fewer than 3 answers.
function progress(surveyId) {
  const steps = db
    .prepare(
      `SELECT e.position, e.done_at, COUNT(a.difficulty) answered
       FROM explanations e LEFT JOIN answers a ON a.survey_id = e.survey_id AND a.position = e.position
       WHERE e.survey_id = ? GROUP BY e.position ORDER BY e.position`
    )
    .all(surveyId);
  const next = steps.find((s) => s.answered < DIFFICULTIES.length);
  if (!next) return { totalSteps: steps.length, position: null };
  return {
    totalSteps: steps.length,
    position: next.position,
    phase: next.done_at ? "questions" : "explanation",
    answered: DIFFICULTIES.slice(0, next.answered),
  };
}

function caseFor(step) {
  const c = loadCases().cases.find((x) => x.id === step.case_id);
  if (!c) throw Object.assign(new Error(`Case ${step.case_id} no longer exists`), { status: 500 });
  return c;
}

function recordExplanation(surveyId, position, { ms, plays }) {
  db.prepare(
    `UPDATE explanations SET explanation_ms = ?, plays = ?, done_at = COALESCE(done_at, ?)
     WHERE survey_id = ? AND position = ?`
  ).run(Number.isFinite(ms) ? Math.round(ms) : null, Number.isFinite(plays) ? plays : null, new Date().toISOString(), surveyId, position);
}

const CONFIDENCE_LEVELS = 5;

function recordAnswer(surveyId, position, { difficulty, selected, confidence, ms }) {
  if (!Number.isInteger(confidence) || confidence < 1 || confidence > CONFIDENCE_LEVELS) {
    throw Object.assign(new Error(`Confidence must be 1–${CONFIDENCE_LEVELS}`), { status: 400 });
  }
  const step = getStep(surveyId, position);
  if (!step) throw Object.assign(new Error("Unknown step"), { status: 404 });
  if (!DIFFICULTIES.includes(difficulty)) throw Object.assign(new Error("Unknown question"), { status: 400 });
  const c = caseFor(step);
  const q = c.questions[difficulty];
  if (!q || !(selected in q.options)) throw Object.assign(new Error("Unknown option"), { status: 400 });

  const isTarget = difficulty === step.flawed_question;
  const choseFlaw = isTarget ? (selected === q.flawedAnswer ? 1 : 0) : null;
  db.prepare(
    `INSERT OR IGNORE INTO answers
     (survey_id, position, case_id, modality, version, difficulty, is_flaw_target, prompt, selected, selected_text,
      correct_option, flawed_option, is_correct, chose_flaw_option, adopted_flaw, confidence, response_ms, answered_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    surveyId, position, step.case_id, step.modality, step.version, difficulty, isTarget ? 1 : 0, q.prompt,
    selected, q.options[selected], q.correct, isTarget ? q.flawedAnswer : null, selected === q.correct ? 1 : 0,
    choseFlaw, isTarget && step.version === "flawed" ? choseFlaw : null, confidence,
    Number.isFinite(ms) ? Math.round(ms) : null, new Date().toISOString()
  );
}

function completeSurvey(surveyId) {
  if (progress(surveyId).position !== null) throw Object.assign(new Error("Not all questions are answered yet"), { status: 409 });
  db.prepare("UPDATE surveys SET completed_at = COALESCE(completed_at, ?) WHERE id = ?").run(new Date().toISOString(), surveyId);
}

module.exports = { ACTIVE_HOURS, createSurvey, getSurvey, getStep, progress, caseFor, recordExplanation, recordAnswer, completeSurvey };
