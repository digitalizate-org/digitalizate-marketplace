---
id: LM-153
title: The issue is a runbook
kind: antipattern
category: antipatterns
score: 4
source_tier: evidence
sources:
  - "Armin Ronacher, Building Pi With Pi | https://lucumr.pocoo.org/2026/5/24/pi-oss/ | 2026-05-24"
  - "Mozilla, Bug writing guidelines | https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html | 2026-10"
  - "Birgitta Böckeler, Understanding Spec-Driven-Development | https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html | 2025-10-15"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-160, LM-161, LM-044, LM-163]
tags: [antipattern, writing, agents]
status: Active
---

## Symptom

For any reader: descriptions copy the diagnosis and the procedure instead of linking them, with a "Cause" section before any statement of who is affected. When the declared reader is business or external, file paths, line numbers, commands, code blocks and loose data tables are symptoms too: the sentence that reader needs is buried in the middle, "Done when" is a command, and status reports drafted from these issues inherit the jargon.

## Cause

The issue is written by whoever diagnosed the problem (a person after an investigation, or an agent with the diagnosis in its context), for themselves or for an implementing agent. A template asks for file, line or command. Agent-facing guidance ("add a Context for the agent block") is applied by a writer who writes every issue.

## Fix

Rewrite the top for the declared reader (LM-160); move the diagnosis to the repo document and link it (LM-161); keep observed facts separate from hypotheses (LM-044); the implementer writes the plan as a comment (LM-163); remove file, line and command fields from templates (LM-168).

## Evidence

Ronacher on issues with diagnoses: "That is worse than no diagnosis" (May 2026, independent). Mozilla: "explain the problem, not your suggested solution" (independent). Böckeler found agent-oriented specs "very verbose and tedious to review" (martinfowler.com, Oct 2025, independent).
