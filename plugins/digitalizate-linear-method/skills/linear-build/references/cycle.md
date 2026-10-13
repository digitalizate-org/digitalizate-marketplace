# Cycles: enabling, configuring and planning

Rules: LM-030 (n-week cycles), LM-031 (not tied to releases), LM-032 (do not overload), LM-033 (rollover is a signal), LM-034 (auto-add), LM-035 (cooldown optional), LM-036 (2-3 upcoming), LM-037 (one week early on), LM-060 (quality in every cycle).

## Configuration (team settings, via `fix.ts` team.update or the Linear UI)

- cyclesEnabled true; cycleDuration 2 (1 for tiny or early teams); cycleStartDay 1 (Monday) unless the team's week starts elsewhere; cycleCooldownTime 0 at first.
- cycleIssueAutoAssignStarted and cycleIssueAutoAssignCompleted true; upcomingCycleCount 2 or 3; cycleLockToActive false.
- Record the choice and the reason in `linear-decisions.md`.

The MCP has no team-settings write tool; use `npx tsx scripts/fix.ts` with a plan of `team.update` operations (see linear-fix) or the UI.

## Planning a cycle (see also linear-plan)

1. Capacity = average completed issues of the last three closed cycles (snapshot `cycles.avg_completed_last3`). Plan at or below it; leave 20-30% for bugs and the unexpected.
2. Pull first from active projects (issues in Todo with assignee), then bugs from triage and the quality list.
3. Every issue in the cycle has an assignee and, unless it is a bug or chore, a project.
4. Add to the cycle with `save_issue { id, cycle: "<number or id>" }`.

## Closing a cycle

Nothing to do by hand: unfinished issues roll over. At the review, read the rolled list: split, cancel or unblock anything that rolled twice. Write the changelog from completed issues.
