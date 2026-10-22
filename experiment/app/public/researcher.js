// Researcher dashboard: loads /api/responses, scores them with shared.js and
// draws the pre-registered outcomes per modality (experiment-design.md, Analysis plan).
// Proportions pool observations across participants; they ignore clustering within
// participants and cases, so the CIs are too narrow. The real analysis is the mixed model
// on the CSV export.

const MODS = MODALITIES;
const COLOR = { text: "var(--s1)", voice: "var(--s2)", video: "var(--s3)" };
// Ordinal blue ramp for "how did you answer" (independent -> AI-reliant), gray for guessing.
const HOW_COLOR = { self: "#184f95", checked: "#3987e5", used_ai: "#86b6ef", guessed: "#a9a79f" };
const QLABEL = ["Q1 · easy", "Q2 · medium", "Q3 · hard"];

let rows = [];
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const pct = (x) => (x === null || isNaN(x) ? "–" : Math.round(x * 100) + "%");
const num = (x, d = 1) => (x === null || x === undefined || isNaN(x) ? "–" : x.toFixed(d));
const mean = (a) => (a.length ? a.reduce((s, x) => s + x, 0) / a.length : null);
const sd = (a) => { if (a.length < 2) return null; const m = mean(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); };
const ratio = (k, n) => (n ? k / n : null);

// Wilson 95% interval for a proportion.
function wilson(k, n) {
  if (!n) return [null, null];
  const z = 1.96, p = k / n, d = 1 + z * z / n;
  const c = (p + z * z / (2 * n)) / d, h = (z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n))) / d;
  return [Math.max(0, c - h), Math.min(1, c + h)];
}

const attention = (r) => (r.blocks && r.blocks[1] ? r.blocks[1].attentionCheck : null);
function exclusionReasons(r) {
  const why = [];
  if (attention(r) !== 5) why.push("attention check");
  if (r.final && r.final.usedTool === "Yes") why.push("used another tool");
  return why;
}

// ---------- data ----------
async function load() {
  try {
    rows = (await (await fetch("/api/responses")).json()).filter((r) => Array.isArray(r.cases)); // skips responses from earlier designs
  } catch {
    rows = [];
    $("notice").textContent = "Couldn't reach the server. Start it with: node server.js";
    return;
  }
  render();
}

function analysed() {
  return rows
    .filter((r) => $("incSim").checked || !r.simulated)
    .map((r) => ({ r, s: scoreResponse(r), excl: exclusionReasons(r) }))
    .filter((x) => !$("applyExcl").checked || x.excl.length === 0);
}

function summarise(list) {
  const out = {};
  for (const m of MODS) {
    const items = list.flatMap((x) => x.s.items.filter((i) => i.modality === m));
    const flawQs = items.filter((i) => i.isFlawQ);
    const perfectQs = items.filter((i) => i.version === "perfect");
    const cases = list.flatMap((x) => x.r.cases.filter((c) => c.modality === m));
    const blocks = list.map((x) => x.r.blocks.find((b) => b.modality === m)).filter(Boolean);
    const trustOf = (L) => L.map((c) => c.trust).filter((v) => v !== null && v !== undefined);
    const cal = calibration(items);
    out[m] = {
      n: list.length,
      flawN: flawQs.length,
      adopted: flawQs.filter((i) => i.adopted).length,
      resisted: flawQs.filter((i) => i.correct).length,
      byPos: Object.fromEntries([0, 1, 2].map((qi) => { const F = flawQs.filter((i) => i.q === qi + 1), P = perfectQs.filter((i) => i.q === qi + 1); return [qi, { flawN: F.length, adopted: F.filter((i) => i.adopted).length, perfN: P.length, perfCorrect: P.filter((i) => i.correct).length }]; })),
      perfN: perfectQs.length,
      perfCorrect: perfectQs.filter((i) => i.correct).length,
      // Mean trust per participant (each person counts once).
      trustPP: list.map((x) => ({ id: x.r.participantId, v: mean(trustOf(x.r.cases.filter((c) => c.modality === m))) })).filter((t) => t.v !== null),
      trustPerfect: mean(trustOf(cases.filter((c) => c.version === "perfect"))),
      trustFlawed: mean(trustOf(cases.filter((c) => c.version === "flawed"))),
      brier: cal.brier,
      overconf: cal.overconf,
      meanConf: mean(items.filter((i) => i.confidence != null).map((i) => i.confidence / 100)),
      allN: items.length,
      allCorrect: items.filter((i) => i.correct).length,
      how: Object.fromEntries(HOW_ANSWERED.map((h) => [h.id, blocks.filter((b) => b.howAnswered === h.id).length])),
      nBlocks: blocks.length,
      humanlike: mean(blocks.flatMap((b) => [b.ratings?.humanlike, b.ratings?.someone].filter(Boolean))),
      eerie: mean(blocks.map((b) => b.ratings?.eerie).filter(Boolean)),
      trustLikert: mean(blocks.flatMap((b) => [b.ratings?.reliable, b.ratings?.trusted].filter(Boolean))),
      plays: mean(cases.map((c) => c.plays).filter((v) => v != null)),
      calcUsed: cases.filter((c) => (c.calc || []).length).length,
      nCases: cases.length,
      named: list.filter((x) => x.r.cases.some((c) => c.modality === m && c.version === "flawed" && (x.r.final?.mistakeCases || []).includes(c.caseId))).length,
    };
  }
  return out;
}

