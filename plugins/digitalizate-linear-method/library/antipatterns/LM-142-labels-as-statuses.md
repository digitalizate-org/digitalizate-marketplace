---
id: LM-142
title: Labels used as statuses
kind: antipattern
category: antipatterns
score: 5
source_tier: evidence
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-072, LM-073]
tags: [antipattern]
status: Active
---

## Symptom

Labels like Blocked, Waiting QA, Ready for demo, Awaiting External; labels that are never removed when the situation changes.

## Cause

The workflow of a previous tool was copied as labels, or blocking relations and snooze are unknown.

## Fix

Delete the labels; use blocking relations, the In Review state and snooze; keep labels for type and area.

## Evidence

Cotera turned an "Awaiting External" state into a label during its Jira migration and later called it a mistake (founder post, Mar 2026). Interested author.
