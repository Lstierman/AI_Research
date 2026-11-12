#!/usr/bin/env node
// Checks the design, the content, the generated files and the real backend code (on a mock Sheet).
//   npm test
const assert = require("assert");
const path = require("path");
const { execFileSync } = require("child_process");
const D = require("../docs/js/design.js");
const C = require("../docs/js/content.js");
const { ANSWER_KEY } = require("../backend/src/key.js");
const { loadBackend } = require("./appsscript-mock");

let n = 0;
function test(name, fn) {
  try { fn(); n++; console.log("  ✓ " + name); }
  catch (e) { console.error("  ✗ " + name + "\n    " + e.message); process.exitCode = 1; }
}

console.log("Generated files");
test("backend/Code.gs and stimuli/ are up to date", () => {
  execFileSync(process.execPath, [path.join(__dirname, "build.js"), "--check"], { stdio: "pipe" });
});

console.log("Design");
test("72 distinct conditions", () => {
  assert.strictEqual(D.CONDITIONS.length, 72);
  assert.strictEqual(new Set(D.CONDITIONS.map((c) => JSON.stringify(c.items))).size, 72);
});
test("every topic × variant × form cell appears exactly 6 times", () => {
  const cell = {};
  D.CONDITIONS.forEach((c) => c.items.forEach((it) => { const k = `${it.topic}|${it.variant}|${it.form}`; cell[k] = (cell[k] || 0) + 1; }));
  assert.strictEqual(Object.keys(cell).length, 72);
  Object.values(cell).forEach((v) => assert.strictEqual(v, 6));
});
test("every participant: each form twice, every variant at least once", () => {
  D.CONDITIONS.forEach((c) => {
    const f = {}, v = {};
    c.items.forEach((it) => { f[it.form] = (f[it.form] || 0) + 1; v[it.variant] = (v[it.variant] || 0) + 1; });
    D.FORMS.forEach((x) => assert.strictEqual(f[x], 2, c.id));
    D.VARIANTS.forEach((x) => assert.ok(v[x] >= 1, c.id));
  });
});

console.log("Content");
test("6 topics, ids match design and answer key", () => {
  assert.deepStrictEqual(C.topics.map((t) => t.id), D.TOPIC_IDS);
  assert.deepStrictEqual(Object.keys(ANSWER_KEY), D.TOPIC_IDS);
});
test("each topic: 3 questions with options A–D; key valid; error answer differs from correct", () => {
  C.topics.forEach((t) => ["easy", "medium", "hard"].forEach((q) => {
    assert.deepStrictEqual(Object.keys(t.questions[q].options), ["A", "B", "C", "D"], t.id + q);
    const k = ANSWER_KEY[t.id][q];
    assert.ok(/^[A-D]$/.test(k.correct) && /^[A-D]$/.test(k.error) && k.correct !== k.error, t.id + q);
  }));
});
test("each error variant differs from the correct text, and only where marked", () => {
  C.topics.forEach((t) => {
    const correct = C.explanationParagraphs(t, "correct").join("\n");
    ["error_easy", "error_medium", "error_hard"].forEach((v) => {
      assert.notStrictEqual(C.explanationParagraphs(t, v).join("\n"), correct, t.id + v);
      assert.ok(C.errorChanges(t, v).length >= 1, t.id + v);
    });
  });
});

console.log("Backend (real Code.gs on a mock Google Sheet)");
const B = loadBackend();
function answerAll(pid, plan, choose) {
  plan.forEach((step, i) => {
    const answers = ["easy", "medium", "hard"].map((q) => ({ question: q, answer: choose(step, q), certainty: 1 + ((i + q.length) % 5), ms: 1000, optionOrder: "ABCD" }));
    const r = B.post({ action: "topic", pid, position: i + 1, explanationMs: 5000, plays: 1, answers });
    assert.ok(r.ok, JSON.stringify(r));
  });
}
const correctChooser = (step, q) => ANSWER_KEY[step.topic][q].correct;

test("ping and key protection", () => {
  assert.ok(B.get({ action: "ping" }).ok);
  assert.ok(B.get({ action: "data", key: "wrong" }).error);
  assert.ok(Array.isArray(B.get({ action: "data", key: B.key }).participants));
});

