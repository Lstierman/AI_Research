# Experiment Design: AI Modality, Trust & Learning from Flawed Explanations

Oct 22, 2026 · Henri Lemahieu · Live version: https://claude.ai/artifact/Hk5LEg8LuhY3TMmdepHVFZ *(still shows an earlier design)*

## Overview

We test whether the modality an AI assistant uses to explain an unfamiliar topic (text chat, voice, or video avatar) changes whether people pick up the mistakes in its explanation, how confident they are, and how much they trust it.

**Research question:** When people learn something new from an AI, does a more human-like modality make them more likely to adopt a subtly wrong explanation, and more confident while doing so?

**Why it matters:** People increasingly ask AI to explain things they don't know, from game rules to finance to statistics, and AI assistants are moving from text boxes to voices and faces. In exactly these situations people can't easily check the AI against their own knowledge. If voice or video makes a wrong explanation more convincing, interface designers and AI literacy efforts need to account for that.

**Approach in one line:** Each participant works through 6 cases on topics most people don't know well (poker, backgammon, airliner fuel planning, net present value, price elasticity, fraud alerts). For each case, an AI explains how it works, without giving the answers, and the participant answers 3 questions. Half of the explanations contain one subtle flaw that leads to a wrong answer on exactly one of the three questions.

**Why unfamiliar topics:** The rules come only from the AI. This mirrors how people actually use AI to learn, and makes reliance unavoidable: participants must work with the explanation. What we measure is whether they apply a flawed rule faithfully or notice that something doesn't add up.

**Where the cases come from:** the topics are taken from the group's list of 100 decision topics (`tmp_cases.pdf`) and rewritten so that each case supports three numeric or choice questions. Medical and safety topics were left out on purpose: we don't want to teach anything wrong that someone could act on in an emergency.

## Hypotheses

We expect richer modalities to raise trust and confidence while lowering scrutiny, especially when following the explanation takes more effort. The hypotheses are directional because theory predicts a direction, but all tests are two-sided: a difference in the opposite direction is reported as a finding, not a failure.

| # | Hypothesis | Theoretical basis |
| --- | --- | --- |
| H1 | Voice and video explanations receive higher trust ratings than text (rated right after each explanation, before answering) | Social presence and media richness; people treat human-like computers as social actors (Reeves & Nass, *The Media Equation*) |
| H2 (primary) | Voice and video produce higher flaw adoption (giving the answer the flawed explanation leads to) than text | A fluent voice is perceived as more competent (Schroeder & Epley); social cues discourage scrutiny; explanations raise reliance even when wrong (Bansal et al., 2021) |
| H3 | Fewer people report checking whether the explanation made sense after voice and video | Over-reliance happens when people skip their own reasoning (Buçinca et al., 2021) |
| H4 | Calibration is worst for video: higher Brier score and more overconfidence (mean confidence minus accuracy) | More social cues raise confidence without raising accuracy |
| H5 (exploratory) | People's preferred modality is not the one where they are most accurate | Preference follows ease and engagement, not accuracy |
| H6 | The modality effect on flaw adoption is larger when the flaw sits on a harder question (Q3) than an easier one (Q1) | Checking costs more effort on harder steps, so social cues and the load of listening matter more there |
| Competing | Video receives lower trust than voice because the avatar feels uncanny | Uncanny valley (Mori, 1970). Only supported if video also scores higher on the "eerie / unsettling" item |

## Design

A within-subjects experiment with three factors:

- **Modality** of the AI's explanation: text chat, voice only, or video avatar. Varied between parts.
- **Version** of the explanation: perfect or flawed. Varied between cases.
- **Question position:** Q1 (easy), Q2 (medium), Q3 (hard) within each case. For flawed cases, this is where the flaw lands.

**Structure.** Each participant does 3 parts, one modality per part. Each part contains 2 cases: one with a flawed explanation and one with a perfect explanation. So every participant sees all 6 cases (3 flawed, 3 perfect) and every modality twice.

