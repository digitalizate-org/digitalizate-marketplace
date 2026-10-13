---
id: "UX-069"
title: "Comparison Mode for Time-Series Data"
category: "Dashboard Design"
subcategory: "Data Visualization"
score: 4
context: "Any time-series chart on a monitoring or reporting dashboard where trend comparison is a common user task."
goals:
  - "Design Data-Heavy Screens & Dashboards"
wireframe: "https://files.catbox.moe/0sxgzp.jpg"
notion: "https://app.notion.com/p/Comparison-Mode-for-Time-Series-Data-0fda9aed534482cb850d01e18e40f595"
---

## Why
Overlaying comparison periods on time-series charts — "this month vs. last month," "this year vs. same period last year" — enables pattern recognition and anomaly detection that sequential viewing of separate charts cannot support. The visual overlap makes divergence immediately apparent in a way that switching between charts or comparing numbers mentally does not. This transforms trend charts from historical records into diagnostic tools.

## How to implement
- Add a "Compare to" selector adjacent to the date range picker.
- Display the comparison period as a dashed or lighter line on the same chart.
- Label both series clearly in the legend (e.g., "Jan 2026" / "Jan 2025").
- Show a delta indicator between current and comparison values in the chart tooltip.
- Allow downloading the comparison data as CSV.
- Support both standard comparison periods (previous period, same period last year) and custom date range selection for comparison.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task, Time saved per task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track comparison mode usage frequency via analytics; run usability tests measuring time-to-insight for period-over-period analysis tasks comparing comparison mode against manual report switching; survey analysts on whether the feature reduces their time to generate insights.
- Add a "Compare to" selector adjacent to the date range picker.
- Display the comparison period as a dashed or lighter line on the same chart.
- Label both series clearly in the legend (e.g., "Jan 2026" / "Jan 2025").
- Show a delta indicator between current and comparison values in the chart tooltip.
- Allow downloading the comparison data as CSV.
- Support both standard comparison periods (previous period, same period last year) and custom date range selection for comparison.

## Sources
- [DataCamp — Effective Dashboard Design](https://www.datacamp.com/tutorial/dashboard-design-tutorial)
