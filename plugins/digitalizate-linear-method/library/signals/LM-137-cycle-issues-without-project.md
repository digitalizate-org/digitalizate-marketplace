---
id: LM-137
title: Issues in the active cycle belong to no project
kind: signal
category: signals
score: 3
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Issues in the active cycle belong to no project is false for the audited scope
verifiable_by: query
check: "issues.in_cycle_without_project_count > 3"
check_scope: team
severity: low
measures: [LM-004]
tags: [signal, audit]
status: Active
---

## What it measures

Count of issues in the active cycle with no project. Bugs and chores are expected here; the threshold allows a few.

## When it fires

`issues.in_cycle_without_project_count > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Attach feature work to projects; keep bugs and chores as the explicit exception.

## Evidence

See the practices this signal measures (LM-004); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
