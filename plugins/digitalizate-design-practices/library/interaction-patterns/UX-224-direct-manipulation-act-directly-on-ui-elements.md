---
id: "UX-224"
title: "Direct Manipulation — Act Directly on UI Elements"
category: "Interaction Patterns"
subcategory: "Direct manipulation and inline editing"
score: 5
context: "Apply to data tables with editable cells, inline record name editing, drag-to-reorder lists, in-context status changes, and inline tag editing."
goals:
  - "Reduce Learning Curve for Complex Tools"
wireframe: "https://files.catbox.moe/60rt8a.jpg"
notion: "https://app.notion.com/p/Direct-Manipulation-Act-Directly-on-UI-Elements-781a9aed5344823e8cc28109e8db58fc"
---

## Why
Allowing users to act directly on UI elements — clicking a data item to edit it in-place — is faster than navigating to a separate edit dialog. Direct manipulation creates a sense of physical immediacy that improves user confidence and reduces the perceived complexity of tasks. Hover-revealed contextual actions on list items (edit, delete, move) directly on that item are more efficient than requiring selection then finding actions in a remote toolbar.

## How to implement
- Make table cells click-to-edit inline where that field is frequently updated — don't force users to a full detail page for a simple status change.
- Hover state on a list item should reveal contextual actions (edit, delete, move) directly on that item.
- Use drag handles for reordering lists and kanban cards — direct spatial manipulation is faster than "move up/down" buttons.
- Make the entire row/card clickable (not just a small link text) for navigation actions.
- Apply inline editing only for fields where single-value updates are the primary use case — complex multi-field edits warrant a detail panel.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, Confidence rating
**How to measure**: Compare time-on-task and error rate in usability tests between direct-manipulation interfaces (drag, resize, inline edit) and dialog-based alternatives; collect ease-of-use scores to assess how direct action affects perceived control.

## Sources
- [Good UI — Direct Manipulation](https://goodui.org/#19)
