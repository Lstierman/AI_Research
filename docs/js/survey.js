/*
 * Participant survey. Flow:
 *   consent → sound check → instructions → 6 × (explanation → 3 questions with certainty) → extra questions
 *   → comments → debrief
 *
 * URL options:
 *   ?test=1     real backend, but marked as test (not counted for the balancing; deletable from the dashboard)
 *   ?preview=1  no backend at all, nothing is saved (random condition)
 *   ?preview=1&topic=topic3&variant=error_hard&form=video   preview a single explanation (used by check.html)
 *
 * Progress is kept in localStorage, so a reload continues where the participant was.
 */
(function () {
  "use strict";

  var CFG = window.SURVEY_CONFIG;
  var CONTENT = window.SURVEY_CONTENT;
  var DESIGN = window.SURVEY_DESIGN;
  var QUESTIONS = ["easy", "medium", "hard"];
  var FORM_LABEL = { text: "text", audio: "voice", video: "video" };

  var params = new URLSearchParams(location.search);
  var PREVIEW = params.has("preview");
  var TEST = params.get("test") === "1";
  var STORE_KEY = "aiExplanationSurvey.v1" + (PREVIEW ? ".preview" : TEST ? ".test" : "");

  var app = document.getElementById("app");
  var state = load() || freshState();

  // ─── State ───────────────────────────────────────────────────────────────
  function freshState() {
    return {
      screen: "welcome", pid: null, condition: null, plan: null, pos: 0, q: 0,
      pending: null, extraIndex: 0, extra: [], comments: "", startedAt: Date.now(), optionOrders: {},
    };
  }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY));
      return s && s.screen ? s : null;
    } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* private mode: no resume */ }
  }
  function go(screen) { state.screen = screen; save(); render(); window.scrollTo(0, 0); }
  function reset() { try { localStorage.removeItem(STORE_KEY); } catch (e) {} state = freshState(); go("welcome"); }

  // ─── Backend ─────────────────────────────────────────────────────────────
  function apiUrl() {
    if (CFG.backendUrl) return CFG.backendUrl;
    if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return "/api";
    return null;
  }

  // POST as text/plain (no CORS preflight; works with Google Apps Script). Retries 3×.
  function post(body) {
    var url = apiUrl();
    if (!url) return Promise.reject(new Error("The survey is not connected to a backend yet (backendUrl in js/config.js)."));
    var attempt = 0;
    function once() {
      attempt++;
      return fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body), redirect: "follow" })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.error) { var e = new Error(data.error); e.fatal = data.status === 400 || data.status === 403; throw e; }
          return data;
        })
        .catch(function (err) {
          if (err.fatal || attempt >= 3) throw err;
          return new Promise(function (res) { setTimeout(res, 800 * attempt); }).then(once);
        });
    }
    return once();
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function h(html) { app.innerHTML = html; }
  function $(sel) { return app.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(app.querySelectorAll(sel)); }
  function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function isPhone() {
    var ua = navigator.userAgent || "";
    return /iPhone|iPod|Android.*Mobile|Windows Phone|Mobi/i.test(ua) || (("ontouchstart" in window) && Math.min(screen.width, screen.height) < 600);
  }
  function deviceType() {
    var ua = navigator.userAgent || "";
    if (isPhone()) return "phone";
    if (/iPad|Tablet|Android/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua))) return "tablet";
    return "desktop";
  }
  function step() { return state.plan[state.pos]; }
  function topic() { return CONTENT.topicById(step().topic); }

  function setProgress() {
    var bar = document.getElementById("progress");
    if (!state.plan) { bar.style.width = "0%"; return; }
    var nExtra = state.plan.length > 1 ? CFG.extraQuestions.length : 0;
    var total = state.plan.length * 4 + nExtra + 2;
    var done = 0;
    if (["explanation", "question", "saving"].indexOf(state.screen) >= 0) done = state.pos * 4 + (state.screen === "explanation" ? 0 : 1 + state.q);
    else if (state.screen === "extra") done = state.plan.length * 4 + state.extraIndex;
    else if (state.screen === "comments" || state.screen === "finishing") done = state.plan.length * 4 + nExtra + 1;
    else if (state.screen === "done") done = total;
    bar.style.width = Math.round((100 * done) / total) + "%";
  }

  // ─── Screens ─────────────────────────────────────────────────────────────
  function render() {
    setProgress();
    var screens = {
      welcome: renderWelcome, sound: renderSound, instructions: renderInstructions, explanation: renderExplanation,
      question: renderQuestion, saving: renderSaving, extra: renderExtra, comments: renderComments,
      finishing: renderFinishing, done: renderDone,
    };
    (screens[state.screen] || renderWelcome)();
  }

  function renderWelcome() {
    if (CFG.blockPhones && isPhone() && !PREVIEW) {
      return h('<div class="card"><h1>Please use a computer</h1><p>This study works best on a laptop or desktop computer with sound. Please open this link on a computer.</p></div>');
    }
    var contact = CFG.contactEmail ? esc(CFG.contactName) + ' (<a href="mailto:' + esc(CFG.contactEmail) + '">' + esc(CFG.contactEmail) + "</a>)" : esc(CFG.contactName);
    h(
      '<div class="card">' +
        '<div class="eyebrow">' + esc(CFG.institution) + "</div>" +
        "<h1>" + esc(CFG.studyTitle) + "</h1>" +
        "<p>Thank you for taking part. In this study we look at how people learn from an AI assistant about everyday topics.</p>" +
        "<ul>" +
        "<li>You will go through <strong>6 short topics</strong>. For each topic an AI assistant gives an explanation, as <strong>text</strong>, as <strong>voice</strong> or as a <strong>video</strong>, followed by 3 questions.</li>" +
        "<li>It takes about <strong>" + esc(CFG.estimatedMinutes) + " minutes</strong>. Please use a computer with <strong>sound</strong> (headphones or speakers) and do it in one go, in a quiet place.</li>" +
        "<li>Your answers are <strong>anonymous</strong>: we don't ask for your name or e-mail. They are used only for this course project.</li>" +
        "<li>Taking part is voluntary. You can stop at any time by closing the page.</li>" +
        "</ul>" +
        "<p class=\"small muted\">Questions about the study? Contact " + contact + ".</p>" +
        (isPhone() && !PREVIEW ? '<div class="notice">You seem to be on a phone. The study works best on a computer; if you continue on this phone, please make sure the sound is on.</div>' : "") +
        '<label class="check"><input type="checkbox" id="consent" /><span>I am 18 or older, I have read the information above and I agree to take part.</span></label>' +
        '<div id="err"></div>' +
        '<div class="actions"><button id="start" disabled>Start</button></div>' +
      "</div>"
    );
    var cb = $("#consent"), btn = $("#start");
    cb.addEventListener("change", function () { btn.disabled = !cb.checked; });
    btn.addEventListener("click", function () {
      btn.disabled = true;
      btn.textContent = "Starting…";
      startParticipant().then(function () { go("sound"); }).catch(function (err) {
        $("#err").innerHTML = '<div class="notice error">Could not start the survey: ' + esc(err.message) + " Please try again in a moment.</div>";
        btn.disabled = false;
        btn.textContent = "Start";
      });
    });
  }

  function startParticipant() {
    state.startedAt = Date.now();
    if (PREVIEW) {
      var t = params.get("topic"), v = params.get("variant"), f = params.get("form");
      if (t && v && f) state.plan = [{ topic: t, variant: v, form: f }];
      else {
        state.condition = DESIGN.CONDITIONS[Math.floor(Math.random() * DESIGN.CONDITIONS.length)].id;
        state.plan = DESIGN.buildPlan(state.condition);
      }
      state.pid = "PREVIEW";
      save();
      return Promise.resolve();
    }
    return post({
      action: "start", test: TEST, device: deviceType(), screen: screen.width + "x" + screen.height, ua: navigator.userAgent,
    }).then(function (r) {
      state.pid = r.pid; state.condition = r.condition; state.plan = r.plan;
      save();
    });
  }

  function renderSound() {
    h(
      '<div class="card">' +
        '<div class="eyebrow">Before we start</div>' +
        "<h1>Sound check</h1>" +
        "<p>Some explanations are spoken. Put on headphones or turn on your speakers, then play the test sound.</p>" +
        '<div class="actions" style="justify-content:flex-start;margin-top:8px"><button class="secondary" id="play">▶ Play test sound</button></div>' +
        '<div id="after" hidden>' +
          '<div class="actions between">' +
            '<button class="secondary" id="nohear">I don\'t hear anything</button>' +
            '<button id="ok">I hear it — continue</button>' +
          "</div>" +
        "</div>" +
        '<div id="tips"></div>' +
      "</div>"
    );
    $("#play").addEventListener("click", function () {
      beep();
      $("#after").hidden = false;
    });
    $("#ok").addEventListener("click", function () { go("instructions"); });
    $("#nohear").addEventListener("click", function () {
      $("#tips").innerHTML =
        '<div class="notice">Check that your device is not muted, the volume is up and the right output (headphones/speakers) is selected. Then play the test sound again. You need sound for this study.</div>';
    });
  }

  function beep() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      var ctx = new Ctx();
      var notes = [523.25, 659.25, 783.99];
      notes.forEach(function (f, i) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = f;
        o.connect(g); g.connect(ctx.destination);
        var t0 = ctx.currentTime + i * 0.35;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.3, t0 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.32);
        o.start(t0); o.stop(t0 + 0.34);
      });
    } catch (e) { /* ignore */ }
  }

  function renderInstructions() {
    var n = state.plan.length;
    h(
      '<div class="card">' +
        '<div class="eyebrow">How it works</div>' +
        "<h1>" + (n === 1 ? "1 topic" : n + " topics") + ", 3 questions each</h1>" +
        "<ul>" +
        "<li>For each topic, an <strong>AI assistant</strong> first explains the topic. Depending on the topic, the explanation is <strong>text</strong> to read, a <strong>voice</strong> to listen to, or a <strong>video</strong> to watch. You can re-read or replay it as often as you like.</li>" +
        "<li>Then you answer <strong>3 questions</strong> about decisions in that topic. <strong>The explanation is not shown again</strong> while you answer, so take your time with it.</li>" +
        "<li>For every answer you also say <strong>how sure you are</strong>, from 1 (not sure at all) to 5 (completely sure).</li>" +
        "<li>Please answer on your own, without looking things up online. There is no time limit.</li>" +
        "<li>You can't go back to a previous question.</li>" +
        "</ul>" +
        '<div class="actions"><button id="go">Start topic 1</button></div>' +
      "</div>"
    );
    $("#go").addEventListener("click", function () { go("explanation"); });
  }

  function topicHeader(extra) {
    return '<div class="eyebrow">Topic ' + (state.pos + 1) + " of " + state.plan.length + (extra ? " · " + extra : "") + "</div>" +
      "<h1>" + esc(topic().title) + "</h1>";
  }

  function mediaUrl(st) {
    var audio = st.form === "audio";
    return "media/" + (audio ? "audio" : "video") + "/" + st.topic + "_" + st.variant + "." + (audio ? CFG.audioExt : CFG.videoExt);
  }

  function renderExplanation() {
    var st = step(), t = topic();
    var shownAt = Date.now();
    var info = { plays: 0, mediaError: false };
    var body = "";
    var sub = { text: "explains in writing", audio: "explains by voice", video: "explains on video" }[st.form];
    var head =
      '<div class="assistant-head"><div class="avatar">AI</div><div><div class="assistant-name">AI assistant</div><div class="assistant-sub">' + sub + "</div></div></div>";

    if (st.form === "text") {
      body = head + '<div class="bubble">' + CONTENT.explanationParagraphs(t, st.variant).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
        '<p class="hint">Read the explanation carefully. It will not be shown again while you answer the questions.</p>';
    } else if (st.form === "audio") {
      body = head + '<div class="media-box" id="box"><div class="audio-visual"><div class="avatar">AI</div><div class="wave"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>' +
        '<audio id="media" controls preload="auto" controlsList="nodownload noplaybackrate" src="' + esc(mediaUrl(st)) + '"></audio></div>' +
        '<p class="hint">Press play to listen. You can replay it as often as you like. It will not be available while you answer the questions.</p>';
    } else {
      body = head + '<div class="media-box" id="box"><video id="media" controls playsinline preload="auto" controlsList="nodownload noplaybackrate" disablePictureInPicture src="' +
        esc(mediaUrl(st)) + '"></video></div>' +
        '<p class="hint">Press play to watch. You can replay it as often as you like. It will not be available while you answer the questions.</p>';
    }
    h('<div class="card">' + topicHeader() + body + '<div id="err"></div><div class="actions"><button id="next" disabled>Continue to the questions</button></div></div>');

    var next = $("#next");
    function unlock() { next.disabled = false; next.textContent = "Continue to the questions"; }

    if (st.form === "text") {
      var words = CONTENT.explanationParagraphs(t, st.variant).join(" ").split(/\s+/).length;
      var wait = Math.round(words * (CFG.textMinSecondsPerWord || 0));
      if (PREVIEW) wait = Math.min(wait, 3);
      if (wait <= 0) unlock();
      else {
        var tick = function () {
          var left = wait - Math.floor((Date.now() - shownAt) / 1000);
          if (!document.body.contains(next)) return;
          if (left <= 0) return unlock();
          next.textContent = "Continue to the questions (" + left + " s)";
          setTimeout(tick, 500);
        };
        tick();
      }
    } else {
      var el = $("#media"), box = $("#box");
      var maxSeen = 0, endedOnce = false, restart = true;
      el.addEventListener("play", function () { if (restart) { info.plays++; restart = false; } box.classList.add("playing"); });
      el.addEventListener("pause", function () { box.classList.remove("playing"); });
      el.addEventListener("ended", function () { endedOnce = true; restart = true; box.classList.remove("playing"); unlock(); });
      el.addEventListener("timeupdate", function () { if (!el.seeking && el.currentTime > maxSeen) maxSeen = el.currentTime; });
      el.addEventListener("seeking", function () {
        // No skipping ahead the first time through
        if (!endedOnce && CFG.requireFullPlay && el.currentTime > maxSeen + 1) el.currentTime = maxSeen;
      });
      el.addEventListener("error", function () {
        info.mediaError = true;
        $("#err").innerHTML = '<div class="notice error">This ' + (st.form === "audio" ? "audio" : "video") +
          " could not be loaded. Please check your internet connection and reload the page. If it still doesn't work, you can continue." +
          (PREVIEW || TEST ? "<br><small>Missing file: <code>docs/" + esc(mediaUrl(st)) + "</code></small>" : "") + "</div>";
        unlock();
      });
      if (!CFG.requireFullPlay) unlock();
    }

    next.addEventListener("click", function () {
      var el = $("#media");
      if (el && !el.paused) el.pause();
      state.pending = { explanationMs: Date.now() - shownAt, plays: info.plays, mediaError: info.mediaError, answers: [] };
      state.q = 0;
      go("question");
    });
  }

  function optionOrder(key, letters) {
    if (!state.optionOrders[key]) {
      state.optionOrders[key] = CFG.shuffleOptions ? DESIGN.shuffle(letters.slice()) : letters.slice();
      save();
    }
    return state.optionOrders[key];
  }

  function choiceHtml(name, items) {
    // items: [{ value, label, text }]
    return items.map(function (it) {
      return '<label class="option"><input type="radio" name="' + name + '" value="' + esc(it.value) + '" />' +
        '<span class="letter">' + esc(it.label) + '</span><span class="option-text">' + esc(it.text) + "</span></label>";
    }).join("");
  }

  function certaintyHtml() {
    return '<div class="certainty"><div class="certainty-title">How sure are you of your answer?</div><div class="scale">' +
      CFG.certaintyLabels.map(function (l, i) {
        var text = l.replace(/^\d+\s*[—-]\s*/, "");
        return '<label class="option"><input type="radio" name="certainty" value="' + (i + 1) + '" /><span class="letter">' + (i + 1) + '</span><span class="option-text">' + esc(text) + "</span></label>";
      }).join("") + "</div></div>";
  }

  function wireChoices(onChange) {
    $all(".option input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        $all('input[name="' + inp.name + '"]').forEach(function (o) { o.closest(".option").classList.toggle("selected", o.checked); });
        onChange();
      });
    });
  }

  function renderQuestion() {
    var st = step(), t = topic();
    var qk = QUESTIONS[state.q];
    var q = t.questions[qk];
    var order = optionOrder(st.topic + ":" + qk, Object.keys(q.options));
    var shownAt = Date.now();
    h(
      '<div class="card">' + topicHeader("Question " + (state.q + 1) + " of 3") +
        '<p class="prompt">' + esc(q.prompt) + "</p>" +
        '<div class="options">' + choiceHtml("answer", order.map(function (k, i) { return { value: k, label: String.fromCharCode(65 + i), text: q.options[k] }; })) + "</div>" +
        certaintyHtml() +
        '<div class="actions"><button id="next" disabled>' + (state.q < 2 ? "Next question" : state.pos < state.plan.length - 1 ? "Next topic" : "Continue") + "</button></div>" +
      "</div>"
    );
    var next = $("#next");
    function val(name) { var c = $('input[name="' + name + '"]:checked'); return c ? c.value : null; }
    wireChoices(function () { next.disabled = !(val("answer") && val("certainty")); });
    next.addEventListener("click", function () {
      next.disabled = true;
      state.pending.answers.push({ question: qk, answer: val("answer"), certainty: Number(val("certainty")), ms: Date.now() - shownAt, optionOrder: order.join("") });
      if (state.q < 2) { state.q++; go("question"); }
      else go("saving");
    });
  }

  function renderSaving() {
    h('<div class="card center"><div class="spinner"></div><p class="muted">Saving your answers…</p><div id="err"></div></div>');
    var done = function () {
      state.pos++;
      state.q = 0;
      state.pending = null;
      if (state.pos < state.plan.length) go("explanation");
      else if (state.plan.length > 1 && CFG.extraQuestions.length) { state.extraIndex = 0; go("extra"); }
      else go(state.plan.length > 1 ? "comments" : "finishing");
    };
    if (PREVIEW) return setTimeout(done, 300);
    post({
      action: "topic", pid: state.pid, position: state.pos + 1, explanationMs: state.pending.explanationMs,
      plays: state.pending.plays, mediaError: state.pending.mediaError, answers: state.pending.answers,
    }).then(done).catch(function (err) { showRetry(err, renderSaving); });
  }

  function showRetry(err, again) {
    var box = $("#err");
    $(".spinner") && ($(".spinner").style.display = "none");
    box.innerHTML = '<div class="notice error">Your answers could not be saved (' + esc(err.message) + "). Check your internet connection and try again. Nothing is lost.</div>" +
      '<div class="actions" style="justify-content:center"><button id="retry">Try again</button></div>';
    $("#retry").addEventListener("click", again);
  }

  function renderExtra() {
    var x = CFG.extraQuestions[state.extraIndex];
    var shownAt = Date.now();
    var input = "";
    if (x.type === "text") input = '<textarea id="text" maxlength="2000" placeholder="Your answer"></textarea>';
    else input = '<div class="options">' + choiceHtml("answer", x.options.map(function (o, i) { return { value: o, label: x.type === "scale" ? String(i + 1) : String.fromCharCode(65 + i), text: x.type === "scale" ? o.replace(/^\d+\s*[—-]\s*/, "") : o }; })) + "</div>";
    h(
      '<div class="card"><div class="eyebrow">Final questions · ' + (state.extraIndex + 1) + " of " + CFG.extraQuestions.length + "</div>" +
        '<p class="prompt">' + esc(x.prompt) + "</p>" + input + (x.withCertainty ? certaintyHtml() : "") +
        '<div class="actions"><button id="next">Next</button></div></div>'
    );
    var next = $("#next");
    function val(name) { var c = $('input[name="' + name + '"]:checked'); return c ? c.value : null; }
    function answer() { return x.type === "text" ? $("#text").value.trim() : val("answer"); }
    function check() { next.disabled = x.required !== false && (!answer() || (x.withCertainty && !val("certainty"))); }
    wireChoices(check);
    if (x.type === "text") $("#text").addEventListener("input", check);
    check();
    next.addEventListener("click", function () {
      state.extra.push({ id: x.id, prompt: x.prompt, answer: answer() || "", certainty: x.withCertainty ? Number(val("certainty")) || "" : "", ms: Date.now() - shownAt });
      state.extraIndex++;
      go(state.extraIndex < CFG.extraQuestions.length ? "extra" : "comments");
    });
  }

  function renderComments() {
    h(
      '<div class="card"><div class="eyebrow">Almost done</div><h1>Any comments?</h1>' +
        "<p>Is there anything you would like to tell us about the study, the explanations or the questions? (optional)</p>" +
        '<textarea id="c" maxlength="2000" placeholder="Optional"></textarea>' +
        '<div class="actions"><button id="next">Finish</button></div></div>'
    );
    $("#next").addEventListener("click", function () { state.comments = $("#c").value.trim(); go("finishing"); });
  }

  function renderFinishing() {
    h('<div class="card center"><div class="spinner"></div><p class="muted">Submitting…</p><div id="err"></div></div>');
    if (PREVIEW) return setTimeout(function () { go("done"); }, 300);
    post({ action: "finish", pid: state.pid, extra: state.extra, comments: state.comments, totalMs: Date.now() - state.startedAt })
      .then(function () { go("done"); })
      .catch(function (err) { showRetry(err, renderFinishing); });
  }

  function renderDone() {
    var errors = state.plan.filter(function (s) { return s.variant !== "correct"; });
    var items = errors.map(function (s) {
      var t = CONTENT.topicById(s.topic);
      return '<div class="debrief-item"><h3>' + esc(t.title) + "</h3>" +
        CONTENT.errorChanges(t, s.variant).map(function (c) {
          return '<div class="wrong"><span class="label">The explanation said (wrong)</span>' + (c.wrong ? esc(capitalize(c.wrong)) : "<em>(a sentence was left out)</em>") + "</div>" +
            '<div class="right"><span class="label">Correct</span>' + esc(capitalize(c.correct)) + "</div>";
        }).join("") + "</div>";
    }).join("");
    var correctTopics = state.plan.filter(function (s) { return s.variant === "correct"; }).map(function (s) { return CONTENT.topicById(s.topic).title; });
    h(
      '<div class="card"><div class="eyebrow">Thank you</div><h1>Your answers have been ' + (PREVIEW ? "checked (preview: nothing was saved)" : "saved") + "</h1>" +
        "<p>Thank you for taking part! Now that you are done, we can tell you more about the study.</p>" +
        "<p>We are studying whether people notice <strong>mistakes in explanations from an AI assistant</strong>, and whether that depends on how the explanation is given: as text, as a voice or as a video. " +
        "To test this, <strong>some of the explanations you saw contained a deliberate mistake</strong>. We could not tell you this at the start, because it would have changed how you listened and read.</p>" +
        "<p>These mistakes were written by us for this study. They say nothing about any real AI product. Below are the mistakes you saw, with the correct information, so you don't walk away with anything wrong. " +
        "In general: it's a good idea to double-check important information from an AI assistant with a reliable source.</p>" +
        (items ? "<h2>The mistakes you saw</h2>" + items : "") +
        (correctTopics.length ? '<p class="small muted">These explanations were correct: ' + esc(correctTopics.join(", ")) + ".</p>" : "") +
        '<p class="small muted">Please don\'t tell others about the mistakes until the study is over, so their answers stay unbiased. You can now close this page.' +
        (CFG.contactEmail ? " Questions: " + esc(CFG.contactName) + ', <a href="mailto:' + esc(CFG.contactEmail) + '">' + esc(CFG.contactEmail) + "</a>." : "") + "</p>" +
        (PREVIEW || TEST ? '<div class="actions"><button class="secondary" id="again">Start another ' + (PREVIEW ? "preview" : "test run") + "</button></div>" : "") +
      "</div>"
    );
    var again = $("#again");
    if (again) again.addEventListener("click", reset);
  }

  // ─── Boot ────────────────────────────────────────────────────────────────
  if (PREVIEW || TEST) {
    var badge = document.getElementById("mode-badge");
    badge.hidden = false;
    badge.textContent = PREVIEW ? "Preview — not saved" : "Test mode";
  }
  document.getElementById("brand").textContent = CFG.studyTitle;
  document.title = CFG.studyTitle;
  // Preview links for one specific explanation always start fresh
  if (PREVIEW && params.get("topic") && state.screen !== "welcome" && !(state.plan && state.plan.length === 1 && state.plan[0].topic === params.get("topic") && state.plan[0].variant === params.get("variant") && state.plan[0].form === params.get("form"))) {
    state = freshState();
  }
  if (!PREVIEW && !apiUrl()) {
    h('<div class="card"><h1>Not configured yet</h1><p>Set <code>backendUrl</code> in <code>docs/js/config.js</code> (see LAUNCH.md), or open the <a href="?preview=1">preview</a>.</p></div>');
  } else {
    render();
  }
})();
