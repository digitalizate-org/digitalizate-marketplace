---
id: "UX-505"
title: "Element Connectedness: Explicitly Link Related Data Points"
category: "Gestalt Principles"
subcategory: "Element Connectedness"
score: 5
context: "Data tables, flowcharts, node graphs, step indicators, timelines, toolbar action groups"
goals:
  - "Design Data-Heavy Screens & Dashboards"
  - "Leverage Psychology to Guide User Behavior"
  - "Improve Readability & Visual Clarity"
tags:
  - "gestalt-principles"
  - "forms"
  - "tables"
  - "data-heavy"
wireframe: "https://files.catbox.moe/k7i2ro.jpg"
notion: "https://app.notion.com/p/Element-Connectedness-Explicitly-Link-Related-Data-Points-875a9aed53448283901c81518a461411"
---

## Why
Element Connectedness (also called Uniform Connectedness in NNGroup's taxonomy) holds that elements physically joined by a visible connector — a line, a border, a shared background stripe, a bracket — are perceived as a unified object with the strongest possible grouping bond. The NNGroup course positions Element Connectedness as the principle that overrides all others: even elements far apart and visually dissimilar will be perceived as a single group if connected by an explicit link. In data visualization, this is why line charts communicate series membership more strongly than scatter plots: the connecting line declares all points a single dataset. In tables, row banding creates connectedness along the horizontal axis. In node graphs and flowcharts, edge lines are the primary grouping mechanism for related nodes.

## How to implement
- Use connecting lines in flowcharts and node graphs as the primary grouping cue — not proximity or color alone
- Apply row banding (alternating light/dark rows) in tables with 6+ rows to create horizontal connectedness for row tracking
- Reserve line charts for genuinely continuous time-series data — connecting categorical data points creates false connectedness
- In step indicators and timelines, connect steps with an explicit line to declare them a single sequential series
- Use bracket notation or curly braces to explicitly connect form field groups to their section label in complex multi-column forms
- When grouping toolbar actions, join related buttons with a shared container border rather than relying on proximity alone

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Findability score
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Conduct usability testing on data-heavy interfaces to measure how quickly users correctly identify relationships between data points when explicit connectors are present vs. absent. Track error rates in interpretation tasks (e.g., reading charts or dashboards) as a direct outcome metric.

## Sources
- [NNGroup – Gestalt Principles Course by Tanner Kohler](https://www.nngroup.com/courses/gestalt-principles/)
- [Playfair Data — Gestalt in Dashboard Design](https://playfairdata.com/applying-gestalt-principles-to-dashboard-design/)
- [Smashing Magazine — Gestalt Principles](https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/)
