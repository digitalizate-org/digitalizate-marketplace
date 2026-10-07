---
id: "AGP-028"
title: "Chain-of-Thought (CoT)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 4
context: "Complex mathematical problems."
avoid_when: "Simple factual questions; Real-time/low-latency needs; Creative/subjective tasks; Tight token budgets; When implicit reasoning works"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-361.png"
notion: "https://app.notion.com/p/Chain-of-Thought-CoT-451a9aed534483c1b3cc81807a5643a3"
---

## Why
Breaks down complex problems into step-by-step intermediate reasoning steps. The pattern: generate explicit step-by-step reasoning before final answer. Makes reasoning transparent, improves accuracy on complex problems, enables error detection.
**Key insight:** Add 'Let's think step by step' trigger + numbered reasoning steps → 2-5x accuracy gain

## How to implement
1. **Prompt Setup** — Add "Let's think step by step" trigger
1. **Examples** — Provide 2-3 reasoning examples
1. **Structure** — Number each reasoning step clearly
1. **Verify** — Check logical flow & calculations
1. **Conclude** — State final answer explicitly
- Example flow: `Problem → Step 1: [reasoning] → Step 2: [reasoning] → Answer: [result]`
- **Do:** Use consistent step numbering (Step 1, Step 2, etc.); Include verification steps for calculations; Provide diverse few-shot examples; Break complex problems into sub-problems; Use clear reasoning triggers ("Let's think...")
- **Don't:** Skip intermediate steps for "obvious" calculations; Use CoT for simple, direct questions; Ignore token cost increase (2-5x overhead); Make reasoning steps too verbose or redundant; Forget to validate logical consistency

## Metrics
Key metrics to track when applying this pattern:
  - Reasoning Accuracy (Correct final answers vs baseline)
  - Step Correctness (Valid intermediate reasoning steps)
  - Token Efficiency (Accuracy gain per token increase)
  - Interpretability (Human rating of reasoning clarity)
  - Consistency Rate (Agreement across multiple chains)
  - Error Attribution (Ability to identify wrong steps)
  **Proven use cases:**
  - Math Word Problems: "If a train travels 60 mph for 2 hours..." → step-by-step calculation
  - Logic Puzzles: Multi-conditional problems requiring systematic elimination
  - Code Debugging: Trace execution path step-by-step to find errors
  - Financial Analysis: Break down ROI calculations with intermediate steps
  - Medical Diagnosis: Systematic symptom analysis → differential diagnosis
