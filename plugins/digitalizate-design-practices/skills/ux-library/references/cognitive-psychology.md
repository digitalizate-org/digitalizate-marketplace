# Cognitive Psychology (23)

## UX-014 — Recognition Rather Than Recall
- Score 5 · Cognitive Psychology / Memory offloading and discoverability
- Tags: cognitive-load, ai-patterns, navigation
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Apply in menu design, filtering interfaces, multi-step workflows, command interfaces, and any context where users must act on information from elsewhere in the UI.

**Why.** Minimizing memory load by making elements, actions, and options visible reduces the cognitive effort required for every interaction. Users should recognize information from presented options rather than recall it from scratch. This is the principle behind autocomplete, recently visited records, command palettes, saved filter views, and breadcrumbs. Recognition-based interfaces dramatically reduce query-formulation errors in search and reduce navigation time in deep hierarchies. In enterprise tools used daily, this principle compounds: every extra recall burden repeated hundreds of times per day creates measurable productivity loss.

**Do.**
- Implement global search with a "recently viewed" section before the user starts typing.
- Provide saved filter views and "recently used" configurations in filter panels.
- Use a command palette (Cmd+K) with recent commands at the top.
- Re-display key prior selections at decision points in multi-step workflows.
- Show breadcrumb navigation so users always know their current location without needing to recall the navigation path.
- Offer autocomplete in all search and foreign key lookup fields.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Run usability tests measuring error rate and time-on-task for interfaces using recognition cues (visible options, icons, previews) versus those requiring recall; compare training time and support ticket volume across interfaces with high versus low recognition support.; Implement global search with a "recently viewed" section…

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Good UI — Recognition Over Recall](https://goodui.org/#37) · [100 Things #22 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Nielsen Norman Group — Heuristic 6](https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained)
Wireframe: https://files.catbox.moe/cjtqxj.jpg
Notion: https://app.notion.com/p/Recognition-Rather-Than-Recall-fb9a9aed5344830da820019a9474a81c

## UX-015 — Hick's Law — Reduce Choices at Decision Points
- Score 5 · Cognitive Psychology / Decision time and choice architecture
- Tags: navigation
- Goals: Leverage Psychology to Guide User Behavior; Drive Conversion & Decision-Making
- Use when: Apply to navigation menus, filter panels, action menus, toolbar configurations, wizard steps, onboarding flows — any place where users must choose from competing options.

**Why.** Decision time increases with the number and complexity of choices. In enterprise applications, this manifests most destructively in long menus, complex filter panels with dozens of simultaneous options, and wizard steps presenting all configuration at once. The solution is not removing features but reducing simultaneously visible choices through progressive disclosure, default selections, and hierarchical grouping. The paradox of choice effect amplifies this — excessive options can cause paralysis, not just slowness.

**Do.**
- Minimize choices at critical decision points — default the most common action and hide power options behind "Advanced" toggles or overflow menus.
- Limit primary navigation items to 5–7 entries.
- For templates or option galleries, curate a "Recommended" section featuring 3–5 options prominently before the full catalog.
- Use progressive disclosure: show 3–5 primary options and put the rest in "More..." or an overflow menu.
- For onboarding flows, expose only essential features to first-time users.

**Measure.** Effectiveness: Task success rate, Conversion rate; Efficiency: Decision time at choice points, Abandonment rate reduction; Satisfaction: User confidence, Perceived simplicity; How to measure: Track time-to-first-click at primary decision points; measure abandonment at choice screens; A/B test reduced-option vs. full-option layouts to quantify conversion impact.

Sources: [Laws of UX — Hick's Law](https://lawsofux.com/hicks-law/)
Wireframe: https://files.catbox.moe/wu8e4w.jpg
Notion: https://app.notion.com/p/Hick-s-Law-Reduce-Choices-at-Decision-Points-adca9aed534482dab03081e19842ff85

## UX-016 — Miller's Law — Chunk Information Into Groups of 5–7
- Score 5 · Cognitive Psychology / Working memory limits and chunking
- Tags: cognitive-load, forms, navigation, dashboard
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Apply to navigation menus, filter chip groups, dashboard widget counts, table visible columns, form section groupings, and step indicators in wizards.

**Why.** The average person can hold 7 (±2) items in working memory at a time. This doesn't mean limiting interface elements to 7 — it means organizing them into chunks of that size so users can process related groups sequentially rather than all items simultaneously. Chunking applies to form sections, navigation groupings, dashboard KPI counts, table column groups, and any list where users must hold multiple items in mind to make a decision.

**Do.**
- Limit primary navigation items to 5–7; group additional items under categorized dropdowns.
- Chunk data table columns into logical groups using column group headers (e.g., "Contact Info," "Financials," "Status") — don't surface 20 flat columns.
- Break forms with many fields into sections of 4–6 fields each with clear headings.
- Limit the number of primary KPI cards visible at first glance to 5–7 before requiring scroll.
- Use consistent spacing: tighter within groups, larger between groups.

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure menu comprehension speed and recall accuracy on navigation structures grouped at 5-7 items vs. 10+ items using usability testing. Track error rates in feature discovery tasks where overly long or under-grouped menus increase scanning overhead.

Sources: [Laws of UX — Miller's Law](https://lawsofux.com/millers-law/) · [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
Wireframe: https://files.catbox.moe/dt70jc.jpg
Notion: https://app.notion.com/p/Miller-s-Law-Chunk-Information-Into-Groups-of-5-7-9cea9aed534482558c1d81c16d83eee4

## UX-017 — Jakob's Law — Leverage Familiar Patterns From Other Products
- Score 5 · Cognitive Psychology / Mental models and platform conventions
- Tags: cognitive-load, forms
- Goals: Reduce Learning Curve for Complex Tools; Leverage Psychology to Guide User Behavior
- Use when: Apply when designing navigation, keyboard shortcuts, toolbar placement, form layouts, modal patterns, and data table conventions — especially when users migrate from known competing tools.

**Why.** Users spend most of their time on other products, so they prefer yours to work the same way as tools they already know. Their mental models from prior applications set expectations for yours. Violating conventions without clear benefit forces re-learning. When building enterprise apps where users come from specific ecosystems (Salesforce, SAP, Excel, Jira), explicitly matching their interaction patterns dramatically reduces adoption friction. When a redesign is necessary, provide a transitional period where users can preview or revert.

**Do.**
- Follow OS-native conventions: Cmd/Ctrl+S to save, Escape to dismiss, breadcrumbs top-left, search top-right.
- Replicate familiar patterns from users' primary existing tools (Salesforce-style record pages, Excel-style column sorting, Gmail-style bulk action toolbars).
- Use familiar icon metaphors: magnifying glass = search, gear = settings, bell = notifications, grid/list = view toggle.
- When breaking a convention, do so intentionally and A/B test the change — never deviate accidentally.
- Conduct think-aloud testing to surface mental model mismatches early.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Task success rate, Error rate; Adoption & Retention: Account creation rate, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare time on task and error rate for new users performing tasks that follow familiar conventions (e.g., top-right profile menu, search at the top) versus novel patterns. Measure onboarding completion rates as an indicator of how quickly users transfer existing mental models to the new product.

Sources: [Laws of UX — Jakob's Law](https://lawsofux.com/jakobs-law/) · [Nielsen Norman Group — Mental Model Inertia](https://www.nngroup.com/articles/mental-models/)
Wireframe: https://files.catbox.moe/67yx0e.jpg
Notion: https://app.notion.com/p/Jakob-s-Law-Leverage-Familiar-Patterns-From-Other-Products-fada9aed53448336820281f20f31501c

## UX-018 — Chunk Content Into Visually Distinct Groups
- Score 5 · Cognitive Psychology / Information Processing
- Tags: cognitive-load, forms
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Use when designing data display, forms, reports, and help content — anywhere large amounts of information must be presented.

**Why.** Users process information better in structured, bite-sized chunks than in continuous streams. This applies to text (paragraphs, bullet points), data (grouped by category rather than flat lists), and workflows (step-by-step stages rather than one long form). For data-heavy enterprise applications, chunking is the primary tool for making high-density information navigable — grouping related data, providing visual section breaks, and using progressive disclosure to reveal detail within chunks. The principle applies at every level from field groups within a form to sections within a page to modules within an application.

**Do.**
- Group all information displays into visual chunks of 3–7 items.
- Use section headers as chunk anchors.
- Provide collapsible sections for large content areas.
- Apply a "3-chunk" rule to primary navigation (3–5 high-level categories, each with sub-items if needed).
- In data tables, use column groupings with visual headers for related column clusters.
- Limit visible options in any dropdown or filter to 7–10 before providing a search.

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Task success rate, Findability score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure scan times and comprehension accuracy on pages before and after applying visual chunking. Use eye-tracking to confirm that grouped content reduces random scanning and improves structured reading patterns, and track time-to-find-information in search or browsing tasks.

Sources: [100 Things #27 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/) · [Laws of UX — Law of Proximity](https://lawsofux.com/law-of-proximity/)
Wireframe: https://files.catbox.moe/7zn8q7.jpg
Notion: https://app.notion.com/p/Chunk-Content-Into-Visually-Distinct-Groups-977a9aed5344826cb37401b71c1430e2

## UX-019 — Gestalt — Law of Common Region for Visual Grouping
- Score 5 · Cognitive Psychology / Gestalt visual perception principles
- Tags: ai-patterns, forms, dashboard
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Apply to dashboard card layouts, form section groupings, filter panels, sidebar modules, split-panel interfaces, property inspector panels — any UI where grouping must be communicated spatially.

**Why.** Elements perceived as grouped if they share an area with a clearly defined boundary. A border or background region creates strong perceptual grouping even when elements are not in close proximity. Card containers (background fill + optional border) create immediate perceptual regions on dashboards. In split-panel layouts, distinct background colors delineate list panel, detail panel, and action panel regions. Using highlighted row backgrounds in tables shows a selected item belongs to the same group as its expanded detail panel.

**Do.**
- Use card containers (background fill + optional border) to group related metrics on dashboards.
- In form design, use section-level background fills or bordered fieldsets to visually separate functional groups.
- Use highlighted row backgrounds in data tables to link a selected row to its expanded detail panel.
- In split-panel layouts, use distinct background colors to delineate regions.
- Apply the Law of Common Region to differentiate destructive action groups from safe action groups in settings panels.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Run first-click and card-sorting tests to verify users perceive grouped elements as related; measure task completion time and error rate in usability tests comparing layouts with and without common region boundaries.

Sources: [Laws of UX — Law of Common Region](https://lawsofux.com/law-of-common-region/)
Wireframe: https://files.catbox.moe/jugemr.jpg
Notion: https://app.notion.com/p/Gestalt-Law-of-Common-Region-for-Visual-Grouping-5a9a9aed5344834d837301c4aea35b2a

## UX-020 — Gestalt — Law of Similarity for Interactive Affordance
- Score 5 · Cognitive Psychology / Visual encoding consistency
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Apply to status badges, category labels, icon families, interactive vs. non-interactive elements, table column types, CTA vs. secondary button differentiation.

**Why.** Elements sharing color, shape, size, or orientation are perceived as related. This means a consistent visual style for all clickable elements creates instant recognition of what is interactive — users see a button-styled element and know it's clickable without reading. Conversely, elements that look the same but behave differently create confusion. Consistent column-type formatting in data tables (all currency columns identical, all date columns identical) allows column-based scanning rather than cell-by-cell reading.

**Do.**
- Use consistent visual style (same color, border-radius, icon weight) for all clickable/actionable elements.
- Apply consistent status badge colors across all contexts: green = success, red = error, yellow = warning, gray = neutral.
- Ensure links/navigation items are clearly visually differentiated from plain text — don't rely on hover state alone.
- In data tables, format column types consistently — all currency columns identically, all date columns identically.
- Establish a three-state visual language: default/interactive, selected/active, non-interactive.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Conduct first-click tests and interactive affordance studies to measure whether visual similarity correctly cues users to interactive elements; track error rates from incorrect element activation in usability sessions.

Sources: [Laws of UX — Law of Similarity](https://lawsofux.com/law-of-similarity/)
Wireframe: https://files.catbox.moe/swgn7m.jpg
Notion: https://app.notion.com/p/Gestalt-Law-of-Similarity-for-Interactive-Affordance-597a9aed534482a3b8bd81ebe566b2f0

## UX-021 — Offload User Tasks Through System Automation
- Score 5 · Cognitive Psychology / Automation and cognitive offloading
- Tags: forms
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Apply to form design, dashboard configuration, data import/export, and any repetitive operational task where the system can reduce user burden.

**Why.** Users should not have to perform tasks that the system can perform for them — reading and re-entering data, making obvious decisions, or remembering configuration details. Every user burden the system absorbs reduces cognitive load and increases task success. This is Tesler's Law in practice: shifting irreducible complexity from the user to the system. Re-displaying prior inputs in confirmation/review steps (rather than making users remember what they entered) is the simplest application of this principle.

**Do.**
- Pre-fill form fields with data available from previous sessions, user profiles, or integrated sources.
- Use smart defaults matching the most common choices for the current user segment.
- Replace text descriptions with visuals where possible (status icons instead of status text strings).
- Re-display prior inputs in confirmation/review steps rather than making users remember them.
- Automate sequential decisions when the outcome is deterministic (e.g., auto-select the only available option in a single-item dropdown).

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Time saved per task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Instrument automated versus manual task paths in analytics to measure time saved per task and error rates; survey users before and after automation rollout with CSAT and ease-of-use questions to quantify perceived effort reduction.

Sources: [Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability](https://www.nngroup.com/articles/minimize-cognitive-load/)
Wireframe: https://files.catbox.moe/w0xbjr.jpg
Notion: https://app.notion.com/p/Offload-User-Tasks-Through-System-Automation-18fa9aed534483bcbfef01cd8358da55

## UX-022 — Build Mental Models Through Consistent Pattern Reuse
- Score 5 · Cognitive Psychology / Mental model building and transfer
- Tags: cognitive-load, design-system
- Goals: Reduce Learning Curve for Complex Tools; Leverage Psychology to Guide User Behavior
- Use when: Apply to design system governance, new feature design, and any interaction that deviates from established patterns within the product.

**Why.** Users build accurate mental models of how a system works through repeated, consistent interactions. When the same pattern appears across the entire product — the same modal behavior, the same filter chip pattern, the same row action ellipsis menu — users learn it once and apply it everywhere. Inconsistencies force users back into exploratory mode, rebuilding their model from scratch. A design system that enforces pattern reuse is the primary organizational mechanism for mental model building at scale.

**Do.**
- Build and enforce a design system with documented component variants and interaction patterns.
- Once a pattern is established and validated, apply it consistently across all modules — resist the temptation to "improve" it locally.
- When a pattern must change, change it everywhere simultaneously with a migration plan.
- Test mental model accuracy with think-aloud usability testing: ask users to predict what will happen before they interact.
- If predictions are wrong, the mental model is broken — fix the pattern, not just the specific instance.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Track error rate and time on task for repeated interactions across different sections of the product to verify that consistent pattern reuse reduces learning overhead over sessions. Use a longitudinal study comparing session 1 versus session 5 performance to quantify mental model formation speed.

Sources: [Nielsen Norman Group — Mental Model Inertia](https://www.nngroup.com/articles/mental-models/) · [Good UI — Consistency](https://goodui.org/#27)
Wireframe: https://files.catbox.moe/qrhgzz.jpg
Notion: https://app.notion.com/p/Build-Mental-Models-Through-Consistent-Pattern-Reuse-2eaa9aed5344830a8d658185ac649bef

## UX-023 — Short-Term Memory Limits — Design for 4-Item Chunks
- Score 5 · Cognitive Psychology / Memory and Working Load
- Tags: cognitive-load
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Use when designing multi-step workflows, any interface where users must remember information from a previous step, and wizard or multi-page form design.

**Why.** Users can hold approximately 4 items (chunks) in working memory at any time — not the traditional "7±2" often cited. When workflows require users to remember information from one screen to apply on another, or hold the state of multiple wizard steps in mind, they frequently make errors. Any workflow that requires users to remember more than 3–4 pieces of information across steps is at risk for memory-based errors. The classic multi-step enterprise form wizard where each step's data is not summarized on subsequent steps is the primary offender.

**Do.**
- Audit all multi-step workflows for cross-step memory requirements.
- Any information entered in a previous step that is needed in the current step must be displayed (repeated or summarized) on the current step.
- Show a summary sidebar in wizards that updates as each step is completed.
- Never require users to remember codes, IDs, or selections from a previous step — surface them contextually on the step where they're needed.

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure task completion times and error rates on information-dense layouts before and after restructuring content into 4-item chunks. Use eye-tracking to verify that chunked layouts reduce re-reading and backtracking behaviors in scanning tasks.

Sources: [100 Things #19–20 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/bi9bey.jpg
Notion: https://app.notion.com/p/Short-Term-Memory-Limits-Design-for-4-Item-Chunks-712a9aed53448293a97301b5d488e00a

## UX-024 — Attention is Selective — Design for Salience
- Score 5 · Cognitive Psychology / Attention and Perception
- Tags: cognitive-load
- Goals: Leverage Psychology to Guide User Behavior; Drive Conversion & Decision-Making; Reduce Cognitive Load
- Use when: Use when designing alert and notification systems, and when evaluating why users miss important elements on a screen.

**Why.** The brain aggressively filters visual and cognitive input, paying attention only to what it has been primed to notice, what appears salient against its background, or what matches prior expectations. Users will literally not see elements they have been trained to ignore — including banner ads, sidebar navigation after initial learning, and "always-on" status indicators that never change. This phenomenon explains why critical alerts placed in locations users have learned to ignore are ineffective. Use visual contrast, motion (one-shot, not looping), and proximity to primary focus to make critical information salient.

**Do.**
- Use visual contrast, single-shot animation, and proximity to primary focus to make critical information salient.
- Never rely on persistent always-visible elements for critical alerts — they will eventually be ignored.
- Use progressive interruption only for genuinely critical information that requires immediate action.
- For monitoring dashboards, use animation sparingly — a single flash indicating a value changed is more attention-getting than a constantly pulsing indicator.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Conduct first-click tests and eye-tracking studies to verify salient elements capture attention in the intended order; measure task success rate and time-to-first-correct-action in usability tests comparing high-salience versus low-salience designs.

Sources: [100 Things #40–41 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/8gmwbp.jpg
Notion: https://app.notion.com/p/Attention-is-Selective-Design-for-Salience-14aa9aed5344833aa03b018301652d99

## UX-025 — People Can't Multitask — Minimize Interruptions
- Score 5 · Cognitive Psychology / Attention Management
- Tags: keyboard
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Use when designing notification and interruption systems, and when deciding whether to integrate chat, alerts, or status feeds into focused work areas.

**Why.** What users call "multitasking" is actually rapid task-switching, which incurs a significant cognitive switching cost each time. In enterprise software, designs that require simultaneous attention to multiple tasks or information streams impose significant cognitive cost. Notifications, popups, and chat integrations in complex productivity tools fragment attention and reduce the quality of focused work. Each interruption requires users to re-establish context after returning to their primary task, which research estimates costs 15–25 minutes of productive time per interruption for complex knowledge work.

**Do.**
- Minimize interruptions in focused work modes.
- Aggregate notifications rather than delivering them in real-time.
- Provide a "Focus mode" that suppresses non-critical interruptions.
- Design notifications as "pull" (user checks at their discretion) rather than "push" (delivered immediately) for all non-critical updates.
- Apply this principle when deciding whether new features that generate notifications should be integrated into the primary work surface or relegated to a separate notification panel.

**Measure.** Efficiency: Time on task, Error counts, Completion time; Effectiveness: Task success rate, Completion rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track notification dismissal rates and interruption-triggered task abandonment rates via analytics. Conduct usability tests where participants complete tasks in interrupt-heavy vs. low-interrupt environments, measuring error rate and task completion time to quantify the cognitive cost of multitasking demands.

Sources: [100 Things #46 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/w6yio3.jpg
Notion: https://app.notion.com/p/People-Can-t-Multitask-Minimize-Interruptions-72ca9aed534483578f3901cfdcee27d1

## UX-026 — Choice Overload — Limit Visible Options
- Score 5 · Cognitive Psychology / Decision Design
- Goals: Leverage Psychology to Guide User Behavior; Drive Conversion & Decision-Making; Reduce Cognitive Load
- Use when: Use when designing configuration panels, filter interfaces, feature menus, and any context where users face a large number of options.

**Why.** When people are given too many options, decision quality deteriorates, decision satisfaction decreases, and decision avoidance ("I'll decide later") increases. Feature menus with 40 options, report builders with 200 fields, and configuration panels with 50 settings all impair the user's ability to make good decisions. The solution is not to reduce capability, but to reduce visible options while preserving full capability through progressive disclosure. Providing intelligent defaults that reduce the decision burden for users who don't want to choose is equally important.

**Do.**
- Apply a maximum of 7–10 visible options in any menu, filter list, or configuration panel.
- Use progressive disclosure to show the most common options prominently and provide "See all options" access to the full set.
- Provide intelligent defaults that represent the optimal choice for most users.
- For configuration panels, distinguish required settings (always visible) from optional settings (collapsed by default).
- For filter interfaces, show the 5–8 most-used filters by default and an "Add filter" option for additional dimensions.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Completion rate, Task success rate; Revenue: Conversion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test reduced-option layouts against full-option displays on decision-heavy pages (e.g., pricing, product selection). Measure conversion rate and time-to-decision as primary metrics, and collect post-task ease-of-use scores to confirm reduced cognitive burden.

Sources: [100 Things #92 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/ku74ta.jpg
Notion: https://app.notion.com/p/Choice-Overload-Limit-Visible-Options-290a9aed534483c88c97011652741315

## UX-027 — Cognitive Path of Least Resistance — Make the Intended Path Easiest
- Score 5 · Cognitive Psychology / Behavior Design
- Tags: workflow
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Use when evaluating whether users will follow intended workflows, and when users are creating workarounds to avoid standard processes.

**Why.** People seek the lowest-effort path to accomplish their goals. This is adaptive, not lazy. If a shortcut exists and requires minimal effort to discover, users will take it. If the primary path is harder than a workaround — including external tools like spreadsheets and email — users will use the workaround and accumulate technical debt. The single most powerful question in enterprise workflow design is: "Is the intended path demonstrably easier than all alternatives?" If not, the intended path will not be used.

**Do.**
- For each intended workflow, map the actual effort (clicks, fields, time) versus common workarounds.
- If any workaround is easier, the workaround will win regardless of training and policy.
- Redesign the intended workflow to be measurably easier than alternatives.
- Pay particular attention to the comparison with external tools (Excel, email): if users can accomplish the same thing faster outside your product, they will.
- Track workaround adoption via analytics as a leading indicator of workflow friction.

**Measure.** Effectiveness: Task success rate, Completion rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Use task analysis to identify whether the intended path is the shortest and most prominent path in the UI, then measure completion rates and task times before and after removing friction from the intended path. A/B test layouts where the desired path is made visually and interactively dominant against neutral layouts, measuring conversion and error rates.

Sources: [100 Things #57–58 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/gzpqac.jpg
Notion: https://app.notion.com/p/Cognitive-Path-of-Least-Resistance-Make-the-Intended-Path-Easiest-f91a9aed5344820ab1548169fa0127f2

## UX-028 — Pattern Recognition and UI Consistency
- Score 5 · Cognitive Psychology / Consistency Principles
- Tags: navigation
- Goals: Reduce Learning Curve for Complex Tools; Leverage Psychology to Guide User Behavior
- Use when: Use when establishing UI component systems and when introducing new UI patterns in an established product.

**Why.** Users identify objects, find interface elements, and navigate applications primarily by recognizing visual patterns, not by reading labels. Consistent visual patterns for consistent functions (all primary action buttons look the same, all navigation items use the same visual style) reduce the cognitive effort of navigation to zero for learned patterns. Breaking established patterns — even for good visual design reasons — creates cognitive friction users experience as confusion and distrust. Pattern consistency is the foundation of all efficient enterprise application usage.

**Do.**
- Establish a component library with visually distinct and consistent patterns for each interaction type.
- Never reuse a visual pattern for a functionally different element — a link that looks like a button or a button that looks like a label creates systematic confusion.
- Conduct a pattern consistency audit: can users identify the function of each element type at a glance by appearance alone? When introducing new patterns, provide transition periods and clear visual distinction from existing patterns.

**Measure.** Efficiency: Time on task, Training time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure time on task and error rate for new users performing standard interactions on a product with high pattern consistency versus one with inconsistent UI patterns. Track training time or onboarding completion time as an indicator of how quickly users build accurate mental models.

Sources: [100 Things #3 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/ql65p4.jpg
Notion: https://app.notion.com/p/Pattern-Recognition-and-UI-Consistency-10aa9aed534483518e000198b6ffed7c

## UX-029 — Goal-Gradient Effect — Show Progress to Drive Completion
- Score 4 · Cognitive Psychology / Motivation Design
- Tags: workflow, onboarding
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Use when designing multi-step onboarding, complex approval workflows, and any sequential process with completion as a goal.

**Why.** Motivation and effort increase as users approach goal completion — the closer someone is to finishing, the harder they work to complete it. Users who see they are 8 of 10 steps complete will push harder to finish than users at step 2 of 10. For enterprise workflows with defined completion points (onboarding, data entry, approval flows), making progress visible and emphasizing proximity to completion significantly increases completion rates. "You're almost there" at 80% complete is not just friendly — it is a psychologically effective completion accelerant.

**Do.**
- Show explicit progress indicators in all multi-step flows — not just step counts but completion percentages where meaningful.
- For long processes (10+ steps), introduce "mini completions" (completing a section/stage) within the overall flow to sustain motivation.
- Show remaining steps explicitly so users can assess proximity to completion.
- Use completion-oriented language in the final stages: "One more step" rather than "Step 4 of 5." Celebrate completions with a brief, satisfying success state.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Error counts; Engagement & Usage: Abandonment rate, Active users; How to measure: A/B test multi-step flows with and without progress indicators, measuring completion rate and drop-off at each step. Use funnel analytics to identify which steps see the largest abandonment reduction when progress visibility is added.

Sources: [100 Things #50 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Laws of UX — Goal-Gradient Effect](https://lawsofux.com/goal-gradient-effect/)
Wireframe: https://files.catbox.moe/x1jm64.jpg
Notion: https://app.notion.com/p/Goal-Gradient-Effect-Show-Progress-to-Drive-Completion-59ca9aed534482a383bd814ebbe8f689

## UX-030 — Gestalt — Uniform Connectedness for Process and Relationship Visualization
- Score 4 · Cognitive Psychology / Process and relationship design
- Tags: workflow, forms, dashboard
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Apply to process flows, pipeline visualizations, step-by-step wizards, dependency charts, relationship diagrams, and data lineage views in enterprise applications.

**Why.** Elements that are visually connected are perceived as more related than elements with no connection — a line or arrow creates stronger perceived relatedness than proximity alone. In wizard/stepper flows, connecting step indicators with a progress bar communicates the sequential relationship between steps. Using consistent accent colors to connect a data point in a chart with its legend item and data table row creates instant visual linkage without requiring users to read.

**Do.**
- Use lines or arrows to connect process steps in workflow visualizations — stronger than placing steps near each other.
- Apply connecting borders or shared background fills around related controls in property panels to show they affect the same entity.
- Connect step indicators in wizard flows with a line or progress bar.
- Use consistent accent colors to link chart data points to legend items and data table rows.
- For approval chain visualizations, use connector lines with directional arrows to show flow direction.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Run comprehension tests asking users to trace relationships or process steps in diagrams with and without uniform connectedness visual cues; measure accuracy and time-to-understand to quantify clarity improvements.

Sources: [Laws of UX — Law of Uniform Connectedness](https://lawsofux.com/law-of-uniform-connectedness/)
Wireframe: https://files.catbox.moe/zo58e3.jpg
Notion: https://app.notion.com/p/Gestalt-Uniform-Connectedness-for-Process-and-Relationship-Visualization-361a9aed53448279845081d61486bead

## UX-031 — Law of Prägnanz — Use Simplest Effective Visual Form
- Score 4 · Cognitive Psychology / Visual simplicity in design
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Apply to icon design, data visualization, dashboard layouts, form design, navigation structures — any place where visual clarity reduces interpretation time.

**Why.** People perceive and interpret ambiguous or complex images as the simplest possible form. In UX, this means designing icons using simple, immediately recognizable shapes; choosing the simplest chart type that communicates the insight (a bar chart over a radar chart for most comparisons); and removing visual chrome (borders, gradients, shadows) that doesn't carry semantic meaning. Complexity in visual presentation increases interpretation time, which compounds across thousands of daily interactions.

**Do.**
- Design icons using simple, immediately recognizable shapes — avoid decorative complexity in functional icons.
- Use the simplest chart type that communicates the insight (bar > complex radar for most comparisons; line > area for trend clarity).
- Remove visual chrome (borders, gradients, shadows) that doesn't carry semantic meaning.
- Use whitespace and clean typographic hierarchy rather than boxes around every element to create structure.
- Apply this to empty states, loading screens, and error messages — keep them unambiguous.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, SUS score; How to measure: A/B test complex versus simplified visual representations for the same content and measure time-on-task and task success rate in usability sessions; collect SUS scores to gauge how simplification affects overall perceived usability.

Sources: [Laws of UX — Law of Prägnanz](https://lawsofux.com/)
Wireframe: https://files.catbox.moe/3yfofr.jpg
Notion: https://app.notion.com/p/Law-of-Pr-gnanz-Use-Simplest-Effective-Visual-Form-8dca9aed534483a89559811dc694eab9

## UX-032 — Visual Appearance Determines Initial Trust
- Score 4 · Cognitive Psychology / First Impressions
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Use when prioritizing visual polish investments and when a product will be evaluated by new users or in sales/procurement contexts.

**Why.** Users form initial trust judgments based on visual design quality before interacting with any functionality. In enterprise software evaluations, a poorly designed visual aesthetic signals poor quality throughout the product, reducing trust in data accuracy, system reliability, and vendor competence. First impressions based on visual quality form in milliseconds and are highly resistant to subsequent correction — a user who perceives a product as low-quality on first look will interpret subsequent issues through that negative lens.

**Do.**
- Invest in visual design quality proportional to its trust-signal value.
- Prioritize: consistent typography system, coherent color palette, polished component states (hover, active, disabled, error), professional data visualization, and consistent icon set.
- Users judge the product's reliability by its visual discipline.
- The first-use screen — the post-login landing experience — deserves disproportionate polish investment as the primary trust-formation moment.

**Measure.** Effectiveness: First-use task success rate, Trial-to-paid conversion; Efficiency: Time-to-trust (first impression quality); Revenue: Enterprise deal win rate, Renewal rate; How to measure: Run 5-second trust tests with new users; measure post-demo trust scores in enterprise evaluations; track trial conversion rate as proxy for initial trust quality.

Sources: [100 Things #79 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/w0tfzh.jpg
Notion: https://app.notion.com/p/Visual-Appearance-Determines-Initial-Trust-b90a9aed53448209a17e81f2993fdf06

## UX-033 — Social Proof and Activity Signals for Feature Adoption
- Score 3 · Cognitive Psychology / Decision Guidance
- Tags: onboarding
- Goals: Leverage Psychology to Guide User Behavior; Drive Conversion & Decision-Making
- Use when: Use when designing onboarding for new users, configuration recommendations, and feature adoption flows where users are uncertain about what to choose.

**Why.** Social proof in the context of feature adoption leverages a fundamental mechanism of cognitive psychology: when uncertain about the correct course of action, people look to the behavior of others as evidence of the right choice. Robert Cialdini's foundational research on influence established that social proof is most powerful precisely when people are uncertain and when they identify with the reference group being cited. In product onboarding and configuration flows, new users face exactly this condition — they don't yet know which settings, templates, or features are best for their context, making them highly susceptible to signals about what other users have chosen.

**Do.**
- Surface social proof selectively and where genuine uncertainty exists: show "most popular" indicators for configuration choices where users commonly get stuck, "most commonly used by teams like yours" for template selection, and "used by X% of your organization" for feature adoption nudges during onboarding.
- Always use real data — manufactured social proof creates trust problems when users discover it.
- Avoid surfacing social proof for every decision, which would trivialize it.

**Measure.** Effectiveness: Onboarding completion rate, Feature adoption rate; Efficiency: Time-to-activation, Configuration completion rate; Revenue: Trial-to-paid conversion, Time-to-value; How to measure: A/B test onboarding flows with and without social proof signals; measure configuration completion rates at steps where social proof is shown; track time-to-first-value milestone.

Sources: [100 Things #98 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Good UI — Social Proof](https://goodui.org/#4)
Wireframe: https://files.catbox.moe/0fz6g6.jpg
Notion: https://app.notion.com/p/Social-Proof-and-Activity-Signals-for-Feature-Adoption-923a9aed534482c89b0c812698d9d74c

## UX-034 — Mood Influences Decision Quality — Design the Path to Decisions
- Score 3 · Cognitive Psychology / Contextual Factors
- Tags: performance, forms
- Goals: Leverage Psychology to Guide User Behavior; Drive Conversion & Decision-Making
- Use when: Use when designing user flows leading to high-stakes decisions, and when evaluating performance and reliability requirements for critical-path features.

**Why.** A user's emotional state at the time of interaction significantly influences how they evaluate options, how risk-tolerant they are, and how much cognitive effort they invest. Negative mood states — frustration, anxiety, fatigue — impair decision quality and increase error rates. Enterprise software that frustrates users before they reach complex decisions (through slow loading, cryptic errors, or failed actions) is actively degrading the quality of the business decisions made through the tool. The path to the decision matters as much as the decision interface itself.

**Do.**
- Audit the path from login to primary decision points.
- Eliminate any frustrating, confusing, or slow interactions that users experience before reaching important decisions.
- Prioritize reliability and performance on all screens used immediately before high-stakes workflows (financial approvals, configuration commits, data publishes).
- Measure and optimize time-to-productive-state after login as a leading indicator of decision-context quality.

**Measure.** Effectiveness: Decision quality, Error rate at high-stakes decision points; Efficiency: Time-to-productive-state after login, Pre-decision frustration events; Satisfaction: User satisfaction score leading up to critical workflows; How to measure: Audit the path to key decisions for friction events (errors, slow loads, confusion); measure time-to-productive-state after login; correlate pre-decision frustration events with downstream error rates.

Sources: [100 Things #95 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/n27qvr.jpg
Notion: https://app.notion.com/p/Mood-Influences-Decision-Quality-Design-the-Path-to-Decisions-b0aa9aed5344838592a40199cac63eae

## UX-035 — Variable Rewards Drive Authentic Engagement
- Score 3 · Cognitive Psychology / Engagement Design
- Goals: Leverage Psychology to Guide User Behavior
- Use when: Use when designing intelligence/recommendation features, proactive insights, and exploratory analytics features.

**Why.** Dopamine is released during the anticipation of a reward more powerfully than during the reward itself. Unpredictable, variable rewards — discovering unexpected useful information, finding a new shortcut, receiving surprising positive feedback — generate stronger engagement than predictable, fixed rewards. For enterprise software, this means proactively surfaced insights ("Your processing time is 40% faster than last month"), discovery-oriented information architecture, and recommendation features create genuine, authentic engagement — not through artificial gamification but through legitimate information value.

**Do.**
- Design "discovery moments" — places where the system proactively surfaces valuable, unexpected information.
- These are most effective when: occasionally surfaced (not every session), genuinely valuable and data-driven (not self-promotional), and personally relevant (based on actual usage patterns).
- Avoid making these moments predictable (e.g., "Did you know?" that appears every Monday) — variability is a core feature of their effectiveness.
- Reserve them for genuinely valuable insights.

**Measure.** Engagement & Usage: Sessions per user, Active users, Feature usage; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Track feature usage rates for customization and preference controls via analytics. Use post-task surveys to measure perceived control and satisfaction, and compare retention rates between user cohorts who actively personalize their experience vs. those who do not.

Sources: [100 Things #51–52 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/0hbpsu.jpg
Notion: https://app.notion.com/p/Variable-Rewards-Drive-Authentic-Engagement-986a9aed534483d3add1019537b6d2e6

## UX-036 — Sustained Attention Design — 10-Minute Pause Points
- Score 3 · Cognitive Psychology / Attention Management
- Tags: cognitive-load, workflow, ai-patterns
- Goals: Leverage Psychology to Guide User Behavior; Reduce Cognitive Load
- Use when: Use when designing long-form data entry workflows and complex multi-stage review processes.

**Why.** Sustained attention — the cognitive capacity to maintain focused effort on a single task over an extended period — is among the most limited and fragile human cognitive resources. Research cited in Susan Weinschenk's *100 Things Every Designer Needs to Know About People* (Thing #44) demonstrates that human attention naturally cycles in approximately 10-minute intervals, with vigilance and error rates declining measurably after sustained focus exceeding this threshold without a natural break or change in stimulation.

**Measure.** Engagement & Usage: Session frequency, Active users, Abandonment rate; Effectiveness: Completion rate, Task success rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Analyze session duration distributions in analytics to identify where users drop off on long workflows. A/B test intentional pause points (progress saves, natural breaks, summary screens) at the 10-minute mark, measuring completion rate and abandonment rate for multi-step tasks.

Sources: [100 Things #44 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/jfslwj.jpg
Notion: https://app.notion.com/p/Sustained-Attention-Design-10-Minute-Pause-Points-487a9aed5344820aa6dd019cbdf40375
