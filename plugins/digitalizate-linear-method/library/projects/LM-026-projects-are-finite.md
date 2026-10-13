---
id: LM-026
title: Projects are finite deliverables, not containers
kind: model
category: projects
score: 5
source_tier: official-docs
sources:
  - "Linear docs, Concepts | https://linear.app/docs/conceptual-model | 2026-10"
  - "Linear, Intro to Linear | https://linear.app/learn/intro-to-linear | 2026-10"
use_when: deciding whether something should be a project, an initiative, a label or a team
verify: No project in a started status has existed for more than six weeks without milestones, and no project is named after an area or a team
verifiable_by: query
measured_by: [LM-104]
tags: [projects, model, scope]
status: Active
---

## Why

In Linear's model, projects group issues around "a specific deliverable" and "typically map onto a feature or launch". Containers that never end (an area, a team, "Maintenance") belong to labels, teams, or a project with an indefinite status, not to the default project lifecycle.

## Do

- Project = something that ends. Area = label. Ongoing stream = initiative or an indefinite-status project (Maintenance).
- When a project is used as a container, split real deliverables out of it and give the container the right object type.

## Anti-pattern

"Frontend", "Client X", "Tech debt" as projects that stay started forever.

## Fix

Convert to a label, a team, or an indefinite Maintenance status; create stage projects for the actual work.

## Evidence

- Linear's own project statuses include a Maintenance status for work that does not end (Linear changelog, Custom statuses for projects, Mar 2024). Official-docs.
- Retool's standing "Quality" project is an explicit exception used as a pull list, not a deliverable (Linear customer story, 2019). Interested source.
