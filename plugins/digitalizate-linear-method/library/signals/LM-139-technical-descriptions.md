---
id: LM-139
title: Many open issue descriptions carry a technical trail
kind: signal
category: signals
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Mozilla, Bug writing guidelines | https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html | 2026-10"
use_when: auditing a workspace or a team with a snapshot; this signal is evaluated automatically by evaluate.ts
verify: Many open issue descriptions carry a technical trail is false for the audited scope
verifiable_by: query
check: "issues.technical_description_share > 0.3"
check_scope: team
severity: low
measures: [LM-160, LM-161]
tags: [signal, audit, writing]
status: Active
---

## What it measures

Share of active issues with a non-empty description whose description carries a technical trail: 10 or more inline code spans, or 3 or more file paths, or 2 or more shell commands, or a fenced code block in an issue without a Bug label. Fenced blocks are allowed in bugs because a log or stack trace is evidence.

## When it fires

`issues.technical_description_share > 0.3` evaluated against the team metrics of the snapshot. Evaluated only when `linear-decisions.md` declares `issue.primary_reader` business or external; otherwise the metric is null and the signal is skipped. Also skipped when no active issue has a description.

## Fix

Rewrite the samples for the declared reader (LM-160): move the diagnosis to the repo document and the plan to the PR or a comment (LM-161, LM-163); remove file, line and command fields from templates (LM-168).

## Evidence

See the practices this signal measures (LM-160, LM-161). The density definition and the 0.3 threshold are interpretation: they were tested on one real workspace (7 of 11 open issues flagged) and on the healthy fixture (no flags), and should be tuned per workspace.
