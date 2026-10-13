---
id: LM-041
title: Issue titles are short and say what to do
kind: practice
category: issues
score: 4
source_tier: official-method
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
use_when: creating or reviewing issues
verify: Issue titles are 80 characters or fewer and read as an action ("Add pagination to /invoices") or a problem for bugs ("CSV export drops rows with emojis")
verifiable_by: query
measured_by: [LM-124]
tags: [issues, titles, writing]
status: Active
---

## Why

"Write short and simple titles" that someone can read at a glance in a list. A title that needs the description to be understood slows every planning pass and every triage.

## Do

- Verb + object for tasks; symptom + where for bugs.
- Stay under 80 characters; move detail to the description.
- Avoid encoding type, priority or status in the title (that is what labels, priority and state are for).

## Anti-pattern

Titles like "[URGENT][Frontend] As a user I want to be able to..." or a title that is a paragraph.

## Fix

Rewrite the title; move prefixes into labels and priority.

## Evidence

- Rule stated on the method page. Official-method. The 80-character limit is the author's interpretation used by the guard.
