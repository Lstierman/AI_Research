# Refined pitch: speaker script

23 Oct 2026 · 10 min + Q&A · Deck: `Better Models, Better Humans_.(pitch2)html.html`

| Slides | Speaker | Time |
| --- | --- | --- |
| 1–5 · why, what we know, question, formats | Henri | 0:00 – 4:45 |
| 6–10 · one case, mistakes, measures, feasibility, demo | Leander | 4:45 – 9:30 |
| 11 · close + Q&A | Henri | 9:30 – 10:00 |

Word counts assume about 140 words per minute. Pressing **N** in the deck shows short cue notes, but on the projector the audience sees them too. Keep this script on a phone or laptop instead.

## What we changed after the feedback on pitch 1

| Feedback | Where we answer it |
| --- | --- |
| Slides too empty; add visuals, examples, a story | Opening story (slide 2), diagrams on slides 2, 5–7, live demo |
| Cite claims; position against related work; less "a paper said…" | Slide 3: four findings with sources on the slide. Name each source once, then move on |
| Is it feasible? How many people? Familiar with human studies? | Slide 9 |
| Add challenges and limitations | Slide 9, right column |
| Who is the target audience? | Slide 2 (interface designers, anyone learning from AI) and slide 11 |
| How will you measure it? | Slides 4 and 8 |
| Can you isolate the effect of audio (speed, no re-reading)? | Slide 5 |
| Practise, vary pace and intonation, stay calm, not too long | Rehearse with a timer; see the tips at the end |

---

## Henri

### Slide 1 · Title (0:00 – 0:30)

> Good morning. We're group 3: Leander, Lin, and I'm Henri.
> Two weeks ago we pitched the question "better models, better humans?". Today we'll show you how we're going to test it: the experiment, what we measure, why we think it's feasible, and at the end Leander will let you try the survey yourself.

### Slide 2 · Why this matters (0:30 – 1:45)

> Imagine you're on a video call with an AI assistant. It looks you in the eye, it sounds calm and sure of itself, and it explains how to work out whether an investment is worth it. One step in that explanation is wrong.
> *(pause)*
> Would you notice? And would you notice more easily if the exact same explanation was just text in a chat window?
>
> This isn't far-fetched. AI is climbing this ladder: first chat, then voice assistants, and now faces. Three weeks ago, the company Tavus reported that in a one-minute video call, 26 out of 54 people thought their AI avatar was a real person. That's their own number, not peer reviewed, but it shows where this is going.
>
> Every step up the ladder feels more natural, and more trustworthy. But trust only helps if it matches how good the AI really is. If a face makes a wrong explanation more convincing, human-likeness makes our decisions worse, not better. That matters for the people who design these interfaces, and for everyone who uses AI to learn something new.

### Slide 3 · What we already know (1:45 – 3:00)

> So what do we already know? Four findings.
>
> First, a 2024 meta-analysis by Vaccaro and colleagues, over 106 experiments: on average, a human working with an AI does worse than the best of the two alone, especially on decisions.
>
> Second, Bansal and colleagues showed that explanations make people accept AI advice more, also when the AI is wrong. So an explanation isn't automatically a safeguard.
>
> Third, Buçinca and colleagues could reduce that over-reliance by making people think for themselves first, but users liked that design the least.
>
> And fourth, from psychology: people treat computers as social actors, and hearing the same words spoken makes the speaker seem more competent than reading them.
>
> Put these together and there's a gap. This work is almost all about text. We found few studies that take the exact same explanation, deliver it as text, voice and a face, and measure whether people take over its mistakes. That's what we want to do.

*Tip: the sources are on the slide. Say the author name once and don't add "this paper says…" each time.*

### Slide 4 · Research question (3:00 – 4:00)

> Our question: when people learn something new from an AI, does a more human-like format make them more likely to adopt its mistakes?
>
> We expect three things. One: people trust voice and video more than text. Two, our main hypothesis: with voice, and even more with a face, more people follow the mistake. And three: that effect is bigger when the mistake sits in a harder question. Checking costs more effort there, so social cues matter more.
>
> We also look at whether people's confidence matches whether they're right, whether they say they checked the explanation, and which format they prefer.
> And our tests are two-sided: if text turns out to be the most misleading, that's a finding too, not a failed experiment.

### Slide 5 · One script, three deliveries (4:00 – 4:45)

> The core of the design: we write one script per explanation and deliver it three ways. As text in a chat, read aloud by an AI voice, or by an AI avatar with that same voice. The words are identical; only the format changes.
>
> After our first pitch, someone asked whether we can separate the effect of audio itself, like its speed and the fact that you can't re-read it. So: the text appears at speaking speed, voice and video can be replayed, and voice and video use the exact same audio file. Comparing those two isolates the effect of the face.
>
> Leander will now show you what one case looks like.

---

## Leander

### Slide 6 · One case (4:45 – 5:45)

> Thanks, Henri. Every participant goes through six short cases on topics most people don't know well: game rules, finance, statistics. We chose unfamiliar topics on purpose. The rules come only from the AI, just like when you ask an AI to explain something you don't know.
>
> A case works like this. First you read a situation. Then the AI explains how it works, in text, voice or video, about a minute long. It teaches the method but never gives the answers. Right after, you rate how much you trust that explanation.
>
> Then three questions: an easy one, a medium one and a hard one, and for each you say how sure you are. There's a calculator built in, and we log everything people type into it.
> Six cases, so eighteen answers per person.

