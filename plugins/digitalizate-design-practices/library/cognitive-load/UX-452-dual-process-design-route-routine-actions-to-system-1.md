---
id: "UX-452"
title: "Dual-Process Design: Route Routine Actions to System 1"
category: "Cognitive Load"
subcategory: "Decision Architecture"
score: 3
context: "Apply during the design of all interaction patterns, with particular attention to differentiating high-frequency routine actions from low-frequency high-stakes actions."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "decision-making"
wireframe: "https://files.catbox.moe/s5gnxj.jpg"
notion: "https://app.notion.com/p/Dual-Process-Design-Route-Routine-Actions-to-System-1-db6a9aed534483ba85998176b9a3f454"
---

## Why
Kahneman's dual-process theory distinguishes System 1 (fast, automatic, pattern-matching) from System 2 (slow, effortful, deliberate). Most UI interactions are System 1 by nature — users want to act on recognition, not deliberation. When UI forces System 2 engagement for routine actions (through unfamiliar patterns, novel iconography, or ambiguous labels), it dramatically increases cognitive load and reduces throughput. Conversely, high-stakes, irreversible actions should deliberately invoke System 2 through friction like confirmation dialogs.

## How to implement
- Design all routine, repeatable interactions (navigation, form submission, filter application) to align with existing System 1 patterns — no learning required.
- For destructive actions (delete, archive, bulk-modify), insert friction: confirmation dialogs, undo affordances, or two-step confirmation sequences to engage System 2.
- Use visual affordances and microcopy that trigger immediate recognition: 'Save changes' not 'Commit transaction'; 'Delete' not 'Remove record from system.'
- Provide immediate visual feedback for all System 1 interactions so users do not pause to verify outcome — button state changes, loading indicators, success/error states.
- For complex decisions requiring deliberation (plan selection, configuration choices), surface comparison data to support System 2 without forcing users to hold it in working memory.
- Avoid pattern interruptions in habitual flows: if users have learned a save shortcut, do not move the save button or change its keyboard binding in a redesign.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Completion time
- **Effectiveness**: Task success rate, Error rate
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Time users on high-frequency routine tasks (e.g., submitting a form, applying a filter) before and after optimizing those flows for System 1 processing. Compare error counts on routine versus complex tasks to confirm that design reduces deliberate effort for familiar actions.

## Sources
- [Decision-Making in UX: The Two-System-Concept — Motivus](https://motivus.com/insights/decision-making-in-ux-the-two-system-concept-part-1/)
- [Designing for the Mind: Dual Process Theory — LinkedIn](https://www.linkedin.com/pulse/guest-room-model-saurabh-kumar)
- [Dual Process Theory — Learning Loop](https://learningloop.io/glossary/dual-process-theory)
- [Better Decisions: Two Systems — UX Collective](https://uxdesign.cc/better-decisions-72e955c70a5c)
