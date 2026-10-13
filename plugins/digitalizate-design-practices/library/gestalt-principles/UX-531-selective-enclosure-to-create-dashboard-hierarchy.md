---
id: "UX-531"
title: "Selective Enclosure to Create Dashboard Hierarchy"
category: "Gestalt Principles"
subcategory: "Common Region"
score: 4
context: "Complex BI dashboards, executive reporting, multi-metric monitoring screens"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Simplify a Cluttered Interface"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "dashboard"
  - "data-heavy"
wireframe: "https://files.catbox.moe/042pww.jpg"
notion: "https://app.notion.com/p/Selective-Enclosure-to-Create-Dashboard-Hierarchy-34fa9aed53448310b9eb012aa050c01a"
---

## Why
Selective enclosure is a more sophisticated application of Common Region: rather than enclosing every dashboard element, enclose only some groups, allowing the un-enclosed elements to be perceived as a category through the contrast with their enclosed neighbors. Playfair Data documents this technique specifically: when some chart groups are enclosed in containers and others are not, the unenclosed group is still perceived as a coherent unit by the Figure-Ground relationship it forms with the enclosed groups. This creates a two-tier dashboard hierarchy (primary metrics in cards, secondary in open space) without any explicit labeling.

## How to implement
- Identify your 2-3 most critical KPI groups and enclose them in raised cards
- Leave supporting metrics in the open layout — their position and proximity still groups them, but they visually recede
- Test the hierarchy with a 5-second first-impression study: users should identify the enclosed cards as primary
- Apply enclosure selectively to 'at a glance' summary sections while leaving drill-down tables unenclosed

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Findability score, Task success rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run first-click tests on dashboard designs with and without selective enclosure (bordered cards, background fills for sections), measuring whether users correctly identify section boundaries and locate targets faster. Compare ease-of-use ratings between enclosed and unenclosed dashboard variants.

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
- [Viz Zen Data — Gestalt in Data Visualization](https://vizzendata.com/2020/07/06/utilizing-gestalt-principles-to-improve-your-data-visualization-design/)
