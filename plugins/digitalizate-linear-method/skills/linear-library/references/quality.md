# quality (references)

Each entry is the full text of its library file. Cite by ID.

## LM-060 Mix bugs and quality work into every cycle

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: planning any cycle; auditing a team whose cycles contain only features
Verify: Every completed cycle contains bug or quality issues; the share is never zero
Measured by: LM-106
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10); Linear customer story, Retool (https://linear.app/customers/retool, 2019)
File: library/quality/LM-060-mix-bugs-and-quality-into-every-cycle.md

### Why

"Include bugs and other fixes as part of your cycles." Software always has more bugs than the team can fix; ignored bugs "can create enough friction that slows down your growth". Quality work planned into every cycle stays small; quality work deferred becomes a project.

### Do

- Reserve 20-30% of each cycle for bugs, fixes and tooling.
- The goalie fixes small bugs during the week.
- Count bugs completed per cycle; zero is a finding.

### Anti-pattern

Feature-only cycles with a "bug bash" planned "later".

### Fix

Pull bugs into the current cycle now; make the 20-30% a written rule.

### Evidence

- Retool: "every engineer on the team is taking one roughly four-hour task every week that improves the quality of Retool" (Linear customer story, 2019). Interested source.
- Linear's zero-bugs policy started with three weeks of nothing but bug fixing (Artman & Roman, Sep 2025). Linear-internal.

## LM-061 Fix bugs on a deadline or declare won't fix; no bug backlog

Kind: practice · Score: 4 · Tier: linear-internal · Verifiable by: query
Use when: bugs accumulate in the backlog, or the team debates which bugs deserve attention
Verify: Accepted bugs have a resolution deadline (for example 48 hours for high priority, 7 days otherwise) and no bug sits in backlog; the alternative outcome is an explicit won't fix
Measured by: LM-106
Sources: Linear, Why we committed to a zero-bugs policy (Artman & Roman) (https://linear.app/now/why-we-committed-to-a-zero-bugs-policy, 2025-09-24)
File: library/quality/LM-061-fix-bugs-on-sla-or-wont-fix.md

### Why

Linear's rule: whoever receives a bug fixes it or marks it "won't fix"; sending it to the backlog is not an option. They started with "about 175 open bugs... three weeks to fix them all" and now fix on 48-hour and 7-day deadlines, with a weekly dashboard; "Last year we fixed more than 2,000."

### Do

- Two deadlines: high priority within 48 hours, the rest within 7 days (adjust in `linear-decisions.md`).
- Decline with "won't fix" and a reason when the bug is not worth it.
- Review the deadline dashboard weekly.

### Anti-pattern

A "bugs" backlog of 300 items ranked but never scheduled.

### Fix

One bug-fixing period to clear the debt, then the deadline rule.

### Evidence

- The policy post above. Linear-internal, interested source. Scale AI reports a 52% faster bug resolution after adopting triage with SLAs, with ambiguous scope (Linear customer story, May 2024).

## LM-062 Invest in tooling as a force multiplier

Kind: practice · Score: 3 · Tier: official-method · Verifiable by: judgment
Use when: planning quality capacity, or when the same manual step slows every project
Verify: Each quarter includes at least one tooling or developer-experience project or issue group with a named lead
Sources: Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/quality/LM-062-invest-in-tooling.md

### Why

"Invest in tooling as it is a force multiplier." Tooling is the quality work with compounding returns: a faster test suite or a one-command deploy pays every cycle after.

### Do

- Keep tooling issues under the Chore label and inside the quality share of each cycle.
- Use cooldown weeks for larger tooling work.
- Name a lead for any tooling project; it is a project like any other.

### Anti-pattern

Tooling that only happens when something breaks.

### Fix

Add one tooling item to the next cycle; schedule the larger one as a project.

### Evidence

- Rule from the method page. Official-method.

## LM-063 Give every engineer a small weekly quality slot

Kind: practice · Score: 3 · Tier: evidence · Verifiable by: query
Use when: quality work never gets picked up because projects always win
Verify: Each engineer completes at least one quality item per week, pulled from a standing list fed by customer feedback
Measured by: LM-106
Sources: Linear customer story, Retool (https://linear.app/customers/retool, 2019); Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26)
File: library/quality/LM-063-weekly-quality-slot.md

### Why

A fixed small slot beats a large occasional push: it keeps quality in the weekly rhythm and keeps engineers close to what users hit.

### Do

- A standing pull list (Retool's "Quality" project) fed by customer feedback.
- One item, roughly four hours, per engineer per week.
- The goalie rotation at Linear plays the same role.

### Anti-pattern

Quality as a quarterly initiative that competes with features and loses.

### Fix

Create the pull list and the weekly habit.

### Evidence

- Retool's practice as described in its customer story (2019). Interested source.

