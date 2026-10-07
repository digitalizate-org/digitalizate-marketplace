---
name: ux-enrich
description: Propose the three agent-facing fields the Notion library is missing for each practice — a yes/no verification criterion ("How to Verify"), the cheapest way to check it ("Verifiable By": lint, test, visual, judgment) and a one-line anti-pattern — one category at a time, written to data/enrichment/<category>.json for human review before anything is pushed to Notion. Use it when the user asks to enrich, annotate, add verification criteria, make the library checkable, or prepare the ux-review for automation, or invokes /ux-enrich <category> [--min-score N].
---

# ux-enrich

Why this exists: without a verification criterion, a reviewer recites the practice instead of checking it. The three fields turn each entry into something `ux-review` can grade and, for a subset, something a linter or test can enforce.

The user reviews every proposal. Nothing goes to Notion without that review (see `ux-sync`, step 7).

## Inputs

- A category (slug or Notion name). One category per run; the biggest ones (Human Biases in Interfaces, Gestalt Principles) are split into `part-N.md` files, and Agentic Patterns by subcategory, so run those per file.
- `--min-score` (default 4). Start with 5 and 4; scores 3 and below only when the user asks.

## Procedure

1. Open `skills/ux-library/references/<category>.md` (or the subcategory or part file the category index points to). For each entry with score ≥ min-score and no existing `Verify:` line, read **Do.** and `Use when`.
2. Write the three fields:
   - `verify`: one sentence, answerable yes/no by looking at the screen or the code. Prefer observable facts over intentions. Good: "Every required field shows its error message directly below the field within 500 ms of blur." Bad: "Validation is user-friendly."
   - `verifiable_by`: one of `lint` (a static rule can catch it, name the rule if one exists, e.g. jsx-a11y/label-has-associated-control), `test` (a unit/e2e/axe check can assert it), `visual` (needs a human or a screenshot but no judgment), `judgment` (needs context about users or business).
   - `anti_pattern`: one line describing the common wrong implementation, as it appears in real code or screens.
3. Save to `data/enrichment/<category-slug>.json` in the kit checkout (run this skill from the kit's root directory). If Claude Code blocks the write because that same directory is loaded as the active plugin, save to `./ux-enrichment/<category-slug>.json` instead and tell the user to move it into `data/enrichment/`; never drop the proposals. The file is a list:
   ```json
   [{"page_id": "...", "id": "UX-118", "title": "...", "verify": "...", "verifiable_by": "lint", "anti_pattern": "..."}]
   ```
   Keep `page_id` from the reference's Notion link (the UUID at the end of the URL) so the push is exact.
4. Show the user a compact table (ID, verify, verifiable_by) and ask them to edit the JSON or approve.
5. Once approved, `python scripts/build_skills.py` merges the fields into the references immediately (Notion fields win when they exist). To push to Notion, the user first creates the properties `How to Verify` (text), `Verifiable By` (select: lint, test, visual, judgment) and `Anti-pattern` (text), then runs `python scripts/push_notion.py --updates data/enrichment/<category>.json --apply` after converting rows to `{page_id, properties}` form (the script accepts that shape; a helper for the conversion is a two-line jq or Python call, write it when needed).

## Quality bar

- A `verify` sentence that could be true of a screen that violates the practice is wrong. Test it mentally against the anti-pattern: the anti-pattern must fail the criterion.
- Do not propose `lint` unless a real rule exists or could be written against the AST; most layout and content practices are `visual` or `judgment`.
- Keep the user's language for the fields only if the library is in that language; this library is in English, so write English.
- Batch size: 20-30 entries per response, then pause for review. Larger batches get skimmed.
