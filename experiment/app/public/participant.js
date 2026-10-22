// Participant flow, following participant-script.md: consent → sound check → background →
// 3 parts of 2 cases (one modality per part; per case: scenario + AI explanation + trust, then
// 3 questions with a built-in calculator) → final questions → debrief.
// URL options: ?condition=M1-R1-F1 forces a condition, ?modality=text|voice|video starts with
// that modality, ?demo=1 shows the presenter toolbar, ?fast=1 plays the AI's explanations faster.

const params = new URLSearchParams(location.search);
const PER_BLOCK = 2;

const S = {
  participantId: null,
  conditionId: null,
  modalityOrder: null,
  demo: params.get("demo") === "1",
  startedAt: new Date().toISOString(),
  device: { width: innerWidth, touch: "ontouchstart" in window },
  audioCheck: { attempts: 0, passed: false },
  background: {},
  blocks: [], // one per part: modality, case order and the end-of-part questions
  cases: [], // one per case, in presentation order
  final: {},
};
let FLOW = []; // every screen in order, built from the condition
let fast = params.get("fast") === "1";
let voiceName = null; // chosen in the demo toolbar; otherwise the best available voice
let step = 0;
let screenStart = Date.now();
let renderId = 0; // bumps on every screen change so stale timers stop
const app = document.getElementById("app");
const overlay = document.getElementById("overlay"); // floating calculator, cleared on every screen change

// ---------- helpers ----------
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const $ = (sel) => app.querySelector(sel);
const $$ = (sel) => [...app.querySelectorAll(sel)];
const sentences = (s) => s.split(/(?<=[.?!])\s+/);
// Same words as the text version, with symbols spelled out so text-to-speech reads them the same way.
const toSpoken = (s) => s.replace(/€([\d,]+(?:\.\d+)?)/g, "$1 euros");

function shuffle(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

// Sets up the parts and the case order (random within each part) for one condition.
function setCondition(c) {
  S.conditionId = c.id;
  S.modalityOrder = c.modalityOrder;
  S.blocks = c.parts.map((p, b) => ({
    block: b + 1, modality: p.modality, caseOrder: shuffle(p.cases),
    howAnswered: null, penPaper: null, ratings: {}, attentionCheck: null,
  }));
  S.cases = S.blocks.flatMap((bl, b) => bl.caseOrder.map((cc, k) => ({
    caseId: cc.caseId, version: cc.version, block: b + 1, posInBlock: k + 1, position: b * PER_BLOCK + k + 1, modality: bl.modality,
    plays: 0, completed: false, timeOnPageMs: null, trust: null,
    answers: [0, 1, 2].map(() => ({ value: "", dontKnow: false, confidence: null })), answerTimeMs: null, calcOpens: 0, calc: [],
  })));
  FLOW = [
    { screen: "consent" }, { screen: "audio" }, { screen: "background" },
    ...S.blocks.flatMap((_, b) => [
      { screen: "intro", b },
      ...Array.from({ length: PER_BLOCK }, (_, k) => [{ screen: "explain", b, k }, { screen: "answer", b, k }]).flat(),
      { screen: "ratings", b },
    ]),
    { screen: "final" }, { screen: "debrief" }, { screen: "done" },
  ];
}
const rec = (f) => S.cases[f.b * PER_BLOCK + f.k];

const SECTION = { consent: "Welcome", audio: "Sound check", background: "About you", final: "Wrap-up", debrief: "Debrief", done: "Done" };
function flowLabel(f) {
  if (f.b === undefined) return SECTION[f.screen];
  return `Part ${f.b + 1} of 3` + (f.k !== undefined ? ` · case ${f.k + 1}/${PER_BLOCK}` : "");
}

function go(i) {
  stopSpeech();
  cancelAnimationFrame(talk.raf); // the next screen restarts it if needed
  step = i;
  renderId++;
  overlay.innerHTML = "";
  screenStart = Date.now();
  const f = FLOW[i];
  document.getElementById("progress").style.width = (i / (FLOW.length - 1)) * 100 + "%";
  document.getElementById("steplabel").textContent = flowLabel(f);
  app.style.animation = "none";
  void app.offsetWidth; // restart the enter animation
  app.style.animation = "";
  RENDER[f.screen](f);
  scrollTo(0, 0);
  const h = app.querySelector("h1, h2");
  if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
  renderDemoBar();
}
const next = () => go(step + 1);

// The scenario: the same on screen in every modality. The rules come only from the AI.
function problemBox(c, { withQuestions = true } = {}) {
  return `<div class="problem">
    <div class="ptitle">The situation</div>
    <div>${esc(c.intro)}</div>
    <ul>${c.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
    ${withQuestions ? `<div class="qs">${c.questions.map((q, i) => `<div><b>Q${i + 1}</b>${esc(q.text)}</div>`).join("")}</div>` : ""}
  </div>`;
}

// Slider with no starting position: the handle appears once clicked.
function slider(id, { left = "", right = "", unit = "" } = {}) {
  return `<div class="slider" data-slider="${id}" data-unit="${unit}">
    <span class="end">${esc(left)}</span>
    <input type="range" id="${id}" min="0" max="100" step="1" class="unset" aria-label="${esc(left)} to ${esc(right)}" />
    <span class="end">${esc(right)}</span>
    <span class="val" id="${id}-val">–</span>
  </div>`;
}
function bindSlider(id, onChange) {
  const el = document.getElementById(id);
  const out = document.getElementById(id + "-val");
  const unit = el.closest("[data-slider]").dataset.unit || "";
  const set = () => { el.classList.remove("unset"); out.textContent = el.value + unit; onChange(Number(el.value)); };
  el.addEventListener("input", set);
  el.addEventListener("pointerdown", () => requestAnimationFrame(set));
  el.addEventListener("keydown", () => requestAnimationFrame(set));
}

function radios(name, options, { inline = false } = {}) {
  return `<div class="choices${inline ? " inline" : ""}" role="radiogroup">${options
    .map((o) => {
      const [v, t] = Array.isArray(o) ? o : [o, o];
      return `<label><input type="radio" name="${name}" value="${esc(v)}" /><span>${esc(t)}</span></label>`;
    })
    .join("")}</div>`;
}
const radioVal = (name) => { const el = app.querySelector(`input[name="${name}"]:checked`); return el ? el.value : null; };

function nav(label = "Continue", { disabled = false } = {}) {
  return `<div class="error-msg hidden" id="err" role="alert"></div><div class="nav"><button class="primary" id="next" ${disabled ? "disabled" : ""}>${esc(label)} <span aria-hidden="true">→</span></button></div>`;
}
function showErr(msg) { const e = $("#err"); e.textContent = msg; e.classList.remove("hidden"); }

// ---------- built-in calculator (every calculation is logged) ----------
const CALC_KEYS = ["7", "8", "9", "÷", "(", "4", "5", "6", "×", ")", "1", "2", "3", "−", "^", "0", ".", "%", "+", "C"];
function calculatorBox() {
  return `<button type="button" class="calc-toggle" id="calc-toggle" aria-expanded="false" aria-controls="calc">🧮 Calculator</button>
  <div class="calc hidden" id="calc" role="dialog" aria-label="Calculator">
    <div class="calc-head"><b>Calculator</b><span>Type or tap, then = or Enter</span><button type="button" class="calc-close" id="calc-close" aria-label="Close calculator">✕</button></div>
    <div class="calc-line"><input type="text" id="calc-in" autocomplete="off" spellcheck="false" placeholder="e.g. 9 ÷ 46 × 100" /><button id="calc-eq" class="primary">=</button></div>
    <div class="calc-out" id="calc-out" aria-live="polite"></div>
    <div class="calc-keys">${CALC_KEYS.map((k) => `<button type="button" data-k="${k}">${k}</button>`).join("")}</div>
  </div>`;
}
// Rendered into #overlay, outside the animated #app card: a transform on an ancestor would
// make position: fixed scroll with the card.
function bindCalculator(r) {
  overlay.innerHTML = calculatorBox();
  const q = (sel) => overlay.querySelector(sel);
  const input = q("#calc-in"), out = q("#calc-out"), panel = q("#calc"), toggle = q("#calc-toggle");
  const show = (open) => {
    panel.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    if (open) { r.calcOpens++; input.focus(); }
  };
  toggle.onclick = () => show(panel.classList.contains("hidden"));
  q("#calc-close").onclick = () => { show(false); toggle.focus(); };
  const run = () => {
    const expr = input.value.trim();
    if (!expr) return;
    let result = null;
    try { result = calculate(expr); out.textContent = `${expr} = ${result}`; out.classList.remove("bad"); input.value = String(result); }
    catch { out.textContent = "Can't calculate that. Check the brackets and operators."; out.classList.add("bad"); }
    r.calc.push({ expr, result, tMs: Date.now() - screenStart });
  };
  q("#calc-eq").onclick = run;
  input.onkeydown = (e) => { if (e.key === "Enter") { e.preventDefault(); run(); } };
  overlay.querySelectorAll(".calc-keys button").forEach((b) => (b.onclick = () => {
    const k = b.dataset.k;
    if (k === "C") input.value = "";
    else input.value += k;
    input.focus();
  }));
}

// ---------- speech (text-to-speech stands in for the recorded audio file) ----------
let speechToken = 0;
function englishVoices() { return speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang)); }
function pickVoice() {
  const vs = englishVoices();
  if (voiceName) return vs.find((v) => v.name === voiceName) || null;
  // Natural (neural) voices sound far less robotic; Edge ships several.
  return vs.find((v) => /Natural/i.test(v.name) && /Sonia|Libby|Aria|Jenny|Ava|Emma/i.test(v.name)) ||
    vs.find((v) => /Natural/i.test(v.name)) ||
    vs.find((v) => /Google UK English Female/i.test(v.name)) ||
    vs.find((v) => /Google US English/i.test(v.name)) ||
    vs[0] || null;
}
function speak(chunks, { onChunk, onBoundary, onEnd, onError } = {}) {
  stopSpeech();
  const token = ++speechToken;
  const voice = pickVoice();
  chunks.forEach((text, i) => {
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.rate = fast ? 1.6 : 1;
    u.onstart = () => token === speechToken && onChunk && onChunk(i);
    u.onboundary = (e) => token === speechToken && onBoundary && onBoundary(e);
    u.onerror = (e) => token === speechToken && e.error !== "interrupted" && e.error !== "canceled" && onError && onError();
    if (i === chunks.length - 1) u.onend = () => token === speechToken && onEnd && onEnd();
    speechSynthesis.speak(u);
  });
}
function stopSpeech() {
  speechToken++;
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  talk.stop();
}
if ("speechSynthesis" in window) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => renderDemoBar();
}

