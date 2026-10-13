---
id: LM-127
title: One person created most of the active issues
kind: signal
category: signals
score: 3
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: One person created most of the active issues is false for the audited scope
verifiable_by: query
check: "issues.single_creator_share > 0.6"
check_scope: team
severity: low
measures: [LM-043, LM-044]
tags: [signal, audit]
status: Active
---

## What it measures

Largest share of active issues created by a single user.

## When it fires

`issues.single_creator_share > 0.6` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Give the team the spec and milestones; let each person write their own issues.

## Evidence

See the practices this signal measures (LM-043, LM-044); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
