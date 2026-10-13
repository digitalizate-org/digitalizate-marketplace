---
id: LM-115
title: An active project has no target date
kind: signal
category: signals
score: 4
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project has no target date is false for the audited scope
verifiable_by: query
check: "projects.active_without_target_date_count > 0"
check_scope: workspace
severity: medium
measures: [LM-024]
tags: [signal, audit]
status: Active
---

## What it measures

Count of planned or started projects with no target date.

## When it fires

`projects.active_without_target_date_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Set a target date within one to three weeks for the current stage; move it only in an update.

## Evidence

See the practices this signal measures (LM-024); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
