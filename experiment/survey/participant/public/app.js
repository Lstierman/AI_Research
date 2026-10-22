// Participant flow: welcome → 6 × (explanation → 3 questions) → thank you.
// A refresh resumes the same survey (sessionStorage); a new tab or visit starts a new one.

const app = document.getElementById("app");
const STORE_KEY = "surveyId";
const MODALITY_LABEL = { text: "Text explanation", voice: "Voice explanation", video: "Video explanation" };
const CONFIDENCE = ["Not sure at all", "Slightly sure", "Moderately sure", "Very sure", "Completely sure"];

// Demo links: ?first=case3 starts with case3 as a text explanation; add &modality=voice|video
// and/or &version=correct|flawed to choose how it's shown.
const params = new URLSearchParams(location.search);
const DEMO = params.get("first")
  ? { first: params.get("first"), modality: params.get("modality") || "text", version: params.get("version") || undefined }
  : null;

let survey = null; // { id, totalSteps }
const stepCache = {};

// ---------- helpers ----------

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) if (c != null) node.append(c);
  return node;
}

// Text with red hearts and diamonds, so card notation reads like real cards.
function rich(text) {
  return String(text)
    .split(/([♥♦♡♢])/)
    .filter(Boolean)
    .map((part) => (/^[♥♦♡♢]$/.test(part) ? el("span", { class: "suit-red" }, part) : part));
}

// Question prompt: each line of the prompt ("\n" in case.json) is its own line. Short "Label: value"
// lines (e.g. "Your hand: 9♥ 4♥") are shown as an aligned block; the last line, the question itself, in bold.
function promptBlock(prompt) {
  const lines = String(prompt || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const nodes = [];
  let facts = null;
  lines.forEach((line, i) => {
    const fact = line.match(/^([^:]{1,30}):\s+(.+)$/);
    if (fact && i < lines.length - 1) {
      if (!facts) nodes.push((facts = el("dl", { class: "facts" })));
      facts.append(el("dt", {}, fact[1]), el("dd", {}, ...rich(fact[2])));
      return;
    }
    facts = null;
    nodes.push(el("p", { class: i === lines.length - 1 ? "ask" : "" }, ...rich(line)));
  });
  return el("div", { class: "prompt" }, ...nodes);
}

// Plain-text formatting for explanations: blank lines separate paragraphs, lines starting with
// "1. " or "- " form lists, lines starting with "> " are set apart (e.g. a formula). Other line
// breaks inside a paragraph are ignored, so hard-wrapped text still reads as one paragraph.
function paragraphs(text) {
  const nodes = [];
  for (const block of String(text || "").split(/\r?\n\s*\r?\n/)) {
    let para = [];
    let list = null;
    const flushPara = () => {
      if (para.length) nodes.push(el("p", {}, ...rich(para.join(" "))));
      para = [];
    };
    for (const raw of block.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line) continue;
      const item = line.match(/^(\d+)[.)]\s+(.*)$/) || line.match(/^([-*•])\s+(.*)$/);
      if (item) {
        flushPara();
        const tag = /\d/.test(item[1]) ? "ol" : "ul";
        if (!list || list.tagName.toLowerCase() !== tag) nodes.push((list = el(tag, tag === "ol" ? { start: item[1] } : {})));
        list.append(el("li", {}, ...rich(item[2])));
        continue;
      }
      list = null;
      if (line.startsWith(">")) {
        flushPara();
        nodes.push(el("p", { class: "callout" }, ...rich(line.replace(/^>\s*/, ""))));
      } else para.push(line);
    }
    flushPara();
  }
  return nodes;
}

async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || `Request failed (${res.status})`), { status: res.status });
  return data;
}

// The survey is stored together with the URL query it was started from, so opening a
// different (demo) link in the same tab starts a new survey instead of resuming the old one.
function store(id) {
  try {
    if (id) sessionStorage.setItem(STORE_KEY, JSON.stringify({ id, query: location.search }));
    else sessionStorage.removeItem(STORE_KEY);
  } catch {}
}

function stored() {
  try {
    const s = JSON.parse(sessionStorage.getItem(STORE_KEY));
    return s && s.query === location.search ? s.id : null;
  } catch {
    return null;
  }
}

