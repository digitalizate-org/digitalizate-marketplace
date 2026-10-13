---
id: LM-031
title: Cycles are not tied to releases
kind: model
category: cycles
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Cycles | https://linear.app/docs/use-cycles | 2026-10"
  - "Linear changelog, Releases | https://linear.app/changelog/2026-04-30-releases | 2026-04-30"
use_when: someone proposes a sprint goal, a demo day, or a release at the end of each cycle
verify: Releases happen when a project or milestone is ready, not at cycle boundaries; no cycle has a "goal" that must be met
verifiable_by: judgment
tags: [cycles, releases, model]
status: Active
---

## Why

"Unlike sprints, cycles are not tied to releases." Shipping continuously per project is what makes rollover harmless; if the cycle were a release, unfinished work would be a failure instead of a planning signal. Since April 2026 Linear has a separate Releases object for deployments and release notes.

## Do

- Ship when a milestone is ready, inside or across cycles.
- Use Releases (or the changelog) to track what went out, independently of the cycle.
- Drop sprint goals and mandatory demos.

## Anti-pattern

"Sprint review" demos that delay a ready feature until the cycle ends.

## Fix

Separate the release calendar from the cycle calendar.

## Evidence

- Linear's docs state the distinction explicitly (Cycles page). Official-docs.
