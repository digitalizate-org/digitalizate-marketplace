---
id: "UX-323"
title: "Provide Navigation Alongside Search — Not Search Alone"
category: "Search Filter & Sort"
subcategory: "Search and navigation complementarity"
score: 5
context: "Apply to any application with a large content or data set where users may approach with varying levels of familiarity — search alone fails exploratory and exhaustive seeking modes."
goals:
  - "Build Effective Search & Filter"
tags:
  - "search"
  - "tables"
  - "navigation"
wireframe: "https://files.catbox.moe/ywlp41.jpg"
notion: "https://app.notion.com/p/Provide-Navigation-Alongside-Search-Not-Search-Alone-b28a9aed534483698d5c01f437d86ee1"
---

## Why
Relying solely on search forces users to formulate queries from scratch — a memory-intensive, error-prone process that fails when users don't know the exact terminology or what's available. Navigation alongside search enables users to browse and build a mental model of the available data space. For enterprise tools with specialized vocabularies (field names, system identifiers, product codes), navigation and facets are essential companions to search that allow recognition-over-recall.

## How to implement
- Pair global search with structured faceted navigation for complex datasets.
- Provide category landing pages that expose available subcategories and attributes.
- Implement facets to transform typed search into recognizable option-selection.
- Use autosuggestions to reduce query formulation burden.
- For global search, open a full search overlay on focus that shows recent searches and quick-navigation suggestions.
- Never design search as the only way to reach content.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Engagement & Usage**: Bounce rate, Pages per session
**How to measure**: Track zero-result search rates and bounce rates for search-only versus search-plus-navigation interfaces in analytics; run usability tests with browsing and searching tasks to measure findability score across both navigation modalities.

## Sources
- [Nielsen Norman Group — Search Is Not Enough](https://www.nngroup.com/articles/search-not-enough/)
