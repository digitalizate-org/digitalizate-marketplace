---
id: LM-123
title: Auto-close of inactive backlog issues is off
kind: signal
category: signals
score: 3
source_tier: official-docs
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Auto-close of inactive backlog issues is off is false for the audited scope
verifiable_by: query
check: "settings.auto_close_enabled == false"
check_scope: team
severity: low
measures: [LM-055, LM-054]
tags: [signal, audit]
status: Active
---

## What it measures

Team setting autoClosePeriod is null.

## When it fires

`settings.auto_close_enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Enable auto-close (3 or 6 months) and auto-archive.

## Evidence

See the practices this signal measures (LM-055, LM-054); their Evidence sections carry the sources. The threshold tier is `official-docs`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
