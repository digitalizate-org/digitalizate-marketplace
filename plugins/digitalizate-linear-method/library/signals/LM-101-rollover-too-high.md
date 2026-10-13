---
id: LM-101
title: More than a quarter of cycle issues roll over
kind: signal
category: signals
score: 4
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: More than a quarter of cycle issues roll over is false for the audited scope
verifiable_by: query
check: "cycles.rollover_rate_last3 > 0.25"
check_scope: team
severity: medium
measures: [LM-033, LM-032]
tags: [signal, audit]
status: Active
---

## What it measures

Share of issues left uncompleted when each of the last three cycles closed (Linear's uncompletedIssuesUponClose), averaged.

## When it fires

`cycles.rollover_rate_last3 > 0.25` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Review the rolled list at cycle close: split, cancel or unblock every issue that rolled twice; plan less.

## Evidence

See the practices this signal measures (LM-033, LM-032); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
