# design-and-users (references)

Each entry is the full text of its library file. Cite by ID.

## LM-080 Designers and engineers work in the same project

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: staffing user-facing work, or when design happens in a separate tracker or team
Verify: User-facing projects have a designer among members and design issues live in the same project as implementation issues
Sources: Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10); Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/design-and-users/LM-080-design-and-engineering-in-the-same-project.md

### Why

"Designers and engineers should work together on projects." At Linear "there's always a designer on the team for any user-facing features"; projects are shared between the design and engineering teams, and sub-issues separate design from implementation. No handoff means no gate where context is lost.

### Do

- Add the designer to the project at creation.
- Design issues and implementation issues in the same project; implementation as sub-issues of the design issue when sequencing matters.
- Feedback in comments, not in a review meeting.

### Anti-pattern

Design in Figma and a separate board, "handed off" when finished.

### Fix

Move design tasks into the project; share the exploration early.

### Evidence

- Linear's product team: two designers for 20-25 engineers, with engineers taking many design decisions (Nan Yu, The Glimpse). Linear-internal.

## LM-081 Start UI projects with "Explore design" and share early

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: a project touches the interface
Verify: UI projects begin with an "Explore design" issue (one day to one week), and exploration is shared before it is finished
Sources: Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10)
File: library/design-and-users/LM-081-start-with-explore-design.md

### Why

Karri Saarinen's process: verify the problem ("Users will ask you to build a specific feature X to fix their problem Y"), explore without judging in an "Explore design" issue, ask for feedback alternating overview and detail, then turn the chosen direction into concrete design tasks and implementation sub-issues. Sharing early prevents the five-finished-screens handoff.

### Do

- First issue: "Explore design", time-boxed.
- Share by day two even if half done; ask for feedback on direction, then on detail.
- Create "Design X view" tasks once the direction is chosen; implementation as sub-issues.

### Anti-pattern

A designer who delivers polished screens before anyone has seen a sketch.

### Fix

Rule: exploration is shared on day two.

### Evidence

- Process as described on the method page. Official-method.

## LM-082 Asynchronous design feedback instead of formal reviews

Kind: practice · Score: 3 · Tier: linear-internal · Verifiable by: judgment
Use when: a team schedules weekly design reviews, or design feedback arrives too late
Verify: Design feedback happens in issue comments and chat threads during the project; no mandatory review meeting gates implementation
Sources: Lenny's Newsletter, How Linear builds product (https://www.lennysnewsletter.com/p/how-linear-builds-product, 2023-09-26); Linear Method, Manage design projects (https://linear.app/method/manage-design-projects, 2026-10)
File: library/design-and-users/LM-082-async-design-feedback.md

### Why

"We don't have formal product or design reviews." Linear pastes screens into issue comments mentioning the people whose feedback is wanted, uses async Slack feedback, and tests internally behind feature flags within days. Reviews as gates slow the loop the method depends on.

### Do

- Paste the design in the issue, mention who should react.
- Test internally with feature flags instead of sign-off meetings.
- Sponsors review every week or two by reading updates.

### Anti-pattern

A weekly design review that delays implementation by a week.

### Fix

Cancel the meeting; keep the comment thread.

### Evidence

- Linear practice (Lenny's Newsletter, Sep 2023). Linear-internal.

## LM-083 Ask for the problem behind every request

Kind: practice · Score: 5 · Tier: official-method · Verifiable by: judgment
Use when: triaging requests, writing specs, talking to users
Verify: Accepted requests record the underlying problem (what the user was trying to do), not only the requested feature
Sources: Linear Method, Build with users (https://linear.app/method/build-with-users, 2026-10)
File: library/design-and-users/LM-083-ask-for-the-problem.md

### Why

"Too vision-based products might miss user and market needs while too reactive products become Frankenstein creations." The question is "what is the problem they're trying to solve"; the feature a user proposes is one possible answer, and often not the best one.

### Do

- In triage and in the spec, write the problem in the user's terms.
- Filter feedback by audience: listening to users outside the target "will likely set you on the wrong path".
- Decide the solution inside the project, not in the request.

### Anti-pattern

Specs that restate the feature request as the goal.

### Fix

Add the problem line to the spec's Why; move the proposed solution to How as one option.

### Evidence

- Rule from the method page. Official-method.

## LM-084 Attach customer requests to issues; don't let feedback alone dictate the roadmap

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: handling feedback from support, sales or community
Verify: Requests are stored as Customer Requests linked to issues or projects, and prioritization combines request count with the initiatives, never request count alone
Sources: Linear Method, Build with users (https://linear.app/method/build-with-users, 2026-10); Linear docs, Customer requests (https://linear.app/docs/customer-requests, 2026-10)
File: library/design-and-users/LM-084-attach-requests-dont-let-feedback-dictate.md

### Why

"Don't let user feedback alone dictate what you build"; strategic initiatives keep the direction. "Attach requests and feedback to the relevant issue" so evidence accumulates where decisions are made and reporters can be told when it ships.

### Do

- Every request becomes a Customer Request on an issue or project.
- Rank candidates with request count and impact, inside the initiatives.
- Close the loop when the fix ships.

### Anti-pattern

Feedback in spreadsheets, and a roadmap that is the sorted spreadsheet.

### Fix

Move feedback into Customer Requests; let initiatives set direction.

### Evidence

- Linear's continuous planning ranks candidate projects by request count and revenue impact (Nan Yu, Oct 2025). Linear-internal.
- Retool's workflow turns customer feedback into engineering work via attached feedback (customer story, 2019). Interested source.

## LM-085 Launch and keep launching

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: a team waits for "the launch", or ships rarely
Verify: Something user-visible ships at least every cycle; projects launch per milestone rather than waiting for the whole
Sources: Linear Method, Launch and keep launching (https://linear.app/method/launching, 2026-10); Linear changelog, Releases (https://linear.app/changelog/2026-04-30-releases, 2026-04-30)
File: library/design-and-users/LM-085-launch-and-keep-launching.md

### Why

"There is a false belief there needs to be a singular moment for launch." Linear launched at the company announcement, at the seed round, at public availability and at Series A: "Had we only launched once, it would have taken us 1.5 years to get to this state."

### Do

- Ship each milestone; announce it.
- Use Releases or the changelog to record what went out.
- Treat beta programs as early launches, not gates.

### Anti-pattern

A six-month project with nothing shipped until the end.

### Fix

Cut a first milestone that ships this cycle.

### Evidence

- Method page above. Official-method.

## LM-086 Keep a changelog and build in public

Kind: practice · Score: 4 · Tier: official-method · Verifiable by: judgment
Use when: setting rituals for a team or a product with users
Verify: A changelog entry exists for every week (or every cycle) in which something shipped
Sources: Linear Method, Build in public (https://linear.app/method/build-in-public, 2026-10); Linear Method, Principles & Practices (https://linear.app/method/introduction, 2026-10)
File: library/design-and-users/LM-086-changelog-and-build-in-public.md

### Why

The changelog "reminds you every week what happened"; users see the product improving and investors see progress. "It might feel dangerous to show what you're building but often it's more useful." Linear has published a changelog weekly since its start; it is written from completed work, not from a feature in the app.

### Do

- Write the changelog from completed issues and projects at cycle close.
- Publish what you are working on and what is next, without dates, when you want outside feedback.

### Anti-pattern

Shipping silently; users discover features by accident.

### Fix

Start the weekly entry this Friday.

### Evidence

- Documenso kept a public "what we are working on and what's next" after leaving Linear for GitHub (blog, Jan 2024). Independent company blog.

