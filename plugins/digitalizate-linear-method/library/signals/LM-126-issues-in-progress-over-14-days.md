---
id: LM-126
title: Issues have been in progress for more than 14 days
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Issues have been in progress for more than 14 days is false for the audited scope
verifiable_by: query
check: "issues.started_over_14d_count > 0"
check_scope: team
severity: low
measures: [LM-046]
tags: [signal, audit]
status: Active
---

## What it measures

Count of issues in started states whose startedAt is more than 14 days ago.

## When it fires

`issues.started_over_14d_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Split into sub-issues with visible results, or unblock.

## Evidence

See the practices this signal measures (LM-046); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
