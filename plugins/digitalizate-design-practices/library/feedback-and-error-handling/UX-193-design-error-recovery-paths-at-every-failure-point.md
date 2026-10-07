---
id: "UX-193"
title: "Design Error Recovery Paths at Every Failure Point"
category: "Feedback & Error Handling"
subcategory: "Error recovery design"
score: 5
context: "Apply when specifying behavior for any interactive workflow — map all possible failure points and design explicit recovery paths for each."
goals:
  - "Build Trust & Reduce User Anxiety"
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
  - "error-handling"
wireframe: "https://files.catbox.moe/phq1u3.jpg"
notion: "https://app.notion.com/p/Design-Error-Recovery-Paths-at-Every-Failure-Point-a13a9aed5344836b902a813a82ca478b"
---

## Why
The "malfunction" dimension of interaction design requires explicitly designing for error recovery paths at every failure point in a workflow — not just the happy path. System errors, permission failures, network timeouts, and data validation failures are all failure points that users will encounter in production. Each must have an explicitly designed recovery path that preserves context, explains the problem, and offers a next step. These recovery moments are peak experiences (per the Peak-End Rule) and define lasting impressions of product quality.

## How to implement
- Map complete workflows end-to-end including all failure points.
- For each failure type (network timeout, permission error, validation failure, data conflict), design an explicit recovery path: explain what happened, preserve context and input, offer a specific next action.
- Never show a generic "Something went wrong" with no path forward.
- For partial successes in batch operations, show which records succeeded and which failed with specific reasons.
- Test error recovery with deliberate fault injection during QA.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate, Completion rate
- **Efficiency**: Support tickets reduction
- **Satisfaction & Perception**: CSAT, Ease-of-use score
- **Adoption & Retention**: Returning visitors, Renewed subscriptions
**How to measure**: Instrument error events and recovery actions in analytics to track error-to-recovery rate; compare task completion rate before and after adding recovery paths at key failure points, and monitor CSAT scores submitted after error encounters.

## Sources
- [Boxes and Arrows — Foundations of Interaction Design](https://boxesandarrows.com/foundations-of-interaction-design/)
- [Laws of UX — Peak-End Rule](https://lawsofux.com/peak-end-rule/)
