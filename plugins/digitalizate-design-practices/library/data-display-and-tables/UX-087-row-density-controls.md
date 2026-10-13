---
id: "UX-087"
title: "Row Density Controls"
category: "Data Display & Tables"
subcategory: "Table Customization"
score: 4
context: "Any enterprise table used by power users or in data-heavy workflows. Standard in ERP, analytics, and financial applications where users range from data entry operators to occasional reviewers."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "tables"
wireframe: "https://files.catbox.moe/d8ida6.jpg"
notion: "https://app.notion.com/p/Row-Density-Controls-9b8a9aed534482638b7c01da10e22d53"
---

## Why
A density toggle adjusting row height between compact (~40px), default (~52px), and comfortable (~64px) modes serves the full range of enterprise user needs — power users processing large datasets prefer compact density; users reviewing rich records prefer comfortable. The same table design cannot optimally serve both personas simultaneously, making this toggle a high-ROI feature that directly impacts daily productivity for intensive users.

## How to implement
- Place the density control in the table toolbar as an icon switcher (three horizontal lines with increasing spacing).
- Apply the change instantly without page reload.
- In compact mode, show row actions only on hover to preserve row height.
- Ensure click targets remain accessible (minimum 24px) even in compact mode.
- Remember the preference per-user and per-table via user profile or localStorage.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Completion time
  - **Satisfaction & Perception**: Ease-of-use score, CSAT, Satisfaction rating
  - **Effectiveness**: Task success rate, Completion rate
  **How to measure**: Survey users on preferred row density settings via in-product settings instrumentation and correlate density preference with task completion times. Measure scan accuracy on data tables across density levels in usability testing to identify whether control over density improves performance for different user roles.

## Sources
- [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
