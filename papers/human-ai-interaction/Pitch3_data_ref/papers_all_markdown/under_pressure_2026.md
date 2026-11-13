# Under pressure: how time constraints, task complexity, and AI reliability shape human-AI interaction

Lukas Hermanns and Timm Teubner


Digital Service Engineering, Technical University Berlin, Berlin, Germany


# ARTICLE HISTORY
Received 7 May 2025
Accepted 3 November 2025


# KEYWORDS
Human-AI interaction; time
pressure; online experiment;
trust in AI; dual-processing
frameworks


# 1. Introduction


The rapid advancement of artificial intelligence (AI) is
fundamentally transforming the landscape of knowl
edge work, revolutionising how professionals across
various domains approach problem-solving and
decision-making (Chanda 2024; Daniloaia and Tur
turean 2024; Gruetzemacher and Whittlestone 2022).
As AI systems become increasingly sophisticated and
ubiquitous, understanding the dynamics of human-AI
collaboration has emerged as a critical area of research,
with profound implications for organisational
efficiency, innovation, and the future of work itself (Ben
bya, Pachidi, and Jarvenpaa 2021; Haefner et al. 2021;
Jarrahi 2018). However, real-world scenarios often
involve time constraints that can significantly impact
human judgment and performance (Ranyard, Crozier,
and Svenson 2002, 201), necessitating a deeper explora
tion of how these pressures influence the overall effec
tiveness of human-AI teams.

Emerging literature has documented the potential of
human-AI collaboration, highlighting improvements in
manageable workload, accuracy, processing speed, and
the ability to handle complex information across various
domains (Dell'Acqua et al. 2023; Lai, Kankanhalli, and


Ong 2021). Concurrently, research has also examined
the cognitive processes underlying human decisionmaking under time pressure, often drawing upon
dual-processing frameworks of reasoning such as the
Heuristic-Systematic Model (HSM; Chaiken 1980), the
Elaboration-Likelihood Model (ELM; Cacioppo et al.
1986), or fast and slow thinking (Kahneman 2011) to
explain shifts in information processing strategies.

According to these models, individuals utilise one of
two cognitive pathways, the faster heuristic pathway or
the more deliberate and effortful systematic pathway,
based on available mental capacity, external cues, and
boundary conditions, as well as individual factors such
as motivation. Time pressure is usually considered a
condition that shifts processing towards the heuristic
pathway. Under time pressure, individuals tend to
reduce information search and shift to less computa
tionally demanding heuristics (e.g. acceleration,
filtration, and strategy shifting; Spiliopoulos, Ortmann,
and Zhang 2018). Initial evidence suggests that people
are more likely to follow AI recommendations if
ample decision time is available (Cao, Gomez, and
Huang 2023). However, the extent to which time con
straints influence reliance on AI-generated


CONTACT Lukas Hermanns Lukas.hermanns@campus.tu-berlin.de Digital Service Engineering, Technical University Berlin, Berlin, Germany
Supplemental data for this article can be accessed online at https://doi.org/10.1080/0144929X.2025.2587732.

