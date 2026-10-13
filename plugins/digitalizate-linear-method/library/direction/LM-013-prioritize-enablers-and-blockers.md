---
id: LM-013
title: Prioritize enablers and blockers
kind: practice
category: direction
score: 4
source_tier: official-method
sources:
  - "Linear Method, Prioritize enablers and blockers | https://linear.app/method/prioritize-enablers-and-blockers | 2026-10"
use_when: ranking candidate projects or triaging a request
verify: Each candidate project is labeled as an enabler (new value) or a blocker removal (friction that stops use), and the ranking reflects that
verifiable_by: judgment
tags: [prioritization, projects, triage]
status: Active
---

## Why

Enablers add functionality that makes the product more valuable; blockers are "gaps or friction that prevents a user/customer to use your product". Asking which of the two a request is, and whether it matters this week or month, cuts most prioritization debates short.

## Do

- For each candidate, write one line: enabler or blocker, and for whom.
- Ask "what is the problem they're trying to solve" before accepting the proposed feature.
- Prefer the smallest version that removes the blocker; Linear launched its beta with Google login only.

## Anti-pattern

Ranking by who asked loudest, or by estimated effort alone.

## Fix

Add the enabler/blocker line to the project spec's "Why" section.

## Evidence

- Cursor keeps a dedicated view of release blockers separate from everything incoming (Linear customer story, Feb 2026). Interested source.
- Linear's continuous planning ranks candidate projects by number of customer requests and revenue impact (Nan Yu, Continuous planning in Linear, Oct 2025). Linear-internal.
