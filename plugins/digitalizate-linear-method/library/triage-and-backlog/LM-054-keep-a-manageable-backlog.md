---
id: LM-054
title: Keep a manageable backlog; important things resurface
kind: practice
category: triage-and-backlog
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
use_when: the backlog grows past what fits in a few cycles, or before migrating from another tool
verify: The team backlog fits in three to four cycles of throughput and contains no issue untouched for six months
verifiable_by: query
measured_by: [LM-105, LM-118]
tags: [backlog, pruning, focus]
status: Active
---

## Why

"You don't need to save every feature request or piece of feedback indefinitely. Important ones will resurface, low priority ones will never get fixed." A short backlog makes planning fast and keeps the list a plan rather than an archive. Linear keeps a long list of candidate projects and short issue backlogs.

## Do

- Create issues only for work likely within six months; keep later ideas as candidate projects or Customer Requests.
- Prune on a cadence (quarterly at least); cancel what nobody defends.
- When migrating, import only the last 90 days of active work.

## Anti-pattern

Thousands of issues, most untouched for a year, imported wholesale.

## Fix

Archive or cancel everything untouched for six months with a standard comment; keep what someone claims within a week.

## Evidence

- Langfuse: issues only for work "likely in the next 6 months", quarterly review (handbook, 2026). Independent company docs.
- Cotera migrated 2,147 open issues and still had to rebuild the habit of pruning (founder post, Mar 2026). Interested author.
- Opendoor started from zero without migrating history (Linear customer story, Dec 2025). Interested source.
