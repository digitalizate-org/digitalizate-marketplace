---
name: ux-enrich
description: Propose the three agent-facing fields most practices are missing — a yes/no verification criterion (verify), the cheapest way to check it (verifiable_by: lint, test, visual, judgment) and a one-line anti-pattern — one category at a time, written into the front matter of each file in library/ so the user reviews them in the git diff before committing. Use it when the user asks to enrich, annotate, add verification criteria, make the library checkable, or prepare the ux-review for automation, or invokes /ux-enrich <category> [--min-score N].
---

# ux-enrich

Why this exists: without a verification criterion, a reviewer recites the practice instead of checking it. The three fields turn each entry into something `ux-review` can grade and, for a subset, something a linter or test can enforce.

The user reviews every proposal in the git diff. Nothing is committed without that review. Run this skill from the plugin directory (`plugins/digitalizate-design-practices/` in the repository) with the plugin loaded from another path (see `ux-sync`): it writes into `library/`.

## Inputs

- A category (slug or name). One category per run; for the biggest ones (Human Biases in Interfaces, Gestalt Principles, Agentic Patterns) work in batches of 20-30 files.
- `--min-score` (default 4). Start with 5 and 4; scores 3 and below only when the user asks.

## Procedure

1. List the files in `library/<category-slug>/` whose front matter has `score` ≥ min-score and no `verify` field. For each, read `context`, **How to implement** and **Why**.
2. Write the three fields:
   - `verify`: one sentence, answerable yes/no by looking at the screen or the code. Prefer observable facts over intentions. Good: "Every required field shows its error message directly below the field within 500 ms of blur." Bad: "Validation is user-friendly."
   - `verifiable_by`: one of `lint` (a static rule can catch it, name the rule if one exists, e.g. jsx-a11y/label-has-associated-control), `test` (a unit/e2e/axe check can assert it), `visual` (needs a human or a screenshot but no judgment), `judgment` (needs context about users or business).
   - `anti_pattern`: one line describing the common wrong implementation, as it appears in real code or screens.
3. Add the fields to the front matter of each file, right after `tags`, as one-line double-quoted strings (`verify: "..."`, `verifiable_by: "test"`, `anti_pattern: "..."`). Do not touch the body or any other field.
4. Show the user a compact table (ID, verify, verifiable_by) and tell them to review with `git diff library/<category-slug>/`. Mention any entry whose title and body disagree, or any two entries that contradict each other; do not resolve those yourself.
5. Once the user is satisfied, run `/ux-sync` (or `python3 scripts/build_skills.py --clean`) so the `Verify:`, `Verifiable by:` and `Anti-pattern:` lines reach `references/`, and let them commit `library/` and `skills/` together.

## Quality bar

- A `verify` sentence that could be true of a screen that violates the practice is wrong. Test it mentally against the anti-pattern: the anti-pattern must fail the criterion.
- Do not propose `lint` unless a real rule exists or could be written against the AST; most layout and content practices are `visual` or `judgment`.
- The library is in English, so write English.
- Batch size: 20-30 entries per response, then pause for review. Larger batches get skimmed.