### Slide 7 · The mistakes (5:45 – 7:00)

> Now the twist: half of the explanations hide one subtle mistake.
>
> We design these carefully. The flawed version is identical to the correct one except for one sentence, said in the same confident tone. That mistake breaks exactly one of the three questions; the other two stay correct. And every mistake can be caught by a beginner: the AI contradicts something it said earlier, or a quick sum doesn't add up.
>
> Here's what one participant could get. Three parts, one format each. In every part, one case is flawed and one is correct. Over the three parts they meet one mistake on an easy question, one on a medium and one on a hard question.
>
> Which format gets which difficulty is not fixed. The next participant might have the easy-question mistake in video instead of text. We rotate the format order, which cases are flawed and which question the mistake hits. That gives 36 conditions, and across them every format gets mistakes on easy, medium and hard questions equally often.
> And we only ask "did you notice any mistakes?" at the very end. If we asked earlier, people would start hunting for them.

### Slide 8 · What we measure (7:00 – 7:45)

> What do we measure? The main outcome is flaw adoption: on the question the mistake affects, did someone give exactly the wrong answer the mistake leads to?
>
> Next to that, how well people learn from the correct explanations. If voice or video is simply harder to learn from, that's a different story from being more convincing, and this lets us tell them apart.
>
> We also measure trust, right after each explanation, and calibration: does confidence match whether the answer is actually right?
> For the analysis we use mixed logistic regression, with participant and case as random effects, because every person answers several questions.

### Slide 9 · Feasibility (7:45 – 8:30)

> A fair question from last time: is this feasible? We think so. We need at least 36 participants, one per condition, and ideally 72. It's a 30-minute online survey on a laptop, and we'll collect everything within one week. The survey site already works; you'll see it in a moment. What's left is recording the explanations: 12 scripts in three formats, with a text-to-speech voice and an avatar tool.
>
> We're also honest about the limits. With this sample we can only detect large effects, so we present it as an exploratory pilot. Text can be re-read and voice can't, so voice versus face is our cleanest comparison. We use one voice and one avatar. And because the study uses mild deception, everyone gets a full debrief that corrects every mistake.

### Slide 10 · Live demo (8:30 – 9:30)

> Let's look at it.
> *(switch to the browser)*
> This is a demo case we made just for today, not one of the real six. That's on purpose: we'd love for you, our classmates and professors, to take part. If we showed you the real cases now, we'd give the mistakes away. And since you now know how the study works, we'll keep your answers as a separate group and compare them with everyone else.

Walk-through (about 45 s):

1. Show the situation.
2. Press play on the **video** explanation. Let it run a few seconds, then skip ahead.
3. Move the trust slider.
4. Answer one question with a confidence rating, and open the calculator.
5. Switch to the **text** version of the same case to show the difference.

> *(back to the slides)* 

### Slide 11 · Close (9:30 – 10:00)

> To wrap up: AI is getting a voice and a face, fast. We want to find out whether that makes it more helpful, or just more convincing. If it's the second, the people designing these interfaces, and anyone teaching people how to use AI, need to know.
> Thank you. We're happy to take your questions.

---

## Demo checklist (Leander)

- [ ] Start the server before class (`node server.js` in `experiment/app`) and open the demo page in **Edge** (its natural voices sound much better). Test the sound on the classroom projector.
- [ ] Use the **demo case**, not one of the six real cases.
- [ ] The `?demo=1` presenter toolbar **lists which cases are flawed**. Hide it, or don't use `?demo=1`, while the screen is shared.
- [ ] Have a backup ready (screen recording or screenshots) in case the Wi-Fi, fonts or audio fail.
- [ ] Don't submit a response during the demo, or clear it from `data/responses.json` afterwards.

## Likely questions

| Question | Short answer |
| --- | --- |
| Is 36–72 people enough? | Only for large effects. Every person meets three mistakes, one per format (within-subjects), which helps. We present it as an exploratory pilot and report estimates with confidence intervals, not only p-values. |
| Trust is subjective; how do you measure it? | Our main outcome is behaviour: did they give the wrong answer the mistake leads to. Trust ratings come second. |
| Why not use a live LLM? | Then the wording would differ between formats. Pre-written scripts keep the words identical. |
| What if someone already knows poker or finance? | We ask how familiar people are with each topic and control for it. Every mistake can also be caught without prior knowledge. |
| What if the avatar is just creepy? | We ask an "eerie / unsettling" item. If video gets lower trust and higher eeriness, that's the uncanny-valley explanation. |
| Isn't this unethical? | Mild deception only. No medical or safety topics, fictional numbers, and a debrief that corrects every mistake. We'll confirm it with the supervisors before launch. |
| Won't participants tell each other? | We collect within one week and ask at the end whether anyone suspected mistakes, and when. |
| Text can be re-read; isn't that unfair? | Yes, so voice vs. face (same audio, only the face differs) is the cleanest comparison. We also measure how well people learn in each format. |

## Delivery tips (from the feedback)

- Rehearse once with a timer. The last pitch felt a bit long; 10:00 is the limit, and the demo is the first thing to cut short.
- Pause after the opening question on slide 2 ("Would you notice?"). Vary your pace: slow down for the research question and the main hypothesis.
- Practise the handover at slide 5 → 6 so it flows.
- Check every source on slide 3 against the paper before presenting (Vaccaro 2024 and Bansal 2021 are in `papers/`; Schroeder & Epley 2015 and Reeves & Nass 1996 are cited from memory).
