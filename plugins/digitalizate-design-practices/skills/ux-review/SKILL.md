---
name: ux-review
description: Audit an existing interface against the ux-library and return findings that cite practice IDs with severity, evidence and a fix. Use it whenever the user asks to review, audit, critique, evaluate, QA, improve, "give feedback on" or "what's wrong with" a screen, page, component, flow, form, table, dashboard, landing page or front-end code, whether they give you source files, a screenshot, a URL, a Figma export or a description. Also use it when a PR touches UI and the user asks for a review, and for dark-pattern or accessibility checks. Invoke as /ux-review <path | url | screenshot | description>.
---

# ux-review

Goal: findings someone can act on and argue with. Every finding names a practice ID, shows where the problem is, and says what to change. Vague feedback ("improve the hierarchy") is a failure of this skill.

## Procedure

### 1. Gather what you are reviewing

- Code: read the components, templates and styles for the screen. Note the framework and any existing a11y tooling (eslint-plugin-jsx-a11y, axe, Playwright, Storybook a11y addon). If lint or tests for accessibility exist, run them first and fold their output into the findings; they are cheaper and more exact than reading.
- Screenshot or Figma: describe what you see state by state (default, loading, empty, error, filled, hover/focus if visible). Say explicitly which states you cannot see; do not invent them.
- URL: fetch it if you have a browser or fetch tool; otherwise ask for a screenshot or the code. Do not review from memory of what a site "usually" looks like.
- Description only: review the described design, flag that this is a design-level review, and list what you would need to confirm in the real thing.

### 2. Read the project memory

If `design-decisions.md` exists, read it. Practices listed under **Exceptions** are not findings unless the stated justification no longer holds; if that is the case, say so as a single note, not as a finding.

### 3. Pick the practices to check

Classify the screen (type, goal, user, device) and select categories with the table in `ux-library/SKILL.md`. Read the index files, shortlist score 5 and 4 entries whose `use:` context fits, add score-3 ones only on exact match. Then open the shortlisted entries in `references/` and review against the **Do.** steps and, when present, the `Verify:` line and `Anti-pattern:` line. Do not grade against index lines.

For conversion, pricing, subscription, notification or onboarding screens, also open the human-biases-in-interfaces and behavioral-psychology indexes and check for dark patterns: manufactured urgency, hidden costs, confirmshaming, roach-motel cancellation, pre-checked upsells, misdirection in buttons. These are findings regardless of score.

### 4. Judge each practice

Three outcomes per shortlisted practice:

- Pass: the screen meets the steps or the `Verify:` criterion.
- Finding: a step is unmet, with evidence.
- Not applicable: the `use:` context does not match after all. Drop it silently.

Severity comes from the practice score and the impact on the user's task:

| Severity | Rule |
|---|---|
| High | Score 5, or the user cannot complete or recover from the task, or accessibility blocker, or dark pattern |
| Medium | Score 4, or the task completes with friction or avoidable errors |
| Low | Score 3, or polish that does not change task outcome |

Evidence is a file path and line range, a component name, or the state and region of the screenshot ("error state, below the email field"). No evidence, no finding.

### 5. Write the report

Use this shape, in the user's language:

```
# UX review — <screen> (<date>)
Scope: <what was reviewed, which states were visible, what could not be checked>
Checked: <N> practices from <categories>; <M> pass, <K> findings.

## Findings
| # | Sev | Practice | Evidence | Fix |
|---|---|---|---|---|
| 1 | High | UX-204 Inline error messages next to the field | `SignupForm.tsx:88-104` errors render in a toast only | Render the message under the field, keep the toast for submit-level errors |
…

## Passes worth keeping
UX-118, UX-210, UX-270 … (IDs only, one line)

## Notes
- Exceptions respected: UX-199 (see design-decisions.md)
- Could not verify: focus order (no running build), skeleton timing (no latency data)

## Library proposals
<a recurring problem with no matching entry, phrased as a candidate practice>, or none
```

Order findings by severity, then by how early in the task they bite. Cap at roughly fifteen findings; if there are more, group the rest under one "Also" line with IDs. A review that lists forty items is not read.

### 6. After the report

If the user asks you to fix the findings, switch to the `ux-build` procedure for the fixes and append the outcome to `design-decisions.md`. If the user accepts a finding as an exception, record it there with the reason. If they want a library proposal to become a practice, add `library/<category-slug>/<ID>-<slug>.md` in the kit (copy a neighbouring file; `python3 scripts/build_skills.py` prints the next free ID) with `status: "Proposed"`.

## Things that go wrong

- Grading from the index line. Open the reference.
- Reporting a practice that the project listed as an exception.
- Findings without evidence, or evidence invented from how similar screens usually behave.
- Treating "the design could be more modern" as a finding. Visual taste is `frontend-design`'s business; here a finding must map to a practice.
- Citing IDs from the agentic-patterns skill for a non-agent screen.
