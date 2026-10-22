// Adds fake finished surveys (flagged simulated = 1) so the dashboard has something to show.
//   node scripts/simulate.js 48
// Remove them with "Delete simulated" on the dashboard. The effects below are made up.

const S = require("../src/survey");
const { db } = require("../src/db");
const { loadCases } = require("../src/cases");
const { CONDITIONS } = require("../src/design");

const n = Number(process.argv[2]) || 24;
const P_CORRECT = { easy: 0.85, medium: 0.7, hard: 0.55 };
const P_ADOPT = { text: 0.3, voice: 0.45, video: 0.55 };
const pick = (xs) => xs[Math.floor(Math.random() * xs.length)];
const { cases } = loadCases();
const byId = Object.fromEntries(cases.map((c) => [c.id, c]));

for (let i = 0; i < n; i++) {
  // Simulated surveys don't count towards the balance, so cycle through the conditions explicitly.
  const { id } = S.createSurvey({ simulated: true, conditionId: CONDITIONS[i % CONDITIONS.length].id });
  const steps = db.prepare("SELECT * FROM explanations WHERE survey_id = ? ORDER BY position").all(id);
  for (const st of steps) {
    const isText = st.modality === "text";
    S.recordExplanation(id, st.position, { ms: 40000 + Math.random() * 40000, plays: isText ? null : 1 + (Math.random() < 0.2 ? 1 : 0) });
    for (const d of ["easy", "medium", "hard"]) {
      const q = byId[st.case_id].questions[d];
      const keys = Object.keys(q.options);
      let selected;
      if (st.version === "flawed" && d === st.flawed_question && Math.random() < P_ADOPT[st.modality]) selected = q.flawedAnswer;
      else selected = Math.random() < P_CORRECT[d] ? q.correct : pick(keys.filter((k) => k !== q.correct));
      const confidence = Math.min(5, Math.max(1, Math.round((selected === q.correct ? 3.6 : 3) + (Math.random() - 0.5) * 3)));
      S.recordAnswer(id, st.position, { difficulty: d, selected, confidence, ms: 5000 + Math.random() * 25000 });
    }
  }
  S.completeSurvey(id);
}
console.log(`Added ${n} simulated surveys.`);
