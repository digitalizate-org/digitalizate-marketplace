---
id: LM-124
title: Open issues have titles longer than 80 characters
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Open issues have titles longer than 80 characters is false for the audited scope
verifiable_by: query
check: "issues.long_title_count > 0"
check_scope: team
severity: low
measures: [LM-041]
tags: [signal, audit]
status: Active
---

## What it measures

Count of active issues with a title longer than 80 characters.

## When it fires

`issues.long_title_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Shorten the titles; move detail to the description, type to labels, priority to the field.

## Evidence

See the practices this signal measures (LM-041); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
