// Shared by the participant and researcher pages: the 6 cases (each with a perfect and a
// flawed AI explanation), the counterbalancing conditions and scoring.
// Source of truth for wording: ../../participant-script.md (Cases).

const MODALITIES = ["text", "voice", "video"];
const MODALITY_LABEL = { text: "Text chat", voice: "Voice", video: "Video avatar" };
const DIFFICULTIES = ["easy", "medium", "hard"]; // Q1, Q2, Q3 of every case
const VERSIONS = ["perfect", "flawed"];

// Each case: the scenario (on screen in every modality), three questions of rising difficulty,
// and two explanations. The flawed one differs from the perfect one in a single rule or step,
// which changes the answer to exactly one question (flawQ). The participant gets the rules
// only from the AI's explanation.
const CASES = [
  {
    id: "poker", title: "Poker: calling a bet", topic: "Texas Hold'em poker", flawQ: 0,
    intro: "You're playing Texas Hold'em against one opponent.",
    facts: [
      "Your two cards: 7♥ 6♥",
      "The four shared cards on the table so far: A♥ 9♣ 2♥ K♦. One more shared card, the river, is still to come.",
      "The pot holds €80. Your opponent bets €40, so you must pay €40 to call.",
      "Assume you win if you finish with a flush, and lose otherwise.",
    ],
    questions: [
      { text: "In a different hand, the cards are turned over: you have a flush and your opponent has a straight. Who wins?", type: "choice",
        options: ["You (flush)", "Your opponent (straight)", "It's a tie"], correct: 0, flawed: 1 },
      { text: "What is the chance that the river card gives you a flush?", type: "number", unit: "%", correct: 19.57, tol: 0.5 },
      { text: "What is the expected value of calling? Use a minus sign if you lose money on average.", type: "number", unit: "€", correct: -8.7, tol: 0.15 },
    ],
    explanation: {
      perfect: [
        "Here's how Texas Hold'em works. Each player has two private cards, and five shared cards are dealt face up on the table. You make the best five-card hand you can from all seven.",
        "Hands rank by how rare they are: rarer hands beat more common ones. From best to worst: straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, high card. A flush is five cards of the same suit; a straight is five cards in a row. There are about 5,100 possible flushes and about 10,200 possible straights.",
        "The cards that complete your hand are called your outs. A deck has 13 hearts, so count how many you can't see yet: 13 minus the hearts in your hand and on the table. Divide your outs by the number of cards you haven't seen, which is 52 minus the 6 you can see.",
        "To decide whether calling pays off, weigh what you can win against what you can lose. If you hit, you win everything in the pot, including your opponent's bet. If you miss, you lose the amount you called. Multiply each by its chance and add them up, counting the loss as negative.",
      ],
      flawed: [
        "Here's how Texas Hold'em works. Each player has two private cards, and five shared cards are dealt face up on the table. You make the best five-card hand you can from all seven.",
        "Hands rank by how rare they are: rarer hands beat more common ones. From best to worst: straight flush, four of a kind, full house, straight, flush, three of a kind, two pair, one pair, high card. A flush is five cards of the same suit; a straight is five cards in a row. There are about 5,100 possible flushes and about 10,200 possible straights.",
        "The cards that complete your hand are called your outs. A deck has 13 hearts, so count how many you can't see yet: 13 minus the hearts in your hand and on the table. Divide your outs by the number of cards you haven't seen, which is 52 minus the 6 you can see.",
        "To decide whether calling pays off, weigh what you can win against what you can lose. If you hit, you win everything in the pot, including your opponent's bet. If you miss, you lose the amount you called. Multiply each by its chance and add them up, counting the loss as negative.",
      ],
    },
    flaw: "The AI ranked a straight above a flush. A flush beats a straight: it is rarer (about 5,100 flushes against 10,200 straights, as the AI itself said).",
    cue: "Self-contradiction: rarer hands rank higher, and the AI's own counts show the flush is rarer.",
    answerKey: ["You (flush)", "9 hearts left ÷ 46 unseen cards = 19.6%", "9/46 × €120 − 37/46 × €40 = −€8.70"],
  },
  {
    id: "backgammon", title: "Backgammon: the doubling cube", topic: "Backgammon", flawQ: 0,
    intro: "You're playing a game of backgammon worth 1 point.",
    facts: [
      "Your opponent offers to double the stakes to 2 points.",
      "You estimate your chance of winning this game at 30%.",
      "Assume nobody can win a gammon, unless a question says otherwise.",
    ],
    questions: [
      { text: "Do you take or drop the double?", type: "choice", options: ["Take", "Drop"], correct: 0, flawed: 1 },
      { text: "If you take, what is your expected result in points? Use a minus sign for a loss.", type: "number", unit: "points", correct: -0.8, tol: 0.02 },
      { text: "Now suppose that if you lose, half of your losses are gammons: a 35% chance of an ordinary loss and a 35% chance of losing a gammon. You still win 30% of the time. What is your expected result in points if you take?", type: "number", unit: "points", correct: -1.5, tol: 0.02 },
    ],
    explanation: {
      perfect: [
        "Backgammon is a race: each player moves fifteen checkers around the board with dice and tries to take them all off first. The stakes are shown on the doubling cube.",
        "Before rolling, a player may offer to double the stakes. You then choose. If you drop, you give up the game and lose the current stake, here 1 point. If you take, the game goes on for twice the stake: you'll either win 2 points or lose 2 points, and you now own the cube.",
        "To decide, compare averages. Dropping costs exactly 1 point. Taking is worth your chance of winning times 2, minus your chance of losing times 2. Taking is right whenever that average is better than minus 1, which works out to a winning chance of at least 25%.",
        "One complication is the gammon: if a player loses before taking off a single checker, they lose double the stake. On a cube of 2, a gammon costs 4 points instead of 2. To include it, split your losses into ordinary losses and gammons, and weigh each by its own chance.",
      ],
      flawed: [
        "Backgammon is a race: each player moves fifteen checkers around the board with dice and tries to take them all off first. The stakes are shown on the doubling cube.",
        "Before rolling, a player may offer to double the stakes. You then choose. If you drop, you give up the game and lose the current stake, here 1 point. If you take, the game goes on for twice the stake: you'll either win 2 points or lose 2 points, and you now own the cube.",
        "To decide, compare averages. Dropping costs exactly 1 point. Taking is worth your chance of winning times 2, minus your chance of losing times 2. Taking is right whenever that average is better than minus 1, which works out to a winning chance of at least 35%.",
        "One complication is the gammon: if a player loses before taking off a single checker, they lose double the stake. On a cube of 2, a gammon costs 4 points instead of 2. To include it, split your losses into ordinary losses and gammons, and weigh each by its own chance.",
      ],
    },
    flaw: "The AI said taking needs a 35% chance of winning. Its own method gives 25%: at 30%, taking averages −0.8 points, which beats the −1 point of dropping. So you should take.",
    cue: "Check by calculation: the AI's own averaging method (also asked in Q2) shows taking beats dropping at 30%.",
    answerKey: ["Take", "0.30 × 2 − 0.70 × 2 = −0.8 points", "0.30 × 2 − 0.35 × 2 − 0.35 × 4 = −1.5 points"],
  },
  {
    id: "aviation", title: "Aviation: holding fuel", topic: "Airliner fuel planning", flawQ: 1,
    intro: "You're the pilot of an airliner, circling near your destination because its runway is temporarily blocked.",
    facts: [
      "Fuel on board now: 2,300 kg",
      "Fuel burn while holding: 40 kg per minute",
      "Fuel needed to fly to the alternate airport: 900 kg",
      "Final reserve: 1,000 kg",
      "Air traffic control expects to clear you to land in 20 minutes.",
    ],
    questions: [
      { text: "How much fuel must still be in the tanks at the moment you leave the hold for the alternate airport?", type: "number", unit: "kg", correct: 1900, tol: 0.5 },
      { text: "How many minutes can you keep holding before you must leave for the alternate airport?", type: "number", unit: "minutes", correct: 10, tol: 0.1, flawed: 16 },
      { text: "Suppose you hold for the full 20 minutes, then can't land after all and fly to the alternate. How many kg below the final reserve would you be when you land there?", type: "number", unit: "kg", correct: 400, tol: 0.5 },
    ],
    explanation: {
      perfect: [
        "Airliners carry fuel in layers. There's trip fuel to reach the destination, alternate fuel to fly on to a back-up airport, and a final reserve of about 30 minutes that must still be in the tanks when you land. You never plan to use the final reserve.",
        "When the destination is blocked, the crew holds: they fly a racetrack pattern while burning fuel. The key question is how long they can wait. Start from the fuel on board and set aside what you must keep for leaving: the alternate fuel plus the final reserve. Whatever is left over is your holding fuel.",
        "To turn holding fuel into time, divide it by the burn rate. At 40 kilograms per minute, every 100 kilograms buys you two and a half minutes.",
        "The latest moment to leave is called the bingo point. If you stay past it and then can't land, you'll reach the alternate eating into your final reserve. To see by how much, take the fuel on board, subtract what you burn while holding and what the flight to the alternate uses, and compare what's left with the final reserve.",
      ],
      flawed: [
        "Airliners carry fuel in layers. There's trip fuel to reach the destination, alternate fuel to fly on to a back-up airport, and a final reserve of about 30 minutes that must still be in the tanks when you land. You never plan to use the final reserve.",
        "When the destination is blocked, the crew holds: they fly a racetrack pattern while burning fuel. The key question is how long they can wait. Start from the fuel on board and set aside what you must keep for leaving: the alternate fuel plus the final reserve. Whatever is left over is your holding fuel.",
        "To turn holding fuel into time, divide it by the burn rate. At 40 kilograms per minute, every 100 kilograms buys you four minutes.",
        "The latest moment to leave is called the bingo point. If you stay past it and then can't land, you'll reach the alternate eating into your final reserve. To see by how much, take the fuel on board, subtract what you burn while holding and what the flight to the alternate uses, and compare what's left with the final reserve.",
      ],
    },
    flaw: "The AI said every 100 kg buys four minutes of holding. At 40 kg per minute it's two and a half: 400 kg of holding fuel lasts 10 minutes, not 16.",
    cue: "Arithmetic check: 40 kg per minute × 4 minutes = 160 kg, not 100 kg.",
    answerKey: ["900 + 1,000 = 1,900 kg", "(2,300 − 1,900) ÷ 40 = 10 minutes", "2,300 − 800 − 900 = 600 kg, which is 400 kg below the 1,000 kg reserve"],
  },
  {
    id: "pricing", title: "Pricing: should you cut the price?", topic: "Price elasticity", flawQ: 1,
    intro: "You run a small brewery and sell a craft beer six-pack.",
    facts: [
      "Price: €10 per pack. Variable cost (beer, bottles, packaging): €4 per pack.",
      "You sell 1,000 packs per week.",
      "The price elasticity of your beer is −2.5.",
      "You're considering a 10% price cut, to €9. Fixed costs stay the same either way.",
    ],
    questions: [
      { text: "What is your weekly profit now, before fixed costs?", type: "number", unit: "€", correct: 6000, tol: 0.5 },
      { text: "How many packs per week would you sell at €9?", type: "number", unit: "packs", correct: 1250, tol: 1, flawed: 1025 },
      { text: "How many packs per week would you need to sell at €9 to make the same profit as now?", type: "number", unit: "packs", correct: 1200, tol: 1 },
    ],
    explanation: {
      perfect: [
        "Price elasticity tells you how strongly sales react to a price change. An elasticity of minus 2.5 means that for every 1% you lower the price, you sell about 2.5% more; for every 1% you raise it, you sell about 2.5% less.",
        "Your profit depends on two things: the margin on each pack, which is the price minus the variable cost, and the number of packs you sell. Multiply them to get your weekly profit before fixed costs. Fixed costs like rent stay the same whatever you do, so you can leave them out when you compare options.",
        "To predict sales after a price cut, take the percentage change in price and multiply it by the elasticity. That gives the percentage change in packs sold.",
        "A lower price also shrinks your margin, so the cut needs extra sales just to break even. Divide your current profit by the new margin per pack to see how many packs you'd need. If your predicted sales clear that bar, the price cut pays off.",
      ],
      flawed: [
        "Price elasticity tells you how strongly sales react to a price change. An elasticity of minus 2.5 means that for every 1% you lower the price, you sell about 2.5% more; for every 1% you raise it, you sell about 2.5% less.",
        "Your profit depends on two things: the margin on each pack, which is the price minus the variable cost, and the number of packs you sell. Multiply them to get your weekly profit before fixed costs. Fixed costs like rent stay the same whatever you do, so you can leave them out when you compare options.",
        "To predict sales after a price cut, the elasticity gives you the change directly: with an elasticity of minus 2.5, a price cut raises the number of packs sold by 2.5%.",
        "A lower price also shrinks your margin, so the cut needs extra sales just to break even. Divide your current profit by the new margin per pack to see how many packs you'd need. If your predicted sales clear that bar, the price cut pays off.",
      ],
    },
    flaw: "The AI said a price cut raises sales by 2.5% whatever its size. As it explained itself at the start, it's 2.5% per 1% of price cut: a 10% cut raises sales by 25%, to 1,250 packs.",
    cue: "Self-contradiction: the first paragraph says 2.5% more for every 1% cut.",
    answerKey: ["(€10 − €4) × 1,000 = €6,000", "1,000 × (1 + 10% × 2.5) = 1,250 packs", "€6,000 ÷ (€9 − €4) = 1,200 packs"],
  },
  {
    id: "npv", title: "Investing: net present value", topic: "Net present value (NPV)", flawQ: 2,
    intro: "Your company is deciding whether to buy a new machine.",
    facts: [
      "The machine costs €10,000, paid today.",
      "It saves €3,000 at the end of each year for 4 years. After that it's worthless.",
      "Your company uses a discount rate of 8%.",
    ],
    questions: [
      { text: "What is the €3,000 saved at the end of year 1 worth in today's money?", type: "number", unit: "€", correct: 2777.78, tol: 1 },
      { text: "What is the €3,000 saved at the end of year 3 worth in today's money?", type: "number", unit: "€", correct: 2381.5, tol: 1 },
      { text: "What is the net present value (NPV) of buying the machine? Use a minus sign if it's negative.", type: "number", unit: "€", correct: -63.62, tol: 2, flawed: 677.12 },
    ],
    explanation: {
      perfect: [
        "Money in the future is worth less than money today, because money you have now could be invested and grow. Net present value, or NPV, converts every amount into today's money so you can compare them fairly.",
        "To convert a future amount, you discount it: divide it by one plus the discount rate, once for every year you have to wait. With an 8% rate, money one year away is divided by 1.08; money two years away is divided by 1.08 twice, and so on.",
        "Money you pay or receive today is already in today's money, so it isn't discounted at all.",
        "For an investment, discount each future saving to today, add them up, and subtract what you pay upfront. If the result is positive, the investment earns more than your 8% rate and is worth doing. If it's negative, it earns less.",
      ],
      flawed: [
        "Money in the future is worth less than money today, because money you have now could be invested and grow. Net present value, or NPV, converts every amount into today's money so you can compare them fairly.",
        "To convert a future amount, you discount it: divide it by one plus the discount rate, once for every year you have to wait. With an 8% rate, money one year away is divided by 1.08; money two years away is divided by 1.08 twice, and so on.",
        "To compare like with like, discount the purchase price by one year as well, because the savings only start arriving a year from now.",
        "For an investment, discount each future saving to today, add them up, and subtract the discounted purchase price. If the result is positive, the investment earns more than your 8% rate and is worth doing. If it's negative, it earns less.",
      ],
    },
    flaw: "The AI said to discount the purchase price too. The €10,000 is paid today, so it's already in today's money. The savings are worth €9,936 today, so the NPV is −€64: the machine narrowly fails to earn 8%.",
    cue: "Conflict with the scenario and the AI's own rule: you only discount money you have to wait for, and the price is paid today.",
    answerKey: ["€3,000 ÷ 1.08 = €2,777.78", "€3,000 ÷ 1.08³ = €2,381.50", "€2,777.78 + €2,572.02 + €2,381.50 + €2,205.09 − €10,000 = −€63.62"],
  },
  {
    id: "fraud", title: "Fraud alerts: what does an alarm mean?", topic: "Bayes' theorem (base rates)", flawQ: 2,
    intro: "You work at a bank that screens card payments for fraud.",
    facts: [
      "The bank processes 10,000 card payments per day.",
      "1% of payments are fraudulent.",
      "The alert system flags 99% of fraudulent payments.",
      "It also flags 5% of legitimate payments by mistake.",
    ],
    questions: [
      { text: "How many legitimate payments are flagged by mistake each day?", type: "number", unit: "payments", correct: 495, tol: 0.5 },
      { text: "How many alerts does the system raise per day in total?", type: "number", unit: "alerts", correct: 594, tol: 0.5 },
      { text: "When the system flags a payment, what is the chance that it really is fraud?", type: "number", unit: "%", correct: 16.67, tol: 0.4, flawed: 20 },
    ],
    explanation: {
      perfect: [
        "Fraud alerts are a classic case where intuition goes wrong, because fraud is rare. The trick is to think in numbers of payments instead of percentages.",
        "Start with all the payments in a day and split them into fraudulent and legitimate ones using the fraud rate. Then apply the alert system to each group separately. Of the fraudulent payments, it catches 99%. Of the legitimate payments, it wrongly flags 5%. Because the legitimate group is so large, even that small percentage adds up to a lot of false alarms.",
        "Add the two groups of flagged payments together to get the total number of alerts.",
        "Finally, the question a fraud analyst cares about: when an alert goes off, how likely is it that the payment really is fraud? Divide the number of fraudulent payments that were flagged by the total number of alerts. The answer is usually much lower than people expect.",
      ],
      flawed: [
        "Fraud alerts are a classic case where intuition goes wrong, because fraud is rare. The trick is to think in numbers of payments instead of percentages.",
        "Start with all the payments in a day and split them into fraudulent and legitimate ones using the fraud rate. Then apply the alert system to each group separately. Of the fraudulent payments, it catches 99%. Of the legitimate payments, it wrongly flags 5%. Because the legitimate group is so large, even that small percentage adds up to a lot of false alarms.",
        "Add the two groups of flagged payments together to get the total number of alerts.",
        "Finally, the question a fraud analyst cares about: when an alert goes off, how likely is it that the payment really is fraud? Divide the number of fraudulent payments that were flagged by the number of legitimate payments that were flagged. The answer is usually much lower than people expect.",
      ],
    },
    flaw: "The AI divided the fraudulent alerts by the false alarms only. The chance that an alert is real fraud is the fraudulent alerts divided by all alerts: 99 ÷ 594 = 16.7%, not 99 ÷ 495 = 20%.",
    cue: "Logic check: \"out of all alerts\" means dividing by the total number of alerts, which the AI had just asked you to count.",
    answerKey: ["10,000 × 99% legitimate × 5% = 495", "99 fraudulent + 495 legitimate = 594", "99 ÷ 594 = 16.7%"],
  },
];
const CASE_BY_ID = Object.fromEntries(CASES.map((c) => [c.id, c]));

