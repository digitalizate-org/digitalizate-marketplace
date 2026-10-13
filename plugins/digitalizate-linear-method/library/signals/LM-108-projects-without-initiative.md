---
id: LM-108
title: An active project belongs to no initiative
kind: signal
category: signals
score: 3
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: An active project belongs to no initiative is false for the audited scope
verifiable_by: query
check: "projects.active_without_initiative_count > 0"
check_scope: workspace
severity: low
measures: [LM-004, LM-010, LM-015]
tags: [signal, audit]
status: Active
---

## What it measures

Count of planned or started projects with no initiative. Maintenance containers are an acceptable exception; record them in linear-decisions.md.

## When it fires

`projects.active_without_initiative_count > 0` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Attach each project to one of the active initiatives, or record the exception.

## Evidence

See the practices this signal measures (LM-004, LM-010, LM-015); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
