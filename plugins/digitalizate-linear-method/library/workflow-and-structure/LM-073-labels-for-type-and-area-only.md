---
id: LM-073
title: Labels for type and area only
kind: model
category: workflow-and-structure
score: 4
source_tier: evidence
sources:
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
  - "Linear docs, Labels | https://linear.app/docs/labels | 2026-10"
use_when: designing or pruning labels
verify: Labels form at most two groups (Type with Bug, Feature, Improvement, Chore; Area with 4-6 values); no priority, status, owner or date labels exist
verifiable_by: query
measured_by: [LM-129, LM-131]
tags: [labels, taxonomy]
status: Active
---

## Why

Two questions are worth a label: what kind of work is it, and which part of the product. Everything else has a native field. Label groups keep each issue to one value per group.

## Do

- Type group (workspace scope): Bug, Feature, Improvement, Chore. Make Type expected on every issue.
- Area group (team scope) with 4-6 values, only if the product needs it.
- Retire labels not applied in six months.

## Anti-pattern

Forty flat labels, "urgent", "p1", "frontend-blocked", "Q3".

## Fix

Rebuild as two groups; retire the rest.

## Evidence

- Langfuse requires a type label (bug, improvement, feature) plus area (handbook, 2026). Independent company docs.