// ---------- charts (plain SVG) ----------
const W = 560;
function axisX(x0, x1, y, ticks, fmtTick, h) {
  return ticks.map((t) => {
    const x = x0 + (x1 - x0) * t.p;
    return `<line x1="${x}" x2="${x}" y1="0" y2="${h}" stroke="var(--line)" stroke-width="1"/>
      <text x="${x}" y="${y}" font-size="11" fill="var(--muted)" text-anchor="middle">${fmtTick(t.v)}</text>`;
  }).join("");
}

// One horizontal bar with a Wilson CI whisker.
function bar(L, R, y, bh, kk, nn, color, tip) {
  const p = nn ? kk / nn : null, [lo, hi] = wilson(kk, nn), bw = p ? Math.max(0, (R - L) * p) : 0, r = Math.min(4, bw, bh / 2);
  return `<g class="hit" data-tip="${esc(tip + `<br>${pct(p)} (${kk} of ${nn})<br>95% CI ${pct(lo)}–${pct(hi)}`)}">
    <rect x="0" y="${y - 3}" width="${W}" height="${bh + 6}" fill="transparent"/>
    ${bw ? `<path class="mark" d="M${L} ${y} h${bw - r} a${r} ${r} 0 0 1 ${r} ${r} v${bh - 2 * r} a${r} ${r} 0 0 1 -${r} ${r} h-${bw - r} z" fill="${color}"/>` : ""}
    ${lo !== null ? `<line x1="${L + (R - L) * lo}" x2="${L + (R - L) * hi}" y1="${y + bh / 2}" y2="${y + bh / 2}" stroke="var(--ink-2)" stroke-width="1.5"/>
      <line x1="${L + (R - L) * lo}" x2="${L + (R - L) * lo}" y1="${y + bh * 0.25}" y2="${y + bh * 0.75}" stroke="var(--ink-2)" stroke-width="1.5"/>
      <line x1="${L + (R - L) * hi}" x2="${L + (R - L) * hi}" y1="${y + bh * 0.25}" y2="${y + bh * 0.75}" stroke="var(--ink-2)" stroke-width="1.5"/>` : ""}
    <text x="${R + 10}" y="${y + bh / 2 + 4.5}" font-size="12.5" fill="var(--ink)" font-weight="600">${pct(p)}</text>
    <text x="${R + 48}" y="${y + bh / 2 + 4.5}" font-size="11.5" fill="var(--muted)">${nn ? `${kk}/${nn}` : "no data"}</text>
  </g>`;
}

// Horizontal bars, one per modality, 0–100% with Wilson CI whiskers.
function propBars(S, k, n, extra) {
  const L = 92, R = W - 150, rowH = 42, top = 6, h = top + rowH * 3;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((v) => ({ v, p: v }));
  let s = `<svg class="chart" viewBox="0 0 ${W} ${h + 22}" role="img">` + axisX(L, R, h + 16, ticks, (v) => v * 100 + "%", h);
  MODS.forEach((m, i) => {
    const d = S[m], y = top + i * rowH + 9;
    s += `<text x="0" y="${y + 15}" font-size="12.5" fill="var(--ink)">${MODALITY_LABEL[m]}</text>`;
    s += bar(L, R, y, 22, k(d), n(d), COLOR[m], `<b>${MODALITY_LABEL[m]}</b>${extra ? "<br>" + extra(d) : ""}`);
  });
  return s + `</svg>`;
}

// Grouped bars: one group per question position (Q1–Q3), one bar per modality inside it.
function posBars(S, k, n) {
  const L = 92, R = W - 150, bh = 12, gap = 3, groupH = 3 * (bh + gap) + 16, top = 6, h = top + groupH * 3;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((v) => ({ v, p: v }));
  let s = `<svg class="chart" viewBox="0 0 ${W} ${h + 22}" role="img">` + axisX(L, R, h + 16, ticks, (v) => v * 100 + "%", h);
  [0, 1, 2].forEach((qi) => {
    const y0 = top + qi * groupH + 6;
    s += `<text x="0" y="${y0 + 1.5 * (bh + gap) + 4}" font-size="12.5" fill="var(--ink)">${QLABEL[qi]}</text>`;
    MODS.forEach((m, i) => (s += bar(L, R, y0 + i * (bh + gap), bh, k(S[m].byPos[qi]), n(S[m].byPos[qi]), COLOR[m], `<b>${MODALITY_LABEL[m]} · ${QLABEL[qi]}</b>`)));
  });
  return s + `</svg>`;
}

