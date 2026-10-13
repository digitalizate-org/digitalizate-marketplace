---
id: LM-050
title: Enable triage as the single inbox for unplanned work
kind: practice
category: triage-and-backlog
score: 5
source_tier: official-docs
sources:
  - "Linear docs, Triage | https://linear.app/docs/triage | 2026-10"
  - "Lenny's Newsletter, How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | 2023-09-26"
use_when: setting up a team, or when requests arrive through Slack, email and DMs and get lost
verify: Triage is enabled on every team that receives work from outside the team or from integrations, and integrations create issues in Triage rather than in Backlog
verifiable_by: query
measured_by: [LM-136, LM-102]
tags: [triage, inbox, integrations]
status: Active
---

## Why

Triage is "an additional status category that acts as an Inbox": issues from integrations (Slack, Intercom, Sentry, email, Asks) and from people outside the team land there, and from there they are accepted, declined, marked duplicate or snoozed. One inbox with a deadline beats five channels with none.

## Do

- Enable Triage on the team; route Slack, support and error integrations to it.
- Keep Backlog for accepted work only.
- Give triage a rotating owner (LM-051) and a daily pass (LM-052).

## Anti-pattern

Requests scattered across chat and email, or integrations dumping straight into Backlog.

## Fix

Enable triage, re-point the integrations, run the first pass.

## Evidence

- At Linear, triage receives issues from support, sales and the CEO and a "goalie" routes or fixes them (Lenny's Newsletter, Sep 2023). Linear-internal.
- Cursor: "The way we decide whether something actually gets fixed is if it's an issue in Linear. If it's not there, it gets lost" (Linear customer story, Feb 2026). Interested source.
