---
id: LM-146
title: One person writes all the issues
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-043, LM-044, LM-095]
tags: [antipattern]
status: Active
---

## Symptom

A PO or lead creates most issues; engineers receive solutions instead of problems; the writer is a bottleneck. Or an agent drafts every issue from whatever context its session has (often a diagnosis), and nobody rewrites them for the reader.

## Cause

Scrum habits (the PO owns the backlog) carried into the method.

## Fix

Give the team the spec and milestones; each person writes their own issues; outsiders file problems, assignees rewrite them as tasks. With an agent writer: route its drafts to Triage, require a proposed list for batches, and have the implementer write the plan (LM-163, LM-095).

## Evidence

"Everyone maintains their own issues and projects" (Langfuse handbook, 2026). Independent company docs.
