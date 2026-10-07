# Product Strategy (19)

## UX-304 — Tesler's Law — Absorb Complexity Into the System
- Score 5 · Product Strategy / Complexity management and simplification
- Goals: Present & Defend Design Decisions; Simplify a Cluttered Interface; Design for Enterprise & B2B Scale
- Use when: Apply when simplifying a feature — data import/export flows, report configuration, permission systems, workflow builders, formula editors. Complexity can be shifted but not eliminated.

**Why.** For any system, there is a certain amount of complexity that cannot be reduced — it can only be shifted between the user and the system. The designer's job is to absorb as much complexity as possible into the system so users don't have to deal with it. Auto-detecting date formats, auto-mapping CSV columns, and providing intelligent defaults are all examples of the system absorbing complexity. However, trying to simplify beyond the essential complexity of a domain will confuse advanced users or break edge cases — accept irreducible complexity and expose it gracefully.

**Do.**
- Absorb complexity into the system: auto-detect date formats, auto-map CSV columns, provide smart defaults based on context.
- Provide two modes: "Simple" with sensible defaults for most users, and "Advanced" exposing full complexity for power users.
- Use contextual tooltips and inline help to navigate unavoidable complexity rather than hiding it.
- Don't over-simplify complex permission models or workflow builders — advanced users need the full model exposed cleanly.
- Document irreducible complexity clearly rather than apologizing for it.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Training time; Adoption & Retention: Signup completion rate, Renewed subscriptions; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare task completion time and error rate before and after absorbing complexity into the system (e.g., smart defaults, automatic formatting); track support ticket volume and onboarding completion rates as indicators of reduced user-side complexity burden.

