/*
 * SURVEY CONTENT — the 6 topics, their explanations and their questions.
 * Source: "AI survey – 6 topics with decision questions and marked errors" (6 Nov 2026).
 *
 * How explanations are stored
 * ---------------------------
 * Each explanation is a list of paragraphs. A paragraph is a list of parts:
 *   - a plain string  = text that is identical in all 4 variants
 *   - an object       = text that differs between variants:
 *       { correct: "...", easy: "..." }   ← the "error_easy" variant uses the `easy` text here
 *       { correct: "...", medium: "..." } ← the "error_medium" variant uses the `medium` text
 *       { correct: "...", hard: "..." }   ← the "error_hard" variant uses the `hard` text
 *     Any variant that has no key of its own uses `correct`. Use "" to delete a sentence.
 *
 * So the 4 variants of a topic are word-for-word identical except for the marked parts,
 * and each error variant changes the answer to exactly one question.
 *
 * The answer key (which option is correct, which option each error leads to) is NOT in
 * this file on purpose: it lives in backend/src/key.js so participants can't look it up.
 *
 * After editing this file run `npm run build` to regenerate stimuli/scripts (the texts you
 * feed to the TTS / avatar tool) and backend/Code.gs.
 */
(function (root) {
  var SURVEY_CONTENT = {
    topics: [
      // ───────────────────────────────────────────────────────────── Topic 1
      {
        id: "topic1",
        title: "Compound interest and saving",
        paragraphs: [
          [
            "Compound interest is the reason why money saved early grows faster than most people expect. With simple interest, you only earn interest on the amount you originally put in. With compound interest, the interest you earn is added to your balance, and from then on that interest earns interest too. Over a few years the difference is small, but over decades it becomes enormous.",
          ],
          [
            "A handy shortcut to estimate how fast money grows is the ",
            {
              correct:
                "Rule of 72. Divide 72 by the yearly interest rate, and the result is roughly the number of years it takes for your money to double. At 4% per year, money doubles in about 18 years; at 9%, in about 8 years.",
              easy:
                "Rule of 36. Divide 36 by the yearly interest rate, and the result is roughly the number of years it takes for your money to double. At 4% per year, money doubles in about 9 years; at 9%, in about 4 years.",
            },
          ],
          [
            "How often interest is added, called the compounding frequency, also matters, but less than people think. An account paying 5% compounded monthly ends up earning about 5.12% per year instead of 5%: a small bonus, not a game changer. The interest rate itself and the number of years matter far more.",
          ],
          [
            "Two things eat into your growth. The first is inflation. What counts is not how many euros you have, but what those euros can buy. ",
            {
              correct:
                "To find your real return, subtract the inflation rate from the interest rate. If your account pays 4% while prices rise 2% per year, your purchasing power grows by roughly 2% per year. If the interest rate is below inflation, your money is slowly losing value, even though the number in your account goes up.",
              medium:
                "Inflation only affects your savings noticeably when it runs above about 5% per year. Below that level prices are considered stable, and your purchasing power simply grows at your interest rate: if your account pays 4% while prices rise 2% per year, what you can buy grows by roughly 4% per year. Only in periods of high inflation does your money lose value while the number in your account goes up.",
            },
          ],
          [
            "The second is fees. Investment funds often charge a yearly fee expressed as a percentage of ",
            {
              correct:
                "your total investment. This fee is subtracted from your return every year: a fund that earns 7% with a 1% annual fee leaves you with about 6%. Because fees are taken every year, they compound against you, and over 30 years a fee difference of one percentage point can cost you a quarter or more of your final amount.",
              hard:
                "the profit you make, not of your total investment. So a fund that earns 7% with a 1% annual fee takes 1% of that 7% and leaves you with about 6.93%. Because the fee only touches your gains, a fee difference of one percentage point barely changes your final amount, even over 30 years. What really matters is the return itself.",
            },
          ],
          [
            "The lesson: start early, ",
            { correct: "look at the real return after inflation", medium: "keep an eye on high inflation" },
            ", and ",
            { correct: "compare costs before you choose", hard: "pick the fund with the highest return" },
            ".",
          ],
        ],
        questions: {
          easy: {
            prompt:
              "You have €5,000 and want it to grow to €10,000 within 10 years. You would rather keep access to your money, but only if that still gets you to your goal. Which account do you choose?",
            options: {
              A: "Account A: 4% per year, compounded annually, money available any time",
              B: "Account B: 8% per year, compounded annually, money locked for 10 years",
              C: "Neither account can double the money within 10 years",
              D: "Put half in each account",
            },
          },
          medium: {
            prompt:
              "You have €10,000 you won't need for five years. Inflation is expected to stay at 3% per year. Your goal is that your savings at least keep their buying power, and you prefer easy access if that still meets the goal. What do you do?",
            options: {
              A: "Savings account at 2.5%, money available any time",
              B: "Term deposit at 3.5%, money locked for five years",
              C: "Keep it in your current account at 0%",
              D: "Nothing works: no option keeps up with inflation",
            },
          },
          hard: {
            prompt:
              "You are investing €10,000 for 30 years. Fund X: 7% average yearly return, 1.5% annual fee, compounded monthly. Fund Y: 6.5% average yearly return, 0.2% annual fee, compounded annually. Which fund do you invest in?",
            options: {
              A: "Fund X",
              B: "Fund Y",
              C: "It doesn't matter: both end up about the same",
              D: "Neither: you can't decide without knowing inflation",
            },
          },
        },
      },

      // ───────────────────────────────────────────────────────────── Topic 2
      {
        id: "topic2",
        title: "Phishing and account security",
        paragraphs: [
          [
            "Phishing is a type of online fraud in which criminals send messages that pretend to come from someone you trust, such as your bank, a delivery company or your employer. The goal is to make you click a link, enter your password, or share codes or payment details. Phishing messages often create a sense of urgency: your account will be blocked, a package is waiting, or a payment has failed.",
          ],
          [
            "The first rule is simple: ",
            {
              correct:
                "legitimate banks never ask for your PIN code, full password or security codes by e-mail, text message or phone. If a message asks for these, it is fraud, no matter how official it looks. Don't reply, and don't use the links or phone numbers in the message.",
              easy:
                "legitimate banks never ask for your PIN code or full password by e-mail or phone. They may, however, ask you to confirm your PIN by text message, but only from their official number. So if a text asks for your PIN, check the sender's number before you reply. Never use links in a message.",
            },
            " Contact the organisation through a channel you already trust, such as the number on your bank card or its official app.",
          ],
          [
            "The second skill is reading web addresses. ",
            {
              correct:
                'Look at the part between "https://" and the first single slash: that is the domain. Read it from right to left. The real owner is the name directly in front of the ending, such as ".com" or ".be". So "https://support.shop.com/help" belongs to shop.com, but "https://shop.com.account-check.net/login" belongs to account-check.net.',
              medium:
                'Look at the part right after "https://". Read it from left to right: the real owner is the first full name that appears, such as "shop.com". Everything that follows it is just a section of that owner\'s website. So "https://shop.com/help" and "https://shop.com.account-check.net/login" both belong to shop.com.',
            },
            " Criminals also use look-alike spellings, like the digit 1 instead of the letter l, or extra words joined with a hyphen.",
          ],
          [
            "Finally, protect your accounts with two-factor authentication: something you know (your password) plus something you have. Not all second factors are equally strong. Codes sent by SMS are better than nothing, but they can be stolen through SIM swapping. ",
            {
              correct:
                "Authenticator apps are safer, but a code you type in can still be typed into a fake website, and criminals can pass it on in real time. Hardware security keys and passkeys offer the strongest protection, because they check the website's real address themselves and simply refuse to work on a fake site.",
              hard:
                "Authenticator apps offer the strongest protection: their codes are generated on your own phone and change every 30 seconds, so a code that reaches criminals is useless to them. Hardware security keys and passkeys are mainly a convenience: they save you typing, but they protect about as well as an SMS code.",
            },
          ],
          [
            "If you did enter your password on a suspicious page, change it immediately through the official website, and change it everywhere else you used the same password.",
          ],
        ],
        questions: {
          easy: {
            prompt:
              'A text message arrives from the number your bank normally uses: "Unusual activity on your card. Reply with your PIN code within 1 hour to keep your card active." What do you do?',
            options: {
              A: "Reply with your PIN: the message comes from the bank's usual number",
              B: "Don't reply; call the bank on the number printed on your card",
              C: "Reply with only the first two digits of your PIN",
              D: "Tap the link in an earlier message from the bank to check your card",
            },
          },
          medium: {
            prompt:
              "You want to log in to ExampleBank, whose real website is examplebank.com. A search gives you four links. Which one do you click?",
            options: {
              A: "https://examplebank.com.secure-verify.net/login",
              B: "https://login.examplebank.com/accounts",
              C: "https://examplebank-login.com/accounts",
              D: "https://www.examp1ebank.com/login",
            },
          },
          hard: {
            prompt:
              "Criminals are targeting your company with a very convincing fake login page that passes on whatever you type in real time. IT lets you choose one second factor for your work e-mail. Which do you set up?",
            options: {
              A: "A code sent by SMS",
              B: "A code from an authenticator app",
              C: "A hardware security key or passkey",
              D: "A security question",
            },
          },
        },
      },

      // ───────────────────────────────────────────────────────────── Topic 3
      {
        id: "topic3",
        title: "Sunscreen, SPF and the UV index",
        paragraphs: [
          [
            "Ultraviolet (UV) radiation from the sun causes sunburn, skin ageing and skin cancer. How strong it is on a given day is expressed by the UV index, a scale that usually runs from 0 to 11 or more. Weather apps show it next to the temperature. ",
            {
              correct: "From a UV index of 3, sun protection is recommended",
              easy: "Below a UV index of 6 the risk is low, and from 6 onwards sun protection is recommended",
            },
            ": shade, clothing, a hat and sunscreen. From 8, the risk is very high and unprotected skin can burn in less than 20 minutes. UV is strongest around the middle of the day, and clouds are no guarantee: up to 80% of UV can pass through light cloud cover.",
          ],
          [
            "Sunscreen is labelled with an SPF, or sun protection factor. SPF measures protection against UVB, the rays that mainly cause sunburn. ",
            {
              correct:
                "The scale is not linear. SPF 15 filters out about 93% of UVB rays, SPF 30 about 97%, and SPF 50 about 98%. So a higher SPF does give more protection, but the step from 30 to 50 is much smaller than the numbers suggest.",
              medium:
                "SPF 15 filters out about 25% of UVB rays, SPF 30 about 50%, and SPF 50 almost all of them, about 98%. So moving from SPF 30 to SPF 50 roughly doubles your protection.",
            },
            ' To also protect against UVA rays, which age the skin, look for "broad spectrum" or the UVA logo.',
          ],
          [
            "In practice, how you apply sunscreen matters more than the number on the bottle. Most people use only a quarter to half of the amount used in lab tests, so they get far less protection than the label promises. An adult needs about six teaspoons for the whole body.",
          ],
          [
            "Sunscreen also wears off. Reapply at least every two hours",
            {
              correct:
                ', and always immediately after swimming, heavy sweating or drying off with a towel. A "water-resistant" label only means that the cream keeps its protection for 40 minutes in the water; "very water-resistant" means 80 minutes. Towelling rubs it off regardless of the label.',
              hard:
                '. A "water-resistant" label means the cream stays on through swimming and drying off with a towel, so with a water-resistant product the two-hour rule is all you need to follow. Without that label, reapply after every swim.',
            },
          ],
          [
            "Finally, no sunscreen blocks everything. It works best combined with shade and clothing, especially in the hours around midday.",
          ],
        ],
        questions: {
          easy: {
            prompt:
              "Your weather app shows a UV index of 4 for the afternoon, and you plan to spend three hours gardening. What do you do?",
            options: {
              A: "Nothing special: below UV index 6 the risk is low",
              B: "Use sun protection: sunscreen, a hat and some shade",
              C: "Only protect yourself if the sky is completely cloudless",
              D: "Only protect yourself once the UV index reaches 8",
            },
          },
          medium: {
            prompt:
              "You're buying sunscreen for a beach holiday. The SPF 30 version costs €8; the SPF 50 version of the same brand costs €16. You will apply it generously and reapply as needed. You want good protection without overpaying. Which do you buy?",
            options: {
              A: "SPF 50: it blocks about twice as much UVB as SPF 30",
              B: "SPF 30: SPF 50 adds only a little protection, and generous application matters more",
              C: "SPF 30, using half as much because you reapply often",
              D: "SPF 50, so you only need to reapply half as often",
            },
          },
          hard: {
            prompt:
              "The UV index is 8. At 10:30 you apply water-resistant (40 minutes) SPF 50 at home and arrive at the beach at 11:00. You swim from 11:00 to 11:45, dry off with a towel, and plan to stay until 13:00. When do you reapply for the first time?",
            options: {
              A: "At 12:30, two hours after first applying",
              B: "Right after swimming and drying off, at about 11:45",
              C: "Not at all: water-resistant SPF 50 lasts until you leave",
              D: "At 13:00, when you leave the beach",
            },
          },
        },
      },

      // ───────────────────────────────────────────────────────────── Topic 4
      {
        id: "topic4",
        title: "Insurance deductibles",
        paragraphs: [
          [
            'When you take out insurance, for your car, your home or your phone, you pay a premium: a fixed amount every month or year. In return, the insurer pays for damage covered by the policy. But almost every policy has a deductible, also called "own risk" or excess. That is the part of the damage you always pay yourself before the insurer pays anything.',
          ],
          [
            "The deductible and the premium are linked. ",
            {
              correct:
                "If you choose a higher deductible, you carry more of the risk yourself, so the insurer charges you a lower premium. A lower deductible means a higher premium.",
              easy:
                "A higher deductible counts as a more extensive policy, because the insurer has to handle larger claims, so the insurer charges you a higher premium. A lower deductible means a lower premium.",
            },
          ],
          [
            {
              correct: "How the deductible works depends on whether it applies per claim or per year.",
              medium:
                "Deductibles can be listed per claim or per year, but in practice they work the same way: the full amount applies again to every separate incident.",
            },
            " With a per-claim deductible, you pay it again for every separate incident. With a €500 deductible and €1,200 of damage, you pay €500 and the insurer pays €700. If the damage is smaller than the deductible, the insurer pays nothing. ",
            {
              correct:
                "With a yearly deductible, the amount is a total for the whole year: all the damage you pay yourself that year counts towards it, and once you've reached it, the insurer pays the rest of any further claims that year.",
              medium:
                '"Yearly" only means the deductible amount is fixed for the year and can change when your policy renews.',
            },
          ],
          [
            "Claiming small amounts is often not worth it. Many insurers give a no-claim discount, and a claim can raise your premium for several years.",
          ],
          [
            "So how do you choose? Compare what you save on premiums with the extra you'd pay when something goes wrong. For example, if ",
            { correct: "a higher deductible saves you €100 per year", easy: "one policy costs €100 per year less" },
            " and you make one claim every five years, you save €500 in premiums against a few hundred euros of extra deductible. ",
            { correct: "On paper, a high deductible often wins. ", easy: "" },
            {
              correct:
                "But there is one important rule: only choose a deductible you could pay from your savings tomorrow, without borrowing. A cheap policy is no use if you can't afford your own share when damage happens.",
              hard:
                "A useful rule of thumb: your deductible can safely be up to about twice your savings, because you usually get several weeks to pay your share and can set money aside in the meantime. Within that limit, simply pick the option that is cheapest overall.",
            },
          ],
        ],
        questions: {
          easy: {
            prompt:
              "You have €5,000 in savings and want to lower what you pay each year for your car insurance, which now has a €250 deductible. Which change do you ask your insurer for?",
            options: {
              A: "Raise the deductible to €1,000",
              B: "Lower the deductible to €0",
              C: "Nothing: the deductible has no effect on the premium",
              D: "Make more small claims to use the policy",
            },
          },
          medium: {
            prompt:
              "You're choosing home insurance. Both policies cost the same premium. Policy P has a €300 deductible per claim; Policy Q has a €300 deductible per year. You usually have a few small damages a year, such as €200 in March and €250 in October. Which policy do you take?",
            options: {
              A: "Policy P",
              B: "Policy Q",
              C: "It doesn't matter: both work the same way",
              D: "Neither: skip insurance for small damages",
            },
          },
          hard: {
            prompt:
              "You're choosing car insurance. Option 1: deductible €250, premium €600 per year. Option 2: deductible €1,000, premium €420 per year. You expect one claim of around €3,000 in the next five years, and you have €600 in savings. Which option do you choose?",
            options: {
              A: "Option 1",
              B: "Option 2",
              C: "It doesn't matter: both cost the same over five years",
              D: "Neither: skip insurance and keep the premiums",
            },
          },
        },
      },

      // ───────────────────────────────────────────────────────────── Topic 5
      {
        id: "topic5",
        title: "Food safety and the temperature danger zone",
        paragraphs: [
          [
            "Most food poisoning at home is caused not by food that looks or smells bad, but by bacteria you can't see. Bacteria multiply fastest at temperatures between ",
            { correct: "5°C", easy: "10°C" },
            " and 60°C, often called the danger zone. In that range, their number can double every 20 minutes. Cold slows them down, and heat above about 70°C kills most of them.",
          ],
          [
            "That's why your fridge should be set to ",
            { correct: "4°C or lower", easy: "about 8°C; colder than that only wastes energy" },
            ". Many fridges are warmer than people think, especially near the door, so a cheap fridge thermometer is useful. A freezer should be at −18°C. Freezing stops bacteria from growing but doesn't kill them; once food thaws, they become active again. So thaw food in the fridge, not on the kitchen counter.",
          ],
          [
            "Perishable food, such as meat, fish, dairy, cooked rice, salads and leftovers, should not stay at room temperature for more than two hours in total. ",
            {
              correct:
                "On hot days, when the air temperature is above 30°C, for example at a summer picnic or barbecue, that limit drops to one hour.",
              medium:
                "That limit is the same whatever the weather, even at a summer picnic or barbecue, because the two hours already allow a safety margin for warm days.",
            },
            " After that, ",
            { correct: "throw the food away", hard: "throw away food you plan to eat cold" },
            ", even if it still looks and smells fine.",
          ],
          [
            "Leftovers should go into the fridge as soon as they've stopped steaming, within those two hours. You don't need to wait until they are completely cold. Divide large amounts into shallow containers so they cool quickly.",
          ],
          [
            "When you reheat leftovers, make sure they are steaming hot all the way through, about 75°C in the centre, and reheat them only once. ",
            {
              correct:
                "But reheating has its limits. Some bacteria, such as those found on rice, produce toxins while they grow, and these toxins are not destroyed by heat. Food that has been left out too long can therefore make you ill even after thorough reheating. Reheating kills bacteria; it does not undo what they have already produced.",
              hard:
                "Thorough reheating is a powerful safety step. At 75°C, both the bacteria and any toxins they produced while the food stood out are destroyed. So food that has been left out too long, such as cooked rice, can be made safe again as long as you reheat it until it is steaming hot all the way through.",
            },
          ],
        ],
        questions: {
          easy: {
            prompt: "You buy a cheap fridge thermometer, and it shows that your fridge is at 7°C. What do you do?",
            options: {
              A: "Leave it: anything up to about 8°C is fine",
              B: "Turn the fridge colder until it reads 4°C or lower",
              C: "Turn it a little warmer to save energy",
              D: "Leave it, and only worry if food starts to smell",
            },
          },
          medium: {
            prompt:
              "At a summer barbecue it is 32°C. A bowl of chicken salad has been standing outside for 90 minutes, and some guests may want more later. What do you do with it?",
            options: {
              A: "Put it in the cool box now and serve it later: it has been out for less than two hours",
              B: "Throw it away: in this heat the limit is one hour",
              C: "Leave it out and serve it as long as it still smells fine",
              D: "Leave it out until the two hours are up, then put it in the cool box",
            },
          },
          hard: {
            prompt:
              "You cooked a large pot of rice and forgot it on the stove; it has been at room temperature for about four hours. You'd like to eat it tomorrow, reheated until steaming hot (75°C). What do you do?",
            options: {
              A: "Put it in the fridge now and reheat it to 75°C tomorrow: the heat makes it safe",
              B: "Throw it away: toxins formed while it stood out are not destroyed by heat",
              C: "Keep it, but reheat it twice tomorrow to be sure",
              D: "Put it in the freezer now so the bacteria die",
            },
          },
        },
      },

      // ───────────────────────────────────────────────────────────── Topic 6
      {
        id: "topic6",
        title: "Two blocks on slides of equal height",
        paragraphs: [
          [
            "Two identical blocks are released from rest at the tops of two low-friction slides. The slides have the same vertical height but different shapes: one is steeper, the other gentler. After leaving the slides horizontally, both blocks fall to the floor as projectiles.",
          ],
          [
            "The central idea is that the height drop determines the speed at the bottom, while the shape of the slide determines how long the block spends on the slide.",
          ],
          [
            {
              correct:
                "Because the height drop is the same and friction is negligible, both blocks leave the slides with the same horizontal speed; since they also have the same vertical drop to the floor, they have the same flight time and therefore land the same distance from their tables.",
              easy: "The steeper slide gives Block 1 a greater final speed, so Block 1 lands farther from its table.",
            },
          ],
          // NOTE (check before launch): this paragraph is not highlighted in the source document, so it is
          // identical in all 4 variants. It states that the steeper block hits first and that the steeper
          // slide is shorter, which directly contradicts the medium and hard errors below.
          [
            "The steeper slide, however, is shorter and gives a larger acceleration component along the incline. The block on the steeper slide therefore reaches the bottom in less time. It begins its projectile motion earlier. Since the projectile flight time is the same for both blocks, the block that starts falling earlier also hits the floor earlier. The steeper block hits first—not because it is moving faster at the bottom, but because it gets to the bottom sooner.",
          ],
          [
            {
              correct:
                "The block on the steeper slide reaches the bottom in less time and therefore begins its projectile motion earlier; since the projectile flight times are equal, it hits the floor first.",
              medium: "Both blocks hit the floor at the same time because they leave the table from the same height.",
            },
          ],
          [
            {
              correct:
                "The steeper slide is shorter and produces a larger acceleration component along the incline, so the block spends less time on the slide.",
              hard: "The steeper slide has the same path length as the gentler slide but produces a larger acceleration, which is why the block spends less time on it.",
            },
          ],
        ],
        questions: {
          easy: {
            prompt:
              "Two identical blocks are released from rest at the same time from low-friction slides of equal height. Slide 1 is steeper than Slide 2. Which statement about where the blocks land is correct?",
            options: {
              A: "Block 1 lands farther because its final speed is greater.",
              B: "Block 2 lands farther because it spends more time on the slide.",
              C: "Both blocks land the same distance because their horizontal launch speeds and flight times are the same.",
              D: "It cannot be determined without knowing the masses of the blocks.",
            },
          },
          medium: {
            prompt: "The two blocks are released from rest at the same time. Which block, if either, hits the floor first?",
            options: {
              A: "Both blocks hit the floor at the same time because they leave the table from the same height.",
              B: "Block 1 hits first because it spends less time on the slide and begins its projectile motion earlier.",
              C: "Block 2 hits first because its longer slide gives it more time to accelerate.",
              D: "Neither hits first; they hit simultaneously because their final speeds are equal.",
            },
          },
          hard: {
            prompt: "Which statement best explains why the block on the steeper slide reaches the bottom of its slide sooner?",
            options: {
              A: "The steeper slide gives the block a larger final speed.",
              B: "The steeper slide is shorter and its slope gives a larger acceleration component along the slide.",
              C: "The steeper slide has the same path length as the gentler slide but gives a larger acceleration component along the slide.",
              D: "The block on the steeper slide has greater mass.",
            },
          },
        },
      },
    ],
  };

  var VARIANT_KEY = { correct: null, error_easy: "easy", error_medium: "medium", error_hard: "hard" };

  // The explanation of `topic` in `variant` ("correct" | "error_easy" | "error_medium" | "error_hard"),
  // as an array of paragraph strings.
  function explanationParagraphs(topic, variant) {
    var key = VARIANT_KEY[variant];
    if (key === undefined) throw new Error("Unknown variant " + variant);
    return topic.paragraphs.map(function (para) {
      return para
        .map(function (part) {
          if (typeof part === "string") return part;
          return key && Object.prototype.hasOwnProperty.call(part, key) ? part[key] : part.correct;
        })
        .join("")
        .replace(/\s{2,}/g, " ")
        .trim();
    }).filter(function (p) { return p.length > 0; });
  }

  // For the debrief: the parts an error variant changed, as [{ wrong, correct }].
  function errorChanges(topic, variant) {
    var key = VARIANT_KEY[variant];
    var out = [];
    if (!key) return out;
    topic.paragraphs.forEach(function (para) {
      para.forEach(function (part) {
        if (typeof part !== "string" && Object.prototype.hasOwnProperty.call(part, key)) {
          out.push({ wrong: part[key].replace(/^[\s.,;:]+/, "").trim(), correct: part.correct.replace(/^[\s.,;:]+/, "").trim() });
        }
      });
    });
    return out;
  }

  function topicById(id) {
    for (var i = 0; i < SURVEY_CONTENT.topics.length; i++) if (SURVEY_CONTENT.topics[i].id === id) return SURVEY_CONTENT.topics[i];
    return null;
  }

  SURVEY_CONTENT.explanationParagraphs = explanationParagraphs;
  SURVEY_CONTENT.errorChanges = errorChanges;
  SURVEY_CONTENT.topicById = topicById;

  if (typeof module !== "undefined" && module.exports) module.exports = SURVEY_CONTENT;
  else root.SURVEY_CONTENT = SURVEY_CONTENT;
})(typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : this);
