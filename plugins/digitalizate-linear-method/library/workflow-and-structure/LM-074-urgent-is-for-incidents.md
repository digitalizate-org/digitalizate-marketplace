---
id: LM-074
title: Use the four priorities; Urgent is for incidents only
kind: model
category: workflow-and-structure
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Priorities | https://linear.app/docs/priorities | 2026-10"
  - "Linear, Why we committed to a zero-bugs policy | https://linear.app/now/why-we-committed-to-a-zero-bugs-policy | 2025-09-24"
use_when: triaging, planning, or when a large share of issues is Urgent
verify: Urgent issues are under 20% of active issues and each one is an incident or a hard blocker decided by the goalie
verifiable_by: query
measured_by: [LM-107]
tags: [priorities, urgent, triage]
status: Active
---

## Why

Linear's priorities are fixed (No priority, Urgent, High, Medium, Low). Urgent interrupts the cycle; if a quarter of the backlog is urgent, nothing is. The goalie decides Urgent, not the reporter.

## Do

- Urgent: production incident, data error, hard blocker; handled today.
- High: this or next cycle. Medium: normal candidate. Low: closes if it does not rise in a few cycles.
- Write the definitions in `linear-decisions.md` and apply them in triage.

## Anti-pattern

Urgent as the default to get attention.

## Fix

Reset priorities in triage; reserve Urgent for the goalie.

## Evidence

- Linear's own bug deadlines distinguish high priority (48 hours) from the rest (7 days) (zero-bugs post, Sep 2025). Linear-internal. The 20% threshold is the author's interpretation.
