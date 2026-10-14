---
name: linear-setup
description: Implement the Linear Method from zero in a Linear workspace or team: teams, workflow states, labels, cycles, triage with rotation, templates, integrations, conventions file and first projects, in the canonical order. Use it whenever the user wants to set up, configure, bootstrap, start, onboard, reset, migrate to or "do it right from the beginning" in Linear, or asks how to structure teams, states, labels or cycles for a new workspace. Invoke as /linear-setup [team key].
---

# linear-setup

Goal: a workspace that passes `linear-audit` on day one with the minimum configuration, and a `linear-decisions.md` that explains every choice. Simple first (LM-007): nothing is turned on without a reason.

## Procedure

### 1. Learn what exists

`list_teams` (settings, states, labels), `list_projects`, `list_initiatives`, `list_templates`. If the workspace already has work, run `linear-audit` first and treat this skill as the fix of the structural findings. If it is empty, continue.

### 2. Decide the structure with the user

Ask only what cannot be observed, in one message:

- How many groups need a different cadence or workflow? (Default: one team. A second team only for a different cycle length, workflow or triage audience; LM-070.)
- Cycle length: 2 weeks by default; 1 week for teams of five or fewer or very early products (LM-030, LM-037). Start day Monday.
- Who rotates triage weekly (names), or Triage responsibility on a Business plan (LM-051).
- Definition of Done: merged, deployed, or documented (LM-048).
- Priority definitions and the bug deadlines (LM-074, LM-061). Defaults: Urgent = incident or hard blocker, today; High = this or next cycle; Medium = normal; Low = closes if it does not rise in three cycles; bugs 48 h / 7 days.
- Who reads the issues: only the people who implement them (technical, the method's default), or also a client or business stakeholder (business or external)? With business or external, the five blocks of LM-160 and the business templates apply.
- Agent policy: run owner, allowed operations, batch limit (LM-091).

### 3. Configure, in this order

1. Team settings: cycles (duration, start day, auto-add started and completed, 2 upcoming cycles, no cooldown, lock off), triage enabled, auto-close 6 months, auto-archive 1 month, estimates off. The MCP cannot change team settings: write a plan of `team.update` operations and apply it with `npx tsx "${CLAUDE_PLUGIN_ROOT}/scripts/fix.ts" apply --plan <file> --owner "<name>"`, or do it in the Linear UI and record it.
2. States: keep the defaults; add In Review (started) only if code review is a real wait; add Won't Fix (canceled) if the bug deadline rule is adopted (LM-071). Remove any other state.
3. Labels: a Type group with Bug, Feature, Improvement, Chore at workspace scope; an Area group with 4-6 values only if the product needs it (LM-073). Retire status-like and priority-like labels (LM-072).
4. Templates: a bug template and a project template from `templates/`; with a business or external reader, install also `issue-task-business.md`, `issue-request.md` and `issue-support.md` (`save_document` is not a template tool; use the Linear UI for templates if the MCP cannot create them, and record it).
5. Integrations: GitHub or GitLab (PRs move states), Slack (triage intake and update syndication), the error tracker into Triage (LM-109, LM-050).
6. Views: current cycle, triage, release blockers, stale projects, and a personal "My Issues: actionable" (LM-079).
7. `linear-decisions.md`: create it from `templates/linear-decisions.md` with every choice above and its reason, including the `issue.primary_reader` line when the reader is business or external.

### 4. Seed the work

- One to three initiatives phrased as outcomes with an owner (LM-010).
- Two or three first projects, each with a lead, a target date within three weeks and a one-page spec (LM-020, LM-022, LM-023), via `linear-build`.
- The first cycle: planned from an honest capacity guess, with at least one bug or quality item (LM-060).
- Migration: import only the last 90 days of active work; close the rest with a standard comment (LM-054). Epics with an end become projects; epics without an end become initiatives or labels.

### 5. Rituals (write them, do not schedule more than this)

- Cycle planning, 30-45 minutes, first day of the cycle.
- Cycle review, 20-30 minutes, last day: completed, rolled (why), updates missing.
- Weekly project update by each lead; monthly initiative review.
- Daily triage pass by the goalie. No daily standup, no demo gate, no refinement meeting, no planning poker.

### 6. Verify

Run `linear-audit`. The setup is done when it reports no high findings and every remaining finding has an exception in `linear-decisions.md` or a date.

## Week 1, month 1, quarter 1 (what to tell the user)

- Week 1: configuration, rules written, first projects with specs, triage rotation started, first cycle running.
- Month 1: two cycles closed; first backlog prune; GitHub integration moving states; first review of what settings can go.
- Quarter 1: initiatives reviewed once; decision on estimates, cooldown, a second team and agents, each with a written reason.
