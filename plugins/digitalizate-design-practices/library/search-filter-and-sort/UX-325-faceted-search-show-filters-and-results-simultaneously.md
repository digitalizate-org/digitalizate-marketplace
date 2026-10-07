---
id: "UX-325"
title: "Faceted Search — Show Filters and Results Simultaneously"
category: "Search Filter & Sort"
subcategory: "Faceted search architecture"
score: 5
context: "Apply to all faceted search implementations in enterprise data management, content management, and any large record set where progressive filtering is the primary navigation mode."
goals:
  - "Build Effective Search & Filter"
  - "Structure Navigation for Deep Products"
tags:
  - "search"
  - "tables"
  - "navigation"
wireframe: "https://files.catbox.moe/ipbd28.jpg"
notion: "https://app.notion.com/p/Faceted-Search-Show-Filters-and-Results-Simultaneously-73ea9aed534483508e4401b7c5114113"
---

## Why
The key advantage of faceted search over "advanced search" forms is simultaneous display of filter controls and results. Instant result updates as filters are applied make the relationship between selection and outcome immediately visible, enabling trial-and-error filtering without pogo-sticking between screens. Avoid "Apply" buttons for filter selection — applying filters immediately on selection creates the real-time feedback that makes faceted search powerful.

## How to implement
- Display facet controls in a left sidebar or inline panel adjacent to results.
- Update result counts dynamically as users select/deselect filters.
- Show active filters as removable chips above the results set.
- Avoid "Apply" buttons — apply filters immediately on selection.
- Provide a "Clear All Filters" shortcut to reset the search state.
- Show "No results" states specifically when filters cause an empty set, with a suggestion to adjust filters — differentiate from "nothing exists" states.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Sessions per user, Pages per session
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run task-based usability tests where users must locate specific items within a large catalog, measuring time on task and success rate for faceted versus non-faceted search. Track search abandonment rate in analytics as a proxy for unmet search intent.

## Sources
- [Nielsen Norman Group — Filters vs. Facets](https://www.nngroup.com/articles/filters-vs-facets/)
- [A List Apart — Design Patterns: Faceted Navigation](https://alistapart.com/article/design-patterns-faceted-navigation/)
