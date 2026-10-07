# Agentic Patterns / Pattern generation (1)

## AGP-005 — AI - Pattern Assembly & State Modeling
- Score 4 · Agentic Patterns / Pattern generation
- Tags: ai-patterns, workflow, forms
- Goals: Handle Complex Multi-Step Workflows; Design Effective Feedback & Error States
- Use when: Use when assembling components into an end-to-end interface pattern.

**Do.**
1. Inventory existing components and reject requests that duplicate them.
2. Write the state matrix before generating the screen or code.
3. Provide a happy-path example and at least one failure/recovery example.
4. Ask the agent to map each visible element to an existing component and token.
5. Validate with keyboard, screen reader, responsive, localization, and real-data scenarios.

**Core Practice.**
Define a pattern as a reusable arrangement of existing components that accomplishes a recurring user job. Give an AI agent the user outcome, allowed ingredients, state model, interaction sequence, and domain constraints. This lets it assemble a coherent flow without inventing unrelated components or omitting the conditions that make the flow safe.
A pattern is intentionally more than a layout. It captures decisions such as error recovery, permissions, focus order, data loading, and what happens after success.

**Pattern Brief Template.**
1. **Job:** what the user is trying to accomplish.
2. **Scope and non-goals:** what the pattern does and refuses to do.
3. **Allowed components:** named system components and variants the pattern may use.
4. **Information and hierarchy:** required content, order, emphasis, and progressive disclosure.
5. **State matrix:** empty, loading, populated, validation, permission denied, error, success, and interrupted states as relevant.
6. **Interaction flow:** entry point, primary/secondary actions, focus behaviour, confirmations, retries, and success handoff.
7. **Constraints:** responsive, localization, platform, privacy, compliance, performance, and analytics rules.
8. **Acceptance tests:** observable rules that make the pattern shippable.

**Worked Example Bulk Archive Pattern.**
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

**Quality Checks.**
- The flow describes behaviour and recovery, not only screen layout.
- Every visible state has a user-facing explanation and an implementation owner.
- Existing components are composed rather than cosmetically recreated.
- The pattern’s constraints reflect the real domain, especially permissions and destructive actions.
- Generated tests cover happy path, validation/error, loading, and recovery.
- Documentation explains reuse boundaries so teams do not force the pattern into unrelated work.

Sources: [How to Build Patterns from Design System Components with AI](https://learn.thedesignsystem.guide/p/how-to-build-patterns-from-your-design)
Notion: https://app.notion.com/p/AI-Pattern-Assembly-State-Modeling-788a9aed534482b6bb7401335843dd29
