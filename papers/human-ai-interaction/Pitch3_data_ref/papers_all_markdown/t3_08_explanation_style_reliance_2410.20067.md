# Evaluating the Influences of Explanation Style on Human-AI Reliance


EMMA R. CASOLIN, The University of New South Wales, Australia
FLORA D. SALIM [*], The University of New South Wales, Australia
BEN NEWELL, The University of New South Wales, Australia


Explainable AI (XAI) aims to support appropriate human-AI reliance by increasing the interpretability of complex model decisions.


Despite the proliferation of proposed methods, there is mixed evidence surrounding the effects of different styles of XAI explanations


on human-AI reliance. Interpreting these conflicting findings requires an understanding of the individual and combined qualities of


different explanation styles that influence appropriate and inappropriate human-AI reliance, and the role of interpretability in this


interaction. In this study, we investigate the influences of feature-based, example-based, and combined feature- and example-based


XAI methods on human-AI reliance through a two-part experimental study with 274 participants comparing these explanation style


conditions. Our findings suggest differences between feature-based and example-based explanation styles beyond interpretability


that affect human-AI reliance patterns across differences in individual performance and task complexity. Our work highlights the


importance of adapting explanations to their specific users and context over maximising broad interpretability.


CCS Concepts: - Human-centered computing → Empirical studies in HCI ; - Computing methodologies → Artificial


intelligence .


Additional Key Words and Phrases: Explainable AI; Human-AI Collaboration; Human-AI Reliance


# ACM Reference Format:


Emma R. Casolin, Flora D. Salim, and Ben Newell. 2024. Evaluating the Influences of Explanation Style on Human-AI Reliance. In


