---
id: "UX-091"
title: "Treemap for Hierarchical Quantitative Data"
category: "Data Display & Tables"
subcategory: "Data Visualization"
score: 3
context: "When users need to compare relative sizes across a hierarchy — portfolio analysis, budget roll-ups, storage usage, sales composition. Use sparingly; only when hierarchy and proportion are both critical."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "data-heavy"
wireframe: "https://files.catbox.moe/fkl11x.jpg"
notion: "https://app.notion.com/p/Treemap-for-Hierarchical-Quantitative-Data-135a9aed53448268a8ef8199cc2673ac"
---

## Why
A treemap is a space-filling visualization that encodes hierarchical data as nested rectangles, where each rectangle's area is proportional to a quantitative value. Invented by Ben Shneiderman in 1991 at the University of Maryland, treemaps solve a specific perceptual challenge: displaying both the structure of a hierarchy and the relative magnitude of values within that hierarchy simultaneously in a single, compact view. This makes them uniquely valuable for portfolio analysis (showing allocation and composition), budget roll-ups (showing spend across organizational units), storage usage audits, and sales breakdown by region or product category — any scenario where the question is both "how much?" and "within what context?"
However, treemaps carry significant perceptual limitations that make them unsuitable as a general-purpose visualization. Human visual acuity for comparing areas is substantially weaker than for comparing lengths (bar charts) or positions (dot plots). Research by Cleveland and McGill (1984) established a perceptual hierarchy for graphical encoding; area comparison ranks near the bottom, meaning treemaps should only be used when the hierarchical structure is genuinely the primary insight, and approximate proportion is sufficient — users need to see that Division A is roughly twice the size of Division B, but do not need precise comparison. When precise comparison is required, a sortable table or bar chart is more appropriate.
From an interaction design standpoint, treemaps require careful attention to the hover and drill-down states. At high data densities, many rectangles become too small to display labels, making tooltips on hover a functional requirement rather than an enhancement. Drill-down interactions (clicking to zoom into a subtree) should preserve spatial context where possible — breadcrumb navigation above the treemap allows users to understand their current depth and navigate back without losing orientation. The Nielsen Norman Group recommends always offering an alternative tabular view alongside treemaps for data-heavy enterprise contexts, ensuring that users who need precise values or comparisons are not forced into an encoding that poorly serves those tasks.

## How to implement
- Use treemaps when users must understand both hierarchy (parent-child relationships) and relative size within that hierarchy simultaneously.
- Limit treemap depth to 2 levels in the initial view; allow drill-down for deeper exploration via click.
- Use color to encode a second variable (e.g., positive/negative change, category) when space labels are too small to read.
- Always provide a tooltip with exact values on hover, since comparing precise sizes is difficult with area encoding.
- Pair treemaps with a sortable table view as an alternate representation for users who prefer data over visualization.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Findability score
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run comparison tasks ("Which category occupies the largest share?") against alternative visualizations (e.g., nested lists, bar charts) measuring time on task and accuracy rate. Use a comprehension survey after each chart type to assess whether the treemap produces correct mental models of part-to-whole relationships.

## Sources
- [Nielsen Norman Group — Treemaps](https://www.nngroup.com/articles/treemaps/)
