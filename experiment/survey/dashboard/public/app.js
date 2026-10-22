// Researcher dashboard: loads raw rows from the API and computes every metric here.

const MODALITIES = ["text", "voice", "video"];
const VERSIONS = ["correct", "flawed"];
const DIFFICULTIES = ["easy", "medium", "hard"];
const LABEL = { text: "Text", voice: "Voice", video: "Video", correct: "Correct explanation", flawed: "Flawed explanation", easy: "Easy", medium: "Medium", hard: "Hard" };
const COLOR = { text: "var(--series-text)", voice: "var(--series-voice)", video: "var(--series-video)", correct: "var(--series-correct)", flawed: "var(--series-flawed)" };

const $ = (id) => document.getElementById(id);
const includeBox = $("include-incomplete");
let state = { data: null, balance: null, cases: null, open: new Set() };

// ---------- helpers ----------

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
const pct = (k, n) => (n ? `${Math.round((100 * k) / n)}%` : "–");
const sum = (rows, f) => rows.reduce((s, r) => s + (f(r) ? 1 : 0), 0);
const fmtDate = (iso) => (iso ? new Date(iso).toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" }) : "–");
const fmtSec = (ms) => (ms == null ? "–" : `${(ms / 1000).toFixed(1)} s`);
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

// 95% Wilson score interval
function wilson(k, n) {
  if (!n) return [0, 0];
  const z = 1.96, p = k / n, d = 1 + (z * z) / n;
  const c = (p + (z * z) / (2 * n)) / d;
  const h = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / d;
  return [Math.max(0, c - h), Math.min(1, c + h)];
}

async function getJson(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json();
}

// ---------- tooltip ----------

const tip = $("tooltip");
document.addEventListener("mouseover", (e) => {
  const t = e.target.closest("[data-tip]");
  if (!t) return (tip.hidden = true);
  tip.innerHTML = t.dataset.tip;
  tip.hidden = false;
});
document.addEventListener("mousemove", (e) => {
  if (tip.hidden) return;
  const x = Math.min(e.clientX + 14, window.innerWidth - tip.offsetWidth - 8);
  const y = e.clientY + 16 + tip.offsetHeight > window.innerHeight ? e.clientY - tip.offsetHeight - 10 : e.clientY + 16;
  tip.style.left = `${x}px`;
  tip.style.top = `${y}px`;
});

// ---------- bar chart ----------
// groups: [{ label, bars: [{ series, k, n, what }] }] — horizontal bars on a shared 0–100% axis.

function barChart(groups, { legend = true } = {}) {
  if (!groups.some((g) => g.bars.some((b) => b.n))) return `<div class="empty">No data yet.</div>`;
  const series = [...new Set(groups.flatMap((g) => g.bars.map((b) => b.series)))];
  const rows = groups
    .map((g) => {
      const bars = g.bars
        .map((b) => {
          const p = b.n ? b.k / b.n : 0;
          const [lo, hi] = wilson(b.k, b.n);
          const tipHtml = `<b>${esc(g.label)} · ${esc(LABEL[b.series])}</b><br>${esc(b.what)}: ${b.k} of ${b.n} (${pct(b.k, b.n)})<br>95% CI ${Math.round(lo * 100)}–${Math.round(hi * 100)}%`;
          return `<div class="track" data-tip="${esc(tipHtml)}">
              <div class="bar" style="width:${b.n ? Math.max(p * 100, 0.5) : 0}%;background:${COLOR[b.series]}"></div>
              <span class="val">${b.n ? pct(b.k, b.n) : "–"} <span class="n">n=${b.n}</span></span>
            </div>`;
        })
        .join("");
      return `<div class="row-label">${esc(g.label)}</div><div class="bars">${bars}</div>`;
    })
    .join("");
  const ticks = [0, 25, 50, 75, 100].map((t) => `<span style="left:${t}%">${t}%</span>`).join("");
  const legendHtml =
    legend && series.length > 1
      ? `<div class="legend small">${series.map((s) => `<span><span class="swatch" style="background:${COLOR[s]}"></span>${esc(LABEL[s])}</span>`).join("")}</div>`
      : "";
  return `<div class="chart">${rows}<div></div><div class="ticks">${ticks}</div></div>${legendHtml}`;
}

// The value label sits inside the same 100% track as the bar, so bars stop at ~85% to leave room for it.
function fixBarScale() {
  document.querySelectorAll(".chart .bar").forEach((b) => {
    if (!b.dataset.w) b.dataset.w = b.style.width;
    b.style.width = `calc(${b.dataset.w} * 0.85)`;
  });
  document.querySelectorAll(".chart .ticks span").forEach((s) => {
    if (!s.dataset.l) s.dataset.l = s.style.left;
    s.style.left = `calc(${s.dataset.l} * 0.85)`;
  });
}

// ---------- sections ----------

function renderNotices() {
  const notes = [];
  const { errors } = state.cases;
  if (errors.length) notes.push(`<div class="notice"><b>The cases are not set up correctly. New surveys cannot start until this is fixed:</b><ul>${errors.map((e) => `<li>${esc(e)}</li>`).join("")}</ul></div>`);
  const missing = state.cases.cases.reduce((s, c) => s + Object.values(c.files).filter((v) => !v).length, 0);
  if (missing) notes.push(`<div class="notice info">${missing} explanation file(s) are still missing. Participants see a placeholder instead. See "Cases &amp; stimuli" below.</div>`);
  if (state.data.counts.demo) notes.push(`<div class="notice info">${state.data.counts.demo} demo survey(s) are included in the results. Delete them before analysing real data.</div>`);
  if (state.data.counts.simulated) notes.push(`<div class="notice info">${state.data.counts.simulated} simulated survey(s) are included in the results. Delete them before analysing real data.</div>`);
  $("notices").innerHTML = notes.join("");
}

function renderKpis() {
  const { counts, surveys, answers } = state.data;
  const finished = surveys.filter((s) => s.completed_at);
  const durations = finished.map((s) => (new Date(s.completed_at) - new Date(s.created_at)) / 60000);
  const target = answers.filter((a) => a.adopted_flaw !== null);
  const tiles = [
    ["Finished surveys", counts.completed || 0, [counts.simulated && `${counts.simulated} simulated`, counts.demo && `${counts.demo} demo`].filter(Boolean).join(", ") || "real participants"],
    ["Unfinished", counts.incomplete || 0, "started, not submitted"],
    ["Median duration", durations.length ? `${median(durations).toFixed(1)} min` : "–", "finished surveys"],
    ["Overall accuracy", pct(sum(answers, (a) => a.is_correct), answers.length), `${answers.length} answers`],
    ["Flaw adoption", pct(sum(target, (a) => a.adopted_flaw), target.length), `${target.length} flawed explanations`],
  ];
  $("kpis").innerHTML = tiles
    .map(([l, v, s]) => `<div class="kpi"><div class="label">${l}</div><div class="value">${v}</div><div class="sub">${s}</div></div>`)
    .join("");
}

function median(xs) {
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function renderExports() {
  const inc = includeBox.checked ? "?include=all" : "";
  const files = [
    ["answers.csv", "Answers (CSV)"],
    ["explanations.csv", "Explanations (CSV)"],
    ["surveys.csv", "Surveys (CSV)"],
    ["all.json", "Everything (JSON)"],
  ];
  $("exports").innerHTML = files.map(([f, l]) => `<a class="btn ${f === "answers.csv" ? "" : "secondary"}" href="/api/export/${f}${inc}">${l}</a>`).join("");
}

function renderBalance() {
  const { conditions, cells, activeHours } = state.balance;
  const caseTitle = Object.fromEntries(state.cases.cases.map((c) => [c.id, c.title]));
  const load = (c) => c.completed + c.in_progress;
  const min = Math.min(...conditions.map(load));
  const done = conditions.map((c) => c.completed);
  $("balance-note").textContent = `Real participants only (simulated and demo surveys are left out). Unfinished surveys stop counting after ${activeHours} h, so their set is handed out again.`;

  $("conditions").innerHTML = conditions
    .map((c) => {
      const steps = c.steps
        .map((s) => `${esc(LABEL[s.modality])} · ${s.version === "flawed" ? `<b>flawed (${s.flawedQuestion})</b>` : "correct"} · ${esc(caseTitle[s.caseId] || s.caseId)}`)
        .join("<br>");
      const tipHtml = `<b>${c.id}</b><br>${c.completed} finished · ${c.in_progress} in progress · ${c.abandoned} abandoned<br><br>${steps}`;
      return `<div class="cond ${load(c) === min ? "min" : ""}" data-tip="${esc(tipHtml)}">
          <div class="id">${c.id}</div><div class="n">${c.completed}</div><div class="ip">${c.in_progress ? `+${c.in_progress} active` : ""}</div>
        </div>`;
    })
    .join("");
  $("conditions-legend").innerHTML = `<span>Big number = finished</span><span>+n active = in progress</span><span><span class="swatch outline"></span>next in line</span>`;

  const count = (caseId, m, v) => cells.find((x) => x.case_id === caseId && x.modality === m && x.version === v)?.n || 0;
  const all = state.cases.cases.flatMap((c) => MODALITIES.flatMap((m) => VERSIONS.map((v) => count(c.id, m, v))));
  $("cells-note").textContent =
    `Finished surveys per combination: min ${Math.min(...all)}, max ${Math.max(...all)}. ` +
    `Sets: min ${Math.min(...done)}, max ${Math.max(...done)} finished each. These numbers should stay level.`;
  const head = MODALITIES.flatMap((m) => VERSIONS.map((v) => `<th class="num">${LABEL[m]}<br><span class="muted">${v}</span></th>`)).join("");
  const body = state.cases.cases
    .map((c) => `<tr><td>${esc(c.title)}</td>${MODALITIES.flatMap((m) => VERSIONS.map((v) => `<td class="num">${count(c.id, m, v)}</td>`)).join("")}</tr>`)
    .join("");
  $("cells").innerHTML = `<table><thead><tr><th>Case</th>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function renderCharts() {
  const A = state.data.answers;
  const flawedTargets = A.filter((a) => a.adopted_flaw !== null);
  const adoption = (rows) => ({ k: sum(rows, (a) => a.adopted_flaw), n: rows.length, what: "Picked the flawed answer" });

  $("chart-adoption").innerHTML = barChart(
    MODALITIES.map((m) => ({ label: LABEL[m], bars: [{ series: m, ...adoption(flawedTargets.filter((a) => a.modality === m)) }] })),
    { legend: false }
  );

  $("chart-adoption-diff").innerHTML = barChart(
    DIFFICULTIES.map((d) => ({
      label: `${LABEL[d]} question`,
      bars: MODALITIES.map((m) => ({ series: m, ...adoption(flawedTargets.filter((a) => a.modality === m && a.question_difficulty === d)) })),
    }))
  );

  const targets = A.filter((a) => a.is_flaw_target);
  $("chart-target").innerHTML = barChart(
    DIFFICULTIES.map((d) => ({
      label: `${LABEL[d]} question`,
      bars: VERSIONS.map((v) => {
        const rows = targets.filter((a) => a.version === v && a.question_difficulty === d);
        return { series: v, k: sum(rows, (a) => a.is_correct), n: rows.length, what: "Answered correctly" };
      }),
    }))
  );

  $("chart-accuracy").innerHTML = barChart(
    MODALITIES.map((m) => ({
      label: LABEL[m],
      bars: VERSIONS.map((v) => {
        const rows = A.filter((a) => a.modality === m && a.version === v);
        return { series: v, k: sum(rows, (a) => a.is_correct), n: rows.length, what: "Answered correctly" };
      }),
    }))
  );
  fixBarScale();
}

function renderTables() {
  const A = state.data.answers;
  const cell = (rows, f) => `<td class="num" data-tip="${esc(`${sum(rows, f)} of ${rows.length}`)}">${pct(sum(rows, f), rows.length)}</td>`;

  // Per case
  const caseRows = state.cases.cases.map((c) => {
    const rows = A.filter((a) => a.case_id === c.id);
    const corr = rows.filter((a) => a.version === "correct");
    const flawedT = rows.filter((a) => a.adopted_flaw !== null);
    const baseline = rows.filter((a) => a.version === "correct" && a.is_flaw_target);
    const seen = new Set(rows.map((a) => a.survey_id + a.position)).size;
    return `<tr><td>${esc(c.title)}</td><td>${LABEL[c.flawedQuestion] || "–"}</td><td class="num">${seen}</td>
      ${cell(corr, (a) => a.is_correct)}
      ${cell(baseline, (a) => a.chose_flaw_option)}
      ${MODALITIES.map((m) => cell(flawedT.filter((a) => a.modality === m), (a) => a.adopted_flaw)).join("")}
      ${cell(flawedT, (a) => a.adopted_flaw)}</tr>`;
  });
  $("per-case").innerHTML = `<table><thead><tr><th>Case</th><th>Error targets</th><th class="num">Shown</th>
      <th class="num">Accuracy<br><span class="muted">correct expl.</span></th>
      <th class="num">Flawed answer<br><span class="muted">without error (baseline)</span></th>
      ${MODALITIES.map((m) => `<th class="num">Adoption<br><span class="muted">${LABEL[m]}</span></th>`).join("")}
      <th class="num">Adoption<br><span class="muted">all</span></th></tr></thead><tbody>${caseRows.join("")}</tbody></table>`;

  // Accuracy by difficulty × modality × version
  const diffRows = DIFFICULTIES.map(
    (d) => `<tr><td>${LABEL[d]}</td>${MODALITIES.flatMap((m) =>
      VERSIONS.map((v) => cell(A.filter((a) => a.question_difficulty === d && a.modality === m && a.version === v), (a) => a.is_correct))
    ).join("")}</tr>`
  );
  $("per-difficulty").innerHTML = `<table><thead><tr><th>Question</th>${MODALITIES.flatMap((m) =>
    VERSIONS.map((v) => `<th class="num">${LABEL[m]}<br><span class="muted">${v} expl.</span></th>`)
  ).join("")}</tr></thead><tbody>${diffRows.join("")}</tbody></table>`;

  // Confidence (1–5): mean per modality, split by version and by outcome
  const conf = (rows) => {
    const xs = rows.map((a) => a.confidence).filter((c) => c != null);
    return `<td class="num" data-tip="${esc(`n = ${xs.length}`)}">${xs.length ? mean(xs).toFixed(2) : "–"}</td>`;
  };
  const confCols = [
    ["All answers", () => true],
    ["After correct expl.", (a) => a.version === "correct"],
    ["After flawed expl.", (a) => a.version === "flawed"],
    ["When correct", (a) => a.is_correct],
    ["When wrong", (a) => !a.is_correct],
    ["When adopting the flaw", (a) => a.adopted_flaw === 1],
    ["When resisting the flaw", (a) => a.adopted_flaw === 0 && a.is_correct],
  ];
  const confRows = [...MODALITIES, null].map((m) => {
    const rows = A.filter((a) => m === null || a.modality === m);
    return `<tr><td>${m ? LABEL[m] : "<b>All</b>"}</td>${confCols.map(([, f]) => conf(rows.filter(f))).join("")}</tr>`;
  });
  $("confidence").innerHTML = `<table><thead><tr><th>Modality</th>${confCols.map(([l]) => `<th class="num">${l}</th>`).join("")}</tr></thead><tbody>${confRows.join("")}</tbody></table>`;

  // Exposure
  const E = state.data.explanations;
  const expRows = MODALITIES.map((m) => {
    const rows = E.filter((e) => e.modality === m && e.done_at);
    const ans = A.filter((a) => a.modality === m && a.response_ms != null);
    const plays = rows.filter((e) => e.plays != null).map((e) => e.plays);
    return `<tr><td>${LABEL[m]}</td><td class="num">${rows.length}</td>
      <td class="num">${fmtSec(rows.length ? median(rows.map((e) => e.explanation_ms || 0)) : null)}</td>
      <td class="num">${m === "text" || !plays.length ? "–" : mean(plays).toFixed(2)}</td>
      <td class="num">${fmtSec(ans.length ? median(ans.map((a) => a.response_ms)) : null)}</td></tr>`;
  });
  $("exposure").innerHTML = `<table><thead><tr><th>Modality</th><th class="num">Explanations</th><th class="num">Median time on explanation</th>
    <th class="num">Mean plays</th><th class="num">Median time per question</th></tr></thead><tbody>${expRows.join("")}</tbody></table>`;
}

function renderSurveys() {
  const { surveys, answers } = state.data;
  if (!surveys.length) return ($("surveys").innerHTML = `<div class="empty">No surveys yet.</div>`);
  const rows = surveys.map((s) => {
    const status = s.completed_at ? "finished" : "unfinished";
    const minutes = s.completed_at ? `${((new Date(s.completed_at) - new Date(s.created_at)) / 60000).toFixed(1)} min` : "–";
    const main = `<tr class="clickable" data-id="${esc(s.id)}">
      <td><b>${esc(s.id)}</b> ${s.simulated ? '<span class="tag sim">simulated</span>' : ""}${s.demo ? '<span class="tag sim">demo</span>' : ""}</td>
      <td><span class="tag">${status}</span></td>
      <td>${esc(s.condition_id)}</td>
      <td>${fmtDate(s.created_at)}</td>
      <td class="num">${minutes}</td>
      <td class="num">${s.correct ?? 0} / ${s.answered}</td>
      <td class="num">${s.flaws_adopted ?? 0} / 3</td>
      <td><button class="danger" data-delete="${esc(s.id)}">Delete</button></td></tr>`;
    if (!state.open.has(s.id)) return main;
    const mine = answers.filter((a) => a.survey_id === s.id);
    const detail = mine.length
      ? `<table><thead><tr><th>#</th><th>Case</th><th>Modality</th><th>Version</th><th>Question</th><th>Answer</th><th>Correct</th><th>Result</th><th class="num">Confidence</th><th class="num">Time</th></tr></thead><tbody>${mine
          .map(
            (a) => `<tr><td>${a.position}</td><td>${esc(a.case_title)}</td><td>${LABEL[a.modality]}</td><td>${a.version}</td>
              <td>${LABEL[a.question_difficulty]}${a.is_flaw_target ? " ★" : ""}</td><td>${esc(a.selected)}: ${esc(a.selected_text)}</td><td>${esc(a.correct_option)}</td>
              <td>${a.is_correct ? "correct" : a.adopted_flaw ? "<b>adopted flaw</b>" : "wrong"}</td><td class="num">${a.confidence ?? "–"} / 5</td><td class="num">${fmtSec(a.response_ms)}</td></tr>`
          )
          .join("")}</tbody></table><p class="muted small">★ = the question the case's error targets.</p>`
      : `<p class="muted small">No answers yet.</p>`;
    return main + `<tr class="detail"><td colspan="8"><p class="plan"><b>Order shown:</b> ${esc(s.plan)}</p>${detail}</td></tr>`;
  });
  $("surveys").innerHTML = `<table><thead><tr><th>Survey</th><th>Status</th><th>Condition</th><th>Started</th><th class="num">Duration</th>
    <th class="num">Correct</th><th class="num">Flaws adopted</th><th></th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function renderStimuli() {
  const cols = MODALITIES.flatMap((m) => VERSIONS.map((v) => `${m}_${v}`));
  const ext = { text: "txt", voice: "mp3", video: "mp4" };
  const head = cols.map((c) => `<th>${c}.${ext[c.split("_")[0]]}</th>`).join("");
  const body = state.cases.cases
    .map(
      (c) => `<tr><td><code>${esc(c.id)}</code></td><td>${esc(c.title)}</td><td>${LABEL[c.flawedQuestion] || "–"}</td>
        ${cols.map((k) => (c.files[k] ? `<td class="ok">✓ found</td>` : `<td class="missing">✗ missing</td>`)).join("")}</tr>`
    )
    .join("");
  $("stimuli").innerHTML = `<table><thead><tr><th>Folder</th><th>Title</th><th>Error targets</th>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

