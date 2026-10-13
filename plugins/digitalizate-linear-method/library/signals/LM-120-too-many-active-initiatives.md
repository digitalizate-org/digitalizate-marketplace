---
id: LM-120
title: More than four initiatives are active
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: More than four initiatives are active is false for the audited scope
verifiable_by: query
check: "initiatives.active_count > 4"
check_scope: workspace
severity: low
measures: [LM-010]
tags: [signal, audit]
status: Active
---

## What it measures

Count of Active initiatives. Linear's own roadmap ran two strategic workstreams plus asks and keep-the-lights-on.

## When it fires

`initiatives.active_count > 4` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Merge or sequence initiatives; keep one to four active.

## Evidence

See the practices this signal measures (LM-010); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