// Dot strip: every participant's mean trust in this modality, plus the mean as a tick.
function trustStrip(S) {
  const L = 92, R = W - 60, rowH = 44, top = 6, h = top + rowH * 3;
  const ticks = [0, 25, 50, 75, 100].map((v) => ({ v, p: v / 100 }));
  let s = `<svg class="chart" viewBox="0 0 ${W} ${h + 22}" role="img">` + axisX(L, R, h + 16, ticks, (v) => v, h);
  MODS.forEach((m, i) => {
    const d = S[m], cy = top + i * rowH + 20, vals = d.trustPP.map((t) => t.v), mu = mean(vals);
    s += `<text x="0" y="${cy + 4}" font-size="12.5" fill="var(--ink)">${MODALITY_LABEL[m]}</text>`;
    d.trustPP.forEach((t, j) => {
      const jit = (((j * 7919) % 13) / 13 - 0.5) * 18, cx = L + (R - L) * t.v / 100;
      s += `<g class="hit" data-tip="${esc(`<b>${t.id}</b><br>Mean trust ${num(t.v, 0)}`)}"><circle cx="${cx}" cy="${cy + jit}" r="9" fill="transparent"/>
        <circle class="mark" cx="${cx}" cy="${cy + jit}" r="4.5" fill="${COLOR[m]}" fill-opacity="0.75" stroke="var(--surface)" stroke-width="2"/></g>`;
    });
    if (mu !== null) {
      const mx = L + (R - L) * mu / 100;
      s += `<g class="hit" data-tip="${esc(`<b>${MODALITY_LABEL[m]}</b><br>Mean ${num(mu)} · SD ${num(sd(vals))} · n=${vals.length}`)}">
        <line x1="${mx}" x2="${mx}" y1="${cy - 16}" y2="${cy + 16}" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/>
        <text x="${R + 10}" y="${cy + 4}" font-size="12.5" font-weight="600" fill="var(--ink)">${num(mu, 0)}</text></g>`;
    }
  });
  return s + `</svg>`;
}

// Dumbbell: mean trust in perfect (hollow) vs. flawed (filled) explanations.
// A bigger gap means people sensed something was off while the AI was explaining.
function trustGap(S) {
  const L = 92, R = W - 90, rowH = 42, top = 6, h = top + rowH * 3;
  const ticks = [0, 25, 50, 75, 100].map((v) => ({ v, p: v / 100 }));
  let s = `<svg class="chart" viewBox="0 0 ${W} ${h + 22}" role="img">` + axisX(L, R, h + 16, ticks, (v) => v, h);
  MODS.forEach((m, i) => {
    const d = S[m], cy = top + i * rowH + 20, a = d.trustPerfect, b = d.trustFlawed;
    s += `<text x="0" y="${cy + 4}" font-size="12.5" fill="var(--ink)">${MODALITY_LABEL[m]}</text>`;
    if (a === null || b === null) return;
    const xa = L + (R - L) * a / 100, xb = L + (R - L) * b / 100;
    const tip = `<b>${MODALITY_LABEL[m]}</b><br>Perfect explanation: ${num(a, 0)}<br>Flawed explanation: ${num(b, 0)}<br>Gap: ${num(a - b, 0)} points`;
    s += `<g class="hit" data-tip="${esc(tip)}"><rect x="0" y="${cy - 14}" width="${W}" height="28" fill="transparent"/>
      <line x1="${xa}" x2="${xb}" y1="${cy}" y2="${cy}" stroke="${COLOR[m]}" stroke-width="3"/>
      <circle cx="${xa}" cy="${cy}" r="6" fill="var(--surface)" stroke="${COLOR[m]}" stroke-width="2.5"/>
      <circle class="mark" cx="${xb}" cy="${cy}" r="6" fill="${COLOR[m]}"/>
      <text x="${R + 10}" y="${cy + 4}" font-size="12.5" font-weight="600" fill="var(--ink)">${a - b >= 0 ? "−" : "+"}${num(Math.abs(a - b), 0)}</text></g>`;
  });
  return s + `</svg>`;
}

// Overconfidence (mean confidence − proportion correct), diverging from 0.
function overconfBars(S) {
  const L = 92, R = W - 60, rowH = 42, top = 6, h = top + rowH * 3, lim = 0.5;
  const X = (v) => L + (R - L) * (v + lim) / (2 * lim);
  const ticks = [-0.5, -0.25, 0, 0.25, 0.5].map((v) => ({ v, p: (v + lim) / (2 * lim) }));
  let s = `<svg class="chart" viewBox="0 0 ${W} ${h + 22}" role="img">` + axisX(L, R, h + 16, ticks, (v) => (v > 0 ? "+" : "") + Math.round(v * 100), h);
  s += `<line x1="${X(0)}" x2="${X(0)}" y1="0" y2="${h}" stroke="var(--line-strong)" stroke-width="1"/>`;
  MODS.forEach((m, i) => {
    const d = S[m], v = d.overconf, y = top + i * rowH + 9, bh = 22;
    s += `<text x="0" y="${y + 15}" font-size="12.5" fill="var(--ink)">${MODALITY_LABEL[m]}</text>`;
    if (v === null) return;
    const c = Math.max(-lim, Math.min(lim, v)), x0 = X(0), x1 = X(c), w = Math.abs(x1 - x0), r = Math.min(4, w);
    const path = c >= 0
      ? `M${x0} ${y} h${w - r} a${r} ${r} 0 0 1 ${r} ${r} v${bh - 2 * r} a${r} ${r} 0 0 1 -${r} ${r} h-${w - r} z`
      : `M${x0} ${y} h-${w - r} a${r} ${r} 0 0 0 -${r} ${r} v${bh - 2 * r} a${r} ${r} 0 0 0 ${r} ${r} h${w - r} z`;
    const tip = `<b>${MODALITY_LABEL[m]}</b><br>Mean confidence ${pct(d.meanConf)}<br>Proportion correct ${pct(ratio(d.allCorrect, d.allN))}<br>Overconfidence ${v > 0 ? "+" : ""}${num(v * 100, 0)} pts<br>Brier ${num(d.brier, 3)}`;
    s += `<g class="hit" data-tip="${esc(tip)}"><rect x="0" y="${y - 8}" width="${W}" height="${rowH}" fill="transparent"/>
      <path class="mark" d="${path}" fill="${COLOR[m]}"/>
      <text x="${R + 10}" y="${y + 15}" font-size="12.5" font-weight="600" fill="var(--ink)">${v > 0 ? "+" : ""}${num(v * 100, 0)}</text></g>`;
  });
  return s + `</svg>`;
}