// ---------- load & events ----------

async function load() {
  const inc = includeBox.checked ? "?include=all" : "";
  try {
    const [data, balance, cases] = await Promise.all([getJson(`/api/data${inc}`), getJson("/api/balance"), getJson("/api/cases")]);
    state = { ...state, data, balance, cases };
  } catch (e) {
    $("notices").innerHTML = `<div class="notice">Could not load data: ${esc(e.message)}</div>`;
    return;
  }
  renderNotices();
  renderKpis();
  renderExports();
  renderBalance();
  renderCharts();
  renderTables();
  renderSurveys();
  renderStimuli();
}

$("refresh").addEventListener("click", load);
includeBox.addEventListener("change", () => {
  try {
    localStorage.setItem("includeIncomplete", includeBox.checked ? "1" : "");
  } catch {}
  load();
});

$("surveys").addEventListener("click", async (e) => {
  const del = e.target.closest("[data-delete]");
  if (del) {
    e.stopPropagation();
    if (!confirm(`Delete survey ${del.dataset.delete} and all its answers? This cannot be undone.`)) return;
    await fetch(`/api/surveys/${encodeURIComponent(del.dataset.delete)}`, { method: "DELETE" });
    return load();
  }
  const row = e.target.closest("tr[data-id]");
  if (!row) return;
  const id = row.dataset.id;
  state.open.has(id) ? state.open.delete(id) : state.open.add(id);
  renderSurveys();
});

for (const [btn, which, msg] of [
  ["delete-simulated", "simulated", "Delete all simulated surveys?"],
  ["delete-demo", "demo", "Delete all demo surveys?"],
  ["delete-incomplete", "incomplete", "Delete all unfinished surveys (including ones that may still be in progress)?"],
]) {
  $(btn).addEventListener("click", async () => {
    if (!confirm(msg + " This cannot be undone.")) return;
    await fetch(`/api/surveys?which=${which}`, { method: "DELETE" });
    load();
  });
}

try {
  includeBox.checked = localStorage.getItem("includeIncomplete") === "1";
} catch {}
load();
setInterval(load, 30000);
