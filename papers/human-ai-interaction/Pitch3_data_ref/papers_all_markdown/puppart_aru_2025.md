# A Brief AI Literacy Intervention Does Not Significantly Reduce Over-Reliance and Increases Under-Reliance on ChatGPT: A Randomized Study

Brett Puppart, Jaan Aru

Institute of Computer Science, University of Tartu

brett.puppart@gmail.com

# Abstract


In this study, we examined whether a brief AI literacy intervention influences high school


students' reliance on recommendations from large language models (LLMs). In a randomized


experiment, students were assigned to either a control group receiving a brief introduction to


LLMs or an intervention group receiving additional information about how LLMs work, their


limitations, and effective usage strategies. Participants then solved eight math puzzles with


ChatGPT's advice, which was incorrect in half of the trials. Results indicated widespread


over-reliance, with incorrect recommendations adopted in 52.1% of the trials. The


intervention did not significantly reduce over-reliance. Instead, it led to an increase in under

reliance, as students were more likely to reject correct recommendations. These findings


provide preliminary evidence that brief text-based interventions may be ineffective in


fostering appropriate reliance. More comprehensive and interactive approaches may be


required to meaningfully influence students' real-world reliance on LLMs.


2

# 1. Introduction


Large language models (LLMs) are probabilistic models that have been trained to predict the


next token in a text sequence (Naveed et al., 2024). High capabilities, ease of use, and


commercial promotion have caused a widespread adoption of these systems in various fields,


such as medicine (Thirunavukarasu et al., 2023), science (Liang et al., 2024), and increasingly


education (Valova et al., 2024).


Researchers have suggested that LLMs could revolutionize education by enabling


personalized learning, providing immediate feedback, and improving accessibility (Diab Idris


et al., 2024; Wang et al., 2024). Reflecting this trend, Estonia launched the national "AI Leap"


initiative in 2025 to introduce LLM-based tutors to high school students (ERR, 2025; Aru &


Laak, 2025). Similar initiatives have emerged in other countries, signaling the growing


integration of LLMs into educational systems (OpenAI, 2026).


Despite these potential benefits, LLM use also introduces risks. One substantial risk is over

reliance, in which people adopt incorrect AI recommendations (Bucinca et al., 2021). Many


humans display a general aversion towards cognitive effort (Aru & Rozgonjuk, 2022; David


et al., 2024; Shenhav et al., 2017). In our interaction with external tools, this tendency may


increase cognitive offloading, defined as taking physical action to reduce task demand (Risko


& Gilbert, 2016). Students may be tempted to delegate parts of thinking to LLMs, which can


provide immediate solutions to many problems. Consistent with this expectation, several


studies have reported over-reliance in educational contexts (Amoozadeh et al., 2024; Valova


et al., 2024).


Such over-reliance might contribute to several problems at both societal and individual levels.


At the societal level, over-reliance may contribute to the spread of harmful misinformation


and biases. LLMs often present answers in a very confident style (Azaria et al., 2024), which


is problematic as they may contain errors (Borji, 2023) and produce biased or stereotypical


outputs (Kotek et al., 2023; Rozado, 2023). At the individual level, reliance on LLMs may


reduce engagement in deliberate reasoning and critical thinking (Aru, 2025; Dubey et al.,


2024; Kasneci et al., 2023). Over time, such external dependency might harm our critical


thinking (Duhaylungsod & Chavez, 2023; Zhai et al., 2024; Gerlich, 2025), metacognitive


regulation (Fan et al., 2025; Fernandes et al., 2024; Laak et al., 2024), and information


retention (Sparrow et al., 2011; Dubey et al., 2024).


3


AI literacy interventions have been proposed as a potential way to mitigate over-reliance on


AI systems (Kasneci et al., 2023; Morrill & Noetel, 2023). Broadly defined, AI literacy refers


to the competencies required to critically evaluate, collaborate with, and use AI in different


areas of life (Long & Magerko, 2020). While some AI literacy frameworks include affective


and enacted components, such as attitudes and self-reflection (Ng et al., 2021; Miao &


Shiohira, 2024; OECD, 2025), we follow the line of work that conceptualizes AI literacy as


knowledge and skills (Chiu et al., 2024; Chiu, 2025).


Despite interest in the topic, the relationship between AI literacy and over-reliance in LLM

human collaboration is not well understood. Previous research in broader machine-learning


and automation contexts suggests that greater understanding of AI can influence, and in some


contexts reduce, over-reliance (Chiang & Yin, 2021; Horowitz & Kahn, 2023; Jacobs et al.,


2021; Morrill & Noetel, 2023). However, preliminary work in the LLM context suggests that


the association may be more complex. Zhang et al. (2025) found that greater AI literacy was


associated with greater AI dependency among preservice mathematics teachers. AI


dependency, in turn, was negatively associated with several 21st-century skills, including


critical thinking and problem-solving. These findings suggest that greater knowledge or


proficiency with AI might not translate into more cautious or appropriate reliance on LLMs.


Even if AI literacy promotes more appropriate reliance, the amount of training or instruction


required to induce measurable effects remains unclear. Schools adopting AI tools may favor


brief informational interventions, such as short explanatory texts or brochures, over longer


courses or more extensive materials because they are easier to implement at scale. Some


experimental work suggests that brief interventions may reduce over-reliance. Chiang and Yin


(2021) found that informing participants about possible variation in model performance


reduced reliance during covariate shift, while Morrill and Noetel (2023) found that a short AI


literacy intervention reduced over-reliance on AI advice. More recently, Bo et al. (2024)