**Stimuli.** 6 cases × 2 versions = 12 explanation scripts, each recorded in 3 modalities = 36 stimuli. The situation and questions are always shown in writing; only the explanation changes modality, with identical wording.

**Where the flaws sit.** The six cases form three pairs by flaw position: {Poker, Backgammon} on Q1, {Aviation, Pricing} on Q2, {NPV, Fraud alerts} on Q3. Every participant gets one flawed case from each pair, so they meet exactly one Q1 flaw, one Q2 flaw and one Q3 flaw, each in a different modality.

**Counterbalancing:** 6 modality orders × 3 rotations × 2 flips = 36 conditions.

- **Flip (F1/F2):** which case of each pair is flawed. F1: Poker, Aviation, NPV flawed (Backgammon, Pricing, Fraud perfect). F2: the reverse.
- **Rotation (R1–R3):** which flaw position goes with which part. In part *k*, the flawed case comes from pair (k + r) mod 3 and the perfect case from pair (k + r + 1) mod 3.
- **Modality order (M1–M6):** which modality each part uses.

Across the 36 conditions, every case appears in every version × modality combination exactly 6 times, and every flaw position appears in every modality 12 times. Case order within a part is random and recorded.

| Modality order | Part 1 | Part 2 | Part 3 | | Rotation | Part 1 flawed / perfect | Part 2 | Part 3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M1 | Text | Voice | Video | | R1 | Q1-pair / Q2-pair | Q2 / Q3 | Q3 / Q1 |
| M2 | Text | Video | Voice | | R2 | Q2 / Q3 | Q3 / Q1 | Q1 / Q2 |
| M3 | Voice | Text | Video | | R3 | Q3 / Q1 | Q1 / Q2 | Q2 / Q3 |
| M4 | Voice | Video | Text | | | | | |
| M5 | Video | Text | Voice | | | | | |
| M6 | Video | Voice | Text | | | | | |

Example: condition M1-R1-F1 = text with flawed Poker + perfect Pricing, then voice with flawed Aviation + perfect Fraud, then video with flawed NPV + perfect Backgammon.

**Allocation:** the survey tool assigns each participant one of the 36 conditions, using even presentation so all conditions fill up equally.

**What "modality" means here.** Each condition is a whole interface experience, not only an added voice or face. To keep exposure comparable, the text explanation streams in at speech speed and stays readable until the participant moves on; voice and video can be replayed as often as they like. Text can still be re-read at leisure, which matters more now that the rules come only from the explanation: a text vs. voice difference may partly come from ease of inspection. Voice vs. video is the cleanest comparison: same audio, only the face differs. Accuracy on perfect cases (see Measures) tells us whether voice and video are simply harder to learn from.

## Stimuli

Full texts (situations, both explanation versions, questions and answer keys) are in [participant-script.md](participant-script.md); the app reads them from `app/public/shared.js`.

**The six cases:**

| Case | What the AI teaches | Q1 · easy | Q2 · medium | Q3 · hard |
| --- | --- | --- | --- | --- |
| Poker: calling a bet | Hand rankings, outs, expected value of a call | Flush vs. straight: who wins? | Chance the river gives a flush (19.6%) | EV of calling (−€8.70) |
| Backgammon: the doubling cube | Take/drop, the 25% threshold, gammons | Take or drop at 30%? (take) | Expected result of taking (−0.8 points) | Expected result with gammons (−1.5 points) |
| Aviation: holding fuel | Fuel layers, holding fuel, bingo point | Fuel to keep when leaving the hold (1,900 kg) | Minutes you can hold (10) | Shortfall below the reserve after holding 20 min (400 kg) |
| Pricing: should you cut the price? | Elasticity, margin × volume | Weekly profit now (€6,000) | Packs sold after a 10% cut (1,250) | Packs needed at €9 to match today's profit (1,200) |
| Investing: net present value | Discounting, NPV | Today's value of €3,000 in year 1 (€2,777.78) | … in year 3 (€2,381.50) | NPV of the machine (−€63.62) |
| Fraud alerts: what does an alarm mean? | Base rates, false positives (Bayes) | Legitimate payments flagged per day (495) | Total alerts per day (594) | Chance a flagged payment is fraud (16.7%) |

