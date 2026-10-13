---
id: LM-130
title: The team has states beyond the defaults plus In Review and Won't Fix
kind: signal
category: signals
score: 3
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: The team has states beyond the defaults plus In Review and Won't Fix is false for the audited scope
verifiable_by: query
check: "states.extra_count > 0"
check_scope: team
severity: low
measures: [LM-071]
tags: [signal, audit]
status: Active
---

## What it measures

Count of workflow states whose names are outside the default set and the two allowed additions.

## When it fires

`states.extra_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Collapse to defaults; handle waits with relations; keep Won't Fix if the zero-bugs rule is in place.

## Evidence

See the practices this signal measures (LM-071); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