Proceedings of Make sure to enter the correct conference title from your rights confirmation emai (Conference acronym 'XX). ACM, New


York, NY, USA, 22 pages. https://doi.org/XXXXXXX.XXXXXXX


# 1 Introduction


Increasingly, artificial intelligence (AI) is being introduced into human decision-making pipelines in an attempt to


support more accurate performance. However, the growing complexity of AI models prevents sufficient human


understanding of the decision processes underlying AI outputs to support their acceptance at face value. In response


to this, explainable AI (XAI) has been proposed as a method of increasing the interpretability of AI models through


providing explanations of their behaviour. This increased interpretability seeks to improve human understanding


of AI behaviour and our ability to predict its future behaviour, with the ultimate goal being that XAI can


help humans identify when to appropriately accept and reject AI recommendations. In contrast, much of the prior


literature has instead found that XAI typically increases people's over-reliance on incorrect AI advice [1, 46], leading to


poorer decision outcomes overall.


*Corresponding author


Authors' Contact Information: Emma R. Casolin, The University of New South Wales, Sydney, NSW, Australia; Flora D. Salim, flora.salim@unsw.edu.au,

The University of New South Wales, Sydney, NSW, Australia; Ben Newell, The University of New South Wales, Sydney, NSW, Australia.


Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not

made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components

of this work owned by others than the author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on

servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from permissions@acm.org.


© 2024 Copyright held by the owner/author(s). Publication rights licensed to ACM.

Manuscript submitted to ACM


Manuscript submitted to ACM 1


2 Emma R. Casolin, Flora D. Salim, and Ben Newell


More recently, evidence has suggested that, in order to support more appropriate human-AI reliance, explanations


of AI need to be sufficiently engaged with by users for them to be used to verify AI decisions. Thus, a greater


understanding of the qualities of explanations that increase engagement with XAI is necessary. Prior work has


found that explanations that are easier to parse are more likely to be engaged with and subsequently used to verify AI


decisions. Furthermore, the style of explanation, whether it is a feature-based explanation highlighting important


features for the model's decision or an example-based explanation displaying examples of similar model inputs and


outputs, may also influence how people engage with explanations and the process of verifying the outputs of the AI


system generating them. However, this research has thus far only explored over-reliance, ignoring alternative types


of reliance, and has not quantified reliance with respect to uninfluenced human decision-making.


To address these limitations in prior reliance research, models of human-AI reliance that frame the relationship


as a casewise difference between human decisions with and without AI support have been proposed [5, 37]. These


frameworks allow for the comparison of XAI methods along standardised scales, considering both over- and under

reliance on AI, but have not yet been used to directly compare different styles of explanations. Thus, an understanding


of the effects of explanation style on human-AI reliance, including how different styles of XAI may interact in human-AI


collaboration scenarios, is missing from the literature. Based on these limitations, we propose the following two research


questions to guide our work:


RQ1: Do people exhibit different degrees of appropriate reliance when supported by feature-based compared to


example-based explanations, and what are the effects of combining these explanation styles?


RQ2: What is the relationship, if any, between interpretability and appropriate human-AI reliance?


Our work addresses these research questions by evaluating the individual and combined influences of feature-based


and example-based explanation styles on appropriate human-AI reliance. We measure the impact of these interventions


on human-AI decision-making through a two-part, between-subjects randomised experiment exploring reliance and


interpretability. Mirroring prior work, [9, 17, 46, 49] we do not find evidence towards a positive effect of feature-based,


example-based, or combined feature- and example-based explanations on any form of reliance compared to a control


condition where AI advice is provided without explanations. Furthermore, we find that explanation styles containing


examples are associated with increased reliance on incorrect AI recommendations, despite appearing to improve the


interpretability of model predictions. We conclude by contextualising our findings in the literature and exploring


opportunities for future work.


# 2 Background and Related Work


The complexity of Artificial Intelligence (AI) systems is rapidly increasing to facilitate improved performance and


capabilities, often consequently leading to decreased interpretability. This difficulty in understanding the reasoning


behind AI model decisions and predicting its future behaviour can lead to issues such as the undetected


presence of bias [10, 48], barriers to seeking recourse for people who are negatively impacted by model outputs [21, 26],


and the inability to learn new knowledge or techniques from insights made by a model.


# 2.1 Explanations of AI Systems


Explainable Artificial Intelligence (XAI) is a collection of methods proposed to improve the transparency and inter

pretability of AI models. XAI seeks to improve human understanding of AI decision-making by providing explanations


of its behaviour and outputs, with the ultimate goal of supporting more appropriate usage of these systems. There are


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 3


several dimensions across which XAI methods may differ, starting at the level of interpretability at which explanations


are generated. For simple, glass-box models, exposed model internals can constitute a complete explanation. This style


of direct interpretability includes all possible information regarding the model's decision-making process and is thus


always entirely faithful. However, the large amount of information present in this style of explanation can lead


to information overload and an overall decrease in understanding, failing to achieve the purpose of XAI. In


contrast to direct interpretability, post-hoc explanations are an alternative approach to XAI that approximates the


underlying model. Although this implies a loss of information, the resulting simplification can lead to explanations


that are easier for humans to understand due to our preference for explanations with fewer causes [4, 30].


XAI methods can additionally be differentiated based on their style of explanation. Two common styles of explanation


are feature-based and example-based. Feature-based methods calculate the importance, or contribution, of each feature


present in the input towards the final output of the model. Some feature-based methods calculate feature importance


scores based on model internals, such as Grad-CAM, Integrated Gradients, and SmoothGrad. Other


feature-based methods, such as LIME and SHAP, instead generate a surrogate model based on the inputs


and outputs of the underlying model from which feature importance scores can be directly observed. In contrast to


feature-based methods, example-based XAI methods provide explanations through examples, which can be prototypical,


similar, or counterfactual. Prototype explanations generate examples highlighting the prototypical aspects of a class


that are important for classification, designed to resemble human reasoning styles.


# 2.2 Human-AI Collaboration


Integrating AI into existing human decision-making pipelines [1, 5], introduces the concept of human-AI collaboration

. Such a process allows an AI agent to make recommendations without removing human accountability over


the outcomes of the final decision. Prior research [1, 9, 17, 46, 49] has found that XAI often leads humans to


accept incorrect model predictions without verifying them, typically referred to as over-reliance [7, 44]. Prior work


[3, 8, 14, 16, 24] has suggested that this over-reliance is due to the mere presence of explanations invoking cognitive


biases and heuristics that inevitably lead to blind trust in, and deference to, the AI model. However, this theory is


flawed in that it contradicts situations in which explanations can be helpful in both human-to-human and human-AI


interactions.


In contrast to the assumption that over-reliance in human-AI collaboration is inevitable, work by Vasconcelos et al.

 suggests that over-reliance is instead a choice arising out of weighing the costs and benefits of using an explanation


to verify the AI. If the cost of engaging with an explanation, in terms of time or cognitive effort, is greater than the cost


of blindly following the AI, in terms of the risk of accepting an incorrect prediction, then a rational user would choose


not to verify the AI. Similarly, increasing the benefit of a correct final decision, such as through monetary reward, will


increase the benefit of using the explanation to verify the AI's prediction, increasing the likelihood of engagement.


Over a series of five studies, Vasconcelos et al. found evidence in support of their hypotheses that explanations can


reduce over-reliance when they are easier to understand and that people will choose more frequently to engage with


explanations when higher performance is incentivised. This finding is further supported by evidence that people are


willing to wait longer to receive AI advice when completing more difficult tasks where the cost of waiting for this


support may be perceived as lower than the cost of completing the task without it. Although this theory can explain


why explanations do not improve AI-supported decision-making in all circumstances, some limitations prevent its


generalisation to XAI in human-AI collaboration scenarios.


Manuscript submitted to ACM


4 Emma R. Casolin, Flora D. Salim, and Ben Newell


# 2.3 Comparing Explanation Styles


Despite the abundance and variety of existing XAI methods, research comparing the efficacy of different styles of


explanations is largely conflicting. Jeyakumar et al. compared participants' subjective perceptions of the utility


of feature-based superimposition-style explanations and explanation-by-example, finding a strong preference for


example-based explanations across a variety of input domains provided the examples were visually similar. Wang and


Yin compared feature-based and example-based explanations on their ability to increase understanding of an AI


model, determine the level of uncertainty of the model, and calibrate their reliance on the model, however, they found


conflicting results across all three metrics. Du et al. compared feature-contribution and example-based explanations


in a clinical setting, finding no significant differences between these methods on recommendation acceptance rate,


while in a similar study using an image classification task, Humer et al. identified no significant effect of feature

contribution methods and a positive effect of example-based methods for identifying incorrect AI advice only. Without


a deeper understanding of how humans engage with and reason about XAI in human-AI collaboration scenarios, these


conflicting findings cannot be accounted for.


A holistic understanding of human-AI collaboration with XAI must consider how people interact with both correct


and incorrect explanations. Morrison et al. investigated the influences of feature-based natural language and image


example-based XAI methods on human-AI reliance in a bird image classification task, varying the level of participant


expertise, assertiveness of AI advice, and correctness of explanations. They found that example-based explanations that


disagreed with the AI's suggestions were particularly deceptive, implying that participants may have used the accuracy


of the example-based explanations as a simple measure of trust rather than a tool to verify the AI's outputs. However,


Morrison et al. refrain from directly comparing the feature-based and example-based explanations in their study due to


concerns surrounding the equivalence of information presented between these different explanation styles, particularly


due to their different modalities. Additionally, the accuracy rate of the AI in their study was significantly higher than


that of many of the participants, making relying on the AI an inherently beneficial strategy overall.


The challenges of measuring and quantifying the effects of AI and XAI support on human-AI collaboration perfor

mance, and its relationship to reliance, are further explored in the following section.


# 2.4 Measuring and Quantifying Human-AI Reliance


There is a tendency amongst prior literature to correlate simple measures of accuracy [1, 2, 7, 9, 33, 44] or trust


[1, 9, 17, 33, 44], based only on a single AI-supported human decision, with reliance. If a human decision-maker accepts


an incorrect AI recommendation, this is classified as over-reliance, while rejecting a correct recommendation is classified


as under-reliance. All other combinations are then classed as "appropriate reliance". Under this traditional


view of human-AI reliance, summarised in the first column of Figure 1, over-reliance, and its less frequently observed


counterpart under-reliance, can be seen as simply a failure to verify AI decisions appropriately.


The main problem with the traditional view of reliance is that, without a measure of human performance on the task


both before and after being exposed to an AI intervention, it is impossible to separate true reliance on the intervention


from an outcome that may have been observed in its absence [5, 37]. The Appropriateness of Reliance (AoR) and


Technology Dominance views of reliance, summarised in the remaining columns of Figure 1, address the need for


a comparison between initial and final human decisions when measuring reliance on AI. This is achieved through a


judge-advisor system (JAS) model, shown in Figure 1. In this paradigm, the human decision-maker is the judge and the


AI is the advisor. By allowing participants to make an initial, unaided decision, it is possible to compare this decision


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 5


Table 1. Aligning terminology used in prior research when discussing reliance in human-AI collaboration scenarios. The leftmost
three columns state whether the initial human decision, AI decision and final decision are correct (1) or incorrect (0) to produce each
reliance pattern, respectively.


Initial AI Final Traditional View Appropriateness of Technology Dominance
Decision Advice Decision Reliance


0 0 0 Over-Reliance Detrimental Reliance
0 0 1 Appropriate Reliance Beneficial Under-Reliance
0 1 0 Under-Reliance Incorrect Self-Reliance Detrimental Self-Reliance
0 1 1 Appropriate Reliance Correct AI Reliance Beneficial Over-reliance
1 0 0 Over-Reliance Incorrect AI Reliance Detrimental Over-Reliance
1 0 1 Appropriate Reliance Correct Self-Reliance Beneficial Self-Reliance
1 1 0 Under-Reliance Detrimental Under-Reliance
1 1 1 Appropriate Reliance Beneficial Reliance


to the final, potentially updated one after AI advice has been received. Both the AoR and Technology Dominance


models define quantitative metrics for calculating different types of reliance that can be used to compare AI support


interventions.


Initial Decision AI Advice Final Decision


Fig. 1. The three stages of the Judge-Advisor System (JAS) Framework.


The AoR framework, proposed by Schemmer et al., was the first to address the need for comparison against


baseline human performance in measurements of reliance in human-AI collaboration research. Appropriate reliance


under the AoR framework is only defined when CTP is achieved, where the degree of appropriate reliance is defined by


the subcomponents Relative AI Reliance (RAIR) and Relative Self-Reliance (RSR). RAIR is the proportion of cases in


which humans switch from an initially incorrect decision to agree with a correct AI recommendation on their final


decision. The equation for this metric is:

N

 - CAIRi

i =0


N

 - CAi

i =0

where for each case i, CAIRi is 1 if the case matches the Correct AI Reliance pathway in Figure 1 and 0 otherwise, and


CAi is 1 if the AI recommendation is correct and the human initial decision is incorrect for this case and 0 otherwise.


The result is a value between 0 and 1, where higher values indicate more appropriate reliance on AI. Similarly, RSR


is the proportion of cases in which humans retain their initial correct decision on their final decision, rejecting an


Manuscript submitted to ACM


6 Emma R. Casolin, Flora D. Salim, and Ben Newell


incorrect AI recommendation. The equation for this metric is:


N

 - CSRi

i =0


N

 - IAi

i =0


where for each case i, CSRi is 1 if the case matches the Correct Self-Reliance pathway in Figure 1 and 0 otherwise, and


IAi is 1 if the AI recommendation is incorrect and the human initial decision is correct for this case and 0 otherwise.


The result is once again a value between 0 and 1, where higher values indicate more appropriate reliance on one's


initial intuition.


Similar to the AoR model, the Technology Dominance framework, proposed by Cabitza et al., defines metrics


based on the same pathways in Figure 1. Instead of proportions, the technology dominance framework uses odds ratios


to quantify the degree to which an AI intervention exerts positive or negative dominance over the final decision. These


metrics are Detrimental Algorithmic Aversion:


DSR N - BOR

N - DSR BOR


and Automation Bias:
DOR N - BSR

N - DOR BSR

where N is the total number of cases involving the AI intervention and DSR, BOR, DOR, and BSR are the number of


cases of Detrimental Self-Reliance, Beneficial Over-Reliance, Detrimental Over-Reliance, and Beneficial Self-Reliance


respectively, as defined in Figure 1. Values of the Detrimental Algorithmic Aversion odds ratio less than 1 indicate


positive dominance of the AI intervention, where it encourages users to accept correct AI outputs. Higher values of


Detrimental Algorithmic Aversion are indicative of lower trust and a reluctance to use AI support to correct a previously


incorrect decision. In contrast, values of the Automation Bias odds ratio greater than 1 indicate negative dominance,


in which the intervention encourages users to accept incorrect AI outputs. Higher values of Automation Bias are


associated with over-trust in an AI intervention, leading people to abandon a previously correct decision in favour of


the AI's incorrect prediction.


The AoR and Technology Dominance frameworks, providing standardised, quantitative measures of human-AI


reliance, can be used to compare multiple explanation styles across a comparative scale. However, thus far, they have


each only been used to compare feature-based XAI to a baseline of AI advice without explanations. Schemmer et


al. found that the RAIR was higher for participants who were provided with feature-based explanations of AI


recommendations compared to those not provided an explanation, however, there was no significant difference in RSR


between these conditions, suggesting that the feature-based explanations in this study were only beneficial for helping


participants identify and accept correct AI advice. Cabitza et al. applied their metrics to four of their prior studies,


identifying a higher degree of negative dominance for AI support with explanations compared to without, suggesting a


negative effect of feature-based explanations that led participants to over-rely on incorrect AI advice. They found mixed


evidence in favour of a difference in positive dominance between the presence and absence of XAI, raising further


questions surrounding the relationship between XAI and reliance. It remains unclear whether the patterns of reliance


on feature-based explanations observed in these studies extend to other styles of explanations.


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 7


# 3 Theoretical Development


In summary, there has thus far been no research directly comparing different styles of explanations that quantifies human

AI reliance compared to baseline human performance. The result of this is that prior research in this space is difficult


to compare, appearing to demonstrate conflicting findings. Chen et al. observed a disparity between participants'


explanation preferences and the explanations that were correlated with higher performance, with participants frequently


reporting that feature-based explanations were easier to use and interpret despite displaying higher accuracy with


example-based explanations. It remains unclear whether the less intuitive nature of example-based explanations that was


reported would prevent sufficient engagement with them for similar performance benefits to be observed in the absence


of a think-aloud or other cognitive forcing task. If highlighting features makes explanations more intuitive, and thus more


likely to be engaged with, but the nature of example-based explanations and their ability to demonstrate when an AI's


prediction is unreliable makes them more useful for calibrating reliance, then combining these aspects of feature-based


and example-based explanations may provide additional benefit over either of these explanation styles alone. This theory


is supported by evidence that combining explanation modalities can improve human performance in AI-supported


decisions. We see the inclusion of a combined explanation style as an important step towards understanding the


disparity in performance between feature- and example-based XAI methods under different conditions.


Another requirement for resolving disparities in the results of prior research is through using a framework with


standardised metrics to evaluate reliance. Quantifying reliance through calculated metrics, the Appropriateness of


Reliance (AoR) and Technology Dominance models provide frameworks that can be used to compare the results of


human-AI collaboration research. Furthermore, their usage of JAS models to separate the effects of an AI intervention


from unaided human decision-making isolates true reliance from other relationships in human-AI collaboration. Despite


one using proportions and the other using odds ratios, it can be observed that the AoR and Technology Dominance


metrics measure the same effects. If these two metrics are calculated for the same dataset, identical plots can be produced


by plotting RAIR on the same axis as Detrimental Algorithmic Aversion and RSR on the same axis as Automation Bias,


using inverted, logarithmic scales for Technology Dominance. In this unified view, values of the RAIR greater than 0.5


correspond with positive dominance, while values of the RSR less than 0.5 correspond with negative dominance. Due to


this equivalence, and the simpler, more easily interpretable calculations used by the AoR metrics, we have chosen to


use the AoR framework for the analysis of reliance in our study.


The original RAIR and RSR metrics proposed by Schemmer et al. take the sum of all cases together using


combined data from all participants. The result is that individual variations in baseline ability on the task between


participants can bias the calculations. Specifically, participants with lower baseline accuracy on their initial predictions


will skew the RAIR upwards and the RSR downwards, while a participant with higher baseline accuracy will skew the


RAIR downwards and the RSR upwards.


For example, imagine a task with two cases and two participants, Participant A and Participant B, who perform with

the results shown in Scenario 1 of Table 2. The casewise RAIR for this task would be calculated as 2 [=][ 0] [.] [5, which makes]

sense as a holistic measurement of Relative AI Reliance for this participant sample on these two cases since Participant


A's RAIR is 0 and Participant B's RAIR is 1. Now consider the results from Scenario 2. Again, Participant A's RAIR is 0

and Participant B's RAIR is 1, however now, the casewise RAIR has increased to 3 [=][ 0] [.] [67. Participant B's interactions]

