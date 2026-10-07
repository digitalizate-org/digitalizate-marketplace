---
id: "UX-030"
title: "Gestalt — Uniform Connectedness for Process and Relationship Visualization"
category: "Cognitive Psychology"
subcategory: "Process and relationship design"
score: 4
context: "Apply to process flows, pipeline visualizations, step-by-step wizards, dependency charts, relationship diagrams, and data lineage views in enterprise applications."
goals:
  - "Leverage Psychology to Guide User Behavior"
tags:
  - "workflow"
  - "forms"
  - "dashboard"
wireframe: "https://files.catbox.moe/zo58e3.jpg"
notion: "https://app.notion.com/p/Gestalt-Uniform-Connectedness-for-Process-and-Relationship-Visualization-361a9aed53448279845081d61486bead"
---

## Why
Elements that are visually connected are perceived as more related than elements with no connection — a line or arrow creates stronger perceived relatedness than proximity alone. In wizard/stepper flows, connecting step indicators with a progress bar communicates the sequential relationship between steps. Using consistent accent colors to connect a data point in a chart with its legend item and data table row creates instant visual linkage without requiring users to read.

## How to implement
- Use lines or arrows to connect process steps in workflow visualizations — stronger than placing steps near each other.
- Apply connecting borders or shared background fills around related controls in property panels to show they affect the same entity.
- Connect step indicators in wizard flows with a line or progress bar.
- Use consistent accent colors to link chart data points to legend items and data table rows.
- For approval chain visualizations, use connector lines with directional arrows to show flow direction.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Findability score
- **Efficiency**: Time on task
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Run comprehension tests asking users to trace relationships or process steps in diagrams with and without uniform connectedness visual cues; measure accuracy and time-to-understand to quantify clarity improvements.

## Sources
- [Laws of UX — Law of Uniform Connectedness](https://lawsofux.com/law-of-uniform-connectedness/)
