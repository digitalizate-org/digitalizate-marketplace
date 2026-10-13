---
id: "UX-495"
title: "Uniform Connectedness: Use Visual Links to Define Object Identity"
category: "Gestalt Principles"
subcategory: "Uniform Connectedness"
score: 5
context: "Toolbars, breadcrumbs, segmented controls, tag systems, grouped form fields, data table headers"
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "navigation"
  - "tables"
wireframe: "https://files.catbox.moe/1ruka2.jpg"
notion: "https://app.notion.com/p/Uniform-Connectedness-Use-Visual-Links-to-Define-Object-Identity-5cfa9aed534482ba8bb781f5298bee6d"
---

## Why
Uniform Connectedness is among the strongest Gestalt grouping cues: elements that share a visible connection — a line, border, background field, or enclosing shape — are perceived as a single unified object before any other principle is applied. It overrides even proximity and similarity when they point to conflicting groupings. In web UI, connectedness is the engine behind breadcrumb separators, segmented control borders, tag pills, and grouped button toolbars. Because it is such a strong cue, misapplied connectedness (e.g., an unintentional border that visually joins two unrelated elements) creates persistent user confusion that cannot be corrected by other design choices. The NNGroup course identifies uniform connectedness as the principle most likely to 'win' when competing Gestalt cues are ambiguous.

## How to implement
- Use border or background enclosure only when elements genuinely belong to the same functional group — avoid decorative borders
- In toolbars, join related action buttons with a shared container or segmented control border; leave space between distinct tool clusters
- Apply a consistent tag/chip pill style (border + background) to all labels in the same semantic category
- In breadcrumbs, use the separator character (/ or ›) as a connector that links path segments into a single navigation unit
- Avoid adding lines or boxes purely for decoration — every border implies connectedness and creates a perceived group
- Test connectedness clarity by printing in grayscale: groups defined only by color will collapse; border-based groups will survive

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Conduct object-identification tasks where users must determine which UI elements belong together; measure accuracy and time-to-comprehend when visual links (borders, backgrounds, connecting lines) are used versus absent.
- Use border or background enclosure only when elements genuinely belong to the same functional group — avoid decorative borders
- In toolbars, join related action buttons with a shared container or segmented control border; leave space between distinct tool clusters
- Apply a consistent tag/chip pill style (border + background) to all labels in the same semantic category
- In breadcrumbs, use the separator character (/ or ›) as a connector that links path segments into a single navigation unit
- Avoid adding lines or boxes purely for decoration — every border implies connectedness and creates a perceived group
- Test connectedness clarity by printing in grayscale: groups defined only by color will collapse; border-based groups will survive

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [Smashing Magazine — Gestalt Principles](https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/)
- [IxDF — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
