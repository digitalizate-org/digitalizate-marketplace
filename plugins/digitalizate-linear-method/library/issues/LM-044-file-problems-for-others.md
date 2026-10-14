---
id: LM-044
title: Whoever does not implement describes the problem; the implementer rewrites it as a task and owns the plan
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Linear docs, Assign and delegate issues | https://linear.app/docs/assigning-issues | 2026-10"
  - "Mozilla, Bug writing guidelines | https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html | 2026-10"
  - "Armin Ronacher, Building Pi With Pi | https://lucumr.pocoo.org/2026/5/24/pi-oss/ | 2026-05-24"
use_when: support, sales, a founder, a PM, the client or a drafting agent files work for an engineer, a designer or another agent
verify: Issues created by non-implementers are phrased as problems, outcomes or questions, with observed facts separated from hypotheses, and the implementer rewrites the title into a task when taking them
verifiable_by: judgment
tags: [issues, triage, writing]
status: Active
---

## Why

"Let the assignee come up with the solution and then rewrite the issue as a task." Prescribing the solution from outside skips the person who knows the system, and it is how user stories sneak back in through the side door. With agents drafting a large share of issues, the writer and the implementer are often different even in a team of one.

## Do

- Non-implementers (support, a PM, the client, a drafting agent) write the symptom, the outcome or the question, with evidence and the requester's words.
- They separate observed facts from hypotheses and mark hypotheses as such ("hypothesis, not verified"), because a plausible but wrong diagnosis is worse than none (Ronacher; Mozilla: "explain the problem, not your suggested solution").
- The implementer rewrites the title as a task when taking the issue, keeps the original report in the description, and puts the plan in the PR or a comment (LM-163).

## Anti-pattern

Support tickets that arrive as implementation instructions.

## Fix

Add "problem, not solution" to the bug template, with a place for hypotheses marked as such; rewrite at triage.

## Evidence

- Linear's CX team files bugs with templates and the customer's literal quote; engineering decides the fix (Linear, How our Customer Experience team works in Linear, Nov 2025). Linear-internal.
- Ronacher, maintaining an open-source project with agents, calls a wrong diagnosis in an issue "worse than no diagnosis" (May 2026). Independent practitioner report. Mozilla asks to "Clearly separate facts (observations) from speculations". Independent practice.
