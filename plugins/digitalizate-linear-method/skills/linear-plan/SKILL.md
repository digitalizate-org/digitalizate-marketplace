---
name: linear-plan
description: Plan a Linear cycle (or review one) the Linear Method way: capacity from the last three cycles, pull from active projects first, bugs and quality share, candidates from triage, every issue assigned, rolled issues reviewed. Use it whenever the user asks to plan, fill, prepare, review, close or "what should we do next" for a cycle, sprint, week or iteration, or asks what the team can take on. Invoke as /linear-plan [team key] [next|current|review].
---

# linear-plan

Goal: a cycle planned at or below measured capacity, filled from projects, with quality work inside, and every issue owned. Planning takes 30-45 minutes; this skill prepares the proposal so the meeting decides instead of discovers.

## Procedure

### 1. Capacity

From the snapshot (`npx --yes tsx "${CLAUDE_PLUGIN_ROOT}/scripts/snapshot.ts" --team <KEY>`, or `list_cycles` via MCP): average completed issues of the last three closed cycles (`cycles.avg_completed_last3`). That is the ceiling (LM-032). Reserve 20-30% for bugs, requests and tooling (LM-011, LM-060). First cycle ever: guess conservatively (two or three issues per person per week) and say it is a guess.

### 2. Carry-over

List issues rolled from the previous cycle (`uncompletedIssuesUponClose` in the snapshot, or `list_issues` with the previous cycle). For each: keep (still the priority), split (too big), cancel (nobody defends it), or unblock (add the blocking relation and the owner). Anything that rolled twice is not kept as is (LM-033).

### 3. Pull from projects

For each started project, in priority order: issues in Todo with an assignee, up to what the project's lead says fits. Projects before loose issues (LM-004). Flag projects whose next milestone will not be reached with this cycle's share; the lead decides to cut scope or move the date in an update (LM-024).

### 4. Quality share

From triage and the backlog: bugs on deadline first (LM-061), then quality items. If the goalie rotation exists, the goalie's capacity is excluded from project work this cycle (LM-051).

### 5. Candidates from triage

Anything accepted in triage since the last planning that is not a bug: fits a project (attach it) or becomes a candidate project (LM-015). Do not add loose features to the cycle.

### 6. Check and write

- Every issue in the proposal has an assignee and, unless bug or chore, a project (LM-047).
- Total at or below capacity.
- Proposal as a short table (issue, project, assignee, type). The user or the team confirms; then `save_issue { id, cycle }` for each, and the cycle is set.

### Review mode (`review`)

At the close: completed vs planned, rollover share, bugs completed, projects that changed dates, updates missing. Output the five lines the team needs for the 20-30 minute review, plus the changelog draft from completed issues (LM-086).

## Things that go wrong

- Planning from last cycle's planned count instead of its completed count.
- Filling to 100% because "we'll do better this time".
- Pre-filling future cycles beyond the next one (LM-036).
- Letting the planning meeting turn into refinement; refinement happens in triage and in the spec.