// Counterbalancing (experiment-design.md): cases are grouped by the position of their flaw.
// Each participant gets one flawed case from each group (so one Q1, one Q2 and one Q3 flaw)
// and the other case of each group in its perfect version. Each part (modality) pairs one
// flawed with one perfect case. 6 modality orders × 3 rotations × 2 flips = 36 conditions.
const FLAW_GROUPS = [["poker", "backgammon"], ["aviation", "pricing"], ["npv", "fraud"]];
const MODALITY_ORDERS = [
  ["text", "voice", "video"], ["text", "video", "voice"], ["voice", "text", "video"],
  ["voice", "video", "text"], ["video", "text", "voice"], ["video", "voice", "text"],
];
const CONDITIONS = MODALITY_ORDERS.flatMap((mo, m) => [0, 1, 2].flatMap((r) => [0, 1].map((f) => {
  const flawed = FLAW_GROUPS.map((g) => g[f]), perfect = FLAW_GROUPS.map((g) => g[1 - f]);
  return {
    id: `M${m + 1}-R${r + 1}-F${f + 1}`,
    modalityOrder: mo,
    parts: [0, 1, 2].map((k) => ({
      modality: mo[k],
      cases: [{ caseId: flawed[(k + r) % 3], version: "flawed" }, { caseId: perfect[(k + r + 1) % 3], version: "perfect" }],
    })),
  };
})));

