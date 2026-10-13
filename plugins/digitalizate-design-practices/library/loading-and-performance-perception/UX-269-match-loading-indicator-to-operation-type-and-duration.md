---
id: "UX-269"
title: "Match Loading Indicator to Operation Type and Duration"
category: "Loading & Performance Perception"
subcategory: "Loading indicator selection"
score: 5
context: "Apply any time a user must wait for a system operation. Mismatching indicator type to operation context causes confusion about what the system is doing."
goals:
  - "Improve Perceived Performance & Loading"
tags:
  - "performance"
wireframe: "https://files.catbox.moe/t19jwk.jpg"
notion: "https://app.notion.com/p/Match-Loading-Indicator-to-Operation-Type-and-Duration-3dba9aed5344832096670149b9253878"
---

## Why
Skeleton screens, spinners, and progress bars serve different purposes and work best in different contexts. Using a skeleton screen for a file upload or a spinner for an expected 30-second report generation mismatches user expectations. For background tasks, a persistent progress indicator in the app header/status bar allows users to continue working rather than blocking on the current view. Determinate progress bars (0–100%) should be used when remaining work can be calculated.

## How to implement
- Spinner: use for isolated element loads (single card, table row, button state) with waits under 10 seconds.
- Skeleton screen: use for full-page or major panel loads with waits of 2–10 seconds.
- Progress bar: use for process-related operations (file upload, download, batch processing) — required for anything over 10 seconds.
- Never use a full-page spinner — replace with skeleton screen for full-page loads.
- For background tasks, use a persistent progress indicator in the header/status bar.
- Always pair progress bars with text ("Processing 1,247 of 5,000 records — ~2 min remaining").

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Error counts
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
- **Engagement & Usage**: Abandonment rate
**How to measure**: Use session recordings to identify operations where users take redundant actions (repeated clicks, navigating away prematurely) and correlate with operations that lack appropriate loading indicators. A/B test progress bars versus spinners for operations over 3 seconds, measuring abandonment rate and confidence ratings post-task.

## Sources
- [Nielsen Norman Group — Skeleton Screens 101](https://www.nngroup.com/articles/skeleton-screens/)
- [Good UI — Faster Load Times / Progress Indicators](https://goodui.org/#39)
- [Component Gallery — Progress Bar](https://component.gallery/components/progress-bar/)
- [Carbon Design System — Loading](https://carbondesignsystem.com/patterns/overview/)
