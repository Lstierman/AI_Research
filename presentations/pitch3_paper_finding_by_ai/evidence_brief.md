# Evidence brief — 44 papers on delivery, errors, and detection

**Status:** working document for the group · prepared 13 Nov 2026
**One-line:** we screened 44 full texts. None runs our design. The nearest
evidence is consistent with H1 (delivery barely changes accuracy), contrary to
H2 (more human-like, more errors followed), and silent on H3 (fewer errors noticed).

---

## 1. What this is — and what it is not

We read **44 full-text papers** (arXiv versions) and coded each one on three
hypotheses:

- **H1 — correct content:** when the explanation is right, do text, voice and
  face lead to similar decisions?
- **H2 — wrong content:** does a more human-like delivery make people adopt the
  mistake more often? (Expected gradient: text < voice < face.)
- **H3 — detection:** afterwards, do people in the voice/face conditions report
  the error less often than people who read text?

Each paper got a **relevance** label (direct / partial / auxiliary / excluded), a
**direction** for each hypothesis (support / oppose / mixed / not applicable) and
a **strength grade** for the direction it does provide.

This is **not** a systematic review and **not** a meta-analysis. It is a
structured evidence audit with one coder, built to answer one practical
question: *how much of the published record actually tests our design, and what
does it say?*

> **Key asymmetry.** H1 predicts no difference, so a null result supports it.
> H2 and H3 predict a direction, so only a significant directional result
> supports them. We do not count “not tested” as support for H2/H3.

---

## 2. The three numbers

| | H1 · correct | H2 · wrong | H3 · noticed |
|---|---|---|---|
| Relevant papers (direct + partial) | 13 / 44 | 30 / 44 | 20 / 44 |
| Explicit direction (+ / −) | 4 support / 0 oppose | 0 support / 2 oppose | 0 / 0 |
| Support share (explicit only) | 100.0% | 0.0% | n/a |
| Oppose share (explicit only) | 0.0% | 100.0% | n/a |
| Mean strength (0–3) | 1.75 (support set) | 1.50 (oppose set) | no directional evidence |
| Direct test | 0 | 2 (both oppose) | 0 |
| Three-media test | **0** | **0** | **0** |

**Read the denominators.** “100% support” for H1 means 4 of 4 papers that state
an explicit direction — not 4 of 44. On all 13 relevant papers it is 30.8%
support, 0% oppose and 30.8% mixed. On the test level it is 7 of 8 null results.
On the nearest test (same content, multiple media) it is **one mixed study**.

---

## 3. What counts as “direct”

The three coding files use slightly different directness bars:

- **H1 direct:** same content across text / voice / face + behavioural accuracy
  → **0 papers**.
- **H2 direct:** AI-internal anthropomorphism × error content × behavioural
  following → **2 papers** (`t1_03` human vs machine voice; `meaningful_comm_2025`
  eye vs avatar), both **oppose**.
- **H3 direct:** anthropomorphism modality → detection → **0 papers**.

The strict **three-media** bar (same content, text vs voice vs face, behavioural
outcome) is **0 for all three hypotheses**. The only paper with three delivery
arms is `t1_02` (visualisation, text, speech) — its third arm is a chart, not a
face — and it is mixed: the threshold analysis supports H1, the decision-type
analysis opposes it (χ=30.1, p=.003; speech is riskier).

---

## 4. How strong is the support?

### 4.1 The strength rubric

Each directional paper gets +1 per criterion:

| Code | Criterion | Why it matters |
|---|---|---|
| **B** | Target **behavioural** DV measured | Self-reported trust or confidence does not test the claim |
| **M** | **Manipulation check passed** | A null with a failed manipulation is uninformative |
| **P** | **Precision sufficient** (between-subject N ≥ 200, or BF/equivalence, or meta-analysis k ≥ 10, or replication) | A small-sample p > .05 carries little information |

3 = **S** (strong), 2 = **M** (moderate), ≤1 = **W** (weak). Category studies
(human vs AI) are capped at M because they do not test an AI-internal gradient.

### 4.2 H1 support set — 4 papers, weighted 7/12 (58.3%), mean 1.75/3

| Paper | N | Target DV | B | M | P | Grade | Main limitation |
|---|---|---|---|---|---|---|---|
| `looking_glass_2026` | 2,000 | lie-detection accuracy | ✓ | ✓ | ✓ | **S** | human lie detection, not AI advice |
| `t1_03` | 69 / 20 teams | team milestones | ✓ | ✓ | ✗ | **M** | 20 teams; not per-item accuracy |
| `meaningful_comm_2025` | 93 | d′ | ✓ | ✗ | ✗ | **W** | face manipulation failed (BF₀₁=3.984) |
| `t2_07_seeing_reasoning_2603.07306` | 68 | adoption / trust | ✓ | ✗ | ✗ | **W** | only text-internal timing; no manipulation check |