const RATING_ITEMS = [
  { id: "reliable", text: "The information the AI gave was reliable." },
  { id: "trusted", text: "I trusted the AI." },
  { id: "knowledgeable", text: "The AI seemed knowledgeable." },
  { id: "humanlike", text: "The AI felt human-like." },
  { id: "someone", text: "It felt like I was interacting with someone." },
  { id: "eerie", text: "The AI felt eerie or unsettling." },
  { id: "easy", text: "The explanations were easy to follow." },
];

const HOW_ANSWERED = [
  { id: "self", text: "I worked out the answers myself, using the AI's explanation" },
  { id: "checked", text: "I followed the AI's explanation but checked whether it made sense" },
  { id: "used_ai", text: "I followed the AI's explanation step by step without questioning it" },
  { id: "guessed", text: "I guessed" },
];

// "€54", "54,5", "-8.70", "−8,70", "1,250", "2.381,50", "19.6%" -> number. With both separators,
// the last one is the decimal mark. A lone comma followed by exactly three digits is a thousands
// separator; otherwise it's a decimal comma. Null if not a number.
function parseNumber(v) {
  if (v === null || v === undefined) return null;
  let s = String(v).replace(/[€%\s]/g, "").replace(/[−–]/g, "-");
  if (s.includes(",") && s.includes(".")) s = s.lastIndexOf(",") > s.lastIndexOf(".") ? s.replace(/\./g, "").replace(",", ".") : s.replace(/,/g, "");
  else if (/^-?\d{1,3}(,\d{3})+$/.test(s)) s = s.replace(/,/g, "");
  else s = s.replace(",", ".");
  if (s === "" || s === "-" || isNaN(Number(s))) return null;
  return Number(s);
}

