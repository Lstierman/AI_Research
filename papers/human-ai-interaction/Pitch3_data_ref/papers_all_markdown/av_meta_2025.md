# How Does the Anthropomorphism of Automated Vehicles Shape Human Trust? A Systematic Review and Meta-Analysis

Ali Arabian, Saeedeh Mosaferchi, Alireza Mortezapour ⃰, Mark Colley, Jordan Navarro,

Courtney M. Goodridge, Oscar Oviedo-Trespalacios, Giuliana Vitiello, Alessandro Naddeo


1 Institute for Transport Studies, University of Leeds, Leeds, the UK


2 Department of Industrial Engineering, University of Salerno, Fisciano, Italy


3 Department of Computer Science, University of Salerno, Fisciano, Italy


4 Department of Computer Science, University College London (UCL), the UK


5 Laboratoire d'Etude des Mecanismes Cognitifs (EA 3082), Universite Lyon 2, Lyon, France


6 Delft University of Technology, Faculty of Technology, Policy and Management, Section of


Safety and Security Science, the Netherlands


Corresponding author: Alireza Mortezapour


amortezapoursoufiani@unisa.it; amortezapour258@gmail.com


# Abstract

Trust is a critical factor in the acceptance of automated vehicles (AVs), but market data indicate


that public trust in AVs remains suboptimal. Of all tested strategies, anthropomorphizing AVs


in different modalities, such as adding human-like visual features or human voices, has gained


attention. This meta-analysis addresses the role of anthropomorphism in AV trust as a timely


response to the ongoing debate. Following PRISMA guidelines, a total of 66 articles and 70


effect sizes, from 5903 participants across seven databases, were included.


The results revealed that anthropomorphic interfaces, compared to non-anthropomorphic


interfaces, do not significantly improve trust in AVs (Standardized Mean Difference (SMD) =


0.04, not significant). However, in general, adding auditory anthropomorphic features is


recommended for increasing trust compared to visual anthropomorphic features (SMD: 0.30


vs. -0.48). Moreover, different levels of anthropomorphism (superficial vs. deep) did not have


a significant impact on trust in AVs. The overall trend indicated that with increasing age of


participants, the reliance on anthropomorphic interfaces for increasing trust became more


pronounced.


This meta-analysis shows that adding human-like features is not a dependable way to build


trust in AVs. Future works are needed on how it can be compared to other approaches like


explainability. Generally, as a suggestion for stakeholders, it is important to recognize that the


impact of anthropomorphic interfaces on trust in AVs is not the same as assumptions.


Keywords: Human-like; Human-AV interaction; Interface design; User Experience, Social


Cars; Automated driving; Autonomous vehicles


# 1. Introduction

A review of previously published articles and broadcasted news (Penmetsa et al., 2023),


particularly in recent years, predicted that the number of consumers/users of automated


vehicles (AVs) would increase annually (Lohaus et al., 2024; O'Hern & St. Louis, 2023; Shin


et al., 2022). These predictions were consistent with the increase in the number of AVs on the


streets (Agrawal et al., 2023; Norman-Lopez et al., 2026). According to Statista, the global


stock of vehicles equipped with at least some level of automation amounted to approximately


31 million in 2019 and is exceeded 54 million by 2024, while the AV market is expected to


reach 41.1 billion US Dollars, with an estimated 58 million AVs sold worldwide by 2030


(Carlier, Apr 2, 2025). Although this increment in the statistics cannot translate to trust to AVs


and it is still a major concern. According to the American Automobile Association (AAA), in


2021, 14% of American drivers reported trusting AVs, while 54% expressed fear and distrust


toward these vehicles. By March 2024, trust levels had declined to 9%, with 66% of drivers


reporting fear of AVs. Although there was a slight improvement in February 2025 with 13%


expressing trust and 60% still expressing fear, the overall picture remains largely unchanged.


Despite some fluctuations over the years, distrust toward self-driving cars continues to


significantly outweigh trust, indicating persistent public apprehension (Moye, 2025). Similarly,


the J.D. Power Mobility Confidence Index for 2023 reflected a trust score of just 37 out of 100,


marking a decrease from 39 in 2022 (J.D.POWER, 2023).


Various conceptual models have introduced trust in automated system such as Hoff and


Bashir's three-layer model (Hoff & Bashir, 2015), Chuan Hu et al. framework of the dynamic


evolution of trust (C. Hu et al., 2024), and Zhou trust model of pedestrians to AVs (Zhou et al.,


2023). Although trust in AVs is characterized as a multidimensional and dynamic concept


(Dirsehan & Can, 2020), it encompasses two main aspects, initial trust and dynamic trust


(Kraus et al., 2021; Zhou et al., 2023). The first pertains to pre-purchase and pre-usage,


indicating individuals' perception and belief in the success of this technology in achieving its


objectives, named "Initial Trust" and the second aspect relates to trust during using and/or post


usage of an AV, requiring a certain level of trust in its performance, named "Dynamic Trust".


For initial trust, most work sought individuals' subjective perceptions without having an


interaction (e.g., (Wu et al., 2023b)). In the dynamic trust, individuals have experienced an


interaction with an AV or a simulation of it (e.g., (Lohaus et al., 2024)). Although the role of


initial trust in development dynamic trust cannot be ignored (Manchon et al., 2023), numerous


other parameters also influence dynamic trust. Most interventions for improving trust have


focused primarily on improving vehicle technical functions, such as sensor accuracy, cameras,


and so forth (Cunha et al., 2025). Such technical improvements align with trust improvement


models, which indicate that enhancing technical aspects is an effective strategy (Hancock et


al., 2023; Siau & Wang, 2018).


Beyond technical improvements, trust can also be improved through Human Factors


approaches. A recently introduced point of view, especially following the initial success of


anthropomorphism in human-robot interaction, highlights the increasing use of


anthropomorphic interfaces in AVs (Saeedeh Mosaferchi, 2025; Sheridan, 2020). The term


"anthropomorphism" originates from two distinct Greek roots: "Anthropos" meaning "human"


and "Morphe" meaning "shape" or "form" (Ding et al., 2022; Zhang & Sheng, 2026) .


Anthropomorphism is attribution of human traits or emotions to non-human entities, such as


animals or objects including technologies such as social robots or AVs (Song et al., 2026; Wu


et al., 2023a; Wu et al., 2024). Therefore, anthropomorphism can involve designing AVs to


mimic human-like behaviors or appearances. With regards to dynamic trust, anthropomorphism


assumes to make an AV more familiar to humans (Lawson-Guidigbe, Amokrane-Ferka, et al.,


2023a). Additionally, anthropomorphism can evoke emotional responses in users, fostering a


sense of connection and empathy towards the AVs (Park et al., 2023). Anthropomorphism's


role in increasing the trust of drivers/passengers/pedestrians in an AV (dynamic trust) has been


addressed in several studies (Park et al., 2024b; Wu et al., 2023b). Participants were more likely


to trust the AV's competence as it incorporated anthropomorphic features (Waytz et al., 2014).


A combination of symbolic (normal arrows without any anthropomorphic characteristic) and


anthropomorphic information increased trust in AVs compared to symbolic information alone.


The authors implied that anthropomorphizing information may foster the perception of AVs as


social agents and enhance trust in those AVs (Niu et al., 2018).


Supported by the triadic theory of anthropomorphism (Epley et al., 2007), anthropomorphizing


technology can increase trust. This theory suggests that attributing human-like qualities such


as mind, intent, or emotions to non-human agents like technology can alter our perception and


interaction with them (Troshani et al., 2021). Despite positive results, these have not always


been consistent, and in some cases, anthropomorphic interfaces even led to a reduction in trust


towards AVs (Messer et al., 2024; P. Wang et al., 2021). When examining trust in AVs, studies


have not always contrasted anthropomorphic with non-anthropomorphic designs; rather, they


have sometimes compared different levels of anthropomorphism, - a low level and a high level

also referred to as superficial and deep anthropomorphism (Wu et al., 2023b). This gradation


of anthropomorphism has been implemented through various approaches. For instance, some


studies have shown that a female voice is perceived as more anthropomorphic than a male


voice, attributing this to the perceived warmth of the voice (Deng et al., 2024; Dong et al.,


2020; Haziraj, 2025). Similarly, polite vocal tone is sometimes judged to be more human-like


than a harsh one (Lee & Lee, 2022; Ribino, 2023), and the addition of a human voice to a visual


anthropomorphic feature (Thimm et al., 2024) or a human voice to a human-like text script


(Schroeder & Epley, 2016) may increase the perceived depth of anthropomorphism. In this


regard, in a recently published article, the differences between superficial and deep


anthropomorphizing to AVs is discussed (Wu et al., 2023b). The authors pointed out that a


superficial anthropomorphism can significantly boost human trust via mediating role of


interaction quality and facilitating condition. Also, they declared that a deep level of


anthropomorphism would decrease human trust. Decreasing trust due to anthropomorphizing


a car is not concluded to this article and there are other numerous articles in the literature


devoted to this adverse effect. Recent research highlights that while anthropomorphic design,


such as giving AVs baby-faced features, can increase trust in low automation levels, it may


backfire in higher automation level (L5). In high-autonomy contexts, such designs create a


mismatch between the AV's expected competence and its naive appearance, leading to higher


responsibility attribution in case of accidents. This "cuteness paradox" suggests that human

like designs can unintentionally undermine trust and amplify blame in AV failures (Messer et


al., 2024).


Trust in automated vehicles is therefore not only a technical challenge but also broader human


factors issue that shapes public acceptance and safe deployment. Some studies report that


anthropomorphic features enhance trust, while others suggest that they may decrease trust or


even create unintended effects such as the "cuteness paradox" or the uncanny valley. This lack


of clarity underscores the need for a systematic synthesis of the literature to evaluate the role


of anthropomorphic design in shaping trust toward AVs. Accordingly, the present study aims


to conduct a systematic review and meta-analysis to resolve these inconsistencies, clarify the


mechanisms linking anthropomorphism and trust, and provide evidence-based insights for the


design of safer and more socially acceptable automated vehicles.


In the next section, a summary of important concepts and theories related to the topic are


presented, followed by the rationale of the current study. The methodology is presented in the


third section, and in the final sections, the results, discussion and practical conclusions are


provided.


# 2. Theories and related concepts

2.1. Anthropomorphism in human-robot interactions


In a robot, anthropomorphism means that humans attribute a feature that is generally related to


humans to a social robot (e.g., smiling face) (Ruiz-Equihua et al., 2023; Tan et al., 2025). The


reason for choosing the robot among other technologies here is the agreement of previous


studies on the greater similarity of the concept of anthropomorphism in the AVs to the social


robots compared to other technologies (Reuter et al., 2025). That is, researchers believe that


attributing a human characteristic to a car is derived from human interaction with robots (AV


can be considered a social robot but in motion) (Pelikan & Jung, 2023; Rosa et al., 2020).


Researchers in human-robot interaction have pointed to various human characteristics that have


been attributed to robots (appearance vs. thoughts vs. emotions), and even on this basis, various


tools and questionnaires focused on each specific human characteristic have been developed in


the human-like robots' field (Andrighetto et al., 2025; Ruijten et al., 2019). In previous studies,


the various effects of this characteristic of robots have been discussed including both positive


and negative aspects.


2.1.1. pros
One of the pros of anthropomorphizing is smoothness. Smoothness in an interaction between


a human and a robot means that the robot can provide "without jerk" movement and trajectory


profile (Erol & Sarkar, 2007). In recent studies, anthropomorphizing robots are tried to provide


a smooth human-robot interactions (Fasola & Mataric, 2012). So, in this case, robots with more


human-likeness features perceived smoother. Another positive aspect is increasing the chance


of comprehension and social companionship. Unlike the previous one, which was related to


the physical characteristics of the robot, such as the way its arms move, and can be of interest


to rehabilitation specialists, in this second case, the benefits of using the human-like robots in


social parameters have been discussed (Kuhne et al., 2024). For example, sometimes this mode


increases the learnability of students from a robot teacher or even the increase of human trust


in the robot at the start of a collaboration is mentioned (Roesler et al., 2024).


2.1.2. cons
One of the concepts that is mainly referred to as the design flaw of an anthropomorphized robot


is a case called "uncanny valley" (Yam et al., 2021). This theory is hypothesized based on


human emotional response to the degree of anthropomorphism of a robot (Di Natale et al.,


2023). The uncanny valley hypothesis predicts that an entity appearing almost human will risk


eliciting unpleasant feelings in human partners (Appel et al., 2020). Also, one of the most


important criticisms of humanizing robots is related to hiding their reality. Some researchers


believe that by over-humanizing robots, their robotic beings (being a machines) should not be


forgotten. Because companionship, cooperation and even living with a machine has its own


requirements, which may be different in human-human communication (Tan et al., 2020). They


believed that it can leads to excessive attachment, social isolation, fear, and violation of privacy


(Vaitonyte et al., 2023).


2.1.3. Crucial summation
The list of advantages and disadvantages of using anthropomorphism in robots is not limited


to these cases but is beyond the aim of this systematic literature review. But these important


ones are given to remind the importance of this concept in human interaction with technology.


It is always important to consider the balance between anthropomorphism and the functional


characteristics of the robot to have an optimum user experience. Because by using this feature


inappropriately, the mentioned advantages and disadvantages may even change their places,


and in fact, when a greater advantage is expected, more defects in the interaction could happen.


2.2. Some theoretical supports for adjusting trust to anthropomorphized AVs


Some theories emphasize how giving human-like qualities to technology can increase trust.


" Social Presence Theory " (Short et al., 1976) suggests that the more a non-human agent can


evoke the feeling of a real person, the richer the user's interaction and, consequently, their


emotional connection and trust (Lu et al., 2016). Similarly, the " Computers Are Social Actors "


theory (Nass et al., 1994) implies that humans unconsciously apply social rules and norms,


typically reserved for interpersonal interactions, to computers and technology. This means that


when a device exhibits human-like traits, people tend to treat it as a social entity, which includes


extending trust (Gambino et al., 2020; Kim et al., 2025). This one is also extended as a new


theory applied for cars entitled " Cars As Social Agents " (Babel et al., 2023). Furthermore, while


primarily an interpersonal concept, " Attachment Theory " (Mitchell & Jeon, 2025) has been


applied to human-technology relationships, positing that if anthropomorphized technology can


create a sense of closeness and security, it can foster a deeper bond and, by extension, trust


(Nafees & Sujood, 2024). Finally, the general impact of " Social Cues " (Gutuleac et al., 2024)


in social psychology highlights that human-like signals (e.g., eye contact, smiles, tone of voice)


in any interaction increase intimacy and understanding. When these cues are incorporated into


technology, they activate the same psychological mechanisms that lead to greater trust (Xu &


Ma, 2025).


2.3. From anthropomorphized robots towards anthropomorphized AVs: A rationale for a


new systematic review and meta-analysis


The closest domain related to anthropomorphic interfaces in the context of AVs is social robots.


In this field, comprehensive studies, including systematic reviews, have been written to


summarize the role of these interfaces in building trust (and, to a lesser extent, diminishing


trust in some studies) in robots (Damholdt et al., 2023; Dubois-Sage et al., 2023; Roesler et al.,


2021). However, inherent differences between human-robot and human-AV interactions are not


ignorable (Zhang et al., 2022). For instance, human-robot interaction (HRI) typically occurs in


a stationary environment, while dynamic interactions with AV happen in a moving space. This


movement, along with the inherent risks associated with driving, may influence the relationship


between anthropomorphic interfaces and trust in AV. Additionally, interactions with humanoid


robots usually take place in larger and not confined spaces (Alireza Mortezapour, 2025), such


as shopping malls, hotels, hospitals, and homes, while most interactions with AVs are assumed


to be confined to the small space inside the vehicle's cabin. This distinction seems to have an


impact on the anthropomorphism-trust relationship through altering the interaction pattern and


reshaping expectations of the system (theory of mind concept (Shank et al., 2019)). From


another perspective, in interactions with robots, users typically direct much of their attention


(or a significant portion of it) toward the robot. At least in lower degree of automated driving


(L3), due to some necessitated situation awareness for potential take-overs (Mosaferchi et al.,


2025; Shi et al., 2024), this interaction is different, which could significantly affect the trust.

# 3. Methods


This systematic review and meta-analysis was conducted in accordance with the PRISMA


(Preferred Reporting Items for Systematic Reviews and Meta-analysis) guidelines (Moher et


al., 2010) to investigate the effect of anthropomorphism on human trust in AVs. The protocol


was registered on the Open Science Framework on 2nd of April 2024, and can be accessed at


https://doi.org/10.17605/OSF.IO/7P9NZ.


1.1.Search strategy


The original search was done in December 2023, and a follow-up search was conducted in


February 2025, along with forward and backward citation searches. The search period for the


current study was set from January 1, 1990 to February 10, 2025. While a study recommends


searching at least two databases to reduce the risk of missing eligible studies (Ewald et al.,


2022), another suggests that conducting systematic reviews with two databases can cause the


risk of publication bias (Mathew, 2024). In addition, the significance of including grey


literature, such as conference papers and dissertations, to decrease the risk of publication bias


has been emphasised (Chandler et al., 2019). Therefore, a search through 7 databases including


Scopus, PsycINFO, Web of Science, ProQuest, Google Scholar, IEEE, and ACM, was


conducted to reduce the risk of missing eligible studies. The selection of databases was guided


by the research focus, which emphasizes psychological research and human-computer


interaction. A combination of terms was used to search in databases (see Table 1). According


