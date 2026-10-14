---
id: LM-094
title: Standing technical context lives in the repository, not in each issue
kind: practice
category: agents
score: 4
source_tier: external-method
sources:
  - "OpenAI, Codex best practices | https://learn.chatgpt.com/guides/best-practices | 2026-10"
  - "AGENTS.md | https://agents.md | 2026-10"
  - "Factory docs, AGENTS.md | https://docs.factory.com/cli/configuration/agents-md | 2026-10"
  - "Linear docs, AI Agents in Linear | https://linear.app/docs/agents-in-linear | 2026-10"
  - "Anthropic, Best practices for Claude Code | https://code.claude.com/docs/en/best-practices | 2026-10"
  - "Cognition, Instructing Devin effectively | https://docs.devin.ai | 2026-10"
use_when: adopting coding agents, writing agent-facing templates, or when issues repeat the same conventions, commands or "do not touch" lists
verify: Repository conventions, build and test commands and standing restrictions live in AGENTS.md, CLAUDE.md, path rules or the tracker's agent guidance; open issues do not repeat them
verifiable_by: judgment
tags: [agents, context, repository]
status: Active
---

## Why

No agent vendor reviewed defines a "section for the agent" inside the issue. They split by artifact: standing rules in a repo file or tool setting, the task in the issue, follow-ups in comments. Codex lists as a common mistake "Overloading the prompt with durable rules instead of moving them into AGENTS.md or a skill"; Factory keeps out of AGENTS.md the "Temporary task notes that belong in an issue, PR, or spec", so the boundary is explicit both ways. Linear has workspace and team "Agent guidance" that agents "automatically receive"; Devin has Skills for "context that apply broadly across sessions".

## Do

- Put conventions, commands, review process and "never touch" lists in the repo's agent file or in the tracker's agent guidance, once.
- In the issue: only what is specific to this task (outcome, scope, constraints that are specific to it).
- When an agent makes the same mistake twice, fix the repo file, not the next issue.

## Anti-pattern

A "Context for the agent" block in every bug and chore template (service, function, test, files not to touch) that grows until it is the whole description.

## Fix

Move what repeats into the repo file or agent guidance; keep in the issue only what differs for this task.

## Evidence

- Codex, Factory, AGENTS.md, Claude Code and Devin docs above. External-method.
- Linear agent guidance docs. Official-docs.
