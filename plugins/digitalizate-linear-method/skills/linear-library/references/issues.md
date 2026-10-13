# issues (references)

Each entry is the full text of its library file. Cite by ID.

## LM-040 Write issues, not user stories

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: creating any issue, reviewing a team's issue style, or migrating from Scrum
Verify: No open issue title or description follows the "As a <role>, I want <x>, so that <y>" pattern; the user context lives in the project spec
Measured by: LM-111
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Hitask, Linear method madness, sans user stories (https://medium.com/hitask/linear-method-madness-sans-user-stories-0af082b3c652, 2024-07-03)
File: library/issues/LM-040-write-issues-not-user-stories.md

### Why

"We don't write user stories and think they're an anti-pattern." Linear's argument: stories became "a cargo cult ritual" that obscures the task and "can silo engineers into a mechanical role where they code to the issue requirements". An issue describes a concrete task with a defined outcome; the user problem and experience are discussed at the product and project level, in the spec. Placeholder issues for exploration ("Explore design", "Write project spec") are fine.

### Do

- One issue = one concrete task with a visible result (code, design, document, decision).
- Put who, why and the experience in the project spec, once.
- Allow exploration placeholders; forbid story templates in descriptions.

### Anti-pattern

Issue templates that require "As a... I want... so that..." plus Gherkin acceptance criteria.

### Fix

Move the why to the spec's Why section; rewrite the issue as a task; keep acceptance criteria only when they are verifiable in one line.

### Evidence

- The Hitask critique shows the failure mode of dropping stories without specs: the team found the product "disjointed and confusing" (Medium, Jul 2024). Competitor opinion.
- "you can just say build a login screen" (Nan Yu, The Glimpse). Linear-internal.

## LM-041 Issue titles are short and say what to do

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: query
Use when: creating or reviewing issues
Verify: Issue titles are 80 characters or fewer and read as an action ("Add pagination to /invoices") or a problem for bugs ("CSV export drops rows with emojis")
Measured by: LM-124
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10)
File: library/issues/LM-041-short-titles-that-say-what-to-do.md

### Why

"Write short and simple titles" that someone can read at a glance in a list. A title that needs the description to be understood slows every planning pass and every triage.

### Do

- Verb + object for tasks; symptom + where for bugs.
- Stay under 80 characters; move detail to the description.
- Avoid encoding type, priority or status in the title (that is what labels, priority and state are for).

### Anti-pattern

Titles like "[URGENT][Frontend] As a user I want to be able to..." or a title that is a paragraph.

### Fix

Rewrite the title; move prefixes into labels and priority.

### Evidence

- Rule stated on the method page. Official-method. The 80-character limit is the author's interpretation used by the guard.

## LM-042 Descriptions are optional; context lives in the project spec

Kind: practice · Score: 3 · Tier: official-method · Verifiable by: judgment
Use when: designing issue templates, or when every issue repeats the same background paragraph
Verify: Issue templates do not require a description; issues link to their project where the context lives
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10)
File: library/issues/LM-042-descriptions-optional-context-in-spec.md

### Why

"Descriptions should be optional–not required." Mandatory descriptions produce boilerplate, and boilerplate hides the one line that matters. Context belongs in the spec, once, where the whole project team reads it.

### Do

- Keep descriptions free-form; add a link to the spec, a design file or a log when useful.
- For agents, add a short "Context for the agent" block only when delegating.

### Anti-pattern

Required description fields filled with "n/a" or copied background.

### Fix

Remove the requirement; strengthen the spec.

### Evidence

- Langfuse keeps issue conventions minimal and puts long-form context in projects and RFC-style documents (Langfuse handbook, 2026). Independent company docs.

## LM-043 Write your own issues

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: assigning work, onboarding someone, or when one person creates most of the issues
Verify: Issues in started states were mostly created by their assignee; no single person creates the majority of a team's issues
Measured by: LM-127
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/issues/LM-043-write-your-own-issues.md

### Why

Writing the issue forces the person to think through the problem; receiving it ready-made turns engineering into transcription. Linear's project teams create their own tasks from the spec.

### Do

- The person doing the work writes the issue from the spec.
- Leads decompose at the milestone level, not at the task level.
- New hires write their own issues from week two, with review.

### Anti-pattern

A PO or lead who writes every ticket for everyone.

### Fix

Give the team the spec and the milestone; let them write the issues; review together once.

### Evidence

- "Everyone maintains their own issues and projects"; nobody manages the backlog centrally (Langfuse handbook, 2026). Independent company docs.
- Linear's engineers and designers create their own tasks (Lenny's Newsletter, Sep 2023). Linear-internal.

## LM-044 When filing for someone else, describe the problem; the assignee rewrites it as a task

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: support, sales, a founder or a PM files work for an engineer or designer
Verify: Issues created by non-assignees are phrased as problems or questions, and the assignee rewrites the title into a task when accepting
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10)
File: library/issues/LM-044-file-problems-for-others.md

### Why

"Let the assignee come up with the solution and then rewrite the issue as a task." Prescribing the solution from outside skips the person who knows the system, and it is how user stories sneak back in through the side door.

### Do

- Non-assignees write the symptom or the question, with evidence.
- The assignee rewrites the title as a task when they pick it up (or in triage).
- Keep the original report in the description for context.

### Anti-pattern

Support tickets that arrive as implementation instructions.

### Fix

Add "problem, not solution" to the bug template; rewrite at triage.

### Evidence

