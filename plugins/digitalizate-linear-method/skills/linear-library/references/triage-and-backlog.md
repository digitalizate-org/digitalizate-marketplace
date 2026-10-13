# triage-and-backlog (references)

Each entry is the full text of its library file. Cite by ID.

## LM-050 Enable triage as the single inbox for unplanned work

Kind: practice · Score: 5 · Tier: official-docs · Verifiable by: query
Use when: setting up a team, or when requests arrive through Slack, email and DMs and get lost
Verify: Triage is enabled on every team that receives work from outside the team or from integrations, and integrations create issues in Triage rather than in Backlog
Measured by: LM-136, LM-102
Sources: Linear docs, Triage (https://linear.app/docs/triage, 2026-10); Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26)
File: library/triage-and-backlog/LM-050-enable-triage-as-single-inbox.md

### Why

Triage is "an additional status category that acts as an Inbox": issues from integrations (Slack, Intercom, Sentry, email, Asks) and from people outside the team land there, and from there they are accepted, declined, marked duplicate or snoozed. One inbox with a deadline beats five channels with none.

### Do

- Enable Triage on the team; route Slack, support and error integrations to it.
- Keep Backlog for accepted work only.
- Give triage a rotating owner (LM-051) and a daily pass (LM-052).

### Anti-pattern

Requests scattered across chat and email, or integrations dumping straight into Backlog.

### Fix

Enable triage, re-point the integrations, run the first pass.

### Evidence

- At Linear, triage receives issues from support, sales and the CEO and a "goalie" routes or fixes them (Lenny's Newsletter, Sep 2023). Linear-internal.
- Cursor: "The way we decide whether something actually gets fixed is if it's an issue in Linear. If it's not there, it gets lost" (Linear customer story, Feb 2026). Interested source.

## LM-051 Assign a rotating triage responsibility

Kind: practice · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: nobody owns the inbox, or the same person always does
Verify: Each team with triage has a triage responsibility (assign or notify) with a schedule or a weekly manual rotation recorded in linear-decisions.md
Measured by: LM-134, LM-102
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear changelog, Triage responsibility (https://linear.app/changelog/2023-10-12-triage-responsibility, 2023-10-12)
File: library/triage-and-backlog/LM-051-rotating-triage-responsibility.md

### Why

"'Goalie' is a weekly rotation where an engineer helps the support team with issues, fixes bugs, and triages incoming requests." A rotation spreads knowledge of what users hit, protects the rest of the team's focus, and makes the inbox someone's job every day.

### Do

- Configure Triage responsibility (Business plan) or a manual weekly rotation written in `linear-decisions.md`.
- The goalie fixes small bugs directly and routes the rest.
- The goalie is out of project work that week.

### Anti-pattern

"Everyone triages" (nobody does), or a permanent triage person who becomes a bottleneck.

### Fix

Set the rotation; put it on the calendar.

### Evidence

- Scale AI uses a rotating triage with SLAs and Slack alerts (Linear customer story, May 2024). Interested source.
- Linear's CX team runs a weekly goalie (Linear, CX in Linear, Nov 2025). Linear-internal.
- Cotera found triage "stayed a role" at about 40 issues a week even after the tool change (founder post, Mar 2026). Interested author.

## LM-052 Triage daily; nothing waits more than three days

Kind: practice · Score: 5 · Tier: evidence · Verifiable by: query
Use when: running triage, auditing inbox health
Verify: No issue has been in a triage state for more than three days (overridable per workspace)
Measured by: LM-102
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear customer story, Sierra (https://linear.app/customers/sierra, 2025-04); Linear customer story, Scale AI (https://linear.app/customers/scale, 2024-05)
File: library/triage-and-backlog/LM-052-triage-daily-nothing-older-than-3-days.md

### Why

An inbox that is read once a week is a backlog with a different name. The documented adoptions converge on a daily pass and a short deadline: Langfuse resolves triage usually within a day, Sierra has a daily 9am reminder, Scale AI runs SLAs with alerts.

### Do

- One or two passes a day, 15-30 minutes, by the goalie.
- Target: empty inbox at end of day; hard limit three days.
- Snooze with a date when information is missing.

### Anti-pattern

A hundred items in triage, the oldest from last quarter.

### Fix

Declare triage bankruptcy once (decline with a comment, keep what someone defends), then keep the daily pass.

### Evidence

- Langfuse: triage is "resolved normally in a day" (handbook, 2026). Independent company docs.
- Sierra: daily reminder at 9 to triage customer requests (Linear customer story, Apr 2025). Interested source.
- Linear's zero-bugs policy applies 48-hour and 7-day SLAs after triage (Artman & Roman, Sep 2025). Linear-internal.

## LM-053 Accept, decline with a comment, mark duplicate, or snooze; never park in triage

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: judgment
Use when: processing any issue in triage, including ones created or pre-filled by agents
Verify: Every issue that leaves triage has one of four outcomes recorded (accepted with priority, declined with a comment, duplicate, snoozed with a date); none leaves silently
Sources: Linear docs, Triage (https://linear.app/docs/triage, 2026-10); Linear Method, Build with users (https://linear.app/method/build-with-users, 2026-10)
File: library/triage-and-backlog/LM-053-accept-decline-duplicate-snooze.md

### Why

Triage has four actions and each one is a decision. Declining with a comment respects the reporter and keeps the backlog honest; marking duplicates concentrates requests on one issue; snoozing with a date keeps the inbox clean without losing the item. Accepting everything is not triage.

### Do

- Accept: set priority, type label, project if any; assign if it enters a cycle.
- Decline: one sentence why; convert useful feedback into a Customer Request.
- Duplicate: link to the original so requests accumulate there.
- Snooze: only with a date and a reason.
- When an agent pre-fills fields, the goalie still decides; "accept all" is a finding.

### Anti-pattern

Everything accepted into backlog; urgent set by the reporter; items left in triage "to think about it".

### Fix

Apply the four outcomes; reserve Urgent for the goalie.

### Evidence

- Linear's triage actions are documented (Triage page). Official-docs.
- Linear's zero-bugs policy: whoever receives a bug fixes it or marks it won't fix; backlog is not an option (Artman & Roman, Sep 2025). Linear-internal.

## LM-054 Keep a manageable backlog; important things resurface

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: the backlog grows past what fits in a few cycles, or before migrating from another tool
Verify: The team backlog fits in three to four cycles of throughput and contains no issue untouched for six months
Measured by: LM-105, LM-118
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/triage-and-backlog/LM-054-keep-a-manageable-backlog.md

### Why

"You don't need to save every feature request or piece of feedback indefinitely. Important ones will resurface, low priority ones will never get fixed." A short backlog makes planning fast and keeps the list a plan rather than an archive. Linear keeps a long list of candidate projects and short issue backlogs.

### Do

- Create issues only for work likely within six months; keep later ideas as candidate projects or Customer Requests.
- Prune on a cadence (quarterly at least); cancel what nobody defends.
- When migrating, import only the last 90 days of active work.

### Anti-pattern

Thousands of issues, most untouched for a year, imported wholesale.

### Fix

Archive or cancel everything untouched for six months with a standard comment; keep what someone claims within a week.

### Evidence

- Langfuse: issues only for work "likely in the next 6 months", quarterly review (handbook, 2026). Independent company docs.
- Cotera migrated 2,147 open issues and still had to rebuild the habit of pruning (founder post, Mar 2026). Interested author.
- Opendoor started from zero without migrating history (Linear customer story, Dec 2025). Interested source.

## LM-055 Enable auto-close and auto-archive

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: configuring a team, or when the backlog keeps stale items alive
Verify: Team settings have an auto-close period for inactive issues and an auto-archive period for closed ones
Measured by: LM-123
Sources: Linear docs, Teams (https://linear.app/docs/teams, 2026-10)
File: library/triage-and-backlog/LM-055-enable-auto-close-and-auto-archive.md

### Why

Pruning by hand is busy work. Linear can auto-close issues inactive in the backlog after a period and auto-archive completed and canceled ones, so the short backlog maintains itself.

### Do

- Set auto-close (for example 3 or 6 months of inactivity) and auto-archive (for example 1 month after close).
- Announce the rule once; the automation does the rest.

### Anti-pattern

Auto-close off, with a quarterly cleanup nobody schedules.

### Fix

Turn both on in team settings.

### Evidence

- Settings documented in Linear's team settings docs. Official-docs.

## LM-056 Create issues only for work likely within six months

Kind: practice · Score: 3 · Tier: evidence · Verifiable by: judgment
Use when: someone wants to "capture the idea" as an issue
Verify: Ideas without a plausible start date within six months are kept as candidate projects, documents or Customer Requests, not as issues
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/triage-and-backlog/LM-056-issues-only-for-the-next-six-months.md

### Why

An issue is a task someone will do. An idea for next year is not a task yet; filing it as one bloats the backlog and devalues the real tasks around it.

### Do

- Ideas go to a candidate project (backlog status) or a document; requests go to Customer Requests.
- Convert to issues when a project is planned.

### Anti-pattern

A "someday" label on hundreds of issues.

### Fix

Convert someday issues into one candidate project each (or cancel them).

### Evidence

- Langfuse's explicit six-month rule (handbook, 2026). Independent company docs. Linear keeps candidate projects, not issues, for long-range ideas (Nan Yu, Continuous planning, Oct 2025). Linear-internal.

## LM-057 Review the backlog on a cadence

Kind: practice · Score: 3 · Tier: evidence · Verifiable by: judgment
Use when: setting rituals, or when the backlog has not been read in months
Verify: A backlog review happens at least quarterly per team (weekly per project at Descript, quarterly at Langfuse), and its outcome is visible as cancellations and re-prioritizations
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear, Descript's internal guide for using Linear (https://linear.app/now/descript-internal-guide-for-using-linear, 2024-01)
File: library/triage-and-backlog/LM-057-review-the-backlog-on-a-cadence.md

### Why

Auto-close removes the dead; a review decides the living. Without a cadence, the backlog becomes a list nobody owns.

### Do

- Per project: the lead reads its backlog weekly (Descript's practice).
- Per team: quarterly review; "Nothing rolls forward silently".
- Keep it short: cancel, re-prioritize, or leave; no re-estimating.

### Anti-pattern

Grooming meetings of 90 minutes that re-discuss every item.

### Fix

Replace grooming with the lead's weekly read and a quarterly prune.

### Evidence

- Cotera dropped 90-minute biweekly grooming and "People groom as they go" (founder post, Mar 2026). Interested author.