const near = (v, target, tol) => v !== null && Math.abs(v - target) <= tol + 1e-9;
const fmtNum = (v, unit) => {
  const cents = unit === "€" && !Number.isInteger(v);
  const n = Math.abs(v) >= 1000 || cents ? v.toLocaleString("en-US", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: 2 }) : String(Math.round(v * 100) / 100);
  if (unit === "€") return v < 0 ? "−€" + n.replace("-", "") : "€" + n;
  return (unit === "%" ? n + "%" : `${n} ${unit}`).replace(/^-/, "−");
};
const fmtAnswer = (q, v) => (q.type === "choice" ? q.options[v] : fmtNum(v, q.unit));

// Scores one answer following the table in experiment-design.md ("Scoring an answer").
// isFlawQ: this question is the one the flawed explanation leads astray.
function scoreAnswer(q, a, isFlawQ) {
  if (!a || a.dontKnow) return { outcome: "uncertain", correct: false, adopted: false };
  const matches = (target) => (q.type === "choice" ? a.value !== "" && Number(a.value) === target : near(parseNumber(a.value), target, q.tol));
  if (matches(q.correct)) return { outcome: isFlawQ ? "resisted" : "correct", correct: true, adopted: false };
  if (isFlawQ && matches(q.flawed)) return { outcome: "adopted", correct: false, adopted: true };
  return { outcome: "other", correct: false, adopted: false };
}

