// Loads and validates the case folders in ../cases.
// Each folder holds case.json plus one explanation file per modality × version.
// Cases are re-read on every call, so edits show up without restarting the servers.

const fs = require("fs");
const path = require("path");

const CASES_DIR = path.join(__dirname, "..", "cases");
const MODALITIES = ["text", "voice", "video"];
const VERSIONS = ["correct", "flawed"];
const DIFFICULTIES = ["easy", "medium", "hard"];
const EXT = { text: "txt", voice: "mp3", video: "mp4" };

function fileName(modality, version) {
  return `${modality}_${version}.${EXT[modality]}`;
}

function filePath(caseId, modality, version) {
  return path.join(CASES_DIR, caseId, fileName(modality, version));
}

function validate(id, c) {
  const errors = [];
  if (!c.title) errors.push(`${id}: "title" is missing`);
  if (!DIFFICULTIES.includes(c.flawedQuestion)) errors.push(`${id}: "flawedQuestion" must be easy, medium or hard`);
  for (const d of DIFFICULTIES) {
    const q = c.questions && c.questions[d];
    if (!q) {
      errors.push(`${id}: question "${d}" is missing`);
      continue;
    }
    const keys = Object.keys(q.options || {});
    if (keys.length < 2) errors.push(`${id}/${d}: needs at least 2 options`);
    if (!keys.includes(q.correct)) errors.push(`${id}/${d}: "correct" must be one of ${keys.join(", ")}`);
    if (d === c.flawedQuestion) {
      if (!keys.includes(q.flawedAnswer)) errors.push(`${id}/${d}: "flawedAnswer" must be one of ${keys.join(", ")}`);
      else if (q.flawedAnswer === q.correct) errors.push(`${id}/${d}: "flawedAnswer" must differ from "correct"`);
    }
  }
  return errors;
}

// Returns { cases, errors }. A case with errors is still returned so the dashboard can show it.
function loadCases() {
  const errors = [];
  let dirs = [];
  try {
    dirs = fs
      .readdirSync(CASES_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    errors.push(`Cases folder not found: ${CASES_DIR}`);
  }

  const cases = dirs.map((id) => {
    let c = {};
    try {
      c = JSON.parse(fs.readFileSync(path.join(CASES_DIR, id, "case.json"), "utf8"));
    } catch (e) {
      errors.push(`${id}: case.json could not be read (${e.message})`);
    }
    errors.push(...(c.questions || c.title ? validate(id, c) : []));
    const files = {};
    for (const m of MODALITIES) for (const v of VERSIONS) files[`${m}_${v}`] = fs.existsSync(filePath(id, m, v));
    return { id, title: c.title || id, context: c.context || "", flawedQuestion: c.flawedQuestion, questions: c.questions || {}, files };
  });

  if (cases.length !== 6) errors.push(`Expected 6 case folders, found ${cases.length}`);
  for (const d of DIFFICULTIES) {
    const n = cases.filter((c) => c.flawedQuestion === d).length;
    if (n !== 2) errors.push(`Expected 2 cases with flawedQuestion "${d}", found ${n}`);
  }
  return { cases, errors };
}

module.exports = { CASES_DIR, MODALITIES, VERSIONS, DIFFICULTIES, fileName, filePath, loadCases };
