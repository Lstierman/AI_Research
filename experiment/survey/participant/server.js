// Participant frontend: every visit that presses Start creates a new survey.
// The page only ever gets the content of the current step; answer keys and the
// correct/flawed version stay on the server, and media are served under an opaque URL.

const path = require("path");
const fs = require("fs");
const express = require("express");
const S = require("../src/survey");
const { filePath } = require("../src/cases");

function createApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/common", express.static(path.join(__dirname, "..", "common")));

  // Look up the survey + step from the URL, or 404.
  function step(req) {
    const survey = S.getSurvey(req.params.id);
    if (!survey) throw Object.assign(new Error("Survey not found"), { status: 404 });
    if (survey.completed_at) throw Object.assign(new Error("This survey is already finished"), { status: 409 });
    if (req.params.pos === undefined) return { survey };
    const st = S.getStep(survey.id, Number(req.params.pos));
    if (!st) throw Object.assign(new Error("Step not found"), { status: 404 });
    return { survey, step: st };
  }

  const wrap = (fn) => (req, res) => {
    try {
      fn(req, res);
    } catch (e) {
      res.status(e.status || 500).json({ error: e.message });
    }
  };

  // Body { first, modality?, version? } starts a demo survey with that case first.
  app.post("/api/surveys", wrap((req, res) => {
    const { first, modality, version } = req.body || {};
    res.status(201).json(S.createSurvey({ demo: first ? { first, modality, version } : undefined }));
  }));

  app.get("/api/surveys/:id", wrap((req, res) => {
    const survey = S.getSurvey(req.params.id);
    if (!survey) return res.status(404).json({ error: "Survey not found" });
    res.json({ id: survey.id, completed: !!survey.completed_at, ...S.progress(survey.id) });
  }));

  app.get("/api/surveys/:id/steps/:pos", wrap((req, res) => {
    const { survey, step: st } = step(req);
    const c = S.caseFor(st);
    const file = filePath(st.case_id, st.modality, st.version);
    const available = fs.existsSync(file);
    res.json({
      position: st.position,
      modality: st.modality,
      title: c.title,
      context: c.context,
      mediaAvailable: available,
      text: st.modality === "text" && available ? fs.readFileSync(file, "utf8") : null,
      mediaUrl: st.modality !== "text" && available ? `/api/surveys/${survey.id}/steps/${st.position}/media` : null,
      questions: ["easy", "medium", "hard"].map((d) => ({ difficulty: d, prompt: c.questions[d].prompt, options: c.questions[d].options })),
    });
  }));

  // sendFile handles Range requests, which browsers need for seeking and replaying media.
  app.get("/api/surveys/:id/steps/:pos/media", wrap((req, res) => {
    const { step: st } = step(req);
    if (st.modality === "text") return res.status(404).end();
    res.sendFile(filePath(st.case_id, st.modality, st.version), { headers: { "Cache-Control": "no-store" } });
  }));

  app.post("/api/surveys/:id/steps/:pos/explanation", wrap((req, res) => {
    const { survey, step: st } = step(req);
    S.recordExplanation(survey.id, st.position, req.body || {});
    res.json({ ok: true });
  }));

  app.post("/api/surveys/:id/steps/:pos/answers", wrap((req, res) => {
    const { survey, step: st } = step(req);
    S.recordAnswer(survey.id, st.position, req.body || {});
    res.json({ ok: true });
  }));

  app.post("/api/surveys/:id/complete", wrap((req, res) => {
    const { survey } = step(req);
    S.completeSurvey(survey.id);
    res.json({ ok: true });
  }));

  return app;
}

// No host by default = all interfaces, IPv4 and IPv6, so another app already on the port is an error instead of silently sharing it.
function start(port = Number(process.env.PARTICIPANT_PORT) || 3000, host = process.env.PARTICIPANT_HOST) {
  return listen(createApp(), port, host, "Participant survey: ");
}

function listen(app, port, host, label) {
  const server = app.listen(port, host, () => console.log(`${label} http://localhost:${port}`));
  server.on("error", (e) => {
    if (e.code !== "EADDRINUSE") throw e;
    console.error(`Port ${port} is already in use (is the old app or another copy still running?). Close it and start again.`);
    process.exit(1);
  });
  return server;
}

if (require.main === module) start();
module.exports = { start, createApp, listen };
