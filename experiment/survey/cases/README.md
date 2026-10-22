# Cases

One folder per case (6 in total). Each folder contains:

| File | What it is |
| --- | --- |
| `case.json` | Title, situation, which question the error targets, and the 3 multiple-choice questions |
| `text_correct.txt` | Correct textual explanation (blank lines separate paragraphs) |
| `text_flawed.txt` | Same explanation with the error |
| `voice_correct.mp3` | Correct spoken explanation |
| `voice_flawed.mp3` | Spoken explanation with the error |
| `video_correct.mp4` | Correct face + voice video |
| `video_flawed.mp4` | Video with the error |

### Formatting the text files

- A blank line starts a new paragraph. Line breaks inside a paragraph are ignored, so hard-wrapped text is fine.
- Lines starting with `1. `, `2. `, … become a numbered list; lines starting with `- ` a bulleted list.
- A line starting with `> ` is set apart in a highlighted box (e.g. a formula). The `>` isn't shown.

Give the correct and flawed versions the same layout, so the only difference participants see is the error.

The file names must match exactly. Missing files show up as "missing" on the dashboard, and participants see a placeholder in their place. Changes are picked up without restarting the app.

## case.json

```json
{
  "title": "Poker: calling a bet",
  "context": "Shown above the explanation and again above each question.",
  "flawedQuestion": "easy",
  "questions": {
    "easy":   { "prompt": "...", "options": { "A": "...", "B": "...", "C": "...", "D": "..." }, "correct": "A", "flawedAnswer": "B" },
    "medium": { "prompt": "...", "options": { "A": "...", "B": "...", "C": "..." }, "correct": "C" },
    "hard":   { "prompt": "...", "options": { "A": "...", "B": "..." }, "correct": "B" }
  }
}
```

- `flawedQuestion`: `easy`, `medium` or `hard`, the question the error in the flawed versions leads people to answer wrong. **Exactly 2 cases per difficulty**: the app refuses to start surveys otherwise.
- `correct`: the option key of the right answer.
- `flawedAnswer`: only on the targeted question. It's the option the error leads to, used to measure flaw adoption.
- Options can have any number of keys (at least 2) and are shown in the order written.
- `context` is optional. It is shown above the explanation only.
- `prompt` can span several lines with `\n`. Short `Label: value` lines (e.g. `"Your hand: 9♥ 4♥\nBoard: 7♥ 8♠ 9♣\n..."`) are shown as an aligned block, other lines as normal text, and the last line (the actual question) in bold.
- ♥ and ♦ are shown in red, in prompts and in the text explanations.

Don't change a case's questions or answer keys once real data collection has started: scoring happens when an answer is submitted, using the current `case.json`.
