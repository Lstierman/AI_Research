# "Who wants to be nagged by AI?": Investigating the Effects of Agreeableness on Older Adults' Perception of LLM-Based Voice Assistants' Explanations


Niharika Mathur
nmathur35@gatech.edu
Georgia Institute of Technology
Atlanta, Georgia, USA


# Abstract


Hasibur Rahman
rahman.has@northeastern.edu
Northeastern University
Boston, Massachusetts, USA


Smit Desai [*]

sm.desai@northeastern.edu
Northeastern University
Boston, Massachusetts, USA


LLM-based voice assistants (VAs) increasingly support older adults
aging in place, yet how an assistant's agreeableness shapes explanation perception remains underexplored. We conducted a study
(N=70) examining how VA agreeableness influences older adults'
perceptions of explanations across routine and emergency home
scenarios. High-agreeableness assistants were perceived as more
trustworthy, empathetic, and likable, but these benefits diminished
in emergencies where clarity outweighed warmth. Agreeableness
did not affect perceived intelligence, suggesting social tone and
competence are separable dimensions. Real-time environmental
explanations outperformed history-based ones, and agreeable older
adults penalized low-agreeableness assistants more strongly. These
findings show the need to move beyond a one-size-fits-all approach
to AI explainability, while balancing personality, context, and audience.


# CCS Concepts


- Human-centered computing → Human computer interaction
(HCI); Interaction devices; Sound-based input / output.


# Keywords


voice assistants, older adults, conversational personality, AI explanations, aging-in-place


