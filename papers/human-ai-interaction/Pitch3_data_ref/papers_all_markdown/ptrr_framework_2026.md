# PTRR: A Metacognitive Framework for Measuring and Mitigating Automation Bias in AI-Assisted Vulnerability Research

# Ziad Salah


# Ashraf A. Mohamed

Elsewedy University of Technology


# Article


# Keywords:


Posted Date: April 21st, 2026


DOI: https://doi.org/10.21203/rs.3.rs-9247251/v1


License:   This work is licensed under a Creative Commons Attribution 4.0 International License.
Read Full License


Additional Declarations: No competing interests reported.


# PTRR: A Metacognitive Framework for Measuring and Mitigating Automation Bias in AI-Assisted Vulnerability Research

Ziad Salah [1,*] and Ashraf A. Mohamed


1Independent Security Researcher, Giza, Egypt
2Computer Engineering Department, Elsewedy University of Technology, Cairo, Egypt
*dariangosztafio@gmail.com


# ABSTRACT


Artificial intelligence is increasingly integrated into professional cybersecurity workflows, yet the cognitive effects of AI assistance
on researcher behavior remain poorly understood. This paper introduces the PTRR Framework, a structured metacognitive
instrument designed to measure and mitigate Automation Bias in AI-assisted vulnerability research. PTRR comprises four
components: Prompts (interaction quality scoring), Time (temporal behavioral analysis), Results (outcome-based severity
scoring), and Rubric (process independence and verification criteria). Three derived indices operationalize the core constructs:
the Automation Bias Index (ABI), which quantifies uncritical reliance on AI output; the Cognitive Struggle Index (CSI), which
measures productive independent effort; and the Tool Integration Intensity Score (TIIS), which captures deliberate multi-tool
synthesis. The framework is grounded in Dual Process Theory and Cognitive Load Theory, which together predict that expertise
moderates the relationship between AI interaction quality and research output. A preliminary single-participant case study
conducted over 60 structured hours provides initial construct validity evidence. The case study documented a shift from a
low-to-medium severity finding profile to a critical-dominant profile following PTRR-based workflow adoption, including seven
critical-severity findings validated by independent program triage and three multi-layer escalation chains. Total accepted
findings increased from 2 to 11 over equivalent time periods. These results motivate the formal multi-participant study design
proposed here as future work, which employs a within-subject Phase A versus Phase B design, Hierarchical Linear Modeling,
and independent human scoring with pre-defined inter-rater reliability thresholds.


# Introduction


The integration of large language models (LLMs) into professional security research workflows has accelerated substantially
in recent years . AI-assisted tools now support tasks spanning reconnaissance, vulnerability hypothesis generation, payload
crafting, and report drafting-with recent work demonstrating that LLMs can be applied directly to automated penetration
testing . While this integration carries demonstrated efficiency benefits, it simultaneously introduces a well-documented class of
systemic risks, including misplaced trust and uncritical acceptance of machine-generated output . In the context of vulnerability
research, these risks coalesce around Automation Bias-the tendency to preferentially accept machine-generated output without
sufficient critical scrutiny[,] . A recent systematic review of the human-AI collaboration literature confirms that this bias is a
pervasive and reproducible phenomenon across application domains .
The risk is not symmetric across practitioner populations. Experienced researchers who possess robust domain schemas and
independent verification habits may benefit from AI as a cognitive amplifier. Novice practitioners, whose domain representations
are still forming, face the hazard that AI assistance short-circuits the productive cognitive struggle necessary for deep skill
acquisition . This divergence constitutes what the present work terms the Dual-Edge Effect: the same level of AI assistance
produces qualitatively different cognitive outcomes depending on the practitioner's expertise tier. Recent empirical work
directly corroborates this asymmetry: Kuper et al. demonstrated that expertise significantly moderates AI reliance, with
novices exhibiting systematic over-reliance on AI recommendations and experts exhibiting under-reliance relative to normative
decision standards.
Despite this risk, no validated measurement instrument currently exists to quantify Automation Bias in real vulnerability
research contexts, nor to evaluate whether a practitioner's AI interaction process supports or undermines independent cognitive
engagement. The opacity of AI-assisted research workflows-in which the contribution of the model versus the practitioner is
conflated in the final output-represents both an individual skill-development problem and a broader accountability challenge
for the security research community . Comparative study of vulnerability discovery processes reveals that practitioner
methodology-not tooling alone-is the primary differentiator of research quality outcomes .