function setProgress(position, answeredInStep) {
  const bar = document.getElementById("progress");
  const label = document.getElementById("progress-label");
  if (!survey || position == null) {
    bar.hidden = true;
    label.textContent = "";
    return;
  }
  bar.hidden = false;
  const total = survey.totalSteps * 4; // explanation + 3 questions per step
  const done = (position - 1) * 4 + answeredInStep;
  document.getElementById("progress-bar").style.width = `${(100 * done) / total}%`;
  label.textContent = `Part ${position} of ${survey.totalSteps}`;
}

function render(...nodes) {
  app.replaceChildren(...nodes);
  window.scrollTo(0, 0);
}

function showError(e) {
  render(
    el("div", { class: "card" },
      el("h2", {}, "Something went wrong"),
      el("p", { class: "error" }, e.message),
      el("button", { class: "secondary", onclick: () => location.reload() }, "Try again"))
  );
}

async function loadStep(position) {
  if (!stepCache[position]) stepCache[position] = await api("GET", `/api/surveys/${survey.id}/steps/${position}`);
  return stepCache[position];
}

function contextBlock(step) {
  if (!step.context) return null;
  return el("div", { class: "context" }, el("div", { class: "eyebrow" }, "Situation"), ...paragraphs(step.context));
}

// ---------- screens ----------

function welcome() {
  setProgress(null);
  const consent = el("input", { type: "checkbox", id: "consent" });
  const start = el("button", { disabled: true }, "Start");
  consent.addEventListener("change", () => (start.disabled = !consent.checked));
  start.addEventListener("click", async () => {
    start.disabled = true;
    try {
      const s = await api("POST", "/api/surveys", DEMO || undefined);
      survey = { id: s.id, totalSteps: s.totalSteps };
      store(s.id);
      showExplanation(1);
    } catch (e) {
      showError(e);
    }
  });

  const demoNote = DEMO
    ? el("div", { class: "demo-note small" },
        `Demo mode: starts with ${DEMO.first}` +
          (DEMO.modality || DEMO.version ? ` (${[DEMO.modality, DEMO.version].filter(Boolean).join(", ")})` : "") +
          ". Not counted as a real participant.")
    : null;

  render(
    demoNote,
    el("div", { class: "card" },
      el("h1", {}, "AI Research Seminar - Group 2"),
      el("p", {}, "In this study an AI assistant explains six short topics to you. Some explanations are written, some are spoken and some are videos. After each explanation you answer three multiple-choice questions about it."),
      el("p", {}, "Please use headphones or turn on your sound. You can replay audio and video as often as you like, but once you move on to the questions you can't go back to the explanation."),
      el("p", { class: "muted small" }, "The study takes about 20–25 minutes. Your answers are stored anonymously and used only for this research project. You can stop at any time by closing the page."),
      el("label", { class: "option", for: "consent" }, consent, el("span", {}, "I am 18 or older and agree to take part in this study.")),
      el("div", { class: "actions" }, el("span"), start))
  );
}

async function showExplanation(position) {
  setProgress(position, 0);
  let step;
  try {
    step = await loadStep(position);
  } catch (e) {
    return showError(e);
  }

  const shownAt = performance.now();
  let plays = 0;
  let finishedOnce = step.modality === "text" || !step.mediaAvailable;
  const next = el("button", { disabled: !finishedOnce }, "Continue to the questions");
  const hint = el("span", { class: "small muted" }, finishedOnce ? "" : `Play the ${step.modality === "video" ? "video" : "audio"} to the end to continue.`);

  function trackMedia(media, wrapper) {
    media.addEventListener("play", () => {
      if (media.currentTime < 0.5 || media.ended) plays++;
      wrapper && wrapper.classList.add("playing");
    });
    media.addEventListener("pause", () => wrapper && wrapper.classList.remove("playing"));
    media.addEventListener("ended", () => {
      wrapper && wrapper.classList.remove("playing");
      finishedOnce = true;
      next.disabled = false;
      hint.textContent = "You can replay it, or continue.";
    });
  }

  let body;
  if (!step.mediaAvailable) {
    body = el("div", { class: "placeholder" }, `Placeholder: this ${step.modality} explanation has not been added yet.`);
  } else if (step.modality === "text") {
    body = el("div", { class: "assistant" }, el("div", { class: "avatar", "aria-hidden": "true" }, "AI"), el("div", { class: "bubble" }, ...paragraphs(step.text)));
  } else if (step.modality === "voice") {
    const audio = el("audio", { src: step.mediaUrl, controls: true, preload: "auto", controlslist: "nodownload noplaybackrate" });
    body = el("div", { class: "voice-player" }, el("div", { class: "avatar", "aria-hidden": "true" }, "AI"), el("div", { class: "small muted" }, "AI assistant"), audio);
    trackMedia(audio, body);
  } else {
    const video = el("video", { src: step.mediaUrl, controls: true, preload: "auto", playsinline: true, controlslist: "nodownload noplaybackrate", disablepictureinpicture: true });
    body = video;
    trackMedia(video);
  }

  next.addEventListener("click", async () => {
    next.disabled = true;
    try {
      await api("POST", `/api/surveys/${survey.id}/steps/${position}/explanation`, { ms: performance.now() - shownAt, plays });
      document.querySelectorAll("audio, video").forEach((m) => m.pause());
      showQuestion(position, 0);
    } catch (e) {
      showError(e);
    }
  });

  render(
    el("div", { class: "card" },
      el("div", { class: "eyebrow" }, MODALITY_LABEL[step.modality]),
      el("h2", {}, step.title),
      contextBlock(step),
      body,
      el("div", { class: "actions" }, hint, next))
  );
}

