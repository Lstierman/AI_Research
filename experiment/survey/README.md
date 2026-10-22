# AI explanations survey

Two web frontends that share one SQLite database (`data/survey.db`):

| Frontend | URL | For |
| --- | --- | --- |
| Participant survey | http://localhost:3000 | Participants. Every visit that presses Start creates a new survey |
| Researcher dashboard | http://localhost:3001 | Us. Finished surveys, counterbalancing, metrics, CSV/JSON export. Only reachable from this computer |

## Run it

Requires Node 18+.

```
npm install
npm start
```

Or double-click `start.bat` (installs on the first run and opens both pages).

Separately: `npm run participant` / `npm run dashboard`. Ports and hosts: `PARTICIPANT_PORT`, `DASHBOARD_PORT`, `PARTICIPANT_HOST` (default: all interfaces), `DASHBOARD_HOST` (default `127.0.0.1`). Another database file: `SURVEY_DB=path/to.db`.

To try the dashboard with fake data: `npm run simulate -- 48`, then **Delete simulated** on the dashboard. Simulated surveys never count towards the counterbalancing.

## The survey

Welcome + consent → 6 × (explanation → 3 multiple-choice questions: easy, medium, hard, each with a required confidence rating) → thank-you screen with a short debrief.

Confidence is asked on the same screen as each question: "How sure are you of your answer?" 1 Not sure at all · 2 Slightly sure · 3 Moderately sure · 4 Very sure · 5 Completely sure. It is stored in the `confidence` column.

- Each participant sees all 6 cases, each in one modality: **2 text, 2 voice, 2 video**.
- **3 explanations are flawed and 3 are correct**: one flawed case per difficulty (easy/medium/hard), and per modality one flawed + one correct.
- The 6 explanations are shown in random order. The order is stored with the survey.
- Voice and video must be played to the end once before the participant can continue. Replays are allowed and counted. The explanation is not shown again on the question screens; the situation (`context`) is.
- A page refresh resumes the same survey; a new tab or visit starts a new one.
- Answer keys and which version is shown never reach the browser; media files are served under an opaque URL.

Cases and media go in [cases/](cases/README.md).

## Demo links

Choose which case is shown first:

- `http://localhost:3000/?first=case3`: case3 first, as a **text** explanation (correct or flawed, whichever the assigned set gives)
- `http://localhost:3000/?first=case3&modality=video&version=flawed`: case3 first, as the flawed video (`modality` = text | voice | video, default text; `version` = correct | flawed, may be left out)

The rest of the survey stays a valid assignment set, in random order. Demo surveys are tagged "demo" on the dashboard, don't count towards the counterbalancing, and can be removed with **Delete demo**. A refresh resumes the current demo survey; open a new tab to start another one.

## Counterbalancing

There are **36 combinations** of case × explanation version (6 cases × text/voice/video × correct/flawed). Each participant sees 6 of them. Every survey gets an ID (`S-XXXXXXXX`) and one of **24 assignment sets (conditions)** (`P1-S1-F1` … `P6-S2-F2`) when it starts ([src/design.js](src/design.js)):

- **P** (6): which modality explains the flawed easy / medium / hard case
- **S** (2): which correct case shares a modality with each flawed case
- **F** (2): which case of each pair is the flawed one

New surveys get the condition with the fewest finished + in-progress surveys (in progress = started less than 2 hours ago), so every block of 24 participants covers all 24 conditions once and shows each case exactly 4 times in every modality × version. The dashboard's **Counterbalancing** section shows the count per condition and per case × modality × version.

## Data

`answers` (one row per question), `explanations` (one row per explanation shown: time on screen, plays) and `surveys`. The dashboard exports each as CSV. "Answers (CSV)" is the long format for analysis, with these columns:

- `is_correct`: picked the correct option
- `is_flaw_target`: this question is the one the case's error targets
- `adopted_flaw`: flawed explanation, targeted question, and the participant picked the flawed answer (empty otherwise)
- `chose_flaw_option`: the same choice on the targeted question after a *correct* explanation (baseline)

Dashboard metrics: flaw adoption by modality and by targeted difficulty, accuracy on the targeted question after correct vs. flawed explanations, accuracy by modality, per-case and per-difficulty tables, exposure (time, plays), and every survey with its answers.
