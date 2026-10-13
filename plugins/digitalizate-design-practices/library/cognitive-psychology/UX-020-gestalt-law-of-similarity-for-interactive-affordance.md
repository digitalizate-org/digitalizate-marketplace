---
id: "UX-020"
title: "Gestalt — Law of Similarity for Interactive Affordance"
category: "Cognitive Psychology"
subcategory: "Visual encoding consistency"
score: 5
context: "Apply to status badges, category labels, icon families, interactive vs. non-interactive elements, table column types, CTA vs. secondary button differentiation."
goals:
  - "Leverage Psychology to Guide User Behavior"
wireframe: "https://files.catbox.moe/swgn7m.jpg"
notion: "https://app.notion.com/p/Gestalt-Law-of-Similarity-for-Interactive-Affordance-597a9aed534482a3b8bd81ebe566b2f0"
---

## Why
Elements sharing color, shape, size, or orientation are perceived as related. This means a consistent visual style for all clickable elements creates instant recognition of what is interactive — users see a button-styled element and know it's clickable without reading. Conversely, elements that look the same but behave differently create confusion. Consistent column-type formatting in data tables (all currency columns identical, all date columns identical) allows column-based scanning rather than cell-by-cell reading.

## How to implement
- Use consistent visual style (same color, border-radius, icon weight) for all clickable/actionable elements.
- Apply consistent status badge colors across all contexts: green = success, red = error, yellow = warning, gray = neutral.
- Ensure links/navigation items are clearly visually differentiated from plain text — don't rely on hover state alone.
- In data tables, format column types consistently — all currency columns identically, all date columns identically.
- Establish a three-state visual language: default/interactive, selected/active, non-interactive.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Training time
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Conduct first-click tests and interactive affordance studies to measure whether visual similarity correctly cues users to interactive elements; track error rates from incorrect element activation in usability sessions.

## Sources
- [Laws of UX — Law of Similarity](https://lawsofux.com/law-of-similarity/)