# ACM Reference Format:
Niharika Mathur, Hasibur Rahman, and Smit Desai. 2026. "Who wants to be
nagged by AI?": Investigating the Effects of Agreeableness on Older Adults'
Perception of LLM-Based Voice Assistants' Explanations. In Proceedings
of April 11-18, 2026 (CHI'26). ACM, New York, NY, USA, 6 pages. https:
//doi.org/10.1145/3772363.3798685


# 1 Introduction


Voice Assistants (VAs) are increasingly embedded in home environments, where they support users by providing timely reminders

[34, 38] and safety alerts. In such environments, the increasing


*Corresponding author


Permission to make digital or hard copies of all or part of this work for personal or
classroom use is granted without fee provided that copies are not made or distributed
for profit or commercial advantage and that copies bear this notice and the full citation
on the first page. Copyrights for components of this work owned by others than the
author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or
republish, to post on servers or to redistribute to lists, requires prior specific permission
and/or a fee. Request permissions from permissions@acm.org.
CHI'26,
© 2026 Copyright held by the owner/author(s). Publication rights licensed to ACM.
ACM ISBN 978-1-4503-XXXX-X/2018/06
https://doi.org/10.1145/3772363.3798685


conversational fluency of LLM-based VAs or LLM-VAs introduces
parallel challenges for how users understand and interpret them.
For older adults aging in place, explanations play a critical role in
helping them make sense of why an AI acted in a certain way (e.g.,
why a reminder was issued at a specific moment) [19, 41]. Despite
recognizing the importance of AI explanations in calibrating trust,
relatively little is known about how explanations are experienced
by users interacting with conversational, LLM-VAs in real-world
settings [12, 14, 43]. Research in explainable AI (XAI) has largely
focused on mechanistic interpretations of AI models, often emphasizing internal model logic and decision factors. However, in
VAs, explanations are delivered as conversational responses through
natural language, and hence, LLM personality traits can affect how
users interpret and rely on them. As a result, it is just as important
to examine how an explanation is communicated conversationally
in real-world settings, than it is to focus on technical interpretations
of explanations [21, 40].
At the same time, research in Conversational User Interfaces
(CUIs) has shown that most LLM-VAs are often designed to exhibit
high agreeableness to promote user engagement [36, 56]. Psychometric research defines Agreeableness as a personality trait of being
kind, sympathetic, cooperative, warm, honest, and considerate.
However, this high agreeableness conversational behavior can also
unintentionally reduce critical scrutiny and promote overreliance
, with users relying on the LLM-VA because it sounds polite.
In such situations, when an LLM-VA delivers explanations with
a specific level of agreeableness, their persuasive impact may be
amplified - highlighting the need to examine how conversational
and personality traits in LLM-VAs shape perceptions of their explanations. To examine this, we conducted a controlled experimental
study (N=70) examining how variation in a fictional LLM-VA's agreeableness influences older adults' perceptions of explanations across
everyday in-home scenarios. We compare explanations grounded
in prior conversational history and real-time environmental data
across two task contexts, and consider how older adults' own agreeableness shapes their responses to the VA. Our findings contribute
evidence that high agreeableness in LLM-VAs improves older adults'
trust, empathy and likeability towards AI-generated explanations
without affecting perceived intelligence. We further show that situational task context also matters, highlighting the need to design
LLM-VAs that prioritize personality-aware explanation design in
aging in place settings.


CHI'26, Barcelona, Spain,
Mathur et al.


# 2 Related Work and Background


LLM-VAs and Explanations. VAs have traditionally been used in
assistive settings to provide routine reminders [34, 38], safety alerts

[15, 44, 63], and social and conversational support to users.
More recently, the new generation of LLM-based VAs now allow
for more flexible and context-aware dialog, capable of referencing
prior conversational history, and embodying distinct personality
cues. However, while transformative, LLMs also introduce parallel
challenges concerning their explainability [17, 19, 41]. Emerging
research on LLMs has identified several limitations related to opacity, hallucinations [48, 51], lack of transparency in training
data, and LLM personality traits such as sycophancy [5, 61],
all of which undermine the reliability and trustworthiness of LLMgenerated explanations.
When people interact with VAs, they often seek social engagement [47, 55], and evaluate VAs based on its personality cues

[8, 18, 65]. Among the many personality traits that shape VA perceptions, research has shown that agreeableness is particularly consequential. Agreeableness, one of the Big Five personality traits, has
shown to significantly influence user perceptions of a VA's likeability [6, 62], intention to adopt [50, 60], and trust, particularly in
contexts where VAs provide assistive support like aging in place.
While many studies have examined this influence of agreeableness
on user perception, the increased conversational depth of LLMs
necessitates this inquiry to explanations as well, given their crucial
role in calibrating user trust [32, 40], motivating our first research
question: RQ1: How does variation in an LLM-VA's agreeableness
influence older adults' perception of its explanations?
Human-Centered AI Explanations for Aging in Place . Prior
work in HCI has highlighted the need to design explanations rooted
in context, which involves leveraging resources beyond the AI
model itself (such as prior interactions, domain knowledge, and
contextual information) to generate explanations aligned with user
goals and expectations [11, 35]. These considerations are particularly salient for aging in place, where interactions with VAs are
shaped by cognitive, social and environmental factors. When
older adults interact with AI systems, they frequently draw on
familiar elements of their sociotechnical environments and their
interaction history to interpret AI's behavior, such as referencing
physical objects, or prior conversations with the AI [23, 42, 53], and
explanations grounded in such contextual information significantly
improve understanding [3, 7, 33]. Building on this, Mathur et al.

[39, 40] identify conversational history and real-time environmental
data as two key information sources that can be leveraged in smart
home environments to generate explanations, a categorization that
we adopt in our study to understand older adults' perception of
LLM-VA explanations. To further examine how this perception
varies across tasks with differences in urgency and risk, as these
are significant predictors of human-AI interaction [58, 64], we ask
our second research question: RQ2: How is older adults' perception of an LLM-VA's explanations influenced by situational context
(routine vs. emergency) and explanation type? Finally, recognizing
that older adults are not a homogeneous user group, and that their


1The Big Five personality framework (also known as OCEAN) is a human personality classification model in psychology, comprising five broad dimensions: openness,
conscientiousness, extraversion, agreeableness, and neuroticism (OCEAN) [20, 26, 27].


own personality traits, like agreeableness, also shape their perceptions of technology [6, 62], we ask our final research question: RQ3:
How does older adults' agreeableness influence their perception of the
LLM-VA's explanations?


# 3 Method


Study Overview. Participants interacted with Robin, a fictional
LLM-VA designed to support older adults, using vignette-based
interactive storyboards. We employed a 2 x 2 x 2 mixed factorial design, manipulating explanation type (conversational history vs. realtime environmental data), LLM-VA personality (agreeableness: high
vs. low), and interaction context (routine vs. emergency). Agreeableness was manipulated as a between-subjects factor, while explanation type and interaction context were manipulated within subjects,
enabling examination of LLM-VA's personality effects (RQ1), contextual and explanation-type effects (RQ2), and individual differences
among older adults (RQ3).
To differentiate situational contexts in our study, we selected
two assistive contexts: routine reminders (low-risk, non-urgent
support for daily activities) and emergency alerts (high-risk, timesensitive notifications such as safety hazards), informed by prior
work on smart home assistance and conversational AI use for aging

[7, 38, 46, 54]. Within each context, participants interacted with a set
of scenarios, presented using visual storyboards depicting a box-like
VA providing a reminder or alert, followed by an explanation. The
explanation types were grounded in the categorization by Mathur
et al. [39, 40]. We operationalized two explanation types: conversational user history-based explanations (UH), which referenced
a user's prior interactions with Robin, and real-time environmental explanations (ENV), which drew on sensor-based data
reflecting immediate, real-time situational factors [39, 40]. Explanations were generated using GPT-5.0 based on prompts specifying
the scenario, context, and information source, and were conditioned
to match the agent's agreeableness level (high vs. low) using the
Trait Modulation Key (TMK) prompting framework, and then
manually reviewed to ensure consistency and clarity.
User Interface. Storyboard-based studies can force users to infer unspecified interaction from a narrative artifact, limiting how
well dynamic interaction is conceptualized and communicated

[4, 30], so Dow et al. argue for additional tools to support
storyboards. Hence, we embedded audio clips into an interactive
storyboard rather than using audio-only stimuli as in prior VA
studies [8, 24, 52], making it easier for participants to imagine how
the exchange would unfold in context. We implemented this approach in a web-based, interactive storybook UI (Fig. 1) with two
side-by-side panels. The left panel provided context, and the right
panel displayed the follow-up explanation. Interaction followed a
fixed A→B→C flow. In (A), participants clicked the ▶ button on
Robin to hear the reminder or alert, after which a ■ speech bubble
displayed the transcript. In (B), a second ▶ button appeared on the
right panel to play the explanation, followed by its ■ transcript
bubble. In (C), the ■ transcript was shown after the explanation
was played. The storyboards used in the study were created using
Gemini Language Model.
Measurements. To evaluate users' perceptions of Robin, we employed seven validated measures. 6-item Empathy was rated on a


CHI'26, Barcelona, Spain,
Agreeableness in LLM-VAs


Figure 1: Interactive storyboard UI and sequence (A → B → C). Participants clicked the - button to play the reminder or alert (A)
and then the explanation (B). After each audio clip, a - speech bubble displayed the transcript (B)(C).


101-point slider using the Perceived Empathy of Technology Scale
(PETS), and 2-item intention to adopt on a 7-point Likert
scale by Moussawi et al.. Perceived likeability and intelligence were assessed using the Godspeed questionnaire (5 items
each), measured with 5-point semantic differential scales. The
remaining measures used 5-point Likert scales: trustworthiness
from the Trust in Automation (TiA) questionnaire (5 items) [25, 28],
explanation satisfaction from Hoffman et al. (7 items), and
reliance (5 items). To measure participants' agreeableness, we used
4 domain-specific items from the Mini-IPIP, rated on a 5-point
Likert scale. We also included one manipulation-check item to validate the perceived agreeableness of Robin using a 5-point Likert
scale. The full batch of storyboards, questionnaires, the prompts
used, data and results can be found in the supplementary files.


# 3.1 Participants

We recruited 70 U.S.-based older adults through Prolific, ranging
from 60 to 83 years ( M = 65 . 97, SD = 5 . 28), with 35 participants
assigned to each experimental condition. 53 participants identified
as female, 16 as male, and 1 as other. With respect to prior experience with both VAs and LLM-VAs, 62 participants reported having
more than a little experience using them. Participant compensation
exceeded the U.S. federal minimum wage guidelines. There was
no significant difference in participants' agreeableness across the
experimental condition ( M = 4 . 25, SD = 0 . 67).


# 3.2 Procedure


After providing consent, participants completed a demographic
survey and the Mini-IPIP personality inventory to assess individual differences in agreeableness. They were then introduced to
Robin and the interactive storyboards, along with a description of
Robin 's capabilities. Following the between-subjects manipulation of
Robin 's agreeableness, participants were assigned to either a high
or low-agreeableness version of Robin (counterbalanced). Within
this condition, they viewed storyboard-based scenarios across two
assistive contexts (routine reminders and emergency alerts). For
each context, participants saw four scenarios per explanation type


2The Mini-IPIP (Mini-International Personality Item Pool) is a questionnaire used to
measure the Big Five personality traits in a reliable way.
3https://www.prolific.com/


(counterbalanced between conversational history (UH) and realtime environmental (ENV) explanations), and rated the assistant
after each block, including a single-item manipulation-check of
perceived agreeableness, attention checks, and an open-ended text
field for qualitative reflections.


# 4 Results


To assess the success of our agreeableness manipulation using the
TMK prompting framework, we compared responses to the
manipulation-check question on assistant agreeableness between
the low-agreeableness (LA) and high-agreeableness (HA) versions
of Robin . Participants rated HA Robin as significantly more agreeable than LA Robin (HA: M = 4 . 171 vs. LA: M = 3 . 229), t = -4 . 093,
p = . 0001. All seven measures demonstrated good to excellent
internal consistency, with α = . 883- . 985 and ω = . 896- . 985. Additionally, we conducted an exploratory factor analysis of the reliance
scale, which supported a one-factor solution (eigenvalue = 3 . 554),
explaining 64 . 5% of the variance, with all items loading strongly
( > . 64). Because none of the outcomes were normally distributed,
we used nonparametric tests.


# 4.1 LLM-VA Agreeableness and Explanation

# Perception (RQ1)


To examine whether the LLM-VA's agreeableness shaped older
adults' perceptions of its explanations (RQ1), we compared ratings
between LA Robin and HA Robin using Kruskal-Wallis tests, which
are equivalent to Mann-Whitney U tests for two groups. We report
effect sizes as the absolute rank-biserial correlation, | r |. Participants
reported higher intention to adopt for HA (Mdn = 5.75) than LA
(Mdn = 5.25), H = 5 . 299, p = . 021, | r | = . 275 (small). HA Robin was
also perceived as more empathetic (HA Mdn = 59.32 vs. LA Mdn =
38.16), H = 7 . 394, p = . 006, | r | = . 325 (medium), and more likeable
(HA Mdn = 4.25 vs. LA Mdn = 3.40), H = 7 . 188, p = . 007, | r | = . 320
(medium). We also observed significant, small-sized differences
favoring HA Robin for trust (HA Mdn = 3.75 vs. LA Mdn = 3.35),
H = 5 . 666, p = . 017, | r | = . 285, reliance (HA Mdn = 3.85 vs. LA
Mdn = 3.45), H = 5 . 013, p = . 025, | r | = . 268, and satisfaction (HA
Mdn = 4.07 vs. LA Mdn = 3.75), H = 4 . 624, p = . 032, | r | = . 257.
In contrast, effects on perceived intelligence was not significant,
H = 0 . 134, p = . 715, | r | = . 044. To answer RQ1, as shown
in Fig. 2, HA Robin led older adults to rate its explanations


CHI'26, Barcelona, Spain,
Mathur et al.


Figure 2: Ratings for LA versus HA Robin across seven outcomes. Asterisks mark significant LA-HA differences from KruskalWallis tests (* p < . 05 , p < . 01 ). Intention to adopt and empathy are shown on 1 to 7 scales, with empathy scores rescaled for
this visualization only. Trust, reliance, satisfaction, likeability, and intelligence are shown on 1 to 5 scales.


more favorably across most outcomes (e.g., intention to adopt,
empathy, likeability, trust, reliance, satisfaction), with no
difference in perceived intelligence.


# 4.2 Context and Explanation Type Effects (RQ2)


We explored whether explanation context (reminders, Ctx1, vs.
alerts, Ctx2) and explanation type (UH vs. ENV) moderated the
effect of Robin 's agreeableness (LA vs. HA) on explanation perceptions. For the between-subject effect, Kruskal-Wallis tests showed
that HA outperformed LA across more measures in Ctx1 ( intention to adopt, empathy, trust, reliance, satisfaction, likeability ; all
p < . 05) than in Ctx2 (only i ntention to adopt, empathy, likeability ; all p < . 05). Similarly, HA's advantage was broader for UH
explanations (all measures except intelligence, p < . 05) than for
ENV explanations ( intention to adopt, empathy, trust, likeability ;
p < . 05). For the within-subject effect, Wilcoxon tests indicated
that Ctx1 produced higher intention to adopt ( W = 337 . 0, p = . 0253)
and trust ( W = 729 . 5, p = . 0377)) than Ctx2. Similarly, ENV explanations outperformed UH on reliance, satisfaction, likeability, and
intelligence (all p < . 05). All other within-subject comparisons were
not significant. In addressing RQ2, routine contexts showed
higher intention to adopt and trust compared to the emergency context. ENV explanations were generally preferred
over UH, resulting higher reliance, satisfaction, likeability,
and intelligence. HA Robin 's advantage over LA was strongest
in routine contexts and UH explanations, weakened in emergency contexts.


