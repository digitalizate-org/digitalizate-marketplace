---
id: LM-046
title: Keep issues small enough to complete several per week
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: creating issues or reviewing work that stays in progress for weeks
verify: No issue stays in a started state for more than 14 days; a person completes several issues per week; sub-issues differ from each other by assignee, gate or delivery (LM-165)
verifiable_by: query
measured_by: [LM-126]
tags: [issues, size, momentum]
status: Active
---

## Why

"Ideally you can complete several concrete tasks each week." Small issues give the team the momentum the method is named after, keep PRs reviewable, and make the cycle's completion number honest.

## Do

- Split anything that will take more than two or three days by verifiable delivery, never by step, field, finding or file (LM-165).
- Use sub-issues to separate design from implementation.
- Steps of one deliverable are checklist items, not sub-issues.
- Read "in progress for two weeks" as a signal to split or unblock.

## Anti-pattern

Issues that are really projects, open for a month with one giant PR at the end.

## Fix

Split by deliverable; fold step-sized sub-issues back into a checklist; close the parent when the children are done.

## Evidence

- Rule from the method page; the 14-day threshold is the author's interpretation used by the audit.
