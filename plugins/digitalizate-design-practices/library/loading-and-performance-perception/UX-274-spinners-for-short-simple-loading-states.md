---
id: "UX-274"
title: "Spinners for Short, Simple Loading States"
category: "Loading & Performance Perception"
subcategory: "Loading Patterns"
score: 4
context: "Use for button loading states after submission, small component updates, and non-structural asynchronous operations under 3 seconds."
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "performance"
wireframe: "https://files.catbox.moe/ojw97w.jpg"
notion: "https://app.notion.com/p/Spinners-for-Short-Simple-Loading-States-9f6a9aed53448319bb70016dd85d288e"
---

## Why
Use a spinner (indeterminate circular indicator) for short operations under 1–2 seconds or for tasks where the loaded content structure is not predictable. Spinners are appropriate for form submissions, small component updates, and button loading states — contexts where a skeleton screen would be more complex to implement than the content it represents. The most common failure mode is using spinners as full-page loading states for operations that take more than 3 seconds, where skeleton screens or progress bars would dramatically improve the experience.

## How to implement
- Replace button label with a spinner icon and descriptive text on click (e.g., "Saving...").
- Prevent double-submission by disabling the button during loading.
- Indicate text alongside the spinner for operations over 500ms.
- For operations that complete in under 300ms, no loading state is needed.
- Ensure spinners are visually accessible — use sufficient contrast against their background and consider a text label for screen reader users ("Loading, please wait").

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
- **Engagement & Usage**: Abandonment rate
**How to measure**: Measure the rate at which users retry or abandon actions during loading states (double-click errors, rage clicks) using session recording tools. Compare abandonment rates between loading states with spinners versus those without feedback, and survey users on their confidence that actions were registered.

## Sources
- [LogRocket — Skeleton Loading Screens](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/)