with the AI have a larger influence on the RAIR calculation in this second example simply due to their lower initial


accuracy compared to Participant A, which has the potential to skew the result based on individual differences in


technology perception. For example, people can be hesitant to update their trust in an AI agent due to their prior


Manuscript submitted to ACM


8 Emma R. Casolin, Flora D. Salim, and Ben Newell


Table 2. Example responses for two participants completing a task with two cases under the JAS Framework in two different scenarios.
Incorrect decisions are marked as 0 while correct decisions are marked as 1.


Scenario 1 Scenario 2
Initial AI Final Initial AI Final


Case 1 0 1 0 0 1 0
Participant A
Case 2 1 1 1 1 1 1

Case 1 0 1 1 0 1 1
Participant B
Case 2 1 1 1 0 1 1


experiences or presumptions preventing new information from being able to update these prior conceptions. These


individuals may therefore display different reliance patterns due to differences unrelated to experimental manipulations.


A similar result can be shown for the RSR if Participant B has a higher initial accuracy compared to Participant A.


To account for this bias, a simple solution is to calculate the RAIR and RSR individually for each participant and take


the average of these values. However, a problem arises when using this method in cases where a participant's initial

decision is the same as the AI's prediction on every trial, resulting in the RAIR and RSR being evaluated as 0 [. While it]

is also possible for this to occur using the casewise versions of these metrics, the probability of this happening for all


cases is negligible. In these instances, we evaluate the RAIR and RSR to be 50%, which is a value representing neither


appropriate nor inappropriate reliance. This value reflects the absence of reliance since it implies one is equally likely


to rely on themselves and the AI.


# 4 Methodology


# 4.1 Chosen Human-AI Collaboration Task


A widely used task in studies evaluating human-AI collaboration is bird image classification [6, 23, 27, 32, 42, 47], as it


is a non-trivial task for human participants with a level of difficulty that can be manipulated based on the similarity


of selected species. Additionally, bird image classification is a task that AI support is used for in real-world use cases,


for example in the Merlin app, and it has been likened to other use cases for AI support, such as medical image


diagnosis. For these reasons, bird image classification is used as the task for participants to complete in our study.


Because our participants are not expected to have domain expertise in this area, we provide them with a reference


image for each species. This is to prevent a wide discrepancy in human performance, such as that observed by Morrison


et al. in their study using the same dataset.


# 4.2 Experimental Design


Our experimental design consists of two parts, outlined in Figure 2, each utilising different methodologies to measure


reliance and interpretability. There are four between-subjects explanation-style conditions:


(1) The AI prediction without an explanation (control).


(2) The AI prediction supported by a feature-based explanation.


(3) The AI prediction supported by an example-based explanation.


(4) The AI prediction supported by a combined feature- and example-based explanation.


Participants are randomly assigned to one of these conditions at the beginning of the study, remaining in the same


condition through Parts 1 and 2. We use a between-subjects design to prevent any potential effects of individual


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 9


Fig. 2. Experimental design of our study. Participants are be randomly allocated to one of four explanation-style groups after reading
and agreeing to the consent form, remaining assigned to this condition for both Part 1 and Part 2. Before beginning each Part,
participants are provided information about task followed by a short quiz to confirm their understanding.


Feature -Based Explanation Example -Based Explanation Combined Explanation
No Explanation Condition
Condition Condition Condition


Human prediction and confidence AI support


preference between different explanation styles on engagement and subsequent performance. The study is conducted


using the online survey platform Qualtrics. Participants provide their informed consent before beginning the study


and are debriefed at its conclusion. Before beginning each of the two parts of the study, participants are provided


with instructions including a description of how to interpret the explanations if allocated to a condition where the AI


provides them. Participants are required to correctly answer questions relating to this information before being allowed


to proceed in order to confirm their understanding.


4.2.1 Part 1: Judge-Advisor System. In Part 1, we use a judge-advisor system (JAS) model to measure participant reliance


on AI advice. There are 12 trials, which we identified as an appropriate number through pilot studies. Each trial comprises


three phases: the initial decision, AI support, and final decision. In the first phase, participants see the input case and


are asked to name the species of the bird in the image to the best of their ability, with the assistance of the provided


reference images. In the second phase, participants are shown the AI's prediction and an explanation, depending on


their assigned explanation-style condition. In the final phase, participants can update their final prediction, referring to


the original image, their initial decision, and the AI support. In line with the JAS model, we record participants' initial


and final decisions on each trial. We additionally ask participants to rate their confidence in the correctness of each


answer they give using a validated 5-point Likert scale. All participants view the same images across the 12 trials,


however, the presentation order is randomised.


Each of the 12 cases presented in Part 1 is assigned a complexity rating from 1 to 4 based on image quality, where


low-complexity images (1) show the bird clearly and accurately, low-medium-complexity images (2) are clear but


Manuscript submitted to ACM


10 Emma R. Casolin, Flora D. Salim, and Ben Newell


the angle or placement of the bird hides some of its defining features, high-medium-complexity images (3) have the


same problems as the previous classification with the addition of some degree of distortion affecting the image, and


high-complexity images (4) suffer from issues that severely impact visibility of the bird, such as pixelation or poor


lighting that casts the bird in shadow. Participants are not informed of the complexity rating of each bird. Rather, this


classification serves to provide additional information for our analysis.


Since individual differences in trust are a confounding factor when measuring reliance, we adopt the same


controls for mitigating trust as used by Vasconcelos et al.. Namely, the AI is not anthropomorphised, its predictions


are presented as suggestions that do not need to be accepted, and participants are not informed of their own accuracy


until the conclusion of the study to prevent them from using this information to update their perception of the AI's


accuracy between trials. Additionally, the accuracy rate of the AI is not made known to the participants beyond a


statement that the AI's accuracy was similar to that of an "average person completing this task". This accuracy rate is


set at 58% (7 out of 12 trials correct) based on the performance of participants in our pilot studies.


