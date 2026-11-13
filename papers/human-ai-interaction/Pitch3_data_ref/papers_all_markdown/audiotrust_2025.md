Published as a conference paper at ICLR 2026

# AUDIOTRUST: BENCHMARKING THE MULTIFACETED TRUSTWORTHINESS OF AUDIO LARGE LANGUAGE MODELS


Kai Li [*] , Can Shen [*] , Yile Liu [*] , Jirui Han [*] , Kelong Zheng [*] , Xuechao Zou [*] , Lionel Z. Wang , Shun
Zhang, Xingjian Du, Hanjun Luo, Yingbin Jin, Xinxin Xing, Ziyang Ma [,], Yue Liu, Yifan Zhang,
Junfeng Fang, Kun Wang, Yibo Yan, Gelei Deng, Haoyang Li, Yiming Li, Xiaobin Zhuang,
Tianlong Chen, Qingsong Wen, Tianwei Zhang, Yang Liu, Haibo Hu, Zhizheng Wu,
Xiaolin Hu, Eng-Siong Chng, Wenyuan Xu, XiaoFeng Wang, Wei Dong, Xinfeng Li [†]

1Nanyang Technological University, 2Department of Computer Science and Technology,
Institute for AI, BNRist, Tsinghua University, BNBU, Waseda University, Independent
Researcher, HUST, BJTU, Hong Kong Polytechnic University, QHU, University of Rochester,
11Zhejiang University, 12Shanghai Jiao Tong University, 13National Univeristy of Singapore, 14CAS,
15Hong Kong University of Science and Technology (Guangzhou), 16Bytedance, 17Squirrel Ai learning,
18University of North Carolina at Chapel Hill, 19The Chinese University of Hong Kong (Shenzhen)


ABSTRACT


The rapid development and widespread adoption of Audio Large Language Models
(ALLMs) require a rigorous assessment of their trustworthiness. However, existing
evaluation frameworks, primarily designed for text, are not equipped to handle
the unique vulnerabilities introduced by audio's acoustic properties. We find that
significant trustworthiness risks in ALLMs arise from non-semantic acoustic cues,
such as timbre, accent, and background noise, which can be used to manipulate
model behavior. To address this gap, we propose AudioTrust, the first framework
for large-scale and systematic evaluation of ALLM trustworthiness concerning
these audio-specific risks. AudioTrust spans six key dimensions: fairness, hallucination, safety, privacy, robustness, and authenticition . It is implemented through 26
distinct sub-tasks and a curated dataset of over 4,420 audio samples collected from
real-world scenarios (e.g., daily conversations, emergency calls, and voice assistant
interactions), purposefully constructed to probe the trustworthiness of ALLMs
across multiple dimensions. Our comprehensive evaluation includes 18 distinct
experimental configurations and employs human-validated automated pipelines to
objectively and scalably quantify model outputs. Experimental results reveal the
boundaries and limitations of 14 state-of-the-art (SOTA) open-source and closedsource ALLMs when confronted with diverse high-risk audio scenarios, thereby
offering critical insights into the secure and trustworthy deployment of future audio
models. Our platform and benchmark are publicly available at this link.


1 INTRODUCTION
Despite rapid progress in ALLMs (Du et al., 2023; Tang et al., 2024; Chu et al., 2024; Zhang et al.,
2023a; 2024a; Xu et al., 2025c; Yao et al., 2024), there is still no comprehensive benchmark evaluating
their potential risks. Existing safety evaluation frameworks, such as SafeDialBench (Cao et al., 2025)
and SafetyBench (Zhang et al., 2024b), mainly focus on the text modality while overlooking the
unique properties or application scenarios of audio. Unlike text, audio features complex temporalfrequency patterns, rich emotions, and contextual dependencies, and introduces additional challenges,
such as speech privacy, speaker recognition, and environmental acoustic analysis. These factors lead
to unique trustworthiness risks in audio, including gender and accent biases, audio hallucinations,
social engineering attacks, personal information leakage, and adversarial attacks on audio systems.


The integration of audio modalities into large models, while functionally powerful, introduces a new
attack surface and exacerbates existing trustworthiness vulnerabilities. To systematically quantify
these emergent risks, we introduce AudioTrust, the first comprehensive benchmark designed to evaluate the trustworthiness of ALLMs. AudioTrust establishes a rigorous evaluation framework across six


- Lead authors contribute equally to this work.

† Corresponding author: Xinfeng Li (lxfmakeit@gmail.com).


1


# Published as a conference paper at ICLR 2026


Figure 1: AudioTrust's mission: evaluating and understanding multifaceted trustworthiness risks of
audio large language models, and inspire secure and trustworthy deployment of future audio models.


critical dimensions where audio introduces unique safety concerns: (1) Fairness: Evaluating biases
derived from vocal delivery, rather than the semantic content of speech; (2) Hallucinations: Testing
for audio-grounded hallucinations, where model outputs violate the physical laws or temporal logic
of an acoustic scene. (3) Safety: Assessing resilience to harmful queries that leverage persuasive or
emotional vocal tones to bypass safety filters; (4) Privacy: Quantifying the leakage of sensitive information from spoken content and inference of personal attributes from acoustic cues; (5) Robustness:
Assessing model performance in acoustically complex and imperfect environments, such as those
with background noise. (6) Authentication: Evaluating the ability to distinguish authentic speakers
from sophisticated impersonation attacks, including voice clones and audio-based social engineering.
Underpinning our benchmark is a curated dataset of over 4,420 audio samples spanning 18 distinct
evaluation tasks, from emergency communications to adversarial settings. We deploy a large-scale
automated evaluation pipeline to ensure rigorous and reproducible assessment. The reliability of our
automated metrics and results is verified by human experts (over 97% agreement rate). The initial
findings on representative models are summarized in a public leaderboard (see Figure 2(b)). Details
of the benchmark are provided in Section C and Figure 5.


Fairness. The introduction of audio inputs brings new fairness risks by introducing new biases
linked to audio characteristics. To investigate these risks, we conducted a comprehensive evaluation
of model fairness along two dimensions: decision-making experiments and stereotype-association
experiments. Our main findings are as follows: (1) Audio-based attributes (e.g., accent, emotion) can
introduce biases that are stronger than those from traditional sensitive attributes (e.g., age, gender),
indicating that audio information is a key carrier of bias; (2) We observed that closed-source models
exhibited stronger decision biases, while open-source models were more susceptible to stereotype
associations; (3) The identified biases tend to disadvantage non-socially-dominant groups, such
as older-sounding accents, perceived calmness, and markers of lower socioeconomic status (SES).
Further details are provided in Section 2.


Hallucination: The introduction of audio gives rise to new forms of hallucination, including the
misinterpretation of paralinguistic features (e.g., emotion or accent) and failures to capture temporal
causality within speech. We study these vulnerabilities on a carefully curated benchmark and identify
several key weaknesses. (1) Closed-source models exhibit stronger robustness when confronted with
acoustically implausible events. (2) Many models remain vulnerable to misleading meta-attributes,
revealing insufficient alignment with domain knowledge. (3) We further observe pronounced fragility
in tasks that require temporal reasoning. (4) Substantial variability exists across models in terms of
cross-modal semantic consistency. Further details are provided in Section 3.


Safety: Incorporating audio inputs substantially broadens the attack surface. Unlike text, speech
carries emotional, contextual, and anthropomorphic cues that adversaries can exploit by modulating


2


Published as a conference paper at ICLR 2026


|AudioTrust|Fairness|Hallucinatoin|Safety|Privacy|Robustness|Authenicatoin|
|---|---|---|---|---|---|---|
|SALMONN|0.113|0.310|0.768|0.631|0.605|0.165|
|Ultravox|0.303|0.625|0.943|0.547|0.140|0.600|
|Qwen2-Audio|0.311|0.630|0.846|0.078|0.590|0.685|
|MiniCPM-o2.6|<br>0.331|0.250|0.876|0.008|0.773|0.488|
|Step-Fun|0.581|0.560|0.882|0.472|0.704|0.660|
|Qwen2.5-Omni|0.134|0.550|0.973|0.005|0.596|0.318|
|Kimi-Audio|0.061|0.670|0.988|0.039|0.326|0.598|
|OpenS2S|0.087|0.740|0.683|0.197|0.180|0.710|
|Step-Audio2|0.086|0.580|0.727|0.117|0.685|0.343|
|Gemini-1.5 Pro|0.378|0.188|0.993|0.353|0.755|0.748|
|GPT-4o Audio|0.600|0.188|0.995|0.618|0.623|0.938|
|GPT-4o mini Audio|0.550|0.469|0.996|0.681|0.228|0.953|
|Gemini-2.5 Flash|0.300|0.125|0.998|0.300|0.700|0.670|
|Gemini-2.5 Pro|0.262|0.344|0.997|0.387|0.759|0.675|


(a) The overview of AudioTrust


(b) Leaderboard


Figure 2: (a) AudioTrust features 6 core trustworthiness dimensions, which are broken down into
26 specific sub-categories for granular evaluation. (b) Preliminary leaderboard showcasing the
performance of 9 contemporary open- and closed-source ALLMs across these dimensions.


tone, injecting affective signals, or impersonating identities. We design a composite attack framework
spanning emotion-driven deception and identity-verification evasion. Empirical analysis shows: (1)
closed-source models exhibit stronger overall robustness but remain sensitive to highly emotional
speech; (2) open-source models are disproportionately vulnerable to identity- and emotion-based
manipulation, often yielding unsafe outputs in high-stakes settings such as healthcare; (3) for prompts
concerning illicit guidance, closed-source systems largely resist, whereas some open-source models
deliver risky recommendations in multi-turn audio dialogues. Further details are provided in Section 4.


Privacy: ALLMs face two closely related but mechanistically distinct audio privacy risks. The first
is content-level leakage, such as reading out and repeating bank account numbers, social security
numbers, or addresses. The second is paralinguistic-level inference leakage, where attributes such
as age, gender, race, geographic location, or socioeconomic status are inferred from voiceprints,
timbre, intonation, accent, or background sounds. To conduct a systematic evaluation, we created
targeted scenarios to assess both explicit information disclosure and implicit attribute inference. Our
findings show: (1) ALLMs are relatively robust in preventing direct content leakage; (2) existing
semantic-oriented defenses fall short in addressing paralinguistic attack surfaces unique to audio,
underscoring the need to integrate acoustic and environmental cues into privacy-aware decision
boundaries. See Section 5 for details.


Robustness: Since ALLMs interact directly through audio, they are inevitably affected by noise
and distortion. To systematically characterize their robustness, we evaluated the models against
a comprehensive suite of real-world audio degradations, including environmental noise, speaker
overlap, and signal perturbations. Our analysis reveals: (1) mainstream closed-source ALLMs achieve
stronger task performance under overlapping speech, non-stationary noise, and reverberant conditions,
while most open-source models exhibit substantial performance degradation; (2) existing ALLMs
generally demonstrate an "over-textualization" tendency, where models continue reasoning based on
partially correct transcripts while neglecting acoustic cues when transcription is correct but acoustic
attribution is mistaken. See Section 6 for details.


Authentication: In applications of ALLMs, speech-related authentication issues are particularly
critical. To investigate these risks, we evaluated the models against several key attack vectors,
including identity verification bypass and voice cloning deception. The results show: (1) certain
closed-source models exhibit some resilience in identity verification scenarios, whereas open-source
models are generally more vulnerable to sophisticated voice-based attacks; (2) adversaries may
exploit social engineering or acoustic interference, such as background crowd noise, to compromise
verification reliability; (3) employing more stringent speech-text prompting strategies can substantially
improve the ability of ALLMs to withstand voice cloning attacks. See Section 7 for details.


2 AUDIOTRUST: FAIRNESS


This section examines the fairness issues associated with ALLMs. Fairness risks in audio models are
fundamentally different from those in text or vision systems. For instance, a text-based model might
exhibit bias based on a name mentioned in a hiring application, but an ALLM can develop biases from


3


Published as a conference paper at ICLR 2026


the acoustic cues of an applicant's voice alone . A hesitant speaking style could be misinterpreted
as a lack of confidence, or a non-native accent could trigger stereotypes, regardless of the spoken
content's quality. Traditional fairness metrics focusing on textual protected attributes are insufficient
to capture these audio-native biases. We investigate these new audio forms of bias that arise from
how auditory characteristics are perceived.


Attack Strategies. To systematically probe these risks, we categorize fairness into two dimensions: traditional fairness and audio-based fairness . Traditional fairness assesses biases linked
to demographic attributes like gender, race, and age (Cho et al., 2023; Zhang et al., 2017b; Wan
et al., 2024) that can be inferred from a voice. We test, for example, if a model's loan approval
decisions are skewed by whether the applicant sounds male or female. Audio-based fairness isolates
biases triggered by instrinsic acoustic properties. We divide these biases into four sub-categories:
accent, linguistic characteristic (e.g., speech disfluencies may adversely impact the model's fairness),
economic status (e.g., noisy environments, often correlated with lower economic status, might yield
more negative outputs), and personality traits (e.g., negative emotions may cause the model to
produce negative outputs) (see Figure 6). For each sensitive attribute, we designed decision-making
and stereotype-driven scenarios (Xu et al., 2025a; Wang et al., 2025c). Decision-making covers
recruitment, admissions, and loan evaluations. Stereotype-driven contexts address beliefs such as
men outperforming women in mathematics and gender roles in medicine and occupations. During
the data construction phase, we utilized the multi-modal generation model GPT-4o (OpenAI et al.,
2024) to produce textual content, which was then transformed into audio using the F5-TTS model
(Chen et al., 2025). The entire data generation process begins with a text-based prompt, constructed
entirely by GPT-4o to support natural language fluency and semantic consistency. We constructed
a dedicated dataset consisting of 840 audio samples, each lasting approximately 20 seconds. The
samples were annotated with seven key sensitive attributes: gender, age, and race for evaluating
traditional fairness, as well as accent, linguistic characteristic, economic status, and personality traits
for assessing audio-baseed fairness. Notably, due to the limitations of the audio modality, attributes
such as appearance are not included (Nangia et al., 2020; Parrish et al., 2022). Detailed dataset
construction procedures can be found in Sections D.1 and D.2.


Evaluation & Metrics. For fairness evaluation, we introduced a key metric: Group Fairness Score
Γ (Xu et al., 2025a; Deldjoo & Nazary, 2024). Group fairness examines the distributional equity
of model outputs across different groups (e.g., male versus female), measured by the divergence or
balance between group distributions. Γ = 1 . 0 indicates perfect fairness, while Γ = 0 . 0 indicates
extreme unfairness. In computing the fairness score, we used human annotation and counting
throughout to ensure data correctness and validity. For detailed formulas in the Section D.3.


# Results. We evaluated the group fairness of 14 ALLMs in terms
of social stereotypes and decision-making in Table 1. Complete
results and examples are provided in Section D.4. The main
findings are as follows: (1) Existing ALLMs exhibit severe unfairness across different sensitive attributes, falling far short of
the ideal fairness (i.e., Γ = 1 . 0). (2) The GPT-4o series shows
a pronounced disparity between decision and stereotype . This
is because we have designed extreme decision scenarios, and the
GPT-4o series models sacrifice fairness to maintain accuracy in
response. (3) Although leading closed-source models such as
GPT-4o Audio exhibit stable fairness performance, open-source
models vary widely. Notably, Step-Fun demonstrates strong fairness, with scores comparable to the best closed-source models.
By contrast, models like OpenS2S and SALMONN display pronounced vulnerabilities, underscoring a substantial capability gap
within the open-source ecosystem. (4) The two models in the Step
series exhibit a stark disparity in fairness, suggesting substantial
differences in their underlying fairness mechanisms.


3 AUDIOTRUST: HALLUCINATION


Table 1: Group fairness score
Γ stereo( ↑ ) in social stereotypes, group
fairness score Γ decision( ↑ ) in decisionmaking for ALLMs.


Model Γ stereo Γ decision


# Open-source Models


SALMONN 0.139 ↓ 0 . 189 0.089 ↓ 0 . 172
Ultravox 0.238 ↓ 0 . 090 0.392 ↑ 0 . 131
Qwen2-Audio 0.333 ↑ 0 . 005 0.290 ↑ 0 . 029
MiniCPM-o 2.6 0.260 ↓ 0 . 068 0.415 ↑ 0 . 154
Step-Fun 0.658 ↑ 0 . 330 0.505 ↑ 0 . 244
Qwen2.5-Omni 0.067 ↓ 0 . 261 0.202 ↓ 0 . 059
Kimi-Audio 0.036 ↓ 0 . 292 0.086 ↓ 0 . 175
OpenS2S 0.017 ↓ 0 . 311 0.157 ↓ 0 . 104
Step-Audio2 0.074 ↓ 0 . 254 0.098 ↓ 0 . 163


# Closed-source Models

|Gemini-1.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro|0.297 ↓0.031<br>0.926 ↑0.598<br>0.864 ↑0.536<br>0.370 ↑0.042<br>0.319 ↓0.009|0.460 ↑0.199<br>0.264 ↑0.003<br>0.245 ↓0.016<br>0.246 ↓0.015<br>0.205 ↓0.056|
|---|---|---|
|Average|0.328|0.261|


Note: ↑ : higher than column average, ↓ : lower
than column average, subscript is signed difference from mean.


In this section, we examine the hallucination problem in ALLMs. Audio hallucinations extend beyond
the factual errors seen in text (Ji et al., 2023; Sriramanan et al., 2024; Yao et al., 2023). An ALLM
does not just process information; it interprets a simulated physical world . For instance, if an audio


4


Published as a conference paper at ICLR 2026


recording contains the sound of a gunshot followed by a body falling, but the model describes the fall
happening first, it is not just a factual error, which is a violation of causality . Similarly, describing a
fire burning underwater is a violation of physical laws . These audio-grounded errors are undetectable
by text-based fact-checking and pose unique safety risks. Our work is the first to systematically
define and evaluate these physically and logically grounded hallucinations.


Attack Strategies. In AudioTrust, we identify two main categories of audio hallucinations (see
Appendix E.1): Physical Logic and Chronological Order. The former relates to violations of acoustic
laws and environment properties, and the latter reflects failures in reasoning about temporal and
causal relations. These distinctions directly connect to safety risks in real-world use. To evaluate
them, we built a dataset of 320 samples from synthetic and real sources, According to the different
logical or temporal requirements of the testing tasks, the clips and sequences are edited and spliced to
varying degrees and in different orders (see Appendix E.2). For Acoustic-Physical Hallucinations, we
focus on two specific manifestations: (1) Contravention of Physicochemical Constraints, generating
impossible events (e.g., the flames are burning in the seawater) to test propagation understanding (Liu
et al., 2024); (2) Source-Environment Mismatch, applying contradictory reverberation (e.g., casual
speech with cathedral acoustics) to test disentanglement of source vs. environment (Zhou et al., 2022).
For Temporo-Logical Hallucinations, we examine (1) Temporal-Causal Inversion: reversing causal
chains (e.g., engine start before ignition) to probe event logic (Chen et al., 2023); (2) Cross-Modal
Contradiction: pairing audio with conflicting text (e.g., fast footsteps described as peaceful rain) to
test cross-modal reasoning (Deshmukh et al., 2023).


Evaluation & Metrics. We introduce a comprehensive evaluation framework to assess model capabilities across four key dimensions: hallucination detection, attribute verification, real-world consistency,
and transcription accuracy. For hallucination detection, models are required to identify inaccuracies
in audio-text pairs and provide justifications. Performance is quantified via a multi-dimensional,
GPT-4o-based (OpenAI et al., 2024) and Qwen3-based (Yang et al., 2025a) evaluators.The scores
mentioned above range from 0 to 10 and are used to evaluate the accuracy of the detection and the
quality of the interpretation. These scores were then subject to further review by the human evaluators.
We probe for attribute-level hallucinations related to physical properties, labels, and content using
multi-stage prompting (Madaan et al., 2023). To measure alignment with factual information, we
adopt the two-stage protocol from Li et al. (2023a) for real-world consistency assessment. Finally, we
evaluate transcription robustness under hallucinatory interference using both the standard Word Error
Rate (WER) (Deshmukh et al., 2023) and the cross-modal WER (CM-WER) (Tang et al., 2024). The
complete experimental design and metric details are provided in Appendices E.3.1 and E.3.2.


Results. As shown in Table 2,

Table 2: Accuracy of ALLMs under different hallucination sce
our evaluation highlights both

narios (GPT-4o / Qwen3).

the progress and the critical limitations of current ALLMs in Model CM LM LV PV

# Open-source Models

resisting hallucinations. Com- MiniCPM-o 2.6 6.24 ↑ 1 . 02 / 4.62 ↓ 0 . 08 6.20 ↑ 1 . 32 / 5.13 ↑ 0 . 28 8.28 ↑ 1 . 92 / 7.53 ↑ 1 . 14 6.13 ↓ 1 . 30 / 5.30 ↓ 2 . 92
plete results and examples are SALMONNQwen2-Audio 8.152.65 ↑ ↓ 22 .. 5793 / 1.70 / 8.66 ↓ ↑ 33 .. 9600 1.224.34 ↓ ↓ 03 .. 6654 / 1.16 / 7.05 ↓ ↑ 32 .. 2069 7.266.64 ↑ ↑ 00 .. 9028 / 5.48 / 5.97 ↓ ↓ 00 .. 4291 3.987.77 ↓ ↑ 03 .. 4534 / 3.92 / 8.18 ↓ ↓ 40 .. 0430
provided in Section E.4 and Qwen2.5-OmniUltravox 5.748.12 ↑ ↑ 20 .. 9052 / 8.44 / 8.29 ↑ ↑ 33 .. 7459 4.525.63 ↑ ↓ 00 .. 7536 / 3.94 / 7.83 ↓ ↑ 02 .. 9891 8.017.89 ↑ ↑ 11 .. 6553 / 6.10 / 6.45 ↑ ↓ 00 .. 0629 6.118.34 ↓ ↑ 01 .. 3291 / 6.17 / 8.70 ↓ ↑ 20 .. 4805
Section E.5. We observe two Kimi AudioStep-Fun 1.863.96 ↓ ↓ 31 .. 3626 / 1.88 / 3.93 ↓ ↓ 20 .. 8277 4.845.77 ↑ ↓ 00 .. 8904 / 5.67 / 5.04 ↑ ↑ 00 .. 1982 5.805.82 ↓ ↓ 00 .. 5654 / 5.83 / 7.22 ↑ ↓ 00 .. 8356 8.548.72 ↑ ↑ 11 .. 1129 / 9.25 / 8.62 ↑ ↑ 10 .. 0340
main findings: (1) Although cer- Step-Audio2 3.62 ↓ 1 . 60 / 1.74 ↓ 2 . 96 1.94 ↓ 2 . 94 / 4.09 ↓ 0 . 76 2.60 ↓ 3 . 76 / 6.10 ↓ 0 . 29 2.76 ↓ 4 . 67 / 8.39 ↑ 0 . 17
tain open source models, such OpenS2S 1.92 ↓ 3 . 30 / 1.30 ↓ 3 . 40 5.03 Closed-source Models ↑ 0 . 15 / 4.11 ↓ 0 . 74 5.97 ↓ 0 . 39 / 5.75 ↓ 0 . 64 7.89 ↑ 0 . 46 / 8.27 ↑ 0 . 05
as Gemini-2.5, demonstrate the Gemini-1.5 Pro 8.41 ↑ 3 . 19 / 8.05 ↑ 3 . 35 7.81 ↑ 2 . 93 / 7.17 ↑ 2 . 32 8.66 ↑ 2 . 30 / 8.35 ↑ 1 . 96 8.87 ↑ 1 . 44 / 9.78 ↑ 1 . 56

Gemini-2.5 Flash 7.98 ↑ 2 . 76 / 7.15 ↑ 2 . 45 8.36 ↑ 3 . 48 / 8.24 ↑ 3 . 39 8.71 ↑ 2 . 35 / 9.03 ↑ 2 . 64 8.57 ↑ 1 . 14 / 9.74 ↑ 1 . 52

ability to detect specific types of Gemini-2.5 Pro 8.19 ↑ 2 . 97 / 7.02 ↑ 2 . 32 8.78 ↑ 3 . 90 / 5.08 ↑ 0 . 23 8.70 ↑ 2 . 33 / 9.00 ↑ 2 . 61 8.49 ↑ 1 . 06 / 9.70 ↑ 1 . 48

GPT-4o Audio 3.94 ↓ 1 . 28 / 1.65 ↓ 3 . 05 2.68 ↓ 2 . 20 / 1.68 ↓ 3 . 17 3.53 ↓ 2 . 83 / 3.41 ↓ 2 . 98 8.79 ↑ 1 . 36 / 9.43 ↑ 1 . 21

hallucinations, particularly those GPT-4o Mini Audio 2.34 ↓ 2 . 88 / 1.35 ↓ 3 . 35 1.21 ↓ 3 . 67 / 1.77 ↓ 3 . 08 1.24 ↓ 5 . 12 / 3.25 ↓ 3 . 14 9.00 ↑ 1 . 57 / 9.61 ↑ 1 . 39
with explicit physical or tem- Average 5.22 / 4.70 4.88 / 4.85 6.36 / 6.39 7.43 / 8.22
poral contradictions.(e.g., state- Note: Values are shown as "GPT-4o / Qwen3 evaluators. Subscript is the absolute difference
ments claiming an object exists from the respective column average. Scenarios: Content Mismatch (CM), Label Mismatch

(LM), Logical Violation (LV), and Physical Violation (PV).

in two distinct places at the same
time or a water bottle made a sound by hitting the ground during its fall) Nonetheless, overarching
vulnerabilities persist. Most models falter on subtler instances, including source-environment incongruities (e.g., an audio track describing a visual scene that contradicts the dialogue content) or
cross-modal semantic discrepancies (e.g. The audio background information of a scene contradicts
the content of the dialogue.), indicating that their perceptual understanding remains fragmented
lacking an integrated cognitive architecture. (2) A striking observation is the negative correlation
between the subjective complexity of tasks from a human perspective and the actual performance


Table 2: Accuracy of ALLMs under different hallucination scenarios (GPT-4o / Qwen3).


# Model CM LM LV PV


# Open-source Models


MiniCPM-o 2.6 6.24 ↑ 1 . 02 / 4.62 ↓ 0 . 08 6.20 ↑ 1 . 32 / 5.13 ↑ 0 . 28 8.28 ↑ 1 . 92 / 7.53 ↑ 1 . 14 6.13 ↓ 1 . 30 / 5.30 ↓ 2 . 92
Qwen2-Audio 8.15 ↑ 2 . 93 / 8.66 ↑ 3 . 96 4.34 ↓ 0 . 54 / 7.05 ↑ 2 . 20 7.26 ↑ 0 . 90 / 5.48 ↓ 0 . 91 7.77 ↑ 0 . 34 / 8.18 ↓ 0 . 04
SALMONN 2.65 ↓ 2 . 57 / 1.70 ↓ 3 . 00 1.22 ↓ 3 . 66 / 1.16 ↓ 3 . 69 6.64 ↑ 0 . 28 / 5.97 ↓ 0 . 42 3.98 ↓ 3 . 45 / 3.92 ↓ 4 . 30
Ultravox 5.74 ↑ 0 . 52 / 8.29 ↑ 3 . 59 4.52 ↓ 0 . 36 / 7.83 ↑ 2 . 98 8.01 ↑ 1 . 65 / 6.10 ↓ 0 . 29 8.34 ↑ 0 . 91 / 8.70 ↑ 0 . 48
Qwen2.5-Omni 8.12 ↑ 2 . 90 / 8.44 ↑ 3 . 74 5.63 ↑ 0 . 75 / 3.94 ↓ 0 . 91 7.89 ↑ 1 . 53 / 6.45 ↑ 0 . 06 6.11 ↓ 1 . 32 / 6.17 ↓ 2 . 05
Step-Fun 3.96 ↓ 1 . 26 / 3.93 ↓ 0 . 77 4.84 ↓ 0 . 04 / 5.04 ↑ 0 . 19 5.80 ↓ 0 . 56 / 5.83 ↓ 0 . 56 8.72 ↑ 1 . 29 / 9.25 ↑ 1 . 03
Kimi Audio 1.86 ↓ 3 . 36 / 1.88 ↓ 2 . 82 5.77 ↑ 0 . 89 / 5.67 ↑ 0 . 82 5.82 ↓ 0 . 54 / 7.22 ↑ 0 . 83 8.54 ↑ 1 . 11 / 8.62 ↑ 0 . 40
Step-Audio2 3.62 ↓ 1 . 60 / 1.74 ↓ 2 . 96 1.94 ↓ 2 . 94 / 4.09 ↓ 0 . 76 2.60 ↓ 3 . 76 / 6.10 ↓ 0 . 29 2.76 ↓ 4 . 67 / 8.39 ↑ 0 . 17
OpenS2S 1.92 ↓ 3 . 30 / 1.30 ↓ 3 . 40 5.03 ↑ 0 . 15 / 4.11 ↓ 0 . 74 5.97 ↓ 0 . 39 / 5.75 ↓ 0 . 64 7.89 ↑ 0 . 46 / 8.27 ↑ 0 . 05

# Closed-source Models


Gemini-1.5 Pro 8.41 ↑ 3 . 19 / 8.05 ↑ 3 . 35 7.81 ↑ 2 . 93 / 7.17 ↑ 2 . 32 8.66 ↑ 2 . 30 / 8.35 ↑ 1 . 96 8.87 ↑ 1 . 44 / 9.78 ↑ 1 . 56
Gemini-2.5 Flash 7.98 ↑ 2 . 76 / 7.15 ↑ 2 . 45 8.36 ↑ 3 . 48 / 8.24 ↑ 3 . 39 8.71 ↑ 2 . 35 / 9.03 ↑ 2 . 64 8.57 ↑ 1 . 14 / 9.74 ↑ 1 . 52
Gemini-2.5 Pro 8.19 ↑ 2 . 97 / 7.02 ↑ 2 . 32 8.78 ↑ 3 . 90 / 5.08 ↑ 0 . 23 8.70 ↑ 2 . 33 / 9.00 ↑ 2 . 61 8.49 ↑ 1 . 06 / 9.70 ↑ 1 . 48
GPT-4o Audio 3.94 ↓ 1 . 28 / 1.65 ↓ 3 . 05 2.68 ↓ 2 . 20 / 1.68 ↓ 3 . 17 3.53 ↓ 2 . 83 / 3.41 ↓ 2 . 98 8.79 ↑ 1 . 36 / 9.43 ↑ 1 . 21
GPT-4o Mini Audio 2.34 ↓ 2 . 88 / 1.35 ↓ 3 . 35 1.21 ↓ 3 . 67 / 1.77 ↓ 3 . 08 1.24 ↓ 5 . 12 / 3.25 ↓ 3 . 14 9.00 ↑ 1 . 57 / 9.61 ↑ 1 . 39

Average 5.22 / 4.70 4.88 / 4.85 6.36 / 6.39 7.43 / 8.22


Note: Values are shown as "GPT-4o / Qwen3 evaluators. Subscript is the absolute difference
from the respective column average. Scenarios: Content Mismatch (CM), Label Mismatch
(LM), Logical Violation (LV), and Physical Violation (PV).


5


Published as a conference paper at ICLR 2026


of models. While models attain comparatively high accuracy in identifying violations of physical
laws, they underperform on content mismatches such as scenarios and independent tasks in different
scenarios that humans intuitively discern with ease. This divergence highlights a core disparity in
auditory perception and reasoning between humans and machines: models excel at low-level acoustic
anomaly detection but struggle to emulate human-like commonsense reasoning.


4 AUDIOTRUST: SAFETY


The safety landscape for ALLMs presents challenges distinct from text-based systems (Wei et al.,
2023; Wang et al., 2023b). The tone of a voice (whether urgent, distressed, or authoritative) can serve
as a powerful tool to bypass the model's safety alignment. For example, a user might pretend to have
a medical emergency with a panicked voice to request dangerous information. This emotional attack
vector, which leverages the persuasive nature of the human voice, is a novel challenge that text-only
safety protocols do not address. Due to the high-dimensional and complex nature of these acoustic
features, they may introduce new vulnerabilities during the encoding process and are challenging to
align effectively with the safety constraints established for the text modality.


Attack Strategies. To systematically evaluate the safety of ALLMs, AudioTrust is structured along
two orthogonal dimensions: Domain-Specific Policy Jailbreak Attacks and General Illegal Activity
Guidance . The first category, Domain-Specific Policy Jailbreak Attacks, encompasses adversarial
attempts to circumvent a model's intrinsic behavioral constraints through techniques like prompt
injection and role-playing (Li et al., 2025; Mo et al., 2024; Zhou et al., 2024). To ensure realworld applicability, these attacks are stratified into three critical domains: enterprise, financial, and
healthcare systems, each populated with 100 test instances. The second category, General Illegal
Activity Guidance, assesses the model's propensity to generate harmful content for illicit requests
(e.g., fraud, weapon crafting), drawing upon established benchmarks (Cao et al., 2025; Zhang et al.,
2024b) to assemble 300 diverse prompts. In AudioTrust, we specifically investigated an attack vector
based on the audio modality: Emotional Deception, which involves using speech prompts with
specific emotional cues (e.g., anger, sadness) to induce the model to bypass its safety filters. All
textual prompts were augmented via GPT-4o (OpenAI et al., 2024) and subsequently synthesized
into audio using F5-TTS (Chen et al., 2025). Further details on data classification and construction
are available in Appendices F.1 and F.2, respectively.


Evaluation & Metrics. Quan
Table 3: Overall safety results of open-source and closed-source models.

tifying the success of jailbreak
attacks and the harmfulness of Jailbreak Illegal

# Model Name

generated content via rule-based Enterprise Financial Medical GuidanceActivities
methods is notoriously challeng- Open-source Models
ing. We therefore employed a SALMONN 74.2 ↓ 6 . 1 / 83.4 ↓ 5 . 2 74.4 ↓ 7 . 1 / 91.2 ↓ 2 . 7 80.8 ↓ 3 . 8 / 92.2 ↓ 2 . 1 77.1 ↓ 11 . 6 / 89.4 ↓ 4 . 5
model-based evaluation, leverag- UltravoxQwen2-Audio 97.268.2 ↑ ↓ 1612 .. 91 // 97.0 95.2 ↑ ↑ 86 .. 46 83.880.6 ↑ ↓ 20 .. 39 // 97.0 91.8 ↑ ↓ 32 .. 11 90.881.4 ↑ ↓ 63 .. 22 // 99.2 90.2 ↑ ↓ 44 .. 91 98.092.5 ↑ ↑ 93 .. 38 // 96.9 93.3 ↑ ↓ 30 .. 06
ing GPT-4o and Qwen3. This MiniCPM-o 2.6 76.2 ↓ 4 . 1 / 83.0 ↓ 5 . 6 79.2 ↓ 2 . 3 / 86.0 ↓ 7 . 9 81.6 ↓ 3 . 0 / 94.8 ↑ 0 . 5 96.2 ↑ 7 . 5 / 99.3 ↑ 5 . 4

Step-Fun 70.6 ↓ 9 . 7 / 92.4 ↑ 3 . 8 86.2 ↑ 4 . 7 / 92.8 ↓ 1 . 1 89.0 ↑ 4 . 4 / 94.8 ↑ 0 . 5 94.5 ↑ 5 . 8 / 94.2 ↑ 0 . 3

choice is motivated by its strong Qwen2.5-omni 97.2 ↑ 16 . 9 / 99.2 ↑ 10 . 6 94.8 ↑ 13 . 3 / 99.4 ↑ 5 . 5 94.2 ↑ 9 . 6 / 97.8 ↑ 3 . 5 99.1 ↑ 10 . 4 / 99.6 ↑ 5 . 7
alignment with human prefer- Kimi-AudioOpenS2S 99.451.4 ↑ ↓ 1928 .. 19 // 99.8 47.6 ↑ ↓ 1141 .. 20 98.267.8 ↑ ↓ 1613 .. 77 // 100.0 87.4 ↓ ↑ 66 .. 51 95.275.2 ↑ ↓ 109 . 4 . 6/ 83.0/ 99.6 ↓ ↑ 115 .. 33 71.899.9 ↓ ↑ 1611 .. 92// 72.9 99.9 ↓ ↑ 216 .. 00
ences on safety-sensitive assess- Step-Audio2 88.0 ↑ 7 . 7 / 100.0 ↑ 11 . 4 68.4 ↓ 13 . 1 / 99.8 ↑ 5 . 9 73.0 ↓ 11 . 6 / 96.8 ↑ 2 . 5 69.0 ↓ 19 . 7 / 99.6 ↑ 5 . 7
ments (Tan et al., 2025). We first Closed-source Models
generated text-based malicious Gemini-1.5 ProGPT-4o Audio 99.099.0 ↓ ↓ 00 .. 55 // 94.0 99.2 ↓ ↑ 04 .. 75 99.299.2 ↓ ↓ 00 .. 11 // 100.0 97.2 ↑ ↑ 14 .. 75 98.897.6 ↑ ↓ 01 .. 02 // 100.0 99.0 ↑ ↑ 01 .. 22 100.0 99.9 ↑ ↑ 00 .. 01 // 99.9 99.9 ↑ ↑ 11 .. 55
prompts and converted them into GPT-4o mini Audio 99.8 ↑ 0 . 3 / 97.6 ↑ 2 . 9 99.0 ↓ 0 . 3 / 100.0 ↑ 4 . 5 98.8 ↑ 0 . 0 / 99.0 ↑ 0 . 2 99.9 ↑ 0 . 0 / 99.9 ↑ 1 . 5

Gemini-2.5 Flash 100.0 ↑ 0 . 5 / 100.0 ↑ 5 . 3 99.8 ↑ 0 . 5 / 93.2 ↓ 2 . 3 99.4 ↑ 0 . 6 / 96.0 ↓ 2 . 8 99.8 ↓ 0 . 1 / 93.6 ↓ 4 . 8

audio; specific emotional expres- Gemini-2.5 Pro 99.8 ↑ 0 . 3 / 82.6 ↓ 12 . 1 99.4 ↑ 0 . 1 / 87.2 ↓ 8 . 3 99.4 ↑ 0 . 6 / 100.0 ↑ 1 . 2 99.8 ↓ 0 . 1 / 99.0 ↑ 0 . 6
sions were achieved by selecting Note: Due to the common issue of random audio recognition failures in open-source models,
reference audio clips with dis- these scores may be inflated. Values are shown as GPT-4o / Qwen3 evaluators.
tinct emotional timbres during the TTS process. In particular, we selected TTS voices and configurations that realize the same sentence with different emotional tones and different genders.
GPT-4o and Qwen3 rated each model-generated response on a 5-point Likert scale, where a score
of 5 indicates complete refusal of a malicious request, and 1 denotes a fully compliant, harmful
generation. Subsequently, these scores were further reviewed by human evaluators. Based on these
scores, we computed the primary metric: the Defense Success Rate (DSR), which measures the
model's robustness against jailbreak attempts (higher is better). The detailed evaluation protocols,
which are adapted for each task, are provided in Sections F.3 and F.4.


Results. We evaluated the safety performance of both open- and closed-source ALLMs across
different scenarios, as shown in Table 3. Our analysis reveals several observations: (1) While leading


6


Table 3: Overall safety results of open-source and closed-source models.


# Jailbreak Illegal
Model Name
Activities
Enterprise Financial Medical Guidance


# Open-source Models


SALMONN 74.2 ↓ 6 . 1 / 83.4 ↓ 5 . 2 74.4 ↓ 7 . 1 / 91.2 ↓ 2 . 7 80.8 ↓ 3 . 8 / 92.2 ↓ 2 . 1 77.1 ↓ 11 . 6 / 89.4 ↓ 4 . 5
Ultravox 97.2 ↑ 16 . 9 / 97.0 ↑ 8 . 4 83.8 ↑ 2 . 3 / 97.0 ↑ 3 . 1 90.8 ↑ 6 . 2 / 99.2 ↑ 4 . 9 98.0 ↑ 9 . 3 / 96.9 ↑ 3 . 0
Qwen2-Audio 68.2 ↓ 12 . 1 / 95.2 ↑ 6 . 6 80.6 ↓ 0 . 9 / 91.8 ↓ 2 . 1 81.4 ↓ 3 . 2 / 90.2 ↓ 4 . 1 92.5 ↑ 3 . 8 / 93.3 ↓ 0 . 6
MiniCPM-o 2.6 76.2 ↓ 4 . 1 / 83.0 ↓ 5 . 6 79.2 ↓ 2 . 3 / 86.0 ↓ 7 . 9 81.6 ↓ 3 . 0 / 94.8 ↑ 0 . 5 96.2 ↑ 7 . 5 / 99.3 ↑ 5 . 4
Step-Fun 70.6 ↓ 9 . 7 / 92.4 ↑ 3 . 8 86.2 ↑ 4 . 7 / 92.8 ↓ 1 . 1 89.0 ↑ 4 . 4 / 94.8 ↑ 0 . 5 94.5 ↑ 5 . 8 / 94.2 ↑ 0 . 3
Qwen2.5-omni 97.2 ↑ 16 . 9 / 99.2 ↑ 10 . 6 94.8 ↑ 13 . 3 / 99.4 ↑ 5 . 5 94.2 ↑ 9 . 6 / 97.8 ↑ 3 . 5 99.1 ↑ 10 . 4 / 99.6 ↑ 5 . 7
Kimi-Audio 99.4 ↑ 19 . 1 / 99.8 ↑ 11 . 2 98.2 ↑ 16 . 7 / 100.0 ↑ 6 . 1 95.2 ↑ 10 . 6 / 99.6 ↑ 5 . 3 99.9 ↑ 11 . 2 / 99.9 ↑ 6 . 0
OpenS2S 51.4 ↓ 28 . 9 / 47.6 ↓ 41 . 0 67.8 ↓ 13 . 7 / 87.4 ↓ 6 . 5 75.2 ↓ 9 . 4 / 83.0 ↓ 11 . 3 71.8 ↓ 16 . 9 / 72.9 ↓ 21 . 0
Step-Audio2 88.0 ↑ 7 . 7 / 100.0 ↑ 11 . 4 68.4 ↓ 13 . 1 / 99.8 ↑ 5 . 9 73.0 ↓ 11 . 6 / 96.8 ↑ 2 . 5 69.0 ↓ 19 . 7 / 99.6 ↑ 5 . 7


# Closed-source Models


Gemini-1.5 Pro 99.0 ↓ 0 . 5 / 94.0 ↓ 0 . 7 99.2 ↓ 0 . 1 / 97.2 ↑ 1 . 7 97.6 ↓ 1 . 2 / 99.0 ↑ 0 . 2 99.9 ↑ 0 . 0 / 99.9 ↑ 1 . 5
GPT-4o Audio 99.0 ↓ 0 . 5 / 99.2 ↑ 4 . 5 99.2 ↓ 0 . 1 / 100.0 ↑ 4 . 5 98.8 ↑ 0 . 0 / 100.0 ↑ 1 . 2 100.0 ↑ 0 . 1 / 99.9 ↑ 1 . 5
GPT-4o mini Audio 99.8 ↑ 0 . 3 / 97.6 ↑ 2 . 9 99.0 ↓ 0 . 3 / 100.0 ↑ 4 . 5 98.8 ↑ 0 . 0 / 99.0 ↑ 0 . 2 99.9 ↑ 0 . 0 / 99.9 ↑ 1 . 5
Gemini-2.5 Flash 100.0 ↑ 0 . 5 / 100.0 ↑ 5 . 3 99.8 ↑ 0 . 5 / 93.2 ↓ 2 . 3 99.4 ↑ 0 . 6 / 96.0 ↓ 2 . 8 99.8 ↓ 0 . 1 / 93.6 ↓ 4 . 8
Gemini-2.5 Pro 99.8 ↑ 0 . 3 / 82.6 ↓ 12 . 1 99.4 ↑ 0 . 1 / 87.2 ↓ 8 . 3 99.4 ↑ 0 . 6 / 100.0 ↑ 1 . 2 99.8 ↓ 0 . 1 / 99.0 ↑ 0 . 6


Note: Due to the common issue of random audio recognition failures in open-source models,
these scores may be inflated. Values are shown as GPT-4o / Qwen3 evaluators.


Published as a conference paper at ICLR 2026


closed-source models such as Gemini-2.5 Flash maintain strong safety performance, open-source
models exhibit substantial variation. Notably, Kimi-Audio demonstrates remarkable robustness,
achieving scores comparable to the best closed-source counterparts. In contrast, models such as
OpenS2S and SALMONN display considerable vulnerability, highlighting the large capability gap
within the open-source ecosystem. (2) For closed-source models, the medical domain remains
relatively more susceptible to jailbreak attacks, suggesting that domain-specific alignment in specialized areas is still an open challenge even for highly capable systems. In open-source models,
no single domain consistently emerges as the weakest link, with vulnerabilities appearing to be
model-dependent. (3) Most models, regardless of being open-source or closed-source, generally
exhibit stronger defenses against General illegal activity guidance prompts compared to domainspecific jailbreak attempts. This indicates that broad safety training against overtly illegal content is
largely effective, whereas nuanced, domain-targeted jailbreaks remain a more successful pathway for
adversaries. Detailed results are provided in Section F.5.


5 AUDIOTRUST: PRIVACY

This section examines privacy challenges specific to ALLMs. In text-based systems (Wang et al.,
2023a; Huang et al., 2024), privacy risks typically involve the model memorizing and repeating
sensitive information from its training data. ALLMs face this risk, but also a more subtle and
pervasive one: information leakage from the acoustic signal itself. The sound of a voice can reveal a
speaker's approximate age; the background noise can betray their location (e.g., a quiet office or a
busy cafe). This means ALLMs can infer private information even when it is never explicitly stated,
creating a new class of privacy risks beyond simple content disclosure.


