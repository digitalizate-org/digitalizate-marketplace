---
id: LM-118
title: Backlog issues untouched for six months
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Backlog issues untouched for six months is false for the audited scope
verifiable_by: query
check: "backlog.stale_180d_count > 0"
check_scope: team
severity: medium
measures: [LM-054, LM-055]
tags: [signal, audit]
status: Active
---

## What it measures

Count of backlog issues not updated in 180 days.

## When it fires

`backlog.stale_180d_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Cancel or archive with a standard comment; enable auto-close.

## Evidence

See the practices this signal measures (LM-054, LM-055); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
