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
