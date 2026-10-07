---
name: ux-build
description: Pre-flight for designing or implementing any user interface with the ux-library. Use it whenever the user asks to create, design, build, scaffold, mock up, prototype, redesign or rework a screen, page, view, component, form, table, dashboard, onboarding, wizard, navigation, settings panel, landing page or any front-end feature, in any framework, even if they only say "make me a X page" and never mention UX. It selects the practices that apply, applies them while building, and records the decisions in the project's design-decisions.md so later work does not reopen them. Also invoke as /ux-build <screen description>.
---

# ux-build

Goal: ship interfaces that already comply with the must-have practices, and leave a trace of which ones were applied and which were deliberately skipped.

This skill decides *behavior and usability*. Visual style (type, color, spacing, mood) belongs to `frontend-design` when it is available; when both load, apply both and do not let aesthetics override a score-5 practice.

## Procedure

### 1. Read the project memory first

Look for `design-decisions.md` at the repo root (or `docs/design-decisions.md`). If it exists, read it before anything else. It holds the project's users, device and domain, the practices already applied, and the **exceptions**: practices the team decided not to follow and why. Respect exceptions; do not re-propose them. If the file does not exist, create it from `templates/design-decisions.md` in this plugin and fill the project context from what you can see in the codebase and the request.

### 2. Classify the screen

Write one line: screen type(s), primary goal, user type (novice/expert, internal/external), device (desktop/mobile/both), data density. Use the screen-type table in `ux-library/SKILL.md` to pick categories, and `index/by-goal/` when the user stated an outcome.

### 3. Shortlist practices

Read the chosen index files. Select:

- every score-5 entry whose `use:` context fits,
- score-4 entries that fit (drop one only with a reason you will write down),
- score-3 entries only when the context is an exact match.

Keep the shortlist proportional: five to fifteen practices for a normal screen, and never fewer than five even for a small component, because the baseline set (status visibility, accessibility, one primary action, error and empty states) applies to everything. More than fifteen means the categories were too broad. Write the shortlist down as `ID Title` lines before building; every shortlisted ID ends up in the design-decisions entry as Applied, Skipped, Exceptions or Open. Then open the shortlisted entries in `references/` and read the **Do.** steps. Do not build from index lines.

### 4. Build with the practices in hand

Apply the **Do.** steps while writing the code or the design. Concrete things this usually means:

- form fields have visible labels, inline validation timing, clear error recovery and a sensible autofocus,
- destructive actions confirm or allow undo,
- loading, empty, error and success states exist for every async surface,
- keyboard reachability and focus order for anything interactive,
- the primary action is visually and positionally primary, and there is only one of it per view,
- tables have a defined sort/filter/empty/overflow behavior before styling starts.

When a practice has a `Verify:` line, check the result against it before finishing.

If the user's request conflicts with a score-5 practice, do not silently comply and do not silently override. Say which practice conflicts, propose the compliant version, and let them choose. Record the outcome as an exception if they keep their version.

### 5. Record the decisions

Append to `design-decisions.md`:

```
## <date> — <screen or feature>
Context: <one line from step 2>
Applied: UX-118 Inline validation on blur (fields with format rules), UX-204 …
Skipped: UX-213 Progressive disclosure for optional fields — all 6 fields are required here
Exceptions (user decision): UX-199 Undo for destructive actions — compliance requires hard delete; mitigated with a typed confirmation
Open: UX-275 Skeleton screens — pending data on real latency
Library proposals: <pattern that was needed and not found>, or none
```

Keep all six lines, writing `none` when one is empty, so later reads can parse the entry. If the user wants a proposal to enter the library, add `library/<category-slug>/<ID>-<slug>.md` in the kit (copy a neighbouring file; `python3 scripts/build_skills.py` prints the next free ID) with `status: "Proposed"`, which keeps it out of the build until it is reviewed. Keep it short. The file is read on every future build and review, so entries that restate the practice text waste context.

### 6. Report

Start with one line stating how many practices were shortlisted and from which categories. Then tell the user what was applied in two or three sentences, with IDs, and what they should decide (conflicts, exceptions, open items). Do not list every practice in prose; the file has the list.

## Things that go wrong

- Loading ten index files "to be safe". Pick categories deliberately; the baseline set plus two or three specific ones covers almost any screen.
- Building from a single practice. A shortlist of one ID means the baseline categories were skipped; even an empty state or a confirmation dialog touches status visibility, accessibility and the primary action.
- Citing from the index without opening the reference. The index line is a label; the steps are in the reference.
- Treating a bias entry as a growth hack. See the responsible-use rule in `ux-library/SKILL.md`.
- Re-proposing an exception the project already closed. Read `design-decisions.md` first, every time.
- Writing the decision log as a tutorial. IDs, one-line reasons, done.
