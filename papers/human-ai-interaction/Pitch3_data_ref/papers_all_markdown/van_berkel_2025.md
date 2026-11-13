# Cognitive Forcing for Better Decision-Making: Reducing Overreliance on AI Systems Through Partial Explanations

SANDER DE JONG, Aalborg University, Denmark
VILLE PAANANEN, University of Oulu, Finland
BENJAMIN TAG, University of New South Wales, Australia
NIELS VAN BERKEL, Aalborg University, Denmark


In AI-assisted decision-making, explanations aim to enhance transparency and user trust but can also lead to
negligence. In two separate studies, we explore the use of partial explanations to activate cognitive forcing and
increase user engagement. In Study I ( N = 264), we present participants with weighted graphs and ask them
to identify the shortest paths. In Study II ( N = 210), participants correct spelling and grammar mistakes in
short text segments. In both studies, we provide a solution suggestion accompanied by either no explanation,
a full explanation, or a partial explanation. Our results show that partial explanations reduce overreliance on
incorrect AI suggestions, performing significantly better than the baseline but not as well as full explanations.
Individuals with a high need for cognition benefit more from AI explanations and consequently perform better.
Our work suggests that partial explanations can be valuable in domains where reducing overreliance on AI
is critical, like medical diagnosis. It also underscores the need to consider explanation effectiveness across
different task difficulties, a factor often overlooked in contemporary human-AI studies.


CCS Concepts: - Human-centered computing → Empirical studies in HCI ; Empirical studies in
collaborative and social computing .


Additional Key Words and Phrases: explanations, partial explanations, cognitive forcing, cognitive bias, trust,
human-AI collaboration


# ACM Reference Format:
Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel. 2025. Cognitive Forcing for Better
Decision-Making: Reducing Overreliance on AI Systems Through Partial Explanations. Proc. ACM Hum.-
Comput. Interact. 9, 2, Article CSCW048 (April 2025), 30 pages. https://doi.org/10.1145/3710946


# 1 Introduction
Artificial Intelligence (AI) systems have been shown to outperform humans in various decisionmaking tasks across many domains. Examples include the detection of deceptive reviews,
estimating an individual's income based on demographic and job information, and predicting
hypoxaemia during surgery based on electronic medical record data. However, given the
potentially severe consequences of errors made by AI systems, it remains essential to include
humans in the decision-making process. Effectively integrating AI decision-systems systems into
the real world requires that end-users place appropriate reliance on these systems, be vigilant
of potential mistakes by an AI support tool, and adjust decision-making accordingly.


Authors' Contact Information: Sander de Jong, Aalborg University, Aalborg, Denmark, sanderdj@cs.aau.dk; Ville Paananen,
University of Oulu, Oulu, Finland, ville.paananen@student.oulu.fi; Benjamin Tag, University of New South Wales, Sydney,
Australia, benjamin.tag@unsw.edu.au; Niels van Berkel, Aalborg University, Aalborg, Denmark, nielsvanberkel@cs.aau.dk.


Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee
provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the
full citation on the first page. Copyrights for components of this work owned by others than the author(s) must be honored.
Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires
prior specific permission and/or a fee. Request permissions from permissions@acm.org.
© 2025 Copyright held by the owner/author(s). Publication rights licensed to ACM.
ACM 2573-0142/2025/4-ARTCSCW048
https://doi.org/10.1145/3710946


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:2 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


To understand algorithmic decisions and to calibrate end-users' trust in AI systems, many
contemporary solutions communicate explanations alongside AI suggestions [42, 61]. While explanations have been shown to increase trust in AI systems, they can also result in over- or
underreliance [8, 34]. When presented with an AI suggestion, people tend to anchor their prediction to the suggestion [1, 74] and are generally willing to comply with a reasonable explanation.
Additionally, as people experience positive outcomes when following the explanations provided by
an AI system, they are less likely to detect any subsequent mistakes by the AI system. For people
to assess AI suggestions correctly, explanations need to support the verification of suggestions on a
case-by-case basis to support appropriate reliance. To this end, increasing people's engagement
with a task has long been suggested to minimise cognitive biases.
This method, known as 'cognitive forcing', has recently been adopted in AI systems, where it
has shown promising signs of reducing overreliance at the cost of increased cognitive load [6, 57].
Vasconcelos et al. argue that the effect of explanations on overreliance depends on the user's
cost-benefit analysis by weighing costs such as task and explanation difficulty against possible
benefits such as a performance increase or monetary compensation. In conclusion, engaging
people with tasks can reduce overreliance on explanations.
In this study, we introduce partial explanations as a way to increase user engagement with
the task at hand. Revealing only part of an explanation prevents users from relying fully on the
explanation, thereby activating cognitive forcing, which we hypothesise will challenge users to
consider alternative solutions. We test the effect of partial explanation in two separate studies. In
Study I, we task participants with finding the shortest path in a weighted graph task and manipulate
the level of explanation offered alongside the AI suggestions by highlighting different path sections
in a between-subject study design. The baseline condition only shows the suggested shortest path
length with no explanation offered. We compare the baseline to a typical explanation condition
in which the entire proposed path is highlighted, as well as two distinct partial explanations. For
both variants of the partial explanation, we highlight only a fragment of the path. In one partial
explanation variant, we provide only a singular edge within the graph, and for the other variant, we
highlight both the edges at the beginning and end nodes of the path. The four types of explanations
are evaluated across three difficulty levels-easy, medium, and hard-as defined by the number of
nodes in the graph. In Study II, we ask participants to identify spelling and grammar mistakes
in short text segments, where we again manipulate the level of explanation offered alongside
AI suggestions indicating the number of mistakes. In the baseline condition, we only show the
number of mistakes the AI system identified in the text. Partial explanations highlight the words
containing a grammar or spelling mistake, whereas the full explanation condition additionally
presents the suggested replacements for the highlighted words. We similarly categorise the tasks in
three difficulty levels, as determined through the established Flesch-Kincaid reading ease test.
Finally, we manipulate the correctness of the AI suggestions across these tasks in both studies.
Our results across both studies indicate that partial explanations can reduce overreliance on
incorrect AI suggestions compared to full explanations, albeit at the cost of decreasing reliance on
correct AI suggestions. Overall, partial explanations resulted in significantly higher performance
than the baseline but worse performance than full explanations for both studies, although this
difference was only statistically significant in Study II. Participants performed best on the tasks
with easy difficulty but interestingly performed worse on the medium-difficulty tasks as compared
to the hard ones. In Study I, the reduced performance on the medium-difficulty tasks is congruent
with less reliance on the AI suggestions compared to easy and hard tasks, as consistent across all
explanation conditions. We hypothesise that participants perceive obviously challenging tasks as
too daunting to interact with and, therefore, are more inclined to follow the AI suggestions. In


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:3


contrast, they are more likely to rely on their own judgement for medium tasks but are unable to
reliably identify the right solution.
The study's implications for the design of AI decision support systems are twofold. Firstly,
participants' reduced overreliance when using partial explanations is promising for domains where
overreliance on AI systems can be detrimental. For example, in many application areas, the user
rather than the AI system ultimately holds accountability for the decisions made, such as in the
medical field. Secondly, the differences in participant performance and their reliance on the AI
suggestions across the various difficulty levels indicate that designers of decision-support systems
should be wary of the effectiveness of their explanations across different task difficulties, an aspect
not typically considered in prior work.


# 2 Related Work

To investigate how partial explanations can support AI-assisted decision-making, we contextualise
our work with studies on calibrating user reliance in AI-assisted decision-making scenarios and
constructing AI explanations.


