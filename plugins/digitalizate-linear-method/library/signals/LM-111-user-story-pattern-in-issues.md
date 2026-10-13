---
id: LM-111
title: Open issues use the user-story template
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Open issues use the user-story template is false for the audited scope
verifiable_by: query
check: "issues.user_story_count > 0"
check_scope: team
severity: medium
measures: [LM-040]
tags: [signal, audit]
status: Active
---

## What it measures

Count of active issues whose title or description matches an "As a <role>, I want..." or "Como <rol>, quiero..." pattern.

## When it fires

`issues.user_story_count > 0` evaluated against the team metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Move the why to the project spec; rewrite the issue as a task; remove the template requirement.

## Evidence

See the practices this signal measures (LM-040); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
