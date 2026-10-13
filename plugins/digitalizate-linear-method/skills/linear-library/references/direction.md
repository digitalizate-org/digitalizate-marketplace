# direction (references)

Each entry is the full text of its library file. Cite by ID.

## LM-010 Set strategic initiatives that articulate the vision

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: query
Use when: starting a workspace, a quarter, or a planning cycle; whenever projects exist with no stated purpose above them
Verify: One to four active initiatives exist, each with an owner, a target date and a description that states an outcome rather than a feature list
Measured by: LM-108, LM-119, LM-120
Sources: Linear Method, Set the product direction (https://linear.app/method/product-direction, 2026-10); Linear changelog, Introducing Initiatives (https://linear.app/changelog/2024-06-25-introducing-initiatives, 2024-06-25)
File: library/direction/LM-010-set-strategic-initiatives.md

### Why

"Setting direction is one of the most important things you'll do." Creating initiatives forces the team to "articulate a vision and decide how to build toward it". Since June 2024 Initiatives replace Roadmaps in Linear and group projects around a goal with their own owner, health and updates.

### Do

- Write each initiative as an outcome ("First-week activation") with a short description of why it matters.
- Give it an owner and a target date; keep the count small (one to four active).
- Attach every strategic project to one initiative; leave bugs and maintenance outside or under an explicit maintenance initiative.
- Review initiatives on a monthly or quarterly cadence and write initiative updates.

### Anti-pattern

Initiatives that are feature lists ("Q3: SSO, export, dark mode"), or a dozen initiatives nobody owns.

### Fix

Rewrite each initiative as an outcome, merge or cancel the rest, assign an owner.

### Evidence

- Linear plans direction for 12 months, a semester roadmap, and detail "for two quarters, then sketch out the next half" (Lenny's Newsletter, Sep 2023). Linear-internal.
- Langfuse keeps initiatives "Rare" and uses them for strategic grouping only (Langfuse handbook, 2026). Independent company docs.

## LM-011 Keep the plan slightly out of reach and reserve space for unplanned work

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: filling a quarter or a cycle, or deciding how much capacity to commit to planned projects
Verify: Planned project work occupies well under full capacity, and the plan is ambitious enough that not everything will ship
Sources: Linear Method, Set the product direction (https://linear.app/method/product-direction, 2026-10); Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/direction/LM-011-roadmap-slightly-out-of-reach.md

### Why

Linear's plan should be "slightly in front of you, and ideally a bit out of reach", and the method says to "Reserve some space on your product timelines for unplanned work". Ambition without slack produces missed dates; slack without ambition produces drift.

### Do

- Reserve capacity for bugs, requests and tooling (Linear's own roadmap had a "keep-the-lights-on" workstream and a "high-priority user asks" workstream).
- Accept that the plan changes; replan at initiative reviews rather than mid-cycle.
- Plan cycles from last cycle's completed count, not from wishes.

### Anti-pattern

Quarters planned at 100% of capacity with no room for feedback or incidents.

### Fix

Cut planned project scope until 20-30% of capacity is free; put that in writing in `linear-decisions.md`.

### Evidence

- Linear's early roadmap "shouldn't take up 100% of the time" to leave room for fixes and feedback (Karri Saarinen, Building at the early stage, Jan 2021). Linear-internal.
- Retool reserves a weekly quality slot per engineer instead of planning it away (Linear customer story, 2019). Interested source.

## LM-012 Set useful goals, not goal machinery

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: defining what an initiative or a quarter should achieve, especially without data
Verify: Each initiative states one measurable progress goal or an explicit outcome; no per-project metric targets exist
Sources: Linear Method, Set useful goals (https://linear.app/method/set-useful-goals, 2026-10); Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26)
File: library/direction/LM-012-set-useful-goals.md

### Why

Without data, "create a goal that propels you forward in some measurable way": find 10 users, then 100, then $1000 MRR. Linear itself runs one company North Star and no per-project metric goals; Nan Yu warns that companies "get into trouble if they try to be too goal driven".

### Do

- Write goals as progress steps the team can feel ("five customers using it weekly").
- Keep one company-level metric; use initiatives for direction, not OKR trees.
- Post-launch, watch the metric that motivated the project; do not gate projects on metric targets.

### Anti-pattern

OKRs per team and per project, key results that nobody can move in a cycle, metrics used to judge individual projects.

### Fix

Collapse to one North Star plus outcome-phrased initiatives; measure after launch.

### Evidence

- "We haven't used OKRs... we don't have metrics goals for the product or any projects" and no A/B tests (Lenny's Newsletter, Sep 2023). Linear-internal.
- Opendoor keeps PMs and follows metrics after launch while adopting the method (Linear customer story, Dec 2025). Interested source.

## LM-013 Prioritize enablers and blockers

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: ranking candidate projects or triaging a request
Verify: Each candidate project is labeled as an enabler (new value) or a blocker removal (friction that stops use), and the ranking reflects that
Sources: Linear Method, Prioritize enablers and blockers (https://linear.app/method/prioritize-enablers-and-blockers, 2026-10)
File: library/direction/LM-013-prioritize-enablers-and-blockers.md

### Why

Enablers add functionality that makes the product more valuable; blockers are "gaps or friction that prevents a user/customer to use your product". Asking which of the two a request is, and whether it matters this week or month, cuts most prioritization debates short.

### Do

- For each candidate, write one line: enabler or blocker, and for whom.
- Ask "what is the problem they're trying to solve" before accepting the proposed feature.
- Prefer the smallest version that removes the blocker; Linear launched its beta with Google login only.

### Anti-pattern

Ranking by who asked loudest, or by estimated effort alone.

### Fix

Add the enabler/blocker line to the project spec's "Why" section.

### Evidence

- Cursor keeps a dedicated view of release blockers separate from everything incoming (Linear customer story, Feb 2026). Interested source.
- Linear's continuous planning ranks candidate projects by number of customer requests and revenue impact (Nan Yu, Continuous planning in Linear, Oct 2025). Linear-internal.

## LM-014 Prioritize what moves the needle this week or month

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: planning a cycle or deciding between two projects of similar value
Verify: The active cycle contains work whose effect is visible within the cycle or the month; long-horizon work is staged into milestones that also ship soon
Sources: Linear Method, Prioritize enablers and blockers (https://linear.app/method/prioritize-enablers-and-blockers, 2026-10)
File: library/direction/LM-014-move-the-needle-this-week.md

### Why

"Prioritize things that help you move the needle this week or month." Linear also asks whether a change has compounding effects or adds complexity and cost. Near-term, compounding wins beat distant bets when the team is small.

### Do

- Ask of each cycle item: what changes for users or the team by the end of this cycle?
- Stage long work so that something ships each cycle.
- Watch for complexity that will be paid for every week after.

### Anti-pattern

Cycles filled with foundation work whose effect arrives in a quarter, while blockers wait.

### Fix

Pull one blocker removal and one enabler into every cycle; stage the foundation.

### Evidence

- Linear's weekly early-stage goal was to "figure out what was blocking us the most from getting more users" (Building at the early stage, Jan 2021). Linear-internal.

## LM-015 Plan continuously from candidate projects

Kind: practice · Score: 4 · Tier: linear-internal · Verifiable by: query
Use when: a quarter or cycle starts with an empty page, or requests accumulate with no path into the plan
Verify: A list of candidate projects exists (backlog-status projects with a one-line why), sorted by request count or impact, and cycles pull from it
Measured by: LM-108
Sources: Linear, Continuous planning in Linear (Nan Yu) (https://linear.app/now/continuous-planning-in-linear, 2025-10-30); Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26)
File: library/direction/LM-015-continuous-planning-from-requests.md

### Why

Linear groups incoming requests into "candidate projects", ranks them by number of customer requests and revenue impact, and gives them quarterly priority. "Projects are the universal vocabulary." Planning then becomes sequencing an existing list instead of inventing one.

### Do

- Create candidate projects in a backlog project status (Idea, Proposal) with a one-line why and the requests attached.
- Rank with Customer Requests count and impact; set project priority quarterly.
- Pull from the list when planning cycles; close candidates nobody picks for two quarters.

### Anti-pattern

A planning meeting that starts from a blank document while requests pile up in Slack.

### Fix

Convert recurring requests into candidate projects and attach the requests.

### Evidence

- Linear keeps "a pretty extensive backlog to pull from" of project candidates while keeping issue backlogs short (Lenny's Newsletter, Sep 2023). Linear-internal.
- Retool turns customer feedback into a standing Quality project that engineers pull from weekly (Linear customer story, 2019). Interested source.

## LM-016 One roadmap for the product

Kind: practice · Score: 4 · Tier: linear-internal · Verifiable by: judgment
Use when: several teams or product areas keep separate plans, or leadership cannot see the whole product in one place
Verify: Every active initiative and project is visible in one workspace-level timeline; no team keeps a parallel roadmap in another tool
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear customer story, Brex (https://linear.app/customers/brex, 2024)
File: library/direction/LM-016-single-roadmap.md

### Why

Linear runs "a single roadmap for the entire product". Separate roadmaps per team hide dependencies and make sequencing a negotiation. One list makes priority a shared fact.

### Do

- Use Initiatives and the workspace timeline as the only roadmap.
- Keep long-range ideas in a backlog initiative or document, not in a second tool.
- When a team needs its own view, create a saved view, not a separate plan.

### Anti-pattern

Roadmaps in slides, sheets and Notion that disagree with Linear.

### Fix

Pick Linear as the source, delete or freeze the others, link them from the initiative if they hold context.

### Evidence

- Brex: "We're trying to move away from dozens of product teams with their own roadmaps, to one central company roadmap" (Linear customer story, 2024). Interested source.
- Automattic: "For the first time ever we have a singular, unified roadmap" (Lance Willett, quoted on Linear's planning page). Interested source.

## LM-017 Review initiatives and target dates on a cadence

Kind: practice · Score: 3 · Tier: official-docs · Verifiable by: query
Use when: setting up planning rituals for a team with more than one initiative
Verify: Each active initiative has an update within the last 30 days and a review meeting or async review at least monthly
Measured by: LM-132
Sources: Linear docs, Initiative and project updates (https://linear.app/docs/initiative-and-project-updates, 2026-10); Linear changelog, Initiative updates (https://linear.app/changelog/2025-02-13-initiative-updates, 2025-02-13)
File: library/direction/LM-017-review-initiatives-on-cadence.md

### Why

Initiatives drift unless someone reads them. Linear's docs suggest reviewing projects and their target dates during initiative meetings, and initiative updates (Feb 2025) carry health and the changes since the last update so the review has something to read.

### Do

- Monthly (or quarterly for small teams): read each initiative's update, confirm or move target dates, close what is done.
- Keep the meeting under an hour by reading updates beforehand.
- Record date changes in the initiative update, not in chat.

### Anti-pattern

Initiatives with target dates from last year and no update since creation.

### Fix

Schedule the review, write the first initiative update, re-date or cancel.

### Evidence

- Sierra syndicates project updates to a channel the founders read every Friday, replacing per-person updates (Linear customer story, Apr 2025). Interested source.