# 2.1 Calibrating User Reliance in AI-Assisted Decision-Making
Algorithmic decision-making systems in various domains can provide suggestions that improve
human-AI performance compared to humans acting alone [2, 8, 29, 34, 42]. Improving the decision
quality with these suggestions requires that people place appropriate trust in them. Users should
trust a system enough to want to use it but remain diligent in validating its suggestions. Overrelying
on AI suggestions without catching its mistakes often leads to worse results than an AI acting
alone [2, 42]. Prior work shows that humans are insufficiently able to appropriately adjust their
trust based on AI suggestions to ensure appropriate trust in each AI suggestion.
Explanations have been suggested as a means to make humans understand and reason about
AI suggestions before making final decisions, guiding users to correctly adjust their trust.
However, showing explanations poses challenges. Bunt et al. show that comprehensibility is not
always dependent on explanations and that the perceived cost of viewing explanations tends to
outweigh the anticipated benefits. Furthermore, research from psychology indicates that people
tend to follow any reasonable explanation even when it is inaccurate.
Additionally, Bansal et al. outline a range of related studies in which the presentation of explanations alongside suggestions improves human-AI team performance. However, the performance
is not complementary, as the AI systems in these studies autonomously outperform human-AI
teams presented with AI explanations. Explanations increase reliance on AI algorithms even when
the provided suggestions are incorrect.
Reliance behaviour in decision-making tasks is prone to anchoring bias. Anchoring bias
can be defined as "the disproportionate influence on decision makers to make judgements that
are biased toward an initially presented value". Prior studies in AI-assisted decision-making
have shown that anchoring bias occurs when presenting people with an AI's suggestion prior to
making a decision. People made better decisions when they were able to make an unassisted
decision and were only presented with AI suggestions afterwards. However, prior work in the
context of clinical decision support indicates that such bias mitigation techniques are experienced
as frustrating due to the fact that they slow down the decision-making process. In a study
on information search, Rieger et al. obfuscated attitude-confirming search results (i.e., results
that are in line with a user's existing attitude) in an attempt to reduce anchoring bias. Their
results showed that targeted obfuscation of moderate and extreme attitude-confirming search
results by showing warning messages made participants engage less with attitude-confirming
results. However, the authors warn that this effect might have been impacted by participants'


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:4 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


desire to avoid additional effort. Echterhoff et al. investigated ways to mitigate the anchoring bias
that occurs in sequential AI-assisted decision-making tasks, where decisions earlier in the task
sequence influence subsequent decisions. Manipulating the order in which tasks are presented
significantly reduced the anchoring bias.
Several papers on AI-assisted decision-making investigated the use of cognitive forcing functions to reduce overreliance on AI suggestions and explanations [6, 29, 57]. These studies
introduced cognitive forcing by letting people reflect on their answers [6, 57], letting participants
make an initial decision before showing the suggestions [6, 26, 29], let them decide when to see
an explanation [6, 51], or by showing an explanation without solution suggestion. Cognitive
forcing functions show promising signs of reducing overreliance, although they did not completely
eliminate it.
Besides the design of the explanation system, research has also considered how individual user
traits affect reliance. For instance, the effectiveness of explanations was higher for people with high
levels of 'need for cognition' (NFC) [6, 73]. NFC is a personality trait describing the "tendency for
an individual to engage in and enjoy critical thinking" that has been used as a measure in studies
about AI explanations (e.g., [55, 73]). Another individual character trait we consider in Study I is
subjective numeracy. Besides mathematical skills, numeracy entails the practical applications of
these skills and associated reasoning. Peters et al. found that the highly numerate tend to draw
more precise affective meaning (i.e., automatic, associative, and fast) from numbers and numerical
comparisons. They argue that humans require different decision aids based on numeracy.
Building on these prior works on cognitive forcing and calibration of user reliance, we investigate
partial explanations as a way to increase participant engagement with a given task. Following
earlier work on user traits [6, 73], we expect that people with high NFC will benefit more from
partial explanations as they require increased engagement with the task.


# 2.2 Constructing AI Explanations

As user reliance is influenced by many factors, similarly, the design of the AI interface is an equally
complex topic. To this end, the recent focus on explainable AI has garnered much research interest,
bringing together knowledge from several fields. Miller stresses the importance of building on
insights from philosophy, psychology, and cognitive science to inform how explanations are selected,
evaluated, and presented. Accordingly, explanations are designed for their specific AI systems
and can communicate the underlying decisions and outcomes (e.g., textually, visually, or
even physically).
For instance, Kim et al. engaged participants to evaluate AI systems in four different visual
explanation mock-ups in a bird identification application. The authors found that participants
preferred explanations that are actionable, allowing interaction between users and the AI systems
to improve the decision. Additionally, the participants expressed that combined modalities in AI
systems can provide more informative explanations and that presenting only part of the information
resembles typical human reasoning. Similarly, providing information via solely visual explanations
may not be desirable, as found by Szymanski et al., who investigated the role of user expertise on
their understanding of different explanation types (i.e., visual, textual) through a study presenting
local explanations in article writing tasks. Their results show that while both expert and lay
users preferred visual explanations, both groups performed significantly worse when using visual
explanations than textual explanations. In a follow-up study, the authors subsequently compared a
hybrid visual-textual explanation with a visual-only explanation, significantly improving lay users'
performance. Explanation styles were also explored by Panigutti et al. by using a decision support
system in a clinical setting to evaluate behavioural intention and trust using different visualisation
methods. Healthcare providers evaluated the medical histories and AI-generated diagnoses


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:5


with two interface conditions; highlighting either only the AI suggestion or the AI suggestion
together with a textual explanation. Their quantitative results suggest that the explanations required
more effort from the users and, qualitatively, were too opaque. Similarly, Sokol and Flach present a
framework for explainable AI and argue for parsimony in the presented explanations. The
authors adhere to the 'maxim of quantity', originating from cooperative communication, which
states that one should only communicate as much information as necessary.
Beyond the design of the explanation modality, it is also necessary to consider how the explanations affect how the AI systems are perceived. Kizilcec investigated the effect of system transparency
on user trust in the context of peer assessment in an online course. The results indicate that
receiving information about the review procedure mitigated students' trust reduction when grade
expectations were not met. A higher level of transparency by presenting students with individual examples of the peer review outcomes nullified this effect. Kizilcec argues that the extra transparency
confuses users or steers the focus away from procedural justice, consequently reducing trust. Jafari
and Vassileva discuss the trade-off between reducing the fidelity of explanations and providing full
information. While simplifying explanations could lead to users' misunderstanding, complex
and too technical explanations lead to confusion and misuse. Using tasks in both visual and textual
domains, Cau et al. found that overreliance was more prominent when the explanations relied on
inductive reasoning. Conclusively, explanation styles, accuracy, and trust are interconnected
concepts.

Schmude et al. focused explicitly on the understanding of an AI system in a qualitative study.
Laypeople performed the high-risk task of predicting job-seekers' employability. The recruited
sample with 'users' and 'affected stakeholders' used an algorithmic decision-making system to
assign a fictional job-seeker in three conditions: textual, dialogue, and interactive. The authors
evaluated participant understanding through analytical and emotional aspects and claim that
while contemporary decision-support systems focus on analytical facets of understanding, the
emotional facets (e.g., the ability to empathise and self-reflect) have been underrepresented. Similar
to Szymanski et al., participants disliked the textual modalities. However, in Szymanski et al.,
textual approaches helped participants' understanding, while this positive effect was not replicated
by Schmude et al.. Lai et al. introduced the concept of selective explanations. In a textbased task, participants had to determine the sentiment of movie reviews. Participants were first
presented with the review text and had to either rate the words' importance for solving the task
or enter the vital words themselves. These words were subsequently presented as highlighted
using LIME-based explanations. Selective explanations increased the perceived understanding of
explanations.
These studies reflect the challenge of balancing between a need for transparency through
explanations and the danger of information overload. Through the use of partial explanations,
we seek to support users without overwhelming them with information, enabling them to retain
'cognitive independence' in completing the task.


# 3 Study I: Shortest Path Task


# 3.1 Method

Through a between-subjects study featuring graph-based reasoning tasks, we aim to explore how
differing levels of AI explanations and varying task difficulties influence both task performance
and user reliance on AI recommendations. The selection for a graph-based task is inspired by a
maze task in similar work and by the travelling salesman problem, a well-known Computer
Science problem in combinatorial optimisation. The travelling salesman problem has real-world
applications in finding efficient routes between destinations, which is relevant in multiple contexts


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:6 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


(e.g., scheduling for package delivery). Due to the complex nature of the travelling salesman problem,
we use the simpler shortest path problem instead. In the shortest path problem, participants have
to find the path with the lowest cost in a weighted graph given a predetermined starting and
end node. The task does not require domain knowledge as it is comparable to puzzles that most
people are familiar with. Mutalova et al. found that laypeople's puzzle problem-solving abilities can
lead to better solutions in combinatorial problems, resulting in comparable or better approaches
than typically used. Therefore, we argue that the graph-based task is suitable for participants
without specific domain knowledge and can act as a proxy for AI-based routing problems.


3.1.1 Task Description. In the shortest path task, participants are asked to find the shortest path
between two points in weighted bi-directional graphs across three difficulty levels (see Figure 1 for
an example). Following each graph, the AI system provides a suggestion for the cost of the shortest
path, which is claimed to have been calculated by an AI system. While all participants see this
suggestion, we manipulate the degree of explanation based on their randomly assigned condition;

 - Baseline condition, no explanation is provided to the participant.

 - Single edge explanations highlight one randomly selected edge along the suggested solution
identified by the AI. We aim to induce cognitive forcing by enticing the participants to consider
alternative solutions rather than those provided by the AI suggestion.

 - Ends explanations highlight the first and last edge of the AI-suggested solution and follow
a similar motivation as the single edge explanation.

 - Full explanations highlight the entire path from the start to the end nodes corresponding
to the given suggestions. The full explanations condition is the conventional way of showing
explanations, equivalent to explanations used in similar studies but adapted for the graphbased task.

Figure 2 shows visual depictions of the explanation styles. We constructed a total of 15 unique
graphs: five graphs with 6 nodes, five with 10 nodes, and five with 14 nodes. The number of nodes
corresponds to the difficulty level of the task (6 nodes = easy, 10 nodes = medium, 14 nodes =
hard). The graphs were created using p5.js and subsequently manually edited until there were no
overlapping edges. See Figure 3 for an example task of each difficulty.
Binary tasks can be problematic when measuring reliance, as random guessing would lead to
considerable overlap with the AI suggestions. Therefore, participants are asked to enter the cost of
the path as calculated from the start node to the end node.


3.1.2 Measures. We collect the following measures for each task:

 - Performance : binary comparison of the correctness of the participant's answer against the
ground-truth label as determined by the authors.

 - Reliance on AI : binary variable that indicates the participant's reliance on the AI suggestion.

 - Perceived task difficulty : self-reported task difficulty, measured on a five-point Likert scale,
used to validate our assessment of task difficulty.

 - Perceived usefulness of AI : self-reported usefulness of the provided suggestion and explanation,
measured on a five-point Likert scale.

 - Perceived confidence in AI : self-reported confidence of participant in the AI's suggestion and
explanation, measured on a five-point Likert scale.


Additionally, the following variables are used in the analysis.

 - Correctness of AI : binary variable that indicates whether the provided AI suggestion was
correct.


1https://p5js.org/


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:7


Fig. 1. An example of the task interface with the provided suggestion (the path cost of the presented solution)
and explanation (the highlighting of the graph). Participants are asked to find the shortest path from the
start node (A in this example) to the end node (H in this example). The example displays the Ends explanation
condition.


(a) Baseline (b) Single edge (c) Ends (d) Full


Fig. 2. Four explanation styles of a medium-difficulty task (10 nodes). (a) baseline, shows no explanation. (b)
single edge, highlights a randomly selected edge along the solution. (c) ends, highlights the start and end
edge of the solution. (d) full explanation, highlights the entire path.


 - Difficulty level : categorical variable describing the task difficulty (easy, medium, hard) as
dependent on the level of graph nodes, used as within-subject manipulation.
After a participant completes all tasks, we collect the following additional information:

 - Need for cognition : Need for cognition (NFC) is a personality trait describing the "tendency
for an individual to engage in and enjoy critical thinking". The scale consists of eighteen
five-point Likert scale questions.

 - Subjective numeracy scale : The subjective numeracy scale (SNS) is used to evaluate whether
participants prefer text- or number-based explanations. The scale consists of eight
six-point Likert scale questions.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:8 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


(a) Easy (b) Medium (c) Hard


Fig. 3. Examples of each difficulty for the graph task. (a) easy, containing 6 nodes. (b) medium, containing 10
nodes. (c) hard, containing 14 nodes.


 - Trust in AI : self-reported participant trust in the AI, measured on a five-point Likert scale.

 - Satisfaction : self-reported satisfaction with the presentation of the AI explanations, measured
on a five-point Likert scale.


3.1.3 Study Procedure. Participants are first presented with the study's goals and their rights
as research participants and agree to informed consent. Participants are led to believe they had
access to an AI system's suggestions to aid them in their tasks. To prepare the participants for
the experiment, we give each participant an example task with an easy graph and a description
of how to solve the task. In this example task, we ask participants to provide the correct solution

- further serving as an attention check. Participants are also informed about a £5 reward for
the five best-performing participants. This reward is meant to further incentivise participants to
apply themselves during the tasks and not blindly rely on the AI suggestions. This follows the
recommendation from similar studies [33, 73].
In the actual experiment, participants are asked to solve twelve weighted graph tasks and answer
the aforementioned self-report measures. The twelve tasks are split between nine tasks in which the
provided AI suggestion is correct and three in which the AI suggestion is incorrect, simulating an AI
accuracy of 75%. While we do not communicate the exact accuracy of the AI, as this has been shown
to influence participants' reliance [59, 77], all participants are informed that the AI is imperfect and
can provide incorrect suggestions. The tasks are evenly split among the difficulty levels, resulting
in three tasks with correct and one with incorrect AI suggestions per difficulty level. The difficulty
levels are rotated identically for all participants to exclude any influence of ordering on the results.
The tasks with correct AI suggestions and their survey position are the same for all participants,
while the task with incorrect suggestions is picked from two options per difficulty to prevent outliers
from skewing the data for that difficulty level. We do not show participants the correct answer
to the task, as seeing an AI system err has been shown to influence participant perception.
Following the completion of the graph tasks, we collect the aforementioned measures and scales.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:9


# 3.2 Results
We recruited a sample of 280 participants from Prolific, an online labour market for study participant recruitment. Douglas et al. found that the data quality of samples recruited on Prolific is
higher than on other labour markets and student samples, with participants paying more attention
to the tasks and providing more meaningful answers. All participants have English as their
first language, participated on a desktop device, and had a minimum of 100 completed tasks on
Prolific with a 95% approval rate. We compensated participants at the rate recommended by Prolific
of £9 per hour, with an extra £5 reward for the five best-performing participants. Of the recruited
participants, 16 failed the attention check, resulting in N = 264 participants for analysis (131 male,
132 female, and one participant not disclosing their gender) distributed over the explanation styles
( Baseline = 66, Ends = 67, Single node = 64, and Full = 67). The mean age of the participants was
36.84 years ( SD = 12 . 50). The participants lived in 17 different countries, with the majority living
in the United Kingdom (55%), South Africa (19%), and Canada (7%). The average completion time
was 23.5 minutes ( SD = 9 . 86, median 21 minutes). On average, participants entered 8.33 distinct
answers per task, confirming our suspicion that the task yields non-binary answers.
The participants' average correct task completion is 70% ( SD = 24%). The baseline (i.e., showing
suggestions but no explanations) performance is 56% ( SD = 26%), showing that explanations
increase participant performance. The explanation conditions also increase the average reliance
( M = 60%, SD = 19%) from the baseline level ( M = 44%, SD = 19%). The participants' mean
score on the 5-point NFC scale is 3.41 ( SD = 0 . 69), and the average SNS on a 6-point scale is
4.52 ( SD = 0 . 84). Participants' self-reported difficulty scores across the three difficulty levels (i.e.,
6 nodes, 10 nodes, and 14 nodes) are respectively 1.90 ( SD = 0 . 92), 2.99 ( SD = 1 . 05), and 3.09
( SD = 1 . 13) on a five-point scale.
We evaluate two binomial generalised linear models to analyse the various factors influencing
participants' decisions, predicting participant performance and reliance. We use the glmer function
in the lme4 package to build these models.


