# Experiment web app (demo)

A working version of the study in [../experiment-design.md](../experiment-design.md): **6 cases on unfamiliar topics, each explained by an AI in a perfect or a flawed version**, 3 questions per case, one modality per part, 36 counterbalanced conditions. It has two sites:

- **Participant site** (`/participant`): the full flow from [../participant-script.md](../participant-script.md): consent → sound check → background → 3 parts × (intro → 2 × [situation + AI explanation (text, voice or video) + trust → 3 questions with confidence and a built-in calculator] → end-of-part ratings) → final questions → debrief → submit.
- **Researcher dashboard** (`/researcher`): flaw adoption by modality and by flaw position (Q1–Q3), accuracy after perfect explanations (can people learn from each modality?), trust in perfect vs. flawed explanations, overconfidence/Brier, self-reported strategy, calculator use, a per-case table, every participant, and a long-format CSV export (one row per participant × case × question).

The cases, conditions and scoring live in `public/shared.js`. That file is the source of truth for the wording; the case section of the participant script is generated from it.

## Run it

Requires Node 18+ (no `npm install` needed).

```
cd experiment/app
node server.js
```

Or double-click `start.bat`. Then open http://localhost:3000.

Responses are saved to `data/responses.json`. The dashboard ignores responses from earlier designs.

## For the pitch demo

- `http://localhost:3000/participant?demo=1` shows a presenter toolbar at the bottom to switch the condition (it lists which cases are flawed), speed up playback, pick the voice, and jump to any screen. The landing page (http://localhost:3000) has one-click "Try it" cards that start with each modality.
- `?modality=text|voice|video` starts with that modality; `?condition=M1-R1-F1` forces a condition. Without either, the server assigns the condition with the fewest responses so far (even presentation).
- On the dashboard, **+ 36 simulated** adds clearly flagged fake participants (one per condition) so the charts have something to show. The simulated effects are made up. Use **Clear simulated** before real data collection.
- Use **Edge** if you can: its "Natural" voices sound far less robotic than Chrome's, and the app picks them automatically. Fonts load from Google Fonts, so the page looks best with internet.
- Browsers only allow speech after a real click, so voice and video explanations start when the participant presses Play.

## What's a placeholder

| In the demo | In the real study |
| --- | --- |
| Browser text-to-speech | One recorded TTS audio file per explanation (12), checked word by word |
| Animated illustrated avatar | Lip-synced avatar video (e.g. HeyGen, D-ID) of the same audio, 12 clips |
| Local JSON file | University storage |