to the guideline by (Keele, 2007), authors first conducted an initial search to scan titles,


abstracts, and keywords of core articles and relevant systematic reviews to extract keywords.


A consultation with experts in the field was performed to finalize the search terms.


Supplementary appendix A provides the search syntax used for Scopus, which was modified to


align with the syntax requirements of other databases.


Table 1. Search terms.


# Anthropomorphism Keywords

# (OR)

"anthropomorph*", "humanoid",
"human likeness", "human-likeness",
"humanness", "man likeness",
"humanlike", "human-like",
"humaneness", "person like",
"person-like", "caricature", "speech",
"speech-based", "conversat*",
"vocal", "conversational agent",
"humanis*", "humaniz*",
"personif*", "anima*", "audi*",
"voice", "cartoon*"


1.2.Inclusion and exclusion criteria


# AND Vehicle Automation

# Keywords (OR)

"automated car*",
"autonomous car*",
"selfdriving", "selfdriving", "self driving",
"driverless", "vehicle
automation",
"automated driving",
"autonomous vehicle*",
"automated vehicle*"


# AND Trust


"trust"


Only studies examining the interaction between humans and driving automation level 3 or


higher, as defined by the SAE taxonomy (SAE, 2021), were included. Eligible studies were


those that included the incorporation of human participants who either viewed or participated


directly in interaction with AVs. Surveys utilizing questionnaires, without the involvement of


human subjects and automated driving systems (e.g., (Wu et al., 2023b)), were excluded from


the study. This exclusion ensures that the evaluation of trust factors is based on real-life


experiences rather than imagination, aligning with the concept of dynamic trust. Studies had to


examine varying levels of anthropomorphism as an independent variable and report human


trust in interactions with AVs. To ensure the comprehensiveness of the results and minimize


the risk of publication bias, all types of publications were eligible, including conference papers,


journal articles, and dissertations (Rothstein et al., 2005). Finally, studies had to be written in


English.


1.3.Study selection and data extraction


A total of 3008 papers were extracted from seven databases and imported to the EndNote


(version 21) software to remove duplicates. To determine whether the remaining articles (2177)


meet the inclusion criteria, two authors (AM, SM) independently screened the titles and


abstracts, resulting in 237 articles. Then, the full texts of the remaining articles were screened


for eligibility (AM, SM) and disagreements were resolved in consultation with a third reviewer


(AA). Authors treated multiple experiments within each study as separate samples. The


PRISMA diagram (Fig. 1) shows the study selection process and reasons for excluding studies.


A data collection form was created in an Excel spreadsheet (see supplementary appendix B)


and finalized after a trial data extraction process conducted by two authors (AM, AA) on


several research papers. The form was used to summarize the following information from each


article: (i) bibliographic details (title of the study, authors, publication year, country), (ii)


methodology (study design, theoretical framework), (iii) personal characteristics (e.g., age,


gender), (iv) details of the experiment (participant sample size, characteristics of the driving


scenario, SAE automation level, HMI modality, level of anthropomorphism, role of


participants, driving simulation, and presence of non-driving related task (NDRT).


Fig. 1. Systematic literature review process based on PRISMA method.


1.4.Risk of bias assessment


The quality of included studies was assessed using Joanna Briggs Institute (JBI) critical


appraisal tool for analytical cross-sectional studies (Moola et al., 2017). This is a validated and


widely used tool for appraising the quality of cross-sectional research, which includes 8


questions related to methodological criteria: Q1 (Were the criteria for inclusion in the sample


clearly defined?), Q2 (Were the study subjects and the setting described in detail?), Q3 (Was


the exposure measured in a valid and reliable way?), Q4 (Were objective, standard criteria used


for measurement of the condition?), Q5 (Were confounding factors identified?), Q6 (Were


strategies to deal with confounding factors stated?), Q7 (Were the outcomes measured in a valid


and reliable way?), and Q8 (Was appropriate statistical analysis used?). As Q4 assesses whether


studies provide evidence that specified diagnostic methods or definitions were used for


including patients when they were selected based on a particular diagnosis or definition (Moola


et al., 2017). As the included studies did not require a specific diagnosis or definition for


participation, this question was not applicable to the studies in the current systematic review.


The questions should be answered according to: Yes, No, Unclear, or Not/Applicable. Each


question answered with "yes" was assigned 1 point, while "no" and "unclear" received 0 points.


Responses marked as "not applicable" were excluded from the scoring. In addition to each


study's total score, the relevant percentage was also reported to indicate its quality level. For


instance, a study with 7 'yes' responses out of 7 questions received a total score of 7,


corresponding to 100%. Studies with a JBI score above 75% were classified as high quality,


those scoring between 50% and 75% were considered moderate quality, and studies with a JBI


score below 50% were categorized as low quality (Alluhaybi et al., 2023). Two researchers


(AM, SM) independently rated the quality of each study using the checklist and disagreements


in ratings were resolved in consultation with a third reviewer (AA).


1.5.Data synthesis


From each study, sample sizes, means, and standard deviations (SDs) of the trust scores in AVs


between different levels of anthropomorphism were extracted. If means and SDs were reported


in graphs and charts, Web Plot Digitizer application (https://automeris.io/) was used to extract


the values. If extracting means and SDs through the methods mentioned above was not


possible, mean and SD values was calculated through the methods introduced by (Wan et al.,


2014). Additionally, SD values were generated by converting standard errors (Sestino &


D'Angelo) or confidence intervals (CIs), using formulas provided in the Cochrane Handbook


(section 6.5.2.2) (Chandler et al., 2019). Some eligible studies did not provide sufficient data


to calculate an effect size. In such cases, the authors were contacted up to three times at one

week intervals to request the raw data necessary for effect size calculation. Studies were


excluded from meta-analyses if authors did not respond to requests for further information. The


standardized mean differences (SMD) rather than weighted mean differences (WMD) was


calculated for each study because, although all studies measured trust in AVs at varying levels


of anthropomorphism, they used different questionnaires that featured different rating scores


and items (Andrade, 2020). Hedge's g was used to calculate SMD as it is particularly suitable


when the sample sizes are small (<20) (Cumming, 2013). To interpret the strength of the effect,


the following SMD cut-offs were used: Trivial (< 0.20), small (0.20-0.49), moderate (0.50-


0.79) and large (≥ 0.80) (Cohen, 2013). To account for expected heterogeneity across studies,


all analyses were performed using the random-effects model (Chandler et al., 2019).


As shown in Table 2 each individual study investigated how varying levels of


anthropomorphism influence human trust in AVs. Specifically, they examined one or more of


the following comparisons: (1) anthropomorphic versus non-anthropomorphic interfaces; (2)


superficial versus deep anthropomorphism; and (3) anthropomorphic interface versus the lack


of interface. Based on these comparisons, authors conducted three separate meta-analyses to


investigate the impact of different level of anthropomorphism on human trust in AVs.

Heterogeneity across studies was assessed using the I statistic. Low, moderate, and high levels

of heterogeneity were defined by I [2 ] outcomes of 25%, 50%, and 75%, respectively (Borenstein


et al., 2021). In the case of high and significant heterogeneity, subgroup analyses and meta

regressions were conducted to identify the sources of heterogeneity, and the potential effects


on the results are discussed. Given that the primary aim of our study was to compare


anthropomorphic and non-anthropomorphic interfaces, subgroup analyses and meta

regressions were performed exclusively within this meta-analysis. Subgroup analyses were


limited to: (1) anthropomorphic interface modality (auditory-speech, visual, and


visual_auditory-speech) because anthropomorphic characteristic is presented in different


modalities. Some researchers see anthropomorphism as a human-like visual cue (e.g. a human


eye or a humanized smile) and others as a human-like voice (specially empowered by Large


Language Models (LLMs)) which is integrated to a technology such as a AV (Mahadevan et


al., 2018; Shin et al., 2025); (2) level of automation (level 3 vs. level 5), because it has been


shown that level of automation of the vehicles is effective in perceived anthropomorphism


(Messer et al., 2024); (3) the quality of studies (low, moderate, and high), (4) the presence of


an NDRT (yes vs. no) (5) the role of participants (driver, and pedestrian) (Zhou et al., 2025).;


and (6) the driving simulation (driving simulator, real car, virtual reality, and video-picture)


because they cannot produce completely identical impact and are not comparable to each other


in the Human-AV interaction (Fuest et al., 2020).


Also participants' views of technology anthropomorphism may differ based on their individual


characteristics, such as age (Letheren et al., 2016) and gender (Yu & Ngan, 2019). Meta

regression was therefore performed for continuous variables of age of participants and female


percentage. For all results, a p -value of 0.05 was considered as significant, and all analyses


were performed using the RStudio version 2025.05.1 (Team, 2020) and the "meta" package


(Balduzzi et al., 2019).


Publication bias was assessed with visual inspection and statistical test using the funnel plot


and Egger bias test, if ≥10 studies were available for a single meta-analysis (Egger et al., 1997).


A p < 0.05 based on the Egger's test along with an asymmetry in the funnel plot are considered


as indications of publication bias. To enhance the robustness of findings, authors conducted a


sensitivity analysis by sequentially excluding one study from the analysis (i.e., leave-one-out


approach). Data and analysis code are available in the following link (https://github.com/ali-


arabian/anthropomorphism_trust_AVs).

# 2. Results

2.1.Study characteristics


As shown in Table 2, 70 studies were included in the analysis, of which 34 studies (56.66%)


compared the impact of anthropomorphic versus non-anthropomorphic interfaces on human


trust in AVs [study IDs according to Table 2: 1-3, 5-8, 10-13, 16, 23-26, 29, 31-32, 35-36, 38

42, 45, 47-48, 51, 60, 64, 68-69], 50 studies compared superficial versus deep


anthropomorphism [study IDs: 1, 3-4, 6, 9-10, 14-15, 17-22, 26, 29-34, 36-38, 43-46, 48-50,


52-70], and 13 studies compared anthropomorphic interface versus the lack of interface (I.e.,


baseline) [study IDs: 8-9, 15, 18, 27-28, 37, 45, 49, 53, 56-58]. The mean sample size per study


was 84.3 (SD = 119.9), ranging from 8 to 731 participants, with an overall total of 5,903. These


eligible studies were published between 2015 and 2025, representing three continents: Europe,


Asia, and America. The mean age of participants across studies was 29.01 years (SD = 8.09),


ranged between 10.73 and 60.07 years, and the mean proportion of female participants across


studies was 45.58% (SD = 12.7%), ranged from a minimum of 9% to a maximum of 67%.


Regarding the engagement with NDRT, only 16 studies included it, while the remaining 54


studies did not. Of the included studies, 30 examined human interaction with L3 driving


automation, 2 with L4, and the remaining 38 focused on fully AVs (L5). In 54 out of 70 studies,


participants assumed the role of drivers, while in 10 studies they acted as pedestrians and in 6


studies as passengers. Regarding driving simulation, the studies were classified into three


categories: (i) Simulator - 37 studies recreated the driving environment using a driving


simulator or pedestrian simulation lab; (ii) Video/Picture - 19 studies used videos or images to


represent the driving environment; (iii) Virtual Reality (Vrkljan & Anaby) - 8 studies used VR


headset to represent the driving environment; and (iv) Real Car - 6 studies conducted in real

world driving conditions.


2.2.Risk of bias assessment of the included studies


Table 2 shows the classification of the methodological quality for each included study. 48.57%


of included studies (34/70) were classified as high quality, while 30 out of 70 studies were of


moderate quality (42.86%). The remaining studies (6/70) were of low quality (8.57%).


Common quality assessment criteria that were not met by studies included identifying


confounding factors and strategies to deal with them, clearly defining inclusion criteria, using


appropriate statistical analysis, and measuring outcomes in a valid and reliable way,


respectively. See supplementary appendix C for further details of the quality assessment.


Table 2. Characteristics of included studies.


# Study


# Study N Age: Year


# Gender:


# Level of
automation


# Deep
Anthro


# Driving
simulation


# NDRT JBI
quality
criteria

# score


ID


# (SD);
Min/Max


# F/M


# ID (SD); F/M automation Deep Superficial Comparison Baseline

# Min/Max Anthro Anthro (Without

# modality)
1 (Aleva et 28 27.2(9.2); 5/23 L5 Visual Visual Visual No
al., 2024) 19/59


# Superficial


# Anthro


# Modality Role of

# Comparison Baseline participants


1 (Aleva et 28 27.2(9.2); 5/23 L5 Visual Visual Visual No Pedestrian Virtual No 57%
al., 2024) 19/59 Reality Moderate

2 (Antrobus 23 28.7(8.69) 4/19 L5 Auditory- - Visual No Passenger Simulator No 57%
et al., 2018) Speech Moderate


28 27.2(9.2);


5/23 L5 Visual Visual Visual No Pedestrian Virtual
Reality


19/59


2 (Antrobus 23 28.7(8.69) 4/19 L5 Auditory- - Visual No Passenger Simulator No 57%
et al., 2018) Speech Moderate

3 (Aremyr et 11 47(-); 25/68 5/6 L5 Visual Visual Visual No Passenger Real Car No 100%


23 28.7(8.69) 4/19 L5 Auditory


Speech


Visual
Auditory


Visual
Auditory


No Passenger Real Car No 100%


High


al., 2019)


11 47(-); 25/68 5/6 L5 Visual
Auditory


Speech


Speech


4 (Atchley et


4 (Atchley et 92 21.3 (5.7) L5 Visual Visual - No Driver Video- No 43%

al., 2022) Picture Low

5 (Bonneviot 731 41.58(12.70); 383/348 L5 Visual - Visual No Pedestrian Video- No 71%
et al., 2023) 18/65 Auditory- Auditory Picture Moderate


92 21.3 (5.7) L5 Visual Visual - No Driver VideoPicture


al., 2022)


731 41.58(12.70);


383/348 L5 Visual
Auditory


- Visual
Auditory


No Pedestrian VideoPicture


No 71%
Moderate


18/65


Speech


6 (Choi et al.,


6 (Choi et al., 45 Median = 29/16 L5 Visual Visual Visual No Pedestrian Virtual No 86%

2022) 23(-); 18/34 / Reality High

7 (Chung et 38 10.73(1.12); 13/25 L5 Visual - Visual No Pedestrian Video- No 86%


45 Median =
23(-); 18/34 /

38 10.73(1.12);


29/16 L5 Visual Visual Visual No Pedestrian Virtual
Reality

13/25 L5 Visual - Visual No Pedestrian VideoPicture


2022)


7 (Chung et 38 10.73(1.12); 13/25 L5 Visual - Visual No Pedestrian Video- No 86%

al., 2024) 10/12 Picture High

8 (Colley et 226 31.04(9.71) 94/129/2 L5 Auditory- - Visual Yes Driver Video- No 100%

al., 2022) n/a Speech Picture High

9 (Du et al., 32 26.9(6.3) 11/21 L3 Auditory- Auditory- - Yes Driver Simulator No 71%


al., 2024)


10/12


226 31.04(9.71) 94/129/2


L5 Auditory


No 100%


al., 2022)


n/a


Speech


- Visual Yes Driver VideoPicture


9 (Du et al., 32 26.9(6.3) 11/21 L3 Auditory- Auditory- - Yes Driver Simulator No 71%

2019) Speech Speech Moderate

10 (Faas et al., 59 42.98(14.85); 27/32 L5 Visual Visual Visual No Pedestrian Real Car No 86%


32 26.9(6.3) 11/21 L3 Auditory


Auditory


2019)


Speech


Speech


10 (Faas et al., 59 42.98(14.85); 27/32 L5 Visual Visual Visual No Pedestrian Real Car No 86%

2020) 18/66 High

11 (Flohr et 34 29.9(9.8); 15/18/1 L5 Visual - Visual No Passenger Video- No 86%
al., 2021) 19/61 n/a Picture High


59 42.98(14.85);


2020)


18/66


11 (Flohr et 34 29.9(9.8); 15/18/1 L5 Visual - Visual No Passenger Video- No 86%
al., 2021) 19/61 n/a Picture High

12 (Forster et 17 29.0(8.12); 7/10 L3 Auditory- - Visual No Driver Simulator Yes 71%


34 29.9(9.8);


15/18/1


L5 Visual - Visual No Passenger VideoPicture


19/61


n/a


12 (Forster et 17 29.0(8.12); 7/10 L3 Auditory- - Visual No Driver Simulator Yes 71%

al., 2017) 22/56 Speech Moderate

13 (Frison et 18 25.11(10.35); 12/6 L3 Auditory- - Visual No Driver Simulator Yes 57%
al., 2019) 19/65 Speech Moderate


17 29.0(8.12);


7/10 L3 Auditory


al., 2017)


22/56


Speech


13 (Frison et 18 25.11(10.35); 12/6 L3 Auditory- - Visual No Driver Simulator Yes 57%
al., 2019) 19/65 Speech Moderate

14 (He & 68 34.6(-); 23/44 L5 Auditory- Auditory- - No Driver Video- No 57%
Burns, 20/62 Speech Speech Picture Moderate


18 25.11(10.35);


12/6 L3 Auditory


19/65


Speech


68 34.6(-);


23/44 L5 Auditory


Auditory


No 57%
Moderate


20/62


Speech


Speech


- No Driver VideoPicture


2022)


15 (Hock et
al., 2016)

38 24(3.54) 25/13 L3 Visual
Auditory
Speech

16 (Hong et
al., 2025)

70 30.0(10.18);

33/37 L5 Auditory

- Visual No Driver Simulator Yes 100%

30 24.6(2.58);

15/15 L3 Auditory

18 (Kaufman 41 L5 Auditory- Auditory- - Yes Driver Simulator No 86%
et al., 2024) Speech Speech High

41 L5 Auditory

18 (Kaufman 41 L5 Auditory- Auditory- - Yes Driver Simulator No 86%
et al., 2024) Speech Speech High

499 26.04(10.23);

277/211 L3 Visual Visual - No Driver VideoPicture

30 23.10(1.68);

17/13 L5 Auditory

- No Driver Simulator No 100%

84 24.7(3.33);

51/32 L3 Auditory

56 24.78(4.89);

22 (Knutzen et 56 24.78(4.89); 5/51 L3 Visual Visual - No Driver Simulator No 86%

al., 2019)

21 19(0.9) 4/19 L3 Auditory

23 (Ko et al., 21 19(0.9) 4/19 L3 Auditory- - Auditory No Driver Simulator Yes 86%

52 37(12) 30/22 L5 Visual - Visual No Driver VideoPicture

40 25.2(2.60);

20/20 L3 Auditory

26 (Kraus et
al., 2016)

16 27.63(8.96) _ L3 Visual
Auditory
Speech

27 (Kuhnlenz

189 27.5(12.7);

84/104 L5 Auditory
Speech

&
Kuhnlenz,

28 (Kunze et

28 (Kunze et 34 30.8(9.5) 14/20 L3 Visual - - Yes Driver Simulator Yes 71%

al., 2019)

34 40(11.4);

17/17 L5 Auditory

29 (Large et 34 40(11.4); 17/17 L5 Auditory- Auditory- Visual No Driver Real Car No 86%
al., 2019) 21/58 Speech Speech High

- Yes Driver Virtual
Reality

No 71%
Moderate

Auditory No Driver Simulator No 71%
Moderate

Visual
Auditory
Speech

- - Yes Driver VideoPicture

No 57%
Moderate

30 (Large et 41 L5 Visual Visual - No Pedestrian Real Car No 14%
al., 2025) Low

No 57%
Moderate

146 36.92(14.04) 88/58 L5 Visual Visual Visual No Driver VideoPicture

Auditory
Speech

16 (Hong et 70 30.0(10.18); 33/37 L5 Auditory- - Visual No Driver Simulator Yes 43%
al., 2025) 19-78 Speech Low

17 (Ji et al., 30 24.6(2.58); 15/15 L3 Auditory- Auditory- - No Driver Simulator No 86%

19-78

Speech

17 (Ji et al., 30 24.6(2.58); 15/15 L3 Auditory- Auditory- - No Driver Simulator No 86%

2019) 21/35 Speech Speech High

Auditory

2019)

21/35

Speech

Speech

19 (Kettle et 499 26.04(10.23); 277/211 L3 Visual Visual - No Driver Video- No 100%
al., 2023) 18/74 Picture High

Auditory

Speech

Speech

No 100%

al., 2023) 18/74 Picture High

20 (Y. M. Kim 30 23.10(1.68); 17/13 L5 Auditory- Auditory- - No Driver Simulator No 86%
et al., 2024) 20/28 Speech Speech High

18/74

20 (Y. M. Kim 30 23.10(1.68); 17/13 L5 Auditory- Auditory- - No Driver Simulator No 86%
et al., 2024) 20/28 Speech Speech High

21 (Kim et al., 84 24.7(3.33); 51/32 L3 Auditory- Auditory- - No Driver Simulator No 100%

2025) 19/32 Speech Speech High

Auditory

20/28

Speech

Speech

Auditory

2025)

19/32

Speech

Speech

22 (Knutzen et 56 24.78(4.89); 5/51 L3 Visual Visual - No Driver Simulator No 86%

al., 2019) 19/52 High

19/52

23 (Ko et al., 21 19(0.9) 4/19 L3 Auditory- - Auditory No Driver Simulator Yes 86%

2022) Speech High

24 (Kohn et 52 37(12) 30/22 L5 Visual - Visual No Driver Video- No 71%
al., 2018) Picture Moderate

2022)

Speech

24 (Kohn et 52 37(12) 30/22 L5 Visual - Visual No Driver Video- No 71%
al., 2018) Picture Moderate

25 (Korber, 40 25.2(2.60); 20/20 L3 Auditory- - Visual No Driver Simulator Yes 100%
Prasch, et 21/30 Speech High
al., 2018)

21/30

Speech

High

2023)

18/75

al., 2019) Moderate

