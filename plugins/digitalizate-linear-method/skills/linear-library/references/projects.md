# projects (references)

Each entry is the full text of its library file. Cite by ID.

## LM-020 Scope projects to one to three weeks with one to three people

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: creating a project, reviewing an active one, or splitting a large piece of work
Verify: Active projects have a target date within three weeks of their start date, at most three members, and no active project is older than six weeks without milestones
Measured by: LM-104
Sources: Linear Method, Scope projects down (https://linear.app/method/scope-projects, 2026-10)
File: library/projects/LM-020-scope-projects-to-1-3-weeks.md

### Why

"Design projects so that they can be completed in 1–3 weeks with a team of 1–3 people. Smaller fixes or additions should take only hours or a day." Short projects force prioritization of the minimum feature set, deliver feedback early and build the habit of shipping. Early on "you don't know enough to predict whether a project will be impactful", so small bets beat big ones.

### Do

- When writing the spec, cut scope until the first stage fits in three weeks.
- If it cannot be cut, "break it down into stages" and make each stage a project or a milestone that ships.
- Keep the team at one to three people; add people to parallel projects, not to one project.

### Anti-pattern

A "v2" project open for five months with 200 issues and no milestone shipped.

### Fix

Split into stage projects of one to three weeks; close the container; move leftovers.

### Evidence

- The first versions of Cycles and Projects "took us about two weeks to design and build" and went to the private beta in the first week (Linear Method, Scope projects down). Official-method.
- Linear's typical project team was one designer and two engineers, with about six project teams in parallel (Lenny's Newsletter, Sep 2023). Linear-internal.
- Hitask reports confusion from using projects as features and epics after 18 months (Medium, Jul 2024). Competitor opinion.

## LM-021 Break large work into stages and milestones that ship

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: query
Use when: a project cannot fit in three weeks, or a date exists that the team must hit
Verify: Every active project longer than three weeks has milestones, each with a target date and something a user or the team can see when it closes
Measured by: LM-104
Sources: Linear Method, Scope projects down (https://linear.app/method/scope-projects, 2026-10); Linear docs, Project milestones (https://linear.app/docs/project-milestones, 2026-10)
File: library/projects/LM-021-stage-large-work-with-milestones.md

### Why

Milestones mark meaningful stages inside a project (internal beta, beta, GA). They let a big piece of work keep the short feedback loop of the method, and they make target dates something to steer against rather than hope for.

### Do

- Name milestones by what becomes true ("Behind a flag for the team", "Beta with 10 accounts", "Everyone").
- Put a target date on each milestone; move the date in a project update when it slips.
- Review milestones at every project update.

### Anti-pattern

Milestones that are task buckets ("Backend", "Frontend") or none at all on a two-month project.

### Fix

Rewrite milestones as shipped stages; cut the last one if the date is fixed.

### Evidence

- Nan Yu describes working toward milestones rather than fixed scopes (Product Thinking podcast, 2025). Linear-internal.
- Linear's docs: target dates help "to deter scope creep" (Linear docs, Projects). Official-docs.

## LM-022 Every project has exactly one lead

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: creating a project, auditing active projects, or when a project stalls with no one answering for it
Verify: Every project in a planned or started status has a lead set; the lead is a person on the project team, not a manager by default
Measured by: LM-103
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26)
File: library/projects/LM-022-one-lead-per-project.md

### Why

"Every project should have a named owner who's responsible for writing the project brief and delivery. The same rule applies to issues." One accountable person per project is the single most repeated trait in documented adoptions. At Linear "the project lead is never a PM"; the lead can be an engineer or a designer and their job is to get the project started and communicate how it's going.

### Do

- Set `lead` at creation; the lead writes the spec and the weekly update.
- Rotate leads across projects so ownership is a role, not a title.
- A sponsor (founder or head of product) is accountable for the outcome; that is separate from the lead.

### Anti-pattern

Projects with no lead, or every project led by the same manager.

### Fix

Assign a lead from the project team; if nobody can lead it, the project is not ready to start.

### Evidence

- Opendoor's operating doc requires a DRI per project and a weekly update from each lead (Linear customer story, Dec 2025). Interested source.
- Langfuse: "Every active project and issue has one lead" (Langfuse handbook, 2026). Independent company docs.
- Scale AI ties every issue to a project, a team and an engineer (Linear customer story, May 2024). Interested source.

