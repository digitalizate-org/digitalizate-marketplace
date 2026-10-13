---
id: "UX-223"
title: "Design Every Interactive State — Not Just the Happy Path"
category: "Interaction Patterns"
subcategory: "State design completeness"
score: 5
context: "Apply to specifying behavior for any interactive component or workflow in a complex enterprise application. Incomplete state design causes engineering to make arbitrary decisions that ship as UX failures."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "onboarding"
  - "performance"
  - "keyboard"
  - "error-handling"
wireframe: "https://files.catbox.moe/hedb5a.jpg"
notion: "https://app.notion.com/p/Design-Every-Interactive-State-Not-Just-the-Happy-Path-14fa9aed534482d5844c81325e00b08d"
---

## Why
The four fundamental concerns of interaction design are: (1) Action/Reaction — the full range of user interactions and system responses; (2) State — communicating what operations are possible at any moment; (3) Workflow — connecting individual interactions into complete multi-step tasks; (4) Malfunction — anticipating and mitigating errors and misunderstandings. Failing to design for all states leaves engineers making arbitrary decisions that users then encounter as UX failures in production.

## How to implement
- For every interactive component, specify all states: empty, loading, populated, hover, focus, active, selected, disabled, and error.
- Document the action/reaction chain: what user action triggers what system response and how the interface changes.
- Map complete workflows end-to-end including all error recovery paths.
- Annotate state specifications in design files with explicit labels for each state variant.
- Use design tokens for state-dependent visual properties (hover color, disabled opacity) so they can be applied consistently across components.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: Confidence rating, CSAT, Ease-of-use score
  **How to measure**: Use exploratory usability testing with scenarios that trigger error, loading, and empty states to measure unhandled-state error rates. Track support tickets categorized by state-related confusion before and after fully designing all interactive states.

## Sources
- [Boxes and Arrows — Foundations of Interaction Design](https://boxesandarrows.com/foundations-of-interaction-design/)
