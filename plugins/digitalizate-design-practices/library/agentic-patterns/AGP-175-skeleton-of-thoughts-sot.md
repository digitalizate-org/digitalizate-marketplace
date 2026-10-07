---
id: "AGP-175"
title: "Skeleton of Thoughts (SoT)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 4
context: "Complex multi-part responses or analyses."
avoid_when: "Simple, single-concept questions; Highly sequential reasoning tasks; When parallel processing is not beneficial; Real-time applications requiring immediate response; Problems requiring deep, interconnected reasoning"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-368.png"
notion: "https://app.notion.com/p/Skeleton-of-Thoughts-SoT-8f5a9aed534482f0a310019c8bcf693f"
---

## Why
Creates structured yet adaptable reasoning frameworks that can be filled with specific details. The pattern: structured reasoning that creates a high-level skeleton then expands each component in parallel for efficient processing. Accelerates complex response generation through parallel development while maintaining logical structure and coherence.
**Key insight:** Create skeleton structure → Expand points in parallel → Integrate sections → Ensure consistency → Final synthesis

## How to implement
1. **Skeleton Generation** — Create high-level structure with key points
1. **Parallel Expansion** — Develop each skeleton point independently
1. **Content Integration** — Combine expanded sections into coherent whole
1. **Consistency Check** — Ensure logical flow and coherence
1. **Final Synthesis** — Polish and refine complete response
- Example flow: `Problem → [Point 1, Point 2, Point 3] → Expand each in parallel → Integrate → Final answer`
- **Do:** Create comprehensive skeleton covering all key aspects; Ensure skeleton points are logically ordered; Use parallel processing to expand multiple points; Maintain consistency across parallel expansions; Validate final integration for coherence
- **Don't:** Create skeleton without clear logical structure; Expand points sequentially when parallel is possible; Ignore contradictions between parallel sections; Skip integration step (fragmented response); Over-decompose into trivial skeleton points

## Metrics
Key metrics to track when applying this pattern:
  - Skeleton Completeness (Coverage of all essential aspects in structure)
  - Parallel Efficiency (Speed improvement from concurrent expansion)
  - Integration Quality (Coherence and flow of combined sections)
  - Consistency Score (Logical alignment across parallel developments)
  - Structure Clarity (Logical organization and progression)
  - Response Completeness (Thoroughness of final synthesized answer)
  **Proven use cases:**
  - Essay Writing: Outline main arguments → Develop each argument in parallel → Integrate into coherent essay
  - Technical Documentation: Structure sections → Write each section independently → Combine into manual
  - Business Analysis: Framework components → Analyze each component → Synthesize comprehensive assessment
  - Research Report: Key findings outline → Elaborate each finding → Integrate into cohesive report
  - Strategic Planning: Plan components → Develop each strategy area → Combine into unified strategy