# 4.3 User Agreeableness and Explanation

# Perception (RQ3)


For LA Robin, participant agreeableness showed significant negative correlations with intention to adopt, ρ = - . 42, p = . 012, trust,
ρ = - . 36, p = . 034, and likeability, ρ = - . 50, p = . 002. Correlations
with empathy ( ρ = - . 32, p = . 062), reliance ( ρ = - . 32, p = . 063),
satisfaction ( ρ = - . 28, p = . 100), and intelligence ( ρ = - . 30,
p = . 085) were not significant. For HA Robin, participant agreeableness was not significantly correlated with any outcomes. In


# response to RQ3, we found an interesting association between older adults' agreeableness and their perceptions of
Robin 's explanations: more agreeable older adults penalized
the LA Robin more.


# 4.4 Qualitative perceptions


Open-ended responses helped contextualize the quantitative differences between HA and LA Robin by revealing how older adults
interpreted explanations at a social and emotional level. Participants interacting with the LA Robin often described its explanations
as abrupt, unsupportive, or judgmental, with wording perceived
as discouraging or containing " unnecessary digs," prompting comments such as " who wants to be nagged by AI? " In contrast, explanations from the HA Robin were commonly described as friendly,
thoughtful, and polite, aligning with higher ratings for empathy
and satisfaction. Across conditions, participants attended less to the
factual content of explanations than to whether Robin 's tone met
expectations of emotional support, particularly in routine reminder
contexts.


