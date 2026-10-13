---
id: LM-113
title: An issue delegated to an agent has no human assignee
kind: signal
category: signals
score: 5
source_tier: linear-internal
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An issue delegated to an agent has no human assignee is false for the audited scope
verifiable_by: query
check: "issues.delegated_without_assignee_count > 0"
check_scope: team
severity: high
measures: [LM-090, LM-091]
tags: [signal, audit]
status: Active
---

## What it measures

Count of issues with a delegate set and no assignee.

## When it fires

`issues.delegated_without_assignee_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Assign a human to each delegated issue; the assignee reviews the agent's output.

## Evidence

See the practices this signal measures (LM-090, LM-091); their Evidence sections carry the sources. The threshold tier is `linear-internal`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
