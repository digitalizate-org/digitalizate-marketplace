---
id: LM-045
title: Cite the user verbatim in bugs and requests, and link the conversation
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Linear, How our Customer Experience team works in Linear | https://linear.app/now/cx-in-linear | 2025-11-06"
use_when: filing bugs or feature requests that come from users or customers
verify: Bug and request issues contain a literal quote from the user and a link to the source conversation or a Customer Request
verifiable_by: judgment
tags: [issues, bugs, customers]
status: Active
---

## Why

The user's own words carry what a summary loses. Linking the conversation lets the assignee ask follow-ups, and Customer Requests let the team close the loop when the fix ships.

## Do

- Quote the user ("Pongo mi cuenta y me dice formato no válido") and link the ticket, thread or Customer Request.
- If the literal words or the source are missing, say so in the description ("quote and source missing"); never paraphrase in quotation marks.
- Add steps, expected versus observed, and environment for bugs.
- When the PR merges, let the Customer Request notify the reporter.

## Anti-pattern

"Users are complaining about export" with no quote and no link.

## Fix

Use the bug template; attach the request.

## Evidence

- Linear's CX team cites the customer verbatim and closes the loop automatically when the PR merges (Linear, CX in Linear, Nov 2025). Linear-internal.
- Retool turns customer feedback into engineering work through attached feedback (Linear customer story, 2019). Interested source.
