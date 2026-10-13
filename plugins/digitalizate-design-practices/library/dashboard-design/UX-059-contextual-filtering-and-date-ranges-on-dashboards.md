---
id: "UX-059"
title: "Contextual Filtering and Date Ranges on Dashboards"
category: "Dashboard Design"
subcategory: "Dashboard Filtering"
score: 5
context: "Use for any operational or analytical dashboard where data varies by time period, region, team, or other dimensions."
goals:
  - "Design Data-Heavy Screens & Dashboards"
tags:
  - "search"
  - "tables"
  - "dashboard"
wireframe: "https://files.catbox.moe/y3uslx.jpg"
notion: "https://app.notion.com/p/Contextual-Filtering-and-Date-Ranges-on-Dashboards-429a9aed534483fab4f181522be67ca8"
---

## Why
Provide prominent, persistent filter controls — date range selector, dimension filters — that apply globally to all widgets on the dashboard simultaneously. Users need to quickly compare periods or drill into specific segments without hunting for per-widget filter controls. Filters that are hard to find or require separate page navigation create friction for regular analytical workflows. Applied filters must be visually communicated so users always know what context they're viewing.

## How to implement
- Place a global filter bar at the top of the dashboard.
- Apply all filter changes simultaneously to all widgets.
- Show applied filters as dismissible chips/tags adjacent to the filter bar.
- Provide common date presets (Today, Yesterday, Last 7 days, Last 30 days, This quarter, This year, Custom range).
- Persist selected filters per user session.
- Provide a "Share this view" capability that encodes filter state in the URL for collaboration.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task, Completion time
- **Engagement & Usage**: Feature usage, Sessions per user
**How to measure**: Track filter and date-range interaction rates in analytics; run usability tests measuring time-to-insight and task success rate for analytical queries with and without contextual filtering, and monitor feature usage adoption rates post-deployment.

## Sources
- [Design Systems — Space, Grids, and Layouts](https://www.designsystems.com/space-grids-and-layouts/)
