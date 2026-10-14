---
id: LM-163
title: The implementer adds the technical plan when taking the issue
kind: practice
category: writing
score: 3
source_tier: interpretation
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "Linear docs, Assign and delegate issues | https://linear.app/docs/assigning-issues | 2026-10"
  - "OpenAI, Codex best practices | https://learn.chatgpt.com/guides/best-practices | 2026-10"
  - "Shape Up, Hand Over Responsibility | https://basecamp.com/shapeup/3.1-chapter-10 | 2019"
  - "Langfuse handbook, Using Linear | https://langfuse.com/handbook/tools-and-processes/using-linear | 2026"
use_when: an issue is delegated to an agent, will take more than a day, or was written by someone who will not implement it
verify: Delegated issues and issues of more than a day have a plan (approach, what it touches, verification, risks) in the PR description or, when there is no PR, in a comment titled "Technical plan"
verifiable_by: judgment
tags: [issues, writing, agents, ownership]
status: Active
---

## Why

The Linear Method keeps the solution with the person who knows the system: "Let the assignee come up with the solution and then rewrite the issue as a task." With agents, two things change. The writer is often not the implementer (agents now author a large share of new issues (LM-095)), and the implementer may be an agent that works better with a plan ("ask Codex to plan before it starts coding"; Linear lets prompt templates ask for "a detailed plan before writing any code"). Rewriting the description would erase the record the business reader relies on; a plan in the PR or a comment keeps both. Requiring a plan on every task, including tasks of an hour, is busy work, and the method says "Say no to busy work".

## Do

- The implementer (human or agent) writes the plan first in the PR description: approach, files or systems it touches, the verification it will run, risks, and a link to the diagnosis if one exists.
- When there is no PR, the plan goes in a comment titled "Technical plan".
- If the issue does not hold (scope wrong, outcome unclear), the implementer says so in a comment and asks; it does not rewrite the scope.
- Do not ask for a plan on tasks of an hour: that is busy work.

## Anti-pattern

The writer prescribes the plan in the description, and the implementer follows it without checking (or rewrites the whole description and the client's record disappears).

## Fix

Move the prescription to a plan comment; ask the implementer to confirm or replace it before starting.

## Evidence

- Linear Method quote above. Official-method: what the method asks is "rewrite the issue as a task". The location and content of the plan are Digitalizate's interpretation.
- Codex and Linear delegation docs. External-method and official-docs.
- Shape Up: "The team is going to define their own tasks and their own approach to the work". External-method.
- The PR description first and the comment as fallback are Digitalizate's interpretation; Langfuse uses comments for "durable, on-topic discussion and decisions".
