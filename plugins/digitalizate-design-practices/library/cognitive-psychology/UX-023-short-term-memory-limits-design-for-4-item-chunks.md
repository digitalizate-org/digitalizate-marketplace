---
id: "UX-023"
title: "Short-Term Memory Limits — Design for 4-Item Chunks"
category: "Cognitive Psychology"
subcategory: "Memory and Working Load"
score: 5
context: "Use when designing multi-step workflows, any interface where users must remember information from a previous step, and wizard or multi-page form design."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Reduce Cognitive Load"
tags:
  - "cognitive-load"
wireframe: "https://files.catbox.moe/bi9bey.jpg"
notion: "https://app.notion.com/p/Short-Term-Memory-Limits-Design-for-4-Item-Chunks-712a9aed53448293a97301b5d488e00a"
---

## Why
Users can hold approximately 4 items (chunks) in working memory at any time — not the traditional "7±2" often cited. When workflows require users to remember information from one screen to apply on another, or hold the state of multiple wizard steps in mind, they frequently make errors. Any workflow that requires users to remember more than 3–4 pieces of information across steps is at risk for memory-based errors. The classic multi-step enterprise form wizard where each step's data is not summarized on subsequent steps is the primary offender.

## How to implement
- Audit all multi-step workflows for cross-step memory requirements.
- Any information entered in a previous step that is needed in the current step must be displayed (repeated or summarized) on the current step.
- Show a summary sidebar in wizards that updates as each step is completed.
- Never require users to remember codes, IDs, or selections from a previous step — surface them contextually on the step where they're needed.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time on task, Error counts
  - **Effectiveness**: Task success rate, Completion rate
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Measure task completion times and error rates on information-dense layouts before and after restructuring content into 4-item chunks. Use eye-tracking to verify that chunked layouts reduce re-reading and backtracking behaviors in scanning tasks.

## Sources
- [100 Things #19–20 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
