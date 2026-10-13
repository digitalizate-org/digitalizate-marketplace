---
id: LM-103
title: An active project has no lead
kind: signal
category: signals
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project has no lead is false for the audited scope
verifiable_by: query
check: "projects.active_without_lead_count > 0"
check_scope: workspace
severity: high
measures: [LM-022]
tags: [signal, audit]
status: Active
---

## What it measures

Count of projects in planned or started statuses with no lead set.

## When it fires

`projects.active_without_lead_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Assign a lead from the project team for each one; if nobody can lead it, the project is not ready to run.

## Evidence

See the practices this signal measures (LM-022); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
