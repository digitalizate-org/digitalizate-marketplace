---
id: "AGP-153"
title: "Reflective Monte Carlo Tree Search (R-MCTS)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 3
context: "Complex strategic domains with long-term consequences."
avoid_when: "Simple search problems with clear evaluation; Real-time applications with strict latency limits; Domains lacking meaningful reflection signals; When standard MCTS already performs well; Highly stochastic environments"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-367.png"
notion: "https://app.notion.com/p/Reflective-Monte-Carlo-Tree-Search-R-MCTS-74ba9aed53448264b64501e2c6b86fba"
---

## Why
Enhanced MCTS with contrastive reflection for improved exploration. The pattern: monte Carlo Tree Search enhanced with reflective analysis at each phase for improved decision quality. Combines systematic tree search with self-reflection to identify and correct reasoning errors during exploration.
**Key insight:** Select with reflection → Expand reasoning → Simulate with quality assessment → Reflect on errors → Backpropagate insights

## How to implement
1. **Selection** — Navigate tree using UCB1 + reflection score
1. **Expansion** — Generate new child nodes with reasoning
1. **Simulation** — Rollout with reflective policy evaluation
1. **Reflection** — Analyze path quality & reasoning errors
1. **Backpropagation** — Update values with reflection insights
- Example flow: `UCB1 selection → Expand with reasoning → Simulate → Reflect on mistakes → Update tree`
- **Do:** Integrate reflection into all MCTS phases; Use domain-specific reflection criteria; Balance exploration vs reflection overhead; Maintain separate reflection and value networks; Cache reflection results for similar states
- **Don't:** Add reflection without clear quality metrics; Reflect on every node (computational explosion); Use shallow reflection that misses key insights; Ignore reflection feedback in future selections; Apply uniform reflection depth regardless of uncertainty

## Metrics
Key metrics to track when applying this pattern:
  - Solution Quality (Performance vs standard MCTS baseline)
  - Reflection Accuracy (Correctness of path quality assessments)
  - Search Efficiency (Quality improvement per simulation)
  - Error Correction Rate (Recovery from poor initial paths)
  - Computational Overhead (Additional cost vs quality gains)
  - Learning Transfer (Reflection knowledge reuse across problems)
  **Proven use cases:**
  - Strategic Game AI: Chess/Go with position evaluation reflection → Identify weak moves → Improve future selections
  - Code Generation: Generate solution → Reflect on bugs/efficiency → Backpropagate insights → Better code paths
  - Mathematical Reasoning: Explore proof steps → Reflect on logical validity → Correct reasoning errors → Stronger proofs
  - Business Strategy: Evaluate strategic options → Reflect on risk/assumptions → Update decision criteria → Optimal strategy
  - Research Planning: Design experiments → Reflect on methodology flaws → Improve research design → Better outcomes
