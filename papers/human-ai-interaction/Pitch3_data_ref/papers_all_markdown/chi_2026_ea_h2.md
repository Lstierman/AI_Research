# Effects of Generative AI Errors on User Reliance Across Task Difficulty


Jacy Reese Anthis [*]

Stanford University
Stanford, California, USA
University of Chicago
Chicago, Illinois, USA


Hannah Cha [*]

Stanford University
Stanford, California, USA


Solon Barocas
Microsoft Research
New York, New York, USA


Alexandra Chouldechova
Microsoft Research
New York, New York, USA


# Abstract


The capabilities of artificial intelligence (AI) lie along a jagged frontier, where AI systems surprisingly fail on tasks that humans find
easy and succeed on tasks that humans find hard. To investigate
user reactions to this phenomenon, we developed an incentivecompatible experimental methodology based on diagram generation tasks, in which we induce errors in generative AI output and
test effects on user reliance. We demonstrate the interface in a preregistered 3x2 experiment ( N = 577) with error rates of 10%, 30%,
or 50% on easier or harder diagram generation tasks. We confirmed
that observing more errors reduces use, but we unexpectedly found
that easy-task errors did not significantly reduce use more than
hard-task errors, suggesting that people are not averse to jaggedness in this experimental setting. We encourage future work that
varies task difficulty at the same time as other features of AI errors,
such as whether the jagged error patterns are easily learned.


# CCS Concepts


- Human-centered computing → HCI theory, concepts and
models ; Empirical studies in HCI .


# Keywords


Reliance, trust, AI errors, algorithm aversion, human-AI interaction,
humanlikeness


