---
id: LM-107
title: More than 20% of active issues are Urgent
kind: signal
category: signals
score: 4
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: More than 20% of active issues are Urgent is false for the audited scope
verifiable_by: query
check: "issues.urgent_share > 0.2"
check_scope: team
severity: medium
measures: [LM-074]
tags: [signal, audit]
status: Active
---

## What it measures

Share of non-completed, non-canceled issues with priority Urgent.

## When it fires

`issues.urgent_share > 0.2` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Reset priorities in triage; reserve Urgent for incidents decided by the goalie; write the priority definitions in linear-decisions.md.

## Evidence

See the practices this signal measures (LM-074); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
