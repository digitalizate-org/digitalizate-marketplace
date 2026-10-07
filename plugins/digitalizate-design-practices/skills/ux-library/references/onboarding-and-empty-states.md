# Onboarding & Empty States (12)

## UX-292 — Empty States — Communicate System Status Honestly
- Score 5 · Onboarding & Empty States / Empty state design — learnability and activation
- Tags: onboarding, performance
- Goals: Increase User Engagement & Retention; Optimize Onboarding & First-Time Experience; Build Trust & Reduce User Anxiety
- Use when: Apply to any feature panel that begins empty for new users: alerts, dashboards, saved reports, favorites, recently viewed — the highest-leverage moment for in-context education.

**Why.** Empty states appear most often when users first interact with a feature — the moment learning is most relevant. A brief explanation of what the panel displays and how to populate it converts a void into a learning opportunity. Including a direct CTA button launching the workflow to populate the state removes the barrier of users having to figure out where to go next. This "pull revelation" pattern is more effective than tutorial flows because help appears precisely when the user is in the relevant context.

**Do.**
- Include a brief description of what content belongs here and why it's valuable.
- Provide an example or illustration showing the populated state.
- Include a primary CTA button that launches the workflow to populate the state ("Create Your First Alert").
- Include a secondary "Learn More" link for users wanting context before acting.
- Where appropriate, offer multiple pathways (import data / start from scratch / view demo data).
- Notably: Atlassian, PatternFly, and Orbit all provide detailed empty state guidelines following this structure.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: CSAT, Ease-of-use score; Engagement & Usage: Abandonment rate, Bounce rate; How to measure: Monitor abandonment rate on pages that previously showed blank or confusing empty states using analytics; run usability tests to measure whether users understand system status and can self-recover without errors.

