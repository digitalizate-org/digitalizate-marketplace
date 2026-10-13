---
id: LM-100
title: Cycle completion below 60% over the last three cycles
kind: signal
category: signals
score: 5
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Cycle completion below 60% over the last three cycles is false for the audited scope
verifiable_by: query
check: "cycles.last3_completion_avg < 0.6"
check_scope: team
severity: high
measures: [LM-032, LM-003]
tags: [signal, audit]
status: Active
---

## What it measures

Average of completed over planned issues across the last three closed cycles. Linear's capacity dial uses the same three-cycle window.

## When it fires

`cycles.last3_completion_avg < 0.6` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Plan the next cycle from the completed count, not from wishes; cut load until completion stabilizes between 70% and 90%.

## Evidence

See the practices this signal measures (LM-032, LM-003); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
