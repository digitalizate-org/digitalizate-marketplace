---
id: "UX-196"
title: "Change Blindness — Mark State Changes Explicitly"
category: "Feedback & Error Handling"
subcategory: "Real-Time Data Communication"
score: 5
context: "Use when designing real-time data displays, status indicators, and alerting systems for monitoring or operational dashboards."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "animation"
  - "data-heavy"
wireframe: "https://files.catbox.moe/1js1lb.jpg"
notion: "https://app.notion.com/p/Change-Blindness-Mark-State-Changes-Explicitly-5cba9aed5344824f9e9701063536df61"
---

## Why
Users miss changes in their visual field unless the change is in their area of focus, is immediately adjacent to where they're looking, or is accompanied by an animation or sound that draws peripheral attention. In enterprise applications with real-time data updates — dashboards, monitoring tools, live feeds — updated values that appear without visual emphasis are frequently missed entirely, with serious operational consequences. Even subtle changes in critical metrics can go unnoticed for minutes if the update is not visually marked.

## How to implement
- Mark all changed values with a temporary highlight animation (background color flash or border pulse) that draws attention to the specific element that changed.
- The animation should last 1–2 seconds then fade.
- Provide persistent visual indicators for values outside normal ranges (color coding, icons).
- Consider audible alerts for critical state changes in operational monitoring contexts.
- Test real-time update visibility with eyes-off testing — values should be noticed within 10 seconds of change.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Error counts, Support tickets reduction
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Run usability tests with tasks involving state changes; measure whether users notice the change (observation) and count errors caused by overlooked state updates; track support tickets citing confusion about current state before and after implementing explicit change markers.

## Sources
- [100 Things #8 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