**Explanations.** Each explanation is 140–200 words (about 60–80 seconds spoken). It teaches the rules and the method in general terms and may give intermediate numbers, but never states the answer to any of the three questions. A built-in calculator is available on the question pages.

**Rules for flaws:**

- **One flaw per flawed explanation, affecting exactly one question.** The flawed version is word-for-word identical to the perfect one except for the sentence(s) that carry the flaw. The other two questions have the same correct answer in both versions.
- **Same confident tone:** the flaw is delivered exactly like the correct parts, with the same length and structure.
- **Every flaw has a cue a novice could use,** so catching it doesn't require prior expertise. Otherwise everyone would adopt it in every modality and modality couldn't make a difference. Cues are self-contradictions (the AI contradicts something it said earlier), checks by calculation, or conflicts with the situation on screen.
- **The flawed answer is distinct** from the correct one by more than the scoring tolerance, and unlikely to be reached by an ordinary mistake.
- **No common misconceptions as flaws.** For example, the classic Bayes error (treating "catches 99% of fraud" as "a flag is 99% likely to be fraud") is not used, because people make it on their own and adoption would be ambiguous.

**Flaw register:**

| Case | Topic | Flaw on | Correct → flawed answer | Flaw type | Cue a novice can use |
| --- | --- | --- | --- | --- | --- |
| Poker: calling a bet | Texas Hold'em poker | Q1 (easy) | You (flush) → Your opponent (straight) | Wrong rule (ranking) | Self-contradiction: rarer hands rank higher, and the AI's own counts show the flush is rarer. |
| Backgammon: the doubling cube | Backgammon | Q1 (easy) | Take → Drop | Wrong threshold | Check by calculation: the AI's own averaging method (also asked in Q2) shows taking beats dropping at 30%. |
| Aviation: holding fuel | Airliner fuel planning | Q2 (medium) | 10 minutes → 16 minutes | Calculation slip in a rule of thumb | Arithmetic check: 40 kg per minute × 4 minutes = 160 kg, not 100 kg. |
| Pricing: should you cut the price? | Price elasticity | Q2 (medium) | 1,250 packs → 1,025 packs | Misapplied concept | Self-contradiction: the first paragraph says 2.5% more for every 1% cut. |
| Investing: net present value | Net present value (NPV) | Q3 (hard) | −€63.62 → €677.12 | Wrong method step | Conflict with the scenario and the AI's own rule: you only discount money you have to wait for, and the price is paid today. |
| Fraud alerts: what does an alarm mean? | Bayes' theorem (base rates) | Q3 (hard) | 16.67% → 20% | Wrong denominator | Logic check: "out of all alerts" means dividing by the total number of alerts, which the AI had just asked you to count. |

**Pretest criteria** (5–8 people, mixed backgrounds, text condition):

- **Learnability:** after the *perfect* explanation, most people (roughly 70% or more) should answer each question correctly. If not, the explanation or question is too hard and gets rewritten.
- **Adoption range:** after the *flawed* explanation, adoption of the flawed answer should be roughly 30–70%. If almost everyone catches it, make the cue subtler; if nobody does, make it clearer.
- **Ask people *how* they caught a flaw,** to check that the intended cue is the one they used.
- **Timing:** each case should take about 4–5 minutes in total.

**Producing the three modalities** (the situation is on screen above the explanation in all three):

| Modality | How the explanation is made | Presentation |
| --- | --- | --- |
| Text | Explanation in a chat-style bubble, streaming in at speech speed (same duration as the audio) | Stays readable until the participant continues; trust question and Continue appear when streaming ends; time on page recorded |
| Voice | Explanation read by one text-to-speech voice (about 60–80 s) | Audio player plus a neutral "AI assistant" icon; no transcript; replay allowed, number of plays recorded |
| Video | The same audio file lip-synced onto an AI avatar (e.g. HeyGen, D-ID) | Framed like a video call; replay allowed, number of plays recorded |