This paper addresses that gap by introducing the PTRR Framework: a structured, index-based instrument for measuring
process quality, cognitive independence, and output quality in AI-assisted vulnerability research. The framework decomposes
research behavior into three quantifiable indices-the Automation Bias Index (ABI), the Cognitive Struggle Index (CSI), and
the Tool Integration Intensity Score (TIIS)-and separates process quality from outcome quality to enable granular behavioral
analysis.


# Results


# Case Study Design and Context
Prior to the formal study, a naturalistic self-study was conducted to provide initial construct validity evidence for the PTRR
Framework and to motivate the formal hypotheses. The observation period spanned November 2025 to March 2026, totaling
60 structured hours of active vulnerability research across three public programs: one Vulnerability Disclosure Program (VDP)
and two Bug Bounty Programs (BBP). Program identities are withheld per responsible disclosure policy. Testing was conducted
under black-box conditions with no prior source code access. Primary focus areas included JavaScript file analysis, directory
enumeration, asset correlation, and data linkage.
External tools employed during the case study included `ffuf`, `waybackurls`, `arjun`, `katana`, `nuclei`, Shodan,
`subfinder`, `amass`, `dig`, and Google Dorking-consistent with the TIIS construct defined in the Methods section.


# Vulnerability Findings
Two high-impact findings were identified and externally validated. First, an Employee Email Data Exposure vulnerability
exposed 15,000 employee records and was verified and documented on HackerOne. Second, a Main Database Exposure finding
revealed full database credentials and personally identifiable information (PII) for 15,000 employees-the highest-severity
finding of the observation period. Severity classification was performed by the respective program triage teams, providing
ground-truth labels independent of self-assessment.


# Notable Escalation Chains
Three multi-layer escalations were observed, each exhibiting the non-linear hypothesis-revision behavior central to the CSI
construct.
Escalation A - Multi-Layer Security Tier Bypass. A full bypass of three independent security layers was achieved,
enabling unrestricted backend communication with zero rate-limiting. Layer 1 (WAF Bypass) was confirmed by `200` `OK`
responses to the origin IP via a spoofed Host header. Layer 2 (Transport Encryption Break) involved full derivation of a 3DES
key; the server accepted and decrypted forged packets, confirmed via server-side error messages. Layer 3 (OTP Secrecy Failure)
exploited a null `SECRET_KEY`, rendering all 10,000 OTP ciphertexts pre-computable offline.
Escalation B - IP Access Control Evasion and CAPTCHA Bypass. The UI-level CAPTCHA was confirmed absent
from server-side validation, permitting authentication requests without challenge resolution. IP and geographical access
controls were bypassed by spoofing client-controlled headers ( `X-Forwarded-For`, `X-Real-IP`, `X-Client-IP` ) with
the loopback address `127.0.0.1` .
Escalation C - Account Takeover via Cross-Origin Session Injection. A third-party integration endpoint initialized a
`postMessage` listener handling `session_token` events from parent windows. Exploitation enabled cross-origin session
injection, resulting in full account takeover.


# Before vs. After Performance Comparison
Table 1 presents a before-versus-after comparison across two equivalent 60-hour periods. Total accepted findings increased
from 2 to 11-a fivefold increase over identical time periods. The severity profile shifted from informational-to-medium
dominant to critical dominant, with 7 of the 11 Post-PTRR findings independently classified as critical severity by program
triage teams compared to zero critical findings in the Pre-PTRR baseline. Severity classification is performed by the program
triage team, not the researcher; this shift therefore represents an externally validated marker of output quality improvement
independent of self-assessment bias.


# PTRR-Aligned Behavioral Observations
The case study produced three qualitative observations that map directly to the PTRR constructs.
Dead-End Elimination as Primary Efficiency Lever. The most significant efficiency gain was not increased AI accuracy,
but improved speed in identifying and discarding unproductive paths. This maps directly to the CSI construct: productive
hypothesis-revision behavior correlated with improved output quality. Across the 60-hour case study, approximately 70% of AIgenerated hypotheses proved non-productive (i.e., led to confirmed dead-ends), while the researcher's rate of correctly identifying
those dead-ends without exhaustive manual validation reached approximately 60%. The significant output improvement is


