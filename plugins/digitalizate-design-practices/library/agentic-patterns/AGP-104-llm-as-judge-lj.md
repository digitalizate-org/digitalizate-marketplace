---
id: "AGP-104"
title: "LLM as Judge (LJ)"
category: "Agentic Patterns"
subcategory: "Reflection"
score: 4
context: "Evaluating multiple outputs."
avoid_when: "Subjective creative tasks; Single output generation; Real-time critical decisions; Legal/medical assessments"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-382.png"
notion: "https://app.notion.com/p/LLM-as-Judge-LJ-1dea9aed53448359808c8157f190de69"
---

## Why
Specific Producer-Critic implementation where an LLM acts as the critic to evaluate outputs. The pattern: use LLMs to evaluate and score other LLM outputs at scale. Automates quality assessment, enables best-of-N selection, scales evaluation.
**Key insight:** Specific implementation of Producer-Critic where the critic is an LLM with evaluation prompts

## How to implement
1. **Define Criteria** — Specify evaluation metrics & rubrics
1. **Design Prompt** — Create structured judge prompt
1. **Feed Outputs** — Pass generated content to judge
1. **Get Scores** — Receive ratings/rankings/decisions
1. **Act on Results** — Filter, rank, or select outputs
- Example flow: `outputs[n] → LLM_Judge(criteria) → scores[n] → select_best(scores)`
- **Do:** Use clear, objective evaluation criteria; Implement panel of judges for controversial decisions; Provide rubrics and examples in judge prompts; Use structured output formats (JSON) for scores; Validate judge consistency with known test cases
- **Don't:** Use vague criteria like "good" or "better"; Rely on single judge for critical decisions; Skip calibration of judge against human evaluations; Use same model for generation and judging (bias); Ignore judge uncertainty or confidence scores

## Metrics
Key metrics to track when applying this pattern:
  - Judge Agreement (Correlation with human raters)
  - Consistency (Same judgment on same input)
  - Discrimination (Ability to rank quality differences)
  - False Positive Rate (Good content marked as bad)
  - Coverage (% of edge cases handled correctly)
  - Speed (Evaluations per second)
  **Proven use cases:**
  - Output Selection: Generate 5 responses → Judge ranks → Return best to user
  - Quality Gates: Check if generated code/content meets standards before deployment
  - A/B Testing: Compare model versions by judging outputs on same prompts
  - Safety Filtering: Evaluate outputs for harmful/biased content before serving
  - RAG Evaluation: Judge relevance of retrieved documents to query
