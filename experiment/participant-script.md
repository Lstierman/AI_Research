# Participant script

Everything a participant reads, sees and answers, in order, ready to paste into the survey tool. Design rationale: [experiment-design.md](experiment-design.md) · Live version: https://claude.ai/artifact/Hk5LEg8LuhY3TMmdepHVFZ *(still shows an earlier design)*

## How to read this script

The study runs online and self-guided, so every word below appears on screen. Nobody needs to read it aloud.

- **TELL** = text the participant reads on screen.
- **SHOW** = the stimulus (the situation, then the AI's explanation as chat bubble, audio player or video).
- **ASK** = a question, with its answer format in brackets.
- *[Notes in italics]* = instructions for us; never shown to participants.
- Placeholders: *[PART]* = 1, 2 or 3; *[MODALITY]* = the condition for this part; *[CASE]* = the current case; *[VERSION]* = perfect or flawed.

## Screen 1: Welcome and consent

**TELL:**

> **Learning with AI assistants**
>
> Thank you for taking part! This study looks at how people learn from AI assistants about topics they may not know much about. You'll get six short cases in three parts, from games to business to statistics. For each one, an AI assistant explains how it works, and then you answer three questions.
>
> The study takes about **30 minutes**. Please use a **laptop or desktop computer** (not a phone), use headphones or turn your sound on, and complete it in a quiet place without interruptions.
>
> **A calculator is built into the question pages. You may use pen and paper, but please don't use your phone, the internet or another calculator.** There are no right or wrong ways to take part; we are interested in your honest answers.
>
> - Participation is voluntary. You can stop at any time without giving a reason.
> - We do not collect your name, email address or IP address, and we only ask a few general questions about you.
> - Because your answers are anonymous, we cannot find and delete them after you submit. You can withdraw at the end of the survey, before submitting.
> - The data are stored on *[university storage]*, are only accessible to our project group, are used only for a university course project, and are deleted when the course ends.
> - You must be 18 or older to take part.
> - Questions? Contact *[name, email]*.
>
> At the end you will get more information about the study's purpose.

**ASK:** "I have read the information above and agree to take part." [Yes, I agree / No, I do not agree → end of survey]

*[The cover story is true but incomplete: it doesn't mention the flawed explanations. They are revealed in the debrief.]*

## Screen 2: Audio check and background

**TELL:** "First, let's check your sound."

**SHOW:** a 3-second audio clip of the TTS voice saying one word, e.g. "orange".

**ASK:** "Which word did you hear?" [open text] *[Wrong answer → "We couldn't confirm your sound. Check that your volume is up, your headphones are connected and the tab isn't muted, then try again." Second wrong answer → thank them and end the survey; counted as a technical exclusion, not analysed.]*

**TELL:** "A few questions about you."

**ASK:**

1. What is your age? [18–24 / 25–34 / 35–49 / 50+]
2. What is your gender? [woman / man / non-binary / prefer not to say]
3. What do you currently do? [student / working / other]
4. How often do you use text-based AI chatbots (e.g. ChatGPT)? [never / less than monthly / monthly / weekly / daily]
5. How often do you talk to an AI by voice (e.g. voice mode, Siri, Alexa)? [same scale]
6. Have you ever interacted with an AI avatar or video assistant? [yes / no / not sure]

*[Broad categories, so that combinations of answers can't identify anyone. Topic familiarity, the maths self-rating and the numeracy check come at the end, so nothing primes the cases.]*

## Parts 1–3

Each part uses one modality and contains two cases: one with a flawed explanation and one with a perfect explanation, taken from the participant's condition (see the counterbalancing in experiment-design.md). The two cases appear in random order.

### Part intro (once per part)

**TELL:** "Part *[PART]* of 3: *[title]*. You'll get 2 cases. For each one, you'll see a situation, and you asked an AI assistant to explain how it works. Then we'll ask how much you trust its explanation, followed by three questions about the situation."

| Modality | Title | Instruction |
| --- | --- | --- |
| Text | The AI explains in a chat | "Each explanation appears in a chat window, at about the speed of speech (about a minute). Read along; it stays on screen until you continue." |
| Voice | The AI explains out loud | "The AI explains each case out loud (about a minute). Press play and listen to the whole explanation. You can replay it as often as you like." |
| Video | The AI explains in a video call | "The AI explains each case in a short video call (about a minute). Press play and watch the whole explanation. You can replay it as often as you like." |

*[Part 1 only, under the instruction:]* "A calculator is built into the question pages. You may also use pen and paper, but no phone, internet or other calculator."

### Case screen A: situation, explanation and trust (× 2)

**SHOW:** "Part *[PART]* of 3 · Case *[n]* of 2", the case title, and the situation with its three questions in a grey box at the top. It stays visible while the explanation plays.

**SHOW (the AI's explanation of *[CASE]*, *[VERSION]*, under the situation):**

| Modality | Presentation |
| --- | --- |
| Text | A chat window: the participant's message "Can you explain how this works?", then the explanation streaming into a bubble at speech speed. Stays readable until Continue; time on page recorded |
| Voice | Audio player with an "AI assistant" icon; no transcript. Replay allowed; number of plays recorded |
| Video | Avatar video in a video-call frame labelled "AI assistant"; same audio file as voice. Replay allowed; number of plays recorded |

**ASK (appears once the explanation has finished streaming or playing once):** "How much do you trust the AI's explanation?" [slider 0–100, no starting position] → "Continue to the questions"

### Case screen B: your answers (× 2)

**TELL:** "Answer the three questions using what you learned. You can't go back to the explanation."

**SHOW:** the situation again (not the explanation, in any modality), and a "Calculator" button that opens the built-in calculator. *[Every calculation and every time it's opened are logged.]*

**ASK (for Q1–Q3):**

1. *[The question]* [number field with its unit, or answer options; or tick "I don't know"]
2. *[Skipped after "I don't know"]* "How sure are you of your answer?" [slider 0–100%, no starting position]

*[Participants cannot go back to earlier screens. Answer time is recorded.]*

### End of part (once per part)

**TELL:** "These questions are about the 2 cases you just did, where the AI explained *[in a chat / out loud / in a video call]*."

**ASK:**

1. "How did you mainly arrive at your answers in this part?" [I worked out the answers myself, using the AI's explanation / I followed the AI's explanation but checked whether it made sense / I followed the AI's explanation step by step without questioning it / I guessed]
2. "Did you use pen and paper in this part?" [Yes / No]
3. "How much do you agree with these statements?" [1 = strongly disagree, 7 = strongly agree]
   1. The information the AI gave was reliable.
   2. I trusted the AI.
   3. The AI seemed knowledgeable.
   4. The AI felt human-like.
   5. *[Part 2 only, attention check]* To show you are reading carefully, select "somewhat agree".
   6. It felt like I was interacting with someone.
   7. The AI felt eerie or unsettling.
   8. The explanations were easy to follow.

*[Trust (1–2), competence (3), human-likeness / social presence (4, 6; manipulation check), eeriness (7; tests the uncanny-valley explanation), ease (8). Single items, reported separately.]*

## Cases: situations, explanations and answer keys

Six cases, each with a perfect and a flawed explanation (12 scripts). The flawed version is identical to the perfect one except for the paragraph shown. Voice and video read the same words. The bracketed notes and answer keys are for us only. Source of truth for the app: `app/public/shared.js`.

### Case 1: Poker: calling a bet

*[Topic: Texas Hold'em poker. Flaw on Q1 (easy).]*

**SHOW (situation, on screen in every modality):**

> You're playing Texas Hold'em against one opponent.
>
> - Your two cards: 7♥ 6♥
> - The four shared cards on the table so far: A♥ 9♣ 2♥ K♦. One more shared card, the river, is still to come.
> - The pot holds €80. Your opponent bets €40, so you must pay €40 to call.
> - Assume you win if you finish with a flush, and lose otherwise.

**Questions** (same in both versions):

1. **Q1 (easy).** In a different hand, the cards are turned over: you have a flush and your opponent has a straight. Who wins? [You (flush) / Your opponent (straight) / It's a tie]
2. **Q2 (medium).** What is the chance that the river card gives you a flush? [number, %]
3. **Q3 (hard).** What is the expected value of calling? Use a minus sign if you lose money on average. [number, €]

**AI explanation, perfect version:**

> Here's how Texas Hold'em works. Each player has two private cards, and five shared cards are dealt face up on the table. You make the best five-card hand you can from all seven.
>
> Hands rank by how rare they are: rarer hands beat more common ones. From best to worst: straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, high card. A flush is five cards of the same suit; a straight is five cards in a row. There are about 5,100 possible flushes and about 10,200 possible straights.
>
> The cards that complete your hand are called your outs. A deck has 13 hearts, so count how many you can't see yet: 13 minus the hearts in your hand and on the table. Divide your outs by the number of cards you haven't seen, which is 52 minus the 6 you can see.
>
> To decide whether calling pays off, weigh what you can win against what you can lose. If you hit, you win everything in the pot, including your opponent's bet. If you miss, you lose the amount you called. Multiply each by its chance and add them up, counting the loss as negative.

**AI explanation, flawed version:** identical, except:

- Paragraph 2 becomes:

  > Hands rank by how rare they are: rarer hands beat more common ones. From best to worst: straight flush, four of a kind, full house, straight, flush, three of a kind, two pair, one pair, high card. A flush is five cards of the same suit; a straight is five cards in a row. There are about 5,100 possible flushes and about 10,200 possible straights.

*[Flaw: The AI ranked a straight above a flush. A flush beats a straight: it is rarer (about 5,100 flushes against 10,200 straights, as the AI itself said). Cue a novice can use: Self-contradiction: rarer hands rank higher, and the AI's own counts show the flush is rarer.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | You (flush) | You (flush) | **Your opponent (straight)** |
| Q2 | 19.57% | 9 hearts left ÷ 46 unseen cards = 19.6% | same as correct |
| Q3 | −€8.70 | 9/46 × €120 − 37/46 × €40 = −€8.70 | same as correct |

### Case 2: Backgammon: the doubling cube

*[Topic: Backgammon. Flaw on Q1 (easy).]*

**SHOW (situation, on screen in every modality):**

> You're playing a game of backgammon worth 1 point.
>
> - Your opponent offers to double the stakes to 2 points.
> - You estimate your chance of winning this game at 30%.
> - Assume nobody can win a gammon, unless a question says otherwise.

**Questions** (same in both versions):

1. **Q1 (easy).** Do you take or drop the double? [Take / Drop]
2. **Q2 (medium).** If you take, what is your expected result in points? Use a minus sign for a loss. [number, points]
3. **Q3 (hard).** Now suppose that if you lose, half of your losses are gammons: a 35% chance of an ordinary loss and a 35% chance of losing a gammon. You still win 30% of the time. What is your expected result in points if you take? [number, points]

**AI explanation, perfect version:**

> Backgammon is a race: each player moves fifteen checkers around the board with dice and tries to take them all off first. The stakes are shown on the doubling cube.
>
> Before rolling, a player may offer to double the stakes. You then choose. If you drop, you give up the game and lose the current stake, here 1 point. If you take, the game goes on for twice the stake: you'll either win 2 points or lose 2 points, and you now own the cube.
>
> To decide, compare averages. Dropping costs exactly 1 point. Taking is worth your chance of winning times 2, minus your chance of losing times 2. Taking is right whenever that average is better than minus 1, which works out to a winning chance of at least 25%.
>
> One complication is the gammon: if a player loses before taking off a single checker, they lose double the stake. On a cube of 2, a gammon costs 4 points instead of 2. To include it, split your losses into ordinary losses and gammons, and weigh each by its own chance.

**AI explanation, flawed version:** identical, except:

- Paragraph 3 becomes:

  > To decide, compare averages. Dropping costs exactly 1 point. Taking is worth your chance of winning times 2, minus your chance of losing times 2. Taking is right whenever that average is better than minus 1, which works out to a winning chance of at least 35%.

*[Flaw: The AI said taking needs a 35% chance of winning. Its own method gives 25%: at 30%, taking averages −0.8 points, which beats the −1 point of dropping. So you should take. Cue a novice can use: Check by calculation: the AI's own averaging method (also asked in Q2) shows taking beats dropping at 30%.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | Take | Take | **Drop** |
| Q2 | −0.8 points | 0.30 × 2 − 0.70 × 2 = −0.8 points | same as correct |
| Q3 | −1.5 points | 0.30 × 2 − 0.35 × 2 − 0.35 × 4 = −1.5 points | same as correct |

### Case 3: Aviation: holding fuel

*[Topic: Airliner fuel planning. Flaw on Q2 (medium).]*

**SHOW (situation, on screen in every modality):**

> You're the pilot of an airliner, circling near your destination because its runway is temporarily blocked.
>
> - Fuel on board now: 2,300 kg
> - Fuel burn while holding: 40 kg per minute
> - Fuel needed to fly to the alternate airport: 900 kg
> - Final reserve: 1,000 kg
> - Air traffic control expects to clear you to land in 20 minutes.

**Questions** (same in both versions):

1. **Q1 (easy).** How much fuel must still be in the tanks at the moment you leave the hold for the alternate airport? [number, kg]
2. **Q2 (medium).** How many minutes can you keep holding before you must leave for the alternate airport? [number, minutes]
3. **Q3 (hard).** Suppose you hold for the full 20 minutes, then can't land after all and fly to the alternate. How many kg below the final reserve would you be when you land there? [number, kg]

**AI explanation, perfect version:**

> Airliners carry fuel in layers. There's trip fuel to reach the destination, alternate fuel to fly on to a back-up airport, and a final reserve of about 30 minutes that must still be in the tanks when you land. You never plan to use the final reserve.
>
> When the destination is blocked, the crew holds: they fly a racetrack pattern while burning fuel. The key question is how long they can wait. Start from the fuel on board and set aside what you must keep for leaving: the alternate fuel plus the final reserve. Whatever is left over is your holding fuel.
>
> To turn holding fuel into time, divide it by the burn rate. At 40 kilograms per minute, every 100 kilograms buys you two and a half minutes.
>
> The latest moment to leave is called the bingo point. If you stay past it and then can't land, you'll reach the alternate eating into your final reserve. To see by how much, take the fuel on board, subtract what you burn while holding and what the flight to the alternate uses, and compare what's left with the final reserve.

**AI explanation, flawed version:** identical, except:

- Paragraph 3 becomes:

  > To turn holding fuel into time, divide it by the burn rate. At 40 kilograms per minute, every 100 kilograms buys you four minutes.

*[Flaw: The AI said every 100 kg buys four minutes of holding. At 40 kg per minute it's two and a half: 400 kg of holding fuel lasts 10 minutes, not 16. Cue a novice can use: Arithmetic check: 40 kg per minute × 4 minutes = 160 kg, not 100 kg.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | 1,900 kg | 900 + 1,000 = 1,900 kg | same as correct |
| Q2 | 10 minutes | (2,300 − 1,900) ÷ 40 = 10 minutes | **16 minutes** |
| Q3 | 400 kg | 2,300 − 800 − 900 = 600 kg, which is 400 kg below the 1,000 kg reserve | same as correct |

### Case 4: Pricing: should you cut the price?

*[Topic: Price elasticity. Flaw on Q2 (medium).]*

**SHOW (situation, on screen in every modality):**

> You run a small brewery and sell a craft beer six-pack.
>
> - Price: €10 per pack. Variable cost (beer, bottles, packaging): €4 per pack.
> - You sell 1,000 packs per week.
> - The price elasticity of your beer is −2.5.
> - You're considering a 10% price cut, to €9. Fixed costs stay the same either way.

**Questions** (same in both versions):

1. **Q1 (easy).** What is your weekly profit now, before fixed costs? [number, €]
2. **Q2 (medium).** How many packs per week would you sell at €9? [number, packs]
3. **Q3 (hard).** How many packs per week would you need to sell at €9 to make the same profit as now? [number, packs]

**AI explanation, perfect version:**

> Price elasticity tells you how strongly sales react to a price change. An elasticity of minus 2.5 means that for every 1% you lower the price, you sell about 2.5% more; for every 1% you raise it, you sell about 2.5% less.
>
> Your profit depends on two things: the margin on each pack, which is the price minus the variable cost, and the number of packs you sell. Multiply them to get your weekly profit before fixed costs. Fixed costs like rent stay the same whatever you do, so you can leave them out when you compare options.
>
> To predict sales after a price cut, take the percentage change in price and multiply it by the elasticity. That gives the percentage change in packs sold.
>
> A lower price also shrinks your margin, so the cut needs extra sales just to break even. Divide your current profit by the new margin per pack to see how many packs you'd need. If your predicted sales clear that bar, the price cut pays off.

**AI explanation, flawed version:** identical, except:

- Paragraph 3 becomes:

  > To predict sales after a price cut, the elasticity gives you the change directly: with an elasticity of minus 2.5, a price cut raises the number of packs sold by 2.5%.

*[Flaw: The AI said a price cut raises sales by 2.5% whatever its size. As it explained itself at the start, it's 2.5% per 1% of price cut: a 10% cut raises sales by 25%, to 1,250 packs. Cue a novice can use: Self-contradiction: the first paragraph says 2.5% more for every 1% cut.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | €6,000 | (€10 − €4) × 1,000 = €6,000 | same as correct |
| Q2 | 1,250 packs | 1,000 × (1 + 10% × 2.5) = 1,250 packs | **1,025 packs** |
| Q3 | 1,200 packs | €6,000 ÷ (€9 − €4) = 1,200 packs | same as correct |

### Case 5: Investing: net present value

*[Topic: Net present value (NPV). Flaw on Q3 (hard).]*

**SHOW (situation, on screen in every modality):**

> Your company is deciding whether to buy a new machine.
>
> - The machine costs €10,000, paid today.
> - It saves €3,000 at the end of each year for 4 years. After that it's worthless.
> - Your company uses a discount rate of 8%.

**Questions** (same in both versions):

1. **Q1 (easy).** What is the €3,000 saved at the end of year 1 worth in today's money? [number, €]
2. **Q2 (medium).** What is the €3,000 saved at the end of year 3 worth in today's money? [number, €]
3. **Q3 (hard).** What is the net present value (NPV) of buying the machine? Use a minus sign if it's negative. [number, €]

**AI explanation, perfect version:**

> Money in the future is worth less than money today, because money you have now could be invested and grow. Net present value, or NPV, converts every amount into today's money so you can compare them fairly.
>
> To convert a future amount, you discount it: divide it by one plus the discount rate, once for every year you have to wait. With an 8% rate, money one year away is divided by 1.08; money two years away is divided by 1.08 twice, and so on.
>
> Money you pay or receive today is already in today's money, so it isn't discounted at all.
>
> For an investment, discount each future saving to today, add them up, and subtract what you pay upfront. If the result is positive, the investment earns more than your 8% rate and is worth doing. If it's negative, it earns less.

**AI explanation, flawed version:** identical, except:

- Paragraph 3 becomes:

  > To compare like with like, discount the purchase price by one year as well, because the savings only start arriving a year from now.

- Paragraph 4 becomes:

  > For an investment, discount each future saving to today, add them up, and subtract the discounted purchase price. If the result is positive, the investment earns more than your 8% rate and is worth doing. If it's negative, it earns less.

*[Flaw: The AI said to discount the purchase price too. The €10,000 is paid today, so it's already in today's money. The savings are worth €9,936 today, so the NPV is −€64: the machine narrowly fails to earn 8%. Cue a novice can use: Conflict with the scenario and the AI's own rule: you only discount money you have to wait for, and the price is paid today.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | €2,777.78 | €3,000 ÷ 1.08 = €2,777.78 | same as correct |
| Q2 | €2,381.50 | €3,000 ÷ 1.08³ = €2,381.50 | same as correct |
| Q3 | −€63.62 | €2,777.78 + €2,572.02 + €2,381.50 + €2,205.09 − €10,000 = −€63.62 | **€677.12** |

### Case 6: Fraud alerts: what does an alarm mean?

*[Topic: Bayes' theorem (base rates). Flaw on Q3 (hard).]*

**SHOW (situation, on screen in every modality):**

> You work at a bank that screens card payments for fraud.
>
> - The bank processes 10,000 card payments per day.
> - 1% of payments are fraudulent.
> - The alert system flags 99% of fraudulent payments.
> - It also flags 5% of legitimate payments by mistake.

**Questions** (same in both versions):

1. **Q1 (easy).** How many legitimate payments are flagged by mistake each day? [number, payments]
2. **Q2 (medium).** How many alerts does the system raise per day in total? [number, alerts]
3. **Q3 (hard).** When the system flags a payment, what is the chance that it really is fraud? [number, %]

**AI explanation, perfect version:**

> Fraud alerts are a classic case where intuition goes wrong, because fraud is rare. The trick is to think in numbers of payments instead of percentages.
>
> Start with all the payments in a day and split them into fraudulent and legitimate ones using the fraud rate. Then apply the alert system to each group separately. Of the fraudulent payments, it catches 99%. Of the legitimate payments, it wrongly flags 5%. Because the legitimate group is so large, even that small percentage adds up to a lot of false alarms.
>
> Add the two groups of flagged payments together to get the total number of alerts.
>
> Finally, the question a fraud analyst cares about: when an alert goes off, how likely is it that the payment really is fraud? Divide the number of fraudulent payments that were flagged by the total number of alerts. The answer is usually much lower than people expect.

**AI explanation, flawed version:** identical, except:

- Paragraph 4 becomes:

  > Finally, the question a fraud analyst cares about: when an alert goes off, how likely is it that the payment really is fraud? Divide the number of fraudulent payments that were flagged by the number of legitimate payments that were flagged. The answer is usually much lower than people expect.

*[Flaw: The AI divided the fraudulent alerts by the false alarms only. The chance that an alert is real fraud is the fraudulent alerts divided by all alerts: 99 ÷ 594 = 16.7%, not 99 ÷ 495 = 20%. Cue a novice can use: Logic check: "out of all alerts" means dividing by the total number of alerts, which the AI had just asked you to count.]*

| Question | Correct answer | Working | Flawed version leads to |
| --- | --- | --- | --- |
| Q1 | 495 payments | 10,000 × 99% legitimate × 5% = 495 | same as correct |
| Q2 | 594 alerts | 99 fraudulent + 495 legitimate = 594 | same as correct |
| Q3 | 16.67% | 99 ÷ 594 = 16.7% | **20%** |

## Final screen: Suspicion check, familiarity and preferences

**ASK:**

1. "Did you notice anything unusual during this study?" [open text]
2. "Did any of the AI's explanations contain a mistake?" [Yes / No / Not sure]
3. *[If Yes or Not sure]* "In which case(s)?" [tick any of the 6 case titles]; "What was wrong?" [open text]
4. "When did you first suspect that the AI might give wrong information?" [Never / During part 1 / 2 / 3]
5. "Before this study, how familiar were you with each topic?" [per topic: 1 = never heard of it … 5 = I know it well] *[Texas Hold'em poker, Backgammon, Airliner fuel planning, Price elasticity, Net present value (NPV), Bayes' theorem (base rates)]*

**TELL:** "The AI explained in three ways: as **text in a chat**, as a **voice**, and in a **video call**."

6. "Rank the three ways from most to least preferred." [most preferred / second / least preferred, each a choice of chat / voice / video call, each used once]
7. "Which one did you trust most?" [chat / voice / video call / no difference]
8. "Which one was easiest to learn from?" [same options]
9. "Why did you prefer your first choice?" [open text]
10. "Which way would you prefer for learning something new from an AI in real life?" [chat / voice / video call / no preference]
11. "How good are you at mental arithmetic?" [1 = very poor, 5 = very good]
12. Numeracy check, no calculator [numeric entry each]:
    - A jacket costs €80 and is 25% off. What do you pay? *[€60]*
    - A train leaves at 14:45 and the trip takes 1 hour 50 minutes. When does it arrive? *[16:35]*
    - You buy 3 coffees at €2.40 each and pay with a €10 note. How much change do you get? *[€2.80]*
13. "Did you use anything besides the built-in calculator and pen and paper (a phone, the internet, another calculator)? Please answer honestly; it doesn't affect anything." [No / Yes]

*[Questions 1–4 come first, so later questions can't prime them; the open question comes before the direct one. Familiarity comes after detection so it doesn't hint at which topics mattered. "Yes" on question 13 → excluded (decided in advance).]*

## Debrief

**TELL:**

> **Thank you! Here is what this study was really about**
>
> We told you the study was about learning from AI assistants. That's true, but we didn't tell you everything: **3 of the 6 explanations contained a deliberate mistake.** The other 3 were correct. We want to find out whether people pick up an AI's mistakes equally often when it explains in a text chat, by voice, or in a video call. If we had told you beforehand, you would have searched for them, and we couldn't have measured this.
>
> The mistakes were written by us for this study. They say nothing about how reliable any real AI product is.
>
> **The mistakes and the correct answers** *[only the three flawed cases this participant saw, with the part number; text from the flaw notes above]*, for example:
>
> - **Poker:** The AI ranked a straight above a flush. A flush beats a straight: it is rarer (about 5,100 flushes against 10,200 straights, as the AI itself said). The correct answer to Q1 is *you (flush)*.
>
> Missing these mistakes is completely normal: you were learning about topics you may not have known, from an assistant that sounded confident. That's exactly why this research matters. When an AI teaches you something important, double-check it with another source.
>
> Please don't tell other potential participants about the mistakes until the study is over.
>
> This is your last chance to withdraw: because your answers are anonymous, we can't delete them after you submit.

**ASK:** "Can we use your answers?" [Yes, you can use my answers / No, please delete my answers]

*["No" → the response is discarded before submission. Repeat the contact person from the consent screen here.]*