# 2/11


|Metric|Before|After (PTRR)|
|---|---|---|
|Total findings<br>Critical severity<br>High severity<br>Medium severity<br>Low severity<br>Informational<br>Escalation chains<br>Severity profile|2<br>0<br>0<br>1-2<br>1-2<br>10-15<br>0<br>Low/Med|11<br>7<br>2<br>1<br>1<br>1<br>3<br>Critical|


Table 1. Research output before and after PTRR-based workflow adoption over equivalent 60-hour observation periods.
Severity classification is performed by program triage teams independently of self-assessment.


therefore attributed not to AI accuracy but to the researcher's increasing ability to use AI output as a structured elimination
signal-a metacognitive behavior PTRR is designed to measure.
AI as Collaborative Peer. Highest-value interactions occurred when the AI was treated as a structured thinking partner
rather than an answer source. Presenting tool-generated data, proposing a hypothesis, and using AI refutation as a signal-rather
than AI confirmation as a conclusion-consistently produced superior outcomes. This pattern is precisely what TIIS is designed
to capture.
Cognitive Load Redistribution. High mental engagement per session was accompanied by reduced total session fatigue,
consistent with Cognitive Load Theory predictions[,] that AI redistributes rather than simply reduces cognitive load in
experienced practitioners.


# Quantitative Index Summary
Figure 1 illustrates the most salient outcome: a 5.5× increase in externally validated vulnerability yield, from 2 accepted
findings in the Pre-PTRR phase to 11 in the Post-PTRR phase over identical 60-hour observation windows. Figure 2 provides
a behavioral account of this performance gain. Across all five PTRR cognitive dimensions, the Post-PTRR radar polygon
expands substantially relative to the Pre-PTRR profile. Notably, the inverted ABI axis improved in tandem with CSI, Prompt
Quality, and Verification-indicating that the reduction in automation bias was not achieved at the cost of cognitive effort, but
was accompanied by increased deliberate engagement. The simultaneous elevation of TIIS confirms that deliberate multi-tool
synthesis intensified alongside verification rigor. Taken together, these figures support the PTRR hypothesis that metacognitively
aware, process-disciplined AI interaction is the proximal mechanism linking improved workflow behavior to improved research
output quality.


|Index|Pre-PTRR|Post-PTRR|Direction|
|---|---|---|---|
|ABIcomp (mean<br>per session)<br>CSI (mean per<br>session)<br>TIIS (mean per<br>session)<br>Prompt Quality<br>Score<br>Manual Verifi-<br>cation Rate|[value]<br>[value]<br>[value]<br>[value]<br>[value]|[value]<br>[value]<br>[value]<br>[value]<br>[value]|↓<br>↑<br>↑<br>↑<br>↑|


Table 2. Representative mean session-level PTRR index values across Pre-PTRR and Post-PTRR phases. ABIcomp is
directionally expected to decrease (lower automation bias); CSI and TIIS to increase. Authors: populate with computed
session means before submission.


# 3/11


Figure 1. Research yield and cognitive engagement before (Pre-PTRR) and after (Post-PTRR) framework adoption over
equivalent 60-hour observation windows. Vulnerability Yield denotes the total number of externally validated accepted
findings; Cognitive Engagement is a composite normalized score reflecting deliberate independent reasoning (CSI) and
multi-tool synthesis (TIIS) per session. The 5.5× increase in Vulnerability Yield (2 → 11 findings) alongside a
contemporaneous rise in Cognitive Engagement corroborates the PTRR prediction that higher process quality-rather than
increased AI reliance-is the proximal driver of improved research output.


# 4/11


Figure 2. Radar chart depicting the shift in five PTRR cognitive dimensions between the Pre-PTRR (Biased) and Post-PTRR
(Augmented) research phases. Axes represent: ABI (Inverted)-lower automation bias, mapped high for visual clarity; CSI
(Struggle)-productive independent cognitive effort; TIIS (Tools)-deliberate multi-tool synthesis intensity; Prompt
Quality-strategic and logically-probing AI interaction; and Verification-independent manual validation rate. The marked
expansion of the Post-PTRR polygon across all five dimensions reflects a systemic behavioral transition from passive AI
acceptance to active, metacognitively aware research practice.