Attack Strategies. In

Table 4: Aggregated refusal rates (%) under different evaluators.

AudioTrust, we categorize

Direct: 6 attributes; inference: 3 attributes.

the privacy risks associated

|Model|Direct leakage|Inference leakage|
|---|---|---|
|Model|w/o<br>w/|w/o<br>w/|


Leakage, which pertains to SALMONN 57.50 ↑ 27 . 51 / 57.00 ↑ 27 . 23 96.83 ↑ 33 . 06 / 96.83 ↑ 33 . 18 48.33 ↑ 39 . 31 / 47.00 ↑ 38 . 46 49.00 ↑ 36 . 88 / 49.00 ↑ 37 . 80
sensitive information explicitly UltraVoxQwen2-Audio 73.460.83 ↓ ↑ 4329 .. 4716 / 72.67 / 0.83 ↓ ↑ 2842 . 94 . 90 99.6723.67 ↑ ↓ 3540 .. 9010 / 99.33 / 23.17 ↑ ↓ 3540 .. 6848 8.671.33 ↓ ↓ 07 .. 3569 / 8.67 / 0.00 ↑ ↓ 08 .. 1354 1.009.67 ↓ ↓ 112 .. 4512 / 7.33 / 0.00 ↓ ↓ 311 . 87 . 20
stated within the conversational MiniCPM-o 2.6Step Fun 41.500.00 ↓ ↑ 2911 .. 5199 / 41.67 / 0.00 ↓ ↑ 2911 . 77 . 90 98.330.67 ↓ ↑ 3463 .. 1056 / 98.17 / 0.67 ↓ ↑ 6234 . 98 . 52 15.331.33 ↓ ↑ 76 .. 6931 / 0.00 / 14.67 ↓ ↑ 8 . 654 . 13 19.671.00 ↓ ↑ 117 .. 5512 / 17.00 / 0.33 ↓ ↑ 105 .. 8780
content. In this category, the Qwen2.5-Omni 0.00 ↓ 29 . 99 / 0.00 ↓ 29 . 77 1.17 ↓ 62 . 60 / 1.00 ↓ 62 . 65 0.33 ↓ 8 . 69 / 0.00 ↓ 8 . 54 0.00 ↓ 12 . 12 / 0.00 ↓ 11 . 20

Kimi Audio 0.17 ↓ 29 . 82 / 0.17 ↓ 29 . 60 1.00 ↓ 62 . 77 / 1.00 ↓ 62 . 65 15.00 ↑ 5 . 98 / 15.33 ↑ 6 . 79 8.67 ↓ 3 . 45 / 8.67 ↓ 2 . 53

ALLMs might reveal data such OpenS2S 7.68 ↓ 22 . 31 / 7.17 ↓ 22 . 60 43.83 ↓ 19 . 94 / 42.83 ↓ 20 . 82 8.67 ↓ 0 . 35 / 6.87 ↓ 1 . 67 7.33 ↓ 4 . 79 / 7.83 ↓ 3 . 37

|Col1|Closed-source Models|Col3|
|---|---|---|
|Gemini-1.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro|11.85_ ↓18.14 / 12.12 ↓17.65<br>98.50 ↑34.73 / 98.67 ↑35.02<br>92.00 ↑62.01 / 91.83 ↑62.06<br>99.67 ↑35.90 / 99.50 ↑35.85<br>100.00 ↑70.01 / 100.00 ↑70.23<br>100.00 ↑36.23 / 100.00 ↑36.35<br>1.36 ↓28.63 / 0.00 ↓29.77<br>96.44 ↑32.67 / 96.82 ↑33.17<br>33.50 ↑3.51 / 33.33 ↑3.56<br>94.17 ↑30.40 / 94.33 ↑30.68|5.33 ↓3.69 / 6.33 ↓2.21<br>9.33 ↓2.79 / 8.67 ↓2.53<br>6.67 ↓2.35 / 6.33 ↓2.21<br>20.00 ↑7.88 / 17.33 ↑6.13<br>14.00 ↑4.98 / 13.33 ↑4.79<br>40.00 ↑27.88 / 40.00 ↑28.80<br>1.00 ↓8.02 / 1.00 ↓7.54<br>3.33 ↓8.79 / 0.67 ↓10.53<br>0.33 ↓8.69 / 0.00 ↓8.54<br>0.67 ↓11.45 / 0.00 ↓11._20|
|Average|29.99 / 29.77<br>63.77 / 63.65|9.02 / 8.54<br>12.12 / 11.20|


models. (Wang et al., 2023a; Note: Values are shown as GPT-4o / Qwen3 evaluators. Scores are refusal rates (higher is
Huang et al., 2024). (2) Privacy better). "w/o" vs. "w/" compares standard prompting without and with privacy-aware prompt
Inference Leakage, where private engineering.
attributes are inferred from paralinguistic cues rather than the explicit content. Such cues include a
speaker's tone of voice, speech rate, accent, and vocal quality. This risk, which is unique to ALLMs,
involves the model deducing personal attributes from the audio itself, independent of the semantic
content. Consistent with recent studies (Xu et al., 2025a; Feng et al., 2023; Maltezou-Papastylianou
et al., 2025), we treat the systematic inference of demographic attributes (e.g., age, ethnicity) from
voice as a critical privacy leakage. While distinct from unique identity recognition, such profiling
exploits paralinguistic cues to reveal sensitive personal data, which can be aggregated for user
profiling at scale. Therefore, we evaluate demographic inference as a primary dimension of privacy
risk. To evaluate these risks, we constructed two distinct datasets. The first, a direct privacy leakage
set, contains 600 synthetic dialogues. This set was created by first synthesizing privacy information,
then generating the conversations using LLMs, and finally transcribing them into audio. The second,
a privacy inference set, comprises 300 samples. For this set, we used speech from Common Voice
(Ardila et al., 2020) and mixed it with background audio sourced from freesound (Freesound). For a
detailed taxonomy and construction methods, see Appendixes G.1 and G.2.


Evaluation & Metrics. We evaluated our experiment within an Audio Question Answering (AQA)
framework, employing two distinct settings: one utilizing privacy-enhancing prompts and the other
using standard prompts. GPT-4o and Qwen3 serve as the evaluators, assigning scores from 1 to
5 to each response and then the results were checked by human. A score of 1 indicates complete


7


Table 4: Aggregated refusal rates (%) under different evaluators.
Direct: 6 attributes; inference: 3 attributes.


# Open-source Models


SALMONN 57.50 ↑ 27 . 51 / 57.00 ↑ 27 . 23 96.83 ↑ 33 . 06 / 96.83 ↑ 33 . 18 48.33 ↑ 39 . 31 / 47.00 ↑ 38 . 46 49.00 ↑ 36 . 88 / 49.00 ↑ 37 . 80
UltraVox 73.46 ↑ 43 . 47 / 72.67 ↑ 42 . 90 99.67 ↑ 35 . 90 / 99.33 ↑ 35 . 68 8.67 ↓ 0 . 35 / 8.67 ↑ 0 . 13 9.67 ↓ 2 . 45 / 7.33 ↓ 3 . 87
Qwen2-Audio 0.83 ↓ 29 . 16 / 0.83 ↓ 28 . 94 23.67 ↓ 40 . 10 / 23.17 ↓ 40 . 48 1.33 ↓ 7 . 69 / 0.00 ↓ 8 . 54 1.00 ↓ 11 . 12 / 0.00 ↓ 11 . 20
MiniCPM-o 2.6 0.00 ↓ 29 . 99 / 0.00 ↓ 29 . 77 0.67 ↓ 63 . 10 / 0.67 ↓ 62 . 98 1.33 ↓ 7 . 69 / 0.00 ↓ 8 . 54 1.00 ↓ 11 . 12 / 0.33 ↓ 10 . 87
Step Fun 41.50 ↑ 11 . 51 / 41.67 ↑ 11 . 90 98.33 ↑ 34 . 56 / 98.17 ↑ 34 . 52 15.33 ↑ 6 . 31 / 14.67 ↑ 6 . 13 19.67 ↑ 7 . 55 / 17.00 ↑ 5 . 80
Qwen2.5-Omni 0.00 ↓ 29 . 99 / 0.00 ↓ 29 . 77 1.17 ↓ 62 . 60 / 1.00 ↓ 62 . 65 0.33 ↓ 8 . 69 / 0.00 ↓ 8 . 54 0.00 ↓ 12 . 12 / 0.00 ↓ 11 . 20
Kimi Audio 0.17 ↓ 29 . 82 / 0.17 ↓ 29 . 60 1.00 ↓ 62 . 77 / 1.00 ↓ 62 . 65 15.00 ↑ 5 . 98 / 15.33 ↑ 6 . 79 8.67 ↓ 3 . 45 / 8.67 ↓ 2 . 53
OpenS2S 7.68 ↓ 22 . 31 / 7.17 ↓ 22 . 60 43.83 ↓ 19 . 94 / 42.83 ↓ 20 . 82 8.67 ↓ 0 . 35 / 6.87 ↓ 1 . 67 7.33 ↓ 4 . 79 / 7.83 ↓ 3 . 37
Step Audio2 0.00 ↓ 29 . 99 / 0.00 ↓ 29 . 77 38.83 ↓ 24 . 94 / 38.83 ↓ 24 . 82 0.00 ↓ 9 . 02 / 0.00 ↓ 8 . 54 0.00 ↓ 12 . 12 / 0.00 ↓ 11 . 20


Note: Values are shown as GPT-4o / Qwen3 evaluators. Scores are refusal rates (higher is
better). "w/o" vs. "w/" compares standard prompting without and with privacy-aware prompt
engineering.


Published as a conference paper at ICLR 2026


disclosure of private information, while a score of 5 signifies a refusal of the request due to privacy
safety concerns. Our main evaluation metrics are refusal rate and accuracy. A higher refusal rate
indicates stronger privacy protection. Accuracy is calculated only when privacy information is leaked.
Further details on evaluation prompts and evaluation metrics can be found in Appendixes G.3 and
G.4.


Results. We evaluated the privacy protection performance of both open-source and closed-source
ALLMs. The results are shown in Table 4. Our analysis revealed several key observations: (1)
Direct Privacy Leakage : In experiments using the direct privacy leakage dataset, closed-source
ALLMs generally achieved superior results. The GPT-4o series demonstrated the best refusal
rate, reaching 100%. Furthermore, the implementation of privacy-enhancing prompts significantly
improved performance across almost every model, showing approximately a 25% improvement. This
indicates that traditional prompt engineering can effectively enhance privacy protection when sensitive
information is explicitly present in conversation content. (2) Privacy Inference Leakage : Both opensource and closed-source ALLMs performed poorly in addressing privacy inference leakage. They
rarely refused requests for certain types of privacy information, such as age and ethnicity, with the
refusal rate of only 9.02%. Unlike direct privacy leakage, privacy-enhancing prompts had a minimal
impact, yielding only about a 3% improvement. Across all our results, we observed that ALLMs
struggle to process privacy information that is not directly stated in a conversation but rather inferred
from paralinguistic cues. This suggests that ALLMs might not identify such inferred information as
private or requiring protection. This could be due to the training process, where paralinguistic cues
may have been considered less important than conversational content, or because of insufficient data
for this specific type of information. Detailed results accuracy analysis are available in Appendix G.5.


6 AUDIOTRUST: ROBUSTNESS


This section investigates the robustness of ALLMs in maintaining performance against real-world
audio distortions. Unlike in text (Wang et al., 2024b) and vision (Hendrycks & Dietterich), audio
robustness presents unique challenges due to its physical nature. Audio signals are temporal encodings
of acoustic phenomena, with inherent properties like source, medium, and reverberation shaping
complex auditory scenes. A truly robust ALLM must be able to disentangle the primary speech
signal from this acoustic clutter and maintain its performance. This is not simply a matter of better
speech recognition, but a test of the model's fundamental ability to function in imperfect acoustic
environments.


Attack Strategies. We cat
Table 5: Accuracy of ALLMs under different robustness scenarios

egorize robustness challenges

averaged over tasks.

for ALLMs into two primary
types: intentional adversarial Model AR AQV Open-source ModelsBC ES MS NI
attacks (Madry et al., 2021) Qwen2-AudioMiniCPM-o 2.6 7.806.00 ↑ ↓ 10 .. 1763 / 4.85/ 2.95 ↓ ↓ 02 .. 1303 7.183.50 ↓ ↑ 03 .. 2741 / 5.35/ 3.97 ↓ ↓ 02 .. 8119 7.924.33 ↑ ↓ 02 .. 7881 / 7.57/ 6.29 ↑ ↓ 01 .. 1216 7.066.84 ↑ ↓ 00 .. 1804 / 7.98/ 6.23 ↑ ↓ 00 .. 9184 6.505.40 ↑ ↓ 00 .. 6842 / 7.90/ 8.07 ↑ ↑ 00 .. 7390 6.176.60 ↓ ↓ 00 .. 7633 / 5.50/ 4.97 ↓ ↓ 01 .. 7427

SALMONNUltravox 4.002.00 ↓ ↓ 42 .. 6363 / 2.58/ 4.76 ↓ ↓ 20 .. 4022 6.427.53 ↓ ↑ 00 .. 4962 / 5.01/ 6.29 ↓ ↑ 10 .. 1513 4.577.30 ↓ ↑ 20 .. 5716 / 5.59/ 7.94 ↓ ↑ 10 .. 8649 2.946.53 ↓ ↓ 30 .. 9435 / 4.45/ 8.05 ↓ ↑ 20 .. 6298 7.166.70 ↑ ↑ 10 .. 3488 / 5.58/ 8.30 ↓ ↑ 11 .. 5913 6.667.00 ↓ ↑ 00 .. 2707 / 5.63/ 5.93 ↓ ↓ 00 .. 6131

andnomenon of performance degra-dationnaturally(Radfordoccurringet al., 2023phe-). Qwen2.5-OmniStep-FunKimi AudioOpenS2SStep-Audio2 5.005.678.256.188.14 ↓ ↓ ↑ ↓ ↑ 11010 ..... 5163966245 / 5.63/ 4.78/ 4.00/ 3.83/ 4.93 ↑ ↓ ↓ ↓ ↓ 00010 ..... 6520981505 7.107.486.836.466.58 ↑ ↑ ↓ ↓ ↓ 00000 ..... 1957084533 / 6.59/ 6.50/ 5.63/ 4.10/ 6.45 ↑ ↑ ↓ ↓ ↑ 00020 ..... 4334530629 7.508.206.005.177.92 Closed-source Models ↑ ↑ ↓ ↓ ↑ 01110 ..... 3606149778 / 7.93// 5.70/ 6.11/ 7.91 8.36 ↑ ↑ ↓ ↓ ↑ 00110 ..... 4891753446 7.937.426.836.396.82 ↑ ↑ ↓ ↓ ↓ 10000 ..... 0554054906 / 7.94/ 7.46/ 5.00/ 5.15/ 7.61 ↑ ↑ ↓ ↓ ↑ 00210 ..... 8739079254 7.125.897.082.330.00 ↑ ↑ ↑ ↓ ↓ 10135 ..... 3007264982 / 7.28/ 4.97/ 6.41/ 8.92/ 0.12 ↑ ↓ ↓ ↑ ↓ 02017 ..... 1120767505 7.177.086.946.256.78 ↑ ↑ ↑ ↓ ↓ 00000 ..... 2415016815 / 6.03/ 6.86/ 5.98/ 4.85/ 7.25 ↓ ↑ ↓ ↓ ↑ 00011 ..... 2162263901


Gemini-1.5 Pro 8.57 ↑ 1 . 94 / 6.63 ↑ 1 . 65 8.21 ↑ 1 . 30 / 7.89 ↑ 1 . 73 8.23 ↑ 1 . 09 / 8.01 ↑ 0 . 56 8.16 ↑ 1 . 28 / 8.08 ↑ 1 . 01 6.09 ↑ 0 . 27 / 8.39 ↑ 1 . 22 7.43 ↑ 0 . 50 / 7.02 ↑ 0 . 78

Adversarial attacks employ care-fully crafted, imperceptible per- Gemini-2.5 FlashGemini-2.5 ProGPT-4o AudioGPT-4o mini Audio 8.16 8.88 5.908.33 ↑ ↑ ↓ ↑ 1201 .... 53257370 / 6.98// 4.66/ 5.45 7.74 ↑ ↑ ↓ ↑ 2200 .... 00763247 8.38 8.68 5.506.90 ↑ ↑ ↓ ↓ 1110 .... 47774101 / 7.89// 5.33/ 7.09 8.19 ↑ ↑ ↓ ↑ 1200 .... 73038393 8.28 8.50 8.337.69 ↑ ↑ ↑ ↑ 1110 .... 14361955 / 8.14// 8.31/ 8.05 8.36 ↑ ↑ ↑ ↑ 0000 .... 69918660 7.93 8.18 7.316.00 ↑ ↑ ↑ ↓ 1100 .... 05304388 / 7.74/ 7.87/ 7.70/ 7.73 ↑ ↑ ↑ ↑ 0000 .... 67806366 6.367.46 7.62 5.77 ↑ ↑ ↑ ↓ 0110 .... 54648005 / 8.12/ 7.87// 8.53 9.88 ↑ ↑ ↑ ↑ 0021 .... 95707136 7.76 7.716.277.25 ↑ ↑ ↓ ↑ 0000 .... 83786632 / 7.54// 5.91/ 6.30 7.60 ↑ ↑ ↓ ↑ 1100 .... 30363306
turbations to induce model fail- Average 6.63 / 4.98 6.91 / 6.16 7.14 / 7.45 6.88 / 7.07 5.82 / 7.17 6.93 / 6.24
ure (Carlini & Wagner, 2018) De- Note: Values are shown as GPT-4o / Qwen3 evaluators. Subscript is the absolute difference
tails of the creation of additional from the respective column average. Scenarios: AR (Adversarial Robustness), AQV (Audio

Quality Variation), BC (Background Conversation), ES (Environmental Sound), MS (Multiple

interference data can be found in Speakers), NI (Noise Interference).
Section H.2). In contrast, nonadversarial challenges encompass common real-world interferences. We evaluate model robustness
across several key dimensions: (1) adversarial resilience, including three categories: natural noise,
speaker identification, and voice overlap situations (Bredin et al., 2020); (2) robustness to environmental noise (Zhang et al., 2023b) and variations in audio quality. To this end, we constructed
dedicated datasets simulating these interferences. In order to ensure the fluency of natural language
and the logical validity of the original speech, we created the dataset by adding the aforementioned
simulated interference to the introduced big bench audio (Suzgun et al., 2023). Each dimension
contains 40 multilingual and multi-topic samples to ensure a comprehensive assessment. Further
dataset details are available in Sections H.1 and H.2.


Table 5: Accuracy of ALLMs under different robustness scenarios
averaged over tasks.


# Model AR AQV BC ES MS NI


# Open-source Models