// "Talking level" (0–1) shared by the voice orb and the avatar's mouth. Word
// boundaries from the speech engine give real timing; a syllable oscillation
// fills in for voices that don't report boundaries.
const talk = {
  raf: 0, speaking: false, kick: 0, level: 0, onFrame: null,
  start(onFrame) { this.onFrame = onFrame; this.speaking = true; this.loop(); },
  word(len = 5) { this.kick = Math.min(1, 0.55 + len * 0.06); },
  stop() { this.speaking = false; },
  loop() {
    cancelAnimationFrame(this.raf);
    const step = (t) => {
      this.kick *= 0.9;
      const syl = this.speaking ? 0.35 + 0.35 * Math.abs(Math.sin(t / 85)) * Math.abs(Math.sin(t / 211 + 1)) : 0;
      const target = this.speaking ? Math.min(1, syl + this.kick * 0.6) : 0;
      this.level += (target - this.level) * 0.35;
      if (this.onFrame) this.onFrame(this.level, t, this.speaking);
      this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  },
};

// ---------- screens ----------
const PART_TITLE = { text: "The AI explains in a chat", voice: "The AI explains out loud", video: "The AI explains in a video call" };
const PART_INSTR = {
  text: "Each explanation appears in a chat window, at about the speed of speech (about a minute). Read along; it stays on screen until you continue.",
  voice: "The AI explains each case out loud (about a minute). Press play and listen to the whole explanation. You can replay it as often as you like.",
  video: "The AI explains each case in a short video call (about a minute). Press play and watch the whole explanation. You can replay it as often as you like.",
};
const STIM_INSTR = { text: "The AI's explanation appears below.", voice: "Press play to hear the AI's explanation.", video: "Press play to start the AI's video explanation." };

const RENDER = {
  consent() {
    app.innerHTML = `
      <div class="eyebrow">AI Research Seminar · Ghent University</div>
      <h1>Learning with AI assistants</h1>
      <p class="lead">Thanks for taking part! We're studying how people learn from AI assistants about topics they may not know much about. You'll get six short cases in three parts, from games to business to statistics. For each one, an AI assistant explains how it works, and then you answer three questions.</p>
      <div class="facts">
        <div class="fact"><b>~30 minutes</b><span>6 cases, 3 questions each</span></div>
        <div class="fact"><b>Laptop + sound</b><span>Headphones or speakers on, in a quiet place</span></div>
        <div class="fact"><b>Built-in calculator</b><span>Pen &amp; paper OK; no phone, internet or other calculator</span></div>
      </div>
      <details class="terms">
        <summary>Your rights and how we handle your data</summary>
        <ul>
          <li>Participation is voluntary. You can stop at any time without giving a reason.</li>
          <li>We do not collect your name, email address or IP address, and we only ask a few general questions about you.</li>
          <li>Because your answers are anonymous, we cannot find and delete them after you submit. You can withdraw at the end of the survey, before submitting.</li>
          <li>The data are stored on university storage, are only accessible to our project group, are used only for a university course project, and are deleted when the course ends.</li>
          <li>You must be 18 or older to take part.</li>
          <li>Questions? Contact the research team (contact details to be added).</li>
          <li>At the end you will get more information about the study's purpose.</li>
        </ul>
      </details>
      ${S.device.width < 700 ? `<div class="callout"><span class="ico">💻</span><span>It looks like you're on a small screen. The real study requires a laptop or desktop.</span></div>` : ""}
      <div class="field"><span class="label">I have read the information above and agree to take part.</span>
        ${radios("consent", [["yes", "Yes, I agree"], ["no", "No, I do not agree"]], { inline: true })}</div>
      ${nav("Start")}`;
    $("#next").onclick = () => {
      const v = radioVal("consent");
      if (!v) return showErr("Please choose an option.");
      if (v === "no") return endScreen("No problem", "You chose not to take part. Thank you for your time; you can close this tab.");
      next();
    };
  },

  audio() {
    app.innerHTML = `
      <div class="eyebrow">Step 1</div>
      <h2>Let's check your sound</h2>
      <p class="lead">Press play and type the word you hear.</p>
      <p><button id="play" class="btn"><span aria-hidden="true">🔊</span> Play sound</button></p>
      <div class="field"><label for="word">Which word did you hear?</label><input type="text" id="word" autocomplete="off" style="width:260px" /></div>
      ${nav()}`;
    $("#play").onclick = () => speak(["orange"]);
    $("#word").onkeydown = (e) => { if (e.key === "Enter") $("#next").click(); };
    $("#next").onclick = () => {
      const w = $("#word").value.trim().toLowerCase();
      if (!w) return showErr("Please type the word you heard.");
      S.audioCheck.attempts++;
      if (w === "orange") { S.audioCheck.passed = true; return next(); }
      if (S.audioCheck.attempts >= 2) return endScreen("Thank you", "We couldn't confirm your sound, so unfortunately you can't take part this time. Thank you for your interest!");
      $("#word").value = "";
      showErr("We couldn't confirm your sound. Check that your volume is up, your headphones are connected and the tab isn't muted, then try again.");
    };
  },

  background() {
    const freq = ["never", "less than monthly", "monthly", "weekly", "daily"];
    app.innerHTML = `
      <div class="eyebrow">Step 2</div>
      <h2>A few questions about you</h2>
      <div class="field"><span class="label">What is your age?</span>${radios("age", ["18–24", "25–34", "35–49", "50+"], { inline: true })}</div>
      <div class="field"><span class="label">What is your gender?</span>${radios("gender", ["woman", "man", "non-binary", "prefer not to say"], { inline: true })}</div>
      <div class="field"><span class="label">What do you currently do?</span>${radios("occupation", ["student", "working", "other"], { inline: true })}</div>
      <div class="field"><span class="label">How often do you use text-based AI chatbots (e.g. ChatGPT)?</span>${radios("aiText", freq, { inline: true })}</div>
      <div class="field"><span class="label">How often do you talk to an AI by voice (e.g. voice mode, Siri, Alexa)?</span>${radios("aiVoice", freq, { inline: true })}</div>
      <div class="field"><span class="label">Have you ever interacted with an AI avatar or video assistant?</span>${radios("aiAvatar", ["yes", "no", "not sure"], { inline: true })}</div>
      ${nav()}`;
    $("#next").onclick = () => {
      const keys = ["age", "gender", "occupation", "aiText", "aiVoice", "aiAvatar"];
      for (const k of keys) S.background[k] = radioVal(k);
      if (keys.some((k) => !S.background[k])) return showErr("Please answer all questions.");
      next();
    };
  },

  intro(f) {
    const m = S.blocks[f.b].modality;
    app.innerHTML = `
      <div class="eyebrow">Part ${f.b + 1} of 3</div>
      <h2>${esc(PART_TITLE[m])}</h2>
      <p class="lead">You'll get ${PER_BLOCK} cases. For each one, you'll see a situation, and you asked an AI assistant to explain how it works. Then we'll ask how much you trust its explanation, followed by three questions about the situation.</p>
      <div class="callout"><span class="ico">${{ text: "💬", voice: "🔊", video: "🎥" }[m]}</span><span>${esc(PART_INSTR[m])}</span></div>
      ${f.b === 0 ? `<p class="small" style="margin-top:16px;color:var(--ink-2)">A calculator is built into the question pages. You may also use pen and paper, but no phone, internet or other calculator.</p>` : ""}
      ${nav(`Start part ${f.b + 1}`)}`;
    $("#next").onclick = next;
  },

  explain(f) {
    const r = rec(f), c = CASE_BY_ID[r.caseId];
    app.innerHTML = `
      <div class="eyebrow">Part ${f.b + 1} of 3 · Case ${f.k + 1} of ${PER_BLOCK}</div>
      <h2>${esc(c.title)}</h2>
      ${problemBox(c)}
      <div class="instr">${esc(STIM_INSTR[r.modality])}</div>
      <div id="stim"></div>
      <div class="field${r.completed ? "" : " hidden"}" id="trustwrap"><label for="trust">How much do you trust the AI's explanation?</label>
        ${slider("trust", { left: "Not at all", right: "Completely" })}
        <div class="slider-hint">Click anywhere on the line to give your rating.</div></div>
      ${nav("Continue to the questions", { disabled: !r.completed })}`;
    $("#next").classList.toggle("hidden", !r.completed);
    r.trust = null;
    bindSlider("trust", (v) => (r.trust = v));
    STIM[r.modality]($("#stim"), r, c);
    $("#next").onclick = () => {
      if (r.trust === null) return showErr("Please click on the scale to say how much you trust the AI's explanation.");
      r.timeOnPageMs = Date.now() - screenStart;
      next();
    };
  },

  answer(f) {
    const r = rec(f), c = CASE_BY_ID[r.caseId];
    app.innerHTML = `
      <div class="eyebrow">Part ${f.b + 1} of 3 · Case ${f.k + 1} of ${PER_BLOCK}</div>
      <h2>Your answers</h2>
      <p class="lead">Answer the three questions using what you learned. You can't go back to the explanation.</p>
      ${problemBox(c, { withQuestions: false })}
      ${c.questions.map((q, i) => `
        <div class="qcard">
          <div class="qhead"><span class="qnum">Q${i + 1}</span><span id="ql${i}">${esc(q.text)}</span></div>
          ${q.type === "choice"
            ? `<div class="answer-line">${radios("q" + i, q.options.map((o, oi) => [String(oi), o]), { inline: true })}</div>`
            : `<div class="answer-line"><span class="num-in">${q.unit === "€" ? "<span>€</span>" : ""}<input type="text" inputmode="decimal" id="a${i}" autocomplete="off" aria-labelledby="ql${i}" />${q.unit !== "€" ? `<span class="unit">${esc(q.unit)}</span>` : ""}</span></div>`}
          <label class="check"><input type="checkbox" id="dk${i}" /> I don't know</label>
          <div id="confwrap${i}">
            <div class="small" style="color:var(--ink-2)">How sure are you of your answer?</div>
            ${slider("conf" + i, { left: "0%", right: "100%", unit: "%" })}
          </div>
        </div>`).join("")}
      ${nav()}`;
    r.answers = c.questions.map(() => ({ value: "", dontKnow: false, confidence: null }));
    bindCalculator(r);
    c.questions.forEach((q, i) => {
      bindSlider("conf" + i, (v) => (r.answers[i].confidence = v));
      $("#dk" + i).onchange = (e) => {
        r.answers[i].dontKnow = e.target.checked;
        $$(q.type === "choice" ? `input[name="q${i}"]` : "#a" + i).forEach((el) => (el.disabled = e.target.checked));
        $("#confwrap" + i).classList.toggle("hidden", e.target.checked);
      };
    });
    $("#next").onclick = () => {
      for (let i = 0; i < c.questions.length; i++) {
        const q = c.questions[i], a = r.answers[i];
        if (a.dontKnow) { a.value = ""; a.confidence = null; continue; }
        a.value = q.type === "choice" ? radioVal("q" + i) ?? "" : $("#a" + i).value.trim();
        if (q.type === "choice" ? a.value === "" : parseNumber(a.value) === null) return showErr(`Please ${q.type === "choice" ? "choose an answer" : "enter a number"} for Q${i + 1}, or tick "I don't know".`);
        if (a.confidence === null) return showErr(`Please rate how sure you are of your answer to Q${i + 1}.`);
      }
      r.answerTimeMs = Date.now() - screenStart;
      next();
    };
  },

  ratings(f) {
    const bl = S.blocks[f.b];
    const items = [...RATING_ITEMS];
    if (f.b === 1) items.splice(4, 0, { id: "attention", text: 'To show you are reading carefully, select "somewhat agree" (5).' });
    app.innerHTML = `
      <div class="eyebrow">End of part ${f.b + 1} of 3</div>
      <h2>About this part</h2>
      <p class="lead">These questions are about the ${PER_BLOCK} cases you just did, where the AI explained ${{ text: "in a chat", voice: "out loud", video: "in a video call" }[bl.modality]}.</p>
      <div class="field"><span class="label">How did you mainly arrive at your answers in this part?</span>${radios("how", HOW_ANSWERED.map((o) => [o.id, o.text]))}</div>
      <div class="field"><span class="label">Did you use pen and paper in this part?</span>${radios("pen", ["Yes", "No"], { inline: true })}</div>
      <div class="field"><span class="label">How much do you agree with these statements?</span>
        <div class="lk-scale"><span>1 · strongly disagree</span><span>7 · strongly agree</span></div>
        <div class="likert">${items.map((it) => `
          <div class="lk-row" role="radiogroup" aria-label="${esc(it.text)}"><span>${esc(it.text)}</span>
            <div class="lk-opts">${[1, 2, 3, 4, 5, 6, 7].map((k) => `<label><input type="radio" name="lk_${it.id}" value="${k}" />${k}</label>`).join("")}</div></div>`).join("")}
        </div></div>
      ${nav(f.b < 2 ? `Continue to part ${f.b + 2}` : "Continue")}`;
    $("#next").onclick = () => {
      bl.howAnswered = radioVal("how");
      bl.penPaper = radioVal("pen");
      RATING_ITEMS.forEach((it) => (bl.ratings[it.id] = Number(radioVal("lk_" + it.id)) || null));
      if (f.b === 1) bl.attentionCheck = Number(radioVal("lk_attention")) || null;
      if (!bl.howAnswered || !bl.penPaper || Object.values(bl.ratings).some((v) => !v) || (f.b === 1 && !bl.attentionCheck)) return showErr("Please answer all questions.");
      next();
    };
  },

  final() {
    const ways = [["text", "Text chat"], ["voice", "Voice"], ["video", "Video call"]];
    const waysOrNone = [...ways, ["none", "No difference"]];
    const seen = S.cases.map((r) => CASE_BY_ID[r.caseId]);
    const famScale = [["1", "1 · never heard of it"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5 · I know it well"]];
    app.innerHTML = `
      <div class="eyebrow">Almost done</div>
      <h2>A few final questions</h2>
      <div class="field"><label for="unusual">Did you notice anything unusual during this study?</label><textarea id="unusual"></textarea></div>
      <div class="field"><span class="label">Did any of the AI's explanations contain a mistake?</span>${radios("mistake", ["Yes", "No", "Not sure"], { inline: true })}</div>
      <div id="mistakewrap" class="hidden">
        <div class="field"><span class="label">In which case(s)?</span><div class="ranks">${seen.map((c) => `<label class="check"><input type="checkbox" name="mcases" value="${c.id}" /> ${esc(c.title)}</label>`).join("")}</div></div>
        <div class="field"><label for="what">What was wrong?</label><textarea id="what"></textarea></div>
      </div>
      <div class="field"><span class="label">When did you first suspect that the AI might give wrong information?</span>${radios("suspect", ["Never", "During part 1", "During part 2", "During part 3"], { inline: true })}</div>
      <div class="field"><span class="label">Before this study, how familiar were you with each topic?</span>
        ${seen.map((c) => `<div class="fam-row"><span>${esc(c.topic)}</span>${radios("fam_" + c.id, famScale, { inline: true })}</div>`).join("")}</div>
      <p class="lead" style="margin-top:28px">The AI explained in three ways: as <b>text in a chat</b>, as a <b>voice</b>, and in a <b>video call</b>.</p>
      <div class="field"><span class="label">Rank the three ways from most to least preferred.</span>
        <div class="ranks">${["Most preferred", "Second", "Least preferred"].map((l, i) => `<label class="rank">${l}<select id="rank${i}"><option value="">Choose…</option>${ways.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>`).join("")}</div></div>
      <div class="field"><span class="label">Which one did you trust most?</span>${radios("trustMost", waysOrNone, { inline: true })}</div>
      <div class="field"><span class="label">Which one was easiest to learn from?</span>${radios("useful", waysOrNone, { inline: true })}</div>
      <div class="field"><label for="why">Why did you prefer your first choice?</label><textarea id="why"></textarea></div>
      <div class="field"><span class="label">Which way would you prefer for learning something new from an AI in real life?</span>${radios("prefer", [...ways, ["none", "No preference"]], { inline: true })}</div>
      <div class="field"><span class="label">How good are you at mental arithmetic?</span>${radios("mental", [["1", "1 · very poor"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5 · very good"]], { inline: true })}</div>
      <div class="field"><span class="label">Three short questions (no calculator)</span>
        <div class="qcard"><label for="n1">A jacket costs €80 and is 25% off. What do you pay?</label><span class="num-in" style="justify-self:start"><span>€</span><input type="text" id="n1" inputmode="decimal" /></span></div>
        <div class="qcard"><label for="n2">A train leaves at 14:45 and the trip takes 1 hour 50 minutes. When does it arrive?</label><input type="text" id="n2" placeholder="hh:mm" style="width:130px" /></div>
        <div class="qcard"><label for="n3">You buy 3 coffees at €2.40 each and pay with a €10 note. How much change do you get?</label><span class="num-in" style="justify-self:start"><span>€</span><input type="text" id="n3" inputmode="decimal" /></span></div>
      </div>
      <div class="field"><span class="label">Did you use anything besides the built-in calculator and pen and paper (a phone, the internet, another calculator)? Please answer honestly; it doesn't affect anything.</span>${radios("tool", ["No", "Yes"], { inline: true })}</div>
      ${nav()}`;
    $$('input[name="mistake"]').forEach((r) => (r.onchange = () => $("#mistakewrap").classList.toggle("hidden", radioVal("mistake") === "No")));
    $("#next").onclick = () => {
      const f = S.final;
      f.unusual = $("#unusual").value.trim();
      f.mistake = radioVal("mistake");
      const noMistake = f.mistake === "No";
      f.mistakeCases = noMistake ? [] : $$('input[name="mcases"]:checked').map((c) => c.value);
      f.whatWrong = noMistake ? "" : $("#what").value.trim();
      f.firstSuspect = radioVal("suspect");
      f.familiarity = Object.fromEntries(seen.map((c) => [c.id, Number(radioVal("fam_" + c.id)) || null]));
      f.ranking = [0, 1, 2].map((i) => $("#rank" + i).value);
      f.trustMost = radioVal("trustMost");
      f.easiestToLearn = radioVal("useful");
      f.whyPreferred = $("#why").value.trim();
      f.preferReal = radioVal("prefer");
      f.mentalArithmetic = Number(radioVal("mental")) || null;
      f.numeracy = [$("#n1").value.trim(), $("#n2").value.trim(), $("#n3").value.trim()];
      f.usedTool = radioVal("tool");
      if (Object.values(f.familiarity).some((v) => !v)) return showErr("Please rate how familiar you were with each topic.");
      if (f.ranking.some((v) => !v) || new Set(f.ranking).size < 3) return showErr("Please rank all three ways, each one once.");
      if (!f.mistake || !f.firstSuspect || !f.trustMost || !f.easiestToLearn || !f.preferReal || !f.mentalArithmetic || !f.usedTool) return showErr("Please answer all multiple-choice questions.");
      next();
    };
  },

  debrief() {
    const flawed = S.cases.filter((r) => r.version === "flawed");
    app.innerHTML = `
      <div class="eyebrow">Debrief</div>
      <h2>Here's what this study was really about</h2>
      <p class="lead">We told you the study was about learning from AI assistants. That's true, but we didn't tell you everything: <b>${flawed.length} of the 6 explanations contained a deliberate mistake.</b> The other ${S.cases.length - flawed.length} were correct.</p>
      <p>We want to find out whether people pick up an AI's mistakes equally often when it explains in a text chat, by voice, or in a video call. If we had told you beforehand, you would have searched for them, and we couldn't have measured this. The mistakes were written by us for this study; they say nothing about how reliable any real AI product is.</p>
      <div class="qcard"><span class="label" style="font-weight:600">The mistakes and the correct answers</span>
        ${flawed.map((r) => { const c = CASE_BY_ID[r.caseId], q = c.questions[c.flawQ]; return `<div class="qhead"><span class="qnum">Part ${r.block}</span><span><b>${esc(c.title)}:</b> ${esc(c.flaw)} The correct answer to Q${c.flawQ + 1} is <b>${esc(fmtAnswer(q, q.correct))}</b>.</span></div>`; }).join("")}
      </div>
      <p>Missing these mistakes is completely normal: you were learning about topics you may not have known, from an assistant that sounded confident. That's exactly why this research matters. When an AI teaches you something important, double-check it with another source.</p>
      <div class="callout"><span class="ico">🤫</span><span>Please don't tell other potential participants about the mistakes until the study is over.</span></div>
      <div class="field"><span class="label">This is your last chance to withdraw: because your answers are anonymous, we can't delete them after you submit. Can we use your answers?</span>
        ${radios("use", [["yes", "Yes, you can use my answers"], ["no", "No, please delete my answers"]])}</div>
      ${nav("Submit")}`;
    $("#next").onclick = async () => {
      const v = radioVal("use");
      if (!v) return showErr("Please choose an option.");
      if (v === "no") return endScreen("Answers deleted", "Your answers were not sent. Thank you for your time!");
      $("#next").disabled = true;
      S.consentToUse = true;
      S.completedAt = new Date().toISOString();
      try {
        const res = await fetch("/api/responses", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(S) });
        if (!res.ok) throw new Error(res.status);
        next();
      } catch {
        $("#next").disabled = false;
        showErr("Your answers couldn't be sent. Please check your connection and try again.");
      }
    };
  },

  done() {
    app.innerHTML = `<div style="text-align:center;padding:24px 0">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;margin:0 auto 18px;font-size:1.8rem">✓</div>
      <h2>Thank you!</h2><p class="lead">Your answers were submitted. You can close this tab.</p>
      ${S.demo ? `<p style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn primary" href="researcher" target="_blank">Open researcher dashboard ↗</a> <a class="btn" href="${location.pathname + location.search}">Start again</a></p>` : ""}</div>`;
  },
};

function endScreen(title, msg) {
  stopSpeech();
  app.innerHTML = `<h2>${esc(title)}</h2><p class="lead">${esc(msg)}</p>`;
  document.getElementById("progress").style.width = "100%";
}

// ---------- the three stimulus presentations ----------
// Reveals the trust question and Continue once the explanation has been fully shown or played.
function markStimulusDone(r) {
  r.completed = true;
  const w = $("#trustwrap"), n = $("#next");
  if (w) w.classList.remove("hidden");
  if (n) { n.disabled = false; n.classList.remove("hidden"); }
}

const fmt = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const WORDS_PER_MIN = 150; // speech speed
const explanationOf = (r, c) => c.explanation[r.version];

const STIM = {
  // Chat app: the explanation streams in at speech speed and stays readable.
  text(el, r, c) {
    const paras = explanationOf(r, c);
    el.innerHTML = `<div class="app-chat">
      <div class="bar"><div class="ai-badge">AI</div><div class="who"><b>AI assistant</b><span>● online</span></div></div>
      <div class="msgs"><div class="msg-user">Can you explain how this works?</div>
        <div class="msg-ai"><div class="ai-badge">AI</div><div class="text" id="bubble"><span class="typing"><i></i><i></i><i></i></span></div></div></div>
    </div>`;
    const bubble = el.querySelector("#bubble");
    if (r.completed) { bubble.innerHTML = paras.map((p) => `<p>${esc(p)}</p>`).join(""); return; }
    r.plays = 1;
    const words = paras.map((p) => p.split(" "));
    const run = renderId;
    let pi = 0, wi = 0;
    const tick = () => {
      if (run !== renderId) return;
      wi++;
      if (wi > words[pi].length) { pi++; wi = 1; }
      const done = pi >= words.length;
      bubble.innerHTML = words.slice(0, done ? pi : pi + 1).map((w, k) => `<p>${esc((k === pi ? w.slice(0, wi) : w).join(" "))}${!done && k === pi ? '<span class="caret"></span>' : ""}</p>`).join("");
      if (done) return markStimulusDone(r);
      setTimeout(tick, 60000 / WORDS_PER_MIN / (fast ? 6 : 1));
    };
    setTimeout(() => run === renderId && tick(), fast ? 400 : 1200);
  },

  // Voice mode: an orb and waveform that react to the speech. No transcript.
  voice(el, r, c) {
    el.innerHTML = `<div class="app-voice">
      <div class="label">AI ASSISTANT · VOICE</div>
      <div class="orb-wrap"><div class="orb-ring" id="ring"></div><div class="orb" id="orb"></div></div>
      <div class="wave" id="wave">${"<i></i>".repeat(28)}</div>
      <div class="dark-player"><button class="round" id="playbtn" aria-label="Play">▶</button><div class="track"><div id="pbar"></div></div><span class="time" id="ptime">0:00</span></div>
    </div>`;
    const orb = el.querySelector("#orb"), ring = el.querySelector("#ring"), bars = [...el.querySelectorAll("#wave i")];
    bindPlayer(el, r, c, {
      onFrame: (lv, t) => {
        orb.style.transform = `scale(${1 + lv * 0.1})`;
        ring.style.transform = `scale(${1 + lv * 0.25})`;
        ring.style.opacity = 0.3 + lv * 0.7;
        bars.forEach((b, i) => (b.style.height = 4 + lv * 28 * Math.abs(Math.sin(t / 120 + i * 0.7)) * (0.5 + 0.5 * Math.sin(i * 1.3 + t / 400)) + "px"));
      },
    });
  },

  // Video call: avatar with mouth, head and brows driven by the speech.
  video(el, r, c) {
    el.innerHTML = `<div class="app-call">
      <div class="call-top"><span>AI assistant · video call</span><span class="live" id="ptime">0:00</span></div>
      <div class="stage">${AVATAR_SVG}
        <span class="name"><i class="mic" id="mic"></i>AI assistant</span>
        <div class="selfview"><svg viewBox="0 0 40 40" fill="#c9c6bd"><circle cx="20" cy="14" r="8"/><path d="M4 40c0-10 7-15 16-15s16 5 16 15z"/></svg></div>
      </div>
      <div class="call-controls">
        <button class="ctl" tabindex="-1" aria-hidden="true">🎙</button>
        <button class="call-play" id="playbtn">▶ Play</button>
        <button class="ctl" tabindex="-1" aria-hidden="true">📷</button>
        <button class="ctl end" tabindex="-1" aria-hidden="true">✕</button>
      </div>
      <div class="dark-player"><div class="track"><div id="pbar"></div></div></div>
    </div>
    ${S.demo ? `<div class="demo-note">Demo placeholder: the real study uses a lip-synced avatar video (e.g. HeyGen) of the same audio file.</div>` : ""}`;
    const g = (id) => el.querySelector("#" + id);
    const head = g("av-head"), inner = g("av-inner"), teeth = g("av-teethclip"), lower = g("av-lower"), brows = g("av-brows"), mic = g("mic");
    let browKick = 0;
    bindPlayer(el, r, c, {
      onFrame: (lv, t, speaking) => {
        const open = lv * 13;
        inner.setAttribute("ry", (open / 2).toFixed(2));
        inner.setAttribute("cy", (266 + open / 2).toFixed(2));
        teeth.setAttribute("ry", (open / 2).toFixed(2));
        teeth.setAttribute("cy", (266 + open / 2).toFixed(2));
        lower.setAttribute("transform", `translate(0 ${(open * 0.9).toFixed(2)})`);
        browKick *= 0.94;
        brows.setAttribute("transform", `translate(0 ${(-browKick * 4).toFixed(2)})`);
        const sway = speaking ? 1 : 0.4;
        head.setAttribute("transform", `rotate(${(Math.sin(t / 1400) * 1.6 * sway).toFixed(2)} 320 330) translate(${(Math.sin(t / 2300) * 2).toFixed(2)} ${(Math.sin(t / 900) * 1.2 * sway + lv * 1.2).toFixed(2)})`);
        mic.style.opacity = 0.3 + lv * 0.7;
      },
      onWord: (len) => { if (len > 6 && Math.random() < 0.35) browKick = 1; },
    });
  },
};

// Shared play/replay logic for voice + video. The trust question and Continue appear after the first full play.
function bindPlayer(el, r, c, { onFrame, onWord }) {
  const btn = el.querySelector("#playbtn"), bar = el.querySelector("#pbar"), time = el.querySelector("#ptime");
  const spoken = explanationOf(r, c).flatMap((p) => sentences(toSpoken(p)));
  const words = spoken.map((p) => p.split(" ").length), totalWords = words.reduce((a, b) => a + b, 0);
  const isRound = btn.classList.contains("round");
  const label = (state) => (btn.textContent = isRound ? { play: "▶", stop: "■", replay: "↻" }[state] : { play: "▶ Play", stop: "■ Stop", replay: "↻ Replay" }[state]);
  let playing = false, timer = null;
  // Idle animation (breathing, blinking) runs from the start; speaking only while playing.
  talk.start(onFrame);
  talk.stop();
  const stop = () => { playing = false; clearInterval(timer); talk.stop(); label(r.completed ? "replay" : "play"); };
  btn.onclick = () => {
    if (playing) { stopSpeech(); stop(); bar.style.width = "0"; return; }
    if (!("speechSynthesis" in window)) return alertBox(el, "Your browser can't play speech. Please use Chrome or Edge.");
    playing = true;
    r.plays++;
    label("stop");
    const t0 = Date.now(), run = renderId;
    timer = setInterval(() => (run === renderId ? (time.textContent = fmt(Date.now() - t0)) : clearInterval(timer)), 250);
    speak(spoken, {
      onChunk: (i) => (bar.style.width = (words.slice(0, i).reduce((a, b) => a + b, 0) / totalWords) * 100 + "%"),
      onBoundary: (e) => { if (e.name === "word" || !e.name) { const len = e.charLength || 5; talk.word(len); onWord && onWord(len); } },
      onEnd: () => { bar.style.width = "100%"; markStimulusDone(r); stop(); },
      onError: () => { stopSpeech(); stop(); r.plays--; alertBox(el, "The audio could not play. Press Play to try again."); },
    });
    talk.start(onFrame); // after speak(), which stops the previous animation
  };
  label(r.completed ? "replay" : "play");
}
function alertBox(el, msg) { el.insertAdjacentHTML("beforeend", `<p class="error-msg">${esc(msg)}</p>`); }

// ---------- avatar (placeholder for the real lip-synced video) ----------
const AVATAR_SVG = `<svg class="avatar" viewBox="100 66 440 275" preserveAspectRatio="xMidYMid slice" role="img" aria-label="AI assistant on a video call">
  <defs>
    <linearGradient id="av-wall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4b5a68"/><stop offset="1" stop-color="#2b333c"/></linearGradient>
    <radialGradient id="av-skin" cx="0.42" cy="0.35" r="0.75"><stop offset="0" stop-color="#f1cfb4"/><stop offset="0.6" stop-color="#dfae8f"/><stop offset="1" stop-color="#c48f70"/></radialGradient>
    <linearGradient id="av-neck" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98466"/><stop offset="1" stop-color="#d9a585"/></linearGradient>
    <linearGradient id="av-hair" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a3427"/><stop offset="0.5" stop-color="#2e1f17"/><stop offset="1" stop-color="#1c130e"/></linearGradient>
    <linearGradient id="av-jacket" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f3e57"/><stop offset="1" stop-color="#1b2435"/></linearGradient>
    <filter id="av-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="av-soft"><feGaussianBlur stdDeviation="2.5"/></filter>
    <clipPath id="av-mouthclip"><ellipse id="av-teethclip" cx="320" cy="266" rx="19" ry="0"/></clipPath>
  </defs>
  <rect width="640" height="400" fill="url(#av-wall)"/>
  <g filter="url(#av-blur)">
    <rect x="410" y="40" width="190" height="230" rx="6" fill="#c9d8e4" opacity="0.55"/>
    <rect x="500" y="40" width="8" height="230" fill="#7d8a96" opacity="0.6"/>
    <rect x="40" y="70" width="150" height="16" fill="#1f262d" opacity="0.7"/>
    <rect x="40" y="150" width="150" height="16" fill="#1f262d" opacity="0.7"/>
    <rect x="52" y="34" width="18" height="36" fill="#a0522d" opacity="0.7"/><rect x="74" y="40" width="14" height="30" fill="#4f7a8a" opacity="0.7"/><rect x="92" y="30" width="20" height="40" fill="#c9a35a" opacity="0.6"/>
    <rect x="60" y="112" width="24" height="38" fill="#6b8f71" opacity="0.6"/><rect x="128" y="118" width="40" height="32" fill="#8b6f5a" opacity="0.6"/>
    <ellipse cx="560" cy="300" rx="50" ry="70" fill="#3f6b4a" opacity="0.7"/>
  </g>
  <g transform="translate(0 -24)">
  <path d="M150 400 C160 340 220 318 280 310 L360 310 C420 318 480 340 490 400 Z" fill="url(#av-jacket)"/>
  <path d="M290 312 L320 372 L350 312 Z" fill="#eef1f4"/>
  <path d="M282 311 L320 380 L300 320 Z M358 311 L320 380 L340 320 Z" fill="#26334a"/>
  <path d="M296 296 C298 312 304 322 320 326 C336 322 342 312 344 296 Z" fill="url(#av-neck)"/>
  </g>
  <g id="av-head">
    <path d="M246 190 C236 120 280 82 322 82 C372 82 410 118 398 196 C396 230 392 260 386 270 C380 230 378 200 372 186 L268 186 C262 200 260 232 254 270 C248 258 246 226 246 190 Z" fill="url(#av-hair)"/>
    <path d="M294 262 L294 290 C306 298 334 298 346 290 L346 262 Z" fill="url(#av-neck)"/>
    <ellipse cx="262" cy="214" rx="11" ry="19" fill="#d09a7a"/><ellipse cx="378" cy="214" rx="11" ry="19" fill="#d09a7a"/>
    <path d="M264 170 C264 128 290 108 320 108 C350 108 376 128 376 170 C376 222 370 254 352 274 C342 286 332 292 320 292 C308 292 298 286 288 274 C270 254 264 222 264 170 Z" fill="url(#av-skin)"/>
    <ellipse cx="288" cy="238" rx="14" ry="8" fill="#e08e7a" opacity="0.18" filter="url(#av-soft)"/>
    <ellipse cx="352" cy="238" rx="14" ry="8" fill="#e08e7a" opacity="0.18" filter="url(#av-soft)"/>
    <path d="M262 176 C258 124 290 96 324 96 C362 96 386 124 380 178 C372 150 352 130 330 128 C316 140 290 148 270 150 C266 158 264 166 262 176 Z" fill="url(#av-hair)"/>
    <path d="M300 104 C320 98 346 100 362 112" stroke="#6a4c3a" stroke-width="3" fill="none" opacity="0.6" stroke-linecap="round"/>
    <g id="av-brows" fill="#3a271c">
      <path d="M280 186 C288 179 302 178 310 182 L309 186 C300 184 290 185 281 190 Z"/>
      <path d="M360 186 C352 179 338 178 330 182 L331 186 C340 184 350 185 359 190 Z"/>
    </g>
    <ellipse cx="296" cy="204" rx="11" ry="6.5" fill="#fbf7f2"/>
    <ellipse cx="344" cy="204" rx="11" ry="6.5" fill="#fbf7f2"/>
    <circle cx="297" cy="204" r="5.4" fill="#5b3f2c"/><circle cx="343" cy="204" r="5.4" fill="#5b3f2c"/>
    <circle cx="297" cy="204" r="2.5" fill="#120c08"/><circle cx="343" cy="204" r="2.5" fill="#120c08"/>
    <circle cx="299" cy="202" r="1.4" fill="#fff"/><circle cx="345" cy="202" r="1.4" fill="#fff"/>
    <path d="M284 202 C290 195 304 195 308 201" stroke="#3a271c" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M356 202 C350 195 336 195 332 201" stroke="#3a271c" stroke-width="2" fill="none" stroke-linecap="round"/>
    <g class="av-lids" fill="#d7a385"><ellipse cx="296" cy="204" rx="12.5" ry="8"/><ellipse cx="344" cy="204" rx="12.5" ry="8"/></g>
    <path d="M318 214 C317 230 310 239 313 244 C317 248 323 248 327 244" stroke="#b07a5e" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="320" cy="244" rx="10" ry="4" fill="#b07a5e" opacity="0.18"/>
    <ellipse id="av-inner" cx="320" cy="266" rx="19" ry="0" fill="#4a1d1d"/>
    <rect x="300" y="263" width="40" height="6" fill="#f4efe8" clip-path="url(#av-mouthclip)"/>
    <path d="M299 264 C306 258 314 257 320 260 C326 257 334 258 341 264 C332 267 308 267 299 264 Z" fill="#b5675b"/>
    <g id="av-lower"><path d="M301 266 C310 274 330 274 339 266 C330 269 310 269 301 266 Z" fill="#c4766a"/></g>
  </g>
  <style>.av-lids{transform-box:fill-box;transform-origin:center top;transform:scaleY(0);animation:avBlink 4.6s infinite}
  @keyframes avBlink{0%,93%,100%{transform:scaleY(0)}95.5%{transform:scaleY(1)}}</style>
</svg>`;

// ---------- presenter toolbar ----------
function renderDemoBar() {
  const bar = document.getElementById("demobar");
  if (!S.demo || !S.conditionId) return;
  bar.classList.remove("hidden");
  const voices = "speechSynthesis" in window ? englishVoices() : [];
  const current = voices.length ? pickVoice() : null;
  const short = { text: "Text", voice: "Voice", video: "Video" };
  const flawedOf = (c) => c.parts.flatMap((p) => p.cases).filter((x) => x.version === "flawed").map((x) => x.caseId).join(", ");
  const jumps = FLOW.map((f, i) => [i, f]).filter(([, f]) => f.screen !== "done");
  const jumpLabel = (f) => f.b === undefined ? f.screen : `part ${f.b + 1}: ${f.k === undefined ? f.screen : `${S.cases[f.b * PER_BLOCK + f.k].caseId} (${S.cases[f.b * PER_BLOCK + f.k].version}) ${f.screen}`}`;
  bar.innerHTML = `<b>Demo</b>
    <label>Condition <select id="dm-cond" style="max-width:220px">${CONDITIONS.map((c) => `<option value="${c.id}" ${c.id === S.conditionId ? "selected" : ""}>${c.id}: ${c.modalityOrder.map((m) => short[m]).join("→")} · flawed ${flawedOf(c)}</option>`).join("")}</select></label>
    <label>Speed <select id="dm-fast"><option value="0">Normal</option><option value="1" ${fast ? "selected" : ""}>Fast</option></select></label>
    ${voices.length ? `<label>Voice <select id="dm-voice" style="max-width:150px">${voices.map((v) => `<option ${current && v.name === current.name ? "selected" : ""}>${esc(v.name)}</option>`).join("")}</select></label>` : ""}
    <label>Jump to <select id="dm-jump" style="max-width:240px">${jumps.map(([i, f]) => `<option value="${i}" ${i === step ? "selected" : ""}>${jumpLabel(f)}</option>`).join("")}</select></label>`;
  bar.querySelector("#dm-cond").onchange = (e) => {
    setCondition(CONDITIONS.find((c) => c.id === e.target.value));
    go(FLOW.findIndex((f) => f.screen === "intro"));
  };
  bar.querySelector("#dm-fast").onchange = (e) => (fast = e.target.value === "1");
  const vs = bar.querySelector("#dm-voice");
  if (vs) vs.onchange = (e) => (voiceName = e.target.value);
  bar.querySelector("#dm-jump").onchange = (e) => go(Number(e.target.value));
}

// ---------- start ----------
(async function init() {
  let c = null;
  try {
    const a = await (await fetch("/api/assign")).json();
    S.participantId = a.participantId;
    c = CONDITIONS.find((x) => a.condition && x.id === a.condition.id);
  } catch {
    S.participantId = "P-" + Math.random().toString(16).slice(2, 8).toUpperCase();
  }
  const forced = params.get("condition"), first = params.get("modality");
  if (CONDITIONS.some((x) => x.id === forced)) c = CONDITIONS.find((x) => x.id === forced);
  else if (MODALITIES.includes(first)) c = CONDITIONS.find((x) => x.modalityOrder[0] === first);
  setCondition(c || CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)]);
  go(0);
})();
