---
id: LM-051
title: Assign a rotating triage responsibility
kind: practice
category: triage-and-backlog
score: 5
source_tier: linear-internal
sources:
  - "Lenny's Newsletter, How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | 2023-09-26"
  - "Linear changelog, Triage responsibility | https://linear.app/changelog/2023-10-12-triage-responsibility | 2023-10-12"
use_when: nobody owns the inbox, or the same person always does
verify: Each team with triage has a triage responsibility (assign or notify) with a schedule or a weekly manual rotation recorded in linear-decisions.md
verifiable_by: query
measured_by: [LM-134, LM-102]
tags: [triage, rotation, goalie]
status: Active
---

## Why

"'Goalie' is a weekly rotation where an engineer helps the support team with issues, fixes bugs, and triages incoming requests." A rotation spreads knowledge of what users hit, protects the rest of the team's focus, and makes the inbox someone's job every day.

## Do

- Configure Triage responsibility (Business plan) or a manual weekly rotation written in `linear-decisions.md`.
- The goalie fixes small bugs directly and routes the rest.
- The goalie is out of project work that week.

## Anti-pattern

"Everyone triages" (nobody does), or a permanent triage person who becomes a bottleneck.

## Fix

Set the rotation; put it on the calendar.

## Evidence

- Scale AI uses a rotating triage with SLAs and Slack alerts (Linear customer story, May 2024). Interested source.
- Linear's CX team runs a weekly goalie (Linear, CX in Linear, Nov 2025). Linear-internal.
- Cotera found triage "stayed a role" at about 40 issues a week even after the tool change (founder post, Mar 2026). Interested author.