found that several interventions reduced over-reliance on LLM advice, although they


generally failed to promote appropriate reliance. However, little evidence exists on whether


brief AI literacy interventions can improve high school students' reliance on LLM advice.


This study aims to fill this gap by presenting preliminary experimental findings on the


effectiveness of a brief LLM-specific intervention on suboptimal reliance. High school


students were randomly assigned to either a control or intervention group and completed a


behavioral task involving acceptance or rejection of ChatGPT recommendations. We address


the following research questions:


4


RQ1 : How does a brief AI literacy intervention impact high school students' acceptance of


incorrect ChatGPT recommendations (over-reliance)?


RQ2 : How does a brief AI literacy intervention impact high school students' acceptance of


correct ChatGPT recommendations (under-reliance)?


Additionally, given prior work linking over-reliance to reduced deliberation (Bucinca et al.,


2021), we examined whether decision time was associated with reliance behavior. We also


explored whether the intervention influenced participants' metacognitive confidence in their


responses.

# 2. Method 2.1. Participants


The sample comprised 12th-grade Estonian high school students ( M = 18.06 years, SD = 0.23,


age range: 18-19 years). The invitations to participate in the study were sent to 72 schools, of


which 10 participated in the study and forwarded the study invitation to their senior students.


A total of 42 students completed the questionnaire. Six of them were excluded from the


analysis for the following reasons: Five participants were excluded because they read the


intervention text in less than 30 seconds, and one participant was excluded because they


completed the entire questionnaire in less than six minutes. Therefore, the analytic sample


consisted of 36 participants, of whom 25 (69.4%) were female and 11 were male (30.6%). To


incentivize participation, a lottery was held among all participants, with five €20 bookstore


gift cards as prizes.

# 2.2. Materials


For the intervention group, we created a brief educational text (hereafter, intervention text ).


The content was based on Walter's (2024) conceptualization of AI literacy, given its emphasis


on the limitations and risks of AI. The intervention text covered all sub-skills of AI literacy,


except for ethics, as this aspect is addressed in separate guidelines (Table 1). Screenshots


illustrating ChatGPT's hallucinations and other limitations were also provided. For the control


group, we created a text (hereafter, control text ) that contained only a general introduction to


ChatGPT, which was also presented in the intervention group (Table 1). Full translations of


the texts from Estonian are provided in Appendix B.


Section Content description Control Intervention


5


Introduction


Working mechanism


Limitations and risks


Prompting and usage


strategies


Overview of ChatGPT as a text

based system and its capabilities


Explanation of LLMs as probabilistic


models predicting the next token


Description of hallucinations,


inaccuracies, and potential biases


Guidance on effective use of


ChatGPT and prompt formulation


Included Included


Not included Included


Not included Included


Not included Included


Table 1. Overview of the texts presented in the control and intervention groups.


To measure reliance behavior, we used Kangaroo math puzzles (Teaduskool, 2022), which


assessed not only the knowledge of formulas but also logical and creative reasoning. These


puzzles were suitable for measuring over-reliance for two main reasons. First, each puzzle has


one correct answer, allowing over-reliance to be classified unambiguously as a binary


outcome. Second, solving these puzzles requires iterative reasoning and slow, analytical


thinking. This aspect mimics the real-life use of ChatGPT, where fact-checking requires


additional effort compared to uncritical acceptance.


To generate suggestions, we used ChatGPT-4o with default parameters. We did not explicitly


prompt the model to err. Instead, we added the puzzle to the query with the instruction "solve


correctly". This ensured that the incorrect recommendations arose naturally from the model's


responses, thereby increasing ecological validity.


We tested several puzzles from the "Cadet" age category, designed for 7th-8th grade students,


to ensure a consistent and appropriate level of difficulty for 12th-graders. We selected eight


puzzles, with four featuring correct recommendations from ChatGPT and four featuring


incorrect recommendations (Appendix A). Simple puzzles were avoided to encourage


engagement with ChatGPT's recommendations. Incorrect recommendations had to appear


trustworthy but contain errors that participants should be able to detect through critical


evaluation.

# 2.3. Procedure


The study was conducted on the LimeSurvey online platform, with data collection taking


place in October 2024. Upon entering the study, participants provided informed consent and


basic demographic information, including gender, age, and school affiliation.


6


Participants were then randomly assigned to either the intervention or the control group and


received the corresponding text. Following the reading task, participants completed a brief


manipulation check, assessing how well they perceived the text had informed them about


three aspects of ChatGPT: how it works, its limitations and risks, and how to use it


effectively. Responses were collected on a four-point Likert scale.


After that, participants received instructions and proceeded to solve math puzzles with


ChatGPT's assistance. The instructions were as follows: "You are about to solve math puzzles


with the help of ChatGPT. There are a total of eight puzzles, and your goal is to answer as


many correctly as possible. If you choose not to accept the recommendation, that option will


not be available later. There is no time limit."


Each participant was presented with eight puzzles in random order. For each puzzle,


participants were first shown a screenshot of ChatGPT's recommendation (Figure 1).


Participants indicated whether they would use it as their answer. If they selected "yes," they


proceeded to the next puzzle. If they selected "no," they solved the puzzle independently by