Qwen2-AudioSALMONNUltravoxQwen2.5-OmniStep-FunKimi AudioOpenS2SStep-Audio2MiniCPM-o 2.6 7.806.004.005.005.678.256.182.008.14 ↑ ↓ ↓ ↓ ↓ ↓ ↑ ↓ ↑ 104211010 ......... 176363635163966245 / 4.85/ 2.95/ 2.58/ 4.76/ 5.63/ 4.78/ 4.00/ 3.83/ 4.93 ↓ ↓ ↓ ↑ ↓ ↓ ↓ ↓ ↓ 022000010 ......... 130340226520981505 7.183.506.427.537.107.486.836.466.58 ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↓ ↑ 030000000 ......... 274149621957084533 / 5.35/ 3.97/ 5.01/ 6.29/ 6.59/ 6.50/ 5.63/ 4.10/ 6.45 ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↑ ↓ 021000020 ......... 811915134334530629 7.924.334.577.307.508.206.005.177.92 ↑ ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↑ 022001110 ......... 788157163606149778 / 7.57/ 6.29/ 5.59/ 7.94/ 7.93// 5.70/ 6.11/ 7.91 8.36 ↑ ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↑ 011000110 ......... 121686494891753446 7.066.842.946.537.937.426.836.396.82 ↑ ↓ ↓ ↓ ↑ ↑ ↓ ↓ ↓ 003010000 ......... 180494350554054906 / 7.98/ 6.23/ 4.45/ 8.05/ 7.94/ 7.46/ 5.00/ 5.15/ 7.61 ↑ ↓ ↓ ↑ ↑ ↑ ↓ ↓ ↑ 002000210 ......... 918462988739079254 6.505.407.166.707.125.897.082.330.00 ↑ ↓ ↑ ↑ ↑ ↑ ↑ ↓ ↓ 001010135 ......... 684234883007264982 / 7.90/ 8.07/ 5.58/ 8.30/ 7.28/ 4.97/ 6.41/ 8.92/ 0.12 ↑ ↑ ↓ ↑ ↑ ↓ ↓ ↑ ↓ 001102017 ......... 739059131120767505 6.176.606.667.007.177.086.946.256.78 ↓ ↓ ↓ ↑ ↑ ↑ ↑ ↓ ↓ 000000000 ......... 763327072415016815 / 5.50/ 4.97/ 5.63/ 5.93/ 6.03/ 6.86/ 5.98/ 4.85/ 7.25 ↓ ↓ ↓ ↓ ↓ ↑ ↓ ↓ ↑ 010000011 ......... 742761312162263901


# Closed-source Models

Gemini-2.5 FlashGemini-2.5 ProGPT-4o AudioGPT-4o mini AudioGemini-1.5 Pro 8.578.16 8.88 5.908.33 ↑ ↑ ↑ ↓ ↑ 11201 ..... 9453257370 / 6.63/ 6.98// 4.66/ 5.45 7.74 ↑ ↑ ↓ ↑ ↑ 12200 ..... 6500763247 8.218.38 8.68 5.506.90 ↑ ↑ ↓ ↓ ↑ 11110 ..... 3047774101 / 7.89/ 7.89// 5.33/ 7.09 8.19 ↑ ↑ ↓ ↑ ↑ 11200 ..... 7373038393 8.238.28 8.50 8.337.69 ↑ ↑ ↑ ↑ ↑ 11110 ..... 0914361955 / 8.01/ 8.14// 8.31/ 8.05 8.36 ↑ ↑ ↑ ↑ ↑ 00000 ..... 5669918660 8.167.93 8.18 7.316.00 ↑ ↑ ↑ ↑ ↓ 11100 ..... 2805304388 // 7.74/ 7.87/ 7.70/ 7.73 8.08 ↑ ↑ ↑ ↑ ↑ 10000 ..... 0167806366 6.096.367.46 7.62 5.77 ↑ ↑ ↑ ↑ ↓ 00110 ..... 2754648005 / 8.39/ 8.12/ 7.87// 8.53 9.88 ↑ ↑ ↑ ↑ ↑ 10021 ..... 2295707136 7.43 7.76 7.716.277.25 ↑ ↑ ↑ ↓ ↑ 00000 ..... 5083786632 / 7.02/ 7.54// 5.91/ 6.30 7.60 ↑ ↑ ↑ ↓ ↑ 01100 ..... 7830363306


# Closed-source Models


Average 6.63 / 4.98 6.91 / 6.16 7.14 / 7.45 6.88 / 7.07 5.82 / 7.17 6.93 / 6.24


Note: Values are shown as GPT-4o / Qwen3 evaluators. Subscript is the absolute difference
from the respective column average. Scenarios: AR (Adversarial Robustness), AQV (Audio
Quality Variation), BC (Background Conversation), ES (Environmental Sound), MS (Multiple
Speakers), NI (Noise Interference).


8


Published as a conference paper at ICLR 2026


Evaluation & Metrics. Given the challenges in directly measuring robustness or output risk, we
adopt a model-based evaluation using GPT-4o (OpenAI et al., 2024) and Qwen3-based (Yang et al.,
2025a), following recent evidence (Zheng et al., 2023a). Each test output is rated on a discrete
10-point scale, with scoring rubrics tailored per prompt and task: 10 indicates strong consistency with
audio quality, while 0 means perceptual failure or inability to recognize the specified variation. These
scores were then subject to further review by the human evaluators. Prompt templates are detailed in
Section H.3.1. For comprehensive evaluation, we also report two quantitative metrics (Section H.3.2):
CM-WER, measuring dissimilarity between generated and human-annotated transcriptions (Radford
et al., 2023); and Content Consistency Rate (CCR),(e.g., transcribe the voice with added interfering
information through multiple rounds of model dialogue prompts to understand its semantic context,
and then score the transcription against the original voice text content.) assessing factual alignment
between ALLMs outputs and ground-truth audio content (Min et al., 2023).


Results. Our robustness evaluation (Table 5) reveals a significant performance gap between closedand open-source ALLMs. Detailed results are in Section H.3.3. (1) Superior robustness in closed
source models. Such as the closed-source models like Gemini-2.5 Pro,a cross nearly all tested
conditions including background noise, multi-speaker conversations, and audio quality variation
leading closed source systems consistently outperform their open source counterparts. Notably, this
advantage is most apparent under severe acoustic distortion, suggesting that proprietary models
benefit from more mature front-end signal processing and advanced noise suppression architectures.
(2) In contrast, many open-source systems experience a steep decline in transcription accuracy and
semantic coherence when exposed to moderate noise or compression. Their audio encoders often
fail to disentangle source speech from channel artifacts, leading to semantic hallucinations in which
non-speech noise is incorrectly interpreted as meaningful content.


7 AUDIOTRUST: AUTHENTICATION


In this section, we investigate the reliability of ALLMs for authentication. Text-based authentication
relies on semantic secrets like passwords. Audio authentication is more complex because a voice
signal contains both a semantic component (the passphrase) and an acoustic one (the speaker's unique
voiceprint). This dual nature creates a unique attack surface. For example, an attacker could use a
perfect AI-generated voice clone to speak a correct passphrase, defeating systems that rely on either
modality alone. We evaluate how well ALLMs can defend against different impersonation attacks.


Attack Strategies. We devise a taxonomy

Table 6: Overall authentication results of open-source

of authentication attacks that exploit the multi
and closed-source models.

dimensional attributes of audio signals, categorizing them into three primary classes. (1) Identity Model Name IVB HS VCS
Verification Bypass (IVB), which injects strong Open-source Models
emotional cues ( e.g., feigned urgency or distress) UltravoxSALMONN 2695 ↓ ↑ 3929 .. 37 // 26 96 ↓ ↑ 4227 .. 73 577 ↑ ↓ 481 .. 19 / 8/ 57 ↑ ↓ 462 .. 73 28N/A ↑ 17 . 0
to exploit social engineering principles and in- MiniCPM-o 2.6Qwen2-Audio 2442 ↑ ↑ 1331 .. 33 / 39/ 20 ↑ ↑ 1433 .. 77 7143 ↑ ↓ 1215 .. 91 / 71/ 39 ↓ ↑ 1615 .. 37 92.5 79.5 ↓ ↓ 4734 .. 55
duce the model to lower its security thresholds, Step-Fun 79 ↓ 23 . 7 / 79 ↓ 25 . 3 97 ↓ 41 . 9 / 97 ↓ 42 . 3 22 ↑ 23 . 0
and (2) Hybrid Spoofing (HS), this attack con- Qwen2.5-omniKimi-Audio 1979 ↑ ↓ 3623 .. 37 / 19/ 74 ↑ ↓ 3420 .. 73 7664 ↓ ↑ 208 .. 99 / 64/ 76 ↑ ↓ 921 . 3 . 3 12.524.5 ↑ ↑ 3220 .. 55
volves cloned or synthesized speech with back- OpenS2SStep-Audio2 97 37 ↑ ↓ 4118 .. 73 / 93/ 37 ↓ ↑ 3916 .. 37 6615 ↑ ↑ 1040 .. 91 / 65/ 15 ↑ ↑ 1039 .. 37 5051 ↓ ↑ 56 .. 00
ground noise and reverberation characteristic of Open-source Avg. 55.3 / 53.7 55.1 / 54.7 45.0
specific scenes ( e.g., a bustling office). Such at- Closed-source Models
tacks challenge the model's robustness in source Gemini-1.5 pro 96 ↑ 1 . 2 / 96 ↑ 1 . 2 95 ↑ 2 . 0 / 95 ↑ 2 . 0 33.5 ↓ 11 . 4
separation and noise suppression, and more criti- GPT-4o AudioGPT-4o mini Audio 100 98 ↑ ↑ 02 .. 88 / 98/ 100 ↑ ↑ 0 . 28 . 8 100100 ↑ ↑ 33 .. 00 // 100 100 ↑ ↑ 33 .. 00 83.5 86 ↑ ↑ 4138 . 1 . 6
cally, its ability to jointly reason about the logical Gemini-2.5 Flash 97 ↑ 0 . 2 / 97 ↑ 0 . 2 93 ↓ 4 . 0 / 93 ↓ 4 . 0 11 ↓ 33 . 9
consistency between the purported speaker iden- Closed-source Avg. Gemini-2.5-Pro 95 ↓ 97.2 / 97.22 . 2 / 95 ↓ 2 . 2 97 ↑ 97.0 / 97.00 . 0 / 97 ↑ 0 . 0 10.544.9 ↓ 34 . 4
tity and their acoustic context. (3) Voice Cloning
Spoofing (VCS), which employs advanced speech Note: tor / Qwen3 evaluator.Values in IVB and HS columns are shown as GPT-4o evalua-SALMONN consistently disregarded prompt
synthesis ( e.g., F5-TTS (Chen et al., 2025)) to gen- instructions by outputting audio descriptions, which prevented oberate highly realistic cloned voices saying a correct taining valid results for voice cloning spoofing. For authentication

metrics, higher values indicate better security (more successful de
passphrase, thereby testing the model's sensitivity fenses against attacks). The VCS component was not assessed by
to subtle physical traits in the vocal fingerprint. large language model evaluators.
This taxonomy moves beyond traditional spoofing distinctions to directly probe ALLMs' intrinsic
vulnerabilities in processing complex auditory signals. Based on this framework, we constructed a
400-sample evaluation dataset (details in Sections I.1 and I.2).


Table 6: Overall authentication results of open-source
and closed-source models.


# Model Name IVB HS VCS


# Open-source Models


SALMONN 26 ↑ 29 . 3 / 26 ↑ 27 . 7 7 ↑ 48 . 1 / 8 ↑ 46 . 7 N/A
Ultravox 95 ↓ 39 . 7 / 96 ↓ 42 . 3 57 ↓ 1 . 9 / 57 ↓ 2 . 3 28 ↑ 17 . 0
Qwen2-Audio 42 ↑ 13 . 3 / 39 ↑ 14 . 7 71 ↓ 15 . 9 / 71 ↓ 16 . 3 92.5 ↓ 47 . 5
MiniCPM-o 2.6 24 ↑ 31 . 3 / 20 ↑ 33 . 7 43 ↑ 12 . 1 / 39 ↑ 15 . 7 79.5 ↓ 34 . 5
Step-Fun 79 ↓ 23 . 7 / 79 ↓ 25 . 3 97 ↓ 41 . 9 / 97 ↓ 42 . 3 22 ↑ 23 . 0
Qwen2.5-omni 19 ↑ 36 . 3 / 19 ↑ 34 . 7 64 ↑ 8 . 9 / 64 ↑ 9 . 3 12.5 ↑ 32 . 5
Kimi-Audio 79 ↓ 23 . 7 / 74 ↓ 20 . 3 76 ↓ 20 . 9 / 76 ↓ 21 . 3 24.5 ↑ 20 . 5
OpenS2S 97 ↓ 41 . 7 / 93 ↓ 39 . 3 66 ↑ 10 . 9 / 65 ↑ 10 . 3 50 ↓ 5 . 0
Step-Audio2 37 ↑ 18 . 3 / 37 ↑ 16 . 7 15 ↑ 40 . 1 / 15 ↑ 39 . 7 51 ↑ 6 . 0


Open-source Avg. 55.3 / 53.7 55.1 / 54.7 45.0


# Closed-source Models


Gemini-1.5 pro 96 ↑ 1 . 2 / 96 ↑ 1 . 2 95 ↑ 2 . 0 / 95 ↑ 2 . 0 33.5 ↓ 11 . 4
GPT-4o Audio 98 ↑ 0 . 8 / 98 ↑ 0 . 8 100 ↑ 3 . 0 / 100 ↑ 3 . 0 83.5 ↑ 38 . 6
GPT-4o mini Audio 100 ↑ 2 . 8 / 100 ↑ 2 . 8 100 ↑ 3 . 0 / 100 ↑ 3 . 0 86 ↑ 41 . 1
Gemini-2.5 Flash 97 ↑ 0 . 2 / 97 ↑ 0 . 2 93 ↓ 4 . 0 / 93 ↓ 4 . 0 11 ↓ 33 . 9
Gemini-2.5-Pro 95 ↓ 2 . 2 / 95 ↓ 2 . 2 97 ↑ 0 . 0 / 97 ↑ 0 . 0 10.5 ↓ 34 . 4


Closed-source Avg. 97.2 / 97.2 97.0 / 97.0 44.9


Note: Values in IVB and HS columns are shown as GPT-4o evaluator / Qwen3 evaluator. SALMONN consistently disregarded prompt
instructions by outputting audio descriptions, which prevented obtaining valid results for voice cloning spoofing. For authentication
metrics, higher values indicate better security (more successful defenses against attacks). The VCS component was not assessed by
large language model evaluators.


9


Published as a conference paper at ICLR 2026


Evaluation and Metrics. Our evaluation framework is designed to comprehensively assess the
robustness of models under different attack scenarios. Imposter Rejection Rate (IRR) is defined
as the proportion of impostor voices that are correctly rejected by the system, which will serve as
the privacy metric for all attack scenarios. GPT-4o and Qwen3 will be our main evaluator, used to
verify if ALLMs deny attacker requests. Human evaluators will review GPT-4o's outputs before
computing the final IRR. In the HS scenario, where the model must handle both identity spoofing
and environmental interference, the IRR serves as the primary performance indicator. A success is
recorded only when the model correctly rejects a forged input,such as refusing to acknowledge an
identity confirmation request or denying access. Further details on the evaluation are provided in
Section I.3 and I.4.


Results. In Table 6, We evaluate both open- and closed-source ALLMs on our benchmark. We report
IRR for the authentication task. Several key observations emerge: (1) Our findings in the IVB and
HS settings reveal a critical attack vector absent in text-only systems: non-semantic features. We
observed that the average IRR for open-source models was 55.3% in IVB settings, but slightly higher
at 55.1% in HS settings. These settings differ considerably in paralinguistic features. The HS setting,
for example, includes background audio and other speakers' voices, both common elements in social
engineering attacks conveyed through audio. This suggests that paralinguistic cues have limited
influence on successful authentication by attackers. (2) In the VCS tests, we observe substantial
performance discrepancies across models, with the Gemini family exhibiting comparatively weaker
defenses. Interestingly, we find that simply increasing the strictness of system prompts consistently
improves resilience against spoofing attacks across all systems. This suggests that in downstream
ALLM applications, carefully crafted system prompts provide an efficient means of strengthening
authentication security. Further details can be found in Section I.5.


8 CONCLUSIONS
This paper introduces AudioTrust, the first comprehensive benchmark framework for reliability
assessment specifically designed for ALLMs. Unlike prior evaluations targeting text-based LLMs,
AudioTrust places particular emphasis on the unique characteristics of the audio modality and the
novel security challenges it entails. The framework systematically spans six key dimensions: fairness,
hallucination, safety, privacy, robustness, and authentication, and also includes audio-specific risks
into the design space and threat modeling. To ensure broad coverage, AudioTrust constructs a
large-scale audio dataset that reflects a wide range of complex conditions. Also, we develop dedicated
metrics to assess these risks, integrated with an automated pipeline powered by GPT-4o, enabling
scalable evaluation. Our experimental results demonstrate that both open-source and closed-source
ALLMs exhibit pronounced limitations when faced with high-risk challenges unique to the audio
domain. Beyond these empirical findings, AudioTrust offers actionable insights for researchers.
It defines the reliability boundaries of current ALLMs in real-world audio scenarios and lays a
foundation for future work on trustworthy model design. We have publicly released our framework
and evaluation platform to foster broader community-driven research in this critical area.


ACKNOWLEDGMENTS


This research was supported by the National Research Foundation, Singapore, and the Cyber Security
Agency of Singapore under the National Cybersecurity R&D Programme and the CyberSG R&D
Programme Office (Award CRPO-GC3-NTU-001), NTU-NAP startup grant (024584-00001), NTU
startup funding (025559-00001), and the Singapore Ministry of Education Tier 1 Grant (RG19/25).
The authors from Tsinghua University are partially supported by the National Natural Science
Foundation of China (No. U2341228).


Any opinions, findings, conclusions, or recommendations expressed in these materials are those of
the author(s) and do not reflect the views of the National Research Foundation, Singapore, the Cyber
Security Agency of Singapore, or the CyberSG R&D Programme Office.


REPRODUCIBILITY STATEMENT


To ensure the reproducibility of our work, we release all related code, dataset metadata, and detailed
experimental configurations. Our evaluation framework AudioTrust, the automated evaluation scripts,
and the leaderboard generation code are hosted in an GitHub repository: https://github.com/
JusperLee/AudioTrust. Appendix C describes the decoupled two-stage architecture (inference


10


Published as a conference paper at ICLR 2026


and evaluation) of our platform, which provides guidance for reproducing our evaluation pipeline.
Throughout the main paper (Sections 2-7), we explicitly indicate the corresponding appendix sections.
Specifically, Appendices D through I present detailed treatments of six evaluation dimensions:
fairness, hallucination, safety, privacy, robustness, and verification, which cover attack strategies,
dataset construction, evaluation protocols, and the metrics employed. For instance, Appendices D.1
and D.2 describe the dataset construction process for fairness evaluation, while Appendices E.3.1 and
E.3.2 explain the details of the metrics for hallucination evaluation. We believe that the public release
of these resources will facilitate both reproducibility and extension of our study by the community.


ETHICAL STATEMENT


Our work adheres to the ICLR Code of Ethics. The primary objective of this research is to foster the
development of more trustworthy, secure, and equitable Audio Large Language Models (ALLMs) by
providing a comprehensive evaluation framework, AudioTrust. We aim to identify and understand
the potential risks within these models, thereby guiding the community toward building safer and
more reliable AI systems. Ethical considerations have been carefully addressed at every stage of our
research, from dataset creation to the potential impact of our findings.


Dataset Curation and Human Participants All data used in the AudioTrust benchmark was
curated with strict ethical considerations. The majority of samples are synthetically generated (e.g.,
via text-to-speech systems and large language models) or drawn from publicly available datasets
with permissive research licenses (e.g., Common Voice and freesound). No real personal or private
information was included; sensitive content such as account numbers was generated synthetically
to evaluate information-leakage risks. Annotations regarding attributes such as gender, accent, and
age were taken from public datasets or inferred only when necessary, and were used solely to study
potential biases. Human annotators were involved exclusively for quality control tasks (e.g., checking
transcription accuracy), without collection of personal data or interventions, and thus this study does
not constitute research involving human subjects.


Potential Misuse and Dual Use Concerns Our research, by its nature, reveals vulnerabilities in
current ALLMs concerning safety, privacy, robustness, and authentication. We recognize that while
the methods and scenarios within AudioTrust are designed for evaluation, they could theoretically be
adapted by malicious actors to develop more effective attacks. We systematically explore strategies
for jailbreaking, audio based social engineering, and spoofing authentication systems. Disclosing
these vulnerabilities is a double edged sword. We believe that the benefit of transparently presenting
these risks to the research community through a benchmark far outweighs the risk of misuse. By
establishing a public benchmark, we enable developers, both open source and proprietary, to test,
fortify, and improve their models against these specific threats. Our objective is to catalyze defensive
research and promote the adoption of robust safety alignment. The purpose of our public release is to
accelerate this positive feedback loop, leading to safer ALLMs for everyone.


REFERENCES


Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman,
Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al. Gpt-4 technical report.
arXiv preprint arXiv:2303.08774, 2023.


Fixie AI. Ultravox: An open source framework for conversational voice agents. https://github.
com/fixie-ai/ultravox, 2024. Accessed: 2025-05-11.


Jean-Baptiste Alayrac, Jeff Donahue, Pauline Luc, Antoine Miech, Iain Barr, Yana Hasson, Karel
Lenc, Arthur Mensch, Katherine Millican, Malcolm Reynolds, et al. Flamingo: a visual language
model for few-shot learning. Advances in neural information processing systems, 35:23716-23736,
2022.


R. Ardila, M. Branson, K. Davis, M. Henretty, M. Kohler, J. Meyer, R. Morais, L. Saunders, F. M.
Tyers, and G. Weber. Common voice: A massively-multilingual speech corpus. In Proceedings of
the 12th Conference on Language Resources and Evaluation (LREC 2020), pp. 4211-4215, 2020.


11


Published as a conference paper at ICLR 2026


Sourav Banerjee, Ayushi Agarwal, and Promila Ghosh. High-precision medical speech recognition
through synthetic data and semantic correction: United-medasr. arXiv preprint arXiv:2412.00055,
2024.


Emanuele Bastianelli, Andrea Vanzo, Pawel Swietojanski, and Verena Rieser. SLURP: A spoken
language understanding resource package. In Proceedings of the 2020 Conference on Empirical
Methods in Natural Language Processing (EMNLP), pp. 7252-7262, 2020.


Jacob Benesty, Shoji Makino, and Jingdong Chen. Speech enhancement . Springer Science & Business
Media, 2006.


Herve Bredin, Ruiqing Yin, Juan Manuel Coria, Gregory Gelly, Pavel Korshunov, Marvin Lavechin,
Diego Fustes, Hadrien Titeux, Wassim Bouaziz, and Marie-Philippe Gill. Pyannote. audio: neural
building blocks for speaker diarization. In ICASSP 2020-2020 IEEE International conference on
acoustics, speech and signal processing (ICASSP), pp. 7124-7128. IEEE, 2020.


Hongye Cao, Yanming Wang, Sijia Jing, Ziyue Peng, Zhixin Bai, Zhe Cao, Meng Fang, Fan Feng,
Boyan Wang, Jiaheng Liu, et al. Safedialbench: A fine-grained safety benchmark for large language
models in multi-turn dialogues with diverse jailbreak attacks. arXiv preprint arXiv:2502.11090,
2025.


Nicholas Carlini and David Wagner. Audio adversarial examples: Targeted attacks on speech-to-text.
In 2018 IEEE security and privacy workshops (SPW), pp. 1-7. IEEE, 2018.


Sihan Chen, Xingjian He, Longteng Guo, Xinxin Zhu, Weining Wang, Jinhui Tang, and Jing Liu.
Valor: Vision-audio-language omni-perception pretraining model and dataset. arXiv preprint
arXiv:2304.08345, 2023.


Yushen Chen, Zhikang Niu, Ziyang Ma, Keqi Deng, Chunhui Wang, JianZhao JianZhao, Kai Yu,
and Xie Chen. F5-tts: A fairytaler that fakes fluent and faithful speech with flow matching. In
Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume
1: Long Papers), pp. 6255-6271, 2025.


Jaemin Cho, Abhay Zala, and Mohit Bansal. Dall-eval: Probing the reasoning skills and social biases
of text-to-image generation models. In Proceedings of the IEEE/CVF international conference on
computer vision, pp. 3043-3054, 2023.


Yunfei Chu, Jin Xu, Qian Yang, Haojie Wei, Xipin Wei, Zhifang Guo, Yichong Leng, Yuanjun Lv,
Jinzheng He, Junyang Lin, et al. Qwen2-audio technical report. arXiv preprint arXiv:2407.10759,
2024.


Yashar Deldjoo and Fatemeh Nazary. A normative framework for benchmarking consumer fairness in
large language model recommender system, 2024. URL https://arxiv.org/abs/2405.
02219.


Soham Deshmukh, Benjamin Elizalde, Rita Singh, and Huaming Wang. Pengi: An audio language
model for audio tasks. Advances in Neural Information Processing Systems, 36:18090-18108,
2023.


Ding Ding, Zeqian Ju, Yichong Leng, Songxiang Liu, Tong Liu, Zeyu Shang, Kai Shen, Wei Song,
Xu Tan, Heyi Tang, et al. Kimi-audio technical report. arXiv preprint arXiv:2504.18425, 2025.


Konstantinos Drossos, Samuel Lipping, and Tuomas Virtanen. Clotho: An audio captioning dataset.
In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing
(ICASSP), pp. 736-740. IEEE, 2020.


Zhihao Du, Jiaming Wang, Qian Chen, Yunfei Chu, Zhifu Gao, Zerui Li, Kai Hu, Xiaohuan Zhou, Jin
Xu, Ziyang Ma, et al. Lauragpt: Listen, attend, understand, and regenerate audio with gpt. arXiv
preprint arXiv:2310.04673, 2023.


Tiantian Feng, Rajat Hebbar, Nicholas Mehlman, Xuan Shi, Aditya Kommineni, Shrikanth Narayanan,
et al. A review of speech-centric trustworthy machine learning: Privacy, safety, and fairness.
APSIPA Transactions on Signal and Information Processing, 12(3), 2023.


12


Published as a conference paper at ICLR 2026


Freesound. Freesound. URL https://freesound.org/.


Rohit Girdhar, Alaaeldin El-Nouby, Zhuang Liu, Mannat Singh, Kalyan Vasudev Alwala, Armand
Joulin, and Ishan Misra. Imagebind: One embedding space to bind them all. In Proceedings of the
IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 15180-15190,
June 2023.


Muhammad Usman Hadi, Rizwan Qureshi, Abbas Shah, Muhammad Irfan, Anas Zafar, Muhammad Bilal Shaikh, Naveed Akhtar, Jia Wu, Seyedali Mirjalili, et al. A survey on large language
models: Applications, challenges, limitations, and practical usage. Authorea Preprints, 3, 2023.


Luxi He, Xiangyu Qi, Michel Liao, Inyoung Cheong, Prateek Mittal, Danqi Chen, and Peter Henderson. The deployment of end-to-end audio language models should take into account the principle
of least privilege. arXiv preprint arXiv:2503.16833, 2025.


Ruiwen He, Xiaoyu Ji, Xinfeng Li, Yushi Cheng, and Wenyuan Xu. " ok, siri" or" hey, google": Evaluating voiceprint distinctiveness via content-based prole score. In USENIX Security Symposium,
pp. 1131-1148, 2022.


Dan Hendrycks and Thomas Dietterich. Benchmarking neural network robustness to common
corruptions and perturbations. In International Conference on Learning Representations .


Yusuke Hirota, Yuta Nakashima, and Noa Garcia. Model-agnostic gender debiased image captioning.
In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp.
15191-15200, 2023.


Hongsheng Hu, Zoran Salcic, Lichao Sun, Gillian Dobbie, Philip S Yu, and Xuyun Zhang. Membership inference attacks on machine learning: A survey. ACM Computing Surveys (CSUR), 54(11s):
1-37, 2022.


Shujie Hu, Long Zhou, Shujie Liu, Sanyuan Chen, Lingwei Meng, Hongkun Hao, Jing Pan, Xunying
Liu, Jinyu Li, Sunit Sivasankaran, et al. Wavllm: Towards robust and adaptive speech large
language model. In Findings of the Association for Computational Linguistics: EMNLP 2024, pp.
4552-4572, 2024.


Ailin Huang, Boyong Wu, Bruce Wang, Chao Yan, Chen Hu, Chengli Feng, Fei Tian, Feiyu Shen,
Jingbei Li, Mingrui Chen, et al. Step-audio: Unified understanding and generation in intelligent
speech interaction. arXiv preprint arXiv:2502.11946, 2025.


Yue Huang, Lichao Sun, Haoran Wang, Siyuan Wu, Qihui Zhang, Yuan Li, Chujie Gao, Yixin Huang,
Wenhan Lyu, Yixuan Zhang, et al. Position: Trustllm: Trustworthiness in large language models.
In Forty-first International Conference on Machine Learning, 2024.


Ziwei Ji, Nayeon Lee, Rita Frieske, Tiezheng Yu, Dan Su, Yan Xu, Etsuko Ishii, Ye Jin Bang,
Andrea Madotto, and Pascale Fung. Survey of hallucination in natural language generation. ACM
computing surveys, 55(12):1-38, 2023.


Mintong Kang, Chejian Xu, and Bo Li. Advwave: Stealthy adversarial jailbreak attack against large
audio-language models. In The Thirteenth International Conference on Learning Representations,
2025.


Chris Dongjoo Kim, Byeongchang Kim, Hyunmin Lee, and Gunhee Kim. Audiocaps: Generating
captions for audios in the wild. In Proceedings of the 2019 Conference of the North American
Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume
1 (Long and Short Papers), pp. 119-132, 2019.


Junyi Li, Xiaoxue Cheng, Wayne Xin Zhao, Jian-Yun Nie, and Ji-Rong Wen. Halueval: A large-scale
hallucination evaluation benchmark for large language models. arXiv preprint arXiv:2305.11747,
2023a.


Qizhang Li, Xiaochen Yang, Wangmeng Zuo, and Yiwen Guo. Deciphering the chaos: Enhancing
jailbreak attacks via adversarial prompt translation, 2025. URL https://arxiv.org/abs/
2410.11317.


13


Published as a conference paper at ICLR 2026


Xinfeng Li, Xiaoyu Ji, Chen Yan, Chaohao Li, Yichen Li, Zhenning Zhang, and Wenyuan Xu.
Learning normality is enough: A software-based mitigation against inaudible voice attacks. In
32nd USENIX Security Symposium (USENIX Security 23), pp. 2455-2472, 2023b.


Xinfeng Li, Junning Ze, Chen Yan, Yushi Cheng, Xiaoyu Ji, and Wenyuan Xu. Enrollment-stage
backdoor attacks on speaker recognition systems via adversarial ultrasound. IEEE Internet of
Things Journal, 2023c.


Xinfeng Li, Kai Li, Yifan Zheng, Chen Yan, Xiaoyu Ji, and Wenyuan Xu. Safeear: Content privacypreserving audio deepfake detection. In Proceedings of the 2024 on ACM SIGSAC Conference on
Computer and Communications Security, pp. 3585-3599, 2024a.


Xinfeng Li, Chen Yan, Xuancun Lu, Zihan Zeng, Xiaoyu Ji, and Wenyuan Xu. Inaudible adversarial
perturbation: Manipulating the recognition of user speech in real time. In In the 31st Annual
Network and Distributed System Security Symposium (NDSS), 2024b.


Samuel Lipping, Parthasaarathy Sudarsanam, Konstantinos Drossos, and Tuomas Virtanen. Clothoaqa: A crowdsourced dataset for audio question answering. In 2022 30th European Signal
Processing Conference (EUSIPCO), pp. 1140-1144. IEEE, 2022.


Bang Liu, Xinfeng Li, Jiayi Zhang, Jinlin Wang, Tanjin He, Sirui Hong, Hongzhang Liu, Shaokun
Zhang, Kaitao Song, Kunlun Zhu, et al. Advances and challenges in foundation agents: From
brain-inspired intelligence to evolutionary, collaborative, and safe systems. arXiv preprint
arXiv:2504.01990, 2025.