29 (Large et 34 40(11.4); 17/17 L5 Auditory- Auditory- Visual No Driver Real Car No 86%
al., 2019) 21/58 Speech Speech High

Auditory

21/58

Speech

Speech

30 (Large et 41 L5 Visual Visual - No Pedestrian Real Car No 14%
al., 2025) Low

31 (Lawson- 146 36.92(14.04) 88/58 L5 Visual Visual Visual No Driver Video- No 57%
Guidigbe, Picture Moderate

Louveton,
et al., 2023)
32 (LawsonGuidigbe,
Amokrane
Ferka, et
al., 2023b)

33 (Lee & Lee,


191 41.16(11.12);


36 L3 Visual
Auditory
Speech


Auditory
Speech


Visual
Auditory

Tactile


No Driver Simulator Yes 71%
Moderate


33 (Lee & Lee, 191 41.16(11.12); 75/116 L3 Auditory- Auditory- - No Driver Video- No 71%

2022) 24/74 Speech Speech Picture Moderate

34 (Lee & Lee, 96 23.84(3); 48/48 L3 Auditory- Auditory- - No Driver Simulator No 57%


75/116 L3 Auditory


Auditory


2022)


24/74


Speech


Speech


- No Driver VideoPicture


34 (Lee & Lee, 96 23.84(3); 48/48 L3 Auditory- Auditory- - No Driver Simulator No 57%

2022) 18/34 Speech Speech Moderate

35 (Lee et al., 89 23.65(2.21); 45/44 L5 Visual - Visual No Pedestrian Simulator No 86%


96 23.84(3);


48/48 L3 Auditory


Auditory


2022)


18/34


Speech


Speech


35 (Lee et al., 89 23.65(2.21); 45/44 L5 Visual - Visual No Pedestrian Simulator No 86%

2015) 19/29 High

36 (Lin, 2024) 314 26(-); 21/73 183/127 L5 Visual Visual Visual No Driver Video- No 57%
Picture Moderate


89 23.65(2.21);


2015)


19/29


36 (Lin, 2024) 314 26(-); 21/73 183/127 L5 Visual Visual Visual No Driver Video- No 57%
Picture Moderate

37 (Liu et al., 257 19.63(1.91); 97/160 L3 Auditory- Auditory- - Yes Passenger Real Car No 86%


37 (Liu et al., 257 19.63(1.91); 97/160 L3 Auditory- Auditory- - Yes Passenger Real Car No 86%

2024) 17/33 Speech Speech High

38 (Locken et 20 27(7.2) 7/13 L5 Visual Visual Visual No Pedestrian Virtual No 57%


257 19.63(1.91);


97/160 L3 Auditory


Auditory


2024)


17/33


Speech


Speech


38 (Locken et 20 27(7.2) 7/13 L5 Visual Visual Visual No Pedestrian Virtual No 57%

al., 2019) Reality Moderate

39 (Ma et al., 8 -(-); 20/30 4/4 L5 Visual - Visual No Driver Video- No 71%


al., 2019)


20 27(7.2) 7/13 L5 Visual Visual Visual No Pedestrian Virtual
Reality


- Visual No Driver VideoPicture


No 71%
Moderate


2020)


8 -(-); 20/30 4/4 L5 Visual
Auditory


- Tactile No Driver Simulator No 100%


40 (Meinhardt
et al., 2024)


Speech

14 60.07(12.46) 7/7 L5 Auditory


Speech


et al., 2024) Speech High

41 (Nadri et 20 24.3(6.32) 6/13/1n/a L4 Visual - Visual No Driver Simulator No 100%
al., 2024) Auditory- Auditory High


20 24.3(6.32) 6/13/1n/a L4 Visual
Auditory


- Visual
Auditory


No Driver Simulator No 100%


High


42 (Niu et al.,


Speech

39 27.21(7.22) 15/24 L5 Visual - Visual No Driver Simulator No 100%


2018) High

43 (Park et al., 30 23.1(1.8) 17/13 L5 Auditory- Auditory- - No Driver Simulator No 100%

2024a) Speech Speech High

44 (Pavone & 309 43.14(12.93); 152/157 L5 Auditory- Auditory- - No Driver Video- No 86%


2018)


30 23.1(1.8) 17/13 L5 Auditory


Auditory


- No Driver Simulator No 100%


2024a)


Speech


Speech


26/23/3n/a L3 Visual Visual - No Driver VideoPicture


152/157 L5 Auditory


Visual
Auditory


- No Driver VideoPicture


No 86%
High


Desveaud,

2025)

45 (Prattico et

al., 2025)


46 (Premstaller
et al., 2023)


309 43.14(12.93);

20/80


24 27.5(7.1);

21/58


52 29.58(12.60);

20/61


Speech


9/15 L3 Visual
Auditory
Speech


Auditory
Speech


Auditory
Speech


Yes Driver Virtual
Reality


Yes 57%
Moderate


No 57%
Moderate


47 (Ruijten et

al., 2018)


57 24.5(1.96);

20/30


13/44 L3 Visual
Auditory
Speech


- Visual No Driver Simulator No 57%
Moderate


48 (Schneider
et al., 2017)


48 (Schneider 32 23.31(3.15); 13/19 L3 Visual Visual Visual No Driver Simulator Yes 57%
et al., 2017) 18/30 Moderate

49 (Schuß et 136 32.51(16.17); 68/76 L5 Visual Visual - Yes Passenger Video- No 57%
al., 2024) 18/78 Auditory- Auditory- Picture Moderate


32 23.31(3.15);


18/30


136 32.51(16.17);


68/76 L5 Visual
Auditory


Visual
Auditory


- Yes Passenger VideoPicture


No 57%
Moderate


18/78


Speech


Speech


50 (Shin et al.,


50 (Shin et al., 89 29.8(8.7); 52/37 L5 Auditory- Auditory- - No Driver Video- No 86%

2025) 20/62 Speech Speech Picture High

51 (Song et al., 60 - - L3 Auditory- - Visual No Driver Simulator No 43%


89 29.8(8.7);


52/37 L5 Auditory


Auditory


2025)


20/62


Speech


Speech


- No Driver VideoPicture


51 (Song et al., 60 - - L3 Auditory- - Visual No Driver Simulator No 43%

2023) Speech Low

52 (Stampf et 14 25.07(3.1); 6/8 L5 Auditory- Auditory- - No Driver Virtual No 43%


60 - - L3 Auditory


2023)


Speech


52 (Stampf et 14 25.07(3.1); 6/8 L5 Auditory- Auditory- - No Driver Virtual No 43%

al., 2024) 21/34 Speech Speech Reality Low

53 (Sun et al., 55 23.9(3.9); 32/23 L4 Auditory- Auditory- - Yes Driver Virtual Yes 86%


14 25.07(3.1);


6/8 L5 Auditory


Auditory


al., 2024)


21/34


Speech


Speech


53 (Sun et al., 55 23.9(3.9); 32/23 L4 Auditory- Auditory- - Yes Driver Virtual Yes 86%

2024) 19/44 Speech Speech Reality High

54 (Torggler et 25 23.28(2.74) 8/17 L3 Auditory- Auditory- - No Driver Simulator Yes 57%


55 23.9(3.9);


32/23 L4 Auditory


Auditory


2024)


19/44


Speech


Speech


- No Driver Virtual
Reality

- Yes Driver Virtual
Reality


54 (Torggler et 25 23.28(2.74) 8/17 L3 Auditory- Auditory- - No Driver Simulator Yes 57%

al., 2022) Speech Speech Moderate

55 (Verberne 111 39.8(12.7) 58/53 L5 Visual Visual - No Passenger Simulator No 100%
et al., 2015) High


25 23.28(2.74) 8/17 L3 Auditory


Auditory


al., 2022)


Speech


Speech


111 39.8(12.7) 58/53 L5 Visual Visual - No Passenger Simulator No 100%


et al., 2015) High

56 (Wallbridge 296 40.33(13.72); 157/135 L5 Visual Visual - Yes Driver Video- No 100%
et al., 2024) 18/73 Auditory- Picture High


296 40.33(13.72);


Visual - Yes Driver VideoPicture


No 100%


High


18/73


57 (Wallbridge
et al., 2024)


58 (Wallbridge
et al., 2024)


59 (M. Wang
et al., 2021)


199 42.05(13.09);

18/80


192 41.52(12.48);

18/80


24 23.13(4.59) 8/16 L5 Visual
Auditory
Speech


157/135 L5 Visual
Auditory
Speech

91/108 L5 Visual
Auditory
Speech

110/80 L5 Visual
Auditory
Speech


Visual - Yes Driver VideoPicture


Visual - Yes Driver VideoPicture


No 100%

High


No 100%

High


Auditory
Speech


- No Driver Simulator No 57%
Moderate


60 (P. Wang et


60 (P. Wang et 10 26.36(4.06) 6/4 L5 Visual Visual Visual No Pedestrian Real Car No 71%

al., 2021) Moderate

61 (Wang et 24 23.12(4.49); 7/17 L3 Visual Auditory- - No Driver Simulator No 57%
al., 2022) 19/33 Auditory- Speech Moderate


al., 2021)


24 23.12(4.49);


7/17 L3 Visual
Auditory


Auditory


Speech


19/33


- No Driver Simulator No 57%
Moderate


Speech


62 (Wang et
al., 2024)


63 (Wang et
al., 2024)


24 23.12(4.49);

19/33


24 23.13(4.59);

18/36


Auditory
Speech


Auditory
Speech


Auditory


- No Driver Simulator No 71%
Moderate


- No Driver Simulator No 71%
Moderate


64 (Wiehr et
al., 2021)


64 (Wiehr et 23 25.13(2.48); 15/8 L3 Auditory- Auditory- Auditory No Driver Simulator Yes 86%
al., 2021) 21/29 Speech Speech High

65 (Wong et 20 26.3(7.24); 8/12 L3 Auditory- Auditory- - No Driver Simulator Yes 43%
al., 2019) 21/48 Speech Speech Low


23 25.13(2.48);


21/29


7/14 L3 Visual
Auditory
Speech

8/13 L5 Visual
Auditory
Speech

15/8 L3 Auditory


Speech


Speech


65 (Wong et 20 26.3(7.24); 8/12 L3 Auditory- Auditory- - No Driver Simulator Yes 43%
al., 2019) 21/48 Speech Speech Low

66 (Yin et al., 25 26.3(3.1); 12/13 L3 Auditory- Auditory- - No Driver Simulator Yes 100%

2024) 20/29 Speech Speech High

67 (Yoo et al., 41 27.83(8.47) 22/19 L3 Auditory- Auditory- - No Driver Simulator Yes 86%


20 26.3(7.24);


8/12 L3 Auditory


Auditory


21/48


Speech


Speech


25 26.3(3.1);


12/13 L3 Auditory


Auditory


- No Driver Simulator Yes 100%


2024)


20/29


Speech


Speech


67 (Yoo et al., 41 27.83(8.47) 22/19 L3 Auditory- Auditory- - No Driver Simulator Yes 86%

2022) Speech Speech High

68 (Y. Zhang 30 26.03(2.68); 14/16 L3 Auditory- Auditory- Auditory No Driver Simulator No 100%
et al., 2023) 23/33 Speech Speech High


41 27.83(8.47) 22/19 L3 Auditory


Auditory


2022)


Speech


Speech


30 26.03(2.68);


14/16 L3 Auditory


Auditory


Auditory No Driver Simulator No 100%


et al., 2023) 23/33 Speech Speech High

69 (Zhang et 10 -(-); 23/31 6/4 L5 Auditory- Auditory- Visual No Pedestrian Virtual No 86%
al., 2024) Speech Speech Reality High


23/33


Speech


Speech


69 (Zhang et 10 -(-); 23/31 6/4 L5 Auditory- Auditory- Visual No Pedestrian Virtual No 86%
al., 2024) Speech Speech Reality High

70 (Zhao et al., 40 23.44(2.97); 20/20 L3 Auditory- Auditory- Visual No Driver Simulator Yes 100%


10 -(-); 23/31 6/4 L5 Auditory


Auditory


Speech


Speech


Visual No Pedestrian Virtual
Reality


40 23.44(2.97);


20/20 L3 Auditory


Auditory


Visual No Driver Simulator Yes 100%


2024)


20/31


Speech


Speech


High


2.3.Meta-analyses


Data pooling from 34 studies indicated no significant difference in human trust in AVs when


interacting with anthropomorphic compared to non-anthropomorphic interfaces (SMD = 0.04,


95% CI [-0.25, 0.33], p = 0.797, trivial effect, Fig 2). The between-study heterogeneity was

high and significant (I = 82%, p < 0.001). Similarly, the level of anthropomorphism

(superficial versus deep) (k = 50; SMD = 0.05, 95% CI [-0.14, 0.23], p = 0.623; I = 83%, p <


0.001, Fig. 3) and the presence of anthropomorphic interface versus baseline, i.e., the lack of

interface (k = 13; SMD = 0.15, 95% CI [-0.02, 0.33], p = 0.091; I = 43%, p = 0.051, Fig. 4)


showed non-significant trivial effect on human trust in AVs.


Fig 2. Forest plot of the effect of anthropomorphic interface on human trust in AVs compared
to non-anthropomorphic interface.


