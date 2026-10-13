---
id: LM-083
title: Ask for the problem behind every request
kind: practice
category: design-and-users
score: 5
source_tier: official-method
sources:
  - "Linear Method, Build with users | https://linear.app/method/build-with-users | 2026-10"
use_when: triaging requests, writing specs, talking to users
verify: Accepted requests record the underlying problem (what the user was trying to do), not only the requested feature
verifiable_by: judgment
tags: [users, requests, discovery]
status: Active
---

## Why

"Too vision-based products might miss user and market needs while too reactive products become Frankenstein creations." The question is "what is the problem they're trying to solve"; the feature a user proposes is one possible answer, and often not the best one.

## Do

- In triage and in the spec, write the problem in the user's terms.
- Filter feedback by audience: listening to users outside the target "will likely set you on the wrong path".
- Decide the solution inside the project, not in the request.

## Anti-pattern

Specs that restate the feature request as the goal.

## Fix

Add the problem line to the spec's Why; move the proposed solution to How as one option.

## Evidence

- Rule from the method page. Official-method.