© 2025 The Author(s). Published by Informa UK Limited, trading as Taylor & Francis Group
This is an Open Access article distributed under the terms of the Creative Commons Attribution License (http://creativecommons.org/licenses/by/4.0/), which permits unrestricted use,
distribution, and reproduction in any medium, provided the original work is properly cited. The terms on which this article has been published allow the posting of the Accepted
Manuscript in a repository by the author(s) or with their consent.


recommendations and overall performance in pro
fessional settings remains underexplored, presenting a
critical blind spot in our ability to optimise human-AI
teamwork.

In contrast to human-computer teams involving preLLM decision support and expert systems, today's AI sys
tems warrant a fresh investigation into the effects at play.
Distinguishing features include (1) instantaneous natu
ral language interactions, resulting in an increasingly
anthropomorphic perception by users (Nov, Singh, and
Mann 2023), and (2) universal access by virtually anyone
(almost) free of charge (in contrast to expensive and
restricted expert systems available to exclusive groups
only, as the name suggests). Moreover, these systems
(3) are no longer restricted to specific domains but uni
versally applicable across tasks and disciplines, and (4),
are more powerful than systems of the past by an order
of magnitude. They are also (5) capable of creating
non-deterministic, creative outputs, while (6) providing
context, explanations, and references to illustrate the
underlying reasoning. Importantly, the broader societal
impacts of these AI systems are contingent on how tech
nological features, human goals, and contextual factors
interact over time (Sabherwal and Grover 2024), empha
sising the need to understand conditions like time
pressure that shape human reliance on AI.

This study addresses this development by investi
gating the impact of time pressure on human-AI-team
performance. By means of an online experiment, we
investigated scenarios of collaboration between knowl
edge workers and AI systems. Participants were tasked
to consider an AI's responses to various prompts across
different domains and difficulties and to state their will
ingness to rely upon these responses.

In a nutshell, we find a negative effect of time
pressure on human-AI performance. Intriguingly, our
results suggest that time pressure does not unequivo
cally alter the degree to which humans rely on AI-gen
erated answers, challenging some of HSM's major
assumptions about how external factors such as time
pressure or task difficulty cause humans to revert to
heuristic decision-making and employ cognitive short
cuts. These insights provide a more nuanced under
standing of human-AI collaboration, extending
existing knowledge by illuminating the specific con
ditions under which time pressure affects team perform
ance and decision-making processes.

The remainder of this paper is structured as follows:
Section 2 presents a review of relevant literature and
theory and develops our hypotheses based on the Heur
istic-Systematic Model and existing research on humanAI collaboration as well as time pressure. Section 3
details our experimental design and methodology. In


Section 4, we present our results. Finally, Section 5 dis
cusses the implications of our findings for both theory
and practice, acknowledges limitations, and illustrates
paths for future work.


# 2. Related work


2.1. Time pressure and decision-making


Time pressure has emerged as one of the most impor
tant stressors in modern knowledge work environments
due to new technologies, the expectation of ever-faster
response times, as well as the 'always-available' nature
of communication technology (Ninaus et al. 2015).
Across the EU, 11% of workers report always working
under time pressure and another 25% report doing so
often (Eurostat 2020). As organisations adopt new tech
nologies and practices into their operations, time
pressure on knowledge workers keeps mounting (Hur
tienne, Stilijanow, and Junghanns 2014).

The influence of time pressure on decision-making has
been recognised in the domain of Information Systems for
decades (Hwang 1994) and it is known to fundamentally
alter human decision-making. Specifically, time pressure
induces a speed-accuracy tradeoff, as decision-makers
typically sacrifice precision for expedience. It manifests
in reduced information search behaviours and increased
reliance on heuristics (Spiliopoulos, Ortmann, and
Zhang 2018). Decision-makers under time constraints
often rely on pre-existing mental heuristics rather than
thoroughly evaluating all available information. While
this behaviour may enhance decision-making consistency
by reducing random responses, it generally causes per
formance to deteriorate due to the application of oversim
plified decision rules (Rice and Trafimow 2012).
Additionally, time pressure amplifies information prefer
ences, leading individuals to selectively focus on certain
risk-related cues while ignoring others.

While some research suggests that time pressure may
push decision-makers towards more extreme choices
and reduced hedging behaviours (Madan, Spetch, and
Ludvig 2015), other studies indicate that individuals
do not optimally adjust their strategies under time con
straints. Rather, they rely on fixed heuristics, which can
lead to increased decision errors and, in some cases, sys
tem failures (Kerstholt 1994). Moreover, decisionmakers initially become more conservative in low-risk
situations but may take greater risks in high-risk scen
arios under time pressure (Dror, Basola, and Busemeyer
1999). This effect is especially pronounced in contexts
involving potential losses, where time pressure has
been shown to significantly increase risk-seeking behav
iour (Young et al. 2012).


Time pressure also increases strategic ignorance,
where decision-makers intentionally avoid information
that could complicate their choices, reducing cognitive
load and enabling quicker, though potentially subopti
mal decisions (Jarke-Neuert and Lohse 2022).

Moreover, individual differences play a significant
role in how time pressure impacts decision-making.
Experienced professionals may cope better with time
constraints due to their expertise and familiarity with
the task at hand, while novices may be more susceptible
to the adverse effects of time pressure.

Time pressure in different phases of decision-making
also influences human-AI collaboration, with longer
final decision time increasing the likelihood of following
AI suggestions (Cao, Gomez, and Huang 2023). While
AI can facilitate rapid decisions by providing immediate
recommendations, suboptimal integration and design
can increase cognitive load, thereby amplifying the
negative effects of time constraints. Additionally, time
pressure may influence users' trust in AI recommen
dations, potentially leading to over-reliance when
rushed or under-utilisation due to insufficient evalu
ation time.

Recent technological advances, such as AI-driven
decision support systems and automation tools, aim to
alleviate time pressure by streamlining information pro
cessing and offering quick insights. However, these tools
may also introduce new complexities and require care
ful integration into existing workflows. To mitigate
these negative impacts, individuals often employ strat
egies like prioritising tasks, enhancing time manage
ment skills, and applying stress-reduction techniques
to improve decision-making.

In summary, decisions become riskier, faster, and
more heuristic under time pressure, with individuals
adjusting their strategies based on task familiarity and
risk context. Consequently, the impact of time pressure
on human-AI collaboration is multifaceted, affecting
both AI supervision and advice uptake strategies. The
observation of strategic ignorance and selective infor
mation usage further suggests that decision-makers
may not always use AI recommendations optimally
when rushed (Jarke-Neuert and Lohse 2022). This
dynamic is reflected in our first hypothesis in the follow
ing section.


2.2. Human-AI collaboration


GenAI is transforming knowledge work by enhancing
productivity, creativity, innovation, and flexibility (Ben
bya, Strich, and Tamm 2024). As genAI becomes inte
grated into workflows, tasks increasingly shift from
manual creation based on individual skills to roles


involving prompting, supervising, and assessing AI out
puts (Palani and Ramos 2024). This AI augmentation of
workers enables the production of high-quality outputs
without necessarily possessing the skills required for
manual creation (Ritala, Ruokonen, and Ramaul
2024). This also promotes machines from mere tools
to agents who communicate, participate in task coordi
nation, and possess a degree of agency, opening up a
vast novel research agenda on the risks and benefits of
' machines as teammates ' (Seeber et al. 2020, 1). In con
trast to an outright automation of tasks and decisions
via AI systems, many current use cases of AI are struc
tured as human-in-the-loop designs, either due to the
standalone AI systems' lack of capabilities or with the
human as a ' last line of defense against AI-failures '
(Passi and Vorvoreanu 2022, 1). As such, it is the
human's role to effectively oversee the AI, to accept
valid AI suggestions while overriding erroneous out
puts. In practice, this complementarity in human-AIcollaboration is not easily achieved, oftentimes leading
to suboptimal results compared to the standalone per
formance of humans or AI systems respectively
(Schoffer et al. 2025). A growing body of research has
further complicated this picture by highlighting that
humans exhibit a significant algorithmic appreciation
bias, whereby they tend to inherently trust algorithmic
advice, even when such trust may not be warranted
based on the actual quality or reliability of the AI's out
puts (Sachin and Schecter 2024).

Considering this transformation of the human factor
in knowledge work, human judgment, and critical
evaluation skills emerge as new essential skills for ensur
ing the quality of work products, as only effective super
vision of genAI will ensure the quality of results and
mitigation of harm (Solaiman et al. 2023; Weidinger
et al. 2023; Weisz et al. 2023).

Depending on the context, harm from inadequate
oversight may manifest in different ways: In 2012, a
glitch in a trading algorithm in conjunction with
inadequate fail-safe mechanisms and lacking human
supervision caused a sustained USD ~450 million loss
within a 45-minute time frame (Securities and Exchange
Commission 2013); a similar glitch in 2010 already
caused a temporary loss of USD 1 trillion in market
capitalisation in the Dow Jones Industrial Average
Index (Securities and Exchange Commission & Com
modity Futures Trading Commission 2010). In health
care, AI systems providing false-negative diagnostics
or inadequate treatment recommendations can pose
life-threatening risks to patients if these errors are not
corrected by human supervisors (Macrae 2019). In the
realm of autonomous vehicles, self-driving cars have
become disengaged or involved in crashes due to


misclassifying their surroundings (Leilabadi and
Schmidt 2019). Although stakes in knowledge work
environments usually tend to be less life-threatening,
unintended AI behaviours - such as biases, hallucina
tions, or poor outputs resulting from flawed training
data - can significantly impact the quality of work pro
duced by genAI users.

The presence of time pressure in an environment
with imperfect genAI outputs likely leads to a deterio
ration in the effectiveness of human supervision of the
genAI. We therefore suggest that:


H1 The presence of time pressure adversely affects
human-AI-team performance.


2.3. Dual processing frameworks


The shift in cognition and processing of stimuli under
the influence of stressors such as time pressure has
long been conceptualised in dual processing frame
works. While nomenclature and conceptual details
have evolved over time, frameworks such as the Heuris
tic Systematic Model (HSM; Chaiken 1980), the Elabor
ation Likelihood Model (ELM; Cacioppo et al. 1986), or
System 1 and System 2 Thinking (Kahneman 2011) share
the underlying concept of two separate pathways of
human cognition that exist for automated and deliber
ate processing of information.

The HSM is considered the foundational theory in
the domain and distinguishes heuristic (automatic,
sub-conscious, low-effort) and systematic (deliberate,
conscious, high-effort) modes of information proces
sing (Chaiken 1980). Systematic processing is typically
chosen for information of high personal relevance or
general task importance, when information is unclear
or complex, and when sufficient cognitive resources
and time are available to the individual. In contrast, trig
gers for heuristic processing include familiarity with the
information, the presence of heuristic cues that allow for
mental shortcuts, low motivation for the task at hand, as
well as a lack of cognitive resources or time.

Dual processing frameworks help understand how
users process information, make decisions, and enact
behaviours while engaging with digital systems, for
instance, in digital healthcare, software development,
and knowledge management (Watts 2015).

Given that genAI systems are fundamentally
designed to augment human capabilities and enhance
workforce productivity, it is crucial to understand how
cognitive processing patterns influence the quality of
human-AI interaction (Brynjolfsson and Mitchell
2017; Wilson and Daugherty 2018). As these systems
become increasingly integrated into knowledge work


and decision-making processes (Rahwan et al. 2019),
ensuring that users can effectively calibrate trust and
validate AI outputs under varying cognitive conditions
becomes paramount for realising the technology's
intended benefits while mitigating potential risks from
errors, hallucinations, and inaccuracies (Hancock et al.
2011).


2.4. Task complexity


Task complexity refers to the component, coordinative,
and dynamic complexity of a task (Wood 1986) as well
as its baseline skill or tool requirements, which often
necessitate the simultaneous processing of multiple
pieces of information, the application of specialised
skills, and the management of uncertainty (Bedny, Kar
wowski, and Bedny 2012). Such complexity places sig
nificant demands on cognitive capacity, prompting
users to increasingly rely on genAI to manage and alle
viate the cognitive load (Rodenburg et al. 2018). Task
complexity - in the context of cognitive load theory -
can be understood through the types of cognitive
demands it imposes: (1) intrinsic, (2) extraneous, and
(3) germane load (Sweller 1988, 2011). First, intrinsic
load represents the inherent difficulty of the task itself,
including the number of elements and their interactiv
ity, which require substantial cognitive resources to
manage. Second, extraneous load involves additional
cognitive effort stemming from the way information is
presented or structured; when genAI can alleviate this,
users experience less unnecessary cognitive strain.
Third, germane load is associated with the process of
constructing new knowledge or skill development.

In high-complexity tasks, all three types of loads can
increase simultaneously, creating a compounded
demand on the user's cognitive resources. GenAI can
serve as a vital support tool by reducing extraneous
load and, in some cases, supporting germane load by
aiding in complex information synthesis (Koc-Januchta
et al. 2022). However, as intrinsic load rises with task
complexity, users may increasingly rely on genAI for
solutions, potentially reducing the opportunity for
skill development and understanding. Thus, genAI's
role in task complexity is twofold: it helps manage cog
nitive load but, if overly relied upon, may inadvertently
stifle users' cognitive engagement and learning, as has
been observed for other immersive automation technol
ogies (Bueno-Vesga, Xu, and He 2021; Rodenburg et al.
2018).

The value of genAI in human-AI teams is therefore
closely tied to task complexity; theoretically, the more
complex the task, the greater the potential time and
effort saved on the human side due to genAI assistance.


However, more complex tasks heighten the stakes of
human oversight in genAI applications, as these tasks
are challenging for humans to solve independently,
difficult for genAI to handle accurately, and genAI is
potentially impossible for human supervisors to evalu
ate objectively. Consequently, the utility of genAI in
high-complexity contexts depends heavily on the accu
racy and transparency of its outputs. When AI outputs
are either erroneous or opaque, users may misjudge the
assistance provided, resulting in over-reliance on inac
curate outputs or under-utilisation of beneficial gui
dance, both of which can compromise overall
performance (Wienrich and Latoschik 2021).

In human-AI collaborations involving high task
complexity, users are thus more likely to shift from sys
tematic to heuristic processing. Under such conditions,
the cognitive effort required for a thorough evaluation
of AI output becomes prohibitively high, causing users
to rely on heuristics based on superficial cues. This
shift may lead users to base their judgments on interface
aesthetics or past AI performance, cues that may not
accurately reflect the system's current performance or
reliability. Based on this, we assume that increased
task complexity adversely affects human-AI-team per
formance (premise P1) . Moreover, we propose that:


H2 Time pressure amplifies the adverse effect of task
complexity on human-AI-team performance.


2.5. AI accuracy and advice faultiness


Generative AI systems are inherently limited in accuracy
due to challenges in data quality, reliance on probabilistic
patterns rather than factual databases, and sometimes
opaque reasoning capabilities, all of which hinder the
model's ability to produce consistently accurate and con
textually appropriate responses (Lenat and Marcus 2023;
Tang et al. 2023). Additionally, the rapidly evolving
nature of many knowledge domains further complicates
accuracy, requiring regular updates to avoid outdated


Figure 1. Research model.


responses (Mulukuntla 2022). When faced with faulty
advice, users may struggle to discern when the AI's out
puts are reliable and when they are not.

This issue is bound to become more pronounced
under conditions of time pressure or high task complex
ity, as heuristic processing is prioritised: Users unable to
engage in systematic processing may instead rely on
heuristic cues such as past interactions with the system
or the transparency of its processes (Daronnat et al.
2021). They may trust AI outputs based on perceived
system authority rather than accuracy when cognitive
resources are strained (Shin, Zaid, and Ibahrine 2020).
Even in the absence of strain, some users are easily
deceived by untrustworthy AI systems which exaggerate
their competence (Banovic et al. 2023). Additionally,
cognitive biases introduced by heuristics increase the
likelihood of systematic errors (Kleinmuntz 1985),
further reinforcing user dependence on inaccurate AI
outputs. Users may trust AI outputs even when they
are inaccurate, simply because the system appears
reliable based on superficial cues (Wienrich and
Latoschik 2021) or may simply ignore cues for untrust
worthiness (Krugel, Ostermaier, and Uhl 2022). We
thus assume that increased AI advice faultiness
adversely affects human-AI-team performance (P2).
Moreover, we suggest that


H3 Time pressure amplifies the adverse effect of AI
advice faultiness on human-AI-team performance.


Our full research model is visualised in Figure 1 below:


# 3. Method


To evaluate our research model, we conducted an online
experiment.


3.1. Treatment design


We employed a between-subjects design with (1) a con
trol group (CTR) in which participants had unlimited


time to complete the assigned tasks and (2) a treatment
group (TP) in which participants faced time pressure.
Based on the control group's recorded response times
per task, the treatment group's time limits were set to
the 30th percentile of observed response times per indi
vidual task. These values range between 6.9 and 28.1 s
per task. Table 2 outlines the control group's median-,
average-, and 30th-percentile response times per task.


3.2. Task and stimulus material


The experiment involved 36 tasks, presented in random
order for each participant. In each task, participants
were presented with a (written) prompt provided to
ChatGPT as well as its response to the prompt. Partici
pants' task was then to indicate their willingness to rely
on this response on a scale from 0 (i.e. ' not trust response
at all ') to 10 (i.e. ' fully trust the response ') as illustrated in
Figure 2. We used a correct/ incorrect ratio of 3:1 (i.e.
75% correct, 25% incorrect).

We utilised ChatGPT's actual responses (at the time
of conducting the experiment). All prompt-response
pairs were created using the free version of ChatGPT
3.5 over the course several days by the author team.
Each prompt was entered into a new session of
ChatGPT and generally, only one response was gener
ated per prompt. To obtain incorrect responses, some
prompts had to be repeated in new sessions until an
incorrect response was given by ChatGPT.

Participants were briefed that, just as ChatGPT's actual
responses in live interactions, some of the responses dis
played in the experiment might be erroneous but were
not provided with the actual ratio of correct/incorrect
responses. Generally, we selected prompts for which
there exist definitive, verifiable or falsifiable answers (i.e.
objectively correct or incorrect; verifiable through logic,
math or fact-checking). For the responses, where an objec
tively correct response might not unequivocally exist, (e.g.
'What's the most relevant academic paper on AI?'), we
relied on internet research and discussions within the
author team to determine whether an answer would be
widely accepted as correct.


The tasks can be structured along nine categories of
typical shortcomings in the capabilities of generative
AI tools (see Table 1). These categories were adapted
from an evolving collection of failures and weaknesses
observed in ChatGPT's performance by various
researchers (Borji 2023). Each participant was shown
the full set of 36 tasks in random order while ensuring
that faulty responses were not shown in direct consecu
tive order. The share of incorrect responses for each of
the 36 experiment periods was in line with the expected
share of 25% without any additional efforts for counter
balancing (see Appendix A for additional information
and an exemplary participant sequence).


3.3. Task difficulty


As an important control variable, we assessed task
difficulty in a separate auxiliary survey with 45 partici
pants. Participants were asked to state how difficult
they perceived to solve each prompt on a scale from 1
(very easy) to 10 (very difficult). While participants
reported perceived difficulty levels across the entire
scale, average difficulty levels per task ranged between
2.37 and 7.64. Average difficulty level per task is also
provided in Table 2 below. We ensured similar average
difficulties between tasks with correct (4.21) and incor
rect (4.39) AI responses (two-sample t-test; p = .773).


3.4. Measurement instrument


For each task, we captured participants' stated willingness
to rely on ChatGPT's response on an 11-point Likert scale
from 0 (i.e. ' not trust response at all ') to 10 (i.e. ' fully trust
the response '). In a minority of cases (9.8%), participants
in the time pressure treatment failed to respond within
the time limit. We then set their response to a default
value of 5, reflecting indecisiveness. Responses were
incentivised such as that participants received an
additional, variable payoff depending on how well their
willingness to rely matched the response's correctness.
For this performance value, we used the difference
between a participant's stated willingness to rely and


Table 1. Prompt categories and rationale for inclusion in stimulus material.

Category Rationale


Logic Logical reasoning capabilities were lacking upon release of ChatGPT, even as responses appeared linguistically cohesive and plausible
Arithmetic In its earlier releases, even simple arithmetic prompts would regularly yield false results
Factual Prompts for factual information have objectively correct answers, yet were sometimes answered incorrectly by ChatGPT
Contemporary ChatGPT used to have a knowledge cut-off date and wouldn't be able to include more recent events
Hallucination Numerous cases of factually incorrect, completely fabricated responses to prompts were documented
Sequences A sub-category of Logic; ChatGPT appeared inept at completing both semantic and arithmetic sequences
Brainteaser A sub-category of Logic ; complex logical reasoning utilising the Cognitive Reflection Test
Text-editing Simple prompts to edit and assess texts would regularly yield outputs that do not adequately complete the prompted task
Code ChatGPT would sometimes output non-functional, yet plausible-appearing code or pseudo-code


Figure 2. Screenshot of task presentation including response scale.


the optimal level (i.e. 0 for incorrect and 10 for correct
responses). To illustrate this: A participant who indi
cated a willingness to rely of 4 for an incorrect response
would receive a performance score of 6 (i.e. 10 - | 4- 0| ).
Similarly, a participant who indicated a willingness to
rely of 9 for a correct response would receive a perform
ance score of 9 (i.e. 10 - | 9- 10| ). The bonus payment was
directly inferred from the overall performance score
across all 36 tasks where the highest possible total score
(36 × 10 = 360) yielded the maximum payoff. The distri
bution of willingness to rely and performance per cat
egory as well as per task is shown in Appendix B.


3.5. Survey


After completing the actual experiment, we surveyed
several control variables. Specifically, we surveyed par
ticipants' general risk propensity (Dohmen et al. 2011),
disposition to trust in technology (Merritt et al. 2013),
technological literacy, as well as experience with, and
usage of ChatGPT specifically. The full survey is avail
able in Appendix C.


3.6. Manipulation check


To confirm that our treatment manipulation was suc
cessful, we used a single-item manipulation check (' I
felt a lot of time pressure to evaluate the AI's responses ',
7-point Likert scale from 1 to 7). Participants from the
time pressure treatment scored significantly higher on
this scale (MCT P = 6.16 > 3.40 = MCCTR; p < .001).


3.7. Realism check


To confirm that our experiment was (1) perceived
plausible overall and (2) similarly so across both treat
ment conditions, we used a two-item realism check (' I


think that the provided prompts and responses were a
good representation of text-generative AI performance '
and ' The scenario presented here (i.e. reading and asses
sing AI text responses) seems plausible in general and
may be a common part of future knowledge-work ', 7point Likert scales from 1 to 7). Overall, participants
assessed the AI performance as very realistic (RC1 =
5.31) and representative of future knowledge work
(RC2 = 5.36) with no significant differences between
treatment conditions ( p1 = .056; p2 = .538). The high
average values >5 for both checks indicate participants
predominantly selected the two highest possible levels
of agreement with the measures. The realism and
manipulation checks are plotted in Appendix D.


3.8. Procedure and sample


We recruited 240 participants through the online
research platform Prolific. Within the field of IS
research, Prolific is accepted as a reliable and high-qual
ity source of participants with markedly higher data
quality as compared to other platforms (e.g. MTurk).
This is evidenced by participants passing attention
checks more consistently and providing more meaning
ful answers (Douglas, Ewell, and Brauer 2023; Peer et al.
2017, 2021). Using this platform also mitigates selfselection bias and enhances generalizability by tapping
into a diverse pool of participants (Russo 2022).

We used a gender-balanced sample of participants
with English language fluency. The treatment group
was recruited after the control group so that we were
able to adjust the time limits according to the completion
times observed in the control group. To mitigate poten
tial confounding effects, invitations in both conditions
were sent at the same time of day. Note that participants
from the control group could not participate in the treat
ment group again (i.e. between-subjects design).


3.9. Attention check


To ensure high data quality, we employed four separate
attention checks across the different stages of the exper
iment (briefing, main experiment, and post-experiment
survey). The final dataset contains 228 participants, after
12 submissions with more than one failed attention
check were excluded (NCTR = 113; NT P = 115).

Participants' age ranged from 18 to 71 years (mean =
29.2, median = 26; standard deviation = 9.08). The
sample exhibits a balanced gender split (male = 112,
female = 116). In terms of geographic distribution, 58%
of participants were from Europe, 34% from Africa,
and 8% from the Americas, Asia, and the rest of the
world. Most of the participants (51%) reported being
employed - either in full-time employment (38%),
part-time (11%), or due to start a new job shortly (2%)

- seeking a job (21%), not being in paid work (12%), or
did not provide employment information (16%).

Overall, the median completion time was 20.7 min
and participants received a median payoff of GBP 3.22
(including both fixed and performance-contingent
components, yielding a compensation of GBP 9.33 /
hour). Note that, by design of using time constraints
in one condition, expected completion times differ
across treatments. To account for this, we adjusted the
fixed payment accordingly, ensuring adequate compen
sation for participants (Table 3).


Table 3. Compensation for participants.


3.10. Randomisation check


To check whether the randomisation worked (i.e. ran
domly allocating participants into the control or treat
ment groups), we conduct a randomisation check. For
this, we use a set of linear and logit regression models
with age, gender, trust, and skepticism towards AI
before the experiment, ChatGPT usage time, and the
manipulation check for time pressure as dependent
variables (Table 4). The treatment variable (time
pressure: 0 = no, 1 = yes) does not have any significant
effects in any of these models except the manipulation
check for time pressure, where it is expectedly highly
significant. We thus conclude that our treatment ran
domisation was successful.


3.11. Consent, ethical approval, and data
management


Prior to participation, all participants were presented
with an informed consent page, which emphasised
the voluntary nature of the study, the anonymous
data handling, and their right to withdraw from the
experiment at any time. This study was conducted
in full compliance with our institution's ethical guide
lines, with all involved researchers having completed
training and certification in ethical research design
and human subject research. Before commencing the


Control group (n = 113) Treatment group (n = 115)


Fixed Payment GBP 3.00 GBP 2.25
Bonus Payment (med.) GBP 0.63 GBP 0.57
Time (tasks only, med.) 15 min 54 s 9 min 18 s
Time (full experiment incl. survey, med.) 26 min 4 s 17 min 41 s
Overall payment per hour (med. pay / med. time) GBP 8.36 / h GBP 9.54 GBP / h
GBP 9.33 / h


Table 4. Randomisation check.

Dependent variable


# AI ChatGPT

# Age is Female Trust in AI Skepticism Usage MC Time Pressure

OLS logit OLS OLS OLS OLS
(1) (2) (3) (4) (5) (6)


# Age is Female Trust in AI


AI
Skepticism


# Time Pressure
(0 = no, 1 = yes)


1.883 0.036 0.164 0.157 -0.015 2.758*


(1.198) (.265) (.176) (.215) (.221) (.193)
Constant 28.248* -0.053* 3.071* 2.487* 1.850* 2.398*
(.851) (.188) (.125) (.153) (.157) (.137)


Observations 228 228 228 228 228 228
R 0.011 0.004 0.002 <0.001 0.476
Adjusted R 0.006 -0.001 -0.002 -0.004 0.473
Log Likelihood -157.993
Akaike Inf. Crit. 319.987
Residual Std. Error [(df = 226)] 9.048 1.331 1.625 1.667 1.455
F Statistic [(df = 1; 226)] 2.468 0.866 0.531 0.004 204.910*


Note: Standard errors in parentheses. * p < .05; p < .01; * p < .001.


study, we obtained ethical approval from our insti
tution's Ethical Research Board (approval

# 20230530). The review also covered the data man
agement plan for this project.


# 4. Results


4.1. Human-AI-team performance


First, we investigated the effect of time pressure, AI
advice faultiness, and task complexity on human-AIteam performance . Figure 3 shows human-AI-team per
formance by time pressure (yes/no) and (1) AI response
faultiness (correct/incorrect) and (2) task complexity
(0-10):

The charts indicate marked and consistent decreases
in performance under time pressure. Specifically, par
ticipants seem to struggle with identifying faulty AI
responses as such, whereas identifying correct responses
causes less trouble. Time pressure seems to exacerbate
this deterioration, with lower performance observed
for both correct and faulty AI responses but with an
additional loss for faulty ones. As expected, task com
plexity appears to have a slightly negative effect on per
formance both with and without time pressure.

To corroborate our visual assessment statistically, we
conducted a set of linear mixed effect regressions,
addressing the data structure with repeated measures
per participant (i.e. n = 228 participants × 36 tasks =
8,208). Specifically, we used random intercepts on the
participant level. To understand the relationship
between the dependent variable performance and task


complexity, AI response faultiness, and the presence
of time pressure, we gradually introduced the main
treatment and control variables to the models and con
trol for age, sex, and period (Table 5).

In the first model (I), we only used the treatment
variable (time pressure) and see a significant negative
effect on human-AI-team performance (β = -0.693,
p < .001), supporting H1 ( The presence of time pressure
adversely affects human-AI-team performance ). When
task complexity and AI response faultiness are included
in the model (II), the effect of time pressure remains,
and the negative effects of task complexity (β =
-0.309, p < .001) and AI response faultiness (β =
-3.654, p < .001) emerge. These findings reaffirm P1
( Increased Task Complexity adversely affects humanAI-team performance) and P2 ( Increased AI response
faultiness adversely affects human-AI-team perform
ance), respectively. These effects remain stable and sig
nificant once the control variables age, gender, and
period are introduced to the model (III), and these vari
ables do not exert any significant effects.

The inclusion of interaction effects in the model
(IV) uncovered a more nuanced view. Time pressure
exhibits a significant interaction effect with both task
complexity (β = 0.374, p < .001) and AI response faulti
ness (β = -0.561, p < .001). This negative interaction
effect between time pressure and faulty AI responses
indicates that time pressure exacerbates the negative
impact of AI errors on human-AI-team performance,
supporting H3 ( Time pressure amplifies the adverse
effect of AI response faultiness on human-AI-team
performance) .


Figure 3. Human-AI-team performance by time pressure and (1) AI response faultiness (left) and (2) task complexity (right) for control
(CTR) and time pressure (TP) groups. Error bars show 95% confidence intervals.


Table 5. Regression of human-AI-team performance, time pressure, task complexity, and AI response faultiness

DV : Human-AI-team performance


I II III IV V


# Time Pressure
(0 = no, 1 = yes)


Time Pressure - .693* - .693* - .690* - 2.145* - 2.141*
(0 = no, 1 = yes) (.099) (.099) (.100) (.212) (.213)

Task Complexity - .309* - .308* - .498* - .497*
(.022) (.022) (.031) (.031)
AI response faultiness - 3.654* - 3.661* - 3.371* - 3.380*
(0 = no, 1 = yes) (.076) (.076) (.108) (.108)


AI response faultiness - 3.654* - 3.661* - 3.371* - 3.380*
(0 = no, 1 = yes) (.076) (.076) (.108) (.108)

# Time Pressure × .374* .374*
Task Complexity (.044) (.044)


# Time Pressure × .374* .374*
Task Complexity (.044) (.044)

# Time Pressure × - .561* - .556*
AI response faultiness (.152) (.152)


- .561* - .556*
(.152) (.152)


# Control
Period
(from 1 to 36)


Period .005 .005
(from 1 to 36) (.003) (.003)

Sex .109 .109
(female = 0, male = 1) (.099) (.099)


Sex .109 .109
(female = 0, male = 1) (.099) (.099)

Age -.001 -.001
(.006) (.006)


Constant 6.981* 9.208* 9.083* 9.940* 9.822*
(.070) (.118) (.210) (.151) (.230)

# Observations 8,208 8,208 8,208 8,208 8,208
Marginal R .01 .24 .23 .247 .248
Conditional R .029 .266 .276 .273 .274
Log Likelihood -21,835.400 -20,724.500 -20,733.060 -20,686.030 -20,694.770
Akaike Inf. Crit. 43,678.800 41,460.990 41,484.120 41,388.070 41,411.540
Bayesian Inf. Crit. 43,706.850 41,503.070 41,547.240 41,444.170 41,488.680


Note: Standard errors in parentheses. * p < .05; p < .01; * p < .001.


Interestingly, the interaction between time pressure
and task complexity is positive, indicating that task
complexity plays a smaller role in human-AI-team per
formance under time pressure. While H2 anticipated a
compounding negative effect, the positive coefficient
(β = 0.374, p < .001) implies that under time pressure,
the adverse impact of task complexity is less pro
nounced. These effects also remain stable and significant
once the control variables age, gender, and period are
introduced to the model (V). Figure 4 summarises our
findings on human-AI-team performance.

The inclusion of various individual difference measures
from the post-experiment survey (see Appendix C) -
including risk propensity, technology proficiency, famili
arity and usage of ChatGPT, trust in technology, and


attitudes towards text-generative AI before and after the
experiment - revealed neither significant direct effects
nor interaction effects with time pressure on performance.


4.2. Decision strategies and choice univocity


Next, we explored how performance and decision
behaviour between treatment groups vary and why
this might be the case. As we have argued in Section
2, time pressure might cause participants to shift away
from a (more) systematic approach and follow heuristic
strategies. Specifically, they might gauge the AI's overall
performance based on individual preconceptions, from
what they picked up in the media, or first-hand experi
ence with tools such as ChatGPT. Rather than judging


Figure 4. Research Model including coefficients for observed effects.


each task individually and making a distinct decision,
they might provide more vague responses, attempting
to reflect the AI's overall performance. For instance, if
a participant believes the AI's performance to be 75%,
they might not (deliberately) attempt to identify the
27 correct and the 9 incorrect responses (36 in total) -
and clearly label them as such - but rate all responses
with a score of (around) 75% to reflect their general
assessment of the AI's performance.

While both 'strategies' would - on average - yield
similar levels of willingness to rely (i.e. 75%), they
would differ concerning performance and the frequency
of choice univocity (i.e. a stated willingness to rely of 0 or
10). For instance, a deliberate strategy involves expli
citly labelling each response as correct or incorrect,
while a heuristic approach results in vaguer judgments.

Importantly, both described 'strategies' represent
idealised scenarios and actual behaviour will likely be
more incoherent (e.g. as participants might employ a
mix of both heuristic regimes, adapt their approach
over the course of the experiment, or build on specific
own knowledge). Regarding performance, the perfect
deliberate strategy would identify all correct and incor
rect responses and label them as such, consequently
yielding a performance of 100%. The heuristic strategy
would (given that 75% of all AI responses are correct),
yield a performance of 75% × 75% + 25% × 25% =
62.5%. Likewise, the perfect deliberate strategy would
yield a choice univocity rate of 100%, that is, labelling
all responses as either correct or incorrect - while the
heuristic approach would yield zero choice univocity.

Figure 5 illustrates where the average performance
and choice univocity of both groups fall along the spec
trum of these two idealised strategies. The treatment
group (i.e. with time pressure) achieves an average per
formance of 62.5%, precisely as assumed in our heuristic
strategy model. In contrast, the control group,


unencumbered by time constraints, achieves higher per
formance of around 70%. Notably, despite the lack of
explicit information about the AI's reliability, the treat
ment group's results align with the anticipated out
comes of heuristic decision-making. Furthermore, the
control group demonstrates less frequent hedging of
their responses and provides more definitive judgments
about their willingness to rely on the AI. Overall, the
observed performance and decision patterns across
both groups align with theoretical expectations.

Figure 6 merges the metrics of average choice univo
city and average performance for both strategies in one
visualisation. It is important to note that the potential
performance range for 100% choice univocity spans
from 0 (consistently misjudge all tasks) to 10 (consist
ently judge all tasks correctly). In contrast, the perform
ance range for 0% choice univocity is bounded between
a minimum of 1 (consistently misjudging all tasks but
avoiding choice univocity by 1 point) and a maximum
of 9 (consistently judging all tasks correctly, but avoid
ing choice univocity by 1 point). While average per
formance is concentrated in the range from 5 to 8
points, choice univocity is spread almost evenly across
the range from 0 to 100%.

A deeper look at choice univocity uncovers that while
participants in the treatment group (i.e. under time
pressure) on average make notably fewer definite
choices over the experiment's entirety, this difference
decreases considerably over time (Figure 7).

Separating choice univocity further into fully trust
(10) and do not trust at all (0) reveals the source of
the underlying effect (Figure 8). In the control group,
time already spent in the experiment had no observable
effect on participants' willingness to rely on the AI. Both
possible frequencies of choice univocity remain stable
throughout, with fully trust (10) selected for 41.5% of
tasks and do not trust at all (0) selected for 9.4% of tasks.


Figure 5. Avg. performance and share of choice univocity (i.e. willingness to rely = 0 or 10) for groups CTR and TP, on the spectrum
between strategies always choose the correct response and always respond with general trust in AI (i.e.75%).


Figure 6. Avg. performance and choice univocity (i.e. willingness to rely = 0 or 10) for groups CTR and TP, group averages as bold
circles.


Figure 7. Choice univocity by period of a task for groups CTR and TP.


Figure 8. Distribution of no / full willingness to rely by period of the task for groups CTR and TP.


For participants in the treatment group, we also
observed a stable, yet lower rate of choice univocity for
do not trust at all (0). The entire increase in choice uni
vocity can be attributed to a steady and substantial
increase in stated willingness to fully trust (10) as the
experiment progressed.


4.3. Tendency to commit to definite choices


To quantify these visual assessments, we conducted a set
of mixed effect regressions with the dependent variable
choice univocity (Table 6). Again, we gradually intro
duced the main treatment and control variables to the
models and control for age, sex, and period.

Time pressure exerts a large and significant negative
impact on choice univocity across models, with coeffi
cients ranging from β = -.153 for models not account
ing for interaction effects to β = -.391 for models
accounting for interaction effects with task complexity
(all p -values < .001). Similarly, task complexity has a sig
nificant effect across models (all p -values < .001), with
smaller coefficients (β = -.084) for models II and III
not accounting for interaction effects with time
pressure, and a larger coefficient (β = -.112) for models
IV and V accounting for such effects. AI response faul
tiness - a binary variable - has a comparably small effect
size that is only significant at the 5%-threshold in model
III. Under time pressure, a significant positive


interaction effect exists with task complexity (β = .056,
p < .001), indicating that under time pressure, partici
pants are more likely to make a univocal choice regard
ing their reliance on the AI. This positive interaction
effect offsets exactly half of the negative effect of task
complexity on its own. There is no significant inter
action between time pressure and AI response
faultiness.

Neither age nor sex exhibit significant effects on
choice univocity, however, period has a significant and
positive effect (β = .002, p < .001). As the experiment
progresses, participants appear to increase their fre
quency of making definitive statements regarding their
willingness to (not) rely on the AI. All models are
shown in Table 6.


4.4. Participants' willingness to rely on AI
responses


Finally, we visually investigated the relationship
between participants' willingness to rely on the AI, AI
response correctness, and task complexity, once again
differentiated by the time pressure treatment (Figure 9).

Here, the effects are less straightforward. In the
absence of time pressure, participants exhibit a mark
edly higher willingness to rely on correct responses
than on faulty ones, indicating participants' general
ability to process cues and differentiate between


Table 6 . Regression of choice univocity, time pressure, task complexity, and AI response faultiness.

DV : Choice univocity


I II III IV V


# Time Pressure
(0 = no, 1 = yes)


Time Pressure - .153* - .153* - .154* - .390* - .391*
(0 = no, 1 = yes) (.031) (.031) (.031) (.041) (.041)

Task Complexity - .084* - .084* - .112* - .112*
(.003) (.003) (.004) (.004)
AI response faultiness -.020 - .022* -.018 -.021
(0 = no, 1 = yes) (.011) (.011) (.015) (.015)


AI response faultiness -.020 - .022* -.018 -.021
(0 = no, 1 = yes) (.011) (.011) (.015) (.015)

# Time Pressure × .056*
Task Complexity (.006) (.006)


# Time Pressure × .056* .056*
Task Complexity (.006) (.006)

Time Pressure × -.004 -.002
AI response faultiness (.021) (.021)


-.004 -.002
(.021) (.021)


# Control
Period
(from 1 to 36)


# Period .002* .002*
(from 1 to 36) (.0004) (.0004)

Sex .053 .053
(female = 0, male = 1) (.031) (.031)


Sex .053 .053
(female = 0, male = 1) (.031) (.031)

Age .001 .001
(.002) (.002)


Constant .509* .871* .787* .991* .906*
(.022) (.026) (.058) (.029) (.059)

# Observations 8,208 8,208 8,208 8,208 8,208
Marginal R .024 .089 .094 .096 .101
Conditional R .228 .295 .298 .303 .306
Log Likelihood -5,098.310 -4,743.989 -4,747.817 -4,709.291 -4,713.213
Akaike Inf. Crit. 10,204.620 9,499.978 9,513.635 9,434.583 9,448.427
Bayesian Inf. Crit. 10,232.670 9,542.056 9,576.750 9,490.685 9,525.568


Note: Standard errors in parentheses. * p < .05; p < .01; * p < .001.


Figure 9. Willingness to rely on AI response by time pressure and (1) AI response faultiness (left) and task complexity (right) for groups
CTR and TP. Error bars show 95% confidence intervals.


# accurate and faulty responses. When time pressure is

# introduced, however, there is no uni-directional
response such as trusting the AI more (or less) overall.

# Remarkably, participants will rely less on correct but

# more on incorrect responses with only a small differen

# tial in between. This convergence of trust levels is a sig

# nal for deterioration of the ability to differentiate


# between correct and faulty AI responses, potentially

# due to a switch in the underlying cognitive processing

# from deliberate towards heuristic reasoning. Recall

# that participants did not face a binary decision to either

# fully or not-at-all rely on the AI response, but could

# indicate their willingness to rely on the AI on a conti

# nuum from 0 to 10. Task complexity appears to have


Table 7. Regression of participants' willingness to rely on AI, time pressure, task complexity, and AI response faultiness.

DV: Willingness to rely on AI response


I II III IV V


# Time Pressure
(0 = no, 1 = yes)


# Time Pressure -.162 -.162 -.170 - .914* - .921*
(0 = no, 1 = yes) (.141) (.141) (.142) (.232) (.232)

Task Complexity - .108* - .105* - .150* - .146*
(.022) (.022) (.031) (.030)
AI response faultiness - 1.388* - 1.412* - 2.204* - 2.240*
(0 = no, 1 = yes) (.075) (.075) (.106) (.106)


AI response faultiness - 1.388* - 1.412* - 2.204* - 2.240*
(0 = no, 1 = yes) (.075) (.075) (.106) (.106)

Time Pressure × .082 .080
Task Complexity (.043) (.043)


Time Pressure × .082 .080
Task Complexity (.043) (.043)

# Time Pressure × 1.618*
AI response faultiness (.149) (.149)


# 1.618* 1.638*
(.149) (.149)


# Control
Period
(from 1 to 36)


# Period .020* .021*
(from 1 to 36) (.003) (.003)

Sex -.147 -.147
(female = 0, male = 1) (.141) (.141)


Sex -.147 -.147
(female = 0, male = 1) (.141) (.141)

Age .004 .004
(.008) (.008)


Constant 7.289* 8.096* 7.689* 8.476* 8.055*
(.100) (.137) (.275) (.165) (.290)

# Observations 8,208 8,208 8,208 8,208 8,208
Marginal R .001 .041 .046 .054 .059
Conditional R .089 .13 .135 .143 .149
Log Likelihood -20,860.96 -20,681.07 -20,669.79 -20,622.72 -20,609.71
Akaike Inf. Crit. 41,729.92 41,374.14 41,357.58 41,261.44 41,241.43
Bayesian Inf. Crit. 41,757.97 41,416.22 41,420.70 41,317.54 41,318.57


Note: Standard errors in parentheses. * p < .05; p < .01; * p < .001.


only a small negative effect on participants' willingness
to rely on AI responses. We applied an analogous set
of prior regressions for choice univocity and perform
ance to explain participants' stated willingness to rely
on the displayed AI responses (Table 7).

Interestingly, time pressure does not have any signifi
cant overall effect on participants' willingness to rely on
the AI's responses (models I, II, and III). However, we
see negative effects of both task complexity and AI faul
tiness. Specifically, incorrect AI responses consistently
and significantly reduce willingness to rely across all
models (all p- values < .001). Similarly, it also decreases
with increasing task complexity (all p -values < .001),
When introducing the control variables, we see that -
again - period has a significant and positive effect. We
interpret this as due to habituation, where participants
get more comfortable in relying on the AI throughout
the experiment (i.e. from periods 1 to 36).

Models IV and V provide strong statistical support
for the interaction of time pressure and AI response
faultiness as shown in Figure 9 above. Under time
pressure, participants tend to lend higher (lower) cre
dence to incorrect (correct) responses as compared to
the control group without time pressure. Curiously,
there is no significant interaction effect of task complex
ity and time pressure, indicating that participants might
not consciously process the task and employ a more
heuristic approach towards their willingness to rely.


Figure 10. Results of mediation analysis.


4.5. Mediation analysis


Lastly, we conducted a mediation analysis to evaluate
whether the effect of time pressure on performance is
mediated by willingness to rely. We fitted two linear
mixed-effects models to estimate both the direct and
indirect pathways (Figure 10, Table 8). The first model
tested the effect of time pressure (independent variable)
on willingness-to-rely (mediator), incorporating a ran
dom intercept for participants to account for withinsubject variability across the experiment. The second
model predicted performance (dependent variable) as
a function of time pressure and willingness-to-rely,
again including random intercepts for participants.
We then applied a standard mediation framework to
compute the (indirect) Average Causal Mediation
Effect ( ACME ), the Average Direct Effect ( ADE ), and
the Total Effect . The (indirect) mediation effect rep
resents the pathway from time pressure to performance
through willingness-to-rely, while the direct effect quan
tifies the remaining relationship between time pressure
and performance after accounting for willingness-torely. The total effect is the sum of these two pathways.

As expected from our linear regression model on per
formance, the results confirm a significant total effect of
time pressure on performance, with an estimated coeffi
cient of β = -0.696 (CI95: [-0.862, -0.520], p < .001).
The direct effect, which bypasses the mediation path
way, was similarly significant (estimate: β = -0.628;


Table 8. Causal Mediation Analysis - Quasi-Bayesian confdence intervals.

8,208
Mediator groups: Prolific ID Sample size:

500
Outcome groups: Prolific ID Simulations:

Output based on overall averages across groups


Efect Estimate 95% CI Lower 95% CI Upper p -value


ACME (Average Causal Mediation Effect) -.0648 -.1704 .04 .22
ADE (Average Direct Effect) -.6301 -.7570 -.49 <.001*
Total Effect -.6949 -.8617 -.52 <.001*
Proportion mediated .0912 -.0662 .22 .22


Note: * p < .05; p < .01; * p < .001.


CI95: [-0.776, -0.490], p < .001). This suggests that
time pressure exerts a strong independent influence
on performance, potentially by triggering a switch
towards more heuristic reasoning.

In contrast, the mediation effect through willingnessto-rely was small and not statistically significant ( β =
-0.067; CI95: [-0.175, 0.050], p = .27). The confidence
interval includes zero, indicating no conclusive evidence
that willingness-to-rely mediates the relationship
between time pressure and performance. This finding
suggests that, while willingness-to-rely may be relevant
to performance in certain contexts, it does not play a
meaningful role in linking time pressure to performance
in this experiment. The dominance of the direct effect in
the total effect thus underscores the direct pathway as
the primary mechanism by which time pressure influ
ences performance.


# 5. Discussion


Our literature review indicated that human-AI colla
borative performance is negatively influenced by time
pressure, AI system reliability, and task complexity.
These effects were anticipated to occur independently
and to intensify when combined. However, our findings
challenge this assumption and reveal an unexpected
interaction between task complexity and time pressure,
which we discuss in the following.


5.1. Summary of results


As expected, our study confirms the stated premises
(negative effect of task complexity ( P1 ) and AI advice
faultiness ( P2 ) on human-AI-team performance; both
p -values < .001). Faced with more challenging tasks or
faulty AI responses, participants were less able to
gauge the AI response's accuracy. Furthermore, our
experiment supported our hypothesis on the negative
effect of time pressure on human-AI-team performance
( H1 ; p < .001). Moreover, we found this effect to inten
sify further for tasks concerning faulty AI responses,
supporting our third hypothesis on the interaction
effect ( H3 ). Interestingly, our hypothesis that time
pressure amplifies the adverse effect of task complexity
on human-AI-team performance ( H2 ) was not sup
ported by the data; instead, the presence of time
pressure in fact offsets the negative effect of task com
plexity by about 75%. These results suggest that, while
time pressure seems to generally undermine decision
quality and performance, its influence may partially
offset the detrimental effects of task complexity. Our
mediation analysis confirmed the direct effect of time
pressure on performance independent of participants'


willingness to rely, indicating a negligible mediation
effect.


5.2. Theoretical contributions


Our findings contribute to the understanding of dualprocessing theories in the context of human-AI collab
oration. Traditionally, such models posit a direct and
binary shift from analytical (System 2) to heuristic (Sys
tem 1) processing under stress. However, our results
suggest a more nuanced effect: time pressure does not
uniformly degrade cognitive evaluation but modulates
the trade-off between speed and accuracy in a taskdependent manner. This finding necessitates a reconsi
deration of how time constraints are integrated into
models of human decision-making, particularly in AIsupported environments where cognitive processes
must deal with algorithmically generated suggestions,
advice, text fragments, and so forth.

While our theoretical framing draws primarily on
dual-processing theory and the HSM, it is important
to recognise that such models have been critiqued
for their binary assumptions and limited scope in
explaining decision-making under real-world con
straints (Evans, St, and Stanovich 2013). Our results
suggest a need to integrate perspectives from models
of cognitive flexibility and learned heuristics (e.g.
Marewski and Gigerenzer 2012), which posit that
individuals adaptively select decision strategies based
on environmental cues, task demands, and prior
experience.

In particular, the observed offsetting effect of time
pressure on task complexity supports interpretations
aligned with bounded rationality (Simon 1955) and
resource-rational models of cognition (Lieder and
Griffiths 2020), which argue that decision strategies
are shaped not only by cognitive limitations but by an
optimisation of cognitive resource use in context-sensi
tive ways. These perspectives move beyond the rigid
System 1 vs. 2 dichotomy and suggest that heuristics
can be both learned and flexibly deployed - potentially
explaining why participants under time pressure
resorted to simplified, but not necessarily indiscrimi
nate, processing strategies.

To offer a more complete theoretical account, we
refer to models of adaptive cognition such as fast-andfrugal heuristics (Gigerenzer and Gaissmaier 2011)
and satisficing behaviour (Simon 1955). These models
suggest that under time pressure, individuals shift to
simplified decision rules that limit cognitive load by
focusing on the most salient diagnostic information to
arrive at a 'good enough' basis of information to come
to a decision. As a result, performance is mostly


negatively affected by time-pressure and becomes less
sensitive to the complexity of the task, attenuating the
expected negative effects of high task difficulty.

Moreover, incorporating literature on emotional and
stress-induced factors (Lerner and Keltner 2001; Starcke
and Brand 2012) could further elucidate how emotional
states such as anxiety or stress under time pressure,
might moderate dual-processing. Additionally, meta
cognitive awareness (Ackerman and Thompson 2017;
Flavell 1979) might explain whether participants con
sciously perceived their shift from analytical to heuristic
reasoning.

Overall, time pressure had a significant negative
effect on performance (-2.141; p < .001). However,
when considering the interaction between task com
plexity and time pressure (-0.123, p < .001), the relative
impact of task complexity was approximately 75% smal
ler than in the absence of time constraints (-0.497,
p < .001). This outcome is counterintuitive, challenges
prevailing cognitive load theories (Kahneman and
Klein 2009) and warrants further investigation into
the underlying mechanisms as conventional reasoning
suggests that heuristic decision-making induced by
time pressure and task complexity should exert com
pounding negative effects, widening the performance
gap between the control and treatment groups. Instead,
our findings reveal a narrowing of this gap as task com
plexity increases, as illustrated in Figure 11. Such
findings are consistent with the notion that satisficing
and heuristic strategies employed under time pressure
effectively reduce individuals' sensitivity to task com
plexity by bounding the search process and limiting
deliberation (Payne, Bettman, and Johnson 1993).
Nevertheless, it is important to note that the control
group consistently outperformed the time pressure
group across all levels of task complexity, and time


pressure did not result in sustained superior perform
ance at any stage of the experiment.


5.3. Ex-post reasoning


Time pressure appears to induce a fundamental shift in
human decision-making when dealing with AI-gener
ated responses. Under time pressure, task complexity
barely affects performance. Conversely, in the absence
of time pressure, we observe the expected negative
effect. While we did not observe significant effects of
time pressure on AI adherence, one potential expla
nation is that, under time pressure, individuals cogni
tively disengage from the task itself, shifting attention
primarily to the AI response's perceived trustworthi
ness. Rather than consciously adjusting their trust levels,
participants maintained stable trust, suggesting the
underlying cognitive mechanism involves reduced
analytical engagement and increased reliance on a base
line level of trust in the AI overall. Figure 12 below illus
trates the significant decline in univocal choices as task
complexity increases and the decreased overall choice
univocity under time pressure.

Both sensitivity (i.e. trust-based performance or the
proportion of correct AI responses accurately identified
as correct by humans) and specificity (i.e. distrust-based
performance or the proportion of incorrect AI
responses accurately identified as incorrect by humans)
decline under time pressure. However, this deterio
ration is particularly pronounced for sensitivity (see
Appendix F). In the absence of explicit performance
cues, participants exhibited a high baseline level of will
ingness to rely upon the AI system. While time pressure
initially reduced both participants' willingness to rely
and their tendency for choice univocity, skepticism
was only temporary. Throughout the experiment,


Figure 11. Illustration of expected vs. observed effect directions for control group (no time pressure) and treatment group (time
pressure).


Figure 12. Choice univocity vs. task complexity for control (CTR, no time pressure) and treatment (TP, time pressure) groups.


participants increasingly relied on the AI's outputs,
despite receiving no feedback or performance indicators
that could have justified this recalibration of trust. This
suggests that mere exposure to the system over time led
to a rise in default trust, independent of any rational
assessment of its reliability.

These findings highlight a critical risk associated
with increased reliance on generally well-performing
AI systems, particularly regarding users' diminished
ability to identify errors. When an AI system performs
well on most tasks or does not provide immediate
feedback or performance cues, users are likely to
struggle with identifying its occasional mistakes, a
challenge that, as we demonstrate here, becomes even
more pronounced under time pressure. The resulting
reduction in specificity increases the likelihood that
AI-generated mistakes go unnoticed. In high-stakes
environments such as medical diagnostics, airplane
control, or jurisdiction, this failure to detect mistakes
could have severe (even fatal) consequences. In con
trast, recent research has also shown an opposite
effect of algorithm aversion (i.e. the over-correction
of trust) based on singular negative outcomes, even
though an AI-based system is known to perform
superior to a lone human operator (Dietvorst, Sim
mons, and Massey 2015). In contrast, evidence from
clinical decision support shows that, while simple
confidence indicators alone have little effect on
reliance, richer 'why' explanations can increase trust
(and induce over-reliance), while too-sparse expla
nations or performance cues promote unwarranted
self-reliance - implying that feedback design is central
to trust calibration (Bussone, Stumpf, and O'Sullivan
2015). Given these risks, it is crucial to implement


effective trust calibration mechanisms to mitigate the
dangers of unreflected over- or under-reliance on AI.
For instance, transparent indicators of an AI system's
confidence, periodic human-AI validation checkpoints,
and structured verification protocols are essential safe
guards, particularly in time-sensitive and high-risk
applications where human oversight remains critical.


5.4. Practical implications


With up to 40% of the US population having adopted
generative AI for work use (Crane, Green, and Soto
2025), genAI rapidly disrupts how knowledge work is
performed within organisations. Our results demon
strate that the degradation of human-AI-team perform
ance under time pressure, task complexity, and AI
advice faultiness necessitates careful consideration.
Organisations must be careful in their deployment of
AI tools, particularly when genAI is involved in the cre
ation of high-stakes decisions or deliverables under con
ditions that create cognitive load and may trigger
heuristic thinking, as is so often the case in modern,
hectic work environments. The observed interaction
effects suggest that the interface design of pro
ductivity-oriented AI solutions should be conceptual
ised to provide adequate decision support structures
while acknowledging the cognitive limitations imposed
by time pressure. In high-stakes contexts, AI systems
should include risk-tiered safeguards that escalate
human oversight and cognition as uncertainty and
potential harm increase.

Specifically, AI system designers should consider
incorporating transparency mechanisms such as uncer
tainty cues or confidence indicators that aid users in


judging when outputs might require increased scrutiny
or might be incorrect, along with explicit escalation
pathways that flag high-risk cases for secondary review.
Additionally, adaptive interfaces that recognise timeconstrained situations could dynamically simplify task
presentation or delay non-urgent actions to reduce
user overload. While AI systems may not have direct
access to users' external constraints (e.g. looming dead
lines), they could infer cognitive strain through proxies
such as prompt structure and precision, typing speed, or
other interaction patterns indicating stress. In response,
AI systems could offer simplified outputs or display a
cautionary message, reminding the user of required dili
gence in dealing with system outputs. Where model
uncertainty and/or task risk are high, systems may
defer or withhold outputs - or require additional verifi
cation steps before release. System inherent trust cues
(e.g. anthropomorphic framing and language) should
also be carefully calibrated to avoid inducing unwar
ranted confidence and over-reliance irrespective of
time pressure.

In knowledge-intensive environments, where time
pressure and heuristic processing are often the norm
rather than the exception, the paradoxical relation of
task complexity and time pressure hints at an important
consideration: The most significant relative perform
ance gains from alleviating time pressure appear to
occur in simpler, more routine tasks - tasks that are
also the most amenable to automation. In contrast,
complex cognitive tasks exhibit comparatively smaller
benefits from reduced time pressure. This suggests
that organisations aiming to optimise human-AI collab
oration should prioritise AI-driven automation for rou
tine tasks while focusing on enhancing cognitive
support mechanisms for more complex decision-mak
ing processes to mitigate the pitfalls of heuristic
decision-making.

The intended role, agency and impact of the AI
within the organisation is also to be considered care
fully. Recent research from higher education has clearly
demonstrated a user preference for ' tutoring ' (i.e. pro
viding step-by-step instructions and solutions) over a
' mentoring ' AI (i.e. providing post-hoc feedback on a
human's attempt at a task; Marconi and Cabitza
2025). While the former is perceived as more effective
and efficient, it poses an increased risk for overreliance
and may prevent reflection, long-term transfer and
capability building. Organisations face the challenge of
calibrating appropriate trust levels in AI systems, as
our findings also suggest that time pressure directly
affects performance regardless of users' willingness to
rely on AI assistance. This necessitates the development
of context-aware systems capable of adapting output


confidence and explanation detail based on situational
factors (Kocielnik, Amershi, and Bennett 2019). More
over, training programmes should proactively incorpor
ate scenarios that expose users to high-pressure settings
with faulty AI input, helping them understand pitfalls in
their specific work domain and build individual meta
cognitive strategies for error detection.

When negative factors coincide, we observe a signifi
cant performance deterioration which might best be
referred to as a 'performance cliff' - a phenomenon
requiring mitigation through targeted training interven
tions and workflow restructuring. Furthermore, these
findings have implications for regulatory frameworks
governing human-AI collaboration, particularly in
high-stakes domains where decision quality is para
mount. The automation bias literature provides context
for our results (Parasuraman and Manzey 2010), but the
complex interplay between time constraints and task
complexity suggests refinements to existing theoretical
models are needed. Organisations must also consider
the ethical dimensions of AI deployment, as perform
ance variations under pressure may disproportionately
affect different worker populations. The performance
metrics employed in evaluating human-AI team effec
tiveness may need recalibration to account for the
nuanced relationship between time pressure and task
complexity revealed in this study. Finally, these results
call for AI system designers to incorporate adaptivity
features that recognise when users operate under con
ditions likely to impair judgment, potentially offering
alternative presentation formats or additional verifica
tion mechanisms when algorithm aversion might other
wise occur (Dietvorst, Simmons, and Massey 2015).

As genAI is eagerly adopted by organisations for its
capabilities to augment humans, increase efficiency,
and speed up the completion of both complex and
routine tasks, organisations need to strike a careful bal
ance between embracing the technology for its
undoubted benefits and treading carefully to not overrely on the potentially erroneous contribution of the
AI colleagues. Especially in potential future settings,
where genAI teammates expand human capabilities
beyond their ability to effectively supervise it (Sack et
al. 2024), unreflected overreliance on genAI may lead
to greatly impaired performance and suboptimal
outcomes.


5.5. Limitations and directions for future research


Although originally developed for medical AI research,
the CLARITY AI research quality checklist offers a
structured lens for reporting and evaluating AI studies
across core dimensions such as study design, method,


transparency, ethics and rigor (Marconi, Pirovano, and
Cabitza 2024). In this spirit, we deem our study to be
strongly aligned with the ideal proclaimed by the
authors and view it as a useful domain-agnostic tool
to evaluate and robustise our work. Nevertheless, as
with any research, this study has several limitations.
First, the experimental setting, while controlled, can cer
tainly not fully capture the richness of real-world
decision-making contexts. While participants were con
fronted with actual genAI outputs for evaluation, the
static presentation of underlying prompts and resulting
outputs differed from the conversational user experi
ence typically found in chatbots based on large language
models.

The use of a general online sample, though diverse,
limits the generalizability of our findings to broader
populations and more specific professional settings.
Future work may address these issues by incorporating
field studies, targeting more specific populations within
the domain of knowledge work, and employing either
more varied task scenarios or tasks more specific to
the workstyle of the population of interest. From a
methodological perspective, future research should
thus examine the generalizability of these findings
across various domains of knowledge work and explore
potential moderating factors such as expertise level,
domain familiarity, and individual cognitive differences
(Bansal et al. 2021).

Longitudinal studies in actual work environments
would provide deeper insights into how the dynamics
of human-AI interactions evolve; especially as we
observed marked shifts in willingness to rely on AI out
puts even over the short course of the experiment. Fur
thermore, expanding the range of task types and
including qualitative measures could enrich our under
standing of how users adapt their decision strategies in
the face of rapidly advancing AI capabilities.


# Notes


1. Of course, high-stakes environments do exist, for
example when 16,000 Covid-Test results were lost in
a UK health office at the height of the pandemic, risking
patient lives (The Guardian 2020) or when erroneous
calculations by an engineer caused a bridge to collapse,
killing 13 and in injuring 145 more (National Transpor
tation Safety Board 2008).
2. This approach means that individual responses may not
reflect the full stochastic variability of all possible
responses given by LLM-based chatbots to a singular
prompt. However, it reflects general user behaviour of
generating answers only once and over a set of 36
stimuli, ChatGPT's response variation should be
reflected adequately.


3. Setting timed-out tasks to a default value of 5 yields a
default performance score of 5. It is debatable whether
a non-zero performance score for timed-out tasks is
warranted. As a robustness check, we also computed
all following regression models with different imputa
tion methods for willingness to rely and performance .
All effects' directions and general sizes hold up when
(1) timed-out tasks are excluded from analysis, or (2)
a willingness to rely score of 5 is set to reflect indecisive
ness, but performance is set to 0 for timed-out tasks.
4. All effects described below persist and remain signifi

cant if choice univocity is relaxed to also include a stated
willingness of 1,2, 8 or 9 for almost univocal choices.
Naturally, the share of univocal choices increases with
this relaxed definition, but direction, intensity, and
difference of effects between groups remain constant.
Appendix E outlines the share of univocal choices for
relaxed definitions of choice univocity .


# Acknowledgements


The authors would like to thank Tim Michaelis for their sup
port in the implementation of the online experiment.


# Author contributions


# CRediT: Lukas Hermanns: Conceptualization, Data curation,
Formal analysis, Investigation, Methodology, Project admin
istration, Resources, Visualization, Writing - original draft,

# Writing - review & editing; Timm Teubner: Conceptualiz
ation, Formal analysis, Methodology, Supervision, Writing -
review & editing.


# Disclosure statement


No potential conflict of interest was reported by the author(s).


# Funding


Lukas Hermanns' research is kindly funded by the Foun
dation of German Business (Stiftung der Deutschen
Wirtschaft) with funds provided by the Federal Ministry for
Education and Research (Bundesministerium fur Bildung
und Forschung).


# ORCID


# References


Ackerman, R., and V. A. Thompson. 2017. "Meta-reasoning:
Monitoring and Control of Thinking and Reasoning."
Trends in Cognitive Sciences 21 (8): 607-617. https://doi.
org/10.1016/j.tics.2017.05.004.
Banovic, N., Z. Yang, A. Ramesh, and A. Liu. 2023. "Being
Trustworthy Is Not Enough: How Untrustworthy
Artificial Intelligence (AI) Can Deceive the end-Users


and Gain Their Trust." Proceedings of the ACM on HumanComputer Interaction 7:1-17. https://doi.org/10.1145/
3579460.
Bansal, G., B. Nushi, E. Kamar, E. Horvitz, and D. S. Weld.

2021. "Is the Most Accurate AI the Best Teammate?
Optimizing AI for Teamwork." Proceedings of the AAAI
Conference on Artificial Intelligence. 2021, May. https://
doi.org/10.1609/aaai.v35i13.17359.
Bedny, G. Z., W. Karwowski, and I. S. Bedny. 2012. "Complexity
Evaluation of Computer-Based Tasks." International Journal
of Human-Computer Interaction 28 (4): 236-257. https://doi.
org/10.1080/10447318.2011.581895.
Benbya, H., S. Pachidi, and S. L. Jarvenpaa. 2021. "Special
Issue Editorial: Artificial Intelligence in Organizations:
Implications for Information Systems Research." Journal
of the Association for Information Systems 22 (2): 281303. https://doi.org/10.17705/1jais.00662.
Benbya, H., F. Strich, and T. Tamm. 2024. "Navigating
Generative Artificial Intelligence Promises and Perils for
Knowledge and Creative Work." Journal of the
Association for Information Systems 25 (1): 23-36. https://
doi.org/10.17705/1jais.00861.
Borji, A. 2023. A Categorical Archive of ChatGPT Failures .

http://arxiv.org/abs/2302.03494.
Brynjolfsson, E., and T. Mitchell. 2017. "What Can Machine
Learning Do? Workforce Implications." Science 358
(6370): 1530-1534. https://doi.org/10.1126/science.
aap8062.
Bueno-Vesga, J. A., X. Xu, and H. He. 2021. "The Effects of
Cognitive Load on Engagement in a Virtual Reality
Learning Environment." Proceedings of the 2021 IEEE
Virtual Reality and 3D User Interfaces (VR). Lisboa,
Portugal. 2021. https://doi.org/10.1109/VR50410.2021.00090.
Bussone, A., S. Stumpf, and D. O'Sullivan. 2015. "The Role of
Explanations on Trust and Reliance in Clinical Decision
Support Systems." 2015 International Conference on
Healthcare Informatics 14:160-169. https://doi.org/10.
1109/ICHI.2015.26.
Cacioppo, J. T., R. E. Petty, C. F. Kao, and R. Rodriguez. 1986.
"Central and Peripheral Routes to Persuasion: An
Individual Difference Perspective." Journal of Personality
and Social Psychology 51 (5): 1032-1043. https://doi.org/
10.1037/0022-3514.51.5.1032.
Cao, S., C. Gomez, and C.-M. Huang. 2023. "How Time
Pressure in Different Phases of Decision-Making
Influences Human-AI Collaboration." Proceedings of the
ACM on Human-Computer Interaction 7:1-26. https://
doi.org/10.1145/3610068.
Chaiken, S. 1980. "Heuristic versus Systematic Information
Processing and the use of Source versus Message Cues in
Persuasion." Journal of Personality and Social Psychology
39 (5): 752-766. https://doi.org/10.1037/0022-3514.39.5.752.
Chanda, A. K. 2024. "Human Judgement in Artificial
Intelligence for Business Decision-Making: An Empirical
Study." International Journal of Innovation Management 28
(1+2): 1-29. https://doi.org/10.1142/S136391962450004X.
Crane, L., M. Green, and P. Soto. 2025. Measuring AI Uptake
in the Workplace . United States Federal Reserve. https://
www.federalreserve.gov/econres/notes/feds-notes/measur
ing-ai-uptake-in-the-workplace-20240205.html.
Daniloaia, D.-F., and E. Turturean. 2024. "Knowledge
Workers and the Rise of Artificial Intelligence: Navigating


new Challenges." SEA - Practical Application of Science 12
(35): 111-121. https://doi.org/10.70147/s35111121.
Daronnat, S., L. Azzopardi, M. Halvey, and M. Dubiel. 2021.
"Inferring Trust from Users' Behaviours; Agents'
Predictability Positively Affects Trust, Task Performance
and Cognitive Load in Human-Agent Real-Time
Collaboration." Frontiers in Robotics and AI 8:1-14.
https://doi.org/10.3389/frobt.2021.642201.
Dell'Acqua, F., E. McFowland, E. R. Mollick, H. LifshitzAssaf, K. Kellogg, S. Rajendran, L. Krayer, F. Candelon,
and K. R. Lakhani. 2023. "Navigating the Jagged
Technological Frontier: Field Experimental Evidence of
the Effects of AI on Knowledge Worker Productivity and
Quality." SSRN Electronic Journal 4:24-013. https://doi.
org/10.2139/ssrn.4573321.
Dietvorst, B. J., J. P. Simmons, and C. Massey. 2015.
"Algorithm Aversion: People Erroneously Avoid
Algorithms after Seeing Them err." Journal of
Experimental Psychology: General 144 (1): 114-126.
https://doi.org/10.1037/xge0000033.
Dohmen, T., A. Falk, D. Huffman, U. Sunde, J. Schupp, and G.
G. Wagner. 2011. "Individual Risk Attitudes: Measurement,
Determinants, and Behavioral Consequences." Journal of
the European Economic Association 9 (3): 522-550. https://
doi.org/10.1111/j.1542-4774.2011.01015.x.
Douglas, B. D., P. J. Ewell, and M. Brauer. 2023. "Data Quality
in Online Human-Subjects Research: Comparisons
between MTurk, Prolific, CloudResearch, Qualtrics, and
SONA." PLoS One 18 (3): e0279720. https://doi.org/10.
1371/journal.pone.0279720.
Dror, I. E., B. Basola, and J. R. Busemeyer. 1999. "Decision
Making under Time Pressure: An Independent Test of
Sequential Sampling Models." Memory & Cognition 27
(4): 713-725. https://doi.org/10.3758/BF03211564.
Eurostat. 2020. One in Three EU workers Experience Time
Pressure - Products Eurostat News - Eurostat . Eurostat.
https://ec.europa.eu/eurostat/web/products-eurostat-news/
-/ddn-20201006-2.
Evans, J., B. T. St, and K. E. Stanovich. 2013. "Dual-process
Theories of Higher Cognition." Perspectives on
Psychological Science 8 (3): 223-241. https://doi.org/10.
1177/1745691612460685.
Flavell, J. H. 1979. "Metacognition and Cognitive Monitoring:
A new Area of Cognitive-Developmental Inquiry."
American Psychologist 34 (10): 906-911. https://doi.org/
10.1037/0003-066X.34.10.906.
Gigerenzer, G., and W. Gaissmaier. 2011. "Heuristic Decision
Making." Annual Review of Psychology 62 (1): 451-482.
https://doi.org/10.1146/annurev-psych-120709-145346.
Gruetzemacher, R., and J. Whittlestone. 2022. "The
Transformative Potential of Artificial Intelligence."
Futures 135 (102884): 102884-11. https://doi.org/10.1016/
j.futures.2021.102884.
Haefner, N., J. Wincent, V. Parida, and O. Gassmann. 2021.
"Artificial Intelligence and Innovation Management: A
Review, Framework, and Research Agenda." Technological
Forecasting and Social Change 162 (120392): 120392-10.
https://doi.org/10.1016/j.techfore.2020.120392.
Hancock, P. A., D. R. Billings, K. E. Schaefer, J. Y. C. Chen, E.
J. de Visser, and R. Parasuraman. 2011. "A Meta-analysis of
Factors Affecting Trust in Human-Robot Interaction."
Human Factors: The Journal of the Human Factors and


Ergonomics Society 53 (5): 517-527. https://doi.org/10.
1177/0018720811417254.
Hurtienne, J., U. Stilijanow, and G. Junghanns. 2014. "Time
and Work Pressure in Today's Working World." In The
Impact of ICT on Quality of Working Life, edited by C.
Korunka and P. Hoonakker, 63-85. Dordrecht: Springer.
Hwang, M. I. 1994. "Decision Making under Time Pressure: A
Model for Information Systems Research." Information &
Management 27 (4): 197-203. https://doi.org/10.1016/90048-5)
0378-7206(94)90048-5.90048-5)
Jarke-Neuert, J., and J. Lohse. 2022. "I'm in a Hurry, I Don't
Want to Know! Strategic Ignorance under Time
Pressure." Journal of Experimental Psychology: General
151 (11): 2833-2845. https://doi.org/10.1037/xge0001222.
Jarrahi, M. H. 2018. "Artificial Intelligence and the Future of
Work: Human-AI Symbiosis in Organizational Decision
Making." Business Horizons 61 (4): 577-586. https://doi.
org/10.1016/j.bushor.2018.03.007.
Kahneman, D. 2011. Thinking, Fast and Slow . Farrar, Straus
and Giroux, New York.
Kahneman, D., and G. Klein. 2009. "Conditions for Intuitive
Expertise: A Failure to Disagree." American Psychologist
64 (6): 515-526. https://doi.org/10.1037/a0016755.
Kerstholt, J. H. 1994. "The Effect of Time Pressure on
Decision-Making Behaviour in a Dynamic Task
Environment." Acta Psychologica 86 (1): 89-104. https://90013-2)
doi.org/10.1016/0001-6918(94)90013-2.90013-2)
Kleinmuntz, D. N. 1985. "Cognitive Heuristics and Feedback
in a Dynamic Decision Environment." Management Science
31 (6): 680-702. https://doi.org/10.1287/mnsc.31.6.680.
Kocielnik, R., S. Amershi, and P. N. Bennett. 2019. "Will You
Accept an Imperfect AI?" Proceedings of the 2019 CHI
Conference on Human Factors in Computing Systems 1:114. https://doi.org/10.1145/3290605.3300641.
Koc-Januchta, M. M., K. J. Schonborn, C. Roehrig, V. K.
Chaudhri, L. A. E. Tibell, and H. C. Heller. 2022.
"Connecting Concepts Helps put Main Ideas Together:
Cognitive Load and Usability in Learning Biology with an
AI-Enriched Textbook." International Journal of
Educational Technology in Higher Education 19 (1): 1-22.
https://doi.org/10.1186/s41239-021-00317-3.
Krugel, S., A. Ostermaier, and M. Uhl. 2022. "Zombies in the
Loop? Humans Trust Untrustworthy AI-Advisors for
Ethical Decisions." Philosophy & Technology 35 (1): 1-37.
https://doi.org/10.1007/s13347-022-00511-9.
Lai, Y., A. Kankanhalli, and D. C. Ong. 2021. "Human-AI
Collaboration in Healthcare: A Review and Research
Agenda." Proceedings of the 2021 HICSS 18:390-399.
https://hdl.handle.net/10125/70657.
Leilabadi, S. H., and S. Schmidt. 2019. "In-depth Analysis of
Autonomous Vehicle Collisions in California."
Proceedings of the 2019 IEEE Intelligent Transportation
Systems Conference (ITSC) . Auckland, New Zealand.
https://doi.org/10.1109/ITSC.2019.8916775.
Lenat, D., and G. Marcus. 2023. Getting from Generative AI to
Trustworthy AI: What LLMs Might Learn from Cyc . http://
arxiv.org/abs/2308.04445.
Lerner, J. S., and D. Keltner. 2001. "Fear, Anger, and Risk."
Journal of Personality and Social Psychology 81 (1): 146159. https://doi.org/10.1037/0022-3514.81.1.146.
Lieder, F., and T. L. Griffiths. 2020. "Resource-rational
Analysis: Understanding Human Cognition as the