4.2.2 Part 2: Meta-Predictor Framework. While Part 1 of our study measures human-AI reliance, it cannot alone provide


the necessary insights to explain any differences in reliance between conditions. Part 2 addresses this by including


a measure of interpretability based on the meta-predictor framework (MPF) proposed by Colin et al.. In Part 2


of our study, participants are required to predict the AI's suggestions on four unseen images using only the provided


explanations. Since participants in the no-explanation condition do not have an explanation to assist them, they provide


a baseline measure of predictive accuracy that we can compare the explanation conditions against. This part of the study


aims to measure how effectively different explanation styles increase interpretability through human understanding of


an AI's behaviour and their ability to predict its future behaviour. As in Part 1, we ask participants to rate


their confidence in their prediction of the AI's suggestion on each trial, and all participants see the same four images in


a random order.


In Part 2, there are two within-subjects factors in addition to the between-subjects explanation-style factor. These


factors are whether the AI's suggestion for the bird is correct or incorrect and the quality of the provided explanations.


We describe how we determine the difference between high- and low-quality explanations in Section 4.3. With four


trials in Part 2, each case represents a different combination of levels of the within-subjects factors.


# 4.3 Chosen XAI Methods


In order to isolate the effects of explanation-style from differences in information, an important consideration when


selecting the XAI methods for our study is the equivalence of information presented by different generation methods.


We note how we address this challenge in this section.


4.3.1 Example-Based Explanations. Our example-based explanations are generated using ExMatchina. ExMatchina


constructs explanations by returning the nearest neighbours to the input image from the training data as determined


by comparing the cosine similarity of their feature activations at the final convolutional layer. We use the top two


returned examples for the explanations in our study, which was the same number used by Chen et al.. ExMatchina


produces higher-quality explanations for larger training datasets, as this increases the probability that the produced


nearest neighbours will be more visually similar to the input image. We considered this factor in our decision to


use the CUB dataset for our study, which has approximately 60 training images per class. Unlike Chen et al., we


do not provide ground truth or AI-predicted labels alongside the examples since this could be considered additional


information not present in feature-based explanations.


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 11


4.3.2 Feature-Based Explanations. Our feature-based explanations are generated using SHAP. SHAP is commonly


used for generating explanations of AI due to its construction of global explanations that can be applied to local


instances, which improves the stability of its explanations across multiple runs for the same input. SHAP utilises


the concept of Shapley values, from game theory, to estimate the contribution of each feature to the final output of


the model. For image inputs, the features are taken to be the pixel values. Because ExMatchina is a model-transparent


XAI method, we use a model-transparent implementation of SHAP (GradientExplainer) so that our feature-based and


example-based explanation styles rely on similar assumptions. This SHAP implementation has also been compared


against ExMatchina previously in a study evaluating subjective user preference.


4.3.3 Combined Explanations. Our combined explanations are generated by applying SHAP to the two nearest neigh

bours determined by ExMatchina. We use the similarity of the SHAP feature highlighting on these examples and


the original input image as an approximation for the equivalence of information between the feature-based and


example-based explanations. Figure 3 shows the SHAP feature-based explanations generated for an image and its


nearest examples as returned by ExMatchina. From this comparison, we see that the feature-contributions of the three


images are highly similar, indicating that these images would be classified based on similar features which are present


across all three images. By extension, we argue that the relevant information for determining how the AI classified this


image is approximately equivalent between our feature-based, example-based, and combined explanations.


Fig. 3. Equivalence of information as determined through combined explanations between an image (left) and its two nearestneighbour example-based explanations (middle and right). Ovals of the same colour indicate features shared across the three images.


Original Image Example 1 Example 2


4.3.4 Explanation Quality. In Part 2 of our study, one of the variables we explore is how the quality of an explanation


affects its utility for interpretability via predictive accuracy. A low-quality explanation that does not completely


align with the prediction it is explaining should be less interpretable than a high-quality explanation that perfectly


describes the AI's decision. We define a low-quality explanation as one where only one of the examples returned by


ExMatchina matches the AI's suggested species, whereas in high-quality explanations both examples match. Because of


the assumption we make of the equivalence of information between feature-based and example-based explanations


stated previously, we categorise the feature-based and combined explanations associated with the input case for which a


Manuscript submitted to ACM


12 Emma R. Casolin, Flora D. Salim, and Ben Newell


low-quality example-based explanation is generated as low-quality as well. While Part 1 of our study does not explicitly


consider the effects of explanation quality, we include two images for which low-quality explanations are generated


(one each where the AI suggestion is correct and incorrect). This number is too small to form a comparison group,


however, it creates a more realistic set of explanations given that XAI is imperfect.


# 4.4 Recruitment


We use three methods of recruitment to diversify our participant pool. We recruit 95 participants from the crowdsourcing


platform Amazon Mechanical Turk (MTurk), 46 participants through convenience sampling in person at the university


associated with our research, and 133 participants through the university's mandatory research participation program


for undergraduate psychology students. In order to select high-quality participants in our recruitment using MTurk we


follow the recruitment strategies used by Colin et al., enforcing that participants of our study have completed at


least 10000 tasks and have a task acceptance rate of greater than 98%. Participants recruited through MTurk receive a


base compensation of $1.20 USD and an additional bonus of $0.05 USD for each correct final prediction to incentivise


engagement with the task and explanations. Participants recruited from the university are reimbursed with either


a voucher for a free coffee (worth $5.00) or course credit representative of 15 minutes of research participation.


# 4.5 Analysis


As discussed in Section 3, our analysis involves using a "by-participant" variation of the Appropriateness of Reliance


(AoR) framework proposed by Schemmer et al.. Our use of the JAS model in Part 1 allows us to calculate the


Relative AI Reliance (RAIR) and Relative Self-Reliance (RSR) of participants in each condition. We also use participants'


initial and final accuracy to compute complementary team performance (CTP) and the percentage change between


initial and final accuracy, which we define as Accuracy Shift. Accuracy Shift factors out any potential improvement


in baseline accuracy throughout the task, making it a more direct measure of the ability of participants to utilise AI


support when providing their final answers compared to CTP.


Accuracy Shift is calculated for each participant using the equation:


12

 - Fn - In

n =1

12

for each input case n, where Fn is 1 if the participant's final decision was correct and 0 otherwise and In is 1 if the


participant's initial decision was correct and 0 otherwise. We use a similar formula to calculate the change in participant


confidence between with initial and final decisions. In Part 2 we only analyse participants' predictive accuracy as a


binary value for each case dependent upon whether or not they correctly predict the AI's suggestion.


Due to the conflicting findings of prior work discussed in Chapter 2, our research is exploratory in nature, thus


utilising a post-hoc analysis strategy. Calculating the AoR metrics per each participant allows us to conduct an analysis


based on the spread of the distribution of data across all participants, or analyses of variance. Although surveys have


been used extensively in prior human-centered XAI research to analyse the subjective feelings of participants towards


the explanations and their own self-perceived performance or confidence, we limit our analysis of subjective data due


to its poor reliability and high susceptibility to demand characteristics. Such subjective measures additionally do not


tend to align with objective measures in XAI research that utilise them [7, 31, 43, 46].


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 13


Table 3. Descriptive results from Part 1 of the study


Condition Initial Final Accuracy Confidence RAIR (SD) RSR (SD)
Accuracy (SD) Accuracy (SD) Shift (SD) Shift (SD)


No Explanation 59.7% (19.0%) 66.9% (19.3%) 7.2% (10.7%) 0.21 (0.75) 41.1% (37.3%) 88.8% (24.1%)
Feature-Based 61.4% (20.9%) 65.5% (17.7%) 4.1% (10.1%) 0.18 (0.75) 33.1% (30.7%) 83.7% (23.6%)
Example-Based 58.1% (18.5%) 65.4% (16.1%) 7.3% (13.3%) 0.19 (0.78) 49.0% (29.7%) 79.3% (29.9%)
Combined 57.8% (13.5%) 63.4% (12.8%) 5.5% (11.3%) 0.18 (0.83) 50.4% (33.2%) 72.7% (33.0%)


# 5 Results


We begin our analysis with the results from the JAS trials in Part 1, measuring human-AI reliance. The descriptive results


from this part of the study are presented in Table 3. Results are reported as confidence intervals (CIs) for comparison


differences in dependent variable units.


# 5.1 Complementary Team Performance


Complementary Team Performance (CTP) measures the influence of an AI intervention on human-AI team decision

making compared to baseline human and AI performance individually. Using a Bonferroni-t analysis, we find that


participants are more accurate in their final decisions than their initial ones across all conditions (No Explanation


99% CI: 2.6-11.8%; Feature-Based 95% CI: 0.4-7.8%; Example-Based 99% CI: 2.8-11.7%; Combined 99% CI: 1.0-10.0%).


Similarly, we use Bonferroni-adjusted one-sample t-tests to compare final accuracy against the AI's accuracy of 58%,


