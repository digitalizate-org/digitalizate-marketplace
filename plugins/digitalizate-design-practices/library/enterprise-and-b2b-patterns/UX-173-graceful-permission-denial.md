---
id: "UX-173"
title: "Graceful Permission Denial"
category: "Enterprise & B2B Patterns"
subcategory: "Permissions and Access Control"
score: 4
context: "Use when a user attempts an action or reaches a page they don't have permission to access."
goals:
  - "Build Trust & Reduce User Anxiety"
  - "Design for Enterprise & B2B Scale"
tags:
  - "enterprise"
wireframe: "https://files.catbox.moe/1hbmwi.jpg"
notion: "https://app.notion.com/p/Graceful-Permission-Denial-f86a9aed534482008cb3010861be863f"
---

## Why
When a user encounters a permission restriction, provide a clear, respectful explanation of why the action is restricted and, if appropriate, how they can request access. "You don't have permission to view this" is better than a blank page or a cryptic 403 error. Even better is directing them to a specific contact or self-service workflow to request the necessary access. Permission denial moments are often first-use encounters for new roles — handling them gracefully prevents frustration and avoids support tickets.

## How to implement
- Define a standard permission-denied component with three variants: full-page blocked access (when a user navigates to a restricted section), in-page section blocked (when part of a page is restricted), and action blocked inline (when a user tries a restricted action).
- Each variant should explain the restriction in plain language and include a "Request Access" link or button where workflow permits.
- Log access denial events for admin audit trails.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: User recovery rate from permission errors, Support ticket reduction
- **Efficiency**: Time to resolve access issues, Self-service access request rate
- **Satisfaction**: User frustration reduction, Perceived product quality
**How to measure**: Track support tickets for permission-denied issues before and after; measure self-service access request completion rate; monitor time-to-resolution for access issues.

## Sources
- [Cerbos — Enterprise Authorization Models](https://www.cerbos.dev/blog/designing-an-authorization-model-for-an-enterprise)
