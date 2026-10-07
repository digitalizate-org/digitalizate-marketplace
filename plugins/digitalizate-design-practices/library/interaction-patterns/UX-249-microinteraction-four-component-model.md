---
id: "UX-249"
title: "Microinteraction Four-Component Model"
category: "Interaction Patterns"
subcategory: "Microinteraction Design"
score: 4
context: "Use when designing any small interaction: button feedback, toggle switches, form validation states, loading indicators, and success states."
goals:
  - "Reduce Cognitive Load"
tags:
  - "animation"
wireframe: "https://files.catbox.moe/iueqvu.jpg"
notion: "https://app.notion.com/p/Microinteraction-Four-Component-Model-b6ea9aed53448208bcd601e5e0f1900b"
---

## Why
All microinteractions follow a four-component structure: Trigger (what initiates the interaction — user action or system event), Rules (what happens when triggered), Feedback (the visual/auditory/haptic response), and Loops & Modes (how the interaction resets or adapts over time). Understanding this structure helps designers intentionally design each microinteraction rather than treating feedback as an afterthought. Every microinteraction should serve a functional reason — confirming an action, communicating state change, guiding attention, or providing error feedback. Decorative animations that communicate nothing are noise.

## How to implement
- For each proposed microinteraction, explicitly define all four components before implementation.
- Ensure feedback is proportional to the action's importance — a small inline toggle needs a subtle indicator; a form submission needs visible confirmation.
- Loops should reset to the initial state cleanly after completion.
- Evaluate each animation against the test: "What does the user learn from this?" If the answer is nothing, reconsider or remove it.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: CSAT, Ease-of-use score, Satisfaction rating
  - **Engagement & Usage**: Feature usage, Active users
  **How to measure**: Conduct usability testing with think-aloud protocols focused on trigger, rules, feedback, and loop components to identify which phases cause hesitation or errors. Measure error rates and satisfaction scores before and after refining specific microinteraction phases.

## Sources
- [Interaction Design Foundation — Microinteractions](https://www.interaction-design.org/literature/article/micro-interactions-ux)
