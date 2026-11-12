/*
 * SURVEY SETTINGS — the only file you normally need to edit before launch.
 */
window.SURVEY_CONFIG = {
  // ── Backend ────────────────────────────────────────────────────────────────
  // Paste the "Web app URL" you get when you deploy backend/Code.gs (see LAUNCH.md), e.g.
  // "https://script.google.com/macros/s/AKfycb.../exec"
  // Leave empty when running locally with `npm run local` (it then uses /api automatically).
  backendUrl: "",

  // ── Study texts ────────────────────────────────────────────────────────────
  studyTitle: "Learning from an AI assistant",
  estimatedMinutes: 25,
  contactName: "Leander Stierman",
  contactEmail: "", // TODO before launch: shown on the consent and thank-you pages
  institution: "Ghent University — AI Research Seminar 2026",

  // ── Media ──────────────────────────────────────────────────────────────────
  // Put the files in docs/media/audio and docs/media/video, named <topic>_<variant>.<ext>,
  // e.g. topic1_correct.mp3, topic1_error_easy.mp4 (full list: open check.html).
  audioExt: "mp3",
  videoExt: "mp4",
  // Participants can only continue after the audio/video has played to the end once.
  requireFullPlay: true,
  // Text explanations: minimum seconds per word before "Continue" unlocks (0 = no minimum).
  // 0.12 s/word ≈ 40 s for a 330-word explanation.
  textMinSecondsPerWord: 0.12,

  // ── Questions ──────────────────────────────────────────────────────────────
  // Shuffle the order of the A–D options per participant (the stored answer is always the original letter).
  // Recommended: in the source document B is correct for most questions.
  shuffleOptions: true,
  certaintyLabels: [
    "1 — Not sure at all (guessing)",
    "2 — Slightly sure",
    "3 — Moderately sure",
    "4 — Very sure",
    "5 — Completely sure",
  ],

  // ── Extra questions after the 6 topics ────────────────────────────────────
  // TODO: replace the placeholders. Types:
  //   "choice" – options: ["...", "..."]         (stored as the option text)
  //   "scale"  – options: ["1 — ...", ..., "5 — ..."] (stored as the option text)
  //   "text"   – free text
  // withCertainty: true adds the same 5-level certainty question underneath.
  // required: false lets participants skip it.
  extraQuestions: [
    {
      id: "extra1",
      type: "choice",
      prompt: "[Extra question 1 — to be decided]",
      options: ["Option A", "Option B", "Option C", "Option D"],
      withCertainty: true,
      required: true,
    },
    {
      id: "extra2",
      type: "choice",
      prompt: "[Extra question 2 — to be decided]",
      options: ["Option A", "Option B", "Option C", "Option D"],
      withCertainty: true,
      required: true,
    },
    {
      id: "extra3",
      type: "choice",
      prompt: "[Extra question 3 — to be decided]",
      options: ["Option A", "Option B", "Option C", "Option D"],
      withCertainty: true,
      required: true,
    },
  ],

  // ── Devices ────────────────────────────────────────────────────────────────
  // true = phones are refused (as in experiment-design.md); false = phones only get a warning.
  blockPhones: false,
};
