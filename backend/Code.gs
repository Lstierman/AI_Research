/**
 * @OnlyCurrentDoc  (limits this script to the one Google Sheet it is attached to)
 */
// GENERATED FILE — do not edit here. Edit the source files and run `npm run build`.
// Paste this whole file into Extensions → Apps Script of your Google Sheet (see LAUNCH.md).

// ═════ EXPERIMENTAL DESIGN (copied from docs/js/design.js) ═════
/*
 * EXPERIMENTAL DESIGN — the 72 conditions ("permutations").
 *
 * Every participant sees all 6 topics. For each topic they get one of 4 variants
 * (correct, error_easy, error_medium, error_hard) in one of 3 forms (text, audio, video).
 * That gives 6 × 4 × 3 = 72 topic-variant-form combinations ("cells").
 *
 * A condition fixes the variant and form of all 6 topics for one participant. There are 72
 * conditions, built so that:
 *   1. Across the 72 conditions, every cell (topic × variant × form) appears exactly 6 times.
 *      So every complete round of 72 participants gives 6 observations of every cell,
 *      and every topic is seen 18 times in each variant and 24 times in each form.
 *   2. Every participant sees each form exactly twice (2 text, 2 audio, 2 video).
 *   3. Every participant sees each error type at least once (easy, medium and hard)
 *      and the correct version once or twice; two variants occur twice, two once.
 *   4. Which topics share a form / variant differs between conditions (no fixed pairs).
 *
 * Construction: condition k (0..71) = (j, r, c) with j = floor(k / 12), r = k % 4, c = floor(k / 4) % 3.
 * Topic t gets slot s = SLOTS[j][t]; variant = VARIANTS[(r + s) % 4], form = FORMS[(c + s) % 3].
 * SLOTS is a 6×6 Latin square chosen so every pair of topics shares a form in at least one j.
 *
 * Assignment (done by the backend): each new participant gets a random condition among those with
 * the fewest participants so far (finished + still in progress). So after 72 participants every
 * condition has exactly one, after 144 exactly two, and so on. Topic order is shuffled per participant.
 */
