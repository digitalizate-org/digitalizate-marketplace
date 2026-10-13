# principles (references)

Each entry is the full text of its library file. Cite by ID.

## LM-001 Build for the creators

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: deciding whether a field, state, report or ritual earns its place in the workspace
Verify: No field, state or label exists only to feed a report that the people doing the work never read
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); The Glimpse, Building Product at Linear with Nan Yu (https://www.theglimpse.co/p/nan-yu, 2024)
File: library/principles/LM-001-build-for-the-creators.md

### Why

Linear states that keeping individuals productive matters more than generating perfect reports. When a tracker serves reporting first, data quality collapses: Nan Yu explains that required fields get filled with placeholder values and "your data quality just goes down".

### Do

- Let data come from real activity (PRs, state changes, updates), not from fields people fill for someone else's report.
- Before adding anything to the workspace, name the person who does the work and ask whether it helps them.
- Remove every mandatory field or ritual whose only consumer is a dashboard.

### Anti-pattern

Required fields, mandatory estimates and status labels added "for visibility" that nobody doing the work uses.

### Fix

Delete the field, derive the number from activity, or move the need to a project update written by the lead.

### Evidence

- Linear rejected custom fields, required fields and multiple assignees "hundreds of times" because "we value clarity over almost everything else" (Nan Yu, The Glimpse). Linear-internal.
- Oscar Health dropped the custom fields and workflows of one of the most complex Jira instances and "people haven't missed all those custom fields" (Linear customer story, Jun 2025). Interested source.

## LM-002 Purpose-built over flexible

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: configuring a workspace, choosing between defaults and customization, or migrating from a flexible tool
Verify: The workspace runs on Linear defaults except for configuration changes that each solve a problem that occurred at least twice
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/principles/LM-002-purpose-built.md

### Why

"Flexible software lets everyone invent their own workflows, which eventually creates chaos as teams scale." A purpose-built tool carries one default way of working, so new people learn one process instead of one per team.

### Do

- Accept the default states, priorities and cycle behavior first.
- Add a state, label group or setting only after the same problem has shown up twice.
- When migrating, bring the work (issues, projects), not the old process (workflows, custom fields).

### Anti-pattern

Reproducing the previous tool's 14 workflows and custom fields inside Linear on day one.

### Fix

Reset to defaults, then reintroduce one customization at a time with a written reason in `linear-decisions.md`.

### Evidence

- Cotera went from 14 Jira workflows to 4 states and concluded "the tool choice mattered less than we thought" (founder post, Mar 2026). Author sells agent tooling.
- Oscar Health migrated projects and history but left custom fields and workflows behind (Linear customer story, Jun 2025). Interested source.

## LM-003 Create momentum, don't sprint

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: query
Use when: setting up cycles, judging a team's rhythm, or deciding how to treat unfinished work at the end of a cycle
Verify: Cycle completion sits in a stable band and unfinished work rolls over without a rush at the end
Measured by: LM-100, LM-101
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear Method, Generate momentum (https://linear.app/method/building-with-momentum, 2026-10)
File: library/principles/LM-003-create-momentum-dont-sprint.md

### Why

Linear's framing: "the goal is to maintain a healthy momentum with your teams, not to rush towards the end." Cycles exist to decide priorities and owners on a rhythm, not to force a finish line every two weeks. Momentum compounds; crunch does not.

### Do

- Treat the cycle as a rhythm for deciding and reviewing, not as a commitment to empty the list.
- Let unfinished issues roll over automatically and read repeated rollover as a planning signal.
- Decide and ship today instead of tomorrow when the choice is close; Linear's note is that startups die from going slow, rarely from one bad decision.

### Anti-pattern

End-of-cycle crunch, "sprint goals" that must be met, or cycles reset to 100% by moving everything out on the last day.

### Fix

Plan below last cycle's completed count, keep rollover automatic, and review why items rolled instead of hiding them.

### Evidence

- Linear's docs: unlike sprints, cycles are not tied to releases, and "there is no way to keep unfinished issues in a closed cycle" (Linear docs, Cycles). Official-docs.
- Scale AI: "It's far easier to put something in a cycle than it is to put it in the backlog" (Linear customer story, May 2024). Interested source.

## LM-004 Meaningful direction

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: query
Use when: planning a cycle, reviewing a backlog, or explaining why a piece of work exists
Verify: Every active project belongs to an initiative and every planned issue belongs to a project, with bugs and maintenance as the explicit exception
Measured by: LM-108, LM-137
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/principles/LM-004-meaningful-direction.md

### Why

Even when the day is a list of small tasks, people need to recall the purpose. Linear names milestones, projects and initiatives as "essential to consider when you plan your weekly schedules". Work that cannot be traced to a direction is work nobody can prioritize.

### Do

- Trace each issue to a project and each project to an initiative; allow bugs and maintenance as the exception, not the rule.
- Fill cycles from active projects first, then bugs.
- When an issue fits no project, ask whether it should exist.

### Anti-pattern

Cycles full of orphan issues with no project, and projects with no initiative, so planning becomes a debate about every item.

### Fix

Group orphans under a project or an explicit "maintenance" container, and attach projects to one to three active initiatives.

### Evidence

- Brex moved from "dozens of product teams with their own roadmaps, to one central company roadmap"; their survey reported +55% clarity on how one's work connects to the roadmap (Linear customer story, 2024). Interested source, internal survey.
- Langfuse requires every issue to sit under a project or be an explicit exception (Langfuse handbook, 2026). Independent company docs.

## LM-005 Aim for clarity

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: naming teams, states, labels, projects or rituals, and when writing issues and specs
Verify: Workspace objects use plain names (project, issue, bug, cycle); no invented terms, no epics, stories or spikes
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); The Glimpse, Building Product at Linear with Nan Yu (https://www.theglimpse.co/p/nan-yu, 2024)
File: library/principles/LM-005-aim-for-clarity.md

### Why

"Don't invent terms if possible... Projects should be called projects." Every invented term is one more thing a new person has to decode, and jargon from other methods (epics, stories, story points) carries assumptions the Linear Method does not share.

### Do

- Use plain words: project, issue, bug, cycle, initiative.
- Name labels and states by what they mean to the person doing the work.
- Write issue titles that say what to do in one line.

### Anti-pattern

Labels like "Epic", "Story", "Spike", states named after a previous tool, teams named with internal acronyms.

### Fix

Rename to the plain word; if the object has no plain name, it probably should not exist.

### Evidence

- Nan Yu: Linear chose clarity over flexibility and declined features like custom fields "hundreds of times" (The Glimpse). Linear-internal.
- Hitask's critique shows the cost of unclear objects: "We tried to use Linear's Projects as features, as traditional Projects and as Epics, neither way made sense" (Medium, Jul 2024). Competitor opinion.

## LM-006 Say no to busy work

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: query
Use when: reviewing rituals, status meetings, manual state changes, or any task that is about the work rather than the work
Verify: State changes, cycle creation and rollover happen automatically; no recurring meeting exists only to read status aloud
Measured by: LM-109
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear, Issue tracking is dead (Karri Saarinen) (https://linear.app/next, 2026-03-24)
File: library/principles/LM-006-say-no-to-busy-work.md

### Why

"A tool should work for you, not the other way around. Remove or automate 'work around work'." Saarinen's 2026 letter pushes this further: when "the process became the work", teams mistake complexity for sophistication.

### Do

- Connect GitHub/GitLab so PRs move issue states.
- Enable automatic cycle creation, rollover and auto-add of started and completed issues.
- Replace status meetings with written project updates.
- Let agents draft issues from conversations and prepare update drafts; keep the decision human.

### Anti-pattern

Manual rollover every two weeks, a daily standup that only reads statuses, people moving cards by hand after merging.

### Fix

Turn on the automations, cancel the status meeting, and route feedback through triage.

### Evidence

- Linear's cycle settings auto-create cycles, roll unfinished issues forward and can auto-add started or completed issues (Linear docs, Cycles). Official-docs.
- Opendoor noticed part of the perceived "more pace" came from work becoming visible without extra reporting (Linear customer story, Dec 2025). Interested source.

## LM-007 Simple first, then powerful

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: deciding which Linear features to turn on at a given team size or stage
Verify: Estimates, sub-teams, cooldown, Insights and agents are off until a documented need appears
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/principles/LM-007-simple-first-then-powerful.md

### Why

"A tool should be simple to get started with and grow more powerful as you scale." Features switched on before the need exists add decisions, settings and vocabulary that a small team pays for every day.

### Do

- Start with one team, default states, cycles, triage and projects.
- Add estimates, sub-teams, cooldown, Insights or agents only when a concrete problem asks for them; record the reason.
- Review quarterly which settings can be turned off again.

### Anti-pattern

Day-one setups with estimates, four teams, custom project statuses and SLAs for a six-person team.

### Fix

Disable what has no documented reason, keep the configuration in `linear-decisions.md`.

### Evidence

- Linear started with one-week cycles, a monthly list of one to three projects and a single product meeting; one-pagers arrived "as the team grows" (Karri Saarinen, Building at the early stage, Jan 2021). Linear-internal.
- Linear had "a single product team" at about 50 people (Lenny's Newsletter, Sep 2023). Linear-internal.

## LM-008 Decide and move on

Kind: principle · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: a debate stalls, a project is at 90%, a scope question blocks a cycle, or an issue has rolled over more than twice
Verify: Open decisions are written in the project with an owner and a date, and none stays open longer than one cycle
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear Method, Generate momentum (https://linear.app/method/building-with-momentum, 2026-10)
File: library/principles/LM-008-decide-and-move-on.md

### Why

"There isn't always a best answer. Sometimes the most important thing is to make a decision, and move on." Linear's early-stage advice is blunt: "You decide to do it or not to do it. Then you do it today instead of tomorrow."

### Do

- Give debates a time box; the project lead decides.
- Write the decision in the project (spec or update) so nobody reopens it by accident.
- Close projects at done and move leftovers; cancel issues nobody defends.

### Anti-pattern

Projects parked at 90%, issues that roll over for months, threads that reopen the same choice every cycle.

### Fix

Pick, write it down, move on; schedule a revisit date if the decision is reversible.

### Evidence

- Linear shipped its private beta with Google login only because it was fastest, knowing other methods would come later (Linear Method, Prioritize enablers and blockers). Official-method.
- Langfuse's quarterly backlog review: "Nothing rolls forward silently" (Langfuse handbook, 2026). Independent company docs.

