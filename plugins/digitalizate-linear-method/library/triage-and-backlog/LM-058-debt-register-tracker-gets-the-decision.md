---
id: LM-058
title: Technical debt lives in a register; the tracker receives the decision to act on it
kind: practice
category: triage-and-backlog
score: 3
source_tier: interpretation
sources:
  - "GDS Way, How to track technical debt | https://gds-way.digital.cabinet-office.gov.uk/standards/technical-debt.html | 2026-08-19"
  - "GOV.UK blog, Classifying and measuring tech debt in GOV.UK | https://insidegovuk.blog.gov.uk/2018/02/19/classifying-and-measuring-tech-debt-in-gov-uk/ | 2018-02-19"
  - "Atlassian, Technical debt | https://www.atlassian.com/agile/software-development/technical-debt | 2026-10"
  - "Martin Fowler, Technical Debt Quadrant | https://martinfowler.com/bliki/TechnicalDebtQuadrant.html | 2009-10-14"
use_when: a team records technical debt found while working, a "technical debt" issue template exists, or the backlog fills with debt nobody will schedule
verify: Debt nobody decided to schedule is not an issue; it lives in a versioned register, and only debt the team decided to address appears in the tracker, as a task that links the register entry; a workspace that keeps debt in Linear records it as an exception to LM-058 in linear-decisions.md
verifiable_by: judgment
tags: [debt, backlog, writing]
status: Active
---

## Why

This is LM-056 (issues only for work likely within six months) applied to debt: debt that nobody has decided to schedule is not a task yet, and filing it as one bloats the backlog. Sources disagree on where debt lives. GDS records it "in the appropriate teams work management tool", rated as a risk on impact and effort, and says being listed "doesn't necessarily mean it will be paid down" and that "the risks do not necessarily map directly to priorities". Atlassian recommends a debt issue type in Jira. A register keeps the evidence (files, lines, reproduction) next to the code; an issue per debt item, read by a business reader, fills the tracker with work that will not be scheduled. GOV.UK ran its debt list "similar to that for managing a risk register" so that it was "familiar to less technical people".

## Do

- Keep a versioned register in the repo with ID, severity, evidence and proposed fix. The register is the default.
- The tracker receives a task (LM-168 template) when the team decides to act, with the register ID in "Reference".
- Review the register on a cadence (GDS: fortnightly) and decide which items enter the tracker.
- A workspace that keeps debt in Linear (as GDS and Atlassian do) records it as an exception to LM-058 in `linear-decisions.md`: debt as issues with a Debt label next to the Type label (Chore or Improvement), recorded in linear-decisions.md, in triage, rated by impact and effort.

## Anti-pattern

A "Technical debt" template that asks for file, line and command, used for every finding, with a backlog that only grows.

## Fix

Move the evidence to the register; keep in the tracker only the debt someone will work on, written as a task for the declared reader.

## Evidence

- GDS Way and GOV.UK blog. External-method (published government engineering standard).
- Atlassian. External-method, vendor.
- Making the register the default is Digitalizate's interpretation for business readers, built on LM-056.
