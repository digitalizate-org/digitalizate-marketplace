---
id: "UX-124"
title: "8pt Grid Spatial System"
category: "Design Systems & Tokens"
subcategory: "Spacing System"
score: 5
context: "Use when establishing a design system from scratch, or when retrofitting spacing consistency onto an existing product with inconsistent spacing."
goals:
  - "Simplify a Cluttered Interface"
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/i815vx.jpg"
notion: "https://app.notion.com/p/8pt-Grid-Spatial-System-509a9aed5344838d935a818a4c38fe2f"
---

## Why
Use a base-8 spatial system — 4pt half-step, 8pt base unit, then 16, 24, 32, 40, 48, 64, 80, 96px increments — for all spacing, padding, margin, and sizing decisions. The 8pt grid works because most screen pixel densities are divisible by 8, producing pixel-perfect rendering at all scales. It dramatically reduces the number of spacing decisions designers make daily and eliminates the "close enough" pixel discrepancies that accumulate in inconsistent codebases. This is the spacing foundation of major design systems including Material Design, Carbon, and Fluent.

## How to implement
- Define spacing tokens: `space-1: 4px`, `space-2: 8px`, `space-3: 12px`, `space-4: 16px`, `space-5: 24px`, `space-6: 32px`, `space-7: 48px`, `space-8: 64px`.
- Ban arbitrary pixel values from all component implementations.
- Document the grid in the design system and enforce via design token adoption.
- For components requiring half-steps (small icon padding), allow 4px as the minimum unit.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Training time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, Brand perception
**How to measure**: Measure design production speed and the number of spacing-related QA bugs before and after adopting the 8pt grid. Supplement with user perception surveys on perceived polish and visual consistency — consistent spatial rhythm improves brand perception and perceived quality scores even if users cannot articulate why.

## Sources
- [Design Systems — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
