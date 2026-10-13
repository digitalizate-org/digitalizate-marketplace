---
id: LM-040
title: Write issues, not user stories
kind: practice
category: issues
score: 5
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Hitask, Linear method madness, sans user stories | https://medium.com/hitask/linear-method-madness-sans-user-stories-0af082b3c652 | 2024-07-03"
use_when: creating any issue, reviewing a team's issue style, or migrating from Scrum
verify: No open issue title or description follows the "As a <role>, I want <x>, so that <y>" pattern; the user context lives in the project spec
verifiable_by: query
measured_by: [LM-111]
tags: [issues, writing, user-stories]
status: Active
---

## Why

"We don't write user stories and think they're an anti-pattern." Linear's argument: stories became "a cargo cult ritual" that obscures the task and "can silo engineers into a mechanical role where they code to the issue requirements". An issue describes a concrete task with a defined outcome; the user problem and experience are discussed at the product and project level, in the spec. Placeholder issues for exploration ("Explore design", "Write project spec") are fine.

## Do

- One issue = one concrete task with a visible result (code, design, document, decision).
- Put who, why and the experience in the project spec, once.
- Allow exploration placeholders; forbid story templates in descriptions.

## Anti-pattern

Issue templates that require "As a... I want... so that..." plus Gherkin acceptance criteria.

## Fix

Move the why to the spec's Why section; rewrite the issue as a task; keep acceptance criteria only when they are verifiable in one line.

## Evidence

- The Hitask critique shows the failure mode of dropping stories without specs: the team found the product "disjointed and confusing" (Medium, Jul 2024). Competitor opinion.
- "you can just say build a login screen" (Nan Yu, The Glimpse). Linear-internal.
