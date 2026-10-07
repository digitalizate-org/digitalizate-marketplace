---
id: "UX-328"
title: "Faceted Filtering Over Browse Hierarchies"
category: "Search Filter & Sort"
subcategory: "Filter Design"
score: 5
context: "Use when designing search and retrieval for data-rich applications and when users report difficulty finding records in hierarchical navigation."
goals:
  - "Build Effective Search & Filter"
  - "Structure Navigation for Deep Products"
tags:
  - "search"
  - "enterprise"
  - "tables"
  - "forms"
wireframe: "https://files.catbox.moe/2z1vr8.jpg"
notion: "https://app.notion.com/p/Faceted-Filtering-Over-Browse-Hierarchies-936a9aed53448379b33981925f20b196"
---

## Why
For large data sets, faceted search — multi-dimensional filtering across multiple attributes simultaneously — is dramatically more efficient than hierarchical browse trees. Users searching for "Q3 reports, approved, finance department" should apply all three filters simultaneously, not drill down through a three-level hierarchy one step at a time. Faceted search aligns with how users actually think about data — in multiple dimensions — rather than how databases organize it. Show result counts per facet value to help users calibrate their filter selections.

## How to implement
- Identify the 5–8 most common filter dimensions for each major entity type through user research.
- Implement facet panels that show available values and record counts.
- Support multi-select within facets.
- Persist filter state in the URL for shareability.
- Show applied filters as removable chips or tags above results with a "Clear all" option.
- Update result counts dynamically as filters are applied to give users immediate feedback on filter impact.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Feature usage, Bounce rate, Pages per session
**How to measure**: A/B test faceted filtering against browse-hierarchy navigation for catalog or search-result pages; measure findability score and time-to-result in usability tests, and track filter engagement rate and bounce rate via analytics.

## Sources
- [About Face Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
