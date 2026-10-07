# Agentic Patterns / Component generation (1)

## AGP-004 — AI - Component Generation Context
- Score 4 · Agentic Patterns / Component generation
- Tags: ai-patterns, design-system
- Goals: Design a Consistent System at Scale; Handle Complex Multi-Step Workflows
- Use when: Use before asking an AI agent to create or modify a production component.

**Core Practice.**
Before asking an AI agent to create or modify a production component, supply a structured context packet. A prompt such as “make a data table like the rest of our app” leaves the agent to infer tokens, component APIs, states, interaction rules, accessibility, code conventions, and domain constraints. The result may look plausible while introducing drift and hidden regressions.
Treat AI as an implementation collaborator working inside a system—not as an independent art director.

**Context Packet.**
Provide the agent with:
- **Task and acceptance criteria:** the user job, expected outcome, non-goals, and definition of done.
- **Canonical assets:** direct links/identifiers for the source component, nested dependencies, and relevant pattern.
- **Design language:** semantic tokens, modes, density rules, typography, spacing, and iconography.
- **Component contract:** anatomy, public props, allowed variants, states, events, and prohibited changes.
- **Behaviour:** focus movement, keyboard interaction, asynchronous/loading rules, validation, errors, and responsive adaptation.
- **Accessibility:** semantic HTML/roles, labels, live announcements, contrast, and test expectations.
- **Engineering context:** framework, repository conventions, existing examples, tests, lint rules, and package boundaries.
- **Validation path:** visual regression, unit/integration, accessibility, and design-review checks.

**Worked Prompt Brief.**
**Task:** add a compact 'Invoice status' component to an admin table.
**System constraints:**
- Reuse the existing Status component; do not create a new Badge component.
- Allowed statuses: paid, overdue, pending, void.
- Use semantic tokens 'status.success', 'status.warning', 'status.danger', and 'status.neutral'; no hardcoded colour values.
- Status must include text; colour alone cannot convey meaning.
- In a table cell, truncate no label; on narrow screens the table may scroll horizontally rather than hiding status.
- Provide visible focus only if the status becomes interactive; the default status is informational.
- Add tests for every status and a documentation example using realistic invoice dates.
**Expected output:** a small extension of existing component data/configuration, tests, docs example, and a short migration note—not a new independently styled UI primitive.

**Review Workflow.**
1. Ask the agent for a plan and a list of existing assets it intends to reuse.
2. Validate the plan against the source design system before implementation.
3. Ask for the smallest patch that meets the acceptance criteria.
4. Run automated quality checks and compare visual states to the canonical examples.
5. Review the final result as a contribution: correctness, accessibility, token use, API coherence, and documentation.

**Quality Checks.**
- The agent references real tokens and components rather than approximating them.
- The output covers all stated states, not only the default visual.
- The component API does not duplicate existing capabilities.
- Accessibility behaviour is specified, implemented, and tested.
- Human reviewers can trace each decision to a source asset or stated product requirement.
- The final artifact includes test and documentation updates.

Sources: [The Ultimate AI Component Generation Framework](https://learn.thedesignsystem.guide/p/the-ultimate-ai-component-generation)
Notion: https://app.notion.com/p/AI-Component-Generation-Context-181a9aed534482afa1368185daeac2b5