# ACM Reference Format:
Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova,
and Jake Hofman. 2026. Effects of Generative AI Errors on User Reliance
Across Task Difficulty. In Extended Abstracts of the 2026 CHI Conference
on Human Factors in Computing Systems (CHI EA '26), April 13-17, 2026,
Barcelona, Spain. ACM, New York, NY, USA, 12 pages. https://doi.org/10.
1145/3772363.3798463


*Work done at Microsoft Research


This work is licensed under a Creative Commons Attribution 4.0 International License.
CHI EA '26, Barcelona, Spain
© 2026 Copyright held by the owner/author(s).
ACM ISBN 979-8-4007-2281-3/2026/04
https://doi.org/10.1145/3772363.3798463


Jake Hofman
Microsoft Research
New York, New York, USA


# 1 Introduction


The general-purpose capabilities of artificial intelligence (AI), particularly generative AI tools such as large language models (LLMs),
create significant cognitive challenges for users [32-34, 45]. Effective use requires forming and updating accurate expectations of
the tool's effectiveness across diverse tasks. Accurate calibration is
made challenging by the complexity and opacity of the tool,
diversity of use cases, and highly personalized experiences
that emerge over long periods of use. This is challenging for
users, developers who aim to build useful tools, and researchers
aiming to understand tool development and use.
A crucial challenge humans face is accounting for the "jagged
frontier" [7, 11, 22, 49], the fact that modern AI systems are difficult
to predict because they can fail on tasks that humans find easy
despite superhuman performance on tasks that humans find hard.
For example, AI systems can fail to count letters in common words
or answer riddles correctly when rephrased [21, 42, 49], but they
can also summarize vast amounts of text and speak dozens
of languages. Even if a human observes an example of AI
performance, they are often not able to effectively update their
predictions of AI performance on a different task.
To understand human-AI interaction in light of such challenges,
we developed an incentive-compatible experimental methodology
to study human reactions to generative AI errors that balances realism, experimental control, and the ability to quantify user reliance.
Our approach involves generating diagrams of the type used in
project planning and slideshow presentations. In Phase 1,
participants learn about the AI tool's performance by observing a
series of tasks in which they are shown a prompt given to the tool
and the resulting diagram, with the pattern of successes and errors
determined by random assignment to treatment groups. In Phase
2, participants apply what they have learned about the AI tool in
a series of willingness-to-pay (WTP) tasks as a measure of reliance: in each task, they can pay to use the AI tool to attempt the
task, and they receive a monetary reward if the AI tool successfully
generates the intended diagram. This way, we can observe effects
of error patterns in Phase 1 on user reliance in Phase 2.
Using this methodology, we ran a preregistered 3x2 experiment
( N = 577) in which participants were randomly assigned to one of
six Phase 1 treatments: observing an error rate of 10%, 30%, or 50%,
with those errors being on either the hard tasks or the easy tasks.
In this context, "easy" and "hard" refer to the complexity of the


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman


diagram that must be generated, where a human would find it easier
to quickly create a simpler diagram. As expected, a larger number
of errors led to lower WTP. However, contrary to expectations, we
did not find a consistent effect of task difficulty. These findings raise
important questions about how humans will under- or over-rely on
AI tools and how human-AI collaboration will evolve as AI tools
become more powerful. We propose follow-up research that further
investigates human reactions by varying not just task difficulty
but also how easy the error pattern is for humans to learn. People
may be comfortable with non-humanlike AI systems as long as
the systems are predictable, or they may prefer humanlike systems
even if the systems are not more predictable.


# 2 Background


People stop using relatively simple algorithmic tools after seeing
even minor mistakes, penalizing the tool more harshly than they
would a human advisor, a pattern termed algorithm aversion,
yet others have identified cases of automation bias and algorithm appreciation [5, 44] in which people favor algorithms over
human judgment. These patterns can lead to underreliance and
overreliance, where humans fail to correctly identify errors. Human failures to respond to errors appropriately are a contributing
factor in the failure of human-AI teams to attain "strong synergy,"
an ideal interaction in which teams outperform humans and AI
systems that complete tasks individually.
AI reliance depends on various factors, such as whether tasks are
perceived as objective or subjective, whether humans merely
provide input to the algorithm versus being able to override the
algorithmic outcome, and whether the algorithm is described as
a novice or an expert. Appropriate reliance can be facilitated
through system design, including explanations of the algorithmic
decision-making process [28, 39] and encouragement for users to
reflect thoughtfully on whether to rely on the algorithm.
However, much of this evidence is based on interaction with
conventional tools. For example, Bansal et al. tested advice that
consisted of a binary choice (e.g., whether a product was defective),
and Dhuliawala et al. mapped trust recovery following errors in
which the system made a simple multiple-choice recommendation
on a math or trivia problem. Some recent work has moved into generative settings, such as highlighting parts of text or code where the
system is particularly uncertain [31, 38], but empirically grounded
accounts of what drives trust and reliance in generative workflows
remain unsettled. Modern workflows often take open-ended inputs
in natural language; involve repeated interaction with agentic
systems that affect the user's own agency [32, 41]; and involve
the manipulation of large-scale artifacts, such as documents and
codebases. It is unclear to what extent work on conventional
algorithms extends to modern human-AI interaction.
An AI system with a jagged frontier of capabilities, performing
poorly on tasks humans find easy and well on tasks humans find
hard, is distinctly non-humanlike. Humanlikeness is known to be
consequential. In empirical studies, human-computer interaction
researchers have found significant effects of the humanlikeness of
robots, synthetic voices [16, 18], and visual avatars [13, 46] on
human expectations and behavior. There are reasons why users


could rationally prefer humanlike or non-humanlike tools. Humanlikeness could be beneficial by making the system easier to predict
and use: allowing the user to quickly leverage interaction patterns
they know from human-human interaction. On the other hand, humanlikeness could reduce efficiency by reducing complementarity:
for example, if a human and a humanlike AI have the same factual
knowledge and recall ability, then the human-AI team may not do
any better on a knowledge-based test than either the human or AI
would alone. Rational-actor models may also fail to predict user
behavior, particularly because generative AI introduces substantial
metacognitive demands that make reasoning difficult.
The unique features of generative AI could limit the applicability of classical human-computer interaction theory and studies of
conventional algorithmic tools. Classically, computer users must
bridge two major gulfs: the gulf of execution, in which they get the
computer to execute a task, and the gulf of evaluation, in which
they work to understand what the computer did and ensure its
correctness. Recently, Subramonyam et al. proposed a
fundamental extension for generative AI by adding the gulf of envisioning, in which the user must formulate an input (i.e., prompt)
that accounts for the tool's flexibility, ambiguity in the user's intent,
and indeterminacy of the output. It is often challenging for users
to correctly steer a generative AI model into correctly producing
a particular output, such as writing a text prompt for a diffusion
model to reproduce an image shown to the user, and users
must navigate significant uncertainty as to whether the user or tool
is more at fault when an error is made [14, 29]. Our study aims to
extend the study of errors in conventional algorithmic decision aids
to these challenges.


# 3 Hypotheses


We preregistered the following hypotheses, in which μ denotes
the mean bid of participants, such as μ 1 for participants who saw
exactly one error and μ easy for participants who saw errors on easy
tasks. First, we expected that an increase in the number of errors
would reduce AI use.
Second, we hypothesized that errors on easier tasks would reduce
AI use more than errors on harder tasks because easy-task errors
are more surprising and increase user uncertainty about the tool's
performance. Prior work by Papenmeier et al. found that people
viewed a predictive model as less accurate when it made errors
on tasks described as "easy" rather than "difficult" or "impossible,"
and Raux and Dreyfuss similarly found that people have lower
accuracy estimates when an error is made on an "easy" rather than
a "hard" task.
Third, we considered an interaction effect. Because we expected
the presence of multiple errors to be more salient to participants
than a single error, we expected this to increase the effect that task
difficulty would have on AI use.
Finally, we posed two hypotheses to probe the relative impact of
the number of errors and the task difficulty on AI use. These relate
to the intuition that making easy-task errors rather than hard-task
errors is "at least as bad" as making two additional errors, either
from one to three or from three to five. A hypothesis test for this
requires a margin, which we set at $0.05 based on pilot data and


a practical sense of what effect size would be meaningful in this
context.


# 4 Methodology


We built an interface for a diagram generation task, which we designed to be understandable to participants, expressive for a variety
of practical contexts, amenable to procedurally inducing errors,
completable with nontrivial effort by a human or current LLM,
and based on natural language input. We leveraged this interface
for a preregistered experiment (https://aspredicted.org/p7ge92.pdf)
and have shared the data and reproducible analysis code online
(https://github.com/jacyanthis/ai-errors-chi-ea-2026). The study
received institutional ethics approval prior to data collection, and
participants gave their informed consent and were debriefed after
completing the study.
We developed the study interface as a React app. Participants
were introduced to the task and completed the demonstration phase
(Phase 1), in which they observed a sketch shown to a hypothetical
person and a text prompt written by that hypothetical person. To
facilitate engagement, participants were asked to predict whether
the AI tool would successfully generate the diagram, earning $0.10
if they guessed correctly (Figure 1, left). Afterward, they viewed
a summary of the Phase 1 results (e.g., the percentage of errors
made) and then were introduced to the WTP bidding system and
completed the measurement phase (Figure 1, right), as described
in the following section. Participants were not shown the result of
their text prompts until the end of the study in order to prevent
learning effects.
We recruited a sample of U.S. adults from Prolific, using the platform's representative quota-based sampling across age, gender, and
race. We conducted an attention check, which 93.5% of participants
passed, resulting in a final sample of 577. Pilot data suggested that
this sample size would provide more than 80% power for detecting
a 0.3 standardized effect size (approximately $0.05) for each of the
hypotheses. Throughout the study, we monitored time spent, clicks,
and other interaction data, and we blocked pasting of text into the
study interface to mitigate the usage of automated tools, but we
found no participants for whom data exclusion seemed warranted.
Participants were randomly assigned to one of six conditions: out
of the ten task completions in the demonstration phase, participants
saw either one, three, or five errors, and these errors were either
in the tasks to generate the simplest diagrams (i.e., easy tasks) or
the most complex diagrams (i.e., hard tasks). Odd-numbered tasks
were to generate linear diagrams of three, four, five, six, or seven
nodes, and even-numbered tasks were to generate diagrams with
the same number of nodes but with one non-linearity (e.g., a fork
in which Node A is connected to both Node B and Node C). Task
ordering was randomized between first-to-tenth-task (i.e., easiest
to hardest, approximately) and tenth-to-first-task (i.e., hardest to
easiest, approximately); other orderings were avoided to make it
easier for participants to detect patterns.


# 4.1 Measures


Willingness to pay. Participants entered a bid to indicate their WTP
for the opportunity to use an AI tool and, if successful in the task,
receive a $0.50 reward, an incentive-compatible procedure known


CHI EA '26, April 13-17, 2026, Barcelona, Spain


as the Becker-DeGroot-Marschak method. Participants paid
this money out of a fixed endowment that was equal across all
participants, regardless of Phase 1 outcome. For each Phase 2 task,
a random price is drawn, and the participant pays the price and
completes the task if their bid is at least as high as the price. For
example, if a user is willing to pay $0.25, that means they would pay
any price up to $0.25, which implies they believe the probability
of receiving the $0.50 is sufficiently high to be worth paying $0.25
upfront, including the possibility that they lose money without any
reward. If a user is only willing to pay $0.00, then they have no
chance of using the AI tool. The maximum bid was fixed below the
reward amount because a bid of the reward amount would have no
potential gain over a bid of one cent fewer. Participants undertook a
brief tutorial to introduce them to this method, and no participants
described being confused by the procedure in the debrief.
Expected difficulty. For each measurement phase task, we first
asked participants "How difficult does this task seem?" based on
the sketch with answer choices of: "It would take me one attempt,"
"It would take me two attempts," "It would take me a few (3-5)
attempts," "It would take me many (6+) attempts," "I think the AI
tool can do this, but I don't think I could figure out the prompt,"
and, "I think the AI tool cannot do this with any prompt."
Performance expectancy and effort expectancy. After providing
informed consent and before being introduced to the task, participants responded to two brief indices based on Venkatesh et al.
: four items based on their expected performance with AI (e.g.,
"Using AI increases my productivity") and three items based on the
expected effort they believe it takes them to use AI (e.g., "I find AI
easy to use"). Participants responded to the same indices after the
measurement phase, providing a supplementary pre-post survey
measure.
Personal characteristics. After the post-task survey measures, participants were asked four questions regarding AI use (e.g., "How
often do you interact with AI?"), followed by a variety of demographic questions (political leaning, age, gender, race/ethnicity,
education level, household income, religion).


# 5 Results


Hypotheses were tested with a mixed-effects linear model that
predicted WTP based on number of errors, difficulty of tasks on
which errors were made, randomization factors, pre-task survey
measures, and demographics.
H1: Errors reduce AI use. The results supported H1 with a mean
bid of $0.27 for 1-error participants, $0.24 for 3-error participants,
and $0.21 for 5-error participants. This resulted in μ 1 - μ 3 > 0 with
a difference of $0.03 (SE = $0.01, t = 2.36, p = 0.009) and μ 3 - μ 5 > 0
with a difference of $0.02 (SE = $0.01, t = 1.92, p = 0.028).
H2: Easy-task errors reduce AI use more than hard-task errors.
The results did not support H2. We found a mean bid of $0.23 for
participants exposed to easy-task errors and $0.25 for participants
exposed to hard-task errors (diff = $0.01, SE = $0.01, t = 0.990, p =
0.161). Exploratory follow-up analyses (Section A.4) suggest there
may be a subgroup-specific effect of task difficulty on participants
who rarely or never consume AI-related content. Notably, in the


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman


H1 : An AI tool making more errors reduces AI use: ( μ 3 < μ 1) ∧( μ 5 < μ 3)


H2 : Easy-task AI errors reduce AI use more than hard-task errors: μ easy < μ hard


H3 : Easy-task AI errors reduce AI use more than hard-task errors even more when there are multiple errors:
μ (3 , 5) , hard - μ (3 , 5) , easy > μ 1 , hard - μ 1 , easy


H4 : Easy-task AI errors reduce AI use at least as much as two additional hard-task AI errors:
(a) μ 3 , easy - μ 5 , hard < $0 . 05; (b) μ 1 , easy - μ 3 , hard < $0 . 05


Figure 1: Screenshots of the study interface. In Phase 1 (left), participants predict whether the AI tool will successfully generate
the diagram. In Phase 2 (right), participants report their WTP for an opportunity to use the AI tool for a monetary reward.


H3: Easy-task errors reduce AI use more than hard-task errors even
more when there are multiple errors. The results did not support
H3. Between 1-error/easy-task participants and 1-error/hard-task
participants, we found a difference of $0.02, and between multipleerror/hard-task participants and multiple-error/easy-task participants, we found a difference of $0.01. The difference-in-differences
was -$0.01 (SE = $0.03, t = -0.62, p = 0.733).
H4: Easy-task AI errors reduce AI use at least as much as two
additional hard-task AI errors. The results supported H4a with a
difference of bids between 3-error/easy-task and 5-error/hard-task
participants that was significantly less than the preregistered margin of $0.05, at -$0.02 (SE = $0.02, t = -2.14, p = 0.016). The results
did not, however, support H4b. Between bids of 1-error/easy-task
and 3-error/hard-task participants, we found a difference that was
not significantly less than the preregistered margin of $0.05, at $0.02
(SE = $0.02, t = -1.64, p = 0.050).


# 6 Discussion


Figure 2: Bids across the six experimental conditions. Means
are model-adjusted, and error bars show standard errors.


analogous hypothesis test for a different outcome, the pre-post difference in performance expectancy, there is a significant difference
(diff = 0.09, SE = 0.05, t = 1.803, p = 0.036).


Our findings confirmed that observing more errors reduces AI
use. However, contrary to our expectations, whether the AI tool
made errors on easier or harder tasks did not significantly affect
user reliance, even though we found evidence of an effect on prepost performance expectancy and evidence of a subgroup-specific
effect for participants with low AI-content consumption. In this
experiment, we set out to manipulate the task difficulty on which
AI errors are made by creating conditions that either aligned with


intuitive error patterns (i.e., hard-task errors) or ran counter to those
prior beliefs (i.e., easy-task errors). We hypothesized that easy-task
errors would reduce use more than hard-task errors by reducing the
perceived predictability of the tool, based on the assumption that
participants would have less confidence in their ability to accurately
predict the AI tool's performance when its performance did not
track the ordering of task difficulty set by human performance;
therefore, risk aversion would lead participants to bid less to use
the tool with easy-task errors than with hard-task errors.
To explain our results and motivate future work, we propose that
human reactions to the "jagged frontier" depend on two distinct
factors: alignment of the frontier with the user's prior expectations
and clarity with which the user perceives the frontier, meaning the
certainty they have in their estimates of the tool's capabilities. In
this framework, reliance is affected by the expected performance
of the tool and the clarity of the frontier, and alignment with prior
expectations affects how easily clarity is achieved: When a tool's
behavior aligns with prior expectations, users can generalize from
fewer observations. Clarity can also be achieved without alignment
through sufficient experience or through tool behavior that is highly
salient (i.e., easy to notice and understand).
Neither alignment nor clarity requires humanlikeness. For example, calculators are very unlike humans (e.g., superhuman at
arithmetic but incapable of language or movement), yet their behavior is well-aligned with our expectations, and users rely on them
without hesitation. Prior work suggests interacting with AI systems
through social interaction, such as conversational interfaces and
natural language, increases the likelihood that users perceive these
systems as humanlike. Thus, in the context of conversational
AI systems, humanlikeness can be viewed as the alignment between
the perceived frontier of tool capabilities and the frontier of human
performance on the same task. In our experiment, easy-task errors were less humanlike, which can affect user reliance alongside
alignment and clarity.
Easy-task and hard-task errors were similar in salience-both
being results of particular task difficulty-and therefore, we expect,
similar in the clarity of the jagged frontier. The differences in alignment with expectations and in humanlikeness did not result in
a significant experimental difference between the task difficulty
conditions. Our exploratory analyses found that the effect of task
difficulty was concentrated among participants who rarely consume
AI-related content (Section A.4), suggesting that misalignment or
non-humanlikeness still shape perceptions of people with weaker
prior expectations of AI performance. The null result could also be
explained in part by the WTP bidding methodology, given that task
difficulty did significantly affect pre-post performance expectancy.
In other words, alignment and humanlikeness may shape beliefs
about a tool even when it does not translate into differences in
willingness to pay.


Future Work. To disentangle the effects of different features of
the jagged frontier, we propose follow-up work that varies the
saliency of error patterns. For example, errors could be made hard
to detect by being associated with less salient features of the input, such as the presence of unusual characters in diagram labels,
or even by being randomly distributed. An experimental cross of
saliency conditions and the task difficulty of the study described


CHI EA '26, April 13-17, 2026, Barcelona, Spain


above would help identify whether reliance is affected by alignment,
clarity, or other features. Our expectation is that low saliency-and
the resulting lack of clarity-would reduce reliance more than the
misaligned error pattern. Some participants could also receive explicit information about the tool's error patterns to further increase
clarity. This work could also include additional outcome measures,
especially those that relate specifically to alignment or clarity.
In addition to this follow-up study, we see several avenues for
future investigation to better understand reliance and trust in light
of the unique metacognitive challenges of generative AI. These
avenues include studying how error patterns transfer across task
domains (e.g., diagram generation, writing, mathematics, coding);
the interaction between error patterns and willingness to interactively experiment and learn with experience; and teasing out the
effects on perceptions of producibility-whether a tool can complete
a task-and steerability-whether the user can efficiently prompt
the tool to succeed. Our experiment raises more questions
than it answers, but it provides an entry point to understanding
the different forms of jaggedness that shape human reactions.


# Acknowledgments


We are grateful for input and feedback from Microsoft Research colleagues, including those in Fairness, Accountability, Transparency,
and Ethics (FATE) and Computational Social Science (CSS).


# References

 Gagan Bansal, Besmira Nushi, Ece Kamar, Walter S. Lasecki, Daniel S. Weld, and
Eric Horvitz. 2019. Beyond Accuracy: The Role of Mental Models in Human-AI
Team Performance. Proceedings of the AAAI Conference on Human Computation
and Crowdsourcing 7 (Oct. 2019), 2-11. doi:10.1609/hcomp.v7i1.5285
 Gagan Bansal, Besmira Nushi, Ece Kamar, Daniel S. Weld, Walter S. Lasecki, and
Eric Horvitz. 2019. Updates in Human-AI Teams: Understanding and Addressing
the Performance/Compatibility Tradeoff. Proceedings of the AAAI Conference
on Artificial Intelligence 33, 01 (July 2019), 2429-2437. doi:10.1609/aaai.v33i01.
33012429
 Gordon M. Becker, Morris H. Degroot, and Jacob Marschak. 1964.
Measuring utility by a single-response sequential method. Behavioral Science 9, 3 (1964), 226-232. doi:10.1002/bs.3830090304 _eprint:
https://onlinelibrary.wiley.com/doi/pdf/10.1002/bs.3830090304.
 Zana Bucinca, Maja Barbara Malaya, and Krzysztof Z. Gajos. 2021. To Trust
or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in
AI-assisted Decision-making. Proc. ACM Hum.-Comput. Interact. 5, CSCW1 (April
2021), 188:1-188:21. doi:10.1145/3449287
 Noah Castelo, Maarten W. Bos, and Donald R. Lehmann. 2019. Task-Dependent
Algorithm Aversion. Journal of Marketing Research 56, 5 (Oct. 2019), 809-825.
doi:10.1177/0022243719851788
 Lingwei Cheng and Alexandra Chouldechova. 2023. Overcoming Algorithm
Aversion: A Comparison between Process and Outcome Control. In Proceedings
of the 2023 CHI Conference on Human Factors in Computing Systems (CHI '23) .
Association for Computing Machinery, New York, NY, USA, 1-27. doi:10.1145/
3544548.3581253
 Fabrizio Dell'Acqua, Edward McFowland III, Ethan R. Mollick, Hila Lifshitz-Assaf,
Katherine Kellogg, Saran Rajendran, Lisa Krayer, Francois Candelon, and Karim R.
Lakhani. 2023. Navigating the Jagged Technological Frontier: Field Experimental
Evidence of the Effects of AI on Knowledge Worker Productivity and Quality.
doi:10.2139/ssrn.4573321
 Shehzaad Dhuliawala, Vilem Zouhar, Mennatallah El-Assady, and Mrinmaya
Sachan. 2023. A Diachronic Perspective on User Trust in AI under Uncertainty.
In Proceedings of the 2023 Conference on Empirical Methods in Natural Language
Processing . Association for Computational Linguistics, Singapore, 5567-5580.
doi:10.18653/v1/2023.emnlp-main.339
 Berkeley J. Dietvorst, Joseph P. Simmons, and Cade Massey. 2015. Algorithm
aversion: People erroneously avoid algorithms after seeing them err. Journal of
Experimental Psychology: General 144, 1 (2015), 114-126. doi:10.1037/xge0000033
 K. J. Kevin Feng, Kevin Pu, Matt Latzke, Tal August, Pao Siangliulue, Jonathan
Bragg, Daniel S. Weld, Amy X. Zhang, and Joseph Chee Chang. 2025. Cocoa:
Co-Planning and Co-Execution with AI Agents. doi:10.48550/arXiv.2412.10999
arXiv:2412.10999 [cs].


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman

 Joshua S. Gans. 2026. A Model of Artificial Jagged Intelligence. doi:10.3386/
w34712
 Kate Goddard, Abdul Roudsari, and Jeremy C Wyatt. 2012. Automation bias: a
systematic review of frequency, effect mediators, and mitigators. Journal of the
American Medical Informatics Association 19, 1 (Jan. 2012), 121-127. doi:10.1136/
amiajnl-2011-000089
 Robert D. Green, Karl F. MacDorman, Chin-Chang Ho, and Sandosh Vasudevan.
2008. Sensitivity to the proportions of faces that vary in human likeness. Computers in Human Behavior 24, 5 (Sept. 2008), 2456-2474. doi:10.1016/j.chb.2008.02.019
 Eaman Jahani, Benjamin S. Manning, Joe Zhang, Hong-Yi TuYe, Mohammed
Alsobay, Christos Nicolaides, Siddharth Suri, and David Holtz. 2026. Prompt
Adaptation as a Dynamic Complement in Generative AI Systems. doi:10.48550/
arXiv.2407.14333 arXiv:2407.14333 [cs].
 Pranav Khadpe, Ranjay Krishna, Li Fei-Fei, Jeffrey T. Hancock, and Michael S.
Bernstein. 2020. Conceptual Metaphors Impact Perceptions of Human-AI Collaboration. Proceedings of the ACM on Human-Computer Interaction 4, CSCW2 (Oct.
2020), 1-26. doi:10.1145/3415234
 Juran Kim, Seungmook Kang, and Joonheui Bae. 2022. Human likeness and
attachment effect on the perceived interactivity of AI speakers. Journal of Business
Research 144 (May 2022), 797-804. doi:10.1016/j.jbusres.2022.02.047
 Stefanie Helene Klein. 2025. The effects of human-like social cues on social
responses towards text-based conversational agents-a meta-analysis. Humanities
and Social Sciences Communications 12, 1 (Aug. 2025), 1322. doi:10.1057/s41599025-05618-w
 Katharina Kuhne, Martin H. Fischer, and Yuefang Zhou. 2020. The Human Takes
It All: Humanlike Synthesized Voices Are Perceived as Less Eerie and More
Likable. Evidence From a Subjective Ratings Study. Frontiers in Neurorobotics 14
(Dec. 2020). doi:10.3389/fnbot.2020.593732
 Lucidchart. [n. d.]. Diagramming Powered By Intelligence. https://www.
lucidchart.com/
 Aikaterina Manoli, Janet V. T. Pauketat, Ali Ladak, Hayoun Noh, Angel HsingChi Hwang, and Jacy Reese Anthis. 2025. "She's Like a Person but Better":
Characterizing Companion-Assistant Dynamics in Human-AI Relationships.
doi:10.48550/arXiv.2510.15905 arXiv:2510.15905 [cs].
 R. Thomas McCoy, Shunyu Yao, Dan Friedman, Mathew D. Hardy, and Thomas L.
Griffiths. 2024. Embers of autoregression show how large language models are
shaped by the problem they are trained to solve. Proceedings of the National
Academy of Sciences 121, 41 (Oct. 2024), e2322420121. doi:10.1073/pnas.2322420121
Company: National Academy of Sciences Distributor: National Academy of
Sciences Institution: National Academy of Sciences Label: National Academy of
Sciences.
 Meredith Ringel Morris, Dan Altman, Haydn Belfield, Arthur Goemans, Hasan
Iqbal, Ryan Burnell, Iason Gabriel, Samuel Albanie, and Allan Dafoe. 2026. Characterizing Model Jaggedness Supports Safety and Usability. (2026). https:
//cs.stanford.edu/~merrie/papers/jaggedness_preprint.pdf
 Donald A. Norman. 1988. The design of everyday things (first basic paperback,

[nachdr.] ed.). Basic Books, New York.
 Andrea Papenmeier, Dagmar Kern, Daniel Hienert, Yvonne Kammerer, and
Christin Seifert. 2022. How Accurate Does It Feel? - Human Perception of
Different Types of Classification Mistakes. In CHI Conference on Human Factors
in Computing Systems . 1-13. doi:10.1145/3491102.3501915 arXiv:2302.06413 [cs].
 Mohaimenul Azam Khan Raiaan, Md. Saddam Hossain Mukta, Kaniz Fatema,
Nur Mohammad Fahad, Sadman Sakib, Most Marufatul Jannat Mim, Jubaer Ahmad, Mohammed Eunus Ali, and Sami Azam. 2024. A Review on Large Language
Models: Architectures, Applications, Taxonomies, Open Issues and Challenges.
IEEE Access 12 (2024), 26839-26874. doi:10.1109/ACCESS.2024.3365742
 Raphael Raux and Bnaya Dreyfuss. 2025. Human Learning about AI. In Proceedings of the 26th ACM Conference on Economics and Computation (EC '25) .
Association for Computing Machinery, New York, NY, USA, 1106. doi:10.1145/
3736252.3742671
 E. Roesler, D. Manzey, and L. Onnasch. 2021. A meta-analysis on the effectiveness
of anthropomorphism in human-robot interaction. Science Robotics 6, 58 (Sept.
2021), eabj5425. doi:10.1126/scirobotics.abj5425
 Jakob Schoeffer, Maria De-Arteaga, and Niklas Kuhl. 2024. Explanations, Fairness,
and Appropriate Reliance in Human-AI Decision-Making. In Proceedings of the
CHI Conference on Human Factors in Computing Systems . ACM, Honolulu HI USA,
1-18. doi:10.1145/3613904.3642621
 Jordan Richard Schoenherr and Robert Thomson. 2024. When AI Fails, Who
Do We Blame? Attributing Responsibility in Human-AI Interactions. IEEE
Transactions on Technology and Society 5, 1 (March 2024), 61-70. doi:10.1109/
TTS.2024.3370095
 Michael D. Skarlinski, Sam Cox, Jon M. Laurent, James D. Braza, Michaela Hinks,
Michael J. Hammerling, Manvitha Ponnapati, Samuel G. Rodriques, and Andrew D. White. 2024. Language agents achieve superhuman synthesis of scientific
knowledge. doi:10.48550/arXiv.2409.13740 arXiv:2409.13740 [cs].
 Sofia Eleni Spatharioti, David Rothschild, Daniel G Goldstein, and Jake M Hofman.
2025. Effects of LLM-based Search on Decision Making: Speed, Accuracy, and
Overreliance. In Proceedings of the 2025 CHI Conference on Human Factors in


Computing Systems (CHI '25) . Association for Computing Machinery, New York,
NY, USA, 1-15. doi:10.1145/3706598.3714082
 Benjamin Sturgeon, Daniel Samuelson, Jacob Haimes, and Jacy Reese Anthis.
2025. HumanAgencyBench: Scalable Evaluation of Human Agency Support in
AI Assistants. doi:10.48550/arXiv.2509.08494 arXiv:2509.08494 [cs].
 Hari Subramonyam, Roy Pea, Christopher Pondoc, Maneesh Agrawala, and
Colleen Seifert. 2024. Bridging the Gulf of Envisioning: Cognitive Challenges
in Prompt Based Interactions with LLMs. In Proceedings of the CHI Conference
on Human Factors in Computing Systems . ACM, Honolulu HI USA, 1-19. doi:10.
1145/3613904.3642754
 Lev Tankelevitch, Viktor Kewenig, Auste Simkute, Ava Elizabeth Scott, Advait
Sarkar, Abigail Sellen, and Sean Rintel. 2024. The Metacognitive Demands and Opportunities of Generative AI. In Proceedings of the CHI Conference on Human Factors in Computing Systems . 1-24. doi:10.1145/3613904.3642902 arXiv:2312.10893

[cs].
 Michelle Vaccaro, Abdullah Almaatouq, and Thomas Malone. 2024. When combinations of humans and AI are useful: A systematic review and meta-analysis.
Nature Human Behaviour 8, 12 (Dec. 2024), 2293-2303. doi:10.1038/s41562-02402024-1
 Keyon Vafa, Sarah Bentley, Jon Kleinberg, and Sendhil Mullainathan. 2025. What's
Producible May Not Be Reachable: Measuring the Steerability of Generative
Models. doi:10.48550/arXiv.2503.17482 arXiv:2503.17482 [cs].
 Keyon Vafa, Ashesh Rambachan, and Sendhil Mullainathan. 2024. Do Large
Language Models Perform the Way People Expect? Measuring the Human Generalization Function. doi:10.48550/arXiv.2406.01382 arXiv:2406.01382.
 Helena Vasconcelos, Gagan Bansal, Adam Fourney, Q. Vera Liao, and Jennifer Wortman Vaughan. 2024. Generation Probabilities Are Not Enough: Uncertainty Highlighting in AI Code Completions. ACM Transactions on ComputerHuman Interaction (Oct. 2024). doi:10.1145/3702320
 Helena Vasconcelos, Matthew Jorke, Madeleine Grunde-McLaughlin, Tobias
Gerstenberg, Michael S. Bernstein, and Ranjay Krishna. 2023. Explanations Can
Reduce Overreliance on AI Systems During Decision-Making. Proceedings of the
ACM on Human-Computer Interaction 7, CSCW1 (April 2023), 1-38. doi:10.1145/
3579605
 Viswanath Venkatesh, James Y. L. Thong, and Xin Xu. 2012. Consumer Acceptance and Use of Information Technology: Extending the Unified Theory
of Acceptance and Use of Technology. MIS Quarterly 36, 1 (2012), 157-178.
doi:10.2307/41410412
 Qiaosi Wang, Koustuv Saha, Eric Gregori, David Joyner, and Ashok Goel. 2021. Towards Mutual Theory of Mind in Human-AI Interaction: How Language Reflects
What Students Perceive About a Virtual Teaching Assistant. In Proceedings of the
2021 CHI Conference on Human Factors in Computing Systems . ACM, Yokohama
Japan, 1-14. doi:10.1145/3411764.3445645 23 citations (Crossref) [2023-07-14]
GSCC: 0000045.
 Peter West, Ximing Lu, Nouha Dziri, Faeze Brahman, Linjie Li, Jena D. Hwang,
Liwei Jiang, Jillian Fisher, Abhilasha Ravichander, Khyathi Chandu, Benjamin
Newman, Pang Wei Koh, Allyson Ettinger, and Yejin Choi. 2023. The Generative
AI Paradox: "What It Can Create, It May Not Understand". https://openreview.
net/forum?id=CF8H8MS5P8
 Google Workspace. [n. d.]. AI for Project Management. https://workspace.google.
com/solutions/ai/project-management/
 Sangseok You, Yang, Cathy Liu,, and Xitong Li. 2022. Algorithmic versus Human Advice: Does Presenting Prediction Performance Matter for
Algorithm Appreciation? Journal of Management Information Systems
39, 2 (April 2022), 336-365. doi:10.1080/07421222.2022.2063553 _eprint:
https://doi.org/10.1080/07421222.2022.2063553.
 J.D. Zamfirescu-Pereira, Richmond Y. Wong, Bjoern Hartmann, and Qian Yang.
2023. Why Johnny Can't Prompt: How Non-AI Experts Try (and Fail) to Design
LLM Prompts. In Proceedings of the 2023 CHI Conference on Human Factors in
Computing Systems (CHI '23) . Association for Computing Machinery, New York,
NY, USA, 1-21. doi:10.1145/3544548.3581388
 Shiyao Zhang, Omar Faruk, Robert Porzel, Dennis Kuster, Tanja Schultz, and
Hui Liu. 2024. Examining the Effects of Human-Likeness of Avatars on Emotion
Perception and Emotion Elicitation. In 2024 International Conference on Activity
and Behavior Computing (ABC) . 1-12. doi:10.1109/ABC61795.2024.10652090
 Haiyan Zhao, Hanjie Chen, Fan Yang, Ninghao Liu, Huiqi Deng, Hengyi Cai,
Shuaiqiang Wang, Dawei Yin, and Mengnan Du. 2024. Explainability for Large
Language Models: A Survey. ACM Trans. Intell. Syst. Technol. 15, 2 (Feb. 2024),
20:1-20:38. doi:10.1145/3639372
 Yiran Zhao, Wenxuan Zhang, Guizhen Chen, Kenji Kawaguchi, and Lidong Bing.
2024. How do large language models handle multilingualism?. In Proceedings of
the 38th International Conference on Neural Information Processing Systems (NIPS
'24, Vol. 37) . Curran Associates Inc., Red Hook, NY, USA, 15296-15319.
 Lexin Zhou, Wout Schellaert, Fernando Martinez-Plumed, Yael Moros-Daval,
Cesar Ferri, and Jose Hernandez-Orallo. 2024. Larger and more instructable
language models become less reliable. Nature 634, 8032 (Oct. 2024), 61-68. doi:10.
1038/s41586-024-07930-y


# A Appendix

# A.1 Easy vs. Hard Task Examples


Figure 3 depicts the easiest and hardest diagrams that participants
were asked to recreate in Phase 2. Easy diagrams had few components with a simple linear flow, whereas harder diagrams had more
nodes and non-linear connections such as forks or cycles.


# A.2 Survey Interface Overview


Figures 4 to 6 show the complete study interface, including the
introduction, Phase 1 demonstration tasks, summary of Phase 1
results, Phase 2 WTP bidding tasks, and post-task survey measures.


# A.3 Perceived Task Difficulty By Participants


Figure 7 shows how many attempts participants believed it would
take to successfully generate each Phase 2 diagram, illustrating that
perceived difficulty generally increased with diagram complexity.


# A.4 The Effect of Prior AI Consumption


We found a potential influence of participants' prior consumption of
AI-related content on reliance. This is based on the following question: "How often do you read or watch AI-related stories, movies,


CHI EA '26, April 13-17, 2026, Barcelona, Spain


TV shows, comics, news, product descriptions, conference papers,
journal papers, blogs, or other materials?" Participants answered
by selecting one of the following choices: Daily, Weekly, Monthly,
A few times a year, Rarely, or Never.
Consumption frequency categories were collapsed into heavy
(Daily/Weekly), moderate (Monthly/A few times a year), and low
(Rarely/Never) AI-content consumers. We present the bid distribution for each consumption category in Figure 8. We corrected for
multiple comparisons by controlling for a 5% false discovery rate,
using the Benjamini-Hochberg procedure, within the 18 hypotheses
that compare levels of AI-content consumption within an experimental condition and, separately, within the 45 hypotheses that
compare experimental conditions within a level of AI-content consumption. Low AI-content consumers placed significantly higher
bids for hard errors than easy errors in the 5-error condition (SE =
$0.02, t = 5.265, p FDR < 0.001), whereas heavy and moderate users
did not. The effect was significant after FDR correction ( p FDR <
0.001). Within the 5-error/easy-task condition, low AI-content consumers placed significantly lower bids than heavy consumers with
a difference of $0.09 (SE = $0.01, t = 6.743, p FDR < 0.001) and moderate consumers with a difference of $0.09 (SE = $0.02, t = 5.341, p FDR
< 0.001).


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman


Figure 3: The easiest (i.e., simplest) (A) and hardest (i.e., most complex) (B) diagrams that participants were asked to recreate in

# Phase 2.


CHI EA '26, April 13-17, 2026, Barcelona, Spain


Figure 4: First stages of the study interface. This participant was randomly assigned to view the Phase 1 tasks in ascending
order of difficulty (easier to harder) and to see errors later in the phase (for the more difficult tasks, not shown here). The Phase
2 task order is fully randomized.


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman


Figure 5: Additional stages of the study interface. This participant was randomly assigned to view the Phase 1 tasks in ascending
order of difficulty (easier to harder) and to see errors later in the phase (for the more difficult tasks, not shown here). The Phase
2 task order is fully randomized.


CHI EA '26, April 13-17, 2026, Barcelona, Spain


Figure 6: Additional stages of the study interface. This participant was randomly assigned to view the Phase 1 tasks in ascending
order of difficulty (easier to harder) and to see errors later in the phase (for the more difficult tasks, not shown here). The Phase
2 task order is fully randomized.


CHI EA '26, April 13-17, 2026, Barcelona, Spain Jacy Reese Anthis, Hannah Cha, Solon Barocas, Alexandra Chouldechova, and Jake Hofman


Figure 7: Participants were asked how many attempts they believed it would take to successfully generate the diagram in each
Phase 2 task. Each task had more nodes or more complex connections than lower-number diagrams. In particular, Task 2 had
one more node than Task 1, but Task 2 was sequential while Task 1 was cyclic, which could explain why Task 2 was viewed as
easier. The task difficulties were selected in order to have two easier tasks, four tasks of middling difficulty, and two harder
tasks. Tasks were displayed in randomized order.


Figure 8: The empirical bid distribution for participants across the six experimental conditions, separated by prior AI consumption (heavy, moderate, and low). Error bars show standard errors.