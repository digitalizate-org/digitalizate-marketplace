---
id: "UX-188"
title: "Visibility of System Status"
category: "Feedback & Error Handling"
subcategory: "Real-time feedback and system communication"
score: 5
context: "Apply any time the system performs an action with a consequence the user initiated — file saves, submissions, background processing, data loads. Essential whenever there is any latency between action and outcome."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "performance"
wireframe: "https://files.catbox.moe/hw0dh9.jpg"
notion: "https://app.notion.com/p/Visibility-of-System-Status-244a9aed534483f4890d019066415d8e"
---

## Why
The system must always keep users informed about what is going on through timely, appropriate feedback. Predictable interactions build trust; silent systems create confusion and loss of confidence. The Doherty Threshold establishes that responses must arrive within 400ms to maintain flow — anything slower requires visible feedback. Visibility of status is the single most-violated heuristic in enterprise applications, where background processes are common.

## How to implement
- Provide immediate visual feedback within 100ms of any user action (button state change at minimum).
- Use spinners for isolated element loads under 10 seconds, skeleton screens for full-page/panel loads of 2–10 seconds, and progress bars with time estimates for operations over 10 seconds.
- For operations completing in under 1 second, show a brief success indicator (toast or inline checkmark) to confirm the action registered.
- Never leave the user with no signal that their action was received.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Log error and retry events in analytics to measure how often users act without feedback; run moderated usability tests comparing interfaces with and without clear status indicators to track task success and confidence ratings.

## Sources
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/)
