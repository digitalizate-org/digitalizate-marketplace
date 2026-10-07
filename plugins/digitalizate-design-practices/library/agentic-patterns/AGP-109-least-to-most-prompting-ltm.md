---
id: "AGP-109"
title: "Least-to-Most Prompting (LtM)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 4
context: "Complex problems with clear hierarchical structure."
avoid_when: "Simple problems solvable in one step; Highly interconnected problems without clear decomposition; Real-time applications requiring immediate answers; Problems where context accumulation hurts performance; When Chain-of-Thought is sufficient"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-364.png"
notion: "https://app.notion.com/p/Least-to-Most-Prompting-LtM-a86a9aed5344838c9c9b01b1f618484b"
---

## Why
Progressive problem decomposition from simple to complex components. The pattern: problem decomposition strategy that solves complex tasks by breaking them into simpler subproblems solved sequentially. Enables tackling complex problems by building solutions incrementally from simple to complex components.
**Key insight:** Decompose complex problem → Solve simplest first → Use previous solutions → Build up to final answer

## How to implement
1. **Problem Decomposition** — Break complex problem into simpler subproblems
1. **Sequential Solving** — Solve subproblems from simplest to most complex
1. **Solution Building** — Use previous solutions to inform next steps
1. **Context Accumulation** — Maintain growing context of solved parts
1. **Final Integration** — Combine all solutions into complete answer
- Example flow: `Complex Problem → [Sub1, Sub2, Sub3] → Solve Sub1 → Use Sub1 in Sub2 → Use Sub1+Sub2 in Sub3 → Final Answer`
- **Do:** Decompose into truly independent subproblems first; Solve subproblems in strict order of dependency; Explicitly pass previous solutions to next steps; Validate each subproblem solution before proceeding; Use clear problem reduction prompts and examples
- **Don't:** Skip the decomposition step (jump to complex reasoning); Solve subproblems out of logical dependency order; Lose context between subproblem solving steps; Use when problems cannot be meaningfully decomposed; Over-decompose into trivial or atomic steps

## Metrics
Key metrics to track when applying this pattern:
  - Decomposition Quality (Appropriateness and completeness of problem breakdown)
  - Subproblem Accuracy (Correctness of individual subproblem solutions)
  - Context Preservation (Effective use of previous solutions in later steps)
  - Final Solution Quality (Accuracy vs direct problem solving approaches)
  - Efficiency Gain (Performance improvement over standard prompting)
  - Generalization (Success across different problem types and domains)
  **Proven use cases:**
  - Mathematical Problem Solving: Complex equation → Break into steps → Solve algebraically → Combine for final answer
  - Code Generation: Large program → Decompose into functions → Implement each function → Integrate into working code
  - Essay Writing: Complex topic → Outline main points → Develop each argument → Synthesize into coherent essay
  - Data Analysis: Complex dataset → Break into analysis components → Solve each analysis → Integrate insights
  - Strategic Planning: Business challenge → Identify key areas → Develop solutions for each → Create comprehensive strategy