# 5 Discussion


Design Considerations. Our findings extend prior work on conversational AI personality and explainability, suggesting five design considerations (DCs). DC1: Consistent with Volkel and Kaya
, who found users prefer agreeableness contextually rather
than universally, our results demonstrate that effective explanations require sensitivity to context, grounding, and audience, not
a fixed conversational style. DC2: High agreeableness improved
trust, empathy, and adoption in routine contexts, but these benefits diminished in emergencies, supporting Kim and Fussell's
findings that agreeableness effects are task-dependent and suggesting clarity may outweigh warmth in high-stakes scenarios. DC3:
Agreeableness increased likeability without affecting perceived intelligence, indicating these are separable design dimensions. This
extends Khadpe et al.'s work on conceptual metaphors and
suggests designers can modulate warmth independently of competence signaling, critical for avoiding sycophancy concerns in LLMs
. DC4: Real-time environmental explanations were perceived


CHI'26, Barcelona, Spain,
Agreeableness in LLM-VAs


as more credible than history-based ones, echoing Mathur et al.
's emphasis on situationally anchored information for older

# adults and suggesting data-driven grounding may better support

# trust calibration than personalization alone. DC5: More agreeable

# older adults penalized low-agreeableness assistants more strongly,
extending personality-matching research [6, 57, 62] to the explanation domain. Collectively, these findings position AI explanation
design as a joint problem of content, delivery, and audience, reinforcing that one-size-fits-all approaches are insufficient for older
adults across diverse assistive scenarios.
Limitations and Future Work. In this study, we examined a
single personality dimension, agreeableness, using a binary manipulation that enabled controlled comparison but did not capture the

