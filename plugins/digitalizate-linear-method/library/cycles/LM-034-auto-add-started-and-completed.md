---
id: LM-034
title: Auto-add started and completed issues to the active cycle
kind: practice
category: cycles
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Cycles | https://linear.app/docs/use-cycles | 2026-10"
use_when: configuring a team's cycles, or when work is done outside the cycle and completion numbers look wrong
verify: Team settings have both "auto-add started issues" and "auto-add completed issues" to the active cycle enabled
verifiable_by: query
measured_by: [LM-121]
tags: [cycles, settings, automation]
status: Active
---

## Why

Work that starts or finishes outside the cycle is still work. Auto-adding it keeps the cycle an honest record of what the team did, which is what makes completion and rollover numbers mean something.

## Do

- Enable `cycleIssueAutoAssignStarted` and `cycleIssueAutoAssignCompleted` in team settings.
- Keep "lock issues to active cycle" off unless the team has a reason.

## Anti-pattern

A cycle at 100% while half the merged PRs were never in it.

## Fix

Turn the two settings on; the next cycle reflects reality.

## Evidence

- The two settings are documented on Linear's Cycles page. Official-docs.