Fig. 3. Forest plot of the effect of deep anthropomorphism on human trust in AVs compared to
superficial anthropomorphism.


Fig. 4. Forest plot of the effect of anthropomorphic interface on human trust in AVs compared
to baseline (i.e., the lack of interface).


2.4.Heterogeneity: subgroup analyses and meta-regression


Due to the high heterogeneity across studies comparing anthropomorphic and non
anthropomorphic interfaces (I = 82%, p < 0.001), subgroup and meta-regression analyses were


conducted to identify potential moderators influencing the impact of anthropomorphism on


human trust in AVs, as highlighted in the relevant literature. The results of the subgroup


analyses are shown in Table 3. In addition, meta regression was computed for two continuous


variables (i.e., participants' average age and female percentage). The results showed a marginal


significant predictive value of age on the impact of anthropomorphism on human trust in AVs


(p = 0.07); each year increase in average age was associated with a 0.031 increase in the SMD


of trust (Table 4). Results of meta-regressions performed on female percentage showed no


significant effect on the impact of anthropomorphism on human trust in AVs. See


supplementary appendix D for graphical representation of subgroup analyses and meta


regressions.


Table 3. Subgroup meta-analysis results


# Between


# Subgroups K


# group


# heterogeneity


# SMD [CI 95 %] I Conclusion


Overall 34 0.04 [-0.25; 0.33] 82%


# Anthropomorphism


# modality


Visual 13


-0.48 [ -1.19; 0.22] 92%


The presence of a speech-based anthropomorphic


interface, either on its own or combined with a


visual interface, had a significantly small positive


effect on human trust in automated vehicles. In


contrast, the unimodal visual anthropomorphic


interface did not lead to a statistically significant


effect. The auditory and audiovisual modality


subgroups exhibited low heterogeneity, whereas


the visual modality subgroup showed high


heterogeneity. No statistically significant


differences were observed between the effect sizes


of the three modalities.


Auditory-Speech 13 0.30 [ 0.10; 0.50] 16%


Visual_Auditory

Speech


P = 0.11


8 0.26 [0.03; 0.50] 37%


Automation level The two level of automation did not appear to


L3 12


0.17 [-0.06; 0.39] 39%


differentially affect the primary outcome, change


in trust scores. Level 3 automation subgroup


showed low heterogeneity among studies. The test


for subgroup differences indicated that there is no


statistically significant subgroup effect.


P = 0.30

L5 21 -0.11 [-0.57; 0.36] 87%


JBI quality Subgroup analysis of JBI quality did not appear to


Low 2


0.28 [-0.06; 0.61] 0%


differentially affect the trust score. Low and


moderate heterogeneity observed across studies


with low and moderate JBI qualities, respectively.


Moderate 16 P = 0.54 0.10 [-0.22; 0.41] 73%


High 16 -0.04 [-0.54; 0.46] 88%


NDRT NDRT subgroup analysis result in a significant


No 16


0.34 [0.17; 0.52] 45%


small positive effect of anthropomorphism on


human trust in automated vehicles across studies


that lacked NDRT.


P = 0.04

Yes 9 0.03 [-0.22; 0.27] 17%


Role of participant When participants assumed the driver role in the


Driver 22


0.26 [ 0.11; 0.41] 37%


studies, anthropomorphism had a significant small


positive effect on human trust in automated


vehicles, with low heterogeneity observed across


studies. Although a moderate effect size was seen


in the pedestrian group, this should be considered


cautiously due to high heterogeneity and non

significant differences.


Passenger 3 0.02 [-0.77; 0.81] 76%


P = 0.15


Pedestrian 9 -0.71 [-1.73; 0.30] 94%


Driving simulation Anthropomorphism in driving simulator studies


Virtual Reality 5


-0.01 [-0.41; 0.39] 58%


had a significant small positive effect on human


trust in automated vehicles, while it did not appear


to differentially affect on human trust in automated


vehicles within real car, or virtual reality and


video/picture simulation studies. The driving


simulation subgroup analysis reduced


heterogeneity across driving simulator and virtual


reality studies.


Simulator 17 0.23 [0.04; 0.42] 33%


Real car 4 -0.49 [-2.32; 1.33] 90%


P = 0.47


Video/Picture 8 -0.28 [-1.26; 0.70] 94%


K: Number of studies; CI: Confidence interval.


Table 4. Meta-regression results for Age and Gender


Covariate Coefficient Standard error 95 % CI Z value P value


Average Age (K = 30) 0.0309 0.0172 [-0.0028; 0.0646] 1.7990 0.0720


Intercept -0.9282 0.5372 [-1.9812; 0.1247] -1.7278 0.0840


Female % (K = 31) 0.0043 0.0117 [-0.0185; 0.0272] 0.3695 0.7118


Intercept -0.1894 0.5490 [-1.2654; 0.8865] -0.3451 0.7300


K: Number of studies; CI: Confidence interval.


2.5.Publication bias and sensitivity analysis


The funnel plots illustrated a roughly symmetrical distribution of the included studies,


indicating no strong evidence of publication bias. These inspections were supported by the


statistically non-significant findings of Egger's tests for small-study effects (Fig. 5; A ( p =


0.59), B ( p = 0.78), and C ( p = 0.10)).


The sensitivity analysis was conducted using a leave-one-out method for the meta-analysis


comparing anthropomorphic and non-anthropomorphic interfaces. The finding revealed that


removing the study by (Chung et al., 2024) (Study ID = 7) slightly increased the effect size

(SMD = 0.17, 95% CI [0.02, 0.31], p = 0.02; I = 60%), which considered as an influential


factor (Fig. 6). However, the effect size remained trivial, suggesting that the difference in effect


size was not considerable, and the overall result is robust. The sensitivity analysis for the meta

analysis of deep versus superficial anthropomorphism confirmed that no individual study


contributed significantly to altering the significance of the result. This suggests that the overall


result of this meta-analysis is robust. Finally, a sensitivity analysis was conducted to assess the


robustness of the finding of the anthropomorphic interface versus baseline meta-analysis. The


finding showed that the exclusion of Study ID = 9 (Du et al., 2019) increased the effect size to

0.23 (small effect, 95% CI: 0.08 to 0.38, p = 0.002; I = 7.1%, Fig. 8). Similarly, omitting Study


ID = 58, (Wallbridge et al., 2024) resulted in an increased effect size of 0.20 (small effect, 95%

CI [0.03, 0.37], p = 0.023; I [2 ] = 33.1%, Fig. 8).


# A B C

Fig. 5. Funnel plots of included studies for meta-analysis models (A) Anthropomorphic vs.
non-anthropomorphic interfaces, (B) Deep vs. superficial anthropomorphism, and (C)
Anthropomorphic vs. baseline. The funnel plots show the observed standardised mean
differences (on the x-axis) against standard errors (on the y-axis).


Fig. 6. Leave-one-out sensitivity analysis for the meta-analysis comparing anthropomorphic
vs. non-anthropomorphic interfaces.


Fig. 7. Leave-one-out sensitivity analysis for the meta-analysis comparing deep vs. superficial
anthropomorphism.


Fig. 8. Leave-one-out sensitivity analysis for the meta-analysis comparing anthropomorphic
interface vs. baseline.

# 3. Discussion


This systematic review and meta-analysis investigated the impact of anthropomorphism


interventions on trust in AVs. Authors answered the question of whether attributing human-like


characteristics to AVs (i.e., anthropomorphizing them), genuinely enhances user trust.


The main finding of the meta-analysis indicated that anthropomorphic interfaces did not


produce a statistically significant improvement in trust toward AVs when compared to


either non-anthropomorphic interfaces or the absence of any interface.


The included studies reported both positive and negative effects of anthropomorphism on trust.


Therefore, the pooled outcome of this meta-analysis is not unexpected. However, the finding


of this meta-analysis does not align with those of similar meta-analyses conducted outside the


domain of AVs such as in the field of HRI. A meta-analysis by (Roesler et al., 2021) reported a


positive effect of anthropomorphism on trust to robots with a medium effect size (d = 0.726).


Also, a meta-analysis by Blut et al. (2021) investigated the relationship between robot


anthropomorphism and trust, based on 24 effect sizes from a cumulative sample of 2,365


participants. The results revealed a small but significant positive correlation (r = 0.19, 95% CI


[0.00, 0.38]) across studies involving physical robots, chatbots, and other automated systems


in service contexts (Blut et al., 2021). Other meta-analysis has also examined outcomes beyond


trust, such as user experience with anthropomorphic interfaces. In this case, as well, the overall


estimates have indicated positive effects of anthropomorphism. A meta-analysis by Yee et al.


(2021) examined 25 studies comparing interfaces featuring visually embodied, human-like


agents with those without such agents. The results indicated a small but statistically significant


effect size (r = 0.13, p < .001) in favor of interfaces with human-like representations (Yee et


al., 2007).


For discussing the misalignment between paper's results and other studies outside the AV


domain, authors point to inherent differences between human-AV interaction and HRI, the


difference between results is reasonable. Inherent differences include the typically open setting


of HRI versus the enclosed environment of human-vehicle interaction, as well as the motion


and inherent risks of vehicles compared to the stationary nature of most robot interactions.


However, the reasons for ineffectiveness of anthropomorphic interfaces in enhancing trust in


AVs can be explored through the following considerations ( theoretical considerations +


technical view to trust + Confounding variables such as initial trust do+ Interaction time +


Perceived anthropomorphism + some other influential parameters ).


Despite of previous theories, there are also several social and psychological theories have


explored the potential negative consequences of anthropomorphizing technology such as the


Uncanny Valley Theory (Burleigh et al., 2013; Ho & MacDorman, 2010), Expectancy Violation


Theory (Bevan et al., 2014), and Media Equation Theory (Złotowski et al., 2018). These


frameworks emphasize that when an anthropomorphized object fails to replicate human


physical, behavioral, or social cues adequately, it is likely to fall short of user expectations and


result in diminished trust. Our results confirmed the ineffectiveness of anthropomorphic design


in enhancing users' trust in AVs. One possible justification is that if a vehicle, despite being


designed with human-like features, fails to meet the expectations, anthropomorphism proves


ineffective.


From the technical point of view, this issue can also be interpreted. Trust is a multidimensional


construct, and the quality and accuracy of the vehicle's technical performance play a crucial


role and perhaps it is more important than the content of the interfaces (anthropomorphic or


normal or even without any interfaces). A non-accurate AV, whether equipped with


anthropomorphic interfaces or not, generally diminishes trust in the vehicle. In such cases, the


effect of anthropomorphic interfaces is masked and does not function as intended in their


design.


Moreover, other influential parameters such as initial trust, which were not addressed in this


particular study, have been shown in previous research to significantly affect dynamic trust


(Niu et al., 2018; Yuan & Yu, 2024). This means that individuals with initially low trust will


maintain low dynamic trust (Manchon et al., 2022) regardless of whether the autonomous


vehicle is anthropomorphized or not, and this may influence the relationship between


anthropomorphism and trust. So, controlling such confounding parameters could produce


different results which was impossible in the current study due to lack of reports by the included


studies.


Generally, it is widely believed that trust in a vehicle much like the process by which trust


develops between humans, is a medium- to long-term process (Glikson & Woolley, 2020;


Stilgoe, 2023; Walker et al., 2023). In contrast, most of the studies included in this meta

analysis involved only brief exposure to the scenario, typically lasting a few minutes and at


most up to some limited hours. Therefore, short-term interactions may not necessarily lead to


substantial changes in overall trust in the AV.


Additionally, there are instances in which, despite researchers' efforts to design


anthropomorphic features into the experimental setup, participants' perceptions of


anthropomorphism (i.e., perceived anthropomorphism (Li et al., 2023; Tsfasman et al., 2021))


do not align with the intended design, ultimately resulting in a failure to achieve the intended


manipulation. In 2023, to examine the distinction between designer-intended and user

perceived anthropomorphism in human-AV interaction, it was found that, contrary to the


authors' hypothesis, adding visual features did not result in higher user-perceived


anthropomorphism (Lawson-Guidigbe, Amokrane-Ferka, et al., 2023b).


Taken together, the above-mentioned 6 aspects may help explain the limited effectiveness of


anthropomorphic interventions in enhancing trust to AVs.


Pooled data analysis revealed that variations in the depth of anthropomorphism


(superficial vs. deep) results in a trivial effect in users' trust in AV


The concept of superficial versus deep anthropomorphism has been applied in various domains,


including HRI, and its influence on trust in both vehicles and other technologies has been


documented (Carter et al., 2024; Cheng et al., 2022; Ratajczyk, 2022).


Based on Uncanny Valley theory, many studies emphasize that lower levels of


anthropomorphism tend to have a more positive effect on trust than higher levels. The results


of a study showed that human-like social interactions in AVs can enhance trust and acceptance,


but overuse of anthropomorphic features (e.g., deep anthropomorphism) such as addressing the


driver by name and expressing emotions may have counterproductive effects. These findings


highlight the potential trade-offs in designing social AV interactions, reflecting the "uncanny


valley" effect (Kim et al., 2025). Contradictory findings have also been reported. The argument


is that deep anthropomorphism can foster stronger emotional, cognitive, and social connections


between humans and technology, making it more effective than superficial anthropomorphism


(Carter et al., 2024). In the current study our analysis went beyond the previous dual and our


analysis showed that there are no differences between superficial and deep anthropomorphism,


at least regarding trust to AVs.


Therefore, the use of anthropomorphic features must be approached with caution, and some


studies have even emphasized their context-specific nature (Roesler et al., 2022). In the AV


domain (Park et al., 2024a) this implies that when long-term interaction is expected such as in


the case of a privately owned AV over an extended period, deep anthropomorphism may be


more appropriate (Guo et al., 2025; Wu et al., 2023b). In contrast, in short-term interactions,


such as those involving public autonomous shuttles or shared rides where the risk of over-trust


can be harmful, the use of superficial anthropomorphism is recommended (Wu, 2024).


In the included studies, anthropomorphism interventions were implemented in three


different forms: auditory, visual, and combined auditory-visual. Subgroup analysis based


# on the modality of anthropomorphism revealed that auditory anthropomorphic


interfaces (characterized by human voice features) produced a small positive in trust


toward AVs, whereas visual anthropomorphic interfaces did not.


Anthropomorphism has been implemented through various modalities (Bai et al., 2024;


Burgoon et al., 2000). However, it is essential to consider the context of interaction, that is, the


setting in which human-technology interaction takes place when discussing the modality


through which anthropomorphism is conveyed. For example, given that driving (both manual


and almost all automated levels except L4 and L5) is inherently a cognitively demanding


process centered on the visual modality, and that users generally perceive driving as a


multimodal task with a strong emphasis on vision (Mosaferchi et al., 2025; Pauzie, 2008;


Zakerian et al., 2018), it follows that anthropomorphic voice (engaging the auditory modality)


and anthropomorphic visuals (engaging the visual processing in the brain) may have different


effects.


At the very least, this distinction has been debated and examined for more than half a century


in various studies (Wickens, 2008), with a general consensus suggesting that when one


modality is heavily engaged, it is preferable for supplementary information to be delivered


through another modality (S. Kim et al., 2024; Nason & Wilbiks, 2025). This approach helps


avoid excessive workload, reduced situational awareness, or even safety issues.


Studies conducted in simulator environments demonstrated that anthropomorphic


interfaces significantly increased trust in AVs, whereas this effect was not observed in


field studies, including test-track driving tests or wizard-of-OZ.


Researchers have recognized for several decades that certain parameters cannot be tested in


real-world environments due to safety and or ethical risks and or time/budget constraints (Silva


et al., 2024). To address this, simulators were introduced and have since been widely used (in


case of driving simulator, the first study was in 1934 (Caird & Horrey, 2011) and for flight


training was 1910 (Bruck et al., 2021)). While offering certain advantages, the limitations


inherent in simulator studies cannot be ignored. These include issues such as overtraining


(Weitz & Adler, 1973), motion sickness (Igoshina et al., 2022), and even the potential for


exaggerations of results.


After reviewing the benefits and positive aspects of driving simulators, Xuemin Hu et al.


discussed the " reality gap " challenge that lies in effectively transferring driving knowledge


from the virtual simulation world to the reality world. They believed that this gap arises due to


differences in lighting, textures, vehicle dynamics, and agents' behaviors between the two


environments (X. Hu et al., 2024).


Most studies in this area were conducted using driving simulators. However, several limitations


should be noted. First, it is uncertain whether driver behavior in a simulator truly reflects


behavior in real-world driving situations, which raises concerns about the generalizability of


findings (Caird & Horrey, 2011; Hock et al., 2018). Real driving scenarios or actual road


conditions may evoke different perceptions and reactions compared to simulated environments.


Second, a systematic review has shown that, despite the safety of simulator studies, no firm


conclusions can be made about the efficacy of training programs or interventions when tested


only in simulated settings (Martin-delosReyes et al., 2019). Finally, trust in automated systems


may develop more quickly in virtual reality or simulator contexts due to the absence of real

world risks, which could mask how such trust would evolve in genuine driving situations.


Taken together, these issues suggest that conclusions drawn from simulator-based studies


should be interpreted with caution.


Performing or not performing NDRTs had a significant impact on the relationship


between anthropomorphic interfaces and trust in AVs; specifically, this relationship was


non-significant when drivers were engaged in NDRTs, whereas it was significant when


drivers were not performing these secondary tasks.


With the introduction of high-level AVs, such as L3 and above, the interaction pattern between


driver and vehicle fundamentally changes. Users are now able to engage freely in secondary


activities unrelated to driving, including holding work meetings, eating, sleeping, using mobile