3.2.1 Performance. We assess participants' performance on the task (i.e., the correct path cost value
as compared to the ground truth). We start with the following GLM model predicting performance:


Performance ~ Explanation style + Difficulty level + Reliance on AI


+ Correctness of AI + Perceived difficulty + Perceived usefulness


+ Perceived confidence + NFC + SNS + (1|Participant ID)


Because the model fails to converge, we apply manual model selection until the model converges,
removing highly correlated predictors, and ending with a simpler model. The final performance
model is defined as follows:


Performance ~ Explanation style + Difficulty level + Reliance on AI


+ Correctness of AI + (1|Participant ID)


A comparison of the model with the null model using a likelihood ratio test shows that our model
is a statistically significant better fit ( χ (7) = 787.17, p < . 001). We check the multicollinearity
between the model's parameters and find variance inflation factors (VIF) ranging from 1.00 to 1.51.
This is well below the commonly used multicollinearity threshold of five to ten. The model is
able to explain 45% of the performance variance.


2www.prolific.com


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:10 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


Table 1. Binomial generalised linear model for participant performance in Study I. Reference levels are
'Baseline' (i.e., no explanation) for explanation style and 'Easy' (i.e., 6 nodes) for difficulty level.


Variable Estimate Std. Error z-ratio p -value


Explanation style
Single Edge 0.63 0.25 2.55 0.011 Ends 0.73 0.25 2.97 0.003
Full 1.23 0.25 4.88 < 0 . 001 *
Difficulty level
Medium (10 nodes) -1.88 0.14 -13.33 < 0 . 001 *
Hard (14 nodes) -1.51 0.14 -10.65 < 0 . 001 *
Correctness of AI 1.23 0.11 10.78 < 0 . 001 *
Reliance on AI 1.71 0.11 15.30 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 2. Post hoc tests for the explanation style predictor on participant performance in Study I.


Comparison Estimate Std. Error z-ratio p -value


Baseline - Single Edge -0.63 0.25 -2.55 0.053
Baseline - Ends -0.73 0.25 -2.97 0.016 Baseline - Full -1.23 0.25 -4.88 < 0 . 001 *
Ends - Single Edge 0.10 0.25 0.39 0.979
Ends - Full -0.50 0.25 -1.99 0.192
Full - Single Edge 0.60 0.25 2.36 0.086


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 3. Post hoc tests for the difficulty level predictor on participant performance in Study I.


Comparison Estimate Std. Error z-ratio p -value


Easy (6 nodes) - Medium (10 nodes) 1.88 0.14 13.33 < 0 . 001 *
Easy (6 nodes) - Hard (14 nodes) 1.51 0.14 10.65 < 0 . 001 *
Medium (10 nodes) - Hard (14 nodes) -0.37 0.12 -3.11 0.005


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


3.2.2 Explanation styles. The results of the performance model can be seen in Table 1 and Figure 4.
The differences between the explanation conditions compared to the baseline all significantly
affect the participant performance prediction. Subsequently, we look at the post hoc tests to verify
the differences in performance. For all post hoc tests in this paper, we correct for Type I errors
as the result of multiple comparisons using Tukey tests. Post hoc tests indicate that participants
in the ends ( p = 0 . 016) and full ( p < 0 . 001) explanation conditions perform significantly better
compared to the baseline. For the single edge explanation, we see a strong tendency towards better
performance than the baseline, albeit not statistically significant ( p = 0 . 053); see Table 2 for a
detailed overview. Participants in the two partial explanation conditions score similarly ( p = 0 . 979)
and not significantly different from participants in the full explanation condition (Single edge - Full:
p = 0 . 086 and Ends - Full: p = 0 . 192).


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:11


Fig. 4. Plots for the model predicting performance for the different difficulty levels per explanation type in
Study I, divided into subsets where the AI suggestion is correct (left), incorrect (middle), and both combined
(right). The significance stars indicate the post hoc results comparing the explanation conditions.


3.2.3 Task difficulty. The tasks with medium and hard difficulty lead to significantly worse performance compared to the easy condition (both p < 0 . 001, see Table 1 for all details). Post hoc tests on
the difficulty conditions show that both medium and hard difficulty levels differ significantly from
the easy condition, with the easy difficulty leading to higher participant performance (see Table 3,
both p < 0 . 001). Notably, participants scored significantly worse on the medium condition than on
the hard condition ( p = 0 . 005).


3.2.4 AI Correctness. The performance prediction is significantly higher for tasks with correct AI
suggestions compared to incorrect ones ( p < 0 . 001). Reliance also significantly positively influences
performance ( p < 0 . 001).


3.2.5 Personality Traits. NFC and SNS do not correlate significantly with task performance ( p =
0 . 126 and p = 0 . 109). Splitting the data between correct and incorrect AI suggestions shows a
positive correlation between NFC and performance on tasks with incorrect suggestions ( r (262) =
0.15, p < 0.018) but not on correct decisions, while the effect of SNS does not change.


3.2.6 Reliance. Next, we investigate participants' reliance on the AI's suggestions, i.e., their alignment with the suggested path cost as provided by the AI (binary). We start with the following GLM
model predicting reliance:


Reliance on AI ~ Explanation style + Difficulty level + Correctness of AI


+ Perceived difficulty + Perceived usefulness


+ Perceived confidence + NFC + SNS + (1|Participant ID)


Because the model fails to converge, we bring it in line with the simplified performance model:


Reliance on AI ~ Explanation style + Difficulty level


+ Correctness of AI + (1|Participant ID)


The results of the GLM model predicting reliance are shown in Table 4. Comparing this model to
the null model shows that our model is a significantly better fit ( χ (6)= 676.23, p < . 001). The VIF
values are well within our chosen threshold of five to ten, ranging from 1.01 to 1.03. The model is
able to explain 28% of the variance in reliance.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:12 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


Table 4. Binomial generalised linear model for participant reliance in Study I. Reference levels are 'Baseline'
for explanation style and 'Easy' (6 nodes) for difficulty level.


Variable Estimate Std. Error z-ratio p -value


Explanation style
Single Edge 0.83 0.15 5.51 < 0 . 001 *
Ends 0.79 0.15 5.27 < 0 . 001 *
Full 1.62 0.16 10.36 < 0 . 001 *
Difficulty level
Medium (10 nodes) -1.23 0.10 -11.80 < 0 . 001 *
Hard (14 nodes) 0.02 0.10 0.21 0.833
Correctness of AI 1.90 0.10 18.73 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 5. Post hoc tests for the explanation style predictor on participant reliance in Study I.


Comparison Estimate Std. Error z-ratio p -value


Baseline - Single Edge -0.83 0.15 -5.51 < 0 . 001 *
Baseline - Ends -0.79 0.15 -5.27 < 0 . 001 *
Baseline - Full -1.62 0.16 -10.36 < 0 . 001 *
Ends - Single Edge -0.05 0.15 -0.31 0.100
Ends - Full -0.83 0.16 -5.38 < 0 . 001 *
Full - Single Edge 0.79 0.16 5.03 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 6. Post hoc tests for the difficulty level predictor on participant reliance in Study I.


Comparison Estimate Std. Error z-ratio p -value


Easy (6 nodes) - Medium (10 nodes) 1.23 0.10 11.80 < 0 . 001 *
Easy (6 nodes) - Hard (14 nodes) -0.02 0.11 -0.21 0.976
Medium (10 nodes) - Hard (14 nodes) -1.25 0.10 -11.99 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


3.2.7 Explanation styles. The results of the reliance model are described in Table 4. Figure 5 shows
how the model predicts reliance for different explanations based on the difficulty levels and AI
correctness. Participants in the explanation conditions all have a significantly higher reliance on
the model compared to the baseline (all p < 0 . 001), which is confirmed in the post hoc tests
(see Table 5, all p < 0 . 001). Reliance on the two partial explanation conditions is almost equal
( p = 1 . 000). Contrary to the performance model, there is a significant difference in reliance
between both partial conditions and the full explanation condition (both p < 0 . 001), indicating less
reliance on AI suggestions.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:13


Fig. 5. Plots for the model predicting reliance for the different difficulty levels per explanation type in Study I,
divided into subsets where the AI suggestion is correct (left), incorrect (middle), and both combined (right).
The significance stars indicate the post hoc results comparing the explanation conditions.


3.2.8 Task difficulty. Tasks with medium difficulty lead to significantly less reliance than easy
tasks ( p < 0 . 001). In contrast, reliance on easy and hard tasks is similar ( p = 0 . 976, see Table 6
for the post hoc comparisons). This pattern is the same in all explanation conditions.


3.2.9 AI Correctness. Correct AI suggestions lead to significantly higher reliance ( p < 0 . 001).
Comparing the reliance on correct and incorrect AI suggestions per explanation type shows
significantly lower reliance on both correct and incorrect suggestions for partial explanation
conditions than full explanations (all p < 0 . 001). This means that partial explanations result in
significantly less overreliance than full explanations but also introduce underreliance on correct AI
suggestions.


3.2.10 Personality Traits. Evaluating the measured personality traits, we find no significant correlation between reliance and either NFC or SNS ( p = 0 . 677 and p = 0 . 490). Splitting the data
into tasks where the suggestions are correct and those where they are incorrect shows a negative
correlation between NFC and the reliance on incorrect suggestions ( r (262) = -0.22, p < 0.001). All
other correlations between reliance and NFC or SNS are not significant.


3.2.11 Perceived Usefulness, Confidence, Difficulty. We next assess participants' perceived usefulness of the AI, the confidence they placed in the AI, and their perception of task difficulty. As we
are interested in participants' perceptions across all tasks, we first summarise participants' individual ratings for the following calculations. Mean scores for perceived task difficulty ( M = 2 . 66,
SD = 0 . 74), confidence in the AI ( M = 3 . 26, SD = 0 . 79), and perceived usefulness of the
AI ( M = 3 . 22, SD = 0 . 78) indicate that participants generally appreciate the AI assistance.
See Figure 6 for an overview of the participant perceptions, grouped by correct and incorrect AI
suggestions. We use the aligned ranks transformation ANOVA to analyse our Likert responses on
participant perceptions, using the R-package ARTool. The ANOVAs yield significant differences between correct and incorrect AI suggestions for the perceived confidence (F(1) = 369.62,
p < 0 . 001), difficulty (F(1) = 9.50, p = 0 . 002), and usefulness (F(1) = 276.79, p < 0 . 001). As
expected, perceived confidence and usefulness are higher for correct suggestions. Surprisingly,
the perceived difficulty is lower for incorrect AI suggestions. Pairwise Tukey post hoc tests confirm these differences for all three variables (difficulty: p < 0 . 0021, confidence and usefulness:
p < 0 . 001). The general appreciation of the AI assistance is confirmed by the post-experiment


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:14 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


measures, showing high mean satisfaction with the AI explanations ( M = 4 . 09, SD = 0 . 82) and
overall trust in the suggestions ( M = 3 . 03, SD = 0 . 87).


Confidence