test("144 participants (some starting concurrently) → every condition exactly twice", () => {
  const open = [];
  for (let i = 0; i < 144; i++) {
    const s = B.post({ action: "start", device: "desktop" });
    assert.ok(s.pid && s.condition && s.plan.length === 6, JSON.stringify(s));
    open.push(s);
    // finish in batches of 5, so several participants are "in progress" at the same time
    if (open.length === 5 || i === 143) {
      open.splice(0).forEach((p) => {
        answerAll(p.pid, p.plan, correctChooser);
        assert.ok(B.post({ action: "finish", pid: p.pid, extra: [{ id: "extra1", prompt: "x", answer: "A", certainty: 3 }], totalMs: 600000 }).ok);
      });
    }
    if (i === 71) {
      const counts = {};
      B.get({ action: "data", key: B.key }).participants.forEach((p) => (counts[p.condition] = (counts[p.condition] || 0) + 1));
      assert.strictEqual(Object.keys(counts).length, 72, "after 72 all conditions once");
      Object.values(counts).forEach((v) => assert.strictEqual(v, 1));
    }
  }
  const counts = {};
  B.get({ action: "data", key: B.key }).participants.forEach((p) => (counts[p.condition] = (counts[p.condition] || 0) + 1));
  Object.values(counts).forEach((v) => assert.strictEqual(v, 2));
  assert.strictEqual(Object.keys(counts).length, 72);
});

test("test participants don't count towards the balance", () => {
  const before = B.get({ action: "data", key: B.key }).participants.length;
  const t = B.post({ action: "start", test: true });
  const real = B.post({ action: "start" });
  // the real one must still go to a least-filled condition (all have 2 → any; then that one has 3)
  const data = B.get({ action: "data", key: B.key });
  assert.strictEqual(data.participants.length, before + 2);
  assert.strictEqual(data.participants.find((p) => p.participant_id === t.pid).test, 1);
  const next = B.post({ action: "start" });
  assert.notStrictEqual(next.condition, real.condition, "next real participant gets a different (least-filled) condition");
});

test("scoring: adopting the error, idempotent retries, finish requires all topics", () => {
  const s = B.post({ action: "start" });
  assert.ok(B.post({ action: "finish", pid: s.pid }).error, "cannot finish early");
  // choose the error answer on every question
  answerAll(s.pid, s.plan, (step, q) => ANSWER_KEY[step.topic][q].error);
  const dup = B.post({ action: "topic", pid: s.pid, position: 1, answers: [{ question: "easy", answer: "A", certainty: 3 }, { question: "medium", answer: "A", certainty: 3 }, { question: "hard", answer: "A", certainty: 3 }] });
  assert.ok(dup.duplicate);
  const rows = B.get({ action: "data", key: B.key }).answers.filter((a) => a.participant_id === s.pid);
  assert.strictEqual(rows.length, 18);
  rows.forEach((r) => {
    assert.strictEqual(r.is_correct, 0);
    assert.strictEqual(r.chose_error_answer, 1);
    const target = r.variant !== "correct" && r.variant === "error_" + r.question;
    assert.strictEqual(r.is_error_target, target ? 1 : 0);
    assert.strictEqual(r.adopted_error, target ? 1 : "");
  });
  // the stored topic/variant/form come from the server-side plan, not from the client
  rows.forEach((r) => {
    const step = s.plan[r.position - 1];
    assert.deepStrictEqual([r.topic, r.variant, r.form], [step.topic, step.variant, step.form]);
  });
});

test("rejects bad input", () => {
  const s = B.post({ action: "start" });
  assert.ok(B.post({ action: "topic", pid: "nope", position: 1, answers: [] }).error);
  assert.ok(B.post({ action: "topic", pid: s.pid, position: 7, answers: [] }).error);
  assert.ok(B.post({ action: "topic", pid: s.pid, position: 1, answers: [{ question: "easy", answer: "E", certainty: 3 }] }).error);
  assert.ok(B.post({ action: "topic", pid: s.pid, position: 1, answers: ["easy", "medium", "hard"].map((q) => ({ question: q, answer: "A", certainty: 9 })) }).error);
  assert.ok(B.post({ action: "nope" }).error);
});

test("purgeTest removes test participants and their answers only", () => {
  const t = B.post({ action: "start", test: true });
  answerAll(t.pid, t.plan, correctChooser);
  B.post({ action: "finish", pid: t.pid, extra: [{ id: "extra1", answer: "B" }] });
  assert.ok(B.post({ action: "purgeTest", key: "wrong" }).error);
  const r = B.post({ action: "purgeTest", key: B.key });
  assert.ok(r.ok && r.deletedParticipants >= 2);
  const d = B.get({ action: "data", key: B.key });
  assert.ok(d.participants.every((p) => !p.test));
  assert.ok(d.answers.every((p) => !p.test));
  assert.ok(d.extra.every((p) => !p.test));
});

console.log(process.exitCode ? "\nSOME TESTS FAILED" : `\nAll ${n} tests passed`);
