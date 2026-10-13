---
id: "AGP-198"
title: "Test-Time Scaling (TTS)"
category: "Agentic Patterns"
subcategory: "Learning & Adaptation"
score: 2
context: "Complex reasoning tasks requiring multiple solution paths."
avoid_when: "Simple tasks with straightforward solutions; Real-time applications with strict latency requirements; Problems without reliable verification methods; Cost-sensitive applications with tight budgets; Tasks where first attempt is typically sufficient"
goals:
  - "Increase User Engagement & Retention"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-471.png"
notion: "https://app.notion.com/p/Test-Time-Scaling-TTS-ff1a9aed53448387837901f2280ebe0c"
---

## Why
Improving model performance through increased computation during inference rather than larger models. The pattern: allocate additional compute at inference time to improve performance through multiple attempts and verification. Enables better accuracy on complex tasks, flexible compute allocation, and performance scaling without retraining.
**Key insight:** More inference-time compute can substitute for larger models or more training data on reasoning tasks

## How to implement
1. **Generate** — Create multiple reasoning paths or solutions
1. **Verify** — Use verification model or self-consistency checks
1. **Rank** — Score and rank solutions by quality/confidence
1. **Select** — Choose best solution or aggregate top candidates
1. **Scale** — Increase compute budget for better performance
- Example flow: `query → multiple_attempts → verification/ranking → best_solution + increased_compute`
- **Do:** Use process-based verification over outcome-only evaluation; Implement majority voting and self-consistency checks; Scale compute allocation based on problem difficulty; Use search algorithms and tree-based reasoning; Monitor latency vs accuracy trade-offs carefully; Implement early stopping for confident solutions
- **Don't:** Apply uniform compute to all problems regardless of difficulty; Ignore verification quality and just generate more samples; Use test-time scaling without proper evaluation frameworks; Scale compute without considering inference cost budgets; Rely solely on quantity without improving reasoning quality

## Metrics
Key metrics to track when applying this pattern:
  - Accuracy@K (Best performance among K attempts)
  - Compute Efficiency (Performance gain per unit compute)
  - Verification Accuracy (Quality of solution ranking/selection)
  - Latency Scaling (Inference time vs compute allocation)
  - Pass@K Rate (Success rate within K attempts)
  - Cost-Performance Ratio (Accuracy improvement per dollar spent)
  **Proven use cases:**
  - Mathematical Reasoning: Multiple solution paths for complex proofs and problem solving
  - Code Generation: Generate and verify multiple implementations to find optimal solutions
  - Scientific Discovery: Explore multiple hypotheses and experimental designs
  - Strategic Planning: Evaluate multiple scenarios and decision pathways
  - Creative Problem Solving: Generate diverse solutions and select most promising approaches
