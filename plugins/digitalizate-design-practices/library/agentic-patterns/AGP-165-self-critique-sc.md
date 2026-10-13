---
id: "AGP-165"
title: "Self-Critique (SC)"
category: "Agentic Patterns"
subcategory: "Reflection"
score: 4
context: "High-stakes content generation."
avoid_when: "Real-time applications; Simple/straightforward tasks; Limited compute budget; Subjective quality domains"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-385.png"
notion: "https://app.notion.com/p/Self-Critique-SC-387a9aed534483c8a0888100ce7bfb31"
---

## Why
Agent evaluates its own outputs through systematic analysis and generates targeted improvements. The pattern: single agent evaluates and iteratively improves its own outputs. Catches errors, improves quality, ensures completeness without external validation.
**Key insight:** Generate → Critique → Revise → Repeat until quality threshold met

## How to implement
1. **Generate** — Initial response to task
1. **Critique** — Systematic quality evaluation
1. **Identify** — Specific issues & improvements
1. **Revise** — Address identified weaknesses
1. **Iterate** — Repeat until quality threshold
- Example flow: `generate(task) → critique(output) → revise(issues) → validate() → final_output`
- **Do:** Define clear, objective critique criteria for the task; Use structured evaluation templates (accuracy, completeness, clarity); Set maximum iteration limits (typically 2-3 cycles); Track quality metrics to measure improvement; Document critique reasoning for transparency
- **Don't:** Allow infinite revision loops without stopping criteria; Use vague criteria like "make it better"; Over-critique acceptable responses; Ignore computational cost vs quality gain tradeoffs; Apply same critique template to all task types

## Metrics
Key metrics to track when applying this pattern:
  - Quality Gain (% improvement from v1 to final)
  - Iteration Count (Average cycles to convergence)
  - Critique Accuracy (Valid issues / Total critiques)
  - Token Efficiency (Quality gain / Extra tokens)
  - Time to Converge (Total processing time)
  - Error Reduction (% decrease in mistakes)
  **Proven use cases:**
  - Academic Writing: Draft → Critique logic/evidence → Strengthen arguments → Polish
  - Code Generation: Initial code → Identify bugs/inefficiencies → Fix → Optimize
  - Technical Docs: First version → Check accuracy/completeness → Fill gaps → Clarify
  - Analysis Reports: Raw analysis → Verify conclusions → Add context → Refine insights
  - Creative Content: Draft → Evaluate engagement/clarity → Enhance → Final edit
