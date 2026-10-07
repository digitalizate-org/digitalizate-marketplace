---
id: "AGP-115"
title: "MLR-Bench (MLR-Bench)"
category: "Agentic Patterns"
subcategory: "Evaluation & Monitoring"
score: 2
context: "Evaluating AI research automation capabilities."
avoid_when: "Simple coding or data analysis tasks only; Non-research domain evaluation; Quick capability demonstration needs; Resource-constrained environments (requires full research stack); Domains outside core ML research areas"
goals:
  - "Present & Defend Design Decisions"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-522.png"
notion: "https://app.notion.com/p/MLR-Bench-MLR-Bench-dfaa9aed5344831199098143afc1c118"
---

## Why
Comprehensive benchmark for evaluating AI agents on open-ended machine learning research tasks from top ML conferences. The pattern: comprehensive benchmark with 201 real-world ML research tasks from top-tier conferences. Evaluates complete research pipeline from idea generation to paper writing with automated and human validation.
**Key insight:** Current SOTA models excel at ideas and writing but struggle with coding, limiting scientific innovation

## How to implement
1. **Clone** — git clone MLR-Bench repository from GitHub
1. **Setup** — Install dependencies and configure MLR-Agent scaffold
1. **Select** — Choose from 201 research tasks across 9 ML domains
1. **Execute** — Run agent through 4-stage research pipeline
1. **Evaluate** — Use MLR-Judge for automated assessment
- Example flow: `python run_mlr_bench.py --task llm_safety --agent claude_code --stages all`
- **Do:** Test across all 9 ML research domains for comprehensive assessment; Use MLR-Judge automated evaluation with structured review rubrics; Follow the complete 4-stage research pipeline (idea → code → analysis → paper); Validate results with human expert reviewers from major conferences; Focus on coding agent capabilities - major bottleneck identified
- **Don't:** Skip proper environment setup for research task execution; Ignore coding failures - they prevent downstream research quality; Rely only on automated evaluation without human validation; Test on single domain - research requires cross-domain capabilities; Overlook novelty and significance in favor of technical soundness only

## Metrics
Key metrics to track when applying this pattern:
  - Overall Research Quality (Composite score across 5 evaluation dimensions)
  - Stage-wise Performance (Success rate in idea, code, analysis, writing stages)
  - Domain-specific Scores (Performance across 9 ML research areas)
  - MLR-Judge Alignment (Correlation with human expert reviewers)
  - Innovation Index (Novelty and significance of generated research)
  - Technical Soundness (Code quality and experimental validity)
  **Proven use cases:**
  - Research Automation Assessment: Evaluating AI agents on complete ML research pipeline from idea to publication
  - Scientific Discovery Benchmarking: Testing innovation capabilities across LLMs, AI4Science, ML Theory domains
  - Academic Agent Development: Building AI researchers capable of conducting workshop-level research
  - Research Productivity Tools: Measuring effectiveness of AI assistance in scientific research workflows
  - Conference Review Simulation: Training agents to conduct peer review and research evaluation
