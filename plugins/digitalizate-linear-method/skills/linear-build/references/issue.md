# Creating and editing issues

Rules: LM-040 (issues, not user stories), LM-041 (short actionable titles), LM-042 (description optional), LM-043/LM-044 (write your own; file problems for others), LM-045 (quote the user in bugs), LM-046 (small), LM-047 (one assignee once planned), LM-049 (exploration placeholders), LM-056 (only within six months), LM-058 (technical debt lives in a register), LM-072/LM-073 (labels), LM-074 (Urgent), LM-090 (agents), LM-094 (standing context lives in the repo or Linear agent guidance), LM-095 (agent-drafted issues go to Triage; batches are confirmed by a human), LM-160 (write for the declared reader), LM-161 (technical trail where it is maintained, linked), LM-163 (the implementer adds the plan), LM-165 (one deliverable = one issue), LM-166 (turn a report into issues by action, gate and verification), LM-168 (templates ask for outcome, impact and acceptance).

## Read the conventions first

From `linear-decisions.md` read `issue.primary_reader` (technical, business or external) and the numbers under `writing` in the threshold JSON block (`description_max_chars`, `subissue_batch_count`, `subissue_batch_minutes`). If the reader line is missing, use the method's values (descriptions optional, no five blocks) and say in the report that the workspace did not declare a reader.

## Decide the type first

- Bug: something behaves wrong. Title = symptom + where. Template `templates/issue-bug.md`. Quote the user, link the source, attach the Customer Request if one exists.
- Task: something to build or change. Title = verb + object. Template by reader: `templates/issue-task.md` (technical or undeclared) or `templates/issue-task-business.md` (business or external). Link the spec.
- Client request: the request in their words, with source and date. Template `templates/issue-request.md`.
- Support: a report from a user or customer. Template `templates/issue-support.md`.
- Exploration: "Explore design for X", "Write spec for Y", "Evaluate 3 options for Z and document results". Time-boxed, with a deliverable.
- Not an issue: ideas beyond six months, feature requests without a plan (Customer Request on a candidate project), "epics" (a project), technical debt nobody decided to address (it stays in the register, LM-058).

## Decide the partition before writing (LM-165, LM-166)

- One deliverable = one issue; its parts are checkboxes.
- A part becomes its own issue only for another assignee, another gate (a third party, another issue, a date or window) or a separate delivery that can be verified alone.
- More than one cycle: a project, not a parent issue.
- More than one issue from one source (an audit, a plan, meeting notes): propose the list first (titles, what each absorbs, the split reason of each) and create after a human confirms (LM-095).

## Write the description

- Reader business or external: draft "Done when" first; the blocks go in LM-160's order: What changes, Why it matters, Done when, Out of scope, Depends on / Reference. Use `templates/issue-task-business.md`.
- Reader technical or undeclared: the description is optional; link the spec, design or decision (LM-042).
- For everyone: do not copy a diagnosis, a procedure or tables into the issue; link them where they are maintained (LM-161). Credentials never go in the tracker.
- Bugs: observed facts, the quote and its source, no root cause in the description (LM-044). Hypotheses go in a comment marked as hypotheses.

## Checklist before `save_issue`

1. Title 80 characters or fewer, no prefixes ([Frontend], URGENT:), no story format.
2. `team` set; `project` set unless it is a bug or chore outside any project; `parentId` when it is a sub-issue.
3. Labels: exactly one Type label (Bug, Feature, Improvement, Chore) plus at most one Area label. Never a status or priority word.
4. Priority: Urgent only for incidents or hard blockers, with the justification in the description; otherwise High, Medium or Low per `linear-decisions.md`.
5. Assignee: required when the issue enters a cycle or a planned state; optional when it goes to Triage or Backlog. With `delegate`, always set a human `assignee`.
6. State: new unplanned work goes to Triage (or Backlog if triage is off); planned work to Todo with an assignee and a cycle.
7. Size: more than two or three days -> split by verifiable delivery, never by step (LM-046, LM-165); steps are checklist items.
8. Bugs: quote and source, steps, expected vs observed, environment, impact; no standing-context block for agents (LM-093, LM-094).
9. Description within `writing.description_max_chars` (2500 by default), counted outside the checklist.
10. Agent-drafted: goes to Triage or is shown before saving (LM-095).
11. Reading it as the declared reader: do they know what changes and when it is done?

## When taking an issue (implementer)

For delegated issues or issues of more than one day, put the plan in the PR description or, when there is no PR, in a comment titled "Technical plan": approach, what it touches, verification, risks, link to the diagnosis. If the issue does not hold, ask; do not rewrite the scope (LM-163).

## Shape of the call

```
save_issue { team, title, description?, labels: ["Bug"], priority, project?, assignee?, cycle?, parentId?, state? }
```

Updating: pass `id`, only the fields that change. Use `addLabels` / `removeLabels` instead of replacing `labels`. Use `duplicateOf` for duplicates and `blockedBy` for blocks; never a "blocked" label.

## Rewriting a story into a task

Story: "As a tutor I want a notification when a grade is published so that I can inform the family."
Spec (project "Grade notifications for tutors", Why): "Tutors learn about grades from families. Three head teachers asked in March."
Issues: "Emit event when a grade is published" · "Add notification preference to tutor profile" · "Create grade-published email template".

## Filing for someone else

Write the problem, not the solution: "Tutors don't know when grades are published (3 reports this month)". Separate facts from hypotheses. The assignee rewrites the title into a task when accepting and owns the plan (LM-044).

## Example: from a diagnosis to an issue

Diagnosis (stays in the repo document): the product page draws the cover image on a fixed-size canvas without scaling it; the admin preview scales it with CSS, so it always looks right there; the API does not validate dimensions.

Issue:
- Title: "Cover image shows cropped and zoomed on the product page"
- What is reported: the client's words, source and date.
- Impact: blocks publishing the new catalogue.
- How it shows: open a product page; expected the whole image, observed a zoomed part.
- Workaround: re-upload the image at the expected size.
- Done when: any image size shows whole on the product page and in the admin; an image of the expected size looks the same as before; existing products checked for misplaced hotspots.
- Out of scope: validating the size on upload.

The files, lines and the fix go to the implementer's plan (PR description or "Technical plan" comment).