Optimal use of Limited Computational Resources."
Behavioral and Brain Sciences 43:e1. https://doi.org/10.
1017/S0140525X1900061X.
Macrae, C. 2019. "Governing the Safety of Artificial
Intelligence in Healthcare." BMJ Quality & Safety 28 (6):
495-498. https://doi.org/10.1136/bmjqs-2019-009484.
Madan, C. R., M. L. Spetch, and E. A. Ludvig. 2015. "Rapid Makes
Risky: Time Pressure Increases Risk Seeking in Decisions from
Experience." Journal of Cognitive Psychology 27 (8): 921-928.
https://doi.org/10.1080/20445911.2015.1055274.
Marconi, L., and F. Cabitza. 2025. Tutor or Mentor - A
Comparative Usability Study of AI Roles in Higher
Education (pp. 201-208). https://doi.org/10.1007/978-3031-99267-4_25
Marconi, L., E. Pirovano, and F. Cabitza. 2024. "CLARITY AI:
A Comprehensive Checklist Integrating Established
Frameworks for Enhanced Research Quality in Medical
AI Studies." CEUR Workshop Proceedings 3880:1-14.
Marewski, J. N., and G. Gigerenzer. 2012. "Heuristic Decision
Making in Medicine." Dialogues in Clinical Neuroscience 14
(1): 77-89. https://doi.org/10.31887/DCNS.2012.14.1/
jmarewski.
Merritt, S. M., H. Heimbaugh, J. Lachapell, and D. Lee. 2013.
"I Trust It, but I Don't Know why: Effects of Implicit
Attitudes toward Automation on Trust in an Automated
System." Human Factors 55 (3): 520-534. https://doi.org/
10.1177/0018720812465081.
Mulukuntla, S. 2022. "Generative AI - Benefits, Limitations,
Potential Risks and Challenges in Healthcare Industry."
EPH - International Journal of Medical and Health Science
8 (4): 1-9. https://doi.org/10.53555/eijmhs.v8i4.211.
National Transportation Safety Board. 2008. Collapse of I35W Highway Bridge . National Transportation Safety
Board. https://www.ntsb.gov/investigations/Pages/
HWY07MH024.aspx.
Ninaus, K., S. Diehl, R. Terlutter, K. Chan, and A. Huang. 2015.
"Benefits and Stressors - Perceived Effects of ICT use on
Employee Health and Work Stress: An Exploratory Study
from Austria and Hong Kong." International Journal of
Qualitative Studies on Health and Well-Being 10 (1):
28838. https://doi.org/10.3402/qhw.v10.28838.
Nov, O., N. Singh, and D. Mann. 2023. "Putting ChatGPT's
Medical Advice to the (Turing) Test: Survey Study." JMIR
Medical Education 9 (e46939): e46939. https://doi.org/10.
2196/46939.
Palani, S., and G. Ramos. 2024. "Evolving Roles and
Workflows of Creative Practitioners in the age of
Generative AI." Proceedings of the 16th Conference on
Creativity & Cognition .Chicago, USA. 2024, June. https://
doi.org/10.1145/3635636.3656190.
Parasuraman, R., and D. H. Manzey. 2010. "Complacency and
Bias in Human use of Automation: An Attentional
Integration." Human Factors: The Journal of the Human
Factors and Ergonomics Society 52 (3): 381-410. https://
doi.org/10.1177/0018720810376055.
Passi, S., and M. Vorvoreanu. 2022. "Overreliance on AI:
Literature Review." Microsoft Research 1:1-24. https://
www.microsoft.com/en-Us/research/uploads/prod/2022/
06/Aether-Overreliance-on-AI-Review-Final-6.21.22.pdf.
Payne, J. W., J. R. Bettman, and E. J. Johnson. 1993. The
Adaptive Decision Maker . Cambridge: Cambridge
University Press.


