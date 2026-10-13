---
id: LM-128
title: Labels encode workflow status
kind: signal
category: signals
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Labels encode workflow status is false for the audited scope
verifiable_by: query
check: "labels.status_like_count > 0"
check_scope: team
severity: high
measures: [LM-072]
tags: [signal, audit]
status: Active
---

## What it measures

Count of labels whose name matches blocked, waiting, review, qa, ready, done, todo, in progress, on hold, pending, awaiting.

## When it fires

`labels.status_like_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Delete the label; use blocking relations, the In Review state, or snooze.

## Evidence

See the practices this signal measures (LM-072); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
