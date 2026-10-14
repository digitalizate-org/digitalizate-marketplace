---
id: LM-095
title: When an agent drafts issues, a human accepts the reader layer and the partition
kind: practice
category: agents
score: 4
source_tier: evidence
sources:
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
  - "Linear developers, AIG | https://linear.app/developers/aig | 2026-10"
  - "Linear, How we use Linear Agent at Linear | https://linear.app/now/how-we-use-linear-agent-at-linear | 2026-04-10"
use_when: an agent creates or edits issues (from a session, a document, Slack, email or meeting notes)
verify: Agent-drafted issues enter Triage (or are shown before saving) and a human accepts them; batches of more than one issue from the same source were proposed as a list and confirmed
verifiable_by: judgment
measured_by: [LM-171]
tags: [agents, writing, accountability]
status: Active
---

## Why

Agents now write a large share of issues (Linear's CX team turns emails into scoped issues through its agent; Linear reports agents authored nearly a quarter of new issues in early 2026). An agent writes from the context the session has at that moment: often a diagnosis, so it writes the diagnosis. The documented precedents keep a human between the draft and the record: Langfuse treats agent edits to existing tickets as "proposals first"; Linear's AIG states that "the final responsibility should always remain with a human". This connects with LM-091 (an accountable human and an audit trail).

## Do

- Agent-drafted issues go to Triage, or are shown to a human before saving when triage is off.
- The human checks two things before accepting: the description reads for the declared reader (LM-160), and the partition follows the work (LM-165, LM-166).
- More than one issue from one source: the agent proposes the list (titles, what each absorbs, the split reason) and creates after a human confirms.
- The agent never prescribes the plan in the description; it may draft a plan comment if it is also the implementer (LM-163).

## Anti-pattern

An agent that turns a diagnosis session into ten issues in thirty seconds, each written for itself.

## Fix

Route agent-created issues to Triage; require a proposed list for batches; give the drafting agent the reader rule in its instructions.

## Evidence

- Langfuse rule above. Independent company docs.
- Linear developer docs. Official-docs.
- Linear's internal usage (Apr 2026). Linear-internal.
