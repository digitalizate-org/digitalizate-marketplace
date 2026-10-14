---
id: LM-165
title: One deliverable is one issue with a checklist; split only for another assignee, another gate or a separate delivery
kind: practice
category: writing
score: 3
source_tier: interpretation
sources:
  - "Linear docs, Parent and sub-issues | https://linear.app/docs/parent-and-sub-issues | 2026-10"
  - "Linear docs, Project milestones | https://linear.app/docs/project-milestones | 2026-10"
  - "GitHub docs, About task lists | https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists | 2026-10"
  - "Shape Up, Map the Scopes; Show Progress | https://basecamp.com/shapeup/3.3-chapter-12 | 2019"
  - "Lawrence and Green, The Humanizing Work Guide to Splitting User Stories | https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/ | 2026-10"
  - "Bill Wake, INVEST in Good Stories, and SMART Tasks | https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/ | 2003-08-17"
  - "Don Reinertsen, Is One-Piece Flow the Lower Limit for Product Developers? | https://www.goodreads.com/author_blog_posts/5042135 | 2012-11-01"
use_when: deciding between a checklist, sub-issues, sibling issues or a project; reviewing a parent with many children; turning a plan or requirement into issues
verify: Each sub-issue or sibling differs from the rest in assignee, gate (a third party, another issue, a date or window) or separately shipped verification; parts that share all three are checklist items; sets that span more than one cycle or have a target date are projects
verifiable_by: judgment
measured_by: [LM-171]
tags: [issues, granularity, sub-issues, checklists]
status: Active
---

## Why

Trackers place the checklist as the starting form. Linear proposes sub-issues when work is "too large to be a single issue but too small to be a project" and "for splitting up work shared across teammates", and converts a checklist into sub-issues with one shortcut; GitHub promotes a checkbox to an issue "If a task requires further tracking or discussion". Shape Up keeps tasks inside a scope and warns that counting tasks hides progress: "to-do lists actually grow as the team makes progress". Splitting by step of the work produces pieces that cannot be verified alone: "the most obvious split—one step at a time from beginning to end—is the wrong way to go" (Lawrence). Each issue also has a fixed cost (triage, status, the weekly update); Reinertsen frames batch size as a trade-off "between holding cost and transaction cost".

## Do

- Default: one deliverable, one issue, its parts as checkboxes.
- Make a part its own issue only for one of three reasons:
  - **Another assignee** answers for it.
  - **Another gate**: it waits on something the rest does not (a third party, another issue, a date or a window).
  - **A separate delivery**: it can be verified and shipped alone, and shipping it first has value (a vertical slice).
- Size is the trigger (two or three days, LM-046); the three reasons say where to cut. When an issue exceeds two or three days, look for a slice that ships alone (business rule, data variation, simple before complex, defer performance); if none exists, cut the scope and keep the cut part as its own issue or out.
- A set that spans more than one cycle or has its own target date is a project; stages with a different definition of done are milestones.
- A third party that has to answer is a gate, not an assignee.

## Anti-pattern

A requirement written as a parent with one sub-issue per field, screen or step, all created in seconds by the same writer, all with the same assignee and the same delivery.

## Fix

Fold the children into the parent as a checklist; keep as issues only the parts that pass one of the three reasons; cancel the rest with a comment pointing to the parent.

## Evidence

- Linear docs (sub-issues, milestones). Official-docs.
- GitHub task lists, Shape Up, Lawrence, Wake, Reinertsen. External-method.
- The closed list of three reasons is Digitalizate's interpretation of those sources (hence the tier). Evidence on the cost of too many issues in teams of one to three people is weak: the only study found (Baysal et al., FSE 2014) covers large open-source projects.