(function (root) {
  var TOPIC_IDS = ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6"];
  var VARIANTS = ["correct", "error_easy", "error_medium", "error_hard"];
  var FORMS = ["text", "audio", "video"];
  var SLOTS = [
    [2, 4, 3, 0, 5, 1],
    [0, 3, 2, 1, 4, 5],
    [3, 0, 5, 4, 1, 2],
    [1, 2, 0, 5, 3, 4],
    [4, 5, 1, 3, 2, 0],
    [5, 1, 4, 2, 0, 3],
  ];

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  var CONDITIONS = [];
  for (var k = 0; k < 72; k++) {
    var j = Math.floor(k / 12), r = k % 4, c = Math.floor(k / 4) % 3;
    var items = [];
    for (var t = 0; t < 6; t++) {
      var s = SLOTS[j][t];
      items.push({ topic: TOPIC_IDS[t], variant: VARIANTS[(r + s) % 4], form: FORMS[(c + s) % 3] });
    }
    CONDITIONS.push({ id: "C" + pad(k + 1), items: items });
  }

  function conditionById(id) {
    for (var i = 0; i < CONDITIONS.length; i++) if (CONDITIONS[i].id === id) return CONDITIONS[i];
    return null;
  }

  function shuffle(arr, rand) {
    rand = rand || Math.random;
    for (var i = arr.length - 1; i > 0; i--) {
      var x = Math.floor(rand() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[x]; arr[x] = tmp;
    }
    return arr;
  }

  // The 6 items of a condition in a random presentation order.
  function buildPlan(conditionId, rand) {
    var cond = conditionById(conditionId);
    if (!cond) throw new Error("Unknown condition " + conditionId);
    return shuffle(cond.items.map(function (it) { return { topic: it.topic, variant: it.variant, form: it.form }; }), rand);
  }

  // counts: { C01: 2, C02: 1, ... }. Returns a random id among the least-filled conditions.
  function pickCondition(counts, rand) {
    rand = rand || Math.random;
    var min = Infinity, least = [];
    CONDITIONS.forEach(function (c) {
      var n = counts[c.id] || 0;
      if (n < min) { min = n; least = [c.id]; }
      else if (n === min) least.push(c.id);
    });
    return least[Math.floor(rand() * least.length)];
  }

  var DESIGN = {
    TOPIC_IDS: TOPIC_IDS, VARIANTS: VARIANTS, FORMS: FORMS, SLOTS: SLOTS, CONDITIONS: CONDITIONS,
    conditionById: conditionById, buildPlan: buildPlan, pickCondition: pickCondition, shuffle: shuffle,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = DESIGN;
  else root.SURVEY_DESIGN = DESIGN;
})(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : this);

// ═════ ANSWER KEY (copied from backend/src/key.js) ═════
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

// ═════ SERVER (copied from backend/src/server.js) ═════
// ─────────────────────────────────────────────────────────────────────────────
// BACKEND (Google Apps Script web app, bound to a Google Sheet).
//
// Stores every response in the Sheet and assigns each new participant one of the 72 conditions:
// a random one among the conditions with the fewest participants so far, so the conditions fill
// up evenly (after 72 participants: 1 each; after 144: 2 each; ...).
//
// Sheets (created automatically by setup()):
//   Participants – one row per participant
//   Answers      – one row per participant × topic × question (18 per finished participant), scored
//   Extra        – one row per participant × extra question
//
// Endpoints (all JSON):
//   POST {action:"start", test, device, screen, ua}                 → {pid, condition, plan}
//   POST {action:"topic", pid, position, explanationMs, plays, mediaError, answers:[...]} → {ok}
//   POST {action:"finish", pid, extra:[...], comments, totalMs}     → {ok}
//   GET  ?action=data&key=ADMIN_KEY                                 → everything, for the dashboard
//   POST {action:"purgeTest", key}                                  → deletes test participants
//   GET  ?action=ping                                               → {ok}
// POST bodies are sent as text/plain so browsers don't need a CORS preflight.
// ─────────────────────────────────────────────────────────────────────────────

var BACKEND_VERSION = "1.0.0";

// Unfinished participants younger than this keep their condition "reserved".
// After that, their slot is given to someone else (they can still finish; their data is kept).
var ACTIVE_HOURS = 2;

var SHEETS = {
  Participants: [
    "participant_id", "condition", "status", "started_at", "completed_at", "last_position", "topic_order",
    "plan_json", "test", "device", "screen", "user_agent", "total_minutes", "comments",
  ],
  Answers: [
    "received_at", "participant_id", "condition", "test", "position", "topic", "form", "variant", "error_question",
    "question", "is_error_target", "answer", "correct_answer", "error_answer", "is_correct", "chose_error_answer",
    "adopted_error", "certainty", "response_ms", "explanation_ms", "plays", "media_error", "option_order",
  ],
  Extra: ["received_at", "participant_id", "condition", "test", "question_id", "prompt", "answer", "certainty", "response_ms"],
};

var ERROR_QUESTION = { correct: "", error_easy: "easy", error_medium: "medium", error_hard: "hard" };
var QUESTIONS = ["easy", "medium", "hard"];

// ─── Setup ───────────────────────────────────────────────────────────────────

// Run once from the Apps Script editor (select "setup" → Run). Creates the sheets and the admin key.
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(SHEETS).forEach(function (name) { getSheet_(ss, name); });
  var key = adminKey_();
  var info = getSheet_(ss, "Info", ["setting", "value"]);
  var rows = info.getDataRange().getValues();
  var found = false;
  for (var i = 1; i < rows.length; i++) if (rows[i][0] === "dashboard_key") { info.getRange(i + 1, 2).setValue(key); found = true; }
  if (!found) info.appendRow(["dashboard_key", key]);
  Logger.log("Setup done. Dashboard key: " + key);
  return key;
}

function adminKey_() {
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty("ADMIN_KEY");
  if (!key) {
    key = Utilities.getUuid().replace(/-/g, "").slice(0, 16);
    props.setProperty("ADMIN_KEY", key);
  }
  return key;
}

function getSheet_(ss, name, headers) {
  headers = headers || SHEETS[name];
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
  } else if (sh.getLastRow() === 0) {
    sh.appendRow(headers);
    sh.setFrozenRows(1);
  }
  return sh;
}

// ─── HTTP entry points ───────────────────────────────────────────────────────

function doGet(e) {
  var p = (e && e.parameter) || {};
  return respond_(function () {
    if (p.action === "ping") return { ok: true, version: BACKEND_VERSION };
    if (p.action === "data") {
      requireKey_(p.key);
      return getData_();
    }
    throw clientError_("Unknown action");
  });
}

function doPost(e) {
  return respond_(function () {
    var body;
    try { body = JSON.parse((e && e.postData && e.postData.contents) || "{}"); }
    catch (err) { throw clientError_("Body is not valid JSON"); }
    switch (body.action) {
      case "start": return startParticipant_(body);
      case "topic": return saveTopic_(body);
      case "finish": return finishParticipant_(body);
      case "purgeTest": requireKey_(body.key); return purgeTest_();
      default: throw clientError_("Unknown action");
    }
  });
}

