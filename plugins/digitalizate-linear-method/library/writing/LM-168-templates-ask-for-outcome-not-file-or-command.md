---
id: LM-168
title: Templates ask for outcome, impact and acceptance; technical fields are optional, and absent for business readers
kind: practice
category: writing
score: 3
source_tier: evidence
sources:
  - "GitLab, issue templates (Bug.md, Feature proposal - detailed.md) | https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/issue_templates | 2026-10"
  - "GitHub docs, Syntax for issue forms | https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms | 2026-10"
  - "Joel Spolsky, Painless Bug Tracking | https://www.joelonsoftware.com/2000/11/08/painless-bug-tracking/ | 2000-11-08"
  - "The Glimpse, Building Product at Linear with Nan Yu | https://www.theglimpse.co/p/nan-yu | 2023-04-11"
  - "Linear docs, Issue templates | https://linear.app/docs/issue-templates | 2026-10"
  - "Mozilla, Bug writing guidelines | https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html | 2026-10"
use_when: creating or reviewing issue templates for a team, or when issues written from a template come out technical
verify: No template requires a repository, file, line, command or PR field; with a business or external reader no template asks for them at all; task templates ask for outcome, why, done-when and out of scope; bug templates ask for the report, steps, expected versus observed, impact and workaround
verifiable_by: judgment
tags: [templates, writing, issues]
status: Active
---

## Why

A template field gets filled. A field that asks for "evidence: file, line or command" or for "verification (command, screenshot or test)" produces technical issues even when the reader is not technical. None of the vendor templates reviewed (GitHub, GitLab, Mozilla's guidelines) has a required file or line field; GitLab's only request for "the line of code that might be responsible" sits in an optional "Possible fixes" section, and its feature template leaves technical sections for "the problem validation or breakdown phase". Spolsky: "Avoid the temptation to add new fields". Nan Yu on required fields that do not apply: people put in "some kinda placeholder, meaningless value … And then your data quality just goes down".

## Do

| Type | Blocks |
|---|---|
| Task | What changes · Why it matters · Done when · Out of scope · Depends on · Reference |
| Bug | What is reported (quote and source) · How it shows (steps, expected, observed) · Impact · Workaround · Done when · Out of scope |
| Client request | The request in their words and source · Why they ask · Done when · In / Out |
| Support | What is reported and source · How it shows · Impact · Urgency · Workaround |
| Exploration | Question · Deliverable · Time box (LM-049) |

- Repo and verification belong to the implementer's plan (LM-163). The PR is linked by the git integration or by whoever opens it.
- A log or stack trace pasted in a bug is evidence, not a technical field.
- With a technical reader, repository, file or command fields may exist but stay optional.
- Keep templates optional to fill (Linear's standard templates), except the minimum a form template must require.

## Anti-pattern

A task template with "Repo or deliverable / Verification (command, screenshot or test) / PR", or a debt template with "Evidence: file, line or command".

## Fix

Replace those fields with the blocks above; move repo, command and PR to the plan comment and the integration.

## Evidence

- GitHub and GitLab templates; Spolsky. Independent practice.
- Nan Yu interview. Linear-internal.
- The block sets are Digitalizate's interpretation.
