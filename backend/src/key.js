// ANSWER KEY — kept on the server only (it is copied into Code.gs by `npm run build`).
// For every topic and question: the correct option, and the option the matching error version leads to.
// Source: "AI survey – 6 topics with decision questions and marked errors" (6 Nov 2026).
var ANSWER_KEY = {
  topic1: { easy: { correct: "B", error: "A" }, medium: { correct: "B", error: "A" }, hard: { correct: "B", error: "A" } },
  topic2: { easy: { correct: "B", error: "A" }, medium: { correct: "B", error: "A" }, hard: { correct: "C", error: "B" } },
  topic3: { easy: { correct: "B", error: "A" }, medium: { correct: "B", error: "A" }, hard: { correct: "B", error: "A" } },
  topic4: { easy: { correct: "A", error: "B" }, medium: { correct: "B", error: "C" }, hard: { correct: "A", error: "B" } },
  topic5: { easy: { correct: "B", error: "A" }, medium: { correct: "B", error: "A" }, hard: { correct: "B", error: "A" } },
  topic6: { easy: { correct: "C", error: "A" }, medium: { correct: "B", error: "A" }, hard: { correct: "B", error: "C" } },
};

if (typeof module !== "undefined" && module.exports) module.exports = { ANSWER_KEY: ANSWER_KEY };