// 100% stacked bars: how participants say they arrived at their answers in each part.
function howStacked(S) {
  const L = 92, R = W * 2 - 60, rowH = 40, top = 4, h = top + rowH * 3, WW = W * 2;
  let s = `<svg class="chart" viewBox="0 0 ${WW} ${h + 4}" role="img">`;
  MODS.forEach((m, i) => {
    const d = S[m], tot = d.nBlocks, y = top + i * rowH + 8, bh = 22;
    s += `<text x="0" y="${y + 15}" font-size="12.5" fill="var(--ink)">${MODALITY_LABEL[m]}</text>`;
    if (!tot) return (s += `<text x="${L}" y="${y + 15}" font-size="12" fill="var(--muted)">no data</text>`);
    let x = L;
    HOW_ANSWERED.forEach((hh) => {
      const c = d.how[hh.id], w = ((R - L) * c) / tot;
      if (!c) return;
      const label = Math.round((c / tot) * 100) + "%";
      const tip = `<b>${MODALITY_LABEL[m]}</b><br>${esc(hh.text)}<br>${label} (${c} of ${tot})`;
      s += `<g class="hit" data-tip="${esc(tip)}"><rect class="mark" x="${x}" y="${y}" width="${Math.max(0, w - 2)}" height="${bh}" rx="2" fill="${HOW_COLOR[hh.id]}"/>
        ${w > 44 ? `<text x="${x + w / 2 - 1}" y="${y + 15}" font-size="11.5" text-anchor="middle" fill="${hh.id === "self" || hh.id === "checked" ? "#fff" : "#0b0b0b"}">${label}</text>` : ""}</g>`;
      x += w;
    });
    s += `<text x="${R + 10}" y="${y + 15}" font-size="11.5" fill="var(--muted)">n=${tot}</text>`;
  });
  return s + `</svg>`;
}

const legend = () => `<div class="legend">${MODS.map((m) => `<span><i class="swatch" style="background:${COLOR[m]}"></i>${MODALITY_LABEL[m]}</span>`).join("")}</div>`;