devices, and more (Cai et al., 2024; Weigl et al., 2023). Some studies assess trust in AVs by


observing participants' voluntary engagement in NDRTs during automated driving. When


individuals are given the choice to perform or ignore an NDRT, the duration and ease with


which they shift their attention away from the driving environment is interpreted as an indirect


indicator of trust (Korber, Baseler, et al., 2018; Pan et al., 2023).


Although Zhang et al. studied anxiety reduction and risk perception instead of trust, their


findings showed that auditory anthropomorphic explanations were more effective than visual


but less anthropomorphic explanations, especially for high-suspicion individuals without a


secondary task. This result supports the broader link between voice-based anthropomorphism


and user trust in AV (Q. Zhang et al., 2023). This result is in-line with the current study as both


of them implied that, doing NDRTs can decrease the effectiveness of anthropomorphic


explanation. Similarly, Hong et al. also implied that speech explanations increased trust when


passengers were not engaged in NDRTs (Hong et al., 2025).


Overall, these findings are also theoretically supported by common cognitive theories, such as


multiple resource theory and or information process theory (Wickens, 2008; Wickens &


Carswell, 2021). These theories suggest that when people are engaged in another cognitive


task, they are less likely to process additional messages, whether anthropomorphic or not. As


a result, their trust in AV may be influenced by doing NDRTs. So, it can be concluded that in


the case of stressful/high-load situation, even some positive effect of anthropomorphic


interfaces could be diminished.


The effect of anthropomorphic interfaces on trust in AVs differed between drivers and


pedestrians (in-vehicle interfaces vs. eHMIs). The effect was significant among drivers


but not significant among pedestrians.


Generally, eHMIs are seen as an effective way to communicate when an AV has no driver or


the driver is busy with non-driving tasks and cannot support pedestrians in making the best


decision in interacting with the AVs (Brill et al., 2023).


When comparing drivers and pedestrians in their responses to anthropomorphic interfaces, a


key difference is the duration of exposure. Drivers may interact with in-vehicle interfaces for


extended periods, while pedestrians typically see an eHMI for only a few seconds.


Undoubtedly, when the exposure time to a message is short, the message must be conveyed


quickly and accurately (Eisma et al., 2023). In such situations, anthropomorphizing the


message may serve no real benefit other than adding cognitive load for the pedestrian, who


may not have sufficient time to properly interpret it (Gong). In describing the differences


between anthropomorphic and non-anthropomorphic eHMIs in terms of message-processing


speed, some studies have distinguished between egocentric and allocentric messages (Eisma et


al., 2021). Allocentric messages convey the AV's intentions or upcoming actions, requiring the


road user to interpret the message from the vehicle's perspective, which takes more time to act


upon ( e.g., "Car will not stop, you cannot pass" ). In contrast, egocentric messages directly


instruct the road user on what action to take, offering a clear and immediate call to action ( e.g.,


"I am approaching, you cannot pass" ) (Bazilinskyy et al., 2019; Brill et al., 2023).


Mentioned by Man et al. in their bibliometric analysis (Man et al., 2025), many current eHMI


studies rely mostly on virtual reality and video-based simulations, which do not fully capture


the complexity of real-world environments. Similar to the concerns previously raised about


driving simulators, these experimental setups may limit the ecological validity of findings.


Therefore, caution is needed when interpreting the results.


Overall, older users exhibited a greater benefit of anthropomorphic interfaces to enhance


trust in AVs.


The meta-regression analysis indicated a marginally significant effect of participants' average


age on human trust in AVs. Specifically, for every 10-year increase in age, the SMD of trust


increased by approximately 0.3 units. This trend is consistent with the findings of the sensitivity


analysis (Fig. 6), which showed that excluding a study focused specifically on children resulted


in a higher overall effect size of anthropomorphism on trust in AVs.


It is important to note that older individuals are generally less likely to be interested in adopting


AVs and tend to have lower initial trust compared to younger users (Lajunen & Sullman, 2021;


Robertson et al., 2019). Therefore, this reflects a multi-layered relationship between user age,


initial trust, dynamic trust, and the perceived need for anthropomorphic information to enhance


trust (at least proven in other technologies and also a possibility in AVs) (Pak et al., 2014).


Due to natural eyesight and hearing declines associated with aging (Mosaferchi & Naddeo,


2025), older adults have a greater need for driver-assistance in-vehicle technologies (Eby et al.,


2018). Regarding anthropomorphic driving assistance system, a recent study by Li et al. (2025),


proved that, systems with higher anthropomorphic features significantly improved user trust in


elderly AI navigation users (Li et al., 2025).


Outside the AV domain, older people have higher satisfaction with companion robots with


higher levels of anthropomorphism, and anthropomorphism has a significant positive effect on


their satisfaction (Liang et al., 2025). Sinnema et al. (2019) evaluated short-term interactions


with a humanoid social robot among two age groups - elderly participants and students. While


both groups reported a generally positive attitude toward the robot, elderly participants rated


the robot as significantly more useful than the younger group. This difference was attributed to


varying needs and expectations, suggesting that older adults may derive greater value from


anthropomorphic systems (Sinnema & Alimardani, 2019). These findings align with our meta

analysis, which also indicated stronger positive responses to anthropomorphic interfaces


among older users. However, it is important to note that Sinnema et al.'s study did not assess


trust, and the context involved social interaction rather than AV. Thus, while supportive, these


results reflect a different dependent variable and application domain. In the study by Tewari


and Lindgren, the concept of anthropomorphism is not the central focus but is subtly embedded


throughout the discussion of socially intelligent robots (Tewari & Lindgren, 2022). While the


term "anthropomorphism" is mentioned briefly in reference to robots that evoke social


responses, most of the participants' feedback reflects implicit anthropomorphic interpretations


such as referring to the robot as "he", comparing it to a friend or family member, and expecting


it to recognize and respond to human emotions. These expectations point to an underlying


attribution of human-like traits, particularly among older adults, who valued empathy,


politeness, and social appropriateness more than younger users. These findings align with our


meta-analysis, which showed that older individuals tend to respond more positively to


anthropomorphic systems.


Conversely, Letheren (2016) found that younger, single, more creative, and conscientious


individuals are more receptive to anthropomorphic messages, suggesting that anthropomorphic


tendency is shaped by personal traits such as age, personality, and experiential thinking


(Letheren et al., 2016). This is in contrast with our meta-analysis that showed older adults


responding more positively to anthropomorphic interfaces in AV contexts. A likely reason for


this difference is the variation in context and dependent variables: Letheren's study focused on


general anthropomorphic tendency, while our research examined trust within a safety-critical


domain. Also, in contrast to our meta-analysis, which suggested that older adults may benefit


more from anthropomorphic interfaces in AVs, Pak et al. found that younger adults showed


significantly higher trust in anthropomorphic aids than in non-anthropomorphic ones, whereas


older adults' trust remained unaffected by anthropomorphic design (Pak et al., 2012).


# No significant gender differences were observed in the relationship between


anthropomorphism and trust in AVs.


When considering the role of gender in the use of anthropomorphic interfaces within AVs, it is


important to recognize that - similar to age- gender independently influences both trust in the


vehicle (Modlinski et al., 2022) and perceived anthropomorphism (Crowell et al., 2019).


Although it is commonly believed that anthropomorphizing technology is generally more


enjoyable or appealing to women, some studies have shown that men may actually process


anthropomorphic information with greater sensitivity than women (Pelau et al., 2022). Some


studies, after controlling for participants' age, have reported that the tendency to


anthropomorphism is independent of gender, suggesting that there is no significant difference


between men and women in their perception of anthropomorphism (Letheren et al., 2016).


However, it is important to note that the context of interaction with an anthropomorphic object


or interface plays a crucial role in shaping user perceptions. To more accurately interpret and


generalize the findings of this study, attention should be directed toward contexts that closely


resemble driving scenarios such as interaction during typical-speed driving, within the confined


space of a vehicle cabin, or in a driving simulator replicating in-vehicle conditions. A recent


study (Lee & Cho, 2024) examining the interplay between gender and anthropomorphic


tendency in the context of AVs revealed that user perceptions vary significantly based on this


interaction. Specifically, men with a high propensity to anthropomorphism reported more


positive attitudes and higher competence evaluations of AVs, whereas women with similar


tendencies exhibited more negative perceptions and rated the vehicles as less competent. These


findings underscore the importance of considering the combined effect of gender and


anthropomorphic tendency in the design and evaluation of in-vehicle interfaces.


# 4. Limitations, practical implications and future directions

The findings of this meta-analysis offer several actionable insights for stakeholders in AVs


development. For researchers, the results highlight the need to move beyond the assumption


that anthropomorphic design inherently increases trust; future studies should examine the


conditions under which such designs are effective, with particular attention to modality, user


demographics, and driving context. For interface designers, investing in auditory


anthropomorphic cues may provide modest trust benefits, especially for older users, whereas


relying solely on visual cues may not yield the same effect. For manufacturers, these insights


suggest that incorporating anthropomorphic elements should be targeted rather than universal


tailored to user groups, operational environments, and usage scenarios.


Although the present meta-analysis aimed to control for methodological limitations as much


as possible, certain constraints remained. For instance, due to the limited assessment of trust in


one of the included studies, focusing solely on behavioral trust without reporting subjective


trust this study was excluded despite initial eligibility (Hester et al., 2017). It is therefore


recommended that future meta-analyses incorporate both behavioral and subjective measures


of trust to provide a more comprehensive evaluation.

# 5. Conclusion


By aggregating findings from 66 studies, this meta-analysis provides a nuanced picture of how


anthropomorphic interfaces can shape trust in AVs. The overall pattern suggests that adding


human-like elements to interfaces does not automatically translate into greater trust, and


differences in the depth of anthropomorphism was not significant regarding trust. The form in


which anthropomorphic cues are delivered matters: Voice-based designs demonstrated modest


potential, whereas purely visual cues did not yield significant effects. Individual and situational


factors further shape these outcomes. Older participants tend to benefit more from


anthropomorphic features, yet trust levels do not differ notably between men and women in


related to their response to anthropomorphism interventions. In response to anthropomorphic


interfaces, trust in simulated AVs in simulators were stronger than real-world trials, and the


driver's engagement in secondary activities can diminish the effect of anthropomorphic


interventions on trust. The intended user group also matters and drivers respond more


positively to in-vehicle anthropomorphic cues than pedestrians to external HMIs.


# Conflict of interest: None


Funding: This research did not receive any specific grant from funding agencies in the public,


commercial, or not-for-profit sectors.


Declaration of generative AI and AI-assisted technologies : In the final preparation of this


manuscript, Chat GPT-5 is used to check the grammar and increase the readability of the


content. After that, all the content is re-checked by the corresponding author to ensure about its


intended meaning.


# References

Agrawal, S., Schuster, A. M., Britt, N., Mack, E. A., Tidwell, M. L., & Cotten, S. R. (2023).

Building on the past to help prepare the workforce for the future with automated
vehicles: A systematic review of automated passenger vehicle deployment timelines.
Technology in Society, 72, 102186.
https://doi.org/https://doi.org/10.1016/j.techsoc.2022.102186
Aleva, T. K., Tabone, W., Dodou, D., & de Winter, J. C. F. (2024). Augmented reality for

supporting the interaction between pedestrians and automated vehicles: an
experimental outdoor study [Original Research]. Frontiers in Robotics and AI, Volume
11 - 2024 . https://doi.org/10.3389/frobt.2024.1324060
Alireza Mortezapour, G. V. (2025). Human-centered AI with focus on Human-robot interaction

(Book chapter). In W. Xu (Ed.), Human-centered AI . Springer.
https://arxiv.org/abs/2507.04095
Alluhaybi, A., Wilson, A., Usher, K., & Durkin, J. (2023). Impact of nurse manager leadership

styles on work engagement: a systematic literature review. Journal of Nursing
Management, 2023 (1), 5090276.
Andrade, C. (2020). Mean difference, standardized mean difference (SMD), and their use in

meta-analysis: as simple as it gets. The Journal of clinical psychiatry, 81 (5), 11349.
Andrighetto, L., Sacino, A., Cocchella, F., Rea, F., & Sciutti, A. (2025). Cognitive Processing

of Humanoid Robot Faces: Empirical Evidence and Factors Influencing
Anthropomorphism. International Journal of Social Robotics, 17 (1), 117-131.
https://doi.org/10.1007/s12369-024-01199-x
Antrobus, V., Large, D. R., & Burnett, G. E. (2018). Trust me-I'm AutoCAB': Using natural

language interfaces to improve the trust and acceptance of level 4/5 autonomous
vehicles.
Appel, M., Izydorczyk, D., Weber, S., Mara, M., & Lischetzke, T. (2020). The uncanny of mind

in a machine: Humanoid robots as tools, agents, and experiencers. Computers in Human
Behavior, 102, 274-286.
Aremyr, E., Jonsson, M., & Stromberg, H. (2019). Anthropomorphism: An Investigation of Its

Effect on Trust in Human-Machine Interfaces for Highly Automated Vehicles. In S.
Bagnara, R. Tartaglia, S. Albolino, T. Alexander, & Y. Fujita, Proceedings of the 20th
Congress of the International Ergonomics Association (IEA 2018) Cham.
Atchley, A., Barr, H. M., O'Hear, E. H., Gray, C. E., Chesser, A. F., Jones, N., & Tenhundfeld,

N. L. (2022). Does My Driver Share My Moral View? Effects of Humanlikeness and
Morality in an Adapted Trolley Problem. Proceedings of the Human Factors and
Ergonomics Society Annual Meeting, 66 (1), 187-191.
https://doi.org/10.1177/1071181322661111
Babel, F., Hock, P., Thellman, S., & Ziemke, T. (2023). Cars As Social Agents (CarSA): A

Perspective Shift in Human-Vehicle Interaction. Proceedings of the 11th International
Conference on Human-Agent Interaction,
Bai, S., Yu, D., Han, C., Yang, M., Gupta, B. B., Arya, V., Panigrahi, P. K., Tang, R., He, H., &

Zhao, J. (2024). Warmth trumps competence? Uncovering the influence of multimodal
AI anthropomorphic interaction experience on intelligent service evaluation: Insights
from the high-evoked automated social presence. Technological Forecasting and Social
Change, 204, 123395.
Balduzzi, S., Rucker, G., & Schwarzer, G. (2019). How to perform a meta-analysis with R: a

practical tutorial. BMJ Ment Health, 22 (4), 153-160.


Bazilinskyy, P., Dodou, D., & De Winter, J. (2019). Survey on eHMI concepts: The effect of

text, color, and perspective. Transportation Research Part F: Traffic Psychology and
Behaviour, 67, 175-194.
Bevan, J. L., Ang, P.-C., & Fearns, J. B. (2014). Being unfriended on Facebook: An application

of expectancy violation theory. Computers in Human Behavior, 33, 171-178.
Blut, M., Wang, C., Wunderlich, N. V., & Brock, C. (2021). Understanding anthropomorphism

in service provision: a meta-analysis of physical robots, chatbots, and other AI. Journal
of the academy of marketing science, 49 (4), 632-658.
Bonneviot, F., Coeugnet, S., & Brangier, E. (2023). How to improve pedestrians' trust in

automated vehicles: new road infrastructure, external human-machine interface with
anthropomorphism, or conventional road signaling? [Original Research]. Frontiers in
Psychology, Volume 14 - 2023 . https://doi.org/10.3389/fpsyg.2023.1129341
Borenstein, M., Hedges, L. V., Higgins, J. P., & Rothstein, H. R. (2021). Introduction to meta-

analysis . John wiley & sons.
Brill, S., Payre, W., Debnath, A., Horan, B., & Birrell, S. (2023). External human-machine

interfaces for automated vehicles in shared spaces: A review of the human-computer
interaction literature. Sensors, 23 (9), 4454.
Bruck, L., Haycock, B., & Emadi, A. (2021). A Review of Driving Simulation Technology and

Applications. IEEE Open Journal of Vehicular Technology, 2, 1-16.
https://doi.org/10.1109/OJVT.2020.3036582
Burgoon, J. K., Bonito, J. A., Bengtsson, B., Cederberg, C., Lundeberg, M., & Allspach, L.

(2000). Interactivity in human-computer interaction: a study of credibility,
understanding, and influence. Computers in Human Behavior, 16 (6), 553-574.
https://doi.org/https://doi.org/10.1016/S0747-5632(00)00029-700029-7)
Burleigh, T. J., Schoenherr, J. R., & Lacroix, G. L. (2013). Does the uncanny valley exist? An

empirical test of the relationship between eeriness and the human likeness of digitally
created faces. Computers in Human Behavior, 29 (3), 759-771.
Cai, Y., Anjani, S., Withey, D., Vledder, G., Song, Y., & Vink, P. (2024). Changes in Non
driving-Related Activities from conditional to full automation and their implications for
interior design: A systematic review and meta-analysis. Applied Sciences, 14 (20), 9442.
Caird, J. K., & Horrey, W. J. (2011). Twelve practical and useful questions about driving

simulation. Handbook of driving simulation for engineering, medicine, and psychology,
2 .
Carlier, M. (Apr 2, 2025). Autonomous vehicles worldwide - statistics & facts . Retrieved 26

August from https://www.statista.com/topics/3573/autonomous-vehicletechnology/#topicOverview
Carter, O. B., Loft, S., & Visser, T. A. (2024). Meaningful communication but not superficial

