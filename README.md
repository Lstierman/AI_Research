# AI Research Seminar 2026 — Group Project

Ghent University, *AI Research Seminar* (Tijl De Bie, Bo Kang), autumn 2026.

We pitch two topics on **9 Oct** (4 min each): **Human-AI Interaction**, the required non-technical topic, and **Continual Learning**. After the pitch one topic is selected.

## Repository structure

```
AI_Research/
├── README.md                 ← this file: overview + reading list
├── papers/
│   ├── human-ai-interaction/ ← key PDFs for pitch 1
│   └── continual-learning/   ← key PDFs for pitch 2
└── presentation/
    └── pitch/                ← slides for the 9 Oct pitch
```

PDF naming convention: `YYYY_FirstAuthor_Short-Title.pdf`

## Timeline

| Date | What |
|---|---|
| 9 Oct | Pitch two topics (4 min each); one is selected |
| 23 Oct | Refined pitch for the selected topic (10 min + Q&A) |
| 6 / 13 Nov | Intermediate presentation (~20 min + Q&A) |
| 20 Nov – 11 Dec | Final presentation (~45 min + Q&A) |
| End | Final report (~3 pages + references) |

## Reading list

### Human-AI Interaction (`papers/human-ai-interaction/`)

| Paper | Venue | Key finding |
|---|---|---|
| Vaccaro, Almaatouq & Malone (2024), *When combinations of humans and AI are useful* | Nature Human Behaviour | Meta-analysis of 106 experiments: on average human-AI teams perform worse than the best of human or AI alone; there are gains in content creation and losses in decision-making |
| Buçinca, Malaya & Gajos (2021), *To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI* | CSCW 2021 | Cognitive forcing reduces overreliance (N=199), but users like those designs least |
| Steyvers et al. (2025), *What large language models know and what people think they know* | Nature Machine Intelligence | "Calibration gap": users overestimate LLM accuracy, and longer explanations increase confidence without increasing accuracy |
| Becker et al. (2025), *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity* | METR, arXiv 2507.09089 | RCT: developers were 19% slower with AI, while believing they were 20% faster |
| Fang et al. (2025), *How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use: A Longitudinal RCT* | OpenAI × MIT Media Lab | 4-week RCT (n=981) comparing voice and text; heavier use is associated with more loneliness and emotional dependence |
| Aka, Palikot, Ansari & Yazdani (2025), *Quantifying the Benefits of AI-Assisted Recruitment* (earlier title: *Better Together*) | arXiv 2507.08029 | Two field experiments: candidates shortlisted using AI interview reports pass the final human interview at a rate 17.5–20 percentage points higher than those shortlisted from resumes alone. Gains are largest for junior candidates, but 75% of invited applicants don't complete the AI interview |

**Links:**
- Tavus **Griffin** (announced 1 Oct 2026), a real-time, face-to-face video "Human Interaction Model". In Tavus's blind test, 48% of participants thought it was a real person. Press release: https://www.businesswire.com/news/home/20261001092598/en/ · demo video: https://www.youtube.com/watch?v=VcQcRRHJTyc

### Continual Learning (`papers/continual-learning/`)

| Paper | Venue | Key finding |
|---|---|---|
| Shi et al. (2025), *Continual Learning of Large Language Models: A Comprehensive Survey* | ACM Computing Surveys | Overview of continual pre-training, fine-tuning and alignment for LLMs |
| Dohare et al. (2024), *Loss of plasticity in deep continual learning* | Nature | Networks trained continually gradually lose the ability to learn; "continual backprop" (re-initialising little-used units) fixes it. [Code](https://github.com/shibhansh/loss-of-plasticity) |
| Lin et al. (2025), *Continual Learning via Sparse Memory Finetuning* | Meta FAIR, arXiv 2510.15103 | Only updates memory slots specific to the new knowledge. NaturalQuestions F1 drops 89% with full fine-tuning, 71% with LoRA, 11% with this method |
| Zweiger et al. (2025), *Self-Adapting Language Models (SEAL)* | MIT, arXiv 2506.10943 | The LLM generates its own fine-tuning data, trained with RL |
