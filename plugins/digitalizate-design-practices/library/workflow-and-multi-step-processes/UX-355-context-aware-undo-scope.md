---
id: "UX-355"
title: "Context-Aware Undo Scope"
category: "Workflow & Multi-Step Processes"
subcategory: "Undo/Redo Architecture"
score: 3
context: "Complex enterprise tools where multiple editing contexts coexist simultaneously, such as a main canvas with a floating property panel or a parent grid with a nested modal editor."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Build Trust & Reduce User Anxiety"
tags:
  - "error-handling"
wireframe: "https://files.catbox.moe/qp6va1.jpg"
notion: "https://app.notion.com/p/Context-Aware-Undo-Scope-738a9aed53448237b4bd81ee99747814"
---

## Why
Undo/redo must be context-aware — users should not be able to undo actions they cannot currently see, which creates disorientation and data integrity issues. Distinct contexts (a modal dialog, a nested editor) should maintain their own isolated undo stacks that are merged into the global stack on confirmation or discarded on cancel. This makes local edits transactional, analogous to a database savepoint. It is a significant engineering investment but essential for complex multi-context editors.

## How to implement
- Implement "Containers" — isolated undo environments scoped to specific UI contexts like modals or sub-editors.
- When a Container is confirmed (OK/Save), merge its actions into the global stack with re-indexed globalIndex values.
- When cancelled, discard the Container's actions entirely.
- This enables safe local experimentation without polluting the global history.
- Test that Ctrl+Z behaves correctly in each context by verifying that only visible/relevant actions are reversed.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Error counts, Time on task
- **Satisfaction & Perception**: Confidence rating, Ease-of-use score
**How to measure**: Log undo invocation rates by scope context in analytics; run usability tests on multi-step or collaborative workflows to measure whether users find the undo scope predictable and whether it reduces task errors and recovery time.

## Sources
- [Reddit — How I implemented an Undo/Redo system in a large complex visual application](https://www.reddit.com/r/SoftwareEngineering/comments/1lgbjr1/how_i_implemented_an_undoredo_system_in_a_large/)