selecting an answer from four options (ChatGPT's recommendation was removed). After each


puzzle, participants rated their confidence on a five-point Likert scale (1 = strongly disagree -


5 = strongly agree) in response to the statement, "I believe my answer to the previous puzzle


was correct."


Figure 1. Example of a puzzle presented to the participants


7


The primary dependent variable of the study was over-reliance, which we operationally


defined as a scenario where ChatGPT provided an incorrect recommendation, and the


participant adopted it as their answer. We also measured under-reliance, which we


operationally defined as a scenario where the participant did not adopt ChatGPT's correct


recommendation.


Additionally, we measured the time taken to decide whether to rely on ChatGPT's


recommendation. We used three different metrics for these purposes: decision time across all


puzzles; decision time for puzzles with incorrect recommendations; and decision time for


puzzles with correct recommendations. Beyond decision time, we also measured the total time


spent reading the texts and the total time spent solving the puzzles. All time metrics were


reported in minutes.

# 2.4. Ethics


This study was approved by the Research Ethics Committee for Human Studies at the


University of Tartu. All participants read detailed instructions and provided informed consent


before taking part in the study. The study was presented to participants under the title


"Students' motivation in solving mathematics puzzles with the help of ChatGPT." This was


done to prevent bias - if participants were aware of the actual aim of the study, it might have


compromised the validity of the results. At the end of the experiment, a debriefing was


conducted in which participants were informed about the actual purpose of the study. This


ensured the ethical integrity of the research.

# 2.5. Data analysis


The data analysis was conducted using the open-source statistical software JASP (version


0.19.1) to examine the relationships between variables. The significance level for all analyses


was set at p = .05. Normality assumption was considered violated when the absolute value of


skewness or kurtosis exceeded 2, and homogeneity of variance was considered violated when


Levene's test was statistically significant.


To compare reliance, decision time, confidence, and manipulation effectiveness between


groups, we applied the independent samples t-test. When normality was violated, we applied


the non-parametric Mann-Whitney U test. When homogeneity of variance was considered


violated, we used Welch's t-test. Cohen's d was used as the primary effect size for


independent samples and Welch's t-test, while for Mann-Whitney U test, rank-biserial


8


correlation was used ( rrb ). We interpreted effect sizes according to Cohen's (1988) guidelines:


for Cohen's d, 0.20 represents a small effect, 0.50 a medium effect, and 0.80 a large effect.


For rrb we interpreted the results according to standard correlation guidelines, described


below.


To analyze the relationship between decision time and reliance, we conducted correlation


analyses. In case of normality violation, we used Spearman's rank correlation coefficient (ρ).


Effect sizes for r, ρ and rrb were interpreted using Cohen's (1988) guidelines, where values of


.10, .30, .50 represent small, medium, and large effects, respectively.

# 3. Results


The analytic sample consisted of 36 students, with 19 in the intervention group and 17 in the


control group. Participants completed the study in 23.6 minutes on average; the intervention


text required more reading time (4.3 min) than the control text (0.9 min).


Over-reliance occurred in 52.1% ( SD = 28.90) of trials with incorrect recommendations, and


under-reliance in 28.5% ( SD = 24.00) of trials with correct recommendations. Most


participants accepted at least one incorrect recommendation (94.4%) and rejected at least one


correct recommendation (75.0%). Appendix C shows that over-reliance was similar across


tasks, whereas under-reliance varied more substantially.


Welch's t-test indicated that over-reliance was lower in the intervention group ( M = 48.68, SD


= 24.26) than in the control group ( M = 55.88, SD = 33.69), but the difference was not


statistically significant, t (28.78) = -0.73, p = .471, d = -0.25 (Figure 2). An independent


samples t-test indicated that under-reliance was higher in the intervention group ( M = 36.84,


SD = 24.11) than in the control group ( M = 19.12, SD = 20.78), and this difference was


statistically significant, t (34) = 2.35, p = .025, d = 0.78.


9


Figure 2. Differences in over- and under-reliance between the intervention and control


groups (n = 36) . Values represent the mean difference (intervention - control) in percentage


points. Over-reliance reflects the proportion of incorrect recommendations that were adopted,


whereas under-reliance reflects the proportion of correct recommendations that were rejected.


Error bars indicate 95% confidence intervals. The dashed horizontal line denotes no


difference between groups. Asterisk (*) indicates a statistically significant difference (p <


.05). Group differences for over-reliance were tested using Welch's t-test and for under

reliance using an independent samples t-test.


Independent samples t-tests indicated that participants in the intervention group reported


higher perceived knowledge in the "Usage" category ( M = 3.42, SD = 0.77) than in the


control group ( M = 2.77, SD = 0.97), t (34) = 2.26, p = .030, d = 0.76. Similarly, perceived


knowledge in the "Working mechanism" category was higher in the intervention group (M =


3.37, SD = 0.76) than in the control group ( M = 2.77, SD = 0.90), t (34) = 2.09, p = .044, d =


0.70. The difference in the "Limitations" category was not statistically significant, t (34) =


0.56, p = .577, d = 0.19. No significant group differences were observed in confidence ratings


or decision time.


Over-reliance was negatively associated with decision time on trials with incorrect


recommendations (ρ = -0.41, p = .013), whereas under-reliance was positively associated


with decision time on trials with correct recommendations (ρ = 0.35, p = .038).

# 4. Discussion


The primary aim of this study was to assess the impact of a brief AI literacy intervention on


high school students' reliance on recommendations provided by ChatGPT.


10


Results demonstrated widespread over-reliance, as students accepted nearly half of the


incorrect ChatGPT recommendations. This is consistent with previous research suggesting


that students often do not verify the accuracy of ChatGPT's outputs and place substantial trust


in them (Amoozadeh et al., 2024; Valova et al., 2024). We found a negative association


between over-reliance and decision times when evaluating incorrect ChatGPT


recommendations. This is consistent with prior work showing that cognitive forcing functions


