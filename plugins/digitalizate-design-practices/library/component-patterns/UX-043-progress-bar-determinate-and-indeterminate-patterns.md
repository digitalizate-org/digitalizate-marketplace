---
id: "UX-043"
title: "Progress Bar — Determinate and Indeterminate Patterns"
category: "Component Patterns"
subcategory: "Progress bar design"
score: 5
context: "Apply to file uploads, bulk data imports/exports, report generation, batch processing, and multi-step wizard completion."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/j4n3ez.jpg"
notion: "https://app.notion.com/p/Progress-Bar-Determinate-and-Indeterminate-Patterns-926a9aed534482058db20193bbe337dd"
---

## Why
Progress bars communicate completion status of long-running tasks. Determinate (0–100%) bars are appropriate when remaining work can be calculated; indeterminate (animated pulsing) when duration is unknown. Always pair a progress bar with text showing percentage AND/OR an ETA ("Processing 1,247 of 5,000 records — ~2 min remaining"). For background tasks, a persistent progress indicator in the app header/status bar allows users to continue working rather than blocking the current view.

## How to implement
- Use determinate progress bars when remaining work can be calculated; indeterminate animated bars when duration is unknown.
- Always pair with text: percentage complete AND/OR an ETA.
- For background tasks, show a persistent progress indicator in the header/status bar — don't block the current view.
- Update in real time — don't jump from 0% to 100%.
- For long-running operations (over 30 seconds), send a completion notification when done, with a summary of results.
- Consider a "Cancel" option for long operations where the user might want to abort.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Error counts
- **Engagement & Usage**: Abandonment rate, Sessions per user
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run moderated usability tests comparing tasks with and without clear progress indicators, tracking completion rates and perceived wait time via post-task surveys. Monitor abandonment rates in analytics for multi-step flows where progress bars are introduced via A/B test.

## Sources
- [Component Gallery — Progress Bar](https://component.gallery/components/progress-bar/)