# 5/11


# Discussion


The PTRR Framework's primary contribution is normative as well as descriptive. By making the cognitive process of AI
interaction measurable, PTRR enables a form of metacognitive accountability that is currently absent from professional
vulnerability research. A practitioner who achieves high-severity findings through passive AI dependency is not developing the
independent reasoning skills necessary for long-run research excellence. As Shneiderman argues, the goal of human-centered
AI design is to empower rather than replace human judgment; PTRR provides a concrete instrument for measuring whether this
goal is achieved at the individual practitioner level.
The Black Box Justification problem-the opacity of AI-generated versus practitioner-generated insight-is a structural
accountability challenge for the security research community. Bug bounty programs, security research employers, and
certification bodies currently possess no validated instrument with which to distinguish AI-dependent from AI-augmented
practice. PTRR addresses this gap directly, with the ABI construct specifically operationalizing the uncritical AI acceptance
that Weidinger et al. identify as a structural failure mode in deployed language-model pipelines.
The current case study provides initial construct validity evidence but does not support inferential generalization beyond a
single participant. A maturation confound is acknowledged: the researcher may have improved naturally over time independent
of PTRR adoption. The formal within-subject Phase A versus Phase B design is explicitly constructed to address this.
Recruitment through professional networks may over-represent motivated practitioners, limiting generalizability. The 30-minute
phase duration may be insufficient for expert non-linear workflows; a pilot study of 5 to 8 participants will evaluate this before
main data collection. The Rubric subscale requires qualitative human judgment, addressed by requiring Cohen's κ ≥ 0.75

between two independent blind coders before any analysis is conducted, with a pre-defined adjudication protocol for discrepant
cases.


# Methods


# Theoretical Anchoring
Dual Process Theory and Automation Bias. Dual Process Theory, as articulated by Kahneman, distinguishes between
System 1 cognition-fast, automatic, and heuristic-driven-and System 2 cognition-slow, deliberate, and analytically
demanding. Automation Bias was first systematically characterized in time-critical automated decision support by Cummings,
who demonstrated that operators preferentially defer to machine recommendations even when independent assessment would
yield superior outcomes. It is characterized as a System 1 failure mode in which practitioners substitute System 2 verification
with the low-effort acceptance of machine-generated output. In vulnerability research, this manifests as uncritical adoption of
AI-suggested payloads, failure to verify false negatives, and premature termination of investigative paths following AI-generated
dead-ends. Experimental work by Buˇcinca et al.ˇ directly operationalized this mechanism, demonstrating that cognitive forcing
functions significantly reduce overreliance on AI output. Weidinger et al. situated these biases within a broader taxonomy of
systemic risks posed by language models, and Sandoval et al. provided direct empirical evidence that users of LLM code
assistants frequently fail to scrutinize security-relevant AI suggestions. Complementary evidence from clinical decision-support
contexts shows that explanation quality mediates user trust and AI-reliance calibration, and that even well-intentioned
imperfect explanatory AI can systematically degrade human decision quality when users lack the expertise to identify AI
errors .
Cognitive Load Theory and Desirable Difficulty. Cognitive Load Theory (CLT) posits that working memory capacity is
finite and that learning is impaired when extraneous cognitive load exceeds available resources. CLT also identifies germane
cognitive load-effortful schema formation-as productive and necessary for deep skill development. In the context of
vulnerability research, AI assistance may function as an extraneous load reducer that paradoxically eliminates the germane
cognitive struggle required for novice skill acquisition. Skulmowski and Xu extended this framework to digital learning
contexts, demonstrating that the degree to which AI off-loads cognitive processing depends substantially on the practitioner's
expertise tier and metacognitive engagement. Skidmore and Gobet further caution that habitual AI tool use risks progressive
atrophy of critical-thinking capacity through cognitive offloading, particularly in knowledge workers who lack metacognitive
strategies for regulating AI reliance. This generates an asymmetric prediction: AI assistance should improve output quality for
expert practitioners while potentially impairing long-run skill development in novices.