finding a positive, significant difference for all conditions (No Explanation 99% CI: 4.5-12.7%; Feature-Based 99% CI:


2.3-12.1%; Example-Based 99% CI: 1.6-12.4%; Combined 95% CI: 0.6-9.5%). Thus, we can conclude that CTP is achieved


by participants provided with any of the three forms of XAI included in this study and those without XAI support


(Figure 4).


100%


80%


60%


40%


20%


0%


No Explanation Feature-Based Example-Based Combined


Fig. 4. Participants' average initial and final accuracy per experimental condition, relative to the accuracy of the AI.


Manuscript submitted to ACM


14 Emma R. Casolin, Flora D. Salim, and Ben Newell


In the calculation of CTP in Figure 4, responses from all participants in each condition are averaged, masking


individual performance relative to the AI. CTP proposes to measure the effect of AI support irrespective of differences


in performance between humans and AI, however, by averaging across all participants, the ability to compare


the effect of AI support on final accuracy between individuals who initially perform above or below the AI's level of


accuracy is lost. In Figure 5 we separate participants in each condition by their baseline ability on the task, where those


classified as having "low ability" have an average score across all trials that is less than the AI's accuracy of 58.3% and


those classified as having "high ability" perform with an average accuracy greater than or equal to this value. Once


participant ability on the task is accounted for, we see that an improvement in final accuracy over initial accuracy is


seen in all low-ability participants (No-Explanation 99% CI: 1.9-21.1%; Feature-Based 99% CI: 0.6-17.3%; Example-Based


99% CI: 5.6-22.0%; Combined 95% CI: 1.4-14.7%) and for high-ability participants in the No-Explanation condition


(90% CI: 0.2-10.0%). However, because a positive significant difference between AI and final accuracy is only observed


in high-ability participants (No Explanation 99% CI: 7.4-19.1%; Feature-Based 99% CI: 9.3-22.5%; Example-Based 99%


CI: 8.5-23.6%; Combined 99% CI: 8.6-22.7%), we see that the requirements for CTP are only achieved by high-ability


participants not provided with an explanation, and the significance of this finding is weak.


100%


80%


60%


40%


20%


0%


|Initial Accuracy<br>Final Accuracy|Col2|Col3|Col4|
|---|---|---|---|
|||||
|AI|AI|AI|AI|
|||||
|||||
|Low<br>High<br>No Explanation|Low<br>High<br>Feature-Based|Low<br>High<br>Example-Based|Low<br>High<br>Combined|


Fig. 5. Participants' average initial and final accuracy per experimental condition split by task ability, relative to the accuracy of the
AI. Error bars show standard error of the mean.


# 5.2 Accuracy Shift


Following the observed differences in CTP between participants of differing ability on the task, we compare the


Accuracy Shift of high- and low-ability participants across explanation-style conditions and task complexities in Figure


6. We group low- and low-medium-complexity images together into a single low-complexity group, and medium-high

and high-complexity images together as high-complexity based on our preliminary observation that there was little


difference in participant performance within these pairs.


We analyse this data through a post-hoc Scheffe contrasts analysis. Accuracy Shift is higher for low- compared


to high-complexity images across all conditions for both low-ability (99% CI: 13.1-78.0%) and high-ability (99% CI:


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 15


No Explanation


Feature-Based


Example-Based


Combined


-10% -5% 0% 5% 10% 15% 20%


Low Complexity High Complexity


(a) Low-Ability


No Explanation


Feature-Based


Example-Based


Combined


-10% -5% 0% 5% 10% 15% 20%


Low Complexity High Complexity


(b) High-Ability


Fig. 6. Accuracy Shift on low- and high-complexity cases for participants with low (a) and high (b) ability on the task. Error bars
show standard error of the mean.


5.3-13.4%) participants. We see little difference in Accuracy Shift between conditions on low-complexity cases, while


greater variability in performance can be observed for high-complexity cases. In the case of low-performing participants


(Figure 6a), the greatest improvement in accuracy is seen for those provided with example-based explanations, while


little improvement is seen for feature-based or combined explanations. For higher-performing participants (Figure


6b), all forms of XAI are associated with a worsening of accuracy, whereas having no explanation appears to lead to


improvement. Although these comparisons are interesting to consider, they are not statistically significant.


# 5.3 Appropriateness of Reliance


We now explore differences in human-AI reliance across explanation styles through Relative AI Reliance (RAIR)


and Relative Self-Reliance (RSR). We begin by conducting separate ANOVAs for each of these two metrics to test


whether there are differences between conditions, finding both to be significant (RAIR: F = 4 . 152 , p = 0 . 007; RSR:


F = 4 . 016 , p = 0 . 008). Thus, we can continue with a post-hoc Scheffe contrasts analysis to further explore comparisons


between explanation styles. The findings from this analysis are shown in Figure 7.


For the RAIR, we find a strong significant difference between feature-based explanations and any explanation style


with examples (example-based and combined explanations), where the RAIR is 0.3-32.9% higher for explanations with


examples (99% CI). This comparison is also significant when combining the no-explanation group with the feature-based


explanation group, for which the 95% CI for the difference is 1.5-23.7%. We conduct Bonferroni-adjusted one-sample


t-tests to test for the presence or absence of positive dominance, which we take to be values of the RAIR greater


or less than 50%, respectively. From this analysis, we find that feature-based explanations ( t = -4 . 639, p = 0 . 000) and


having no explanation ( t = -1 . 934, p = 0 . 057) each do not exert positive dominance. There is insufficient evidence to


determine whether example-based explanations ( t = -0 . 295, p = 0 . 769) or combined explanations ( t = 0 . 097, p = 0 . 923)


exert positive dominance or not.


In contrast to the RAIR, for the RSR we see poorer reliance when participants are provided explanations with


examples compared to without. For participants who receive explanations with examples, their RSR is 1.0-24.6% lower


compared to those who receive no explanations (95% CI) and 0.8-19.8% lower when including participants provided


with feature-based explanations alongside those who do not receive an explanation (95% CI). Again, we conduct


Bonferroni-adjusted one-sample t-tests, this time to test for the presence or absence of negative dominance, which


we define as the RSR being less than or greater than 50%, respectively. Across all four conditions, we find that negative


Manuscript submitted to ACM


16 Emma R. Casolin, Flora D. Salim, and Ben Newell


1


0.8


0.6


0.4


0.2


0


|Col1|Col2|
|---|---|
||No Explanation<br>Feature-Based<br>Example-Based<br>Combined|


0 0.2 0.4 0.6 0.8 1

Relative AI Reliance (RAIR)


Fig. 7. Appropriateness of reliance across explanation styles. Error bars show standard error of the mean.


dominance is not exerted (No Explanation: t = 12 . 979, p = 0 . 000; Feature-Based: t = -12 . 024, p = 0 . 000; Example-Based:


t = 8 . 208, p = 0 . 000; Combined: t = 5 . 674, p = 0 . 000).


Because we saw an effect of participant task ability and case complexity on Accuracy Shift, we similarly analyse


AoR across these factors, performing separate post-hoc Scheffe analyses for high- and low-ability participants. We


find a statistically significant, but weak, improvement in RAIR when high-ability participants receive explanations


with examples compared to those who receive feature-based explanations (90% CI: 1.6-28.6%), which is not present for


low-ability participants. The opposite is seen for the RSR of high-ability participants, where there is a weak decrease


between participants who receive feature-based explanations compared to those who receive an explanation containing


examples (90% CI: 0.9-21.8%). We also observe that, averaged across conditions, high-ability participants display higher


RAIR (95% CI: 1.2-15.8%) and RSR (95% CI: 0.3-12.1%) on high- compared to low-complexity cases.


# 5.4 Interpretability


Interpretability is explored in Part 2 of the study. We conduct a post-hoc Scheffe contrasts analysis to test the significance


of simple effects and interactions between explanation quality (Quality), AI correctness (Correctness), and explanation


style (Condition). All of the following results are provided with 95% simultaneous confidence interval estimates.


Beginning with the interaction between Quality and Condition, high-quality explanations result in 25.5% (±23 . 0%) better


predictive accuracy than low-quality explanations for explanations with examples (i.e. example-based and combined


explanations) compared to feature-based explanations. Furthermore, when the AI's prediction is incorrect this difference


increases to 33.1% (±31 . 6%). Overall, these findings suggest that the quality of XAI explanations is important when


considering interpretability, particularly for explanations provided through examples.


For the interaction between Correctness and Condition, we find that predictive accuracy is lower on cases where the


AI's prediction is incorrect compared to when it is correct by 10.5% (±7 . 0%). This effect is stronger when a feature-based


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 17


explanation is provided compared to when an explanation with examples is provided by 37.2% (±24 . 8%). Additionally,


we find that this effect of AI correctness is enhanced for high-quality explanations, for which the difference in predictive


accuracy between correct and incorrect AI suggestions is 44.8% (±30 . 4%) wider for participants given feature-based


