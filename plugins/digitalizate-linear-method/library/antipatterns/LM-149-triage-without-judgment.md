---
id: LM-149
title: Triage automated without judgment
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-053, LM-091, LM-074]
tags: [antipattern]
status: Active
---

## Symptom

Everything entering triage is accepted; Urgent set by reporters or agents; the backlog grows fast after agents are enabled.

## Cause

Agents or integrations pre-fill fields and the goalie stops deciding.

## Fix

The goalie applies the four outcomes (accept, decline with comment, duplicate, snooze); Urgent is a human decision; agent-created issues go through triage like any other.

## Evidence

Langfuse: agent changes are proposals; state changes stay with a human (handbook, 2026). Independent company docs.
