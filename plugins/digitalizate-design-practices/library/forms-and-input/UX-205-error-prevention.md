---
id: "UX-205"
title: "Error Prevention"
category: "Forms & Input"
subcategory: "Proactive error elimination"
score: 5
context: "Before designing error messages, first ask whether the error can be prevented entirely. Especially critical for irreversible or high-cost operations — data deletion, financial transactions, bulk writes."
goals:
  - "Design Forms That Work"
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
  - "forms"
  - "error-handling"
verify: "Every irreversible or bulk action (delete, purge, bulk write, payment) shows a confirmation step naming what will be affected, and its trigger sits apart from the safe primary action."
verifiable_by: "test"
anti_pattern: "A red Delete button placed right next to Save that removes the record on a single click with no confirmation and no undo."
wireframe: "https://files.catbox.moe/2ko6ya.jpg"
notion: "https://app.notion.com/p/Error-Prevention-003a9aed534482208b0981b25f731638"
---

## Why
Good error messages are important, but the best designs prevent problems before they occur. There are two error types: slips (inattention-based, where users know the right action but mis-execute) and mistakes (mental model mismatches, where users believe their incorrect action is correct). Slips are addressed through helpful constraints and input formats; mistakes through removing memory burdens and warning users proactively. The cost of preventing a high-consequence error always outweighs the engineering cost of the constraint.

## How to implement
- Prioritize prevention for highest-cost errors first (irreversible data loss, financial transactions).
- Use inline validation and input constraints to prevent slips at entry time.
- Disable (not hide) destructive actions that would be errors in the current context.
- Present confirmation options before committing irreversible actions, especially bulk ones.
- Pre-fill known data to reduce memory-dependent input errors.
- Separate destructive action buttons (Delete, Purge) spatially from safe actions (Save, Export) with sufficient padding to prevent mis-clicks per Fitts's Law.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Error rate, Completion rate
- **Efficiency**: Time on task, Error counts, Support tickets reduction
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Instrument form submissions and workflow actions to log error frequency at each step. Compare error rates before and after applying error prevention patterns (inline validation, confirmation dialogs for destructive actions, smart defaults). Track support ticket volume for user error-related issues as a longitudinal quality indicator.

## Sources
- [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [About Face 4th Ed., Ch. 15 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
- [Nielsen Norman Group — Heuristic 5](https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained)
- [UX Stack Exchange](https://ux.stackexchange.com/)