Useful


Difficult


AI Correct


AI Incorrect


100% 50% 0% 50% 100%


100% 50% 0% 50% 100%


Not at all Extremely


Fig. 6. Self-reported confidence in answers, perceived usefulness of the AI, and perceived task difficulty on
five-point Likert scales in Study I. Graphs split based on the correctness of the AI suggestions.


3.2.12 Correlational analysis. Using Pearson correlation, we find a strong significant correlation
between participants' confidence in the AI and its perceived usefulness, r (262) = 0.86, p < 0.001. In
contrast, we find a negative correlation between the perceived usefulness of the AI and perceived
task difficulty ( r (262) = -0.11, p = 0.064), as well as between confidence in the AI and perceived
task difficulty ( r (262) = -0.23, p < 0.001). Participants' overall satisfaction with the explanations is
correlated with their confidence in the explanations ( r (262) = 0.48, p = 0.064), perceived usefulness
of the AI ( r (262) = 0.45, p = 0.064) and negatively correlated with perceived task difficulty ( r (262) =
-0.16, p = 0.007). Trust has a strong positive correlation with confidence in the AI ( r (262) = 0.74,
p < 0.001), usefulness of the suggestions ( r (262) = 0.72, p < 0.001), and satisfaction ( r (262) = 0.42,
p < 0.001). We present the distribution of responses in Figure 7, highlighting both the relation to
the correctness of answers (Figure 7-a) and reliance on the AI suggestions (Figure 7-b).


3.2.13 Character traits. Finally, we evaluate the relationship between participants' character traits
and their perceptions of the AI suggestions. We find a significant correlation between participants'
NFC and their satisfaction with the suggestions ( r (262) = 0.16, p = 0.007). There is no significant
correlation between NFC and confidence in the suggestions ( p = 0 . 680), perceived usefulness
( p = 0 . 834), task difficulty ( p = 0 . 353), and trust in the AI system ( p = 0 . 430). Furthermore, we
find that subjective numeracy is correlated with participant confidence in the suggestions ( r (262)
= 0.13, p = 0.035) and their satisfaction with how the suggestions are presented ( r (262) = 0.16,
p = 0.010). There is no correlation between SNS and the usefulness of the explanations ( p = 0 . 130)
and the trust in the AI system ( p = 0 . 936). We find a negative correlation between participants'
subjective numeracy score and perceived difficulty of the tasks ( r (262) = -0.21, p < 0.001). The
two character traits, NFC and subjective numeracy are also significantly correlated ( r (262) = 0.34,
p < 0.001).


# 4 Study II: Spell Checking Task


# 4.1 Method

We set up a second study to assess the impact of partial explanations on a textual task as compared
to the visual task presented in Study I. In this study, we ask participants to identify the number of


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:15


10


5


0


10


5


0


12345


Task difficulty Usefulness of AI Confidence in AI


(a)


12345


Task difficulty Usefulness of AI Confidence in AI


(b)


Fig. 7. Scatterplots of participants' perceptions of the task difficulty, AI's usefulness, and confidence in AI (on
a 5-point Likert scale) in Study I in terms of the number of correct answers by the participants (a) and the
number of tasks for which they relied on the AI suggestions (b).


spelling and grammar mistakes in short text segments. We align the study's methods with those
from Study I as much as possible. Any changes to the methods are described below.
We obtained text segments from the Cambridge English Write & Improve corpus, which were
gathered through an online platform that assists non-native English students with their writing.
All personal identifying information has been previously removed by the owners of the data set.
From this data set, we selected fifteen text segments that contain non-ambiguous mistakes and
which can be corrected with single-word replacements, avoiding corrections that require a different
sentence structure. Additionally, we instructed participants that mistakes are always one-to-one
word replacements, that there are no errors that require words to be inserted or omitted, and to
disregard capitalisation and punctuation. All selected sentences were validated by three authors
prior to deployment.
We present all participants with a suggestion for the number of grammar and spelling mistakes
in the displayed text, which we indicate has been assessed by an AI system. We again manipulate
the degree of explanation based on the participant's randomly assigned condition. Figure 8 shows
examples of the following explanation styles:


 - For the Baseline condition, only the suggested mistake count is provided to the participant
without an explanation.

 - Partial explanations underline the words the AI system flagged as a mistake. The number
of underlined words is identical to the number of mistakes as identified by the AI.

 - Full explanations underline the words that the AI system flagged as a mistake, as well as
present a suggested replacement for the flagged mistake directly above the underlined word.
The number of underlined words is identical to the number of mistakes as identified by the
AI.


We manipulate task difficulty by presenting participants with text of different difficulty levels.
Here, we use the established Flesch-Kincaid reading ease test to determine the difficulty levels
of the text segments. We divide segments into easy tasks (Flesch-Kincaid mean score of 80.2
( SD = 4 . 92), equivalent to conversational English), medium tasks (mean score of 60.8 ( SD = 4 . 44),


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:16 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


(a) Baseline (b) Partial (c) Full


Fig. 8. Three explanation styles of a medium-difficulty task (Flesch-Kincaid score of 58). (a) baseline, shows
no explanation. (b) partial, highlights the mistakes. (c) full explanation, highlights the mistakes and provides
the suggested replacements. This task contains a false positive AI suggestion flagging 'extrovert' as incorrect.


(a) Easy (b) Medium (c) Hard


Fig. 9. Examples of each difficulty for the spelling correction task. (a) easy, Flesch-Kincaid score of 85. (b)
medium, Flesch-Kincaid score of 65. (c) hard, Flesch-Kincaid score of 39.


equivalent to fairly hard-to-read text), and hard tasks (mean score of 38 ( SD = 2 . 35), equivalent to
college-level text). See Figure 9 for examples of tasks of each difficulty level.
We systematically introduce errors into the AI suggestions, similar to our approach in Study I.
Participants are presented with a total of twelve tasks, nine tasks with a correct suggestion and
three tasks with an incorrect suggestion. The tasks are equally distributed based on difficulty. The
three tasks with incorrect suggestions are randomly sampled from two possible tasks with incorrect
suggestions for each difficulty to avoid outliers from biasing our results. Half of the tasks with
incorrect suggestions contain a false positive and half a false negative. For the false positives, the
suggested number of mistakes is one higher than the actual mistake count, and the highlighting
incorrectly flags a word as a mistake (partial and full explanation only) and provides an incorrect
replacement (full explanation only). False negatives omit one of the required word replacements,
and the suggested mistake count is consequently one lower than the actual count.
For all conditions, we use screenshots of the resulting text segments rather than a text-based
presentation to prevent participants from using spelling correction software or copying the text to
a separate application.
We use the same measures as in Study I (see Section 3.1.2 for the measures), with the exception
of the subjective numeracy scale, which does not align with the task of Study II. We replace the
subjective numeracy scale with a five-point Likert scale in which participants rate their reading


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:17


proficiency. The study procedure, recruitment, and compensation of participants are identical to
Study I (see Section 3.1.3 for details).


# 4.2 Results
We recruited a sample of 213 participants from Prolific with the same recruitment criteria and
compensation as in Study I. To ensure comparability between study conditions, we described the
task as being text-heavy and discouraged dyslectic individuals from participating.
Of the recruited participants, three failed the attention check, resulting in N = 210 participants
for analysis (107 male, 103 female) distributed over the explanation styles ( Baseline = 70, Partial = 78,
and Full = 62). The mean age of the participants was 37.50 years ( SD = 13 . 10). The participants lived
in 14 different countries, with the majority living in the United Kingdom (60%), South Africa (14%),
Canada (8%) and the United States (8%). The average completion time was 26 minutes ( SD = 13 . 13,
median 23 minutes).
The participants' average correct task completion is 43% ( SD = 22%), making it a considerably
harder task than Study I. The baseline (i.e., showing suggestions but no explanations) performance
is 29% ( SD = 17%), showing that explanations increase participant performance. The explanation
conditions also increase the average reliance ( M = 48%, SD = 23%) from the baseline level
( M = 36%, SD = 19%). The participants' mean score on the 5-point NFC scale is 3.39 ( SD = 0 . 73),
and the average self-reported reading proficiency on a 5-point scale is 4.20 ( SD = 0 . 72). Participants'
self-reported difficulty scores across the three difficulty levels are respectively 2.62 ( SD = 1 . 07),
2.72 ( SD = 1 . 07), and 2.83 ( SD = 1 . 10) on a five-point scale.


4.2.1 Performance. We assess participants' performance on the task, i.e., the correct number of
mistakes in a text segment, using the same GLM model setup as in Study I.


Performance ~ Explanation style + Difficulty level + Reliance on AI


+ Correctness of AI + (1|Participant ID)


A comparison of the model with the null model using a likelihood ratio test shows that our
model is a statistically significant better fit ( χ (6) = 1245.7, p < . 001). We check the multicollinearity
between the model's parameters and find variance inflation factors (VIF) ranging from 1.00 to 1.06.
This is well below the commonly used multicollinearity threshold of five to ten. The model is
able to explain 47% of the performance variance.


Table 7. Binomial generalised linear model for participant performance in Study II. Reference levels are
'Baseline' (i.e., no explanation) for explanation style and 'Easy' for difficulty level.


Variable Estimate Std. Error z-ratio p -value


Explanation style
Partial 0.38 0.13 2.84 0.004
Full 0.87 0.15 5.96 < 0 . 001 *
Difficulty level
Medium -0.45 0.15 -3.09 0.002
Hard 0.22 0.13 1.71 0.088
Correctness of AI 1.50 0.14 10.89 < 0 . 001 *
Reliance on AI 3.25 0.12 27.03 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:18 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


Table 8. Post hoc tests for the explanation style predictor on participant performance in Study II.


Comparison Estimate Std. Error z-ratio p -value


Baseline - Partial -0.38 0.13 -2.84 0.013 Baseline - Full -0.87 0.15 -5.96 < 0 . 001 *
Full - Partial 0.49 0.14 3.55 0.001


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 9. Post hoc tests for the difficulty level predictor on participant performance in Study II.


Comparison Estimate Std. Error z-ratio p -value


Easy - Medium 0.45 0.15 3.09 0.006
Easy - Hard -0.23 0.13 -1.71 0.200
Medium - Hard -0.68 0.15 4.64 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Fig. 10. Plots for the model predicting performance for the different difficulty levels per explanation type in
Study II, divided into subsets where the AI suggestion is correct (left), incorrect (middle), and both combined
(right). The significance stars indicate the post hoc results comparing the explanation conditions.


4.2.2 Explanation styles. The results of the performance model can be seen in Table 7 and Figure 10.
The differences between the explanation conditions compared to the baseline all significantly affect
the participant performance prediction. Subsequently, we look at the post hoc tests to verify the
differences in performance. Post hoc tests indicate that participants in the partial ( p = 0 . 013) and
full ( p < 0 . 001) explanation conditions perform significantly better compared to the baseline. There
is also a significant difference between the partial and full explanation conditions ( p = 0 . 001). See
Table 8 for a detailed overview.


4.2.3 Task difficulty. The tasks with medium and difficulty lead to significantly worse performance
compared to the baseline easy condition ( p = 0 . 006, see Table 7 for all details). Post hoc tests on the
difficulty conditions show that both medium and hard difficulty levels do not differ significantly
from the baseline easy condition (see Table 9). Similar to Study I, participants perform significantly
better on hard tasks compared to tasks with medium difficulty ( p < 0 . 001).


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:19


4.2.4 AI Correctness. The performance prediction is significantly higher for tasks with correct AI
suggestions compared to incorrect ones ( p < 0 . 001). Reliance also significantly positively influences
performance ( p < 0 . 001).


