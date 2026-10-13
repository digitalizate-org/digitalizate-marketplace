---
id: LM-022
title: Every project has exactly one lead
kind: practice
category: projects
score: 5
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Lenny's Newsletter, How Linear builds product | https://www.lennysnewsletter.com/p/how-linear-builds-product | 2023-09-26"
use_when: creating a project, auditing active projects, or when a project stalls with no one answering for it
verify: Every project in a planned or started status has a lead set; the lead is a person on the project team, not a manager by default
verifiable_by: query
measured_by: [LM-103]
tags: [projects, ownership, lead]
status: Active
---

## Why

"Every project should have a named owner who's responsible for writing the project brief and delivery. The same rule applies to issues." One accountable person per project is the single most repeated trait in documented adoptions. At Linear "the project lead is never a PM"; the lead can be an engineer or a designer and their job is to get the project started and communicate how it's going.

## Do

- Set `lead` at creation; the lead writes the spec and the weekly update.
- Rotate leads across projects so ownership is a role, not a title.
- A sponsor (founder or head of product) is accountable for the outcome; that is separate from the lead.

## Anti-pattern

Projects with no lead, or every project led by the same manager.

## Fix

Assign a lead from the project team; if nobody can lead it, the project is not ready to start.

## Evidence

- Opendoor's operating doc requires a DRI per project and a weekly update from each lead (Linear customer story, Dec 2025). Interested source.
- Langfuse: "Every active project and issue has one lead" (Langfuse handbook, 2026). Independent company docs.
- Scale AI ties every issue to a project, a team and an engineer (Linear customer story, May 2024). Interested source.
