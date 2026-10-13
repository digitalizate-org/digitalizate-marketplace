---
id: LM-082
title: Asynchronous design feedback instead of formal reviews
kind: practice
category: design-and-users
score: 3
source_tier: linear-internal
sources:
  - "Lenny's Newsletter, How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | 2023-09-26"
  - "Linear Method, Manage design projects | https://linear.app/method/manage-design-projects | 2026-10"
use_when: a team schedules weekly design reviews, or design feedback arrives too late
verify: Design feedback happens in issue comments and chat threads during the project; no mandatory review meeting gates implementation
verifiable_by: judgment
tags: [design, feedback, meetings]
status: Active
---

## Why

"We don't have formal product or design reviews." Linear pastes screens into issue comments mentioning the people whose feedback is wanted, uses async Slack feedback, and tests internally behind feature flags within days. Reviews as gates slow the loop the method depends on.

## Do

- Paste the design in the issue, mention who should react.
- Test internally with feature flags instead of sign-off meetings.
- Sponsors review every week or two by reading updates.

## Anti-pattern

A weekly design review that delays implementation by a week.

## Fix

Cancel the meeting; keep the comment thread.

## Evidence

- Linear practice (Lenny's Newsletter, Sep 2023). Linear-internal.
