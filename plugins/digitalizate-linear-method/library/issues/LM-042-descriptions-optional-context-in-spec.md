---
id: LM-042
title: Descriptions are optional; context lives in the project spec
kind: practice
category: issues
score: 3
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
use_when: designing issue templates, or when every issue repeats the same background paragraph
verify: Issue templates do not require a description; issues link to their project where the context lives
verifiable_by: judgment
tags: [issues, descriptions, templates]
status: Active
---

## Why

"Descriptions should be optional–not required." Mandatory descriptions produce boilerplate, and boilerplate hides the one line that matters. Context belongs in the spec, once, where the whole project team reads it.

## Do

- Keep descriptions free-form; add a link to the spec, a design file or a log when useful.
- For agents, standing context lives in the repository or in Linear's agent guidance (LM-094); the issue carries only what is specific to the task (LM-093).

## Anti-pattern

Required description fields filled with "n/a" or copied background.

## Fix

Remove the requirement; strengthen the spec.

## Evidence

- Langfuse keeps issue conventions minimal and puts long-form context in projects and RFC-style documents (Langfuse handbook, 2026). Independent company docs.
