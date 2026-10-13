---
id: LM-109
title: No GitHub or GitLab integration is connected
kind: signal
category: signals
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear docs, Cycles / Triage / Projects / Teams | https://linear.app/docs | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: No GitHub or GitLab integration is connected is false for the audited scope
verifiable_by: query
check: "integrations.git_connected == false"
check_scope: workspace
severity: medium
measures: [LM-048, LM-006]
tags: [signal, audit]
status: Active
---

## What it measures

Whether a GitHub or GitLab integration exists in the workspace, so PRs can move issue states.

## When it fires

`integrations.git_connected == false` evaluated against the workspace metrics of the snapshot. Thresholds can be overridden per workspace in `linear-decisions.md` (see linear-audit).

## Fix

Connect the repository; let PR events move states; define Done.

## Evidence

See the practices this signal measures (LM-048, LM-006); their Evidence sections carry the sources. The threshold tier is `official-method`: official thresholds come from the method or docs, interpretation thresholds are the author's and should be tuned per workspace.
