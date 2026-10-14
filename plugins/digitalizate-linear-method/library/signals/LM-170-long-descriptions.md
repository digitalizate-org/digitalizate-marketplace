---
id: LM-170
title: Many open issue descriptions exceed the agreed length
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Malte Ubl, Design Docs at Google | https://www.industrialempathy.com/posts/design-docs-at-google/ | 2020-07-06"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Many open issue descriptions exceed the agreed length is false for the audited scope
verifiable_by: query
check: "issues.long_description_share > 0.25"
check_scope: team
severity: low
measures: [LM-160, LM-161, LM-042]
tags: [signal, audit, writing]
status: Active
---

## What it measures

Share of active issues with a non-empty description whose text outside checklist items is longer than the agreed maximum: 2 500 characters by default (`writing.description_max_chars` in the JSON block of `linear-decisions.md`); there is no separate value for bugs. Checklist items and their indented continuation lines do not count: a long "Done when" with a check per item is the shape the standard asks for, and counting it flagged the reference issue of the workspace where it was tested.

## When it fires

`issues.long_description_share > 0.25` evaluated against the team metrics of the snapshot. Skipped when no active issue has a description.

## Fix

Check the samples: a long description usually holds a diagnosis, a procedure or a data table. Move it to the linked document or the plan comment (LM-161, LM-163); keep the five blocks of LM-160.

## Evidence

"Write only as much as you need" (Linear Method); "Keep it succinct!" (Google design docs). No source gives a number: the lengths and the 0.25 share are interpretation, tuned per workspace.
