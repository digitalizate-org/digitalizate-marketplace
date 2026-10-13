---
id: "AGP-005"
title: "AI - Pattern Assembly & State Modeling"
category: "Agentic Patterns"
subcategory: "Pattern generation"
score: 4
context: "Use when assembling components into an end-to-end interface pattern."
goals:
  - "Handle Complex Multi-Step Workflows"
  - "Design Effective Feedback & Error States"
tags:
  - "ai-patterns"
  - "workflow"
  - "forms"
notion: "https://app.notion.com/p/AI-Pattern-Assembly-State-Modeling-788a9aed534482b6bb7401335843dd29"
---

## Core practice
Define a pattern as a reusable arrangement of existing components that accomplishes a recurring user job. Give an AI agent the user outcome, allowed ingredients, state model, interaction sequence, and domain constraints. This lets it assemble a coherent flow without inventing unrelated components or omitting the conditions that make the flow safe.
A pattern is intentionally more than a layout. It captures decisions such as error recovery, permissions, focus order, data loading, and what happens after success.

## Pattern brief template
1. **Job:** what the user is trying to accomplish.
1. **Scope and non-goals:** what the pattern does and refuses to do.
1. **Allowed components:** named system components and variants the pattern may use.
1. **Information and hierarchy:** required content, order, emphasis, and progressive disclosure.
1. **State matrix:** empty, loading, populated, validation, permission denied, error, success, and interrupted states as relevant.
1. **Interaction flow:** entry point, primary/secondary actions, focus behaviour, confirmations, retries, and success handoff.
1. **Constraints:** responsive, localization, platform, privacy, compliance, performance, and analytics rules.
1. **Acceptance tests:** observable rules that make the pattern shippable.

## Worked example: bulk archive pattern
**Job:** let an admin archive multiple inactive projects safely.
**Allowed components:** selectable Data Table, Checkbox, Button, Dialog, Inline Alert, Toast, and Status.
**State model:**
- **Default:** no rows selected; Archive disabled.
- **Selection:** 1–50 rows selected; destructive Archive action appears with count.
- **Confirmation:** dialog names the count and explains reversibility/retention policy.
- **Loading:** action is disabled; dialog prevents duplicate submission.
- **Partial failure:** table shows affected rows, inline explanation, and retry only for failures.
- **Success:** rows update to Archived status; toast summarizes the result; focus returns to the table selection toolbar.
**Constraints:**
- Keyboard users can select rows and reach the toolbar without a mouse.
- Do not rely on red alone; destructive intent uses clear copy and iconography.
- The pattern must preserve the filter/query so the operator can review the result.
- On mobile, bulk actions move into a sticky action bar rather than disappearing.
This brief is enough for an AI agent to compose existing assets and generate test cases without guessing the product’s risk model.

## How to implement
1. Inventory existing components and reject requests that duplicate them.
1. Write the state matrix before generating the screen or code.
1. Provide a happy-path example and at least one failure/recovery example.
1. Ask the agent to map each visible element to an existing component and token.
1. Validate with keyboard, screen reader, responsive, localization, and real-data scenarios.

## Quality checks
- The flow describes behaviour and recovery, not only screen layout.
- Every visible state has a user-facing explanation and an implementation owner.
- Existing components are composed rather than cosmetically recreated.
- The pattern’s constraints reflect the real domain, especially permissions and destructive actions.
- Generated tests cover happy path, validation/error, loading, and recovery.
- Documentation explains reuse boundaries so teams do not force the pattern into unrelated work.

## Sources
- [How to Build Patterns from Design System Components with AI](https://learn.thedesignsystem.guide/p/how-to-build-patterns-from-your-design)
