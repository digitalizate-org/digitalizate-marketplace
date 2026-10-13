---
id: "UX-016"
title: "Miller's Law — Chunk Information Into Groups of 5–7"
category: "Cognitive Psychology"
subcategory: "Working memory limits and chunking"
score: 5
context: "Apply to navigation menus, filter chip groups, dashboard widget counts, table visible columns, form section groupings, and step indicators in wizards."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "forms"
  - "navigation"
  - "dashboard"
wireframe: "https://files.catbox.moe/dt70jc.jpg"
notion: "https://app.notion.com/p/Miller-s-Law-Chunk-Information-Into-Groups-of-5-7-9cea9aed534482558c1d81c16d83eee4"
---

## Why
The average person can hold 7 (±2) items in working memory at a time. This doesn't mean limiting interface elements to 7 — it means organizing them into chunks of that size so users can process related groups sequentially rather than all items simultaneously. Chunking applies to form sections, navigation groupings, dashboard KPI counts, table column groups, and any list where users must hold multiple items in mind to make a decision.

## How to implement
- Limit primary navigation items to 5–7; group additional items under categorized dropdowns.
- Chunk data table columns into logical groups using column group headers (e.g., "Contact Info," "Financials," "Status") — don't surface 20 flat columns.
- Break forms with many fields into sections of 4–6 fields each with clear headings.
- Limit the number of primary KPI cards visible at first glance to 5–7 before requiring scroll.
- Use consistent spacing: tighter within groups, larger between groups.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure menu comprehension speed and recall accuracy on navigation structures grouped at 5-7 items vs. 10+ items using usability testing. Track error rates in feature discovery tasks where overly long or under-grouped menus increase scanning overhead.

## Sources
- [Laws of UX — Miller's Law](https://lawsofux.com/millers-law/)
- [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