# full range of personality expression in conversational AI. Future

# work should examine additional traits, such as emotional stability

# and conscientiousness. Our storyboard-based design relied on a

# single synthetic voice, limiting insight into how vocal tone and
prosody interact with personality, as well as longitudinal dynamics or the impact of repeated system failures in-the-wild. Finally,

# our scenarios were presented in a controlled setting, and in-situ

# deployments are needed to understand how these effects evolve
with sustained real-world use.


# 6 Conclusion


# This study examined how an LLM-based VA's agreeableness shaped

# older adults' perceptions of AI explanations. High agreeableness

# increased trust, empathy, and adoption without raising perceived

# intelligence, while low agreeableness was penalized, especially by

# agreeable users. Explanation perceptions were context-sensitive
and depended more on grounding than personality alone, indicating that effectiveness emerged from the interaction of assistant
agreeableness, context, and user traits.


# Acknowledgments


We would like to thank the reviewers and the members of Conversational Human-AI Interactions (CHAI) Lab for their feedback and
thoughtful engagement with this work.


# References

 Peter Bagnall, Victor Onditi, Mark Rouncefield, and Ian Sommerville. 2006. Older
people, technology and design: A socio-technical approach. Gerontechnology 5, 1
(2006), 46-50.
 Christoph Bartneck, Dana Kulic, Elizabeth Croft, and Susana Zoghbi. 2009. Measurement Instruments for the Anthropomorphism, Animacy, Likeability, Perceived Intelligence, and Perceived Safety of Robots. International Journal of Social
Robotics 1, 1 (Jan. 2009), 71-81. doi:10.1007/s12369-008-0001-3
 Rashmi Dutta Baruah and Mario Munoz Organero. 2024. A brief Review on
the Role of Context in Explainable AI. In 2024 IEEE International Conference on
Evolving and Adaptive Intelligent Systems (EAIS) . IEEE, 1-6.
 Steve Benford, Gabriella Giannachi, Boriana Koleva, and Tom Rodden. 2009. From
