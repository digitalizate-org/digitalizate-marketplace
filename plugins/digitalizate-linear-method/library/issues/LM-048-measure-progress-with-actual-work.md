---
id: LM-048
title: Measure progress with actual work, not status reports
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Principles & Practices | https://linear.app/method/introduction | 2026-10"
  - "Linear changelog, Linear Diffs | https://linear.app/changelog/2026-05-27-linear-diffs | 2026-05-27"
use_when: connecting the repository, reviewing how "done" is judged, or when status and reality diverge
verify: GitHub or GitLab is connected so PRs move issue states, and "done" means merged (or shipped), not "reported done"
verifiable_by: query
measured_by: [LM-109]
tags: [issues, git, progress]
status: Active
---

## Why

"The clearest way to see whether something is complete or not is to show the diff... Avoid massive pull requests." Linking PRs to issues makes the tracker a record of reality; large PRs hide progress until the end.

## Do

- Connect the repository; use branch names from issues; let PR events move states.
- Keep PRs small and tied to one issue.
- Decide what Done means (merged, deployed, documented) and write it in `linear-decisions.md`.

## Anti-pattern

"Done" set by hand while the PR is still open, or one PR per month per issue.

## Fix

Enable the integration; define Done; split PRs.

## Evidence

- Langfuse uses a "merged" state driven by the PR integration and distinguishes it from "done", which includes docs and changelog (Langfuse handbook, 2026). Independent company docs.
- Linear Diffs (May 2026) brings code review next to the issue. Official-docs.