// ---------- page ----------
function render() {
  const list = analysed();
  const S = summarise(list);
  const all = rows.filter((r) => $("incSim").checked || !r.simulated);
  const nExcl = all.filter((r) => exclusionReasons(r).length).length;
  const nSim = rows.filter((r) => r.simulated).length;
  const nReal = rows.length - nSim;

  $("notice").innerHTML = `Within-subjects: every participant gets 6 cases, 2 per modality, one flawed and one perfect in each modality, with one flaw at Q1, Q2 and Q3 each. Proportions pool observations, so the CIs are too narrow; use the CSV export for the mixed model. ` +
    (nSim ? `<b>${nSim} simulated</b> and <b>${nReal} real</b> responses stored.` : `<b>${nReal}</b> real responses stored.`);

  if (!list.length) {
    $("root").innerHTML = `<div class="panel empty">No responses yet. Complete the <a href="participant?demo=1" target="_blank">participant site</a> or add simulated data.</div>`;
    return;
  }

  const flawN = MODS.reduce((t, m) => t + S[m].flawN, 0), adopted = MODS.reduce((t, m) => t + S[m].adopted, 0);
  const perfN = MODS.reduce((t, m) => t + S[m].perfN, 0), perfCorrect = MODS.reduce((t, m) => t + S[m].perfCorrect, 0);
  const allCases = list.flatMap((x) => x.r.cases);
  const tP = mean(allCases.filter((c) => c.version === "perfect" && c.trust != null).map((c) => c.trust)), tF = mean(allCases.filter((c) => c.version === "flawed" && c.trust != null).map((c) => c.trust));
  const allItems = list.flatMap((x) => x.s.items);

  $("root").innerHTML = `
    <div class="kpis">
      <div class="kpi"><div class="k">Participants analysed</div><div class="v">${list.length}</div><div class="s">${all.length} stored · ${$("applyExcl").checked ? nExcl : 0} excluded</div></div>
      <div class="kpi"><div class="k">Flaws adopted (all modalities)</div><div class="v">${pct(ratio(adopted, flawN))}</div><div class="s">${adopted} of ${flawN} flawed questions</div></div>
      <div class="kpi"><div class="k">Learned from perfect explanations</div><div class="v">${pct(ratio(perfCorrect, perfN))}</div><div class="s">correct on questions after a perfect explanation</div></div>
      <div class="kpi"><div class="k">Trust: perfect vs. flawed</div><div class="v">${num(tP, 0)} / ${num(tF, 0)}</div><div class="s">mean 0–100, rated before answering</div></div>
      <div class="kpi"><div class="k">Named a flawed case (end)</div><div class="v">${pct(ratio(list.filter((x) => x.r.cases.some((c) => c.version === "flawed" && (x.r.final?.mistakeCases || []).includes(c.caseId))).length, list.length))}</div><div class="s">ticked at least one flawed case</div></div>
    </div>

    <div class="grid">
      <section class="panel">
        <h3>Flaw adoption by modality <span class="pill">Primary · H2</span></h3>
        <div class="sub">Share of flawed questions where the participant gave the answer the flawed explanation leads to. Whiskers: 95% CI. Hover for proportion correct.</div>
        ${propBars(S, (d) => d.adopted, (d) => d.flawN, (d) => `Resisted (correct): ${pct(ratio(d.resisted, d.flawN))}`)}
      </section>
      <section class="panel">
        <h3>Flaw adoption by modality × question <span class="pill">H6</span></h3>
        <div class="sub">Where the flaw sits: Q1 (easy), Q2 (medium) or Q3 (hard). Each participant meets each position once, in a different modality.</div>
        ${legend()}
        ${posBars(S, (d) => d.adopted, (d) => d.flawN)}
      </section>
      <section class="panel">
        <h3>Learning from perfect explanations <span class="pill">Comprehension check</span></h3>
        <div class="sub">Proportion correct on all questions after a perfect explanation. Lower values in voice or video mean the format itself is harder to learn from.</div>
        ${legend()}
        ${posBars(S, (d) => d.perfCorrect, (d) => d.perfN)}
      </section>
      <section class="panel">
        <h3>Trust before answering <span class="pill">H1</span></h3>
        <div class="sub">Trust in each explanation, averaged per participant. Each dot is a participant; the black tick is the mean.</div>
        ${trustStrip(S)}
      </section>
      <section class="panel">
        <h3>Trust in perfect vs. flawed explanations <span class="pill">Key secondary</span></h3>
        <div class="sub">Hollow = perfect explanation, filled = flawed one. A smaller gap means the flaw went unnoticed while the AI was explaining.</div>
        ${trustGap(S)}
      </section>
      <section class="panel">
        <h3>Overconfidence <span class="pill">H4</span></h3>
        <div class="sub">Mean confidence minus proportion correct, in percentage points. Right of 0 = overconfident. Hover for Brier score.</div>
        ${overconfBars(S)}
      </section>
      <section class="panel full">
        <h3>How did you mainly arrive at your answers in this part? <span class="pill">H3</span></h3>
        <div class="legend">${HOW_ANSWERED.map((h) => `<span><i class="swatch" style="background:${HOW_COLOR[h.id]}"></i>${esc(h.text)}</span>`).join("")}</div>
        ${howStacked(S)}
      </section>
    </div>

    <section class="panel full" style="margin-bottom:16px">
      <h3>Summary by modality</h3>
      <div class="sub">Table view of the charts above, plus checking behaviour (calculator use, replays) and the end-of-part ratings (1–7).</div>
      <div class="scroll"><table class="data">
        <thead><tr><th>Modality</th><th class="num">Flaws adopted</th>${QLABEL.map((l) => `<th class="num">${l.split(" ")[0]}</th>`).join("")}<th class="num">Resisted</th><th class="num">Correct (perfect)</th><th class="num">Trust perfect / flawed</th><th class="num">Brier</th><th class="num">Overconf.</th><th class="num">Calculator used</th><th class="num">Plays</th><th class="num">Named flawed case</th><th class="num">Trust 1–7</th><th class="num">Human-like 1–7</th><th class="num">Eerie 1–7</th></tr></thead>
        <tbody>${MODS.map((m) => { const d = S[m]; return `<tr>
          <td><i class="swatch" style="background:${COLOR[m]}"></i> ${MODALITY_LABEL[m]}</td>
          <td class="num">${pct(ratio(d.adopted, d.flawN))} <span class="muted">(${d.adopted}/${d.flawN})</span></td>
          ${[0, 1, 2].map((qi) => `<td class="num">${pct(ratio(d.byPos[qi].adopted, d.byPos[qi].flawN))}</td>`).join("")}
          <td class="num">${pct(ratio(d.resisted, d.flawN))}</td><td class="num">${pct(ratio(d.perfCorrect, d.perfN))}</td>
          <td class="num">${num(d.trustPerfect, 0)} / ${num(d.trustFlawed, 0)}</td>
          <td class="num">${num(d.brier, 3)}</td><td class="num">${d.overconf === null ? "–" : (d.overconf > 0 ? "+" : "") + num(d.overconf * 100, 0)}</td>
          <td class="num">${pct(ratio(d.calcUsed, d.nCases))}</td><td class="num">${num(d.plays)}</td><td class="num">${pct(ratio(d.named, d.n))}</td>
          <td class="num">${num(d.trustLikert)}</td><td class="num">${num(d.humanlike)}</td><td class="num">${num(d.eerie)}</td></tr>`; }).join("")}</tbody>
      </table></div>
    </section>

    <section class="panel full" style="margin-bottom:16px">
      <h3>Per case</h3>
      <div class="sub">Proportion correct on each question, by version. In the flawed version, the flawed question also shows how often the flaw was adopted. Use this to spot cases that are too easy or too hard to learn, or flaws nobody (or everybody) catches.</div>
      <div class="scroll"><table class="data">
        <thead><tr><th>Case</th><th>Flaw on</th><th>Version</th><th class="num">n</th><th class="num">Q1</th><th class="num">Q2</th><th class="num">Q3</th><th class="num">Flaw adopted</th><th class="num">Trust</th><th class="num">Familiarity</th></tr></thead>
        <tbody>${CASES.flatMap((c) => VERSIONS.map((v) => {
          const obs = allItems.filter((i) => i.caseId === c.id && i.version === v), n = obs.filter((i) => i.q === 1).length;
          const cell = (qi) => { const L = obs.filter((i) => i.q === qi + 1); return `<td class="num">${L.length ? pct(L.filter((i) => i.correct).length / L.length) : "–"}${v === "flawed" && qi === c.flawQ ? " ⚑" : ""}</td>`; };
          const fl = obs.filter((i) => i.isFlawQ);
          const tr = mean(list.flatMap((x) => x.r.cases.filter((cc) => cc.caseId === c.id && cc.version === v && cc.trust != null).map((cc) => cc.trust)));
          const fam = mean(list.filter((x) => x.r.cases.some((cc) => cc.caseId === c.id && cc.version === v)).map((x) => x.r.final?.familiarity?.[c.id]).filter(Boolean));
          return `<tr><td><b>${esc(c.title)}</b></td><td>Q${c.flawQ + 1}</td><td>${v}</td><td class="num">${n}</td>${[0, 1, 2].map(cell).join("")}
            <td class="num">${v === "flawed" ? `${pct(ratio(fl.filter((i) => i.adopted).length, fl.length))}` : "–"}</td><td class="num">${num(tr, 0)}</td><td class="num">${num(fam)}</td></tr>`;
        })).join("")}</tbody>
      </table></div>
    </section>

    <section class="panel full">
      <h3>Participants</h3>
      <div class="sub">Every stored response${$("applyExcl").checked ? " (excluded ones marked, not analysed)" : ""}. Adopted = flaw adopted in that modality's flawed case (out of 1).</div>
      <div class="scroll"><table class="data">
        <thead><tr><th>ID</th><th>Condition</th><th>Order</th><th>Completed</th>${MODS.map((m) => `<th class="num">${MODALITY_LABEL[m].split(" ")[0]} adopted</th>`).join("")}<th class="num">Correct</th><th class="num">Mean trust</th><th class="num">Calc uses</th><th>Noticed mistake</th><th>Flags</th></tr></thead>
        <tbody>${all.slice().sort((a, b) => String(b.completedAt).localeCompare(String(a.completedAt))).map(participantRow).join("")}</tbody>
      </table></div>
    </section>`;
}

