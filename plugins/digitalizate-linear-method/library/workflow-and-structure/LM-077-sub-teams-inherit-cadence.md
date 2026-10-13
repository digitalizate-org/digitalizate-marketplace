---
id: LM-077
title: Prefer sub-teams that inherit the parent cadence over new teams
kind: model
category: workflow-and-structure
score: 3
source_tier: official-docs
sources:
  - "Linear docs, Sub-teams | https://linear.app/docs/sub-teams | 2026-10"
use_when: a group needs its own triage audience or issue prefix but should keep the team's rhythm
verify: Groups that share a cadence with the main team are sub-teams (inheriting cycles and workflow), not independent teams
verifiable_by: query
measured_by: [LM-112]
tags: [teams, sub-teams, cadence]
status: Active
---

## Why

Sub-teams can inherit the cycle schedule, workflow and labels of their parent. That gives a group its own inbox and views without a second cadence to coordinate.

## Do

- When a group needs separation but not a different rhythm, create a sub-team with inheritance on.
- Keep the parent's planning as the single planning.

## Anti-pattern

A second team with the same two-week cycle offset by three days.

## Fix

Convert to a sub-team.

## Evidence

- Inheritance behavior documented on Linear's sub-teams page. Official-docs.
