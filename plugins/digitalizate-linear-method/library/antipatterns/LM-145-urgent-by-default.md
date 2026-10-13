---
id: LM-145
title: Urgent by default
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-074, LM-053]
tags: [antipattern]
status: Active
---

## Symptom

A quarter or more of open issues are Urgent; nothing can interrupt the cycle because everything already does.

## Cause

Reporters set priority to get attention; nobody owns the definition.

## Fix

Reset priorities in triage; the goalie alone sets Urgent; write the four definitions in linear-decisions.md.

## Evidence

Linear's bug deadlines distinguish high priority (48 h) from the rest (7 days) (zero-bugs post, Sep 2025). Linear-internal.
