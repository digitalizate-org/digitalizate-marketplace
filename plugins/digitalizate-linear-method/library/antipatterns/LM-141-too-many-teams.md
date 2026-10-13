---
id: LM-141
title: Too many teams
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-070, LM-077]
tags: [antipattern]
status: Active
---

## Symptom

Every issue needs a dependency across teams; planning happens four times; cycles cannot be seen together.

## Cause

Teams were created to mirror functions (frontend, backend, QA, design) or clients rather than cadences.

## Fix

Merge into product teams sharing one cadence; use Area labels and sub-teams with inheritance.

## Evidence

Linear ran a single product team at about 50 people (Lenny's Newsletter, Sep 2023). Linear-internal.
