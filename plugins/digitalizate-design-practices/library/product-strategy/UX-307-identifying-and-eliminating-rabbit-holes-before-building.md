---
id: "UX-307"
title: "Identifying and Eliminating Rabbit Holes Before Building"
category: "Product Strategy"
subcategory: "Risk Management"
score: 5
context: "Use after sketching a solution but before committing to building it — and during design reviews for any feature containing novel technical or design elements."
goals:
  - "Present & Defend Design Decisions"
wireframe: "https://files.catbox.moe/wp2rj5.jpg"
notion: "https://app.notion.com/p/Identifying-and-Eliminating-Rabbit-Holes-Before-Building-b0aa9aed534482db8295013858c89e8f"
---

## Why
Before committing to a shaped design, walk through use cases in "slow motion" to reveal unresolved design decisions, technical unknowns, and hidden complexity that could multiply time beyond the intended appetite. Rabbit holes are problems that seem small but expand endlessly — undiscovered technical dependencies, design problems without obvious solutions, or decisions that require infrastructure that doesn't yet exist. Finding a showstopper in week 5 of 6 is catastrophic; finding it before committing to build provides enough time to reshape or descope.

## How to implement
For each key use case in the design, ask: Does this require technical work we've never done? Are we assuming parts will fit together without validating? Are there design decisions that need to be settled in advance (which we haven't settled)? For each rabbit hole identified: (1) Solve it now (design or research the solution), (2) Patch it (choose a simpler approach that avoids the hole), or (3) Explicitly declare it out of scope for this cycle.

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Completion rate, Task success rate
- **Efficiency**: Completion time, Time saved per task
- **Satisfaction & Perception**: CSAT, Satisfaction rating
**How to measure**: Track the number of design or development iterations required to resolve rabbit-hole issues discovered post-launch versus issues surfaced and resolved in planning. Compare task success rates and error rates in usability testing for features where rabbit holes were pre-identified and addressed during design.

## Sources
- [Shape Up by Ryan Singer, Ch. 5 (Basecamp, 2019)](https://basecamp.com/shapeup/1.4-chapter-05)