explanations compared to those given explanations with examples. Taken together, this suggests that correct AI


suggestions are more predictable than incorrect ones, but that explanations through examples can help humans more


accurately identify the predictions made by an unreliable AI agent.


We finish by highlighting significant simple effects identified in our analysis. First, when the AI's prediction is


incorrect, humans are 33.6% (±21 . 0%) better at guessing its prediction when provided with high-quality explanations with


examples compared to high-quality feature-based explanations. Second, when the AI's prediction is correct, humans are


29.1% (±23 . 9%) worse at guessing its prediction when provided with low-quality explanations with examples compared


to low-quality feature-based explanations. Overall, we find that the effect of explanation style on AI interpretability is


mediated by both the accuracy of AI and the quality of the provided explanations.


# 6 Discussion


Our results explore the influence of explanation style on performance in human-AI collaboration tasks. We compare


feature-based, example-based, and combined feature- and example-based explanations against a baseline control


condition of AI suggestions without explanations to answer our research questions. We measure the effects of explanation


style on reliance in the first part of our study, addressing RQ1, and on interpretability in the second part, exploring RQ2.


In this section, we summarise and contextualise the main findings of this study.


Our findings indicate that humans display more appropriate AI reliance when provided XAI containing


examples compared to feature-based XAI. In our analysis, we observe lower values of RAIR for feature-based


compared to example-based and combined explanations, which is significant at the 0.01 level. This suggests that


humans are better at using information about correct AI reasoning to calibrate their reliance on an AI agent when


this information is presented through examples, as opposed to feature highlighting. This is further supported by our


finding that explanation quality has a greater effect on AI interpretability for explanations provided through examples


compared to feature-based ones, implying that incorporating examples into explanations of AI is particularly beneficial


for appropriate trust calibration on reliable AI systems, provided the explanations are of good quality.


Although we observe lower values of RAIR in participants who receive feature-based compared to no explanations,


this difference is not statistically significant. This aligns with the results of Cabitza et al., who reported negligibly


poorer reliance on correct AI advice for participants shown feature-based explanations compared to those who were


not. Contrastingly, Schemmer et al. observed the opposite result in their study, where higher values of RAIR were


displayed by participants receiving feature-based explanations compared to no XAI. A difference between the studies in


these papers is that, while those analysed by Cabitza et al. featured multiclass image classification tasks similar to ours,


the study conducted by Schemmer et al. involved binary text classification instead. There may be different effects of


explanation style across task modalities and domain magnitude, which requires further exploration.


We find that humans exhibit less appropriate self-reliance when provided explanations containing


examples compared to the absence of examples. The natural consequence of the increased effect of explanation


quality for example-based explanations on interpretability and subsequent reliance is that high-quality example-based


explanations can be deceiving. In our study, we observe a significantly lower RSR of participants who are provided with


any form of XAI containing examples compared to those who are not. This result remains significant when comparing


XAI containing examples with AI suggestions without explanations, but not feature-based XAI alone. Our findings align


Manuscript submitted to ACM


18 Emma R. Casolin, Flora D. Salim, and Ben Newell


with several studies in the literature. For example, despite seeing minimal difference between the RSR of participants


provided with feature-based compared to example-based explanations, Morrison et al. noted that domain experts


were more susceptible to being misled by correct example-based explanations of incorrect AI recommendations. Because


the majority of the explanations used in our study aligned with their definition of correct explanations (which is similar


to our definition of high-quality explanations), this could explain why our participants, who had reference images to


assist them, were similarly misled. Similar to our findings, Wang and Yin found that feature-based explanations


helped individuals accept correct AI predictions and reject incorrect ones, but this was not true for example-based


explanations. In the context of these findings, our results suggest that example-based explanations do not support


humans' ability to correctly verify AI outputs, but rather, they can lead to overconfidence in incorrect AI suggestions.


This is particularly concerning when considered alongside our finding that people are better at identifying incorrect AI


predictions through the information provided in examples compared to feature highlighting. This creates the potential


for high-quality example-based explanations to mislead users into accepting unreliable AI recommendations, which


was the outcome observed by Morrison et al. in their study.


Combined feature- and example-based explanations do not support better human-AI reliance compared to


feature-based and example-based explanation styles alone. Overall, we find insufficient evidence to suggest that


the RAIR or RSR of participants supported through combined explanations differ from those who receive example-based


explanations alone. Similarly, differences between the reliance of participants provided with combined and feature

based explanations are only of statistical significance when combined explanations are grouped with example-based


explanations in analyses. Taken together, we conclude that combined feature- and example-based explanations are no


more beneficial or detrimental for human-AI reliance than the component explanations they subsume. This finding


somewhat contradicts those of Robbemond et al., who found that explanations that combined different presentation


modalities were more beneficial for decision accuracy. However, since the combined explanations in our study involve


two visual forms of explanation, it may be the case that combining explanations of the same modality simply increases


the amount of information available, leading to information overload rather than improved understanding. Because


the combination of explanation styles in our study is designed to present repeated information in different ways rather


than additional, new information, this heightens the risk of providing unnecessary information that may become


overwhelming to users.


Baseline human performance and case complexity can influence human-AI reliance. We observe differences


between both high- and low-ability participants and high- and low-complexity cases, aligning with research suggesting


that XAI is more effective when it caters to its users and context. In our analysis of RAIR and RSR across participant


abilities, we find that the differences in reliance across explanation styles seen when averaging across all participants


are only present in the high-performing group. This group also displays more appropriate reliance across all conditions


on high- compared to low-complexity cases. This is in contrast to our observation that people with low ability on the


task show a greater improvement in accuracy between their initial and final answers, which is particularly noticeable


on high-complexity cases, as seen in our analysis of Accuracy Shift. This discrepancy highlights the difference between


reliance and changes in decision accuracy, supporting the notion that these are two separate concepts that cannot


be used interchangeably. Improvements in the performance of low-ability participants in our study are solely


attributable to the support of AI recommendations more accurate than their own predictions. In contrast, despite


showing minimal improvement in accuracy, high-ability participants demonstrate distinct patterns of reliance that


respond to task complexity and explanation style. If the higher baseline performance of these participants was due to a


Manuscript submitted to ACM


Evaluating the Influences of Explanation Style on Human-AI Reliance 19


higher degree of engagement with the task, and by extension the explanations, our findings also provide support for


the role of engagement in the cost-benefit theory of human-AI reliance.


Increased interpretability does not necessarily promote better human-AI collaboration. Despite example

based and combined explanations being more helpful for determining the recommendation made by an AI agent when


it is incorrect or when the explanations are of high quality, this does not correspond with more appropriate reliance.


Because almost all of the explanations in Part 1 meet our definition of high-quality explanations, we would expect both


the RAIR and RSR of participants who receive explanations containing examples to be higher than those who do not if


interpretability improves reliance, however, this is seen only for the RAIR. Additionally, we observe that explanations


containing examples only help participants predict the AI's suggestion when the examples appear significantly different


from the original image, as is the case for the high-quality explanation of an incorrect AI suggestion. This raises the


question of whether our experimental design in Part 2 truly measures interpretability; although participants could


determine what the AI was predicting, this does not mean they were able to determine why it made that prediction.


# 7 Limitations and Future Work


A methodological limitation of our study is the inclusion of only one method of feature-based XAI and one method


of example-based XAI. We make the simplifying assumption that SHAP represents all types of feature-based and


ExMatchina represents all types of example-based explanations, however, this assumption is unlikely to be true in


practice and limits the generalisability of our findings. Further research should examine and compare alternative XAI


methods within and beyond feature-based, example-based, and combined explanation styles. The consideration of


additional input and explanation modalities, such as textual inputs and natural language explanations, is also an avenue


for future work, particularly in the context of different human-AI collaboration tasks.


The explanations used in our study are additionally constrained by a lack of control over the amount of information


presented. The combined explanations contain a large amount of information, which likely resulted in some amount


of information overload. Simplified feature highlighting or the application of image augmentation techniques to


the examples to more clearly emphasise feature similarities in combined explanations may help to reduce this effect.


Furthermore, despite controls for the equivalence of useful information between feature-based and example-based


explanations, there is a possibility that the additional uninformative information contained in image examples may


influence participant engagement with example-based and combined explanations. The inclusion of additional


control conditions for uninformative or incorrect explanations may help to further clarify this relationship.


Finally, as has been mentioned in prior work, there is still a need to explore human-AI reliance beyond the cases


where an AI intervention makes a suggestion that differs from the initial human decision. Adding to this, we note


that the relationship between human decision-making and AI support becomes more complex when extended beyond


binary decisions, such as with the multiclass classification task used in this study. The reliance frameworks explored


throughout this paper consider the correctness of a human or AI prediction through a binary lens, however, if there are


multiple correct or incorrect answers, or if there is a hierarchy to the correctness of answer choices, then switching to


or from an AI's suggestion has a wider range of potential consequences. Additionally, in real-life decisions, there is