// Calibration over a list of scored questions (those with a confidence rating).
function calibration(items) {
  const c = items.filter((x) => x.confidence !== null && x.confidence !== undefined);
  if (!c.length) return { brier: null, overconf: null };
  return {
    brier: c.reduce((t, x) => t + (x.confidence / 100 - (x.correct ? 1 : 0)) ** 2, 0) / c.length,
    overconf: c.reduce((t, x) => t + x.confidence / 100, 0) / c.length - c.filter((x) => x.correct).length / c.length,
  };
}

// Per-participant summary used by the dashboard and CSV export: one row per case × question.
function scoreResponse(r) {
  const items = (r.cases || []).flatMap((cr) => {
    const c = CASE_BY_ID[cr.caseId];
    return c.questions.map((q, qi) => {
      const a = (cr.answers || [])[qi] || {};
      const isFlawQ = cr.version === "flawed" && qi === c.flawQ;
      return {
        ...scoreAnswer(q, a, isFlawQ), caseId: c.id, version: cr.version, block: cr.block, posInBlock: cr.posInBlock, modality: cr.modality,
        q: qi + 1, difficulty: DIFFICULTIES[qi], isFlawQ, isFlawCase: cr.version === "flawed",
        value: a.value, dontKnow: !!a.dontKnow, confidence: a.dontKnow ? null : a.confidence, trust: cr.trust,
      };
    });
  });
  const byModality = {};
  for (const m of MODALITIES) {
    const L = items.filter((x) => x.modality === m), flawQs = L.filter((x) => x.isFlawQ), others = L.filter((x) => !x.isFlawQ);
    byModality[m] = {
      flawN: flawQs.length, adopted: flawQs.filter((x) => x.adopted).length, resisted: flawQs.filter((x) => x.correct).length,
      otherN: others.length, otherCorrect: others.filter((x) => x.correct).length,
      ...calibration(L),
    };
  }
  return { items, byModality, adopted: items.filter((x) => x.adopted).length, flawN: items.filter((x) => x.isFlawQ).length, totalCorrect: items.filter((x) => x.correct).length, ...calibration(items) };
}