can reduce over-reliance (Bucinca et al., 2021), and with the possibility that rapid, relatively


automatic responding contributes to over-reliance (see Kahneman, 2011).


Considered alongside research into the consequences of external dependence on AI, our


findings highlight the importance of designing and critically evaluating potential interventions


against over-reliance. Previous work suggests that LLM use may reduce critical thinking


(Gerlich, 2025), cognitive engagement (Kosmyna et al., 2025), learning (Bastani et al., 2025),


and metacognitive calibration (Fernandes et al., 2024). While adoption of incorrect


recommendations does not directly imply that any of these capabilities were harmed, it serves


as an indirect behavioral proxy for how much students engaged with AI's feedback. Humans


are naturally inclined to avoid cognitive effort (Aru & Rozgonjuk, 2022; David et al., 2024;


Shenhav et al., 2017). When AI is routinely used without reflection, these cognitive


capabilities may therefore suffer.


The key finding of this study is that brief AI literacy interventions may not be effective in


reducing over-reliance on LLMs. Over-reliance was slightly lower in the intervention group,


but this difference was not statistically significant. At the same time, the intervention


significantly increased under-reliance. This pattern is consistent with the broader observation


that interventions reducing over-reliance do not necessarily improve appropriate reliance


overall (Bo et al., 2024). Our findings contrast with earlier work showing that brief


informational interventions can reduce over-reliance on AI advice (Chiang & Yin, 2021;


Morrill & Noetel, 2023).


One possible explanation for why our intervention increased under-reliance while showing no


measurable effect on over-reliance is that it induced a general aversion towards AI advice,


without improving participants' ability to selectively distinguish correct from incorrect


recommendations. Previous research has shown that exposure to AI flaws can cause a general


aversion towards its outputs, even when they are correct (Dietvorst et al., 2015). Consistent


with this interpretation, there were no significant differences between groups in reliance


11


decision time, suggesting that the intervention may not have increased deliberation. Instead,


participants may have become generally more likely to dismiss ChatGPT's recommendations.


If replicated in larger studies, these findings would have important implications for educators.


Briefly providing information about LLMs may be insufficient to promote appropriate


reliance, even when students are explicitly informed about errors and biases. More extensive


AI literacy programs may therefore be needed to meaningfully change students' reliance on


LLMs.

# 5. Limitations


Several limitations should be considered regarding the methodology of this study. First, the


actual change in AI literacy was not directly measured. As a result, it remains unclear to what


degree students' knowledge about LLMs was influenced by the intervention. Although


students in the intervention group reported increased knowledge in two out of three aspects


compared to the control group, this relied on self-report, and no pre-post measure was


included. Consequently, we cannot determine how much the intervention changed actual AI


knowledge or skills, or whether participants already possessed much of the information


presented. Future studies would therefore benefit from including pre- and post-intervention


measures of AI literacy, ideally performance-based assessments, to determine whether the


included interventions meaningfully increase AI literacy.


Another limitation concerns the ecological validity of the study environment. The artificial


workflow of first introducing participants to a problem and then to the AI's solution may not


adequately capture how LLMs are used in real-world contexts. The design might have


inadvertently invited more metacognitive reflection by prompting participants to choose


whether to use AI's advice, whereas users are not typically asked to make an explicit reliance


decision after every recommendation in everyday use. The workflow also prevented


participants from prompting, clarifying, or iteratively interacting with the model as they


normally might.


The reliance task was also restricted to eight mathematics and logic puzzles with objectively


correct answers. Reliance behavior may differ in more open-ended educational tasks, in


domains where students have less prior knowledge, or when the quality of AI outputs is more


difficult to verify. The fixed proportion of correct and incorrect recommendations may also


differ from students' everyday experience with LLMs. Future studies should therefore test


whether these findings generalize across task domains and interaction settings.


12


Finally, the sample size was relatively small, which may have limited statistical power to


detect smaller effects. Future research should replicate these findings with larger samples to


more reliably assess the effectiveness of brief AI literacy interventions.

# 6. Conclusion


In conclusion, identifying effective interventions for supporting appropriate reliance on LLMs


is essential, as these tools are increasingly integrated into educational settings. One proposed


solution is to increase students' AI literacy. Due to the ease of implementation and scalability,


schools might be inclined to use brief informational approaches such as short texts or


brochures to promote AI literacy. However, the present findings serve as a preliminary


caution that such interventions may not have the desired effect. Rather than promoting


appropriate reliance, we might invite excessive skepticism towards AI's outputs. We suggest


that more interactive and thorough interventions might be needed to durably and meaningfully


change the way students interact with these tools.

# Acknowledgments


We are grateful to Kristjan-Julius Laak and Madis Vasser for their helpful comments. This


work was supported by the Estonian Research Council grants PSG728 and Tem-TA 120 and


the Estonian Centre of Excellence in Artificial Intelligence (EXAI), funded by the Estonian


Ministry of Education and Research.

# References


Amoozadeh, M., Nam, D., Prol, D., Alfageeh, A., Prather, J., Hilton, M., Ragavan, S. S., &


Alipour, M. A. (2024). Student-AI Interaction: A Case Study of CS1 students. arXiv .


https://doi.org/10.48550/arXiv.2407.00305


Aru, J. (2025). Artificial intelligence and the internal processes of creativity. The Journal of


Creative Behavior . https://doi.org/10.1002/jocb.1530


Aru, J., & Laak, K. J. (2025). Developing an AI-based General Personal Tutor for education.


Trends in Cognitive Sciences . https://doi.org/10.1016/j.tics.2025.09.010


