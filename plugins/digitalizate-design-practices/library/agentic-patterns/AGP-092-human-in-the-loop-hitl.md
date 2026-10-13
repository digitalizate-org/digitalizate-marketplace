---
id: "AGP-092"
title: "Human-in-the-Loop (HITL)"
category: "Agentic Patterns"
subcategory: "UI/UX & Human-AI Interaction"
score: 5
context: "High-stakes decisions requiring human judgment."
avoid_when: "High-volume, low-stakes decisions; Time-critical autonomous operations; Well-defined rule-based processes; Resource-constrained environments"
goals:
  - "Build Trust & Reduce User Anxiety"
tags:
  - "ai-patterns"
wireframe: "https://raw.githubusercontent.com/alexgilev/agentic-wireframes/main/UX-543.png"
notion: "https://app.notion.com/p/Human-in-the-Loop-HITL-278a9aed534482679aca81bd6b3a7d2d"
---

## Why
Strategic integration of human judgment at critical decision points in AI workflows. The pattern: strategic integration of human judgment at critical decision points in AI workflows with active participation. Combines AI efficiency with human expertise for complex decisions, ensuring safety and quality in high-stakes scenarios.
**Key insight:** Humans actively participate in decision-making process, providing continuous feedback that improves AI performance

## How to implement
1. **Define Triggers** — Set confidence thresholds & intervention points
1. **Design Interface** — Create human-friendly decision interfaces
1. **Route Decisions** — Channel complex cases to domain experts
1. **Capture Feedback** — Record human decisions & reasoning
1. **Learn & Adapt** — Update AI models from human expertise
- Example flow: `confidence_check → human_escalation → expert_decision → feedback_capture → model_update`
- **Do:** Set clear confidence thresholds for human escalation; Design intuitive interfaces for human decision-makers; Capture reasoning behind human decisions for learning; Route decisions to appropriate domain experts; Implement active learning from human feedback
- **Don't:** Escalate every decision to humans (automation defeats purpose); Ignore human feedback in model improvement cycles; Overload humans with too many simultaneous decisions; Skip validation of human decision quality; Use HITL where HOTL supervision would suffice

## Metrics
Key metrics to track when applying this pattern:
  - Escalation Rate (Percentage of decisions requiring human input)
  - Human Decision Quality (Accuracy and consistency of human choices)
  - Response Time (Time from escalation to human decision)
  - Learning Efficiency (AI improvement from human feedback)
  - Cost per Decision (Total cost including human expert time)
  - User Satisfaction (Satisfaction with human-AI collaboration)
  **Proven use cases:**
  - Medical Diagnosis: AI screens routine cases, escalates complex symptoms to doctors with 95% accuracy improvement
  - Legal Document Review: AI processes standard contracts, routes complex clauses to lawyers reducing review time by 60%
  - Content Moderation: AI handles clear violations, escalates nuanced cases to human moderators with 98% policy compliance
  - Financial Fraud Detection: AI flags suspicious transactions, routes complex patterns to analysts with 40% false positive reduction
  - Autonomous Vehicle Safety: AI handles normal driving, immediately transfers control to human drivers in emergency situations
