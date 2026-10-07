---
id: "AGP-154"
title: "Reflexion (RX)"
category: "Agentic Patterns"
subcategory: "Reflection"
score: 3
context: "Multi-step reasoning tasks."
avoid_when: "Single-shot tasks; Time-critical applications; Simple Q&A; Deterministic problems"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-384.png"
notion: "https://app.notion.com/p/Reflexion-RX-198a9aed534483099380816ec0e438f4"
---

## Why
Agents learn from experience through verbal self-reflection and episodic memory. The pattern: agents learn from experience through verbal self-reflection. Converts failures into linguistic insights, enabling learning without fine-tuning.
**Key insight:** Actor → Evaluator → Self-Reflection → Memory → Improved Performance

## How to implement
1. **Actor Executes** — Generate actions/text for task
1. **Environment Responds** — Get feedback/results
1. **Evaluator Scores** — Assess performance objectively
1. **Self-Reflect** — Generate verbal reinforcement
1. **Update Memory** — Store reflection for next trial
- Example flow: `Actor(task) → Result → Evaluate → Reflect(verbal) → Memory → Actor(improved)`
- **Do:** Convert feedback into actionable linguistic hints; Maintain episodic memory of past reflections; Use specific, concrete reflection prompts; Implement clear evaluation metrics; Limit reflection depth to avoid overthinking
- **Don't:** Store raw trajectories without reflection; Use vague reflections like "do better"; Skip environment feedback integration; Allow unlimited reflection cycles; Ignore memory constraints in long tasks

## Metrics
Key metrics to track when applying this pattern:
  - Success Rate (Task completion over trials)
  - Learning Curve (Performance improvement rate)
  - Reflection Quality (Actionability of insights)
  - Memory Efficiency (Relevant recall vs storage)
  - Convergence Speed (Trials to optimal performance)
  - Generalization (Transfer to similar tasks)
  **Proven use cases:**
  - Code Generation: Write → Test → Reflect on errors → Fix bugs → Improve
  - Game Playing: Move → Observe → Evaluate → Reflect on strategy → Adapt
  - Problem Solving: Attempt → Check → Analyze failure → Learn → Retry
  - Writing Tasks: Draft → Review → Reflect on weaknesses → Revise → Polish
  - Agent Training: Act → Get reward → Reflect on decisions → Update policy
