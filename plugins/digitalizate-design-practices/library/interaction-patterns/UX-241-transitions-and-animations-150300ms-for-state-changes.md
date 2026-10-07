---
id: "UX-241"
title: "Transitions and Animations — 150–300ms for State Changes"
category: "Interaction Patterns"
subcategory: "Motion and transition design"
score: 4
context: "Apply to panel open/close, accordion expand/collapse, sidebar collapse, modal appearance/dismissal, tooltip show/hide, filter panel open, row expand."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "animation"
  - "design-system"
  - "accessibility"
wireframe: "https://files.catbox.moe/bslc5b.jpg"
notion: "https://app.notion.com/p/Transitions-and-Animations-150-300ms-for-State-Changes-caaa9aed534482f0b06901fb28acf0ed"
---

## Why
Transitions give users time to comprehend UI state changes — elements that appear, disappear, shift, or resize are easier to follow when they transition smoothly vs. changing instantly. Delays over 500ms cause impatience for power users performing repetitive actions. Motion can communicate directionality: a slide-in from the right signals "drilling in"; a slide-back signals "returning." Always respect `prefers-reduced-motion` for users with vestibular disorders.

## How to implement
- Use 150–300ms eased transitions for most UI state changes — fast enough to feel responsive, slow enough to track visually.
- Avoid transitions over 400ms for routine interactions (sorting, closing dropdowns) — this feels sluggish to power users.
- Use motion to communicate directionality: slide-in from right for drilling in, slide-back for returning, fade-in for new content appearing in place.
- Always implement `prefers-reduced-motion` media query to disable or reduce motion for users who require it.
- Don't animate transitions for every interaction — reserve animation for meaningful state changes.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: A/B test animation durations (e.g., 0ms, 150ms, 300ms, 600ms) for key state transitions, measuring task completion time and collecting CSAT or ease-of-use ratings; monitor task error rates where instant transitions may be misinterpreted as no-response.

## Sources
- [Good UI — Transitions and Animations](https://goodui.org/#21)
- [Microsoft Fluent 2 — Motion](https://fluent2.microsoft.design/motion)
- [AlterSquare — Microinteractions](https://altersquare.io/micro-interactions-that-actually-improve-user-experience-with-examples/)