function respond_(fn) {
  var out;
  try { out = fn(); }
  catch (err) { out = { error: String(err && err.message ? err.message : err), status: (err && err.status) || 500 }; }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

function clientError_(msg) { var e = new Error(msg); e.status = 400; return e; }

function requireKey_(key) {
  if (!key || String(key) !== adminKey_()) { var e = new Error("Wrong dashboard key"); e.status = 403; throw e; }
}

function withLock_(fn) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try { return fn(); }
  finally { lock.releaseLock(); }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function nowIso_() { return new Date().toISOString(); }

function iso_(v) {
  if (v instanceof Date) return v.toISOString();
  return v === null || v === undefined ? "" : String(v);
}

function truthy_(v) { return v === true || v === 1 || v === "1" || v === "TRUE" || v === "true"; }

// Rows of a sheet as objects keyed by header.
function readObjects_(sh) {
  var values = sh.getDataRange().getValues();
  if (values.length < 2) return [];
  var head = values[0];
  var out = [];
  for (var i = 1; i < values.length; i++) {
    var o = {};
    for (var c = 0; c < head.length; c++) o[head[c]] = values[i][c] instanceof Date ? values[i][c].toISOString() : values[i][c];
    out.push(o);
  }
  return out;
}

function rowFrom_(name, obj) {
  return SHEETS[name].map(function (h) { return obj[h] === undefined || obj[h] === null ? "" : obj[h]; });
}

function clampStr_(v, n) { return String(v === undefined || v === null ? "" : v).slice(0, n); }

function intOrBlank_(v) { var n = Number(v); return isFinite(n) && v !== "" && v !== null ? Math.round(n) : ""; }

// Finds a participant: returns { sheet, row (1-based), obj } or null.
function findParticipant_(ss, pid) {
  var sh = getSheet_(ss, "Participants");
  var values = sh.getDataRange().getValues();
  var head = values[0];
  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === pid) {
      var o = {};
      for (var c = 0; c < head.length; c++) o[head[c]] = values[i][c];
      return { sheet: sh, row: i + 1, obj: o, head: head };
    }
  }
  return null;
}

function setCell_(found, column, value) {
  var c = found.head.indexOf(column);
  if (c >= 0) found.sheet.getRange(found.row, c + 1).setValue(value);
}

// Real (non-test) participants that count towards each condition: finished, or started recently.
function conditionCounts_(participants) {
  var cutoff = Date.now() - ACTIVE_HOURS * 3600 * 1000;
  var counts = {};
  participants.forEach(function (p) {
    if (truthy_(p.test)) return;
    var active = p.status === "completed" || new Date(iso_(p.started_at)).getTime() > cutoff;
    if (active) counts[p.condition] = (counts[p.condition] || 0) + 1;
  });
  return counts;
}

// ─── Actions ─────────────────────────────────────────────────────────────────

function startParticipant_(body) {
  return withLock_(function () {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = getSheet_(ss, "Participants");
    var test = truthy_(body.test);
    var participants = readObjects_(sh);
    var condition = SURVEY_DESIGN.pickCondition(test ? {} : conditionCounts_(participants));
    var plan = SURVEY_DESIGN.buildPlan(condition);
    var pid = "P-" + Utilities.getUuid().replace(/-/g, "").slice(0, 10).toUpperCase();
    sh.appendRow(rowFrom_("Participants", {
      participant_id: pid,
      condition: condition,
      status: "started",
      started_at: nowIso_(),
      last_position: 0,
      topic_order: plan.map(function (s) { return s.topic.replace("topic", "T") + ":" + s.variant + ":" + s.form; }).join(" | "),
      plan_json: JSON.stringify(plan),
      test: test ? 1 : 0,
      device: clampStr_(body.device, 20),
      screen: clampStr_(body.screen, 20),
      user_agent: clampStr_(body.ua, 200),
    }));
    return { pid: pid, condition: condition, plan: plan };
  });
}

function scoreAnswer_(topic, variant, question, answer) {
  var key = ANSWER_KEY[topic] && ANSWER_KEY[topic][question];
  if (!key) throw clientError_("No answer key for " + topic + "/" + question);
  var target = ERROR_QUESTION[variant] === question;
  var choseError = answer === key.error ? 1 : 0;
  return {
    correct_answer: key.correct,
    error_answer: key.error,
    is_error_target: target ? 1 : 0,
    is_correct: answer === key.correct ? 1 : 0,
    chose_error_answer: choseError,
    adopted_error: target ? choseError : "",
  };
}

