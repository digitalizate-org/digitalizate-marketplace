---
id: LM-092
title: Project health is set by the lead, not generated
kind: practice
category: agents
score: 4
source_tier: official-docs
sources:
  - "Linear changelog, Agent assisted project updates | https://linear.app/changelog | 2026-06-18"
  - "Linear docs, Initiative and project updates | https://linear.app/docs/initiative-and-project-updates | 2026-10"
use_when: using agents to draft project updates
verify: Update drafts may be generated, but the health value (On track, At risk, Off track) and the publication are done by the lead
verifiable_by: judgment
tags: [agents, updates, health]
status: Active
---

## Why

Agent-assisted updates (June 2026) draft from activity; health is a judgment about risk that activity data cannot make. A generated "On track" on a blocked project is worse than no update because it reads as a signal.

## Do

- Let the agent draft done/next from issues and PRs.
- The lead sets health and adds risks and decisions needed, then publishes.

## Anti-pattern

Auto-published updates with health inferred from progress percentage.

## Fix

Draft only; lead publishes.

## Evidence

- Feature behavior per Linear's changelog. Official-docs.