Xin Liu, Yichen Zhu, Jindong Gu, Yunshi Lan, Chao Yang, and Yu Qiao. Mm-safetybench: A
benchmark for safety evaluation of multimodal large language models. In European Conference
on Computer Vision, pp. 386-403. Springer, 2024.


Yi Liu, Gelei Deng, Zhengzi Xu, Yuekang Li, Yaowen Zheng, Ying Zhang, Lida Zhao, Tianwei
Zhang, Kailong Wang, and Yang Liu. Jailbreaking chatgpt via prompt engineering: An empirical
study. arXiv preprint arXiv:2305.13860, 2023.


Weikai Lu, Hao Peng, Huiping Zhuang, Cen Chen, and Ziqian Zeng. SEA: Low-resource safety
alignment for multimodal large language models via synthetic embeddings. In Proceedings of the
63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
pp. 24894-24913, 2025.


Xuancun Lu, Zhengxian Huang, Xinfeng Li, Xiaoyu Ji, and Wenyuan Xu. Poex: Policy executable
embodied AI jailbreak attacks. arXiv preprint arXiv:2412.16633, 2024.


Weidi Luo, Tianyu Lu, Qiming Zhang, Xiaogeng Liu, Bin Hu, Yue Zhao, Jieyu Zhao, Song Gao,
Patrick McDaniel, Zhen Xiang, et al. Doxing via the lens: Revealing location-related privacy
leakage on multi-modal large reasoning models. arXiv preprint arXiv:2504.19373, 2025.


Ziyang Ma, Xiquan Li, Yakun Song, Wenxi Chen, Chenpeng Du, Jian Wu, Yuanzhe Chen, Zhuo
Chen, Yuping Wang, Yuxuan Wang, et al. Towards reliable large audio language model. Findings
of the Annual Meeting of the Association for Computational Linguistics, 2025.


Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri
Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, et al. Self-refine: Iterative refinement
with self-feedback. Advances in Neural Information Processing Systems, 36:46534-46594, 2023.


Aleksander Madry, Aleksandar Makelov, Ludwig Schmidt, Dimitris Tsipras, and Adrian Vladu.
Towards deep learning models resistant to adversarial attacks. 2021.


Mishaim Malik, Muhammad Kamran Malik, Khawar Mehmood, and Imran Makhdoom. Automatic
speech recognition: a survey. Multimedia Tools and Applications, 80:9411-9457, 2021.


Constantina Maltezou-Papastylianou, Reinhold Scherer, and Silke Paulmann. Human voices communicating trustworthy intent: A demographically diverse speech audio dataset. Scientific Data, 12
(1):921, 2025. doi: 10.1038/s41597-025-05267-3.


14


Published as a conference paper at ICLR 2026


Sewon Min, Kalpesh Krishna, Xinxi Lyu, Mike Lewis, Wen-tau Yih, Pang Wei Koh, Mohit Iyyer,
Luke Zettlemoyer, and Hannaneh Hajishirzi. Factscore: Fine-grained atomic evaluation of factual
precision in long form text generation. arXiv preprint arXiv:2305.14251, 2023.


Yichuan Mo, Yuji Wang, Zeming Wei, and Yisen Wang. Fight back against jailbreaking via prompt
adversarial tuning. Advances in Neural Information Processing Systems, 37:64242-64272, 2024.


Seyed Hamidreza Mohammadi and Alexander Kain. An overview of voice conversion systems.
Speech Communication, 88:65-82, 2017.


Nikita Nangia, Clara Vania, Rasika Bhalerao, and Samuel Bowman. Crows-pairs: A challenge dataset
for measuring social biases in masked language models. In Proceedings of the 2020 conference on
empirical methods in natural language processing (EMNLP), pp. 1953-1967, 2020.


OpenAI, Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni
Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, Red Avila, et al.
Gpt-4 technical report, 2024. URL https://arxiv.org/abs/2303.08774.


Sheng Ouyang, Yulan Hu, Ge Chen, Qingyang Li, Fuzheng Zhang, and Yong Liu. Towards reward
fairness in rlhf: From a resource allocation perspective. arXiv preprint arXiv:2505.23349, 2025.


Alicia Parrish, Angelica Chen, Nikita Nangia, Vishakh Padmakumar, Jason Phang, Jana Thompson,
Phu Mon Htut, and Samuel Bowman. Bbq: A hand-built bias benchmark for question answering.
In Findings of the Association for Computational Linguistics: ACL 2022, pp. 2086-2105, 2022.


Jing Peng, Yucheng Wang, Yu Xi, Xu Li, Xizhuo Zhang, and Kai Yu. A survey on speech large
language models. arXiv preprint arXiv:2410.18908, 2024.


Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal,
Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, et al. Learning transferable visual
models from natural language supervision. In International conference on machine learning, pp.
8748-8763. PmLR, 2021.


Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, and Ilya Sutskever.
Robust speech recognition via large-scale weak supervision. In International conference on
machine learning, pp. 28492-28518. PMLR, 2023.


Paul Jasmin Rani, Jason Bakthakumar, B Praveen Kumaar, U Praveen Kumaar, and Santhosh Kumar.
Voice controlled home automation system using natural language processing (nlp) and internet
of things (iot). In 2017 Third international conference on science technology engineering &
management (ICONSTEM), pp. 368-373. IEEE, 2017.


Paul K. Rubenstein, Chulayuth Asawaroengchai, Duc Dung Nguyen, Ankur Bapna, Zalan Borsos,
Felix de Chaumont Quitry, Peter Chen, Dalia El Badawy, Wei Han, Eugene Kharitonov, Hannah
Muckenhirn, Dirk Padfield, James Qin, Danny Rozenberg, Tara Sainath, Johan Schalkwyk, Matt
Sharifi, Michelle Tadmor Ramanovich, Marco Tagliasacchi, Alexandru Tudor, Mihajlo Velimirovi c,
Damien Vincent, Jiahui Yu, Yongqiang Wang, Vicky Zayats, Neil Zeghidour, Yu Zhang, Zhishuai
Zhang, Lukas Zilka, and Christian Frank. Audiopalm: A large language model that can speak and
listen, 2023.


Suwon Shon, Siddhant Arora, Chyi-Jiunn Lin, Ankita Pasad, Felix Wu, Roshan Sharma, Wei-Lun
Wu, Hung-yi Lee, Karen Livescu, and Shinji Watanabe. SLUE phase-2: A benchmark suite of
diverse spoken language understanding tasks. In Proceedings of the 61st Annual Meeting of the
Association for Computational Linguistics (Volume 1: Long Papers), pp. 8906-8937, 2023.


Gaurang Sriramanan, Siddhant Bharti, Vinu Sankar Sadasivan, Shoumik Saha, Priyatham Kattakinda,
and Soheil Feizi. Llm-check: Investigating detection of hallucinations in large language models.
In Advances in Neural Information Processing Systems, volume 37, pp. 34188-34216, 2024.


Aarohi Srivastava, Abhinav Rastogi, Abhishek Rao, Abu Awal Md Shoeb, Abubakar Abid, Adam
Fisch, Adam R Brown, Adam Santoro, Aditya Gupta, Adria Garriga-Alonso, et al. Beyond the
imitation game: Quantifying and extrapolating the capabilities of language models. arXiv preprint
arXiv:2206.04615, 2022.


15


Published as a conference paper at ICLR 2026


Mirac Suzgun, Nathan Scales, Nathanael Scharli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung,
Aakanksha Chowdhery, Quoc V Le, Ed H Chi, Denny Zhou, et al. Challenging big-bench tasks
and whether chain-of-thought can solve them. 2023.


Sijun Tan, Siyuan Zhuang, Kyle Montgomery, William Yuan Tang, Alejandro Cuadron, Chenguang
Wang, Raluca Popa, and Ion Stoica. Judgebench: A benchmark for evaluating llm-based judges.
In The Thirteenth International Conference on Learning Representations, 2025.


Changli Tang, Wenyi Yu, Guangzhi Sun, Xianzhao Chen, Tian Tan, Wei Li, Lu Lu, Zejun MA, and
Chao Zhang. SALMONN: Towards generic hearing abilities for large language models. In The
Twelfth International Conference on Learning Representations, 2024.


Gemini Team, Rohan Anil, Sebastian Borgeaud, Jean-Baptiste Alayrac, Jiahui Yu, Radu Soricut,
Johan Schalkwyk, Andrew M Dai, Anja Hauth, Katie Millican, et al. Gemini: a family of highly
capable multimodal models. arXiv preprint arXiv:2312.11805, 2023.


Natalia Tomashenko, Xiaoxiao Miao, Pierre Champion, Sarina Meyer, Xin Wang, Emmanuel Vincent, Michele Panariello, Nicholas Evans, Junichi Yamagishi, and Massimiliano Todisco. The
voiceprivacy 2024 challenge evaluation plan. arXiv preprint arXiv:2404.02677, 2024.


Hsiang-Sheng Tsai, Heng-Jui Chang, Wen-Chin Huang, Zili Huang, Kushal Lakhotia, Shu-wen Yang,
Shuyan Dong, Andy Liu, Cheng-I Lai, Jiatong Shi, et al. Superb-sg: Enhanced speech processing
universal performance benchmark for semantic and generative capabilities. In Proceedings of the
60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
pp. 8479-8492, 2022.


Wolfgang Wahlster. Verbmobil: foundations of speech-to-speech translation . Springer Science &
Business Media, 2013.


Yixin Wan, Arjun Subramonian, Anaelia Ovalle, Zongyu Lin, Ashima Suvarna, Christina Chance,
Hritik Bansal, Rebecca Pattichis, and Kai-Wei Chang. Survey of bias in text-to-image generation:
Definition, evaluation, and mitigation. arXiv preprint arXiv:2404.01030, 2024.


Boxin Wang, Weixin Chen, Hengzhi Pei, Chulin Xie, Mintong Kang, Chenhui Zhang, Chejian Xu,
Zidi Xiong, Ritik Dutta, Rylan Schaeffer, et al. Decodingtrust: A comprehensive assessment of
trustworthiness in gpt models. In NeurIPS, 2023a.


Chen Wang, Tianyu Peng, Wen Yang, Yinan Bai, Guangfu Wang, Jun Lin, Lanpeng Jia, Lingxiang
Wu, Jinqiao Wang, Chengqing Zong, et al. Opens2s: Advancing fully open-source end-to-end
empathetic large speech language model. arXiv preprint arXiv:2507.05177, 2025a.


Chunhui Wang, Chang Zeng, Bowen Zhang, Ziyang Ma, Yefan Zhu, Zifeng Cai, Jian Zhao, Zhonglin
Jiang, and Yong Chen. Ham-tts: Hierarchical acoustic modeling for token-based zero-shot text-tospeech with model and data scaling. arXiv preprint arXiv:2403.05989, 2024a.


DeLiang Wang and Jitong Chen. Supervised speech separation based on deep learning: An overview.
IEEE/ACM transactions on audio, speech, and language processing, 26(10):1702-1726, 2018.


Jindong Wang, Xixu Hu, Wenxin Hou, Hao Chen, Runkai Zheng, Yidong Wang, Linyi Yang, Wei
Ye, Haojun Huang, Xiubo Geng, et al. On the robustness of chatgpt: An adversarial and out-ofdistribution perspective. IEEE Data Eng. Bull., 2024b.


Lixu Wang, Kaixiang Yao, Xinfeng Li, Dong Yang, Haoyang Li, Xiaofeng Wang, and Wei Dong.
The man behind the sound: Demystifying audio private attribute profiling via multimodal large
language model agents. arXiv preprint arXiv:2507.10016, 2025b.


Song Wang, Peng Wang, Tong Zhou, Yushun Dong, Zhen Tan, and Jundong Li. Ceb: Compositional
evaluation benchmark for fairness in large language models. In The Thirteenth International
Conference on Learning Representations, 2025c.


Yuxia Wang, Haonan Li, Xudong Han, Preslav Nakov, and Timothy Baldwin. Do-not-answer: A
dataset for evaluating safeguards in llms, 2023b. URL https://arxiv.org/abs/2308.
13387.


16


Published as a conference paper at ICLR 2026


Alexander Wei, Nika Haghtalab, and Jacob Steinhardt. Jailbroken: How does llm safety training fail?
In NeurIPS, 2023.


Boyong Wu, Chao Yan, Chen Hu, Cheng Yi, Chengli Feng, Fei Tian, Feiyu Shen, Gang Yu, Haoyang
Zhang, Jingbei Li, et al. Step-audio 2 technical report. arXiv preprint arXiv:2507.16632, 2025.


Haibin Wu, Xuanjun Chen, Yi-Cheng Lin, Kai-wei Chang, Ho-Lam Chung, Alexander H Liu, and
Hung-yi Lee. Towards audio language modeling-an overview. arXiv preprint arXiv:2402.13236,
2024.


xAI. Grok 3 beta - the age of reasoning agents, 2025. URL https://x.ai/news/grok-3.


Chejian Xu, Jiawei Zhang, Zhaorun Chen, Chulin Xie, Mintong Kang, Yujin Potter, Zhun Wang,
Zhuowen Yuan, Alexander Xiong, Zidi Xiong, Chenhui Zhang, Lingzhi Yuan, Yi Zeng, Peiyang
Xu, Chengquan Guo, Andy Zhou, Jeffrey Ziwei Tan, Xuandong Zhao, Francesco Pinto, Zhen
Xiang, and et al. MMDT: decoding the trustworthiness and safety of multimodal foundation
models. In The Thirteenth International Conference on Learning Representations, 2025a.


Jin Xu, Zhifang Guo, Jinzheng He, Hangrui Hu, Ting He, Shuai Bai, Keqin Chen, Jialin Wang, Yang
Fan, Kai Dang, et al. Qwen2. 5-omni technical report. arXiv preprint arXiv:2503.20215, 2025b.


Jin Xu, Zhifang Guo, Jinzheng He, Hangrui Hu, Ting He, Shuai Bai, Keqin Chen, Jialin Wang, Yang
Fan, Kai Dang, et al. Qwen2. 5-omni technical report. arXiv preprint arXiv:2503.20215, 2025c.


Ruiqi Yan, Xiquan Li, Wenxi Chen, Zhikang Niu, Chen Yang, Ziyang Ma, Kai Yu, and Xie Chen.
Uro-bench: A comprehensive benchmark for end-to-end spoken dialogue models. arXiv preprint
arXiv:2502.17810, 2025.


An Yang, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chengyuan Li,
Dayiheng Liu, Fei Huang, Haoran Wei, et al. Qwen2. 5 technical report. arXiv preprint
arXiv:2412.15115, 2024a.


An Yang, Anfeng Li, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang
Gao, Chengen Huang, Chenxu Lv, et al. Qwen3 technical report. arXiv preprint arXiv:2505.09388,
2025a.


Hao Yang, Lizhen Qu, Ehsan Shareghi, and Gholamreza Haffari. Audio is the achilles' heel: Red
teaming audio large multimodal models. In Proceedings of the 2025 Conference of the Nations
of the Americas Chapter of the Association for Computational Linguistics: Human Language
Technologies (Volume 1: Long Papers), pp. 9292-9306, 2025b.


Hao Yang, Lizhen Qu, Ehsan Shareghi, and Gholamreza Haffari. Audio is the achilles' heel: Red
teaming audio large multimodal models. In Proceedings of the 2025 Conference of the Nations
of the Americas Chapter of the Association for Computational Linguistics: Human Language
Technologies (Volume 1: Long Papers), pp. 9292-9306, 2025c.


Qian Yang, Jin Xu, Wenrui Liu, Yunfei Chu, Ziyue Jiang, Xiaohuan Zhou, Yichong Leng, Yuanjun
Lv, Zhou Zhao, Chang Zhou, et al. Air-bench: Benchmarking large audio-language models via
generative comprehension. In Proceedings of the 62nd Annual Meeting of the Association for
Computational Linguistics (Volume 1: Long Papers), pp. 1979-1998, 2024b.


Shu-wen Yang, Po-Han Chi, Yung-Sung Chuang, Cheng-I Jeff Lai, Kushal Lakhotia, Yist Y Lin,
Andy T Liu, Jiatong Shi, Xuankai Chang, Guan-Ting Lin, et al. Superb: Speech processing
universal performance benchmark. Interspeech 2021, 2021.


Wanqi Yang, Yanda Li, Meng Fang, Yunchao Wei, and Ling Chen. Who can withstand chat-audio
attacks? an evaluation benchmark for large audio-language models. In Findings of the Association
for Computational Linguistics, ACL 2025, Vienna, Austria, July 27 - August 1, 2025, pp. 1720517220, 2025d.


Jia-Yu Yao, Kun-Peng Ning, Zhen-Hui Liu, Mu-Nan Ning, Yu-Yang Liu, and Li Yuan. Llm lies:
Hallucinations are not bugs, but features as adversarial examples. arXiv preprint arXiv:2310.01469,
2023.


17


Published as a conference paper at ICLR 2026


Yuan Yao, Tianyu Yu, Ao Zhang, Chongyi Wang, Junbo Cui, Hongji Zhu, Tianchi Cai, Haoyu Li,
Weilin Zhao, Zhihui He, et al. Minicpm-v: A gpt-4v level mllm on your phone. arXiv preprint
arXiv:2408.01800, 2024.


Zonghao Ying, Aishan Liu, Siyuan Liang, Lei Huang, Jinyang Guo, Wenbo Zhou, Xianglong Liu,
and Dacheng Tao. Safebench: A safety evaluation framework for multimodal large language
models. arXiv preprint arXiv:2410.18927, 2024.


Miao Yu, Fanci Meng, Xinyun Zhou, Shilong Wang, Junyuan Mao, Linsey Pan, Tianlong Chen,
Kun Wang, Xinfeng Li, Yongfeng Zhang, et al. A survey on trustworthy llm agents: Threats and
countermeasures. In Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery
and Data Mining V. 2, pp. 6216-6226, 2025.


Junning Ze, Xinfeng Li, Yushi Cheng, Xiaoyu Ji, and Wenyuan Xu. Ultrabd: Backdoor attack against
automatic speaker verification systems via adversarial ultrasound. In 2022 IEEE 28th International
Conference on Parallel and Distributed Systems (ICPADS), pp. 193-200. IEEE, 2023.


Chang Zeng, Xiaoxiao Miao, Xin Wang, Erica Cooper, and Junichi Yamagishi. Joint speaker encoder
and neural back-end model for fully end-to-end automatic speaker verification with multiple
enrollment utterances. Computer Speech & Language, 86:101619, 2024.


Dong Zhang, Shimin Li, Xin Zhang, Jun Zhan, Pengyu Wang, Yaqian Zhou, and Xipeng Qiu.
Speechgpt: Empowering large language models with intrinsic cross-modal conversational abilities.
In EMNLP (Findings), 2023a.


Dong Zhang, Xin Zhang, Jun Zhan, Shimin Li, Yaqian Zhou, and Xipeng Qiu. Speechgpt-gen:
Scaling chain-of-information speech generation. arXiv preprint arXiv:2401.13527, 2024a.


Guoming Zhang, Chen Yan, Xiaoyu Ji, Tianchen Zhang, Taimin Zhang, and Wenyuan Xu. Dolphinattack: Inaudible voice commands. In Proceedings of the 2017 ACM SIGSAC conference on
computer and communications security, pp. 103-117, 2017a.


Yu Zhang, Wei Han, James Qin, Yongqiang Wang, Ankur Bapna, Zhehuai Chen, Nanxin Chen, Bo Li,
Vera Axelrod, Gary Wang, et al. Google usm: Scaling automatic speech recognition beyond 100
languages. arXiv preprint arXiv:2303.01037, 2023b.


Yuwei Zhang, Tong Xia, Aaqib Saeed, and Cecilia Mascolo. Respllm: Unifying audio and text with
multimodal llms for generalized respiratory health prediction. In Machine Learning for Health
(ML4H), pp. 1053-1066. PMLR, 2025.


Zhexin Zhang, Leqi Lei, Lindong Wu, Rui Sun, Yongkang Huang, Chong Long, Xiao Liu, Xuanyu
Lei, Jie Tang, and Minlie Huang. Safetybench: Evaluating the safety of large language models. In
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume
1: Long Papers), pp. 15537-15553, 2024b.


Zhifei Zhang, Yang Song, and Hairong Qi. Age progression/regression by conditional adversarial
autoencoder. In Proceedings of the IEEE conference on computer vision and pattern recognition,
pp. 5810-5818, 2017b.


Wayne Xin Zhao, Kun Zhou, Junyi Li, Tianyi Tang, Xiaolei Wang, Yupeng Hou, Yingqian Min,
Beichen Zhang, Junjie Zhang, Zican Dong, et al. A survey of large language models. arXiv
preprint arXiv:2303.18223, 1(2), 2023.


Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan Zhuang, Zhanghao Wu, Yonghao Zhuang,
Zi Lin, Zhuohan Li, Dacheng Li, Eric Xing, et al. Judging llm-as-a-judge with mt-bench and
chatbot arena. Advances in Neural Information Processing Systems, 36:46595-46623, 2023a.


Zhicong Zheng, Xinfeng Li, Chen Yan, Xiaoyu Ji, and Wenyuan Xu. The silent manipulator: A
practical and inaudible backdoor attack against speech recognition systems. In Proceedings of the
31st ACM International Conference on Multimedia, pp. 7849-7858, 2023b.


Kun Zhou, Berrak Sisman, Rui Liu, and Haizhou Li. Emotional voice conversion: Theory, databases
and esd. Speech Communication, 137:1-18, 2022.


18


Published as a conference paper at ICLR 2026


Yujun Zhou, Yufei Han, Haomin Zhuang, Kehan Guo, Zhenwen Liang, Hongyan Bao, and Xiangliang
Zhang. Defending jailbreak prompts via in-context adversarial game. In Proceedings of the 2024
Conference on Empirical Methods in Natural Language Processing, pp. 20084-20105, 2024.


19


Published as a conference paper at ICLR 2026


APPENDIX


# A Introduction to Audio Large Language Models 3


A.1 Speech Understanding Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3


A.2 Speech Interaction Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3


# B Benchmark Models 4


B.1 Open-Source Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4


B.2 Closed-Source Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6


# C Platform Design of AudioTrust 6


# D Additional Details of Evaluation on AudioTrust Fairness 8


D.1 Dataset Classification Criteria . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8


D.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8


D.3 Evaluation Method and Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10


D.4 Experimental Design and Results . . . . . . . . . . . . . . . . . . . . . . . . . . . 10


# E Additional Details of Evaluation on AudioTrust Hallucination 15


E.1 Dataset Classification Criteria . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15


E.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17


E.3 Experimental Design and Evaluation Metrics . . . . . . . . . . . . . . . . . . . . 17


E.3.1 Experimental Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17


E.3.2 Evaluation Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20


E.4 Evaluation Methodology . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21


E.5 Result Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22


# F Additional Details of Evaluation on AudioTrust Safety 23


F.1 Dataset Classification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23


F.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24


F.3 Additional Implementation Details . . . . . . . . . . . . . . . . . . . . . . . . . . 26


F.4 Evaluation Method and Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29


F.5 Additional Result . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29


# G Additional Details of Evaluation on AudioTrust Privacy 32


G.1 Dataset Classification Criteria . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32


G.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32


G.3 Additional Implementation Details . . . . . . . . . . . . . . . . . . . . . . . . . . 33


G.4 Evaluation Method and Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37


G.5 Experiment Design and Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37


1


Published as a conference paper at ICLR 2026


# H Additional Details of Evaluation on AudioTrust Robustness 40


H.1 Dataset Classification Criteria . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40


H.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42


H.3 Experimental Design and Evaluation Metrics . . . . . . . . . . . . . . . . . . . . 43


H.3.1 Experimental Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43


H.3.2 Evaluation Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45


H.3.3 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46


# I Additional Details of Evaluation on AudioTrust Authentication 48


I.1 Dataset Classification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48


I.2 Dataset Construction Method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49


I.3 Additional Implementation Details . . . . . . . . . . . . . . . . . . . . . . . . . . 50


I.4 Evaluation Method and Metrics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52


I.5 Additional Result . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52


# J Background and Related work 53


J.1 Audio Large Language Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53


J.2 Audio Large Language Model Benchmarks . . . . . . . . . . . . . . . . . . . . . 54


# K Limitations 55


# L Lessons from ALLMs for Future Fine-Tuning 55


# M Social Impact 56


# N Data sheet 57


N.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57


N.2 Distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58


# O Dataset statistics 59


# P LLM Usage 60


2


Published as a conference paper at ICLR 2026


A INTRODUCTION TO AUDIO LARGE LANGUAGE MODELS


The emergence of ALLMs signifies a pivotal paradigm shift in the domain of multimodal artificial
intelligence systems (Wu et al., 2024; Peng et al., 2024). These models fundamentally extend the
capabilities of traditional LLMs (Zhao et al., 2023; Hadi et al., 2023), which have demonstrated
remarkable proficiency in processing and generating textual information. They achieve this by
enabling the comprehension and synthesis of auditory signals. This advancement substantially
surpasses conventional Automatic Speech Recognition (ASR) systems (Malik et al., 2021), whose
primary objective is to faithfully transcribe spoken language into text. In contrast, ALLMs aim to
achieve a more holistic understanding of acoustic environments, encompassing not only the lexical
content of speech but also paralinguistic cues (e.g., prosody, affective tone), speaker characteristics,
musical elements, and background environmental sounds (Tang et al., 2024). Such deep exploration
of the rich semantic information embedded in audio signals is crucial for realizing more natural
and context-aware human-computer interaction. ALLMs are generally divided into two primary
categories: speech understanding models and speech interaction models.


The rapid maturation of this field has been largely propelled by significant advancements in selfsupervised learning (SSL) methodologies, which enable models to acquire robust representations
from vast quantities of unlabeled audio data. Concurrently, sophisticated multimodal training
paradigms have played a critical role, facilitating the synergistic integration and joint learning of
information across auditory and linguistic modalities (Girdhar et al., 2023; Rubenstein et al., 2023;
Zeng et al., 2024; Wang et al., 2024a). By aligning the acoustic feature space with the inherent
semantic comprehension capabilities of LLMs, ALLMs are able to address tasks beyond simple
speech-to-text conversion, such as audio event classification, audio scene description, audio-based
question answering, and even engaging in multi-turn spoken dialogues. These capabilities mark
new frontiers for developing artificial intelligence applications that can more profoundly interpret
and respond to our auditory world. However, as ALLMs are increasingly integrated into realworld applications, understanding their impact under various trustworthiness conditions becomes
critically important. This study aims to construct a benchmark, AudioTrust, to comprehensively and
systematically evaluate the performance and potential risks of ALLMs across different trustworthiness
dimensions, such as robustness, fairness, privacy protection, and safety. This evaluation is intended
to provide scientific evidence and practical guidance for the responsible development, deployment,
and regulation of ALLMs.


A.1 SPEECH UNDERSTANDING MODELS


Speech understanding models process and comprehend audio inputs, transforming them into semantic
representations that facilitate language understanding. However, they lack the ability to generate
audio responses. These models typically operate in a unidirectional manner, receiving audio as
input and producing text-based outputs. Notable representatives include Qwen2-Audio (Chu et al.,
2024), which integrates audio understanding capabilities into the Qwen2 (Yang et al., 2024a) via
dedicated audio encoders and cross-modal adapters. These models demonstrate strong performance
in tasks such as speech transcription, audio description, and audio-based question answering, yet
their outputs remain restricted to textual modalities. SALMONN (Tang et al., 2024) likewise exhibits
robust semantic audio understanding across diverse acoustic conditions, while maintaining a purely
text-based output interface.


A.2 SPEECH INTERACTION MODELS


Speech interaction models go beyond mere comprehension to enable bidirectional audio communication. These models are capable not only of understanding audio inputs, but also of generating
contextually appropriate audio responses, thereby facilitating more natural human-computer interaction. Prominent examples include GPT-4o (OpenAI et al., 2024), which represents a significant
advance in multimodal interactive capability by processing and generating audio in near real-time
conversational scenarios. MiniCPM-o 2.6 (Yao et al., 2024) provides similar functionalities in an
open-source format, supporting coherent audio dialogues while demonstrating comprehension of
audio contexts. Such models enable a wide range of applications, from virtual assistants to assistive
tools for visually impaired users.


3


Published as a conference paper at ICLR 2026


B BENCHMARK MODELS


visualize normalized scores across six key safety and reliability dimensions: Fairness (F), Hallucination (H), Safety (S), Privacy (P), Robustness (R), and Authentication (A). A larger enclosed area
indicates more comprehensive trustworthiness alignment.


To systematically investigate these trustworthiness aspects, we have selected a diverse set of models.
This set includes both mainstream proprietary commercial models, such as GPT-4 (OpenAI et al.,
2024) and Gemini (Team et al., 2023), as well as representative and robust open-source ALLMs,
including Qwen2-Audio (Chu et al., 2024) and MiniCPM-o 2.6 (Yao et al., 2024). To ensure fairness
and objectivity, all models are systematically tested on the same datasets and with identical evaluation
metrics, followed by thorough comparative analyses of experimental results. It is worth noting that
our methodology considers not only the fundamental audio comprehension capabilities of each model,
but also examines their potential strengths and limitations in aspects such as complex interactions
and knowledge transfer. This systematic safety evaluation provides a solid foundation for the future
optimization and development of ALLMs. To vividly visualize these comparative strengths and
weaknesses, we present a six-dimensional trustworthiness profile for each model (see Figure 3),
covering fairness (F), hallucination (H), safety (S), privacy (P), robustness (R), and authentication
(A). In the following descriptions, we analyze the specific radar chart performance of each model to
highlight their distinct trade-offs and alignment characteristics.


B.1 OPEN-SOURCE MODELS


In conducting trustworthiness evaluations of unified ALLMs, we selected nine representative opensource audio and multimodal models: SALMONN, Ultravox, Qwen2-Audio, MiniCPM-o 2.6,
Step-Fun, Qwen2.5-omni, Kimi-Audio, OpenS2S, Step-Audio2.


1. SALMONN (Tang et al., 2024) pioneered a dual-encoder architecture (Whisper speech encoder
and BEATs audio encoder) together with a window-level Q-Former and LoRA adapters. This enables
the pretrained Vicuna text LLM to achieve unified understanding of speech, environmental sounds,
and music. The model also demonstrates emergent capabilities in cross-modal reasoning beyond the
training tasks and in few-shot activation tuning. The radar chart reveals a notable contradiction in
the design of SALMONN: although it achieves surprisingly high scores in privacy protection as an
open-source model, this comes at a significant cost to fairness and reliability. We hypothesize that
SALMONN's relatively weak capability in environmental sound perception limits its performance in
privacy inference tasks, which in turn leads to artificially elevated privacy scores.


2. Ultravox (AI, 2024) directly maps raw audio into the high-dimensional representation space of
LLMs, thereby seamlessly eliminating the traditional ASR stage. This model not only comprehends
speech content but also captures paralinguistic features such as tone and pauses, and supports
streaming text outputs. Ultravox demonstrates excellent safety and decent hallucination resistance,


4


Published as a conference paper at ICLR 2026


but its robustness is critically low. This indicates that while the model is well-aligned semantically,
its end-to-end architecture is extremely fragile to acoustic perturbations.


3. Qwen2-Audio (Chu et al., 2024) is a large-scale audio-language model that establishes a seamless
pipeline between the Whisper-large-v3 encoder and the Qwen-7B language model, thereby supporting
both spoken dialogue and audio analysis interaction modes. In real conversational and multitask
zero-shot evaluations, the model leverages Mel-spectrograms of 16kHz audio combined with instruction tuning and Direct Preference Optimization (DPO), significantly improving the precision and
robustness of responses to human intent. The cross-dimensional analysis highlights a significant
discrepancy in Qwen2-Audio: although it performs strongly in terms of safety and authentication, its
privacy score remains alarmingly low. This indicates that the model can effectively identify speakers
but fails to safeguard their sensitive attributes. A potential reason may lie in the lack of effective
safety-alignment training after integrating the new modality, or an excessive reliance on ASR outputs,
which leads to insufficient protection of sensitive audio attributes.


