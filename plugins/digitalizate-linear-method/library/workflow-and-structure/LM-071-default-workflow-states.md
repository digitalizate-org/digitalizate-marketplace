---
id: LM-071
title: Use the default workflow states; add at most In Review and Won't Fix
kind: model
category: workflow-and-structure
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Issue status / Configuring workflows | https://linear.app/docs/configuring-workflows | 2026-10"
use_when: configuring a new team, or when a team has more than eight states
verify: Team states are the defaults (Triage, Backlog, Todo, In Progress, Done, Canceled, Duplicate) plus at most In Review (started) and Won't Fix (canceled)
verifiable_by: query
measured_by: [LM-130]
tags: [workflow, states, defaults]
status: Active
---

## Why

Defaults are Backlog > Todo > In Progress > Done > Canceled, with Triage optional and Duplicate reserved. Each state must sit in a fixed category, and categories keep their order. Linear's own product team adds In Review and Ready to Merge (started), Icebox (backlog), Could not reproduce and Won't Fix (canceled). More states than that usually encode handoffs.

## Do

- Start with defaults plus In Review when code review is a real wait.
- Add Won't Fix when the zero-bugs rule is in place.
- Remove any state that duplicates another or that nobody moves issues into.

## Anti-pattern

Fourteen states copied from Jira, "Esperando QA", "Listo para demo".

## Fix

Collapse to defaults; handle waits with blocking relations.

## Evidence

- Linear's product team workflow and the category rules are documented on the workflows page. Official-docs.
- Cotera: 14 workflows to 4 (founder post, Mar 2026). Interested author.
