---
id: LM-135
title: Estimates are enabled
kind: signal
category: signals
score: 3
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Estimates are enabled is false for the audited scope
verifiable_by: query
check: "settings.estimates_enabled == true"
check_scope: team
severity: low
measures: [LM-076]
tags: [signal, audit]
status: Active
---

## What it measures

Team issueEstimationType is not notUsed. A reason in linear-decisions.md makes this an accepted exception.

## When it fires

`settings.estimates_enabled == true` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Disable estimates unless a written reason exists; plan from completed counts.

## Evidence

See the practices this signal measures (LM-076); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
