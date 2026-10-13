---
id: "UX-331"
title: "Global Search with Federated Results"
category: "Search Filter & Sort"
subcategory: "Global Search"
score: 5
context: "Any enterprise application with multiple object types and more than 1,000 total records across the system."
goals:
  - "Build Effective Search & Filter"
tags:
  - "search"
wireframe: "https://files.catbox.moe/juqw27.jpg"
notion: "https://app.notion.com/p/Global-Search-with-Federated-Results-2e6a9aed534483359f1481802577bd9d"
---

## Why
A global search spanning multiple entity types (Customers, Orders, Projects, Documents, Settings, Users) and presenting grouped, type-labeled results in a single overlay lets users find anything without knowing where it lives in the navigation hierarchy. This is particularly powerful in enterprise applications where the information architecture may not be intuitive to all users or where users work across multiple modules. Including recently viewed items as default suggestions creates a "recent work" shortcut that eliminates navigating to commonly accessed records.

## How to implement
- Trigger: Ctrl+K.
- Show recent items as defaults before typing.
- As user types: federated search with <200ms debounce, results grouped by entity type with section headers.
- Include a "Search everything for 'X'" footer option to expand to full results page.
- Show keyboard shortcuts for opening results.
- Enforce access control: only show results the user has permission to view (checked server-side, not just filtered client-side).

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time to find information, Support tickets reduction
- **Satisfaction**: User satisfaction score (CSAT/NPS), Perceived performance
**How to measure**: Track zero-results search rate and time-to-find-item before and after; monitor support ticket volume for navigation/search issues; run satisfaction surveys tied to search usage.

## Sources
- [Merveilleux.design](http://merveilleux.design/)
- [— SaaS Navigation Types](https://www.merveilleux.design/en/blog/article/comprehensive-guide-for-saas-products-on-ux-navigation-types)
