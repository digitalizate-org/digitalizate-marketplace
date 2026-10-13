---
name: linear-build
description: Pre-flight and templates for creating or editing anything in Linear the Linear Method way: issues (bugs and tasks), projects and their one-page spec, initiatives, project or initiative updates, cycles, triage decisions, labels and documents. Use it whenever the user asks to create, write, file, draft, log, open, plan, update, rewrite, split, scope or "put in Linear" an issue, bug, task, ticket, project, spec, initiative, roadmap item, milestone, update or label, even if they do not mention the method. Reads and records workspace conventions in linear-decisions.md. Invoke as /linear-build <what you want to create or change>.
---

# linear-build

Goal: everything written into Linear follows the method on the first try, so the guard never has to block and the audit never has to find it. The hooks in Claude Code enforce the hard rules; this skill is where the judgment lives, and in claude.ai it is the only guard.

## Procedure

### 1. Classify the request

Pick the object: issue (bug or task), project (with spec), initiative, update, cycle, triage decision, label, document. Then open the matching reference in `references/`: `issue.md`, `project.md`, `spec.md`, `initiative.md`, `update.md`, `cycle.md`, `triage.md`. Each one lists the rules to apply (IDs), the template, the MCP call shape and the mistakes to avoid. Read it before writing.

### 2. Read the conventions

Read `linear-decisions.md` (project root, `.linear-method/` or `docs/`). It fixes team keys, cycle length, label groups, priority definitions, Definition of Done, the triage rotation and the agent policy. If it does not exist and you are about to write to Linear, create it from `templates/linear-decisions.md` with what you can observe from the workspace (`list_teams`, `list_issue_labels`, `list_issue_statuses`) and ask only for what you cannot observe.

### 3. Pre-flight

Before the write, check the object against the reference's checklist. Typical blockers: user-story phrasing, a label that is a status or a priority, Urgent without an incident, a project without lead, an update without health, a delegated issue without a human assignee. Fix the content, do not argue with the guard.

### 4. Write

Use the Linear MCP write tools (`save_issue`, `save_project`, `save_initiative`, `save_status_update`, `save_document`, `save_comment`, `save_issue_label`). Create related objects in the method's order: initiative (if new) → project with spec → milestones → issues. Prefer templates from Linear (`list_templates`, `get_template`) when the workspace has them.

### 5. Confirm and record

Report what was created with identifiers and links. If the write established a new convention (a new label group, a new cycle length, a new rotation, an exception to a rule), append it to `linear-decisions.md` under the right heading. Never record the content of the issue or project there; only conventions.

## Autonomy and safety

This plugin runs autonomously by design. What keeps it safe:

- The guard denies hard-rule violations and surfaces warnings after each write.
- Every MCP write lands in `.linear-method/mcp-writes.log` with the run owner (`LINEAR_METHOD_RUN_OWNER`), the tool and the key fields (LM-091).
- Prefer reversible operations: archive or cancel with a comment, never delete. Bulk changes go through `linear-fix`, which logs the inverse of each change and can undo a run.
- Health on updates is written only when the user or the lead states it; never infer it (LM-092).

## Things that go wrong

- Writing the why into the issue instead of the spec, then "fixing" the guard by rephrasing the story.
- Creating a project without a lead "to fill in later".
- Inventing conventions (a new label, a new state) without recording them.
- Setting Urgent because the user sounds stressed.
- Creating issues for ideas that will not start within six months (LM-056): make a candidate project instead.
