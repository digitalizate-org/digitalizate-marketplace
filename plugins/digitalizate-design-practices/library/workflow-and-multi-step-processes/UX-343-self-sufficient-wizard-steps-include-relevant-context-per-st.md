---
id: "UX-343"
title: "Self-Sufficient Wizard Steps — Include Relevant Context Per Step"
category: "Workflow & Multi-Step Processes"
subcategory: "Wizard step design"
score: 4
context: "Apply to all wizard steps, especially those requiring comparison to prior selections. Users cannot easily reference information from prior steps when only one step is visible."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "cognitive-load"
  - "workflow"
wireframe: "https://files.catbox.moe/lq4lrk.jpg"
notion: "https://app.notion.com/p/Self-Sufficient-Wizard-Steps-Include-Relevant-Context-Per-Step-3cea9aed534483d1ae8381967f61ac70"
---

## Why
When users see only one step at a time, they cannot easily reference information from prior steps. Each step must present all information necessary to complete it without requiring users to navigate back or open parallel sources. Key decisions from prior steps should be summarized visibly at dependent steps. This is especially critical in enterprise configuration wizards where later steps depend significantly on earlier parameter selections.

## How to implement
- Include a summary of key decisions from prior steps at the top of dependent steps.
- Avoid steps requiring reference to external systems or documents — surface relevant data inline.
- Display help content in a panel alongside the wizard rather than in a modal that covers it.
- Consider reusing prior-session selections as intelligent defaults.
- Map each step explicitly — document which inputs from previous steps are needed, how they're displayed, and when they can be modified.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Completion rate, Error rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT, Confidence rating
  **How to measure**: Measure step completion rates and back-navigation frequency in multi-step wizards with and without self-sufficient per-step context. Track error rates at steps where users must recall information from earlier steps when that information is not repeated in context.

## Sources
- [Nielsen Norman Group — Wizards: Definition and Design Recommendations](https://www.nngroup.com/articles/wizards/)
- [Boxes and Arrows — The Shallow Dive](https://boxesandarrows.com/the-shallow-dive/)