function saveTopic_(body) {
  return withLock_(function () {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var found = findParticipant_(ss, body.pid);
    if (!found) throw clientError_("Unknown participant");
    var position = Number(body.position);
    var plan = JSON.parse(found.obj.plan_json);
    if (!(position >= 1 && position <= plan.length)) throw clientError_("Bad position");
    if (Number(found.obj.last_position) >= position) return { ok: true, duplicate: true }; // retry of a saved topic

    var step = plan[position - 1];
    var answers = body.answers || [];
    var byQ = {};
    answers.forEach(function (a) { byQ[a.question] = a; });
    var rows = QUESTIONS.map(function (q) {
      var a = byQ[q];
      if (!a || !/^[A-D]$/.test(String(a.answer))) throw clientError_("Missing or invalid answer for " + q);
      var cert = Number(a.certainty);
      if (!(cert >= 1 && cert <= 5)) throw clientError_("Certainty must be 1–5");
      var s = scoreAnswer_(step.topic, step.variant, q, String(a.answer));
      return rowFrom_("Answers", {
        received_at: nowIso_(),
        participant_id: body.pid,
        condition: found.obj.condition,
        test: truthy_(found.obj.test) ? 1 : 0,
        position: position,
        topic: step.topic,
        form: step.form,
        variant: step.variant,
        error_question: ERROR_QUESTION[step.variant],
        question: q,
        is_error_target: s.is_error_target,
        answer: String(a.answer),
        correct_answer: s.correct_answer,
        error_answer: s.error_answer,
        is_correct: s.is_correct,
        chose_error_answer: s.chose_error_answer,
        adopted_error: s.adopted_error,
        certainty: Math.round(cert),
        response_ms: intOrBlank_(a.ms),
        explanation_ms: intOrBlank_(body.explanationMs),
        plays: intOrBlank_(body.plays),
        media_error: body.mediaError ? 1 : 0,
        option_order: clampStr_(a.optionOrder, 8),
      });
    });
    var ans = getSheet_(ss, "Answers");
    rows.forEach(function (r) { ans.appendRow(r); });
    setCell_(found, "last_position", position);
    return { ok: true };
  });
}

function finishParticipant_(body) {
  return withLock_(function () {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var found = findParticipant_(ss, body.pid);
    if (!found) throw clientError_("Unknown participant");
    if (found.obj.status === "completed") return { ok: true, duplicate: true };
    var plan = JSON.parse(found.obj.plan_json);
    if (Number(found.obj.last_position) < plan.length) throw clientError_("Not all topics are saved yet");
    var ex = getSheet_(ss, "Extra");
    (body.extra || []).forEach(function (x) {
      ex.appendRow(rowFrom_("Extra", {
        received_at: nowIso_(),
        participant_id: body.pid,
        condition: found.obj.condition,
        test: truthy_(found.obj.test) ? 1 : 0,
        question_id: clampStr_(x.id, 40),
        prompt: clampStr_(x.prompt, 500),
        answer: clampStr_(x.answer, 2000),
        certainty: intOrBlank_(x.certainty),
        response_ms: intOrBlank_(x.ms),
      }));
    });
    setCell_(found, "status", "completed");
    setCell_(found, "completed_at", nowIso_());
    setCell_(found, "comments", clampStr_(body.comments, 2000));
    if (isFinite(Number(body.totalMs))) setCell_(found, "total_minutes", Math.round(Number(body.totalMs) / 6000) / 10);
    return { ok: true };
  });
}

function getData_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return {
    serverTime: nowIso_(),
    version: BACKEND_VERSION,
    activeHours: ACTIVE_HOURS,
    participants: readObjects_(getSheet_(ss, "Participants")),
    answers: readObjects_(getSheet_(ss, "Answers")),
    extra: readObjects_(getSheet_(ss, "Extra")),
  };
}

function purgeTest_() {
  return withLock_(function () {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var deleted = 0;
    Object.keys(SHEETS).forEach(function (name) {
      var sh = getSheet_(ss, name);
      var values = sh.getDataRange().getValues();
      var col = values[0].indexOf("test");
      for (var i = values.length - 1; i >= 1; i--) {
        if (truthy_(values[i][col])) { sh.deleteRow(i + 1); if (name === "Participants") deleted++; }
      }
    });
    return { ok: true, deletedParticipants: deleted };
  });
}
