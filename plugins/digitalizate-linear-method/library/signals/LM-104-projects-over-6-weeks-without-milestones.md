---
id: LM-104
title: An active project is older than six weeks and has no milestones
kind: signal
category: signals
score: 5
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project is older than six weeks and has no milestones is false for the audited scope
verifiable_by: query
check: "projects.active_over_6w_without_milestones_count > 0"
check_scope: workspace
severity: high
measures: [LM-020, LM-021, LM-026]
tags: [signal, audit]
status: Active
---

## What it measures

Count of started projects whose start is more than 42 days ago and that have no milestones. The method asks for one to three weeks per stage.

## When it fires

`projects.active_over_6w_without_milestones_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Split into stage projects or add shipped-stage milestones with dates; close containers that will never end and give them an indefinite status.

## Evidence

See the practices this signal measures (LM-020, LM-021, LM-026); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
