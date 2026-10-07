---
id: "AGP-148"
title: "Producer-Critic Pattern (PC)"
category: "Agentic Patterns"
subcategory: "Reflection"
score: 4
context: "High-quality content generation."
avoid_when: "Simple, straightforward tasks; Real-time applications; Limited computational budget; Well-defined single-pass solutions"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-383.png"
notion: "https://app.notion.com/p/Producer-Critic-Pattern-PC-bb7a9aed5344834c958c813834ca68a3"
---

## Why
Architectural pattern where separate producer and critic agents collaborate for quality improvement. The pattern: separate producer and critic agents for unbiased quality improvement. Prevents self-evaluation bias, enables specialized critique, improves output quality.
**Key insight:** Producer focuses on creation, Critic provides objective evaluation → Higher quality

## How to implement
1. **Define Roles** — Producer generates, Critic evaluates
1. **Separate Prompts** — Distinct system prompts for each agent
1. **Producer Executes** — Initial content generation
1. **Critic Analyzes** — Structured evaluation & feedback
1. **Iterate** — Producer refines based on critique
- Example flow: `Producer(draft_code) → Critic(review) → Producer(refined_code)`
- **Do:** Use distinct personas (e.g., "Senior Engineer" for critic); Provide structured evaluation criteria to the critic; Separate concerns completely between producer and critic; Consider different critic implementations (LLM, rules, human); Implement stopping conditions to prevent infinite loops
- **Don't:** Use the same prompt/persona for both roles; Let producer see critic instructions (bias prevention); Skip validation of critic feedback quality; Allow unlimited iterations without convergence checks; Ignore computational costs of dual-agent approach

## Metrics
Key metrics to track when applying this pattern:
  - Quality Delta (Improvement from v1 to final)
  - Critique Precision (Valid issues / Total critiques)
  - Convergence Rate (Iterations to acceptable quality)
  - Cost Efficiency (Quality gain / Token cost)
  - Bias Reduction (Objective evaluation score)
  - Error Detection (% of actual errors caught)
  **Proven use cases:**
  - Code Generation: Developer writes → Senior Engineer reviews → Developer refines
  - Content Creation: Writer drafts → Editor critiques → Writer polishes
  - Research Analysis: Analyst presents → Peer reviews → Analyst strengthens
  - Design Documents: Architect proposes → Tech Lead evaluates → Architect improves
  - LLM-as-Judge Implementation: Multiple outputs → LLM critic ranks/scores → Select best