often more to consider than the correctness of an outcome, such as the risks and implications of accepting it. Future


XAI reliance research should consider scenarios that require maximising several goals to more closely replicate the


stakes of real-world decisions.


Manuscript submitted to ACM


20 Emma R. Casolin, Flora D. Salim, and Ben Newell


# 8 Conclusion


Adding to the growing body of research investigating the effectiveness of XAI for improving human-AI collaboration,


our work evaluated the influence of two different explanation styles, feature-based and example-based, on human-AI


reliance patterns. Additionally, we investigated the effects of combining these explanation styles to provide a better


understanding of how different forms of XAI may complement each other to increase user understanding. We conducted


a two-part study exploring reliance and interpretability across these three explanation styles, comparing them to a


control condition where AI advice was provided without explanations. The findings of our research contribute towards


recognising and improving the qualities of XAI that promote more positive human-AI collaboration outcomes.


# References

 Gagan Bansal, Tongshuang Wu, Joyce Zhou, Raymond Fok, Besmira Nushi, Ece Kamar, Marco Tulio Ribeiro, and Daniel Weld. 2021. Does the

Whole Exceed its Parts? The Effect of AI Explanations on Complementary Team Performance. In Proceedings of the 2021 CHI Conference on Human

Factors in Computing Systems (<conf-loc>, <city>Yokohama</city>, <country>Japan</country>, </conf-loc>) (CHI '21) . Association for Computing

Machinery, New York, NY, USA, Article 81, 16 pages. https://doi.org/10.1145/3411764.3445717
 Zana Bucinca, Phoebe Lin, Krzysztof Z. Gajos, and Elena L. Glassman. 2020. Proxy tasks and subjective measures can be misleading in evaluating

explainable AI systems. In Proceedings of the 25th International Conference on Intelligent User Interfaces . ACM. https://doi.org/10.1145/3377325.3377498
 Adrian Bussone, Simone Stumpf, and Dympna O'Sullivan. 2015. The Role of Explanations on Trust and Reliance in Clinical Decision Support

Systems. In Proceedings of the 2015 International Conference on Healthcare Informatics (ICHI '15) . IEEE Computer Society, USA, 160-169. https:

//doi.org/10.1109/ICHI.2015.26
 Ruth M.J. Byrne. 2023. Good Explanations in Explainable Artificial Intelligence (XAI): Evidence from Human Explanatory Reasoning. In Proceedings

of the Thirty-Second International Joint Conference on Artificial Intelligence, IJCAI-23, Edith Elkind (Ed.). International Joint Conferences on Artificial

Intelligence Organization, 6536-6544. https://doi.org/10.24963/ijcai.2023/733 Survey Track.
 Federico Cabitza, Andrea Campagner, Riccardo Angius, Chiara Natali, and Carlo Reverberi. 2023. AI Shall Have No Dominion: On How to

Measure Technology Dominance in AI-Supported Human Decision-Making. In Proceedings of the 2023 CHI Conference on Human Factors in

Computing Systems (Hamburg, Germany) (CHI '23) . Association for Computing Machinery, New York, NY, USA, Article 354, 20 pages. https:

//doi.org/10.1145/3544548.3581095
 Chaofan Chen, Oscar Li, Chaofan Tao, Alina Jade Barnett, Jonathan Su, and Cynthia Rudin. 2019. This Looks Like That: Deep Learning for

Interpretable Image Recognition. [arXiv:1806.10574 [cs.LG]](https://arxiv.org/abs/1806.10574)
 Valerie Chen, Q. Vera Liao, Jennifer Wortman Vaughan, and Gagan Bansal. 2023. Understanding the Role of Human Intuition on Reliance in Human-AI

Decision-Making with Explanations. Proc. ACM Hum.-Comput. Interact. 7, CSCW2, Article 370 (oct 2023), 32 pages. https://doi.org/10.1145/3610219
 Michael Chromik, Malin Eiband, Felicitas Buchner, Adrian Kruger, and Andreas Butz. 2021. I Think I Get Your Point, AI! The Illusion of Explanatory

Depth in Explainable AI. In 26th International Conference on Intelligent User Interfaces (College Station, TX, USA) (IUI '21) . Association for Computing

Machinery, New York, NY, USA, 307-317. https://doi.org/10.1145/3397481.3450644
 Eric Chu, Deb Roy, and Jacob Andreas. 2020. Are Visual Explanations Useful? A Case Study in Model-in-the-Loop Prediction. [arXiv:2007.12248 [cs.LG]](https://arxiv.org/abs/2007.12248)
 Julien Colin, Thomas Fel, Remi Cadene, and Thomas Serre. 2023. What I Cannot Predict, I Do Not Understand: A Human-Centered Evaluation

Framework for Explainability Methods. [arXiv:2112.04417 [cs.CV]](https://arxiv.org/abs/2112.04417)
 Finale Doshi-Velez and Been Kim. 2017. Towards A Rigorous Science of Interpretable Machine Learning. arXiv:1702.08608 [stat.ML] https:

//arxiv.org/abs/1702.08608
 Yuhan Du, Anna Markella Antoniadi, Catherine McNestry, Fionnuala M. McAuliffe, and Catherine Mooney. 2022. The Role of XAI in Advice-Taking

from a Clinical Decision Support System: A Comparative User Study of Feature Contribution-Based and Example-Based Explanations. Applied

Sciences 12, 20 (2022). https://doi.org/10.3390/app122010323
 Upol Ehsan, Samir Passi, Q. Vera Liao, Larry Chan, I-Hsiang Lee, Michael Muller, and Mark O Riedl. 2024. The Who in XAI: How AI Background

Shapes Perceptions of AI Explanations. In Proceedings of the CHI Conference on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI '24) .

Association for Computing Machinery, New York, NY, USA, Article 316, 32 pages. https://doi.org/10.1145/3613904.3642474
 Malin Eiband, Daniel Buschek, Alexander Kremer, and Heinrich Hussmann. 2019. The Impact of Placebic Explanations on Trust in Intelligent

Systems. In Extended Abstracts of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI EA '19) . Association

for Computing Machinery, New York, NY, USA, 1-6. https://doi.org/10.1145/3290607.3312787
 A. N. Ferguson, M. Franklin, and D. Lagnado. 2022. Explanations that backfire: Explainable artificial intelligence can cause information overload. In

Proceedings of the 44th Annual Conference of the Cognitive Science Society . https://escholarship.org/uc/item/3d97g0n3
 Johannes Furnkranz, Tomas Kliegr, and Heiko Paulheim. 2020. On Cognitive Preferences and the Plausibility of Rule-Based Models. Mach. Learn.

109, 4 (apr 2020), 853-898. https://doi.org/10.1007/s10994-019-05856-5


Manuscript submitted to ACM


# Evaluating the Influences of Explanation Style on Human-AI Reliance 21

 Ben Green and Yiling Chen. 2019. The Principles and Limits of Algorithm-in-the-Loop Decision Making. Proc. ACM Hum.-Comput. Interact. 3,

CSCW, Article 50 (Nov 2019), 24 pages. https://doi.org/10.1145/3359152
 Christina Humer, Andreas Hinterreiter, Benedikt Leichtmann, Martina Mara, and Marc Streit. 2024. Reassuring, Misleading, Debunking: Comparing

Effects of XAI Methods on Human Decisions. ACM Trans. Interact. Intell. Syst. (may 2024). https://doi.org/10.1145/3665647 Just Accepted.
 Alon Jacovi and Yoav Goldberg. 2020. Towards Faithfully Interpretable NLP Systems: How should we define and evaluate faithfulness?

[arXiv:2004.03685 [cs.CL]](https://arxiv.org/abs/2004.03685)
 Jeya Vikranth Jeyakumar, Joseph Noor, Yu-Hsi Cheng, Luis Garcia, and Mani Srivastava. 2020. How Can I Explain This to You? An Empir
ical Study of Deep Neural Network Explanation Methods. In Advances in Neural Information Processing Systems, H. Larochelle, M. Ranzato,

R. Hadsell, M.F. Balcan, and H. Lin (Eds.), Vol. 33. Curran Associates, Inc., 4211-4222. https://proceedings.neurips.cc/paper_files/paper/2020/file/

2c29d89cc56cdb191c60db2f0bae796b-Paper.pdf
 Mark T Keane, Eoin M Kenny, Eoin Delaney, and Barry Smyth. 2021. If Only We Had Better Counterfactual Explanations: Five Key Deficits to

Rectify in the Evaluation of Counterfactual XAI Techniques. [arXiv:2103.01035 [cs.LG]](https://arxiv.org/abs/2103.01035)
 Been Kim, Rajiv Khanna, and Oluwasanmi O Koyejo. 2016. Examples are not enough, learn to criticize! Criticism for Interpretability. In Advances

in Neural Information Processing Systems, D. Lee, M. Sugiyama, U. Luxburg, I. Guyon, and R. Garnett (Eds.), Vol. 29. Curran Associates, Inc.

https://proceedings.neurips.cc/paper_files/paper/2016/file/5680522b8e2bb01943234bce7bf84534-Paper.pdf
 Sunnie S. Y. Kim, Elizabeth Anne Watkins, Olga Russakovsky, Ruth Fong, and Andres Monroy-Hernandez. 2023. "Help Me Help the AI": Understanding

How Explainability Can Support Human-AI Interaction. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Hamburg,

Germany) (CHI '23) . Association for Computing Machinery, New York, NY, USA, Article 250, 17 pages. https://doi.org/10.1145/3544548.3581001
 Todd Kulesza, Simone Stumpf, Margaret Burnett, Sherry Yang, Irwin Kwan, and Weng-Keen Wong. 2013. Too much, too little, or just right?

Ways explanations impact end users' mental models. In 2013 IEEE Symposium on Visual Languages and Human Centric Computing . 3-10. https:

//doi.org/10.1109/VLHCC.2013.6645235
 Garston Liang, Jennifer F Sloane, Christopher Donkin, and Ben R Newell. 2022. Adapting to the algorithm: how accuracy comparisons promote the

use of a decision aid. Cogn. Res. Princ. Implic. 7, 1 (Feb. 2022), 14.
 Q. Vera Liao and Jennifer Wortman Vaughan. 2023. AI Transparency in the Age of LLMs: A Human-Centered Research Roadmap.

[arXiv:2306.01941 [cs.HC]](https://arxiv.org/abs/2306.01941)
 Yu Liu and Tinne Tuytelaars. 2020. A Deep Multi-Modal Explanation Model for Zero-Shot Learning. IEEE Transactions on Image Processing 29 (2020),

4788-4803. https://doi.org/10.1109/TIP.2020.2975980
 Scott M Lundberg and Su-In Lee. 2017. A Unified Approach to Interpreting Model Predictions. In Advances in Neural Information Processing

Systems, I. Guyon, U. Von Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, and R. Garnett (Eds.), Vol. 30. Curran Associates, Inc.

https://proceedings.neurips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf
 Tim Miller. 2018. Explanation in Artificial Intelligence: Insights from the Social Sciences. [arXiv:1706.07269 [cs.AI]](https://arxiv.org/abs/1706.07269)
 Christoph Molnar. 2022. Interpretable Machine Learning (2 ed.). Christoph Molnar. https://christophm.github.io/interpretable-ml-book
 Katelyn Morrison, Donghoon Shin, Kenneth Holstein, and Adam Perer. 2023. Evaluating the Impact of Human Explanation Strategies on Human-AI

Visual Decision-Making. Proc. ACM Hum.-Comput. Interact. 7, CSCW1, Article 48 (Apr. 2023), 37 pages. https://doi.org/10.1145/3579481
 Katelyn Morrison, Philipp Spitzer, Violet Turri, Michelle Feng, Niklas Kuhl, and Adam Perer. 2024. The Impact of Imperfect XAI on Human-AI

Decision-Making. Proc. ACM Hum.-Comput. Interact. 8, CSCW1, Article 183 (apr 2024), 39 pages. https://doi.org/10.1145/3641022
 Forough Poursabzi-Sangdeh, Daniel G Goldstein, Jake M Hofman, Jennifer Wortman Wortman Vaughan, and Hanna Wallach. 2021. Manipu
lating and Measuring Model Interpretability. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (<conf-loc>,

<city>Yokohama</city>, <country>Japan</country>, </conf-loc>) (CHI '21) . Association for Computing Machinery, New York, NY, USA, Article 237,

52 pages. https://doi.org/10.1145/3411764.3445315
 Marco Tulio Ribeiro, Sameer Singh, and Carlos Guestrin. 2016. "Why Should I Trust You?": Explaining the Predictions of Any Classifier.

[arXiv:1602.04938 [cs.LG]](https://arxiv.org/abs/1602.04938)
 Vincent Robbemond, Oana Inel, and Ujwal Gadiraju. 2022. Understanding the Role of Explanation Modality in AI-assisted Decision-making. In Proceed-

ings of the 30th ACM Conference on User Modeling, Adaptation and Personalization (<conf-loc>, <city>Barcelona</city>, <country>Spain</country>,

</conf-loc>) (UMAP '22) . Association for Computing Machinery, New York, NY, USA, 223-233. https://doi.org/10.1145/3503252.3531311
 Cynthia Rudin. 2019. Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead.

[arXiv:1811.10154 [stat.ML]](https://arxiv.org/abs/1811.10154)
 Max Schemmer, Niklas Kuehl, Carina Benz, Andrea Bartos, and Gerhard Satzger. 2023. Appropriate Reliance on AI Advice: Conceptualization

and the Effect of Explanations. In Proceedings of the 28th International Conference on Intelligent User Interfaces (<conf-loc>, <city>Sydney</city>,

<state>NSW</state>, <country>Australia</country>, </conf-loc>) (IUI '23) . Association for Computing Machinery, New York, NY, USA, 410-422.

https://doi.org/10.1145/3581641.3584066
 Ramprasaath R. Selvaraju, Michael Cogswell, Abhishek Das, Ramakrishna Vedantam, Devi Parikh, and Dhruv Batra. 2019. Grad-CAM: Visual

Explanations from Deep Networks via Gradient-Based Localization. International Journal of Computer Vision 128, 2 (oct 2019), 336-359. https:

//doi.org/10.1007/s11263-019-01228-7
 Daniel Smilkov, Nikhil Thorat, Been Kim, Fernanda Viegas, and Martin Wattenberg. 2017. SmoothGrad: removing noise by adding noise.

[arXiv:1706.03825 [cs.LG]](https://arxiv.org/abs/1706.03825)


Manuscript submitted to ACM


22 Emma R. Casolin, Flora D. Salim, and Ben Newell

 Mukund Sundararajan, Ankur Taly, and Qiqi Yan. 2017. Axiomatic Attribution for Deep Networks. [arXiv:1703.01365 [cs.LG]](https://arxiv.org/abs/1703.01365)
 Betul Timur and Fatih Tasar. 2011. In-Service Science Teachers' Technological Pedagogical Content Knowledge Confidences and Views about

Technology-Rich Environments. Center for Educational Policy Studies Journal 1 (12 2011), 11-25. https://doi.org/10.26529/cepsj.403
 Muneeb ul Hassan, Philippe Mulhem, Denis Pellerin, and Georges Quenot. 2019. Explaining Visual Classification using Attributes. In 2019

International Conference on Content-Based Multimedia Indexing (CBMI) . 1-6. https://doi.org/10.1109/CBMI.2019.8877393
 Jasper van der Waa, Elisabeth Nieuwburg, Anita Cremers, and Mark Neerincx. 2021. Evaluating XAI: A comparison of rule-based and example-based

explanations. Artificial Intelligence 291 (2021), 103404. https://doi.org/10.1016/j.artint.2020.103404
 Helena Vasconcelos, Matthew Jorke, Madeleine Grunde-McLaughlin, Tobias Gerstenberg, Michael Bernstein, and Ranjay Krishna. 2023. Explanations

Can Reduce Overreliance on AI Systems During Decision-Making. [arXiv:2212.06823 [cs.HC]](https://arxiv.org/abs/2212.06823)
 C. Wah, S. Branson, P. Welinder, P. Perona, and S. Belongie. 2011. The Caltech-UCSD Birds-200-2011 Dataset . Technical Report CNS-TR-2011-001.

California Institute of Technology.
 Xinru Wang and Ming Yin. 2021. Are Explanations Helpful? A Comparative Study of the Effects of Explanations in AI-Assisted Decision-Making. In

26th International Conference on Intelligent User Interfaces (College Station, TX, USA) (IUI '21) . Association for Computing Machinery, New York, NY,

USA, 318-328. https://doi.org/10.1145/3397481.3450650
 Wenjia Xu, Jiuniu Wang, Yang Wang, Guangluan Xu, Daoyu Lin, Wei Dai, and Yirong Wu. 2020. Where is the Model Looking At? - Concentrate and

Explain the Network Attention. IEEE Journal of Selected Topics in Signal Processing 14, 3 (mar 2020), 506-516. https://doi.org/10.1109/jstsp.2020.2987729
 Chien Wen (Tina) Yuan, Nanyi Bi, Ya-Fang Lin, and Yuen-Hsien Tseng. 2023. Contextualizing User Perceptions about Biases for Human-Centered

Explainable Artificial Intelligence. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Hamburg, Germany) (CHI '23) .

Association for Computing Machinery, New York, NY, USA, Article 248, 15 pages. https://doi.org/10.1145/3544548.3580945
 Yunfeng Zhang, Q. Vera Liao, and Rachel K. E. Bellamy. 2020. Effect of confidence and explanation on accuracy and trust calibration in AI-assisted

decision making. In Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency (Barcelona, Spain) (FAT* '20) . Association for

Computing Machinery, New York, NY, USA, 295-305. https://doi.org/10.1145/3351095.3372852


Manuscript submitted to ACM