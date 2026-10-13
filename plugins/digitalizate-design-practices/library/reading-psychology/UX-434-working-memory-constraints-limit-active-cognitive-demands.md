---
id: "UX-434"
title: "Working Memory Constraints: Limit Active Cognitive Demands"
category: "Reading Psychology"
subcategory: "Cognitive Processing"
score: 3
context: "Most impactful in multi-step forms and checkout flows, complex configuration interfaces, data entry workflows, and any sequence where users must refer back to previous information while completing a current step."
goals:
  - "Reduce Cognitive Load"
  - "Improve Readability & Visual Clarity"
tags:
  - "accessibility"
  - "cognitive-load"
  - "content-design"
  - "navigation"
  - "reading-psychology"
wireframe: "https://files.catbox.moe/gk26xl.jpg"
notion: "https://app.notion.com/p/Working-Memory-Constraints-Limit-Active-Cognitive-Demands-04aa9aed534482219e368144aada34b3"
---

## Why
Working memory — the cognitive system that holds and manipulates information in active use — is severely limited. While Miller's original '7±2' figure is often misapplied to navigation design, the underlying principle is sound: users cannot simultaneously maintain too many active pieces of information while reading and navigating. More recent research (Cowan, 2001) suggests a capacity of only ~4 chunks. The key design implication is not to limit menus to 7 items, but to minimize the number of pieces of information users must hold in working memory while completing any reading or task sequence — for example, showing breadcrumbs so users don't have to remember where they are.

## How to implement
- Display context continuously: show where the user is (breadcrumbs, section headings, page titles, progress indicators) so they don't need to hold their location in working memory
- Keep instructions visible while users complete a task — never put instructions on one page and the form on the next
- Reduce recall demands: use autocomplete, saved states, and default values so users don't need to remember information from earlier in the session
- Limit the number of choices that require simultaneous evaluation: more than 4–5 options requiring cross-comparison should be presented with a comparison table, not a list
- In multi-step flows, show a summary of previous choices at each new step so users don't need to remember what they entered
- Use inline help text and tooltips to surface contextual information exactly when needed, eliminating the need to memorize requirements
- Minimize the number of distinct visual styles per screen — every new style requires a working memory slot to decode

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Efficiency**: Time on task, Error counts
- **Effectiveness**: Completion rate, Task success rate
- **Satisfaction & Perception**: Ease-of-use score, CSAT
**How to measure**: Use moderated usability tests with a dual-task methodology or think-aloud protocol to surface working memory strain. Compare completion rates and error counts between designs that chunk information into manageable units versus those that present it all at once.

## Sources
- [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/)
- [Wikipedia — The Magical Number Seven, Plus or Minus Two](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two)
- [UX Myths — Myth 23](https://uxmyths.com/post/931925744/myth-23-choices-should-always-be-limited-to-seven)