Peer, E., L. Brandimarte, S. Samat, and A. Acquisti. 2017.
"Beyond the Turk: Alternative Platforms for
Crowdsourcing Behavioral Research." Journal of
Experimental Social Psychology 70:153-163. https://doi.
org/10.1016/j.jesp.2017.01.006.
Peer, E., D. Rothschild, A. Gordon, Z. Evernden, and E. Damer.

2021. "Data Quality of Platforms and Panels for Online
Behavioral Research." Behavior Research Methods 54 (4):
1643-1662. https://doi.org/10.3758/s13428-021-01694-3.
Rahwan, I., M. Cebrian, N. Obradovich, J. Bongard, J.-F.
Bonnefon, C. Breazeal, J. W. Crandall, et al. 2019.
"Machine Behaviour." Nature 568 (7753): 477-486.
https://doi.org/10.1038/s41586-019-1138-y.
Ranyard, R., Wr. Crozier, and O. Svenson. 2002. Decision
Making . Milton Park: Routledge.
Rice, S., and D. Trafimow. 2012. "Time Pressure Heuristics
Can Improve Performance due to Increased
Consistency." The Journal of General Psychology 139 (4):
273-288. https://doi.org/10.1080/00221309.2012.705187.
Ritala, P., M. Ruokonen, and L. Ramaul. 2024. "Transforming
Boundaries: How Does ChatGPT Change Knowledge
Work?" Journal of Business Strategy 45 (3): 214-220.
https://doi.org/10.1108/JBS-05-2023-0094.
Rodenburg, D., P. Hungler, S. A. Etemad, D. Howes, A.
Szulewski, and J. Mclellan. 2018. "Dynamically Adaptive
Simulation Based on Expertise and Cognitive Load."
Proceedings of 2018 IEEE GEM 0:1-6. https://doi.org/10.
1109/GEM.2018.8587618.
Russo, D. 2022. "Recruiting Software Engineers on Prolific."
In RoPES 2022 Proceedings 0:1-2. http://arxiv.org/abs/
2203.14695.
Sabherwal, R., and V. Grover. 2024. "The Societal Impacts of
Generative Artificial Intelligence: A Balanced Perspective."
Journal of the Association for Information Systems 25 (1):
13-22. https://doi.org/10.17705/1jais.00860.
Sachin, P. K., and A. Schecter. 2024. "Advice Utilization in
Combined Human-Algorithm Decision-Making: An
Analysis of Preferences and Behaviors." Journal of the
Association for Information Systems 25 (6): 1439-1465.
https://doi.org/10.17705/1jais.00896.
Sack, D., L. Krayer, E. Wiles, M. Abbadi, U. Awasthi, R.
Kennedy, C. Arnolds, and F. Candelon. 2024. GenAI
Doesn't Just Increase Productivity. It Expands Capabilities .
https://www.bcg.com/publications/2024/gen-ai-increasesproductivity-and-expands-capabilities.
Schoffer, J., J. Jakubik, M. Vossing, N. Kuhl, and G. Satzger.

