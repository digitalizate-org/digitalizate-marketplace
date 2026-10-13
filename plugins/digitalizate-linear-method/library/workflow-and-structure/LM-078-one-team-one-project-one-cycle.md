---
id: LM-078
title: An issue belongs to one team, at most one project and at most one cycle
kind: model
category: workflow-and-structure
score: 3
source_tier: official-docs
sources:
  - "Linear docs, Concepts | https://linear.app/docs/conceptual-model | 2026-10"
use_when: explaining the model, or when people try to share an issue across projects
verify: Cross-project needs are handled with sub-issues or relations, not by cloning issues
verifiable_by: judgment
tags: [model, issues, projects]
status: Active
---

## Why

Linear's model is strict so that counts and views mean something: issues record pieces of work, teams own the workflows, cycles plan short term, projects group issues around a deliverable, initiatives group projects. A project can span teams and cycles; an issue cannot.

## Do

- Split cross-team work into sub-issues per team under one parent.
- Use relations (blocks, related) between issues of different projects.

## Anti-pattern

Duplicated issues in two projects "so both see it".

## Fix

Keep one, link the other.

## Evidence

- Model described in Linear's concepts documentation. Official-docs.
