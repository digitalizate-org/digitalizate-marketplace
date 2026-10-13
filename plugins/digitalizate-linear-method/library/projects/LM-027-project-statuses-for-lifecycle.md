---
id: LM-027
title: Use project statuses for the project lifecycle
kind: model
category: projects
score: 3
source_tier: official-docs
sources:
  - "Linear changelog, Custom statuses for projects | https://linear.app/changelog/2024-03-19-custom-statuses-for-projects | 2024-03-19"
use_when: candidate projects, proposals and running projects get mixed, or someone wants a label like "approved"
verify: Candidate, planned, running and ongoing projects are distinguished by project status, not by labels or naming conventions
verifiable_by: judgment
tags: [projects, statuses, lifecycle]
status: Active
---

## Why

Since March 2024 project statuses are customizable inside fixed categories (Backlog, Planned, Started, Paused, Completed, Canceled). Linear uses Idea, Proposal, Discovery (backlog), Ready, Accepted (planned), In Progress and Maintenance (started). This gives candidate projects a home without labels.

## Do

- Start with defaults; add a Proposal or Idea status when continuous planning produces candidates.
- Add an indefinite Maintenance status only when ongoing work needs a project.
- Never encode lifecycle in labels or in the project name.

## Anti-pattern

Project labels "approved", "wip", "parked", or names prefixed "[DRAFT]".

## Fix

Move the information into the project status.

## Evidence

- Linear's status set is documented in the changelog entry above. Official-docs.
