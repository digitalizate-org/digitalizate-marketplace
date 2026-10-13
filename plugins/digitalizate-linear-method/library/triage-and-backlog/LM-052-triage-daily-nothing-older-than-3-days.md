---
id: LM-052
title: Triage daily; nothing waits more than three days
kind: practice
category: triage-and-backlog
score: 5
source_tier: evidence
sources:
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
  - "Linear customer story, Sierra | https://linear.app/customers/sierra | 2025-04"
  - "Linear customer story, Scale AI | https://linear.app/customers/scale | 2024-05"
use_when: running triage, auditing inbox health
verify: No issue has been in a triage state for more than three days (overridable per workspace)
verifiable_by: query
measured_by: [LM-102]
tags: [triage, sla, cadence]
status: Active
---

## Why

An inbox that is read once a week is a backlog with a different name. The documented adoptions converge on a daily pass and a short deadline: Langfuse resolves triage usually within a day, Sierra has a daily 9am reminder, Scale AI runs SLAs with alerts.

## Do

- One or two passes a day, 15-30 minutes, by the goalie.
- Target: empty inbox at end of day; hard limit three days.
- Snooze with a date when information is missing.

## Anti-pattern

A hundred items in triage, the oldest from last quarter.

## Fix

Declare triage bankruptcy once (decline with a comment, keep what someone defends), then keep the daily pass.

## Evidence

- Langfuse: triage is "resolved normally in a day" (handbook, 2026). Independent company docs.
- Sierra: daily reminder at 9 to triage customer requests (Linear customer story, Apr 2025). Interested source.
- Linear's zero-bugs policy applies 48-hour and 7-day SLAs after triage (Artman & Roman, Sep 2025). Linear-internal.