Aru, J., & Rozgonjuk, D. (2022). The effect of smartphone use on mental effort, learning, and


creativity. Trends in Cognitive Sciences, 26 (10), 821-823.


https://doi.org/10.1016/j.tics.2022.07.002


13


Azaria, A., Azoulay, R., & Reches, S. (2024). ChatGPT is a Remarkable Tool-For Experts.


Data Intelligence, 6 (1), 240-296. https://doi.org/10.1162/dint_a_00235


Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, O., & Mariman, R. (2025). Generative


AI without guardrails can harm learning: Evidence from high school mathematics.


Proceedings of the National Academy of Sciences, 122 (26).


https://doi.org/10.1073/pnas.2422633122


Bo, J. Y., Wan, S., & Anderson, A. (2024). To Rely or Not to Rely? Evaluating Interventions


for Appropriate Reliance on Large Language Models . arXiv .


https://doi.org/10.48550/arXiv.2412.15584


Borji, A. (2023). A Categorical Archive of ChatGPT Failures . arXiv.


https://doi.org/10.48550/arXiv.2302.03494


Bucinca, Z., Malaya, M. B., & Gajos, K. Z. (2021). To Trust or to Think: Cognitive Forcing


Functions Can Reduce Overreliance on AI in AI-assisted Decision-making.


Proceedings of the ACM on Human-Computer Interaction, 5 (CSCW1), 1-21.


https://doi.org/10.1145/3449287


Chiang, C.-W., & Yin, M. (2021). You'd Better Stop! Understanding Human Reliance on


Machine Learning Models under Covariate Shift. Proceedings of the 13th ACM Web


Science Conference 2021 , 120-129. https://doi.org/10.1145/3447535.3462487


Chiu, T. K. F. (2025). AI literacy and competency: definitions, frameworks, development and


future research directions. Interactive Learning Environments, 33(5), 3225-3229 .


https://doi.org/10.1080/10494820.2025.2514372


Chiu, T. K. F., Ahmad, Z., Ismailov, M., & Sanusi, I. T. (2024). What are artificial


intelligence literacy and competency? A comprehensive framework to support them.


Computers and Education Open, 6. https://doi.org/10.1016/j.caeo.2024.100171


Cohen, J. (1988). Statistical power analysis for the behavioral sciences (2nd ed.). Lawrence


Erlbaum Associates.


DAIR.AI. (2023). Prompt Engineering Guide.


https://www.promptingguide.ai/introduction/elements


David, L., Vassena, E., & Bijleveld, E. (2024). The unpleasantness of thinking: A meta

analytic review of the association between mental effort and negative affect.


Psychological Bulletin. https://doi.org/10.1037/bul0000443


14


Diab Idris, M., Feng, X., & Dyo, V. (2024). Revolutionizing Higher Education: Unleashing


the Potential of Large Language Models for Strategic Transformation. IEEE Access,


12 , 67738-67757. https://doi.org/10.1109/ACCESS.2024.3400164


Diaz, M. (2024). ChatGPT vs. Microsoft Copilot vs. Gemini: Which is the best AI chatbot?


ZDNET. https://www.zdnet.com/article/chatgpt-vs-microsoft-copilot-vs-gemini-


which-is-the-best-ai-chatbot/


Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People


erroneously avoid algorithms after seeing them err. Journal of Experimental


Psychology: General, 144 (1), 114-126. https://doi.org/10.1037/xge0000033


Dubey, S., Ghosh, R., Chatterjee, S., Dubey, M. J., Das, S., & Benito-Leon, J. (2024).


Redefining Cognitive Domains in the Era of ChatGPT: A Comprehensive Analysis of


Artificial Intelligence's Influence and Future Implications. Medical Research


Archives, 12 (6). https://doi.org/10.18103/mra.v12i6.5383


Duhaylungsod, A., & Chavez, J. (2023). ChatGPT and other AI Users: Innovative and


Creative Utilitarian Value and Mindset Shift. Journal of Namibian Studies History


Politics Culture, 33 , 4367-4385. https://doi.org/10.59670/jns.v33i.2791


ERR. (2025, February 24). Karise eestvedamisel jouab gumnaasiumidesse uuenduslik


haridusprogramm. ERR . https://www.err.ee/1609614515/karise-eestvedamisel-jouab-


gumnaasiumidesse-uuenduslik-haridusprogramm


Fan, Y., Tang, L., Le, H., Shen, K., Tan, S., Zhao, Y., Shen, Y., Li, X., & Gasevic, D. (2025).


Beware of metacognitive laziness: Effects of generative artificial intelligence on


learning motivation, processes, and performance. British Journal of Educational


Technology, 56 (2), 489-530. https://doi.org/10.1111/bjet.13544


Fernandes, D., Villa, S., Nicholls, S., Haavisto, O., Buschek, D., Schmidt, A., Kosch, T.,


Shen, C., & Welsch, R. (2024). AI Makes You Smarter, But None The Wiser: The


Disconnect Between Performance and Metacognition. arXiv .


https://doi.org/10.48550/arXiv.2409.16708


Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of


Critical Thinking. Societies, 15 (1). https://doi.org/10.3390/soc15010006


15


Giray, L. (2023). Prompt Engineering with ChatGPT: A Guide for Academic Writers. Annals


of Biomedical Engineering, 51( 12), 2629-2633. https://doi.org/10.1007/s10439-023-


03272-4


Hariri, W. (2024). Unlocking the Potential of ChatGPT: A Comprehensive Exploration of its


Applications, Advantages, Limitations, and Future Directions in Natural Language


