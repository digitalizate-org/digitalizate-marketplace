---
id: LM-001
title: Build for the creators
kind: principle
category: principles
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "The Glimpse, Building Product at Linear with Nan Yu | https://www.theglimpse.co/p/nan-yu | 2024"
use_when: deciding whether a field, state, report or ritual earns its place in the workspace
verify: No field, state or label exists only to feed a report that the people doing the work never read
verifiable_by: judgment
tags: [principle, tooling, reporting]
status: Active
---

## Why

Linear states that keeping individuals productive matters more than generating perfect reports. When a tracker serves reporting first, data quality collapses: Nan Yu explains that required fields get filled with placeholder values and "your data quality just goes down".

## Do

- Let data come from real activity (PRs, state changes, updates), not from fields people fill for someone else's report.
- Before adding anything to the workspace, name the person who does the work and ask whether it helps them.
- Remove every mandatory field or ritual whose only consumer is a dashboard.

## Anti-pattern

Required fields, mandatory estimates and status labels added "for visibility" that nobody doing the work uses.

## Fix

Delete the field, derive the number from activity, or move the need to a project update written by the lead.

## Evidence

- Linear rejected custom fields, required fields and multiple assignees "hundreds of times" because "we value clarity over almost everything else" (Nan Yu, The Glimpse). Linear-internal.
- Oscar Health dropped the custom fields and workflows of one of the most complex Jira instances and "people haven't missed all those custom fields" (Linear customer story, Jun 2025). Interested source.