anthropomorphism facilitates human-automation trust calibration: The HumanAutomation Trust Expectation Model (HATEM). Human factors, 66 (11), 2485-2502.
Chandler, J., Cumpston, M., Li, T., Page, M. J., & Welch, V. (2019). Cochrane handbook for

systematic reviews of interventions. Hoboken: Wiley, 4 .
Cheng, P., Meng, F., Yao, J., & Wang, Y. (2022). Driving With Agents: Investigating the

Influences of Anthropomorphism Level and Physicality of Agents on Drivers'
Perceived Control, Trust, and Driving Performance [Original Research]. Frontiers in
Psychology, Volume 13 - 2022 . https://doi.org/10.3389/fpsyg.2022.883417
Choi, S., Kim, S., Kwak, M., Park, J., Park, S., Kwak, D., Lee, H. W., & Lee, S. (2022). Would

You Trust Driverless Service? Formation of Pedestrian's Trust and Attitude Using NonVerbal Social Cues. Sensors, 22 (7), 2809. https://www.mdpi.com/14248220/22/7/2809


Chung, H., Jun, S., Kim, S., & Lee, Y. (2024). Child Pedestrians' Perception of External Car

Display: Effects of Communication Style and Visualization Type on Trust and
Perceived Safety. Available at SSRN 4471906 .
Cohen, J. (2013). Statistical power analysis for the behavioral sciences . routledge.
Colley, M., Britten, J., Demharter, S., Hisir, T., & Rukzio, E. (2022). Feedback Strategies for

Crowded Intersections in Automated Traffic - A Desirable Future? Proceedings of the
14th International Conference on Automotive User Interfaces and Interactive Vehicular
Applications, Seoul, Republic of Korea. https://doi.org/10.1145/3543174.3545255
Crowell, C. R., Deska, J. C., Villano, M., Zenk, J., & Roddy Jr, J. T. (2019). Anthropomorphism

of Robots: Study of Appearance and Agency [Original Paper]. JMIR Hum Factors, 6 (2),
e12629. https://doi.org/10.2196/12629
Cumming, G. (2013). Understanding the new statistics: Effect sizes, confidence intervals, and

meta-analysis . Routledge.
Damholdt, M. F., Quick, O. S., Seibt, J., Vestergaard, C., & Hansen, M. (2023). A Scoping

Review of HRI Research on 'Anthropomorphism': Contributions to the Method Debate
in HRI. International Journal of Social Robotics, 15 (7), 1203-1226.
https://doi.org/10.1007/s12369-023-01014-z
Deng, D., Zhang, X., & Guo, S. (2024). Do People Trust Female more than Male as a Voice

Assistant?
Di Natale, A. F., Simonetti, M. E., La Rocca, S., & Bricolo, E. (2023). Uncanny valley effect:

A qualitative synthesis of empirical research to assess the suitability of using virtual
faces in psychological research. Computers in Human Behavior Reports, 10, 100288.
https://doi.org/https://doi.org/10.1016/j.chbr.2023.100288
Ding, A., Lee, R. H., Legendre, T. S., & Madera, J. (2022). Anthropomorphism in hospitality

and tourism: A systematic review and agenda for future research. Journal of Hospitality
and Tourism Management, 52, 404-415.
Dirsehan, T., & Can, C. (2020). Examination of trust and sustainability concerns in autonomous

vehicle adoption. Technology in Society, 63, 101361.
https://doi.org/https://doi.org/10.1016/j.techsoc.2020.101361
Dong, J., Lawson, E., Olsen, J., & Jeon, M. (2020). Female voice agents in fully autonomous

vehicles are not only more likeable and comfortable, but also more competent.
Proceedings of the Human Factors and Ergonomics Society Annual Meeting,
Du, N., Haspiel, J., Zhang, Q., Tilbury, D., Pradhan, A. K., Yang, X. J., & Robert, L. P. (2019).

Look who's talking now: Implications of AV's explanations on driver's trust, AV
preference, anxiety and mental workload. Transportation research part C: emerging
technologies, 104 , 428-442. https://doi.org/https://doi.org/10.1016/j.trc.2019.05.025
Dubois-Sage, M., Jacquet, B., Jamet, F., & Baratgin, J. (2023). We Do Not Anthropomorphize

a Robot Based Only on Its Cover: Context Matters too! Applied Sciences, 13 (15), 8743.
https://www.mdpi.com/2076-3417/13/15/8743
Eby, D. W., Molnar, L. J., Zakrajsek, J. S., Ryan, L. H., Zanier, N., Louis, R. M. S., Stanciu, S.

C., LeBlanc, D., Kostyniuk, L. P., Smith, J., Yung, R., Nyquist, L., DiGuiseppi, C., Li,
G., Mielenz, T. J., & Strogatz, D. (2018). Prevalence, attitudes, and knowledge of invehicle technologies and vehicle adaptations among older drivers. Accident Analysis &
Prevention, 113 , 54-62. https://doi.org/https://doi.org/10.1016/j.aap.2018.01.022
Egger, M., Smith, G. D., Schneider, M., & Minder, C. (1997). Bias in meta-analysis detected

by a simple, graphical test. bmj, 315 (7109), 629-634.
Eisma, Y. B., Reiff, A., Kooijman, L., Dodou, D., & de Winter, J. C. (2021). External human
machine interfaces: Effects of message perspective. Transportation Research Part F:
Traffic Psychology and Behaviour, 78, 30-41.


Eisma, Y. B., van Gent, L., & de Winter, J. (2023). Should an external human-machine interface

flash or just show text? A study with a gaze-contingent setup. Transportation Research
Part F: Traffic Psychology and Behaviour, 97, 140-154.
Erol, D., & Sarkar, N. (2007, 13-15 June 2007). Smooth Human-Robot Interaction in Robot
Assisted Rehabilitation. 2007 IEEE 10th International Conference on Rehabilitation
Robotics,
Ewald, H., Klerings, I., Wagner, G., Heise, T. L., Stratil, J. M., Lhachimi, S. K., Hemkens, L.

G., Gartlehner, G., Armijo-Olivo, S., & Nussbaumer-Streit, B. (2022). Searching two
or more databases decreased the risk of missing relevant studies: a metaresearch study.
Journal of clinical epidemiology, 149, 154-164.
Faas, S. M., Mathis, L.-A., & Baumann, M. (2020). External HMI for self-driving vehicles:

Which information shall be displayed? Transportation Research Part F: Traffic
Psychology and Behaviour, 68, 171-186.
https://doi.org/https://doi.org/10.1016/j.trf.2019.12.009
Fasola, J., & Mataric, M. J. (2012). Using socially assistive human-robot interaction to

motivate physical exercise for older adults. Proceedings of the IEEE, 100 (8), 25122526.
Flohr, L. A., Kalinke, S., Kruger, A., & Wallach, D. P. (2021). Chat or Tap? - Comparing

Chatbots with 'Classic' Graphical User Interfaces for Mobile Interaction with
Autonomous Mobility-on-Demand Systems Proceedings of the 23rd International
Conference on Mobile Human-Computer Interaction, Toulouse & Virtual, France.
https://doi.org/10.1145/3447526.3472036
Forster, Y., Naujoks, F., & Neukum, A. (2017, 11-14 June 2017). Increasing anthropomorphism

and trust in automated driving functions by adding speech output. 2017 IEEE Intelligent
Vehicles Symposium (IV),
Frison, A.-K., Wintersberger, P., Oberhofer, A., & Riener, A. (2019). ATHENA: supporting UX

of conditionally automated driving with natural language reliability displays
Proceedings of the 11th International Conference on Automotive User Interfaces and
Interactive Vehicular Applications: Adjunct Proceedings, Utrecht, Netherlands.
https://doi.org/10.1145/3349263.3351312
Fuest, T., Schmidt, E., & Bengler, K. (2020). Comparison of Methods to Evaluate the Influence

of an Automated Vehicle's Driving Behavior on Pedestrians: Wizard of Oz, Virtual
Reality, and Video. Information, 11 (6), 291. https://www.mdpi.com/20782489/11/6/291
Gambino, A., Fox, J., & Ratan, R. A. (2020). Building a stronger CASA: Extending the

computers are social actors paradigm. Human-Machine Communication, 1, 71-85.
Glikson, E., & Woolley, A. W. (2020). Human trust in artificial intelligence: Review of

empirical research. Academy of management annals, 14 (2), 627-660.
Gong, T. (2025). The dark side of robot anthropomorphism: cognitive load, stress, and

dysfunctional customer behavior. The Service Industries Journal, 1-29.
https://doi.org/10.1080/02642069.2025.2500320
Guo, L., Burke, M. G., & Griggs, W. M. (2025). Exploring human-SAV interaction using large

language models: The impact of psychological ownership and anthropomorphism on
user experience. arXiv preprint arXiv:2504.16548 .
Gutuleac, R., Baima, G., Rizzo, C., & Bresciani, S. (2024). Will virtual influencers overcome

the uncanny valley? The moderating role of social cues. Psychology & Marketing,
41 (7), 1419-1431.
Haziraj, E. (2025). Influence of Anthropomorphism in AI Voice Assistants on User Trust

Technische Universitat Wien].


He, F., & Burns, C. M. (2022). A Battle of Voices: A Study of the Relationship between Driving

Experience, Driving Style, and In-Vehicle Voice Assistant Character Proceedings of the
14th International Conference on Automotive User Interfaces and Interactive Vehicular
Applications, Seoul, Republic of Korea. https://doi.org/10.1145/3543174.3546845
Hester, M., Lee, K., & Dyre, B. P. (2017). "Driver take over": A preliminary exploration of

driver trust and performance in autonomous vehicles. Proceedings of the Human
Factors and Ergonomics Society Annual Meeting,
Ho, C.-C., & MacDorman, K. F. (2010). Revisiting the uncanny valley theory: Developing and

validating an alternative to the Godspeed indices. Computers in Human Behavior,
26 (6), 1508-1518.
Hock, P., Kraus, J., Babel, F., Walch, M., Rukzio, E., & Baumann, M. (2018). How to Design

Valid Simulator Studies for Investigating User Experience in Automated Driving:
Review and Hands-On Considerations Proceedings of the 10th International
Conference on Automotive User Interfaces and Interactive Vehicular Applications,
Toronto, ON, Canada. https://doi.org/10.1145/3239060.3239066
Hock, P., Kraus, J., Walch, M., Lang, N., & Baumann, M. (2016). Elaborating Feedback

Strategies for Maintaining Automation in Highly Automated Driving Proceedings of the
8th International Conference on Automotive User Interfaces and Interactive Vehicular
Applications, Ann Arbor, MI, USA. https://doi.org/10.1145/3003715.3005414
Hoff, K. A., & Bashir, M. (2015). Trust in automation: Integrating empirical evidence on factors

that influence trust. Human factors, 57 (3), 407-434.
Hong, J., Kim, S., & Lee, S. (2025). Enhancing passenger-vehicle interaction through

multimodal explanation for unexpected behaviors of fully autonomous driving in nondriving-related tasks. Transportation Research Part F: Traffic Psychology and
Behaviour, 109 , 1350-1364. https://doi.org/https://doi.org/10.1016/j.trf.2025.01.045
Hu, C., Huang, S., Zhou, Y., Ge, S., Yi, B., Zhang, X., & Wu, X. (2024). Dynamic and

quantitative trust modeling and real-time estimation in human-machine co-driving
process. Transportation Research Part F: Traffic Psychology and Behaviour, 106, 306327. https://doi.org/https://doi.org/10.1016/j.trf.2024.08.001
Hu, X., Li, S., Huang, T., Tang, B., Huai, R., & Chen, L. (2024). How Simulation Helps

Autonomous Driving: A Survey of Sim2real, Digital Twins, and Parallel Intelligence.
IEEE Transactions on Intelligent Vehicles, 9 (1), 593-612.
https://doi.org/10.1109/TIV.2023.3312777
Igoshina, E., Russo, F. A., Shewaga, R., Haycock, B., & Keshavarz, B. (2022). The relationship

between simulator sickness and driving performance in a high-fidelity simulator.
Transportation Research Part F: Traffic Psychology and Behaviour, 89, 478-487.
J.D.POWER. ( 2023). Stakes are High and Consumer Confidence is Fragile for Automated

Vehicles, J.D. Power Finds . Retrieved 09 July from
https://www.jdpower.com/business/press-releases/2023-us-mobility-confidenceindex-mci-study
Ji, W., Liu, R., & Lee, S. (2019). Do Drivers Prefer Female Voice for Guidance? An Interaction

Design About Information Type and Speaker Gender for Autonomous Driving Car. In
H. Kromker, HCI in Mobility, Transport, and Automotive Systems Cham.
Kaufman, R., Costa, J., & Kimani, E. (2024). Effects of multimodal explanations for

autonomous driving on driving performance, cognitive load, expertise, confidence, and
trust. Scientific Reports, 14 (1), 13061. https://doi.org/10.1038/s41598-024-62052-9
Keele, S. (2007). Guidelines for performing systematic literature reviews in software

engineering .


Kettle, L., McCarty, M. M., Simpson, K. L., & Lee, Y.-C. (2023). Impact of Monitoring

Requests on Publics' Assignment of Blame and Praise towards ADS Level 3 Vehicles.
Human Behavior and Emerging Technologies, 2023 (1), 9009791.
Kim, S., van Egmond, R., & Happee, R. (2024). How manoeuvre information via auditory

(spatial and beep) and visual UI can enhance trust and acceptance in automated driving.
Transportation Research Part F: Traffic Psychology and Behaviour, 100, 22-36.
https://doi.org/https://doi.org/10.1016/j.trf.2023.11.007
Kim, T., Song, Y., Kim, D., & Song, H. (2025). Too Much Is as Bad as Too Little: The Impact

of Implementing Multiple Social Interaction Features on Trust and Acceptance of
Automated Vehicle Agents. International Journal of Human-Computer Interaction, 116.
Kim, Y. M., Kwon, J., & Park, D. (2024). How Does Talking with a Human-like Machine in a

Self-Driving Car Affect your Experience? A Mixed-Method Approach. Applied
Sciences, 14 (19), 8999. https://www.mdpi.com/2076-3417/14/19/8999
Knutzen, K., Weidner, F., & Broll, W. (2019). Talk to me! exploring stereoscopic 3D

anthropomorphic virtual assistants in automated vehicles Proceedings of the 11th
International Conference on Automotive User Interfaces and Interactive Vehicular
Applications: Adjunct Proceedings, Utrecht, Netherlands.
https://doi.org/10.1145/3349263.3351503
Ko, S., Sanghavi, H., Zhang, Y., & Jeon, M. (2022). Modeling the effects of perceived

intuitiveness and urgency of various auditory warnings on driver takeover performance
in automated vehicles. Transportation Research Part F: Traffic Psychology and
Behaviour, 90 , 70-83. https://doi.org/https://doi.org/10.1016/j.trf.2022.08.008
Kohn, S. C., Quinn, D., Pak, R., de Visser, E. J., & Shaw, T. H. (2018). Trust Repair Strategies

with Self-Driving Vehicles: An Exploratory Study. Proceedings of the Human Factors
and Ergonomics Society Annual Meeting, 62 (1), 1108-1112.
https://doi.org/10.1177/1541931218621254
Korber, M., Baseler, E., & Bengler, K. (2018). Introduction matters: Manipulating trust in

automation and reliance in automated driving. Applied Ergonomics, 66, 18-31.
https://doi.org/https://doi.org/10.1016/j.apergo.2017.07.006
Korber, M., Prasch, L., & Bengler, K. (2018). Why Do I Have to Drive Now? Post Hoc

Explanations of Takeover Requests. Human factors, 60 (3), 305-323.
https://doi.org/10.1177/0018720817747730
Kraus, J., Scholz, D., & Baumann, M. (2021). What's driving me? Exploration and validation

of a hierarchical personality model for trust in automated driving. Human factors, 63 (6),
1076-1105.
Kraus, J. M., Nothdurft, F., Hock, P., Scholz, D., Minker, W., & Baumann, M. (2016). Human

After All: Effects of Mere Presence and Social Interaction of a Humanoid Robot as a
Co-Driver in Automated Driving Adjunct Proceedings of the 8th International
Conference on Automotive User Interfaces and Interactive Vehicular Applications, Ann
Arbor, MI, USA. https://doi.org/10.1145/3004323.3004338
Kuhne, R., Peter, J., de Jong, C., & Barco, A. (2024). How Does Children's Anthropomorphism

of a Social Robot Develop Over Time? A Six-Wave Panel Study. International Journal
of Social Robotics, 16 (7), 1665-1679. https://doi.org/10.1007/s12369-024-01155-9
Kuhnlenz, K., & Kuhnlenz, B. (2023). Study on the impact of situational explanations and prior

information given to users on trust and perceived intelligence in autonomous driving in
a video-based 2x2 design. 2023 32nd IEEE International Conference on Robot and
Human Interactive Communication (RO-MAN),
Kunze, A., Summerskill, S. J., Marshall, R., & Filtness, A. J. (2019). Automation transparency:

implications of uncertainty communication for human-automation interaction and


interfaces. Ergonomics, 62 (3), 345-360.
https://doi.org/10.1080/00140139.2018.1547842
Lajunen, T., & Sullman, M. J. M. (2021). Attitudes Toward Four Levels of Self-Driving

Technology Among Elderly Drivers [Original Research]. Frontiers in Psychology,
Volume 12 - 2021 . https://doi.org/10.3389/fpsyg.2021.682973
Large, D. R., Clark, L., Burnett, G., Harrington, K., Luton, J., Thomas, P., & Bennett, P. (2019).