Processing. arXiv . https://doi.org/10.48550/arXiv.2304.02017


Horowitz, M. C., & Kahn, L. (2023). Bending the Automation Bias Curve: A Study of Human


and AI-based Decision Making in National Security Contexts. arXiv .


https://doi.org/10.48550/arXiv.2306.16507


Jacobs, M., Pradier, M. F., McCoy, T. H., Perlis, R. H., Doshi-Velez, F., & Gajos, K. Z.


(2021). How machine-learning recommendations influence clinician treatment


selections: The example of antidepressant selection. Translational Psychiatry, 11 (1),


1-9. https://doi.org/10.1038/s41398-021-01224-x


Kahneman, D. (2011). Thinking, fast and slow . Farrar, Straus and Giroux.


Kasneci, E., Sessler, K., Kuchemann, S., Bannert, M., Dementieva, D., Fischer, F., Gasser,


U., Groh, G., Gunnemann, S., Hullermeier, E., Krusche, S., Kutyniok, G., Michaeli,


T., Nerdel, C., Pfeffer, J., Poquet, O., Sailer, M., Schmidt, A., Seidel, T., ... Kasneci,


G. (2023). ChatGPT for good? On opportunities and challenges of large language


models for education. Learning and Individual Differences, 103 .


https://doi.org/10.1016/j.lindif.2023.102274


Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X. H., Beresnitzky, A. V., ... &


Maes, P. (2025). Your brain on ChatGPT: Accumulation of cognitive debt when using


an AI assistant for essay writing task. arXiv .


https://doi.org/10.48550/arXiv.2506.08872


Kotek, H., Dockum, R., & Sun, D. (2023). Gender bias and stereotypes in Large Language


Models. Proceedings of The ACM Collective Intelligence Conference, 12-24.


https://doi.org/10.1145/3582269.3615599


Laak, K.-J., Abdelghani, R., & Aru, J. (2024). Personalisation is not Guaranteed: The


Challenges of Using Generative AI for Personalised Learning. Innovative


Technologies and Learning , 40-49. https://doi.org/10.1007/978-3-031-65881-5_5


16


Liang, W., Zhang, Y., Wu, Z., Lepp, H., Ji, W., Zhao, X., Cao, H., Liu, S., He, S., Huang, Z.,


Yang, D., Potts, C., Manning, C. D., & Zou, J. Y. (2024). Mapping the Increasing Use


of LLMs in Scientific Papers. arXiv . https://doi.org/10.48550/arXiv.2404.01268


Long, D., & Magerko, B. (2020). What is AI Literacy? Competencies and Design


Considerations. Proceedings of the 2020 CHI Conference on Human Factors in


Computing Systems . https://doi.org/10.1145/3313831.3376727


Miao, F., & Shiohira, K. (2024). AI competency framework for students. UNESCO


Publishing .


Morrill, J., & Noetel, M. (2023). A short-form AI literacy intervention can reduce over

reliance on AI. OSF . https://doi.org/10.31234/osf.io/hv9qc


Naveed, H., Khan, A. U., Qiu, S., Saqib, M., Anwar, S., Usman, M., Akhtar, N., Barnes, N.,


& Mian, A. (2024). A Comprehensive Overview of Large Language Models. arXiv .


https://doi.org/10.48550/arXiv.2307.06435


Ng, D. T. K., Leung, J. K. L., Chu, S. K. W., & Qiao, M. S. (2021). Conceptualizing AI


literacy: An exploratory review. Computers and Education: Artificial Intelligence, 2 .


https://doi.org/10.1016/j.caeai.2021.100041


OECD. (2025). Empowering learners for the age of AI: An AI literacy framework for primary


and secondary education (Review draft) . https://ailiteracyframework.org


OpenAI. (2026). Education for countries. https://openai.com/index/edu-for-countries/


Risko, E. F., & Gilbert, S. J. (2016). Cognitive offloading. Trends in cognitive sciences,


20 (9), 676-688. https://doi.org/10.1016/j.tics.2016.07.002


Rozado, D. (2023). The Political Biases of ChatGPT. Social Sciences, 12 (3).


https://doi.org/10.3390/socsci12030148


Shenhav, A., Musslick, S., Lieder, F., Kool, W., Griffiths, T. L., Cohen, J. D., & Botvinick,


M. M. (2017). Toward a Rational and Mechanistic Account of Mental Effort. Annual


Review of Neuroscience, 40 , 99-124. https://doi.org/10.1146/annurev-neuro-072116-


031526


Sparrow, B., Liu, J., & Wegner, D. M. (2011). Google Effects on Memory: Cognitive


Consequences of Having Information at Our Fingertips. Science, 333 (6043), 776-778.


https://doi.org/10.1126/science.1207745


17


Teaduskool. (2022, November 14). Kanguru voistluse arhiiv .


https://teaduskool.ut.ee/et/ainevoistlused/kanguru-voistluse-arhiiv


Thirunavukarasu, A. J., Ting, D. S. J., Elangovan, K., Gutierrez, L., Tan, T. F., & Ting, D. S.


W. (2023). Large language models in medicine. Nature Medicine, 29 (8), 1930-1940.


https://doi.org/10.1038/s41591-023-02448-8


Valova, I., Mladenova, T., & Kanev, G. (2024). Students' Perception of ChatGPT Usage in


Education. International Journal of Advanced Computer Science and Applications


(IJACSA), 15 (1). https://doi.org/10.14569/IJACSA.2024.0150143


Walter, Y. (2024). Embracing the future of Artificial Intelligence in the classroom: The