async function showQuestion(position, index) {
  setProgress(position, index + 1);
  let step;
  try {
    step = await loadStep(position);
  } catch (e) {
    return showError(e);
  }
  const q = step.questions[index];
  const shownAt = performance.now();
  const name = `q-${position}-${q.difficulty}`;
  const next = el("button", { disabled: true }, index < step.questions.length - 1 ? "Next question" : position < survey.totalSteps ? "Next explanation" : "Finish");

  const confName = `${name}-confidence`;
  const checked = (n) => app.querySelector(`input[name="${n}"]:checked`);
  const update = () => (next.disabled = !(checked(name) && checked(confName)));

  const options = Object.entries(q.options).map(([key, text]) => {
    const input = el("input", { type: "radio", name, value: key, id: `${name}-${key}`, onchange: update });
    return el("label", { class: "option", for: `${name}-${key}` }, input, el("span", { class: "key" }, key), el("span", {}, text));
  });

  const confidence = CONFIDENCE.map((label, i) => {
    const id = `${confName}-${i + 1}`;
    const input = el("input", { type: "radio", name: confName, value: i + 1, id, onchange: update });
    return el("label", { class: "level", for: id }, input, el("span", { class: "num" }, String(i + 1)), el("span", { class: "label" }, label));
  });

  next.addEventListener("click", async () => {
    const selected = checked(name);
    const conf = checked(confName);
    if (!selected || !conf) return;
    next.disabled = true;
    try {
      await api("POST", `/api/surveys/${survey.id}/steps/${position}/answers`, {
        difficulty: q.difficulty,
        selected: selected.value,
        confidence: Number(conf.value),
        ms: performance.now() - shownAt,
      });
      if (index < step.questions.length - 1) showQuestion(position, index + 1);
      else if (position < survey.totalSteps) showExplanation(position + 1);
      else finish();
    } catch (e) {
      showError(e);
    }
  });

  render(
    el("div", { class: "card" },
      el("div", { class: "eyebrow" }, `${step.title} · Question ${index + 1} of ${step.questions.length}`),
      promptBlock(q.prompt),
      el("div", { class: "options", role: "radiogroup" }, options),
      el("div", { class: "confidence" },
        el("div", { class: "confidence-q", id: `${confName}-label` }, "How sure are you of your answer?"),
        el("div", { class: "scale", role: "radiogroup", "aria-labelledby": `${confName}-label` }, confidence)),
      el("div", { class: "actions" }, el("span"), next))
  );
}

async function finish() {
  try {
    await api("POST", `/api/surveys/${survey.id}/complete`);
  } catch (e) {
    return showError(e);
  }
  store(null);
  setProgress(null);
  render(
    el("div", { class: "card" },
      el("h1", {}, "Thank you!"),
      el("p", {}, "Your answers have been saved. You can close this page now."),
      el("p", { class: "muted small" }, "Note: some of the explanations in this study deliberately contained a mistake. Please don't rely on what you learned here, and please don't tell other potential participants about this until the study is finished."))
  );
}

// ---------- start / resume ----------

(async function init() {
  const id = stored();
  if (!id) return welcome();
  try {
    const s = await api("GET", `/api/surveys/${id}`);
    if (s.completed) throw new Error("done");
    survey = { id: s.id, totalSteps: s.totalSteps };
    if (s.position == null) return finish();
    if (s.phase === "explanation") return showExplanation(s.position);
    return showQuestion(s.position, s.answered.length);
  } catch {
    store(null);
    welcome();
  }
})();
