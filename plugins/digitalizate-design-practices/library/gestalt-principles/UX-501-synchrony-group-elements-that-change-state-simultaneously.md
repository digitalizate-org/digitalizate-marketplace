---
id: "UX-501"
title: "Synchrony: Group Elements That Change State Simultaneously"
category: "Gestalt Principles"
subcategory: "Synchrony"
score: 4
context: "Filter-driven dashboards, skeleton loading states, multi-select list management, real-time monitoring interfaces"
goals:
  - "Simplify a Cluttered Interface"
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "gestalt-principles"
  - "navigation"
  - "dashboard"
  - "data-heavy"
  - "animation"
  - "desktop"
wireframe: "https://files.catbox.moe/4j7b34.jpg"
notion: "https://app.notion.com/p/Synchrony-Group-Elements-That-Change-State-Simultaneously-a39a9aed534483cebe8e016d0ac946ea"
---

## Why
The Law of Synchrony (also called temporal grouping) holds that elements that change state at exactly the same time are perceived as belonging to the same group — regardless of their spatial arrangement. The NNGroup course positions Synchrony as the static-world equivalent of Common Fate: where Common Fate applies to elements moving together, Synchrony applies to elements changing (appearing, disappearing, updating, highlighting) simultaneously. In web applications, Synchrony is the principle that makes skeleton loading screens effective: all placeholder elements appear and disappear at the same moment, declaring them a single loading unit. It also governs filter interactions: when a date filter change causes three chart headers to simultaneously show a loading spinner, users correctly infer those three charts are governed by the same filter.

## How to implement
- Coordinate skeleton loader appearance and disappearance: all skeletons in a filter-bound section should appear and resolve simultaneously
- When a global filter is applied, show loading state indicators on all affected components at precisely the same frame
- Use CSS transitions with the same duration and delay for all elements in a synchronized group — staggering breaks Synchrony
- Apply simultaneous highlight to all selected items in a multi-select list when a bulk action is triggered
- For real-time data dashboards, update all widgets on the same data refresh cycle rather than staggering individual widget polls
- Provide prefers-reduced-motion alternatives: replace simultaneous transitions with simultaneous opacity changes

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run usability tests measuring whether users correctly interpret simultaneously changing elements as related (e.g., linked chart and table updates); compare error rates and comprehension accuracy for synchronized versus unsynchronized state-change designs.
- Coordinate skeleton loader appearance and disappearance: all skeletons in a filter-bound section should appear and resolve simultaneously
- When a global filter is applied, show loading state indicators on all affected components at precisely the same frame
- Use CSS transitions with the same duration and delay for all elements in a synchronized group — staggering breaks Synchrony
- Apply simultaneous highlight to all selected items in a multi-select list when a bulk action is triggered
- For real-time data dashboards, update all widgets on the same data refresh cycle rather than staggering individual widget polls
- Provide prefers-reduced-motion alternatives: replace simultaneous transitions with simultaneous opacity changes

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [IxDF — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
- [UIUXDesigning — Gestalt Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