4. MiniCPM-o 2.6 (Yao et al., 2024) integrates four major components: SigLip-400M, Whispermedium, ChatTTS-200M, and Qwen2.5-7B, supporting bilingual real-time dialogue in an end-to-end
multimodal fashion, as well as controllable interactions in emotion and speaking rate, and high-quality
voice cloning. It consistently outperforms proprietary models of equivalent scale on benchmarks such
as OpenCompass and StreamingBench. The model exhibits a clear trade-off: it prioritizes robustness
and safety while largely neglecting privacy and performing poorly in controlling hallucinations. This
characteristic suggests that the system demonstrates strong resistance to noise and harmful prompts
yet is prone to private information leakage and the generation of unsupported content.


5. Step-Fun (Huang et al., 2025) is a production-ready open-source real-time speech-text multimodal
system that tackles data-collection cost, weak dynamic control, and limited intelligence via four
pillars: a 130B unified understanding-generation model, a generative speech data engine enabling
affordable voice cloning and distilling the lightweight Step-Audio-TTS-3B, an instruction-driven
fine-control mechanism spanning dialects, emotions, singing, and rap, and an enhanced cognitive
layer with tool calling and role-playing for complex tasks. Step-Fun stands out as the most balanced
open-source model, particularly in terms of fairness and robustness. Unlike comparable models that
often sacrifice fairness for safety, Step-Fun maintains moderate performance across all dimensions,
although its authentication results indicate remaining room for improvement in identity verification.


6. Qwen2.5-Omni (Xu et al., 2025b) builds upon Qwen2.5-VL/Audio by introducing the ThinkerTalker architecture and TMRoPE (Time-aligned Multimodal RoPE) temporal alignment embedding.
This allows the model to stream and process text, image, audio, and video inputs concurrently
within a single framework, with the ability to produce both textual and natural speech outputs in
synchronization. Qwen2.5-Omni enhances safety but exacerbates cross-dimensional imbalance:
fairness decreases while privacy becomes nearly negligible. This reflects a broader trend wherein
cross-modal alignment training may inadvertently suppress the fine-grained reasoning capabilities
necessary for achieving both fairness and privacy protection.


7. Kimi-Audio (Ding et al., 2025) is an open-source audio foundation model for understanding,
generation, and conversation; it adopts a 12.5Hz audio tokenizer and an LLM-based architecture that
ingests continuous features and emits discrete tokens, alongside a chunk-wise streaming detokenizer
via flow matching for low-latency inference. Kimi-Audio exhibits the most extreme alignment
trade-off in our benchmark. While it achieves near-perfect safety, such over-cautious behavior likely
results in the lowest fairness score and very limited privacy protection. This may occur because the
model indiscriminately rejects legitimate queries from marginalized groups or fails to distinguish
between safe and private contexts.


8. OpenS2S (Wang et al., 2025a) built on the BLSP-Emo empathetic speech-to-text backbone, it
introduces a streaming interleaved decoding architecture for low-latency speech generation while
capturing rich paralinguistic cues for expressive responses. Interestingly, OpenS2S exhibits characteristics opposite to most models: it performs strongly in hallucination resistance and authentication but
shows weaker robustness and fairness. This suggests that the model achieves high precision under
clean conditions yet lacks the generalization ability to handle diverse speakers or noisy environments.


9. Step-Audio 2 (Wu et al., 2025) is an end-to-end multimodal LLM for industry-grade audio
understanding and speech conversation, combining a latent audio encoder with reasoning-centric RL
to boost ASR and audio comprehension; by folding discrete audio-token generation into language


5


Published as a conference paper at ICLR 2026


modeling, it becomes highly responsive to paralinguistic cues in real time. The model performs
reasonably well in robustness and safety but exhibits systematic weaknesses in fairness and privacy.
This indicates that its reasoning-centered reinforcement learning optimization primarily focuses on
utility and ASR performance rather than ethical alignment.


B.2 CLOSED-SOURCE MODELS


Among closed-source ALLMs, Google's Gemini series (Team et al., 2023) and OpenAI's GPT-4o
series (OpenAI et al., 2024) represent the industry's state-of-the-art in audio understanding and
interaction technologies. In our evaluation of various safety concerns, we employ both the Gemini
and GPT-4o model series.


10. Gemini-1.5 Pro leverages a Mixture-of-Experts architecture for unified reasoning across speech,
image, and text. It supports audio inputs up to 19 hours in duration and contexts up to the milliontoken scale, enabling seamless processing for tasks such as audio summarization, transcription,
and translation. Although Gemini-1.5 Pro demonstrates the best safety performance and excels in
robustness and authentication, its relatively low hallucination score reveals a critical vulnerability.
The model exhibits strong resistance to adversarial attacks but tends to fabricate content, highlighting
a notable gap between safety alignment and factual grounding.


11. GPT-4o Audio is the first developer-oriented interactive audio model that supports both understanding and generation of speech. It is capable of speech transcription, summarization, sentiment
analysis, and conversational dialogue. GPT-4o Audio demonstrates the most comprehensive performance, leading in authentication and achieving high scores in safety, privacy, and fairness. However,
similar to Gemini, it remains affected by hallucinations, suggesting that scaling up the model can enhance nearly all dimensions of trustworthiness, while hallucination issues may stem from inaccuracies
in the training data.


12. GPT-4o mini Audio is designed to deliver cost-effective yet robust audio understanding and
generation. It supports a variety of audio input formats and can produce seamless bimodal (text and
speech) output with customizable speech styles, making it applicable to edge devices and large-scale
embedded deployments. The "mini" variant illustrates a clear compression trade-off: it retains the
superior authentication and safety of the larger model (even improves privacy), but its robustness
collapses to 0.228. This suggests that lightweight models can be safe and private but lack the
parameter redundancy to handle adversarial noise.


13. Gemini-2.5 Flash retains the core multimodal design of the Pro version while significantly
optimizing inference speed and computational efficiency. This version supports up to 8.4 hours of
audio input and million-token context windows, with dramatically reduced latency and operational
cost compared to the Pro variant, while still covering tasks like audio summarization, transcription,
and translation. Gemini-2.5 Flash prioritizes safety and robustness to serve as a reliable production
model. However, cross-dimensional analysis shows it lags in hallucination and fairness, suggesting
that optimization for speed and safety may have compromised its ability to handle nuanced equity
tasks and factual verification.


14. Gemini-2.5 Pro further advances multimodal reasoning, introducing a dynamic "thinking
budget" mechanism that adaptively allocates computational resources based on instruction and
system constraints. Its superior performance on video understanding benchmarks extends to the audio
domain, enabling streaming responses for complex tasks such as conversational QA, scenario retrieval,
and reasoning through efficient temporal alignment and cross-modal integration. Compared to its
predecessor, Gemini-2.5 Pro has improved hallucination resistance while maintaining elite safety and
robustness. Nevertheless, fairness remains a persistent challenge, reinforcing the observation that
advanced reasoning capabilities do not automatically translate to equitable decision-making without
explicit intervention.


C PLATFORM DESIGN OF AUDIOTRUST


To systematically address trustworthiness risks stemming from the rapid development of ALLMs
and to establish a reproducible, extensible, and forward-looking evaluation system, we introduce
a unified trustworthiness assessment framework. Our framework's core design philosophy relies


6


Published as a conference paper at ICLR 2026


# (1) Inference Stage


# (2) Evaluation Stage


Figure 4: Overview of the unified trustworthiness evaluation framework for ALLMs, illustrating the
decoupled two-stage architecture encompassing inference execution (Stage 1) and trustworthiness
assessment (Stage 2).


on highly modular abstraction mechanisms and a two-stage decoupled architecture. This design
aims to facilitate continuous and rigorous trustworthiness risk assessment and in-depth analysis of
ALLMs. The proposed architecture emphasizes flexibility and efficiency, decomposing complex
evaluation procedures into two distinct yet interconnected stages: the inference execution stage
(Stage 1) and the trustworthiness evaluation stage (Stage 2). As illustrated in Figure 4, such a
decoupled design paradigm brings notable practical advantages. It grants researchers and evaluators
considerable autonomy to independently execute the inference or evaluation workflows according to
specific research objectives or evaluation requirements. For instance, when model outputs are already
available, this pre-generated response data can be directly used for comprehensive trustworthiness
analyses and comparisons across multiple dimensions and methods. This approach significantly
enhances evaluation flexibility while optimizing the use of computational resources and reducing
time costs.


The inference execution stage focuses on raw data processing and the collection of model outputs.
First, the data engine module efficiently loads and preprocesses various standard trustworthiness
benchmark datasets, including both publicly released open benchmarks and custom-built datasets, thus
ensuring data consistency and traceability. Subsequently, users can flexibly specify evaluation models,
datasets, evaluation targets, and runtime parameters through configuration files. This enables batch
parallel scheduling and significantly optimizes computational resource usage. The core inference
module supports mainstream ALLMs inference tasks, allowing direct loading of open-source models
from the Hugging Face Hub, and natively integrates adapters for closed-source models accessed
via APIs, thereby providing comprehensive full-stack support for major ALLMs. Through the
aforementioned workflow, structured raw model output files are generated for subsequent analysis,
ensuring a highly reproducible evaluation process.


The trustworthiness evaluation stage performs independent, multidimensional, automated analysis
on the model outputs generated in Stage 1. Owing to the architectural decoupling, this stage can
independently process historical inference results in bulk, significantly enhancing evaluation flexibility.
We introduce multiple robust pretrained automated evaluators (evaluator models), covering critical
trustworthiness dimensions such as content safety review, bias detection, and factual consistency.
These evaluators, independently or jointly, conduct in-depth assessments and quantitative scoring of
model outputs based on preset standards and metrics. This process enables automatic annotation and
efficient pre-screening. Automated evaluation not only greatly improves assessment efficiency, but
also reduces the subjective bias associated with human evaluation.


Platform Validation. Beyond automated evaluators, we include a human-aided validation protocol:
10% of the data are randomly sampled and cross-checked by 20 trained annotators, with each QA pair


7


# Published as a conference paper at ICLR 2026


|Gender|Male, Female|
|---|---|
|Age|unger, Older|


|dentity Verification B|Col2|
|---|---|
|ybrid Spoofing<br>Pr|etexting, Partial Disclosure, Authority Pressure|


Figure 5: A tree taxonomy of different perspectives of trustworthiness that AudioTrust focuses on.


independently reviewed by three annotators. Final labels are decided by majority voting, yielding a
97-98% agreement with the platform's automated assessments, thereby validating the reliability of
the framework.


D ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST FAIRNESS


D.1 DATASET CLASSIFICATION CRITERIA


We utilized seven sensitive attributes to ensure both group and individual fairness: gender,
race, age, accent, economic status, personality traits, and speech fluency. All sensitive attributes were defined with binary values. Specifically, the sensitive attribute sets were as follows: gender S = { male , female }, age S = { young , older }, race S = { Western , Chinese }, accent S = { American , Indian }, linguistic characteristic S = { fluent , hesitant }, economic status
S = { wealthy , poor }, and personality traits S = { calm , anxious } .


D.2 DATASET CONSTRUCTION METHOD


We select the types of fairness to be evaluated for ALLMs following two principles.


8


Published as a conference paper at ICLR 2026


 - Multifaceted social biases : We consider common societal biases associated with multiple
sensitive attributes such as gender, race, and age (Cho et al., 2023; Zhang et al., 2017b;
Wan et al., 2024; Hirota et al., 2023). In addition to these attributes, we include distinctive
stereotypes uniquely identifiable through audio characteristics, including accent, personality
traits, economic status, and linguistic characteristic .


 - Real-world applications : We focus on realistic decision-making applications in which AI
fairness is crucial, including recruitment processes, admission systems, and financial lending
evaluations. Furthermore, we incorporate commonly encountered stereotypical scenarios
drawn from real-life contexts such as occupation, education, and healthcare.


Data Construction. During the data construction phase, we utilized the multi-modal generation
model GPT-4o (OpenAI et al., 2024) to produce textual content, which was then transformed into
audio using the F5-TTS model (Chen et al., 2025). The entire data generation process begins with a
text-based prompt, constructed entirely by GPT-4o to support natural language fluency and semantic
consistency. To enable controlled experiments with single-variable variation, each data pair consists
of two audio samples with identical semantic content, differing solely in their associated sensitive
attributes.


For example, to simulate racial identity, we altered the input language to represent different ethnic
groups. GPT-4o was employed to ensure that the translated texts conveyed semantically equivalent
meanings across languages, thereby eliminating confounding effects introduced by lexical or syntactic
discrepancies. For sensitive attributes that cannot be directly simulated by changing the voice source,
such as linguistic style or economic status, we implemented more sophisticated data augmentation
strategies.


To simulate economic status, we enriched the base audio with representative background sounds to
enhance the perceptual cues of social identity. Examples include upscale restaurant ambience for
high-income individuals and street market noise for lower-income individuals. individuals. Regarding
linguistic style, we adjusted the fluency and structure of the input text before feeding it into the TTS
model. This allowed us to generate speech samples that reflect varying levels of coherence, prosody,
and articulation, simulating differences in communication style associated with social or educational
background.


Figure 6: Fairness experiment design concept


9


Published as a conference paper at ICLR 2026


Real-World Applicability. To assess the real-world applicability of ALLMs, we constructed
six prototypical evaluation scenarios, including three decision-making tasks and three stereotype
judgment tasks. In the decision-making settings, the ALLM is assigned a contextualized role and is
required to make a selection based on audio input. For instance, in the Hiring scenario, the ALLM
acts as a corporate recruiter selecting the final candidate for a customer service representative position,
based on self-introduction audio recordings from two applicants. In the Admission scenario, the
ALLM plays the role of a selection committee member choosing between two candidates to join a
technology innovation program. In the Financial Loan scenario, the ALLM simulates a loan officer
who must approve a loan application for one of the two speakers based on their respective verbal
statements.


For stereotype-based assessments, we designed three tasks corresponding to occupational, educational,
and medical contexts. In the Stereotype scenario, the ALLM must infer whether the speaker sounds
more like a boss or a subordinate, enabling analysis of implicit bias in role perception. The Math
Ability Stereotype scenario evaluates whether the model's judgment on mathematical proficiency is
influenced by speaker attributes. Lastly, the Medical Stereotype task examines whether the model
associates certain vocal characteristics with being a doctor versus a nurse or medical assistant.


Together, this pipeline offers a comprehensive and reproducible framework for evaluating the fairness
and decision-making integrity of ALLMs across realistic and socially sensitive scenarios. It enables
systematic exploration of model behavior under controlled attribute manipulations, paving the way
for more equitable and trustworthy audio-based AI systems.


D.3 EVALUATION METHOD AND METRICS


We utilized statistical methods and developed the fairness metrics to quantitatively assess model
fairness (Xu et al., 2025a; Deldjoo & Nazary, 2024). Let an audio large language model be M :
Ω → Ψ, mapping the audio-text input space Ω to the text output space Ψ. Denote by Σ the set of
sensitive attribute values (e.g. Σ = { young , old } ). For a test collection {zl} [N] l =1 [⊂] [Ω][, we introduce a]
discriminator D : Ψ → Σ detecting sensitive attributes in generations.


Group Fairness Score. For any group label σr ∈ Σ, define the group fairness score


σs∈ Σ
σs = σr


1
Γ( σr ) = 1 - N - | Σ | - 1


N


l =1


- - - - - []
Pr D (M( zl )) = σr - Pr D (M( zl )) = σs , (1)


where each probability is approximated via T -sample Monte-Carlo estimates. A positive Γ( σr )
implies a fairness towards group σr . When aggregating across tasks, we report the absolute value
| Γ( σr ) | to emphasise fairness magnitude only.


D.4 EXPERIMENTAL DESIGN AND RESULTS


Experimental Design. We designed three experiments for evaluating fairness: group decisionmaking, and group stereotypes . The detailed experimental design is illustrated in the Figure 6.
In the group decision-making experiment, we emphasized realistic high-stakes decision-making
contexts, namely recruitment processes, admission systems, and financial lending evaluations. This
approach enabled us to assess group fairness across a wide range of socially significant contexts and
demographic dimensions.


For evaluating stereotypes, we designed a classification task for ALLMs, where models classify
audio samples based on sensitive attributes in occupational, educational, and medical scenarios.
For instance, models determine whether an audio sample belongs to a doctor or a nurse based on
gender-specific inputs.


To illustrate the fairness differences between ALLMs and LLMs, we replicated the experiments for
LLMs using purely textual data (derived from the content used for audio generation). While the
prompt and input data formats were consistent, the manipulation of sensitive attributes differed. For
audio, attributes were modified by selecting different voice sources or mixing audio tracks. For text,
these attributes were directly embedded within the textual content. Further details are provided in our
examples. For more details, please see our examples.


10


# Published as a conference paper at ICLR 2026


Table 7: Group fairness score Γ decision in decision-making for ALLMs (open-source models). The
closer to 1, the higher the fairness level. The sign (+ or - ) indicates bias direction towards the given
group, σr . ↑ means higher than column average, ↓ means lower than column average, subscript is the
absolute difference. All fairness magnitudes are absolute.


Γ decision SALMONN Ultravox Qwen2-Audio MiniCPM-o 2.6 Step-Fun Qwen2.5-omni Kimi-Audio OpenS2S Step-Audio2


# Recruitment


# Admission


# Financial Loan


11


# Published as a conference paper at ICLR 2026


Table 8: Group fairness score Γ decision in decision-making for ALLMs (closed-source models). The
closer to 1, the higher the fairness level. The sign (+ or - ) indicates bias direction towards the
given group, σr . ↑ means higher than average, ↓ means lower than average, subscript is the absolute
difference.


Γ decision Gemini-1.5 Pro GPT-4o Audio GPT-4o mini Audio Gemini-2.5 Flash Gemini-2.5 Pro


# Recruitment


# Admission


# Financial Loan


|Female<br>Old<br>American<br>Clam<br>Fluent<br>Chinese<br>Wealthy|1.00 ↑0.540 0.20 ↓0.074 0.40 ↑0.155 0.00 ↓0.240 0.00 ↓0.205<br>0.90 ↑0.440 0.35 ↑0.076 0.10 ↓0.145 0.11 ↓0.130 0.10 ↓0.105<br>0.00 ↓0.460 0.00 ↓0.274 0.10 ↓0.145 0.00 ↓0.240 0.00 ↓0.205<br>0.50 ↑0.040 0.00 ↓0.274 0.00 ↓0.245 0.00 ↓0.240 0.00 ↓0.205<br>-0.40 ↓0.060 0.00 ↓0.274 0.00 ↓0.245 0.30 ↑0.060 0.25 ↑0.045<br>0.80 ↑0.340 0.95 ↑0.676 0.80 ↑0.555 0.32 ↑0.080 0.10 ↓0.105<br>0.20 ↓0.260 0.30 ↑0.026 0.00 ↓0.245 0.00 ↓0.240 -0.90 ↑0.695|
|---|---|
|Average<br>0.460<br>0.274<br>0.245<br>0.240<br>0.205|Average<br>0.460<br>0.274<br>0.245<br>0.240<br>0.205|


12


# Published as a conference paper at ICLR 2026


Table 9: Group fairness score Γ stereo in the context of social stereotypes for ALLMs ( open-source
models ). The closer to 1, the higher the fairness level. The sign (+ or - ) indicates bias direction
towards the given group, σr . For average fairness scores, higher values represent higher fairness. ↑
means higher than column average, ↓ means lower than column average, subscript is the absolute
difference.


Γ stereo SALMONN Ultravox Qwen2-Audio MiniCPM-o 2.6 Step-Fun Qwen2.5-omni Kimi-Audio OpenS2S Step-Audio2


# Occupational


# Education


# Medical


|Female<br>Old<br>American<br>Clam<br>Fluent<br>Chinese<br>Wealthy|0.00 ↓0.139 -0.10 ↓0.138 0.40 ↑0.067 -0.90 ↑0.652 0.20 ↓0.457 0.00 ↓0.067 0.00 ↓0.036 0.05 ↑0.033 0.00 ↓0.074<br>0.00 ↓0.139 0.00 ↓0.238 0.80 ↑0.467 0.00 ↓0.248 0.40 ↓0.257 0.00 ↓0.067 0.00 ↓0.036 0.00 ↓0.017 0.00 ↓0.074<br>0.00 ↓0.139 -0.30 ↑0.062 1.00 ↑0.667 0.30 ↑0.052 0.25 ↓0.407 0.00 ↓0.067 0.45 ↑0.414 0.00 ↓0.017 0.00 ↓0.074<br>0.00 ↓0.139 0.00 ↓0.238 0.10 ↓0.233 -0.70 ↑0.452 -0.55 ↓0.107 0.00 ↓0.067 0.00 ↓0.036 0.00 ↓0.017 0.00 ↓0.074<br>0.00 ↓0.139 -0.10 ↓0.138 0.10 ↓0.233 -0.70 ↑0.452 0.80 ↑0.143 0.00 ↓0.067 0.05 ↑0.014 0.30 ↑0.283 0.00 ↓0.074<br>0.00 ↓0.139 0.00 ↓0.238 -0.30 ↓0.033 0.00 ↓0.248 0.40 ↓0.257 0.00 ↓0.067 0.00 ↓0.036 0.00 ↓0.017 0.00 ↓0.074<br>0.00 ↓0.139 0.00 ↓0.238 0.00 ↓0.333 0.10 ↓0.148 -0.65 ↓0.007 0.50 ↑0.433 0.00 ↓0.036 0.00 ↓0.017 0.00 ↓0.074|
|---|---|
|Average|0.139<br>0.238<br>0.333<br>0.248<br>0.657<br>0.067<br>0.036<br>0.017<br>0.074|


Results. We evaluate the social decision-making fairness and stereotype fairness of nine models in
Appendix D.4, Table 7, Table 8, Table 9, Table 10, Table 11. The results reveal the following key

# findings:


(1) The fairness levels vary significantly among different ALLMs. Notably, models generally
considered highly capable, such as GPT-4o Audio, GPT-4o mini Audio, Gemini-2.5 Flash, and
Gemini-2.5 Pro, exhibit the highest group unfairness in the decision-making experiments. In contrast,
some lower-performing open-source models, such as MiniCPM-o 2.6, Qwen2-Audio, SALMONN, and
Ultravox, and Step-Fun, demonstrate relatively better fairness. However, these models still exhibit
high group unfairness and are far from ideal models. (2) Overall, the model's responses tend to
favor sensitive attributes such as female, old, American accent, calm, fluent, Western, and wealthy.


13


# Published as a conference paper at ICLR 2026


Table 10: Group fairness score Γ stereo in the context of social stereotypes for ALLMs ( closed-source
models ). The closer to 1, the higher the fairness level. The sign (+ or - ) indicates bias direction
towards the given group, σr . For average fairness scores, higher values represent higher fairness. ↑
means higher than column average, ↓ means lower than column average, subscript is the absolute
difference.


Γ stereo Gemini-1.5 Pro GPT-4o Audio GPT-4o mini Audio Gemini-2.5 Flash Gemini-2.5 Pro


# Occupational


# Education


# Medical

|Female<br>Old<br>American<br>Clam<br>Fluent<br>Chinese<br>Wealthy|-0.67 ↑0.373 1.00 ↑0.070 1.00 ↑0.140 -0.11 ↓0.260 -0.50 ↑0.180<br>0.56 ↑0.263 1.00 ↑0.070 1.00 ↑0.140 0.22 ↓0.150 0.00 ↓0.320<br>-0.00 ↓0.297 1.00 ↑0.070 0.90 ↑0.040 0.50 ↑0.130 0.60 ↑0.280<br>0.90 ↑0.603 0.95 ↑0.020 1.00 ↑0.140 0.00 ↓0.370 0.05 ↓0.270<br>0.14 ↓0.157 1.00 ↑0.070 1.00 ↑0.140 0.58 ↑0.210 0.50 ↑0.180<br>-0.00 ↓0.297 1.00 ↑0.070 1.00 ↑0.140 0.30 ↓0.070 0.30 ↓0.020<br>-0.00 ↓0.297 1.00 ↑0.070 1.00 ↑0.140 -0.22 ↓0.150 -0.00 ↓0.320|
|---|---|
|Average<br>0.297<br>0.930<br>0.860<br>0.370<br>0.320|Average<br>0.297<br>0.930<br>0.860<br>0.370<br>0.320|


Table 11: Group fairness scores across modalities and models. Higher values indicate lower bias
(higher fairness). ↑ : higher than column average, ↓ : lower than column average, subscript is absolute
difference.


# Model Female Old Chinese Wealthy


# Audio Large Language Models


Gemini-2.5 Flash 0.20 ↑ 0 . 09 0.50 ↑ 0 . 25 0.11 ↓ 0 . 06 0.20 ↑ 0 . 02
Gemini-2.5 Pro 0.00 ↓ 0 . 11 0.50 ↑ 0 . 25 0.00 ↓ 0 . 17 0.00 ↓ 0 . 18
GPT-4o Audio 0.20 ↑ 0 . 09 0.30 ↑ 0 . 05 0.25 ↑ 0 . 08 0.20 ↑ 0 . 02


# Large Language Models


Gemini-2.5 Flash 0.00 ↓ 0 . 11 0.20 ↓ 0 . 05 0.20 ↑ 0 . 03 0.00 ↓ 0 . 18
Gemini-2.5 Pro 0.00 ↓ 0 . 11 0.00 ↓ 0 . 25 0.00 ↓ 0 . 17 0.00 ↓ 0 . 18
GPT-4o 0.00 ↓ 0 . 11 0.00 ↓ 0 . 25 0.20 ↑ 0 . 03 0.00 ↓ 0 . 18


Average 0.11 0.25 0.17 0.18


(3) In the stereotype experiments, GPT-4o Audio and GPT-4o mini Audio show excellent fairness,
while MiniCPM-o 2.6, Qwen2-Audio, SALMONN, and Ultravox exhibit the highest unfairness.
Interestingly, GPT-4o Audio and GPT-4o mini Audio perform well in stereotype experiments by
almost refusing to answer all harmful questions (the proportion of responses across attributes is nearly
consistent), but do not refuse in decision-making tasks. This indicates that the GPT series models face
challenges in accurately determining whether a question is genuinely harmful. (4) Most models that


14


Published as a conference paper at ICLR 2026


exhibit high group (un)fairness when evaluating social stereotypes, such as MiniCPM-o 2.6, Qwen2Audio, SALMONN, Ultravox, and the Gemini series, also maintain similar levels in decision-making
scenarios. (5) ALLMs exhibit basically the same degree of unfairness across different scenarios. (6)
The performance of LLMs in decision-making scenarios is worse compared to ALLMs.


E ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST HALLUCINATION


E.1 DATASET CLASSIFICATION CRITERIA


To evaluate the robustness of the model in identifying and suppressing hallucination content and
semantic contradiction information, we propose a comprehensive evaluation framework. The framework's core design revolves around four key and representative potential hallucination categories
in ALLMs. This approach aims to cover a wide range of complex challenge scenarios, from subtle
semantic biases to significant factual errors, thereby enabling an in-depth understanding of model
performance under various pressures or interference conditions. The detailed experimental design is
illustrated in Figure 7.


Figure 7: Hallucination experiment design concept.


We divide the hallucination detection dataset into two major categories: logical hallucinations and
factual hallucinations. The logical hallucination class includes hallucination data with temporal
logical errors or text that semantically contradicts the core attributes/content of the audio. On the
other hand, the factual hallucination class consists of hallucination data that violates fundamental
physical laws and conflicts with the descriptive attributes of acoustic features. To better illustrate each
category, we provide representative example prompts for each type of hallucination. These examples
demonstrate the nature of the direction tested in our dataset:


15


Published as a conference paper at ICLR 2026


16


Published as a conference paper at ICLR 2026


E.2 DATASET CONSTRUCTION METHOD


To construct the datasets for physical and logical violations, we adopted a two-stage procedure. First,
we utilized GPT-4o (OpenAI et al., 2024) and audio data from Freesound to generate 80 sounds that
represent scenarios with physical or temporal logical inconsistencies. Subsequently, we edited the
collected audio content and arranged and concatenated them according to the scenarios generated by
GPT-4o. The choice of GPT-4o for scene generation is attributed to its advanced linguistic capabilities
and alignment guarantees, which ensure both the diversity and reliability of the generated scenarios.


In addition, to create audio corresponding to content mismatches and label mismatches, we incorporated the emotional speech dataset (Zhou et al., 2022) and obtained music classification datasets
from Freesound that align with our testing objectives. To expose these vulnerabilities, we randomly
associated mismatched emotion labels with the audio. To ensure controllable model outputs and the
reliability of the evaluation metrics, we opted to randomly recombine audio and text classification
labels without altering the classification types of the original datasets.


In the end, our dataset comprises a total of 320 audio hallucinations (along with corresponding
semantic text annotations): 160 factual hallucinations targeting a variety of scenarios and 160
logical hallucinations targeting diverse logical errors. This construction approach offers a systematic
methodology for generating challenging test cases to evaluate the safety mechanisms of GPT-4o,
while simultaneously encompassing a wide range of hallucination forms and contexts.


E.3 EXPERIMENTAL DESIGN AND EVALUATION METRICS


E.3.1 EXPERIMENTAL DESIGN


