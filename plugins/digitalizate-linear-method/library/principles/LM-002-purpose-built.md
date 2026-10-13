---
id: LM-002
title: Purpose-built over flexible
kind: principle
category: principles
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: configuring a workspace, choosing between defaults and customization, or migrating from a flexible tool
verify: The workspace runs on Linear defaults except for configuration changes that each solve a problem that occurred at least twice
verifiable_by: judgment
tags: [principle, configuration, defaults]
status: Active
---

## Why

"Flexible software lets everyone invent their own workflows, which eventually creates chaos as teams scale." A purpose-built tool carries one default way of working, so new people learn one process instead of one per team.

## Do

- Accept the default states, priorities and cycle behavior first.
- Add a state, label group or setting only after the same problem has shown up twice.
- When migrating, bring the work (issues, projects), not the old process (workflows, custom fields).

## Anti-pattern

Reproducing the previous tool's 14 workflows and custom fields inside Linear on day one.

## Fix

Reset to defaults, then reintroduce one customization at a time with a written reason in `linear-decisions.md`.

## Evidence

- Cotera went from 14 Jira workflows to 4 states and concluded "the tool choice mattered less than we thought" (founder post, Mar 2026). Author sells agent tooling.
- Oscar Health migrated projects and history but left custom fields and workflows behind (Linear customer story, Jun 2025). Interested source.
