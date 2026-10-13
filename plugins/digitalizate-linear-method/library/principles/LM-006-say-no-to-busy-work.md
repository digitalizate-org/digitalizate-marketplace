---
id: LM-006
title: Say no to busy work
kind: principle
category: principles
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear, Issue tracking is dead (Karri Saarinen) | https://linear.app/next | 2026-03-24"
use_when: reviewing rituals, status meetings, manual state changes, or any task that is about the work rather than the work
verify: State changes, cycle creation and rollover happen automatically; no recurring meeting exists only to read status aloud
verifiable_by: query
measured_by: [LM-109]
tags: [principle, automation, meetings]
status: Active
---

## Why

"A tool should work for you, not the other way around. Remove or automate 'work around work'." Saarinen's 2026 letter pushes this further: when "the process became the work", teams mistake complexity for sophistication.

## Do

- Connect GitHub/GitLab so PRs move issue states.
- Enable automatic cycle creation, rollover and auto-add of started and completed issues.
- Replace status meetings with written project updates.
- Let agents draft issues from conversations and prepare update drafts; keep the decision human.

## Anti-pattern

Manual rollover every two weeks, a daily standup that only reads statuses, people moving cards by hand after merging.

## Fix

Turn on the automations, cancel the status meeting, and route feedback through triage.

## Evidence

- Linear's cycle settings auto-create cycles, roll unfinished issues forward and can auto-add started or completed issues (Linear docs, Cycles). Official-docs.
- Opendoor noticed part of the perceived "more pace" came from work becoming visible without extra reporting (Linear customer story, Dec 2025). Interested source.