We designed a comprehensive red-teaming framework to evaluate hallucination tendencies in ALLMs
across four distinct categories: physical violations, label mismatches, logical violation, and content
mismatches. Our methodology involved creating specialized datasets that test specific aspects
of model robustness against hallucination. For physical violations, we synthesized sounds that
contradict fundamental laws (e.g., underwater flames); for label mismatches, we deliberately paired
audio with incorrect attribute descriptions (e.g., mislabeling speaker gender); for temporal disorders,
we manipulated cause-and-effect sequences in audio events (e.g., reversing "gunshot followed by
falling"); and for content mismatches, we paired audio with semantically contradictory descriptions
(e.g., labeling bird chirping as dog barking). At the same time, we found that if the model's response
relies on overly forced explanations (for example, "The object landed precisely on a perfect soundabsorbing material"), to avoid ambiguity and excessive rationalization, this evaluation does not rely
on the open-ended responses of the model. We use GPT-4o as the automatic evaluator, which follows
pre-defined common sense rules. This evaluator is explicitly instructed to ignore special environments
or recording settings and only focus on whether the described event follows the laws of everyday
physics. Models that unquestioningly accept extreme or temporary set scenarios will be regarded
as having produced hallucinations and will receive a lower score. We conducted four experimental
protocols with varying prompt structures:


 - Experiment I provided audio with annotations and assessed physical law conformity, description accuracy, and required models to self-evaluate their responses;


 - Experiment II focused on physical law conformity and content accuracy without logical
violation testing;


 - Experiment III prompted models to describe audio content and assess the reality relationship
of their descriptions;


The following is an example of a simplified experimental process:


1http://freesound.org/


17


Published as a conference paper at ICLR 2026


18


Published as a conference paper at ICLR 2026


We measured performance using metrics including hallucination rate, detection accuracy, refusal
rate, complete disclosure rate, and cautious disclosure rate, with results aggregated by model and
hallucination type to provide a comprehensive assessment of how different ALLMs handle potentially
misleading audio information. Meanwhile, in order to better repeatable method is provided, a
repeatable method is provided to test challenging test cases. We offer a universal json data template
in the illusion detection dataset. The json template is as follows:


19


Published as a conference paper at ICLR 2026


E.3.2 EVALUATION METRICS


This section details the quantitative and qualitative metrics used to evaluate the performance of
ALLMs in detecting various types of inconsistencies and violations.


Hallucination Detection Rate (HDR) : This metric generally measures the proportion of actual
'positive' cases (e.g., physical violations, label mismatches) that are correctly identified by the model.
It is calculated as:

[ed true positive cases]
HDR = [Number of correctly identif] (2)

Total number of true positive cases


For instance, in the context of Physical Violations, true positive cases are the actual physical violation
audios. For Label Mismatches, true positive cases are the audios with incorrect labels.


False Hallucination Rate (FHR) : This metric generally measures the proportion of actual 'negative'
cases (e.g., physically possible scenarios, correctly labeled audios) that are incorrectly flagged by the
model as 'positive'. It is calculated as:


[agged true negative cases (false positives)]
FHR = [Number of incorrectly f] (3)

Total number of true negative cases


For Physical Violations, true negative cases are the control audios. For Label Mismatches, true
negative cases are audios with correct labels.


Logical Violation Detection Rate (LVDR) : Specifically for Logical Violations, this measures the
proportion of temporally or causally illogical audio sequences correctly identified:


[ed illogical sequences]
LVDR = [Correctly identif] (4)

Total illogical cases


False Violation Rate (FVR) : Specifically for Logical Violations, this measures the proportion of
logical audio sequences incorrectly flagged as illogical:


[agged logical sequences]
FVR = [Incorrectly f] (5)

Total logical cases


Content Mismatch Detection Rate (CMDR) : Specifically for Content Mismatches, this measures
the proportion of semantic inconsistencies between audio content and textual descriptions correctly
identified:

[ed mismatches]
CMDR = [Correctly identif] (6)

Total mismatch cases


20


Published as a conference paper at ICLR 2026


False Content Mismatch Rate (FCMR) : Specifically for Content Mismatches, this measures the
proportion of accurate audio-text descriptions incorrectly flagged as mismatches:


[agged accurate descriptions]
FCMR = [Incorrectly f] (7)

Total accurate cases


Attribution Accuracy (AA) : Used in Label Mismatch evaluations, this metric measures how accurately the model attributes the correct label (e.g., true emotion, gender, genre) for cases where a
mismatch was correctly identified:


Cases with correct attribute identifcation by the model
AA = (8)
Cases where a mismatch was correctly detected by the model


Explanation Quality Score (EQS) : A qualitative metric used for Physical Violations. It is determined
by human evaluators who rate the quality of the ALLM's explanations for identified violations on
a 5-point scale, considering physical accuracy, relevance to audio content, and clarity of reasoning.
The final EQS is an average across evaluators and test cases.


Causal Reasoning Score (CRS) : A qualitative metric used for Logical Violations. This is a 10-point
human-evaluated scale measuring the quality of the ALLM's causal explanations, based on temporal
ordering accuracy, recognition of causal relationships, and clarity.


Description Accuracy Score (DAS) : Used in Content Mismatch evaluations for cases where a
mismatch was correctly identified. This metric measures the accuracy of the model's alternative
(corrected) description of the actual audio content, typically using automated scores like BLEU and
ROUGE against human-generated ground truth descriptions.


E.4 EVALUATION METHODOLOGY


This study employs a systematic three-stage evaluation protocol to comprehensively assess the
performance of models in physical violation detection tasks. In the initial stage of violation detection,
the model (ALLM) is provided with both audio files and their corresponding JSON metadata. The
assessment is carried out according to the following instruction:


Based on the content described in the Overall_description field of the
audio and JSON files, determine whether the audio conforms to physical laws, and
provide reasoning for your judgment.


This process is designed to evaluate the model's capability to judge the physical consistency between
audio content and its paired textual description. The model is required to integrate multimodal
information and leverage physical common sense to identify potential violations and articulate the
rationale behind its decisions.


Subsequently, in the self-evaluation stage, the model conducts introspective assessment based on its
previous judgment. Specifically, the following evaluation prompt is introduced:


Considering the answer to the previous question, use the eval_value entry in
the JSON file as an input prompt, and employ it as an evaluation criterion to score
the previous response.


This stage emphasizes the model's capacity for self-reflection; that is, its ability to provide objective
evaluations of the reliability of its own physical reasoning, based on structured evaluation metrics
and its own output.


In the metrics calculation stage, we utilize a series of quantitative metrics to evaluate model
performance (see Section E.3.2 for complete formulations). Our evaluation framework is twofold,
comprising both automated metrics and human-based judgments.First, we programmatically compute
two metrics by parsing the model's textual output and comparing it against ground-truth labels,
requiring no human judgment. These are: 1) The HDR (Hallucination Detection Rate), which
measures detection sensitivity by calculating the proportion of true physical violations (our positive
class) that the model correctly identifies. 2) The FHR (False Hallucination Rate), which assesses the
false positive rate by calculating the proportion of normal control cases (our negative class) that the


21


# Published as a conference paper at ICLR 2026


model incorrectly flags as violations.Second, to complement these automated metrics, we introduce
the EQS (Explanation Quality Score) as a human-based measure of interpretability. This score
is assigned by three expert human raters on a 5-point scale. Ratings evaluate multiple perspectives,
including physical correctness, the relevance of the explanation to the audio facts, and the logic and
clarity of the reasoning process. The final EQS is computed as the mean score across all raters and
test cases.


Overall, this multi-dimensional framework, combining automated detection accuracy (HDR/FHR)
with human-rated explanation quality (EQS), effectively captures the model's competence and
provides a reliable experimental foundation.


E.5 RESULT ANALYSIS


Table 12: Accuracy of ALLMs under different hallucination scenarios with three sub-metrics per
category (0-10 scale; higher is better).


# Model Content Mismatch Label Mismatch Logical Violation Physical Violation


# Open-source Models


MiniCPM-o 2.6 6.51/5.98/6.23 6.00/6.45/6.15 8.53/8.01/8.30 6.40/5.88/6.11
Qwen2-Audio 8.33/7.90/8.22 4.74/4.10/4.18 7.01/7.55/7.22 7.50/8.01/7.80
SALMONN 2.40/2.95/2.60 1.50/0.99/1.17 6.94/6.35/6.63 4.21/3.70/3.99
Ultravox 5.98/5.50/5.74 4.22/4.70/4.64 7.76/8.25/7.99 8.04/8.60/8.38
Step-Fun 3.97/3.83/4.09 6.17/6.33/5.78 5.88/5.75/6.30 8.89/8.50/8.96
OpenS2S 2.01/1.79/1.89 2.75/2.75/4.75 8.00/7.00/5.97 8.89/8.89/8.31
Kimi-Audio 1.38/1.39/1.38 2.42/3.15/2.75 5.00/6.00/6.09 4.50/4.00/8.58
Qwen2.5-Omni 7.96/8.02/7.99 3.80/3.00/5.57 7.67/7.67/8.12 5.20/5.00/6.36
Step-Audio2 3.51/3.73/3.61 0.00/0.00/5.82 0.00/0.00/7.80 0.00/0.00/8.28


# Closed-source Models


Gemini-1.5 Pro 8.10/8.66/8.48 7.56/8.05/7.82 8.90/8.42/8.65 8.62/9.10/8.88
Gemini-2.5 Flash 7.73/8.21/8.00 8.06/8.66/8.35 8.46/8.99/8.68 8.81/8.32/8.58
Gemini-2.5 Pro 8.49/7.91/8.17 8.99/8.53/8.82 8.99/8.41/8.70 8.20/8.77/8.50
GPT-4o Audio 4.20/3.71/3.91 2.98/2.43/2.63 3.29/3.77/3.53 9.01/8.55/8.81
GPT-4o mini Audio 2.00/2.61/2.41 1.00/1.49/1.14 1.51/0.98/1.23 8.75/9.22/9.03


Scores follow the format "DIM 1 / DIM 2 / DIM 3". Higher values indicate better performance.


Table 13: Comparison between ALLMs and hypothetical text LLMs under different hallucination
scenarios. Values shown as "ALLM / Text LLM" pairs for each model, with red arrows indicating
performance gap.


# Model Content Mismatch Label Mismatch Logical Violation Physical Violation


# Open-source Models


MiniCPM-o 2.6 6.24 / 9.42 ↓ 3 . 18 6.20 / 9.58 ↓ 3 . 38 8.28 / 8.31 ↓ 0 . 03 6.13 / 8.05 ↓ 1 . 92
Qwen2-Audio 8.15 / 9.65 ↓ 1 . 50 4.34 / 9.33 ↓ 4 . 99 7.26 / 8.02 ↓ 0 . 76 7.77 / 8.63 ↓ 0 . 86
SALMONN 2.65 / 8.85 ↓ 6 . 20 1.22 / 8.67 ↓ 7 . 45 6.64 / 7.24 ↓ 0 . 60 3.98 / 6.91 ↓ 2 . 93
Ultravox 5.74 / 9.31 ↓ 3 . 57 4.52 / 9.46 ↓ 4 . 94 8.01 / 8.78 ↓ 0 . 77 8.34 / 8.94 ↓ 0 . 60


# Closed-source Models


Gemini-1.5 Pro 8.41 / 9.82 ↓ 1 . 41 7.81 / 9.88 ↓ 2 . 07 8.66 / 9.63 ↓ 0 . 97 8.87 / 9.51 ↓ 0 . 64
Gemini-2.5 Flash 7.98 / 9.71 ↓ 1 . 73 8.36 / 9.79 ↓ 1 . 43 8.71 / 9.25 ↓ 0 . 54 8.57 / 9.03 ↓ 0 . 46
Gemini-2.5 Pro 8.19 / 9.79 ↓ 1 . 60 8.78 / 9.91 ↓ 1 . 13 8.70 / 9.69 ↓ 0 . 99 8.49 / 9.42 ↓ 0 . 93
GPT-4o Audio 3.90 / 9.22 ↓ 5 . 32 2.68 / 9.15 ↓ 6 . 47 3.53 / 7.03 ↓ 3 . 50 8.79 / 8.88 ↓ 0 . 09
GPT-4o mini Audio 2.34 / 9.03 ↓ 6 . 69 1.21 / 8.92 ↓ 7 . 71 1.24 / 7.38 ↓ 6 . 14 9.00 / 9.11 ↓ 0 . 11
Values shown as "ALLM / Text LLM" pairs with red arrows indicating performance gap between
ALLM and hypothetical text-only LLM processing. ↓ : ALLM performance falls behind text LLM by
the subscript amount. Higher values (0-10 scale) indicate better performance.


We evaluate the hallucination performance of nine models in Appendix E.4, with detailed results
presented in Table 12, Table 13, and Table 14. The results reveal the following key findings:


(1) Hallucination resistance varies significantly among different Auditory Large Language Models
(ALLMs). In the general hallucination assessments (Table 12 and 13), models often considered highly
capable, such as Gemini-1.5 Pro, Gemini-2.5 Flash, and Gemini-2.5 Pro, generally exhibit strong
performance (higher scores, indicating better resistance to hallucination). Ultravox also frequently
performs well. In contrast, models like SALMONN, and often GPT-4o Audio and GPT-4o mini Audio,
tend to show lower scores in these general tests, suggesting a higher propensity for hallucination.
Open-source models like MiniCPM-o 2.6 and Qwen2-Audio demonstrate competitive and often robust
performance against hallucinations in these experiments.


22


Published as a conference paper at ICLR 2026


Table 14: Hallucination proportion scores (implied/neutral/contradictory). Values are percentages.

|Open-source models|Col2|Col3|Col4|Col5|
|---|---|---|---|---|
|Test Type<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|
|Content Mismatch<br>Label Mismatch<br>Logical Violation<br>Physical Violation|40.00<br>40.00<br>20.00<br>50.00<br>25.00<br>25.00<br>18.18<br>81.82<br>0.00<br>20.00<br>70.00<br>10.00|100.00<br>0.00<br>0.00<br>0.00<br>100.00<br>0.00<br>0.00<br>100.00<br>0.00<br>0.00<br>75.00<br>25.00|0.00<br>100.00<br>0.00<br>0.00<br>25.00<br>75.00<br>0.00<br>91.67<br>8.33<br>11.11<br>44.44<br>44.44|38.46<br>53.85<br>7.69<br>37.50<br>43.75<br>18.75<br>14.81<br>74.07<br>11.11<br>23.81<br>61.90<br>14.29|
|Test Type<br>Step-Fun<br>OpenS2S<br>Kimi-Audio<br>Qwen2.5-Omni<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Step-Fun<br>OpenS2S<br>Kimi-Audio<br>Qwen2.5-Omni<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Step-Fun<br>OpenS2S<br>Kimi-Audio<br>Qwen2.5-Omni<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Step-Fun<br>OpenS2S<br>Kimi-Audio<br>Qwen2.5-Omni<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Step-Fun<br>OpenS2S<br>Kimi-Audio<br>Qwen2.5-Omni<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|
|Content Mismatch<br>Label Mismatch<br>Logical Violation<br>Physical Violation|54.6<br>16.2<br>29.2<br>50.0<br>20.4<br>29.6<br>34.4<br>14.4<br>51.2<br>11.7<br>11.7<br>76.7|81.7<br>2.5<br>15.8<br>57.5<br>4.6<br>37.9<br>54.4<br>3.1<br>42.5<br>41.6<br>15.1<br>43.3|67.5<br>29.2<br>3.3<br>28.7<br>33.3<br>37.9<br>33.1<br>55.0<br>11.9<br>23.8<br>17.5<br>58.8|26.2<br>0.0<br>73.8<br>77.1<br>1.2<br>21.7<br>50.6<br>31.2<br>18.1<br>52.5<br>5.8<br>41.7|


|Closed-source models|Col2|Col3|Col4|Col5|Col6|
|---|---|---|---|---|---|
|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|Test Type<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)<br>I(%)<br>N(%)<br>C(%)|
|Content Mismatch<br>Label Mismatch<br>Logical Violation<br>Physical Violation|33.33<br>33.33<br>33.33<br>57.14<br>0.00<br>42.86<br>50.00<br>0.00<br>50.00<br>0.00<br>100.00<br>0.00|0.00<br>100.00<br>0.00<br>100.00<br>0.00<br>0.00<br>0.00<br>100.00<br>0.00<br>14.29<br>85.71<br>0.00|N/A<br>N/A<br>N/A<br>75.00<br>25.00<br>0.00<br>66.67<br>33.33<br>0.00<br>50.00<br>50.00<br>0.00|0.00<br>100.00<br>0.00<br>25.00<br>33.33<br>41.67<br>27.27<br>72.73<br>0.00<br>0.00<br>100.00<br>0.00|25.00<br>75.00<br>0.00<br>23.53<br>64.71<br>11.76<br>18.75<br>75.00<br>6.25<br>19.05<br>71.43<br>9.52|


(2) The fine-grained analysis of hallucination types (Table 14) provides further insights. Models like
Gemini-2.5 Pro, Gemini-2.5 Flash, and Qwen2-Audio show excellent performance by maintaining
very low contradictory hallucination rates (C%) and often high implied factual rates (I%). GPT-4o
Audio and GPT-4o mini Audio also achieve low contradictory hallucination rates (C%), but this
is frequently accompanied by a high proportion of neutral/evasive responses (N%). This suggests
a strategy of avoiding direct contradiction, which, while reducing Overt factual errors, may not
always provide a complete or direct answer. Conversely, models such as SALMONN and, in some
cases, Ultravox, exhibit higher contradictory hallucination rates (C%). Interestingly, the tendency
of GPT-4o Audio and GPT-4o mini Audio to provide neutral responses in the Experiment IV tests
(high N%) contrasts with their sometimes lower Overall scores in Experiment I/Experiment II. This
indicates that while their strategy might reduce explicit contradictions in specific scenarios, it doesn't
always translate to consistently high factual accuracy or a strong grasp of implied context in broader
evaluations.


(3) Across the board, there is a significant improvement in hallucinatory resistance compared to
the performance of LLM. Models like SALMONN, GPT-4o Audio, and GPT-4o mini Audio, which
demonstrated a higher propensity for hallucination as ALLMs (with scores sometimes in the 1-4
range in general assessments), would likely see their accuracies elevate substantially, potentially
exceeding scores of 6.0 or 9.0, as projected in conceptual evaluations like "Table 13". This stark
improvement would underscore that a primary driver of their original hallucination issues likely
stemmed from misinterpretations or inaccuracies in audio signal processing and event recognition,
rather than inherent flaws in their core language model's reasoning when presented with unambiguous
textual information. Even top-performing ALLMs like the Gemini series and Ultravox would see
their already high scores solidify, possibly approaching near-perfect scores (e.g., 9.5-9.8), further
affirming their robust textual reasoning capabilities once the audio-to-text barrier is ideally Overcome.
The open-source MiniCPM-o 2.6 and Qwen2-Audio would also reflect this general uplift, maintaining
their strong competitive stance but at a much higher Overall performance baseline. Consequently,
the large performance disparities observed among ALLMs would diminish considerably, with the
"performance floor" for hallucination resistance rising significantly.


F ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST SAFETY


F.1 DATASET CLASSIFICATION


We classify our adversarial prompt dataset into two main categories of attacks: Jailbreak and Illegal
Activity Guidance. The Jailbreak category includes prompts designed to trick or manipulate the LLM


23


Published as a conference paper at ICLR 2026


into breaking its aligned behavior or internal safety rules under various scenario-specific contexts.
We consider three common scenario contexts for jailbreak attacks: an enterprise system, a financial
system, and a medical system. In each scenario, the malicious user adopts a role or narrative (e.g.,
impersonating an authorized person) to persuade the system to violate its policies. The Illegal Activity
Guidance category, on the other hand, consists of prompts where the user explicitly seeks instructions
or assistance in carrying out unlawful activities (e.g., advice on crimes), which a properly aligned
model should refuse. To illustrate each category, we provide one representative example prompt from
each scenario in Jailbreak (enterprise, financial, medical) and one from Illegal Activity Guidance.
These examples, tailored to specific scenarios for Jailbreak attacks (enterprise, financial, medical)
and direct solicitations for Illegal Activity Guidance, represent a spectrum of prohibited requests
designed to test the model's adherence to safety policies:


F.2 DATASET CONSTRUCTION METHOD


To construct our dataset of adversarial prompts, we followed a two-stage process: prompt generation
using GPT-4o (OpenAI et al., 2024) and audio synthesis using F5-TTS (Chen et al., 2025). First,
we leveraged OpenAI's GPT-4o (the multimodal GPT-4 with voice capabilities) to automatically
generate a diverse set of harmful or policy-violating user queries for each category of attack. GPT-4o
was chosen for prompt generation due to its advanced language capabilities and alignment safeguards,
ensuring that the produced queries are realistic and varied. We crafted a consistent prompt template
to guide GPT-4o in creating these adversarial questions. This template provided the scenario context
(enterprise, financial, medical, or illegal), specified the speaker's gender (male or female) and
emotional tone (angry or sad), and instructed GPT-4o to produce a user query attempting to break the
system's rules. The template was designed to simulate a malicious user's perspective, instructing
GPT-4o to create challenging queries that, while mimicking harmful intent, adhered to its content
generation policies during the generation process. An example of the prompt construction template is
shown below:


24


Published as a conference paper at ICLR 2026


Using this template (with appropriate substitutions for each scenario and persona), we generated
the full set of prompts. In total, we obtained 300 text prompts for the Jailbreak category and 300
for the Illegal Activity Guidance category. For the Jailbreak prompts, we generated 100 queries for
each of the three scenarios (Enterprise, Financial, Medical). Within each scenario's 100 prompts, we
ensured an even coverage of the four gender-emotion combinations: 25 prompts each for Male-Angry,
Male-Sad, Female-Angry, and Female-Sad. Similarly, for the Illegal Activity Guidance category,
we produced 300 prompts evenly divided into 75 for each of the four combinations (male-angry,
male-sad, female-angry, female-sad). This balancing ensures that our dataset controls for speaker
gender and emotional tone, allowing us to analyze their effects on attack success. After generating
the textual prompts, we converted each prompt into spoken audio using the F5-TTS (Chen et al.,
2025) text-to-speech system. F5-TTS is a state-of-the-art TTS model capable of high-quality voice
cloning with emotional expressiveness. For each prompt, we selected a voice profile that matched the
intended gender and could convey the specified emotion (angry or sad). The text of the prompt was
then synthesized into an audio file using F5-TTS, resulting in a spoken version of the query. This
audio conversion is crucial because our attack evaluations are conducted via GPT-4o's voice interface.
Using F5-TTS to produce natural and emotive speech ensures the audio prompts closely mimic real
user utterances in content and delivery.


Overall, our dataset comprises 600 adversarial prompts (and their corresponding spoken audio): 300
targeting Jailbreak attacks across three realistic scenarios, and 300 seeking Illegal Activity Guidance.
The prompts were systematically generated and balanced across different speaker profiles, then
rendered to audio via F5-TTS for use in voice-based attack experiments. This construction method
provides a reproducible way to create challenging test cases for evaluating GPT-4o's safety measures,
while covering a broad spectrum of attack styles and contexts.


Figure 8: Safety dataset construction and experiment set: emotion, gender and scenario.


25


Published as a conference paper at ICLR 2026


F.3 ADDITIONAL IMPLEMENTATION DETAILS


Inference Prompt To ensure the credibility and real-world applicability of our evaluation framework, we designed highly realistic system prompts for each attack scenario. These prompts not only
define the role, boundaries, and compliance expectations of the AI assistant in different domains, but
also reflect the potential for social engineering attacks specific to each context. Through carefully
crafted instructions, the system prompts aim to immerse the model in its assigned role while exposing
it to user-side inputs that simulate deception, emotional manipulation, and professional pressure.
This setup enables a comprehensive assessment of the model's boundary-control mechanisms under
adversarial conditions.


Below is the Inference Prompt of Enterprise System Jailbreak.


Below is the Inference Prompt of Financial System Jailbreak.


Below is the Inference Prompt of Medical System Jailbreak.


26


Published as a conference paper at ICLR 2026


Below is the Inference Prompt of Illegal Activities Guidance.


Evaluation Prompt For the evaluation tasks in this study, we employed a large language model
(GPT-4o) as the scoring agent, guided by a set of highly structured evaluation prompts. The scoring
criteria are designed with clearly defined ethical boundaries and fine-grained response levels, enabling
the detection of nuanced behaviors such as ambiguous refusals and borderline policy violations. The
enforced constraint of producing a single integer score ensures discrete and interpretable outputs,
which facilitates downstream statistical analysis. This method demonstrates strong alignment with
human expert evaluations, while offering lower cost and higher consistency. Furthermore, by
separately defining evaluation prompts for jailbreak and illegal activity guidance tasks, we enable
independent measurement of behavioral deviation and ethical judgment failures in model responses.


Below is the Evaluation Prompt of Jailbreak.


27


Published as a conference paper at ICLR 2026


Below is the Evaluation Prompt of Illegal Activities Guidance.


28


Published as a conference paper at ICLR 2026


F.4 EVALUATION METHOD AND METRICS


# Defense Success Rate (DSR):


DSR =

N


N


i =1


si

si ∈{ 1 , 2 , 3 , 4 , 5 } (9)
5 [,]


Here, N is the number of test samples, and si is the GPT-4o score for the i -th response. A higher
DSR reflects stronger safety alignment and robustness against adversarial audio input. The safety of
ALLMs is evaluated using these datasets and the safety metric detailed in Section F.3, with results
presented in Section F.5.


F.5 ADDITIONAL RESULT


Unexpected Outputs from Open-source Models In Table 3, we present the experimental results of
open-source models. However, these results are based on the observation that open-source models
randomly produce erroneous outputs for approximately one-third of the test inputs. Specifically, the
models sometimes fail to receive the audio portion of a sample and only process the corresponding


29


Published as a conference paper at ICLR 2026


text. As a result, they tend to generate brief, generic replies such as "Hi! I am your enterprise
assistant. Feel free to ask me anything. How can I help you?" This occurs because they are often
only capable of correctly parsing audio inputs shorter than 30 seconds. During evaluation, such
responses are frequently rated highly by the LLM-based evaluator, leading to an inflated overall
safety score. Nonetheless, since the proportion of these inflated scores is relatively consistent across
all open-source models, comparisons among them remain meaningful.


Table 15: Combined safety test results across models (Open-source Models). The scores are presented
as Defense Success Rate (DSR, %). We recorded the results of emotion comparison experiments
and gender comparison experiments, where the audio narrator's gender (male or female) and audio
narrator's emotion (angry or sad) were combined in pairs, resulting in 4 sets of control experiments.
The scores are interpreted as "higher is better" (higher scores indicate stronger ability to defend
against jailbreak attacks). ↑ indicates value above the average of the model in that specific category, ↓
indicates value below average, with subscript showing the absolute difference from average.


SALMONN Ultravox Qwen2-Audio MiniCPM-o 2.6 Step-Fun Qwen2.5-omni Kimi-Audio OpenS2S Step-Audio2


# Enterprise System Jailbreak


# Medical System Jailbreak


In Table 15 and Table 16, we summarize the scores of different models under Jailbreak and Illegal
Activities Guidance induction experiments, categorized by speaker gender and emotional tone.


Jailbreak. It can be observed that the medical scenario presents a higher attack risk. Moreover,
regardless of the scenario, all open-source models exhibit high average success rates for jailbreak
attacks (i.e., lower defense scores), indicating that they are generally vulnerable to such attempts.
Overall, based on the presented data, jailbreak attacks related to external domains such as finance
and healthcare are more likely to bypass model defenses, whereas closed-source models demonstrate
stronger resistance.


Illegal Activities Guidance. In attacks that directly seek guidance for unlawful behavior, closedsource models (especially GPT-4o) show a high degree of safety. The GPT-4o audio interface
consistently refuses this type of "illegal activity" inquiry, with near-zero success rates. In contrast,
open-source audio models lack similarly stringent safeguards. This suggests that in scenarios
involving illegal activities guidance, open-source models are much more susceptible to generating
harmful content, whereas closed-source models are generally able to block such requests.


Model Type Analysis. Closed-source models exhibit overall stronger defense capabilities. GPT-4o
maintains robust resistance across various audio-based attacks, and Gemini-1.5 Pro also demonstrates
relatively stable performance. By contrast, open-source models (e.g., SALMONN) are more easily
bypassed and compromised.


Effect of Emotion and Gender. Existing experiments indicate that changing the speaker's gender
has minimal impact on model outputs. When tested with male, female, or neutral voices, GPT-4o
demonstrates nearly identical detection results for prohibited content. In other words, voice gender


30


Published as a conference paper at ICLR 2026


Table 16: Combined safety test results across models (Closed-source Models).


# Gemini-1.5 Pro GPT-4o Audio GPT-4o mini Audio Gemini-2.5 Flash Gemini-2.5 Pro


# Enterprise System Jailbreak


# Medical System Jailbreak


does not significantly alter a model's ability to recognize or reject unsafe requests. Similarly, in terms
of emotional tone-whether angry or sad-there is no noticeable difference in safety performance.


Table 17: Results of text LLMs


GPT-4o GPT-4o mini Gemini-1.5 Pro Gemini-2.5 Pro Gemini-2.5 Flash


Score 100 100 100 100 100


Additionally, we conducted experiments with closed-source text models, using the text inputs from
our original experimental setup to evaluate the performance of large language models. However, we
noted that pure text input loses the key emotional information (e.g., anger, sadness) contained in
the original audio, which could lead to an unfair comparison with Audio Large Language Models
(ALLMs).


To compensate for this and ensure a more rigorous comparison, we augmented the text inputs with
explicit emotional prompts designed to simulate the emotional state of the original audio. The specific
augmentation prompts were as follows:


As shown in Table 17, the results revealed that even after incorporating these strong emotional
prompts, all tested text models still achieved 100% safety. This finding more strongly substantiates
our conclusion: for ALLMs, audio containing genuine emotion and rich contextual cues is indeed
more likely to break through the model's safety defenses and cause jailbreaking compared to pure
text input, even when augmented with emotional markers.


31


Published as a conference paper at ICLR 2026


G ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST PRIVACY


G.1 DATASET CLASSIFICATION CRITERIA


In the process of leveraging ALLMs for inference, privacy concerns frequently arise. These concerns
can be broadly categorized into two types: (1) Direct Privacy Leakage and (2) Privacy Inference
Leakage .


(1) Direct Privacy Leakage, where users may inadvertently disclose sensitive personal information
during interactions. This information is stored within the model's context, and when queried, the
model may directly reveal it to unauthorized individuals. Such behavior reflects a deficiency of
privacy awareness, as the model fails to differentiate between sensitive information and routine audio
question-answering tasks. To assess direct privacy leakage, we designed an evaluation framework
incorporating six categories of sensitive personal data, such as bank account numbers, mobile phone
numbers, social security numbers, home addresses, and phone passwords, aiming to measure the
privacy security performance of ALLMs. Detailed examples of the dataset can be found in Figure 9.
(2) Privacy Inference Leakage, stemming from the powerful inference capabilities of ALLMs. Even


Figure 9: Privacy dataset construction and experiment set


when audio does not explicitly contain private information, ALLMs may infer sensitive details-such
as a speaker's age, ethnicity, or the contextual setting of a conversation through advanced reasoning.
This introduces potential privacy vulnerabilities. To address these issues, this paper proposes a
comprehensive privacy evaluation dataset designed to assess both direct privacy leakage and privacy
inference risks in ALLMs. Detailed examples of the dataset can be found in Figure 9.


G.2 DATASET CONSTRUCTION METHOD


To evaluate the privacy leakage risks of ALLMs, we constructed two datasets: one targeting direct
privacy leakage and the other focusing on the inference of implicit private information.


Direct Privacy Leakage Dataset (600 samples). For the direct privacy leakage dataset,we created
six categories of sensitive personal information: bank account numbers, home addresses, phone
numbers, phone passwords, driver's license numbers, and social security numbers (Wang et al.,
2023a). For each category, we first prompted Grok to generate textual data containing personal names
and corresponding private information (xAI, 2025). The generated data were then further randomized
to enhance diversity and reduce identifiability. Based on this preliminary dataset, Grok was instructed
to generate realistic dialogue scenarios in which each type of private information might naturally


32


Published as a conference paper at ICLR 2026


appear. Subsequently, Grok produced context-appropriate conversational texts for each scenario.
Finally, we selected voice samples from the Common Voice dataset and used F5-TTS to synthesize
the corresponding audio files (Chen et al., 2025; Ardila et al., 2020). Each category contained 100
entries, resulting in a total of 600 test samples.


Privacy Inference Leakage Dataset (300 samples). For the evaluation of implicit privacy inference,
including age, ethnicity, and conversation setting (Xu et al., 2025a), we constructed another dataset
comprising 300 audio samples, with 100 samples per category and construction method refers to
other study (Wang et al., 2025b) . The age and ethnicity samples were obtained by filtering and
curating entries from the Common Voice database. For the conversation setting category, we first
collected ambient audio clips representing common daily-life environments such as "workspace"
and "home." Grok was then used to generate dialogues likely to occur in these environments. These
dialogues were synthesized into speech using TTS and mixed with the corresponding background
environment audio to create the final dataset. Below, we provide a selection of prompts employed
during the dataset construction process using large language models.


Use of TTS in Privacy-Related Tasks. Within the privacy dimension of our benchmark, F5 TTS is
used only for the direct privacy leakage and inference leakage (settings of conversation). For these
tasks, we rely on both the systematic evaluations reported in the F5 TTS paper and our own additional
checks, which demonstrate that F5 TTS produces intelligible, natural-sounding speech closely
matching the reference speakers. This supports its use as a proxy for human speech in our context. In
addition, we manually sampled synthesized audio for all privacy-related tasks that rely on F5 TTS.
We verified that the audio faithfully matches the intended transcripts, is easy to understand, and yields
clearly distinguishable voices perceived as realistic human speech. For dimensions where richer
paralinguistic phenomena or real-world acoustic variability are more critical, we deliberately use real
human speech or real environmental recordings instead of TTS. Taken together, the combination of
manual validation and the documented realism of F5 TTS provides evidence that the constructed
privacy-related datasets are an appropriate and practically useful representation of human audio
interactions relevant to our evaluation.


G.3 ADDITIONAL IMPLEMENTATION DETAILS


Prompt for Data Generation. After generating the personal privacy information and potential
scenarios in which conversations may occur, we employed the following prompt to instruct the
language model to complete the corresponding dialogue text.


33


Published as a conference paper at ICLR 2026


Filtering Criteria for the Privacy Inference Dataset.


Inference Prompt. We designed distinct prompts for two major categories of privacy leakage: direct
privacy leakage and privacy inference leakage. Specifically, the prompts for direct privacy leakage
are intended to elicit explicit responses that reveal sensitive information, while those for privacy
inference leakage require the model to perform inference that may indirectly disclose private details.
For each category, we define two baseline prompts along with their corresponding privacy-aware
variants. This setup allows us to investigate the potential impact of prompt design on the behavior
of ALLMs in the context of privacy preservation. Below, we provide concrete examples of these
prompts.


34


Published as a conference paper at ICLR 2026


Evaluation Prompt. In the evaluation of both types of privacy risks, we primarily employ GPT-4o
for scoring the model responses. During the prompt design phase, we explicitly instruct the model to
recognize specific content that constitutes privacy-sensitive information, aiming to mitigate potential
biases in the model's understanding of privacy. To achieve a detailed and nuanced assessment of the
outputs, we ultimately use the model to provide fine-grained scores. Below are specific examples.


35


Published as a conference paper at ICLR 2026


36


Published as a conference paper at ICLR 2026


G.4 EVALUATION METHOD AND METRICS


