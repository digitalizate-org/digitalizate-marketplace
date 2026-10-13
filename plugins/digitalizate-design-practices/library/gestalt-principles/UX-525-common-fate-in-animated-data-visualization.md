---
id: "UX-525"
title: "Common Fate in Animated Data Visualization"
category: "Gestalt Principles"
subcategory: "Common Fate — Data Visualization"
score: 4
context: "Analytics dashboards, data-driven reports, real-time monitoring charts, interactive infographics"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Design Effective Feedback & Error States"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "dashboard"
  - "tables"
  - "cognitive-load"
  - "data-heavy"
  - "animation"
wireframe: "https://files.catbox.moe/0joimz.jpg"
notion: "https://app.notion.com/p/Common-Fate-in-Animated-Data-Visualization-c1ba9aed5344835ca31e018919e2adbe"
---

## Why
Static charts require users to cognitively connect data points; animated charts exploit Common Fate to do this automatically. When bars in a bar chart all grow simultaneously, their shared motion declares them members of a single dataset before the user reads a single label. [UIUXDesigning.com](http://uiuxdesigning.com/) documents that multi-line animated comparisons — where two datasets animate simultaneously — let users perceive correlation or divergence in real-time, reducing interpretation effort significantly. A 2019 graphical perception study cited in that research found that coordinated changes in luminance and size triggered Common Fate perceptions 40% more effectively than static cues alone.

## How to implement
- Animate all bars in a chart group to grow simultaneously on page load or filter change
- For line charts comparing multiple series, draw all lines in parallel rather than sequentially
- Apply sequential drawing (line drawing itself across the chart) to guide attention along a trend over time
- Use matched color + motion for related data points to create dual-cue grouping
- Provide a 'reduce motion' fallback using prefers-reduced-motion CSS media query that shows the final state without animation

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score
**How to measure**: Conduct usability tests with data-visualization tasks, measuring time-to-insight and task success rate for charts using common-fate animation versus static equivalents; collect ease-of-use ratings to gauge comprehension clarity.

## Sources
- [UIUXDesigning — Gestalt Common Fate](https://uiuxdesigning.com/gestalt-common-fate/)
- [ToucanToco — Gestalt in Data Visualization](https://www.toucantoco.com/en/blog/data-viz-best-practices-gestalt-principles)
