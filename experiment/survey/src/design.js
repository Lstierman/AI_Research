// Counterbalancing: which case each participant sees in which modality, and which version.
//
// The 6 cases form 3 pairs by the question their error targets (easy / medium / hard).
// Every participant gets 3 flawed + 3 correct explanations, one flawed and one correct case per pair,
// and every modality twice: once flawed, once correct.
//
// Condition = P × S × F = 6 × 2 × 2 = 24 distinct conditions, e.g. "P3-S1-F2":
//   P (1–6): which modality explains the flawed easy / medium / hard case (one of the 6 permutations)
//   S (1–2): which correct case shares a modality with each flawed case: the correct case of pair k + S
//   F (1–2): which case of each pair is the flawed one (F1: the first case, F2: the second)
// Over every block of 24 participants each case appears exactly 4 times in every modality × version.
// The 6 explanations are shown in random order; the order is stored with the survey.

const { DIFFICULTIES } = require("./cases");

const MODALITY_PERMS = [
  ["text", "voice", "video"],
  ["text", "video", "voice"],
  ["voice", "text", "video"],
  ["voice", "video", "text"],
  ["video", "text", "voice"],
  ["video", "voice", "text"],
];

const CONDITIONS = [];
for (let p = 0; p < 6; p++) for (let s = 1; s <= 2; s++) for (let f = 0; f < 2; f++) CONDITIONS.push({ id: `P${p + 1}-S${s}-F${f + 1}`, p, s, f });

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// The 6 steps [{ caseId, modality, version, flawedQuestion }] of a condition, before shuffling.
function conditionSteps(cases, conditionId) {
  const cond = CONDITIONS.find((c) => c.id === conditionId);
  if (!cond) throw new Error(`Unknown condition ${conditionId}`);
  const pairs = DIFFICULTIES.map((d) => cases.filter((c) => c.flawedQuestion === d));
  const steps = [];
  for (let k = 0; k < 3; k++) {
    const modality = MODALITY_PERMS[cond.p][k];
    const flawed = pairs[k][cond.f];
    const correct = pairs[(k + cond.s) % 3][1 - cond.f];
    steps.push({ caseId: flawed.id, modality, version: "flawed", flawedQuestion: flawed.flawedQuestion });
    steps.push({ caseId: correct.id, modality, version: "correct", flawedQuestion: correct.flawedQuestion });
  }
  return steps;
}

// Returns the 6 steps in presentation order (random order within the condition).
// With firstCaseId (demo), that case is moved to the front.
function buildPlan(cases, conditionId, firstCaseId) {
  const steps = shuffle(conditionSteps(cases, conditionId));
  const i = steps.findIndex((s) => s.caseId === firstCaseId);
  if (i > 0) steps.unshift(...steps.splice(i, 1));
  return steps;
}

// Conditions in which a case is shown in the given modality / version (either may be omitted). For demos.
function conditionsShowing(cases, caseId, modality, version) {
  return CONDITIONS.filter((c) =>
    conditionSteps(cases, c.id).some((s) => s.caseId === caseId && (!modality || s.modality === modality) && (!version || s.version === version))
  );
}

// Even presentation: the condition with the fewest real surveys that are finished or still in progress.
function nextConditionId(counts, candidates = CONDITIONS) {
  const min = Math.min(...candidates.map((c) => counts[c.id] || 0));
  const least = candidates.filter((c) => (counts[c.id] || 0) === min);
  return least[Math.floor(Math.random() * least.length)].id;
}

module.exports = { CONDITIONS, conditionSteps, conditionsShowing, buildPlan, nextConditionId };
