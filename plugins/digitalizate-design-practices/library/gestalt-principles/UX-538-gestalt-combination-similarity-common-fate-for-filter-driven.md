---
id: "UX-538"
title: "Gestalt Combination: Similarity + Common Fate for Filter-Driven Dashboards"
category: "Gestalt Principles"
subcategory: "Advanced Combination: Similarity + Common Fate"
score: 4
context: "Interactive dashboards, BI tools, analytics platforms with user-controllable filters"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design Effective Feedback & Error States"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "dashboard"
  - "cognitive-load"
  - "responsive"
  - "data-heavy"
  - "animation"
wireframe: "https://files.catbox.moe/u1xjse.jpg"
notion: "https://app.notion.com/p/Gestalt-Combination-Similarity-Common-Fate-for-Filter-Driven-Dashboards-38ba9aed53448335803a815bf48b524f"
---

## Why
When a dashboard filter is applied, multiple charts need to update simultaneously to reflect the new data slice. Combining Similarity (all affected charts share the same visual style) with Common Fate (all charts animate/update simultaneously) creates a powerful double signal: 'these are the same kind of thing, and they share a fate.' Users immediately understand which charts are filter-bound and which are static reference charts (which do not animate). This pattern is documented in Playfair Data's research as a best practice for filter-responsive dashboards and mirrors the [UIUXDesigning.com](http://uiuxdesigning.com/) research on synchronized animations reducing cognitive load.

## How to implement
- Apply identical loading/update animation to all filter-bound charts (Common Fate)
- Keep static reference charts visually distinct with a subtle style difference (e.g., muted header color)
- Use a shared skeleton loading state for all filter-bound charts that appears and disappears simultaneously
- Pair with a visual filter indicator (highlighted filter chip) so users understand what triggered the Common Fate update
- Time the Common Fate animation to complete within 300ms of filter selection for sub-threshold wait perception

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Run a usability test where users apply a filter and must identify which dashboard widgets updated in response; measure correct identification rate and time to confirm the Gestalt grouping communicates filter-data relationships. Compare task accuracy between designs with and without combined Gestalt cues (similarity + motion).

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
- [UIUXDesigning — Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
