---
id: "UX-200"
title: "Error State Messaging with Resolution Guidance"
category: "Feedback & Error Handling"
subcategory: "Error Messages"
score: 5
context: "All validation errors, system errors, permission errors, and failed operations throughout the application. Generic error messages are the most common source of unnecessary support tickets."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
  - "forms"
  - "error-handling"
wireframe: "https://files.catbox.moe/o2a145.jpg"
notion: "https://app.notion.com/p/Error-State-Messaging-with-Resolution-Guidance-b09a9aed534482448c0881910234f6cc"
---

## Why
Error messages in enterprise applications must answer three questions: (1) What went wrong? (2) Why did it happen? (3) What should I do next? Generic messages like "An error occurred" or "Invalid input" are worse than useless — they add confusion without providing resolution. Specific, actionable error messages reduce support burden, user frustration, and task abandonment. They also communicate that the system is transparent and trustworthy.

## How to implement
- Error anatomy: (1) Short headline describing what failed; (2) Plain-language explanation of why; (3) Specific action to resolve — link to relevant documentation, retry button, or contact support with a pre-populated error code.
- For form validation: show errors inline adjacent to the field immediately after blur (not only on submit).
- For system errors: display a support-friendly error code alongside the human message so users can reference it in a ticket.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Measure error recovery rate (percentage of users who successfully resolve an error state without abandoning) before and after implementing resolution guidance in error messages. Track support ticket volume for error-state categories and monitor task completion rates on error-prone flows over time.

## Sources
- [Carbon Design System — Notifications](https://carbondesignsystem.com/patterns/overview/)