"It's small talk, jim, but not as we know it.": engendering trust through human-agent
conversation in an autonomous, self-driving car Proceedings of the 1st International
Conference on Conversational User Interfaces, Dublin, Ireland.
https://doi.org/10.1145/3342775.3342789
Large, D. R., Harvey, C., Hallewell, M., Li, X., & Burnett, G. (2025). On face value: a ghost

driver field study investigating interactions between pedestrians and a driverless vehicle
with anthropomorphic displays. Ergonomics, 1-19.
Lawson-Guidigbe, C., Amokrane-Ferka, K., Louveton, N., Leblanc, B., Rousseaux, V., &

Andre, J.-M. (2023a). Anthropomorphic Design and Self-Reported Behavioral Trust:
The Case of a Virtual Assistant in a Highly Automated Car. Machines, 11 (12).
Lawson-Guidigbe, C., Amokrane-Ferka, K., Louveton, N., Leblanc, B., Rousseaux, V., &

Andre, J.-M. (2023b). Anthropomorphic Design and Self-Reported Behavioral Trust:
The Case of a Virtual Assistant in a Highly Automated Car. Machines, 11 (12), 1087.
https://www.mdpi.com/2075-1702/11/12/1087
Lawson-Guidigbe, C., Louveton, N., Amokrane-Ferka, K., Le Blanc, B., & Andre, J.-M.

(2023). Embodying a Virtual Agent in a Self-Driving Car: A Survey-Based Study on
User Perceptions of Trust, Likeability, and Anthropomorphism. International Journal
of Mobile Human Computer Interaction (IJMHCI), 15 (1), 1-18.
https://doi.org/10.4018/IJMHCI.330542
Lee, J.-G., Kim, K. J., Lee, S., & Shin, D.-H. (2015). Can Autonomous Vehicles Be Safe and

Trustworthy? Effects of Appearance and Autonomy of Unmanned Driving Systems.
International Journal of Human-Computer Interaction, 31 (10), 682-691.
https://doi.org/10.1080/10447318.2015.1070547
Lee, J.-g., & Lee, K. M. (2022). Polite speech strategies and their impact on drivers' trust in

autonomous vehicles. Computers in Human Behavior, 127, 107015.
Lee, S. A., & Cho, S. (2024). Interplay of Gender and Anthropomorphism in Shaping

Perceptions of Autonomous Vehicles. Adjunct Proceedings of the 16th International
Conference on Automotive User Interfaces and Interactive Vehicular Applications,
Letheren, K., Kuhn, K.-A. L., Lings, I., & Pope, N. K. L. (2016). Individual difference factors

related to anthropomorphic tendency. European Journal of Marketing, 50 (5/6), 9731002.
Li, H., Hou, Y., Pan, W., Chen, H., Gai, J., & Bu, L. (2025). Exploring the Impact of

Anthropomorphism in AI Navigation Systems on Elderly Users' Efficiency, Trust,
Satisfaction, and Cognitive Load. International Journal of Human-Computer
Interaction , 1-20. https://doi.org/10.1080/10447318.2025.2524499
Li, Q., Luximon, Y., & Zhang, J. (2023). The influence of anthropomorphic cues on patients'

perceived anthropomorphism, social presence, trust building, and acceptance of health
care conversational agents: within-subject web-based experiment. Journal of medical
Internet research, 25, e44479.
Liang, C., Zhou, P., & Xie, Y. (2025). Is Anthropomorphism Better for Older People? Exploring

the Effects of Anthropomorphic Companion Robots on Satisfaction. International
Journal of Human-Computer Interaction, 1-15.
https://doi.org/10.1080/10447318.2025.2496429


Lin, S. (2024). Humanizing the algorithm: the effects of anthropomorphic framing and

narrative perspective on attitudes toward artificial intelligence in autonomous vehicles.
Liu, P., Chu, Y., Wang, G., & Xu, Z. (2024). To Err is Automation: Can Trust be Repaired by

the Automated Driving System After its Failure? IEEE Transactions on HumanMachine Systems .
Locken, A., Golling, C., & Riener, A. (2019). How Should Automated Vehicles Interact with

Pedestrians? A Comparative Analysis of Interaction Concepts in Virtual Reality
Proceedings of the 11th International Conference on Automotive User Interfaces and
Interactive Vehicular Applications, Utrecht, Netherlands.
https://doi.org/10.1145/3342197.3344544
Lohaus, L., Woide, M., Damm, N., Demiral, Z., Friedrich, H., Petakova, A., & Walker, F.

(2024). Automated or human: Which driver wins the race for the passengers' trust?
Examining passenger trust in human-driven and automated vehicles following a
dangerous situation. Computers in Human Behavior, 161, 108387.
https://doi.org/https://doi.org/10.1016/j.chb.2024.108387
Lu, B., Fan, W., & Zhou, M. (2016). Social presence, trust, and social commerce purchase

intention: An empirical research. Computers in Human Behavior, 56, 225-237.
Ma, J., Feng, X., Gong, Z., & Zhang, Q. (2020). Creating Appropriate Trust in Automated Valet

Parking System. Journal of Physics: Conference Series, 1549 (5), 052059.
https://doi.org/10.1088/1742-6596/1549/5/052059
Man, S. S., Huang, C., Ye, Q., Chang, F., & Chan, A. H. S. (2025). Pedestrians' Interaction with

eHMI-equipped Autonomous Vehicles: A Bibliometric Analysis and Systematic
Review. Accident Analysis & Prevention, 209, 107826.
https://doi.org/https://doi.org/10.1016/j.aap.2024.107826
Manchon, J., Bueno, M., & Navarro, J. (2023). Calibration of trust in automated driving: A

matter of initial level of trust and automated driving style? Human factors, 65 (8), 16131629.
Manchon, J. B., Bueno, M., & Navarro, J. (2022). How the initial level of trust in automated

driving impacts drivers' behaviour and early trust construction. Transportation
Research Part F: Traffic Psychology and Behaviour, 86, 281-295.
https://doi.org/https://doi.org/10.1016/j.trf.2022.02.006
Martin-delosReyes, L. M., Jimenez-Mejias, E., Martinez-Ruiz, V., Moreno-Roldan, E.,

Molina-Soberanes, D., & Lardelli-Claret, P. (2019). Efficacy of training with driving
simulators in improving safety in young novice or learner drivers: A systematic review.
Transportation Research Part F: Traffic Psychology and Behaviour, 62, 58-65.
https://doi.org/https://doi.org/10.1016/j.trf.2018.12.006
Mathew, M. J. (2024). Literature search in systematic reviews: How much is good enough?

Clinical Epidemiology and Global Health, 25, 101485.
Meinhardt, L.-M., Ruck, M., Zahnle, J., Elhaidary, M., Colley, M., Rietzler, M., & Rukzio, E.

(2024). Hey, What's Going On? Conveying Traffic Information to People with Visual
Impairments in Highly Automated Vehicles: Introducing OnBoard. Proceedings of the
ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies, 8 (2), 1-24.
Messer, U., Pape, D., Lukas, N., & Peters, L. (2024). From Cute to Incompetent: The Impact

of Anthropomorphic Design on Responsibility Attribution in Autonomous Driving.
Mitchell, J. J., & Jeon, M. (2025). Exploring emotional connections: A systematic literature

review of attachment in human-robot interaction. International Journal of HumanComputer Interaction, 1-22.
Modlinski, A., Gwiazdzinski, E., & Karpinska-Krakowiak, M. (2022). The effects of religiosity

and gender on attitudes and trust toward autonomous vehicles. The Journal of High


Technology Management Research, 33 (1), 100426.
https://doi.org/https://doi.org/10.1016/j.hitech.2022.100426
Moher, D., Liberati, A., Tetzlaff, J., Altman, D. G., & Group, P. (2010). Preferred reporting

items for systematic reviews and meta-analyses: the PRISMA statement. International
journal of surgery, 8 (5), 336-341.
Moola, S., Munn, Z., Tufanaru, C., Aromataris, E., Sears, K., Sfetcu, R., Currie, M., Qureshi,

R., Mattis, P., & Lisy, K. (2017). Systematic reviews of etiology and risk. Joanna Briggs
Institute reviewer's manual, 5, 217-269.
Mosaferchi, S., Mortezapour, A., Liebherr, M., Villecco, F., & Naddeo, A. (2025). AV-TLX for

Measuring (Mental) Workload While Driving Avs: Born from NASA-TLX but
Developed for the Era of Automated Vehicles. In H. Kromker, HCI in Mobility,
Transport, and Automotive Systems Cham.
Mosaferchi, S., & Naddeo, A. (2025). Special users with special needs in autonomous vehicles:

A systematic review. WORK, 0 (0), 10519815241308769.
https://doi.org/10.1177/10519815241308769
Moye, B. (2025). AAA: Fear in Self-Driving Vehicles Persists . Retrieved 09 July from

https://newsroom.aaa.com/2025/02/aaa-fear-in-self-driving-vehiclespersists/?utm_source=chatgpt.com
Nadri, C., Ko, S., Diggs, C., Winters, M., Vattakkandy, S., & Jeon, M. (2024). Sonification Use

Cases in Highly Automated Vehicles: Designing and Evaluating Use Cases in Level 4
Automation. International Journal of Human-Computer Interaction, 40 (12), 31223132. https://doi.org/10.1080/10447318.2023.2180236
Nafees, S., & Sujood. (2024). The power of emotions: combining emotional attachment theory

(EAT) and the technology acceptance model (TAM) to predict consumers' intention to
use interactive technologies (ITs) at tourism destinations. Tourism Recreation Research,
1-18.
Nason, K., & Wilbiks, J. (2025). Call Me Maybe: Effects of Notification Modality on Visual

Sustained Attention. Multisensory Research, 38 (1-3), 61-75.
Nass, C., Steuer, J., & Tauber, E. R. (1994). Computers are social actors. Proceedings of the

SIGCHI conference on Human factors in computing systems,
Niu, D., Terken, J., & Eggen, B. (2018). Anthropomorphizing information to enhance trust in

autonomous vehicles. Human Factors and Ergonomics in Manufacturing & Service
Industries, 28 (6), 352-359.
Norman-Lopez, A., Weitzel, M., Tamba, M., Duboz, L., Krause, J., & Ciuffo, B. (2026).

Economy-wide impacts from different speeds of deployment of automated vehicles on
European Union roads. Technology in Society, 84, 103066.
https://doi.org/https://doi.org/10.1016/j.techsoc.2025.103066
O'Hern, S., & St. Louis, R. (2023). Technology readiness and intentions to use conditionally

automated vehicles. Transportation Research Part F: Traffic Psychology and
Behaviour, 94 , 1-8. https://doi.org/https://doi.org/10.1016/j.trf.2023.02.001
Pak, R., Fink, N., Price, M., Bass, B., & Sturre, L. (2012). Decision support aids with

anthropomorphic characteristics influence trust and performance in younger and older
adults. Ergonomics, 55 (9), 1059-1072. https://doi.org/10.1080/00140139.2012.691554
Pak, R., McLaughlin, A. C., & Bass, B. (2014). A multi-level analysis of the effects of age and

gender stereotypes on trust in anthropomorphic technology by younger and older adults.
Ergonomics, 57 (9), 1277-1289.
Pan, H., Xu, K., Qin, Y., & Wang, Y. (2023). How does drivers' trust in vehicle automation

affect non-driving-related task engagement, vigilance, and initiative takeover
performance after experiencing system failure? Transportation Research Part F:


Traffic Psychology and Behaviour, 98, 73-90.
https://doi.org/https://doi.org/10.1016/j.trf.2023.09.001
Park, D., Lee, Y., & Kim, Y. M. (2023). Effects of Autonomous Driving Context and

Anthropomorphism of in-Vehicle Voice Agents on Intimacy, Trust, and Intention to
Use. International Journal of Human-Computer Interaction, 1-14.
Park, D., Lee, Y., & Kim, Y. M. (2024a). Effects of Autonomous Driving Context and

Anthropomorphism of in-Vehicle Voice Agents on Intimacy, Trust, and Intention to
Use. International Journal of Human-Computer Interaction, 40 (22), 7179-7192.
https://doi.org/10.1080/10447318.2023.2262271
Park, D., Lee, Y., & Kim, Y. M. (2024b). Effects of Autonomous Driving Context and

Anthropomorphism of in-Vehicle Voice Agents on Intimacy, Trust, and Intention to
Use. International Journal of Human-Computer Interaction, 1-14.
https://doi.org/10.1080/10447318.2023.2262271
Pauzie, A. (2008). A method to assess the driver mental workload: The driving activity load

index (DALI). IET Intelligent Transport Systems, 2 (4), 315-322.
Pavone, G., & Desveaud, K. (2025). Gendered AI in fully autonomous vehicles: the role of

social presence and competence in building trust. Journal of Consumer Marketing .
Pelau, C., Popa, L., Bojescu, I., & Niculescu, M. (2022). Are Men More Affected by AI

Anthropomorphism? Comparative Research on the Perception of AI Human-like
Characteristics Between Genders. Proceedings of the 8th BASIQ International
Conference on New Trends in Sustainable Business and Consumption, Graz, Austria,
Pelikan, H. R. M., & Jung, M. F. (2023). Designing Robot Sound-In-Interaction: The Case of

Autonomous Public Transport Shuttle Buses Proceedings of the 2023 ACM/IEEE
International Conference on Human-Robot Interaction, Stockholm, Sweden.
https://doi.org/10.1145/3568162.3576979
Penmetsa, P., Okafor, S., Adanu, E., Hudnall, M., Ramezani, S. B., Holiday, S., & Jones, S.

(2023). How is automated and self-driving vehicle technology presented in the news
media? Technology in Society, 74, 102290.
https://doi.org/https://doi.org/10.1016/j.techsoc.2023.102290
Prattico, F. G., Valente, L., & Lamberti, F. (2025). Crying Jaywalker! Notifying Take-Over
Requests and Critical Events in Operational Driving Domain of Autonomous Vehicles
via Multimodal Interfaces. Proceedings of the 30th International Conference on
Intelligent User Interfaces,
Premstaller, M., Kotsios, H., & Wintersberger, P. (2023). Embodied Conversational Agent

Teams for Trust Calibration in Automated Vehicles Adjunct Proceedings of the 15th
International Conference on Automotive User Interfaces and Interactive Vehicular
Applications, Ingolstadt, Germany. https://doi.org/10.1145/3581961.3609890
Ratajczyk, D. (2022). Shape of the Uncanny Valley and Emotional Attitudes Toward Robots

Assessed by an Analysis of YouTube Comments. International Journal of Social
Robotics, 14 (8), 1787-1803. https://doi.org/10.1007/s12369-022-00905-x
Reuter, M., Kirchhoff, B. M., Franke, T., Raduntz, T., & Peifer, C. (2025). To trust or not to

trust a human(-like) AI-A scoping review and conjoint analyses on factors influencing
anthropomorphism and trust. Zeitschrift fur Arbeitswissenschaft .
https://doi.org/10.1007/s41449-025-00481-6
Ribino, P. (2023). The role of politeness in human-machine interactions: a systematic literature

review and future perspectives. Artificial Intelligence Review, 56 (1), 445-482.
https://doi.org/10.1007/s10462-023-10540-1
Robertson, R. D., Woods-Fry, H., Vanlaar, W. G. M., & Mainegra Hing, M. (2019). Automated

vehicles and older drivers in Canada. Journal of Safety Research, 70, 193-199.
https://doi.org/https://doi.org/10.1016/j.jsr.2019.07.003


Roesler, E., Manzey, D., & Onnasch, L. (2021). A meta-analysis on the effectiveness of

anthropomorphism in human-robot interaction. Science Robotics, 6 (58), eabj5425.
https://doi.org/doi:10.1126/scirobotics.abj5425
Roesler, E., Naendrup-Poell, L., Manzey, D., & Onnasch, L. (2022). Why Context Matters: The

Influence of Application Domain on Preferred Degree of Anthropomorphism and
Gender Attribution in Human-Robot Interaction. International Journal of Social
Robotics, 14 (5), 1155-1166. https://doi.org/10.1007/s12369-021-00860-z
Roesler, E., Vollmann, M., Manzey, D., & Onnasch, L. (2024). The dynamics of human-robot

trust attitude and behavior - Exploring the effects of anthropomorphism and type of
failure. Computers in Human Behavior, 150, 108008.
https://doi.org/https://doi.org/10.1016/j.chb.2023.108008
Rosa, N. d. S., Romero, R. A. F., & Grassi, V. (2020, 9-13 Nov. 2020). A Survey on the Aspects

of Human-Robot Interaction in Autonomous Vehicles. 2020 Latin American Robotics
Symposium (LARS), 2020 Brazilian Symposium on Robotics (SBR) and 2020
Workshop on Robotics in Education (WRE),
Rothstein, H. R., Sutton, A. J., & Borenstein, M. (2005). Publication bias in meta‐analysis.

Publication bias in meta‐analysis: Prevention, assessment and adjustments, 1-7.
Ruijten, P. A. M., Haans, A., Ham, J., & Midden, C. J. H. (2019). Perceived Human-Likeness

of Social Robots: Testing the Rasch Model as a Method for Measuring
Anthropomorphism. International Journal of Social Robotics, 11 (3), 477-494.
https://doi.org/10.1007/s12369-019-00516-z
Ruijten, P. A. M., Terken, J. M. B., & Chandramouli, S. N. (2018). Enhancing Trust in

