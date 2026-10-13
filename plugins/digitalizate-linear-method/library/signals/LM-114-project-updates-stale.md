---
id: LM-114
title: An active project has no update in the last 7 days
kind: signal
category: signals
score: 5
source_tier: linear-internal
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project has no update in the last 7 days is false for the audited scope
verifiable_by: query
check: "projects.active_update_stale_7d_count > 0"
check_scope: workspace
severity: high
measures: [LM-025]
tags: [signal, audit]
status: Active
---

## What it measures

Count of started projects whose last update is older than 7 days or missing.

## When it fires

`projects.active_update_stale_7d_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Turn on update reminders; the lead writes the update this week; review missing updates at cycle close.

## Evidence

See the practices this signal measures (LM-025); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