## LM-023 The lead writes a short spec with the why, the what and the how

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: starting any project, and before writing its issues
Verify: Every started project has a spec (project content or linked document) that states why, what, what is out of scope, how, milestones and how success will be judged, in roughly one page
Measured by: LM-116
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10)
File: library/projects/LM-023-short-spec-why-what-how.md

### Why

"Aim for brevity. Short specs are more likely to be read." The spec is where the user problem and the experience get discussed; this is what makes dropping user stories safe. Without a spec, issues lose the why and the critique that user stories "bridge design and requirements" becomes true.

### Do

- One page: Why (problem, who, evidence), What (scope and explicit out-of-scope), How (approach, risks, open questions), Milestones, How we will know it worked.
- Collect feedback on the spec before writing issues; Linear sometimes spends "a couple weeks to think through a feature before building it".
- Keep the spec in the project overview or a project document so it stays attached.

### Anti-pattern

Projects that are a title and a pile of issues, or specs that run to ten pages nobody reads.

### Fix

Write the one-pager with the template; if it cannot be written, the project is not understood yet.

### Evidence

- Linear project teams write the spec and then create their own tasks (Lenny's Newsletter, Sep 2023). Linear-internal.
- Hitask's critique of adopting the method without user stories describes exactly a team without specs (Medium, Jul 2024). Competitor opinion.

## LM-024 Give every project a target date and use it to guard scope

Kind: practice · Score: 4 · Tier: official-docs · Verifiable by: query
Use when: creating or reviewing a project
Verify: Every started project has a target date; when the date moves, the change appears in a project update together with the scope decision
Measured by: LM-115
Sources: Linear docs, Projects (https://linear.app/docs/projects, 2026-10); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/projects/LM-024-target-date-as-scope-guard.md

### Why

Linear's docs describe the target date as a way to deter scope creep. A date is a planning signal for the team, not a promise to the outside; the point is to force the "cut scope or move the date" conversation early.

### Do

- Set a target date at creation, within one to three weeks for a stage.
- Treat it as internal: Langfuse states "Target dates are internal planning signals, not external commitments."
- When at risk, decide in the update: cut scope, or move the date and say why.

### Anti-pattern

Projects without dates, or dates that silently move every week.

### Fix

Add the date; put every date change in an update with the reason.

### Evidence

- Descript prefers priorities over fake dates and reviews each project's backlog weekly (Descript internal guide, republished by Linear, Jan 2024). Partially interested.

## LM-025 The lead writes a weekly project update with health

Kind: practice · Score: 5 · Tier: linear-internal · Verifiable by: query
Use when: any project is in a started status; setting up rituals; replacing status meetings
Verify: Every started project has an update within the last 7 days with a health value and a next step
Measured by: LM-114
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear docs, Initiative and project updates (https://linear.app/docs/initiative-and-project-updates, 2026-10)
File: library/projects/LM-025-weekly-project-update-with-health.md

### Why

Linear's project teams "do weekly updates... posted to Slack to our #product-updates channel so anyone can follow them". Updates are the mechanism that replaces status meetings and lets sponsors review asynchronously. They are the practice most often named in successful adoptions.

### Do

- Weekly, written by the lead: health (On track, At risk, Off track), done this week, next, risks or decisions needed, date changes.
- Configure update reminders (they go only to the lead, only for in-progress projects).
- Syndicate updates to a channel people actually read.
- Review missing updates at cycle close; a project with no update is a finding, not a detail.

### Anti-pattern

Updates that are optional, or written by someone other than the lead, or generated and left unread.

### Fix

Turn on reminders, make the update part of the lead role, check for "Update missing" each cycle.

### Evidence

- Opendoor: every lead posts an update on Fridays and an automatic summary goes out on Mondays (Linear customer story, Dec 2025). Interested source.
- Sierra: "We don't want to know what individuals did that week—we want to know what was accomplished in service of which projects" (Linear customer story, Apr 2025). Interested source.
- Langfuse requires a weekly update before Monday with health, progress, next step, blockers and date changes (Langfuse handbook, 2026). Independent company docs.

## LM-026 Projects are finite deliverables, not containers

Kind: model · Score: 5 · Tier: official-docs · Verifiable by: query
Use when: deciding whether something should be a project, an initiative, a label or a team
Verify: No project in a started status has existed for more than six weeks without milestones, and no project is named after an area or a team
Measured by: LM-104
Sources: Linear docs, Concepts (https://linear.app/docs/conceptual-model, 2026-10); Linear, Intro to Linear (https://linear.app/learn/intro-to-linear, 2026-10)
File: library/projects/LM-026-projects-are-finite.md

### Why

In Linear's model, projects group issues around "a specific deliverable" and "typically map onto a feature or launch". Containers that never end (an area, a team, "Maintenance") belong to labels, teams, or a project with an indefinite status, not to the default project lifecycle.

### Do

- Project = something that ends. Area = label. Ongoing stream = initiative or an indefinite-status project (Maintenance).
- When a project is used as a container, split real deliverables out of it and give the container the right object type.

### Anti-pattern

"Frontend", "Client X", "Tech debt" as projects that stay started forever.

### Fix

Convert to a label, a team, or an indefinite Maintenance status; create stage projects for the actual work.

### Evidence

- Linear's own project statuses include a Maintenance status for work that does not end (Linear changelog, Custom statuses for projects, Mar 2024). Official-docs.
- Retool's standing "Quality" project is an explicit exception used as a pull list, not a deliverable (Linear customer story, 2019). Interested source.

## LM-027 Use project statuses for the project lifecycle

Kind: model · Score: 3 · Tier: official-docs · Verifiable by: judgment
Use when: candidate projects, proposals and running projects get mixed, or someone wants a label like "approved"
Verify: Candidate, planned, running and ongoing projects are distinguished by project status, not by labels or naming conventions
Sources: Linear changelog, Custom statuses for projects (https://linear.app/changelog/2024-03-19-custom-statuses-for-projects, 2024-03-19)
File: library/projects/LM-027-project-statuses-for-lifecycle.md

### Why

Since March 2024 project statuses are customizable inside fixed categories (Backlog, Planned, Started, Paused, Completed, Canceled). Linear uses Idea, Proposal, Discovery (backlog), Ready, Accepted (planned), In Progress and Maintenance (started). This gives candidate projects a home without labels.

### Do

- Start with defaults; add a Proposal or Idea status when continuous planning produces candidates.
- Add an indefinite Maintenance status only when ongoing work needs a project.
- Never encode lifecycle in labels or in the project name.

### Anti-pattern

Project labels "approved", "wip", "parked", or names prefixed "[DRAFT]".

### Fix

Move the information into the project status.

### Evidence

- Linear's status set is documented in the changelog entry above. Official-docs.

## LM-028 Project teams are cross-functional and dissolve on completion

Kind: practice · Score: 4 · Tier: linear-internal · Verifiable by: query
Use when: staffing a project or deciding how many projects run in parallel
Verify: Each started project has members from every discipline it needs (design and engineering at least for user-facing work) and members are released when it completes
Measured by: LM-133
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10)
File: library/projects/LM-028-cross-functional-project-teams.md

### Why

Linear forms a team per project ("one designer and two engineers" was typical) and dissolves it when done. Designers and engineers work in the same project, so there is no handoff and no formal review gate.

### Do

- Staff the project with the disciplines it needs from day one.
- Keep project membership small and explicit; use the members field.
- Release people at completion; the next project forms its own team.

### Anti-pattern

Permanent functional squads that hand work to each other, or "members" that list the whole company.

### Fix

Set members to the real team, add the designer to user-facing projects, dissolve at Done.

### Evidence

- "we basically have two designers... and 20-25 engineers", with product engineers taking many design decisions (Nan Yu, The Glimpse). Linear-internal.

## LM-029 Close projects at done and move the leftovers

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: query
Use when: a project sits at 85-95% progress for more than a cycle
Verify: No started project has had progress above 85% for more than one cycle without being completed or re-scoped
Measured by: LM-117
Sources: Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026); Linear Method, Generate momentum (https://linear.app/method/building-with-momentum, 2026-10)
File: library/projects/LM-029-close-at-done-move-leftovers.md

### Why

A project parked at 90% blocks its lead, keeps its team nominally busy and hides the fact that the remaining 10% was never essential. Closing it and moving the leftovers to a new, small project or to the backlog restores momentum.

### Do

- At the cycle close, list projects above 85%; for each, complete it and move leftovers, or write why it is still open.
- Treat leftovers as new small issues under a follow-up project, or cancel them.

### Anti-pattern

Five projects "almost done" for two months.

### Fix

Complete, move, cancel. Write the decision in the final update.

### Evidence

- Langfuse's quarterly backlog review: "Nothing rolls forward silently" (Langfuse handbook, 2026). Independent company docs. The 85% threshold is the author's interpretation.

