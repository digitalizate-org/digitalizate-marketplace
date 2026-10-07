---
id: "AGP-178"
title: "Step-Back Prompting (SBP)"
category: "Agentic Patterns"
subcategory: "Reasoning Techniques"
score: 4
context: "Complex problems requiring foundational knowledge."
avoid_when: "Simple factual queries; Well-defined procedural tasks; When direct knowledge access is sufficient; Time-sensitive quick decisions; Problems with obvious solution paths"
goals:
  - "Handle Complex Multi-Step Workflows"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-369.png"
notion: "https://app.notion.com/p/Step-Back-Prompting-SBP-df1a9aed5344822cafba01206850e49c"
---

## Why
Abstracts to higher-level principles before tackling specific problems. The pattern: reasoning strategy that steps back to broader principles before tackling specific problems. Improves reasoning by accessing relevant foundational knowledge and applying general principles to specific cases.
**Key insight:** Specific problem → Ask broader questions → Answer general principles → Apply to specific → Enhanced solution

## How to implement
1. **Original Question** — Present the specific problem to solve
1. **Step Back** — Ask broader, more general questions
1. **High-Level Reasoning** — Answer abstract principles first
1. **Apply Principles** — Use general knowledge for specific problem
1. **Final Answer** — Solve original question with enhanced context
- Example flow: `Specific Q → "What are the general principles?" → Answer principles → Apply to specific Q → Solution`
- **Do:** Ask genuinely broader conceptual questions; Connect general principles to specific instances; Use step-back questions to access relevant knowledge; Ensure step-back questions are answerable; Bridge abstract reasoning back to concrete problem
- **Don't:** Make step-back questions too similar to original; Step back so far that context is lost; Skip the connection between general and specific; Use when direct reasoning is more efficient; Generate step-back questions without clear purpose

## Metrics
Key metrics to track when applying this pattern:
  - Question Quality (Appropriateness and relevance of step-back questions)
  - Knowledge Activation (Effectiveness in accessing relevant principles)
  - Principle-Application Bridge (Quality of connection between abstract and specific)
  - Solution Improvement (Enhanced accuracy vs direct reasoning)
  - Reasoning Depth (Richness of conceptual foundation provided)
  - Transfer Efficiency (Speed of applying general knowledge to specific case)
  **Proven use cases:**
  - Physics Problem: "What's the acceleration?" → "What are Newton's laws?" → Apply F=ma → Calculate acceleration
  - Historical Analysis: "Why did Rome fall?" → "What causes empire collapse?" → General patterns → Rome-specific factors
  - Medical Diagnosis: "What's this rash?" → "What are dermatological principles?" → Apply to symptoms → Diagnosis
  - Business Strategy: "How to increase sales?" → "What drives customer behavior?" → Apply behavioral insights → Strategy
  - Programming Debug: "Why is this slow?" → "What causes performance issues?" → Performance principles → Specific optimization
