---
id: LM-070
title: One team by default; add teams only for a different cadence or workflow
kind: model
category: workflow-and-structure
score: 5
source_tier: linear-internal
sources:
  - "Lenny's Newsletter, How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | 2023-09-26"
  - "Linear docs, Teams | https://linear.app/docs/teams | 2026-10"
use_when: creating a workspace, or when someone proposes a team per function or per client
verify: The number of teams does not exceed the number of distinct cadences or workflows; no team exists only to mirror the org chart
verifiable_by: query
measured_by: [LM-112]
tags: [teams, structure, cadence]
status: Active
---

## Why

Each team carries its own workflow, cycles, triage and labels, and cycles cannot be viewed across teams. Linear ran "a single product team" at about 50 people and only split out mobile and infrastructure. A team is a unit of cadence, not a department.

## Do

- One team until a group needs a different cycle length, a different workflow, or a separate triage audience.
- Use the Area label for product areas; use sub-teams when a group must share the parent's cadence.
- Write the reason for every new team in `linear-decisions.md`.

## Anti-pattern

Frontend, Backend, QA and Design as four teams for twelve people.

## Fix

Merge into product teams; keep discipline as a label.

## Evidence

- Linear's single product team at ~50 people (Lenny's Newsletter, Sep 2023). Linear-internal.
- Langfuse keeps engineering as one team and separate teams for marketing, sales and ops (handbook, 2026). Independent company docs.