4.2.5 Personality Traits. NFC has an influence on the score on tasks with correct AI suggestions
( r (208) = 0.14, p = 0.042) but not for incorrect AI suggestions and for both combined. Reading
proficiency influences the total score for correct AI decisions ( r (208) = 0.18, p = 0.010) and all AI
decisions combined ( r (208) = 0.18, p = 0.009) but not for incorrect AI decisions ( p = 0 . 328).


4.2.6 Reliance. Next, we investigate participants' reliance on the AI's suggestions, i.e., their alignment with the suggested path cost as provided by the AI (binary). We use the same model as in
Study I:


Reliance on AI ~ Explanation style + Difficulty level


+ Correctness of AI + (1|Participant ID)


The results of the GLM model predicting reliance are shown in Table 10. Comparing this model
to the null model shows that our model is a significantly better fit ( χ (5)= 94.75, p < . 001). The VIF
values are well within our chosen threshold of five to ten, ranging from 1.00 to 1.03. The model is
able to explain 15% of the variance in reliance.


Table 10. Binomial generalised linear model for participant reliance in Study II. Reference levels are 'Baseline'
for explanation style and 'Easy' for difficulty level.


Variable Estimate Std. Error z-ratio p -value


Explanation style
Partial 0.59 0.14 4.20 < 0 . 001 *
Full 1.50 0.15 9.88 < 0 . 001 *
Difficulty level
Medium -0.19 0.11 -1.71 0.088
Hard -0.18 0.10 -1.75 0.079
Correctness of AI 0.17 0.10 1.66 0.097


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Table 11. Post hoc tests for the explanation style predictor on participant reliance in Study II.


Comparison Estimate Std. Error z-ratio p -value


Baseline - Partial -0.59 0.14 -4.20 < 0 . 001 *
Baseline - Full -1.50 0.15 -9.88 < 0 . 001 *
Full - Partial 0.91 0.15 6.27 < 0 . 001 *


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:20 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


Fig. 11. Plots for the model predicting reliance for the different difficulty levels per explanation type in
Study II, divided into subsets where the AI suggestion is correct (left), incorrect (middle), and both combined
(right). The significance stars indicate the post hoc results comparing the explanation conditions.


Table 12. Post hoc tests for the difficulty level predictor on participant reliance in Study II.


Comparison Estimate Std. Error z-ratio p -value


Easy - Medium 0.19 0.11 1.71 0.202
Easy - Hard 0.18 0.10 1.75 0.185
Medium - Hard -0.02 0.11 0.13 0.990


- p < 0 . 001; p < 0 . 01; * p < 0 . 05


4.2.7 Explanation styles. The results of the reliance model are described in Table 10. Figure 11
shows how the model predicts reliance for different explanations based on the difficulty levels and
AI correctness. Participants in the explanation conditions all have a significantly higher reliance on
the model compared to the baseline (all p < 0 . 001), which is confirmed in the post hoc tests (see
Table 11, all p < 0 . 001). There is also a significant difference in reliance between partial conditions
and full explanations ( p < 0 . 001).


4.2.8 Task difficulty and AI Correctness. Contrary to Study I, the difference in reliance between
the task difficulties is not significant (see Table 12 for the post hoc comparisons). There is also no
significant difference in reliance between correct and incorrect suggestions.


4.2.9 Personality Traits. Evaluating the measured personality traits, we find no significant correlation between reliance and NFC ( p = 0 . 066). Splitting the data into tasks where the suggestions
are correct and those where they are incorrect shows a correlation between NFC and the reliance
on correct suggestions ( r (208) = 0.14, p = 0.042). Reading proficiency correlates with reliance on
correct AI decisions ( r (208) = 0.18, p = 0.010) and all AI decisions ( r (208) = 0.17, p = 0.016).


4.2.10 Perceived Usefulness, Confidence, Difficulty. We next assess participants' perceived usefulness of the AI, the confidence they placed in the AI, and their perception of task difficulty. As we
are interested in participants' perceptions across all tasks, we first summarise participants' individual ratings for the following calculations. Mean scores for perceived task difficulty ( M = 2 . 72,
SD = 1 . 09), confidence in the AI ( M = 2 . 90, SD = 1 . 11), and perceived usefulness of the
AI ( M = 2 . 93, SD = 1 . 11) indicate that participants generally appreciated the AI assistance.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:21


See Figure 12 for an overview of the participant perceptions, grouped by correct and incorrect AI
suggestions. Aligned ranks transformation ANOVAs only yield significant differences between
correct and incorrect AI suggestions for the usefulness (F(1) = 6.50, p < 0 . 011) but not the perceived
confidence and difficulty. A pairwise Tukey post hoc test confirms the difference in usefulness
( p < 0 . 011). The general appreciation of the AI assistance is confirmed by the post-experiment
measures, showing high mean satisfaction with the AI explanations ( M = 3 . 88, SD = 0 . 85) and
overall trust in the suggestions ( M = 2 . 82, SD = 0 . 85). Participant satisfaction is higher for full
explanations ( M = 4 . 15, SD = 0 . 74) and partial explanation conditions ( M = 3 . 95, SD = 0 . 78)
compared to the baseline ( M = 3 . 57, SD = 0 . 90). Trust is also higher for full ( M = 3 . 31,
SD = 0 . 64) and partial explanations ( M = 2 . 78, SD = 0 . 76) compared to the baseline ( M = 2 . 43,
SD = 0 . 89).


Confidence


Useful


Difficult


AI Correct


AI Incorrect


100% 50% 0% 50% 100%


100% 50% 0% 50% 100%


Not at all Extremely


Fig. 12. Self-reported confidence in answers, perceived usefulness of the AI, and perceived task difficulty on
five-point Likert scales in Study II. Graphs split based on the correctness of the AI suggestions.


4.2.11 Correlational analysis. Using Pearson correlation, we find a strong significant correlation
between participants' confidence in the AI and its perceived usefulness, r (208) = 0.91, p < 0.001. In
contrast, we find a negative correlation between the perceived usefulness of the AI and perceived
task difficulty ( r (208) = -0.20, p = 0.0029), as well as between confidence in the AI and perceived
task difficulty ( r (208) = -0.23, p < 0.001). Participants' overall satisfaction with the explanations is
correlated with their confidence in the explanations ( r (208) = 0.30, p < 0.001), perceived usefulness
of the AI ( r (208) = 0.30, p < 0.001) and negatively correlated with perceived task difficulty ( r (208) =
-0.16, p = 0.024). Trust has a strong positive correlation with confidence in the AI ( r (208) = 0.73,
p < 0.001), usefulness of the suggestions ( r (208) = 0.68, p < 0.001), and satisfaction ( r (208) = 0.30,
p < 0.001). We present the distribution of responses in Figure 13, highlighting both the relation to
the correctness of answers (Figure 13-a) and reliance on the AI suggestions (Figure 13-b).


4.2.12 Character traits. Finally, we evaluate the relationship between participants' character traits
and their perceptions of the AI suggestions. We find a significant correlation between participants'
NFC and their satisfaction with the suggestions ( r (208) = 0.14, p = 0.037). There is no significant
correlation between NFC and confidence in the suggestions ( p = 0 . 499), perceived usefulness
( p = 0 . 377), task difficulty ( p = 0 . 853), and trust in the AI system ( p = 0 . 269).
Furthermore, we find that reading proficiency is positively correlated with participant satisfaction with the suggestions ( r (208) = 0.15, p = 0.030) and trust in the AI system ( r (208) = 0.15,
p = 0.033). There is no correlation between reading proficiency and the usefulness of the explanations ( p = 0 . 409) or confidence in the explanations ( p = 0 . 109). We find a negative correlation


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:22 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


10


5


0


10


5


0


12345


Task difficulty Usefulness of AI Confidence in AI


(a)


12345


Task difficulty Usefulness of AI Confidence in AI


(b)


Fig. 13. Scatterplots of participants' perceptions of the task difficulty, AI's usefulness, and confidence in AI
(on a 5-point Likert scale) in Study II, in terms of the number of correct answers by the participants (a) and
the number of tasks for which they relied on the AI suggestions (b).


between participants' reading proficiency and perceived difficulty of the tasks ( r (208) = -0.32,
p < 0.001). The two character traits, NFC and reading proficiency are also significantly correlated
( r (208) = 0.15, p = 0.021).


# 5 Discussion

Our results indicate that participants' performance on AI-assisted tasks increases when they have
access to explanations (Table 1 and Table 7), confirming prior work on explanations [5, 8, 29,
34, 42, 56]. In line with these studies, participants' reliance on AI suggestions is higher when
accompanied by an explanation as compared to receiving a suggestion without an explanation
(Table 4 and Table 10). Additionally, we find that participants are significantly more likely to follow
AI suggestions when presented with a full explanation as compared to a partial explanation. The
increased reliance on AI suggestions accompanied by explanations is problematic when faced with
incorrect AI suggestions, previously described as overreliance [2, 6]. Our results further show that
participants' reliance on AI suggestions is affected by task complexity, as manipulated through
graph size in Study I and text difficulty in Study II. Although the explanation styles used in these
studies differ in the level of information provided, participant behaviour and reliance are similarly
affected by task complexity. Surprisingly, we find that participants' performance is significantly
lower for medium-difficulty tasks compared to easy- and hard-difficulty tasks in both studies. This
finding stresses the need for differentiating decision support based on task difficulty. We discuss
these results in more detail and relate them to the recent literature in the field.


# 5.1 Reducing Overreliance in AI-Assisted Decision-Making

We investigated the effect of different levels of explanations - no, partial, and full explanation - on
user reliance on AI suggestions. Partial explanations support the elucidating aspect of explanations
by highlighting part of the solution but simultaneously demanding a more active engagement with
the task at hand as compared to a full explanation. Enticing users to consider alternative options
has reduced anchoring bias in decision-making scenarios without AI assistance [44, 53]. Our results
show that partial explanations reduce overreliance on AI suggestions compared to full explanations
and reduce users' reliance across the board. A downside of the evaluated partial explanations


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:23


is the consequential underreliance on correct AI suggestions. Taken together, full explanations
outperform the partial explanation conditions, although the difference is not statistically significant
in Study I. Despite a lower overall performance, partial explanations can help to lower overall
reliance on AI suggestions, prevent blind acceptance of AI explanations, and thereby avoid relying
on incorrect suggestions. As AI support systems are far from perfect, this can be crucial in critical
contexts in which incorrect decisions significantly impact people's lives. For example, overreliance
on algorithms in criminal sentencing could lead to biased or unjust sentences, as they might
perpetuate existing biases in the criminal justice system. Similarly, AI systems used in medical
diagnosis may misdiagnose rare conditions or fail to consider a patient's unique circumstances.
In cybersecurity, solely relying on AI for cybersecurity can leave systems vulnerable to novel or
advanced attacks that AI systems may not recognise. These examples stress the importance of
providing users with adequate levels of support to interpret and correctly use AI recommendations
and outline the importance of building functioning human-AI teams.
Partial explanations align with a larger body of research on cognitive forcing that encourages
users to reflect on their decisions. Cognitive forcing has shown promising signs of reducing
overreliance on AI suggestions [6, 57]. In this study, we sought to increase task engagement by
concealing parts of the explanations to urge users to fill in the gaps or elaborate on the provided
information. Related work has withheld information from users in various ways. Vasconcelos et al.
presented explanations of varying salience to participants tasked with solving a maze. The
explanations were either written descriptions or highlighted paths through the maze. In contrast to
our results, they found that more salient explanations reduce overreliance on AI suggestions. This
can be explained by the fact that the salient explanations place emphasis on faulty AI reasoning.
Danry et al. asked participants to rate the logical validity of socially divisive statements as aided
by two types of explanations; one stating a causal explanation and the other posing a question to
prompt the participant to self-explain their thinking. The question-style explanations improved
the discernment accuracy of flawed statements. Similar to the partial explanations in this paper,
these methods obfuscate some parts of the explanation. By packaging the information in a question
or varying the salience of an explanation, participants are enticed to put in additional mental effort.
The incomplete paths and spelling suggestions, as presented in our studies, are only examples
of operationalising the concept of partial explanations. Possible avenues for future work include
exploring and assessing other partial explanation techniques. Examples include progressive disclosure, in which additional layers of information or complexity are gradually revealed as users engage
with the explanation, or a Socratic questioning approach to explanations, in which a conversational
agent presents thought-provoking questions to users rather than providing direct answers.
While the additional mental effort engages cognitive forcing, this can also pose an undesired
level of pressure on the user, especially for tasks demanding a high cognitive load. Higher perceived
difficulty of correct AI suggestions indicates that the task placed a significant cognitive load on
participants even when assisted by the correct answer. Although cognitive forcing interventions can
reduce overreliance, users tend to prefer simpler explanation styles. Our results similarly show
that users were more satisfied with the full explanations in our studies, which limited their required
cognitive efforts. Furthermore, Seymour and Such found that presenting incomplete explanations
can prevent users from forming a complete mental model of a system. While we did not
investigate this in our study, we expect that a further potential downside of partial explanations
is the additional time required to arrive at a solution as compared to full explanations. Bach et al.
presented clinicians with various cognitive forcing strategies to reduce anchoring bias and found
efficiency concerns among participants. Finally, we hypothesise that the limited visibility into a
model's reasoning could lead to lower confidence or trust in the predictions as compared to full


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:24 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


