---
id: "AGP-022"
title: "Analogical Reasoning (AR)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 4
context: "Novel problems with existing similar solutions."
avoid_when: "Highly domain-specific technical problems; When direct methods are more efficient; Problems requiring precise quantitative analysis; When no meaningful analogies exist; Real-time critical decision making"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-358.png"
notion: "https://app.notion.com/p/Analogical-Reasoning-AR-b98a9aed534482268f4181175755ae9b"
---

## Why
Solves problems by finding and applying similar patterns from known domains. The pattern: reasoning by finding structural similarities between familiar and unfamiliar domains to transfer knowledge and solutions. Leverages existing knowledge to solve new problems by identifying patterns and relationships that transcend specific domains.
**Key insight:** Identify analogous source → Map structural relationships → Transfer insights → Adapt to target context → Validate

## How to implement
1. **Source Identification** — Find relevant analogous situations or domains
1. **Structural Mapping** — Identify correspondences between source and target
1. **Knowledge Transfer** — Apply insights from source to target problem
1. **Adaptation** — Modify transferred knowledge for target context
1. **Validation** — Verify analogy validity and solution quality
- Example flow: `Target Problem → Find Similar Case → Map Structure → Transfer Solution → Adapt & Validate`
- **Do:** Focus on structural similarities rather than surface features; Use multiple analogies to strengthen reasoning; Explicitly map relationships between source and target; Consider disanalogies and limitations of the mapping; Validate transferred knowledge in target domain
- **Don't:** Rely solely on superficial similarities; Use weak or irrelevant analogies without justification; Transfer knowledge without adapting to context; Ignore when analogies break down or fail; Over-extend analogies beyond their valid scope

## Metrics
Key metrics to track when applying this pattern:
  - Analogy Quality (Structural similarity and relevance to target problem)
  - Mapping Accuracy (Correctness of source-target correspondences)
  - Transfer Success (Effectiveness of knowledge application)
  - Solution Validity (Correctness in target domain after adaptation)
  - Creative Insight (Novel solutions generated through analogical thinking)
  - Reasoning Efficiency (Speed of solution discovery vs direct methods)
  **Proven use cases:**
  - Scientific Discovery: Darwin's evolution theory inspired by Malthus population theory → Natural selection mechanism
  - Engineering Design: Velcro invention inspired by burr seeds → Hook and loop fastener design
  - Business Strategy: Netflix disruption analogous to Amazon retail model → Platform-based streaming strategy
  - Software Architecture: Circuit breaker pattern from electrical systems → Fault tolerance in distributed systems
  - Medical Diagnosis: Heart pump analogy for understanding circulatory problems → Treatment approach insights
