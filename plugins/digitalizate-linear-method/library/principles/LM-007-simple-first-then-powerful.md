---
id: LM-007
title: Simple first, then powerful
kind: principle
category: principles
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: deciding which Linear features to turn on at a given team size or stage
verify: Estimates, sub-teams, cooldown, Insights and agents are off until a documented need appears
verifiable_by: judgment
tags: [principle, configuration, scaling]
status: Active
---

## Why

"A tool should be simple to get started with and grow more powerful as you scale." Features switched on before the need exists add decisions, settings and vocabulary that a small team pays for every day.

## Do

- Start with one team, default states, cycles, triage and projects.
- Add estimates, sub-teams, cooldown, Insights or agents only when a concrete problem asks for them; record the reason.
- Review quarterly which settings can be turned off again.

## Anti-pattern

Day-one setups with estimates, four teams, custom project statuses and SLAs for a six-person team.

## Fix

Disable what has no documented reason, keep the configuration in `linear-decisions.md`.

## Evidence

- Linear started with one-week cycles, a monthly list of one to three projects and a single product meeting; one-pagers arrived "as the team grows" (Karri Saarinen, Building at the early stage, Jan 2021). Linear-internal.
- Linear had "a single product team" at about 50 people (Lenny's Newsletter, Sep 2023). Linear-internal.