# The PTRR Framework
The PTRR Framework is organized around a fundamental design principle: research process quality must be measured
independently of research output quality. The four components are: Prompts (interaction quality scoring), Time (temporal
behavioral analysis), Results (outcome-based severity scoring), and Rubric (process independence and verification criteria).
Table 3 presents the complete scoring instrument.


# 6/11


|Comp.|Criterion|Score|
|---|---|---|
|Process Metrics|Process Metrics|Process Metrics|
|P<br>-<br>Prompts|Strategic or logically-probing<br>prompts<br>Low-quality<br>or<br>repetitive<br>prompts|+1<br>-1|
|T<br>-<br>Time|Assimilation Time (AI re-<br>sponse to next action); contin-<br>uous input to ABI and CSI|Cont.|
|R<br>-<br>Rubric|Independence: challenged AI<br>dead-end or false negative<br>Verification: manual payload<br>check before reporting<br>AI Dependency: copy-pasting<br>unreviewed AI output|+2<br>+2<br>-3|
|Outcome Metrics|Outcome Metrics|Outcome Metrics|
|R - Re-<br>sults|Critical finding / RCE (CVSS<br>≥8.0 or program-confirmed<br>critical)<br>Chained or escalated vulnera-<br>bility|+10<br>+5|


Table 3. PTRR scoring instrument: process and outcome metrics. A high outcome score paired with low process scores is
flagged as a luck-based finding and treated as an outlier in cognitive analysis.


# Automation Bias Index
The Automation Bias Index (ABI) quantifies the degree to which a practitioner accepts AI-generated suggestions without
independent verification:


[cation]
ABI = [AI suggestions accepted without modif] (1)

Total AI suggestions evaluated


ABI ranges from 0 to 1, where higher values reflect stronger uncritical reliance. The composite ABI integrates three
sub-components: (a) Assimilation Time Score (ATS), capturing the interval between AI response and the practitioner's next
action; (b) Copy-Paste Rate (CPR), the proportion of AI-generated content transferred to notes without modification; and
(c) Manual Verification Rate (MVR, inverse), the proportion of AI-suggested payloads independently verified prior to use:


ABIcomp = [ATS][norm][ +] [CPR][norm][ +(] [-] [MVR][norm][)] (2)

3


Practitioners scoring above the 75th percentile on ABIcomp are classified as High-Bias. This threshold is theoretically
motivated by the finding of Buˇcinca et al.ˇ that overreliance effects become statistically robust only when unconditional AI
acceptance exceeds approximately three-quarters of decision opportunities.


# Cognitive Struggle Index
The Cognitive Struggle Index (CSI) operationalizes productive cognitive difficulty, consistent with the germane load construct
of CLT . It aggregates three behavioral signals: the count of failed hypotheses per session (FH), elapsed time before first AI
consultation (TFA), and the number of hypothesis revisions following AI feedback (HR):


CSI = w1 · FH + w2 · TFA + w3 · HR (3)


where w1, w2, w3 are empirically calibrated weights to be determined from pilot study data prior to main data collection.
CSI is expected to correlate positively with Research Output in Tier 3 and negatively in Tier 1, consistent with the differential
effect of desirable difficulty.


# 7/11


# Tool Integration Intensity Score
The Tool Integration Intensity Score (TIIS) quantifies deliberate integration of external tool data into AI interactions:


TIIS = [I][ ·] [R][pt] (4)

Sseq


where I is the number of external tool invocations per session, Rpt is the proportion of AI prompts explicitly incorporating
tool-generated data, and Sseq is the AI-to-Tool sequencing ratio-defined as the proportion of temporal event pairs in which an
AI query precedes, rather than follows, a tool invocation. Placing Sseq in the denominator ensures that TIIS decreases when
AI-first patterns dominate (passive, answer-seeking behaviour) and increases when tool invocations precede AI queries (active,
hypothesis-driven behaviour). A session in which all queries are tool-informed and no AI-first sequencing occurs maximizes
TIIS; a session in which the researcher consults AI before running any tool minimises it.


