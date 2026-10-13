---
id: "UX-190"
title: "Error Severity Categorization — Match Presentation to Impact"
category: "Feedback & Error Handling"
subcategory: "Error severity and notification matching"
score: 5
context: "Use when designing the full notification and error system for any enterprise application. Prevents \"error fatigue\" where users reflexively dismiss all alerts."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "accessibility"
  - "forms"
  - "navigation"
  - "error-handling"
wireframe: "https://files.catbox.moe/t6mmfw.jpg"
notion: "https://app.notion.com/p/Error-Severity-Categorization-Match-Presentation-to-Impact-95ca9aed53448235b83801980cc043fb"
---

## Why
Not all errors warrant equal interruption. A missing optional annotation differs from an action that will permanently delete data. Mismatching presentation to severity trains users to dismiss all alerts — including critical ones — because low-priority issues are over-engineered with high-interruption patterns. The system must have a tiered taxonomy that scales presentation with consequence. Over-using modals for non-critical errors is one of the most common and damaging patterns in enterprise software.

## How to implement
- Low-impact informational: labels, toasts, inline banners that auto-dismiss.
- Medium-impact errors requiring user action: inline validation messages, persistent action-required banners.
- Critical errors blocking workflow: modal dialogs requiring acknowledgment before proceeding.
- Never use modals for non-critical error types.
- Dismissible alerts for informational messages; persistent, non-dismissible for system warnings requiring action.
- Error alerts must explain what went wrong AND how to fix it.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Task success rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Track error dismissal and recovery action rates by severity level in analytics to confirm users respond appropriately; run usability tests to measure whether severity-matched presentations (toast vs. modal vs. inline) improve task success rate.

## Sources
- [Nielsen Norman Group — Indicators, Validations, and Notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
- [Component Gallery — Alert](https://component.gallery/components/alert/)
- [Component Gallery — Toast](https://component.gallery/components/toast/)
- [Stack Overflow UX Discussion](https://stackoverflow.com/questions/735701/long-forms-best-way-to-display-errors-usability-question)
