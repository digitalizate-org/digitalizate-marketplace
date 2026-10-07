---
id: "UX-201"
title: "Unified Notification and Feedback System"
category: "Feedback & Error Handling"
subcategory: "Notifications"
score: 5
context: "Throughout the entire application. Consistent feedback patterns are a core indicator of design system maturity. Inconsistent feedback creates cognitive overhead as users parse what each notification type means."
goals:
  - "Design Effective Feedback & Error States"
  - "Reduce Cognitive Load"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/52tnkq.jpg"
notion: "https://app.notion.com/p/Unified-Notification-and-Feedback-System-540a9aed53448245a22b01c145ae9ebc"
---

## Why
A unified notification system for all user-facing feedback — toast for non-critical confirmations (3–5 second auto-dismiss), inline banner for persistent actionable alerts, modal for critical decisions — prevents the fragmented notification experience common in enterprise applications that have grown organically. When every team ships their own notification pattern, users must develop a new mental model for each section of the application.

## How to implement
- Toast position: bottom-left or bottom-right, stacked vertically for multiple simultaneous notifications.
- Four states: success (green), warning (amber), error (red), informational (blue).
- Toast: brief message + optional Undo link.
- Banner: top of affected content area, persists until dismissed.
- Modal: reserved only for destructive action confirmations and critical system alerts — not informational messages.
- Define in the design system and enforce via code review.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Support tickets reduction
- **Engagement & Usage**: Feature usage, Active users
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track how often users dismiss versus act on notifications to assess relevance and clarity. Monitor support ticket volume for notification-related confusion and measure time-to-acknowledge-critical-alerts in usability sessions to verify that a unified system reduces cognitive overhead versus a fragmented notification approach.

## Sources
- [Carbon Design System — Notifications](https://carbondesignsystem.com/patterns/overview/)
