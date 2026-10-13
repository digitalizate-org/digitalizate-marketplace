---
id: "UX-108"
title: "Distinguish IA from Interaction Design — Design Both Explicitly"
category: "Design Process & Methodology"
subcategory: "Design discipline separation"
score: 4
context: "Apply at the start of any complex enterprise product design engagement, before wireframing begins."
goals:
  - "Present & Defend Design Decisions"
tags:
  - "forms"
  - "navigation"
wireframe: "https://files.catbox.moe/eb5k5l.jpg"
notion: "https://app.notion.com/p/Distinguish-IA-from-Interaction-Design-Design-Both-Explicitly-709a9aed534483b288b401a3a20a64f5"
---

## Why
Information architecture (IA) concerns content structure, organization, labeling, and relationships. Interaction design (IxD) concerns behavior, state, workflow, action/reaction, and malfunction recovery. Both are essential for complex enterprise applications — conflating them or neglecting one leads to systems that are navigable but unusable, or functional but unfindable. Document IA and IxD deliverables separately — conflating them in wireframes creates confusion about what is structure vs. behavior.

## How to implement
- Document IA separately (spreadsheets, site diagrams) from IxD deliverables (flow diagrams, state diagrams, interaction specifications).
- IA deliverables: content inventory, taxonomy, site structure, controlled vocabulary.
- IxD deliverables: user flows, state diagrams, interaction specifications, edge case definitions.
- For every interactive component, specify all states: empty, loading, populated, hover, focus, active, selected, disabled, error.
- Map complete workflows end-to-end, not just individual screens.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Findability score, Task success rate, Direct success rate
- **Efficiency**: Time on task, Tree-test score
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Conduct separate tree tests for IA (findability) and usability tests for interaction design (task performance) to isolate which layer is causing problems. Track direct success rate in tree testing and task success rate in usability testing as independent metrics for each design layer.

## Sources
- [Boxes and Arrows — Introducing Interaction Design](https://boxesandarrows.com/introducing-interaction-design/)
- [Boxes and Arrows — Foundations of Interaction Design](https://boxesandarrows.com/foundations-of-interaction-design/)
