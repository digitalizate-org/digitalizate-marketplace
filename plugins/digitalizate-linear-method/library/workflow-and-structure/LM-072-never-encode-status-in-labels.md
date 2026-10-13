---
id: LM-072
title: Statuses live in workflow states; never encode status in labels
kind: model
category: workflow-and-structure
score: 5
source_tier: evidence
sources:
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
  - "Cotera, Linear vs Jira: We migrated 2,000 issues | https://cotera.co/articles/linear-vs-jira-comparison | 2026-03-08"
use_when: creating labels, auditing a label list, or when someone asks for a "blocked" label
verify: No label name expresses a position in the flow (blocked, waiting, in review, ready, done, on hold, pending)
verifiable_by: query
measured_by: [LM-128]
tags: [labels, states, workflow]
status: Active
---

## Why

A label that means "where is this issue in the flow" duplicates the workflow and drifts out of sync the first time someone forgets to remove it. Blocking is a relation; waiting is a state or a snooze; review is a state.

## Do

- Labels answer "what kind" (Bug, Feature, Chore) and "which area".
- Use blocking relations for blocked, In Review for review, snooze for waiting on input.
- Langfuse's rule: "Do not recreate owner, status, priority, dates, initiatives, or customer links as labels".

## Anti-pattern

"Bloqueado", "Esperando QA", "Awaiting External" as labels.

## Fix

Delete the label; add the relation or state; if a wait is external and long, snooze.

## Evidence

- Cotera turned an "Awaiting External" state into a label during migration, then recognized it as a mistake (founder post, Mar 2026). Interested author.
