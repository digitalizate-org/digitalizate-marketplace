---
id: LM-144
title: Overloaded cycles
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-032, LM-033, LM-011]
tags: [antipattern]
status: Active
---

## Symptom

Completion under 60% every cycle; the rest rolls forward as a habit; people stop believing the plan.

## Cause

Cycles are planned from wishes or from 130% of what was completed last time.

## Fix

Plan from the completed count of the last three cycles; leave 20-30% free; cut load until completion stabilizes.

## Evidence

Linear's capacity indicator uses the velocity of the previous three cycles (Linear docs, Cycles). Official-docs.
