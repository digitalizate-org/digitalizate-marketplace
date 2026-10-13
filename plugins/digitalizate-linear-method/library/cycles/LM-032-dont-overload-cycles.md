---
id: LM-032
title: Don't overload cycles
kind: practice
category: cycles
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles | https://linear.app/docs/use-cycles | 2026-10"
use_when: planning a cycle, or when completion stays low cycle after cycle
verify: Cycle load at start does not exceed the average completed count of the previous three cycles, and completion stays above 60%
verifiable_by: query
measured_by: [LM-100]
tags: [cycles, capacity, planning]
status: Active
---

## Why

"Don't overload cycles with tasks and let unfinished items move to the next cycle automatically." Linear's capacity indicator uses the velocity of the previous three completed cycles. A cycle planned at 130% of what the team completes teaches everyone that the plan is fiction.

## Do

- Plan from the last three cycles' completed counts (issues or points).
- Leave 20-30% for bugs, requests and the unexpected.
- If completion stays under 60%, cut the load before changing anything else.

## Anti-pattern

Cycles that complete 40% every time, with the rest rolling forward as a habit.

## Fix

Halve the plan for one cycle, then grow it from measured completion.

## Evidence

- Linear's capacity dial is based on "the velocity of the previous three completed cycles" (Linear docs, Cycles). Official-docs.
