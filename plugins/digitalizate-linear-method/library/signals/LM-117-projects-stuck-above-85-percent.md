---
id: LM-117
title: A project has sat above 85% progress for more than a cycle
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: A project has sat above 85% progress for more than a cycle is false for the audited scope
verifiable_by: query
check: "projects.active_progress_over_85_count > 0"
check_scope: workspace
severity: low
measures: [LM-029, LM-008]
tags: [signal, audit]
status: Active
---

## What it measures

Count of started projects with progress above 0.85 and no completion. The snapshot cannot see how long; treat as a prompt to decide.

## When it fires

`projects.active_progress_over_85_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Complete the project and move leftovers to a follow-up project or cancel them.

## Evidence

See the practices this signal measures (LM-029, LM-008); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
