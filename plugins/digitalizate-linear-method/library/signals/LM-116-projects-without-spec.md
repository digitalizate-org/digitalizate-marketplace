---
id: LM-116
title: An active project has no spec content
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project has no spec content is false for the audited scope
verifiable_by: query
check: "projects.active_without_spec_count > 0"
check_scope: workspace
severity: medium
measures: [LM-023]
tags: [signal, audit]
status: Active
---

## What it measures

Count of started projects whose overview content and description are both shorter than 200 characters and that have no project document.

## When it fires

`projects.active_without_spec_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Write the one-page spec with the template before writing more issues.

## Evidence

See the practices this signal measures (LM-023); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
