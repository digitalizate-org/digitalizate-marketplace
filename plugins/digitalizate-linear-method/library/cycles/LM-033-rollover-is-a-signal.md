---
id: LM-033
title: Unfinished work rolls over automatically; repeated rollover is a signal
kind: practice
category: cycles
score: 4
source_tier: official-docs
sources:
  - "Linear docs, Cycles | https://linear.app/docs/use-cycles | 2026-10"
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
use_when: closing a cycle, or when the same issues appear in three consecutive cycles
verify: Rollover is automatic and the share of issues rolling over stays under a quarter; any issue that rolled more than twice is re-scoped or cancelled
verifiable_by: query
measured_by: [LM-101]
tags: [cycles, rollover, planning]
status: Active
---

## Why

Linear moves unfinished issues to the next cycle on its own; "there is no way to keep unfinished issues in a closed cycle." That removes the end-of-cycle ritual. What remains is the signal: an issue that rolls twice is either too big, not a priority, or blocked.

## Do

- Keep automatic rollover on; never move issues by hand to make the cycle look complete.
- At the cycle review, read the rolled list: split, cancel, or unblock each item that rolled twice.
- Track the rollover share; above 25% the plan is too big.

## Anti-pattern

Manual cleanup on the last day, or ignoring the rolled list for months.

## Fix

Review the rolled list every cycle close; split or cancel.

## Evidence

- Cotera moved from Jira grooming sessions to cycles with rollover and "People groom as they go" (founder post, Mar 2026). Interested author.
