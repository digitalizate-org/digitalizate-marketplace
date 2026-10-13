---
id: LM-121
title: Started issues are not auto-added to the active cycle
kind: signal
category: signals
score: 3
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Started issues are not auto-added to the active cycle is false for the audited scope
verifiable_by: query
check: "cycles.auto_add_started == false"
check_scope: team
severity: low
measures: [LM-034]
tags: [signal, audit]
status: Active
---

## What it measures

Team setting cycleIssueAutoAssignStarted (evaluated only when cycles are enabled).

## When it fires

`cycles.auto_add_started == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Enable auto-add for started and completed issues in team settings.

## Evidence

See the practices this signal measures (LM-034); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
