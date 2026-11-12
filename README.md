# AI explanation survey

Ghent University · AI Research Seminar 2026 · follow-up of [AI_Research](https://github.com/Lstierman/AI_Research).

**Question:** when an AI assistant explains something with one subtle error in it, do people adopt the error, and does that depend on whether the explanation is **text**, **voice** or **video**? How sure are they while doing it?

**👉 To launch: follow [LAUNCH.md](LAUNCH.md).** The only manual work left is recording the media files and pasting two things (the backend code and its URL).

## Design

| | |
|---|---|
| Topics | 6: compound interest · phishing · sunscreen/UV · insurance deductibles · food safety · two blocks on slides |
| Variants per topic | 4: `correct`, `error_easy`, `error_medium`, `error_hard`. Each error variant changes the answer to exactly one of the 3 questions (easy / medium / hard); the rest of the text is word-for-word identical |
| Forms | 3: text, voice (audio), video (avatar with the same audio) |
| Per participant | all 6 topics, each in one variant and form: 2 × text, 2 × voice, 2 × video; every error type at least once. Topic order random |
| Per question | multiple choice A–D (option order shuffled per participant) + certainty 1–5 |
| After the topics | 3 extra questions (to be decided, placeholders in `docs/js/config.js`), optional comments, debrief showing the errors they saw with corrections |
| Conditions | 72, assigned randomly among the least-filled → balanced after every 72 participants. See LAUNCH.md |

The full texts, with the changed parts marked, are in [`stimuli/ALL_SCRIPTS.md`](stimuli/ALL_SCRIPTS.md).

## Repository

```
docs/                       ← the website (GitHub Pages serves this folder)
  index.html                  participant survey
  dashboard/                  results dashboard (needs the key from the Sheet)
  check.html                  media checker + preview of every explanation
  js/config.js                ★ settings: backend URL, contact, extra questions
  js/content.js               ★ the 6 topics: explanations (with error variants) and questions
  js/design.js                the 72 conditions
  js/survey.js                participant app
  media/audio/, media/video/  ★ put the 48 media files here
backend/
  src/server.js, src/key.js   backend source (Apps Script) and answer key
  Code.gs                     GENERATED: paste this into Apps Script
stimuli/
  scripts/*.txt               GENERATED: the 24 texts to record
  ALL_SCRIPTS.md              GENERATED: all texts with the errors marked
tools/                        build, tests, local server, simulator
```

## Commands (Node 18+, no dependencies to install)

| | |
|---|---|
| `npm run local` | the whole study on your computer, with a local stand-in for the Google Sheet → http://localhost:8080 |
| `npm run simulate -- 150` | add 150 fake (test) participants to the local data, to try out the dashboard (restart `npm run local` afterwards) |
| `npm run build` | regenerate `backend/Code.gs` and `stimuli/` after editing `content.js`, `design.js`, `key.js` or `server.js` |
| `npm test` | checks the design balance, content, answer key, and the real backend code (144 simulated participants → every condition exactly twice) |

Editing content: change `docs/js/content.js` (texts, questions) or `backend/src/key.js` (answer key), run `npm run build` and `npm test`, then paste the new `backend/Code.gs` into Apps Script and deploy a new version (if the key or design changed).

## Data

The Google Sheet has three tabs (also downloadable as CSV from the dashboard):

- **Participants**: one row per participant: condition, status, topic order (`T3:error_hard:video | …`), device, duration, comments.
- **Answers**: one row per participant × topic × question (18 per person), already scored:
  `topic, form, variant, error_question, question, is_error_target, answer, correct_answer, error_answer, is_correct, chose_error_answer, adopted_error, certainty (1–5), response_ms, explanation_ms, plays, media_error, option_order`.
  `adopted_error` is filled only on the question the error targets (1 = chose the error's answer).
- **Extra**: one row per participant × extra question.

## Dashboard

`…/dashboard/` shows: recruitment and how full each of the 72 conditions and 72 cells is; error adoption by form and by error level (with 95% CIs and a quick χ² test); accuracy on the targeted question with vs. without the error; learning from correct explanations per form; certainty per outcome and calibration (overconfidence, Brier); per-topic checks; exposure (time, replays, media errors); extra questions; participant list; CSV exports; deleting test data.

## Suggested analysis (R)

```r
library(lme4)
d <- read.csv("survey-answers-YYYY-MM-DD.csv")
d$form <- relevel(factor(d$form), ref = "text")

# Primary: does adoption of the error depend on the form?
t <- subset(d, is_error_target == 1 & variant != "correct")
m1 <- glmer(adopted_error ~ form + question + position + (1 | participant_id) + (1 | topic),
            data = t, family = binomial)
summary(m1)

# Is the form effect bigger for errors on harder questions?
m2 <- update(m1, . ~ . + form:question)
anova(m1, m2)

# Can people learn from each form at all? (correct explanations only)
m3 <- glmer(is_correct ~ form + question + (1 | participant_id) + (1 | topic),
            data = subset(d, variant == "correct"), family = binomial)

# Certainty (ordinal 1–5): more confident when adopting the error in voice/video?
library(ordinal)
t$outcome <- ifelse(t$adopted_error == 1, "adopted", ifelse(t$is_correct == 1, "resisted", "other"))
m4 <- clmm(factor(certainty, ordered = TRUE) ~ form * outcome + (1 | participant_id), data = t)
```

With 72 participants there are 72 × ~4.5 ≈ 324 error questions (≈108 per form): enough for large effects only; treat results as exploratory.
