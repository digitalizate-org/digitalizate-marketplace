---
id: "UX-523"
title: "Continuation Anti-Pattern: Text Color Overriding Reading Order"
category: "Gestalt Principles"
subcategory: "Continuation — Anti-Pattern"
score: 4
context: "Data visualization labels, tagged content systems, pricing tables, annotated charts"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "tables"
  - "design-system"
  - "data-heavy"
wireframe: "https://files.catbox.moe/hijx7e.jpg"
notion: "https://app.notion.com/p/Continuation-Anti-Pattern-Text-Color-Overriding-Reading-Order-edca9aed53448288900a0193b0853268"
---

## Why
Continuation operates on visual trajectories — the path the eye follows across a layout. When text content is arranged in a left-to-right horizontal line, continuation predicts the eye will read it as a single sequence regardless of color grouping applied as a secondary cue. Playfair Data documents a real-world failure case where a phrase like 'End Season of Sale' was split into color-coded tokens intended to convey distinct meanings, but continuation caused users to read it as a single sentence, overriding the color-based segmentation. This is particularly dangerous in data labels, tag systems, and annotated charts where text strings run horizontally and color is expected to carry independent meaning.

## How to implement
- When using color coding within a horizontal text string, add spatial breaks or delimiters between color-grouped segments
- Never rely on color alone to separate adjacent text tokens that follow a natural left-to-right reading trajectory
- In data visualization axis labels, align labels directly beneath their corresponding data point rather than inline
- Test color-coded text layouts with screen readers and color-blind simulations to verify semantic structure is preserved

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Average session duration
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Run eye-tracking usability tests to detect non-linear reading order caused by color interruptions; compare comprehension accuracy and time-on-task between content with and without the anti-pattern applied.

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
