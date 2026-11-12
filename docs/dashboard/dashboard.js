/* Results dashboard. Reads everything from the backend (?action=data&key=...) and computes in the browser. */
(function () {
  "use strict";
  var CFG = window.SURVEY_CONFIG, C = window.SURVEY_CONTENT, D = window.SURVEY_DESIGN;
  var FORMS = D.FORMS, VARIANTS = D.VARIANTS, QS = ["easy", "medium", "hard"];
  var FORM_LABEL = { text: "Text", audio: "Voice", video: "Video" };
  var FORM_COLOR = { text: "var(--series-1)", audio: "var(--series-2)", video: "var(--series-3)" };
  var VAR_SHORT = { correct: "correct", error_easy: "err-easy", error_medium: "err-med", error_hard: "err-hard" };
  var KEY_STORE = "aiExplanationSurvey.dashboardKey";
  var raw = null;

  // ─── utils ──────────────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function num(v) { var n = Number(v); return v === "" || v == null || !isFinite(n) ? null : n; }
  function truthy(v) { return v === 1 || v === "1" || v === true || v === "TRUE" || v === "true"; }
  function pct(x) { return x == null ? "–" : Math.round(x * 100) + "%"; }
  function f2(x) { return x == null ? "–" : x.toFixed(2); }
  function mean(xs) { xs = xs.filter(function (x) { return x != null; }); return xs.length ? xs.reduce(function (a, b) { return a + b; }, 0) / xs.length : null; }
  function median(xs) {
    xs = xs.filter(function (x) { return x != null; }).sort(function (a, b) { return a - b; });
    if (!xs.length) return null;
    var m = Math.floor(xs.length / 2);
    return xs.length % 2 ? xs[m] : (xs[m - 1] + xs[m]) / 2;
  }
  function wilson(k, n) {
    if (!n) return [0, 0];
    var z = 1.96, p = k / n, d = 1 + (z * z) / n;
    var c = (p + (z * z) / (2 * n)) / d, w = (z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n))) / d;
    return [Math.max(0, c - w), Math.min(1, c + w)];
  }
  // Chi-square test of independence for a 2 × k table [[k1, n1], [k2, n2], ...]. Returns {chi2, df, p}.
  function chiSquare(groups) {
    groups = groups.filter(function (g) { return g[1] > 0; });
    if (groups.length < 2) return null;
    var K = 0, N = 0;
    groups.forEach(function (g) { K += g[0]; N += g[1]; });
    if (K === 0 || K === N) return null;
    var chi = 0;
    groups.forEach(function (g) {
      var e1 = (g[1] * K) / N, e0 = g[1] - e1;
      chi += Math.pow(g[0] - e1, 2) / e1 + Math.pow(g[1] - g[0] - e0, 2) / e0;
    });
    var df = groups.length - 1;
    return { chi2: chi, df: df, p: chiP(chi, df) };
  }
  function chiP(x, df) { // upper tail of chi-square via regularized gamma Q(df/2, x/2)
    var a = df / 2, xx = x / 2;
    if (xx <= 0) return 1;
    if (df === 2) return Math.exp(-xx);
    var gln = lgamma(a);
    if (xx < a + 1) { var sum = 1 / a, del = sum, ap = a; for (var i = 0; i < 200; i++) { ap++; del *= xx / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-12) break; } return 1 - sum * Math.exp(-xx + a * Math.log(xx) - gln); }
    var b = xx + 1 - a, c = 1e300, d = 1 / b, h = d;
    for (var j = 1; j < 200; j++) { var an = -j * (j - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300; c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; var dl = d * c; h *= dl; if (Math.abs(dl - 1) < 1e-12) break; }
    return Math.exp(-xx + a * Math.log(xx) - gln) * h;
  }
  function lgamma(z) {
    var g = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
    var x = z, y = z, tmp = x + 5.5; tmp -= (x + 0.5) * Math.log(tmp);
    var ser = 1.000000000190015; for (var j = 0; j < 6; j++) ser += g[j] / ++y;
    return -tmp + Math.log((2.5066282746310005 * ser) / x);
  }
  function fmtP(p) { return p == null ? "–" : p < 0.001 ? "< .001" : p.toFixed(3).replace(/^0/, ""); }

  // ─── tooltip ────────────────────────────────────────────────────────────
  var tip = $("tooltip");
  document.addEventListener("mousemove", function (e) {
    var t = e.target.closest && e.target.closest("[data-tip]");
    if (!t) { tip.hidden = true; return; }
    tip.textContent = t.getAttribute("data-tip");
    tip.hidden = false;
    var x = e.clientX + 14, y = e.clientY + 14, r = tip.getBoundingClientRect();
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 14;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 14;
    tip.style.left = x + "px"; tip.style.top = y + "px";
  });

  // ─── backend ────────────────────────────────────────────────────────────
  function apiUrl() {
    if (CFG.backendUrl) return CFG.backendUrl;
    if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return "/api";
    return null;
  }
  function getKey() { try { return localStorage.getItem(KEY_STORE); } catch (e) { return null; } }
  function setKey(k) { try { k ? localStorage.setItem(KEY_STORE, k) : localStorage.removeItem(KEY_STORE); } catch (e) {} }

  function fetchData(key) {
    var url = apiUrl();
    if (!url) return Promise.reject(new Error("backendUrl is not set in docs/js/config.js"));
    return fetch(url + (url.indexOf("?") >= 0 ? "&" : "?") + "action=data&key=" + encodeURIComponent(key))
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d.error) throw new Error(d.error); return d; });
  }

  function showLogin(msg) {
    $("login").hidden = false; $("content").hidden = true;
    $("login-err").textContent = msg || "";
  }

  function load() {
    var key = getKey();
    if (!key) return showLogin();
    $("refresh").disabled = true;
    fetchData(key).then(function (d) {
      raw = d;
      $("login").hidden = true; $("content").hidden = false;
      render();
    }).catch(function (e) {
      if (/key/i.test(e.message)) { setKey(null); showLogin(e.message); }
      else { showLogin("Could not load data: " + e.message); }
    }).then(function () { $("refresh").disabled = false; });
  }

  $("login-form").addEventListener("submit", function (e) { e.preventDefault(); setKey($("key").value.trim()); load(); });
  $("refresh").addEventListener("click", load);
  $("logout").addEventListener("click", function () { setKey(null); showLogin(); });
  $("opt-test").addEventListener("change", render);
  $("opt-unfinished").addEventListener("change", render);
  $("purge").addEventListener("click", function () {
    if (!confirm("Delete ALL test participants (started with ?test=1) and their answers from the Sheet?")) return;
    fetch(apiUrl(), { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "purgeTest", key: getKey() }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { if (d.error) throw new Error(d.error); alert("Deleted " + d.deletedParticipants + " test participants."); load(); })
      .catch(function (e) { alert("Failed: " + e.message); });
  });

  // ─── data prep ──────────────────────────────────────────────────────────
  function prepared() {
    var incTest = $("opt-test").checked, incUnf = $("opt-unfinished").checked;
    var parts = raw.participants.map(function (p) {
      return Object.assign({}, p, { test: truthy(p.test), completed: p.status === "completed" });
    });
    var keep = {};
    parts.forEach(function (p) { if ((incTest || !p.test) && (incUnf || p.completed)) keep[p.participant_id] = true; });
    var answers = raw.answers.filter(function (a) { return keep[a.participant_id]; }).map(function (a) {
      return Object.assign({}, a, {
        position: num(a.position), is_correct: num(a.is_correct), chose_error_answer: num(a.chose_error_answer),
        adopted_error: num(a.adopted_error), is_error_target: num(a.is_error_target), certainty: num(a.certainty),
        response_ms: num(a.response_ms), explanation_ms: num(a.explanation_ms), plays: num(a.plays), media_error: num(a.media_error),
      });
    });
    var extra = raw.extra.filter(function (x) { return keep[x.participant_id]; });
    return { all: parts, parts: parts.filter(function (p) { return keep[p.participant_id]; }), answers: answers, extra: extra };
  }

  // ─── rendering ──────────────────────────────────────────────────────────
  function render() {
    if (!raw) return;
    var d = prepared();
    $("meta").textContent = "Data loaded " + new Date(raw.serverTime).toLocaleString() + " · showing " + d.parts.length + " participants" +
      ($("opt-test").checked ? " (incl. test)" : "") + ($("opt-unfinished").checked ? " (incl. unfinished)" : "") + " · " + d.answers.length + " answers";
    Array.prototype.forEach.call(document.querySelectorAll(".active-hours"), function (el) { el.textContent = raw.activeHours; });
    renderKpis(d); renderBalance(d); renderMain(d); renderCertainty(d); renderTopics(d); renderExposure(d); renderExtra(d); renderParticipants(d);
  }

  function renderKpis(d) {
    var real = d.all.filter(function (p) { return !p.test; });
    var done = real.filter(function (p) { return p.completed; });
    var cutoff = Date.now() - raw.activeHours * 3600e3;
    var active = real.filter(function (p) { return !p.completed && new Date(p.started_at).getTime() > cutoff; });
    var abandoned = real.length - done.length - active.length;
    var counts = conditionCounts(done);
    var minC = Math.min.apply(null, D.CONDITIONS.map(function (c) { return counts[c.id] || 0; }));
    var round = minC + 1;
    var filled = D.CONDITIONS.filter(function (c) { return (counts[c.id] || 0) >= round; }).length;
    var mins = median(done.map(function (p) { return num(p.total_minutes); }));
    var k = [
      [done.length, "finished participants", "real, excl. test"],
      [active.length, "in progress", "started < " + raw.activeHours + " h ago"],
      [abandoned, "abandoned", "unfinished, older"],
      [filled + " / 72", "conditions filled in round " + round, round > 1 ? (round - 1) + " full round" + (round > 2 ? "s" : "") + " done" : "round 1 = first 72 participants"],
      [mins == null ? "–" : mins.toFixed(1) + " min", "median duration", "finished participants"],
    ];
    $("kpis").innerHTML = k.map(function (x) { return '<div class="kpi"><div class="v">' + esc(x[0]) + '</div><div class="l">' + esc(x[1]) + '</div><div class="s">' + esc(x[2]) + "</div></div>"; }).join("");
  }

  function conditionCounts(parts) {
    var c = {};
    parts.forEach(function (p) { c[p.condition] = (c[p.condition] || 0) + 1; });
    return c;
  }
  function seqVar(n, max) {
    if (!n) return "var(--seq-0)";
    var step = Math.min(5, Math.max(1, Math.ceil((n / Math.max(max, 1)) * 5)));
    return "var(--seq-" + step + ")";
  }

  function renderBalance(d) {
    var done = d.parts.filter(function (p) { return p.completed; });
    var counts = conditionCounts(done);
    var cutoff = Date.now() - raw.activeHours * 3600e3;
    var active = {};
    d.all.forEach(function (p) { if (!p.test && !p.completed && new Date(p.started_at).getTime() > cutoff) active[p.condition] = (active[p.condition] || 0) + 1; });
    var max = Math.max(1, Math.max.apply(null, D.CONDITIONS.map(function (c) { return counts[c.id] || 0; })));
    $("conditions").innerHTML = D.CONDITIONS.map(function (c) {
      var n = counts[c.id] || 0;
      var tipText = c.id + " — " + n + " finished" + (active[c.id] ? ", " + active[c.id] + " in progress" : "") + "\n" +
        c.items.map(function (it) { return it.topic + ": " + it.variant + " · " + FORM_LABEL[it.form]; }).join("\n");
      var step = n ? Math.min(5, Math.max(1, Math.ceil((n / max) * 5))) : 0;
      return '<div class="tile' + (active[c.id] ? " active" : "") + (step >= 3 ? " dark" : "") + '" style="background:' + seqVar(n, max) + '" data-tip="' + esc(tipText) + '">' + n + "</div>";
    }).join("");
    $("conditions-legend").innerHTML = '<span><span class="swatch" style="background:var(--seq-0)"></span>0</span><span><span class="swatch" style="background:var(--seq-3)"></span>more finished (max ' + max + ')</span><span><span class="swatch" style="border:2px solid var(--series-2)"></span>in progress</span>';

    // cells
    var cell = {};
    d.answers.forEach(function (a) { if (a.question === "easy") { var k = a.topic + "|" + a.variant + "|" + a.form; cell[k] = (cell[k] || 0) + 1; } });
    var cmax = Math.max(1, Math.max.apply(null, Object.keys(cell).map(function (k) { return cell[k]; }).concat([0])));
    var head = "<tr><th>Topic</th>" + VARIANTS.map(function (v) { return '<th colspan="3" class="num">' + VAR_SHORT[v] + "</th>"; }).join("") + "</tr>" +
      '<tr class="sub"><td></td>' + VARIANTS.map(function () { return FORMS.map(function (f) { return '<td class="num">' + FORM_LABEL[f].charAt(0) + "</td>"; }).join(""); }).join("") + "</tr>";
    var body = C.topics.map(function (t) {
      return "<tr><td>" + esc(t.id) + "</td>" + VARIANTS.map(function (v) {
        return FORMS.map(function (f) {
          var n = cell[t.id + "|" + v + "|" + f] || 0;
          var step = n ? Math.min(5, Math.max(1, Math.ceil((n / cmax) * 5))) : 0;
          return '<td class="heat" style="background:' + seqVar(n, cmax) + ";color:" + (step >= 3 ? "#fff" : "inherit") + '" data-tip="' + esc(t.title + "\n" + v + " · " + FORM_LABEL[f] + ": " + n) + '">' + n + "</td>";
        }).join("");
      }).join("") + "</tr>";
    }).join("");
    head = head.replace(/<td class="num">V<\/td><td class="num">V<\/td>/g, '<td class="num">Voice</td><td class="num">Video</td>').replace(/<td class="num">T<\/td>/g, '<td class="num">Text</td>');
    $("cells").innerHTML = "<table>" + head + body + "</table>";
  }

  // groups: [{ label, bars: [{ name, k, n, color, tip }] }]
  function barChart(groups) {
    var any = groups.some(function (g) { return g.bars.some(function (b) { return b.n > 0; }); });
    if (!any) return '<div class="empty">No data yet.</div>';
    var html = '<div class="bars">' + groups.map(function (g) {
      return "<div>" + (g.label ? '<div class="bar-group-label">' + esc(g.label) + "</div>" : "") + g.bars.map(function (b) {
        var p = b.n ? b.k / b.n : 0, ci = wilson(b.k, b.n);
        var tipText = (g.label ? g.label + " · " : "") + b.name + "\n" + (b.n ? pct(p) + " (" + b.k + " of " + b.n + ")\n95% CI " + pct(ci[0]) + "–" + pct(ci[1]) : "no data") + (b.tip ? "\n" + b.tip : "");
        return '<div class="bar-row"><span class="name">' + esc(b.name) + '</span><div class="track" data-tip="' + esc(tipText) + '">' +
          (b.n ? '<div class="bar" style="width:' + (p * 100).toFixed(1) + "%;background:" + b.color + '"></div><div class="whisker" style="left:' + (ci[0] * 100).toFixed(1) + "%;width:" + ((ci[1] - ci[0]) * 100).toFixed(1) + '%"></div>' : "") +
          '<div class="hit"></div></div><span class="val">' + (b.n ? pct(p) + " <small>n=" + b.n + "</small>" : "<small>n=0</small>") + "</span></div>";
      }).join("") + "</div>";
    }).join("") + "</div>";
    return html + '<div class="axis"><span></span><div class="ticks"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div><span></span></div>';
  }

  function kn(rows, field) {
    var r = rows.filter(function (a) { return a[field] != null; });
    return { k: r.filter(function (a) { return a[field] === 1; }).length, n: r.length };
  }

  function renderMain(d) {
    var targets = d.answers.filter(function (a) { return a.variant !== "correct" && a.is_error_target === 1; });
    var byForm = FORMS.map(function (f) { var x = kn(targets.filter(function (a) { return a.form === f; }), "adopted_error"); return { name: FORM_LABEL[f], k: x.k, n: x.n, color: FORM_COLOR[f], form: f }; });
    var all = kn(targets, "adopted_error");
    $("chart-adoption").innerHTML = barChart([{ label: "", bars: byForm }, { label: "", bars: [{ name: "All", k: all.k, n: all.n, color: "var(--neutral)" }] }]);

    // reading
    var test = chiSquare(byForm.map(function (b) { return [b.k, b.n]; }));
    var minN = Math.min.apply(null, byForm.map(function (b) { return b.n; }));
    var read = "";
    if (!all.n) read = "No error explanations answered yet.";
    else {
      var sorted = byForm.filter(function (b) { return b.n; }).slice().sort(function (a, b) { return b.k / b.n - a.k / a.n; });
      read = "<strong>" + pct(all.k / all.n) + "</strong> of errors were adopted overall. Highest: <strong>" + sorted[0].name + " " + pct(sorted[0].k / sorted[0].n) + "</strong>, lowest: <strong>" +
        sorted[sorted.length - 1].name + " " + pct(sorted[sorted.length - 1].k / sorted[sorted.length - 1].n) + "</strong>. ";
      if (test) read += "Difference between forms: χ²(" + test.df + ") = " + test.chi2.toFixed(2) + ", p = " + fmtP(test.p) + " — " +
        (test.p < 0.05 ? "<strong>unlikely to be chance alone</strong>." : "<strong>could well be chance</strong> at this sample size.") + " ";
      read += minN < 40 ? "With fewer than ~40 error questions per form, only very large differences are detectable; overlapping whiskers mean the forms can't be told apart yet. " : "";
      read += "This quick test ignores that each person answers several questions; use the mixed model in the README for the final analysis.";
    }
    $("read-adoption").innerHTML = read;

    $("chart-adoption-level").innerHTML = barChart(QS.map(function (q) {
      return { label: "Error on the " + q + " question", bars: FORMS.map(function (f) {
        var x = kn(targets.filter(function (a) { return a.form === f && a.question === q; }), "adopted_error");
        return { name: FORM_LABEL[f], k: x.k, n: x.n, color: FORM_COLOR[f] };
      }) };
    }));

    // target question accuracy: correct vs error version
    $("chart-target").innerHTML = barChart(QS.map(function (q) {
      var base = d.answers.filter(function (a) { return a.variant === "correct" && a.question === q; });
      var err = d.answers.filter(function (a) { return a.variant === "error_" + q && a.question === q; });
      var b = kn(base, "is_correct"), e = kn(err, "is_correct");
      var bc = kn(base, "chose_error_answer");
      return { label: q.charAt(0).toUpperCase() + q.slice(1) + " question", bars: [
        { name: "Correct", k: b.k, n: b.n, color: "var(--neutral)", tip: "Chose the error's answer anyway (baseline): " + (bc.n ? pct(bc.k / bc.n) : "–") },
        { name: "With error", k: e.k, n: e.n, color: "var(--series-1)" },
      ] };
    }));

    $("chart-learning").innerHTML = barChart([{ label: "", bars: FORMS.map(function (f) {
      var x = kn(d.answers.filter(function (a) { return a.variant === "correct" && a.form === f; }), "is_correct");
      return { name: FORM_LABEL[f], k: x.k, n: x.n, color: FORM_COLOR[f] };
    }) }, { label: "Non-targeted questions of error explanations (should be similar)", bars: FORMS.map(function (f) {
      var x = kn(d.answers.filter(function (a) { return a.variant !== "correct" && a.is_error_target === 0 && a.form === f; }), "is_correct");
      return { name: FORM_LABEL[f], k: x.k, n: x.n, color: FORM_COLOR[f] };
    }) }]);
  }

  function cellMean(rows) {
    var m = mean(rows.map(function (a) { return a.certainty; }));
    return '<td class="num" data-tip="n = ' + rows.length + '">' + (m == null ? "–" : m.toFixed(2)) + ' <span class="muted small">(' + rows.length + ")</span></td>";
  }

  function renderCertainty(d) {
    var outcome = function (a) { return a.adopted_error === 1 ? "adopted" : a.is_correct === 1 ? "resisted" : "other"; };
    var targets = d.answers.filter(function (a) { return a.variant !== "correct" && a.is_error_target === 1; });
    var cols = [
      ["All correct-version questions", function (a) { return a.variant === "correct"; }, d.answers],
      ["Error target: resisted", function (a) { return outcome(a) === "resisted"; }, targets],
      ["Error target: adopted", function (a) { return outcome(a) === "adopted"; }, targets],
      ["Error target: other wrong", function (a) { return outcome(a) === "other"; }, targets],
    ];
    $("certainty").innerHTML = "<table><tr><th>Form</th>" + cols.map(function (c) { return '<th class="num">' + esc(c[0]) + "</th>"; }).join("") + "</tr>" +
      FORMS.concat(["all"]).map(function (f) {
        return "<tr><td>" + (f === "all" ? "<strong>All</strong>" : FORM_LABEL[f]) + "</td>" + cols.map(function (c) {
          return cellMean(c[2].filter(function (a) { return (f === "all" || a.form === f) && c[1](a); }));
        }).join("") + "</tr>";
      }).join("") + "</table>";

    $("calibration").innerHTML = "<table><tr><th>Form</th><th class='num'>n</th><th class='num'>Accuracy</th><th class='num'>Mean certainty (0–1)</th><th class='num'>Overconfidence</th><th class='num'>Brier</th><th class='num'>Gap (right − wrong)</th></tr>" +
      FORMS.concat(["all"]).map(function (f) {
        var rows = d.answers.filter(function (a) { return (f === "all" || a.form === f) && a.certainty != null; });
        if (!rows.length) return "<tr><td>" + (f === "all" ? "All" : FORM_LABEL[f]) + "</td><td class='num'>0</td><td colspan='5' class='muted'>–</td></tr>";
        var c = rows.map(function (a) { return (a.certainty - 1) / 4; });
        var y = rows.map(function (a) { return a.is_correct; });
        var acc = mean(y), mc = mean(c);
        var brier = mean(rows.map(function (a, i) { return Math.pow(c[i] - y[i], 2); }));
        var cr = mean(rows.filter(function (a) { return a.is_correct === 1; }).map(function (a) { return a.certainty; }));
        var cw = mean(rows.filter(function (a) { return a.is_correct === 0; }).map(function (a) { return a.certainty; }));
        return "<tr><td>" + (f === "all" ? "<strong>All</strong>" : FORM_LABEL[f]) + "</td><td class='num'>" + rows.length + "</td><td class='num'>" + pct(acc) + "</td><td class='num'>" + f2(mc) +
          "</td><td class='num'>" + (acc == null ? "–" : (mc - acc >= 0 ? "+" : "") + f2(mc - acc)) + "</td><td class='num'>" + f2(brier) + "</td><td class='num'>" +
          (cr == null || cw == null ? "–" : (cr - cw >= 0 ? "+" : "") + f2(cr - cw)) + "</td></tr>";
      }).join("") + "</table>";
  }

  function renderTopics(d) {
    var head = "<tr><th>Topic</th><th class='num'>n seen</th>" + QS.map(function (q) { return "<th class='num'>Correct version: " + q + " q.</th>"; }).join("") +
      QS.map(function (q) { return "<th class='num'>Error " + q + ": adopted</th>"; }).join("") + "<th class='num'>Mean certainty</th></tr>";
    var rows = C.topics.map(function (t) {
      var A = d.answers.filter(function (a) { return a.topic === t.id; });
      var seen = A.filter(function (a) { return a.question === "easy"; }).length;
      var cells = QS.map(function (q) {
        var x = kn(A.filter(function (a) { return a.variant === "correct" && a.question === q; }), "is_correct");
        var warn = x.n >= 5 && x.k / x.n < 0.7;
        return "<td class='num' data-tip='" + esc(x.k + " of " + x.n + " correct" + (warn ? "\nBelow 70%: the explanation or question may be unclear" : "")) + "'>" + (x.n ? pct(x.k / x.n) + (warn ? " ⚠" : "") : "–") + " <span class='muted small'>(" + x.n + ")</span></td>";
      }).join("") + QS.map(function (q) {
        var x = kn(A.filter(function (a) { return a.variant === "error_" + q && a.question === q; }), "adopted_error");
        return "<td class='num' data-tip='" + esc(x.k + " of " + x.n + " adopted the error") + "'>" + (x.n ? pct(x.k / x.n) : "–") + " <span class='muted small'>(" + x.n + ")</span></td>";
      }).join("");
      var mc = mean(A.map(function (a) { return a.certainty; }));
      return "<tr><td>" + esc(t.id) + " · " + esc(t.title) + "</td><td class='num'>" + seen + "</td>" + cells + "<td class='num'>" + f2(mc) + "</td></tr>";
    }).join("");
    $("per-topic").innerHTML = "<table>" + head + rows + "</table>";
  }

  function renderExposure(d) {
    var expl = {};
    d.answers.forEach(function (a) { if (a.question === "easy") expl[a.participant_id + ":" + a.position] = a; });
    var E = Object.keys(expl).map(function (k) { return expl[k]; });
    $("exposure").innerHTML = "<table><tr><th>Form</th><th class='num'>Explanations</th><th class='num'>Median time on explanation</th><th class='num'>Median plays</th><th class='num'>Replayed (≥2 plays)</th><th class='num'>Media errors</th><th class='num'>Median answer time</th></tr>" +
      FORMS.map(function (f) {
        var r = E.filter(function (a) { return a.form === f; });
        var t = median(r.map(function (a) { return a.explanation_ms; }));
        var pl = median(r.map(function (a) { return a.plays; }));
        var rep = r.filter(function (a) { return a.plays >= 2; }).length;
        var me = r.filter(function (a) { return a.media_error === 1; }).length;
        var at = median(d.answers.filter(function (a) { return a.form === f; }).map(function (a) { return a.response_ms; }));
        return "<tr><td>" + FORM_LABEL[f] + "</td><td class='num'>" + r.length + "</td><td class='num'>" + (t == null ? "–" : Math.round(t / 1000) + " s") + "</td><td class='num'>" +
          (f === "text" ? "n/a" : pl == null ? "–" : pl) + "</td><td class='num'>" + (f === "text" ? "n/a" : r.length ? pct(rep / r.length) : "–") + "</td><td class='num'>" + (f === "text" ? "n/a" : me) +
          "</td><td class='num'>" + (at == null ? "–" : Math.round(at / 1000) + " s") + "</td></tr>";
      }).join("") + "</table><p class='muted small'>Media errors mean a file did not load for a participant — check the media checker page.</p>";

    var dev = {};
    d.parts.forEach(function (p) { dev[p.device || "unknown"] = (dev[p.device || "unknown"] || 0) + 1; });
    $("devices").innerHTML = "<table><tr><th>Device</th><th class='num'>Participants</th></tr>" + Object.keys(dev).map(function (k) { return "<tr><td>" + esc(k) + "</td><td class='num'>" + dev[k] + "</td></tr>"; }).join("") + "</table>";
  }

  function renderExtra(d) {
    var byQ = {};
    d.extra.forEach(function (x) { (byQ[x.question_id] = byQ[x.question_id] || []).push(x); });
    var ids = Object.keys(byQ);
    if (!ids.length) { $("extra").innerHTML = '<div class="empty">No answers yet.</div>'; return; }
    $("extra").innerHTML = ids.map(function (id) {
      var rows = byQ[id];
      var prompt = rows[rows.length - 1].prompt;
      var counts = {};
      rows.forEach(function (r) { counts[r.answer] = (counts[r.answer] || 0) + 1; });
      var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
      var mc = mean(rows.map(function (r) { return num(r.certainty); }));
      var isText = keys.length > 8;
      return "<h3>" + esc(id) + " · " + esc(prompt) + "</h3><p class='muted small'>n = " + rows.length + (mc != null ? " · mean certainty " + mc.toFixed(2) : "") + "</p>" +
        (isText ? "<details><summary>" + rows.length + " text answers</summary><ul>" + rows.map(function (r) { return "<li>" + esc(r.answer) + "</li>"; }).join("") + "</ul></details>"
          : barChart([{ label: "", bars: keys.map(function (k) { return { name: k.length > 9 ? k.slice(0, 8) + "…" : k, k: counts[k], n: rows.length, color: "var(--series-1)", tip: k }; }) }]));
    }).join("<hr style='border:none;border-top:1px solid var(--grid);margin:18px 0'>");
  }

  function renderParticipants(d) {
    var byP = {};
    d.answers.forEach(function (a) { (byP[a.participant_id] = byP[a.participant_id] || []).push(a); });
    var rows = d.all.filter(function (p) { return ($("opt-test").checked || !p.test); }).sort(function (a, b) { return String(b.started_at).localeCompare(String(a.started_at)); });
    $("participants").innerHTML = "<table><tr><th>Participant</th><th>Condition</th><th>Status</th><th>Started</th><th class='num'>Topics saved</th><th class='num'>Correct</th><th class='num'>Errors adopted</th><th class='num'>Minutes</th><th>Device</th><th>Comments</th></tr>" +
      rows.map(function (p) {
        var A = byP[p.participant_id] || [];
        var adopted = A.filter(function (a) { return a.adopted_error === 1; }).length, targets = A.filter(function (a) { return a.adopted_error != null; }).length;
        return "<tr><td><code>" + esc(p.participant_id) + "</code>" + (p.test ? " <span class='muted small'>test</span>" : "") + "</td><td data-tip='" + esc(String(p.topic_order).split(" | ").join("\n")) + "'>" + esc(p.condition) +
          "</td><td>" + esc(p.status) + "</td><td>" + esc(new Date(p.started_at).toLocaleString()) + "</td><td class='num'>" + esc(p.last_position) + " / 6</td><td class='num'>" +
          (A.length ? A.filter(function (a) { return a.is_correct === 1; }).length + " / " + A.length : "–") + "</td><td class='num'>" + (targets ? adopted + " / " + targets : "–") +
          "</td><td class='num'>" + esc(p.total_minutes) + "</td><td>" + esc(p.device) + "</td><td style='white-space:normal;min-width:200px'>" + esc(p.comments) + "</td></tr>";
      }).join("") + "</table>";
  }

  // ─── exports ────────────────────────────────────────────────────────────
  function toCsv(rows) {
    if (!rows.length) return "";
    var cols = Object.keys(rows[0]);
    var e = function (v) { if (v == null) return ""; var s = String(v); return /[",\n\r;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    return [cols.join(",")].concat(rows.map(function (r) { return cols.map(function (c) { return e(r[c]); }).join(","); })).join("\r\n");
  }
  Array.prototype.forEach.call(document.querySelectorAll("[data-export]"), function (btn) {
    btn.addEventListener("click", function () {
      if (!raw) return;
      var d = prepared(), name = btn.getAttribute("data-export");
      var keep = {}; d.parts.forEach(function (p) { keep[p.participant_id] = true; });
      var rows = name === "participants" ? raw.participants.filter(function (p) { return keep[p.participant_id]; })
        : name === "answers" ? raw.answers.filter(function (a) { return keep[a.participant_id]; })
        : raw.extra.filter(function (a) { return keep[a.participant_id]; });
      var blob = new Blob(["﻿" + toCsv(rows)], { type: "text/csv;charset=utf-8" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "survey-" + name + "-" + new Date().toISOString().slice(0, 10) + ".csv";
      document.body.appendChild(a); a.click(); a.remove();
    });
  });

  load();
})();
