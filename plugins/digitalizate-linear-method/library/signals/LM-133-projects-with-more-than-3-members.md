---
id: LM-133
title: An active project has more than three members
kind: signal
category: signals
score: 3
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project has more than three members is false for the audited scope
verifiable_by: query
check: "projects.active_members_over_3_count > 0"
check_scope: workspace
severity: low
measures: [LM-028, LM-020]
tags: [signal, audit]
status: Active
---

## What it measures

Count of started projects with more than three members.

## When it fires

`projects.active_members_over_3_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Split into parallel projects of one to three people.

## Evidence

See the practices this signal measures (LM-028, LM-020); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
