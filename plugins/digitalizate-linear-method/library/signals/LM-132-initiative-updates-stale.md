---
id: LM-132
title: An active initiative has no update in 30 days
kind: signal
category: signals
score: 3
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active initiative has no update in 30 days is false for the audited scope
verifiable_by: query
check: "initiatives.active_update_stale_30d_count > 0"
check_scope: workspace
severity: low
measures: [LM-017]
tags: [signal, audit]
status: Active
---

## What it measures

Count of Active initiatives whose last update is older than 30 days or missing.

## When it fires

`initiatives.active_update_stale_30d_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Write the initiative update; schedule the monthly review.

## Evidence

See the practices this signal measures (LM-017); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
