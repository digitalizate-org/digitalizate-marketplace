---
id: LM-093
title: Write the context agents need: specs, templates, files to touch and not to touch
kind: practice
category: agents
score: 4
source_tier: official-docs
sources:
  - "Linear, Issue tracking is dead (Karri Saarinen) | https://linear.app/next | 2026-03-24"
  - "Linear changelog, Coding sessions in Linear | https://linear.app/changelog/2026-06-11-coding-sessions | 2026-06-11"
use_when: adopting agents for triage, bugs or chores
verify: Issues delegated to agents carry a complete description, the user's quote for bugs, the expected result, and a "do not touch" list when relevant; specs exist for anything beyond a bug
verifiable_by: judgment
tags: [agents, context, templates]
status: Active
---

## Why

"Agents are not mind readers. They become useful through context." When execution gets cheap, the bottleneck moves to judgment and to the written context: the one-page spec becomes the agent's input, and the issue description becomes the instruction. Linear reports using coding sessions internally to resolve roughly 30% of incoming bugs, mostly on first attempt (self-reported).

## Do

- Add a "Context for the agent" block to bug and chore templates: service, function, test to add, files not to touch.
- Delegate Bugs and Chores first; Features keep a human and a spec.
- Reject agent PRs that touch files out of scope; feed the lesson back into the template.

## Anti-pattern

One-line issues delegated to an agent, then surprise at the result.

## Fix

Fill the template; narrow the scope; delegate again.

## Evidence

- Saarinen's letter and the coding sessions changelog above. Linear-internal, self-reported figures.