explanations. This highlights the various challenges of designing for reduced overreliance on AI
systems, considering user acceptance and explanation cohesion.


# 5.2 Context-Dependent Differences in Reliance Behaviour
We evaluated three levels of task difficulty following manipulation of the number of graph nodes
and text difficulty. We collected perceived difficulty ratings for each task, Ensuring that participants
perceived the easy tasks as the simplest ones. As expected, participants also scored best on these
tasks. Surprisingly, we found that participants performed better on the hard tasks than on the
medium-difficulty tasks. As participants' reliance on AI suggestions for the hard tasks was significantly higher than for the medium tasks in Study I, we hypothesise that participants were more
likely to follow AI suggestions for the hard tasks rather than attempt to provide their own answers.
This suggests that participants were more inclined to attempt to resolve the medium-level difficulty
tasks, resulting in more effort, higher frustration, and similarly higher perceived difficulty scores.
We did not replicate this discrepancy in reliance in Study II. This difference could be attributed to the
nature of the tasks: while harder-to-read texts may not be immediately recognised as challenging,
hard graphs are evidently more complex at first glance.
Our results indicate that HCI researchers must be wary of the generalisability of the effectiveness
of explanations across tasks with varying difficulty levels. While task difficulty is not typically
considered in studies on AI explanations, our results show that it significantly impacts user
reliance on AI suggestions. As users can be overwhelmed by more challenging tasks, they might
skip the accompanying explanation and rely solely on the AI suggestion. Future work may explore
how to break down explanations into smaller chunks that are more cognitively manageable to retain
user engagement with explanations of more complex tasks. Similarly, guiding users through an
explanation could be a way to support users in critically examining AI suggestions. Such guidance
may be adjusted based on user expertise [11, 47] or their cognitive state, balancing the increased
cognitive load of explanations with the dynamic requirements of users. The explanations' partiality
itself could also be varied based on the user's experience, as experienced professionals need different
support compared to novices and generally benefit less from its support. For example,
partial explanations could be employed in simulation training, where AI support needs to be
omnipresent at first to mimic the role of a supervisor but slowly diminish as the user's skill level
increases, applying varying levels of cognitive forcing to aid the training process.
Partial explanations are not a feasible solution for all explanation methods or contexts. For
example, explanations using local model interpretability such as LIME and SHAP are
already inherently partial, as they highlight a subset of the model's features; thus, full explanations
do not exist for these models. Similarly, there may be contexts for which the explanation cannot be
meaningfully partialised or where legal or ethical concerns prohibit systems from intentionally
leaving out information. Such scenarios may require other methods to engage cognitive forcing
and prevent users from unquestioningly following AI suggestions.
In Study I, task performance is significantly higher for those with higher NFC, while participants'
NFC does not impact overall reliance. NFC has a significant negative correlation with overreliance,
indicating that people who engage more with tasks rely less on incorrect AI suggestions and
consequently perform better. In Study II, participants with high NFC or reading proficiency rely
more on AI suggestions for tasks with correct suggestions and consequently score better. These
differences pose a challenge for the design of decision-making systems, as ways of engaging people
with AI-assisted tasks disproportionately benefit individuals with high NFC or reading proficiency.
These results mirror earlier attempts at using cognitive forcing in combination with explanations,
showing that participants receive an unequal benefit of forcing based on their NFC. This also
has methodological implications. As researchers frequently rely on student samples [10, 70] and


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:25


given the positive link between educational attainment and the development of NFC, student
samples are likely to have a higher than average NFC and reading proficiency. To expand the
generalisability of our work to the broader public, in which NFC and reading proficiency are more
diverse than in student populations, researchers must carefully consider their recruitment practices.


# 5.3 Limitations & Future Work
We studied partial explanations in two distinct tasks among laypersons. While our tasks focus
on different areas of cognitive effort, we cannot generalise our results to other tasks or contexts.
For example, our tasks did not contain explicit time pressure, an aspect that has been shown
to lead to higher AI reliance. Furthermore, while we offered monetary incentives to entice
participants' efforts, the studied tasks are within non-critical domains, where mistakes do not lead
to severe damage. In critical domains, the explanations should be more carefully designed with
the context in mind, as a decreased overreliance on AI suggestions and increased cognitive
involvement could benefit experts in these domains from making rushed decisions. Additional
research is required to evaluate the effect of partial explanations in other contexts, as trust in AI
systems differs depending on task [15, 46, 48] and expertise [12, 47]. Future work could address the
generalisability based on expertise by collecting participants' domain expertise, familiarity with AI
systems, and general decision-making capabilities. While we used NFC to measure general cognitive
capability, we recognise that this approach does not directly capture participants' experience with
AI systems, background knowledge, or competence in specific tasks. Moreover, Bucinca et al. found
that engaging with explanations in proxy tasks does not always translate to the same behaviour in
real-world decision scenarios. While we acknowledge the differences between proxy tasks and
real-world decision-making, domain experts are susceptible to similar biases in their daily practice
as our study participants [19, 44].
Critically, the tasks in this study capture a single moment of human-AI interaction and consequently do not capture trust development over time. Studies on trust development over time show
that initial impressions are crucial [71, 78], indicating the relevance of even a single evaluation.
However, trust development is impacted by the positioning of errors in the sequence and by
the consistency of errors over multiple sessions. Longitudinal studies are therefore necessary
to evaluate the impact of these factors on the trust development of partial explanations. The impact
of task difficulty on participant performance and reliance is promising for experimentation with
varying explanations based on difficulty.


# 6 Conclusion

As AI-assisted decision-making is increasingly common, it is crucial for users to detect incorrect AI
suggestions. While explanations can provide users insight into the reasoning behind AI decisions,
our results show that this simultaneously introduces overreliance on AI suggestions. We find
that partial explanations can reduce reliance on AI suggestions as compared to contemporary full
explanations. While partial explanations reduced overreliance on incorrect AI suggestions, they
also reduced reliance on correct AI suggestions, which negatively impacted participants' overall
accuracy. This may be a favourable trade-off in critical domains where overreliance is detrimental
(e.g., medical diagnosis, cybersecurity, or law). In addition to the explanation styles, we evaluated
our explanations across three difficulty levels. Surprisingly, participants performed worse on the
medium-difficulty tasks than the hardest difficulty due to lower observed reliance. We hypothesise
that participants heavily relied on the AI suggestions for the hard tasks, whereas they were likelier
to attempt to complete the task at the medium-level tasks. Given AI's growing role in decision
support, we urge the HCI community to explore different approaches to reduce overreliance on AI
recommendations while carefully considering the impact of task specifics on user behaviour.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:26 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


# Acknowledgments
We would like to thank Rune Møberg Jacobsen for his input on the research design. This work is
supported by the Carlsberg Foundation, grant CF21-0159.


# References

 Anne Kathrine Petersen Bach, Trine Munch Nørgaard, Jens Christian Brok, and Niels van Berkel. 2023. "If I Had
All the Time in the World": Ophthalmologists' Perceptions of Anchoring Bias Mitigation in Clinical AI Support.
In Proceedings of ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'23). Article 16, 14 pages.
doi:10.1145/3544548.3581513
 Gagan Bansal, Tongshuang Wu, Joyce Zhou, Raymond Fok, Besmira Nushi, Ece Kamar, Marco Tulio Ribeiro, and Daniel
