---
id: LM-090
title: A delegated issue stays assigned to a human
kind: practice
category: agents
score: 5
source_tier: linear-internal
sources:
  - "Linear, How we use Linear Agent at Linear | https://linear.app/now/how-we-use-linear-agent-at-linear | 2026-04-10"
  - "Linear docs, Assign and delegate issues | https://linear.app/docs/assigning-issues | 2026-10"
use_when: delegating any issue to Linear Agent, Copilot, Claude Code or another agent
verify: Issues with a delegate also have a human assignee; no issue is owned only by an agent
verifiable_by: query
measured_by: [LM-113]
tags: [agents, ownership, delegation]
status: Active
---

## Why

When Linear delegates an issue to an agent, the issue "remains assigned" to the person. Delegation changes who executes, not who answers. An issue owned only by an agent has no one to ask when it stalls.

## Do

- Set assignee (human) and delegate (agent) together.
- The assignee reviews the agent's PR; a human approves.
- Scope delegated issues tightly (bugs and chores with full descriptions first).

## Anti-pattern

A queue of agent-only issues nobody reviews.

## Fix

Assign a human to each; cap delegated issues per person.

## Evidence

- Linear's internal usage: an agent reviews each PR and a human approves (Linear, Apr 2026). Linear-internal.
- GitHub Copilot cloud agent for Linear went GA in July 2026 (GitHub changelog). Official vendor source.
