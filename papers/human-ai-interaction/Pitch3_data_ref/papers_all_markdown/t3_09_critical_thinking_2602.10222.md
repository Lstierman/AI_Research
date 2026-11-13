# Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making


# Harry Yizhou Tian

tian253@purdue.edu

Purdue University

West Lafayette, Indiana, USA


# Abstract


# Hasan Amin

hasanamin@purdue.edu

Purdue University

West Lafayette, Indiana, USA


# Ming Yin

mingyin@purdue.edu

Purdue University

West Lafayette, Indiana, USA


Despite the growing prevalence of human-AI decision making, the

human-AI team's decision performance often remains suboptimal,

partially due to insufficient examination of humans' own reasoning.

In this paper, we explore designing AI systems that directly analyze

humans' decision rationales and encourage critical reflection of

their own decisions. We introduce the AI-Assisted Critical Thinking
(AACT) framework, which leverages a domain-specific AI model's

counterfactual analysis of human decision to help decision-makers

identify potential flaws in their decision argument and support the

correction of them. Through a case study on house price predic
tion, we find that AACT outperforms traditional AI-based decision
support in reducing over-reliance on AI, though also triggering

higher cognitive load. Subgroup analysis reveals AACT can be par
ticularly beneficial for some decision-makers such as those very

familiar with AI technologies. We conclude by discussing the prac
tical implications of our findings, use cases and design choices of

AACT, and considerations for using AI to facilitate critical thinking.


# CCS Concepts


- Human-centered computing → Interactive systems and
tools ; Empirical studies in HCI .


# Keywords


AI-Assisted Decision-making, Critical Thinking, Human-AI Collab
oration, Appropriate Reliance


# ACM Reference Format:

Harry Yizhou Tian, Hasan Amin, and Ming Yin. 2026. Understanding the

Effects of AI-Assisted Critical Thinking on Human-AI Decision Making.

In Proceedings of the 2026 CHI Conference on Human Factors in Computing
Systems (CHI '26), April 13-17, 2026, Barcelona, Spain. ACM, New York, NY,

USA, 30 pages. https://doi.org/10.1145/3772318.3790785


# 1 Introduction


Artificial intelligence (AI) is increasingly deployed to assist human

decision making in high stake domains such as criminal justice

[34, 110], academic admissions, recruiting, and medical

diagnosis [17, 20, 70]. In this human-AI decision making paradigm,

AI acts as decision-support while human decision-makers make

their final decision. However, research found that humans tend


This work is licensed under a Creative Commons Attribution-NonCommercial
NoDerivatives 4.0 International License.

CHI '26, Barcelona, Spain

© 2026 Copyright held by the owner/author(s).

ACM ISBN 979-8-4007-2278-3/2026/04

https://doi.org/10.1145/3772318.3790785


to engage superficially towards the AI information [9, 14, 91], re
sulting in a lack of deeper thinking, and consequently inappropri
ate reliance on AI [14, 31, 65, 107, 108] and suboptimal human-AI

decision-making performance [9, 98, 101, 106]. Recognizing these

limits, researchers have begun to design AI-based decision sys
tems that encourage deeper engagement. For example, cognitive
forcing functions compel independent reasoning before advice is
revealed [14, 31]. " Hypothesis-driven XAI " presents evidence sup
porting and challenging different decisions instead of using AI

decision as recommendation. Other studies have examined

re-framing AI information from recommendation statements to

reflective questions, devils' advocate [22, 78], or constructive

dialogue between human and AI [77, 93, 94].

While these approaches encourage more deliberation and reflec
tion, they share a common limitation: they focus on promoting

reflection around the AI's outputs, but offer little direct, actionable
support for improving the human's critical reflection of their own
reasoning . This is because most interventions remain organized
around the AI's perspective : cognitive forcing functions shape when

or how much AI advice is revealed; hypothesis-driven XAI

and devil's advocate designs vary the evidence the AI provides;

and question-based or dialogue-based interfaces [77, 93, 94]

guide users through queries that trace the AI's own reasoning trajec
tory. Across these approaches, the internal reasoning processes that

humans rely on when forming a decision (i.e., their decision ratio
nale) are rarely elicited or modeled. Even when humans' reasoning

processes are solicited (e.g., in the human-AI deliberation frame
work or the Socratic deliberation method), they are used to

surface disagreements between humans and AI or to prompt large

language model interrogations that rely on broad world knowledge.

What remains missing is a domain-grounded, structured analysis

of the human's reasoning that can inform targeted, actionable cri
tique and revision. As humans' internal reasoning often contains

the very hidden assumptions, omissions, and inconsistencies that

undermine decision quality, the absence of AI systems capable

of providing rigorous, quantitative assessment of that reasoning

rooted in the specifics of the decision context represents a major

missed opportunity for improving human-AI decision making.

To address this gap, we propose the AI-Assisted Critical Thinking

(AACT) framework, which leverages AI to computationally analyze

and improve human's own decision making by encouraging criti
cal reflection on their reasoning processes. We build AACT upon

the Recognition/Metacognition model [24, 25], a framework for

real-world time-stressed decision making, and focus specifically

on assisting human decision makers in critiquing and correcting

their own decisions and arguments. In AACT, a domain-specific AI


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


model that is trained for the target decision context engages in counterfactual perspective-taking by adopting the human's perspective

and performing counterfactual analyses over the human's decision

arguments to identify meaningful critiques. This analysis enables

the AI to surface potential flaws in the human's decision arguments,

including incompleteness, unreliability, and conflict, and to prompt

targeted self-reflections of these flaws through counterfactual ques
tioning. Moreover, AACT also supports humans in correcting these

potential flaws through two mechanisms: AI-based correction suggestions, which presents AI's suggestions in revising their decision
arguments, and data-based triangulation, which introduces insights

from the AI's training data as external checks.

To comprehensively evaluate the effects of AI-Assisted Criti
cal Thinking on human-AI decision making, we instantiated the

AACT framework as a conversational AI system and conducted a

controlled user study on Prolific, using a house price prediction

task as a case study. Within this study, we compared AACT against

established human-AI decision making frameworks such as Ex
plainable AI (XAI) and Hypothesis-driven XAI, examining

outcomes such as decision accuracy, reliance on AI, task learning,

and participants' subjective perceptions of the AI assistance. Be
cause people's preferences for critical thinking may vary by context

and user characteristics, we further analyzed treatment effects

across participant subgroups defined by factors such as domain

knowledge and familiarity with AI.

Our results show that compared to traditional human-AI deci
sion making frameworks, AACT can be particularly effective in

reducing decision-makers' over-reliance on AI, though it may also

come at a cost of increased under-reliance on AI and heightened

mental demand. Moreover, we also find AACT to be more beneficial for certain subgroups of decision-makers -for example, AACT

mostly helps reduce over-reliance in decision-makers who are more

familiar with the decision domain, very familiar with AI, and more

educated. Our exploratory qualitative analysis further suggests that

AACT is often preferred by decision-makers that prioritize decision

autonomy and reflective thinking.

In summary, we make the following contributions in this paper:


(1) Theoretically, we adapt the Recognition/Metacognition (R/M)

model to human-AI decision making to propose AI-Assisted

Critical Thinking (AACT). Unlike prior reflection-oriented

approaches that focus on AI outputs, AACT provides domain
grounded, structured analysis of the human's own reasoning

and supports targeted refinement of that reasoning.

(2) Technically, we instantiate AACT as a conversational AI sys
tem, implementing its counterfactual reasoning components

and structured critique-and-correction workflows through

conversational user interfaces.

(3) Empirically, we conduct a controlled user study examining

AACT's effects on human-AI team decision accuracy, appro
priate reliance on AI, and cognitive load, and demonstrate

heterogeneous impacts across participant subgroups.

(4) Practically, we discuss real-world use cases and design impli
cations for leveraging AI to scaffold metacognitive reflection

on users' own reasoning, complementing existing reflection
based decision-support paradigms.


# 2 Related Work

# 2.1 Human-AI Team Decision Making


AI systems are increasingly integrated into high-stakes domains

such as medical diagnosis [17, 20, 70], criminal justice [34, 110], and

academic admissions, creating a new paradigm of human-AI

collaborative decision making. The promise of these systems is

to combine human expertise with AI's analytical capabilities to

achieve "complementarity," wherein the human-AI team outper
forms either human or AI alone in decision making. Yet, evidence

shows that such synergy often fails to materialize [9, 98, 101, 106].

A central obstacle is inappropriate reliance on AI advice. Overre
liance occurs when humans follow incorrect AI predictions [14, 31,

107], while underreliance describes ignoring correct AI suggestions

[65, 108]. These problems are exacerbated by cognitive biases, such

as anchoring [91, 105] and illusions of explanatory depth, that

distort how users interpret AI outputs.

One prominent approach to address reliance issues is to improve

humans' understandings of AI advice through AI explanations, or

Explainable AI . Techniques such as LIME, Anchors, and

Interpretable Decision Sets exemplify efforts to make model

reasoning more transparent. However, systematic reviews and em
pirical studies highlight mixed effectiveness: explanations can help

users predict model behavior or improve calibration, but

they can also mislead, act as "placebos," or inflate confidence with
out increasing accuracy [13, 37, 64]. Their utility often depends

on user expertise [36, 103], task complexity, and even fram
ing effects. Recent syntheses argue that explanations rarely

yield true complementarity and call for task-sensitive evaluation

of explanation utility [18, 40].


# 2.2 Facilitating Critical Reflection in

# Human-AI Decision Making


More recently, researchers have pointed out that a major limitation

in existing human-AI decision making is that people tend to engage

only superficially with AI outputs [9, 14, 91], resulting in a lack of

deeper thinking and inappropriate reliance towards AI [14, 31, 65,

107, 108]. To address this, various approaches have been developed

to foster more deliberate, reflective engagement and higher-order

thinking [26, 76, 111]. Broadly, these approaches fall into strategies

that alter when or what AI outputs are shown, or how AI information
is communicated, while in most cases reflection remains anchored
on the AI's perspective rather than the human's own reasoning .
One category of reflection-provoking approaches varies when or
what AI advice is revealed. For example, "cognitive forcing func
tions" prompt human decision-makers to think independently [14,

31] by requiring unaided judgments before revealing AI advice or

by offering only partial explanations [35, 93, 107]. While effective

in interrupting automatic acceptance of AI suggestions, they do

not directly engage with the human's internal reasoning; they sim
ply create conditions intended to trigger that reasoning. Another

approach of "hypothesis-driven XAI" proposes using AI to sur
face evidence for and against multiple possible hypotheses instead

of a single prediction. Studies show its effectiveness in reducing hu
mans' over-reliance on AI and improving prediction accuracy

when AI performance is low, yet the reflection it encourages


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


Approach Core Mechanism Elicit humans' Reveal AI's decision or Primary object of reflection

own rationale? rationale?


Cognitive Forcing Change when or how AI No Yes (delayed or partially) AI's advice vs. human's (hidden)

Functions advice is revealed thinking


Hypothesis-Driven Present evidence for and

XAI against multiple hypothe
ses


Devil's Advocate Provide counter-evidence

that opposes the human's

initial decision


No No (AI decision with
held; multiple rationales

shown)


No No (AI is set to op
pose; opposing rationale

shown)


Multiple AI hypotheses and sup
porting/opposing evidence


AI's opposition vs. human's ini
tial decision


Reflective Frame AI explanations as No (only reason
Questioning questions ing to AI's questions elicited)


No Reflective questions exposing

an AI-selected causal link

"[reason]→[decision]"


Socratic LLMs in Multi-turn guided ques
Education (e.g.,) tioning to scaffold prob
lem solving


Socratic LLMs for LLMs act as deliberation

Deliberation partner to interrogate the

human's hypothesis


Human-AI Dialogue about dis
Deliberation agreement in predic
tions/rationales


ExtendAI Provide LLM-generated

feedback to human deci
sion rationale


AACT (this work) Counterfactual analysis

of the human's decision

argument and structured

metacognitive support


Yes No Human's rationale viewed

through AI's questions (inter
rogative prompts not grounded

in domain-specific knowledge)


Yes Yes AI's decision/rationale vs. hu
man's decision/rationale


Yes No Human's rationale viewed

through AI's evaluative lens

(high-level feedback not

grounded in domain-specific

knowledge)