Sources: [Laws of UX — Tesler's Law](https://lawsofux.com/teslers-law/)
Wireframe: https://files.catbox.moe/ct8tb1.jpg
File: library/product-strategy/UX-304-tesler-s-law-absorb-complexity-into-the-system.md

## UX-305 — Pareto Principle — Prioritize the 20% Used 80% of the Time
- Score 5 · Product Strategy / Feature prioritization and surface hierarchy
- Tags: dashboard
- Goals: Present & Defend Design Decisions
- Use when: Apply to feature prioritization, UX audit triage, navigation design, performance optimization, and test coverage planning for any enterprise application.

**Why.** Roughly 80% of usage comes from 20% of features. In enterprise tools, this means a small fraction of features drive the vast majority of daily interactions — those features must be ruthlessly optimized and prominently surfaced. Treating all features equally in the navigation hierarchy, the toolbar, and the design review backlog is a waste of design investment. Usage telemetry should drive the identification of this critical 20%, not assumptions.

**Do.**
- Analyze usage telemetry to identify the 20% of features used 80% of the time — optimize these paths relentlessly.
- Surface the most-used 20% in the primary UI (toolbar, top nav, quick actions) and move the rest to secondary menus.
- Prioritize usability testing on the top 20% of flows — these affect the most users.
- In performance optimization, profile to find the 20% of operations causing 80% of latency.
- For design debt: fix the most-used 20% of broken patterns first regardless of their visual prominence.

**Measure.** Efficiency: Time on task, Time saved per task, Training time; Effectiveness: Task success rate, Completion rate; Adoption & Retention: Feature usage, Returning visitors; How to measure: Analyze feature usage data to identify the top 20% of most-used features, then measure task completion time and error rate for those tasks after they are elevated in the UI. Track support ticket volume for deprioritized features to confirm that reducing their prominence does not create new issues.

Sources: [Laws of UX — Pareto Principle](https://lawsofux.com/pareto-principle/)
Wireframe: https://files.catbox.moe/13ahjk.jpg
File: library/product-strategy/UX-305-pareto-principle-prioritize-the-20-used-80-of-the-time.md

## UX-306 — Appetite Setting — Time Budget Before Solution Design
- Score 5 · Product Strategy / Product Planning
- Goals: Present & Defend Design Decisions
- Use when: Use at the beginning of any new feature or initiative, before any wireframing or technical scoping begins.

**Why.** Begin feature design by deciding how much time a problem is worth solving — the "appetite" — rather than estimating how long a solution will take. This reverses conventional planning logic: instead of building what users want and hoping it fits the timeline, you decide the budget first and design a solution that fits within it. For complex enterprise features, appetite setting forces explicit trade-offs upfront rather than discovering scope creep mid-build when switching costs are highest. The appetite is a constraint that shapes the solution, not a prediction.

**Do.**
- Define appetite as "small batch" (1–2 weeks) or "big batch" (up to 6 weeks) before any design work begins.
- Ask: "How much is it worth investing in this?" not "How long will it take?" Design the solution to fit the appetite.
- If the simplest viable solution requires more time than the appetite allows, question whether a reduced-scope version is acceptable or whether the problem should be deferred.
- Document appetite explicitly in the feature brief.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time saved per task, Completion time; Satisfaction & Perception: Satisfaction rating, CSAT; How to measure: Compare feature delivery timelines and post-release usability benchmarks for projects scoped with appetite-setting versus unconstrained projects. Survey product teams and stakeholders on satisfaction with delivered scope and perceived quality against time invested.

Sources: [Shape Up by Ryan Singer, Ch. 2 (Basecamp, 2019)](https://basecamp.com/shapeup/1.1-chapter-02)
Wireframe: https://files.catbox.moe/kuql0q.jpg
File: library/product-strategy/UX-306-appetite-setting-time-budget-before-solution-design.md

## UX-307 — Identifying and Eliminating Rabbit Holes Before Building
- Score 5 · Product Strategy / Risk Management
- Goals: Present & Defend Design Decisions
- Use when: Use after sketching a solution but before committing to building it — and during design reviews for any feature containing novel technical or design elements.

**Why.** Before committing to a shaped design, walk through use cases in "slow motion" to reveal unresolved design decisions, technical unknowns, and hidden complexity that could multiply time beyond the intended appetite. Rabbit holes are problems that seem small but expand endlessly — undiscovered technical dependencies, design problems without obvious solutions, or decisions that require infrastructure that doesn't yet exist. Finding a showstopper in week 5 of 6 is catastrophic; finding it before committing to build provides enough time to reshape or descope.

**Do.**
For each key use case in the design, ask: Does this require technical work we've never done? Are we assuming parts will fit together without validating? Are there design decisions that need to be settled in advance (which we haven't settled)? For each rabbit hole identified: (1) Solve it now (design or research the solution), (2) Patch it (choose a simpler approach that avoids the hole), or (3) Explicitly declare it out of scope for this cycle.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Completion time, Time saved per task; Satisfaction & Perception: CSAT, Satisfaction rating; How to measure: Track the number of design or development iterations required to resolve rabbit-hole issues discovered post-launch versus issues surfaced and resolved in planning. Compare task success rates and error rates in usability testing for features where rabbit holes were pre-identified and addressed during design.

Sources: [Shape Up by Ryan Singer, Ch. 5 (Basecamp, 2019)](https://basecamp.com/shapeup/1.4-chapter-05)
Wireframe: https://files.catbox.moe/wp2rj5.jpg
File: library/product-strategy/UX-307-identifying-and-eliminating-rabbit-holes-before-building.md

## UX-308 — Vertical Slicing — Get One Piece Done First
- Score 5 · Product Strategy / Development Process
- Goals: Present & Defend Design Decisions
- Use when: Use at the start of every building cycle to validate the overall approach and build team momentum early.

**Why.** In the first days of a building cycle, complete one fully integrated vertical slice of the product — front-end, back-end, and interaction — rather than building horizontal layers (all back-end first, then all front-end). A completed vertical slice creates something demoable and testable early, validates that the overall approach works, and builds team momentum. Horizontal layering produces a large volume of work with nothing "really done" until the last day, creating invisible risk and delayed feedback on whether the technical approach is sound.

**Do.**
- Before building anything, identify the one slice that is (1) core to the project's purpose, (2) completable end-to-end in 2–3 days, and (3) novel enough to validate the important unknowns.
- Build it completely — front-end, back-end, integration.
- Demo it internally.
- Use the feedback from this vertical slice to calibrate the team's understanding of the remaining work's complexity.
- Only then expand to secondary slices.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Completion time, Time saved per task; Satisfaction & Perception: Satisfaction rating, Confidence rating; How to measure: Compare usability test results and user satisfaction scores for features shipped via vertical slicing versus those shipped all at once; track the time from start to first usable feature delivery. Monitor abandonment and error rates on the initial vertical slice to validate the core experience before expanding.

Sources: [Shape Up by Ryan Singer, Ch. 11 (Basecamp, 2019)](https://basecamp.com/shapeup/3.2-chapter-11)
Wireframe: https://files.catbox.moe/74kqpr.jpg
File: library/product-strategy/UX-308-vertical-slicing-get-one-piece-done-first.md

## UX-309 — Jobs-to-Be-Done Framework
- Score 5 · Product Strategy / User Needs Framework
- Goals: Present & Defend Design Decisions
- Use when: Use during product discovery, feature prioritization, and any time the team is debating what to build next or when user feature requests seem disconnected from real needs.

**Why.** Frame product requirements around what users "hire" a product to do — the job they need accomplished in a specific context — rather than around features or user characteristics. JTBD shifts focus from "who the user is" to "what they're trying to accomplish and why." For enterprise software, JTBD surfaces that the real job often isn't "create a report" but "give my manager confidence that the numbers are correct" — a far richer design target that shapes not just the report feature but its sharing, annotation, and accuracy-signaling capabilities.

**Do.**
- For each significant user request, apply the JTBD format: "When [situation], I want to [motivation], so I can [expected outcome]." Identify functional, social, and emotional jobs separately — enterprise users have all three.
- Design solutions to satisfy the job, not just implement the requested feature.
- Conduct 30–60 minute JTBD interviews focused on the context and timeline of users' decisions, not their opinions about specific features.

**Measure.** Effectiveness: Task success rate, Completion rate; Adoption & Retention: Account creation rate, Returning visitors, Renewed subscriptions; Revenue: Conversion rate, Customer Lifetime Value (CLV); Satisfaction & Perception: CSAT, NPS; How to measure: Map product features to specific JTBD and track whether task success rates and conversion rates improve for user journeys redesigned around a job. Use NPS and CSAT surveys segmented by user job-to-be-done to verify that satisfaction is higher for cohorts whose primary job is well-supported.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/) · [UX Primer — JTBD in UX](https://articles.ux-primer.com/leveraging-jobs-to-be-done-in-ux-design-1dba556c1bbd)
Wireframe: https://files.catbox.moe/bh4da9.jpg
File: library/product-strategy/UX-309-jobs-to-be-done-framework.md

## UX-310 — Continuous Research Cadence
- Score 5 · Product Strategy / Research Operations
- Tags: search
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use when establishing product team norms, and when research is currently ad hoc or only done for major launches.

**Why.** Establish a lightweight continuous research practice — weekly or bi-weekly user interviews, monthly survey cadence, ongoing session recording review — rather than large periodic research projects. Continuous research provides a constant pulse on user needs and enables product decisions to be informed by fresh evidence rather than months-old findings. Even 2 user interviews per week at 30 minutes each — 4 hours of researcher time — provides dramatically better product decisions than no regular research. The cost of not doing continuous research is compounded by each poorly informed feature decision.

**Do.**
- Schedule standing research slots (e.g., Tuesday 10 AM = 2 user interviews, rotating topics each week).
- Build a participant recruitment pipeline with a standing list of willing research participants.
- Share 3-sentence research summaries in the weekly product team meeting.
- Maintain a living research repository (Notion, Confluence, Dovetail) that all team members can search and access.
- Rotate who observes research sessions to build empathy across the team.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Adoption & Retention: Returning visitors, Account creation rate; How to measure: Track product metrics week-over-week to detect regression or improvement correlated with research-driven design changes. Use a research operations log to tie specific findings to measurable metric shifts over each quarter.

Sources: [User Interviews — UX Research for PMs](https://www.userinterviews.com/blog/ux-research-for-product-managers)
Wireframe: https://files.catbox.moe/wcno9y.jpg
File: library/product-strategy/UX-310-continuous-research-cadence.md

## UX-311 — RICE Scoring for Feature Prioritization
- Score 5 · Product Strategy / Prioritization Frameworks
- Goals: Present & Defend Design Decisions
- Use when: Use when prioritizing competing feature investments and when stakeholder pressure is distorting prioritization toward high-visibility but low-impact work.

**Why.** Score feature candidates using RICE: Reach (how many users affected per period), Impact (how significantly per user, on a 0.25–3× multiplier scale), Confidence (how certain is the estimate, as a percentage), and Effort (person-weeks). Divide (Reach × Impact × Confidence) by Effort to get a RICE score. RICE provides a structured, defensible method for comparing disparate initiatives and reduces the influence of stakeholder opinion on prioritization decisions. It makes implicit trade-offs explicit and creates a common language for prioritization discussions.

**Do.**
- Create a RICE scoring spreadsheet for all candidate features.
- Define scales consistently: Impact multipliers 0.25 (minimal), 0.5 (low), 1 (medium), 2 (high), 3 (massive).
- Confidence percentages: 100% (known), 80% (confident), 50% (uncertain), 20% (speculative).
- Sort by RICE score.
- Use as the primary prioritization input, documenting explicit overrides for strategic reasons (market timing, partnership requirements) so all exceptions are transparent and auditable.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time saved per task; Adoption & Retention: Returning visitors, Account creation rate; Satisfaction & Perception: CSAT, NPS; How to measure: After prioritizing features with RICE scoring, compare the usability and adoption benchmarks of highly-scored features versus lower-scored ones to validate scoring criteria. Track overall product satisfaction (NPS, CSAT) across release cycles to assess whether RICE-prioritized roadmaps deliver higher user value per unit of development effort.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/sam14h.jpg
File: library/product-strategy/UX-311-rice-scoring-for-feature-prioritization.md

## UX-312 — MoSCoW Prioritization for Release Scoping
- Score 5 · Product Strategy / Scope Management
- Goals: Present & Defend Design Decisions
- Use when: Use when planning release scope and when stakeholders are escalating features to "must-have" status without justification.

**Why.** Categorize feature requirements as Must-Have (non-negotiable for release), Should-Have (important but a workaround exists), Could-Have (nice if time allows), and Won't-Have (explicitly excluded from this scope). MoSCoW creates a shared language for scope conversations with stakeholders and prevents the common failure mode where everything is labeled "critical" — making genuine priority invisible. The discipline of distinguishing Must-Haves from Should-Haves is where most of the value of MoSCoW lives.

**Do.**
- Apply MoSCoW at the start of each release planning cycle.
- Must-Haves should represent the minimum viable product — what would make the release not worth shipping without.
- Must-Haves should consume no more than 60% of available capacity, leaving room for Should-Haves and buffer for unexpected complexity.
- Force explicit justification for every Must-Have label.
- Document Won't-Haves as explicitly out of scope (not just unmentioned) to prevent scope creep from assumed inclusions.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time saved per task, Completion time; Satisfaction & Perception: CSAT, Satisfaction rating; How to measure: Compare task success rates and user satisfaction between releases scoped with MoSCoW versus unconstrained releases. Track post-launch support tickets and usability test error rates to confirm that must-have features are polished and functioning, validating the prioritization criteria.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/xg8k1e.jpg
File: library/product-strategy/UX-312-moscow-prioritization-for-release-scoping.md

## UX-313 — Merging Similar Functions — Reduce Feature Fragmentation
- Score 4 · Product Strategy / Feature rationalization
- Tags: enterprise, navigation
- Goals: Present & Defend Design Decisions
- Use when: Apply to mature enterprise products with feature sprawl — consolidate redundant filters, duplicate export options, overlapping report types, and redundant navigation taxonomy.

**Why.** Over time, interfaces accumulate duplicate functionality with different names — fragmentation that increases learning curves. "Reports" and "Analytics" coexisting as separate navigation items, or "Users" and "Members" as separate concepts, forces users to guess which one contains what they need. Regularly auditing and merging overlapping features into unified, clearly labeled controls reduces cognitive load and improves discoverability.

**Do.**
- Conduct a feature audit every major release cycle.
- If two features do the same thing with slight variations, merge them with a configuration option rather than maintaining two separate paths.
- In navigation, consolidate duplicate taxonomy: unify "Reports" + "Analytics," "Users" + "Members" if they overlap.
- Surface the configuration option that distinguishes them, not separate entry points.
- Track feature usage to identify low-adoption duplicates as candidates for consolidation.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Support tickets reduction, Training time; Engagement & Usage: Feature usage; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Audit feature usage analytics to identify redundant or overlapping functions, then A/B test merged versus fragmented versions measuring task success rates and support ticket volume. Run usability tests post-merge to confirm that consolidation does not reduce discoverability or increase errors.

Sources: [Good UI — Merging Similar Functions](https://goodui.org/#3)
Wireframe: https://files.catbox.moe/peycaf.jpg
File: library/product-strategy/UX-313-merging-similar-functions-reduce-feature-fragmentation.md

## UX-314 — Kano Model for Feature Prioritization
- Score 4 · Product Strategy / Prioritization Frameworks
- Tags: performance, forms
- Goals: Present & Defend Design Decisions; Design for Enterprise & B2B Scale
- Use when: Use for feature roadmap prioritization, product discovery, and making trade-offs between investment areas.

**Why.** The Kano model categorizes features into three types: Must-Be (basic expectations that cause dissatisfaction if absent — hygiene factors), Performance (linear relationship between investment and satisfaction — more = better), and Attractive/Excitement (unexpected features that delight when present but aren't missed if absent). Build all Must-Bes first — their absence creates active dissatisfaction. Then maximize Performance features for competitive differentiation. Add Attractive features for delight. Critically, Attractive features become Performance and then Must-Be over time as market expectations rise, requiring continuous reassessment.

**Do.**
- Run a Kano survey using functional and dysfunctional question pairs for each candidate feature ("How would you feel if this feature existed?" + "How would you feel if this feature didn't exist?").
- Categorize features using the Kano scoring matrix.
- Prioritize: Must-Bes (any absent ones block progress) → Performance features (highest ROI investment area) → Attractive features (differentiation).
- Use the model in roadmap discussions to explain why basic reliability must precede new features.

**Measure.** Adoption & Retention: Feature usage, Returning visitors, Renewed subscriptions; Satisfaction & Perception: CSAT, NPS, App store rating; Engagement & Usage: Active users, Sessions per user; How to measure: Track feature adoption rates for Kano-categorized features (basic needs, performance, delighters) post-launch and compare against predicted prioritization impact. Use follow-up satisfaction surveys segmented by which features users interact with to validate Kano model predictions.

Sources: [ProductPlan — Kano Model](https://www.productplan.com/learn/kano-model-prioritization/)
Wireframe: https://files.catbox.moe/3jx9rp.jpg
File: library/product-strategy/UX-314-kano-model-for-feature-prioritization.md

## UX-315 — Story Mapping for End-to-End Workflow Design
- Score 4 · Product Strategy / Planning Methods
- Tags: workflow
- Goals: Present & Defend Design Decisions
- Use when: Use when planning a new product or major feature set and when defining MVP scope for complex workflows.

**Why.** Create a visual map of the complete user journey by placing major workflow stages across the top axis and individual user stories beneath each stage, ordered by priority. Story maps provide a holistic view of the user experience that feature lists and backlogs cannot, revealing gaps between workflow stages, enabling slice-based release planning, and maintaining the user's perspective throughout planning. The "minimum slice" — one story per stage that creates a complete if minimal end-to-end experience — defines a valuable MVP scope.

**Do.**
- Identify the 5–8 major stages in the user's primary workflow (from initial intent to final outcome).
- List all known user stories beneath each stage.
- Identify the minimum slice: the single most essential story per stage that would create a complete (if minimal) end-to-end experience.
- Use this minimum slice as your MVP definition.
- Draw a horizontal line separating MVP stories from future enhancement stories.
- Use the map in sprint/cycle planning to ensure no stage is left empty in any given release.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Adoption & Retention: Feature usage, Returning visitors; How to measure: Map story map activities to product analytics events and track completion rates per story-mapped user journey phase. Use story maps to identify gaps in instrumentation, then measure whether workflow coverage improvements correlate with reduced support tickets and higher end-to-end task success.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/o9spui.jpg
File: library/product-strategy/UX-315-story-mapping-for-end-to-end-workflow-design.md

## UX-316 — OKRs for Design Quality Goals
- Score 4 · Product Strategy / Goal Setting and Measurement
- Tags: dashboard
- Goals: Present & Defend Design Decisions
- Use when: Use during quarterly planning cycles and when making the case for UX investment or establishing a design quality culture.

**Why.** Apply OKRs (Objectives and Key Results) to product quality and UX goals, not just business outcomes. Setting explicit OKRs for user experience — "Reduce time to complete primary task by 40%," "Achieve 80% user satisfaction with data entry workflow" — gives design work measurable targets and creates organizational accountability for UX investment. Without explicit quality OKRs, design quality is perpetually subordinated to feature velocity because velocity is always measured and quality often isn't.

**Do.**
- For each product area, set one Objective focused on user experience quality alongside any business Objectives.
- Define 2–3 Key Results that are measurable via available instrumentation (task completion rate, time-on-task, error rate, CSAT score, NPS).
- Baseline current performance before setting targets.
- Track quarterly and include in cycle reviews alongside feature delivery metrics.
- When quality OKRs are missed, investigate with user research to understand root causes before designing solutions.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; How to measure: Define design quality OKRs tied to measurable UX metrics (e.g., "Improve task success rate from 72% to 85% by Q3") and track progress quarterly via usability benchmarking. Use OKR retrospectives to assess whether design quality goals correlate with product-level business metric improvements.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/d6fsp4.jpg
File: library/product-strategy/UX-316-okrs-for-design-quality-goals.md

## UX-317 — HEART Framework for UX Quality Measurement
- Score 4 · Product Strategy / UX Metrics
- Tags: dashboard
- Goals: Present & Defend Design Decisions; Drive Conversion & Decision-Making
- Use when: Use when defining success metrics for a product or feature, and when building the case for UX investment in business terms.

**Why.** Google's HEART framework quantifies user experience quality across five dimensions: Happiness (user satisfaction, measured via CSAT or NPS), Engagement (frequency and depth of use), Adoption (new user uptake of features), Retention (continued use over time), and Task Success (efficiency and error rates). This framework bridges the gap between UX work and business metrics, allowing product teams to set measurable UX goals and demonstrate product quality in quantitative terms that resonate with business stakeholders.

**Do.**
- For each product area or major feature, define one metric per HEART dimension.
- Set baseline measurements and improvement targets.
- For Task Success: measure time-on-task and error rate via session recording analysis.
- For Happiness: deploy regular CSAT surveys at task completion points.
- For Engagement: track weekly active users and feature usage frequency via analytics.
- Report HEART metrics alongside functional KPIs in all product reviews.

**Measure.** Effectiveness: Task success rate, Error rate; Adoption & Retention: Feature adoption rate, Daily active users; Satisfaction & Perception: Ease-of-use score, NPS; How to measure: Survey users on whether they feel progress toward a concrete user goal rather than a vanity indicator.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/uujx1x.jpg
File: library/product-strategy/UX-317-heart-framework-for-ux-quality-measurement.md

## UX-318 — Dual-Track Agile — Continuous Discovery and Delivery
- Score 4 · Product Strategy / Process Design
- Goals: Present & Defend Design Decisions; Reduce Learning Curve for Complex Tools
- Use when: Use when establishing product development process and when discovery and delivery are currently sequential, creating bottlenecks.

**Why.** Organize product work into two parallel tracks: Discovery (validating ideas, conducting user research, designing solutions) and Delivery (implementing validated solutions). Discovery track produces validated product ideas running 1–2 cycles ahead of the Delivery track. This separation ensures the Delivery track never starts on unvalidated work, while Discovery never feels pressure to rush because builders are waiting. Teams that run both tracks in parallel ship faster with fewer post-launch revisions than teams that run them sequentially.

**Do.**
- Designate specific team members as the Discovery track (senior designer, PM) who do not participate in Delivery during active cycles.
- The Discovery output for each cycle is a set of validated, shaped concepts ready to commit to.
- Delivery takes these and implements them without needing to revisit fundamental problem or solution validation.
- Conduct joint weekly syncs between tracks to maintain alignment and surface new information from Delivery that should inform Discovery.

**Measure.** Effectiveness: Task success rate, Completion rate; Adoption & Retention: Returning visitors, Renewed subscriptions; Revenue: Conversion rate, Customer Lifetime Value (CLV); Satisfaction & Perception: CSAT, NPS; How to measure: Track the ratio of features shipped that address validated user needs versus unvalidated assumptions across dual-track sprints.

Sources: [ProductPlan — Product Management Frameworks](https://www.productplan.com/learn/product-management-frameworks/)
Wireframe: https://files.catbox.moe/eeoc3q.jpg
File: library/product-strategy/UX-318-dual-track-agile-continuous-discovery-and-delivery.md

## UX-319 — Loss Aversion Framing for Upgrade and Retention Prompts
- Score 3 · Product Strategy / Behavioral economics in product design
- Goals: Present & Defend Design Decisions
- Use when: Apply to feature trial expiry prompts, plan downgrade warnings, data retention notices, and subscription renewal reminders.

**Why.** People are more motivated to avoid losses than to acquire equivalent gains. Framing an offer in terms of what the user risks losing without action is more persuasive than what they stand to gain. "Your trial ends in 3 days — don't lose your 47 saved reports" is more motivating than "Upgrade to save your reports." In account downgrade flows, listing explicitly what features will be lost (not just what's kept) leverages this effect.

**Do.**
- Frame upgrade and retention prompts around specific losses: "Your trial ends in 3 days — don't lose your 47 saved reports." In account downgrade flows, explicitly list what features will be lost, not just what the user keeps.
- Data export and backup prompts can use loss framing: "Your data will be deleted in 30 days if you don't export it." Be specific about what will be lost — vague loss framing is less effective than quantified, named losses.
- Use ethically: never fabricate losses or exaggerate consequences.

**Measure.** Revenue: Conversion rate, Revenue per user, Customer Lifetime Value (CLV); Adoption & Retention: Renewed subscriptions, Returning visitors; Satisfaction & Perception: CSAT, NPS; How to measure: A/B test loss-framed upgrade prompts ("You're missing out on X") against gain-framed prompts ("Get X"), measuring upgrade conversion rate. Monitor subscription renewal rates and churn events preceded by loss-framed retention nudges to measure long-term impact.

Sources: [Good UI — Loss Aversion Framing](https://goodui.org/#30)
Wireframe: https://files.catbox.moe/jwzu8w.jpg
File: library/product-strategy/UX-319-loss-aversion-framing-for-upgrade-and-retention-prompts.md

## UX-320 — Hill Charts for Progress Tracking
- Score 3 · Product Strategy / Project Communication
- Tags: ai-patterns
- Goals: Present & Defend Design Decisions
- Use when: Use throughout a building cycle for progress tracking, especially when communicating project status to leadership.

**Why.** Track project scope progress using a hill chart metaphor: the uphill slope represents work that is still uncertain (figuring out the approach), the hilltop represents full clarity on remaining work, and the downhill slope represents confident execution of known work. Plotting each project scope as a dot on the hill communicates the nature of remaining work — not just quantity — and makes invisible uncertainty visible to managers and stakeholders without requiring status meetings. A scope stuck on the uphill side for multiple days signals a rabbit hole or blocker requiring immediate attention.

**Do.**
- Plot each project scope as a named dot on the hill.
- Update weekly or more frequently for fast-moving cycles.
- A scope that hasn't moved uphill in 2+ days should trigger a conversation: "What would move this scope over the hill?" (not "When will it be done?").
- When a scope appears stuck, examine whether it conflates both uphill (uncertain) and downhill (execution) work — if so, split it into two separate scopes that can move independently.

**Measure.** Effectiveness: Completion rate; Efficiency: Completion time, Time saved per task; Satisfaction & Perception: Confidence rating, Satisfaction rating; How to measure: Track the accuracy of team delivery estimates for projects managed with hill charts versus projects without this visibility tool, comparing planned versus actual completion timelines. Survey stakeholders and team members on confidence in project progress using pre/post ratings when hill charts are introduced.

Sources: [Shape Up by Ryan Singer, Ch. 13 (Basecamp, 2019)](https://basecamp.com/shapeup/3.4-chapter-13)
Wireframe: https://files.catbox.moe/jmpmrl.jpg
File: library/product-strategy/UX-320-hill-charts-for-progress-tracking.md

## UX-321 — Intrinsic Motivation Over Extrinsic Rewards in Enterprise Tools
- Score 3 · Product Strategy / Engagement Design
- Tags: enterprise
- Goals: Increase User Engagement & Retention; Present & Defend Design Decisions
- Use when: Use when evaluating whether to add gamification elements to enterprise tools and when designing for long-term user engagement.

**Why.** External rewards (gamification points, achievement badges) can undermine intrinsic motivation for complex professional tasks. Enterprise users are motivated by doing their job well — by competence, autonomy, and meaningful work — not by accumulating points. Adding extrinsic reward systems to professional tools can cheapen the experience and signal organizational distrust of users' professional motivation. Research shows that introducing extrinsic rewards for tasks users already find intrinsically rewarding can reduce their subsequent intrinsic engagement with those tasks.

**Do.**
- Evaluate every gamification proposal against the intrinsic motivation test: does this feature help users feel more competent, autonomous, or purposeful? Progress visualization (showing users they've gotten faster, made fewer errors, or completed more work) is intrinsically motivating.
- Leaderboards comparing individual performance are typically not.
- Invest design energy in features that increase task efficiency, reduce errors, and save time — these address intrinsic motivators directly.

**Measure.** Satisfaction & Perception: NPS, Ease-of-use score, Satisfaction rating; Engagement & Usage: Feature usage, Active users, Session frequency; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Survey users on intrinsic motivation factors (autonomy, mastery, purpose) at regular intervals via NPS and in-app surveys; track feature engagement depth and DAU/WAU ratios to distinguish intrinsic-engagement patterns from extrinsic reward-chasing.

Sources: [100 Things #54–55 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/sbsb4j.jpg
File: library/product-strategy/UX-321-intrinsic-motivation-over-extrinsic-rewards-in-enterprise-to.md

## UX-322 — IDEO Iceberg Model for Systems Thinking in Design
- Score 3 · Product Strategy / Strategic Design
- Tags: cognitive-load
- Goals: Present & Defend Design Decisions; Design for Enterprise & B2B Scale
- Use when: Use when solving recurring problems that surface-level fixes haven't resolved, and when scoping a new product initiative with systemic complexity.

**Why.** Systems thinking in design recognizes that user behavior, product performance, and organizational outcomes are not the product of isolated decisions or individual features, but of interconnected structures, feedback loops, and mental models operating beneath what is immediately visible. The iceberg metaphor, popularized in the systems thinking tradition and adopted by IDEO's strategic design practice, distinguishes between the visible tip — observable events and symptoms — and the submerged mass: patterns of behavior, underlying structures, and the mental models that perpetuate those structures.

**Do.**
- Apply systems thinking to identify root causes: what pattern, structure, or mental model is producing the recurring problem?
- Map the system: document the visible events (surface), then identify the patterns beneath, the underlying structures driving those patterns, and the mental models sustaining those structures.
- Use the iceberg model to frame design briefs: start with 'What's the visible symptom?' then work down to 'What structure in the product creates this pattern?'
- Focus design interventions at the structural level for lasting change, not just surface-level symptom relief.
- Facilitate stakeholder workshops that move conversation from 'events' to 'patterns' to 'structures' to avoid repeated surface-level fixes.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Support tickets reduction, Training time; Satisfaction & Perception: NPS, CSAT; How to measure: Evaluate whether systemic design interventions (e.g., fixing underlying data model vs. UI patch) reduce support ticket volume more durably than surface-level fixes. Use NPS tracking over 6–12 months to assess satisfaction trends tied to systemic improvements versus cosmetic changes.

Sources: [IDEO Strategy Frameworks](https://www.facebook.com/groups/574695376589462/posts/1196930894365904/)
Wireframe: https://files.catbox.moe/te6uak.jpg
File: library/product-strategy/UX-322-ideo-iceberg-model-for-systems-thinking-in-design.md
