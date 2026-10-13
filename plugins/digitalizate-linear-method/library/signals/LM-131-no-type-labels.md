---
id: LM-131
title: No Bug/Feature/Improvement/Chore labels exist
kind: signal
category: signals
score: 3
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: No Bug/Feature/Improvement/Chore labels exist is false for the audited scope
verifiable_by: query
check: "labels.type_group_present == false"
check_scope: team
severity: low
measures: [LM-073, LM-060]
tags: [signal, audit]
status: Active
---

## What it measures

Whether the team or workspace has labels named Bug, Feature, Improvement or Chore.

## When it fires

`labels.type_group_present == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Create the Type label group and require it in triage.

## Evidence

See the practices this signal measures (LM-073, LM-060); their Evidence sections carry the sources. The threshold tier is `evidence`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
