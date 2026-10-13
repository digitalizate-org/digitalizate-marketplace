---
id: LM-110
title: Cycles are disabled on a team that plans work
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Cycles are disabled on a team that plans work is false for the audited scope
verifiable_by: query
check: "cycles.enabled == false"
check_scope: team
severity: medium
measures: [LM-030]
tags: [signal, audit]
status: Active
---

## What it measures

Team setting cyclesEnabled.

## When it fires

`cycles.enabled == false` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Enable cycles at two weeks (one week for tiny or early teams), starting on a fixed weekday.

## Evidence

See the practices this signal measures (LM-030); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
