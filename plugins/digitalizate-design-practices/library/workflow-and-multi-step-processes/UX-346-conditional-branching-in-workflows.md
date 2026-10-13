---
id: "UX-346"
title: "Conditional Branching in Workflows"
category: "Workflow & Multi-Step Processes"
subcategory: "Wizard Design"
score: 4
context: "Use when a workflow serves multiple user types or scenarios (e.g., individual vs. business account, new vs. returning customer), or when certain steps only apply under specific conditions."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design for Enterprise & B2B Scale"
tags:
  - "workflow"
  - "forms"
wireframe: "https://files.catbox.moe/gfxewl.jpg"
notion: "https://app.notion.com/p/Conditional-Branching-in-Workflows-c79a9aed53448263ae2f01e64fbc129c"
---

## Why
Conditional logic in multi-step workflows shows, hides, or reorders steps based on prior inputs or user role — avoiding the presentation of irrelevant questions that increase cognitive load and reduce trust. This is especially important in enterprise forms where the same UI may serve an IT admin, a department manager, and an end user with very different data requirements. Branching must be implemented transparently so users understand why certain steps appear or disappear.

## How to implement
- Map the full decision tree before building the UI — identify every branch condition and its downstream impact on step structure.
- Use role or answer-triggered visibility rules.
- Update the step indicator dynamically as the workflow adapts.
- Recalculate step totals smoothly (never abruptly jump step numbers).
- When a step is conditionally added, visually highlight it as "new" with a brief animation or badge.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate, Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Instrument workflow branches in analytics to measure per-path completion and drop-off rates; run usability tests comparing linear versus conditional branching flows on task success rate and time-on-task.

## Sources
- [Andrew Coyle — How to Design a Form Wizard](https://www.andrewcoyle.com/blog/how-to-design-a-form-wizard)