Weld. 2021. Does the Whole Exceed its Parts? The Effect of AI Explanations on Complementary Team Performance. In
Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (Yokohama, Japan) (CHI '21) . Association
for Computing Machinery, New York, NY, USA, Article 81, 16 pages. doi:10.1145/3411764.3445717
 Douglas Bates, Martin Machler, Ben Bolker, and Steve Walker. 2015. Fitting Linear Mixed-Effects Models Using lme4.
Journal of Statistical Software 67, 1 (2015), 1-48. doi:10.18637/jss.v067.i01
 Benjamin M. Bolker, Mollie E. Brooks, Connie J. Clark, Shane W. Geange, John R. Poulsen, M. Henry H. Stevens, and
Jada-Simone S. White. 2009. Generalized linear mixed models: a practical guide for ecology and evolution. Trends in
Ecology & Evolution 24, 3 (2009), 127-135. doi:10.1016/j.tree.2008.10.008
 Zana Bucinca, Phoebe Lin, Krzysztof Z. Gajos, and Elena L. Glassman. 2020. Proxy Tasks and Subjective Measures
Can Be Misleading in Evaluating Explainable AI Systems. In Proceedings of the 25th International Conference on
Intelligent User Interfaces (Cagliari, Italy) (IUI '20) . Association for Computing Machinery, New York, NY, USA, 454-464.
doi:10.1145/3377325.3377498
 Zana Bucinca, Maja Barbara Malaya, and Krzysztof Z. Gajos. 2021. To Trust or to Think: Cognitive Forcing Functions
Can Reduce Overreliance on AI in AI-Assisted Decision-Making. Proc. ACM Hum.-Comput. Interact. 5, CSCW1, Article
188 (2021), 21 pages. doi:10.1145/3449287
 Andrea Bunt, Matthew Lount, and Catherine Lauzon. 2012. Are explanations always important? A study of deployed,
low-cost intelligent interactive systems. International Conference on Intelligent User Interfaces, Proceedings IUI (2012).
doi:10.1145/2166966.2166996
 Adrian Bussone, Simone Stumpf, and Dympna O'Sullivan. 2015. The Role of Explanations on Trust and Reliance in
Clinical Decision Support Systems. In 2015 International Conference on Healthcare Informatics . 160-169. doi:10.1109/
ICHI.2015.26
 John Cacioppo and Richard Petty. 1982. The Need for Cognition. Journal of Personality and Social Psychology 42 (1982),
116-131. doi:10.1037/0022-3514.42.1.116
 Kelly Caine. 2016. Local Standards for Sample Size at CHI. In Proceedings of the 2016 CHI Conference on Human Factors
in Computing Systems (San Jose, California, USA) (CHI '16) . Association for Computing Machinery, New York, NY,
USA, 981-992. doi:10.1145/2858036.2858498
 Francisco Maria Calisto, Joao Fernandes, Margarida Morais, Carlos Santiago, Joao Maria Abrantes, Nuno Nunes, and
Jacinto C. Nascimento. 2023. Assertiveness-based Agent Communication for a Personalized Medicine on Medical
Imaging Diagnosis. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Hamburg,
Germany) (CHI '23) . Association for Computing Machinery, New York, NY, USA, Article 13, 20 pages. doi:10.1145/
3544548.3580682
 Francisco Maria Calisto, Nuno Nunes, and Jacinto C. Nascimento. 2022. Modeling adoption of intelligent agents in
medical imaging. International Journal of Human-Computer Studies 168 (2022), 102922. doi:10.1016/j.ijhcs.2022.102922
 Francisco Maria Calisto, Carlos Santiago, Nuno Nunes, and Jacinto C. Nascimento. 2022. BreastScreening-AI: Evaluating
medical intelligent agents for human-AI interactions. Artificial Intelligence in Medicine 127 (2022), 102285. doi:10.1016/
j.artmed.2022.102285
 Shiye Cao, Catalina Gomez, and Chien-Ming Huang. 2023. How Time Pressure in Different Phases of Decision-Making
Influences Human-AI Collaboration. Proc. ACM Hum.-Comput. Interact. 7, CSCW2, Article 277 (2023), 26 pages.
doi:10.1145/3610068
 Noah Castelo, Maarten W. Bos, and Donald R. Lehmann. 2019. Task-Dependent Algorithm Aversion. Journal of
Marketing Research 56, 5 (2019), 809-825. doi:10.1177/0022243719851788
 Federico Maria Cau, Hanna Hauptmann, Lucio Davide Spano, and Nava Tintarev. 2023. Effects of AI and Logic-Style
Explanations on Users' Decisions under Different Levels of Uncertainty. ACM Trans. Interact. Intell. Syst. (2023).
doi:10.1145/3588320
 Irene Chen, Peter Szolovits, and Marzyeh Ghassemi. 2019. Can AI Help Reduce Disparities in General Medical and
Mental Health Care? AMA Journal of Ethics 21 (2019), E167-179. doi:10.1001/amajethics.2019.167


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:27

 Pat Croskerry. 2003. Cognitive forcing strategies in clinical decisionmaking. Annals of Emergency Medicine 41, 1 (2003),
110-120. doi:10.1067/mem.2003.22
 Pat Croskerry. 2003. The Importance of Cognitive Errors in Diagnosis and Strategies to Minimize Them. Academic
medicine : journal of the Association of American Medical Colleges 78 (2003), 775-80. doi:10.1097/00001888-20030800000003
 Valdemar Danry, Pat Pataranutaporn, Yaoli Mao, and Pattie Maes. 2023. Don't Just Tell Me, Ask Me: AI Systems
That Intelligently Frame Explanations as Questions Improve Human Logical Discernment Accuracy over Causal AI
Explanations. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Hamburg, Germany)
(CHI '23) . Association for Computing Machinery, New York, NY, USA, Article 352, 13 pages. doi:10.1145/3544548.3580672
 Berkeley Dietvorst, Joseph Simmons, and Cade Massey. 2014. Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err. Journal of experimental psychology. General 144 (2014). doi:10.1037/xge0000033
 Benjamin D. Douglas, Patrick J. Ewell, and Markus Brauer. 2023. Data quality in online human-subjects research:
Comparisons between MTurk, Prolific, CloudResearch, Qualtrics, and SONA. PLOS ONE 18, 3 (2023), 1-17. doi:10.
1371/journal.pone.0279720
 Jessica Maria Echterhoff, Matin Yarmand, and Julian McAuley. 2022. AI-Moderated Decision-Making: Capturing and
Balancing Anchoring Bias in Sequential Decision Tasks. In Proceedings of the 2022 CHI Conference on Human Factors in
Computing Systems (New Orleans, LA, USA) (CHI '22) . Association for Computing Machinery, New York, NY, USA,
Article 161, 9 pages. doi:10.1145/3491102.3517443
 Angela Fagerlin, Brian J. Zikmund-Fisher, Peter A. Ubel, Aleksandra Jankovic, Holly A. Derry, and Dylan M. Smith.
2007. Measuring Numeracy without a Math Test: Development of the Subjective Numeracy Scale. Medical Decision
Making 27, 5 (2007), 672-680. doi:10.1177/0272989X07304449
 Adrian Furnham and Hua Chu Boo. 2011. A literature review of the anchoring effect. The Journal of Socio-Economics
40, 1 (2011), 35-42. doi:10.1016/j.socec.2010.10.008
 Krzysztof Z. Gajos and Lena Mamykina. 2022. Do People Engage Cognitively with AI? Impact of AI Assistance
on Incidental Learning. In 27th International Conference on Intelligent User Interfaces (Helsinki, Finland) (IUI '22) .
Association for Computing Machinery, New York, NY, USA, 794-806. doi:10.1145/3490099.3511138
 Maliheh Ghajargar, Jeffrey Bardzell, Alison Marie Smith-Renner, Kristina Hook, and Peter Gall Krogh. 2022. Graspable
AI: Physical Forms as Explanation Modality for Explainable AI. In Sixteenth International Conference on Tangible,
Embedded, and Embodied Interaction (Daejeon, Republic of Korea) (TEI '22) . Association for Computing Machinery,
New York, NY, USA, Article 53, 4 pages. doi:10.1145/3490149.3503666
 Adele Eskeles Gottfried, Karen Nylund-Gibson, Allen W. Gottfried, Diane Morovati, and Amber M. Gonzalez. 2017.
Trajectories from academic intrinsic motivation to need for cognition and educational attainment. The Journal of
Educational Research 110, 6 (2017), 642-652. doi:10.1080/00220671.2016.1171199
 Ben Green and Yiling Chen. 2019. The Principles and Limits of Algorithm-in-the-Loop Decision Making. Proc. ACM
Hum.-Comput. Interact. 3, CSCW, Article 50 (2019), 24 pages. doi:10.1145/3359152
 H. P. Grice. 2002. Logic and conversation. MIT Press, Cambridge, MA, US. 719-732 pages.
 David Gunning. 2019. DARPA's Explainable Artificial Intelligence (XAI) Program. In Proceedings of the 24th International
Conference on Intelligent User Interfaces (Marina del Ray, California) (IUI '19) . Association for Computing Machinery,
New York, NY, USA, ii. doi:10.1145/3301275.3308446
 J. Hair, R. Anderson, and B. Babin. 2009. Multivariate Data Analysis (7 ed.). Prentice Hall.
 Gaole He, Lucie Kuiper, and Ujwal Gadiraju. 2023. Knowing About Knowing: An Illusion of Human Competence Can
Hinder Appropriate Reliance on AI Systems. In Proceedings of the 2023 CHI Conference on Human Factors in Computing
Systems . ACM. doi:10.1145/3544548.3581025
 M. Jacobs, M. Pradier, T. McCoy, P. Roy, F. Doshi-Velez, and G. Krzysztof. 2021. How machine learning recommendations
influence clinician treatment selections: example of antidepressant selection. Translational Psychiatry 1 (2021), 1-9.
doi:10.1038/s41398-021-01224-x
 Elaheh Jafari and Julita Vassileva. 2023. Ethical issues in explanations of personalized recommender systems. In Adjunct
Proceedings of the 31st ACM Conference on User Modeling, Adaptation and Personalization (Limassol, Cyprus) (UMAP '23
Adjunct) . Association for Computing Machinery, New York, NY, USA, 215-219. doi:10.1145/3563359.3597383
 Patricia K. Kahr, Gerrit Rooks, Chris Snijders, and Martijn C. Willemsen. 2024. The Trust Recovery Journey. The Effect
of Timing of Errors on the Willingness to Follow AI Advice.. In Proceedings of the 29th International Conference on
Intelligent User Interfaces (Greenville, SC, USA) (IUI '24) . Association for Computing Machinery, New York, NY, USA,
609-622. doi:10.1145/3640543.3645167
 Sunnie S. Y. Kim, Elizabeth Anne Watkins, Olga Russakovsky, Ruth Fong, and Andres Monroy-Hernandez. 2023. "Help
Me Help the AI": Understanding How Explainability Can Support Human-AI Interaction. In Proceedings of the 2023
CHI Conference on Human Factors in Computing Systems (Hamburg, Germany) (CHI '23) . Association for Computing
Machinery, New York, NY, USA, Article 250, 17 pages. doi:10.1145/3544548.3581001


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:28 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel

 J. Peter Kincaid, Robert P. Jr. Fishburne, Richard L. Rogers, and Brad S. Chissom. 1975. Derivation Of New Readability
Formulas (Automated Readability Index, Fog Count And Flesch Reading Ease Formula) For Navy Enlisted Personnel .
Technical Report 56. Institute for Simulation and Training.
 Rene F. Kizilcec. 2016. How Much Information? Effects of Transparency on Trust in an Algorithmic Interface. In
Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (San Jose, California, USA) (CHI '16) .
Association for Computing Machinery, New York, NY, USA, 2390-2395. doi:10.1145/2858036.2858402
 Derek Koehler. 1991. Explanation, Imagination, and Confidence in Judgment. Psychological bulletin 110 (1991), 499-519.

doi:10.1037//0033-2909.110.3.499
 Naja Kathrine Kollerup, Martin Grønnebæk Tolsgaard Stine S. Johansen, Mikkel Lønborg Friis, Mikael B. Skov, and
Niels van Berkel. 2024. Clinical needs and preferences for AI-based explanations in clinical simulation training.
Behaviour & Information Technology (2024), 1-21. doi:10.1080/0144929X.2024.2334852
 Vivian Lai and Chenhao Tan. 2019. On Human Predictions with Explanations and Predictions of Machine Learning
Models: A Case Study on Deception Detection. In Proceedings of the Conference on Fairness, Accountability, and
Transparency (Atlanta, GA, USA) (FAT* '19) . Association for Computing Machinery, New York, NY, USA, 29-38.
doi:10.1145/3287560.3287590
 Vivian Lai, Yiming Zhang, Chacha Chen, Q. Vera Liao, and Chenhao Tan. 2023. Selective Explanations: Leveraging
Human Input to Align Explainable AI. Proc. ACM Hum.-Comput. Interact. 7, CSCW2, Article 357 (2023), 35 pages.
doi:10.1145/3610206
 Kathryn Ann Lambe, Gary O'Reilly, Brendan D Kelly, and Sarah Curristan. 2016. Dual-process cognitive interventions
to enhance diagnostic reasoning: a systematic review. BMJ Quality & Safety 25, 10 (2016), 808-820. doi:10.1136/bmjqs2015-004417
 John Lee and Katrina See. 2004. Trust in Automation: Designing for Appropriate Reliance. Human factors 46 (2004),
50-80. doi:10.1518/hfes.46.1.50.30392
 Min Kyung Lee. 2018. Understanding perception of algorithmic decisions: Fairness, trust, and emotion in response to
algorithmic management. Big Data & Society 5, 1 (2018), 2053951718756684. doi:10.1177/2053951718756684
 Jennifer M. Logg, Julia A. Minson, and Don A. Moore. 2019. Algorithm appreciation: People prefer algorithmic to human
judgment. Organizational Behavior and Human Decision Processes 151 (2019), 90-103. doi:10.1016/j.obhdp.2018.12.005
 Chiara Longoni and Luca Cian. 2022. Artificial Intelligence in Utilitarian vs. Hedonic Contexts: The "Word-of-Machine"
Effect. Journal of Marketing 86, 1 (2022), 91-108. doi:10.1177/0022242920957347
 Scott Lundberg, Bala Nair, Monica Vavilala, Mayumi Horibe, Michael Eisses, Trevor Adams, David Liston, Daniel Low,
Shu-Fang Newman, Jerry Kim, and Su-In Lee. 2018. Explainable machine-learning predictions for the prevention of
hypoxaemia during surgery. Nature Biomedical Engineering 2 (2018). doi:10.1038/s41551-018-0304-0
 Scott M. Lundberg and Su-In Lee. 2017. A unified approach to interpreting model predictions. In Proceedings of the 31st
International Conference on Neural Information Processing Systems (Long Beach, California, USA) (NIPS'17) . Curran
Associates Inc., Red Hook, NY, USA, 4768-4777.
 Shuai Ma, Ying Lei, Xinru Wang, Chengbo Zheng, Chuhan Shi, Ming Yin, and Xiaojuan Ma. 2023. Who Should I Trust:
AI or Myself? Leveraging Human and AI Correctness Likelihood to Promote Appropriate Trust in AI-Assisted DecisionMaking. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Hamburg, Germany) (CHI
'23) . Association for Computing Machinery, New York, NY, USA, Article 759, 19 pages. doi:10.1145/3544548.3581058
 Tim Miller. 2019. Explanation in Artificial Intelligence: Insights from the Social Sciences. Artificial Intelligence 267
(2019), 1-38. doi:10.1016/j.artint.2018.07.007
 Thomas Mussweiler, Fritz Strack, and Tim Pfeiffer. 2000. Overcoming the Inevitable Anchoring Effect: Considering
the Opposite Compensates for Selective Accessibility. Personality and Social Psychology Bulletin 26 (2000), 1142-1150.
doi:10.1177/01461672002611010
 Renata Mutalova, Roman Sarrazin-Gendron, Eddie Cai, Gabriel Richard, Parham Ghasemloo Gheidari, Sebastien Caisse,
Rob Knight, Mathieu Blanchette, Attila Szantner, and Jerome Waldispuhl. 2023. Playing the System: Can Puzzle Players
Teach Us How to Solve Hard Problems?. In Proceedings of the 2023 CHI Conference on Human Factors in Computing
Systems (Hamburg, Germany) (CHI '23) . Association for Computing Machinery, New York, NY, USA, Article 679,
15 pages. doi:10.1145/3544548.3581375
 Cecilia Panigutti, Andrea Beretta, Fosca Giannotti, and Dino Pedreschi. 2022. Understanding the Impact of Explanations
on Advice-Taking: A User Study for AI-Based Clinical Decision Support Systems. In Proceedings of the 2022 CHI
Conference on Human Factors in Computing Systems (New Orleans, LA, USA) (CHI '22) . Association for Computing
Machinery, New York, NY, USA, Article 568, 9 pages. doi:10.1145/3491102.3502104
 Saumya Pareek, Niels van Berkel, Eduardo Velloso, and Jorge Goncalves. 2024. Effect of Explanation Conceptualisations
on Trust in AI-assisted Credibility Assessment. Proceedings of the ACM on Human-Computer Interaction - CSCW (2024),
1-31. doi:10.1145/3686922


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


Reducing Overreliance on AI Systems Through Partial Explanations CSCW048:29

 Joon Park, Rick Barber, Alex Kirlik, and Karrie Karahalios. 2019. A Slow Algorithm Improves Users' Assessments of
the Algorithm's Accuracy. Proceedings of the ACM on Human-Computer Interaction 3 (2019), 1-15. doi:10.1145/3359204
 Ellen Peters, Daniel Vastfjall, Paul Slovic, C.K. Mertz, Ketti Mazzocco, and Stephan Dickert. 2006. Numeracy and
Decision Making. Psychological Science 17, 5 (2006), 407-413. doi:10.1111/j.1467-9280.2006.01720.x
 Amy Rechkemmer and Ming Yin. 2022. When Confidence Meets Accuracy: Exploring the Effects of Multiple Performance Indicators on Trust in Machine Learning Models. In Proceedings of the 2022 CHI Conference on Human Factors in
Computing Systems (New Orleans, LA, USA) (CHI '22) . Association for Computing Machinery, New York, NY, USA,
Article 535, 14 pages. doi:10.1145/3491102.3501967
 Valerie F. Reyna and Charles J. Brainerd. 2023. Numeracy, gist, literal thinking and the value of nothing in decision
making. Nature Reviews Psychology 2, 7 (2023), 421-439. doi:10.1038/s44159-023-00188-7
 Marco Ribeiro, Sameer Singh, and Carlos Guestrin. 2016. "Why Should I Trust You?": Explaining the Predictions of
Any Classifier. In Proceedings of the 2016 Conference of the North American Chapter of the Association for Computational
Linguistics: Demonstrations . Association for Computational Linguistics, San Diego, California, 97-101. doi:10.18653/v1/
N16-3020
 Alisa Rieger, Tim Draws, Mariet Theune, and Nava Tintarev. 2021. This Item Might Reinforce Your Opinion: Obfuscation
and Labeling of Search Results to Mitigate Confirmation Bias. In Proceedings of the 32nd ACM Conference on Hypertext
and Social Media (Virtual Event, USA) (HT '21) . Association for Computing Machinery, New York, NY, USA, 189-199.
doi:10.1145/3465336.3475101
 Sara Salimzadeh, Gaole He, and Ujwal Gadiraju. 2023. A Missing Piece in the Puzzle: Considering the Role of Task
Complexity in Human-AI Decision Making. In Proceedings of the 31st ACM Conference on User Modeling, Adaptation and
Personalization (Limassol, Cyprus) (UMAP '23) . Association for Computing Machinery, New York, NY, USA, 215-227.
doi:10.1145/3565472.3592959
 Timothee Schmude, Laura Koesten, Torsten Moller, and Sebastian Tschiatschek. 2023. On the Impact of Explanations on
Understanding of Algorithmic Decision-Making. In Proceedings of the 2023 ACM Conference on Fairness, Accountability,
and Transparency (Chicago, IL, USA) (FAccT '23) . Association for Computing Machinery, New York, NY, USA, 959-970.
doi:10.1145/3593013.3594054
 William Seymour and Jose Such. 2023. Ignorance is Bliss? The Effect of Explanations on Perceptions of Voice Assistants.
Proc. ACM Hum.-Comput. Interact. 7, CSCW1, Article 64 (2023), 24 pages. doi:10.1145/3579497
 Kacper Sokol and Peter Flach. 2020. Explainability Fact Sheets: A Framework for Systematic Assessment of Explainable
Approaches. In Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (FAT* '20) . Association
for Computing Machinery, New York, NY, USA, 56-67. doi:10.1145/3351095.3372870
 Kay M. Stanney, Dylan D. Schmorrow, Matthew Johnston, Sven Fuchs, David Jones, Kelly S. Hale, Ali Ahmad, and
Peter Young. 2009. Augmented Cognition: An Overview. Reviews of Human Factors and Ergonomics 5, 1 (2009), 195-224.
doi:10.1518/155723409X448062
 Maxwell Szymanski, Martijn Millecamp, and Katrien Verbert. 2021. Visual, Textual or Hybrid: The Effect of User
Expertise on Different Explanations. In 26th International Conference on Intelligent User Interfaces (College Station, TX,
USA) (IUI '21) . Association for Computing Machinery, New York, NY, USA, 109-119. doi:10.1145/3397481.3450662
 Benjamin Tag, Niels van Berkel, Sunny Verma, Benjamin Zi Hao Zhao, Shlomo Berkovsky, Dali Kaafar, Vassilis
Kostakos, and Olga Ohrimenko. 2023. DDoD: Dual Denial of Decision Attacks on Human-AI Teams. IEEE Pervasive
Computing 22 (2023), 77-84. Issue 1. doi:10.1109/MPRV.2022.3218773
 Amber Gayle Thalmayer, Cecilia Toscanelli, and Jeffrey Jensen Arnett. 2021. The neglected 95% revisited: Is American
psychology becoming less American? American Psychologist 76, 1 (2021), 116-129. doi:10.1037/amp0000622
 Suzanne Tolmeijer, Ujwal Gadiraju, Ramya Ghantasala, Akshit Gupta, and Abraham Bernstein. 2021. Second Chance
for a First Impression? Trust Development in Intelligent System Interaction. In Proceedings of the 29th ACM Conference
on User Modeling, Adaptation and Personalization (Utrecht, Netherlands) (UMAP '21) . Association for Computing
Machinery, New York, NY, USA, 77-87. doi:10.1145/3450613.3456817
 Amos Tversky and Daniel Kahneman. 1974. Judgment under Uncertainty: Heuristics and Biases. Science 185, 4157
(1974), 1124-1131. doi:10.1126/science.185.4157.1124
 Helena Vasconcelos, Matthew Jorke, Madeleine Grunde-McLaughlin, Tobias Gerstenberg, Michael S. Bernstein, and
Ranjay Krishna. 2023. Explanations Can Reduce Overreliance on AI Systems During Decision-Making. Proc. ACM
Hum.-Comput. Interact. 7, CSCW1, Article 129 (2023), 38 pages. doi:10.1145/3579605
 Danding Wang, Qian Yang, Ashraf Abdul, and Brian Y. Lim. 2019. Designing Theory-Driven User-Centric Explainable
AI. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI '19) .
Association for Computing Machinery, New York, NY, USA, 1-15. doi:10.1145/3290605.3300831
 Jacob O. Wobbrock, Leah Findlater, Darren Gergle, and James J. Higgins. 2011. The Aligned Rank Transform for
Nonparametric Factorial Analyses Using Only Anova Procedures. In Proceedings of the SIGCHI Conference on Human
Factors in Computing Systems (CHI '11) . Association for Computing Machinery, New York, NY, USA, 143-146. doi:10.


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.


CSCW048:30 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel


1145/1978942.1978963
 Helen Yannakoudakis, Øistein E Andersen, Ardeshir Geranpayeh, Ted Briscoe, and Diane Nicholls. 2018. Developing
an automated writing placement system for ESL learners. Applied Measurement in Education 31, 3 (2018), 251-267.
doi:10.1080/08957347.2018.1464447
 Ming Yin, Jennifer Wortman Vaughan, and Hanna Wallach. 2019. Understanding the Effect of Accuracy on Trust in
Machine Learning Models. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow,
Scotland Uk) (CHI '19) . Association for Computing Machinery, New York, NY, USA, 1-12. doi:10.1145/3290605.3300509
 Kun Yu, Shlomo Berkovsky, Ronnie Taib, Dan Conway, Jianlong Zhou, and Fang Chen. 2017. User Trust Dynamics: An
Investigation Driven by Differences in System Performance. In Proceedings of the 22nd International Conference on
Intelligent User Interfaces (Limassol, Cyprus) (IUI '17) . Association for Computing Machinery, New York, NY, USA,
307-317. doi:10.1145/3025171.3025219
 Yunfeng Zhang, Q. Vera Liao, and Rachel K. E. Bellamy. 2020. Effect of confidence and explanation on accuracy and
trust calibration in AI-assisted decision making. In Proceedings of the 2020 Conference on Fairness, Accountability, and
Transparency . ACM. doi:10.1145/3351095.3372852
 Miri Zilka, Holli Sargeant, and Adrian Weller. 2022. Transparency, Governance and Regulation of Algorithmic Tools
Deployed in the Criminal Justice System: A UK Case Study. In Proceedings of the 2022 AAAI/ACM Conference on AI,
Ethics, and Society (Oxford, United Kingdom) (AIES '22) . Association for Computing Machinery, New York, NY, USA,
880-889. doi:10.1145/3514094.3534200


Received January 2024; revised July 2024; accepted October 2024


Proc. ACM Hum.-Comput. Interact., Vol. 9, No. 2, Article CSCW048. Publication date: April 2025.