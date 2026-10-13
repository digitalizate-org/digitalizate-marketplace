---
id: "UX-533"
title: "Element Connectedness Anti-Pattern: Line Charts for Categorical Data"
category: "Gestalt Principles"
subcategory: "Element Connectedness — Anti-Pattern"
score: 5
context: "Business dashboards, executive reporting, any chart choosing between bar and line"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "dashboard"
  - "data-heavy"
wireframe: "https://files.catbox.moe/ika6f6.jpg"
notion: "https://app.notion.com/p/Element-Connectedness-Anti-Pattern-Line-Charts-for-Categorical-Data-8f5a9aed53448360a26181435df82882"
---

## Why
Connecting data points with a line declares those points as members of a continuous series through Element Connectedness — regardless of whether they actually are continuous. When categorical data (e.g., product categories, customer segments) is visualized as a line chart, users automatically infer trend, interpolation, and continuity between categories that have no such relationship. Playfair Data's research documents this as a specific dashboard failure mode: viewers perceive an implied middle value between two categorical bars connected by a line, drawing incorrect conclusions about the underlying data. The fix is to use bar charts for categorical comparisons and reserve line charts for genuinely continuous time-series data.

## How to implement
- Use bar charts (vertical or horizontal) for any data where the X-axis is categorical, not temporal
- Use line charts only when X-axis values represent continuous time or a genuine ordered sequence
- If mixed temporal and categorical data must appear on one chart, use disconnected dot plots for categorical segments
- Audit existing dashboards for line charts with fewer than 4 data points — these often misrepresent categorical data as trends

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Confidence rating, Ease-of-use score, CSAT
  **How to measure**: Conduct data interpretation usability tests where users must draw conclusions from line charts used for categorical data, measuring error rate and confidence scores. Compare error rates and interpretation accuracy when the same categorical data is displayed as a bar chart vs. a line chart to quantify the anti-pattern's harm.

## Sources
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
