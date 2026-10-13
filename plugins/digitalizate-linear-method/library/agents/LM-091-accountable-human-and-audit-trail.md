---
id: LM-091
title: Every agent action has an accountable human and an audit trail
kind: practice
category: agents
score: 5
source_tier: evidence
sources:
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
  - "Linear, How we use Linear Agent at Linear | https://linear.app/now/how-we-use-linear-agent-at-linear | 2026-04-10"
use_when: letting agents change state in Linear (assign, move, close, prioritize, archive), including this plugin
verify: Agent-made state changes are attributable to a person, logged with their inverse, and reversible; destructive operations are never performed (archive instead of delete)
verifiable_by: judgment
tags: [agents, accountability, safety]
status: Active
---

## Why

The documented precedents keep state changes with people: Langfuse says agent changes to existing tickets are proposals and "Changing state — assigning, moving, closing, prioritising — stays with a human." Where a team chooses to let agents act autonomously, accountability must come from somewhere else: a named owner of the run, a log with the inverse of every change, batch limits, and reversible operations only.

## Do

- Name the human who owns each agent run.
- Log every mutation with enough data to undo it; prefer archive and cancel-with-comment over delete.
- Cap batch size per run; leave a standard comment on every object an agent touched.
- Keep the goalie's judgment in triage: agents pre-fill, people decide.

## Anti-pattern

Agents that close, prioritize and archive at will with no log.

## Fix

Add the run log and the owner; restrict operations to reversible ones.

## Evidence

- Langfuse rule above. Independent company docs. Linear's own practice: agent proposes, human approves PRs (Apr 2026). Linear-internal.
