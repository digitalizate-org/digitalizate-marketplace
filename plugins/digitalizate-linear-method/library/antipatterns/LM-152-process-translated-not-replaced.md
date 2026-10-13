---
id: LM-152
title: Previous process translated instead of replaced
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-002, LM-007, LM-071]
tags: [antipattern]
status: Active
---

## Symptom

Daily, refinement, demo and planning poker continue; states and fields mirror the old tool; the new tool adds cost without changing anything.

## Cause

Adoption was a tool migration, not a method change; nothing was removed.

## Fix

Remove the ceremonies the method replaces, reset states to defaults, import only recent work, and write the new rules before configuring.

## Evidence

Opendoor wrote its operating rules before choosing the tool; Oscar Health dropped custom fields and workflows at migration (Linear customer stories, 2025). Interested sources.