interaction to trajectories: designing coherent journeys through user experiences.
In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems
(CHI '09) . Association for Computing Machinery, New York, NY, USA, 709-718.
doi:10.1145/1518701.1518812
 Maria Victoria Carro. 2024. Flattering to Deceive: The Impact of Sycophantic
Behavior on User Trust in Large Language Model. arXiv preprint arXiv:2412.02802
(2024).
 Jessie Chin, Smit Desai, Sheny Lin, and Shannon Mejia. 2024. Like my aunt
dorothy: effects of conversational styles on perceptions, acceptance and metaphorical descriptions of voice assistants during later adulthood. Proceedings of the
ACM on Human-Computer Interaction 8, CSCW1 (2024), 1-21.
 Devleena Das, Yasutaka Nishimura, Rajan P Vivek, Naoto Takeda, Sean T Fish,
Thomas Ploetz, and Sonia Chernova. 2023. Explainable activity recognition for


smart home systems. ACM Transactions on Interactive Intelligent Systems 13, 2
(2023), 1-39.
 Smit Desai, Mateusz Dubiel, and Luis A. Leiva. 2024. Examining Humanness
as a Metaphor to Design Voice User Interfaces. In Proceedings of the 6th ACM
Conference on Conversational User Interfaces (CUI '24) . Association for Computing
Machinery, New York, NY, USA, 1-15. doi:10.1145/3640794.3665535
 M. Brent Donnellan, Frederick L. Oswald, Brendan M. Baird, and Richard E. Lucas.
2006. The Mini-IPIP Scales: Tiny-yet-effective measures of the Big Five Factors
of Personality. Psychological Assessment 18, 2 (2006), 192-203. doi:10.1037/10403590.18.2.192 Place: US Publisher: American Psychological Association.
 Steven Dow, T. Scott Saponas, Yang Li, and James A. Landay. 2006. External
representations in ubiquitous computing design and the implications for design
tools. In Proceedings of the 6th conference on Designing Interactive systems (DIS
'06) . Association for Computing Machinery, New York, NY, USA, 241-250. doi:10.
1145/1142405.1142443
 Upol Ehsan, Samir Passi, Q Vera Liao, Larry Chan, I-Hsiang Lee, Michael Muller,
and Mark O Riedl. 2024. The who in XAI: how AI background shapes perceptions
of AI explanations. In Proceedings of the 2024 CHI Conference on Human Factors
in Computing Systems . 1-32.
 Upol Ehsan and Mark O Riedl. 2020. Human-centered explainable ai: Towards a reflective sociotechnical approach. In International Conference on Human-Computer
Interaction . Springer, 449-466.
 Upol Ehsan, Elizabeth A Watkins, Philipp Wintersberger, Carina Manger, Sunnie SY Kim, Niels Van Berkel, Andreas Riener, and Mark O Riedl. 2024. Humancentered explainable AI (HCXAI): Reloading explainability in the era of large
language models (LLMs). In Extended Abstracts of the CHI Conference on Human
Factors in Computing Systems . 1-6.
 Upol Ehsan, Philipp Wintersberger, Q Vera Liao, Elizabeth Anne Watkins, Carina
Manger, Hal Daume III, Andreas Riener, and Mark O Riedl. 2022. Human-Centered
Explainable AI (HCXAI): beyond opening the black-box of AI. In CHI conference
on human factors in computing systems extended abstracts . 1-7.
 Andreas Ejupi, Yves J Gschwind, Trinidad Valenzuela, Stephen R Lord, and Kim
Delbaere. 2016. A kinect and inertial sensor-based system for the self-assessment
of fall risk: A home-based study in older people. Human-Computer Interaction
31, 3-4 (2016), 261-293.
 Mira El Kamali, Leonardo Angelini, Denis Lalanne, Omar Abou Khaled, and
Elena Mugellini. 2020. Multimodal conversational agent for older adults' behavioral change. In Companion Publication of the 2020 International Conference on
Multimodal Interaction . 270-274.
 MD Atik Enam, Chandni Murmu, and Emma Dixon. 2025. "Artificial IntelligenceCarrying us into the Future": A Study of Older Adults' Perceptions of LLM-Based
Chatbots. International Journal of Human-Computer Interaction (2025), 1-24.
 Zohar Gilad, Ofra Amir, and Liat Levontin. 2021. The effects of warmth and
competence perceptions on users' choice of an AI system. In Proceedings of the
2021 CHI conference on human factors in computing systems . 1-13.
 Emily Christine Gleaton. 2023. UNDERSTANDING THE DISUSE OF CONVERSATIONAL AGENTS AMONG OLDER ADULTS . Ph. D. Dissertation. Georgia Institute
of Technology.
 Lewis R Goldberg. 1993. The structure of phenotypic personality traits. American
psychologist 48, 1 (1993), 26.
 Gaole He, Nilay Aishwarya, and Ujwal Gadiraju. 2025. Is conversational xai
all you need? human-ai decision making with a conversational xai assistant.
In Proceedings of the 30th International Conference on Intelligent User Interfaces .
907-924.
 Robert R. Hoffman, Shane T. Mueller, Gary Klein, and Jordan Litman. 2023.
Measures for explainable AI: Explanation goodness, user satisfaction, mental
models, curiosity, trust, and human-AI performance. Frontiers in Computer Science
5 (Feb. 2023). doi:10.3389/fcomp.2023.1096257
 Cynthia S Jacelon and Allen Hanson. 2013. Older adults' participation in the
development of smart environments: An integrated review of the literature.
Geriatric Nursing 34, 2 (2013), 116-121.
 Hira Jamshed, Novia Nurain, and Robin N. Brewer. 2025. Designing Accessible
Audio Nudges for Voice Interfaces. In Proceedings of the 2025 CHI Conference
on Human Factors in Computing Systems (CHI '25) . Association for Computing
Machinery, New York, NY, USA, 1-16. doi:10.1145/3706598.3713563
 Jiun-Yin Jian, Ann M Bisantz, and Colin G Drury. 2000. Foundations for an
empirically determined scale of trust in automated systems. International journal
of cognitive ergonomics 4, 1 (2000), 53-71.
 Oliver John. 1999. The Big-Five trait taxonomy: History, measurement, and
theoretical perspectives. Published as (1999).
 Oliver P John, Eileen M Donahue, and Robert L Kentle. 1991. Big five inventory.
Journal of personality and social psychology (1991).
 Ji-Youn Jung, Sihang Qiu, Alessandro Bozzon, and Ujwal Gadiraju. 2022. Great
Chain of Agents: The Role of Metaphorical Representation of Agents in Conversational Crowdsourcing. In Proceedings of the 2022 CHI Conference on Human
Factors in Computing Systems (CHI '22) . Association for Computing Machinery,
New York, NY, USA, 1-22. doi:10.1145/3491102.3517653


CHI'26, Barcelona, Spain,
Mathur et al.

 Pranav Khadpe, Ranjay Krishna, Li Fei-Fei, Jeffrey T Hancock, and Michael S
Bernstein. 2020. Conceptual metaphors impact perceptions of human-ai collaboration. Proceedings of the ACM on Human-Computer Interaction 4, CSCW2 (2020),
1-26.
 Han-Jong Kim, Chang Min Kim, and Tek-Jin Nam. 2018. SketchStudio: Experience
Prototyping with 2.5-Dimensional Animated Design Scenarios. In Proceedings of
the 2018 Designing Interactive Systems Conference (DIS '18) . Association for Computing Machinery, New York, NY, USA, 831-843. doi:10.1145/3196709.3196736
 Jieun Kim and Susan R. Fussell. 2025. Should Voice Agents Be Polite in an
Emergency? Investigating Effects of Speech Style and Voice Tone in Emergency
Simulation. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25) . Association for Computing Machinery, New York, NY,
USA, Article 61, 17 pages. doi:10.1145/3706598.3714203
 Sunnie SY Kim, Q Vera Liao, Mihaela Vorvoreanu, Stephanie Ballard, and Jennifer Wortman Vaughan. 2024. " I'm Not Sure, But...": Examining the Impact of
Large Language Models' Uncertainty Expression on User Reliance and Trust.
In Proceedings of the 2024 ACM conference on fairness, accountability, and transparency . 822-835.
 Anders Kofod-Petersen and Jorg Cassens. 2007. Explanations and context in
ambient intelligent systems. In International and Interdisciplinary Conference on
Modeling and Using Context . Springer, 303-316.
 Matthew L Lee and Anind K Dey. 2015. Sensor-based observations of daily living
for aging in place. Personal and Ubiquitous Computing 19, 1 (2015), 27-43.
 Q Vera Liao, Milena Pribic, Jaesik Han, Sarah Miller, and Daby Sow. 2021.
Question-driven design process for explainable AI user experiences. arXiv
preprint arXiv:2104.03483 (2021).
 Lars Malmqvist. 2025. Sycophancy in large language models: Causes and mitigations. In Intelligent Computing-Proceedings of the Computing Conference . Springer,
61-74.
 Rahul Manche and Praveen Kumar Myakala. 2022. Explaining black-box behavior
in large language models. International Journal of Computing and Artificial
Intelligence 3, 2 (2022).
 Niharika Mathur, Kunal Dhodapkar, Tamara Zubatiy, Jiachen Li, Brian Jones,
and Elizabeth Mynatt. 2022. A collaborative approach to support medication
management in older adults with mild cognitive impairment using conversational assistants (CAs). In Proceedings of the 24th International ACM SIGACCESS
Conference on Computers and Accessibility . 1-14.
 Niharika Mathur, Tamara Zubatiy, and Elizabeth Mynatt. 2024. Categorizing
Sources of Information for Explanations in Conversational AI Systems for Older
Adults Aging in Place. arXiv preprint arXiv:2406.05111 (2024).
 Niharika Mathur, Tamara Zubatiy, Agata Rozga, Jodi Forlizzi, and Elizabeth
Mynatt. 2025. " Sometimes You Need Facts, and Sometimes a Hug": Understanding
Older Adults' Preferences for Explanations in LLM-Based Conversational AI
Systems. arXiv preprint arXiv:2510.06697 (2025).
 Niharika Mathur, Tamara Zubatiy, Agata Rozga, and Elizabeth Mynatt. 2023.
"Why Did You Say That?": Understanding Explainability in Conversational AI
Systems for Older Adults with Mild Cognitive Impairment (MCI). In International
Conference on Ubiquitous Computing and Ambient Intelligence . Springer, 208-214.
 Niharika Mathur, Tamara Zubatiy, Agata Rozga, and Elizabeth Mynatt. 2025. " It
feels like hard work trying to talk to it": Understanding Older Adults' Experiences
of Encountering and Repairing Conversational Breakdowns with AI Systems.
arXiv preprint arXiv:2510.06690 (2025).
 Tim Miller. 2019. Explanation in artificial intelligence: Insights from the social
sciences. Artificial intelligence 267 (2019), 1-38.
 Deepika Mohan, Duaa Zuhair Al-Hamid, Peter Han Joo Chong, Kalupahana
Liyanage Kushan Sudheera, Jairo Gutierrez, Henry CB Chan, and Hui Li. 2024.
Artificial intelligence and iot in elderly fall prevention: A review. IEEE Sensors
Journal 24, 4 (2024), 4181-4198.
 Sara Moussawi, Marios Koufaris, and Raquel Benbunan-Fich. 2021. How perceptions of intelligence and anthropomorphism affect adoption of personal intelligent
agents. Electronic Markets 31, 2 (June 2021), 343-364. doi:10.1007/s12525-02000411-w
 Elizabeth D Mynatt, Jim Rowan, Sarah Craighill, and Annie Jacobs. 2001. Digital
family portraits: supporting peace of mind for extended family members. In
Proceedings of the SIGCHI conference on Human factors in computing systems .
333-340.
 Mohammad Namvarpour and Afsaneh Razi. 2025. The Art of Talking Machines:
A Comprehensive Literature Review of Conversational User Interfaces. In Proceedings of the 7th ACM Conference on Conversational User Interfaces . 1-18.
 Hadas Orgad, Michael Toker, Zorik Gekhman, Roi Reichart, Idan Szpektor, Hadas
Kotek, and Yonatan Belinkov. 2024. Llms know more than they show: On the
intrinsic representation of llm hallucinations. arXiv preprint arXiv:2410.02707
(2024).
 Richard Pak, Ericka Rovira, and Anne McLaughlin. 2025. Polite AI mitigates user
susceptibility to AI hallucinations. Ergonomics 68, 10 (2025), 1735-1745.
 Jiyoung Park and Sang Eun Woo. 2022. Who likes artificial intelligence? Personality predictors of attitudes toward artificial intelligence. The Journal of psychology
156, 1 (2022), 68-94.

 Gabrijela Perkovic, Antun Drobnjak, and Ivica Boticki. 2024. Hallucinations
in llms: Understanding and addressing challenges. In 2024 47th MIPRO ICT and
electronics convention (MIPRO) . IEEE, 2084-2088.
 Sabid Bin Habib Pias, Ran Huang, Donald S. Williamson, Minjeong Kim, and Apu
Kapadia. 2024. The Impact of Perceived Tone, Age, and Gender on Voice Assistant
Persuasiveness in the Context of Product Recommendations. In Proceedings of the
6th ACM Conference on Conversational User Interfaces (CUI '24) . Association for
Computing Machinery, New York, NY, USA, 1-15. doi:10.1145/3640794.3665545
 Alisha Pradhan. 2021. An entanglement perspective on how older adults use
and design emerging ubiquitous technologies. In Companion Publication of the
2021 Conference on Computer Supported Cooperative Work and Social Computing .
287-290.
 Alisha Pradhan, Amanda Lazar, and Leah Findlater. 2020. Use of intelligent
voice assistants by older adults with low technology use. ACM Transactions on
Computer-Human Interaction (TOCHI) 27, 4 (2020), 1-27.
 Alisha Pradhan, Kanika Mehta, and Leah Findlater. 2018. " Accessibility Came
by Accident" Use of Voice-Controlled Intelligent Personal Assistants by People
with Disabilities. In Proceedings of the 2018 CHI Conference on human factors in
computing systems . 1-13.
 Hasibur Rahman and Smit Desai. 2025. Vibe Check: Understanding the Effects of
LLM-Based Conversational Agents' Personality and Alignment on User Perceptions in Goal-Oriented Tasks. arXiv preprint arXiv:2509.09870 (2025).
 Hasibur Rahman and Smit Desai. 2025. Vibe Check: Understanding the Effects of
LLM-Based Conversational Agents' Personality and Alignment on User Perceptions in Goal-Oriented Tasks. doi:10.48550/arXiv.2509.09870 arXiv:2509.09870

[cs].
 Sara Salimzadeh, Gaole He, and Ujwal Gadiraju. 2024. Dealing with uncertainty:
Understanding the impact of prognostic versus diagnostic tasks on trust and
reliance in human-AI decision making. In Proceedings of the 2024 CHI Conference
on Human Factors in Computing Systems . 1-17.
 Matthias Schmidmaier, Jonathan Rupp, Darina Cvetanova, and Sven Mayer. 2024.
Perceived Empathy of Technology Scale (PETS): Measuring Empathy of Systems
Toward the User. In Proceedings of the 2024 CHI Conference on Human Factors in
Computing Systems (CHI '24) . Association for Computing Machinery, New York,
NY, USA, 1-18. doi:10.1145/3613904.3642035
 Jan-Philipp Stein, Tanja Messingschlager, Timo Gnambs, Fabian Hutmacher, and
Markus Appel. 2024. Attitudes towards AI: measurement and associations with
personality. Scientific Reports 14, 1 (2024), 2909.
 Yuan Sun and Ting Wang. 2025. Be friendly, not friends: How llm sycophancy
shapes user trust. arXiv preprint arXiv:2502.10844 (2025).
 Sarah Theres Volkel and Lale Kaya. 2021. Examining user preference for agreeableness in chatbots. In Proceedings of the 3rd Conference on Conversational User
Interfaces . 1-6.
 Alan Yusheng Wu and Cosmin Munteanu. 2018. Understanding older users'
acceptance of wearable interfaces for sensor-based fall risk assessment. In Proceedings of the 2018 CHI conference on human factors in computing systems . 1-13.
 Gerui Xu, Shruthi Venkatesha Murthy, and Bochen Jia. 2025. Enhancing Intuitive
Decision-Making and Reliance Through Human-AI Collaboration: A Review. In
Informatics, Vol. 12. MDPI, 135.
 Michelle X Zhou, Gloria Mark, Jingyi Li, and Huahai Yang. 2019. Trusting virtual
agents: The effect of personality. ACM Transactions on Interactive Intelligent
Systems (TiiS) 9, 2-3 (2019), 1-36.