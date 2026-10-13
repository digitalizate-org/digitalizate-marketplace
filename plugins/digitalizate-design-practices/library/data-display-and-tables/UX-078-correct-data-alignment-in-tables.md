---
id: "UX-078"
title: "Correct Data Alignment in Tables"
category: "Data Display & Tables"
subcategory: "Data Formatting"
score: 5
context: "Use in all data tables containing numeric, financial, or quantitative data."
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Improve Readability & Visual Clarity"
wireframe: "https://files.catbox.moe/bwznuc.jpg"
notion: "https://app.notion.com/p/Correct-Data-Alignment-in-Tables-74ba9aed534482eb80f601cd094be3a2"
---

## Why
Always right-align numeric columns (especially financial figures) to enable fast visual comparison of magnitudes. Left-align text and string columns. Center alignment prevents quick scanning and forces the eye to jump between values irregularly. Right-aligning numbers ensures decimal points and thousands separators align vertically, allowing users to compare values at a glance without reading each number individually. This is a foundational rule of financial data presentation adopted across Bloomberg, trading terminals, and accounting software.

## How to implement
- Default all number columns to `text-align: right`.
- Align column headers to match their column content (right-align numeric headers too).
- For mixed columns (mostly text with occasional numbers), left-align and format numbers consistently within the column (same number of decimal places).
- Apply monospaced font or tabular numeric font variant for financial figures to ensure proper alignment at the character level.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Run timed data-lookup tasks comparing right-aligned numeric columns against center- or left-aligned variants. Measure error rate on comparison tasks (e.g., "Which row has the largest value?") to confirm that correct alignment reduces misreading.

## Sources
- [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
