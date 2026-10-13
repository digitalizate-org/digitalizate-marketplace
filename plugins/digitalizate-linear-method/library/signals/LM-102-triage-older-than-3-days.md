---
id: LM-102
title: An issue has waited in triage for more than three days
kind: signal
category: signals
score: 5
source_tier: interpretation
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An issue has waited in triage for more than three days is false for the audited scope
verifiable_by: query
check: "triage.max_age_days > 3"
check_scope: team
severity: high
measures: [LM-052, LM-050, LM-051]
tags: [signal, audit]
status: Active
---

## What it measures

Age in days of the oldest issue currently in a triage-type state. Langfuse clears triage in about a day; Sierra reviews daily.

## When it fires

`triage.max_age_days > 3` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Run the daily pass today; declare triage bankruptcy once if the inbox is large (decline with a comment, keep what someone defends).

## Evidence

See the practices this signal measures (LM-052, LM-050, LM-051); their Evidence sections carry the sources. The threshold tier is `interpretation`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
