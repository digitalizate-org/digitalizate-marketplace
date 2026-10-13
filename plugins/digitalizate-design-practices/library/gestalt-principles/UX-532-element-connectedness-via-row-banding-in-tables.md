---
id: "UX-532"
title: "Element Connectedness via Row Banding in Tables"
category: "Gestalt Principles"
subcategory: "Element Connectedness"
score: 5
context: "Data tables, spreadsheet-like UIs, comparison tables, financial reports"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Structure Navigation for Deep Products"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "dashboard"
  - "tables"
  - "data-heavy"
wireframe: "https://files.catbox.moe/kf64aw.jpg"
notion: "https://app.notion.com/p/Element-Connectedness-via-Row-Banding-in-Tables-84ca9aed5344830da4f70119d086f3a9"
---

## Why
Element Connectedness (Uniform Connectedness) holds that elements joined by a visual element are perceived as grouped, overriding other grouping principles including proximity and similarity. In data tables, horizontal row banding (alternating light/dark rows) applies connectedness to link all cells within a single row, helping users track across columns without losing their place. Playfair Data specifically recommends row banding over cell borders for this purpose, as it applies connectedness with lower visual noise. The same principle explains why line graphs work for time-series data: the connecting line declares all data points as members of a single series more strongly than color alone would.

## How to implement
- Apply alternate row banding using a very subtle background difference (2-4% lightness delta in light mode)
- Ensure row banding color passes contrast requirements against all text colors used in the table
- In dark mode, increase banding lightness delta to 5-8% to maintain the visual separation
- Pair row banding with consistent column alignment to create both horizontal connectedness (row banding) and vertical continuation (alignment)
- Avoid row banding in tables with fewer than 6 rows — at small sizes it adds visual noise without perceptual benefit

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Error counts
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct timed row-lookup tasks on tables with and without alternating row banding, measuring accuracy and time per lookup. This is especially measurable with wide tables where horizontal tracking errors are common — capture error rate as the primary indicator.

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
- [Smashing Magazine — Gestalt Principles](https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/)
