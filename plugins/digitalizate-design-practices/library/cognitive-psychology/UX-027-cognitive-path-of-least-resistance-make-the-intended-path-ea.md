---
id: "UX-027"
title: "Cognitive Path of Least Resistance — Make the Intended Path Easiest"
category: "Cognitive Psychology"
subcategory: "Behavior Design"
score: 5
context: "Use when evaluating whether users will follow intended workflows, and when users are creating workarounds to avoid standard processes."
goals:
  - "Leverage Psychology to Guide User Behavior"
  - "Reduce Cognitive Load"
tags:
  - "workflow"
wireframe: "https://files.catbox.moe/gzpqac.jpg"
notion: "https://app.notion.com/p/Cognitive-Path-of-Least-Resistance-Make-the-Intended-Path-Easiest-f91a9aed5344820ab1548169fa0127f2"
---

## Why
People seek the lowest-effort path to accomplish their goals. This is adaptive, not lazy. If a shortcut exists and requires minimal effort to discover, users will take it. If the primary path is harder than a workaround — including external tools like spreadsheets and email — users will use the workaround and accumulate technical debt. The single most powerful question in enterprise workflow design is: "Is the intended path demonstrably easier than all alternatives?" If not, the intended path will not be used.

## How to implement
- For each intended workflow, map the actual effort (clicks, fields, time) versus common workarounds.
- If any workaround is easier, the workaround will win regardless of training and policy.
- Redesign the intended workflow to be measurably easier than alternatives.
- Pay particular attention to the comparison with external tools (Excel, email): if users can accomplish the same thing faster outside your product, they will.
- Track workaround adoption via analytics as a leading indicator of workflow friction.

## Metrics
Applying this pattern can positively influence the following UX metrics:
  - **Effectiveness**: Task success rate, Completion rate, Error rate
  - **Efficiency**: Time on task, Error counts
  - **Satisfaction & Perception**: Ease-of-use score, CSAT
  **How to measure**: Use task analysis to identify whether the intended path is the shortest and most prominent path in the UI, then measure completion rates and task times before and after removing friction from the intended path. A/B test layouts where the desired path is made visually and interactively dominant against neutral layouts, measuring conversion and error rates.

## Sources
- [100 Things #57–58 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
