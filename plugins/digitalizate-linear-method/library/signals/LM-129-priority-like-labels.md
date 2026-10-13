---
id: LM-129
title: Labels encode priority
kind: signal
category: signals
score: 4
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Labels encode priority is false for the audited scope
verifiable_by: query
check: "labels.priority_like_count > 0"
check_scope: team
severity: medium
measures: [LM-073, LM-074]
tags: [signal, audit]
status: Active
---

## What it measures

Count of labels whose name matches urgent, critical, p0-p3, high or low priority.

## When it fires

`labels.priority_like_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Delete the label; set the native priority in triage.

## Evidence

See the practices this signal measures (LM-073, LM-074); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
