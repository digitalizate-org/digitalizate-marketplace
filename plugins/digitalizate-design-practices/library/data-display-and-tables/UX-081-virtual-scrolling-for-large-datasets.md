---
id: "UX-081"
title: "Virtual Scrolling for Large Datasets"
category: "Data Display & Tables"
subcategory: "Performance Optimization"
score: 5
context: "Tables with server-side data that may grow to thousands of rows. Critical in audit logs, transaction history, event streams, and large inventory tables."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design for Enterprise & B2B Scale"
tags:
  - "performance"
  - "forms"
wireframe: "https://files.catbox.moe/efv9is.jpg"
notion: "https://app.notion.com/p/Virtual-Scrolling-for-Large-Datasets-6d2a9aed53448354bbd881fc39cf67c5"
---

## Why
Virtual (windowed) scrolling renders only the visible rows plus a small buffer, updating the DOM dynamically as the user scrolls. This keeps memory usage low, maintains 60 FPS scroll performance, and supports datasets of 10,000+ rows without interface degradation. Rendering all rows at once is the most common cause of data table performance failures in enterprise applications — a table with 5,000 fully rendered rows can consume hundreds of megabytes of DOM and produce unacceptable scroll lag.

## How to implement
- Target performance thresholds: initial render <300ms for first 50 rows, <50MB memory for 10,000 rows, 60 FPS scrolling.
- Use row height estimates for variable-height rows with a correction pass after first render.
- Show skeleton loading state while fetching new rows during scroll.
- Keep sticky headers and action toolbars outside the virtual scroll container so they remain functional at all times.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Page load time, Time on task
- **Effectiveness**: Task success rate, Completion rate
- **Engagement & Usage**: Abandonment rate, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Measure page rendering time and Time to Interactive for large dataset views before and after implementing virtual scrolling, using browser performance profiling. Track task completion rates and abandonment rates on data-heavy screens as a functional indicator that performance improvements translate to better user outcomes.

## Sources
- [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
