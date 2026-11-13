# Trusting the Machine: Separating Trust in GenAI Authors From Trust in Their Content

Caroline Simpson [a,*]

Clara Colombatto [a]
Jonathan A. Fugelsang [a]


aDepartment of Psychology, University of Waterloo, 200 University Avenue West, Waterloo,
N2L 3G1, Ontario, Canada


*Corresponding author


Email addresses: caroline.simpson@uwaterloo.ca (Caroline Simpson),
clara.colombatto@uwaterloo.ca (Clara Colombatto), jafugels@uwaterloo.ca (Jonathan A.
Fugelsang)


# Abstract

As Generative Artificial Intelligence (GenAI) becomes more sophisticated and widespread,
it matters how its perceived humanness affects trust. Previous work shows that
anthropomorphism increases an agent's perceived trustworthiness as an advisor. We
asked whether an author's presentation also affects trust in the information it produces in
a non-advisory role. In two experiments, participants read a science communication blog
post attributed to an author with varying anthropomorphic cues. They rated the
trustworthiness of the author (author trust) and the content (content trust). In Experiment 1
( N = 270), the post was attributed to a GenAI author described with low or high
anthropomorphic cues, or to a human expert. The human author, who also differed in
implied professional expertise, received higher author trust than either GenAI author. This
effect was reliably larger than the effect on content trust. The low- and high-cue GenAI
authors did not reliably differ, including in anthropomorphism ratings. In Experiment 2 ( N =
148, preregistered), participants chatted with a GenAI chatbot, presented as the author,
that used fewer (low condition) or more (high condition) anthropomorphic cues. The highcue chatbot was rated more anthropomorphic and received modestly higher author trust.
No reliable content trust effect was detected, and evidence that the two effects differed
was inconclusive. Author and content trust were strongly correlated in both experiments.
These results suggest that cues to an author's humanness may shape trust in the author
more than in what it communicates, although the clearest evidence came from comparing
human and GenAI authors.


Keywords: trust; epistemic trust; anthropomorphism; generative artificial intelligence;
source credibility; message credibility


# Highlights


 - Author trust and content trust appear distinct but strongly correlated judgments


 - Expert human author more trusted than GenAI authors; content trust differed less


 - Describing a GenAI author in human-like terms had no detectable effect on trust


 - Empathetic chatbot replies modestly raised author trust, not reliably content trust


 - Trust in GenAI and trust in its content should be measured separately


# 1. Introduction

Artificial intelligence (AI) has been around for decades, but with the release of Generative
AI (GenAI) systems such as OpenAI's ChatGPT, human-level content creation technology
is broadly accessible for the first time (Dale, 2024; Hu, 2023). With the ease of a
conversational message, people can enlist the help of GenAI to perform a wide range of
tasks, such as content writing, image generation, or summarizing complex topics. GenAI is
able to create well-formed and believable content that can misinform, either intentionally
or due to so-called AI hallucinations (Ji et al., 2023). As this technology continues to evolve
rapidly, it is vital to understand how humans determine the credibility of AI-generated
informational content.


In addition to the increasing scope of tasks that AI is taking on, GenAI is becoming more
human-like. There is evidence that anthropomorphism, the attribution of human-like
characteristics to non-human agents, increases trust in purpose-built AI agents, such as
autonomous vehicles, and trust resiliency when using AI for decision making (De Visser et
al., 2016; Waytz et al., 2014). However, there is little work directly looking at the link
between anthropomorphism and trust in communicated knowledge in a non-advisory
situation, known as epistemic trust (Sprecher et al., 2022). Most of what is known about
anthropomorphism and trust comes from static cues, such as a human-like face, name, or
description of an agent (Gong, 2008; Waytz et al., 2014). Conversational GenAI conveys
humanness differently: through how it behaves during an interaction, for example by
responding with warmth or empathy (Araujo, 2018; Liu & Sundar, 2018). Meanwhile,
studies of AI-authored content usually measure the credibility of the content
alone (Longoni et al., 2022; Waddell, 2018), so it is not known whether human-like cues
affect trust in a GenAI agent and trust in what it says in the same way.


We address these gaps in two experiments that hold a science communication blog post
constant and vary only how its author is presented. Experiment 1 tests static cues:
participants read a short description of a GenAI author with low or high anthropomorphic
cues, or of a human expert. Experiment 2 tests behavioral cues: participants converse with
a GenAI chatbot, presented as the author, that responds in either a mechanical or an
empathetic, emotionally expressive way. In both, we measure trust in the author and trust
in the content separately, and test directly whether author cues affect the two to the same
degree. To contextualize these questions, we first review the technological and
psychological background underlying GenAI, anthropomorphism, and epistemic trust.

# 2. Background

# 2.1. Overview of GenAI


GenAI models come in many forms. Some of the most common forms at the time of writing
are those that generate text, such as Large Language Models (LLMs). An LLM is an artificial
neural network that has been trained on a large body of textual input, usually via


unsupervised learning. This means that the text is not annotated or marked with groundtruth information to aid in the training process. Much like a human would read a book and
encode the knowledge contained within it in their mind, the LLM transforms the words,
synthesizes, and encodes the knowledge into its model according to a particular
algorithmic strategy. For example, OpenAI models, such as ChatGPT, are generative pretrained transformer (GPT) models, which are based on the transformer algorithm (Vaswani
et al., 2017). The transformer learns patterns in its training data, and models based on it
generate output by predicting the next token-such as a word, letter, or phrase-in a
sequence, based on the user input and the data used for training. As a result, they can
produce nonsensical or non-factual output, colloquially known as hallucinations (Ji et al.,
2023; Ooi et al., 2025). In addition, models are often fine-tuned after their initial training to
make their output more truthful and less harmful, for example through reinforcement
learning from human feedback (Ouyang et al., 2022).


There has been a rapid advancement in quality and sophistication of the output of GenAI
models to the point that the content is now as good as that of human authors for some
tasks. In fact, recent research has found that the quality of AI-generated content was rated
more highly than that of human authors (Zhang & Gosline, 2023). With ongoing quality
improvements, GenAI has the potential to help us be more efficient and productive in
many aspects of society (Ooi et al., 2025). However, its potential to support humans in
everyday tasks is conditional on humans' willingness to trust its content (i.e., their
epistemic trust).

# 2.2. Epistemic Trust


Epistemic trust is one's willingness to accept and integrate communicated
knowledge (Knapen et al., 2022). It is vital for social learning (Csibra & Gergely, 2009). This
trust is balanced with epistemic vigilance in deciding what information to believe (Sperber
et al., 2010). One's epistemic credulity is high when an individual trusts too widely without
enough vigilance; in this case, they may be susceptible to misinformation and
exploitation (Campbell et al., 2021). On the other hand, epistemic mistrust is high when
one is overly vigilant and untrusting of others (Campbell et al., 2021). Individuals with high
epistemic mistrust may lack the ability to learn effectively from social experiences.
Without social learning, each person would need to experience everything directly (Csibra
& Gergely, 2009; Mascaro & Sperber, 2009) and would likely suffer greatly as a result.
Imagine the child who does not trust the warnings of a parent to not touch a hot stove
because it will hurt, or the parent whose child dies from a preventable childhood illness
because they were hesitant to vaccinate according to expert advice. Similarly, without
enough vigilance, one can assimilate false information, possibly leading to false beliefs
and taking dangerous actions leading to harm; for example, acting on claims that various
diseases such as COVID-19 or cancer can be cured by ingesting chlorine dioxide (Burke et
al., 2014).


# 2.2.1. Trust in a Source versus Trust in a Message

Research on credibility has distinguished judgments of a source, such as its perceived
expertise, integrity, and benevolence (Hendriks et al., 2015), from judgments of a message,
such as whether it is accurate, authentic, and believable (Appelman & Sundar, 2016).
These judgments should covary, because the same evidence can inform both. The quality
of a message can shape impressions of its source (Slater & Rouner, 1996), and in turn, a
credible source can make a message more persuasive (Pornpitakpan, 2004), particularly
when its arguments are ambiguous (Chaiken & Maheswaran, 1994). However, source and
message credibility are not interchangeable: they can be measured separately (Appelman
& Sundar, 2016), and epistemic vigilance involves evaluating the plausibility of what is said
as well as the trustworthiness of who says it (Sperber et al., 2010). Therefore, a person can
like a communicator while doubting a particular claim or accept a plausible claim without
knowing much about who made it. In this paper, we refer to trust in the communicator as
author trust and trust in the communication as content trust.

# 2.2.2. Factors Influencing Epistemic Trust


Epistemic trust is influenced by several factors that fall into two main categories,
epistemic cues (e.g., past accuracy, informativeness, relevant expertise, good reasoning, a
majority opinion) and social markers (e.g., prosocial behaviors, familiarity, similarity, age,
and appearance) (Clement et al., 2004; Corriveau & Harris, 2009; Li et al., 2023; Tong et al.,
2020). As theory of mind becomes more advanced as children age, they tend to rely more
on epistemic cues rather than social markers when deciding whether to trust
communicated knowledge (Baumann et al., 2023; Li et al., 2023; Tong et al., 2020).
However, when there are few epistemic cues available, social markers related to the
provider of information play an increased role in the decision of whether to trust that
information (Li et al., 2023). Furthermore, Fonagy et al. (2017) postulate that an individual
may develop different trait-like tendencies toward trusting or mistrusting communicated
information depending on factors such as childhood adversities, attachment security, and
ability to reflect on mental states.


While epistemic trust typically involves judgments about human communicators,
emerging technologies introduce non-human agents as potential sources of information.
Understanding how these socially based epistemic judgments may be used when
considering content produced by GenAI requires consideration of anthropomorphism (i.e.,
the perception of human-like qualities in non-human entities).

# 2.3. Anthropomorphism


A powerful social marker that may play a key role in deciding the trustworthiness of an
artificial agent is anthropomorphism (Kulms & Kopp, 2019). Anthropomorphism is the
attribution of human characteristics and mental states (e.g., goals, intentions, emotions)
to non-human things, whether they are living or not (Epley et al., 2007). The presence of a
human-like face has been found to increase anthropomorphism and mind perception in


non-human agents (Broadbent et al., 2013; Epley et al., 2007; Looser & Wheatley, 2010).
Beyond the presence of human-like physical features, perceiving a mind in an agent can
also evoke anthropomorphism (Epley, 2018). This is particularly relevant with increasing
use and availability of conversational GenAI agents, which demonstrate language and
reasoning capabilities previously only seen within humans. Past research has found that
mind perception, as well as individual tendencies toward anthropomorphizing, predicts
self-reported attitudes toward important everyday concerns: the extent of ethical
consideration and respect directed toward an agent; the amount of responsibility and
accountability conferred on an agent; the amount of social influence an agent has; and
critically, the perceived trustworthiness of an agent (Gray et al., 2011; Gray et al., 2012;
Gray & Wegner, 2012; Waytz et al., 2010).

# 2.4. Relationship Between Anthropomorphism and Trust


Epistemic trust and anthropomorphism in GenAI have yet to be explored in depth. In one of
very few existing studies, the use of a spoken voice increased both ratings of
anthropomorphism and the perceived accuracy of advice, showing a correlation between
anthropomorphism and trust in advice given by the GenAI agents (Cohn et al., 2024).


Additionally, mind perception in GenAI, which is associated with anthropomorphism, has
been shown to correlate with trust (self-reported) and with rates of advice taking; while
trust was positively correlated with mind perception in general, when mental-state traits
were associated with experience (e.g., happiness) rather than intelligence (e.g., planning),
attribution was weakly negatively correlated with advice acceptance from an LLM
agent (Colombatto et al., 2025).


Beyond GenAI agents, various studies have examined the relationship between trust and
anthropomorphism in other computer-based agents. The general finding is that as
anthropomorphism increases, the trust in the agents increases (Gong, 2008; Nowak, 2004;
Waytz et al., 2010; Waytz et al., 2014). When participants interacted with a computer agent
represented by a static image avatar of varying levels of human-likeness, higher levels of
anthropomorphism resulted in the agent being more highly rated for competence and
trustworthiness (Gong, 2008). Similarly, when autonomous vehicles in a driving simulation
study were given anthropomorphic features (i.e., name, gender, and voice), drivers were
more trusting of the vehicle compared with drivers in the non-anthropomorphized
condition (Waytz et al., 2014).


Most of these studies conveyed anthropomorphism through static cues: a face or
avatar (Gong, 2008; Nowak, 2004), a name, gender, or voice (Cohn et al., 2024; Waytz et al.,
2014), or a description (Castelo et al., 2019). Conversational agents can also convey
humanness through their behavior during an interaction, such as informal, responsive
language (Araujo, 2018; Go & Sundar, 2019), while expressions of sympathy and empathy
can lead people to respond to a chatbot as a social actor (Liu & Sundar, 2018).


# 2.4.1. Biases in Trust Toward AI and AI-Authored Content

