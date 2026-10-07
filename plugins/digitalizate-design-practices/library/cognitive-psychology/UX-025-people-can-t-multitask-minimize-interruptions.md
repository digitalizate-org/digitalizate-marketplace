---
id: "UX-025"
title: "People Can't Multitask — Minimize Interruptions"
category: "Cognitive Psychology"
subcategory: "Attention Management"
score: 5
context: "Use when designing notification and interruption systems, and when deciding whether to integrate chat, alerts, or status feeds into focused work areas."
goals:
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "keyboard"
wireframe: "https://files.catbox.moe/w6yio3.jpg"
notion: "https://app.notion.com/p/People-Can-t-Multitask-Minimize-Interruptions-72ca9aed534483578f3901cfdcee27d1"
---

## Why
What users call "multitasking" is actually rapid task-switching, which incurs a significant cognitive switching cost each time. In enterprise software, designs that require simultaneous attention to multiple tasks or information streams impose significant cognitive cost. Notifications, popups, and chat integrations in complex productivity tools fragment attention and reduce the quality of focused work. Each interruption requires users to re-establish context after returning to their primary task, which research estimates costs 15–25 minutes of productive time per interruption for complex knowledge work.

## How to implement
- Minimize interruptions in focused work modes.
- Aggregate notifications rather than delivering them in real-time.
- Provide a "Focus mode" that suppresses non-critical interruptions.
- Design notifications as "pull" (user checks at their discretion) rather than "push" (delivered immediately) for all non-critical updates.
- Apply this principle when deciding whether new features that generate notifications should be integrated into the primary work surface or relegated to a separate notification panel.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts, Completion time
  - **Effectiveness**: Task success rate, Completion rate, Error rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Track notification dismissal rates and interruption-triggered task abandonment rates via analytics. Conduct usability tests where participants complete tasks in interrupt-heavy vs. low-interrupt environments, measuring error rate and task completion time to quantify the cognitive cost of multitasking demands.

## Sources
- [100 Things #46 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
