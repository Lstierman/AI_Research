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
