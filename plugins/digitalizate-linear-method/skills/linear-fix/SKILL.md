---
name: linear-fix
description: Apply corrections to a Linear workspace from audit findings, in bulk and with undo: archive stale backlog, retire labels that encode status or priority, turn on cycle and triage settings, fix priorities, attach projects to initiatives, assign leads, split long projects, write missing updates. Use it whenever the user asks to fix, clean, prune, apply, correct, repair, "do the recommendations", undo or roll back changes in Linear, or after linear-audit when they want the findings resolved. Invoke as /linear-fix [findings file | LM-xxx list | "undo <run>"].
---

# linear-fix

Goal: resolve findings with reversible operations, each logged with its inverse, under a named run owner (LM-091). Nothing is deleted, ever: archive, cancel with a comment, retire, update.

## Two engines

- Mechanical fixes go through `scripts/fix.ts`: it builds a plan from `findings.json`, applies it with a run log and can undo the run. It covers LM-118 (archive stale backlog with a standard comment), LM-128/LM-129 (retire status-like and priority-like labels), LM-121, LM-122, LM-123, LM-136 (team settings) and LM-135 (estimates off, only when explicitly included).
- Judgment fixes go through the Linear MCP, one object at a time, following `linear-build`: assign leads (LM-103), attach projects to initiatives (LM-108), reset Urgent (LM-107), rewrite story-format issues (LM-111), split long projects (LM-104), write missing updates with the lead (LM-114), assign unassigned planned issues (LM-125), give initiatives an owner (LM-119).

## Procedure

### 1. Inputs

`.linear-method/findings.json` from `linear-audit` (and `snapshot.json`, `raw.json` next to it). If they are older than a day, re-run the audit first; fixing against stale data is how the wrong issue gets archived.

Run owner: the human accountable for this run. Take it from the user, `linear-decisions.md` (Agents section) or `LINEAR_METHOD_RUN_OWNER`. No owner, no run.

### 2. Plan

```bash
cd "<project dir>" && npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/fix.ts" plan --include LM-118,LM-128,LM-129,LM-121,LM-122,LM-123
```

Read the plan it prints. Then list the judgment fixes you will do by MCP, with the identifiers involved. Show both lists to the user as the plan of record. This is informational; the plugin is configured for autonomous execution, so continue unless the user stops you.

### 3. Apply

```bash
npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/fix.ts" apply --plan .linear-method/plan.json --owner "<name>" [--limit 200]
```

Batches stop at `--limit` operations per run (default 200); run again for the rest. Each archived issue gets the standard comment first, so the reason is visible in Linear.

Then the MCP fixes, each following its reference in `linear-build`:

- Lead missing: `save_project { id, lead }` with the person who is doing the work; if nobody is, set the project to a candidate status instead.
- Urgent reset: for each Urgent issue that is not an incident, `save_issue { id, priority: 2 }` and a one-line comment with the rule (LM-074).
- Story-format issues: rewrite title as a task; move the why to the project spec (`save_document` or `save_project.patch`).
- Long projects: create stage projects of one to three weeks, move issues (`save_issue { id, project }`), close the container or set it to Maintenance.
- Missing updates: draft from activity, ask the lead for health, post with `save_status_update`.
- Unassigned planned issues: assign if the owner is obvious from the project; otherwise move to Backlog.

Every MCP write is recorded by the PostToolUse hook in `.linear-method/mcp-writes.log`.

### 4. Verify and report

Re-run `linear-audit`. Report: findings resolved (IDs), operations applied (count, run log path), what is left and why. Append to `linear-decisions.md` any exception the user accepted.

### 5. Undo

```bash
npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/fix.ts" undo --run .linear-method/runs/<file>.json
```

Restores archived issues, label retirements and settings from the run log. Comments are left in place (they document what happened). MCP fixes are undone by hand from `mcp-writes.log`, in reverse order.

## Things that go wrong

- Archiving from a stale snapshot.
- "Fixing" Urgent by lowering everything, including real incidents. Read the issue.
- Deleting instead of archiving or retiring. Never.
- Running without an owner. The log must name a person.
