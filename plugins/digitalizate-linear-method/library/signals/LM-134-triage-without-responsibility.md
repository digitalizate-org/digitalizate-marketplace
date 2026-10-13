---
id: LM-134
title: Triage is enabled but nobody is responsible
kind: signal
category: signals
score: 4
source_tier: linear-internal
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Triage is enabled but nobody is responsible is false for the audited scope
verifiable_by: query
check: "triage.has_responsibility == false"
check_scope: team
severity: medium
measures: [LM-051]
tags: [signal, audit]
status: Active
---

## What it measures

Team has triage enabled and no triage responsibility configured (evaluated only when triage is enabled). A manual rotation recorded in linear-decisions.md counts as an exception.

## When it fires

`triage.has_responsibility == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Configure triage responsibility or record the weekly rotation in linear-decisions.md.

## Evidence

See the practices this signal measures (LM-051); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