function participantRow(r) {
  const s = scoreResponse(r), excl = exclusionReasons(r);
  const short = { text: "T", voice: "A", video: "V" };
  return `<tr>
    <td>${esc(r.participantId)}${r.simulated ? '<span class="tag">sim</span>' : ""}</td>
    <td>${esc(r.conditionId)}</td>
    <td>${(r.modalityOrder || []).map((m) => `<i class="swatch" style="background:${COLOR[m]}" title="${MODALITY_LABEL[m]}"></i> ${short[m]}`).join(" ")}</td>
    <td>${r.completedAt ? new Date(r.completedAt).toLocaleString([], { dateStyle: "short", timeStyle: "short" }) : "–"}</td>
    ${MODS.map((m) => { const d = s.byModality[m]; return `<td class="num"><span class="out ${d.adopted ? "adopted" : d.resisted ? "ok" : "other"}">${d.adopted}/${d.flawN}</span></td>`; }).join("")}
    <td class="num">${s.totalCorrect}/${s.items.length}</td>
    <td class="num">${num(mean(r.cases.map((c) => c.trust).filter((v) => v != null)), 0)}</td>
    <td class="num">${r.cases.reduce((t, c) => t + (c.calc || []).length, 0)}</td>
    <td>${esc(r.final?.mistake || "–")}${(r.final?.mistakeCases || []).length ? ` <span class="muted">(${esc(r.final.mistakeCases.join(", "))})</span>` : ""}</td>
    <td>${excl.map((e) => `<span class="tag warn">${e}</span>`).join("")}</td>
  </tr>`;
}

