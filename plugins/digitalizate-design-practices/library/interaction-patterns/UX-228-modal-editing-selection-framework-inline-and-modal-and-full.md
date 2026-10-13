---
id: "UX-228"
title: "Modal Editing Selection Framework (Inline / Modal / Full Page)"
category: "Interaction Patterns"
subcategory: "Editing Patterns"
score: 5
context: "Use for every CRUD operation in a data-driven application to ensure the right editing surface is chosen for each operation type."
goals:
  - "Simplify a Cluttered Interface"
wireframe: "https://files.catbox.moe/55qvtu.jpg"
notion: "https://app.notion.com/p/Modal-Editing-Selection-Framework-Inline-Modal-Full-Page-c8ca9aed53448385b22881e79b7d99c3"
---

## Why
Choose the editing pattern based on the weight and context of the editing work: inline editing for single-field changes where surrounding data context is needed (clicking a cell in a table), modal dialogs for editing 2–5 related fields that can be completed quickly (under 2 minutes), and dedicated full pages or slide-over panels for complex multi-field edits involving significant data entry or relationship review. Using a modal for work that takes more than 2 minutes creates frustration from the constrained surface area and inability to reference other data.

## How to implement
- Single field → inline edit activated by click (field transforms into input; Escape to cancel, Enter or click-away to confirm).
- Two to five related fields → modal (max 60% viewport width, scrollable for longer forms).
- Six or more fields or complex relationships → dedicated edit page or slide-over panel.
- For inline editing, debounce auto-save 300–500ms after the user stops typing and show a subtle save confirmation.
- Never use modals for forms requiring lookup of external data.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Error rate
- **Efficiency**: Time on task, Completion time
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Evaluate the appropriateness of each editing mode in usability tests by measuring task success rate and error counts; track edit-completion rates and abandonment rates per editing mode in analytics to identify mismatches between complexity and chosen format.

## Sources
- [Hacker News UX Discussion](https://news.ycombinator.com/item?id=36056376)
- [Stack Overflow](https://stackoverflow.com/questions/3326451/edit-in-place-vs-separate-edit-page-modal)
