---
id: "UX-191"
title: "Provide Sufficient Context in Notifications"
category: "Feedback & Error Handling"
subcategory: "Notification content standards"
score: 5
context: "Apply to any notification triggered by asynchronous system events — batch job completion, assignment changes, alerts, approvals needed. Users may be focused elsewhere when notifications arrive."
goals:
  - "Design Effective Feedback & Error States"
  - "Reduce Cognitive Load"
wireframe: "https://files.catbox.moe/epr585.jpg"
notion: "https://app.notion.com/p/Provide-Sufficient-Context-in-Notifications-af5a9aed5344836bae0d0184ae3ea86d"
---

## Why
Unlike validations that appear in direct response to user actions, notifications can arrive while the user is focused on something entirely different. The notification must establish enough context for the user to understand what happened without requiring them to remember system state from elsewhere. Vague notifications ("Your package has been updated") force users to navigate to find out what happened — a costly interruption that provides no value.

## How to implement
- Include in every notification: what happened, which record/entity is affected (by name/ID, not just type), and what action (if any) is needed.
- Example: "Invoice #4821 was approved by Sarah Chen" not "An invoice was approved." Provide a direct action link within the notification taking users to the relevant context.
- For contextual notifications, include an icon indicator on the specific UI element affected.
- For long-running process completions, include a brief summary of results inline in the notification.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Notification action rate, Context comprehension rate
- **Efficiency**: Time-to-action on notifications, Support ticket reduction
- **Satisfaction**: Notification usefulness score, User trust
**How to measure**: Track notification click-through and action rates as proxy for context sufficiency; measure support tickets where users couldn't understand what a notification meant; survey on notification usefulness.

## Sources
- [Nielsen Norman Group — Indicators, Validations, and Notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