2025. "AI Reliance and Decision Quality: Fundamentals,
Interdependence, and the Effects of Interventions."
Journal of Artificial Intelligence Research 82:471-501.
https://doi.org/10.1613/jair.1.15873.
Securities and Exchange Commission. 2013. In the matter of
New York Stock Exchange LLC, and NYSE Euronext .
http://www.sec.gov/litigation/admin/2012/34-67857.pdf.
Securities and Exchange Commission, & Commodity Futures
Trading Commission. 2010. Findings regarding the market
events of May 6 , 2010. www.cftc.gov.
Seeber, I., E. Bittner, R. O. Briggs, T. de Vreede, G.-J. de
Vreede, A. Elkins, R. Maier, et al. 2020. "Machines as
Teammates: A Research Agenda on AI in Team
Collaboration." Information & Management 57 (2):
103174. https://doi.org/10.1016/j.im.2019.103174.


Shin, D., B. Zaid, and M. Ibahrine. 2020. "Algorithm
Appreciation: Algorithmic Performance, Developmental
Processes, and User Interactions." Proceedings of the 2020
CCCI 0:1-5. https://doi.org/10.1109/CCCI49893.2020.
9256470.
Simon, H. A. 1955. "A Behavioral Model of Rational Choice."
The Quarterly Journal of Economics 69 (1): 99-118. https://
doi.org/10.2307/1884852.
Solaiman, I., Z. Talat, W. Agnew, L. Ahmad, D. Baker, S. L.
Blodgett, C. Chen, et al. 2023. Evaluating the Social
Impact of Generative AI Systems in Systems and Society .
http://arxiv.org/abs/2306.05949.
Spiliopoulos, L., A. Ortmann, and L. Zhang. 2018. "Complexity,
Attention, and Choice in Games under Time Constraints: A
Process Analysis." Journal of Experimental Psychology:
Learning, Memory, and Cognition 44 (10): 1609-1640.
https://doi.org/10.1037/xlm0000535.
Starcke, K., and M. Brand. 2012. "Decision Making under
Stress: A Selective Review." Neuroscience & Biobehavioral
Reviews 36 (4): 1228-1248. https://doi.org/10.1016/j.
neubiorev.2012.02.003.
Sweller, J. 1988. "Cognitive Load during Problem Solving:
Effects on Learning." Cognitive Science 12 (2): 257-285.
https://doi.org/10.1016/0364-0213(88)90023-7.90023-7)
Sweller, J. 2011. "Cognitive Load Theory." In The Psychology
of Learning and Motivation, edited by Jose. P. Mestre and
B. H. Ross, 37-76. Cambridge, MA: Academic Press.
Tang, N., C. Yang, J. Fan, L. Cao, Y. Luo, and A. Halevy. 2023.
VerifAI: Verified generative AI . http://arxiv.org/abs/2307.
02796.
The Guardian. 2020. Covid: How Excel May Have Caused Loss
of 16,000 Test Results in England . The Guardian. https://
www.theguardian.com/politics/2020/oct/05/How-excelMay-Have-caused-loss-of-16000-covid-tests-in-england.
Watts, S. 2015. "Application of Dual-Process Theory to
Information Systems: Current and Future Research
Directions." Foundations and Trends in Information
Systems 1 (2): 69-162. https://doi.org/10.1561/2900000004.
Weidinger, L., M. Rauh, N. Marchal, A. Manzini, L. A.
Hendricks, J. Mateos-Garcia, S. Bergman, et al. 2023.
Sociotechnical Safety Evaluation of Generative AI Systems .
http://arxiv.org/abs/2310.11986.
Weisz, J. D., M. Muller, J. He, and S. Houde. 2023. Toward
General Design Principles for Generative AI Applications .
http://arxiv.org/abs/2301.05578.
Wienrich, C., and M. E. Latoschik. 2021. "eXtended Artificial
Intelligence: New Prospects of Human-AI Interaction
Research." Frontiers in Virtual Reality 2 (686783): 1-19.
https://doi.org/10.3389/frvir.2021.686783.
Wilson, H. J., and P. R. Daugherty. 2018. "Collaborative
Intelligence: Humans and AI Are Joining Forces."
Harvard Business Review 4 (96): 114-123.
Wood, R. E. 1986. "Task Complexity: Definition of the
Construct." Organizational Behavior and Human Decision
Processes 37 (1): 60-82. https://doi.org/10.1016/0749-90044-0)
5978(86)90044-0.90044-0)
Young, D. L., A. S. Goodie, D. B. Hall, and E. Wu. 2012.
"Decision Making under Time Pressure, Modeled in a
Prospect Theory Framework." Organizational Behavior and
Human Decision Processes 118 (2): 179-188. https://doi.org/
10.1016/j.obhdp.2012.03.005.