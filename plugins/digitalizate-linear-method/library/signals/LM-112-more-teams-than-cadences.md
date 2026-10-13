---
id: LM-112
title: More teams exist than distinct cadences
kind: signal
category: signals
score: 4
source_tier: linear-internal
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: More teams exist than distinct cadences is false for the audited scope
verifiable_by: query
check: "teams.excess_over_cadences > 0"
check_scope: workspace
severity: medium
measures: [LM-070, LM-077]
tags: [signal, audit]
status: Active
---

## What it measures

Team count minus the number of distinct cycle configurations (enabled, duration, start day, cooldown). Teams that share a cadence usually mirror the org chart.

## When it fires

`teams.excess_over_cadences > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Merge teams that share a cadence; use Area labels or sub-teams with inheritance.

## Evidence

See the practices this signal measures (LM-070, LM-077); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
