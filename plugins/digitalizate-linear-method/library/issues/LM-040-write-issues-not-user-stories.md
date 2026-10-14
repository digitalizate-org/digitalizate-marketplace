---
id: LM-040
title: Write issues, not user stories
kind: practice
category: issues
score: 5
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Intercom, How we accidentally invented Job Stories | https://www.intercom.com/blog/accidentally-invented-job-stories/ | 2016-06-28"
  - "Hitask, Linear method madness, sans user stories | https://medium.com/hitask/linear-method-madness-sans-user-stories-0af082b3c652 | 2024-07-03"
  - "The Glimpse, Building Product at Linear with Nan Yu | https://www.theglimpse.co/p/nan-yu | 2023-04-11"
use_when: creating any issue, reviewing a team's issue style, or migrating from Scrum
verify: No open issue title or description follows the "As a <role>, I want <x>, so that <y>" pattern; the user context lives in the project spec
verifiable_by: query
measured_by: [LM-111]
tags: [issues, writing, user-stories]
status: Active
---

## Why

"We don't write user stories and think they're an anti-pattern." Linear's argument: stories became "a cargo cult ritual" that obscures the task. Intercom dropped them for a related reason: they "describe functionality to be built, rather than motivations people have". What the story format was trying to carry (who it is for, why it matters) is still needed; it goes in one plain line, not in a template (LM-160).

## Do

- One issue = one concrete task with a visible result (code, design, document, decision).
- Put the experience and the full why in the project spec, once.
- In the issue, a one- or two-sentence "Why it matters" in the reader's words is allowed, and required when the workspace declares a business or external reader (LM-160).
- Allow exploration placeholders; forbid story templates in descriptions.

## Anti-pattern

Issue templates that require "As a... I want... so that..." plus Gherkin acceptance criteria.

## Fix

Rewrite the issue as a task; keep the why as one plain line (or in the spec); keep acceptance as "Done when" checkboxes the reader can observe (LM-160).

## Evidence

- The Hitask critique shows the failure mode of dropping stories without specs: the team found the product "disjointed and confusing" (Medium, Jul 2024). Competitor opinion.
- Intercom replaced stories with a one-page brief and job stories, keeping the problem written down (Intercom, 2016). Independent company docs.
- In The Glimpse (Apr 2023) the interviewer, Jacob Jolibois, says "you can just say build a login screen"; Nan Yu answers "You can just say, do the pattern". Linear-internal.