**Production checks:** listen to how the TTS voice reads every number and term ("1.08", "minus 2.5", "kilograms"); a misread number would be an unplanned flaw. Have a few people rate the avatar on its own; a cheap-looking avatar would mix up "video" with "bad video". The video condition needs 12 avatar clips of about a minute each.

Voice and video use the **same audio file**, so the only difference is the face. All three conditions are clearly labelled as AI.

## Procedure

The whole session takes about 30 minutes online.

1. **Consent + cover story** ("how people learn from AI assistants about unfamiliar topics", ~1 min)
2. **Sound check and background** (AI use, ~2 min)
3. **Part × 3** (modality and cases from the assigned condition, ~9 min each):
   1. **Part intro:** how the AI will explain in this part
   2. **2 cases,** each on two screens:
      - **Situation + AI explanation** in text, voice or video *(the only thing that varies)*, then **trust** in the explanation, rated before answering
      - **Three questions**, each with an answer and confidence. The situation is shown again; the explanation is not. A built-in calculator is available.
   3. **End of part:** how did you answer? pen and paper? ratings (trust, human-likeness, eeriness, ease); attention check in part 2
4. **Final questions** (mistakes noticed and in which cases, topic familiarity, preferences, numeracy, ~4 min)
5. **Debrief** (the three flaws revealed and corrected, ~1 min)

Nothing inside a part hints that the AI can be wrong: the question "did any explanation contain a mistake?" comes only once, at the very end.

Word-for-word text for every screen: [participant-script.md](participant-script.md)

## Measures

The primary outcome is **flaw adoption**: on the question the flawed explanation leads astray, giving exactly the answer the flaw produces. This is a behavioural outcome, not a direct measure of trust. Someone may apply the AI's rule without thinking, or notice something odd but follow the AI anyway; the other measures help tell these apart.

| Measure | Level | What it tells us | Role |
| --- | --- | --- | --- |
| Flaw adoption | Flawed question (3 per person, 1 per modality) | Did the participant give the answer the flaw leads to? | **Primary** |
| Resisted | Flawed question | Did they give the correct answer instead? Always reported next to adoption | Reported with primary |
| Accuracy after perfect explanations | Question (9 per person, 3 per modality) | Can people learn from this modality at all? Separates "harder to learn from" from "more convincing" | Secondary (key interpretive) |
| Trust before answering | Case (6 per person) | How much did they trust this explanation right after it? | Secondary (H1) |
| Trust gap | Case | Trust in perfect minus trust in flawed explanations. A small gap means the flaw went unnoticed while the AI explained | Secondary |
| Calibration | Question, summarised per modality | Does confidence match actual correctness? | Secondary (H4) |
| How they answered | Part | Worked it out themselves, followed but checked, followed without questioning, or guessed | Secondary (H3) |
| Calculator use | Case | Opened, and every calculation entered | Exploratory (behavioural checking) |
| Plays, time on explanation, answer time | Case | Exposure and effort | Exploratory / checks |
| Topic familiarity | Case (asked at the end) | Prior knowledge, 1–5 | Covariate |
| Error detection (end) | Person | Did they notice mistakes, and in which cases? | Exploratory |
| Ratings after each part | Part | Trust, competence, human-likeness, eeriness, ease | Exploratory |
| Preference | Person | Which modality did they like best? | Exploratory |

**Per case, in this order.** Wording stays neutral throughout.

1. **Trust (on the explanation screen, once the explanation has finished):** "How much do you trust the AI's explanation?" (0–100 slider, no starting position).
2. **Three answers + confidence (next screen):** each question with a number field (with its unit) or answer options, or an "I don't know" box, then "How sure are you of your answer?" (0–100%, no starting position).

