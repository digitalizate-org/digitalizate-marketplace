# Writing the one-page project spec

Rules: LM-023 (short spec: why, what, how), LM-083 (the problem behind the request), LM-084 (requests attached), LM-013 (enabler or blocker), LM-020 (scope that fits).

Template: `templates/project-spec.md`. Keep it to one page; a spec nobody reads is no spec.

## Sections and what makes each one good

- Why: the problem in the user's terms, who has it, and the evidence (literal quotes, request count, a number). Say whether the project is an enabler or removes a blocker and which initiative it serves.
- What: three to six scope items, and an explicit "Out of scope" list. Out of scope is where the cutting happens.
- How: the approach for design and engineering, the risks, and open questions each with an owner and a date.
- Milestones: shipped stages with dates ("Behind a flag for the team, day 5"; "Beta with 10 accounts, day 9"; "Everyone, day 14").
- How we will know it worked: one signal and when it will be read. Not an OKR.

## Where it lives

In the project overview (`save_project.description`) or a project document (`save_document { project, title: "Spec", content }`). Never in an issue. Never in a chat message only.

## Before writing issues

Collect feedback on the spec first (comments on the project). Then the people who will do the work write their own issues from the What and the Milestones (LM-043).

## Example (short)

Why: 41% of ticket purchases started on mobile are not completed; drop-off concentrates on step 3 of 5 (personal data). Box office says a third of the weekend queue "tried on mobile". Enabler: removes a blocker for mobile buyers. Initiative: More visits without a box-office queue.
What: two steps (choose day and tickets; pay). Email is the only required field. Out of scope: passes, school groups, payment gateway change.
How: reuse the calendar component; optional data after payment; same payment endpoint. Open question: refund flow for optional data, owner Iker, by day 3.
Milestones: design chosen (day 4); flow behind a flag (day 10); 50% of mobile traffic (day 14).
Success: completed mobile purchases from 59% to over 70% across two weekends.
