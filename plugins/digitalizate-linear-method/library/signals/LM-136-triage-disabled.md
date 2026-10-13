---
id: LM-136
title: Triage is disabled
kind: signal
category: signals
score: 4
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Triage is disabled is false for the audited scope
verifiable_by: query
check: "triage.enabled == false"
check_scope: team
severity: medium
measures: [LM-050]
tags: [signal, audit]
status: Active
---

## What it measures

Team setting triageEnabled.

## When it fires

`triage.enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Enable triage and route integrations to it.

## Evidence

See the practices this signal measures (LM-050); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
