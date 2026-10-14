---
id: LM-161
title: Keep the technical trail where it is maintained; the issue links it
kind: practice
category: writing
score: 4
source_tier: external-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "GitLab handbook, Product development flow | https://handbook.gitlab.com/handbook/product-development/how-we-work/product-development-flow/ | 2026-10"
  - "Malte Ubl, Design Docs at Google | https://www.industrialempathy.com/posts/design-docs-at-google/ | 2020-07-06"
  - "Cursor docs, Rules | https://cursor.com/docs/context/rules | 2026-10"
  - "Factory docs, AGENTS.md | https://docs.factory.com/cli/configuration/agents-md | 2026-10"
use_when: an issue comes from an audit, an investigation or a diagnosis already written somewhere else, or a description carries tables, commands or long procedures
verify: Open issues link the document, PR or comment that holds the diagnosis and the procedure, and do not copy it or its data tables; when the declared reader is business or external, descriptions also carry no file paths, commands or code blocks (except a log or stack trace pasted in a bug)
verifiable_by: judgment
measured_by: [LM-139, LM-170]
tags: [issues, writing, traceability]
status: Active
---

## Why

A diagnosis copied into an issue has two copies that drift: the repo document gets corrected, the issue does not. Copying also turns the issue into a runbook that the business reader cannot read (LM-153). Google's design docs keep code and schemas out ("should rarely contain code", avoid "copy-pasting complete schema definitions"); Cursor's rules say "Reference files instead of copying their contents"; Factory says "Do not paste long run books". The Linear Method already allows "links to deeper discussions" and asks to "Write only as much as you need".

## Do

| Piece | Where |
|---|---|
| Diagnosis from an audit or investigation | A versioned document in the client's repo; the issue links it |
| Root-cause hypothesis of a bug | The implementer's comment, marked as a hypothesis (LM-044) |
| Implementation plan and verification commands | The "Technical plan" comment or the PR description (LM-163) |
| Repo conventions, build and test | `AGENTS.md`, `CLAUDE.md`, rules or agent guidance (LM-094) |
| Data (IP tables, account lists) | The repo document; the issue says how many and what is decided |
| Closing evidence | The linked PR, a screenshot, the deploy link (LM-048) |

- Credentials never go in the tracker. Infrastructure identifiers (IPs, fingerprints, key names) stay in the linked document unless the declared reader is technical.
- When the declared reader is business or external, the description carries no file paths, commands or code blocks (except a log or stack trace pasted in a bug); they live in the linked document or the plan. For a technical reader they may appear, but never copy a document or a table.

## Anti-pattern

An issue with a "Reference" section that links the audit document and, above it, repeats half of that document.

## Fix

Keep the outcome, the consequence and "Done when" in the issue; delete what the linked document already says; move what is not in the document into it.

## Evidence

- GitLab keeps the description as "the single source of truth" and fills technical sections "during the problem validation or breakdown phase" (GitLab handbook and issue templates). Independent company docs.
- Cursor and Factory docs above. External-method.
- The placement table is Digitalizate's interpretation.
