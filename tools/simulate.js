#!/usr/bin/env node
// Fills the LOCAL data file (npm run local) with fake participants so you can see the dashboard working.
// They are marked as test data: tick "Include test data" in the dashboard, and remove them with
// "Delete all test data". Never touches your Google Sheet.
//   npm run simulate -- 72
const path = require("path");
const { loadBackend } = require("./appsscript-mock");
const { ANSWER_KEY } = require("../backend/src/key.js");
const D = require("../docs/js/design.js");

const N = Number(process.argv[2]) || 72;
const B = loadBackend({ dataFile: process.env.DATA_FILE || path.join(__dirname, "..", "local-data", "sheets.json") });
const ADOPT = { text: 0.3, audio: 0.42, video: 0.5 }; // made-up effect, just for the demo
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i < N; i++) {
  const s = B.post({ action: "start", test: true, device: Math.random() < 0.9 ? "desktop" : "phone" });
  s.plan.forEach((st, k) => {
    const answers = ["easy", "medium", "hard"].map((q) => {
      const key = ANSWER_KEY[st.topic][q];
      const target = st.variant === "error_" + q;
      let ans;
      if (target && Math.random() < ADOPT[st.form]) ans = key.error;
      else if (Math.random() < 0.78) ans = key.correct;
      else ans = pick(["A", "B", "C", "D"].filter((x) => x !== key.correct));
      const right = ans === key.correct;
      const certainty = Math.max(1, Math.min(5, Math.round((right ? 3.8 : 3.2) + (st.form === "video" ? 0.3 : 0) + (Math.random() - 0.5) * 2.5)));
      return { question: q, answer: ans, certainty, ms: 8000 + Math.random() * 30000, optionOrder: "ABCD" };
    });
    B.post({ action: "topic", pid: s.pid, position: k + 1, explanationMs: 40000 + Math.random() * 60000, plays: st.form === "text" ? 0 : 1 + (Math.random() < 0.2), answers });
  });
  if (Math.random() < 0.95) {
    B.post({ action: "finish", pid: s.pid, totalMs: (18 + Math.random() * 14) * 60000, comments: Math.random() < 0.1 ? "Simulated comment" : "",
      extra: ["extra1", "extra2", "extra3"].map((id) => ({ id, prompt: "[" + id + "]", answer: pick(["Option A", "Option B", "Option C", "Option D"]), certainty: 1 + Math.floor(Math.random() * 5) })) });
  }
}
console.log(`Added ${N} simulated (test) participants. Dashboard key: ${B.key}`);