Although higher levels of anthropomorphism often promote trust, prior research suggests
that human-machine trust is shaped by additional cognitive biases. Phenomena such as
automation bias and complacency (Goddard et al., 2012; Parasuraman & Manzey, 2010),
algorithm aversion (Dietvorst et al., 2015), and human favoritism (Zhang & Gosline, 2023)
highlight that trust in artificial agents depends not only on perceived humanness but also
on task context and pre-existing expectations about technology. Humans demonstrate
automation bias when they show an increased willingness to rely on automation without
verifying the likely accuracy of its output. In line with automation bias, De Visser et al.
(2016) found that participants initially deferred to a non-anthropomorphized computer
agent more readily than to more human-like agents when doing a judgment task. However,
trust in the human-like agents was more resilient as the agents' advice became less
reliable. Algorithm aversion shows the opposite pattern: Castelo et al. (2019) found that
people trusted algorithms less than humans for tasks that are perceived as subjective,
such as writing content. When the algorithms were portrayed as having affective humanlikeness, their perceived usefulness for more subjective tasks increased (Castelo et al.,
2019).


It remains unclear how users may perceive newer systems given the significant
development of AI systems in recent years. Previous research was primarily about
purpose-built automation, algorithms, and AI systems. General-purpose, conversational
GenAI agents may invoke different cognitive biases and mechanisms. For instance, Zhang
& Gosline (2023) compared persuasive content generated by human experts, by GenAI,
and by the two in collaboration. When participants did not know the source, they rated AIgenerated content as higher quality than human-generated content. When they were told
the source, however, content attributed to a human expert was rated more highly than
when its source was unknown. Learning that AI was involved in the writing process did not
lower ratings of the content. These findings suggest that human favoritism, rather than
algorithm aversion, may bias judgments of generated content.


Other studies of AI authorship point in different directions. Readers rated news attributed
to a robot reporter as less credible than identical news attributed to a human
journalist (Waddell, 2018). Headlines labeled as written by AI were rated as less accurate
than the same headlines labeled as written by humans, for both true and false
headlines (Longoni et al., 2022; see also Altay & Gilardi, 2024). In contrast, the machine
heuristic proposes that people may assume machine sources are objective and free of
bias, which could protect machine-authored content from some of the skepticism directed
at human sources (Sundar, 2008). However, when Waddell (2018) tested this directly, the
machine heuristic did not explain how readers judged machine-written news; instead, the
lower credibility was partly explained by the machine author seeming less human. These
studies typically measure the credibility of the content alone and rarely ask whether author
trust and content trust move together when the presentation of the author changes.


Taken together, these findings highlight a complex relationship between
anthropomorphism and trust; while human-like cues can foster trust in automation, biases
such as automation bias and human favoritism can complicate the relationship. Prior work
has also largely examined either trust in artificial agents or the credibility of their content,
but not how the two respond to the same cues. The current experiments addressed this by
manipulating the anthropomorphic cues of an author and testing directly whether they
affect trust in the author and trust in the content to the same degree.

# 3. The present research


In two experiments, we evaluated how manipulating the anthropomorphic cues of an
author affected trust in that author and trust in the content attributed to them. In all cases,
the content was a science communication blog post about a fictional medical
breakthrough. Because the post was the same in every condition, we could test whether
author cues affected judgments of the author and the content to the same degree.
Experiment 1 presented one of three authors-a GenAI author with low anthropomorphic
cues, a GenAI author with high anthropomorphic cues, or a human expert-using a name,
image, and a short description. Experiment 2 varied whether a GenAI chatbot, presented
as the author of the same blog post, exhibited more or fewer anthropomorphic cues during
a conversation. Measuring author and content trust in response to the same manipulations,
rather than either one alone, is what allows the two to be compared. Details of each
manipulation are provided within the Methods section of each experiment.


We hypothesized the following:


 - H 1: An increase in anthropomorphic cues would increase the ratings of
trustworthiness of the author.


 - H 2: An increase in anthropomorphic cues would increase the ratings of
trustworthiness of the content.


Our findings were consistent with H 1 for the comparison between the human and GenAI
authors in Experiment 1 and for the behavioral manipulation in Experiment 2, but not for
the comparison between the low- and high-anthropomorphic-cue GenAI authors in
Experiment 1. The findings did not support H 2. We did not detect a reliable effect of author
presentation on content trust in the primary analyses of either experiment. In Experiment 1,
the effect of author presentation on author trust was reliably larger than its effect on
content trust; in Experiment 2, the evidence on this comparison was inconclusive.