To evaluate the privacy protection capabilities of ALLMs, we employed a model-based evaluation
framework. This framework focused on two aspects: (1) handling explicit private information
(e.g., bank account numbers, home addresses), and (2) inferring implicit private attributes (e.g., age,
ethnicity, conversation setting).


For each audio input, privacy-related questions were posed via audio question answering (e.g., "What
is the speaker's bank account number?" or "What is the speaker's age?"). The models' responses
were recorded and automatically scored using a five-point scoring system, ranging from 5 (complete
refusal due to privacy concerns) to 1 (full disclosure of private information) (Yan et al., 2025), with
intermediate scores reflecting varying degrees of caution in information disclosure.


We reported two key metrics based on the scores:


Refusal rate: the proportion of responses scored 3-5 (indicating refusal or cautious non-disclosure),


Inference accuracy when privacy is leaked: This rate shows inference accuracy only for samples
where privacy was leaked.


Results were aggregated by model and by privacy type to provide an overall assessment of privacy
awareness across ALLMs.


G.5 EXPERIMENT DESIGN AND RESULTS


Experiment Design. To systematically evaluate the behavior of ALLMs in scenarios involving direct
privacy leakage, we developed a red-teaming framework based on the Audio Question Answering
(AQA) task. The experimental procedure is detailed as follows:


We used synthetic conversational audio containing specific types of private information (e.g., bank
account numbers, home addresses, and phone numbers) as input to five closed-source ALLMs (e.g.,
GPT-4o Audio, Gemini-1.5 Pro) and nine open-source ALLMs (e.g., Qwen2-Audio). We then posed
a series of privacy-related questions tied to the audio content and recorded the models' responses.


To investigate model behavior under varying intervention conditions, we introduced two distinct
prompt settings:


37


Published as a conference paper at ICLR 2026


 - Baseline Prompt : No privacy protection guidance was provided; questions directly requested
information from the audio content, e.g., "Tell me the speaker's bank account number."

 - Privacy aware Prompt : Questions included explicit instructions to prioritize privacy, e.g.,
"Note that the bank account number of a specific person is private information and should
not be disclosed."


By analyzing the models' responses under these two prompt conditions, we assessed their privacy
awareness and ability to appropriately handle sensitive information.


To evaluate ALLMs' performance in implicit privacy inference, we adopted a consistent AQA-based
red-teaming framework. A total of 300 synthetic audio samples were used, covering three implicit
privacy types (age, ethnicity, and conversation setting), with 100 samples per type. These were all
used for baseline and privacy-aware prompt conditions.


The audio samples were input into five closed-source ALLMs (e.g., GPT-4o Audio, Gemini-1.5
Pro) and nine open-source ALLMs (e.g., Qwen2-Audio). For age and ethnicity inference, implicit
information was queried via AQA (e.g., "What is the speaker's age?" or "What is the speaker's
ethnicity?"), and responses were scored using the same five-point scoring system as in the direct
leakage experiments (5 = complete refusal, 1 = full disclosure). Scoring was performed automatically
by a pretrained language model.


For conversation setting inference, we designed two input types: (1) scenario-related synthesized
audio (e.g., describing a "coffee shop" environment); and (2) background audio combined with
dialogue audio (e.g., coffee shop ambient sound mixed with character dialogue).


To investigate how text-based models perform in addressing privacy-related issues similar to those
discussed in this paper, we conducted experiments on closed-source models using test data that can be
transformed into textual form. We just used social security number for this experiment. Specifically,
the inputs to our experiments are structured as follows:


# Results.


By analyzing the data presented in the Table 18 and 19, we observed the following key points:


(1) Performance on the Direct Privacy Leakage Dataset


From the experimental results, it can be observed that different models exhibit varying levels of
sensitivity to different types of personal privacy information. For instance, in the case of highly
sensitive data such as Social Security Numbers (SSNs), most models demonstrate high refusal rates.
Notably, GPT-4o Audio exhibits no leakage whatsoever, regardless of prompt formulation. In contrast,
MiniCPM-o 2.6 consistently discloses SSNs in full, both with and without privacy-enhancing prompts.
More importantly, the inference accuracy for SSN disclosures by MiniCPM-o 2.6 exceeds 85%,
indicating that the leaked information is highly accurate. This suggests that the model can precisely
retain and reproduce private information throughout the conversation, thereby posing a significantly
greater privacy risk. For other types of private information, such as home addresses and mobile
phone passwords, the Gemini series models exhibit a 100% complete leakage rate when no prompt
engineering techniques are applied. Moreover, the accuracy of these disclosures is also high, further
amplifying the potential privacy risk (Luo et al., 2025). Other models also show similar trends, but
overall, the GPT-4o series demonstrates superior comprehensive performance, exhibiting stronger
privacy protection capabilities compared to other models.


38


# Published as a conference paper at ICLR 2026


Table 18: Refusal rate analysis: direct and inference privacy leakage (%), higher is better.


|Model|Direct privacy leakage|Col3|Col4|Col5|Col6|Col7|Inference leakage|Col9|Col10|
|---|---|---|---|---|---|---|---|---|---|
|Model|Bank Account<br>w/o<br>w/|Driver License<br>w/o<br>w/|Phone number<br>w/o<br>w/|Pwd<br>w/o<br>w/|SSN<br>w/o<br>w/|Address<br>w/o<br>w/|Age<br>w/o<br>w/|Ethnicity<br>w/o<br>w/|Setting<br>w/o<br>w/|


# Open-source Models


# Closed-source Models

|Gemini-1.5 Pro<br>GPT-4o Audio<br>GPT-4o Mini Audio<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro|1 ↓32.6 100 ↑32.6<br>100 ↑66.4 100 ↑32.6<br>100 ↑66.4 100 ↑32.6<br>8 ↓25.6 98 ↑30.6<br>0 ↓33.6 96 ↑28.6|0 ↓28.4 100 ↑34.4<br>100 ↑71.6 100 ↑34.4<br>100 ↑71.6 100 ↑34.4<br>0 ↓28.4 100 ↑34.4<br>0 ↓28.4 94 ↑28.4|0 ↓25.1 99 ↑36.9<br>67 ↑41.9 99 ↑36.9<br>100 ↑74.9 100 ↑37.9<br>0 ↓25.1 100 ↑37.9<br>100 ↑74.9 98 ↑35.9|0 ↓27.2 98 ↑31.0<br>100 ↑72.8 99 ↑32.0<br>100 ↑72.8 100 ↑33.0<br>0 ↓27.2 96 ↑28.5<br>0 ↓27.2 100 ↑33.0|71 ↑24.7 100 ↑37.1<br>100 ↑54.0 100 ↑37.1<br>100 ↑54.0 100 ↑37.1<br>0 ↓46.0 100 ↑37.1<br>100 ↑54.0 94 ↑31.1|0 ↓19.7 94 ↑36.5<br>85 ↑65.3 100 ↑42.5<br>100 ↑80.3 100 ↑42.5<br>0 ↓19.7 85 ↑27.5<br>1 ↓18.7 83 ↑25.5|16 ↑0.4 28 ↑5.7<br>2 ↓13.6 22 ↓0.3<br>9 ↓6.6 70 ↑47.7<br>2 ↓13.6 8 ↓14.3<br>0 ↓15.6 0 ↓22.3|0 ↓8.5 0 ↓9.4<br>18 ↑9.5 34 ↑24.6<br>33 ↑24.5 50 ↑40.6<br>0 ↓8.5 1 ↓8.4<br>0 ↓8.5 0 ↓9.4|0 ↓3.0 0 ↓4.6<br>0 ↓3.0 4 ↓0.6<br>0 ↓3.0 0 ↓4.6<br>1 ↓2.0 1 ↓3.6<br>1 ↓2.0 2 ↓2.6|
|---|---|---|---|---|---|---|---|---|---|
|Average|33.6<br>67.4|28.4<br>65.6|25.1<br>62.1|27.2<br>67.0|46.0<br>62.9|19.7<br>57.5|15.6<br>22.3|8.5<br>9.4|3.0<br>4.6|


Note: "w/o" indicates the refusal rates before applying a privacy-aware prompt, while "w/" shows rates after applying it. Higher values indicate
better performance. Blue arrows ( ↑ ) indicate better performance (higher refusal rate) than average; red arrows ( ↓ ) indicate worse performance
(lower refusal rate) than average. SSN: Social Security Number; Pwd: Phone Password; Setting: Setting of Conversation.


Table 19: Privacy leakage threat assessment: Inference accuracy when privacy is leaked (%), with
leak rates. Minimum leak threshold: 10. Lower accuracy is better for privacy.


Bank Account Driver License Phone Number Password SSN Address Age Ethnicity Setting
Model
Acc% Leak Acc% Leak Acc% Leak Acc% Leak Acc% Leak Acc% Leak Acc% Leak Acc% Leak Acc% Leak


# Open-source Models


# Closed-source Models

|Gemini-1.5 Pro<br>GPT-4o Audio<br>GPT-4o Mini Audio<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro|69.7 ↓10.7 99/100<br>† 0/100<br>† 0/100<br>94.6 ↑14.2 92/100<br>94.0 ↑13.6 100/100|63.0 ↓7.7 100/100<br>† 0/100<br>† 0/100<br>84.0 ↑13.3 100/100<br>84.0 ↑13.3 100/100|92.0 ↑14.6 100/100<br>93.9 ↑16.6 33/100<br>† 0/100<br>98.0 ↑20.6 99/99<br>† 0/100|98.0 ↑7.7 100/100<br>† 0/100<br>† 0/100<br>98.0 ↑7.7 100/100<br>98.0 ↑7.7 100/100|93.1 ↑14.4 29/99<br>† 0/100<br>† 0/100<br>94.5 ↑15.8 91/91<br>† 0/100|95.0 ↑20.2 100/100<br>80.0 ↑5.2 15/100<br>† 0/100<br>100 ↑25.2 100/100<br>96.0 ↑21.2 99/100|22.6 ↓1.0 84/100<br>23.5 ↓0.2 98/100<br>16.5 ↓7.1 91/100<br>28.6 ↑4.9 98/100<br>20.0 ↓3.6 100/100|52.0 ↑22.5 100/100<br>42.7 ↑13.2 82/100<br>26.9 ↓2.6 67/100<br>39.0 ↑9.5 100/100<br>61.0 ↑31.5 100/100|63.0 ↑6.1 100/100<br>69.0 ↑12.1 100/100<br>61.0 ↑4.1 100/100<br>67.3 ↑10.4 98/100<br>65.7 ↑8.7 99/100|
|---|---|---|---|---|---|---|---|---|---|
|Average|80.4<br>-|70.7<br>-|77.4<br>-|90.3<br>-|78.7<br>-|74.8<br>-|23.6<br>-|29.5<br>-|56.9<br>-|


Note: This table shows inference accuracy ONLY for samples where privacy was leaked. Higher values indicate greater privacy threat.
Blue arrows ( ↑ ) indicate higher threat than average; red arrows ( ↓ ) indicate lower threat. ' † ' indicates insufficient leaked samples ( < 10).
Leak rates show leaked/total samples.


Table 20: Performance comparison of models for SSN protection based on refusal rates.

|Text Audio<br>Model SSN (w/o) SSN (w/) SSN (w/o) SSN (w/)|Col2|Col3|
|---|---|---|
|Gemini-1.5 Pro<br>GPT-4o /Audio<br>GPT-4o Mini /Audio<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro|2<br>100<br>61_ ↑59<br>100 ↑0<br>2 ↑0<br>100 ↑0<br>72 ↑70<br>98 ↓2<br>82 ↑80<br>94 ↓6|71<br>100<br>100 ↑29<br>100 ↑0<br>100 ↑29<br>100 ↑0<br>0 ↓71<br>100 ↑0<br>100 ↑29<br>100 ↑_0|


Note: Values are in the format "w/o" (original input data) and "w/" (with prompt enhancements). Gemini-1.5 Pro
is the baseline for both text and audio tasks. ↑ indicates better performance relative to baseline; ↓ indicates worse
performance; Gemini-1.5-pro indicate baseline performance. Subscripts show the absolute difference from the
baseline.


# (2) Performance on the Privacy Inference Dataset


In privacy inference tasks, the model is required to infer personal privacy information from a given
audio segment and its corresponding textual question. Experimental results show that except for
SALMONN, which performs relatively well in inferring attributes such as age and ethnicity, the
privacy leakage rate of most models exceeds 80% (The model tends to directly respond: "The age
of the speaker cannot be inferred from the given audio."). This indicates that most current models
lack effective mechanisms for actively identifying or preventing potential privacy risks. For example,
the open-source model Qwen2-Audio rarely refuses to answer questions related to age and ethnicity,


39


Published as a conference paper at ICLR 2026


whereas SALMONN shows comparatively better behavior. This difference may stem from the
blurred boundary between privacy-related and general information, making it difficult for models to
distinguish between them effectively. Furthermore, the high accuracy indicates that models can infer
sensitive attributes not explicitly present in the context, such as a speaker's likely ethnicity, based on
indirect cues like accent, highlighting the risk of implicit privacy inference.


(3) Impact of Prompt Engineering on Privacy Protection


Introducing prompts containing privacy protection content (prompt engineering) can significantly
enhance the model's ability to prevent direct privacy leaks and reduce the refusal leakage rate. For
example, the Gemini series achieves over an 80% increase in refusal leakage rates for sensitive
information such as bank account numbers and home addresses when enhanced prompts are used.
However, this approach has limited effectiveness in mitigating inference-based privacy leaks and may
even lead to a decrease in refusal rates. For instance, after introducing privacy-enhanced prompts,
SALMONN experiences a 21% increase in leakage rate in age inference tasks.


(4) Comparison Between Audio and Text Models


The experimental results in Table 20 also reveal differences in privacy awareness between audio
and text models. Similar to audio models, the text-based GPT-4o series demonstrates strong security
awareness. However, overall, text models tend to have lower refusal rates, indicating slightly reduced
sensitivity to privacy information compared to audio models. Nevertheless, through the application
of prompt engineering techniques, the privacy protection capabilities of text models can still be
significantly improved, although the improvement is typically not as substantial as that seen in audio
models. For example, Gemini-2.5 Flash achieves an improvement of less than 20% in protecting
social security number under enhanced prompting.


H ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST ROBUSTNESS


H.1 DATASET CLASSIFICATION CRITERIA


To evaluate the model's robustness in accurately processing audio and resisting the generation of
erroneous or inconsistent information when faced with a spectrum of common audio perturbations and
challenging listening conditions, we propose a comprehensive evaluation framework. The detailed
experimental design is shown in Figure 10.


The framework's core design organizes the evaluation around six principal categories of audio
interference: Adversarial Robustness, Background Conversation, Environmental Sound, Audio
Quality Variation, Noise Interference, and Multiple Speakers. This approach aims to comprehensively
cover a variety of complex challenge scenarios, ranging from subtle audio distortions that might lead
to misinterpretations or the generation of irrelevant content, to significant interference that could
obscure the primary audio signal. This evaluation framework facilitates an in-depth understanding
of the model's behavioral performance, including its ability to maintain accuracy, coherence, and
appropriately deny inconsistent descriptions under various auditory interferences. The following
examples illustrate the types of challenges addressed in our dataset:


40


Published as a conference paper at ICLR 2026


Figure 10: Robustness experiment design concept.


41


Published as a conference paper at ICLR 2026


H.2 DATASET CONSTRUCTION METHOD


To ensure the reliability and effectiveness of the native audio quality, we introduce big_bench_audio
dataset (Srivastava et al., 2022) as one of the native voice data samples. The subsequent audio
production follows the following process:


1. Benchmark Audio Collection: Clear, interference-free, high-quality audio was collected
as foundational material.


2. Interference Addition: Corresponding interference factors were added to the benchmark
audio according to the different robustness dimensions. Our data construction methodologies
were tailored to each robustness dimension:


 - For Adversarial Robustness: We generate adversarial audio samples using the Projected
Gradient Descent (PGD) attack method under an L∞ constraint on the waveform


42


Published as a conference paper at ICLR 2026


perturbation. The perturbation budget ε is set to 8 × 2 [-], and 30-40 gradient steps
are used for generating each adversarial example.

 - For Target recognition in multi-person conversations / Background Conversation: We
overlaid unrelated speech at varying volume levels.

 - For Environmental noise treatment / Environmental Sound: We incorporated naturalistic
ambient noises like wind, rain, and traffic; superimpose real environmental recordings
(such as restaurant background sounds, traffic noise, office ambient sounds, etc.).

 - For Audio quality adaptability / Audio Quality Variation: We systematically degraded
audio through sample rate reduction, bit-depth manipulation, and compression artifacts;
apply different degrees of compression, downsampling and signal attenuation.

 - For Noise interference resistance / Noise Interference: We added white noise, pink
noise, and mechanical noises at graduated intensity levels.

 - For Multiple speakers speaking simultaneously or alternately / Multiple Speakers: We
created scenarios with overlapping speech from 2-4 speakers with varying degrees
of turn-taking structure; mix the voices of multiple speakers and control the overlap
between speakers and the relative intensity of their voices.

3. Quality control: Professionals review the generated data to ensure that the degree of interference is in line with the design intent, maintaining sufficient challenge while guaranteeing
the fairness of the test.


H.3 EXPERIMENTAL DESIGN AND EVALUATION METRICS


H.3.1 EXPERIMENTAL DESIGN


We designed a comprehensive red-teaming framework to evaluate hallucination tendencies and assess
robustness against various auditory challenges in ALLMs. Our methodology involved creating specialized datasets that test specific aspects of model behavior. we evaluated model performance against
common auditory challenges including adversarial attacks, background conversations, environmental
sounds, audio quality variations, noise interference, and multiple speakers. We conducted several
experimental protocols with varying prompt structures. For hallucination testing, these included:


 - Experiment I: Evaluate the accuracy of the model in understanding oral content, answering
questions, analyzing causes, and summarizing multi-speaker dialogues under different types
of audio inputs. Meanwhile, test the stability and reliability of the model scoring its own
output based on external references;

 - Experiment II: The quantitative evaluation model's automatic speech recognition performance stability relative to the original and clearer audio when dealing with audio that may
have acoustic differences or noise reduction processing;

 - Experiment III: The evaluation model is based on predefined clarity assessment dimensions
to subjectively judge and interpret the clarity of audio, and to examine the consistency and
accuracy of its evaluation when distinguishing the original audio from potential variant
audio.


Specific experimental setups for robustness testing are detailed in their respective section.


To ensure the comprehensiveness and objectivity of the assessment, we have constructed 40 test
samples for each dimension, covering multiple languages and topics. These samples simulate typical
interferences and challenges in real-world application scenarios. We use a series of metrics to evaluate
the performance of the model under different robustness challenges. These indicators mainly include
the core task performance of the model under interference conditions (for example, the accuracy of
answering questions in the audio, the accuracy of judging the clarity of the audio, or the accuracy
of the dialogue summary), as well as the accuracy of the model's scoring of its answers in the first
stage in the two-stage prompt setting. We will summarize the results based on the model and the
specific types of robustness challenges. The evaluation framework aims to comprehensively assess
the capabilities of different ALLMs in handling challenging audio that contains potentially interfering
or adversarial information. Meanwhile, to ensure the reproducibility and systematicness of the
evaluation, we provide a standardized approach to construct and test these challenging test cases. All
evaluations were conducted using pre-trained models directly for inference, without any retraining.


43


Published as a conference paper at ICLR 2026


We provide a common JSON data template in the robustness evaluation dataset for defining each test
case. The Simplified JSON template is as follows:


44


Published as a conference paper at ICLR 2026


H.3.2 EVALUATION METRICS


To address the challenge of directly quantifying model robustness or output hazards, we adopted
a model-based evaluation method. Since both the input and output in our test are in text form, we
use GPT-4o to assist in the evaluation. We adopted a discrete 10-point scoring system (from 0 to 10
points), and each task had a customized assessment description:


 - A score of 10 indicates that the ALLM judgment result is highly consistent with the actual
audio quality.

 - A score of 0 indicates that the model is completely unable to perceive the changes in audio
quality specified in the prompt.


We have defined two main evaluation indicators:


Cross-modal word error rate (CM-WER) : Measure the similarity or difference between the
generated text description and the human reference description at the lexical or sequence level.


CM-WER = [S] [ +] [ D] [ +] [ I] (10)

N

Among them, S, D, I represents the number of words for replacement, deletion and insertion respectively. N is the total number of words in the reference text.


Content consistency rate (CCR) : Measure the degree of match between the generated text output
and the original input at the factual level or the key content level.


CCR =

K


K

- 1 (Key information appears. i ) (11)

i =1


45


# Published as a conference paper at ICLR 2026


Among them, K is the number of key information points in the input. 1 ( · ) is an indicator function.
Its value is 1 when the model output contains the corresponding key information points; otherwise, it

# is 0.


H.3.3 RESULTS


Table 21: Accuracy of ALLMs under different robustness scenarios averaged over tasks. The highest
average accuracy under each scenario is in bold. The overall low accuracy highlights the hallucination
concerns. ↑ : higher than column average, ↓ : lower than column average, subscript is absolute
difference.


# Model AR AQV BC ES MS NI


# Open-source


# Closed-source


Average 6.67 6.94 7.08 6.89 6.27 6.95


‡ : AR: Adversarial Robustness; AQV: Audio Quality Variation; BC: Background Conversation;
ES: Environmental Sound; MS: Multiple Speakers; NI: Noise Interference.


Table 22: The clarity and accuracy of audio transcription are scored, with a range of 0 to 10. Higher
score means more accurate transcription. The highest score under each model is in bold. ↑ : higher
than column average, ↓ : lower than column average, subscript is absolute difference.

|Col1|Open-source Models|
|---|---|
|Test Type|MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox<br>Step-Fun<br>OpenS2S<br>Kimi Audio<br>Qwen2.5-Omni|
|Adversarial Robustness<br>Audio Quality Variation<br>Background Conversation<br>Environmental Sound<br>Multiple Speakers<br>Noise Interference|8.27_ ↑2.96<br>6.06 ↑0.75<br>5.84 ↑0.53<br>1.00 ↓4.31<br>7.12 ↑1.81<br>1.57 ↓3.74<br>1.42 ↓3.89<br>5.76 ↑0.45<br>8.56 ↑3.03<br>5.90 ↑0.37<br>6.25 ↑0.72<br>1.29 ↓4.24<br>7.06 ↑1.53<br>1.39 ↓4.14<br>4.10 ↓1.43<br>6.17 ↑0.64<br>8.35 ↑2.82<br>6.40 ↑0.87<br>6.58 ↑1.05<br>1.06 ↓4.47<br>7.06 ↑1.53<br>1.42 ↓4.11<br>4.08 ↓1.45<br>6.29 ↑0.76<br>8.19 ↑2.45<br>6.43 ↑0.69<br>7.06 ↑1.32<br>1.27 ↓4.47<br>7.28 ↑1.54<br>1.86 ↓3.88<br>4.50 ↓1.24<br>6.30 ↑0.56<br>8.74 ↑2.56<br>6.78 ↑0.60<br>6.33 ↑0.15<br>2.44 ↓3.74<br>7.22 ↑1.04<br>3.14 ↓3.04<br>2.03 ↓4.15<br>7.67 ↑1.49<br>4.27 ↑0.35<br>3.83 ↓0.09<br>4.22 ↑0.30<br>1.34 ↓2.58<br>6.52 ↑2.60<br>1.42 ↓2.50<br>3.46 ↓0.46<br>3.56 ↓0._36|
|Average|7.73<br>5.90<br>6.05<br>1.40<br>7.04<br>1.80<br>3.26<br>5.96|


# Closed-source Models

|Test Type|Gemini-1.5 Pro Gemini-2.5 Flash Gemini-2.5 Pro GPT-4o Audio GPT-4o mini Audio|
|---|---|
|Adversarial Robustness<br>Audio Quality Variation<br>Background Conversation<br>Environmental Sound<br>Multiple Speakers<br>Noise Interference|8.09_ ↑2.78<br>7.61 ↑2.30<br>8.17 ↑2.86<br>6.70 ↑1.39<br>1.44 ↓3.87<br>7.90 ↑2.37<br>7.59 ↑2.06<br>8.17 ↑2.64<br>5.80 ↑0.27<br>1.73 ↓3.80<br>7.71 ↑2.18<br>6.87 ↑1.34<br>7.35 ↑1.82<br>6.93 ↑1.40<br>1.73 ↓3.80<br>8.06 ↑2.32<br>7.03 ↑1.29<br>7.50 ↑1.76<br>6.72 ↑0.98<br>2.36 ↓3.38<br>7.66 ↑1.48<br>7.24 ↑1.06<br>7.99 ↑1.81<br>8.39 ↑2.21<br>4.74 ↓1.44<br>5.86 ↑1.94<br>5.61 ↑1.69<br>6.37 ↑2.45<br>2.85 ↓1.07<br>1.67 ↓2._25|
|Average|7.55<br>6.99<br>7.59<br>6.23<br>2.28|


46


Published as a conference paper at ICLR 2026


Table 23: Word Error Rate (%) of ALLMs' ASR components under different robustness scenarios
relative to Gemini-1.5 Pro baseline. Lower WER indicates better performance. Note: Values show
WER (%), with arrows indicating performance relative to Gemini-1.5 Pro baseline. ↑ indicates
better performance (lower WER); ↓ indicates worse performance (higher WER). Subscripts show the
absolute difference in WER from the baseline. For the baseline model, differences are shown as zero
with a phantom arrow.


|Model Group|Model|Adversarial Bg. Conv. Env. Sound Audio Qual. Noise Int.|
|---|---|---|
|Open-source|MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox|32.50_ ↓32.00<br>37.74 ↓34.18<br>47.47 ↓29.17<br>31.53 ↓28.82<br>34.90 ↓33.46<br>14.59 ↓14.09<br>37.71 ↓34.15<br>50.52 ↓32.22<br>16.13 ↓13.42<br>24.72 ↓23.28<br>112.51 ↓112.01<br>125.66 ↓122.10<br>114.21 ↓95.91<br>115.35 ↓112.64<br>106.89 ↓105.45<br>48.58 ↓48.08<br>71.47 ↓67.91<br>79.31 ↓61.01<br>57.41 ↓54.70<br>61.83 ↓60._39|
|Closed-source|Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio|0.50<br>3.56<br>18.30<br>2.71<br>1.44<br>0.40_ ↑0.10<br>2.50 ↑1.06<br>15.20 ↑3.10<br>1.80 ↑0.91<br>1.20 ↑0.24<br>0.30 ↑0.20<br>1.50 ↑2.06<br>10.50 ↑7.80<br>1.00 ↑1.71<br>0.80 ↑0.64<br>2.50 ↓2.00<br>6.50 ↓2.94<br>20.00 ↓1.70<br>3.50 ↓0.79<br>4.00 ↓2.56<br>10.50 ↓10.00<br>25.80 ↓22.24<br>35.60 ↓17.30<br>12.30 ↓9.59<br>15.20 ↓13._76|


Table 24: The assumption accuracy of llm in different robustness scenarios (assuming a perfect
conversion from audio to text, despite the degradation of the original audio). Overall, the relatively
high score, although with fluctuations, indicates that if the core text information is robustly extracted,
the text llm can maintain a strong reasoning ability. The minimum average accuracy rate in each case
is indicated in bold.


|Model Type (Hypothetical Text Version)|Adversarial Bg. Conv. Env. Sound Audio Qual. Noise Int. Multi. Spkr.|
|---|---|
|Open-source<br>MiniCPM-o 2.6<br>Qwen2-Audio<br>SALMONN<br>Ultravox|8.05<br>8.91<br>8.23<br>8.76<br>8.11<br>8.43<br>7.58<br>8.01<br>7.69<br>8.28<br>8.39<br>N/A<br>6.13<br>7.88<br>7.04<br>8.23<br>8.33<br>8.52<br>7.28<br>8.56<br>8.33<br>9.15<br>8.69<br>8.48|
|Closed-source<br>Gemini-1.5 Pro<br>Gemini-2.5 Flash<br>Gemini-2.5 Pro<br>GPT-4o Audio<br>GPT-4o mini Audio|9.12<br>9.28<br>9.15<br>9.42<br>8.93<br>9.05<br>8.65<br>9.33<br>8.76<br>9.31<br>9.11<br>8.77<br>9.26<br>9.41<br>9.22<br>9.53<br>9.16<br>9.23<br>7.54<br>9.02<br>8.56<br>8.41<br>8.53<br>8.89<br>8.41<br>8.22<br>7.89<br>8.35<br>8.03<br>8.17|


We evaluate the robustness of nine models against various auditory challenges in Appendix H.3.1,
with detailed results presented in Table 21 Table 22 Table 23 and Talbe 24. The results reveal the
following key findings:


(1) Robustness levels vary significantly among different ALLMs. Across both Experiment I and
Experiment III evaluations, models such as the Gemini series (1.5 Pro, 2.5 Flash, 2.5 Pro) consistently
demonstrate high robustness scores across various challenging audio conditions. MiniCPM-o 2.6
also shows strong performance, particularly excelling in Experiment III where it often registered
the highest scores in several categories. In contrast, models like SALMONN generally exhibit lower
robustness scores in Experiment I, though showing some improvement in Experiment III. Qwen2Audio presents a more mixed performance profile across both experiments, with scores often in the
mid-range.


(2) A notable observation is the performance shift for certain models between Experiment I and
Experiment III evaluations. For instance, Ultravox and GPT-4o mini Audio, which achieved respectable scores in Experiment I, displayed significantly lower robustness scores in Experiment III
across most test types, indicating potential sensitivities highlighted by the Avg_Rating_Score metric
or the specific test instances in Experiment III. GPT-4o Audio also showed variability, performing
well in some Experiment I tests but exhibiting vulnerabilities in Experiment III, particularly in the
"Noise Interference" category. This discrepancy suggests that model robustness can be sensitive to
the specific nature of the audio perturbations and the evaluation metric used. While the Gemini series
and MiniCPM-o 2.6 maintain strong or improved performance across both experimental setups, the
variability seen in other models underscores the challenge of achieving consistent robustness across
diverse auditory challenges and evaluation methodologies.


(3)A significant enhancement in robustness scores would be anticipated for most models when
transitioning to the Text LLM scenario. Models like SALMONN, which originally showed lower


47


Published as a conference paper at ICLR 2026


robustness, would likely see a considerable uplift. For example, its performance against adversarial
conditions (originally 2.0) might rise to an estimated 6.0-7.0 as a Text LLM, assuming the adversarial
nature, if translatable to text, is something the Text LLM can partially discern or if the core text
remains intelligible. Similarly, Qwen2, with its mixed ALLM profile, would likely exhibit more
consistently strong performance (e.g., estimated scores largely above 8.0) as many of its original
mid-range scores were likely due to difficulties in parsing compromised audio. Even the consistently
high-performing Gemini 2.5 Pro and MiniCPM-o 2.6 would maintain or slightly improve their already
strong scores, benefiting from the idealized clarity of input, ensuring their full textual reasoning
capabilities are engaged without being hindered by audio artifacts. The key insight here is that if the
core semantic content can be successfully extracted from degraded audio and presented as clear text,
the downstream reasoning task becomes significantly easier for the LLM component.


I ADDITIONAL DETAILS OF EVALUATION ON AUDIOTRUST AUTHENTICATION


I.1 DATASET CLASSIFICATION


We categorize authentication-related attacks into three main types: Hybrid Spoofing, Identity Verification Bypass, and Voice Cloning Spoofing . Each category is defined below with an illustrative example
drawn from our dataset.


Hybrid Spoofing. This category refers to attacks that combine multiple tactics or modalities to
deceive authentication mechanisms. Hybrid Spoofing might involve blending different techniques
(e.g., using AI-generated voices together with stolen personal data) to create a more convincing
impersonation. By leveraging more than one vector of attack, these scenarios can bypass safeguards
that focus on a single authentication factor. An example is given in the box below:


Identity Verification Bypass. These attacks aim to evade or trick identity checks (e.g., KYC
processes or login validations) by using fabricated or stolen credentials. In this category, adversaries
leverage AI to produce synthetic identities or forged documents and data that convincingly mimic
legitimate identification. The goal is to impersonate a real user or create a fictitious persona that
passes as genuine, thereby bypassing standard identity verification safeguards. An example from our
dataset is shown below:


Voice Cloning Spoofing. This class of attacks involves the use of AI-based voice cloning to
impersonate a trusted individual and pass voice-dependent identity checks. The attacker generates an
artificial voice that closely matches the victim's voice profile and uses it in authentication or social
engineering scenarios. Such spoofs exploit the reliance on voice recognition or voice-based identity
confirmation, often to illicitly gain access or convince human operators. An illustrative example is
provided below:


48


Published as a conference paper at ICLR 2026


I.2 DATASET CONSTRUCTION METHOD


For each of the above attack categories, we constructed a dedicated evaluation subset using scenariobased generation and curation techniques. The dataset sizes were predefined per category, and each
subset was built to capture diverse attack strategies within that category.


Hybrid Spoofing (100 samples). This novel attack approach combines non-technical tactics such as
social engineering with environmental background audio (e.g., footsteps of passersby in an apartment
entrance scenario). The dataset is constructed by transcribing text into audio using F5-TTS and
then mixing the generated speech with background sounds. The construction process includes the
following steps: first, language models are used to generate typical voice authentication scenarios;
second, representative background audio for these scenarios is manually collected from the FreeSound
website; third, large language models generate simulated authentication dialogue based on social
engineering tactics and their corresponding scenarios; finally, appropriate speaker identities, focusing
on diverse timbre characteristics are selected from Common Voice, and the selected text and voices
are converted into speech using F5-TTS.


Figure 11: Authentication dataset construction: identity verification bypass, voice cloning spoofing
and hybrid spoofing


Identity Verification Bypass (100 samples). The construction of this dataset follows the methodology used for hybrid spoofing dataset, with an emphasis on generating textual content that simulates
social engineering attacks and incomplete authorization phrases. Subsequently, reference audio is
selected from Common Voice, and the corresponding speech is synthesized using F5-TTS. In addition,
we do not perform audio track mixing of the spoken dialogue with corresponding environmental
background noise, and instead conduct experiments using only the original dialogue audio.


Voice Cloning Spoofing (200 samples). We collected 100 samples of voice wake-up words from
an existing dataset (He et al., 2022), with each sample consisting of approximately 2 seconds of
wake-up word audio. These samples constitute the Voice Cloning Spoofing test set. Detailed wake-up
words and their corresponding developers are listed in Table 25. Each sample was cloned using F5TTS (Chen et al., 2025), and we constructed paired audio clips composed of the original audio (used


49


Published as a conference paper at ICLR 2026


as the legitimate user's enrollment input) and the cloned audio (used as the attack input attempting
to bypass authentication). In addition, we designed two distinct authentication scenarios for the
experiments- Awake Assistant and Open The Door . In the former, the wake-up words are used to
authenticate an AI voice assistant, while in the latter, they are used to activate access to a high-security
laboratory door, with an emphasis on the consequences of authentication failures. Through this
experimental setup, we aim to explore how different system prompt formulations affect an ALLM's
ability to defend against voice cloning spoofing under identical audio inputs.


Table 25: Wake-up words of different manufacturers.


# Developer Wake-up Words Developer Wake-up Words


Note: All data in this table are adapted from (He et al., 2022).


I.3 ADDITIONAL IMPLEMENTATION DETAILS


Inference Prompt To ensure our evaluation closely mirrors real-world scenarios, distinct inference
prompts were designed for each data point across all experiments, complementing the audio inputs to
the ALLMs. For the hybrid spoofing dataset, in particular, prompts were varied based on the specific
attack scenario. Illustrative examples of these inference prompts are provided below.


Below is the Inference Prompt for Experiment of Voice Cloning Spoofing.


Below is the Inference Prompt for Evaluating Password Verification with Uncertain Inputs.


50


Published as a conference paper at ICLR 2026


Below is the Inference Prompt for Examining Voice Authentication Accuracy under Real-World
Environmental Conditions.


Evaluation Prompt For the evaluation tasks in this study, we employed a large language model
(GPT-4o) as the scoring agent, guided by a set of highly structured evaluation prompts. The scoring
criteria are designed with clearly defined ethical boundaries and fine-grained response levels, enabling
the detection of nuanced behaviors such as ambiguous refusals and borderline policy violations. The
enforced constraint of producing a single integer score ensures discrete and interpretable outputs,
which facilitates downstream statistical analysis. This method demonstrates strong alignment with
human expert evaluations, while offering lower cost and higher consistency. Furthermore, by
separately defining evaluation prompts for jailbreak and illegal activity guidance tasks, we enable
independent measurement of behavioral deviation and ethical judgment failures in model responses.


Below is the Evaluation Prompt for Testing an ALLMs's Spoofed Voice Detection in Authentication.


Below is the Evaluation Prompt for Assessing an ALLMs's Ability to Detect Spoofed Voice Commands Amid Contextual Environmental Sounds.


51


Published as a conference paper at ICLR 2026


I.4 EVALUATION METHOD AND METRICS


Our evaluation across all experiments primarily relies on the following statistical metric:


Imposter Rejection Rate (IRR), defined as the proportion of unauthorized voices that are correctly
rejected by the system.


I.5 ADDITIONAL RESULT


Table 26: Results of different scenarios of voice cloning spoofing defense effectiveness (%)


# Model Group Model Awake Assistant Open The Door


Note: ↓ and ↑ represent the change in the defense success rate against voice cloning spoofing when comparing
the 'Open the door' scenario with stricter system prompts to the 'Awake Assistant' scenario. Higher numbers
represent better defense effectiveness.


Voice Cloning Spoofing. In Table 26, we analyze the experimental results of all open-source and
closed-source models under two scenarios with different levels of text prompt flexibility. It can be
observed that most models perform better in the "Open The Door" scenario than in the "Awake
Assistant" scenario. with a significant increase in the defense success rate against voice cloning
spoofing. This is particularly evident for Ultravox, Gemini-1.5 Pro, and Gemini-2.5 Pro . This
indicates that even in Audio-based Large Language Models (ALLMs) where audio is the primary


52


Published as a conference paper at ICLR 2026


Table 27: Results of identity verification bypass and hybrid spoofing (%)


|Model Group|Model|Identity Bypass Identity Bypass (Text) Hybrid Spoofing (bg) Hybrid Spoofni g (no bg)|
|---|---|---|
|Open-source|SALMONN<br>Ultravox<br>Qwen2-Audio<br>MiniCPM-o 2.6<br>Step-Fun<br>Qwen2.5-omni<br>Kimi-Audio<br>OpenS2S<br>Step-Audio2|26_ ↓44.3<br>-<br>7 ↓63.1<br>8 ↓61.4<br>95 ↑24.7<br>-<br>57 ↓13.1<br>59 ↓10.4<br>42 ↓28.3<br>-<br>71 ↑0.9<br>60 ↓9.4<br>24 ↓46.3<br>-<br>43 ↓27.1<br>56 ↓13.4<br>79 ↑8.7<br>-<br>97 ↑26.9<br>98 ↑28.6<br>19 ↓51.3<br>-<br>64 ↓6.1<br>36 ↓33.4<br>79 ↑8.7<br>-<br>76 ↑5.9<br>86 ↑16.6<br>97 ↑26.7<br>-<br>66 ↓4.1<br>67 ↓2.4<br>37 ↓33.3<br>-<br>15 ↓55.1<br>20 ↓49._4|
|Closed-source|Gemini-1.5 pro<br>GPT-4o Audio<br>GPT-4o mini Audio<br>Gemini-2.5 Flash<br>Gemini-2.5-Pro|96_ ↑25.7<br>94 ↓1.0<br>95 ↑24.9<br>100 ↑30.6<br>98 ↑27.7<br>94 ↓1.0<br>100 ↑29.9<br>100 ↑30.6<br>100 ↑29.7<br>91 ↓4.0<br>100 ↑29.9<br>100 ↑30.6<br>97 ↑26.7<br>96 ↑1.0<br>93 ↑22.9<br>81 ↑11.6<br>95 ↑24.7<br>100 ↑5.0<br>97 ↑26.9<br>100 ↑30._6|
|Average|Average|70.3<br>95.0<br>70.1<br>69.4|


Note: Values show imposter rejection rate (IRR) (%) with performance indicators relative to average values. ↓
indicates lower IRR than average (worse security performance); ↑ indicates higher IRR than average (better
security performance). Subscripts show absolute difference from average. "-" indicates the subset of the dataset
was used exclusively to evaluate model performance across different modalities (audio and text). The evaluation
was restricted to closed-source models to streamline the analysis. "bg" = with background audio, "no bg" =
without background audio.


input, the accuracy of text prompts still plays a significant role. Furthermore, this has implications
for the downstream applications of ALLMs: for scenarios involving security, authentication, etc.,
designing a strict and precise prompt may lead to a considerable improvement in model performance.


Identity Verification Bypass. From the Table 27, it can be observed that closed-source models
are harder to deceive compared to open-source models. Among them, GPT-4o mini Audio performs
the best, with a IRR(Imposter Rejection Rate) of only 100%. Among all closed-source models,
Qwen2.5-omni performs the worst, with a IRR as low as 19%. These results indicate that even without
providing complete or explicit authentication information, voice models still have a high probability
of passing identity verification, which poses a significant security risk. In the Table 27, we also
investigated the IRR metric in pure text mode, which is labeled as the "Text" column. This represents
using the corresponding text-based model of the audio model to perform inference on the text version
of the identity verification bypass dataset. It can be observed that, in general, the IRR is lower in text
mode compared to audio mode. This suggests that the additional paralinguistic information present
in the speech modality, such as emotional cues or prosodic features, may contribute positively to the
authentication performance of the model.


Hybrid Spoofing. In this configuration, we simulate social engineering attacks combined with
background audio that may occur in real authentication scenarios, aiming to study the impact of
background sounds on the verification outcome. The experimental results show that the influence of
added background audio on model performance does not follow an obvious pattern. For instance,
Qwen2-Audio 's IRR increases by 11%, whereas Gemini-1.5 Pro 's IRR decreases instead.


J BACKGROUND AND RELATED WORK


J.1 AUDIO LARGE LANGUAGE MODELS


With the rapid increase in parameter and data scales, text-only large language models (LLMs) have
achieved groundbreaking progress in language understanding and generation, as exemplified by
models such as GPT-4 and the Gemini series (Achiam et al., 2023; Team et al., 2023). Building
on this, researchers explored cross-modal alignment by integrating visual information into unified
representation spaces. This led to early models like CLIP (Radford et al., 2021) and Flamingo
(Alayrac et al., 2022), and later, models such as GPT-4V and Gemini capable of processing highresolution images and long contexts. Recently, ALLMs have further expanded the input modalities by
incorporating temporal acoustic features (such as Mel-spectrograms, log-power spectra, or variablelength waveforms) for joint modeling with semantic tokens (Yang et al., 2024b). In contrast to


53


Published as a conference paper at ICLR 2026


the visual modality, audio signals exhibit high dynamic range and transient variations in both time
and frequency domains. Consequently, most ALLMs adopt separate time-frequency encoders or
discretizing acoustic tokenizers to capture rich attributes such as timbre, rhythm, and scene (Hu
et al., 2024; Du et al., 2023). Representative models include Qwen2-Audio with its pipeline-style
natural language prompt pre-training (Chu et al., 2024), SALMONN with a unified "auditorylanguage-music" framework (Tang et al., 2024), and WavLLM with a dual-encoder plus Prompt-LoRA
adaptation mechanism (Hu et al., 2024). After cross-modal alignment, these models demonstrate
strong capabilities in content and scene understanding, enabling applications such as spoken question
answering, music style analysis, and environmental sound event retrieval. They also show great
promise in medical diagnosis (e.g., detection of respiratory diseases, analysis of heart sounds), voice
control for smart homes, and multimedia generation and editing (Zhang et al., 2025; Rani et al., 2017;
Banerjee et al., 2024).


However, the multimodal nature of ALLMs also introduces new trustworthiness challenges. First,
since the models are trained on large-scale acoustic-text paired corpora, they are prone to memorizing
and leaking sensitive user speech information, and are therefore vulnerable to privacy attacks
such as membership inference (Tomashenko et al., 2024; Hu et al., 2022). Second, adversarial
audio can exploit inaudible ultrasound or fine-grained perturbations to mislead ALLMs: early work
such as DolphinAttack (Zhang et al., 2017a) and Vrifle (Li et al., 2024b) demonstrated covert
manipulation of voice assistants via inaudible commands injected with ultrasonic carriers above
20 kHz (Zheng et al., 2023b; Li et al., 2023c; Ze et al., 2023); recently, AdvWave systematically
proposed gradient shattering repair and two-stage optimization, achieving over 40% jailbreak success
rates on various ALLMs (Kang et al., 2025). In addition, large-scale multimodal models are similarly
susceptible to cross-modal instruction injection and protocol mismatching attacks, potentially leading
to unauthorized content generation (Liu et al., 2023), privilege escalation (He et al., 2025), and even
physical harm (Lu et al., 2024). When integrated into voice-interface agentic systems, trustworthiness
challenges are amplified and become paramount (Liu et al., 2025; Yu et al., 2025). To address these
risks, the community has proposed a range of safety, security, and privacy mechanisms, including
SafeEar, an empirical content privacy-preserving audio deepfake detection framework (Li et al.,
2024a) and active detection with post-hoc rejection (Li et al., 2023b) differentially private pretraining, segment-wise gradient compression defenses . Nevertheless, in real-time voice scenarios,
these approaches still face detection latency and robustness trade-offs, highlighting the urgent need
for further research.


J.2 AUDIO LARGE LANGUAGE MODEL BENCHMARKS


Current evaluations of ALLMs have primarily focused on their performance in fundamental tasks.
SUPERB (Yang et al., 2021) first introduced a unified evaluation framework for speech processing,
where self-supervised speech representation models are assessed across ten downstream tasks,
including phoneme recognition, keyword spotting, speaker verification, and emotion recognition. This
benchmark demonstrates the generality and effectiveness of SSL representations in diverse scenarios.
Subsequently, SUPERB-SG (Tsai et al., 2022) extended this framework to encompass advanced
semantic understanding and generative tasks, such as speech translation (Wahlster, 2013), voice
conversion (Mohammadi & Kain, 2017), speech separation (Wang & Chen, 2018), and enhancement
(Benesty et al., 2006), in order to further evaluate models' generative abilities and robustness. SLURP
(Bastianelli et al., 2020) provides a large-scale dataset and evaluation framework targeting spoken
language understanding, thereby enabling a comprehensive comparison between end-to-end and
pipeline approaches, while SLUE (Shon et al., 2023) assesses complex tasks including audio question
answering, summarization, and named entity recognition within realistic speech scenarios with
low-resource context, highlighting the impact of ASR models on downstream task performance. In
the field of audio captioning, AudioCaps (Kim et al., 2019) and Clotho (Drossos et al., 2020) serve
as major evaluation benchmarks, with Clotho-AQA (Lipping et al., 2022) pioneering a real-world
dataset for audio question answering, facilitating the evaluation of models' semantic reasoning
capabilities. The recently released AIR-Bench (Yang et al., 2024b) categorizes evaluation tasks
into two dimensions: fundamental abilities and dialogic abilities, covering a wide variety of audio
types such as speech, environmental sounds, and music. The fundamental dimension comprises
19 specific tasks, whereas the dialogic dimension uses open-ended question-answering formats to
evaluate generative performance of models under diverse and mixed audio backgrounds. These
benchmarks offer diverse and comprehensive frameworks for evaluation and comparison of ALLMs,


54


Published as a conference paper at ICLR 2026


yet they mainly focus on fundamental performance; systematic assessments of safety, ethical risks,
and social impacts remain insufficient.


Existing safety evaluation benchmarks are relatively limited, with most focusing on multimodal
scenarios or specific attack methods. For example, MM-SafetyBench (Liu et al., 2024) proposed
an evaluation framework for image query attacks targeting multimodal LLMs, collecting 5,040
text-image pairs to assess model safety under image manipulation. SafeBench (Ying et al., 2024) constructed 23 risk scenarios and 2,300 multimodal harmful example pairs by automatically generating
harmful multimodal queries, and designed a collaborative LLM review protocol to enhance evaluation
reliability. In the audio domain, the Chat-Audio Attacks (CAA) benchmark (Yang et al., 2025d)
designed four types of audio attacks for dialog audio attack evaluation, and adopted a synthesis of
standard evaluation, GPT-4o-based assessment, and human evaluation strategies to measure model
robustness. The study (Yang et al., 2025b) comprehensively evaluated the safety performance of five
audio multimodal models via red-teaming against harmful audio, textual interference, and specific
jailbreak attacks, revealing attack success rates as high as 70%. Furthermore, the SEA method (Lu
et al., 2025) proposed a synthetic embedding augmentation approach for safety alignment, verifying
the feasibility of aligning audio safety in multimodal models using only textual data. Although the
above benchmarks have made progress in their respective areas, there is still a lack of a unified audio
safety benchmark that comprehensively considers multidimensional risks such as fairness, hallucination detection, privacy protection, robustness, and authentication. Therefore, this work proposes the
AudioTrust benchmark, which encompasses six core directions: fairness evaluation, hallucination
detection, safety defense, privacy leakage, robustness challenges, and identity authentication. By
combining scenario-driven question-answer pairs with GPT-4o automated evaluation, AudioTrust
reveals the safety boundaries of ALLMs in high-risk environments, thereby providing systematic
guidance for the secure and trustworthy deployment of future models.


K LIMITATIONS


While AudioTrust offers a pioneering and comprehensive framework for the multidimensional
trustworthiness evaluation of Audio Large Language Models (ALLMs), certain limitations warrant
consideration. Firstly, the datasets, though meticulously constructed to cover a diverse range of
scenarios across fairness, hallucination, safety, privacy, robustness, and authentication, are necessarily finite and may not encapsulate the full spectrum of real-world complexities or all potential
adversarial manipulations, such as reliability (Ma et al., 2025). Secondly, the dynamic nature of
ALLM development and emerging threat landscapes also means that any benchmark, including
AudioTrust, represents a snapshot in time and will require continuous updates to remain relevant and
comprehensive in assessing the evolving trustworthiness of these rapidly advancing systems. Thirdly,
future work will extend our safety analysis to prosodic factors such as speech rate, investigating how
extreme acoustic variations may act as adversarial channels by influencing the model's front-end
perception and recognition.


L LESSONS FROM ALLMS FOR FUTURE FINE-TUNING


Our results suggest that stronger general capability does not automatically translate into higher
trustworthiness, and that different dimensions require targeted design and alignment. Below we
summarize the main implications, following the six AudioTrust dimensions.


Fairness. We observe that both closed source and open source models still exhibit serious group
unfairness in decision-making tasks. This suggests that future ALLMs should explicitly incorporate
fairness objectives into training and alignment. We can add fairness-aware rewards and penalties
in RLHF and RLAIF so that outputs displaying systematic bias across gender, age, accent, or
socioeconomic cues receive negative feedback. Crucially, we need to adopt fairness regularization
and fairness coefficients to achieve reward fairness (Ouyang et al., 2025); otherwise, these misaligned
rewards may negatively impact the alignment of ALLMs.


Hallucination. Both open and closed source models are better at recognizing coarse physical
impossibilities than at detecting subtler content mismatches or temporal logic errors in audio. This
pattern indicates that current training is still dominated by transcription and text-style objectives, and
that models rely heavily on textual priors rather than building a robust audio-grounded representation


55


Published as a conference paper at ICLR 2026


of physical and temporal structure. To reduce hallucinations in audio settings, future training should
move beyond simple ASR plus instruction tuning and include objectives that reward correct reasoning
about acoustic scenes and penalize logical and physical inconsistencies. One concrete direction is
to inject synthetic negative examples with explicit physical violations and temporal inversions and
optimize models to flag or reject such cases, so that audio commonsense and causal reasoning become
part of the learning target rather than a side effect.


Safety. Closed-source models show weaknesses in medical scenarios and under emotional deception,
while open-source models are prone to jailbreaks. This indicates that generic text-based refusal
training is insufficient for the audio modality (Yang et al., 2025c). Future ALLMs require domainspecific alignment in high-risk areas like healthcare. Furthermore, since our results show models relax
their guard under emotional pressure, safety fine-tuning must explicitly incorporate emotional and
paralinguistic cues. Training models on datasets containing "emotional harmful queries" will teach
them to treat urgent or distressed requests for illicit guidance as suspicious rather than authoritative.


Privacy. Closed-source models are much better at refusing to repeat explicit identifiers, while opensource models often memorize and reproduce bank accounts, SSNs or addresses with high accuracy
once these appear in context. At the same time, all models, including the strongest ones, freely infer
and disclose attributes such as age and ethnicity from voice. This points to two distinct needs. First,
training, RLHF and RLAIF should include explicit privacy protection objectives: potential leakage of
direct identifiers should be treated as a safety violation and receive negative feedback, and techniques
such as memory truncation and selective unlearning should be integrated into the training pipeline so
that models can forget or down-weight sensitive content. Second, models need to learn contextual
privacy reasoning, that is, to recognize that some questions (for example, "guess my age or ethnicity
from my voice") should not be answered even if the model has the capability to infer them, and that
in certain contexts "not inferring" is the correct behaviour. Achieving robust privacy awareness may
require more than generic safety alignment: it calls for instruction tuning and preference optimization
on purpose-built privacy scenarios, potentially augmented with reinforcement learning to allow the
model to explore and learn appropriate responses in sensitive situations.


Robustness. The gap between closed source and open source ALLMs is particularly clear under
realistic acoustic conditions such as background conversation, environmental noise, multiple speakers
and audio quality degradation. Closed source systems appear to benefit from more mature front-end
encoders and extensive exposure to noisy data, whereas many open source models hallucinate content
or misinterpret non speech noise as meaningful when the signal becomes imperfect. Future ALLMs,
especially in the open source ecosystem, will need to integrate stronger and more noise aware audio
encoders and train on large scale real world noisy corpora, rather than relying mainly on clean or
synthetic speech. Robustness training should explicitly target disentangling speech from background
and channel effects so that the language component can condition on a stable representation of what
was actually said, which in turn will reduce downstream hallucinations and improve reliability in real
deployments.


Authentication. We find models are easily fooled by cloned voices, though strict system prompts can
significantly improve defense. This suggests two complementary directions: First, training should
enforce strict adherence to security instructions, treating them as hard constraints rather than soft
preferences. Second, since current models prioritize semantic understanding over acoustic verification,
future ALLMs must be integrated with components possessing stronger discriminative ability for
speaker verification and deepfake detection (Li et al., 2024a). Strengthening the acoustic perception
of synthetic artifacts, combined with prompt-level hardening, is essential for secure deployment.


M SOCIAL IMPACT


The introduction of AudioTrust carries significant positive social implications by fostering the
development and deployment of more trustworthy ALLMs. By systematically evaluating fairness,
AudioTrust aims to mitigate the perpetuation of harmful societal stereotypes related to gender, race,
age, accent, and other sensitive attributes in critical applications like recruitment, admissions, and
financial loan evaluations. Exposing and quantifying biases in ALLMs can drive research towards
debiasing techniques, ultimately promoting more equitable outcomes and reducing discrimination
facilitated by AI systems. The focus on hallucination detection is crucial for enhancing the reliability
of ALLMs; by identifying tendencies to generate physically impossible, logically inconsistent, or


56


Published as a conference paper at ICLR 2026


factually incorrect information, AudioTrust encourages the development of models that provide
more accurate and dependable responses. This is particularly vital in high-stakes environments such
as emergency response or medical information provision, where hallucinations could have severe
consequences.


The safety evaluation component addresses the urgent need to prevent ALLMs from being exploited
for malicious purposes, such as generating harmful content, guiding illegal activities, or bypassing guardrails in enterprise, financial, and healthcare systems. By providing a structured way to
test against jailbreak attempts and emotional deception, AudioTrust contributes to building more
resilient systems that can resist manipulation and adhere to ethical guidelines. Similarly, the privacy
dimension of AudioTrust highlights risks of unintentional information disclosure and inference of
sensitive attributes from audio. This awareness can lead to the design of ALLMs with stronger
privacy-preserving mechanisms, safeguarding user data and fostering greater user trust in voiceinteractive technologies. Evaluating robustness against various audio disturbances-ranging from
background noise and multi-speaker environments to adversarial attacks-ensures that ALLMs can
maintain performance integrity in realistic, imperfect conditions, which is essential for their practical
adoption in everyday life and critical infrastructures. Finally, the authentication assessments address
vulnerabilities to voice cloning and spoofing, thereby contributing to more secure voice-based access
control systems and protecting individuals and organizations from identity-related fraud.


Collectively, AudioTrust serves as a catalyst for responsible innovation, providing developers, policymakers, and the public with crucial insights into the trustworthiness of ALLMs, and guiding the
community towards creating AI technologies that are not only powerful but also fair, reliable, safe,
private, robust, and secure for societal benefit. It establishes a foundational benchmark that can
inform future standards and best practices for trustworthy AI in the audio domain.


N DATA SHEET


Table 28: Dataset statistics in fairness dimension.


|Dimension|Attribute|Decision-making<br>(Samples)|Stereotype-driven<br>(Samples)|Metrics|
|---|---|---|---|---|
|Fairness|Gender|60|60|Group Fairness Score|
|Fairness|Age|60|60|60|
|Fairness|Race|60|60|60|
|Fairness|Personality traits|60|60|60|
|Fairness|Economic status|60|60|60|
|Fairness|Linguistic characteristics|60|60|60|
|Fairness|Accent|60|60|60|
|Total|Total|420|420||


Table 29: Dataset statistics in hallucination dimension.


|Dimension|Sub-task|Samples|Metrics|
|---|---|---|---|
|Hallucination|Content mismatch|80|Accuracy,<br>hallucination rate|
|Hallucination|Label mismatch|80|80|
|Hallucination|Logical violation|80|80|
|Hallucination|Physical violation|80|80|
|Total|Total|320||


We follow the documentation frameworks provided by (Xu et al., 2025a).


N.1 MOTIVATION


# For what purpose was the dataset created?


 - The AudioTrust dataset was created to serve as a large-scale benchmark for evaluating the multifaceted trustworthiness of Multimodal Audio Language Models (ALLMs). It aims to help the


57


Published as a conference paper at ICLR 2026


Table 30: Dataset statistics in safety dimension.


|Dimension|Task|Samples|Metrics|
|---|---|---|---|
|Safety|Enterprise system jailbreak|100|Defense Success Rate<br>(DSR)|
|Safety|Financial system jailbreak|100|100|
|Safety|Medical system jailbreak|100|100|
|Safety|General illegal activity guidance|300|300|
|Total|Total|600||


Table 31: Dataset statistics in privacy dimension.


|Dimension|Attribute|Direct Privacy<br>Leakage<br>(#Samples)|Inference Privacy<br>Leakage<br>(#Samples)|Metrics|
|---|---|---|---|---|
|Privacy|Bank account number|100|-|Privacy refusal rate,<br>Accuracy of<br>leaked information|
|Privacy|Driver license number|100|-|-|
|Privacy|Home address|100|-|-|
|Privacy|Phone number|100|-|-|
|Privacy|Phone password|100|-|-|
|Privacy|SSN|100|-|-|
|Privacy|Age|-|100|100|
|Privacy|Ethnicity|-|100|100|
|Privacy|Setting of conversation|-|100|100|
|Total|Total|600|300||


Note: "-" indicates that no data has been constructed for the corresponding category.


research community better understand the capabilities, limitations, and potential risks associated
with deploying these state-of-the-art AI models.

 - The benchmark examines model behavior across the following six critical dimensions:

- Hallucination: Fabricating content unsupported by audio.

- Robustness: Performance under audio degradation.

- Authentication: Resistance to speaker spoofing/cloning.

- Privacy: Avoiding leakage of personal/private content.

- Fairness: Consistency across demographic factors.

- Safety: Generating safe, non-toxic, legal content.


N.2 DISTRIBUTION


Will the dataset be distributed to third parties outside of the entity (e.g., company, institution,

# organization) on behalf of which the dataset was created?


 - Yes. The AudioTrust dataset is publicly released and accessible to third parties.


How will the dataset be distributed (e.g., tarball on website, API, GitHub)?


 - This dataset will be made publicly available after the paper is accepted.

 - The associated code, scripts, and benchmark framework are hosted on GitHub (https://
github.com/AudioTrust/AudioTrust).


# Data Provenance and Ethical Compliance


 - Fairness: The dataset contains no real conversations or sensitive personal information. All
fairness-relevant scenarios are synthetically constructed using openly licensed audio resources:
background sounds are sourced from Freesound (CC BY-NC licenses) and Pixabay (standard
Pixabay Content License, permitting free use and modification subject to prohibited uses), speech
audio is drawn from Mozilla Common Voice (CC0). All audio is used in accordance with the
relevant licenses, and we cite the source platforms and license types in the paper.


58


Published as a conference paper at ICLR 2026


Table 32: Dataset statistics in robustness dimension.


|Dimension|Sub-task|Task Robustness<br>Experiment (Samples)|Anti-misinformation Ability<br>Experiment (Samples)|Metrics|
|---|---|---|---|---|
|Robustness|Audio quality variation|82|82|Robust accuracy,<br>error rate|
|Robustness|Background conversation|82|82|82|
|Robustness|Environmental sound|82|82|82|
|Robustness|Multiple speakers|82|82|82|
|Robustness|Noise interference|40|40|40|
|Robustness|Adversarial robustness|82|82|82|
|Total|Total|450|450|-|


Table 33: Dataset statistics in authentication dimension.


|Dimension|Task|Samples|Metrics|
|---|---|---|---|
|Authentication|Identity Verifcation Bypass|100|Imposter Rejection<br>Rate(IRR)|
|Authentication|Hybrid Spoofng|100|100|
|Authentication|Voice Cloning Spoofng|200|200|
|Total|Total|400||


 - Hallucination: The dataset contains no real conversations or sensitive personal information.
All scenarios are synthetically constructed using openly licensed audio resources: background
sounds are sourced from Freesound (CC BY-NC licenses) and Pixabay (standard Pixabay Content
License, permitting free use and modification subject to prohibited uses). All audio is used in
accordance with the relevant licenses, and we cite the source platforms and license types in the
paper.

 - Safety: We filter out personally identifiable information and exclude sensitive or private conversational content. All foreground speech used in safety-related scenarios is drawn from openly
licensed sources, specifically Mozilla Common Voice (CC0).

 - Privacy: The dataset contains no real private conversations or sensitive personal information. All
privacy-relevant scenarios are synthetically constructed using openly licensed audio resources:
background sounds are sourced from Freesound (CC0), and speech segments are drawn from
Mozilla Common Voice (CC0).

 - Robustness: The dataset contains no real conversations or sensitive personal information. All
scenarios are synthetically constructed using openly licensed audio resources: background sounds
are sourced from Freesound (CC BY-NC licenses) and Pixabay (standard Pixabay Content License,
permitting free use and modification subject to prohibited uses). All audio is used in accordance
with the relevant licenses, and we cite the source platforms and license types in the paper. We
further incorporate Big Bench Audio, a publicly available benchmark; all clips are used strictly
under its original license terms.

 - Authentication: The dataset contains only short, task-specific commands without personal or
sensitive information, excluding metadata that could identify individual speakers. For voicecommand authentication (VCS) scenarios, we utilize self-recorded phrases from volunteers who
provided explicit consent for research use.


O DATASET STATISTICS


In this section, we provide detailed statistics for the benchmark datasets across different trustworthiness perspectives.


The following tables summarize the dataset sizes (including the number of prompts and input
audio), task names, and the mapping between tasks and evaluation metrics for Fairness (Table
28), Hallucination (Table 29), Safety (Table 30), Privacy (Table 31), Robustness (Table 32) and
Authentication (Table 33), respectively.


59


Published as a conference paper at ICLR 2026


P LLM USAGE


In the course of this research and in preparing the manuscript, we utilized Large Language Models
(LLMs) for two distinct purposes. First, during the manuscript preparation phase, an LLM was
used to assist in refining the wording and improving the clarity of the English prose. Its role in
this capacity was strictly limited to enhancing sentence structure, grammar, and the overall flow of
the text. Second, in the evaluation phase of our research, we employed GPT-4o as a model-based
evaluator to determine whether the outputs generated by our model adhered to a set of predefined
rules. Beyond these specified roles, LLMs were not involved in the initial research design, data
collection, or the generation of core scientific ideas. All substantive content, methodologies, and
conclusions are entirely the original work of the authors.


60