---
id: "UX-498"
title: "Similarity: Encode Function Through Consistent Visual Attributes"
category: "Gestalt Principles"
subcategory: "Similarity"
score: 5
context: "Design systems, component libraries, button hierarchies, navigation, status indicators, data tables"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "navigation"
  - "tables"
  - "accessibility"
  - "design-system"
wireframe: "https://files.catbox.moe/myjs5e.jpg"
notion: "https://app.notion.com/p/Similarity-Encode-Function-Through-Consistent-Visual-Attributes-91ea9aed53448332b7fe01003d323465"
---

## Why
The Law of Similarity holds that elements sharing visual attributes — color, shape, size, texture, orientation — are perceived as members of the same group. In UI, similarity is the mechanism behind design systems: all primary buttons look alike to signal functional equivalence; all error states share red coloring to signal category membership; all disabled states share reduced opacity to signal non-interactivity. The NNGroup course identifies four similarity subfacets relevant to web design: color similarity, shape similarity, size similarity, and texture/pattern similarity. No single dimension is sufficient alone — WCAG 1.4.1 requires non-color cues for interactive identification. Stacking two or more similarity dimensions creates 'redundant coding,' which ensures grouping is perceivable across all vision types and contexts.

## How to implement
- Define exactly one visual style per interactive tier: Primary, Secondary, Tertiary, Destructive — with non-overlapping signatures
- Stack at least two similarity dimensions: color + shape, or size + weight, so groupings survive grayscale and colorblind views
- Store all similarity-defining properties as design tokens; reference only tokens, never raw CSS values
- Test button tiers against each other in grayscale: if Primary and Secondary are indistinguishable, add a shape or size cue
- Apply dissimilarity intentionally to mark state changes: disabled elements should differ on at least two dimensions from active
- In data tables, combine row banding (color) with consistent row height (size) to create redundant similarity cues for row grouping

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Design system consistency score
- **Efficiency**: Time to identify interactive elements, Error rate reduction
- **Accessibility**: WCAG 1.4.1 compliance, Colorblind user success rate
**How to measure**: Run grayscale tests to verify element differentiation without color; track design token adoption rate in components; measure user error rates from misidentified button tiers.

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [NNGroup — Gestalt Similarity](https://www.nngroup.com/articles/gestalt-similarity/)
- [IxDF — Law of Similarity](https://www.interaction-design.org/literature/topics/law-of-similarity)
