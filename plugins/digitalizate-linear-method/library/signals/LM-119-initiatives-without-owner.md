---
id: LM-119
title: An active initiative has no owner
kind: signal
category: signals
score: 5
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active initiative has no owner is false for the audited scope
verifiable_by: query
check: "initiatives.active_without_owner_count > 0"
check_scope: workspace
severity: high
measures: [LM-010]
tags: [signal, audit]
status: Active
---

## What it measures

Count of Planned or Active initiatives with no owner.

## When it fires

`initiatives.active_without_owner_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Assign an owner who writes the initiative updates.

## Evidence

See the practices this signal measures (LM-010); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