Autonomous Vehicles through Intelligent User Interfaces That Mimic Human Behavior.
Multimodal Technologies and Interaction, 2 (4), 62. https://www.mdpi.com/24144088/2/4/62
Ruiz-Equihua, D., Romero, J., Loureiro, S. M. C., & Ali, M. (2023). Human-robot interactions

in the restaurant setting: the role of social cognition, psychological ownership and
anthropomorphism. International Journal of Contemporary Hospitality Management,
35 (6), 1966-1985.
Saeedeh Mosaferchi, M. I., Alireza Mortezapour, Giuliana Vitiello, Alessandro Naddeo.

(2025). Towards more trustworthy automated driving: comparing Anthropomorphic
and Biophilic interfaces (Accepted) CHItaly2025, Salerno.
https://chitaly2025.di.unisa.it/
Schneider, S., Cabrall, C., Petermeijer, S., & Bengler, K. (2017). Effects of Expectation and

Driving Style on Trust in Highly Automated Vehicles .
https://doi.org/10.13140/RG.2.2.10553.57442
Schroeder, J., & Epley, N. (2016). Mistaking minds and machines: How speech affects

dehumanization and anthropomorphism. Journal of Experimental Psychology:
General, 145 (11), 1427.
Schuß, M., Pizzoni, L., & Riener, A. (2024). Human or robot? Exploring different avatar

appearances to increase perceived security in shared automated vehicles. Journal on
Multimodal User Interfaces, 18 (2), 209-228. https://doi.org/10.1007/s12193-02400436-x
Sestino, A., & D'Angelo, A. (2023). My doctor is an avatar! The effect of anthropomorphism

and emotional receptivity on individuals' intention to use digital-based healthcare
services. Technological Forecasting and Social Change, 191, 122505.
https://doi.org/https://doi.org/10.1016/j.techfore.2023.122505
Shank, D. B., Graves, C., Gott, A., Gamez, P., & Rodriguez, S. (2019). Feeling our way to

machine minds: People's emotions when perceiving mind in artificial intelligence.


Computers in Human Behavior, 98, 256-266.
https://doi.org/https://doi.org/10.1016/j.chb.2019.04.001
Sheridan, T. B. (2020). A review of recent research in social robotics. Current opinion in

psychology, 36, 7-12.
Shi, J., Chai, C., Cai, R., Wei, H., Zhou, Y., Fan, H., Zhang, W., & Merat, N. (2024). Effects of

various in-vehicle human-machine interfaces on drivers' takeover performance and
gaze pattern in conditionally automated vehicles. International Journal of HumanComputer Studies, 192, 103362.
https://doi.org/https://doi.org/10.1016/j.ijhcs.2024.103362
Shin, H., Chung, H., Park, C., & Jun, S. (2025). Enhancing the Multi-User Experience in Fully

Autonomous Vehicles Through Explainable AI Voice Agents. International Journal of
Human-Computer Interaction, 41 (11), 6672-6686.
https://doi.org/10.1080/10447318.2024.2383034
Shin, J.-G., Heo, I.-S., Yae, J.-H., & Kim, S.-H. (2022). Kano model of autonomous driving

user acceptance according to driver characteristics: A survey study. Transportation
Research Part F: Traffic Psychology and Behaviour, 91, 73-86.
https://doi.org/https://doi.org/10.1016/j.trf.2022.10.002
Short, J., Williams, E., & Christie, B. (1976). The social psychology of telecommunications.

(No Title) .
Silva, I., Silva, H., Botelho, F., & Pendao, C. (2024). Realistic 3D Simulators for Automotive:

A Review of Main Applications and Features. Sensors (Basel), 24 (18).
https://doi.org/10.3390/s24185880
Sinnema, L., & Alimardani, M. (2019). The Attitude of Elderly and Young Adults Towards a

Humanoid Robot as a Facilitator for Social Interaction. In M. A. Salichs, S. S. Ge, E. I.
Barakova, J.-J. Cabibihan, A. R. Wagner, A. Castro-Gonzalez, & H. He, Social Robotics
Cham.
Song, M., Jiang, W., Xing, X., Mou, J., & Duan, Y. (2026). The more human-like the better?

Effect of anthropomorphic level on customer intention to participate in AI service
recovery. Technology in Society, 84, 103065.
https://doi.org/https://doi.org/10.1016/j.techsoc.2025.103065
Song, Z., Yang, Y., & Deng, M. (2023). Trust Repair of Automated Driving System: A New In
Vehicle Communication Strategy of Voice Assistant. In C. Stephanidis, M. Antona, S.
Ntoa, & G. Salvendy, HCI International 2023 Posters Cham.
Stampf, A., Colley, M., Girst, B., & Rukzio, E. (2024). Exploring Passenger-Automated

Vehicle Negotiation Utilizing Large Language Models for Natural Interaction
Proceedings of the 16th International Conference on Automotive User Interfaces and
Interactive Vehicular Applications, Stanford, CA, USA.
https://doi.org/10.1145/3640792.3675725
Stilgoe, J. (2023). What does it mean to trust a technology? In (Vol. 382, pp. eadm9782):

American Association for the Advancement of Science.
Sun, J., Huang, Y., Huang, X., Zhang, J., & Zhang, H. (2024). Effect of Proactive Interaction

on Trust in Autonomous Vehicles. Sustainability, 16 (8), 3404.
https://www.mdpi.com/2071-1050/16/8/3404
Tan, H., Zhao, Y., Li, S., Wang, W., Zhu, M., Hong, J., & Yuan, X. (2020). Relationship between

social robot proactive behavior and the human perception of anthropomorphic
attributes. Advanced Robotics, 34 (20), 1324-1336.
Tan, Y., Pabian, S., Vandebosch, H., & Poels, K. (2025). Enhancing user satisfaction in the

reporting of online sexual harassment on social media: The role of anthropomorphic
design in mitigating negative emotions and building trust. Computers in Human
Behavior, 172 , 108733. https://doi.org/https://doi.org/10.1016/j.chb.2025.108733


Team, R. C. (2020). RA language and environment for statistical computing, R Foundation for

Statistical. Computing .
Tewari, M., & Lindgren, H. (2022). Expecting, understanding, relating, and interacting-older,

middle-aged and younger adults' perspectives on breakdown situations in human-robot
dialogues [Original Research]. Frontiers in Robotics and AI, Volume 9 - 2022 .
https://doi.org/10.3389/frobt.2022.956709
Thimm, C., Engelhardt, P., Nehls, P., Hens, J., Biehler, M., Hermanns, C., Huzel, P., Bennewitz,

M., Mucke, J., & Dengler, N. (2024). Trust, (Dis)Comfort, and Voice Quality:
Anthropomorphism in Verbal Interactions with NAO. In C. Stephanidis, M. Antona, S.
Ntoa, & G. Salvendy, HCI International 2024 Posters Cham.
Torggler, A., Edwards, J., & Wintersberger, P. (2022). Beyond the Halo: Investigation of Trust

and Functional Specificity in Automated Driving with Conversational Agents
Proceedings of the 14th International Conference on Automotive User Interfaces and
Interactive Vehicular Applications, Seoul, Republic of Korea.
https://doi.org/10.1145/3543174.3546834
Troshani, I., Rao Hill, S., Sherman, C., & Arthur, D. (2021). Do we trust in AI? Role of

anthropomorphism and intelligence. Journal of Computer Information Systems, 61 (5),
481-491.
Tsfasman, M., Saravanan, A., Viner, D., Goslinga, D., De Wolf, S., Raman, C., Jonker, C. M.,

& Oertel, C. (2021). Towards a Real-time Measure of the Perception of
Anthropomorphism in Human-robot Interaction. Proceedings of the 2nd ACM
Multimedia Workshop on Multimodal Conversational AI,
Vaitonyte, J., Alimardani, M., & Louwerse, M. M. (2023). Scoping review of the neural

evidence on the uncanny valley. Computers in Human Behavior Reports, 9, 100263.
https://doi.org/https://doi.org/10.1016/j.chbr.2022.100263
Verberne, F. M. F., Ham, J., & Midden, C. J. H. (2015). Trusting a Virtual Driver That Looks,

Acts, and Thinks Like You. Human factors, 57 (5), 895-909.
https://doi.org/10.1177/0018720815580749
Vrkljan, B. H., & Anaby, D. (2011). What vehicle features are considered important when

buying an automobile? An examination of driver preferences by age and gender.
Journal of Safety Research, 42 (1), 61-65.
https://doi.org/https://doi.org/10.1016/j.jsr.2010.11.006
Walker, F., Forster, Y., Hergeth, S., Kraus, J., Payre, W., Wintersberger, P., & Martens, M.

(2023). Trust in automated vehicles: constructs, psychological processes, and
assessment. Frontiers in Psychology, 14, 1279271.
Wallbridge, C. D., Zhang, Q., Marcinkiewicz, V., Bowen, L., Kozlowski, T., Jones, D. M., &

Morgan, P. L. (2024). "Warning!" Benefits and Pitfalls of Anthropomorphising
Autonomous Vehicle Informational Assistants in the Case of an Accident. Multimodal
Technologies and Interaction, 8 (12), 110. https://www.mdpi.com/2414-4088/8/12/110
Wan, X., Wang, W., Liu, J., & Tong, T. (2014). Estimating the sample mean and standard

deviation from the sample size, median, range and/or interquartile range. BMC medical
research methodology, 14, 1-13.
Wang, M., Lee, S. C., & Jeon, M. (2024). Pairing in-vehicle intelligent agents with different

levels of automation: implications from driver attitudes, cognition, and behaviors in
automated vehicles. Human-Computer Interaction, 1-31.
Wang, M., Lee, S. C., Montavon, G., Qin, J., & Jeon, M. (2022). Conversational Voice Agents

are Preferred and Lead to Better Driving Performance in Conditionally Automated
Vehicles Proceedings of the 14th International Conference on Automotive User
Interfaces and Interactive Vehicular Applications, Seoul, Republic of Korea.
https://doi.org/10.1145/3543174.3546830


Wang, M., Lee, S. C., Sanghavi, H. K., Eskew, M., Zhou, B., & Jeon, M. (2021). In-Vehicle

Intelligent Agents in Fully Autonomous Driving: The Effects of Speech Style and
Embodiment Together and Separately 13th International Conference on Automotive
User Interfaces and Interactive Vehicular Applications, Leeds, United Kingdom.
https://doi.org/10.1145/3409118.3475142
Wang, P., Motamedi, S., Qi, S., Zhou, X., Zhang, T., & Chan, C.-Y. (2021). Pedestrian

interaction with automated vehicles at uncontrolled intersections. Transportation
Research Part F: Traffic Psychology and Behaviour, 77, 10-25.
https://doi.org/https://doi.org/10.1016/j.trf.2020.12.005
Waytz, A., Heafner, J., & Epley, N. (2014). The mind in the machine: Anthropomorphism

increases trust in an autonomous vehicle. Journal of Experimental Social Psychology,
52 , 113-117. https://doi.org/https://doi.org/10.1016/j.jesp.2014.01.005
Weigl, K., Schartmuller, C., & Riener, A. (2023). Development of the Questionnaire on Non
Driving Related Tasks (QNDRT) in automated driving: revealing age and gender
differences. Behaviour & Information Technology, 42 (9), 1374-1388.
Weitz, J., & Adler, S. (1973). The optimal use of simulation. Journal of Applied Psychology,

58 (2), 219.
Wickens, C. D. (2008). Multiple Resources and Mental Workload. Human factors, 50 (3), 449
455. https://doi.org/10.1518/001872008x288394
Wickens, C. D., & Carswell, C. M. (2021). Information processing. Handbook of human factors

and ergonomics, 114-158.
Wiehr, F., Hirsch, A., Schmitz, L., Knieriemen, N., Kruger, A., Kovtunova, A., Borgwardt, S.,

Chang, E., Demberg, V., Steinmetz, M., & Hoffmann, J. (2021). Why Do I Have to Take
Over Control? Evaluating Safe Handovers with Advance Notice and Explanations in
HAD Proceedings of the 2021 International Conference on Multimodal Interaction,
Montreal, QC, Canada. https://doi.org/10.1145/3462244.3479884
Wong, P. N. Y., Brumby, D. P., Babu, H. V. R., & Kobayashi, K. (2019). Voices in Self-Driving

Cars Should be Assertive to More Quickly Grab a Distracted Driver's Attention
Proceedings of the 11th International Conference on Automotive User Interfaces and
Interactive Vehicular Applications, Utrecht, Netherlands.
https://doi.org/10.1145/3342197.3344535
Wu, M. (2024). Anthropomorphism and socialization in smart urban mobility: insights from

human-autonomous vehicle interaction.
Wu, M., Wang, N., & Yuen, K. F. (2023a). Can autonomy level and anthropomorphic

characteristics affect public acceptance and trust towards shared autonomous vehicles?
Technological Forecasting and Social Change, 189, 122384.
Wu, M., Wang, N., & Yuen, K. F. (2023b). Deep versus superficial anthropomorphism:

Exploring their effects on human trust in shared autonomous vehicles. Computers in
Human Behavior, 141, 107614.
https://doi.org/https://doi.org/10.1016/j.chb.2022.107614
Wu, M., Yuen, K. F., & Li, K. X. (2024). Forecasting the evolution of urban mobility: The

influence of anthropomorphism and social responsiveness in the transition from human
to automated driving. Technology in Society, 79, 102727.
https://doi.org/https://doi.org/10.1016/j.techsoc.2024.102727
Xu, S., & Ma, T. (2025). How Social Cues in Depression Intervention AI Chatbots Affect

Human-Computer Trust. International Conference on Human-Computer Interaction,
Yam, K. C., Bigman, Y., & Gray, K. (2021). Reducing the uncanny valley by dehumanizing

humanoid robots. Computers in Human Behavior, 125, 106945.


Yee, N., Bailenson, J. N., & Rickertsen, K. (2007). A meta-analysis of the impact of the

inclusion and realism of human-like faces on user experiences in interfaces.
Proceedings of the SIGCHI conference on Human factors in computing systems,
Yin, J., Shao, H., & Zhang, X. (2024). The monitoring requests on young driver's fatigue and

take-over performance in prolonged conditional automated driving. Journal of Safety
Research, 88 , 285-292. https://doi.org/https://doi.org/10.1016/j.jsr.2023.11.015
Yoo, Y., Yang, M.-y., Lee, S., Baek, H., & Kim, J. (2022). The effect of the dominance of an

in-vehicle agent's voice on driver situation awareness, emotion regulation, and trust: A
simulated lab study of manual and automated driving. Transportation Research Part F:
Traffic Psychology and Behaviour, 86, 33-47.
https://doi.org/https://doi.org/10.1016/j.trf.2022.01.009
Yu, C.-E., & Ngan, H. F. B. (2019). The power of head tilts: gender and cultural differences of

perceived human vs human-like robot smile in service. Tourism Review, 74 (3), 428442.
Yuan, M., & Yu, R. (2024). Exploring the influential factors of initial trust in autonomous cars.

Ergonomics, 1-19.
Zakerian, S. A., Zia, G., Azam, K., & Mortezapour, A. (2018). Reliability and validity of the

driver activity load index for assessing mental workload among drivers in production
companies. Journal of Occupational Hygiene Engineering Volume, 5 (2), 65-71.
Zhang, F., & Sheng, D. (2026). Anthropomorphism's impact on chatbot adoption: A meta
analytic structural equation modeling approach. Technology in Society, 84, 103099.
https://doi.org/https://doi.org/10.1016/j.techsoc.2025.103099
Zhang, H., Wang, Y., & Tran, T. T. M. (2024). External Speech Interface: Effects of Gendered

and Aged Voices on Pedestrians' Acceptance of Autonomous Vehicles in Shared Spaces
Adjunct Proceedings of the 16th International Conference on Automotive User
Interfaces and Interactive Vehicular Applications, Stanford, CA, USA.
https://doi.org/10.1145/3641308.3685046
Zhang, Q., Esterwood, C., Pradhan, A. K., Tilbury, D., Yang, X. J., & Robert, L. P. (2023). The

Impact of Modality, Technology Suspicion, and NDRT Engagement on the
Effectiveness of AV Explanations. IEEE Access, 11, 81981-81994.
https://doi.org/10.1109/ACCESS.2023.3302261
Zhang, Y., Wang, W., Zhou, X., Wang, Q., & Sun, X. (2023). Tactical-Level Explanation is Not

Enough: Effect of Explaining AV's Lane-Changing Decisions on Drivers' DecisionMaking, Trust, and Emotional Experience. International Journal of Human-Computer
Interaction, 39 (7), 1438-1454. https://doi.org/10.1080/10447318.2022.2098965
Zhang, Z., Tian, R., & Duffy, V. G. (2022). Trust in automated vehicle: A meta-analysis. In

Human-automation interaction: Transportation (pp. 221-234). Springer.
Zhao, Y., Jiang, K., Yu, Z., & Huang, Z. (2024). Emotion-matched in-vehicle assistants: an

exploration in regulating drivers' incidental emotions and enhancing takeover
performance and situational awareness. Cognition, Technology & Work, 26 (2), 225245. https://doi.org/10.1007/s10111-024-00756-8
Zhou, S., Sun, X., Wang, Q., Liu, B., & Burnett, G. (2023). Examining pedestrians' trust in

automated vehicles based on attributes of trust: A qualitative study. Applied
Ergonomics, 109, 103997.
Złotowski, J., Sumioka, H., Eyssel, F., Nishio, S., Bartneck, C., & Ishiguro, H. (2018). Model

of dual anthropomorphism: the relationship between the media equation effect and
implicit anthropomorphism. International Journal of Social Robotics, 10 (5), 701-714.