// ---------- CSV export: one row per participant × case × question (long format, ready for R/JASP) ----------
function exportCsv() {
  const head = ["participant_id", "simulated", "condition", "modality_order", "completed_at", "excluded", "exclusion_reason", "age", "gender", "occupation", "ai_text", "ai_voice", "ai_avatar",
    "case", "version", "flaw_question", "block", "position", "pos_in_block", "modality", "plays", "time_on_explanation_ms", "trust", "answer_time_ms", "calc_uses",
    "question", "difficulty", "is_flaw_question", "answer", "dont_know", "confidence", "outcome", "correct", "adopted",
    "block_how_answered", "block_pen_paper", ...RATING_ITEMS.map((x) => "block_rating_" + x.id), "attention_check",
    "familiarity", "noticed_mistake", "named_this_case", "what_wrong", "first_suspect", "rank_1", "rank_2", "rank_3", "trust_most", "easiest_to_learn", "prefer_real",
    "mental_arithmetic", "numeracy_1", "numeracy_2", "numeracy_3", "used_other_tool"];
  const out = [head];
  for (const r of rows.filter((r) => $("incSim").checked || !r.simulated)) {
    const s = scoreResponse(r), excl = exclusionReasons(r), b = r.background || {}, f = r.final || {};
    for (const i of s.items) {
      const cr = r.cases.find((c) => c.caseId === i.caseId), bl = r.blocks[i.block - 1] || {};
      out.push([r.participantId, !!r.simulated, r.conditionId, (r.modalityOrder || []).join(">"), r.completedAt, excl.length > 0, excl.join("; "), b.age, b.gender, b.occupation, b.aiText, b.aiVoice, b.aiAvatar,
        i.caseId, i.version, CASE_BY_ID[i.caseId].flawQ + 1, i.block, cr.position, i.posInBlock, i.modality, cr.plays, cr.timeOnPageMs, cr.trust, cr.answerTimeMs, (cr.calc || []).length,
        i.q, i.difficulty, i.isFlawQ, i.value, i.dontKnow, i.confidence, i.outcome, i.correct, i.adopted,
        bl.howAnswered, bl.penPaper, ...RATING_ITEMS.map((x) => bl.ratings?.[x.id]), attention(r),
        f.familiarity?.[i.caseId], f.mistake, (f.mistakeCases || []).includes(i.caseId), f.whatWrong, f.firstSuspect, ...(f.ranking || ["", "", ""]), f.trustMost, f.easiestToLearn, f.preferReal,
        f.mentalArithmetic, ...(f.numeracy || ["", "", ""]), f.usedTool]);
    }
  }
  const csv = out.map((row) => row.map((v) => { const t = v === undefined || v === null ? "" : String(v); return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t; }).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = `responses_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
}

// ---------- simulated participants (clearly flagged; for demoing the dashboard) ----------
function simulate(n) {
  const rnd = Math.random, pick = (a) => a[Math.floor(rnd() * a.length)];
  const norm = (m, s) => m + s * Math.sqrt(-2 * Math.log(rnd() || 1e-9)) * Math.cos(2 * Math.PI * rnd());
  const clamp = (v, a, b) => Math.max(a, Math.min(b, Math.round(v)));
  const shuffle = (a) => a.map((x) => [rnd(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
  // Assumed effects, purely illustrative: richer modality -> more trust and adoption, voice
  // and video slightly harder to learn from, flaws on harder questions adopted more often.
  const P = {
    text: { adopt: 0.38, learn: 0.78, trust: 60, human: 2.5, eerie: 2, how: [0.3, 0.35, 0.3, 0.05] },
    voice: { adopt: 0.5, learn: 0.7, trust: 65, human: 4, eerie: 2.3, how: [0.2, 0.3, 0.43, 0.07] },
    video: { adopt: 0.56, learn: 0.72, trust: 69, human: 5, eerie: 3.4, how: [0.17, 0.27, 0.49, 0.07] },
  };
  const POS = [0.8, 1, 1.25], LEARN_POS = [1.1, 1, 0.85];
  const out = [];
  for (let k = 0; k < n; k++) {
    const c = CONDITIONS[k % CONDITIONS.length], person = norm(0, 0.1), skill = norm(0, 0.08);
    const blocks = c.parts.map((p, b) => ({ block: b + 1, modality: p.modality, caseOrder: shuffle(p.cases) }));
    const cases = blocks.flatMap((bl, b) => bl.caseOrder.map((cc, j) => {
      const cs = CASE_BY_ID[cc.caseId], p = P[bl.modality];
      let noticed = false;
      const answers = cs.questions.map((q, qi) => {
        const isFlawQ = cc.version === "flawed" && qi === cs.flawQ, u = rnd();
        const right = q.type === "choice" ? String(q.correct) : String(q.correct);
        const wrong = q.type === "choice" ? String((q.correct + 1) % q.options.length) : String(Math.round(q.correct * pick([0.5, 0.9, 1.2, 2]) * 100) / 100);
        if (u < 0.04) return { value: "", dontKnow: true, confidence: null };
        if (isFlawQ) {
          const pa = Math.min(0.95, Math.max(0.05, p.adopt * POS[qi] + person));
          if (rnd() < pa) return { value: String(q.flawed), dontKnow: false, confidence: clamp(norm(74, 14), 20, 100) };
          noticed = rnd() < 0.7;
          return rnd() < 0.75 ? { value: right, dontKnow: false, confidence: clamp(norm(70, 15), 20, 100) } : { value: wrong, dontKnow: false, confidence: clamp(norm(50, 15), 10, 100) };
        }
        return rnd() < Math.min(0.97, p.learn * LEARN_POS[qi] + skill) ? { value: right, dontKnow: false, confidence: clamp(norm(76, 13), 20, 100) } : { value: wrong, dontKnow: false, confidence: clamp(norm(58, 16), 10, 100) };
      });
      return {
        caseId: cc.caseId, version: cc.version, block: b + 1, posInBlock: j + 1, position: b * 2 + j + 1, modality: bl.modality,
        plays: bl.modality === "text" ? 1 : 1 + (rnd() < 0.3 ? 1 : 0), completed: true, timeOnPageMs: Math.round(norm(85, 12) * 1000),
        trust: clamp(norm(p.trust - (cc.version === "flawed" ? 6 : 0), 15), 0, 100), answers, answerTimeMs: Math.round(norm(150, 40) * 1000),
        calc: Array.from({ length: rnd() < (bl.modality === "text" ? 0.7 : 0.6) ? clamp(norm(3, 1.5), 1, 8) : 0 }, () => ({ expr: "1+1", result: 2, tMs: 1000 })),
        _noticed: noticed,
      };
    }));
    const lik = (mu) => clamp(norm(mu, 1.1), 1, 7);
    blocks.forEach((bl, b) => {
      const p = P[bl.modality];
      let u = rnd(), hi = 0;
      while (hi < 3 && (u -= p.how[hi]) > 0) hi++;
      Object.assign(bl, { howAnswered: HOW_ANSWERED[hi].id, penPaper: rnd() < 0.3 ? "Yes" : "No",
        ratings: { reliable: lik(3 + p.trust / 30), trusted: lik(3 + p.trust / 30), knowledgeable: lik(5.2), humanlike: lik(p.human), someone: lik(p.human), eerie: lik(p.eerie), easy: lik(5) },
        attentionCheck: b === 1 ? (rnd() < 0.94 ? 5 : pick([4, 6])) : null });
    });
    const named = cases.filter((x) => x._noticed).map((x) => x.caseId);
    cases.forEach((x) => delete x._noticed);
    out.push({
      participantId: "S-" + (1000 + Math.floor(rnd() * 9000)), simulated: true, conditionId: c.id, modalityOrder: c.modalityOrder,
      startedAt: null, completedAt: new Date(Date.now() - rnd() * 5 * 864e5).toISOString(),
      audioCheck: { attempts: 1, passed: true },
      background: { age: pick(["18–24", "18–24", "25–34", "35–49", "50+"]), gender: pick(["woman", "man", "non-binary", "prefer not to say"]), occupation: pick(["student", "student", "working", "other"]), aiText: pick(["monthly", "weekly", "daily"]), aiVoice: pick(["never", "less than monthly", "monthly"]), aiAvatar: pick(["no", "no", "not sure", "yes"]) },
      blocks, cases,
      final: { unusual: "", mistake: named.length ? (rnd() < 0.8 ? "Yes" : "Not sure") : pick(["No", "Not sure"]), mistakeCases: named, whatWrong: "",
        firstSuspect: pick(["Never", "During part 1", "During part 2", "During part 3"]), familiarity: Object.fromEntries(CASES.map((cs) => [cs.id, clamp(norm(cs.id === "poker" ? 2.8 : 1.8, 1), 1, 5)])),
        ranking: shuffle(MODS), trustMost: pick([...MODS, "none"]), easiestToLearn: pick([...MODS, "none"]), whyPreferred: "",
        preferReal: pick([...MODS, "none"]), mentalArithmetic: clamp(norm(3.3, 1), 1, 5), numeracy: ["60", "16:35", "2.80"], usedTool: rnd() < 0.96 ? "No" : "Yes" },
      consentToUse: true,
    });
  }
  return out;
}

// ---------- wiring ----------
$("refresh").onclick = load;
$("csv").onclick = exportCsv;
$("incSim").onchange = render;
$("applyExcl").onchange = render;
$("sim").onclick = async () => { await fetch("/api/responses", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(simulate(36)) }); load(); };
$("clearSim").onclick = async () => { await fetch("/api/responses?which=simulated", { method: "DELETE" }); load(); };
// Two-step confirm without a browser dialog.
$("clearAll").onclick = async (e) => {
  const b = e.currentTarget;
  if (b.dataset.armed) { await fetch("/api/responses?which=all", { method: "DELETE" }); delete b.dataset.armed; b.textContent = "Clear all"; return load(); }
  b.dataset.armed = "1"; b.textContent = "Click again to delete everything";
  setTimeout(() => { delete b.dataset.armed; b.textContent = "Clear all"; }, 4000);
};

// Tooltips for any element with data-tip.
const tip = $("tip");
document.addEventListener("mousemove", (e) => {
  const t = e.target.closest && e.target.closest("[data-tip]");
  if (!t) return (tip.style.opacity = 0);
  tip.innerHTML = t.dataset.tip;
  const x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8), y = e.clientY + 14 + tip.offsetHeight > innerHeight ? e.clientY - tip.offsetHeight - 10 : e.clientY + 14;
  tip.style.left = x + "px"; tip.style.top = y + "px"; tip.style.opacity = 1;
});

load();
setInterval(load, 15000); // pick up new participants during a live demo