relevance of AI literacy, prompt engineering, and critical thinking in modern


education. International Journal of Educational Technology in Higher Education,


21 (1), 15. https://doi.org/10.1186/s41239-024-00448-3


Wang, S., Xu, T., Li, H., Zhang, C., Liang, J., Tang, J., Yu, P. S., & Wen, Q. (2024). Large


Language Models for Education: A Survey and Outlook. arXiv .


https://doi.org/10.48550/arXiv.2403.18105


Zhai, C., Wibowo, S., & Li, L. D. (2024). The effects of over-reliance on AI dialogue systems


on students' cognitive abilities: a systematic review. Smart Learning Environments,


11(1), 28 . https://doi.org/10.1186/s40561-024-00316-7


Zhang, D., Wijaya, T. T., Wang, Y., Su, M., Li, X., & Damayanti, N. W. (2025). Exploring


the relationship between AI literacy, AI trust, AI dependency, and 21st century skills


in preservice mathematics teachers. Scientific Reports, 15 (1).


https://doi.org/10.1038/s41598-025-99127-0


18

# Appendix A. Tasks and ChatGPT recommendations


The tasks and ChatGPT recommendations were presented to the participants in Estonian. The


following are translations from Estonian into English. For puzzles with incorrect ChatGPT


recommendations the correct answers are marked in bold.


# Correct 1

# Puzzle


# ChatGPT recommendation


Answer options : in the first room, in the second room, the lion can be in any room, the lion
can be in either the first or the second room

# Correct 2

# Puzzle


# ChatGPT recommendation


Answer options : 16, 12, 10, 8


19


# Puzzle


# ChatGPT recommendation


Answer options: 18, 20, 24, 25


# Puzzle


# ChatGPT recommendation


Answer options : 0, 2, 3, 4


# Puzzle


# ChatGPT recommendation


# Correct 3


# Correct 4


# Incorrect 1


20


# Answer options: 5, 4, 3, 2


# Puzzle


# ChatGPT recommendation


Answer options : 26, 22, 20, 15


# Puzzle


# ChatGPT recommendation


# Incorrect 2


# Incorrect 3


21


# Answer options : 11:30, 11:45, 12:00, 12:30

# Incorrect 4

# Puzzle


# ChatGPT recommendation


# Answer options : A, B, C, D


22

# Appendix B. Texts presented to the participants


Here we present both the control and intervention text. Horizontal lines indicate where the


control text ended. We provide citations, but these were not visible to the participants.


Before you start solving math puzzles with ChatGPT, please read the following text, which


aims to briefly introduce ChatGPT. Please read the text carefully and thoughtfully, even if


you have previously encountered and used ChatGPT. Once you have read the text, click the


"Next" button in the bottom right corner of the page.


# A short introduction to ChatGPT


ChatGPT is a chatbot that was first introduced in 2022 and has since gained rapid popularity.


It has been widely adopted in various fields, such as education, economics, customer service,


and science, where its use has significantly simplified many tasks.


ChatGPT operates based on user input, which can include questions, tasks, or mathematical


operations. It analyzes the user's input and generates an output presented in an understandable


language. With ChatGPT, it is possible to solve various tasks, from simple questions to


extensive projects. For example, ChatGPT can help generate original text, translate, analyze


data, write code, and summarize large amounts of material.


Here are some reasons why ChatGPT is a useful tool for solving language-related tasks


(Hariri, 2024):


 - Understanding language. ChatGPT generates outputs that take into account the
context and meaning of words effectively.


 - Personalized responses. ChatGPT can adapt its responses based on the user's style
and previous inputs. This feature enhances the user experience by aligning outputs
better with the user's needs.


 - Availability. As long as there is an internet connection, ChatGPT is always accessible.
Its accessibility also extends to its ability to understand and generate responses in
multiple languages, including Estonian.


 - Automation. ChatGPT helps simplify and automate routine tasks, saving the user
time and effort.


These lines mark the end of the control text. From here on is the text for the


intervention.


23


# ChatGPT working mechanism


Each time ChatGPT generates an output, it solves a very simple task: predicting the next


word. For example, if I write the sentence "The dog is _" and ask you which word fits best


in the blank, you would likely suggest words such as "an animal," "furry," or "loyal." On the


other hand, words like "bottle," "blue," or "fish" would be less likely to fit.


Just as you intuitively know which words are more probable in a given context, ChatGPT also


determines this based on its prior training. It has been trained using almost all publicly


available text from the internet, allowing it to learn how words are related and which words


are most likely to follow others.


However, it's important to note that ChatGPT does not think or experience the world like


humans do. At its core, it is simply an extremely large statistical model that responds to user


input by calculating the probabilities of the next words.


# Writing prompts


As previously described, ChatGPT generates output based on user input. This input can


consist of four main components (DAIR.AI, 2023):


 - Instructions. This part explains what task you want ChatGPT to perform. Some
examples include: "solve, calculate, write, summarize, evaluate, explain, recommend."


 - Context. Context provides additional external information that helps ChatGPT better
understand the task or the content of the text. This allows it to generate more relevant
and accurate outputs.


 - Text. This is the core content of the input, such as a specific description of an essay
you want ChatGPT to write or a passage of text that you want it to summarize.


 - Output preferences. This allows you to specify the format or style of the response.
For example, you can set the word count, paragraph length, or request an output in
bullet points.


User input does not have to include all four components. For instance, if you type "If a = b


and b = c, then...", ChatGPT will understand that the instruction is to "solve" without needing


explicit clarification. However, if you want ChatGPT to generate similar logic problems


