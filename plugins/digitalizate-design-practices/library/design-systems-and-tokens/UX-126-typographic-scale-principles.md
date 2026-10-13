---
id: "UX-126"
title: "Typographic Scale Principles"
category: "Design Systems & Tokens"
subcategory: "Typography System"
score: 5
context: "Use when establishing a design system from scratch or when standardizing typography in an existing product with inconsistent type usage."
goals:
  - "Design a Consistent System at Scale"
tags:
  - "design-system"
wireframe: "https://files.catbox.moe/svgzzj.jpg"
notion: "https://app.notion.com/p/Typographic-Scale-Principles-c44a9aed534482e3ac8e01a4a693a44f"
---

## Why
Define a typographic scale with a base size (typically 16px for body text) and a scaling ratio (Major Third 1.25, Perfect Fourth 1.333, or Minor Third 1.2 for compact UIs). Mathematical relationships between type sizes create visual harmony. Pair the type scale with a 4pt baseline grid so all line heights are divisible by 4, creating consistent vertical rhythm. The scale should define 6–9 steps from display down to caption, with each step having font-size, line-height (4pt grid multiple), and font-weight already decided.

## How to implement
- Define 6–9 type size steps: display, h1, h2, h3, body-lg, body, body-sm, caption.
- Each step specifies font-size, line-height (approximately 1.4–1.6× font size, rounded to a 4pt multiple), font-weight, and letter-spacing.
- Set line heights: large headings at 1.2×, body text at 1.5×, small/caption at 1.4×.
- For enterprise data-dense applications, a Minor Third ratio (1.2) produces a more compact scale than Perfect Fourth (1.333), which is more appropriate.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Average session duration
- **Satisfaction & Perception**: Ease-of-use score, SUS score
**How to measure**: Conduct usability tests comparing interfaces with consistent versus ad-hoc typographic scales, measuring time-on-task and findability scores; collect SUS scores to evaluate the overall clarity contribution of the scale.

## Sources
- [Design Systems — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
