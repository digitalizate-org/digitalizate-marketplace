# Triage decisions

Rules: LM-050 (single inbox), LM-051 (rotating responsibility), LM-052 (daily, three days max), LM-053 (four outcomes), LM-044 (problem, not solution), LM-045 (quote and link), LM-074 (Urgent), LM-061 (bugs on a deadline), LM-149 (no triage without judgment).

## The four outcomes, and nothing else

- Accept: set Type label, priority per `linear-decisions.md`, project if any; rewrite the title as a task if it arrived as a problem; assign if it enters the current cycle, else Backlog. `save_issue { id, state: "Backlog" | "Todo", labels/addLabels, priority, project?, assignee? }`.
- Decline: one sentence why, as a comment (`save_comment`), then `save_issue { id, state: "Canceled" }` (or "Won't Fix" if the team has it). Convert useful feedback into a Customer Request before closing.
- Duplicate: `save_issue { id, duplicateOf: "<identifier>" }` so requests accumulate on the original.
- Snooze: only with a date and a reason; if the MCP exposes no snooze, leave a comment with the date and keep it in triage.

## Agent-created issues

Treat them like any other: the goalie decides. Pre-filled priority or labels from an agent are suggestions. Urgent is never set by an agent or a reporter; the goalie sets it when it is an incident or a hard blocker.

## Daily pass

15-30 minutes, inbox to zero. Oldest first. If the inbox exceeds what one pass can handle, declare bankruptcy once: decline everything older than 30 days with a standard comment and keep what someone defends within a week.

## Bugs

Accepted bugs get a deadline per `linear-decisions.md` (default 48 hours for high priority, 7 days otherwise, from Linear's zero-bugs policy). A bug is never sent to a backlog to age: fix on deadline, or Won't Fix with a reason.
