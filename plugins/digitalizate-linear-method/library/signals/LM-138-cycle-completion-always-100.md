---
id: LM-138
title: Every one of the last three cycles completed above 98%
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Every one of the last three cycles completed above 98% is false for the audited scope
verifiable_by: query
check: "cycles.last3_completion_min > 0.98"
check_scope: team
severity: low
measures: [LM-011, LM-032]
tags: [signal, audit]
status: Active
---

## What it measures

Minimum completion across the last three closed cycles. Consistent 100% suggests under-planning or manual cleanup.

## When it fires

`cycles.last3_completion_min > 0.98` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Plan a little above last cycle's completed count; keep rollover automatic.

## Evidence

See the practices this signal measures (LM-011, LM-032); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
