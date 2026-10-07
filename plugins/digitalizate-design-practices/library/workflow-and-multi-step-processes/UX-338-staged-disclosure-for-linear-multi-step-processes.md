---
id: "UX-338"
title: "Staged Disclosure for Linear Multi-Step Processes"
category: "Workflow & Multi-Step Processes"
subcategory: "Wizard and checkout flow structure"
score: 5
context: "Apply to one-time or infrequent linear processes: product setup, account configuration, checkout, application submissions, compliance workflows."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Reduce Learning Curve for Complex Tools"
tags:
  - "workflow"
  - "onboarding"
wireframe: "https://files.catbox.moe/fb2c3r.jpg"
notion: "https://app.notion.com/p/Staged-Disclosure-for-Linear-Multi-Step-Processes-02ba9aed5344828a844901d04c5d2162"
---

## Why
Staged disclosure (a variant of progressive disclosure) reveals a subset of options per step in a mandatory, sequential flow. Unlike standard progressive disclosure where users can stay on the primary level, staged disclosure moves users through required steps. Research shows 2 screens is optimal for balance of space vs. navigation cost in staged flows — each additional step adds abandonment risk and should be justified. Each step must be self-contained: users shouldn't need information from a previous step that isn't visible.

## How to implement
- Use task analysis to sequence steps logically — defer unrelated options (payment after product selection, not before).
- Research indicates 2 screens is optimal; keep flows to 3–8 steps maximum.
- Ensure each step is self-contained — display key decisions from prior steps at the top of dependent steps.
- Always offer a way to review and edit previous steps before final submission.
- Auto-save state between steps so interruption doesn't lose progress.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
- **Engagement & Usage**: Abandonment rate
**How to measure**: Compare step-by-step drop-off rates in analytics for staged versus all-at-once disclosure flows; measure error counts per step and post-completion CSAT in usability tests.

## Sources
- [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
