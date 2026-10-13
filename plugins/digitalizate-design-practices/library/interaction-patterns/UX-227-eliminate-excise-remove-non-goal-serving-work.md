---
id: "UX-227"
title: "Eliminate Excise — Remove Non-Goal-Serving Work"
category: "Interaction Patterns"
subcategory: "Interaction Efficiency"
score: 5
context: "Use during UX reviews of existing workflows, when users report tasks take \"too many steps,\" and when designing any approval or data entry workflow."
goals:
  - "Reduce Cognitive Load"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/p02dv6.jpg"
notion: "https://app.notion.com/p/Eliminate-Excise-Remove-Non-Goal-Serving-Work-a71a9aed534482a0865901ddc4734187"
---

## Why
"Excise" is work that users must do that serves the software rather than their goals — navigating to find something, clicking through confirmation dialogs that provide no safety value, filling in fields the system could derive. Eliminating excise is the primary lever for improving enterprise software usability without reducing functionality. Every click, navigation step, or data entry that doesn't directly serve a user goal is a candidate for elimination. In enterprise tools where users perform the same workflows hundreds of times per month, small excise costs compound into major productivity losses.

## How to implement
- Map every step in a key workflow and classify each as "goal-serving" (directly advances the user's goal) or "excise" (serves the system, not the user).
- For each excise step, evaluate whether it can be eliminated (auto-derived), automated (smart defaults), or moved to a less intrusive moment.
- Target at least 30% reduction in step count on any workflow flagged as "too many steps" by users.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Time on task, Time saved per task, Error counts
- **Engagement & Usage**: Abandonment rate
- **Revenue**: Conversion rate
**How to measure**: Map and time every step in a user flow to identify excise steps, then A/B test the streamlined flow against the original, measuring completion rate, time-on-task, and conversion rate. Monitor abandonment rates at each step to quantify where excise removal has the greatest impact.

## Sources
- [About Face 4th Ed., Ch. 11 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
