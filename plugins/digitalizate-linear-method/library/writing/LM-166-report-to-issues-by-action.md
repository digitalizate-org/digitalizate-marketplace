---
id: LM-166
title: Turn a report into issues by action, gate and verification, and propose the partition first
kind: practice
category: writing
score: 3
source_tier: interpretation
sources:
  - "Shape Up, Map the Scopes | https://basecamp.com/shapeup/3.3-chapter-12 | 2019"
  - "Endor Labs, Jira integration | https://docs.endorlabs.com/integrations/jira/jira-with-endor-labs.md | 2026-10"
  - "Eric Bang, Pentest report remediation guide (Decryption Digest) | https://www.decryptiondigest.com/blog/pentest-report-remediation-guide | 2026-05-20"
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
use_when: an audit, a pentest, an investigation, meeting notes or a plan has to become issues, especially when an agent creates them
verify: Issues created from one source group its findings by action, assignee, gate and verification; no issue maps one-to-one to a finding, field, file or section; the partition was proposed and accepted before the issues were created
verifiable_by: judgment
measured_by: [LM-171]
tags: [issues, granularity, audits, agents]
status: Active
---

## Why

A report is organised for reading (one finding per section); work is organised by who does what, what waits on what and how it is checked. Tools that push findings into trackers create "One ticket … per finding" by default, and one of them warns that this "can produce a high volume of Jira tickets" and offers grouping instead. A remediation guide for pentest reports says "Do not create Jira tickets for every finding the moment you get the report. Triage first." Shape Up groups work by how parts depend on each other: "Scopes arise from interdependencies."

## Do

1. List the **actions** in the report, not the findings. A finding with no action stays in the report.
2. For each action: who does it, who else has to answer, what it waits on, how it is verified.
3. Group actions that share assignee, gate and verification (LM-165).
4. Order the groups by gates. If the report already has an ordered sequence with gates, use it.
5. More than one cycle or a target date: a project, with the report's business part as its spec.
6. Propose the partition (titles, what each absorbs, the split reason of each) and create the issues only after a human accepts it (LM-095).

## Anti-pattern

A parent whose description says "each finding is a sub-issue", with siblings that overlap because several findings share one remedy.

## Fix

Re-partition with steps 1 to 4; turn the parent into the project spec when the set spans more than a cycle.

## Evidence

- Endor Labs (vendor) and the remediation guide (practitioner). Evidence.
- Shape Up. External-method.
- The procedure is Digitalizate's interpretation; it was tested on one real case only.