// A tiny calculator: + − × ÷, brackets, decimals, %, ^. No eval.
function calculate(expr) {
  const s = String(expr).replace(/×|\*/g, "*").replace(/÷|\//g, "/").replace(/[−–]/g, "-").replace(/,/g, ".").replace(/\s+/g, "");
  let i = 0;
  const peek = () => s[i];
  function num() {
    const m = /^\d*\.?\d+(e[+-]?\d+)?/i.exec(s.slice(i));
    if (!m) throw new Error("syntax");
    i += m[0].length;
    return Number(m[0]);
  }
  function factor() {
    if (peek() === "-") { i++; return -factor(); }
    if (peek() === "+") { i++; return factor(); }
    let v;
    if (peek() === "(") { i++; v = expr0(); if (peek() !== ")") throw new Error("syntax"); i++; }
    else v = num();
    if (peek() === "%") { i++; v /= 100; }
    if (peek() === "^") { i++; v = Math.pow(v, factor()); }
    return v;
  }
  function term() { let v = factor(); while (peek() === "*" || peek() === "/") { const op = s[i++]; const w = factor(); v = op === "*" ? v * w : v / w; } return v; }
  function expr0() { let v = term(); while (peek() === "+" || peek() === "-") { const op = s[i++]; const w = term(); v = op === "+" ? v + w : v - w; } return v; }
  const v = expr0();
  if (i !== s.length || !isFinite(v)) throw new Error("syntax");
  return Math.round(v * 1e10) / 1e10;
}
