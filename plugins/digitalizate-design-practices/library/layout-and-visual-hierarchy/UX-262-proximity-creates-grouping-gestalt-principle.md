---
id: "UX-262"
title: "Proximity Creates Grouping — Gestalt Principle"
category: "Layout & Visual Hierarchy"
subcategory: "Gestalt Design Principles"
score: 5
context: "Use when designing form layouts, dashboard cards, data tables, and any multi-section screen where visual grouping must replace decorative borders."
goals:
  - "Simplify a Cluttered Interface"
  - "Improve Readability & Visual Clarity"
wireframe: "https://files.catbox.moe/1w0sh8.jpg"
notion: "https://app.notion.com/p/Proximity-Creates-Grouping-Gestalt-Principle-022a9aed534483cba52f81b8cb8cf759"
---

## Why
Elements placed close together are perceived as belonging to the same group, regardless of other visual properties. This Gestalt principle is the primary tool for creating visual organization in data-heavy interfaces — using spacing rather than borders to communicate grouping reduces visual noise while maintaining perceptual organization. Misapplied proximity — placing unrelated elements close together — creates false grouping that confuses users and generates trust issues with data. The spacing system itself becomes the grouping mechanism when applied consistently.

## How to implement
- Replace all decorative borders and dividers with spacing.
- Maintain consistent spacing ratios: elements within a group spaced at X, groups spaced at 2–3X of that value.
- Apply an 8pt grid spatial system (4, 8, 16, 24, 32, 48, 64px steps) for all spacing decisions.
- Audit screens for proximity violations where unrelated elements appear adjacent.
- In forms, group related fields together with tight spacing and separate logical groups with 24–32px of vertical space.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Run first-click tests comparing layouts with tight proximity grouping versus spread-out arrangements to measure findability score; collect ease-of-use ratings post-task in moderated usability sessions.

## Sources
- [100 Things #9 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
