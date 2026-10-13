# Creating and editing issues

Rules: LM-040 (issues, not user stories), LM-041 (short actionable titles), LM-042 (description optional), LM-043/LM-044 (write your own; file problems for others), LM-045 (quote the user in bugs), LM-046 (small), LM-047 (one assignee once planned), LM-049 (exploration placeholders), LM-056 (only within six months), LM-072/LM-073 (labels), LM-074 (Urgent), LM-090 (agents).

## Decide the type first

- Bug: something behaves wrong. Title = symptom + where. Template `templates/issue-bug.md`. Quote the user, link the source, attach the Customer Request if one exists.
- Task: something to build or change. Title = verb + object. Template `templates/issue-task.md`. Description optional; link the spec.
- Exploration: "Explore design for X", "Write spec for Y", "Evaluate 3 options for Z and document results". Time-boxed, with a deliverable.
- Not an issue: ideas beyond six months, feature requests without a plan (Customer Request on a candidate project), "epics" (a project).

## Checklist before `save_issue`

1. Title 80 characters or fewer, no prefixes ([Frontend], URGENT:), no story format.
2. `team` set; `project` set unless it is a bug or chore outside any project; `parentId` when it is a sub-issue.
3. Labels: exactly one Type label (Bug, Feature, Improvement, Chore) plus at most one Area label. Never a status or priority word.
4. Priority: Urgent only for incidents or hard blockers, with the justification in the description; otherwise High, Medium or Low per `linear-decisions.md`.
5. Assignee: required when the issue enters a cycle or a planned state; optional when it goes to Triage or Backlog. With `delegate`, always set a human `assignee`.
6. State: new unplanned work goes to Triage (or Backlog if triage is off); planned work to Todo with an assignee and a cycle.
7. Size: if it will take more than two or three days, split into sub-issues now.
8. Bugs: steps, expected vs observed, environment, impact. Add the "Context for the agent" block only when delegating.

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

Write the problem, not the solution: "Tutors don't know when grades are published (3 reports this month)". The assignee rewrites the title into a task when accepting (LM-044).
