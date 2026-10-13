---
id: "UX-238"
title: "Inline Action Disclosure (Hover Reveal)"
category: "Interaction Patterns"
subcategory: "Row Actions"
score: 5
context: "Table rows, list items, and cards where actions are contextual to specific items. Dense lists where showing all actions permanently would create visual noise."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "tables"
wireframe: "https://files.catbox.moe/opbmus.jpg"
notion: "https://app.notion.com/p/Inline-Action-Disclosure-Hover-Reveal-520a9aed534483b1ad1e81e3e0ccab9b"
---

## Why
Revealing row-specific action buttons only on hover keeps the interface clean for scanning while providing immediate access to actions when needed. Without hover reveal, either the interface is cluttered with persistent action buttons across every row, or actions are completely hidden requiring context-menu discovery. Hover reveal strikes the balance that makes dense enterprise data tables both readable and actionable. It is the dominant pattern in modern enterprise tables and file managers.

## How to implement
- On row hover: fade in action buttons in the rightmost column (150ms ease).
- Show icon-only buttons with tooltip labels.
- Limit to 3 inline actions; use kebab menu (⋮) for additional actions to cap visual complexity.
- Ensure hover-revealed actions are keyboard accessible — Tab focuses the row, then further Tab reaches the action buttons.
- For touch devices (tablets), show a persistent context button or use long-press as the disclosure mechanism.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Track hover-reveal action usage via analytics to verify discoverability. Conduct usability testing to measure whether users find and use inline actions without guidance, and compare task completion times for row-level actions using hover reveal vs. persistent button columns.

## Sources
- [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