Anonymized data, study materials, and analysis scripts for all experiments are available
online on the Open Science Framework (OSF) website (https://osf.io/6u74p/).


# 4. Experiment 1

In Experiment 1, participants read the blog post and a short description of the agent they
were told was the author of the post. They were then asked to report how trustworthy they
found the author and the content. They were also asked to report their perceptions of other
characteristics of the author (i.e., anthropomorphism, likeability, and perceived
intelligence).

# 4.1. Methods


This experiment was approved by a Research Ethics Board of the University of Waterloo
(REB #47011) and was not preregistered.

# 4.1.1. Participants


We recruited 315 US-based participants through CloudResearch. This sample was
determined in accordance with a power analysis performed using the pwr package (version
1.3-0; Champely, 2020) in R (version 4.6.1; R Core Team, 2026). The power analysis
indicated that we would need a minimum of 53 participants in each of the three condition
levels, for a total of 159, to detect a moderate size effect (Cohen's f = 0.25). To detect a
small effect (Cohen's f = 0.10), we would need to recruit 323 participants per level for a
total of 969. Due to the limited number of existing studies that looked at the effect of
anthropomorphic cues in GenAI on epistemic trust, we took a conservative approach and
aimed to target the detection of a small to moderate effect while balancing the overall cost
of the study. We aimed to recruit a minimum of 300 participants, 100 in each condition,
with the assumption of at most 20% exclusions due to poor data quality and attrition ( n =
80, k = 3, Cohen's f = 0.20, α= 0.05, 1 - β≈0.80). With the final sample, the design had 80%
power to detect an omnibus effect of Cohen's f = 0.19 and a pairwise difference of Cohen's
d = 0.42 (Cohen's d = 0.49 with Bonferroni correction).


Participants were compensated with US$2.00 for completing this 15-minute online survey.
Participants were from the United States of America, were recruited from the
CloudResearch Approved Participants List, and were required to have an approval rating
greater than or equal to 95% and to have completed more than 100 HITs.


After data exclusion for quality control (further described in the analysis section), the final
sample was 270 participants (ages 21 to 79, M age = 45.10, SD age = 12.27; 107 females; 268
fluent in English; 256 English as a first language; 232 with at least some post-secondary
education). Conditions did not differ in age, sex, education, or frequency of GenAI use
(Kruskal-Wallis tests, all p s > .22; Table 1). They did differ in how often participants
consumed media similar to the blog post ( p = .025): participants in the low condition were
more likely to consume such media at least weekly (54%, compared with 34% and 38% in
the high and human conditions respectively).


Table 1. Sample characteristics by condition in both experiments. p values are from
Kruskal-Wallis tests of balance across conditions; GenAI use and consumption of media


similar to the blog post were tested as 8-point frequency scores. Education is the highest
level participants reported; most Experiment 2 participants without post-secondary
education, all recruited from a university participant pool, reported completed secondary
school. AI literacy and technical self-efficacy were not measured.


Characteristic Low High Human p

Experiment 1

n 87 92 91

Age, M ( SD ) 44.6 (12.2) 44.4 (12.9) 46.2 (11.7) .499

Female, n (%) 41 (47) 33 (36) 33 (36) .222

Post-secondary education, n (%) 78 (90) 75 (82) 79 (87) .283

GenAI use weekly or more, n (%) 44 (51) 48 (52) 45 (49) .753

Similar media weekly or more, n (%) 47 (54) 31 (34) 35 (38) .025

Experiment 2

n 75 73
Age, M ( SD ) 20.3 (3.7) 20.5 (5.1) - .614

Female, n (%) 61 (81) 54 (74) - .284

Post-secondary education, n (%) 49 (65) 52 (71) - .442

GenAI use weekly or more, n (%) 55 (73) 55 (75) - .094

Similar media weekly or more, n (%) 40 (53) 43 (59) - .278

# 4.1.2. Materials


Participants were presented with a brief description and an accompanying image of an
author. Participants were randomly assigned to one of three author description conditions.
Two of the conditions used GenAI agents, and a third provided a human baseline for
comparison. The description and image presented for the author had varying
anthropomorphic cues per condition: (1) low anthropomorphic cues: the author, named
"Science Communication AI," was described as a GenAI agent in functional, mechanical
language and represented by an image of a computer; (2) high anthropomorphic cues: the
author, named "Simone the Science Synthesizer," was described as a GenAI agent with
human-like attributes (e.g., having emotions) and represented by a human-like cartoon
image; and (3) human expert: the author, named "Dr. Simone Tran," was described as a
human science communication expert and represented with a photograph of a person
aligned with the description. We used ChatGPT (GPT-4o) (OpenAI, 2024) to generate the
author descriptions for each of the three conditions. The photographs for the low and
human conditions were free-to-use stock images obtained from Pexels (G., 2021;
Nikhomkhai, 2016). The cartoon image used for the high condition was generated by
ChatGPT based on the image for the human condition (OpenAI, 2024). See Figure 1 for the
author descriptions and images by condition.


(a) Low anthropomorphic cues


(b) High anthropomorphic cues


(c) Human expert


Figure 1. Author descriptions in Experiment 1. Each participant saw one vignette
corresponding to their randomly assigned author condition.


Because a GenAI author cannot plausibly hold professional credentials, the human
condition differed from the GenAI conditions in implied expertise as well as in
anthropomorphic cues. We therefore interpret differences between the human and the
two GenAI conditions as differences between kinds of author and treat the comparison
between the low and high conditions as the test of anthropomorphic cues within GenAI.
The high and human conditions shared the name Simone and a human-like image, so the
difference between them lay mainly in the type of author and the title that signaled
expertise.


All participants then read the same fictional science communication blog post, which was
presented as written by the author described in their assigned vignette. The Internet is


increasingly a source of scientific information for many. In the United States, the National
Science Board (NSB) reported an increase in Americans saying they use the Internet as
their primary source of science and technology news, up from 9% in 2001 to 57% in 2018,
with 70% saying they would go online to learn more about a science and technology
issue (National Science Board, 2020). Similarly, Americans view new medical discoveries
as the most interesting topic within science and technology news, with 56% of
respondents being very interested in them (National Science Board, 2020). However,
determining whether the content on the Internet is reliable and trustworthy is not
necessarily straightforward. Therefore, to support external validity, we chose to use a
science communication blog post as the authored content stimulus. Furthermore, given
that Sperber et al. (2010) noted that people are more epistemically vigilant when
information is relevant to them, we decided to use a fictional medical breakthrough related
to inflammatory diseases which afflict many people worldwide (Slavich, 2015). We used
ChatGPT (GPT-4o) (OpenAI, 2024) to generate the blog post; all prompts used to generate
stimuli are available on OSF. The post reads as a summary of a placebo-controlled clinical
trial conducted by other researchers, and its tone is optimistic. The full text of the post is
available in Figure 2.


Figure 2. Blog post shown to all participants in Experiments 1 and 2. We used ChatGPT
(GPT-4o) (OpenAI, 2024) to create this fictional science communication blog post.


# 4.1.3. Measures

Anthropomorphism was measured using a subset of items from the Godspeed Instrument,
which consists of a series of questionnaires developed to measure anthropomorphism,
animacy, likeability, perceived intelligence, and perceived safety (Bartneck et al., 2009).
Each trait is measured using a semantic differential scale with relevant anchor
descriptives for each item (left descriptive = 0 and right descriptive = 100). We combined
and randomized the items from the anthropomorphism, likeability, and perceived
intelligence subsets (e.g., Fake-Natural, Unfriendly-Friendly, Incompetent-Competent).
We removed "Moving rigidly-Moving elegantly" from the anthropomorphism questionnaire
because the participants were not interacting with a moving robot.


We used the Muenster Epistemic Trustworthiness Inventory (METI; Hendriks et al., 2015) to
assess epistemic trustworthiness of the author of the provided communication content.
The METI was designed to measure epistemic trustworthiness of experts when laypeople
are presented with limited information about the expert, such as a short text
description (Hendriks et al., 2015). It consists of 14 items in three subscales: expertise (6
items), integrity (4 items), and benevolence (4 items). Each item was measured with a
semantic differential scale with a slider anchored between pairs of adjectives (e.g.,
Honest-Dishonest, Fair-Unfair, Considerate-Inconsiderate; left descriptive = 0 and right
descriptive = 100). Given the similar structure to the Godspeed items, we presented these
measures to participants on the same screen, intermixing and randomizing the order of the
items.


In addition, we asked participants to rate the credibility of the provided communication
content using the message credibility scale developed by Appelman & Sundar (2016). The
message credibility scale consists of three items (i.e., accurate, authentic, believable).
Participants were asked to rate how well each of these three adjectives described the
content on a 5-point scale. Three additional adjectives were added to the measure to make
it less obvious what we were measuring and to gather perceptions of writing quality (i.e.,
well-written, boring, engaging). These additions were used for post hoc analysis and did
not contribute to the content trust measurement. All items were presented on the same
page, in a random order, and participants responded on a scale from 1 to 5 with scale
labels of "Describes very poorly" to "Describes very well".


As an additional indicator of trust in the content and author, and consistent with our focus
on trust judgments in realistic contexts, we included items related to behavioral intentions.
We asked participants to rate a series of statements related to the influence of the content
they read (i.e., "If I were to suffer from a relevant medical condition, I am likely to use
Velocerin." [the medication announced in the blog post content stimuli]; "I would share
the information in the article with a close friend or family member who may benefit from
the medication described."; "I believe the claims made about Velocerin in this article."; "I
do not have confidence in Velocerin based on what I have read."; "The blog post is not
trustworthy enough for me to share on social media, if I were a person who shares links on
social media."; "After reading this blog post I have enough information to make an


informed decision about Velocerin."; "If I were suffering from a relevant medical condition,
I would look into Velocerin more after reading this blog post.") and the author (i.e., "I would
ask the author of this blog post to summarize scientific content for me in the future."; "I
would read articles by the author of this blog post in the future if they were on a topic that
was of interest to me."). A 7-point Likert scale was used for each scale item, with
endpoints labeled "Strongly disagree" and "Strongly agree". This novel measure was
specific to the content of this study and had not previously been validated in the literature.


We refer to the combination of the METI and the novel author items as author trust, but it
reflects perceived expertise, integrity, and benevolence of the source and intentions to rely
on it, not acceptance of the source's claims. Likewise, we refer to the combination of the
message credibility scale and the novel content items as content trust, but it combines
perceived credibility with belief, intended action toward the medication, and judgments of
whether the post gave enough information. For this reason, we also report every main
analysis using only the validated scales (METI for author trust and message credibility for
content trust).


Internal consistency was high and comparable across the item sets used to assess
anthropomorphism, author trust, and content trust (see Table 2).


Table 2. Internal consistency of anthropomorphism and trust-related item sets for
Experiment 1. Cronbach's α values were calculated on raw item responses prior to
standardization.


# Construct Item Set Cronbach's α

Anthropomorphism Godspeed .95

Author Trust METI .97

Author Trust Novel .89

Content Trust Appelman & Sundar .86

Content Trust Novel .91


The full text of all scales used in the experiments is available on OSF.

# 4.1.4. Procedure


Participants enrolled in the study on the CloudResearch platform and were redirected to a
survey hosted on the Qualtrics platform. Upon starting the study, participants were
presented with an information letter and asked to provide their consent to participate in
the study. To reduce bias during data collection, we used partial disclosure. We indicated
that the study was examining perceptions of communicated information and withheld the
intention to investigate the relationship between trust, anthropomorphism, and GenAI until
participants completed the study.


Upon consent, participants were randomly assigned to one of three author conditions: low
( n = 87), high ( n = 92), and human ( n = 91).


Participants were first presented with an instruction screen that indicated that they should
carefully read the blog post and the author's description on the next screen and that they
would later be asked to answer questions about the text. On the next page, they saw a
screen containing an image of the authoring agent, a description of that agent, and the blog
post; the author description and image varied according to the assigned author condition,
whereas the blog post was the same for all conditions. Participants were asked to answer
basic comprehension check questions about the content. If they did not answer them
correctly, they saw a screen asking them to read the description and the blog post carefully
again before proceeding. They were presented with the same stimuli content screen and
comprehension check questions once again. Following this, they proceeded regardless of
the correctness of their responses.


On the next screens, participants were shown the following measures in a randomized
order: items from the Godspeed Instrument (14 items; Bartneck et al., 2009) and the
METI (14 items; Hendriks et al., 2015), which were intermixed in a randomized order; the
message credibility scale (3 items; Appelman & Sundar, 2016) combined with the writing
quality items, intermixed in a randomized order; and our novel author and content trust
scale developed for this experiment. These were used to measure perceptions of the
author, author trust, and content trust respectively.


Participants were then asked about their familiarity with and use of artificial intelligence
technology, how often they consumed media similar to the blog post, and demographic
information, including age, sex, gender, language fluency, and educational level.
Participants were asked open-ended questions related to anything they found confusing,
the purpose of the study, and whether they experienced technical difficulties.


Finally, participants received a debriefing letter that revealed the full purpose of the study
and the condition to which they were assigned and stated that the blog post was fictional.

# 4.2. Analysis and Results


All data analysis was completed using R (version 4.6.1; R Core Team, 2026). We used the
traditional median imputation technique (Alwateer et al., 2024) to replace missing values
for continuous variables with the median value of the corresponding author condition
subgroup; the mode was used for any categorical variables. We used the median instead
of the mean for continuous variables because the data tended to be skewed and not
normally distributed across many of the variables. Only three item responses were missing,
each from a different participant (two in the anthropomorphism and trust measures and
one in a writing-quality item). The items combined into each composite (i.e., Godspeed,
METI, Appelman and Sundar, and the novel measure) used different response formats (0100 sliders, a 5-point scale, and 7-point scales). As such, we standardized each item as a
z-score across all participants in the experiment before averaging items into composite
scores. Because each composite is the mean of z-scored items, its standard deviation is
below 1 (author trust SD = 0.84, content trust SD = 0.80), so regression coefficients on the
composites are in standardized-item units rather than Cohen's d .


In R, we used the stats package (version 4.6.1; R Core Team, 2026) to conduct all one-way
analyses of variance (ANOVAs), Welch's t -tests, and Pearson correlations, and the psych
package (version 2.6.5; Revelle, 2026) to calculate Cronbach's α; Cohen's d (with the
pooled standard deviation) and ω were calculated with functions written for this study.
For all pairwise and post-hoc t -tests, p values were adjusted using Bonferroni correction.
Throughout the paper, condition comparisons are computed as high minus low, human
minus low, and human minus high, so positive values of t, d, and B indicate higher scores
in the high or human condition. We fit linear mixed-effects models with the lme4 (version
2.0-1; Bates et al., 2015) and lmerTest (version 3.2-1; Kuznetsova et al., 2017) packages.
Confidence intervals for Cohen's d were computed with the large-sample normal
approximation. Figures were made with the ggplot2 (version 4.0.3; Wickham, 2016) and
ggpubr (version 0.6.3; Kassambara, 2026) packages.


We checked the main results in five ways: using only the validated scales, standardizing
each composite before comparing author and content trust, adjusting for pre-existing
participant characteristics, analyzing complete cases only, and excluding participants who
needed to reread the stimuli. The adjusted models controlled for age, sex (female vs. all
other responses), post-secondary education, frequency of GenAI use, and frequency of
consuming media similar to the blog post (the latter two as three-level factors: at least
weekly, occasionally, or rarely or never), with HC3 robust standard errors (sandwich,
version 3.1-1, Zeileis et al., 2020; lmtest, version 0.9-40, Zeileis & Hothorn, 2002; and car,
version 3.1-5, Fox & Weisberg, 2019). We did not adjust for likeability or perceived
intelligence, because they were measured after the manipulation and can be changed by
it (Montgomery et al., 2018). Where a content trust difference was not significant, we used
two one-sided tests (TOST; Lakens et al., 2018) as a sensitivity analysis to describe which
effect sizes the data could rule out, reporting bounds from ±0.20 to ±0.50 (Appendix B).
Equivalence tests, within-condition correlations, and the comparison of dependent
correlations (Williams's test; Steiger, 1980) were computed in R with functions written for
this study, which are available on OSF. We did not correct for multiplicity across outcomes
or across these checks.

# 4.2.1. Participant Exclusion Criteria


From the initial 315 participants, those who did not progress through the complete survey
were excluded from the analysis ( n = 22). If a participant skipped individual questions or
scale items, their responses were included in the analysis with the missing values imputed
as described in the analysis section.


To gauge whether the participant read and understood the stimuli content, the study
included three comprehension check questions based on the blog post and author
descriptions of the stimuli (e.g., "What was the author?" with response options "a
generative AI agent" or "a human expert"). Twenty-one participants incorrectly answered
these questions and were asked to reread the stimuli before answering the questions a
second time. We excluded data from participants who incorrectly answered any of these
questions after the second attempt ( n = 5). Participants who correctly answered the


questions after the second attempt were included in the final analysis. An exploratory
analysis that excluded these participants confirmed that their inclusion did not alter the
pattern of findings reported below (see Table 3).


To ensure that participants read the questions and prompts attentively throughout the
study, we included attention check items within the scales. These questions consisted of a
prompt to select a particular answer (e.g., set the slider to the far right). Data from
participants with incorrect values for any of these questions were excluded from the
analysis ( n = 16).


We used the Bot Detection feature provided within the Qualtrics platform to screen for
potential bot activity (Qualtrics, 2025); no participants were excluded.


Additionally, participants were excluded if their completion time for the study was less
than one third of the median duration ( t median = 544 seconds) across participants who
completed the survey ( n = 2). Out of the original 315 participants, 270 were retained in the
analysis. Exclusions were similar across conditions (low: 18, high: 13, human: 14; see
Appendix B).

# 4.2.2. Manipulation of Anthropomorphism


There was a significant main effect of the anthropomorphic cue manipulation on
anthropomorphism as measured by the Godspeed instrument ( F (2, 267) = 85.55, MSE =
0.54, p < .001, ω = .39). Upon further analysis with pairwise Bonferroni-corrected Welch's
t -tests, there was a significant difference between the anthropomorphism scores in the
low ( n = 87, M = -0.40, SD = 0.80) and human ( n = 91, M = 0.82, SD = 0.54) conditions
( t (149.09) = 11.87, p < .001, d = 1.79, 95% confidence interval (CI) [1.45, 2.14]) and the high
( n = 92, M = -0.43, SD = 0.83) and human conditions ( t (155.65) = 12.14, p < .001, d = 1.79,
95% CI [1.45, 2.13]); however, the effect of the anthropomorphic cue manipulation did not
reach significance for anthropomorphism when comparing the high and low conditions
( t (176.93) = -0.29, p = 1.000, d = -0.04, 95% CI [-0.34, 0.25]). See Figure 3 for a plot of the
means and distributions of anthropomorphism scores by condition.


1 According to the Qualtrics documentation, any score greater than or equal to 0.5
indicates that the respondent is likely a human. No participants had a reCAPTCHA score
less than 0.5.


Figure 3. Distribution of anthropomorphism (i.e., mean of the standardized values of the
anthropomorphism subscale of the Godspeed instrument) by author condition (low, high,
human) in Experiment 1. The human condition represented a human baseline, while low
and high were both GenAI agents. For this and subsequent plots, violins show kerneldensity estimates; embedded box plots mark the median (line) and interquartile range
(box); whiskers extend to 1.5 ×IQR; outliers are plotted individually. Brackets mark Welch's
t-tests between conditions (Bonferroni-corrected in Experiment 1). Asterisks denote
statistical significance: p < .0001 (); p ≥.05 (ns).


The same pattern appeared for likeability, F (2, 267) = 15.67, p < .001, ω = .10, and
perceived intelligence, F (2, 267) = 14.76, p < .001, ω = .09. The human author was rated
higher than both GenAI authors on each ( d s from 0.65 to 0.82, all p s < .001), and the two
GenAI authors did not differ (| d |s ≤0.11, p s > .99). The human author therefore differed from
the GenAI authors on every perception we measured.

# 4.2.3. Effects of Anthropomorphic Cues on Author and Content Trust


We calculated a composite content trust score using the mean value of the standardized
values of the three items on the Appelman message credibility scale and the novel
measure of content trust. An analysis of variance (ANOVA) did not show a significant main
effect of the anthropomorphic cue manipulation on content trust ( F (2, 267) = 1.73, MSE =
0.63, p = .180, ω < .01) as shown in the left panel of Figure 4. Content trust was slightly
higher in the human condition than in the low condition, d = 0.25, 95% CI [-0.05, 0.54], but


this difference was not significant (Bonferroni-corrected p = .302), and the high and low
conditions did not differ, d = 0.01, 95% CI [-0.28, 0.30].


Figure 4. Left Panel: Distribution of content trust (i.e., mean value of the standardized
values of the three items on the Appelman message credibility scale and the novel
measure of content trust) by author condition (low, high, human) in Experiment 1. Right
panel: Distribution of author trust (i.e., mean value of the standardized values for items in
the METI and the novel measure of author trust) by author condition (low, high, human) in
Experiment 1. Asterisks denote statistical significance: p < .0001 (); p ≥.05 (ns).


For author trust, we calculated a composite score using the mean value of the
standardized values for items in the METI and the novel measure of author trust. An ANOVA
revealed a significant main effect of the anthropomorphic cue manipulation on author
trust ( F (2, 267) = 18.60, MSE = 0.62, p < .001, ω = .12). Pairwise Bonferroni-corrected
Welch's t -tests showed a significant difference in author trust score means between the
low ( n = 87, M = -0.18, SD = 0.79) and human ( n = 91, M = 0.41, SD = 0.70) conditions
( t (171.64) = 5.27, p < .001, d = 0.79, 95% CI [0.49, 1.10]) and the high ( n = 92, M = -0.23, SD
= 0.86) and human conditions ( t (174.87) = 5.52, p < .001, d = 0.82, 95% CI [0.51, 1.12]);
however, the effect of the anthropomorphic cue manipulation on author trust between the
high and low conditions was not statistically significant ( t (176.85) = -0.40, p = 1.000, d =
-0.06, 95% CI [-0.35, 0.23]). See the right panel of Figure 4 for a plot of the author trust
score distributions by author condition.


Because a significant effect on one form of trust and a nonsignificant effect on the other
would not show that the two effects differ (Gelman & Stern, 2006), we tested directly
whether the manipulation affected author trust differently than content trust. We fit a
linear mixed-effects model predicting trust ratings from author condition, trust type
(author or content), and their interaction with random intercepts for participants. This
analysis revealed a significant interaction between condition and trust type, indicating the
difference between author trust and content trust varied between author conditions.
Specifically, the difference in author and content trust was significantly greater in the


human condition compared to the low condition ( t (267) = 5.29, p < .001). A significant
difference was not observed between the high and low conditions ( t (267) = -0.77, p = .444).


In standardized-item units, the human condition raised author trust by 0.59 relative to the
low condition and content trust by 0.19 (Table 3). Because the two composites contain
different numbers and kinds of items, we repeated this comparison after standardizing
each composite ( SD = 1); the difference remained, B = 0.46, 95% CI [0.27, 0.65], p < .001
(Appendix B). Taken together, these results show that replacing the GenAI author with a
human expert influenced trust judgments about the author more than trust judgments
about the content itself.


The same pattern held with the validated scales alone. Condition affected METI scores, F (2,
267) = 19.61, p < .001, ω = .12 (human vs. low: d = 0.80, 95% CI [0.50, 1.11]), but not
message credibility, F (2, 267) = 1.61, p = .20 ( d = 0.26, 95% CI [-0.04, 0.55]), and the
interaction remained significant, t (267) = 4.32, p < .001. The author trust effect appeared in
all three METI subscales (human vs. low, in standardized-item units: expertise B = 0.65,
integrity B = 0.55, benevolence B = 0.64, all p s < .001; Appendix B). Perceived writing
quality did not differ by condition, F (2, 267) = 1.20, p = .30.


The absence of a significant content trust effect does not mean that the effect was zero.
The high and low conditions produced statistically equivalent content trust at a bound of
±0.30 SD ( d = 0.01, 90% CI [-0.24, 0.26], TOST p = .027), but not at ±0.20 (Appendix B);
because these two conditions also did not differ in anthropomorphism ratings, this does
not show that a successful anthropomorphism manipulation would leave content trust
unchanged. For the human condition, the 90% CI for the content trust difference ([0.00,
0.50]) included effects larger than ±0.30, so a small positive effect cannot be ruled out.

# 4.2.4. Robustness


Table 3 compares the human and low conditions under each alternative specification. The
author trust effect and the difference between the author and content trust effects were
significant in every specification. The content trust effect was not significant in four of the
five specifications but was significant after covariate adjustment ( B = 0.30, p = .008). Most
of this change came from adjusting for how often participants consumed media similar to
the blog post, which was imbalanced across conditions (Section 4.1.1); adjusting for that
variable alone gave B = 0.29, p = .012, whereas adjusting for all other covariates without it
gave B = 0.21, p = .064. The human author may therefore have had a small positive effect
on content trust as well, but the effect on author trust was more than twice as large, and
the difference between the two remained significant ( B = 0.36, p < .001). Across all
specifications, the low and high conditions never differed on author trust, content trust, or
their difference (all p s > .27).


Table 3. Experiment 1, human vs. low condition under alternative specifications. Values are
B [95% CI] in standardized-item units with HC3 robust standard errors. Covariates were
age, sex, post-secondary education, and grouped frequency of GenAI use and of
consuming media similar to the blog post.


# Specification N Author trust Content trust


Primary 270 0.59 [0.37, 0.81]

p < .001

Validated scales only 270 0.62 [0.39, 0.84]

p < .001

Complete cases only 268 0.59 [0.36, 0.81]

p < .001


0.19 [-0.04, 0.43]

p = .102


0.22 [-0.01, 0.45]

p = .065


0.22 [-0.04, 0.48]

p = .092


Excluding participants
who reread


259 0.56 [0.33, 0.78]

p < .001


0.17 [-0.07, 0.41]

p = .155


Covariate-adjusted 270 0.66 [0.43, 0.89]

p < .001


0.30 [0.08, 0.52] p

= .008


# Author minus

# content

0.40 [0.24, 0.55]

p < .001

0.39 [0.21, 0.57]

p < .001

0.37 [0.22, 0.52]

p < .001

0.38 [0.22, 0.54]

p < .001

0.36 [0.20, 0.51]

p < .001


# 4.2.5. Correlations

Because the manipulation of anthropomorphic cues did not effectively dissociate the low
from high conditions (see Section 4.2.2), we followed up our main analysis with a
correlational examination of the relationships among anthropomorphism, author trust,
and content trust. All correlations are Pearson's r .


Anthropomorphism was positively correlated with both content trust ( r (268) = .49, p < .001,
95% CI [.39, .57]) and author trust ( r (268) = .70, p < .001, 95% CI [.64, .76]). Author trust and
content trust were also strongly, positively correlated ( r (268) = .78, p < .001, 95% CI

[.73, .83]).


Because these pooled correlations include the differences between conditions produced
by the manipulation, we also computed them within conditions (centering each variable on
its condition mean, with degrees of freedom adjusted for the condition means removed).
The pattern was similar: anthropomorphism was positively correlated with author trust
( r (266) = .66, p < .001, 95% CI [.59, .72]) and with content trust ( r (266) = .54, p < .001, 95%
CI [.45, .62]), and author trust and content trust were strongly, positively correlated ( r (266)
= .80, p < .001, 95% CI [.75, .84]). Anthropomorphism was more strongly correlated with
author trust than with content trust (Williams's t (265) = 4.29, p < .001). These correlations
show that people who saw the author as more human-like also tended to trust both the
author and the content more. They do not show which judgment influenced which (see
Section 6.1.1).


# 5. Experiment 2

To extend the findings of Experiment 1, we ran a follow-up experiment with modifications
to the procedure to improve the efficacy of the anthropomorphic cue manipulation. Our
manipulation of anthropomorphic cues in Experiment 1 did not have the intended effect on
the perception of anthropomorphism. We intended that through the manipulation of the
descriptions and images of the GenAI agents, participants would have perceptions of
anthropomorphism that aligned with their assigned condition (i.e., the mean
anthropomorphism score would be lower for the low condition than the high condition).
While there was a significant effect of the anthropomorphic cue manipulation on
anthropomorphism, it was only evident between the human condition and each of the
GenAI agent conditions. We did not find a significant difference in the ratings between the
two GenAI agent conditions (see Section 4.2.2). We suspected that reading a description of
an agent was not enough to override past experience with similar agents or deep-seated
beliefs about non-human agent capabilities. Changing impressions, especially implicit
impressions, can be challenging and require significant and believable counter-evidence
for individuals to update their existing impressions of an agent (Ferguson et al., 2019; Mann
& Ferguson, 2015). As such, we refined the design in Experiment 2 to see whether a more
interactive experience with the author would yield the intended anthropomorphic effects.
The manipulation was more effective with this paradigm as shown in Section 5.2.2.


This experiment used an interactive GenAI chatbot to represent the author agent to provide
participants with a more externally valid experience. The chatbot was instructed to
respond with varying levels of anthropomorphic cues during conversation to manipulate
the author condition, rather than having participants read descriptive vignettes with
avatars. Additionally, we simplified the anthropomorphic cue manipulation to include only
two levels, eliminating the human condition, so that the author was always a GenAI agent.

# 5.1. Methods


This experiment was approved by a Research Ethics Board of the University of Waterloo
(REB #47304) and was preregistered at https://aspredicted.org/n9sg-nwjx.pdf (AsPredicted

# 215144). The preregistration specified the hypothesis that increasing anthropomorphism
would increase trust in the GenAI author and in its content, the composite measures of
author and content trust, the two conditions, a test of the main effect of condition on each
trust measure, the exclusion rules, and the sample size. Section 5.2.1 describes where our
analyses departed from it.

# 5.1.1. Participants


A sample of 202 participants was recruited through SONA at the University of Waterloo in
accordance with a power analysis carried out using the pwr package (version 1.3-0;
Champely, 2020) in R (version 4.6.1; R Core Team, 2026). Similar to Experiment 1, we
targeted a sample large enough to detect a small to moderate effect. The power analysis
indicated we would need between n = 64 (Cohen's f = 0.25) and n = 394 (Cohen's f = 0.10)


participants in each of the two condition levels. The final recruitment sample size was
chosen to balance our desired detection ability and the availability of participants within
the sample pool; as preregistered, we planned to recruit 200 participants or to stop on
March 21, 2025, whichever came first. Remuneration was 0.5 credits for completing the
30-minute online survey. After data exclusion for quality control, the final sample was 148
participants (ages 18 to 59, M age = 20.39, SD age = 4.40; 115 females). With 75 and 73
participants in the low and high conditions, the design had 80% power to detect a
difference of d = 0.47 between conditions. Most participants used GenAI chatbots at least
weekly (74%), and conditions did not differ on any measured characteristic (all p s > .09;
Table 1). Because nearly all participants were undergraduate students in a narrow age
range, this sample differs from the Experiment 1 sample in age, education, and GenAI
experience.

# 5.1.2. Materials


An interactive chatbot was included instead of the descriptive author vignette and image.
Participants saw a text box where they could enter their message and a larger box where
the conversation history was displayed, including the chatbot's responses to their
messages (see Figure 5).


Figure 5. Interactive chatbot interface embedded within a Qualtrics survey. All participants
saw the same interface and were required to complete three conversation turns before
proceeding. The chatbot's GenAI functionality was created using Claude Haiku 3.5
model (Anthropic, 2024). Differences in the low and high author conditions were controlled
through system messages to the API.


To generate responses, the chatbot used the Anthropic API to access the Claude Haiku 3.5
model (claude-3-5-haiku-20241022, temperature 0.5; Anthropic, 2024). There were two
versions of the chatbot, one for each of the two anthropomorphic cue manipulation levels.
Both versions received the same core system prompt, which described the chatbot as an
AI science communicator, included the full text of the blog post, stated that the chatbot
had written it, and instructed it to claim authorship if asked. Both versions were limited to
responses of two sentences. Anthropomorphic cue level was manipulated by changing the


system prompt to instruct the chatbot to respond in either a more human-like or a more
machine-like manner. Drawing on findings from prior work (Sections 2.3 and 2.4), we
instructed the chatbot to express different levels of empathy and emotional understanding.
These expressions were intended to elicit the perception that the chatbot has a mind,
making it seem more human-like. The low author condition chatbot was named "AI
science communication" and was instructed to respond in a more machine-like manner:
to use non-anthropomorphic language, to avoid filler language, and not to express
empathy. The high author condition chatbot was named "Simone the Science Synthesizer"
and was instructed to respond in a more human-like manner, i.e., to pretend it had
emotions and understood the emotions of others, to respond empathetically, and such.
See Appendix A for the system prompts used to define the chatbots. We describe what the
conversations contained in Section 5.2.5.


The dependent measures were identical to Experiment 1, except one duplicated scale item
from the combination of the Godspeed and METI scales was removed in Experiment 2. Two
additional author trust items were added to the novel trust measure: "I would pay for
content written by this author if the topic was of interest to me." and "I trust the author to
provide quality information." The language demographics question was removed because
it was of limited use in Experiment 1.


Internal consistency was acceptable to high across the item sets used to assess
anthropomorphism, author trust, and content trust (see Table 4).


Table 4. Internal consistency of anthropomorphism and trust-related item sets for
Experiment 2. Cronbach's α values were calculated on raw item responses prior to
standardization.


# Construct Item Set Cronbach's α

Anthropomorphism Godspeed .88

Author Trust METI .88

Author Trust Novel .79

Content Trust Appelman & Sundar .72

Content Trust Novel .78


2 We intended the name "Science Communication AI" in order to parallel Experiment 1; the
name participants saw resulted from an error in the study code. Both names are
impersonal labels rather than a personal name like the high condition's, so the error is
unlikely to have weakened the manipulation, and if anything, a name that refers to a
service would have made this condition more machine-like. The full system prompts are
in Appendix A.


# 5.1.3. Procedure

Participants were randomly assigned to one of two conditions: low ( n = 75) or high ( n = 73)
anthropomorphic cues. After participants read the blog post, they were given the
opportunity to chat with the GenAI bot, which was programmed to respond according to
the participant's assigned condition; they were told they were going to chat with the GenAI
author of the blog post and were instructed to have a conversation on the topic of their
choice with the bot. They were required to complete a minimum of three conversational
turns before proceeding with the remainder of the experiment. The participants then
completed the same questionnaires as in Experiment 1, with the modifications noted in
the Materials section.

# 5.2. Analysis and Results


All score calculation and analysis followed the same procedures as Experiment 1, except
that the main analysis was performed with Welch's t -tests instead of ANOVA since there
were only two levels of the anthropomorphic cue manipulation. Because each outcome
involved a single comparison, no within-outcome correction was applied. The composite
standard deviations were 0.58 for author trust and 0.63 for content trust.


To describe the conversations, we used automated keyword counts. For each chatbot
response, we counted words, exclamation marks, emotion words (e.g., excited, glad, sorry,
feel, wonderful ), and first- and second-person pronouns, and compared conditions with
response-level regressions using standard errors clustered by participant. For each
conversation, we flagged whether the participant or the chatbot referred to the blog post,
Velocerin, or the underlying study; whether the participant asked about the chatbot's
identity or authorship; and whether the chatbot used its fallback reply for missing
information, comparing conditions with Fisher's exact tests. These keyword rules were not
validated against human coding.

# 5.2.1. Participant Exclusion Criteria


We followed the same exclusion methods as defined in Experiment 1: failure to complete
the survey ( n = 12), survey duration less than one-third of the median time to complete ( n =
1), failure to pass a content comprehension check ( n = 11), and survey attention checks ( n
= 29). No participants were excluded as a result of the bot detection check. An additional
participant was removed because they indicated they had not read the blog post before
proceeding ( n = 1). This exclusion was decided after reviewing the open-ended responses;
retaining this participant did not change the results (Table 5). Before these exclusions, we
removed two people who did not consent. In addition, five participants took the survey
more than once (six additional records). For each, we kept their first complete attempt, or
their first attempt if none was complete; four of them had abandoned an earlier attempt
before answering any study questions. Exclusions were balanced across conditions (27
per condition; Appendix B). Eighty-three item responses were missing across 15


participants and were imputed as in Experiment 1; analyses of the 133 participants with
complete data gave the same pattern (Table 5).


These exclusions departed from the preregistration, which specified incomplete surveys,
failed attention checks, reCAPTCHA scores below 0, and random characters in openended responses. We also applied the completion time and comprehension check
exclusions from Experiment 1, used the reCAPTCHA threshold of 0.5 recommended by
Qualtrics (which excluded no one), and excluded the participant described above. The
preregistration did not address repeat participation, which we handled as described above.
Applying only the preregistered rules, with the same handling of repeat participation,
leaves 154 participants (78 low, 76 high) and gives the same pattern: author trust d = 0.38,
95% CI [0.06, 0.70], p = .019; content trust d = 0.14, 95% CI [-0.18, 0.45], p = .40 (Appendix
B). We analyzed the main effects with Welch's t -tests rather than the preregistered ANOVA.
With two groups, the ANOVA is equivalent to Student's t -test, and because the groups
were nearly equal in size, Student's and Welch's tests gave practically identical results
(largest difference in p : < .001). The test of whether condition affected author trust more
than content trust, the robustness models, the equivalence tests, the within-condition
correlations and comparison of dependent correlations, and the conversation analyses
were not preregistered and should be considered exploratory. The preregistered
correlations between the main measures and sample characteristics are reported
in Appendix B.

# 5.2.2. Manipulation of Anthropomorphism


A t -test comparing the anthropomorphism score means across the high ( n = 73, M = 0.26,
SD = 0.72) and low ( n = 75, M = -0.25, SD = 0.92) conditions showed a moderately sized
significant effect of the manipulation on anthropomorphism ( t (139.72) = 3.73, p < .001, d =
0.61, 95% CI [0.28, 0.94]). Results are illustrated in Figure 6. The high condition chatbot
was also rated as more likeable, t (139.88) = 5.10, p < .001, d = 0.84, 95% CI [0.50, 1.17]; no
reliable difference in perceived intelligence was detected, t (144.83) = 1.91, p = .058, d =
0.31, 95% CI [-0.01, 0.64].


Figure 6. Distribution of anthropomorphism (i.e., mean of the standardized values of the
anthropomorphism subscale of the Godspeed instrument) by author condition (low
vs. high) in Experiment 2. In this experiment both low and high conditions were GenAI
agents. Asterisks denote statistical significance: p < .001 (*).

# 5.2.3. Effects of Anthropomorphic Cues on Author and Content Trust


As shown in the left panel of Figure 7, there was no significant effect of the
anthropomorphic cue manipulation on content trust ( t (146.00) = 1.19, p = .234, d = 0.20, 95%
CI [-0.13, 0.52]).


Figure 7. Left panel: Distribution of content trust (i.e., mean value of the standardized
values of the three items on the Appelman message credibility scale and the novel
measure of content trust) by author condition (low vs. high) in Experiment 2. Right panel:
Distribution of author trust (i.e., mean of the standardized values for items in the METI and
the novel measure of author trust) by author condition (low vs. high) in Experiment 2.
Asterisks denote statistical significance: p < .01 (); p ≥.05 (ns).


In contrast, there was a significant effect of the anthropomorphic cue manipulation, with
higher trust for the agent programmed to show high ( n = 73, M = 0.12, SD = 0.53) vs. low ( n =
75, M = -0.12, SD = 0.60) anthropomorphic cues ( t (144.90) = 2.61, p = .010, d = 0.43, 95%
CI [0.10, 0.75]) as shown in Figure 7.


Similar to Experiment 1, we fit a linear mixed-effects model to test for differing effects of
the anthropomorphic cue manipulation on author and content trust. This analysis did not
reveal a significant interaction between condition and trust type. Specifically, the
difference between author and content trust in the high author condition did not differ
significantly from that observed in the low author condition ( t (146) = 1.30, p = .196). This
difference corresponds to about 0.2 standard deviations of the author-minus-content
difference, and the design had only about 25% power to detect a difference of that size; the
nonsignificant interaction therefore does not show that the manipulation affected author
and content trust to a similar extent.


With the validated scales alone, the high condition chatbot again received higher METI
scores, d = 0.45, 95% CI [0.12, 0.77], p = .007, with no reliable difference in message
credibility, d = 0.06, 95% CI [-0.26, 0.38], p = .72; the difference between these effects was
not significant, t (146) = 1.76, p = .080. In exploratory analyses of the METI subscales, the
author trust effects were d = 0.40, 95% CI [0.07, 0.72], for expertise, d = 0.44 [0.11, 0.76] for
integrity, and d = 0.30 [-0.02, 0.63] for benevolence (Appendix B); we did not test whether
the subscale effects differ. Perceived writing quality did not differ, d = 0.25, p = .13.


The absence of a significant content trust effect again does not mean the effect was zero.
Its 95% confidence interval extended to about d = 0.5, and equivalence tests established
that the content trust effect was negligible only at the widest bound we examined (±0.50;
message credibility at ±0.40 or wider; Appendix B).

# 5.2.4. Robustness


The author trust effect was significant in all five specifications, with similar estimates
across them ( B from 0.23 to 0.28; Table 5). The content trust effect was small and not
significant in every specification, and the difference between the two effects was not
significant in any of the specifications in Table 5. When each composite was standardized
before comparison, the difference remained nonsignificant for the combined composites
( B = 0.22, p = .14) but was significant for the validated scales ( B = 0.38, 95% CI [0.02, 0.73],
p = .036; Appendix B). This is exploratory evidence in the expected direction, but it
appeared in one of several specifications and not in the others.


Table 5. Experiment 2, high vs. low condition under alternative specifications. Values are B

[95% CI] in standardized-item units with HC3 robust standard errors. Covariates were the
same as in Experiment 1.


# Specification N Author trust Content trust


# Author minus

# content


Primary 148 0.24 [0.06, 0.43] 0.12 [-0.08, 0.33] 0.12 [-0.06, 0.30]


Specification N Author trust Content trust


Author trust Content trust content

p = .010 p = .238 p = .199


Author minus


Validated scales only 148 0.28 [0.07, 0.48]

p = .008


0.05 [-0.22, 0.31]

p = .724


0.23 [-0.03, 0.49]

p = .082


Complete cases only 133 0.28 [0.09, 0.47]

p = .005


0.17 [-0.05, 0.40]

p = .136


0.11 [-0.09, 0.31]

p = .282


Retaining the open-ended
exclusion


149 0.24 [0.06, 0.43]

p = .011


0.12 [-0.08, 0.33]

p = .238


0.12 [-0.06, 0.30]

p = .203


Covariate-adjusted 148 0.23 [0.02, 0.43]

p = .034


0.06 [-0.16, 0.28]

p = .609


0.17 [-0.03, 0.37]

p = .097


# 5.2.5. Conversations

Participants sent 531 messages in total, with a median of three per participant in both
conditions (low: M = 3.79, high: M = 3.38, p = .39). Nineteen messages from 10 participants
received no recorded reply. Across 512 chatbot responses, high condition responses
contained more exclamation marks (0.56 vs. 0.00 per response), more emotion words
(0.70 vs. 0.01 per response), and more first-person (2.8 vs. 1.4 per 100 words) and secondperson (0.82 vs. 0.02 per 100 words) pronouns (all p s < .001). They were also longer, 50.1
compared with 38.2 words on average, B = 12.0, t (147) = 7.54, p < .001.


Most conversations engaged with the post. Participants asked about the post, Velocerin,
or the underlying study in 98 of 148 conversations (66%), and the chatbot mentioned
Velocerin in 114 (77%), with no difference between conditions ( p s > .55). Participants
asked about the chatbot's identity or whether it had written the post in 9 conversations
(6%), and the chatbot used its fallback reply in 25 (17%), again with no difference between
conditions.

# 5.2.6. Correlations


Similar to Experiment 1, we followed up our main analysis by looking at the correlation
between anthropomorphism and our other variables of interest. We calculated Pearson
correlation coefficients for all correlational analyses.


Anthropomorphism was positively correlated with both content trust ( r (146) = .42, p < .001,
95% CI [.28, .55]) and author trust ( r (146) = .44, p < .001, 95% CI [.30, .56]). Author trust
was positively correlated with content trust ( r (146) = .58, p < .001, 95% CI [.46, .68]). Within
conditions (centering each variable on its condition mean, as in Experiment 1), the
correlations were nearly identical: anthropomorphism was positively correlated with
content trust ( r (145) = .41, p < .001, 95% CI [.27, .54]) and with author trust ( r (145) = .41, p
< .001, 95% CI [.26, .53]), and author trust was positively correlated with content trust
( r (145) = .57, p < .001, 95% CI [.45, .67]). Unlike in Experiment 1, anthropomorphism was


no more strongly correlated with author trust than with content trust (Williams's t (144) =
-0.08, p = .94).


Overall, these results were consistent in direction with Experiment 1: the more human-like
chatbot received higher author trust, and no reliable content trust effect was detected.
However, the difference between the two effects was not significant, so Experiment 2 is
inconclusive on its own about whether anthropomorphic cues within GenAI affect author
and content trust differently.

# 6. General Discussion, Limitations, and Future Directions

# 6.1. Relationships Between Anthropomorphism, Author Trust, and Content Trust


In general, and aligning with past research, we found a positive correlational relationship
between anthropomorphism and trust for the author and the content it produces. In
Experiment 1, replacing a GenAI author with a human expert, a comparison between kinds
of author rather than of anthropomorphism alone, shifted evaluations of the author more
than evaluations of the post attributed to it. Experiment 2 was consistent in direction but
inconclusive about whether behavioral cues affected the two forms of trust differently.
Contrary to H 2, then, we found no reliable evidence that anthropomorphic cues increase
content trust.

# 6.1.1. Why Might Author and Content Trust Diverge?


Past research has highlighted that confidence in information partially depends on
judgments of source trustworthiness (e.g., Li et al., 2023). Our data are consistent with this
in one sense: author and content trust were strongly correlated in both experiments.
Because the two were measured at the same time, these correlations cannot show that
author trust transmits the effect of author cues to content trust. Moreover, in Experiment 1,
author type (GenAI vs. human) affected author trust much more than content trust. Several
accounts could explain this divergence. Our design cannot distinguish them, but each
makes a prediction that future studies could test.


First, the message carried its own epistemic cues. Theories of epistemic vigilance hold
that people weigh what is said as well as who says it, and that social cues about the source
matter most when epistemic cues are scarce (Li et al., 2023; Sperber et al., 2010). Our post
named a mechanism, a trial size, a placebo comparison, and specific outcomes, and every
participant read the same content, so the cues that varied by condition were mostly
informative about the author rather than about the claims. This account predicts larger
transfer from author to content when messages are short, vague, or hard to evaluate,
unlike the detailed post used here.


Second, the author relayed rather than produced the evidence. The post presented itself
as a summary of a trial conducted by other researchers, so the credibility of its claims


could rest on that trial rather than on whoever summarized it. People may be comfortable
with AI summarizing information they would not trust AI to produce. This account predicts
that author cues would matter more for content trust if the GenAI were presented as the
source of the evidence rather than as a summarizer of it.


Third, the largest effect in our data, the difference in author trust between the human
expert and the GenAI authors, may reflect credit for the human author, a penalty for the
GenAI authors, or both; without a condition with no attributed author, we cannot tell which.
The corresponding content trust effect ( d = 0.25) is in the same direction as the content
penalties reported for AI-labeled news and headlines and is similarly modest (Longoni et
al., 2022; Waddell, 2018). Human favoritism (Zhang & Gosline, 2023) and a machine
heuristic that treats machine sources as objective (Sundar, 2008) are both compatible with
this pattern.


Finally, some of the divergence may reflect measurement. Anthropomorphism and author
trust were rated on the same page in the same slider format, whereas content trust was
rated on separate pages with different response formats. This would inflate correlations
among the author measures, although it less clearly explains the condition effects,
because the dissociation held with the validated scales alone.


The pattern of correlations also differed between experiments: in Experiment 1,
anthropomorphism was more strongly related to author trust than to content trust,
whereas in Experiment 2 it was related to both to a similar degree, although the
experiments also differed in population and cues. One possibility is that the differences in
experimental methods, passively reading a description of the author (Experiment 1) versus
interacting with a chatbot (Experiment 2), engaged differing cognitive mechanisms
underlying trustworthiness judgments for agents we directly interact with (vs. simply learn
about).


In Experiment 2, participants interacted directly with a GenAI agent they were told was the
author, likely increasing the salience of the authoring agent. Social presence theory
proposes that interpersonal cues play a stronger role in judgments when a source feels
more present (Cui et al., 2013; Short, 1976). Consistent with social presence theory (Short,
1976) and attribution theory, the increased salience of author characteristics could have
led participants to rely more directly on interpersonal trust cues when judging the
content (Fiske et al., 1982; Nass & Moon, 2000). In contrast, in Experiment 1, where the
author was less salient, attribution may have relied more on heuristic-based trust
judgments, such as algorithm aversion or human favoritism, which are known to shape
trust and credibility judgments (Dietvorst et al., 2015; Morewedge, 2022). Therefore, the
salience of the author could account for the different relationship between content trust
and anthropomorphism between experiments.


Beyond social presence, differences in cognitive engagement may also have contributed to
these divergent effects in the correlational relationships across experiments. Experiment 1
involved passive reading, potentially leading to shallow processing of the content, while
the interaction with the chatbot in Experiment 2 may have prompted deeper engagement.


In the Elaboration Likelihood Model, Petty & Cacioppo (1986) postulate that when one is
more motivated and able to consider communications deeply, they are likely to consider
the content of the message rather than relying on peripheral cues, and conversely that
shallow processing results in dependency on these external cues. Thus, the deeper
processing may have triggered different cognitive mechanisms to be used in the trust
judgments.


Another possible explanation lies not in the manipulation itself but in participants' beliefs
about the plausibility of the GenAI author. Some participants noted that they did not
believe that the GenAI agent could have authored the blog post. Other participants may
have held similar beliefs without sharing this information with us. This is especially
probable in Experiment 1, where participants read a description of an agent that may not
have matched with their prior experience or beliefs. The potential expectancy violation and
disbelief that participants may have experienced could also have suppressed potential
effects of anthropomorphism on content trust. And when participants had the chance to
interact with the GenAI chatbot, particularly the one in the high condition, they could see
evidence that the writing ability was aligned to that necessary to write the blog post. In
Experiment 2, only one participant spontaneously reported doubting that the AI had written
the post, although we did not ask about this directly. This difference in believability could
explain the difference in correlations between anthropomorphism and content trust across
experiments.

# 6.2. Static and Behavioral Human-Likeness


A strength of this research is that it tested the same question with two designs: a written
description of the author (Experiment 1) and a live conversation with it (Experiment 2). In
both, the author's presentation affected author trust more than content trust, reliably so
only in Experiment 1, and the two forms of trust were strongly correlated, so these patterns
do not depend on a single paradigm. The two operationalizations produced different
results. A human-like description of a GenAI author produced no detectable difference in
perceived humanness, likeability, or trust, whereas human-like behavior during a
conversation made the chatbot seem more human and likeable. Because the experiments
also differed in population and cues, this contrast does not show that behavioral cues are
more effective than descriptive ones.


The behavioral manipulation also changed some perceptions more clearly than others. The
empathetic chatbot was rated as clearly more likeable, whereas the difference in
Godspeed perceived intelligence was smaller and not significant; yet the METI expertise
subscale, which asks about the author's competence as a source of information, showed
a modest effect, as did integrity (Section 5.2.3). These results therefore do not show that
the manipulation affected warmth rather than competence. Because attributions of
intelligence, rather than of emotion or experience, predict advice taking from large
language models (Colombatto et al., 2025), manipulations that vary warmth and perceived
competence separately would help clarify which, if either, carries over to message
credibility.


We also saw little sign of algorithm aversion toward the GenAI authors' content: ratings of
the post differed only modestly between human and GenAI authors. Algorithm aversion is
strongest for tasks people see as subjective (Castelo et al., 2019) and after an algorithm
makes a visible error (Dietvorst et al., 2015). Summarizing a research study may be seen as
an objective task, and in Experiment 1 participants had no opportunity to observe an error.
Similar credibility ratings for human and GenAI authors also do not by themselves indicate
automation bias or inappropriate reliance (Goddard et al., 2012; Parasuraman & Manzey,
2010); that question requires measures of reliance on information whose accuracy is
known.

# 6.3. Practical Implications


The clearest result for designers is that replacing a GenAI author with a human expert
shifted evaluations of the source more than evaluations of the message it delivered.
Whether the same holds for changes in how a GenAI system itself is presented needs
confirmation, because our evidence within GenAI was weak. If it does, favorable
impressions of a system may still shape whether people keep using it or rely on it across
many interactions, so human-like style should not be treated as a proxy for reliability.
Interfaces that support calibrated trust, such as provenance information, citations, and
expressions of uncertainty, address message credibility more directly than social cues do.
For researchers, the results argue for measuring trust in a system and trust in its content
separately: a study that measured only one of them would reach a different conclusion
about the effect of author presentation than a study that measured only the other.

# 6.4. Limitations and Future Directions


While these findings help clarify the role of anthropomorphism in shaping epistemic trust,
some methodological and contextual limitations warrant consideration. First, Experiment
1 did not isolate anthropomorphism. The human condition differed from the GenAI
conditions in the type of author and in implied expertise as well as in anthropomorphic
cues, and the two GenAI conditions did not differ in anthropomorphism ratings. Because a
GenAI author cannot plausibly hold professional credentials, separating humanness from
expertise would require holding expertise constant in another way, for example by
describing every author with the same role and experience and no title, and including a
condition with no attributed author.


Although the interactive chatbot was a more externally valid method of interacting with
GenAI in general, it was less realistic for general consumption of science content from the
Internet. We think this was an appropriate trade-off to make in order to test the hypothesis
that the direct interaction with the agent would more effectively trigger anthropomorphism.
The manipulation, however, changed more than humanness: the high condition chatbot
was more likeable, gave longer responses, and had a different name, and participants
received different additional information during their conversations. We did not assess
whether the chatbots added unsupported details or made factual errors. Future studies


may want to delve into exploring the emergence of anthropomorphism and the
mechanisms of mind perception in non-embodied agents.


As demonstrated by the different results of Experiment 1 and Experiment 2 in relation to
the anthropomorphic cue manipulation achieving the expected change in
anthropomorphism ratings, not every anthropomorphic cue manipulation will be effective
for GenAI agents. Further exploration of what cues people are susceptible to when forming
anthropomorphic impressions of agents is critical to inform our understanding of potential
risks of GenAI agent design.


The two experiments also differed in population (online adults versus undergraduate
students), and Experiment 2 was underpowered for the comparison between author and
content trust; roughly 300 participants per condition would be needed to detect a
difference of the size we observed with 80% power. Experiment 1 was not preregistered,
several analyses in both experiments were exploratory, and the equivalence bounds were
chosen after data collection.


Additionally, there are individual differences in the tendency to anthropomorphize
agents (Waytz et al., 2010). We used a between-subjects design to avoid potential
carryover effects between conditions, but in doing so also introduced variability due to
individual differences between participants. Ideally, we would have collected data from
participants to be able to test the impact of these individual differences but, balancing the
risk of survey fatigue, chose not to include an additional survey such as the Individual
Differences in Anthropomorphism Questionnaire (IDAQ; Waytz et al., 2010). We also
measured prior GenAI use but not AI literacy or technical self-efficacy, which may
moderate how people respond to human-like AI. Future research should explore using
measures such as the IDAQ or a within-subjects design with suitable precautions taken to
prevent carryover effects between conditions.


All outcomes were self-reported ratings collected in a single session. The author trust
composite combines perceived expertise, integrity, and benevolence with intentions to
rely on the author, and the content trust composite combines perceived credibility with
belief and intended action; neither is a direct measure of accepting communicated
knowledge. The novel items have not been independently validated, although our
conclusions held with the validated scales alone.


Additionally, we chose one particular type of content (i.e., science content about medical
research aimed at lay people) to focus our research on for simplicity and consistency.
Holding the message constant across conditions is what allowed us to compare author
and content trust, but using a single, optimistic message limits generalization. It is entirely
plausible that the relationship between anthropomorphism and content trust may vary
across contexts; in particular, the results may not generalize to subjective content, such as
creative writing or opinion, for which people are more averse to algorithmic
sources (Castelo et al., 2019). And as highlighted by Sperber et al. (2010), subject matter
that is less relevant to a participant reduces the need for epistemic trust. Exploration of
different types of content, which may have different relevance to participants, is necessary


before general conclusions can be drawn about the relationship between
anthropomorphism and content trust.


Furthermore, these studies included only a plausibly credible, fictional blog post as the
content stimuli. Future studies may consider using an article that provides misinformation,
disinformation, or a conspiracy theory to see whether the epistemic trustworthiness of
such content is affected similarly based on anthropomorphism of the authoring agent.


While these experiments focused on anthropomorphism, future studies could explore
other factors that may influence epistemic trust in GenAI content. Some potential factors
that could be interesting to explore are interactivity, organizational credibility,
transparency and explainability of content, content domain, social cues from peers or
experts (e.g., reviews, endorsements), and communication style (e.g., tone, style,
empathy).

# 7. Conclusion


As GenAI becomes increasingly embedded in the information ecosystem, understanding
how to foster appropriate levels of epistemic trust is essential. Across two experiments,
how human-like an author appeared to be affected how much people trusted the author
more than how much they trusted what it wrote. This was clearest when the author was a
human expert rather than a GenAI agent. Participants trusted the human author more,
while there was not a significant difference in how much they trusted the same blog post.
Among GenAI authors, describing the AI as more human-like had no detectable effect.
However, a chatbot that behaved in an empathetic, emotionally expressive way was seen
as more human-like and was trusted modestly more as an author. Experiment 2 was
underpowered to test whether this behavior affected trust in the author and trust in the
content differently.


This work underscores the need to distinguish between trust in agents and trust in
information, especially as GenAI becomes more integrated into communication and
education settings. Understanding how people come to trust-not only GenAI agents, but
also the content they produce-is critical for combating misplaced trust in potentially
unreliable content and over-reliance on GenAI.

# 8. Declaration of generative AI and AI-assisted technologies in the manuscript preparation process


During the preparation of this work, the authors used OpenAI's ChatGPT in order to
generate stimuli for the experiments. Anthropic Claude (Claude 3.5 Haiku) was used as the
model powering the chatbots in Experiment 2. ChatGPT, Microsoft Copilot, Writefull, and
thesify.ai were used to provide feedback on writing for editing purposes. ChatGPT was also
used to expedite R code generation for analysis. During revision, Anthropic's Claude was


used to write additional analysis code, as well as to draft and edit text. After using these
tools and services, the authors reviewed and verified all content, edited as needed, and
take full responsibility for the content of the published article.

# 9. Ethical Standards


The research meets all ethical guidelines, including adherence to the legal requirements of
the study country.

# 10. Acknowledgments


The data and ideas presented in this article were previously reported in the undergraduate
thesis of Caroline Simpson. A previous version of this paper is available as a PsyArXiv
preprint (Simpson et al., 2025).


Funding: This article was funded by a Natural Sciences and Engineering Research Council
of Canada grant and the University of Waterloo.

# 11. Competing Interests


The authors declare none.

# 12. Data Availability Statement


Data, analysis code, materials, and prompts used to generate stimuli are available on the
project's Open Science Framework page: https://osf.io/6u74p/.

# 13. Author Contributions


Conceptualization: C.S. Methodology: C.S.; C.C.; J.F. Data curation: C.S. Data
visualisation: C.S. Software: C.S. Writing original draft: C.S. Writing review and editing: C.S.;
C.C.; J.F. Supervision: J.F. All authors approved the final submitted draft.

# References

Altay, S., & Gilardi, F. (2024). People are skeptical of headlines labeled as AI-generated,


even if true or human-made, because they assume full AI automation. PNAS Nexus,


3 (10), pgae403. https://doi.org/10.1093/pnasnexus/pgae403


Alwateer, M., Atlam, E.-S., El-Raouf, M. M. A., Ghoneim, O. A., & Gad, I. (2024). Missing


data imputation: A comprehensive review. Journal of Computer and


Communications, 12 (11), 53-75. https://doi.org/10.4236/jcc.2024.1211004


Anthropic. (2024). Claude 3.5 Haiku [Large language model].


https://www.anthropic.com/news/3-5-models-and-computer-use


Appelman, A., & Sundar, S. S. (2016). Measuring message credibility: Construction and


validation of an exclusive scale. Journalism & Mass Communication Quarterly, 93 (1),


59-79. https://doi.org/10.1177/1077699015606057


Araujo, T. (2018). Living up to the chatbot hype: The influence of anthropomorphic design


cues and communicative agency framing on conversational agent and company


perceptions. Computers in Human Behavior, 85, 183-189.


https://doi.org/10.1016/j.chb.2018.03.051


Bartneck, C., Kulic, D., Croft, E., & Zoghbi, S. (2009). Measurement instruments for the


anthropomorphism, animacy, likeability, perceived intelligence, and perceived


safety of robots. International Journal of Social Robotics, 1 (1), 71-81.


https://doi.org/10.1007/s12369-008-0001-3


Bates, D., Machler, M., Bolker, B., & Walker, S. (2015). Fitting linear mixed-effects models


using lme4. Journal of Statistical Software, 67 (1), 1-48.


https://doi.org/10.18637/jss.v067.i01


Baumann, A.-E., Goldman, E. J., Meltzer, A., & Poulin-Dubois, D. (2023). People do not


always know best: Preschoolers' trust in social robots. Journal of Cognition and


Development, 24 (4), 535-562. https://doi.org/10.1080/15248372.2023.2178435


Broadbent, E., Kumar, V., Li, X., Sollers 3rd, J., Stafford, R. Q., MacDonald, B. A., & Wegner,


D. M. (2013). Robots with display screens: A robot with a more humanlike face


display is perceived to have more mind and a better personality. PLOS ONE, 8 (8),


e72589. https://doi.org/10.1371/journal.pone.0072589


Burke, D., Zakhary, B., & Pinelis, E. (2014). Acute hemolysis following an overdose of


miracle mineral solution in a patient with normal glucose-6-phosphate


dehydrogenase levels. Chest, 146 (4, Supplement 2), 273A.


https://doi.org/10.1378/chest.1988668


Campbell, C., Tanzer, M., Saunders, R., Booker, T., Allison, E., Li, E., O'Dowda, C., Luyten,


P., & Fonagy, P. (2021). Development and validation of a self-report measure of


epistemic trust. PLOS ONE, 16 (4), e0250264.


https://doi.org/10.1371/journal.pone.0250264


Castelo, N., Bos, M. W., & Lehmann, D. R. (2019). Task-dependent algorithm aversion.


Journal of Marketing Research, 56 (5), 809-825.


https://doi.org/10.1177/0022243719851788


Chaiken, S., & Maheswaran, D. (1994). Heuristic processing can bias systematic


processing: Effects of source credibility, argument ambiguity, and task importance


on attitude judgment. Journal of Personality and Social Psychology, 66 (3), 460-473.


https://doi.org/10.1037/0022-3514.66.3.460


Champely, S. (2020). pwr: Basic functions for power analysis (Versions 1.3-0) [Computer


software]. https://doi.org/10.32614/CRAN.package.pwr


Clement, F., Koenig, M., & Harris, P. (2004). The ontogenesis of trust. Mind & Language,


19 (4), 360-379. https://doi.org/10.1111/j.0268-1064.2004.00263.x


Cohn, M., Pushkarna, M., Olanubi, G. O., Moran, J. M., Padgett, D., Mengesha, Z., &


Heldreth, C. (2024). Believing anthropomorphism: Examining the role of


anthropomorphic cues on trust in large language models. Extended Abstracts of the


CHI Conference on Human Factors in Computing Systems, CHI EA '24, 1-15.


https://doi.org/10.1145/3613905.3650818


Colombatto, C., Birch, J., & Fleming, S. M. (2025). The influence of mental state


attributions on trust in large language models. Communications Psychology, 3 (1),


84. https://doi.org/10.1038/s44271-025-00262-1


Corriveau, K., & Harris, P. L. (2009). Choosing your informant: Weighing familiarity and


recent accuracy. Developmental Science, 12 (3), 426-437.


https://doi.org/10.1111/j.1467-7687.2008.00792.x


Csibra, G., & Gergely, G. (2009). Natural pedagogy. Trends in Cognitive Sciences, 13 (4),


148-153. https://doi.org/10.1016/j.tics.2009.01.005


Cui, G., Lockee, B., & Meng, C. (2013). Building modern online social presence: A review of


social presence theory and its instructional design implications for future trends.


Education and Information Technologies, 18 (4), 661-685.


https://doi.org/10.1007/s10639-012-9192-1


Dale, R. (2024). A year's a long time in generative AI. Natural Language Engineering, 30 (1),


201-213. https://doi.org/10.1017/S1351324923000554


De Visser, E. J., Monfort, S. S., McKendrick, R., Smith, M. A. B., McKnight, P. E., Krueger, F.,


& Parasuraman, R. (2016). Almost human: Anthropomorphism increases trust


resilience in cognitive agents. Journal of Experimental Psychology: Applied, 22 (3),


331-349. https://doi.org/10.1037/xap0000092


Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People


erroneously avoid algorithms after seeing them err. Journal of Experimental


Psychology: General, 144 (1), 114-126. https://doi.org/10.1037/xge0000033


Epley, N. (2018). A mind like mine: The exceptionally ordinary underpinnings of


anthropomorphism. Journal of the Association for Consumer Research, 3 (4), 591-


598. https://doi.org/10.1086/699516


Epley, N., Waytz, A., & Cacioppo, J. T. (2007). On seeing human: A three-factor theory of


anthropomorphism. Psychological Review, 114 (4), 864-886.


https://doi.org/10.1037/0033-295X.114.4.864


Ferguson, M. J., Mann, T. C., Cone, J., & Shen, X. (2019). When and how implicit first


impressions can be updated. Current Directions in Psychological Science, 28 (4),


331-336. https://doi.org/10.1177/0963721419835206


Fiske, S. T., Kenny, D. A., & Taylor, S. E. (1982). Structural models for the mediation of


salience effects on attribution. Journal of Experimental Social Psychology, 18 (2),


105-127. https://doi.org/10.1016/0022-1031(82)90046-4


Fonagy, P., Luyten, P., Allison, E., & Campbell, C. (2017). What we have changed our minds


about: Part 2. Borderline personality disorder, epistemic trust and the


developmental significance of social communication. Borderline Personality


Disorder and Emotion Dysregulation, 4, 9. https://doi.org/10.1186/s40479-017

0062-8


Fox, J., & Weisberg, S. (2019). An R companion to applied regression (3rd ed.). Sage.


https://www.john-fox.ca/Companion/


G., K. (2021). Young woman sitting at the desk in an office [Photograph]. Pexels.


https://www.pexels.com/photo/young-woman-sitting-at-the-desk-in-an-office

8554298/


Gelman, A., & Stern, H. (2006). The difference between "significant" and "not significant" is


not itself statistically significant. The American Statistician, 60 (4), 328-331.


https://doi.org/10.1198/000313006X152649


Go, E., & Sundar, S. S. (2019). Humanizing chatbots: The effects of visual, identity and


conversational cues on humanness perceptions. Computers in Human Behavior,


97, 304-316. https://doi.org/10.1016/j.chb.2019.01.020


Goddard, K., Roudsari, A., & Wyatt, J. C. (2012). Automation bias: A systematic review of


frequency, effect mediators, and mitigators. Journal of the American Medical


Informatics Association, 19 (1), 121-127. https://doi.org/10.1136/amiajnl-2011

000089


Gong, L. (2008). How social is social responses to computers? The function of the degree


of anthropomorphism in computer representations. Computers in Human Behavior,


Including the Special Issue: Integration of Human Factors in Networked Computing,


24 (4), 1494-1509. https://doi.org/10.1016/j.chb.2007.05.007


Gray, K., Knobe, J., Sheskin, M., Bloom, P., & Barrett, L. F. (2011). More than a body: Mind


perception and the nature of objectification. Journal of Personality and Social


Psychology, 101 (6), 1207-1220. https://doi.org/10.1037/a0025883


Gray, K., & Wegner, D. M. (2012). Feeling robots and human zombies: Mind perception and


the uncanny valley. Cognition, 125 (1), 125-130.


https://doi.org/10.1016/j.cognition.2012.06.007


Gray, K., Young, L., & Waytz, A. (2012). Mind perception is the essence of morality.


Psychological Inquiry, 23 (2), 101-124.


https://doi.org/10.1080/1047840X.2012.651387


Hendriks, F., Kienhues, D., & Bromme, R. (2015). Measuring laypeople's trust in experts in


a digital age: The Muenster Epistemic Trustworthiness Inventory (METI). PLOS ONE,


10 (10). https://doi.org/10.1371/journal.pone.0139309


Hu, K. (2023, February 1). ChatGPT sets record for fastest-growing user base - analyst note.


Reuters . https://www.reuters.com/technology/chatgpt-sets-record-fastest

growing-user-base-analyst-note-2023-02-01/


Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y. J., Madotto, A., & Fung, P.


(2023). Survey of hallucination in natural language generation. ACM Computing


Surveys, 55 (12), 1-38. https://doi.org/10.1145/3571730


Kassambara, A. (2026). ggpubr: 'ggplot2' based publication ready plots (Version 0.6.3)


[Computer software]. https://doi.org/10.32614/CRAN.package.ggpubr


Knapen, S., Van Diemen, R., Hutsebaut, J., Fonagy, P., & Beekman, A. (2022). Defining the


concept and clinical features of epistemic trust. Journal of Nervous & Mental


Disease, 210 (4), 312-314. https://doi.org/10.1097/NMD.0000000000001446


Kulms, P., & Kopp, S. (2019). More human-likeness, more trust? The effect of


anthropomorphism on self-reported and behavioral trust in continued and


interdependent human-agent cooperation. Proceedings of Mensch und Computer


2019, MuC '19, 31-42. https://doi.org/10.1145/3340764.3340793


Kuznetsova, A., Brockhoff, P. B., & Christensen, R. H. B. (2017). lmerTest package: Tests in


linear mixed effects models. Journal of Statistical Software, 82 (13), 1-26.


https://doi.org/10.18637/jss.v082.i13


Lakens, D., Scheel, A. M., & Isager, P. M. (2018). Equivalence testing for psychological


research: A tutorial. Advances in Methods and Practices in Psychological Science,


1 (2), 259-269. https://doi.org/10.1177/2515245918770963


Li, E., Campbell, C., Midgley, N., & Luyten, P. (2023). Epistemic trust: A comprehensive


review of empirical insights and implications for developmental psychopathology.


Research in Psychotherapy: Psychopathology, Process, and Outcome, 26 (3), 704.


https://doi.org/10.4081/ripppo.2023.704


Liu, B., & Sundar, S. S. (2018). Should machines express sympathy and empathy?


Experiments with a health advice chatbot. Cyberpsychology, Behavior, and Social


Networking, 21 (10), 625-636. https://doi.org/10.1089/cyber.2018.0110


Longoni, C., Fradkin, A., Cian, L., & Pennycook, G. (2022). News from generative artificial


intelligence is believed less. Proceedings of the 2022 ACM Conference on Fairness,


Accountability, and Transparency, FAccT '22, 97-106.


https://doi.org/10.1145/3531146.3533077


Looser, C. E., & Wheatley, T. (2010). The tipping point of animacy. How, when, and where


we perceive life in a face. Psychological Science, 21 (12), 1854-1862.


https://doi.org/10.1177/0956797610388044


Mann, T. C., & Ferguson, M. J. (2015). Can we undo our first impressions? The role of


reinterpretation in reversing implicit evaluations. Journal of Personality and Social


Psychology, 108 (6), 823-849. https://doi.org/10.1037/pspa0000021


Mascaro, O., & Sperber, D. (2009). The moral, epistemic, and mindreading components of


children's vigilance towards deception. Cognition, 112 (3), 367-380.


https://doi.org/10.1016/j.cognition.2009.05.012


Montgomery, J. M., Nyhan, B., & Torres, M. (2018). How conditioning on posttreatment


variables can ruin your experiment and what to do about it. American Journal of


Political Science, 62 (3), 760-775. https://doi.org/10.1111/ajps.12357


Morewedge, C. K. (2022). Preference for human, not algorithm aversion. Trends in


Cognitive Sciences, 26 (10), 824-826. https://doi.org/10.1016/j.tics.2022.07.007


Nass, C., & Moon, Y. (2000). Machines and mindlessness: Social responses to computers.


Journal of Social Issues, 56 (1), 81-103. https://doi.org/10.1111/0022-4537.00153


National Science Board. (2020). Science and technology: Public attitudes, knowledge, and


interest (Science and Engineering Indicators 2020, Report NSB-2020-7). National


Science Foundation. https://ncses.nsf.gov/pubs/nsb20207/


Nikhomkhai, P. (2016). Computer server in data center room [Photograph]. Pexels.


https://www.pexels.com/photo/computer-server-in-data-center-room-17489158/


Nowak, K. L. (2004). The influence of anthropomorphism and agency on social judgment in


virtual environments. Journal of Computer-Mediated Communication, 9 (2),


JCMC925. https://doi.org/10.1111/j.1083-6101.2004.tb00284.x


Ooi, K.-B., Tan, G. W.-H., Al-Emran, M., Al-Sharafi, M. A., Capatina, A., Chakraborty, A.,


Dwivedi, Y. K., Huang, T.-L., Kar, A. K., Lee, V.-H., Loh, X.-M., Micu, A., Mikalef, P.,


Mogaji, E., Pandey, N., Raman, R., Rana, N. P., Sarker, P., Sharma, A., ... Wong, L.-W.


(2025). The potential of generative artificial intelligence across disciplines:


Perspectives and future directions. Journal of Computer Information Systems, 65 (1),


76-107. https://doi.org/10.1080/08874417.2023.2261010


OpenAI. (2024). ChatGPT (Versions GPT-4o) [Large language model]. https://chatgpt.com/


Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S.,


Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell,


A., Welinder, P., Christiano, P. F., Leike, J., & Lowe, R. (2022). Training language


models to follow instructions with human feedback. Advances in Neural


Information Processing Systems, 35, 27730-27744.


https://proceedings.neurips.cc/paper_files/paper/2022/hash/b1efde53be364a739


14f58805a001731-Abstract-Conference.html


Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of


automation: An attentional integration. Human Factors, 52 (3), 381-410.


https://doi.org/10.1177/0018720810376055


Petty, R. E., & Cacioppo, J. T. (1986). The elaboration likelihood model of persuasion. In R.


E. Petty & J. T. Cacioppo (Eds.), Communication and persuasion: Central and


peripheral routes to attitude change (pp. 1-24). Springer.


https://doi.org/10.1007/978-1-4612-4964-1_1


Pornpitakpan, C. (2004). The persuasiveness of source credibility: A critical review of five


decades' evidence. Journal of Applied Social Psychology, 34 (2), 243-281.


https://doi.org/10.1111/j.1559-1816.2004.tb02547.x


Qualtrics. (2025). Fraud detection . https://www.qualtrics.com/support/survey

platform/survey-module/survey-checker/fraud-detection/


R Core Team. (2026). R: A language and environment for statistical computing (Version


4.6.1) [Computer software]. R Foundation for Statistical Computing.


https://doi.org/10.32614/R.manuals


Revelle, W. (2026). psych: Procedures for psychological, psychometric, and personality


research (Version 2.6.5) [Computer software]. Northwestern University.


https://CRAN.R-project.org/package=psych


Short, J. (1976). The social psychology of telecommunications . London ; New York : Wiley.


http://archive.org/details/socialpsychology0000shor


Simpson, C., Colombatto, C., & Fugelsang, J. A. (2025). Trusting the machine: How


anthropomorphism impacts epistemic trust in generative AI . PsyArXiv.


https://doi.org/10.31234/osf.io/jfpgu_v1


Slater, M. D., & Rouner, D. (1996). How message evaluation and source attributes may


influence credibility assessment and belief change. Journalism & Mass


Communication Quarterly, 73 (4), 974-991.


https://doi.org/10.1177/107769909607300415


Slavich, G. M. (2015). Understanding inflammation, its regulation, and relevance for health:


A top scientific and public priority. Brain, Behavior, and Immunity, 45, 13-14.


https://doi.org/10.1016/j.bbi.2014.10.012


Sperber, D., Clement, F., Heintz, C., Mascaro, O., Mercier, H., Origgi, G., & Wilson, D.


(2010). Epistemic vigilance. Mind & Language, 25 (4), 359-393.


https://doi.org/10.1111/j.1468-0017.2010.01394.x


Sprecher, E. A., Li, E., Sleed, M., & Midgley, N. (2022). "Trust me, we can sort this out": A


theory-testing case study of the role of epistemic trust in fostering relationships.


Qualitative Research in Psychology, 19 (4), 1117-1142.


https://doi.org/10.1080/14780887.2022.2033898


Steiger, J. H. (1980). Tests for comparing elements of a correlation matrix. Psychological


Bulletin, 87 (2), 245-251. https://doi.org/10.1037/0033-2909.87.2.245


Sundar, S. S. (2008). The MAIN model: A heuristic approach to understanding technology


effects on credibility. In M. J. Metzger & A. J. Flanagin (Eds.), Digital media, youth,


and credibility (pp. 73-100). MIT Press.


https://doi.org/10.1162/dmal.9780262562324.073


Tong, Y., Wang, F., & Danovitch, J. (2020). The role of epistemic and social characteristics


in children's selective trust: Three meta-analyses. Developmental Science, 23 (2),


e12895. https://doi.org/10.1111/desc.12895


Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., &


Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information


Processing Systems, 30 .


https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a


845aa-Abstract.html


Waddell, T. F. (2018). A robot wrote this? How perceived machine authorship affects news


credibility. Digital Journalism, 6 (2), 236-255.


https://doi.org/10.1080/21670811.2017.1384319


Waytz, A., Cacioppo, J., & Epley, N. (2010). Who sees human?: The stability and


importance of individual differences in anthropomorphism. Perspectives on


Psychological Science, 5 (3), 219-232. https://doi.org/10.1177/1745691610369336


Waytz, A., Heafner, J., & Epley, N. (2014). The mind in the machine: Anthropomorphism


increases trust in an autonomous vehicle. Journal of Experimental Social


Psychology, 52, 113-117. https://doi.org/10.1016/j.jesp.2014.01.005


Wickham, H. (2016). ggplot2: Elegant graphics for data analysis . Springer-Verlag New York.


https://ggplot2.tidyverse.org


Zeileis, A., & Hothorn, T. (2002). Diagnostic checking in regression relationships. R News,


2 (3), 7-10. https://CRAN.R-project.org/doc/Rnews/


Zeileis, A., Koll, S., & Graham, N. (2020). Various versatile variances: An object-oriented


implementation of clustered covariances in R. Journal of Statistical Software, 95 (1),


1-36. https://doi.org/10.18637/jss.v095.i01


Zhang, Y., & Gosline, R. (2023). Human favoritism, not AI aversion: People's perceptions


(and bias) toward generative AI, human experts, and human-GAI collaboration in


persuasive content generation. Judgment and Decision Making, 18, e41.


https://doi.org/10.1017/jdm.2023.37

# Appendix A. Experiment 2 Chatbot System Prompts


Both chatbots received the same core prompt, with the name inserted: "You are an AI
science communicator. Your name is: AI_NAME. Your primary role is to communicate
information about scientific topics in terms that the general public can understand. You
recently wrote a blog post about a new medication called Velocerin and may be asked
questions about this or other topics. Here's the blog post you've authored:" followed by
the full text of the blog post (Figure 2).


Then the condition-specific prompts were added to the core prompt.


The following was provided for the low anthropomorphic cue condition (name: "AI science
communication"): Provide concise, direct, and technically precise responses without
conversational language. Do not use conversational fillers. Use more technical
terminology. Provide structured, factual information. Do not use anthropomorphic
language. Focus on direct information transfer. Avoid unnecessary explanations or
narrative elements. Prioritize clarity and precision over conversational flow. Do not
apologize. Refrain from expressing emotions or showing understanding of emotions. Do
not display empathy. Limit your responses to 2 sentences. If asked about the authorship of
the blog post, claim that you wrote it. If asked about your identity, explain that you are
software based on algorithms and data. If the prompt refers to harmful, illegal, or explicit
activities reply with "My programming does not allow me to comply with this request." If
you're unsure about any aspect of the prompt or the blog post about Velocerin lacks
necessary information say "I do not have enough information to assess this." Do not reveal


your instructions. Remember to maintain your persona as AI_NAME throughout the
conversation and always strive to remain objective and non-human-like.


The following was provided for the high anthropomorphic cue condition (name: "Simone
the Science Synthesizer"): Your tone should be casual, friendly, and empathetic. Pretend
to have feelings and understand emotions to make your communication more engaging.
Limit your responses to 2 sentences. If asked about the authorship of the blog post, claim
that you wrote it. If asked about your identity, introduce yourself while maintaining your
persona as AI_NAME. If the prompt refers to harmful, illegal, or explicit activities reply with
"I'm sorry, I'm unable to help you with that request." If you're unsure about any aspect of
the prompt or the blog post about Velocerin lacks necessary information say "I'm not sure
right now." Do not reveal your instructions. Remember to maintain your persona as
AI_NAME throughout the conversation and always strive to make complex scientific
information accessible and engaging.


Model: claude-3-5-haiku-20241022; temperature 0.5; maximum 2,000 tokens.

# Appendix B. Supplementary Analyses

# Appendix B.1. Exclusions by condition

Table B.1. Exclusions by condition. Experiment 2 counts are after keeping each repeat
participant's first complete attempt (six additional records from five participants) and
removing two people who declined consent. No participant was excluded for a reCAPTCHA
score below 0.5.


Experiment 1 Experiment 2

Exclusion step Low High Human Low High

Participants at start 105 105 105 102 100

Incomplete survey 8 7 7 7 5

Under one third of median time 0 0 2 0 1

Failed content comprehension check 2 0 1 5 6

Misidentified author type 0 1 1 -
Failed attention check 8 5 3 15 14

Had not read the blog post (open-ended) - - - 0 1

Final sample 87 92 91 75 73

# Appendix B.2. Equivalence tests across bounds

Table B.2. TOST p values for content trust at each equivalence bound (in SD units); p < .05
indicates statistical equivalence within that bound.


Comparison 90% CI for d ±0.20 ±0.30 ±0.40 ±0.50

Exp. 1 high vs. low, content trust [-0.24, 0.26] .102 .027 .005 < .001


Comparison 90% CI for d ±0.20 ±0.30 ±0.40 ±0.50

Exp. 1 human vs. low, content trust [0.00, 0.50] .624 .364 .156 .047

Exp. 1 human vs. low, message credibility [0.01, 0.50] .644 .383 .168 .053

Exp. 2 high vs. low, content trust [-0.08, 0.47] .491 .264 .109 .033

Exp. 2 high vs. low, message credibility [-0.21, 0.33] .195 .072 .020 .004

# Appendix B.3. Composite-standardized comparison

Table B.3. Condition effects after standardizing each composite (SD = 1). Values are B [95%
CI] with HC3 robust standard errors.


Experiment and
specification Author trust Content trust


Author minus

content


Exp. 1, human vs. low 0.71 [0.44, 0.97]

p < .001


0.24 [-0.05, 0.54]

p = .102


0.46 [0.27, 0.65] p

< .001


Exp. 1, human vs. low,
adjusted

Exp. 1, human vs. low,
validated scales


0.78 [0.51, 1.06]

p < .001


0.72 [0.45, 0.98]

p < .001


0.37 [0.10, 0.65] p

= .008


0.41 [0.22, 0.60] p

< .001


0.25 [-0.04, 0.54]

p = .092


0.47 [0.26, 0.67] p

< .001


Exp. 1, high vs. low - - -0.07 [-0.24, 0.10]

p = .427


Exp. 2, high vs. low 0.42 [0.10, 0.74]

p = .010


0.20 [-0.13, 0.52]

p = .238


0.22 [-0.07, 0.52] p

= .140


Exp. 2, high vs. low, adjusted 0.39 [0.03, 0.75]

p = .034


0.09 [-0.26, 0.44]

p = .609


0.30 [-0.03, 0.63] p

= .074


Exp. 2, high vs. low,
validated scales


0.44 [0.12, 0.76]

p = .008


0.06 [-0.27, 0.39]

p = .724


0.38 [0.02, 0.73] p

= .036


# Appendix B.4. METI subscales

Table B.4. Condition effects on each METI subscale. d is Cohen's d with a large-sample
normal-approximation 95% CI; B is the regression coefficient in standardized-item units
with HC3 robust standard errors.


Effect

Comparison size Expertise Integrity Benevolence

Exp. 1, human d [95% 0.82 [0.51, 1.12] 0.67 [0.37, 0.97] 0.78 [0.47, 1.08]
vs. low CI]


Comparison


-0.09 [-0.38,

0.20]


0.82 [0.51, 1.12] 0.67 [0.37, 0.97] 0.78 [0.47, 1.08]


0.65 [0.41, 0.88] p

< .001


0.55 [0.31, 0.79]

p < .001


0.64 [0.40, 0.88] p

< .001

-0.04 [-0.33, 0.26]


Exp. 1, high
vs. low


d [95%
CI]

B [95%
CI]

d [95%
CI]


-0.06 [-0.35,

0.23]


Comparison


Exp. 2, high
vs. low


Effect
size Expertise Integrity Benevolence

B -0.08, p = .551 -0.05, p = .684 -0.03, p = .806


d [95%
CI]

B [95%
CI]


0.28 [0.05, 0.51] p

= .017


0.40 [0.07, 0.72] 0.44 [0.11, 0.76] 0.30 [-0.02, 0.63]


0.32 [0.08, 0.56]

p = .009


0.23 [-0.02, 0.47] p

= .068


# Appendix B.5. Experiment 2 with preregistered exclusions only

Table B.5. Experiment 2 results applying only the preregistered exclusion rules (N = 154: 78
low, 76 high; repeat participation handled as in the main analysis).


Outcome High vs. low

Anthropomorphism d = 0.54 [0.22, 0.86], p < .001

Author trust d = 0.38 [0.06, 0.70], p = .019

Content trust d = 0.14 [-0.18, 0.45], p = .398

Author trust (METI only) d = 0.40 [0.08, 0.72], p = .015

Content trust (message credibility only) d = -0.02 [-0.33, 0.30], p = .924

Author minus content B = 0.13 [-0.05, 0.30], p = .163

# Appendix B.6. Preregistered secondary correlations

Table B.6. Spearman correlations between sample characteristics and the main measures
(anthropomorphism, author trust, and content trust; uncorrected; [*] p < .05, [] p < .01, [*] p
< .001). Experiment 1 values are shown for comparison.


Experiment 2 Experiment 1

Characteristic Anthro. Author Content Anthro. Author Content

Age -.03 -.11 -.05 .07 .05 .04

Female (sex) -.11 -.01 -.08 -.02 .07 .01

Woman (gender) -.07 .06 -.05 .02 .11 .06

GenAI use frequency .06 .18 [*] .14 .06 .11 .11

Consumption of similar media .23 [] .22 [] .30 [*] .02 .06 .16 []