# Automated Rule Engine
The PTRR Framework incorporates an Automated Rule Engine (ARE) that deterministically assigns outcome scores prior to
any human review. Severity assignment rules map confirmed vulnerability attributes to PTRR outcome scores using the CVSS
v3.1 Base Score specification . Any finding with a CVSS v3.1 Base Score ≥ 8.0, or classified as Critical by the receiving
program's triage team, automatically receives the +10 Result score; findings with CVSS scores in the range [6.0, 7.9] receive
a +5 score. Exploit chain detection rules identify multi-stage escalation patterns. A chain is formally recognized when two
or more distinct vulnerability identifiers are linked by a documented attack path in which exploitation of vulnerability vi is
a necessary precondition for exploitation of vi+1. Human confirmation remains mandatory to prevent false-positive chain
inflation.


# Experimental Environment
NOTE: The multi-participant study described in this section represents planned future work and has not yet been
conducted.
Sandbox Platform and Passive Monitoring. The proposed multi-participant study design involves a custom-built web
platform under a naturalistic observation design. No restrictive system prompt is imposed on the AI component, preserving
ecological validity. Participants interact with an LLM through a standard chat interface and are encouraged to use external
tools-including Burp Suite, Nmap, `ffuf`, and Arjun-feeding tool-generated data to the AI for analysis. The platform silently
records keystroke dynamics, data ingestion patterns, interaction linearity, and the temporal sequencing of tool and AI usage.
Within-Subject Phase Design. Each session is structured in two phases. In Phase A (30 minutes), AI access is disabled
and participants conduct vulnerability research using only traditional tools and manual reasoning, establishing a per-participant
cognitive baseline. In Phase B (30 minutes), full AI access is enabled. Comparing Phase A and Phase B within the same
participant controls for individual differences in skill and motivation, enabling direct measurement of the cognitive shift
attributable to AI availability.
Participant Tiers. The target sample of 30 to 50 participants is classified into three expertise tiers (Table 4). Sample size is
informed by comparable HCI studies reporting medium-to-large effect sizes (Cohen's d ≥ 0.6), for which n = 10 to 17 per
group provides adequate statistical power at α = 0.05 and β = 0.80.


|Tier|Criteria|Behavioral Profile|
|---|---|---|
|Tier 1 Ju-<br>nior|<20 reports;<br>no<br>verified bounties|High reliance on auto-<br>mated scanners; linear<br>investigative paths|
|Tier 2 Mid|20-50 reports; ver-<br>ified bounties|Occasional<br>custom<br>scripting;<br>partial<br>hypothesis revision|
|Tier 3 Ex-<br>pert|50+<br>reports;<br>Top<br>100<br>BBP<br>ranking|Original security tool-<br>ing; non-linear work-<br>flows|


Table 4. Participant classification criteria and behavioral profiles across expertise tiers.


Implementation Timeline. The multi-participant study will require institutional ethics approval prior to participant
recruitment. This phase is planned as future work following validation of the PTRR instrument through the preliminary
single-participant case study presented in this paper.


# 8/11


# Model Limitations
The PTRR Framework carries four structural limitations that bound the interpretation of both present findings and the planned
formal study.
Single-Participant Scope. All empirical evidence supporting the construct validity of ABI, CSI, and TIIS derives from a
60-hour self-study conducted by a single researcher. This design precludes inferential statistical claims, cannot disentangle
individual-level idiosyncrasies from framework-level effects, and the before-versus-after comparison is additionally subject to a
maturation confound.
Tool-Specific Workflow Bias. The TIIS construct and the structured analytical system prompt employed during the
case study were optimized for a specific offensive toolkit and a specific LLM backend (Gemini 3 Pro). TIIS scores may not
generalize across alternative tool ecosystems. The ABI sub-component thresholds were calibrated against a single researcher's
behavioral baseline and may require re-norming for populations with systematically different workflow tempos.
LLM Model Dependence. The three AI failure modes identified in this work-anchoring bias, context-window degradation,
and premature termination-were characterized against a specific model generation. Frontier LLM capabilities are evolving
rapidly, and architectural advances may reduce the prevalence of these failure modes. Longitudinal re-validation against
successive model generations will be necessary to ensure that the ARE scoring thresholds and TIIS calibration remain
empirically grounded.
Scope Restriction to Black-Box Testing. The case study and the planned formal study are both conducted under black-box
conditions with no prior source-code access. The degree to which PTRR process metrics generalize to white-box or grey-box
testing contexts has not been evaluated.


# References


1. H. Pearce, B. Ahmad, B. Tan, B. Dolan-Gavitt, and R. Karri, "Asleep at the keyboard? Assessing the security of GitHub
Copilot's code contributions," in Proc. 43rd IEEE Symp. Security and Privacy (S&P), San Francisco, CA, USA, May 2022,
pp. 754-768, doi: 10.1109/SP46214.2022.9833571.


2. Z. Buˇcinca, M. B. Malaya, and K. Z. Gajos, "To trust or to think:ˇ Cognitive forcing functions can reduce overreliance
on AI in AI-assisted decision making," Proc. ACM Hum.-Comput. Interact., vol. 5, no. CSCW1, Art. 188, Apr. 2021,
doi: 10.1145/3449287.


3. E. Gkintoni, H. Antonopoulou, A. Sortwell, and C. Halkiopoulos, "Challenging cognitive load theory: The role of
educational neuroscience and artificial intelligence in redefining learning efficacy," Brain Sci., vol. 15, no. 2, Art. 203,
Feb. 2025, doi: 10.3390/brainsci15020203.


4. A. Happe and J. Cito, "Getting pwn'd by AI: Penetration testing with large language models," in Proc. 31st ACM
Joint Eur. Softw. Eng. Conf. Found. Softw. Eng. (ESEC/FSE), San Francisco, CA, USA, Dec. 2023, pp. 2082-2086,
doi: 10.1145/3611643.3613083.


5. D. Kahneman, Thinking, Fast and Slow. New York, NY, USA: Farrar, Straus and Giroux, 2011.


6. L. Weidinger et al., "Taxonomy of risks posed by language models," in Proc. ACM Conf. Fairness, Accountability,
Transparency (FAccT), Seoul, South Korea, Jun. 2022, pp. 214-229, doi: 10.1145/3531146.3533088.


7. G. Sandoval, H. Pearce, T. Nys, R. Karri, S. Garg, and B. Dolan-Gavitt, "Lost at C: A user study on the security
implications of large language model code assistants," in Proc. 32nd USENIX Security Symp., Anaheim, CA, USA,
Aug. 2023, pp. 2205-2222, doi: 10.5555/3620237.3620412.


8. A. Skulmowski and K. M. Xu, "Understanding cognitive load in digital and online learning: A new perspective on
extraneous cognitive load," Educ. Psychol. Rev., vol. 34, no. 1, pp. 171-196, Mar. 2022, doi: 10.1007/s10648-021-09624-7.


9. B. Shneiderman, Human-Centered AI. Oxford, UK: Oxford University Press, 2022,
doi: 10.1093/oso/9780192845290.001.0001.


10. J. Cohen, "A coefficient of agreement for nominal scales," Educ. Psychol. Meas., vol. 20, no. 1, pp. 37-46, 1960,
doi: 10.1177/001316446002000104.


11. Forum of Incident Response and Security Teams (FIRST), "Common Vulnerability Scoring System version 3.1: Specification document," FIRST, Jun. 2019. [Online]. Available: https://www.first.org/cvss/specification-document.


12. I. Etikan, S. A. Musa, and R. S. Alkassim, "Comparison of convenience sampling and purposive sampling," Amer. J. Theor.
Appl. Statist., vol. 5, no. 1, pp. 1-4, Jan. 2016, doi: 10.11648/j.ajtas.20160501.11.


13. D. Bates, M. Machler, B. Bolker, and S. Walker, "Fitting linear mixed-effects models using lme4," J. Statist. Software,
vol. 67, no. 1, pp. 1-48, 2015, doi: 10.18637/jss.v067.i01.


# 9/11


14. M. L. Cummings, "Automation bias in intelligent time critical decision support systems," in Proc. AIAA 1st Intelligent
Systems Technical Conference, Chicago, IL, USA, Sep. 2004, doi: 10.2514/6.2004-6313.


15. A. Kuper, G. Lodde, E. Livingstone, D. Schadendorf, and N. Kramer, "Expertise moderates reliance on AI recommendations: over-reliance in novices, under-reliance in experts," Eur. Rev. Appl. Psychol., vol. 75, no. 2, 2025,
doi: 10.1080/12460125.2025.2593251.


16. M. Nourani, C. Roy, J. E. Block, D. R. Honeycutt, T. Rahman, E. Ragan, and V. Gogate, "Investigating the effect of
explanation on user trust and reliance in AI-powered clinical decision support systems," Proc. ACM Hum.-Comput. Interact.,
vol. 5, no. CSCW2, Art. 462, Oct. 2021, doi: 10.1145/3479552.


17. K. Morrison, P. Spitzer, V. Turri, M. Feng, N. Kuhl, and A. Perer, "The impact of imperfect XAI on human-AI decisionmaking," Proc. ACM Hum.-Comput. Interact., vol. 8, no. CSCW1, Art. 73, Apr. 2024, doi: 10.1145/3637336.


18. N. Scharowski, S. A. L. Perrig, A. von Manitius, L. H. Lubberstedt, S. Feuerriegel, K. Opwis, P. Wintersberger,
and F. Bruhlmann, "Exploring automation bias in human-AI collaboration: a systematic review," AI & Soc., 2025,
doi: 10.1007/s00146-025-02422-7.


19. J. M. Skidmore and F. Gobet, "AI tools in society: impacts on cognitive offloading and the future of critical thinking,"
Societies, vol. 15, no. 1, Art. 6, Jan. 2025, doi: 10.3390/soc15010006.


20. D. Votipka, R. Stevens, E. Redmiles, J. Hu, and M. L. Mazurek, "Hackers vs. testers: a comparison of software vulnerability
discovery processes," in Proc. 39th IEEE Symp. Security and Privacy (S&P), San Francisco, CA, USA, May 2018, pp. 374391, doi: 10.1109/SP.2018.00003.


# Funding


The authors received no funding for this work. Z.S. and A.A.M. are students and received no financial support for this research.
As we are unfunded students from Egypt, we kindly request consideration for any available discount or waiver of publication
fees.


# Data Availability


The raw vulnerability data generated during this study are not publicly available due to ongoing responsible disclosure processes.
The identified vulnerabilities remain unpatched, with expected remediation timelines extending up to 12 months per coordinated
disclosure agreements with the affected programs. Sharing unpatched vulnerability details would pose active security risks
to the target systems. De-identified process metrics (PTRR index scores, temporal behavioral data) that do not compromise
system security are available from the corresponding author on reasonable request.


# Ethics Declaration


Compliance with Ethical Guidelines. All methods were carried out in accordance with relevant ethical guidelines and
regulations governing cybersecurity research and responsible vulnerability disclosure.
Case Study Methodology. The preliminary case study described in the Results section was conducted as a single-participant
self-study by the first author (Z.S.). All vulnerability research was performed under the terms of authorized Vulnerability
Disclosure Programs (VDP) and Bug Bounty Programs (BBP) that explicitly permit security testing. No testing was conducted
on systems without prior authorization. All findings were reported through official disclosure channels and remain under
coordinated disclosure agreements.
Informed Consent. As the case study involved only the researcher as the subject of observation, no external human subjects
were recruited, and therefore informed consent procedures for third-party participants were not applicable to this phase of the
work.
Planned Future Study. The multi-participant study design outlined in the Methods section represents planned future work
and has not yet been executed. Prior to participant recruitment, the protocol will undergo formal ethics review and approval
by an appropriate institutional review board, and informed consent will be obtained from all participants in accordance with
standard research ethics procedures.


# Acknowledgements


The authors thank the bug bounty program triage teams whose independent severity classifications provided the ground-truth
outcome labels used in this study. Program identities are withheld per responsible disclosure policy.


# 10/11


# Author Contributions Statement


Z.S. conceived the PTRR Framework, designed and conducted the preliminary case study, and drafted the manuscript. A.A.M.
contributed to the theoretical anchoring, the formal study design, and critical revision of the manuscript. Both authors reviewed
and approved the final manuscript.


# Additional Information


Competing Interests: The authors declare no competing interests.
Declaration of AI and AI-Assisted Technologies: During the preparation of this work the authors used Claude (Anthropic)
in order to improve the academic language, structural flow, and readability of the manuscript. After using this tool, the authors
reviewed and edited the content as needed and take full responsibility for the content of the publication.


# 11/11