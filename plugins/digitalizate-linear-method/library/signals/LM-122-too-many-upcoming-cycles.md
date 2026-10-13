---
id: LM-122
title: More than three upcoming cycles are created
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: More than three upcoming cycles are created is false for the audited scope
verifiable_by: query
check: "cycles.upcoming_count > 3"
check_scope: team
severity: low
measures: [LM-036]
tags: [signal, audit]
status: Active
---

## What it measures

Team setting upcomingCycleCount.

## When it fires

`cycles.upcoming_count > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Set upcoming cycles to 2 or 3; plan further out with projects and milestones.

## Evidence

See the practices this signal measures (LM-036); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