Sources: [Nielsen Norman Group — Designing Empty States in Complex Applications](https://www.nngroup.com/articles/empty-state-interface-design/) · [Component Gallery — Empty State](https://component.gallery/components/empty-state/) · [Good UI — Zero-Data / Empty States](https://goodui.org/#25) · [Interaction Design Foundation — Microinteractions](https://www.interaction-design.org/literature/article/micro-interactions-ux) · [100 Things #34 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Eleken — Empty State UX](https://www.eleken.co/blog-posts/empty-state-ux)
Wireframe: https://files.catbox.moe/m6kdmd.jpg
Notion: https://app.notion.com/p/Empty-States-Communicate-System-Status-Honestly-da9a9aed5344823a904381752d81c313

## UX-293 — Promote Learning by Doing — Safe Exploration
- Score 5 · Onboarding & Empty States / Enterprise onboarding design
- Tags: onboarding, error-handling
- Goals: Reduce Learning Curve for Complex Tools; Optimize Onboarding & First-Time Experience
- Use when: Apply during the initial use phase and ongoing discovery of advanced features in any complex desktop application.

**Why.** Research shows users prefer to start using an application immediately rather than consume tutorials — the "paradox of the active user." Support exploration through trial and error without risking data loss. Users must be able to experiment safely. Forcing tutorials before use delays value delivery and increases abandonment. The goal is making mistakes recoverable, not preventing all mistakes. Robust undo/redo is the primary mechanism enabling safe exploration.

**Do.**
- Provide robust undo/redo for all meaningful actions.
- Make default states safe — data is preserved, destructive actions require explicit confirmation.
- Avoid forcing tutorials before product use.
- Limit the ability to carry out long action sequences without seeing interim results (e.g., real-time preview during dashboard construction).
- Allow concurrent tasks where multiple processes can be in progress simultaneously.
- Design failure modes to be recoverable: soft deletes, autosave, draft preservation.

**Measure.** Adoption & Retention: Feature usage, Returning visitors, Account creation rate; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, Ease-of-use score, NPS; How to measure: Track sandbox or guided tutorial completion rates and measure feature adoption rates for users who learn through safe exploration vs. those who skip tutorials. Compare error rates in the first 7 days for users who explored in a low-stakes environment vs. those dropped into production immediately.

Sources: [Nielsen Norman Group — 8 Guidelines for Complex Applications](https://www.nngroup.com/articles/complex-application-design/)
Wireframe: https://files.catbox.moe/dvey65.jpg
Notion: https://app.notion.com/p/Promote-Learning-by-Doing-Safe-Exploration-1d4a9aed53448234b2ee0187bd532eeb

## UX-294 — Contextual Tooltip Help System
- Score 5 · Onboarding & Empty States / In-App Help
- Tags: forms
- Goals: Reduce Learning Curve for Complex Tools; Optimize Onboarding & First-Time Experience
- Use when: All complex forms, settings pages, data entry fields with specific format requirements, and features with non-obvious behavior. Essential in admin panels and configuration interfaces.

**Why.** Embedding contextual help via tooltips and inline guidance directly in the interface via ⓘ icons replaces the costly "open a new tab, search the documentation, find the right page" workflow with an instant, in-context answer. In enterprise software that is often used monthly for specific tasks, users cannot be expected to retain knowledge of every field and setting — the interface must be self-documenting. Tooltips that include examples, format expectations, and impact descriptions are particularly valuable.

**Do.**
- Tooltip trigger: ⓘ icon or underlined label text.
- Content: what the field does, expected input format, example value, and impact of the setting.
- Keep under 60 words.
- For complex features, link to full documentation from the tooltip.
- Build tooltips into the design system as a standard component.
- Track which tooltips are accessed most frequently — high-access tooltips indicate confusing UI that should be redesigned.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare support ticket volume for tooltip-covered features before and after deployment; measure task success rate and time-on-task in usability tests with contextual tooltip help available versus without it.

Sources: [UXpilot — Enterprise UX Best Practices](https://uxpilot.ai/blogs/enterprise-ux-design) · [Document360 — Contextual In-App Documentation](https://document360.com/blog/contextual-in-app-documentation/)
Wireframe: https://files.catbox.moe/f5nwya.jpg
Notion: https://app.notion.com/p/Contextual-Tooltip-Help-System-d28a9aed5344826f91918108f8c91d81

## UX-295 — Help and Documentation — Contextual and Task-Focused
- Score 4 · Onboarding & Empty States / In-context help and documentation
- Tags: search
- Goals: Reduce Learning Curve for Complex Tools; Optimize Onboarding & First-Time Experience
- Use when: Apply in complex enterprise tools with non-obvious workflows, advanced features, and specialized domain concepts where users cannot intuit the system.

**Why.** The best designs don't need explanation, but complex enterprise tools unavoidably require some. Help documentation must be easy to search, focused on the user's task, concise, and list concrete steps — not explanatory prose. The key insight is context: help delivered at the moment of need (in-app, adjacent to the task) is dramatically more effective than documentation in a separate help center. Empty states are high-value delivery points because the user is already in the context that needs explanation.

**Do.**
- Make help documentation fully text-searchable within the app.
- Present documentation in context — tooltips, inline help panels, or contextual sidebars — at the moment of need.
- List concrete numbered steps rather than explanatory prose.
- Use empty states to provide learning cues for unconfigured features.
- Keep help content physically close to the action it explains; a separate help center alone is insufficient for complex workflows.
- Surface a searchable command palette as an in-app discovery mechanism.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare support ticket volume and help-page exit rates before and after contextualizing documentation; run task-based usability tests measuring success rate and time-on-task with in-context help available.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
Wireframe: https://files.catbox.moe/fgckes.jpg
Notion: https://app.notion.com/p/Help-and-Documentation-Contextual-and-Task-Focused-347a9aed5344833aa6ff819363341304

## UX-296 — Gradual Engagement — Demonstrate Value Before Commitment
- Score 4 · Onboarding & Empty States / Trust building and value-first onboarding
- Goals: Optimize Onboarding & First-Time Experience
- Use when: Apply to free trial onboarding, new module adoption within an existing product, and exploring advanced features where demonstrating value before asking for commitment increases conversion.

**Why.** Instead of asking users to commit (configure, pay, connect data) immediately, allowing them to first experience the product's value through interaction dramatically increases conversion. Delayed commitment converts better because users have experienced value before being asked to give something. This applies within existing products for new feature adoption — showing a preview of a module's value before requiring the user to connect their own data.

**Do.**
- Show a preview of a module's value (sample data, demo state) before requiring the user to connect their own data.
- Let users explore and configure before requiring setup — save their work and prompt setup at a natural stopping point.
- Surface feature value through in-app "try it" modes before prompting upgrade.
- For new module adoption, provide a populated demo state that users can explore before activating with real data.
- Delay data connection requirements until users have seen enough value to justify the connection effort.

**Measure.** Adoption & Retention: Account creation rate, Signup completion rate, Returning visitors; Revenue: Conversion rate, Revenue per user; Engagement & Usage: Active users, Abandonment rate; How to measure: A/B test onboarding flows that require commitment (registration) before value demonstration against those that demonstrate value first, measuring signup conversion rate and time-to-first-value. Track drop-off rates at commitment gates before and after restructuring gradual engagement sequences.

Sources: [Good UI — Gradual Engagement](https://goodui.org/#22)
Wireframe: https://files.catbox.moe/vvy8nz.jpg
Notion: https://app.notion.com/p/Gradual-Engagement-Demonstrate-Value-Before-Commitment-260a9aed534483759889816ba8a7ff9d

## UX-297 — Promote Learnability Through In-Context Tips and Cues
- Score 4 · Onboarding & Empty States / In-context learning and discoverability
- Goals: Reduce Learning Curve for Complex Tools; Optimize Onboarding & First-Time Experience
- Use when: Apply throughout the product lifecycle, not just during onboarding. Expert users plateau — in-context tips resurface capability they missed or forgot.

**Why.** In-context learning cues — tips, hints, and feature callouts triggered by relevant user actions — are more effective than front-loaded tutorials because they appear at the moment of need. They serve two populations: new users discovering features for the first time, and experienced users who have plateaued below their potential efficiency. The key design principle: tips must appear in the context of the relevant feature, not as a generic "tips panel" disconnected from the task.

**Do.**
- Trigger feature tips from user actions (hovering over a toolbar item, performing a repetitive manual operation that could be automated).
- Use empty state messages to explain feature value at the moment of first encounter.
- Surface keyboard shortcut hints passively in tooltips on icon buttons.
- Create progressive tip sequences — surface advanced features only after foundational ones are mastered.
- Allow users to dismiss tips permanently if they don't want them; never re-show dismissed tips.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Training time, Support tickets reduction, Time on task; Adoption & Retention: Account creation rate, Returning visitors; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Track support ticket volume and time-to-proficiency for new users before and after adding in-context tips; measure task success rates in usability testing sessions where participants encounter features for the first time.

Sources: [Nielsen Norman Group — 8 Guidelines for Complex Applications](https://www.nngroup.com/articles/complex-application-design/) · [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
Wireframe: https://files.catbox.moe/3hh906.jpg
Notion: https://app.notion.com/p/Promote-Learnability-Through-In-Context-Tips-and-Cues-17ca9aed534483299bfa81a67286e63d

## UX-298 — Learnability Through Concrete Examples
- Score 4 · Onboarding & Empty States / Onboarding Design
- Tags: onboarding
- Goals: Reduce Learning Curve for Complex Tools; Optimize Onboarding & First-Time Experience
- Use when: Use when designing onboarding experiences, help content, and empty states for any complex feature.

**Why.** People learn new systems dramatically better from concrete examples than from abstract rules or feature lists. "Here's how to create a report" — with a step-by-step example using realistic data — teaches far more effectively than "Reports can be created by navigating to the Reports section." Empty states in enterprise applications are missed onboarding opportunities — they should show example data that demonstrates the populated experience. Abstract capability descriptions leave users to imagine use cases; concrete examples trigger immediate recognition of value.

**Do.**
- Replace all abstract feature descriptions with concrete examples using realistic (not fictional) data scenarios.
- Design empty states with realistic sample data clearly labeled as examples.
- Provide a "Use sample data" option in complex features that pre-populates a realistic scenario for new users to explore.
- In help documentation, lead with a concrete walkthrough before explaining the general rules.
- Test onboarding comprehension by asking new users to complete a task after reading the documentation — concrete examples should produce significantly better task success rates.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Use moderated usability testing to compare task success rates and error counts on interfaces with and without concrete examples; track support ticket volume related to the target feature as a longitudinal proxy.

Sources: [100 Things #34 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/dack3c.jpg
Notion: https://app.notion.com/p/Learnability-Through-Concrete-Examples-dbca9aed5344829db5ed81feb516176b

## UX-299 — First-Run Experience and Pre-Populated Samples
- Score 4 · Onboarding & Empty States / First-Run Experience
- Tags: onboarding
- Goals: Optimize Onboarding & First-Time Experience
- Use when: Complex enterprise applications where the value proposition is not immediately obvious with an empty interface — project management tools, CRMs, BI platforms.

**Why.** Pre-populating sample data or demo projects for new users makes the interface feel functional and illustrates how it should be used — transforming an intimidating blank canvas into a legible example of the product's value. "Getting started" checklists gamify onboarding and guide users toward their first meaningful action. The goal is to reduce the time between first login and first value experience ("Aha moment") from days to minutes.

**Do.**
- On first login: show a "Getting Started" checklist modal or sidebar widget with 3–5 key setup tasks, each with a one-click shortcut.
- Offer "Import sample data" and "Create from template" as alternatives to starting from scratch.
- Show a progress indicator for checklist completion (e.g., "2 of 5 steps complete").
- Hide the checklist automatically after all items are completed or after 30 days, whichever comes first.

**Measure.** Adoption & Retention: Account creation rate, Signup completion rate, Returning visitors; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, Ease-of-use score, NPS; How to measure: Compare activation rates (users who complete a meaningful first action) for new users who receive pre-populated sample content vs. those who face blank states. Track time-to-first-value as a measure of how quickly first-run experience improvements translate to engagement.

Sources: [Eleken — Empty State UX](https://www.eleken.co/blog-posts/empty-state-ux)
Wireframe: https://files.catbox.moe/keyzpg.jpg
Notion: https://app.notion.com/p/First-Run-Experience-and-Pre-Populated-Samples-0f0a9aed53448228be7d81e17d0236e0

## UX-300 — Role-Based Onboarding Flows
- Score 4 · Onboarding & Empty States / Onboarding
- Tags: onboarding, enterprise
- Goals: Optimize Onboarding & First-Time Experience; Design for Enterprise & B2B Scale
- Use when: All enterprise applications with distinct user roles that have different primary use cases — critical when the same platform serves technical admins and non-technical end users.

**Why.** Enterprise applications serve multiple roles with completely different workflows, priorities, and mental models. Showing all users the same onboarding flow forces every persona through content irrelevant to their job — an admin provisioned from Active Directory doesn't need a tutorial on how to create their first project, but the employee they provisioned does. Role-based onboarding reduces time-to-value and prevents the common enterprise scenario where users arrive at an empty interface with no guidance.

**Do.**
- Ask the user's role at signup or derive it from directory provisioning (AD group, SCIM attributes).
- Branch the onboarding checklist per role: Admin sees SSO/LDAP setup + user provisioning; Analyst sees data connection + first dashboard creation; Operator sees task queue + SLA settings.
- Track onboarding completion per role.
- Surface incomplete onboarding steps as a persistent sidebar widget until dismissed or completed.

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Training time; Satisfaction & Perception: Ease-of-use score, CSAT; Adoption & Retention: Account creation rate, Signup completion rate; How to measure: Segment onboarding completion rates and time-to-first-value by user role in your analytics platform; run usability tests with each role segment to validate that role-specific flows reduce errors and confusion.

Sources: [Code Theorem — SaaS Onboarding UX](https://codetheorem.co/blogs/saas-onboarding-ux/) · [Formbricks — User Onboarding Best Practices](https://formbricks.com/blog/user-onboarding-best-practices)
Wireframe: https://files.catbox.moe/iiyilk.jpg
Notion: https://app.notion.com/p/Role-Based-Onboarding-Flows-d26a9aed53448369b2fe017ba66cd25e

## UX-301 — Progressive Onboarding (Feature Discovery Over Time)
- Score 4 · Onboarding & Empty States / Onboarding
- Tags: onboarding
- Goals: Optimize Onboarding & First-Time Experience
- Use when: Complex enterprise applications with many features where a complete upfront tour would be overwhelming or take more than 5 minutes to cover all features.

**Why.** Rather than a single upfront product tour that users forget within 24 hours, introducing features progressively as they become relevant creates durable knowledge. A user who has just created their first record is ready to learn filtering; only after they're comfortable should bulk operations and reporting be surfaced. This mirrors how skilled trainers teach enterprise software — in context, just-in-time, not via a comprehensive lecture before any hands-on use.

**Do.**
- Build a trigger system: after the user creates their first record → show "Now try filtering your list." After 5 records → show "Try bulk select for quick updates." After regular basic use → introduce reporting features.
- Gate advanced onboarding behind usage milestones (not just time).
- Never re-show a tip the user has already acknowledged.
- Log which users have seen which tips and use this for product adoption analytics.

**Measure.** Adoption & Retention: Feature usage, Returning visitors, Renewed subscriptions; Engagement & Usage: Active users, Sessions per user, Session frequency; Satisfaction & Perception: CSAT, NPS, Ease-of-use score; How to measure: Track feature adoption curves over 30/60/90 days and compare discovery rates for features surfaced through progressive onboarding nudges vs. those not promoted. Use cohort analysis to determine whether progressive feature exposure correlates with higher long-term retention and NPS.

Sources: [Formbricks — User Onboarding Best Practices](https://formbricks.com/blog/user-onboarding-best-practices)
Wireframe: https://files.catbox.moe/ovub6i.jpg
Notion: https://app.notion.com/p/Progressive-Onboarding-Feature-Discovery-Over-Time-902a9aed534483fe917401d0f35285ff

## UX-302 — Skippable, Optional Product Tours
- Score 4 · Onboarding & Empty States / Onboarding
- Tags: onboarding
- Goals: Optimize Onboarding & First-Time Experience
- Use when: First-login experience for genuinely new users. Also offer a "Take the tour" option for returning users exploring new features after an update.

**Why.** A guided product tour (spotlight + tooltip walkthrough) must be immediately skippable at any point and cover only 3–5 critical entry points rather than every feature. Long mandatory tours increase frustration and abandonment — especially for enterprise users provisioned by IT who arrive with prior context or professional experience with similar tools. The tour is a starting point for exploration, not a comprehensive training module.

**Do.**
- Maximum 5 steps.
- Each step: spotlight effect on the target element + tooltip with 1 sentence + Next and Skip buttons.
- Always show step count ("2 of 5").
- Make the tour re-launchable from the Help menu for users who want to revisit it.
- Store tour completion in user profile to prevent reshowing.
- Offer a "Watch video walkthrough" link as an alternative for users who prefer video learning.

**Measure.** Effectiveness: Task success rate; Satisfaction & Perception: Ease-of-use score, CSAT; Adoption & Retention: Signup completion rate, Returning visitors; How to measure: Track skip rate versus completion rate for product tours in analytics; compare Day-7 retention and feature activation rates between users who complete optional tours and those who skip, to evaluate the tour's net impact without forcing friction.

Sources: [Formbricks — User Onboarding Best Practices](https://formbricks.com/blog/user-onboarding-best-practices)
Wireframe: https://files.catbox.moe/6hrocy.jpg
Notion: https://app.notion.com/p/Skippable-Optional-Product-Tours-855a9aed5344821d8b1b01bcadf1f13c

## UX-303 — Celebratory Empty States (Zero-State Completion)
- Score 3 · Onboarding & Empty States / Empty States
- Tags: onboarding
- Goals: Increase User Engagement & Retention; Optimize Onboarding & First-Time Experience
- Use when: Task queues, approval lists, notification inboxes, and support ticket queues — any list representing work items to be processed where emptiness means completion.

**Why.** The empty state — a list, queue, or inbox containing zero items — is one of the most psychologically charged moments in enterprise product design. Standard empty state design treats zero-item lists as a neutral absence requiring explanation ('No tasks found') or a prompt to begin ('Create your first task'). But in the context of task queues, support ticket inboxes, and approval lists, zero items does not mean the feature is unused — it means work has been successfully completed. These are categorically different states requiring categorically different emotional responses.

**Measure.** Satisfaction & Perception: CSAT, Satisfaction rating; Engagement & Usage: Session frequency, Active users; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Compare return-visit rate and session frequency between users who encounter celebratory empty states versus plain states via A/B test; track NPS or CSAT scores at the end of the onboarding flow to gauge emotional impact.

Sources: [Eleken — Empty State UX](https://www.eleken.co/blog-posts/empty-state-ux) · [Thom McCarthy — Mastering Empty States UX](https://www.thommccarthy.dev/blogs/mastering-empty-states-ux)
Wireframe: https://files.catbox.moe/7nw4f1.jpg
Notion: https://app.notion.com/p/Celebratory-Empty-States-Zero-State-Completion-760a9aed534482bb9fc30123e490be07
