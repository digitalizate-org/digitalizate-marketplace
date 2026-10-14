---
id: LM-154
title: The partition mirrors the source document
kind: antipattern
category: antipatterns
score: 4
source_tier: evidence
sources:
  - "Endor Labs, Jira integration | https://docs.endorlabs.com/integrations/jira/jira-with-endor-labs.md | 2026-10"
  - "Lawrence and Green, The Humanizing Work Guide to Splitting User Stories | https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/ | 2026-10"
  - "Shape Up, Map the Scopes; Show Progress | https://basecamp.com/shapeup/3.3-chapter-12 | 2019"
use_when: the symptom below appears in an audit, a review or a conversation about how the team works
verify: The symptom is absent
verifiable_by: judgment
violates: [LM-165, LM-166, LM-046]
tags: [antipattern, granularity, audits]
status: Active
---

## Symptom

One issue per finding of an audit, per field of a form, per screen or per file. Many siblings created within seconds by the same writer, with the same assignee, waiting on the same third party, verified the same way. Siblings overlap because several findings share one remedy. Some are cancelled minutes later and folded into one issue.

## Cause

The issues were cut along the structure of the document they came from (sections, findings, fields) instead of the work (who, what it waits on, how it is checked). Tools and instructions encourage it: finding-to-ticket integrations default to one ticket per finding; a rule such as "a requirement is a parent issue with sub-issues" produces one child per item.

## Fix

Re-partition by action, gate and verification (LM-166); fold children that share all three into a checklist (LM-165); move the set to a project when it spans more than a cycle.

## Evidence

Endor Labs warns that one ticket per finding "can produce a high volume of Jira tickets" (vendor). Lawrence: splitting step by step "is the wrong way to go" (external-method). Shape Up: "to-do lists actually grow as the team makes progress", so counting items does not show progress (external-method).