The strongest support is **analogical**: `looking_glass` holds delivery constant
but the task is judging *human* lies. The two weak papers have a failed
manipulation and a small single-modality sample.

### 4.3 H2 opposition set — 2 papers, weighted 3/6 (50.0%), mean 1.50/3

| Paper | N | Target DV | B | M | P | Grade | Main limitation |
|---|---|---|---|---|---|---|---|
| `t1_03` | 69 / 20 teams | trust / performance under wrong clues | ✓ | ✓ | ✗ | **M** | 20 teams; no per-item following rate |
| `meaningful_comm_2025` | 93 | avatar → d′ | ✓ | ✗ | ✗ | **W** | manipulation failed |

Both are **weak-to-moderate**, and both are single-channel. The correct
statement is **not** “H2 is refuted”; it is “H2 is untested at the three-media
level, and the two nearest tests point the other way without much power”.

### 4.4 H3 — no directional evidence

All 20 relevant papers are indirect: they show that time pressure, cognitive
load, accepting advice, fluent explanations, high confidence cues and low
need-for-cognition change error rejection. None manipulates delivery modality.
Twenty-four papers (including 4 auxiliary) provide mechanism evidence with mean
strength 1.75/3 — useful for prediction,
not for testing H3.

---

## 5. What the corpus *does* establish

These are the numbers worth remembering; each has a plain-text provenance in
the paper table.

| Claim | Number | Source | What it is / is not |
|---|---|---|---|
| People follow a wrong AI in text | **79.8%** [75.9, 83.4] | `t2_01`, N=1,372 | following rate; text only |
| Wrong medical advice is over-relied on | **76.6%**; accuracy −4.9 pp | `medical_xai`, N=257 | explanation, not modality |
| Students adopt wrong advice | **52.1%** | `puppart`, N=36 | small N |
| Experts are overridden by wrong numbers | **7%** (38/560) | `stuck`, n=28 | low rate, high severity under time pressure |
| Anthropomorphism does not move task performance | **d=0.259** [−0.222, 0.740] ns | `t1_10`, k=45, N=5,973 | meta-analysis; trust d=0.726 |
| Avatars leave accuracy unchanged | **β=0.04**, p=.238 | `looking_glass`, N=2,000 | trust/confidence fall |
| Voice changes risk style but not accuracy | **χ=30.1**, p=.003 | `t1_02`, N=218 | decision type, not accuracy |

---

## 6. What the corpus does *not* establish

1. **No three-media test.** No study holds the same words fixed across text,
   voice and face with a behavioural outcome.
2. **No detection test.** H3's exact DV — “did you notice the error?” compared
   across modalities — is measured zero times.
3. **No clean H2 gradient.** The two nearest tests are single-channel and weak;
   the 26 remaining H2-relevant papers measure following without an
   anthropomorphism manipulation.
4. **No equivalence testing.** Only one supporting null reports a Bayes factor,
   and that study's manipulation failed.
5. **No category-to-gradient inference.** Human vs AI effects (`t1_09` d=0.79;
   `bending`) are not an AI-internal text < voice < face gradient.

---

## 7. What this means for our study

- **H1 is a weak prior, not a replication target.** If our accuracy outcome is
  flat across modalities, that is consistent with the literature but still
  informative because no one has tested it with a face.
- **H2 is the most interesting two-sided test.** The nearest evidence predicts
  no increase in following; if voice/face *do* increase it, we have a clean
  contradiction of the current record.
- **H3 is the genuine contribution.** Zero direct tests means a well-powered
  detection comparison is new evidence, not a repetition.
- **Design implication:** 3 modalities × 2 correctness, behavioural decision,
  plus a post-hoc detection report and calibration. The literature cannot tell
  us what the face will do; it only tells us what has been measured so far.

---

## 8. Limitations of this audit

- **One coder.** No second coder, no κ. Relevance boundaries (especially
  partial vs auxiliary) involve judgement.
- **arXiv versions.** All 44 are arXiv PDFs; peer-review status varies and was
  not independently verified. Treat 2026 items as preprints.
- **No meta-analysis.** Denominators, AI baseline accuracy (50–86%), tasks and
  DVs are not comparable. Counts and weighted strength are not pooled effects.
- **Publication bias.** Significant or positive results are more likely to be in
  the corpus; H1's nulls may be under-represented.
- **Strength is heuristic.** The B/M/P score compresses design information; it
  does not replace reading the paper.
- **Counts are not effects.** “100% support” is a counting statement about four
  papers, not an effect size.

---

## 9. How to read `paper_table.md`

Contribution codes: `+3/+2/+1` support (S/M/W), `−3/−2/−1` oppose, `±0` mixed
within one paper, `~3/~2/~1` indirect (target DV but no IV), `—` excluded,
auxiliary, or no target DV. The key-data column reports the paper's own numbers;
“not extracted” means the paper did not report it in a usable form.
