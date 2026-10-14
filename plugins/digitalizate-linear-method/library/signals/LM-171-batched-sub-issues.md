---
id: LM-171
title: A parent has many sub-issues created in one batch
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear docs, Parent and sub-issues | https://linear.app/docs/parent-and-sub-issues | 2026-10"
  - "Lawrence and Green, The Humanizing Work Guide to Splitting User Stories | https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/ | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: A parent has many sub-issues created in one batch is false for the audited scope
verifiable_by: query
check: "issues.batched_subissue_parent_count > 0"
check_scope: team
severity: low
measures: [LM-165, LM-166, LM-095]
tags: [signal, audit, granularity]
status: Active
---

## What it measures

Number of parents with at least `writing.subissue_batch_count` active sub-issues (default 5) created by the same creator within `writing.subissue_batch_minutes` minutes (default 10), both in the JSON block of `linear-decisions.md`.

## When it fires

`issues.batched_subissue_parent_count > 0` evaluated against the team metrics of the snapshot. Only active sub-issues are counted, because the snapshot does not fetch completed or cancelled issues.

## Fix

Check each sample against the three split reasons of LM-165. Fold children that share assignee, gate and verification into the parent as a checklist; move the set to a project if it spans more than a cycle.

## Evidence

See LM-165 and LM-166. A batch under one parent is not wrong by itself (a lead may decompose a spec at once); it is the pattern of a partition copied from a source document (LM-154). Thresholds are interpretation, tested on one real workspace (one parent with 6 sub-issues in 22 seconds) and on the healthy fixture (no flags).
