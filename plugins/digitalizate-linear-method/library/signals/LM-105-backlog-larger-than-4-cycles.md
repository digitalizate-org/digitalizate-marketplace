---
id: LM-105
title: The backlog holds more than four cycles of work
kind: signal
category: signals
score: 4
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: The backlog holds more than four cycles of work is false for the audited scope
verifiable_by: query
check: "backlog.cycles_of_work > 4"
check_scope: team
severity: medium
measures: [LM-054, LM-056]
tags: [signal, audit]
status: Active
---

## What it measures

Backlog issue count divided by the average completed count of the last three cycles.

## When it fires

`backlog.cycles_of_work > 4` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Prune: cancel what nobody defends, convert far-off ideas into candidate projects, enable auto-close.

## Evidence

See the practices this signal measures (LM-054, LM-056); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
