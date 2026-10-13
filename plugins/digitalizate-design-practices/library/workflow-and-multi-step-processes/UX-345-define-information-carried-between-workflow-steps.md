---
id: "UX-345"
title: "Define Information Carried Between Workflow Steps"
category: "Workflow & Multi-Step Processes"
subcategory: "State persistence in multi-step flows"
score: 4
context: "Apply to any multi-step workflow design in enterprise applications — configuration wizards, data transformation flows, approval chains. Information persistence is a critical design decision, not an implementation detail."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "cognitive-load"
  - "workflow"
  - "forms"
wireframe: "https://files.catbox.moe/8j8md4.jpg"
notion: "https://app.notion.com/p/Define-Information-Carried-Between-Workflow-Steps-f83a9aed534482e0a16f81448cc44dcb"
---

## Why
In multi-step complex workflows, one of the most critical design questions is what information must persist from step to step and what can be reset. Carrying too much state creates confusion; carrying too little forces re-entry. This must be explicitly documented before engineering begins — what state persists, how it's displayed, and when it can be modified. Failing to document this results in engineers making arbitrary decisions that users experience as context loss.

## How to implement
- Map each step and explicitly document: which inputs from previous steps are needed, how they are displayed, and when they can be modified.
- Design "breadcrumb" or summary panels keeping prior decisions visible without scroll-back.
- Test users' ability to recall prior selections at later steps — adjust context visibility accordingly.
- Consider which decisions are irreversible mid-flow and which can be revised.
- Carry forward selection summaries into later dependent steps as context headers.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Instrument each workflow step to track drop-off rate and error events in analytics; run task-based usability tests to measure completion rate and error count when inter-step context is clearly displayed versus hidden.

## Sources
- [Boxes and Arrows — The Shallow Dive](https://boxesandarrows.com/the-shallow-dive/)
