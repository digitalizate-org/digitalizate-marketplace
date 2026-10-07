---
id: "UX-270"
title: "Doherty Threshold — Target Sub-400ms Response for Interactive Operations"
category: "Loading & Performance Perception"
subcategory: "Performance and perceived responsiveness"
score: 5
context: "Apply to all interactive operations in data-heavy applications — search queries, filter application, record saves, chart renders, table sorts, API calls, form validation."
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "performance"
  - "forms"
  - "tables"
wireframe: "https://files.catbox.moe/f1r0h6.jpg"
notion: "https://app.notion.com/p/Doherty-Threshold-Target-Sub-400ms-Response-for-Interactive-Operations-a60a9aed534482c1aff901e17a1b002e"
---

## Why
Productivity soars when a computer and users interact at a pace under 400ms, ensuring neither has to wait. Operations taking longer than 400ms break the user's flow state and signal that the system is slow — eroding trust. For operations that cannot complete in 400ms, immediate visual feedback within 100ms of the user action is the minimum requirement. Counterintuitively, adding a deliberate brief delay to a "Save" confirmation (showing a progress animation for 600ms even if the save took 50ms) can increase perceived reliability and trust.

## How to implement
- Target sub-400ms response for all interactive operations; optimize queries, add caching, paginate results server-side.
- For operations not completable in 400ms, provide immediate visual feedback (button state change, spinner) within 100ms.
- Use skeleton screens and progress indicators to reduce perceived wait.
- Animate non-critical transitions to occupy perception during background processing.
- For "Save" confirmations, show a brief progress animation even if the save was instant — this increases perceived reliability.
- Load critical above-the-fold data first; progressively load secondary panels.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Completion time, Time saved per task
  - **Satisfaction & Perception**: Ease-of-use score, CSAT, Satisfaction rating
  - **Engagement & Usage**: Abandonment rate, Bounce rate, Sessions per user
  **How to measure**: Measure interaction latency using performance monitoring tools (e.g., Real User Monitoring) and correlate response times against abandonment rates and satisfaction scores. A/B test optimized vs. unoptimized interactions and track session continuation rates post-interaction.

## Sources
- [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/)