instead, you need to specify your instructions more clearly.


For any given input, it is useful to consider these components and assess what information


ChatGPT might need to produce the most appropriate output.


# Frequent errors in prompts (Giray, 2023)


24


 - Unclear input. Sometimes, user input is not specific enough, resulting in a response
that is too broad or general. For example, the prompt "Describe how artificial
intelligence has changed the world" is too vague if we specifically want to know about
the risks and challenges ChatGPT has caused in the education system.


 - Complex and conflicting instructions. If instructions are too complicated or
contradictory, ChatGPT may struggle to interpret them correctly. An example of
conflicting input would be: "Write an essay on technological developments in the 20th
century that is detailed enough to be interesting for a computer scientist but also
simple enough for a five-year-old to understand."


 - Biased input. User input can be biased in various ways. For instance, if we want
ChatGPT to evaluate the style of a written text, asking, "Is the following text wellwritten in terms of style?" may nudge ChatGPT towards answering "Yes." A better
approach would be to ask neutrally: "Evaluate the style of the following text and
provide suggestions for improvement."


# ChatGPT limitations and risks


Although properly formulating input is crucial for obtaining the best possible response, there


are some tasks where ChatGPT may still provide incorrect answers, even if the user input is


well-structured. Below is a summary of key limitations of ChatGPT, along with examples.


 - Drawing conclusions about the real world. ChatGPT does not have direct contact
with the real world. Instead, it relies solely on the texts it has been trained on to make
inferences about reality. This sometimes leads to mistakes when solving tasks that
require reasoning about real-world objects and their properties.


Example 1 (task inspired by Diaz, 2024). In the above example, ChatGPT misunderstands the


concept of time (now, last week) and mistakenly assumes that it is a simple arithmetic


problem.


 - Mathematical and logical reasoning. ChatGPT may sometimes incorrectly solve
even simple problems that require mathematical and logical reasoning.


25


Example 2 .


Example 3 (task from Teaduskool, 2022). 107 should be the leftmost number, and 8 should be


the rightmost number.


 - Hallucination. ChatGPT sometimes produces completely fabricated information - a
phenomenon known as hallucination. This can include generating false references and
historical facts. Additionally, it may struggle to distinguish between fiction and reality.


Example 4 . Estonia's first Olympic silver medalist was Martin Klein in 1912, and Jaan


Tonisson was not a wrestler but an important statesman.


ChatGPT can hallucinate in response to various types of questions. However, it is especially


easy to trigger this when user instructions require a very narrow and specific output.


26


# Example 5.


# Example 6.


 - Discriminatory outputs. ChatGPT's outputs depend on the texts it was trained on.
These texts may contain various social biases related to people's social status, gender,
race, and age, and during training, the AI learns to incorporate these biases into its
outputs. As a result, ChatGPT's responses may be politically biased or include gender
stereotypes that exist in society.


# Example 7.


In addition to knowing that ChatGPT can make mistakes, it is important to understand that


some of its characteristics make detecting these errors difficult.


27


 - Excessive confidence. ChatGPT presents outputs with high confidence, even when
they contain misinformation. Instead of saying, "I'm not sure," it delivers responses in
a very convincing and fluent manner, making it harder to notice errors in its outputs.


 - Errors are unexpected. ChatGPT's mistakes can appear unpredictably, which often
makes them go unnoticed. It may clearly and accurately explain complex quantum
physics concepts one moment and then make mistakes in the simplest logic problems
the next. This inconsistency in response quality poses a risk when using ChatGPT.
Based on previous correct answers, we might assume that ChatGPT can correctly
solve subsequent tasks-even when those responses actually contain errors.


# Tips for using ChatGPT


 - Ask multiple times. ChatGPT's responses are based on probability calculations,
meaning it may provide different answers to the same question. Some of these answers
might be unlikely or incorrect. Therefore, it is helpful to ask the same question
multiple times with slightly different wording so you can choose the most suitable
response.


 - Ask for the reasoning. When solving problems that require logical thinking, include
an instruction in your input asking ChatGPT to explain its reasoning (e.g., by adding
"Solve step by step" at the end of your prompt). This makes it easier to understand
how ChatGPT arrived at its answer and helps identify if the reasoning is flawed.


 - Verify facts. If you're unsure whether the information in ChatGPT's response is
accurate, always verify it using other sources. One option is to search on Google.
Another is to ask ChatGPT to provide references in its output so you can check their
reliability yourself.


# Remember that ChatGPT is a tool, not a replacement for thinking!


28

# Appendix C. Participants' reliance across puzzles


Puzzle Over-reliance Under-reliance Human error Correct solutions


Correct 1 - 16 (44.4%) - 20 (55.6%)


Correct 2 - 15 (41.7%) - 21 (58.3%)


Correct 3 - 5 (13.9%) - 31 (86.1%)


Correct 4 - 5 (13.9%) - 31 (86.1%)


Incorrect 1 17 (47.2%) - 10 (27.8%) 9 (25%)


Incorrect 2 21 (58.3%) - 5 (13.9%) 10 (27.8%)


Incorrect 3 18 (50%) - 17 (47.2%) 1 (2.8%)


Incorrect 4 19 (52.8%) - 15 (41.7%) 2 (5.6%)


M 18.8 (52.1%) 10.3 (28.5%) 11.8 (32.6%) 15.6 (43.3%)


Note. Over-reliance = participant used the incorrect recommendation; Under-reliance =


participant did not use the correct recommendation; Human error = participant ignored the


incorrect recommendation but subsequently answered incorrectly.