Yes No Human's own decision argu
ment (potential incompleteness,

unreliability, conflict issues,

grounded in domain-specific

model's counterfactual analysis)


No (only reason
ing to AI's questions elicited)


Maybe (incrementally re
vealed along with inter
actions with humans)


AI-generated tutoring questions

(often reflect AI's reasoning

path)


Table 1: A comparison of reflection-oriented approaches in human-AI decision making.


remains focused on competing AI-constructed evidence rather than

on examining the human's own decision argument. Likewise, the

"devil's advocate" approach uses AI to provide opposing arguments

that challenge the human's decision [22, 71, 78], but these argu
ments are typically derived from the AI's independent analysis

of the task, rather than from an understanding of the human's

reasoning structure.

Another line of work explores changing how AI information is

framed and presented [39, 47, 79, 99, 114]. It was shown that phras
ing explanations as reflective questions (e.g., " If [reason], does it follow that [decision]? ") instead of declarative statements can improve

humans' ability to detect logically flawed claims. Building on

this insight, the rapid expansion of large language models (LLMs)

in education and problem solving contexts [19, 53, 56, 74, 113] has

made the " Socratic LLMs " [4, 33, 54, 73]-systems that guide humans

through step-by-step reasoning by posing scaffolded questions-a

particularly prominent format for fostering critical reflection. These

Socratic interactions now appear in major commercial products

such as OpenAI's study mode, Gemini's Guided Learning mode

, and Claude for Education. However, whether in question
framed explanations or Socratic LLMs, the questions themselves

typically follow the AI's own reasoning trajectory (with Socratic

deliberation being an exception; discussed below). As such,

the AI effectively steers humans along an AI-chosen line of inquiry

and invites humans to reason with it, rather than meeting humans

where they are by adopting their (even incorrect) assumptions, re
constructing and diagnosing their argument, and systematically

helping them recover from various missteps in their own reasoning.

Most closely related to our work are a few very recent frame
works that explicitly elicit people's internal reasoning processes.

"Human-AI Deliberation" is one such framework in which hu
mans and AI engage in in-depth discussions about disagreements in

their decisions and rationales. However, the elicited human reason
ing is used primarily for surfacing divergences rather than diagnos
ing or correcting flaws within the reasoning itself, leaving humans

responsible for interpreting these discrepancies (e.g., by digesting

AI's justification) without structured support for metacognitive

critique. On the other hand, the ExtendAI framework proposed


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


in collects natural-language decision rationales from humans

and provides LLM-generated feedback, while the Socratic deliber
ation method proposed in also elicits humans' rationale and

engages them in reflective dialogues. Yet, in both cases, the feedback

or reflective dialogue is produced entirely through LLM prompt
ing, with no computational representation of the human's reasoning
structure or domain-grounded criteria for rigorously evaluating its

quality. As a result, the feedback often remains broad and generic,

drawing on the LLM's general world knowledge rather than on

a structured, quantitative assessment of the completeness, relia
bility, or internal consistency of humans' reasoning grounded in

domain-specific knowledge.

Table 1 provides a comparison of existing reflection-oriented

approaches in human-AI decision making. Across all approaches, re
flection is primarily organized around AI outputs-timing, content,

framing, or disagreements between AI and human decision-makers.

Human reasoning either remains a black box or, when elicited, is

used only for comparison or high-level feedback rather than for

domain-grounded, structured analysis. AACT fills this gap by evalu
ating arguments from within the human's own perspective -it elicits

the human's reasoning and models it computationally, adopts the

human's perspective, and leverages the domain-specific model's

reliable knowledge to perform counterfactual analysis over the hu
man's own argument and reveal where it breaks down. In doing so,

AACT goes beyond telling humans how the AI thinks but focuses

on providing context-specific, quantitative guidance on analyzing

how their own reasoning might fail, shifting the role of AI from an
information provider to a " thought partner ".


# 2.3 Critical Thinking Methods and Frameworks


Definitions of critical thinking include purposeful, self-regulatory

judgment and the ability to analyze and evaluate arguments
. To design AI assistance that promotes people's critical reflec
tion of their own reasoning, we leverage established methodology

and theories of critical thinking in education and clinical diagnosis.

Developing students' critical thinking skills is a long-standing goal

in education [8, 10], where methods include Socratic questioning,

which probes gaps in knowledge systematically, and structured

dialogue or debate, which encourages reflection and argumentation
. On the other hand, in clinical diagnosis, extensive research

studies the use of cognitive reasoning tools to improve clinical rea
soning and reduce diagnostic errors. Such techniques include

checklists aimed to de-bias the diagnosis [88, 104] or encourage

reflection, and guided reflection, which prompts clinicians to

consider supporting, opposing, and missing evidence for multiple

hypotheses [27, 55, 67, 80-83, 100].

The Recognition/Metacognition (R/M) model [24, 25] is partic
ularly relevant to our work, and is often used in time-stressed,

real-world tactical decision making. It describes decision making as

a two-stage process: rapid recognition through pattern matching,

followed by critiquing and correcting potential issues when war
ranted. Building on the foundations and history of critical thinking

research, our AI-Assisted Critical Thinking framework adapts prin
ciples of the R/M model, but also leverages questioning and

structured dialogue to further develop critical thinking.


# 3 AI-Assisted Critical Thinking: Framework

# and Instantiation


In this section, we introduce the AI-Assisted Critical Thinking

(AACT) framework. We start by providing an overview of the

" Recognition/Metacognition (R/M) model " [24, 25], which formally

describes the deliberate metacognitive processes and associated

critical thinking strategies. Then, we present the AACT framework,

which builds upon the R/M model and adapts the critique and correc
tion components by leveraging a domain-specific AI model to adopt

the human decision-maker's perspective and conduct counterfac
tual analysis of their reasoning, thereby supporting the critique and

correction of it. Finally, we discuss the design space underlying the

AACT framework and detail our instantiation of AACT as a con
versational AI system to facilitate human decision-makers' critical

thinking during decision making.


# 3.1 Theoretical Background: The

# Recognition/Metacognition Model


The Recognition/Metacognition (R/M) model [24, 25] is a frame
work that provides structured critical thinking strategies for deci
sion making under time pressure and uncertainty. In this model,

"recognition" refers to quick and intuitive decision making based on

pattern-based recognition. In contrast, "metacognition" is the un
derstanding and analysis of one's own decisions, such as critiquing

and correcting recognition-based judgments. More formally, the

R/M model includes four essential components:


 - Recognize : Corresponding to "recognition" stage of the R/M

model, given a decision making task, the decision-maker first

identifies possible evidence-conclusion relationships for the

task-that is, the patterns they use to map observed cues to

a decision (e.g., "when cue A is observed, decision B can be

inferred"), which constitute their decision " arguments ".

 - Critique : As part of the "metacognition" stage, given a de
cision and the arguments associated with it, the critiquing

process aims to identify problems within those arguments.

Three types of problems can be identified as a result of the

critiquing process: (1) Incompleteness : An argument is in
complete if there exists additional information that has not

been considered in the argument that may either confirm or

disconfirm their conclusion; (2) Unreliability : An argument

is unreliable if the link between evidence and conclusion is

based on unexamined or doubtful assumptions; and (3) Conflict : Conflicts in arguments occur when beyond the current

argument, there exist alternative arguments that provide

support for conflicting conclusions.

 - Correct : Following the critique of decision arguments, an
other metacognitive step involves decision-maker respond
ing to the problems identified. These corrections often in
volve decision-makers retrieving more information, both

internally and externally, and revisiting and revising their

assumptions. In doing so, decision-makers fill gaps in their

judgment, strengthen the reliability of their arguments, re
solve conflict among competing considerations, and even
tually formulate a single coherent, and potentially more

comprehensive argument.


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


 - Quick-test : This is a cost-benefit analysis that regulates

the initiation and duration of metacognition (i.e., critique

and correct), accounting for factors such as time pressure,

the uncertainty/novelty of the decision scenario, and the

stakes of the decision. For example, in high-stake tasks with

uncertainty, quick-test may deem metacognition and criti
cal thinking to be beneficial, while in time-stressed settings

where the decision-maker has high confidence, metacogni
tion may not be necessary and decisions can be made based

on immediate recognitional response.


The R/M model not only decomposes the metacognitive pro
cesses of critique and correction, but also provides a structured

categorization of reasoning flaws and correction strategies. This

makes it a well-suited foundation for AACT, where we support

and operationalize the metacognitives processes with AI assistance.

Moreover, the R/M model was developed for time-stressed decision

making scenarios with uncertainty, incomplete information, and

high-stake outcomes, and see application in tactical decision mak
ing and training. These conditions closely mirror many human-AI

decision making contexts, such as medical diagnosis or judicial judg
ments, where people often need to rapidly interpret information,

integrate cues, manage uncertainty, and avoid cognitive biases.


# 3.2 The AI-Assisted Critical Thinking

# Framework


Inspired by the R/M model, we present the AI-Assisted Critical

Thinking (AACT) framework which explicitly designs AI to fa
cilitate critical thinking and metacognition-that is, supporting

decision-makers in critiquing and correcting their own decisions

and arguments (see Figure 1 for an illustrative overview).

The key mechanism through which AACT supports critique and

correction of a decision-maker's internal reasoning is by engaging

an AI model in counterfactual perspective-taking (Section 3.2.1). This
involves two steps: (1) role playing, in which the AI model "adopts

the decision-maker's perspective" by taking their argument and

asking " If I follow the human's argument, how confident am I in the
human's decision? ", and (2) counterfactual analysis, in which the

AI perturbs elements of the human's argument and asks "what-if"

questions-" If I change this part of the human's argument, how would
that change my confidence in the human's decision or an alternative decision? " Leveraging counterfactual perspective-taking, the

AI model can identify potential issues of incompleteness, unreli
ability, and conflicts in the human's argument, and then enables

decision-makers to critique these identified issues by themselves

via counterfactual questioning (Section 3.2.2). To further help hu
man decision-makers correct these potential issues, the AI provides

its own suggestions and supplementary insights drawn from its

training data (Section 3.2.3).

Without loss of generality, we assume that a decision making

task can be characterized by N features ( X 1 , . . .,XN ). For a specific decision making task x = ( X 1 = v 1 ,X 2 = v 2 , . . .,XN = vN )
with a ground truth of y ∈Y = { Y 1 , . . .,YC }, we denote the

decision-maker's decision as yh ( h for human), which reflects their

recognition-based judgment of the task. To elicit the decision
maker's internal recognitional reasoning process, in AACT, we

first ask the decision-maker to select a subset of features in the task


as their argument, formalized as xh ⊆{ X 1 = v 1 ,X 2 = v 2 , . . .,XN =
vN }. For example, xh = { X 2 = v 2 ,XN = vN } means that the decision
maker concludes the decision is yh because of the features X 2 and
XN in task x . In addition, we also ask the decision-maker to rate
their confidence in their decision, denoted as ph = PH ( y = yh | xh )
that is, the decision-maker's belief about the likelihood of their
decision yh being correct based on their argument xh . Finally, to

support decision-maker's metacognitive processes, i.e., the critique

and correction of their recognition-based decision, the AACT frame
work leverages a domain-specific AI model m that is trained on a
dataset of S feature-decision pairs D = {( x i,yi )}| i [S] =1 [. We constrain]
the AI model to be a probabilistic classifier, i.e., it can predict the
probability PM ( y = y ['] | x ) for an input x belonging to any class
y ['] ∈Y (see Table 2 for a summary of key notations in AACT).


3.2.1 Engaging AI for Counterfactual Perspective-Taking. To enable

the AI model to perform counterfactual perspective-taking, we

leverage its probability function for role playing and counterfactual
analysis . In role playing, the AI adopts human's perspective by computing pm = PM ( y = yh | xh )-its confidence in the human's decision

given the human's argument. Then, the AI conducts counterfactual
analysis by evaluating perturbed arguments xh ['] [(derived from the] '
human's original argument xh ) and computing PM ( y = y [*] | xh [)][ for]
any possible decision y [*] . These computed probabilities will then

inform the critique and correction of the human's argument.
'
To compute PM ( y = yh | xh ) and PM ( y = y [*] | xh [)][, we effectively]
need to compute AI's confidence on any decision y [*] ∈Y given any
argument x [*] ⊆ x, i.e., PM ( y = y [*] | x [*] )-or for brevity, PM ( y [*] | x [*] ).
Although the AI model directly provides PM ( y [*] | x ) only for the full
feature set x, the quantity PM ( y [*] | x [*] ) can be obtained by marginalizing over the features not included in x [*], which we approximate

through Monte Carlo sampling (computation details can be found

in Appendix A.1).


3.2.2 AACT Supports for Critiquing Arguments. According to the

R/M model, the goal of the critiquing process is to identify incom
pleteness, unreliability, and conflict problems within the decision
maker's argument. Below, we describe how the AI model identify

these potential issues in the human decision-maker's argument

using its counterfactual perspective-taking results, and how these

findings are then used to prompt decision-makers to reflect on these

issues through targeted counterfactual questioning.

AI's identification of incomplete argument. The AI model can

identify incompleteness issues in arguments by identifying features

overlooked by the decision-maker that could significantly influence

its confidence in the human's decision yh . Specifically, for each

feature X j that is not included in the decision-maker's argument
(i.e., X j ∈ xh ), the AI model computes Δ pmxh + X j := PM ( yh | xh ∪
{ X j = v j }) - PM ( yh | xh ), which is the change of AI's confidence in

human's decision when including feature X j in human's argument.
We define a threshold parameter ε ∈[0 , 1] to determine if a change

is "substantial," and we note two cases of interests:

 - When Δ pmxh + X j > ε, it means that AI finds including the

overlooked feature X j into the argument would significantly


1The subscript in the probability function P (·) is used to differentiate whether the

probability is computed by the human decision-maker ("H"), the AI model ("M"), or

based on a dataset ("D").


|B Counterfactual Perspective-Taking<br>Living Area 2097<br>Overall Condition Good From my perspective, if my decision was<br>high price and my argument had the features<br>Price Sold high Living Area and Overall Condition, my<br>confidence would be 67%.<br>Confidence 67%<br>+ Bedrooms (3)<br>Bedrooms 3<br>If I added the Bedrooms feature to my<br>Living Area 2097 arguments, my confidence would increase by<br>11%. So I think Bedrooms might be an<br>Overall Condition Good important feature for this user.<br>Price Sold high<br>Confidence 78%|Col2|
|---|---|
|_Price Sold_high<br>_Living Area_2097<br>_Overall Condition_Good<br>Confidence                    67%<br>_Price Sold_high<br>_Living Area_2097<br>_Overall Condition _Good<br>Confidence                    78%<br>_Bedrooms_3<br>From my perspective, if my decision was<br>high price and my argument had the features<br>Living Area and_Overall Condition_, my<br>confidence would be 67%.<br>If I added the_Bedrooms_ feature to my<br>arguments, my confidence would increase by<br>11%. So I think_Bedrooms_ might be an<br>important feature for this user.<br>Counterfactual Perspective-Taking<br>B<br>+ Bedrooms (3)||


targeted self-reflection , supports revisions with AI-based correction suggestions , and enables data-based triangulation .


increase its confidence in the human's decision, thus X j can
be considered as a missing supporting feature that could be

used to further strengthen the decision-maker's argument.

 - In contrast, when Δ pmxh + X j < - ε, it means that AI finds

including the overlooked feature X j into the argument would
significantly decrease its confidence in the human's decision,
thus X j can be considered as a missing opposing feature that

might weaken the decision-maker's argument.


In both cases, the human decision-maker's own reasoning pro
cess may suffer from incompleteness issues.

AI's identification of unreliable argument. The AI model high

# lights reliability issues in arguments by identifying some features

# included in the decision-maker's argument that may not sufficiently

support their decision yh . Specifically, for each feature X j that is
included in the decision-maker's argument (i.e., X j ∈ xh ), the AI
model computes Δ pmxh - X j := PM ( yh | xh -{ X j = v j }) - PM ( yh | xh )-

the change of AI's confidence in human's decision when exclud
ing feature X j and its value from the decision argument. Similar

# as that in identifying incomplete arguments, we can characterize
the type of feature X j by comparing Δ pmxh - X j to the threshold ε .


Δ pmxh - X j > ε means removing feature X j from the argument increases AI's confidence in the human's decision; in this case, X j
can be considered as an unreliable feature that may counteract the
decision-maker's conclusion. However, if Δ pmxh - X j < - ε, then we

can infer that AI finds X j to be an important feature for supporting

the decision yh . That is, AI agrees with the decision-maker that it is
a reliable feature . Finally, when |Δ pmxh - X j | ≤ ε, it means removing

feature X j from the argument does not significantly change AI's

confidence in the human's decision; in this case, X j can be considered as an irrelevant feature since the link between it and the

conclusion is weak.

# If there exists some feature in the human's argument that is

# identified as unreliable or irrelevant, it implies that the human's

own reasoning may suffer from unreliability issues.

# AI's identification of conflicts in arguments. The AI model

# can also surface potential conflicting arguments by identifying

# new arguments different from the decision-maker's argument that

provide strong support for an alternative decision yc that is different

from the human's decision yh .


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


# Variable Type Description


yh Decision Human's decision


xh Argument Human's argument


ph = PH ( y = yh | xh ) Confidence Human's confidence in their decision given their argument


pm = PM ( y = yh | xh ) Confidence AI's confidence in human's decision given their argument

Δ pmxh + X j Change in Confidence Change in AI's confidence in human's decision when including feature X j

in human's argument


Δ phxh - X j Change in Confidence Change in AI's confidence in human's decision when excluding feature X j

from human's argument


ε System Parameter Threshold, between 0 and 1, to determine if a change in AI's confidence is

significant


yc Decision Alternative decision yc = yh


xc Argument The strongest argument for the alternative decision yc


pm [c] [=] [ P][M] [(] [y] [=] [ y][c] [|] [x][c] [)] Confidence AI's confidence in the alternative decision yc given its strongest argument

pd [*] [=] [ P][D] [(] [y] [=] [ y] [*] [|] [x] [*] [)] Confidence "Data's confidence" in a decision y [*] given an argument x [*], used in compu
tation for data-based triangulation.


Table 2: A summary of the key notations in AACT.


To generate strong conflicting arguments, for each alternative

decision yc = yh, AI can identify the "strongest argument" for that
'
decision xc = arg max xc ['] [⊆] [x] [P][M] [(] [y][c] [|] [x] c [)][, which is a subset of features]
such that when focusing only on their values, AI's confidence in

yc reaches the highest. In practice, searching through all possible
feature subsets to identify xc can be computationally challenging, so
we approximate the computation of xc using post-hoc explainable

AI methods (see Appendix A.2 for details).

With the argument identified for each alternative decision, AI

can rank them by pm [c] [=] [ P][M] [(] [y][c] [|] [x][c] [)][-its confidence in the alterative]

decision given its strongest argument-and compare the confidence

with the chance of a random guess (i.e., [If] [some] [alternative]

C [).]
decision and its associated argument satisfy pm [c] [>] C [, it means the]


AI's confidence in the alternative decision yc given its argument is

higher than taking a random guess, which may suggest the human's

own reasoning has conflict issues.

# Supporting decision-makers' critique of their own argument

via targeted self-reflection. Table 3 provides a summary of how

the AI model can use its counterfactual perspective-taking results to

identify different types of issues in the decision-maker's argument.

However, the essence of "critiquing" is enabling decision-makers

to recognize these issues themselves through critical reflection. To
support this, we introduce a " targeted self-reflection " mechanism

that uses counterfactual questioning to prompt decision-makers to

consider how their decision might change under specific hypothet
ical modifications to their argument. These hypothetical changes

are selected based on potential issues identified by the AI model, di
recting the decision-maker's attention to aspects of their reasoning

that may require more scrutiny. More specifically:


 - For incompleteness issues, when AI identifies X j as a miss
ing supporting feature or missing opposing feature, the

decision-maker is asked to reflect how adding feature X j

to their argument would change their own confidence in


their decision (i.e., to evaluate Δ phxh + X j := PH ( yh | xh + { X j =
v j }) - PH ( yh | xh )).

 - For unreliability issues, when AI identifies X j as an unreliable

feature or irrelevant feature, the decision-maker is asked

to reflect how removing feature X j from their argument

would change their own confidence in their decision (i.e., to
evaluate Δ phxh - X j := PH ( yh | xh -{ X j = v j }) - PH ( yh | xh )).

 - For conflict issues, for each of the top k alternative decision

yc that the AI model is most confident about (i.e., with the
highest pm [c] [), the decision-maker is asked to estimate their]

own confidence in the alternative decision yc when focusing
only on features in xc (i.e., to evaluate ph [c] [=] [ P][H] [(] [y][c] [|] [x][c] [)][) (] [k]

is a system parameter controlling the number of alternative

decisions for the decision-maker to reflect on).


See Figure 9 for an example user interface for targeted self-reflection

on incompleteness issues.

Via counterfactual questioning, the decision-maker is prompted

to closely examine specific parts of their argument and explicitly

articulate their underlying beliefs, which is an approach shown to

improve critical thinking. Crucially, targeted self-reflection is

elicited before the presentation of the AI's suggestions on argument

correction (see details in Section 3.2.3), ensuring that decision
makers are not biased by the AI's counterfactual analysis. This

design also implicitly stimulates the decision-maker's curiosity

about the AI's suggestions by making gaps in their knowledge

more salient, a strategy known to improve information com
prehension.


3.2.3 AACT Supports for Correcting Arguments. After critiquing

their decision argument, decision-makers then need to correct the

identified issues in their argument by revisiting and revising their

assumptions, which is typically enabled by retrieving additional

information either internally from their long-term memory (e.g.,


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


# Feature type Condition Critiqe type


missing supporting feature Δ pmxh + X j := PM ( yh | xh ∪{ X j = vj })        - PM ( yh | xh ) > ε Incompleteness


missing opposing feature Δ pmxh + X j := PM ( yh | xh ∪{ X j = vj }) - PM ( yh | xh ) < - ε Incompleteness


unreliable feature Δ pmxh - X j := PM ( yh | xh -{ X j = vj }) - PM ( yh | xh ) > ε Unreliability


irrelevant feature |Δ pmxh - X j | := | PM ( yh | xh -{ X j = vj }) - PM ( yh | xh ) | < ε Unreliability


reliable feature Δ pmxh - X j := PM ( yh | xh -{ X j = vj }) - PM ( yh | xh ) < - ε Unreliability


'

conflicting arguments pm [c] [:][=] [ P][M] [(] [y][c] [|] [x][c] [)] [>] C [,] [ for] [ y][c] [=] [y][h][,][ x][c] [=][ arg max] xc ['] [⊆] [x] [P][M] [(] [y][c] [|] [x] c [)] Conflict


Table 3: A summary of how an AI model can identify different types of issues in the decision-maker's argument using its
counterfactual perspective-taking results. xh is the decision-maker's argument, PM (·|·) gives the AI's confidence in a decision
given an argument, and ε ∈[0 , 1] is a parameter determining whether a change in confidence is sufficiently large.


their domain knowledge) or externally through further data and ob
servation. In AACT, we support this information retrieval process

through two mechanisms: AI-based correction suggestions, which

explain to decision-makers how and why AI recommends revis
ing the argument, and data-based triangulation, which provides

decision-makers with insights drawn from empirical patterns of

the AI model's training dataset as an additional source of infor
mation. See Figure 10 for an example user interface for AI-based

correction suggestions and Figure 11 for data-based triangulation.

AI-based correction suggestions. Recall that each hypothetical

argument change presented to decision-makers during targeted self
reflection is selected because the AI model associates that change

with a potential issue in the decision-maker's argument. In other

words, each hypothetical change corresponds to a possible correc
tion of the argument identified by the AI model. Thus, to support

the correction of decision argument, after decision-makers reflect

on a given hypothetical change, AACT directly presents them with

AI's "correction suggestions" that explains both what revision the
AI recommends and why it is needed. For example, when the hy
pothetical change involves a missing supporting feature X j, the

AI can justify its suggestion of including X j into the argument

by stating that "adding feature X j to the argument will boost the
confidence in the current decision by Δ pmxh + X j ". Conversely, if the

hypothetical change reveals an unreliable feature X j, the AI can

suggest removing it and explain that "excluding feature X j to the

argument will actually increase the confidence in the current decision by Δ pmxh - X j ". Through these explanations, the AI provides

decision-makers with additional information-derived directly from

its counterfactual analysis-about dependencies among features

and their impact on decision confidence, thereby supporting the

information retrieval process needed to correct their argument.

Data-based triangulation.

After completing self-reflection and reviewing the AI's correc
tion suggestions, decision-makers need to assess the trustworthi
ness of AI suggestions and decide how to act upon them. In practice,

it is common for decision-makers and AI models to hold different

beliefs (e.g., the decision-maker's estimate of how adding X j would


affect confidence in the current decision-Δ phxh + X j -may differ sub
stantially from AI's estimate, Δ pmxh + X j ). Reconciling this difference

often requires additional information. In AACT, we support this

reconciliation through data-based triangulation, which provides

empirical insights derived from the AI model's training dataset.
Specifically, for each probability PM ( y [*] | x [*] ) computed by the AI
model, we compute its empirical counterpart PD ( y [*] | x [*] ) by (1) se
lecting training data instances whose features match the values in
x [*] and (2) counting the fraction of those instances whose ground
truth decision is y [*] . Using these empirical probabilities, we can
then compute Δ pdxh + X j for incompleteness issues, Δ pdxh - X j for unreliability issues, and p [c]
d [for conflict issues][.]

Therefore, for each correction suggestion provided by the AI

model, the decision-maker can triangulate among their own beliefs
(e.g., Δ phxh + X j ), the AI's suggestions (e.g., Δ pmxh + X j ), and the empiri
cal data distributions (e.g., Δ pdxh + X j ), thereby forming a richer basis

for assessing trustworthiness of the AI's suggestions and decide

how to act upon them. For instance, a decision-maker may regard an

AI suggestion to include a feature in their argument as trustworthy
when Δ pmxh + X j aligns more closely with Δ pdxh + X j than their own

Δ phxh + X j does. Conversely, if the empirical data distribution appears

counterintuitive, the decision-maker may infer that the AI model's

training dataset is biased and withhold trust in AI suggestions, even

when they match the empirical distribution well. Ultimately, how

decision-makers interpret and act on this information is at their

discretion and lies beyond the scope of the AACT framework.


# 3.3 Design Space of the AACT Framework


In this section, we elaborate the design space underlying the opera
tionalization of AACT into a functional AI system. Specific choices

along different dimensions of this design space are highly context
dependent and may vary with factors such as the decision-maker's

efficiency in processing information, tolerance for cognitive load,

time constraints of the decision task, and decision stakes. Further


2In some cases, there may exist very few data instances in a dataset matching the
feature values specified in x [*], so the empirical probabilities generated may not be

meaningful. In this case, the system could report the corresponding data probabilities

as "not available."


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


discussions on how these choices may differ across applications,

informed by our user study findings, are provided in Section 6.2.


3.3.1 Workflow of Critique and Correction. As described in Sec
tion 3.2, for a specific issue identified by the AI model, the decision
maker generally proceeds through a structured, three-step critique
and-correction workflow of "targeted self-reflection → AI-based
correction suggestion → data-based triangulation" (see Figure 1C

for an illustrative example). However, when implementing AACT,

several higher-level workflow design choices must still be specified.

The first decision is the scope of critique : whether the AI should

focus exclusively on problematic aspects of the decision-maker's ar
gument and guide them through the critique-and-correction work
flow for all issues it identifies, or also highlights point of agreement,

such as those "reliable features" the AI considers to be sound.

A second design choice concerns the temporal structure in pre
senting various issues. When the AI model detects multiple issues

in the decision-maker's argument, they may be presented syn
chronously, prompting the decision-maker to consider all prob
lems holistically, or sequentially, requiring the decision-maker to

complete the critique-and-correction workflow for each issue one

at a time. If the issues are presented sequentially, a third design

choice is the order of presentation . One option is an "agreementto-disagreement order" (e.g., "agreement → incompleteness →
unreliability → conflict") : the AI first highlights the reliable fea
tures it shares with the decision-maker, then surfaces the incom
pleteness and unreliability issues with the aim of strengthening

the decision-maker's existing argument, and finally introduces al
ternative hypotheses that challenge and potentially disrupt the

decision-maker's reasoning. This approach aligns with the prin
ciples of Rogerian argumentation [96, 112], which recommends

acknowledging common ground first and gradually introducing

areas of divergence in argumentation. Another approach is to adopt

an adaptive order based on AI's confidence in the alternative decision (e.g., PM ( yc | x ) or PM ( yc | xc ))-for instance, AI could prioritize

presenting conflicting arguments if its confidence in the alterative

decision is high and prioritize highlighting agreement otherwise.

Another decision consideration in the AACT workflow concerns

when and how decision-makers may update their argument or decision . The system may restrict updates until all issues have been

presented, or it may allow granular updates, enabling decision
makers to revise their argument after each issue is considered. In

the latter case, a subsequent design choice is how to proceed after

each update. Two natural options are to (1) " continue," in which

the system re-identify and present issues for the revised argument

but limits this to issue types that have not yet been covered, or to

(2) " restart," requiring the system to fully re-analyze the revised

argument and present all types of issues again from the beginning.


3.3.2 System Parameters. AACT involves several tunable parame
ters, such as the threshold determining if a change in AI's confidence

is significant (i.e., ε ∈[0 , 1]) and the max number of alternative

decisions decision-makers are prompted to consider corresponding

to the AI-identified conflicts in argument (i.e., k ). Another implicit

parameter is max_feature_change, the max number of features

that can be simultaneously added to or removed from the decision
maker's argument in the counterfactual analysis (in Section 3.2.2,

we illustrate the case where max_feature_change= 1).


Setting these parameters to different values will impact the

decision-maker's interaction experience with an AACT system.

For example, a higher ε is generally associated with the system

identifying fewer issues for the decision-maker's argument, while

a lower ε is often associated with more detected issues. In addi
tion, larger k values will lead to the evaluation of more alterative

decisions, resulting in a more comprehensive critique of poten
tial conflict issues in one's argument. Finally, increasing the value

of max_feature_change allows the system to account for more

complex interactions between features in the counterfactual anal
ysis, but might also increase the difficulty for decision-makers to

understand its results.


3.3.3 Supports for quick-test. In Section 3.2, we describe how AACT

can facilitate the critiquing and correcting processes-the two metacog
nitive components in the R/M model-in decision making. Another

component in the R/M model that involves higher-order thinking

is the "quick-test", which determines whether the metacognitive

critical thinking process should be initiated and for how long it

should continue. Deciding whether and how to support quick-test

is another design choice in AACT. One option is to leave quick
test entirely to the decision-maker, allowing them to request for

AI supports in critiquing and correcting arguments on demand

only when they deem necessary. Alternatively, the system may

estimate the "seriousness" of each issue the AI model identifies

in the decision-maker's argument, and automatically trigger the

critique-and-correction workflow for issues that are most conse
quential. A most sophisticated option is to perform a utility analysis

that considers factors like decision stakes, time constraints, and

the confidence of both the decision-maker and the AI, and initiate

metacognitive processing only when the expected benefit of doing

so outweighs its cost.


# 3.4 Instantiating the AACT Framework as a

# Conversational AI System


Inspired by recent work leveraging dialogue to improve human-AI

interaction [79, 99] and promote critical thinking [1, 57, 77], we

instantiate the AACT framework as a conversational AI system.

Each component of the critique-and-correction workflow (i.e., tar
geted self-reflection, AI-based correction suggestions, data-based

triangulation) is delivered to decision-makers as chat messages that

are composed of fixed, pre-defined sentence templates with slots

dynamically filled with the AI model's counterfactual perspective
taking results (e.g., feature names, change in confidence) ; the full

list of templates are provided in supplementary materials Section

A. The decision-maker can then respond to these messages to re
flect and update their argument/decision through lightweight input

mechanisms including sliders, radio buttons, and checkboxes.


3The decision to use pre-defined templates to generate AI messages ensures that

every message is consistent, unambiguous, and tightly coupled to the underlying

counterfactual analysis. Compared to using LLMs to generate the conversational

messages, this approach avoids hallucinations and eliminates linguistic variability

and stylistic difference in the messages received by different decision-makers, thereby

isolating the behavioral effects of the AACT mechanisms themselves rather than

the writing quality or conversational style of an LLM. Nonetheless, we discuss in

Section 6.2.2 how future instantiations may incorporate LLMs to provide richer, more

adaptive conversational scaffolding.


Figure 2: Flowchart of our AACT implementation. (1) Middle panel: the main workflow of presenting the three types of issues

in decision-maker's argument, along with highlighting agreement between AI and human on reliable features. (2) Left panel:

the issues and their associated features are identified using AI's counterfactual perspective-taking results. (3) Right panel: For

the incompleteness, unreliability, and conflict stages, AACT engages decision-makers in the critique-and-correction workflow;

at the end of each stage, decision-makers can update their decision and argument.


Figure 2 presents the flowchart for the instantiation of the AACT

framework that we implemented for our user study. Given a de
cision making task, the system first collects the decision maker's
decision yh, argument xh, and decision confidence ph . Then, the AI

system identifies all issues in the decision-maker's argument using

the criteria listed in Table 3 and presents these issues to the decision
maker sequentially in the order of "agreement → incompleteness
→ unreliability → conflict". The initial "agreement" stage high
lights the reliable features on which the AI and the decision-maker

align; because no correction is needed, targeted self-reflection and

data-based triangulation are omitted at this stage. In the subsequent

incompleteness, unreliability, and conflict stages, the AI engages the

decision-maker in the full critique-and-correction workflow to ad
dress each type of issues in turn. Within each of these three stages,

the interaction between the AI system and the decision-maker un
folds following the "targeted self-reflection → AI-based correction
suggestion → data-based triangulation" workflow. Further, at the

end of each stage, the decision-maker may update their decision,

argument and confidence, and the AI's counterfactual analysis for

later stages is based on these updated decision and argument.

More specifically, in the incompleteness stage, the AI system

begins by prompting targeted self-reflection, asking the decision
maker, "How would your confidence change if you added the feature

X j to your argument?" The decision-maker can respond using a


slider (Figure 9). Then, the AI provides its correction suggestion

with a statement like "I think X j would strengthen/weaken your pre
diction, because adding the feature to your current evidence would
increase/decrease my confidence in your prediction by Δ pmxh + X j "

(Figure 10). To support triangulation, the system also presents a

side-by-side comparison showing how adding X j into the argument

affects the decision-maker, AI, and data's confidence in the current

decision (Figure 11). Finally, after reviewing all this information,

the decision-maker is asked whether they would like to make any

changes to their decision, arguments, or confidence, and they can

respond using quick input options (Figure 12).

The unreliability and conflict stages follow a dialogue structure

similar to that of the incompleteness stage. Specifically, for unreli
ability issues, our early implementation included AI's correction

suggestions on both unreliable and irrelevant features; however,

pilot user feedback indicated that this produced information over
load. Accordingly, the final system used in our user study focuses

only on critiques and corrections for unreliable features in the

decision-maker's argument. Targeted self-reflection is presented

as a question from AI "How would your confidence change if you

removed the feature X j from your argument?", and the correspond
ing correction suggestion is provided via messages like "I believe

X j may not reliably support your prediction, because removing the

feature from your current evidence would increase my confidence


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


in your prediction by Δ pmxh - X j ". For conflict issues, targeted self
reflection is prompted with the AI question "What would be your

confidence in the alternative prediction yc if you only considered
the features in xc ?", and the correction suggestion is provided by AI

stating that "I think the alternative prediction yc might be possible
when considering only the features in xc, as my confidence in yc is
pm [c] [when focusing only on these features."]

Note that any of the four stages may be skipped if the AI's coun
terfactual analysis does not identify the corresponding issue. How
ever, once a particular issue type is detected, the decision-maker

is required to complete the full critique-and-correction workflow

for that stage-that is, we do not apply the quick-test to skip stages

in our study, as our goal was to comprehensively evaluate all com
ponents of AACT in the user study. Finally, we set the system

parameters to ε = 0 . 04, k = 1, and max_feature_change= 1 to

balance the generation of meaningful and easily-understandable

critiques while controlling the number of them.


# 4 User study


To gain a comprehensive understanding of how AACT impacts

human-AI decision making, especially when compared with other

classical AI-based decision support systems, we designed and con
ducted a randomized user study on Prolific, which serves as a case

study to answer the following research questions:


 - RQ1 : How does AACT affect people's decision performance

and their reliance on AI assistance?

 - RQ2 : How does AACT facilitate people's learning of the

decision domain?

 - RQ3 : How does AACT shape people's experience, perceived

critical thinking ability and perceptions of AI in decision

making?

 - RQ4 : How do individuals with different characteristics re
spond to AACT differently?


# 4.1 Task and AI Model


In this study, we used a house sales prices prediction task as a case

study for decision making, based on the Ames Housing Dataset
, which contained 79 features and was originally prepared for

a regression problem. Similar to, we pre-processed the dataset

and selected 8 features: number of bedrooms, number of central AC,
number of fireplaces, overall material and finish, kitchen quality,
overall condition, age when sold, living area . To generate discrete

class labels, we converted the house sales price into three categories,

Low (less than $100,000), Medium ($100,000 to $200,000), and High

(more than $200,000), resulting in an imbalanced dataset with 237,

1837, and 857 instances in each class and 2930 instances in total.

In our user study, each participant was then asked to complete 20

house price prediction tasks, where in each task they were asked

to review the house information and predict whether its final sales

price is low, medium, or high.

We chose house sales price prediction as the decision making

task in our study because it offers a realistic, interpretable domain

in which laypeople may need assistance from AI but can still mean
ingfully reason and reflect without requiring specialized expertise.

The task provides enough structure for participants to form their


4This study was approved by the IRB of our institution.


own argument and engage in critical reflection, while also allow
ing them to easily understand the information provided by the AI.

Prior work in human-AI decision making has used this task [22, 69],

demonstrating its suitability for studying how people interact with

AI support in decision making. This task also aligns with the re
quirements of one of our comparison treatments, Analyzer, which

necessitates a multiclass decision making problem (see details in

Section 4.2).

For the AI model, we divided the Ames Housing Dataset into the

training and test set based on a 80:20 split, and trained a Logistic

Regression classifier on the training set as our AI model for the

prediction task. On the test set, our AI model had an accuracy of

0.874. More details about the dataset, the pre-processing procedure,

and the AI model are in Appendix C.1.


# 4.2 Treatments


We included 4 treatments in our user study, comparing AACT

against two established AI-based decision supports-AI as Recom
mender ( Recommender ) and hypothesis-driven XAI ( Analyzer )-

as well as a Human-only baseline where participants make deci
sions with no AI assistance:


 - Human-only : Participants make decisions on each task

with no AI assistance.

 - Recommender : On each task, AI assistance is provided

in the form of explicit decision recommendation from the

AI model, along with AI's feature importance explanations

for that decision (generated by the LIME method) and

confidence in that decision. This is the most common AI
based decision support used in practice [9, 14, 17, 20, 65,

70, 91, 108], built upon explainable AI (XAI) methods (see

supplementary materials Section B for example interface).

 - Analyzer : On each task, for each possible decision, the AI

model provides evidence for and against that decision, with
out showing its own prediction or confidence. We again used

LIME to generate supporting and opposing evidence for a

decision-features with positive (or negative) importance

score towards a decision are selected as the evidence for (or

against) that decision (see supplementary materials Section

B for example interfaces). This AI-based decision support is

an implementation of the hypothesis-driven XAI framework

proposed by Miller, which aims to help decision-makers

critically engage with AI outputs by presenting multiple hy
potheses simultaneously, though it does not actively support

decision-makers' reflection of their own reasoning.

 - AACT : On each task, AI assistance is provided in the form

of a guided conversation between the participant and AI to

critique and correct their own decision argument, as detailed

in Section 3 (see Figures 9, 10, 11 and 12 for interface exam
ples). Again, the AI model's own prediction, explanation or

confidence are not shown to the participant.


For all treatments, participants are asked to provide their deci
sion, select a subset of features in the task as their evidence/argument

for their decision, and rate their confidence in the decision in each

task. For treatments with AI assistance (i.e., Recommender, Ana
lyzer, and AACT), participants also have the option to update their

final decision after reviewing the assistive information from AI.


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


# 4.3 Procedure


Upon the arrival of our study, participants first review and sign a

consent form, and complete a short demographics survey including

questions on their familiarity with the task background (i.e., real

estate markets), familiarity with AI, need for cognition and more

(see Table 7 for a full list of questions in the demographic survey).

Then, participants are directed to a task instruction page pro
viding them a description of the house price prediction task and

detailing what they are asked to do in each task. After reviewing

the instruction, the participant is randomly assigned to one of the

4 treatments, and begins completing the 20 decision making tasks

that are sampled from the test set of the Ames Housing dataset.

While participants in the Human-only treatment complete all 20

decision making tasks in a single session, participants in the other

three treatments complete the tasks in the sequential stages:


(1) Pre-test : Participants first complete 5 tasks without receiv
ing any AI assistance.

(2) AI assistance tutorial : Participants go through a tutorial

explaining the AI assistance interface. For the AACT treat
ment, the tutorial explains key elements like how to update

one's decision confidence in targeted self-reflection, how

changes in confidence were computed (for AI-based correc
tion suggestion and data-based triangulation), and how to

interpret those changes.

(3) Tasks with intervention : Participants complete 10 tasks

with AI assistance, and the AI assistance format is deter
mined by the treatment assigned.

(4) Post-test : Finally, participants complete 5 tasks, again with
out receiving any AI assistance .


Lastly, after completing all decision making tasks, participants

are instructed to complete an exit survey to indicate their experi
ence when completing the decision making tasks (e.g., cognitive

load), their perceived critical thinking ability in decision mak
ing [61, 90], and their perception of AI assistance [22, 77, 78] (ex
cluded for the Human-only treatment). These survey questions are

adapted from previous literature and presented as a set of state
ments, where participants are asked to indicate their agreement

with them on a 5-point Likert scale from 1 (strongly disagree) to

5 (strongly agree). In addition, for the three treatments with AI

assistance, we also included a few open-ended questions, asking

participants to comment on why they find the AI assistance they

received to be helpful/not helpful. For participants in the Analyzer

or AACT treatments, they are further asked to explicitly indicate

whether they prefer the AI assistance they've received or an alter
native option where the AI model directly provides decision recom
mendation (i.e., the "Recommender") and why. We also include an

attention check question in the exit survey, asking participants to

select a pre-specified option. The full list of exit survey questions

can be found in Table 8.

The study was conducted on Prolific and restricted to U.S.-based

workers. Each participant could take the study only once and re
ceived $3.80 upon completion. To incentivize participants' best

decision performance, we provided participants who achieved an


5We made sure that in all three treatments, the AI model's accuracy in the 5 pre-test

tasks, 10 intervention tasks, and 5 post-test tasks are kept the same at 80%-closely

matching the AI model's overall accuracy on the test set.


80+% accuracy in the 20 decision making tasks a $1 bonus. In the

end, the study's median completion time was 25 minutes, yield
ing an effective hourly pay of $8.94 ($11.29 for participants who

received the bonus).


# 4.4 Measurements


Corresponding to our research questions, we defined metrics that

measure four key dimensions: decision performance, AI reliance,
learning, and subjective perceptions .


 - Decision performance : We used the accuracy of partici
pants' final decision in tasks 6-15 (where AI assistance in
tervention may be available) as our main metric to measure

decision performance. Since our dataset is imbalanced, we

also used balanced accuracy on these tasks, defined as the

average of recall for each class, to complement the results.

 - Reliance : Following previous literature on human-AI decision making [9, 48, 78, 108], we used agreement fraction
and switch fraction as general measurements on how often
humans follow AI advice. We also used over-reliance and
under-reliance ratios to measure the appropriateness of hu
mans' reliance towards on AI; over-reliance is the frequency

at which participants follow AI's incorrect decision while

under-reliance is the frequency that participants fail to fol
low AI's correct decision. Reliance metrics are computed for

tasks 6-15 and metric details are provided in Table 6.

 - Learning : We defined two metrics to capture possible do
main knowledge learning that may occur at different stages:

- Learning during intervention : We measured the change in
the participant's accuracy between the their initial deci
sion in the intervention stage (tasks 6-15) and the pre-test

stage (tasks 1-5). This reflects how participants' ability

to solve the decision task independently evolves while

engaging with AI assistance.

- Learning after intervention : We measured the change in

the participant's accuracy between the post-test (tasks

16-20) and the pre-test (tasks 1-5) stage. This shows how

AI assistance can prepare decision-makers to solve tasks

independently without future support.

Following previous literature [42, 84], we measured normal
ized change to reward improvements from high baselines.

Metric details are provided in Table 6.

 - Subjective Perceptions : Our subjective perception mea
surements were directly taken from participants' responses

in the exit survey (i.e., reported on a 5-point Likert scale),

and can be divided into three main categories:

- User experience : primarily concerning participants' confi
dence and cognitive load in decision making as measured

by the NASA TLX scale, including sub-components

mental demand, effort, and performance/efficacy.

- Perceived critical thinking abilities : participants' self-reported

ability to perform critical thinking in decision making, in
cluding their ability to conduct comprehensive evidence

evaluation, consider multiple perspectives, actively seek

counter-evidence, and explain their own decisions.


6We computed these metrics based on the withheld AI predictions for treatments

where AI predictions are not directly shown (i.e., Analyzer and AACT).


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


- AI perceptions : Participants' self-reported perceptions of

the AI assistance that they received in their treatment,

regarding AI's helpfulness, trustworthiness, understand
ability, and ability to provoke deep thinking and reflection.

Participants also rated on their decision autonomy when

receiving AI assistance, their satisfaction with the AI as
sistance, and their willingness to use the AI assistance in

the future.


# 4.5 Analysis Methods


To answer RQ1-RQ3, for each of the corresponding measures, we

start by performing an one-way ANOVA test across all treatments

followed by post-hoc pairwise comparisons using Tukey's HSD

test. For pairs of treatments with significant differences ( p < 0 . 05),

we report the effect size with Cohen's d . As our main interest is

in understanding the effects of AACT on various measurements,

in the paper, we mainly report pairwise comaprisons between the

AACT treatment and other treatments. To answer RQ4, we divided

participants into subgroups based on their demographics character
istics (e.g., their task familiarity and AI familiarity), and repeated

the analyses above within each subgroup.

Moreover, to gain qualitative insights into why decision-makers

may like or dislike AACT, we conducted an exploratory analysis of

the open-ended responses from participants in the AACT treatment,

when they were asked to compare AACT with an alternative format

of AI assistance where the AI model directly provides decision

recommendations. The first author of the paper performed open

coding of these responses, which were then clustered into higher
level themes following inductive thematic analysis methods.

We then reported the common themes identified along with some

example responses.


# 5 Results


In total, 405 Prolific workers participated in our study. 2 participants

did not complete all 20 decision tasks and 1 failed the attention check

question, leaving us the valid data from 402 participants (Human
only: 104, Recommender: 97, Analyzer: 97, AACT: 104). We include

the demographic details of our participants in Appendix C.3. We

then analyze this data to answer our research questions. Since no

significant results are found for RQ2 (effects on learning), we leave

it to Appendix D.1 and focus on the other three RQs here.


# 5.1 RQ1: Effects on Decision Performance and

# AI Reliance


5.1.1 Decision Performance. Figure 3 compares participants' deci
sion accuracy and balanced accuracy in tasks 6-15 across all four

treatments. The one-way ANOVA test suggests there is a signifi
cant difference across treatments in participants' decision accuracy

( F (3 , 398) = 5 . 704 , p = 0 . 001 ,η = 0 . 041). Pairwise comparison

results suggest the difference mainly came from the improvement

brought up by the Recommender and Analyzer treatments over

the Human-only treatment, and there was no significant differ
ences between AACT and other treatments. Interestingly, when

focusing on participants' balanced accuracy in tasks 6-15, we find

no significant difference across treatments ( F (3 , 398) = 1 . 643 , p =
0 . 179 ,η = 0 . 012). This implies that compared to the Human-only


treatment, various forms of AI assistance, including AACT, may

only improve participants' overall decision performance but not

their performance on those tasks with minority labels.


5.1.2 Reliance on AI. Figure 4 compares participants' reliance on

AI in tasks 6-15 across the three treatments with AI assistance.

We first focus on agreement and switch fractions, the two met
rics capturing participants' general tendency to rely on the AI

model's prediction. The one-way ANOVA tests yielded signifi
cant differences across treatments for both metrics (agreement

fraction: F (2 , 295) = 4 . 974 , p = 0 . 008 ,η = 0 . 033; switch fraction:
F (2 , 295) = 6 . 222 , p = 0 . 002 ,η = 0 . 04). The pairwise comparisons

further suggested that participants agreed with AI's predictions sig
nificantly less in the AACT treatment ( M = 0 . 684 ,SD = 0 . 177) than
those in the Recommender treatment ( M = 0 . 772 ,SD = 0 . 188; p =
0 . 005, Cohen's d = -0 . 485). In cases where participants' initial

decision differed from the AI model's prediction, participants also

switched to AI's prediction significantly less in the AACT treatment

( M = 0 . 243 ,SD = 0 . 319) compared to those in the Recommender
( M = 0 . 409 ,SD = 0 . 398; p = 0 . 005, Cohen's d = -0 . 461) or Analyzer
( M = 0 . 393 ,SD = 0 . 389; p = 0 . 012, Cohen's d = -0 . 423) treatments.

We then move on to examine participants' appropriateness in

their reliance on AI through over-reliance and under-reliance ratios

(lower is better). One-way ANOVA tests again revealed significant

differences across treatments for both metrics (over-reliance ra
tio: F (2 , 295) = 3 . 462 , p = 0 . 033 ,η = 0 . 023; under-reliance ratio
F (2 , 295) = 3 . 681 , p = 0 . 026 ,η = 0 . 024). Moreover, we find that
compared to participants in the Recommender treatment ( M =
0 . 67 ,SD = 0 . 353), those in the AACT treatment ( M = 0 . 543 ,SD =

0 . 342) relied on AI significantly less when AI's prediction was

wrong, leading to a significantly lower level of over-reliance on AI

( p = 0 . 035, Cohen's d = -0 . 365). In contrast, participants of the
AACT treatment ( M = 0 . 281 ,SD = 0 . 191) relied on AI significantly
less than those in the Recommender treatment ( M = 0 . 202 ,SD =

0 . 195) when AI's prediction was correct, leading to a significantly

higher level of under-reliance on AI ( p = 0 . 019, Cohen's d = 0 . 409).

In other words, our results indicate that AACT is highly effective

in reducing decision-makers' over-reliance on AI, but it may also

come at a cost of increasing their under-reliance on AI.


# 5.2 RQ3: Effects on User Experience, Perceived

# Critical Thinking Abilities, and Perceptions

# of AI


We now examine the impacts of AACT on participants' subjective

experience during decision making. Figures 5a and 5b compares var
ious user experience metrics and the perceptions of critical thinking

abilities, respectively, for participants in different treatments. It is

shown that participants in the AACT treatment report significantly

higher mental demand ( M = 3 . 887 ,SD = 1 . 054) compared to participants in Human-only ( M = 3 . 286 ,SD = 1 . 072; p < 0 . 001, Cohen's
d = 0 . 566) and Recommender ( M = 3 . 33 ,SD = 1 . 205; p = 0 . 002,
Cohen's d = 0 . 493) treatments. Similarly, AACT participants also

report higher effort to accomplish their level of performance com
pared to participants in all three other treatments (Human-only:

p < 0 . 001, Cohen's d = 0 . 755; Recommender: p < 0 . 001, Cohen's
d = 0 . 638; Analyzer: p = 0 . 001, Cohen's d = 0 . 571). Regarding


# (b) Balanced Accuracy


# (a) Accuracy


Figure 3: Comparison on participants' decision performance measured by their (a) accuracy and (b) balanced accuracy. Error


1.0


0.8

0.6

0.4

0.2


0.0

||Col2|*|Col4|Col5|
|---|---|---|---|---|
||*||||
||<br>||||
|||||~~*~~|
||||||

Agreement Fraction Switch Fraction Over-Reliance Under-Reliance


Figure 4: Comparisons on participants' reliance (agreement and switch fraction) and appropriateness of reliance (over-reliance

ratio and under-reliance ratio) on AI. Error bars represent the 95% confidence intervals of the mean values. [*] , [] , and [*] denote

statistical significance levels of 0 . 05 , 0 . 01 , and 0 . 001 respectively.


participants' perceived critical-thinking abilities during decision

making, while AACT participants reported similar levels of abilities

in evaluating evidence comprehensively, examining multiple per
spectives, and explaining their own decisions as other participants,

they also reported a higher likelihood to seek evidence that counter

their own knowledge compared to participants in the Human-only

treatment ( p = 0 . 01 ,d = 0 . 417). This may because the AACT system

actively suggests counter-evidence to decision-makers both when

it identifies incompleteness and conflict issues in their arguments.

Finally, for participants' perceptions of AI assistance, we observe

no significant differences between treatments and leave the results

to Appendix D.2.


# 5.3 RQ4: Individual Differences of the Effects of

# AACT


To understand how individuals with different characteristics may

respond to AACT differently (RQ4), we move on to repeat our

analyses for RQ1-RQ3 within different subgroups of participants

defined by various demographic dimensions. We collected 5 types


of demographics data through a pre-task survey: participants' task

familiarity, AI familiarity, Need for Cognition (NFC), Cognitive

Reflection Test (CRT) scores, and education levels; we did not

find strong correlation between any pair of these demographics. In

this subsection, we highlight findings that indicate which subgroup

may experience the greatest benefits or costs from AACT, with

additional results in Appendix D.3.


5.3.1 AI familiarity, task familiarity, and education impact whether
individuals can reduce over-reliance on AI through AACT. We have

previously found that AACT can be highly effective in helping

reducing people's over-reliance on AI. Our individual differences

analysis, however, reveals that such positive effect may only oc
cur within certain subgroups. For example, Figure 6 presents the

over-reliance ratios for subgroups of participants with different

task familiarity, AI familiarity, and education level. We find that

among participants who reported lower levels of familiarity with

the task background of real estate markets (i.e., the "task unfa
miliar" subgroup who selected options 1-2 "not at all/slightly fa
miliar"; n = 195), there is no difference in their over-reliance on


5

4

3

2


1

|Col1|Col2||*<br>*|
|---|---|---|---|
|||*<br>|*<br>|
|||||
|||||
|||||

Decision Confidence Efficacy Mental Demand Effort


# (a) User experience


4

3

2

1

|Col1|Col2||Col4|
|---|---|---|---|
|||<br>||
|||||
|||||
|||||

Evaluate Evidence Multiple Perspectives Counter Evidence Explain Prediction


# (b) Perceived critical thinking abilities


Figure 5: Comparisons on users' subjective perceptions across treatments. Error bars represent 95% confidence intervals of the

mean values. [] and [*] denote statistical significance levels of 0 . 01 and 0 . 001 respectively.


AI when they interact with different types of AI supports. How
ever, for participants who reported higher levels of task familiarity

(i.e., the "task familiar" subgroup who selected options 3-5 "some
what/moderately/extremely familiar"; n = 207), we observe signif
icant differences across treatments on participants' over-reliance

on AI ( F (2 , 152) = 8 . 292 , p < 0 . 001 ,η = 0 . 098), with those in the

AACT treatment over-relied on AI significantly less than those in

the Recommender treatment ( p = 0 . 001, Cohen's d = -0 . 774). This

implies that only individuals who are more familiar with the task

background may benefit from AACT to reduce their over-reliance

on AI. Indeed, further t-test between participants in the AACT

treatment who had different levels of task familiarity also con
firmed that the task familiar subgroup achieved significantly lower

over-reliance on AI than the task unfamiliar subgroup ( p = 0 . 008,
Cohen's d = -0 . 537).

Similarly, we also find that only among participants who reported

to be very familiar with AI (selected option 5, n = 93) we detected

significant differences in over-reliance ration across treatments

( F (2 , 63) = 8 . 607 , p < 0 . 001 ,η = 0 . 215), with AACT users over
relied on AI significantly less than Recommender users ( p < 0 . 001,

Cohen's d = -1 . 35). Finally, as shown in Figure 6c, AACT only
enabled participants with bachelor degrees or above ( n = 240) to
significantly reduce their over-reliance on AI ( F (2 , 178) = 7 . 711 , p =
0 . 001 ,η = 0 . 08; AACT vs. Recommender: p = 0 . 002, Cohen's
d = -0 . 664) but not those with lower education levels.


5.3.2 AACT may help individuals with very high AI familiarity improve decision performance. Figure 7 compares the decision perfor
mance across the four treatments for participants who reported

unfamiliar (selected options 1-3, n = 116), familiar (selected option


4, n = 193) or very familiar with AI (selected option 5, n = 93). While

the trends in the AI unfamiliar and AI familiar subgroups largely

resemble those in the general population (i.e., Figure 3), the trend

among participants who are very familiar with AI is different-for

these participants, having them interact with AACT seem to result

in the highest level of decision performance. Indeed, for the AI very

familiar subgroup, we find a marginally significant difference across

treatments on decision accuracy F (3 , 89) = 2 . 557 , p = 0 . 06 ,η =

0 . 079, and a significant difference across treatments on balanced

accuracy F (3 , 89) = 2 . 88 , p = 0 . 04 ,η = 0 . 088. Pairwise comparison

also indicated that when participants are very familiar with AI,

interacting with AACT helps them achieve a significantly higher

level of balanced accuracy than those who complete decisions alone

( p = 0 . 037, Cohen's d = 0 . 819). Interestingly, we note that these dif
ferences are mainly caused by that participants who reported to be

very familiar with AI tend to have worse decision performance than

other subgroups when receiving no AI assistance (one-way ANOVA

for accuracy: F (2 , 101) = 5 . 029 , p = 0 . 008 ,η = 0 . 091; for balanced
accuracy: F (2 , 101) = 7 . 554 , p = 0 . 001 ,η = 0 . 13) or direct decision

recommendations from AI (e.g., one-way ANOVA on balanced accu
racy: F (2 , 94) = 3 . 838 , p = 0 . 025 ,η = 0 . 076)-the latter may result

directly from their over-reliance on AI (see Figure 6b). In this sense,

AACT may be particularly helpful for decision-makers with very

high familiarity with AI, as it can help them reflect more critically of

AI information and improve their decision performance. This is also

consistent with the participants' subjective perceptions-for exam
ple, among participants who are very familiar with AI, the AACT

users perceived AI as significantly more reflection encouraging

than the Recommender users ( p = 0 . 009, Cohen's d = 0 . 819).


|1.0<br><br>0.8<br><br>0.6<br>0.4<br>0.2<br>0.0|Col2|Col3|
|---|---|---|
|0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br><br>||<br>|
|0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br><br>|||
|0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br><br>|||
|0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br><br>|||


no BA BA


# (c) Education


|CHI '26, April 13-17, 2026, Barcelona, Spa<br>1.0<br>*<br>0.8 <br>0.6<br>0.4<br>0.2<br>0.0|Col2|Col3|Col4|
|---|---|---|---|
|CHI '26, April 13-17, 2026, Barcelona, Spa<br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>~~~~<br>*||~~~~<br>*|~~~~<br>*|
|CHI '26, April 13-17, 2026, Barcelona, Spa<br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>~~~~<br>*||||
|CHI '26, April 13-17, 2026, Barcelona, Spa<br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>~~~~<br>*||||
|CHI '26, April 13-17, 2026, Barcelona, Spa<br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>~~~~<br>*||||


Task Unfamiliar Task Familiar


# (a) Task Familiarity


|1.0 *<br>0.8 *<br>0.6<br>0.4<br>0.2<br>0.0|Col2|Col3|Col4|Col5|Col6|
|---|---|---|---|---|---|
|<br> <br> <br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>*<br>~~*~~||||*<br>|*<br>|
|<br> <br> <br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>*<br>~~*~~||||||
|<br> <br> <br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>*<br>~~*~~||||||
|<br> <br> <br>0.0<br>0.2<br>0.4<br>0.6<br>0.8<br>1.0<br>*<br>~~*~~||||||


# (b) AI Familiarity


Figure 6: Over-reliance ratio for subgroups devided by (a) task familiarity, (b) AI familiarity and (c) education. Error bar

represent 95% confidence intervals of the mean values. [*] , [] and [*] denote statistical significance levels of 0 . 05 , 0 . 01 and 0 . 001


0.8


0.6


0.4


0.2


0.8


0.6


0.4


0.2


AI


0.0

|*|Col2|Col3|
|---|---|---|
|~~~~<br>|||
||||
||||
||||

AI Unfamiliar AI Familiar AI Very Familiar


# (a) Accuracy


0.0

|Col1|Col2|*|
|---|---|---|
||||
||||
||||

AI Unfamiliar AI Familiar AI Very Familiar


# (b) Balanced Accuracy


Figure 7: Decision performance (a: accuracy; b: balanced accuracy) for subgroups with different AI familiarity. Error bar

represent 95% confidence intervals of the mean values. [*] and [] denote statistical significance levels of 0 . 05 and 0 . 01 respectively.


# 5.4 Exploratory Analysis: Why did Users Like

# or Dislike AACT?


Finally, by analyzing the open-ended responses from participants

in the AACT treatment on their comparison of the AACT system

they used in the study with direct decision recommendations from

AI (i.e., Recommender), we revealed a few interesting reasons un
derlying people's preferences.

102 of the 104 participants in the AACT treatment provided valid

responses. Overall, 75 preferred Recommender, 22 preferred AACT,

and 5 had no preferences. Primary reasons for participants to prefer

AACT include increased decision autonomy (e.g., "Now I feel like I
have agency over my decision while taking advantage of AI ideas" ),

capability to think independently before seeing AI's information

(e.g., "This method motivates me to think for myself first, then reflect
on and enhance my own reasoning using the AI's suggestions" ), and
promotion of deeper thinking (e.g., "it helped me use my brain and
think about why I was making decisions" ). Similarly, people may
not prefer Recommender as they worry being biased by AI (e.g., "If
the AI predictions are shown directly, that could bias me too much
toward the AI choice" ).

On the other hand, we also note that participants' main rea
sons for disliking AACT included information overload and con
fusion (e.g., "It gave too much info and that confused me" ) and
heightened self-doubt ( "I think [AACT] made me doubt my answers more" ). Meanwhile, participants who preferred Recommender

mainly wanted to get AI predictions to compare against their own

and preferred its simplicity and straightforwardness.


# 6 Discussions


We introduced the AI-Assisted Critical Thinking framework as an

AI-based decision support system that helps decision-makers cri
tique and correct their own decision. Our findings indicate that it

can be helpful for reducing over-reliance towards AI and avoiding

AI errors, especially for certain subgroups, but it also comes with

costs such as increased cognitive load. Below, we discuss impli
cations of our findings and future design considerations. We also

acknowledge the generalizability and limitations of our study and

provide directions for future work.


# 6.1 Benefits, Costs and Use Cases of the Current

# AACT System


Table 4 summarizes the key benefits and costs of the current in
stantiation of the AACT system, as observed in our user study,

which reveals a clear trade-off: AACT decreases over-reliance on

AI and strengthens decision autonomy and metacognitive rigor, but

at the cost of increased cognitive effort and a greater risk of under
reliance. In our study, participants using AACT showed markedly

reduced over-reliance on AI. This effect arises directly from how

AACT structures reflection: the system never reveals the AI model's

own prediction; the targeted self-reflection required before viewing

the AI's feature-level correction suggestions preserves a degree of

independence in decision-makers' evaluation of the internal co
herence of their own argument; and the data-based triangulation

offers an additional reference point for assessing the trustworthi
ness of AI suggestions. At the same time, this deeper engagement


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


# Dimension Benefits Costs


Reliance behavior Reduced over-reliance when AI is wrong Increased under-reliance when AI is correct


Metacognitive engagement Stronger critique of completeness, reliabil- Higher cognitive load and mental effort

ity, and conflicts in reasoning


Decision quality Accuracy gains for the subgroup of decision
makers who self-reported to be very famil
iar with AI


No accuracy improvement for the general

population


Efficiency More deliberate, thoughtful decisions More interaction steps and longer decision
making time


User experience Some improvement in perceived critical

thinking abilities; preferred by decision
makers who value autonomy and reasoning

transparency


Cognitively overloading and trigger self
doubt; received lowest subjective percep
tions among decision-makers with lower

education levels


Table 4: Benefits and costs of the current AACT system, based on user study results.


naturally increases cognitive load and slows the decision process.

The heightened critical stance also makes decision-makers more

cautious toward information from AI overall, leading to an increase

of under-reliance even when the AI is correct. In this sense, AACT

trades efficiency for autonomy and robustness-helping decision
makers think harder and rely less automatically on AI, but at the

cost of greater mental effort and a generally more critical posture

toward AI assistance.

These trade-offs provide implications on where AACT may be

most and least beneficial. AACT could be well-suited for domains

where reflective reasoning and decision autonomy is central, such

as medical diagnosis, financial auditing, or other contexts where

justifying one's rationale is as important as the final decision. Given

AACT's strong effects in reducing over-reliance on AI, it may also

be especially valuable when the AI model's independent perfor
mance is limited, or in high-stakes settings where blindly following

an incorrect AI recommendation would be costly. In contrast, for

time-sensitive or low-stakes tasks supported by highly reliable

AI systems, directly providing AI recommendations and explana
tions or using light-touch reflection-oriented approaches centered

around AI outputs (e.g., hypothesis-driven XAI) may offer a better

cost-benefit balance.

In addition, our subgroup analysis sheds light on which decision
makers may benefit most from AACT. We found that participants

with greater self-reported task knowledge, higher self-perceived

familiarity with AI, and higher levels of education exhibited lower

over-reliance when using AACT compared to other forms of AI as
sistance. One explanation is that AACT presents feedback at a gran
ular, feature-level resolution, and decision-makers with stronger

domain knowledge or higher education are both less prone to infor
mation overload and better able to interpret the probabilistic and

counterfactual information the system provides. Meanwhile, par
ticipants who reported high familiarity with AI tended to over-rely

on AI in the baseline conditions, likely due to stronger default trust

in AI systems. AACT mitigated this tendency by redirecting their

attention to the structure of their own reasoning rather than the


AI's prediction. Taken together, these findings suggest that AACT

may be more suitable for decision-makers who can comfortably

engage in metacognitive reasoning, such as domain experts, as well

as for those who are susceptible to over-reliance on AI, such as

users with high dispositional trust in AI.

Finally, although our study did not directly compare AACT with

some recent reflection-provoking approaches that leverage LLMs

for evaluating or critiquing human reasoning [57, 94], we note that

a key distinction between them lies in how reflections are gener
ated. AACT evaluates decision-makers' argument using a domainspecific model, enabling it to flag the most task-relevant flaws in

the decision-maker's argument based on domain-relevant evidence

patterns. This ensures that the reflection it elicits are meaningful for

the specific task. In contrast, LLM-generated prompts may surface

counterexamples or critiques that are linguistically plausible but not

necessarily aligned with the domain's underlying data distribution,

potentially leading to reflections that feel arbitrary or misdirected.

As such, AACT can be better suited for structured decision tasks,

especially for domains where LLM's world knowledge is still lack
ing, while LLM-based interrogation can be more appropriate for

open-ended reasoning or general critical-thinking support.


# 6.2 Design Implications and System Scalability


6.2.1 Improving the Scalability of AACT via Adaptive Designs. Sec
tion 3.3 outlines the design space underlying the AACT framework,

and our user study illustrates how specific instantiation of the

design choices shape both its benefits and costs. As discussed in

Section 6.1, the current implementation of AACT offers strong gains

in autonomy and reduced over-reliance but also imposes substantial

cognitive demand. These findings point to concrete opportunities

for scaling and simplifying AACT in real-world deployments. Ta
ble 5 summarizes several design knobs that can be adjusted to lower

the cognitive burden of AACT and increase its practical applicabil
ity. A key strategy is to support the "quick-test" component from

the R/M model, which shortens the duration of metacognition. This

can be achieved by having the system automatically surface only


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


# Design Choices Lower cognitive load Higher Cognitive Load


Stages shown Show only the stage corresponding to the most seri- Present all four stages (agreement, incompleteness,

ous issue; additional stages revealed on demand unreliability, conflict) by default


Steps within each stage Require only targeted self-reflection; other steps Full critique-and-correction workflow:

shown on demand (1) Targeted self-reflection


(2) AI-based correction suggestions

(3) Data-based triangulation


Bypass reflection and User may bypass reflection entirely or stop early when User must complete all reflective steps with no option

early stopping they deem additional reflection as unnecessary to bypass or stop early


System parameters large ε, small k, small max_feature_change to re- small ε, large k, large max_feature_change to sur
duce the number and complexity of identified issues face more issues with higher complexity


Table 5: Different designs of AACT lead to different levels of cognitive load, and can be suitable for different types of users or

# contexts.


the most consequential issue in the decision-maker's argument, or

by allowing decision-makers to conduct the quick-test themselves

and bypassing reflection or skipping certain reflection steps when

they judge the uncertainty to be low. System parameters can also be

tuned to limit the number and complexity of issues presented. More

broadly, varying these design choices enables AACT to be adapted

to different users and contexts: high-stakes, time-insensitive, or

analytically complex tasks, and users who can tolerate higher cog
nitive load, may benefit from richer, higher-demand configurations

of AACT, whereas low-stakes, time-constrained, less complex tasks

or novice decision-makers who may be more easily overwhelmed

are better served by lighter-weight versions of AACT that empha
sizes only the most essential reflections. Such adaptation can also

operate at the level of task instances : for example, more difficult

tasks-identified by AI's or human's low confidence-can employ

the higher-demand version of AACT, while simpler tasks could use

a lighter version.


6.2.2 Additional design consideration for deploying AACT. Beyond

scalability-oriented adaptations, there exist additional factors that

can further influence how AACT operates in real-world deploy
ments. For example, in addition to the user-triggered quick-test

described earlier, user control can be expanded by allowing decision
makers to tune the system parameters that determine the granu
larity of counterfactual analysis, choose the level of details in AI
provided information (e.g., concise summaries vs. full explanations),

set personal "reflection budgets" that cap the number of issues to

reflect on for any task, or request custom counterfactual analysis.

Likewise, interface design offers substantial opportunities to im
prove usability. Visualization aids such as bar charts or compact

graphical summaries can replace or augment table-based trian
gulation to enable faster comparison without overloading users,

and formative user studies may reveal more streamlined ways to

present information. Designers may also explore more interactive

layouts, such as modular panels or visual maps of argument quality,

rather than relying on a fixed sequential dialogue. Although our

study used pre-set AI message templates to ensure consistency and

avoid hallucinations, future instantiations may incorporate LLMs

to provide richer and more adaptive conversational scaffolding. For


instance, LLMs could tailor the tone, styles and details of messages

dynamically to match decision-makers' expertise while remaining

grounded in domain-specific analysis. Such hybrid designs could

preserve the reliability of template-based messaging while leverag
ing LLMs' flexibility to enhance engagement and accessibility.


6.2.3 Designing AI Systems for Critical Thinking Beyond AACT.
While our work operationalizes AACT as an intervention embed
ded directly within the decision making process, prior research

on fostering critical thinking suggests several alternative design

pathways that AI systems may explore. In particular, AACT re
sembles anchored instruction in educational settings-where learn
ers develop critical thinking through authentic, situated problems

[1, 10]-and parallels guided reflection techniques used in clinical

diagnosis [27, 55, 67, 81], both of which view reflective scaffold
ing as most effective when integrated into problem-solving. An

alternative approach treats critical thinking development more pedagogically, drawing on methods like mentoring or programmatic
training. Rather than intervening during the task, AI systems
could employ AACT-like mechanisms as pre-task training to build

metacognitive skills before real decisions, which may be especially

useful when opportunities for in-situ reflection are limited or when

cognitive load must remain low during task execution.

Another consideration is whether critical thinking should be

cultivated through domain-specific or domain-general instruction.

The literature offers mixed evidence on the relative benefits of each

[2, 8, 10, 38, 63]. Our current AACT system aligns with a domainspecific immersion approach. Future work may explore AI systems
that explicitly teach generalizable critical thinking principles [8, 38],

such as argument evaluation, evidence relevance, or bias detection,

either alongside or independent from domain-specific reasoning.


# 6.3 Ethical Considerations of AACT


Designing AI systems that deliberately induce cognitive effort for

critical reflection raises important ethical considerations. While

Section 6.2 shows that AACT's design choices can be adjusted to

reduce burden, the ethical tension remains: deeper reflection often

requires greater cognitive load, which risks cognitive overload,

elevates stress [5, 44, 51, 109], and can impair performance.


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


Transparency about these demands and giving users meaningful

control over how deeply they engage are therefore essential, as is

calibrating challenge to the level of "desirable difficulties" that

support metacognitive gains without imposing unnecessary strain.

Another related concern is the self-doubt and cognitive disso
nance that users may experience when being prompted to scruti
nize their own reasoning. Although AACT is not designed to be

antagonistic or argumentative, repeated critiques can still

evoke discomfort. Moderate dissonance can strengthen reflec
tive thinking [32, 49], but excessive or poorly calibrated criticism

risks undermining confidence or creating negative emotional expe
riences. Responsible deployment therefore requires sensitivity to

users' affective states, cultural expectations around critique, and

the context in which AACT is used.

Taken together, these ethical issues underscore the need for

participatory evaluation with end-users to detect unintended emo
tional or cognitive consequences, and to guide refinements that

keep AACT supportive rather than burdensome, ensuring that

reflective scaffolding ultimately strengthens autonomy without

compromising user well-being.


# 6.4 Generalizability and Future Work


We acknowledge that the generalizability of our results is limited

by various choices of our study design. Therefore, evaluating the

effectiveness and generalizability of AACT beyond the context of

our case study is an important future work.

textbfTask Choice: Our user study chooses house price prediction

tasks as a case study, which limits the result generalizability. In

this task, participants often reported strong prior knowledge and

high confidence in their own judgments; for example, to a survey

question on whether the AI was helpful or not, one participant

responded " Not really helpful as I just bought a home 2 years ago.
I know best. " This may help explain the low levels of AI reliance

we observed across all treatments when compared to prior work.

Future research should evaluate AACT in tasks where humans have

less prior knowledge to see if patterns of engagement and reliance

may differ.

# Task Stakes: Our results are limited by the low-stake nature of

house price prediction and the online crowdsourcing study context.

Meanwhile, critical thinking research in high-stake domains (e.g.,

clinical decision-making) often involves participants with special
ized expertise (e.g., medical students or residents) [27, 55, 58, 67, 80-

83, 88, 100, 104]. Thus, future work should evaluate AACT with

different participants, higher-stake tasks, or deliberately increase

stakes by imposing higher rewards, or even penalties.

Data Modality: Another limitation lies in our choice of a task us
ing tabular data. Because AACT's counterfactual analysis perturbs

features to examine changes in model confidence, the framework re
quires access to meaningful, interpretable input features. While this

holds naturally for tabular datasets, extending AACT to text, image,

or multimodal datasets may require additional feature extraction.

Crucially, the extracted features should be human-understandable;

relevant methods include interpretable embeddings, concept activa
tion vectors, or human-understandable attributes [3, 43, 59, 62, 72].

We encourage future research to evaluate AACT beyond tabular


data and explore how different feature extraction methods may

influence how users construct arguments and interpret feedback.

AI Model Performance: Our user study used a relatively well
performing AI model. However, high-performing AI models may be

unavailable for certain tasks or infeasible for contexts where AI's

cost and efficiency is prioritized. Crucially, AACT relies primarily

on AI model's probability function instead of decision performance,

so future research can study how an AI model's performance impact

its counterfactual analysis and AI-based correction suggestions.


# 6.5 Additional Limitations


Our study leaves several additional limitations. Although we eval
uated AACT using standard human-AI decision making metrics,

we did not directly assess participants' critical thinking skills. Fu
ture research could incorporate standardized critical-thinking as
sessments or embed reasoning problems that explicitly

measure metacognitive gains. Our study also examined AACT in a

single-session setting; longitudinal studies are needed to understand

how reasoning strategies evolve over time, and whether repeated

exposure strengthens or attenuates the benefits observed. Moreover,

while our implementation focused on individual decision-makers,

extending AACT to group decision making could reveal new oppor
tunities and challenges for reflective facilitation. Exploring these

directions will help clarify the broader impact of AACT and refine

its design for real-world use.


# 7 Conclusions


In this work, we introduced the AI-Assisted Critical Thinking

(AACT) framework, a domain-grounded approach that supports hu
man critical thinking in decision making by having AI perform coun
terfactual analysis on a decision-maker's decision argument, surface

potential flaws, and guide them through a structured critique-and
correction workflow. Our user study shows that AACT can reduce

over-reliance on AI and strengthen decision autonomy, albeit with

increased cognitive effort, revealing a key design trade-off for re
flective AI systems. We further outline ways to improve AACT's

practical applicability, adapt it to different contexts, and address

ethical considerations surrounding reflective scaffolding. Together,

these contributions position AACT as an exploratory step towards

building AI as partners in reasoning in human-AI decision making.


# Acknowledgments


We thank the support of the National Science Foundation under

grant IIS-2229876 and IIS-2340209 on this work. We are very grate
ful for the reviewers' feedback, which helped improve this paper

significantly. Any opinions, findings, conclusions, or recommenda
tions expressed here are those of the authors alone.


# References

 Philip C Abrami, Robert M Bernard, Eugene Borokhovski, David I Waddington,

C Anne Wade, and Tonje Persson. 2015. Strategies for teaching students to think
critically: A meta-analysis. Review of educational research 85, 2 (2015), 275-314.
 Philip C Abrami, Robert M Bernard, Evgueni Borokhovski, Anne Wade,

Michael A Surkes, Rana Tamim, and Dai Zhang. 2008. Instructional interven
tions affecting critical thinking skills and dispositions: A stage 1 meta-analysis.
Review of educational research 78, 4 (2008), 1102-1134.


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.

 Radhakrishna Achanta, Appu Shaji, Kevin Smith, Aurelien Lucchi, Pascal Fua,

and Sabine Susstrunk. 2012. SLIC superpixels compared to state-of-the-art superpixel methods. IEEE transactions on pattern analysis and machine intelligence

34, 11 (2012), 2274-2282.
 Erfan Al-Hossami, Razvan Bunescu, Justin Smith, and Ryan Teehan. 2024. Can

language models employ the socratic method? experiments with code debugging. In Proceedings of the 55th ACM Technical Symposium on Computer Science
Education V. 1 . 53-59.
 Norah H Alsuraykh, Max L Wilson, Paul Tennent, and Sarah Sharples. 2019.
How stress and mental workload are connected. In Proceedings of the 13th
EAI international conference on pervasive computing technologies for healthcare .

371-376.
 Anthropic. 2025. Introducing Claude for Education. https://www.anthropic.

com/news/introducing-claude-for-education
 Elliot Aronson. 1969. The theory of cognitive dissonance: A current perspective.
In Advances in experimental social psychology . Vol. 4. Elsevier, 1-34.
 Sharon Bailin. 2002. Critical thinking and science education. Science & education

11, 4 (2002), 361-375.
 Gagan Bansal, Tongshuang Wu, Joyce Zhou, Raymond Fok, Besmira Nushi, Ece

Kamar, Marco Tulio Ribeiro, and Daniel Weld. 2021. Does the Whole Exceed its

Parts? The Effect of AI Explanations on Complementary Team Performance. In
Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems
(Yokohama, Japan) (CHI '21) . Association for Computing Machinery, New York,

NY, USA, Article 81, 16 pages. doi:10.1145/3411764.3445717
 Linda S Behar-Horenstein, Lian Niu, et al. 2011. Teaching critical thinking skills
in higher education: A review of the literature. Journal of College Teaching &
Learning (TLC) 8, 2 (2011).
 Francesco N Biondi, Angela Cacanindin, Caitlyn Douglas, and Joel Cort. 2021.

Overloaded and at work: investigating the effect of cognitive workload on
assembly task performance. Human factors 63, 5 (2021), 813-820.
 Elizabeth L Bjork, Robert A Bjork, et al. 2011. Making things hard on yourself,
but in a good way: Creating desirable difficulties to enhance learning. Psychology
and the real world: Essays illustrating fundamental contributions to society 2, 59-68

(2011), 56-64.
 Zana Bucinca, Phoebe Lin, Krzysztof Z. Gajos, and Elena L. Glassman. 2020.

Proxy tasks and subjective measures can be misleading in evaluating explainable
AI systems. In Proceedings of the 25th International Conference on Intelligent User
Interfaces (Cagliari, Italy) (IUI '20) . Association for Computing Machinery, New

York, NY, USA, 454-464. doi:10.1145/3377325.3377498
 Zana Bucinca, Maja Barbara Malaya, and Krzysztof Z. Gajos. 2021. To Trust

or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in
AI-assisted Decision-making. Proc. ACM Hum.-Comput. Interact. 5, CSCW1,

Article 188 (April 2021), 21 pages. doi:10.1145/3449287
 John T Cacioppo and Richard E Petty. 1982. The need for cognition. Journal of
personality and social psychology 42, 1 (1982), 116.
 Alice Cai, Ian Arawjo, and Elena L Glassman. 2024. Antagonistic ai. arXiv
preprint arXiv:2402.07350 (2024).
 Carrie J. Cai, Samantha Winter, David Steiner, Lauren Wilcox, and Michael Terry.

2019. "Hello AI": Uncovering the Onboarding Needs of Medical Practitioners for
Human-AI Collaborative Decision-Making. Proc. ACM Hum.-Comput. Interact.

3, CSCW, Article 104 (Nov. 2019), 24 pages. doi:10.1145/3359206
 Fateme Hashemi Chaleshtori, Atreya Ghosal, Alexander Gill, Purbid Bambroo,

and Ana Marasovic. 2024. On Evaluating Explanation Utility for Human-AI Decision Making in NLP. In Findings of the Association for Computational Linguistics:
EMNLP 2024 . 7456-7504.
 Ching-Yi Chang, Hui-Chen Lin, Chengjiu Yin, and Kai-Hsiang Yang. 2025. Gener
ative AI-assisted reflective writing for improving students' higher order thinking.
Educational Technology & Society 28, 1 (2025), 270-285.
 Chacha Chen, Han Liu, Jiamin Yang, Benjamin M. Mervak, Bora Kalaycioglu,

Grace Lee, Emre Cakmakli, Matteo Bonatti, Sridhar Pudu, Osman Kahraman,

Gul Gizem Pamuk, Aytekin Oto, Aritrick Chatterjee, and Chenhao Tan. 2025.

Can Domain Experts Rely on AI Appropriately? A Case Study on AI-Assisted

Prostate Cancer MRI Diagnosis. [arXiv:2502.03482 [eess.IV]](https://arxiv.org/abs/2502.03482) https://arxiv.org/

abs/2502.03482
 Michelene TH Chi, Nicholas De Leeuw, Mei-Hung Chiu, and Christian LaVancher. 1994. Eliciting self-explanations improves understanding. Cognitive
science 18, 3 (1994), 439-477.
 Chun-Wei Chiang, Zhuoran Lu, Zhuoyan Li, and Ming Yin. 2024. Enhancing

AI-Assisted Group Decision Making through LLM-Powered Devil's Advocate.
In Proceedings of the 29th International Conference on Intelligent User Interfaces
(Greenville, SC, USA) (IUI '24) . Association for Computing Machinery, New

York, NY, USA, 103-119. doi:10.1145/3640543.3645199
 Michael Chromik, Malin Eiband, Felicitas Buchner, Adrian Kruger, and Andreas

Butz. 2021. I Think I Get Your Point, AI! The Illusion of Explanatory Depth in
Explainable AI. In 26th International Conference on Intelligent User Interfaces
(College Station, TX, USA) (IUI '21) . Association for Computing Machinery, New

York, NY, USA, 307-317. doi:10.1145/3397481.3450644

 Marvin S Cohen, Jared T Freeman, and Bryan Thompson. 1998. Critical thinking

skills in tactical decision making: A model and a training strategy. (1998).
 MARVIN S. Cohen, JARED T. Freeman, and STEVE Wolf. 1996. Metarecognition

in Time-Stressed Decision Making: Recognizing, Critiquing, and Correcting.
Human Factors 38, 2 (1996), 206-219. doi:10.1177/001872089606380203
 Katherine M. Collins, Ilia Sucholutsky, Umang Bhatt, Kartik Chandra, Lionel

Wong, Mina Lee, Cedegao E. Zhang, Tan Zhi-Xuan, Mark Ho, Vikash Mans
inghka, Adrian Weller, Joshua B. Tenenbaum, and Thomas L. Griffiths. 2024.

Building Machines that Learn and Think with People. [arXiv:2408.03943 [cs.HC]](https://arxiv.org/abs/2408.03943)

https://arxiv.org/abs/2408.03943
 Galileu B Costa Filho, Alexandre S Moura, Paulo R Brandao, Henk G Schmidt,

and Silvia Mamede. 2019. Effects of deliberate reflection on diagnostic accuracy,
confidence and diagnostic calibration in dermatology. Perspectives on Medical
Education 8 (2019), 230-236.
 Valdemar Danry, Pat Pataranutaporn, Yaoli Mao, and Pattie Maes. 2023. Don't

Just Tell Me, Ask Me: AI Systems that Intelligently Frame Explanations as Ques
tions Improve Human Logical Discernment Accuracy over Causal AI explanations. In Proceedings of the 2023 CHI Conference on Human Factors in Computing
Systems (Hamburg, Germany) (CHI '23) . Association for Computing Machinery,

New York, NY, USA, Article 352, 13 pages. doi:10.1145/3544548.3580672
 Jeffrey Dastin. 2022. Amazon scraps secret AI recruiting tool that showed bias
against women. In Ethics of data and analytics . Auerbach Publications, 296-299.
 Dean De Cock. 2011. Ames, Iowa: Alternative to the Boston housing data as an
end of semester regression project. Journal of Statistics Education 19, 3 (2011).
 Sander de Jong, Ville Paananen, Benjamin Tag, and Niels van Berkel. 2025.

Cognitive Forcing for Better Decision-Making: Reducing Overreliance on AI
Systems Through Partial Explanations. Proceedings of the ACM on HumanComputer Interaction 9, 2 (2025), 1-30.
 Delia Deliu. 2025. Cognitive Dissonance Artificial Intelligence (CD-AI): The

Mind at War with Itself. Harnessing Discomfort to Sharpen Critical Thinking.
arXiv preprint arXiv:2507.08804 (2025).
 Yuyang Ding, Hanglei Hu, Jie Zhou, Qin Chen, Bo Jiang, and Liang He. 2024.

Boosting large language models with socratic method for conversational mathematics teaching. In Proceedings of the 33rd ACM International Conference on
Information and Knowledge Management . 3730-3735.
 Jonathan Dodge, Q. Vera Liao, Yunfeng Zhang, Rachel K. E. Bellamy, and Casey

Dugan. 2019. Explaining models: an empirical study of how explanations
impact fairness judgment. In Proceedings of the 24th International Conference
on Intelligent User Interfaces (Marina del Ray, California) (IUI '19) . Association

for Computing Machinery, New York, NY, USA, 275-285. doi:10.1145/3301275.

3302310
 Ian Drosos, Advait Sarkar, Neil Toronto, et al. 2025. " It makes you think":

Provocations Help Restore Critical Thinking to AI-Assisted Knowledge Work.
arXiv preprint arXiv:2501.17247 (2025).
 Upol Ehsan, Samir Passi, Q Vera Liao, Larry Chan, I-Hsiang Lee, Michael Muller,

and Mark O Riedl. 2024. The who in XAI: how AI background shapes perceptions
of AI explanations. In Proceedings of the 2024 CHI Conference on Human Factors
in Computing Systems . 1-32.
 Malin Eiband, Daniel Buschek, Alexander Kremer, and Heinrich Hussmann. 2019.
The Impact of Placebic Explanations on Trust in Intelligent Systems. In Extended
Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems
(Glasgow, Scotland Uk) (CHI EA '19) . Association for Computing Machinery,

New York, NY, USA, 1-6. doi:10.1145/3290607.3312787
 Robert H. Ennis. 1989. Critical Thinking and Subject Specificity: Clarification
and Needed Research. Educational Researcher 18, 3 (1989), 4-10. http://www.

jstor.org/stable/1174885
 Simon W. S. Fischer, Hanna Schraffenberger, Serge Thill, and Pim Haselager.

2025. A Taxonomy of Questions for Critical Reflection in Machine-Assisted

Decision-Making. [arXiv:2504.12830 [cs.HC]](https://arxiv.org/abs/2504.12830) https://arxiv.org/abs/2504.12830
 Raymond Fok and Daniel S Weld. 2024. In search of verifiability: Explanations
rarely enable complementary performance in AI-advised decision making. AI
Magazine 45, 3 (2024), 317-332.
 Shane Frederick. 2005. Cognitive reflection and decision making. Journal of
Economic perspectives 19, 4 (2005), 25-42.
 Krzysztof Z. Gajos and Lena Mamykina. 2022. Do People Engage Cognitively
with AI? Impact of AI Assistance on Incidental Learning. In Proceedings of the
27th International Conference on Intelligent User Interfaces (Helsinki, Finland)
(IUI '22) . Association for Computing Machinery, New York, NY, USA, 794-806.

doi:10.1145/3490099.3511138
 Amirata Ghorbani, James Wexler, James Y Zou, and Been Kim. 2019. Towards automatic concept-based explanations. Advances in neural information processing
systems 32 (2019).
 Martin Gjoreski, Mitja Lustrek, Matjaz Gams, and Hristijan Gjoreski. 2017.
Monitoring stress with a wrist device using context. Journal of biomedical
informatics 73 (2017), 159-170.
 Sandra G Hart. 2006. NASA-task load index (NASA-TLX); 20 years later. In
Proceedings of the human factors and ergonomics society annual meeting, Vol. 50.

Sage publications Sage CA: Los Angeles, CA, 904-908.


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain

 Peter Hase and Mohit Bansal. 2020. Evaluating Explainable AI: Which Algorithmic Explanations Help Users Predict Model Behavior?. In Proceedings of the 58th
Annual Meeting of the Association for Computational Linguistics, Dan Jurafsky,

Joyce Chai, Natalie Schluter, and Joel Tetreault (Eds.). Association for Computa
tional Linguistics, Online, 5540-5552. doi:10.18653/v1/2020.acl-main.491
 Pim Haselager, Hanna Schraffenberger, Serge Thill, Simon Fischer, Pablo Lanillos,

Sebastiaan Van De Groes, and Miranda Van Hooff. 2024. Reflection machines:

Supporting effective human oversight over medical decision support systems.
Cambridge Quarterly of Healthcare Ethics 33, 3 (2024), 380-389.
 Gaole He, Lucie Kuiper, and Ujwal Gadiraju. 2023. Knowing About Knowing: An

Illusion of Human Competence Can Hinder Appropriate Reliance on AI Systems.
In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems
(Hamburg, Germany) (CHI '23) . Association for Computing Machinery, New

York, NY, USA, Article 113, 18 pages. doi:10.1145/3544548.3581025
 Cecilia Heyes. 2017. THE ENIGMA OF REASON A new theory of human

understanding.
 Maureen Heymans. 2025. Guided Learning in Gemini: From answers to under
standing. https://blog.google/outreach-initiatives/education/guided-learning/
 Xiyuan Hou, Yisi Liu, Olga Sourina, Yun Rui Eileen Tan, Lipo Wang, and Wolfgang Mueller-Wittig. 2015. EEG based stress monitoring. In 2015 IEEE international conference on systems, man, and cybernetics . IEEE, 3110-3115.
 Hsiu-Fang Hsieh and Sarah E Shannon. 2005. Three approaches to qualitative
content analysis. Qualitative health research 15, 9 (2005), 1277-1288.
 Emily Sein Yue Elim Hui. 2025. Incorporating Bloom's taxonomy into promot
ing cognitive thinking mechanism in artificial intelligence-supported learning
environments. Interactive Learning Environments 33, 2 (2025), 1087-1100.
 Jui-Tse Hung, Christopher Cui, Diana M. Popescu, Saurabh Chatterjee, and

Thad Starner. 2024. Socratic Mind: Scalable Oral Assessment Powered By AI. In
Proceedings of the Eleventh ACM Conference on Learning @ Scale (Atlanta, GA,
USA) (L@S '24) . Association for Computing Machinery, New York, NY, USA,

340-345. doi:10.1145/3657604.3664661
 Jonathan S Ilgen, Judith L Bowen, Lucas A McIntyre, Kenny V Banh, David

Barnes, Wendy C Coates, Jeffrey Druck, Megan L Fix, Diane Rimple, Lalena M

Yarris, et al. 2013. Comparing diagnostic performance and the utility of clinical

vignette-based assessment under testing conditions designed to encourage either
automatic or analytic thought. Academic Medicine 88, 10 (2013), 1545-1551.
 Rena Katsenou, Konstantinos Kotsidis, Agnes Papadopoulou, Panagiotis Anas
tasiadis, and Ioannis Deliyannis. 2025. Beyond Assistance: Embracing AI
as a Collaborative Co-Agent in Education. Education Sciences 15, 8 (2025).

doi:10.3390/educsci15081006
 Malik Khadar, Daniel Runningen, Julia Tang, Stevie Chancellor, and Harman
preet Kaur. 2025. Wisdom of the Crowd, Without the Crowd: A Socratic LLM
for Asynchronous Deliberation on Perspectivist Data. Proceedings of the ACM
on Human-Computer Interaction 9, 7 (2025), 1-35.
 Michael Kilian, Jonathan Sherbino, Christopher Hicks, and Sandra D Monteiro.

2019. Understanding diagnosis through action: evaluation of a point-of-care
checklist for junior emergency medical residents. Diagnosis 6, 2 (2019), 151-156.
 Been Kim, Martin Wattenberg, Justin Gilmer, Carrie Cai, James Wexler, Fernanda

Viegas, et al. 2018. Interpretability beyond feature attribution: Quantitative
testing with concept activation vectors (tcav). In International conference on
machine learning . PMLR, 2668-2677.
 Yea-Seul Kim, Katharina Reinecke, and Jessica Hullman. 2017. Explaining the

gap: Visualizing one's predictions improves recall and comprehension of data.
In Proceedings of the 2017 CHI conference on human factors in computing systems .

1375-1386.
 Aleksander Kobylarek, Kamil Błaszczynski, Luba Slosarz, and Martyna Madej.

2022. Critical Thinking Questionnaire (CThQ)-construction and application of
critical thinking test tool. Andragogy Adult Education and Social Marketing 2, 2

(2022), 1-1.
 Pang Wei Koh, Thao Nguyen, Yew Siang Tang, Stephen Mussmann, Emma

Pierson, Been Kim, and Percy Liang. 2020. Concept bottleneck models. In
International conference on machine learning . PMLR, 5338-5348.
 Emily R Lai. 2011. Critical thinking: A literature review. Pearson's Research
Reports 6, 1 (2011), 40-41.
 Vivian Lai, Chacha Chen, Q. Vera Liao, Alison Smith-Renner, and Chenhao Tan.

2021. Towards a Science of Human-AI Decision Making: A Survey of Empirical

Studies. [arXiv:2112.11471 [cs.AI]](https://arxiv.org/abs/2112.11471) https://arxiv.org/abs/2112.11471
 Vivian Lai and Chenhao Tan. 2019. On Human Predictions with Explana
tions and Predictions of Machine Learning Models: A Case Study on Deception
Detection. In Proceedings of the Conference on Fairness, Accountability, and Transparency (Atlanta, GA, USA) (FAT* '19) . Association for Computing Machinery,

New York, NY, USA, 29-38. doi:10.1145/3287560.3287590
 Himabindu Lakkaraju, Stephen H. Bach, and Jure Leskovec. 2016. Interpretable
Decision Sets: A Joint Framework for Description and Prediction. In Proceedings
of the 22nd ACM SIGKDD International Conference on Knowledge Discovery
and Data Mining (San Francisco, California, USA) (KDD '16) . Association for

Computing Machinery, New York, NY, USA, 1675-1684. doi:10.1145/2939672.

2939874

 Kathryn Ann Lambe, David Hevey, and Brendan D Kelly. 2018. Guided reflec
tion interventions show no effect on diagnostic accuracy in medical students.
Frontiers in psychology 9 (2018), 2297.
 Nguyen-Thinh Le and Laura Wartschinski. 2018. A Cognitive Assistant for
improving human reasoning skills. International Journal of Human-Computer
Studies 117 (2018), 45-54. doi:10.1016/j.ijhcs.2018.02.005 Cognitive Assistants.
 Thao Le, Tim Miller, Liz Sonenberg, and Ronal Singh. 2024. Towards the new
xai: A hypothesis-driven approach to decision support using evidence. In ECAI
2024 . IOS Press, 850-857.
 Min Hun Lee, Daniel P. Siewiorek, Asim Smailagic, Alexandre Bernardino, and

Sergi Bermudez Bermudez i Badia. 2021. A Human-AI Collaborative Approach
for Clinical Decision Making on Rehabilitation Assessment. In Proceedings of
the 2021 CHI Conference on Human Factors in Computing Systems (Yokohama,
Japan) (CHI '21) . Association for Computing Machinery, New York, NY, USA,

Article 392, 14 pages. doi:10.1145/3411764.3445472
 Soohwan Lee, Seoyeong Hwang, Dajung Kim, and Kyungho Lee. 2025. Conver
sational Agents as Catalysts for Critical Thinking: Challenging Social Influence
in Group Decision-making. In Proceedings of the Extended Abstracts of the CHI
Conference on Human Factors in Computing Systems . 1-12.
 Han Liu, Yizhou Tian, Chacha Chen, Shi Feng, Yuxin Chen, and Chenhao Tan.

2023. Learning Human-Compatible Representations for Case-Based Decision
Support. In ICLR . https://openreview.net/forum?id=r0xte-t40I
 Jiayu Liu, Zhenya Huang, Tong Xiao, Jing Sha, Jinze Wu, Qi Liu, Shijin Wang,

and Enhong Chen. 2024. SocraticLM: Exploring socratic personalized teaching
with large language models. Advances in Neural Information Processing Systems

37 (2024), 85693-85721.
 Wenxia Liu and Yunsong Wang. 2024. The effects of using AI tools on critical

thinking in English literature classes among EFL learners: An intervention study.
European Journal of Education 59, 4 (2024), e12804.
 George Loewenstein. 1994. The psychology of curiosity: A review and reinterpretation. Psychological bulletin 116, 1 (1994), 75.
 Zhuoran Lu, Dakuo Wang, and Ming Yin. 2024. Does more advice help? the
effects of second opinions in AI-assisted decision making. Proceedings of the
ACM on Human-Computer Interaction 8, CSCW1 (2024), 1-31.
 Shuai Ma, Qiaoyi Chen, Xinru Wang, Chengbo Zheng, Zhenhui Peng, Ming Yin,

and Xiaojuan Ma. 2025. Towards human-ai deliberation: Design and evaluation
of llm-empowered deliberative ai for ai-assisted decision-making. In Proceedings
of the 2025 CHI Conference on Human Factors in Computing Systems . 1-23.
 Shuai Ma, Chenyi Zhang, Xinru Wang, Xiaojuan Ma, and Ming Yin. 2024. Beyond

Recommender: An Exploratory Study of the Effects of Different AI Roles in

AI-Assisted Decision Making. [arXiv:2403.01791 [cs.HC]](https://arxiv.org/abs/2403.01791) https://arxiv.org/abs/

2403.01791
 Prashan Madumal, Tim Miller, Frank Vetere, and Liz Sonenberg. 2018. Towards
a grounded dialog model for explainable artificial intelligence. arXiv preprint
arXiv:1806.08055 (2018).
 Silvia Mamede and Henk G Schmidt. 2023. Deliberate reflection and clinical
reasoning: founding ideas and empirical findings. Medical Education 57, 1 (2023),

76-85.
 Silvia Mamede, Henk G Schmidt, and Julio Cesar Penaforte.

2008. Effects of reflective practice on the accuracy of medical diagnoses. Medical Education 42, 5 (2008), 468-475.

arXiv:https://asmepublications.onlinelibrary.wiley.com/doi/pdf/10.1111/j.1365-

2923.2008.03030.x doi:10.1111/j.1365-2923.2008.03030.x
 Silvia Mamede, Henk G. Schmidt, and Remy Rikers. 2007. Diagnostic errors and
reflective practice in medicine. Journal of Evaluation in Clinical Practice 13, 1

(2007), 138-145. arXiv:https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1365-

2753.2006.00638.x doi:10.1111/j.1365-2753.2006.00638.x
 Silvia Mamede, Tamara van Gog, Kees van den Berge, Remy M. J. P. Rikers,

Jan L. C. M. van Saase, Coen van Guldener, and Henk G. Schmidt. 2010.

Effect of Availability Bias and Reflective Reasoning on Diagnostic Accuracy
Among Internal Medicine Residents. JAMA 304, 11 (09 2010), 1198-1203.

arXiv:https://jamanetwork.com/journals/jama/articlepdf/186585/joc05103_1198_1203.pdf

doi:10.1001/jama.2010.1276
 Jeffrey D Marx and Karen Cummings. 2007. Normalized change. American
Journal of Physics 75, 1 (2007), 87-91.
 Tim Miller. 2023. Explainable AI is Dead, Long Live Explainable AI! Hypothesisdriven Decision Support using Evaluative AI. In Proceedings of the 2023 ACM
Conference on Fairness, Accountability, and Transparency (Chicago, IL, USA)
(FAccT '23) . Association for Computing Machinery, New York, NY, USA, 333-342.

doi:10.1145/3593013.3594001
 Elena Musi, Nadin Kokciyan, Khalid Al Khatib, Davide Ceolin, Emmanuelle

Dietz, Klara Maximiliane Gutekunst, Annette Hautli, Cristian Santibanez, Jodi

Schneider, Jonas Scholz, et al. 2025. Toward reasonable parrots: Why large
language models should argue with us by design. In Proceedings of the 12th
Argument mining Workshop . 24-31.
 OpenAI. 2025. Introducing study mode. https://openai.com/index/chatgpt-

study-mode/


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.

 Eoin D O'Sullivan and Susie J Schofield. 2019. A cognitive forcing tool to
mitigate cognitive bias-a randomised control trial. BMC medical education 19, 1

(2019), 12.
 Richard Paul and Linda Elder. 2007. Critical Thinking: The Art of Socratic Questioning. Journal of Developmental Education 31, 1 (Fall 2007),

36-37. https://www.proquest.com/scholarly-journals/critical-thinking-art-

socratic-questioning/docview/228487383/se-2
 Rita Payan Carreira, Ana Sacau-Fontenla, Hugo Rebelo, Luis Sebastiao, and

Dimitris Pnevmatikos. 2022. Development and Validation of a Critical Thinking
Assessment-Scale Short Form. Education Sciences 12 (12 2022), 938. doi:10.3390/

educsci12120938
 Charvi Rastogi, Yunfeng Zhang, Dennis Wei, Kush R. Varshney, Amit Dhurand
har, and Richard Tomsett. 2022. Deciding Fast and Slow: The Role of Cognitive
Biases in AI-assisted Decision-making. Proc. ACM Hum.-Comput. Interact. 6,

CSCW1, Article 83 (apr 2022), 22 pages. doi:10.1145/3512930
 David Rear. 2019. One size fits all? The limitations of standardised assessment
in critical thinking. Assessment & Evaluation in Higher Education 44, 5 (2019),

664-675.
 Leon Reicherts, Gun Woo Park, and Yvonne Rogers. 2022. Extending Chatbots

to probe users: Enhancing complex decision-making through probing conversations. In Proceedings of the 4th Conference on Conversational User Interfaces .

1-10.
 Leon Reicherts, Zelun Tony Zhang, Elisabeth von Oswald, Yuanting Liu, Yvonne

Rogers, and Mariam Hassib. 2025. AI, help me think-but for myself: Assisting

people in complex decision-making by providing different kinds of cognitive
support. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems . 1-19.
 Marco Tulio Ribeiro, Sameer Singh, and Carlos Guestrin. 2016. "Why

Should I Trust You?": Explaining the Predictions of Any Classifier.

[arXiv:1602.04938 [cs.LG]](https://arxiv.org/abs/1602.04938) https://arxiv.org/abs/1602.04938
 Carl Ransom Rogers. 1995. On becoming a person: A therapist's view of psychotherapy . Houghton Mifflin Harcourt.
 Sara Salimzadeh, Gaole He, and Ujwal Gadiraju. 2023. A missing piece in the

puzzle: Considering the role of task complexity in human-ai decision making.
In Proceedings of the 31st ACM Conference on User Modeling, Adaptation and
Personalization . 215-227.
 Max Schemmer, Patrick Hemmer, Niklas Kuhl, Carina Benz, and Gerhard Satzger.

2022. Should I follow AI-based advice? Measuring appropriate reliance in humanAI decision-making. arXiv preprint arXiv:2204.06916 (2022).
 Dylan Slack, Satyapriya Krishna, Himabindu Lakkaraju, and Sameer Singh. 2023.

TalkToModel: Explaining Machine Learning Models with Interactive Natural

Language Conversations. [arXiv:2207.04154 [cs.LG]](https://arxiv.org/abs/2207.04154)
 Justine Staal, Jacky Hooftman, Sabrina TG Gunput, Silvia Mamede, Maarten A

Frens, Walter W Van den Broek, Jelmer Alsma, and Laura Zwaan. 2022. Effect

on diagnostic accuracy of cognitive reasoning tools for the workplace setting:
systematic review and meta-analysis. BMJ Quality & Safety 31, 12 (2022), 899-

910.
 Mark Steyvers and Aakriti Kumar. 2024. Three challenges for AI-assisted
decision-making. Perspectives on Psychological Science 19, 5 (2024), 722-734.
 John Sweller. 1988. Cognitive load during problem solving: Effects on learning.
Cognitive science 12, 2 (1988), 257-285.
 Maxwell Szymanski, Martijn Millecamp, and Katrien Verbert. 2021. Visual,
textual or hybrid: the effect of user expertise on different explanations. In 26th
International Conference on Intelligent User Interfaces (College Station, TX, USA)
(IUI '21) . Association for Computing Machinery, New York, NY, USA, 109-119.

doi:10.1145/3397481.3450662
 Kentaro Matsumoto Taro Shimizu and Yasuharu Tokuda. 2013. Effects of the use

of differential diagnosis checklist and general de-biasing checklist on diagnostic
performance in comparison to intuitive diagnosis. Medical Teacher 35, 6 (2013),

e1218-e1229. arXiv:https://doi.org/10.3109/0142159X.2012.742493 doi:10.3109/

0142159X.2012.742493 PMID: 23228085.
 Amos Tversky and Daniel Kahneman. 1974. Judgment under Uncertainty:

Heuristics and Biases: Biases in judgments reveal some heuristics of thinking
under uncertainty. science 185, 4157 (1974), 1124-1131.
 Michelle Vaccaro, Abdullah Almaatouq, and Thomas Malone. 2024. When

combinations of humans and AI are useful: A systematic review and metaanalysis. Nature Human Behaviour 8, 12 (2024), 2293-2303.
 Helena Vasconcelos, Matthew Jorke, Madeleine Grunde-McLaughlin, Tobias

Gerstenberg, Michael S Bernstein, and Ranjay Krishna. 2023. Explanations can
reduce overreliance on ai systems during decision-making. Proceedings of the
ACM on Human-Computer Interaction 7, CSCW1 (2023), 1-38.
 Xinru Wang and Ming Yin. 2021. Are Explanations Helpful? A Comparative
Study of the Effects of Explanations in AI-Assisted Decision-Making. In Proceedings of the 26th International Conference on Intelligent User Interfaces (College
Station, TX, USA) (IUI '21) . Association for Computing Machinery, New York,

NY, USA, 318-328. doi:10.1145/3397481.3450650
 Christopher D Wickens. 2017. Mental workload: assessment, prediction and
consequences. In international symposium on human mental workload: models


and applications . Springer, 18-29.
 Yaniv Yacoby, Ben Green, Christopher L. Griffin Jr. au2, and Finale Doshi Velez.

2022. "If it didn't happen, why would I change my decision?": How Judges

Respond to Counterfactual Explanations for the Public Safety Assessment.

[arXiv:2205.05424 [cs.HC]](https://arxiv.org/abs/2205.05424)
 Koji Yatani, Zefan Sramek, and Chi-Lan Yang. 2024. AI as Extra
herics: Fostering Higher-order Thinking Skills in Human-AI Interaction.

[arXiv:2409.09218 [cs.HC]](https://arxiv.org/abs/2409.09218) https://arxiv.org/abs/2409.09218
 R.E. Young, A.L. Becker, and K.L. Pike. 1970. Rhetoric: Discovery and Change .

Number v. 1-2 in Rhetoric: Discovery and Change. Harcourt, Brace & World.

https://books.google.com/books?id=tKktkEUZxWQC
 Bo Yuan and Jiazi Hu. 2024. Generative AI as a tool for enhancing reflective
learning in students. arXiv preprint arXiv:2412.02603 (2024).
 Liudmila Zavolokina, Kilian Sprenkamp, Zoya Katashinskaya, Daniel Gordon

Jones, and Gerhard Schwabe. 2024. Think fast, think slow, think critical: designing an automated propaganda detection tool. In Proceedings of the 2024 CHI
conference on human factors in computing systems . 1-24.
 Angie Zhang, Olympia Walker, Kaci Nguyen, Jiajun Dai, Anqing Chen, and

Min Kyung Lee. 2023. Deliberating with AI: Improving Decision-Making for
the Future through Participatory AI Design and Stakeholder Deliberation. Proc.
ACM Hum.-Comput. Interact. 7, CSCW1, Article 125 (April 2023), 32 pages.

doi:10.1145/3579601
 Yunfeng Zhang, Q. Vera Liao, and Rachel K. E. Bellamy. 2020. Effect of confi
dence and explanation on accuracy and trust calibration in AI-assisted decision
making. In Proceedings of the 2020 Conference on Fairness, Accountability, and
Transparency (Barcelona, Spain) (FAT* '20) . Association for Computing Machin
ery, New York, NY, USA, 295-305. doi:10.1145/3351095.3372852


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


# Appendix


# A Technical Details of AACT

# A.1 Calculating AI's Confidence on Any

# Decision Given Any Argument


A critical building block for enabling AI's counterfactual perspectivetaking is the estimation of PM ( y [*] | x [*] )-AI's confidence on any decision y [*] ∈Y given any argument x [*] ⊆ x . Calculating PM ( y [*] | x [*] )

requires us to marginalize out the features not included in the
argument x [*], denoted as x [*] (i.e., x [*] ∪ x [*] = x ):


∫
PM ( y [*] | x [*] ) = PM ( y [*] | x [*] , x [*] ) · P ( x [*] | x [*] ) dx [*]


where PM ( y [*] | x [*] , x [*] ) can be given by the AI model m and P ( x [*] | x [*] )

is the value distribution for features that are not a part of the argument x [*] given the specified feature values in the argument. Since

the exact integration is difficult to compute, we use Monte Carlo

sampling to approximate this marginalized probability based on a

set of L = 5000 instances sampled from the empirical distribution
of P ( x [*] | x [*] ) given by the AI model's training dataset D :


PM ( y [*] | x [*] ) ≈

L


L
∑︁

PM ( y [*] | x [*] , x [*] i [)] where x [*] i [~] [P][D] [(] [x] [*] [|] [x] [*] [)]
i =1


Here, PD ( x [*] | x [*] ) is computed by restricting sampling from train
ing data instances whose values on argument features are the same
as those specified in x [*] . In practice, training data instances with
exactly the same argument values as those specified in x [*] may be

sparse, potentially making the estimation of the empirical distribution PD ( x [*] | x [*] ) unreliable. To address this issue, we may further

simplify the approximation assuming the independence between
argument features (i.e., features in x [*] ) and non-argument features
(i.e., features in x [*] ):


PM ( y [*] | x [*] ) ≈

L


L
∑︁

PM ( y [*] | x [*] , x [*] i [)] where x [*] i [~] [P][D] [(] [x] [*] [)]
i =1


# A.2 Generating Arguments for Alternative

# Decisions


To generate strong conflicting arguments, for each alternative de
cision yc = yh, AI can identify the "strongest argument" for that
'
decision xc = arg max xc ['] [⊆] [x] [P][M] [(] [y][c] [|] [x] c [)][, which is a subset of features]
such that when focusing only on their values, AI's confidence in

yc reaches the highest. In practice, searching through all possible
feature subsets to identify xc can be computationally challenging.

Thus, we use LIME, a popular post-hoc explainable AI method, to

explain the AI model m and approximate the computation of xc .
LIME can generate feature importance score s ( Xi,y [*] ) for every
feature Xi towards any decision y [*] . When constructing xc for a

specific alternative decision yc, we can rank all features based on

their "contribution" towards yc using their feature importance score
s ( Xi,yc ). Then, we include only the ones with s ( Xi,yc ) > μ ( μ > 0
is a pre-specified threshold) into xc .


# B Example AACT User Interfaces


Figure 8 shows an example user interface for a decision-making

task before AI assistance is shown, for the Recommender, Analyzer,

and AACT treatments. AI assistance will be shown on the right

after users submits their initial decision. Figures 9, 10, 11, 12, show

example user interfaces for the AACT treatment.


# C Additional User Study Details

# C.1 Dataset and AI Model Details


Dataset: We used the Ames Housing Dataset, which contained

79 features and the regression problem was to predict house sales

price. We selected 8 features: number of bedrooms, number of central
AC, number of fireplaces, overall material and finish, kitchen quality,
overall condition, age when sold, living area . All features except
the age when sold feature were used as they were; the age when
sold feature was constructed by subtracting each house's Year Sold
feature by Year Built feature. To generate discrete class labels, we
converted the house sales price into three categories, Low (less
than $100,000), Medium ($100,000 to $200,000), and High (more than

$200,000), resulting in an imbalanced dataset with 237, 1837, and

857 instances in each class and 2930 instances in total.

AI Model: We divided the dataset into the training and test set

based on a 80:20 split. We performed a grid search on the Logistic

Regression model using the training set only and used the best
performing set of hyperparamaters: we used the Newton-CG (con
jugate gradient) solver while all other hyperparameters were set

to Scikit-learn's default values. The model's performance on the

test set was: accuracy=0.8737, balanced accuracy= 0 . 795, F1 score
for class Low =0 . 694, F1 score for class Medium =0 . 902, F1 score for
class High = 0 . 851.


# C.2 Metrics and Questions


Table 6 shows the metric details for reliance and learning measure
ments.

Table 7 shows the full list of questions in the demographic survey.

Education data was collected using the question "What is your

highest level of education completed?" and the options: Prefer not to
answer, No formal education, Elementary school, Middle school, High
school diploma or equivalent (GED), Some college no degree, Trade
school or certificate program, Associate's degree, Bachelor's degree,
Master's degree, Professional degree, Doctorate or higher .

Table 8 shows the full list of questions in the exit survey.


# C.3 Demographics data


Data from demographics survey: Task familiarity was measured

using the question "How familiar are you with the task background

of real estate markets?" and a 5 point Likert scale. The participants'

distribution was: 1 : n = 90 , 2 : n = 105 , 3 : n = 112 , 4 : n =
77 , 5 : n = 18. AI familiarity was measured using the question "How

familiar are you with artificial intelligence (AI) technologies?" and

a 5 point Likert scale. The participants' distribution was: 1 : n =
2 , 2 : n = 31 , 3 : n = 83 , 4 : n = 193 , 5 : n = 93. The participants'
education distribution was: Prefer not to answer: n = 1, No formal
education: n = 0, Elementary school: n = 0, Middle school: n = 3,
High school diploma or equivalent (GED): n = 39, Some college


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


no degree: n = 74, Trade school or certificate program: n = 13,
Associate's degree: n = 32, Bachelor's degree: n = 147, Master's
degree: n = 76, Professional degree: n = 5, Doctorate or higher:
n = 12.

# Data from Prolific: We also report demographics distribution

provided by Prolific, including their age, gender, and ethnicity:


Age: M = 42 ,SD = 13 . 02
Gender: female: n = 210, male: n = 200
Ethnicity: White: n = 295, Black: n = 58, Asian: n = 28, Mixed: n = 18,
Other: n = 12, Data expired: n = 2


# D Additional User Study Results

# D.1 RQ2: Effects on Learning


To understand if AACT helps decision-makers build knowledge

about the decision domain that are necessary for them to solve fu
ture decision tasks on their own, we look into participants' learning

while they were actively receiving AI assistance (i.e., the improve
ment of their initial decision accuracy in the intervention stage

over their decision accuracy in the pre-test) and their learning upon

the completion of the AI assistance (i.e., the improvement of de
cision accuracy in post-test over that in pre-test; also referred to

as the "incidental learning"). As shown in Figure 13, there is

no significant difference across treatments for both the learning

during intervention ( F (3 , 398) = 1 . 046 , p = 0 . 372) and learning after
intervention ( F (3 , 398) = 1 . 193 , p = 0 . 312).

Nonetheless, we note an interesting trend that, compared to

other treatments with AI assistance, AACT seemed to result in

more learning when participants were actively receiving the AI

assistance ( M = 0 . 157 ,SD = 0 . 404), but such learning did not

seem to fully transfer to the post-test stage. We conjecture that one

possible reason might be that the AACT treatment was generally

more time-consuming and mentally demanding than the other

two treatments with AI assistance (as shown in Section 5.2), thus

participants in the AACT treatment may be more fatigued in the

post-test stage, limiting their ability to show optimal independent

decision performance.


# D.2 RQ3: Effects on Perceptions of AI


Figure 14 shows participants' survey metrics on perceptions of AI

assistance; One-way ANOVA tests yielded no significant differences

between treatments.


# D.3 RQ4: Individuals with lower education has

# more negative subjective perceptions of

# AACT


In general, we find participants with lower education levels (e.g.,

without bachelors) have more negative perceptions of AACT. For

example, within the subgroup of participants with no bachelor

degrees, we detect significant differences in their perceptions of

AI's trustworthiness ( F (2 , 114) = 3 . 959 , p = 0 . 022 ,η = 0 . 065) and
future use of AI ( F (2 , 114) = 5 . 311 , p = 0 . 006 ,η = 0 . 085) across

treatments-those who used AACT indicated lower trustworthi
ness of the AI assistance ( M = 3 . 184 ,SD = 1 . 01) than those used
Recommender ( M = 3 . 725 ,SD = 0 . 905; p = 0 . 034 ,d = -0 . 565),

and AACT users also reported lower willingness for future use of


the AI ( M = 3 . 184 ,SD = 1 . 036) compared to Recommender users
( M = 3 . 725 ,SD = 0 . 905; p = 0 . 034 ,d = -0 . 565) and Analyzer users
( M = 3 . 872 ,SD = 0 . 978; p = 0 . 012 ,d = -0 . 683). Furthermore, when

analyzing within participants of the AACT treatment, we also found

those without bachelors reported significantly lower scores on all

AI perception metrics compared to those with bachelors ( p < 0 . 001).


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


Figure 8: Example user interface for a decision-making task before AI assistance is shown, for the Recommender, Analyzer,

and AACT treatments. AI assistance will be shown on the right after users submits their initial decision.


# Category Measurement Details


Number of tasks where humans' final decisions match AI's prediction
Agreement Fraction Total number of tasks


Switch Fraction Number of tasks where humans switch to match AI in their fTotal number of tasks where humans' initial decisions differ from AInal decisions

# Reliance


Number of tasks where AI is wrong and humans' final decisions match AI
Over-reliance Ratio Total number of tasks where AI is wrong


Under-reliance Ratio Number of tasks where AI is correct and humans' fTotal number of tasks where AI is correctnal decisions difer from AI


acc(intervention) - acc(pre-test)


1- acc(pre-test) if acc(intervention) > acc(pre-test)
acc(intervention) - acc(pre-test)


# 





# 





acc(pre-test) if acc(intervention) < acc(pre-test)


acc(pre-test) if acc(intervention) < acc(pre-test)


0 otherwise


# Learning


Learning during intervention Normalized change =


Learning after intervention Normalized change =


acc(intervention) - acc(pre-test)


1- acc(pre-test) if acc(intervention) > acc(pre-test)
acc(intervention) - acc(pre-test)


0 otherwise


Table 6: Metric details for reliance and learning measurements.


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


Figure 9: Example user interfaces for AACT during targeted self-reflection: user is asked questions about additional features

and inputs their change in confidence using a slider.


# Category Questions


I would prefer complex to simple problems.


Need for Cognition (NFC)


I like to have the responsibility of handling a situation that requires a lot of thinking.


- Thinking is not my idea of fun.


- I would rather do something that requires little thought than something that is sure to challenge my thinking

abilities.


AI Familiarity How familiar are you with artificial intelligence (AI) technologies?


Task Familiarity How familiar are you with the task background of real estate markets?


A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?

Cognitive Reflection Test (CRT)

If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?


In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover

the entire lake, how long would it take for the patch to cover half of the lake?


Table 7: Demographics survey questions, excluding education.* indicated questions with reverse scoring.


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


Figure 10: Example user interfaces for presenting AI-based correction suggestions in AACT: AI explains how adding certain

features to the user's evidence might strengthen or weaken their prediction.


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


Figure 11: Example user interfaces for data-based triangulation in AACT: AI provides additional information from the empirical

data distribution and explains how it was computed.


Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making CHI '26, April 13-17, 2026, Barcelona, Spain


# (a) Learning during intervention


# (b) Learning after intervention


Figure 13: Comparisons on participants' learning (a) while receiving the AI assistance intervention (b) after receiving the

AI assistance intervention. Values for the Human-only treatment are computed based on the normalized change of decision

accuracy between corresponding sessions of tasks (learning during intervention: tasks 6-15 vs. tasks 1-5, learning after

intervention: tasks 16-20 vs. tasks 1-5); they provide a baseline for organic learning happened due to repetitive task completion

without AI assistance interventions. Error bars represent 95% confidence intervals of the mean values.


CHI '26, April 13-17, 2026, Barcelona, Spain Tian et al.


# Category Measurement Questions


Decision Confidence I feel confident in the decisions I made.


User Experience


Critical Thinking


Perceptions of AI


Efficacy I am confident about my ability to complete the decision making task.


Mental Demand The process of making predictions is mentally demanding.


Effort I have to work hard (mentally and physically) to accomplish my level of performance.


Evaluate Evidence In each task, before reaching my final decision, I evaluated all evidence thoroughly.


Multiple Perspectives I considered each prediction from multiple perspectives and examined multiple hypotheses.


Counter Evidence When working on each prediction task, I actively seek evidence that might counter what I already

know.


Explain Prediction For each prediction, I can give reasons and arguments for my decision.


Helpfulness The AI model's assistance is helpful for me to make good decisions.


Trustworthiness The AI model can be trusted to provide reliable decision support.


Understanding I understand how the AI model works to help me make predictions.


Autonomy My interaction with the AI model in these tasks helped me maintain the control to make predictions

in the way I see fit.


Think Deeply The AI model helped me think more deeply about my decisions.


Encourage Reflection The AI model encouraged me to reflect critically on my initial assumptions.


Thought-provoking I found the interaction with the AI model thought-provoking.


Future Use I would like to continue working with the AI model.


Satisfaction I am satisfied with the AI model's assistance and the decision-making process.


-- For the last 5 tasks you completed, when AI assistance was not available, describe your general

Open-ended Questions decision strategies.


-- Why did you find the AI assistance helpful or not helpful for making decisions? How can it be

improved?


-- Which AI assistance do you prefer and why? (1) This study's assistance without showing the AI's

prediction, or (2) assistance that directly shows the AI's prediction.


Table 8: Exit survey questions. User Experience, Critical Thinking, and Perceptions of AI questions are measured using Likert

# scales.


5

4

3

2

|Col1|Col2|Col3|Col4|Col5|Col6|Col7|Col8|Col9|
|---|---|---|---|---|---|---|---|---|
||||||||||
||||||||||
||||||||||
|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|Helpfulness<br>Trustworthiness<br>Understanding<br>Autonomy<br>Think deeply<br>Encourage reflection<br>Thought-provoking<br>Future Use<br>Satisfaction<br>Recommender<br>Analyzer<br>AACT|


Figure 14: Comparisons on users' perceptions of AI across treatments. Error bars represent 95% confidence intervals of the

mean values.