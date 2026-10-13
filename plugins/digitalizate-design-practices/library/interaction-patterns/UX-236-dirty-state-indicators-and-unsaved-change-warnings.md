---
id: "UX-236"
title: "Dirty State Indicators and Unsaved Change Warnings"
category: "Interaction Patterns"
subcategory: "State Management"
score: 5
context: "All forms, editors, configuration panels, and builders with editable state that is not auto-saved."
goals:
  - "Design Effective Feedback & Error States"
tags:
  - "forms"
  - "navigation"
wireframe: "https://files.catbox.moe/1oqgoz.jpg"
notion: "https://app.notion.com/p/Dirty-State-Indicators-and-Unsaved-Change-Warnings-baba9aed534483d2b6bd8160e1dff8cb"
---

## Why
When users have unsaved changes in a form, editor, or configuration panel, indicating the unsaved state (a "● Unsaved changes" label, asterisk in the tab title, or amber border) and warning before navigation away prevents accidental data loss in long sessions. Data loss is one of the most trust-eroding failures in enterprise software — users who lose work become reluctant to use the application for complex tasks. The warning must be specific about what will be lost.

## How to implement
- Show a non-intrusive "Unsaved changes" indicator in the toolbar or page header (not a blocking modal).
- On navigation attempt: show a "Leave without saving?" dialog with Cancel (stay), Discard Changes, and Save options.
- For partially completed forms, offer to save a draft.
- Auto-save every 30 seconds for long-form editors, showing "Last saved X:XX ago" in the header.
- Display the auto-save status persistently so users know their work is protected.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Error rate
  - **Efficiency**: Error counts, Time on task
  - **Satisfaction & Perception**: Confidence rating, CSAT, Ease-of-use score
  **How to measure**: Track data-loss incidents and user-reported errors in analytics before and after introducing dirty state indicators. Run usability testing with save-heavy workflows to measure whether unsaved change warnings reduce task failures and improve subjective confidence scores.

## Sources
- [Microsoft Docs — Desktop UX Guidelines](https://learn.microsoft.com/en-us/windows/win32/uxguide/how-to-design-desktop-ux)
