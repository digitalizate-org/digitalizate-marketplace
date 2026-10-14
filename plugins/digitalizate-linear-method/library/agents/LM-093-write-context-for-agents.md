---
id: LM-093
title: Give agents context through the repository and the plan, not through a block in every issue
kind: practice
category: agents
score: 4
source_tier: official-docs
sources:
  - "Linear, Issue tracking is dead (Karri Saarinen) | https://linear.app/next | 2026-03-24"
  - "Linear changelog, Coding sessions in Linear | https://linear.app/changelog/2026-06-11-coding-sessions | 2026-06-11"
  - "OpenAI, Codex best practices | https://learn.chatgpt.com/guides/best-practices | 2026-10"
  - "Factory docs, AGENTS.md | https://docs.factory.com/cli/configuration/agents-md | 2026-10"
  - "AGENTS.md | https://agents.md | 2026-10"
  - "Linear docs, AI Agents in Linear | https://linear.app/docs/agents-in-linear | 2026-10"
use_when: adopting agents for triage, bugs or chores
verify: Standing context lives in the repository or in agent guidance; issues delegated to agents carry the outcome, scope and constraints of the task (and the user's quote for bugs); specs exist for anything beyond a bug
verifiable_by: judgment
tags: [agents, context, templates]
status: Active
---

## Why

"Agents are not mind readers. They become useful through context." No agent vendor reviewed puts a separate "for the agent" section inside the issue: standing rules live in a repo file or the tracker's agent guidance; the task lives in the issue; follow-ups in comments. Linear's coding sessions start "from the issue you delegate" and work better when it "defines the desired outcome, scope, and constraints". When the same writer drafts every issue, a per-issue agent block grows into the whole description and the issue becomes a runbook (LM-153). Linear reports using coding sessions internally to resolve roughly 30% of incoming bugs, mostly on first attempt (self-reported).

## Do

- Standing context (conventions, commands, files never to touch) goes in AGENTS.md, CLAUDE.md, path rules or Linear agent guidance (LM-094).
- In the issue: outcome, scope and constraints specific to this task (LM-160). When delegating, the issue may name the files and patterns of that task (Linear's own coding-sessions example does); what repeats across issues goes to the repo file or agent guidance (LM-094).
- Ask the agent for a plan before it codes, in the PR description or a comment (LM-163).
- Delegate Bugs and Chores first; Features keep a human and a spec.
- Reject agent PRs that touch files out of scope; feed the lesson back into the repo file.

## Anti-pattern

One-line issues delegated to an agent, then surprise at the result; or the opposite, a "Context for the agent" block in every template that turns each issue into a runbook.

## Fix

Move what repeats to the repo file; narrow the scope; ask for the plan; delegate again.

## Evidence

- Saarinen's letter and the coding sessions changelog above. Linear-internal, self-reported figures.
- Codex: "Overloading the prompt with durable rules instead of moving them into AGENTS.md" is a common mistake; Factory keeps task notes out of AGENTS.md. External-method.
