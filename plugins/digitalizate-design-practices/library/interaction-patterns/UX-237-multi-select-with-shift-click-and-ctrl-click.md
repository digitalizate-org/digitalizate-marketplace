---
id: "UX-237"
title: "Multi-Select with Shift+Click and Ctrl+Click"
category: "Interaction Patterns"
subcategory: "Selection Patterns"
score: 5
context: "All lists, tables, and grids in desktop enterprise applications that support multi-select. A non-negotiable pattern for power users who expect OS-native selection conventions."
goals:
  - "Design for Enterprise & B2B Scale"
tags:
  - "keyboard"
wireframe: "https://files.catbox.moe/8pwz2w.jpg"
notion: "https://app.notion.com/p/Multi-Select-with-Shift-Click-and-Ctrl-Click-5e0a9aed534483b6bc7e816c8f236550"
---

## Why
Implementing OS-native selection conventions — Ctrl+click to add/remove individual items, Shift+click to select a contiguous range from the last-clicked anchor — meets the deeply ingrained expectation that enterprise desktop users have developed from decades of file manager and spreadsheet use. Deviating from these conventions forces users to relearn fundamental interactions, creating a friction that disproportionately affects power users who rely on multi-select most heavily.

## How to implement
- Track the "anchor" item (last non-Shift-clicked item) for range selection.
- On Shift+click: select all items between anchor and current click position in display order.
- On Ctrl+click: toggle individual item selection without affecting other selections.
- Checkbox clicking is equivalent to Ctrl+click behavior.
- Show selection count prominently in the bulk action bar.
- Support Ctrl+A to select all visible items.
- Handle edge cases: selection across sorted/filtered views, selection state after pagination.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Completion rate
- **Efficiency**: Time on task, Time saved per task
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Track multi-select usage rates via analytics; run usability tests measuring time-to-select multiple items with keyboard shortcut support versus repeated single-item selection, and survey power users on efficiency of the interaction pattern.

## Sources
- [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
