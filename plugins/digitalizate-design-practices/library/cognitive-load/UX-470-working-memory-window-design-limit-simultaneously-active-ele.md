---
id: "UX-470"
title: "Working Memory Window Design: Limit Simultaneously Active Elements"
category: "Cognitive Load"
subcategory: "Working Memory"
score: 4
context: "Apply to all task-flow design, with heightened priority for mobile-first interfaces (smaller screens are natural working-memory scratchpads) and for tasks performed by users in high-interruption environments."
goals:
  - "Simplify a Cluttered Interface"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
  - "navigation"
wireframe: "https://files.catbox.moe/4hqzkh.jpg"
notion: "https://app.notion.com/p/Working-Memory-Window-Design-Limit-Simultaneously-Active-Elements-afda9aed53448380a64b810f422e46cb"
---

## Why
Nelson Cowan's revision of Miller's work suggests the actual functional working memory limit for complex cognitive tasks is 3–4 chunks, not 7. Designing as if users have more capacity leads to interfaces that overwhelm the moment tasks become even slightly complex. The practical implication is to audit how many distinct elements users must actively hold in mind simultaneously to complete any given workflow step, and redesign to reduce that number.

## How to implement
- Map the information dependencies for each step in your critical workflows: list every piece of information a user must actively remember to complete that step. If the list exceeds 4 items, redesign.
- Show only the data columns or fields that are actively relevant to the user's current task — allow column/field customization and hiding for data-dense interfaces.
- In wizard flows, never show input fields that are only needed if the user selects a certain option on the current screen — use conditional reveal.
- For real-time collaboration or live-update interfaces, throttle update frequency during active user editing to avoid flooding working memory with incoming changes.
- When users are mid-task, avoid injecting notifications, tooltips, or AI suggestions that expand the number of active cognitive objects they must manage.
- Design for graceful degradation of the UI under low-attention conditions: the most critical path should be completable with minimal working memory by a distracted user.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate, Error rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Run usability tests on complex screens where multiple elements compete for attention simultaneously, measuring error rates and task completion times before and after reducing the number of concurrently active elements. Use cognitive load rating scales (e.g., NASA-TLX) to quantify perceived mental effort.

## Sources
- [Working Memory — Laws of UX](https://lawsofux.com/working-memory/)
- [Scaling User Interfaces — Nielsen Norman Group](https://www.nngroup.com/articles/scaling-user-interfaces/)
- [Working Memory and External Memory — Nielsen Norman Group](https://www.nngroup.com/articles/working-memory-external-memory/)
- [How Context Switching Sabotages Productivity — Todoist](https://www.todoist.com/inspiration/context-switching)
