---
id: LM-047
title: Every issue leaving triage has one assignee
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
use_when: accepting an issue from triage, planning a cycle, or when work is "owned by the team"
verify: Issues in unstarted or started states have an assignee; the only unassigned issues sit in triage or backlog
verifiable_by: query
measured_by: [LM-125]
tags: [issues, ownership, assignee]
status: Active
---

## Why

"Even if there are more people involved, the responsibility lands on one person." Linear supports a single assignee by design. Unassigned work in a cycle is work nobody will start.

## Do

- Assign when accepting into Todo or into a cycle.
- Use sub-issues when several people contribute.
- When delegating to an agent, keep the human as assignee.

## Anti-pattern

A cycle with a third of its issues unassigned "for whoever is free".

## Fix

Assign at planning; unassigned issues go back to backlog.

## Evidence

- Langfuse: outside triage "there are no unassigned issues" (Langfuse handbook, 2026). Independent company docs.
- Scale AI ties every issue to an engineer (Linear customer story, May 2024). Interested source.
