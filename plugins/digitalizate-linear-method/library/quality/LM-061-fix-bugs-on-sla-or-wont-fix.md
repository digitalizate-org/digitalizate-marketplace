---
id: LM-061
title: Fix bugs on a deadline or declare won't fix; no bug backlog
kind: practice
category: quality
score: 4
source_tier: linear-internal
sources:
  - "Linear, Why we committed to a zero-bugs policy (Artman & Roman) | https://linear.app/now/why-we-committed-to-a-zero-bugs-policy | 2025-09-24"
use_when: bugs accumulate in the backlog, or the team debates which bugs deserve attention
verify: Accepted bugs have a resolution deadline (for example 48 hours for high priority, 7 days otherwise) and no bug sits in backlog; the alternative outcome is an explicit won't fix
verifiable_by: query
measured_by: [LM-106]
tags: [quality, bugs, sla]
status: Active
---

## Why

Linear's rule: whoever receives a bug fixes it or marks it "won't fix"; sending it to the backlog is not an option. They started with "about 175 open bugs... three weeks to fix them all" and now fix on 48-hour and 7-day deadlines, with a weekly dashboard; "Last year we fixed more than 2,000."

## Do

- Two deadlines: high priority within 48 hours, the rest within 7 days (adjust in `linear-decisions.md`).
- Decline with "won't fix" and a reason when the bug is not worth it.
- Review the deadline dashboard weekly.

## Anti-pattern

A "bugs" backlog of 300 items ranked but never scheduled.

## Fix

One bug-fixing period to clear the debt, then the deadline rule.

## Evidence

- The policy post above. Linear-internal, interested source. Scale AI reports a 52% faster bug resolution after adopting triage with SLAs, with ambiguous scope (Linear customer story, May 2024).