- Linear's CX team files bugs with templates and the customer's literal quote; engineering decides the fix (Linear, How our Customer Experience team works in Linear, Nov 2025). Linear-internal.

## LM-045 Cite the user verbatim in bugs and requests, and link the conversation

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: filing bugs or feature requests that come from users or customers
Verify: Bug and request issues contain a literal quote from the user and a link to the source conversation or a Customer Request
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Linear, How our Customer Experience team works in Linear (https://linear.app/now/cx-in-linear, 2025-11-06)
File: library/issues/LM-045-cite-the-user-verbatim.md

### Why

The user's own words carry what a summary loses. Linking the conversation lets the assignee ask follow-ups, and Customer Requests let the team close the loop when the fix ships.

### Do

- Quote the user ("Pongo mi cuenta y me dice formato no válido") and link the ticket, thread or Customer Request.
- Add steps, expected versus observed, and environment for bugs.
- When the PR merges, let the Customer Request notify the reporter.

### Anti-pattern

"Users are complaining about export" with no quote and no link.

### Fix

Use the bug template; attach the request.

### Evidence

- Linear's CX team cites the customer verbatim and closes the loop automatically when the PR merges (Linear, CX in Linear, Nov 2025). Linear-internal.
- Retool turns customer feedback into engineering work through attached feedback (Linear customer story, 2019). Interested source.

## LM-046 Keep issues small enough to complete several per week

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: query
Use when: creating issues or reviewing work that stays in progress for weeks
Verify: No issue stays in a started state for more than 14 days; a person completes several issues per week
Measured by: LM-126
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/issues/LM-046-keep-issues-small.md

### Why

"Ideally you can complete several concrete tasks each week." Small issues give the team the momentum the method is named after, keep PRs reviewable, and make the cycle's completion number honest.

### Do

- Split anything that will take more than two or three days into sub-issues with visible results.
- Use sub-issues to separate design from implementation.
- Read "in progress for two weeks" as a signal to split or unblock.

### Anti-pattern

Issues that are really projects, open for a month with one giant PR at the end.

### Fix

Split into sub-issues; close the parent when the children are done.

### Evidence

- Rule from the method page; the 14-day threshold is the author's interpretation used by the audit.

## LM-047 Every issue leaving triage has one assignee

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: query
Use when: accepting an issue from triage, planning a cycle, or when work is "owned by the team"
Verify: Issues in unstarted or started states have an assignee; the only unassigned issues sit in triage or backlog
Measured by: LM-125
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/issues/LM-047-one-assignee-per-issue.md

### Why

"Even if there are more people involved, the responsibility lands on one person." Linear supports a single assignee by design. Unassigned work in a cycle is work nobody will start.

### Do

- Assign when accepting into Todo or into a cycle.
- Use sub-issues when several people contribute.
- When delegating to an agent, keep the human as assignee.

### Anti-pattern

A cycle with a third of its issues unassigned "for whoever is free".

### Fix

Assign at planning; unassigned issues go back to backlog.

### Evidence

- Langfuse: outside triage "there are no unassigned issues" (Langfuse handbook, 2026). Independent company docs.
- Scale AI ties every issue to an engineer (Linear customer story, May 2024). Interested source.

## LM-048 Measure progress with actual work, not status reports

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: query
Use when: connecting the repository, reviewing how "done" is judged, or when status and reality diverge
Verify: GitHub or GitLab is connected so PRs move issue states, and "done" means merged (or shipped), not "reported done"
Measured by: LM-109
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear changelog, Linear Diffs (https://linear.app/changelog/2026-05-27-linear-diffs, 2026-05-27)
File: library/issues/LM-048-measure-progress-with-actual-work.md

### Why

"The clearest way to see whether something is complete or not is to show the diff... Avoid massive pull requests." Linking PRs to issues makes the tracker a record of reality; large PRs hide progress until the end.

### Do

- Connect the repository; use branch names from issues; let PR events move states.
- Keep PRs small and tied to one issue.
- Decide what Done means (merged, deployed, documented) and write it in `linear-decisions.md`.

### Anti-pattern

"Done" set by hand while the PR is still open, or one PR per month per issue.

### Fix

Enable the integration; define Done; split PRs.

### Evidence

- Langfuse uses a "merged" state driven by the PR integration and distinguishes it from "done", which includes docs and changelog (Langfuse handbook, 2026). Independent company docs.
- Linear Diffs (May 2026) brings code review next to the issue. Official-docs.

## LM-049 Use placeholder issues for exploration and specs

Kind: practice · Score: 3 · Tier: official-method · Verifiable by: judgment
Use when: a project starts with unknowns, or someone asks how to track research and design work
Verify: Research and design work appears as issues with a visible deliverable ("Explore design", "Write project spec", "Evaluate 3 models with 50 queries and document results")
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10)
File: library/issues/LM-049-placeholder-issues-for-exploration.md

### Why

The method allows "placeholder issues" for exploration: "Explore design" or "Write project spec" are legitimate tasks with a result. This is how uncertain work keeps a place in the cycle without inventing spikes or stories.

### Do

- Phrase exploration as a deliverable with a time box.
- Start UI projects with "Explore design"; start unclear projects with "Write project spec".
- Close the placeholder with a link to what it produced.

### Anti-pattern

"Research" issues with no deliverable that stay open forever.

### Fix

Add the deliverable and a time box to the title.

### Evidence

- Karri Saarinen's design process starts with an "Explore design" issue lasting a day to a week (Linear Method, Manage design projects). Official-method.

