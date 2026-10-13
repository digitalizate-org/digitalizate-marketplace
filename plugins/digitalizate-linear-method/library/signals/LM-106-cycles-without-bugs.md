---
id: LM-106
title: A recent cycle completed no bug or quality work
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: A recent cycle completed no bug or quality work is false for the audited scope
verifiable_by: query
check: "cycles.cycles_with_zero_bugs_last3 > 0"
check_scope: team
severity: medium
measures: [LM-060, LM-061, LM-063]
tags: [signal, audit]
status: Active
---

## What it measures

Number of the last three closed cycles whose completed issues include no Bug (or Chore) label.

## When it fires

`cycles.cycles_with_zero_bugs_last3 > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Pull bugs into the current cycle; reserve 20-30% of each cycle for quality.

## Evidence

See the practices this signal measures (LM-060, LM-061, LM-063); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
