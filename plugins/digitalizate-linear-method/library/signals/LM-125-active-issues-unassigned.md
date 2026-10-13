---
id: LM-125
title: Issues in Todo or In Progress have no assignee
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Issues in Todo or In Progress have no assignee is false for the audited scope
verifiable_by: query
check: "issues.active_unassigned_count > 0"
check_scope: team
severity: medium
measures: [LM-047]
tags: [signal, audit]
status: Active
---

## What it measures

Count of issues in unstarted or started states with no assignee.

## When it fires

`issues.active_unassigned_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Assign at planning; send unassigned issues back to backlog.

## Evidence

See the practices this signal measures (LM-047); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
