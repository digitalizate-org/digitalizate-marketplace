---
id: LM-055
title: Enable auto-close and auto-archive
kind: practice
category: triage-and-backlog
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Teams | https://linear.app/docs/teams | 2026-10"
use_when: configuring a team, or when the backlog keeps stale items alive
verify: Team settings have an auto-close period for inactive issues and an auto-archive period for closed ones
verifiable_by: query
measured_by: [LM-123]
tags: [backlog, settings, automation]
status: Active
---

## Why

Pruning by hand is busy work. Linear can auto-close issues inactive in the backlog after a period and auto-archive completed and canceled ones, so the short backlog maintains itself.

## Do

- Set auto-close (for example 3 or 6 months of inactivity) and auto-archive (for example 1 month after close).
- Announce the rule once; the automation does the rest.

## Anti-pattern

Auto-close off, with a quarterly cleanup nobody schedules.

## Fix

Turn both on in team settings.

## Evidence

- Settings documented in Linear's team settings docs. Official-docs.