**Per part (after its 2 cases):** "How did you mainly arrive at your answers in this part?" (I worked out the answers myself, using the AI's explanation / I followed the AI's explanation but checked whether it made sense / I followed the AI's explanation step by step without questioning it / I guessed), "Did you use pen and paper in this part?", and single 7-point items: 2 trust, competence, 2 human-likeness, eeriness, ease. Part 2 includes the attention check.

**Once, at the end:** anything unusual; did any explanation contain a mistake, in which case(s) and what; when suspicion started; familiarity with each topic (1 = never heard of it, 5 = I know it well); modality ranking and preferences; numeracy check.

**Scoring an answer.** Numbers are scored with a small tolerance for rounding (e.g. ±0.5 percentage points, ±€0.15, ±1 pack; per question in `shared.js`). Both "1,250" and "1250", and decimal commas, are accepted.

| Answer given | Flawed question (in a flawed explanation) | Any other question |
| --- | --- | --- |
| Correct answer | Resisted the flaw | Correct |
| The answer the flaw leads to | **Flaw adopted** | (not possible) |
| Another answer | Other mistake | Other mistake |
| I don't know | Uncertain (not adopted) | Uncertain |

**Calibration,** per participant and modality, over the 6 answers in that modality. Confidence c is rescaled to 0–1, and correctness y is 1 or 0:

- **Brier score** = mean of (c − y)². Lower is better; 0 means perfect.
- **Overconfidence** = mean confidence − proportion correct. Positive means overconfident.
- **"I don't know":** no confidence rating is asked, and the answer is left out of calibration. It still counts as *not adopted* and *not correct*.

**Notes on the measures:**

- The rating items are short single items inspired by existing trust scales (e.g. Jian et al., 2000). They are not validated scales, so we report the two trust items separately unless they correlate strongly.
- The 3-item numeracy check is a rough covariate, not a full measure of math ability. It comes at the end.
- Self-reports of checking are imperfect. Calculator logs, answer time and replays are supporting evidence.

## Participants

Target: **at least 36 participants** (one per condition), **ideally 72** (two per condition).

- **Inclusion:** 18 or older, fluent in the language of the stimuli, using a laptop or desktop computer with sound.
- **Device:** Desktop only (the survey blocks phones). On a phone the situation doesn't stay visible next to the video, and play tracking is unreliable.
- **Recruitment:** convenience sample (students, friends, social media), collected within **one week** so participants have little time to tell each other about the flaws. A small incentive (raffle or course credit) helps completion of a 30-minute study.
- **Exclusion (decided in advance):** failed attention check; failed the audio check twice; reports using a phone, the internet or another calculator.
- **Power:** Each person meets 3 flaws, one per modality. With 36 people that is 36 flaw observations per modality (12 per modality × position); with 72, twice that. Observations are clustered within people and cases. The study can detect only large effects and is presented as exploratory or a pilot; the position interaction (H6) is underpowered even at 72.

## Analysis plan

One primary test, five pre-specified secondary tests, everything else exploratory. We emphasise estimates and uncertainty over whether p crosses .05.

| Level | Question | Outcome | Analysis |
| --- | --- | --- | --- |
| Primary (H2) | Does flaw adoption differ by modality? | Adopted (0/1) per flawed question, always shown next to resisted | Mixed logistic regression: adopted ~ modality + flaw position + case position + (1 \| participant) + (1 \| case). Robustness: Cochran's Q on the 3 binary outcomes per person; proportions with 95% CIs |
| Secondary (key) | Is a modality simply harder to learn from? | Correct (0/1) on questions after perfect explanations | Mixed logistic regression: correct ~ modality + question position + (1 \| participant) + (1 \| case). If voice or video lowers learning here, adoption differences are interpreted with care |
| Secondary (H6) | Is the modality effect larger for flaws on harder questions? | Adopted (0/1) | Primary model with modality × flaw position; estimates per position |
| Secondary (H1) | Does trust differ by modality? | Trust per case | Linear mixed model: trust ~ modality × version + (1 \| participant) + (1 \| case). The modality term tests H1; the version term gives the trust gap |
| Secondary (H4) | Does calibration differ by modality? | Brier score, overconfidence per person per modality | Friedman test |
| Secondary (H3) | Do people report checking less after voice and video? | "How did you arrive at your answers?" per part | Counts per modality; Cochran's Q on "worked it out or followed but checked" (yes/no) |
| Exploratory | Everything else | Familiarity, calculator use, replays, detection, first part only, ratings | Descriptive: medians, counts, plots |
| Exploratory (H5) | Preferred vs. best-performing modality | Ranking vs. lowest adoption | Individual patterns and counts |

Case is a random effect (6 levels) in the main models; if a model doesn't converge, case becomes a fixed effect. Topic familiarity is added as a covariate in a sensitivity analysis. We don't use repeated-measures ANOVA: the outcomes are binary or bounded and not normally distributed.

**Missing data:** "I don't know" counts as not adopted and not correct, and is left out of calibration. Skipped answers are left out of that question only.

Covariates: topic familiarity, numeracy score, self-rated mental arithmetic, AI use frequency, age. Tools: R (lme4), JASP or Python. The app's CSV export is in long format (one row per participant × case × question).

## How we will interpret the results

Every outcome is informative; none counts as a failed experiment.

| Result | What it would suggest | What it would not show |
| --- | --- | --- |
| Video raises trust *and* flaw adoption, with equal learning from perfect explanations | Human-like presentation makes wrong explanations more convincing | That human-likeness caused it, or that trust is the mechanism |
| Voice/video lower accuracy on perfect explanations too | These formats are harder to learn from; adoption differences partly reflect comprehension | That social cues played no part |
| Video raises trust, but not flaw adoption | Feeling trust and actually relying on the AI can diverge | That video is harmless in general |
| Modality effect only for flaws on hard questions | Social cues matter when checking is effortful | That modality never matters for simple rules |
| Text is better than both | Being able to re-read an explanation helps catch flaws | That social cues played no part |
| No clear differences | Effects are small, or hidden by noise in a pilot | That the modalities are equivalent |

## Ethics

The study uses mild deception (flawed explanations and a cover story), so a full debrief is required.

- **Approval:** Confirm the cover story and debrief with the course supervisors before launch. Mention that some cases involve gambling games (poker, backgammon) as a context for probability.
- **Informed consent:** Purpose described as "how people learn from AI assistants about topics they may not know much about". Participation is voluntary and can be stopped at any time.
- **Cover story:** Flaws are not mentioned beforehand, because that would change behaviour.
- **Debrief:** The purpose is revealed, and each flaw the participant saw is explained with the correct rule and answer. It states that the flaws were constructed for the study and say nothing about any real AI product, and advises checking important AI explanations against another source.
- **Harmless content:** No medical, first-aid or safety topics. The financial cases use fictional businesses and numbers, and the debrief corrects every flaw.
- **Minimal data:** Age in bands, a broad occupation category, no names, emails or IP addresses. Open-text answers are checked for identifying details before analysis.
- **Withdrawal:** Because responses are anonymous, they can't be traced after submission. Participants can withdraw at the debrief, before final submission.
- **Storage:** Responses are stored on university storage, accessible only to the group, and deleted when the course ends. The consent text names a contact person.

## Limitations and mitigations

| Threat | Why it matters | Mitigation |
| --- | --- | --- |
| Modality = whole experience | Text can be re-read; voice must be remembered | Same minimum exposure; replays allowed; accuracy on perfect explanations measured per modality; voice vs. video is the clean comparison |
| Unequal prior knowledge | Poker players may spot the poker flaw from experience | Familiarity rated per topic; covariate and sensitivity analysis; every flaw has a cue usable without expertise |
| Flaws differ in how easy they are to catch | Case and flaw are confounded | Each case is flawed for half the participants and appears in every modality; case as random effect; pretest adoption range |
| Only 3 flaw observations per person | Low power for the primary outcome | Within-subjects design; mixed models; presented as exploratory |
| Learning across parts: suspicion after catching a flaw | Later parts get more careful regardless of modality | Modality order and flaw position counterbalanced; case position in the model; suspicion question; first-part-only check |
| Questions within a case are related | A participant confused by the flawed step may also miss other questions | Flaws designed to affect one question only; accuracy on non-flawed questions of flawed cases reported |
| Explanation quality varies by case | Some explanations may be clearer | Same length and structure; pretest learnability ≥ 70% |
| TTS or avatar quality | A misread number adds an unplanned flaw; a cheap avatar means "bad video", not "video" | Listen to every number; rate the avatar on its own before launch |
| Measurement itself changes behaviour | Rating trust and confidence repeatedly may make people more careful | Same procedure in every modality; named as a limitation |
| Short, non-validated rating items | Lower reliability | Items reported separately; no claims of validated scales |
| Pre-recorded, one avatar, one voice | Less realistic; results may depend on that avatar | Necessary to control wording; named as a limitation |
| Small convenience sample that talks to each other | Low power; later participants may know about the flaws | Presented as exploratory; one-week collection window; report estimates and CIs |

## Open decisions and to-do

- [x] Restructure to 6 cases × 2 versions (perfect / flawed), 3 questions per case
- [x] Built-in calculator with logging
- [ ] Check every number in the 6 cases and their flawed versions against the flaw register
- [ ] Pretest (text): learnability of the perfect versions, adoption range of the flawed versions, how people caught each flaw, timing per case
- [ ] Listen to how the TTS reads every number and term; have a few people rate the avatar on its own
- [ ] Time the full survey on a laptop; adjust the advertised 30 minutes if needed
- [ ] Confirm the cover story, debrief, data handling and gambling contexts with the course supervisors
- [ ] Fill in the contact person and storage location in the consent text
- [ ] Choose the TTS voice and avatar tool (check free-tier limits; 12 clips of about a minute)
- [ ] Produce the 36 stimuli (12 streamed text, 12 audio, 12 video)
- [ ] Build the survey (Qualtrics if available: assigns the 36 conditions, randomises case order within parts, blocks phones, records plays and time, hides slider handles, offers a calculator), or run the study on the demo app in `app/`
- [ ] Decide: stimulus language (English or native language)
- [ ] Update the live artifact to this design

## Key references (verify before citing)

These are listed from memory as approximate; check exact titles, years and venues.

- Reeves, B. & Nass, C. (1996). *The Media Equation*. CASA paradigm: people treat computers as social actors.
- Parasuraman, R. & Riley, V. (1997). Humans and automation: use, misuse, disuse, abuse. *Human Factors*.
- Lee, J. D. & See, K. A. (2004). Trust in automation: designing for appropriate reliance. *Human Factors*.
- Jian, J.-Y., Bisantz, A. M. & Drury, C. G. (2000). Scale of trust in automated systems.
- Daft, R. L. & Lengel, R. H. (1986). Media richness theory.
- Short, J., Williams, E. & Christie, B. (1976). Social presence theory.
- Mori, M. (1970). The uncanny valley.
- Schroeder, J. & Epley, N. (2015, 2016). Voice increases perceived intellect and human-likeness.
- Bansal, G. et al. (2021). Does the whole exceed its parts? The effect of AI explanations on complementary team performance. *CHI*.
- Buçinca, Z. et al. (2021). To trust or to think: cognitive forcing functions against over-reliance on AI.
- Kim, S. S. Y. et al. (2024). Expressions of uncertainty by LLMs and user reliance (FAccT).
- Waytz, A., Heafner, J. & Epley, N. (2014). The mind in the machine: anthropomorphism increases trust in an autonomous vehicle. *Journal of Experimental Social Psychology*.
- Skitka, L. J., Mosier, K. L. & Burdick, M. (1999). Does automation bias decision-making? *International Journal of Human-Computer Studies*.
