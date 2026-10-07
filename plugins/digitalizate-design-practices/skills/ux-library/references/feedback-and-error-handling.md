# Feedback & Error Handling (17)

## UX-188 — Visibility of System Status
- Score 5 · Feedback & Error Handling / Real-time feedback and system communication
- Tags: performance
- Goals: Design Effective Feedback & Error States
- Use when: Apply any time the system performs an action with a consequence the user initiated — file saves, submissions, background processing, data loads. Essential whenever there is any latency between action and outcome.

**Why.** The system must always keep users informed about what is going on through timely, appropriate feedback. Predictable interactions build trust; silent systems create confusion and loss of confidence. The Doherty Threshold establishes that responses must arrive within 400ms to maintain flow — anything slower requires visible feedback. Visibility of status is the single most-violated heuristic in enterprise applications, where background processes are common.

**Do.**
- Provide immediate visual feedback within 100ms of any user action (button state change at minimum).
- Use spinners for isolated element loads under 10 seconds, skeleton screens for full-page/panel loads of 2–10 seconds, and progress bars with time estimates for operations over 10 seconds.
- For operations completing in under 1 second, show a brief success indicator (toast or inline checkmark) to confirm the action registered.
- Never leave the user with no signal that their action was received.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Log error and retry events in analytics to measure how often users act without feedback; run moderated usability tests comparing interfaces with and without clear status indicators to track task success and confidence ratings.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/)
Wireframe: https://files.catbox.moe/hw0dh9.jpg
File: library/feedback-and-error-handling/UX-188-visibility-of-system-status.md

## UX-189 — Error Messages — Plain Language with Constructive Solutions
- Score 5 · Feedback & Error Handling / Error message writing and presentation
- Tags: ai-patterns, forms, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Apply to all system errors, form validation messages, permission errors, empty result states, and API failures. Every error state is an opportunity to demonstrate respect for the user's time.

**Why.** "An error occurred" is useless. Error messages must precisely describe what went wrong in the user's vocabulary and offer a constructive path to resolution. Use bold, high-contrast, red text plus an icon (never color alone — accessibility). Errors placed far from the problematic input force users to remember the error while hunting for the field. Alert components should use four semantic levels: informational (blue), success (green), warning (yellow), error (red) — each with both color AND an icon for accessibility compliance.

**Do.**
- Be specific: "Please enter a valid US phone number (e.g., 555-867-5309)" not "Invalid input." Suggest remedies where possible — offer buttons or links that directly resolve the error.
- Use non-blaming, neutral tone; avoid "illegal," "invalid," "you failed to." Position error messages adjacent to the UI element requiring correction.
- Preserve the user's original input so they correct rather than re-enter.
- For field-level errors, show inline below the field; for form-level or page-level errors, use an alert banner at the top of the affected context.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track support ticket volume for error-related help requests before and after rewriting error messages in plain language with actionable recovery steps. Run usability tests measuring recovery time (time from error state to successful task completion) to quantify how constructive error messages accelerate self-service resolution.

Sources: [Nielsen Norman Group — Error Message Guidelines](https://www.nngroup.com/articles/error-message-guidelines/) · [Nielsen Norman Group — 10 Design Guidelines for Errors in Forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/) · [Component Gallery — Alert / Notification Banner](https://component.gallery/components/alert/) · [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux) · [About Face 4th Ed., Ch. 15 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/20f2u8.jpg
File: library/feedback-and-error-handling/UX-189-error-messages-plain-language-with-constructive-solutions.md

## UX-190 — Error Severity Categorization — Match Presentation to Impact
- Score 5 · Feedback & Error Handling / Error severity and notification matching
- Tags: accessibility, forms, navigation, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Use when designing the full notification and error system for any enterprise application. Prevents "error fatigue" where users reflexively dismiss all alerts.

**Why.** Not all errors warrant equal interruption. A missing optional annotation differs from an action that will permanently delete data. Mismatching presentation to severity trains users to dismiss all alerts — including critical ones — because low-priority issues are over-engineered with high-interruption patterns. The system must have a tiered taxonomy that scales presentation with consequence. Over-using modals for non-critical errors is one of the most common and damaging patterns in enterprise software.

**Do.**
- Low-impact informational: labels, toasts, inline banners that auto-dismiss.
- Medium-impact errors requiring user action: inline validation messages, persistent action-required banners.
- Critical errors blocking workflow: modal dialogs requiring acknowledgment before proceeding.
- Never use modals for non-critical error types.
- Dismissible alerts for informational messages; persistent, non-dismissible for system warnings requiring action.
- Error alerts must explain what went wrong AND how to fix it.

**Measure.** Effectiveness: Error rate, Task success rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Track error dismissal and recovery action rates by severity level in analytics to confirm users respond appropriately; run usability tests to measure whether severity-matched presentations (toast vs. modal vs. inline) improve task success rate.

Sources: [Nielsen Norman Group — Indicators, Validations, and Notifications](https://www.nngroup.com/articles/indicators-validations-notifications/) · [Component Gallery — Alert](https://component.gallery/components/alert/) · [Component Gallery — Toast](https://component.gallery/components/toast/) · [Stack Overflow UX Discussion](https://stackoverflow.com/questions/735701/long-forms-best-way-to-display-errors-usability-question)
Wireframe: https://files.catbox.moe/t6mmfw.jpg
File: library/feedback-and-error-handling/UX-190-error-severity-categorization-match-presentation-to-impact.md

## UX-191 — Provide Sufficient Context in Notifications
- Score 5 · Feedback & Error Handling / Notification content standards
- Goals: Design Effective Feedback & Error States; Reduce Cognitive Load
- Use when: Apply to any notification triggered by asynchronous system events — batch job completion, assignment changes, alerts, approvals needed. Users may be focused elsewhere when notifications arrive.

**Why.** Unlike validations that appear in direct response to user actions, notifications can arrive while the user is focused on something entirely different. The notification must establish enough context for the user to understand what happened without requiring them to remember system state from elsewhere. Vague notifications ("Your package has been updated") force users to navigate to find out what happened — a costly interruption that provides no value.

**Do.**
- Include in every notification: what happened, which record/entity is affected (by name/ID, not just type), and what action (if any) is needed.
- Example: "Invoice #4821 was approved by Sarah Chen" not "An invoice was approved." Provide a direct action link within the notification taking users to the relevant context.
- For contextual notifications, include an icon indicator on the specific UI element affected.
- For long-running process completions, include a brief summary of results inline in the notification.

**Measure.** Effectiveness: Notification action rate, Context comprehension rate; Efficiency: Time-to-action on notifications, Support ticket reduction; Satisfaction: Notification usefulness score, User trust; How to measure: Track notification click-through and action rates as proxy for context sufficiency; measure support tickets where users couldn't understand what a notification meant; survey on notification usefulness.

Sources: [Nielsen Norman Group — Indicators, Validations, and Notifications](https://www.nngroup.com/articles/indicators-validations-notifications/)
Wireframe: https://files.catbox.moe/epr585.jpg
File: library/feedback-and-error-handling/UX-191-provide-sufficient-context-in-notifications.md

## UX-192 — Opt-Out Confirmation for High-Consequence Actions
- Score 5 · Feedback & Error Handling / Confirmation patterns for irreversible actions
- Goals: Design Effective Feedback & Error States
- Use when: Apply to genuinely irreversible, high-consequence actions where undo is architecturally impossible — permanent data purge, account deletion, irreversible bulk writes.

**Why.** While undo is preferred over confirmation dialogs for reversible actions, genuine confirmations are essential for irreversible, high-consequence operations. The distinction: use undo for soft-delete and reversible actions; use confirmation dialogs only when the action is permanent and high-cost. Confirmation dialog design must be specific about the consequence ("This will permanently delete 47 records and cannot be undone") not vague ("Are you sure?").

**Do.**
- Reserve confirmation dialogs for permanent, high-consequence, architecturally irreversible operations.
- Make confirmation copy specific: "This will permanently delete 47 records and cannot be undone" not "Are you sure?" Require users to type a specific word (e.g., the entity name) to confirm for the most severe destructions.
- Make the Cancel/safe option the default focused button (not the destructive action).
- Label the destructive button unambiguously ("Delete 47 Records Forever" not "OK").
- Never use confirmation dialogs for reversible actions — use undo instead.

**Measure.** Effectiveness: Error rate, Task success rate; Efficiency: Support tickets reduction; Satisfaction & Perception: CSAT, Confidence rating; Adoption & Retention: Renewed subscriptions; How to measure: Track accidental deletion or cancellation incidents via event logging; A/B test opt-out confirmation dialogs against direct-action flows to measure error rate reduction and downstream support ticket volume.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Good UI — Undo Instead of Confirmation Dialogs](https://goodui.org/#8)
Wireframe: https://files.catbox.moe/vbgov9.jpg
File: library/feedback-and-error-handling/UX-192-opt-out-confirmation-for-high-consequence-actions.md

## UX-193 — Design Error Recovery Paths at Every Failure Point
- Score 5 · Feedback & Error Handling / Error recovery design
- Tags: ai-patterns, error-handling
- Goals: Build Trust & Reduce User Anxiety; Design Forms That Work; Design Effective Feedback & Error States
- Use when: Apply when specifying behavior for any interactive workflow — map all possible failure points and design explicit recovery paths for each.

**Why.** The "malfunction" dimension of interaction design requires explicitly designing for error recovery paths at every failure point in a workflow — not just the happy path. System errors, permission failures, network timeouts, and data validation failures are all failure points that users will encounter in production. Each must have an explicitly designed recovery path that preserves context, explains the problem, and offers a next step. These recovery moments are peak experiences (per the Peak-End Rule) and define lasting impressions of product quality.

**Do.**
- Map complete workflows end-to-end including all failure points.
- For each failure type (network timeout, permission error, validation failure, data conflict), design an explicit recovery path: explain what happened, preserve context and input, offer a specific next action.
- Never show a generic "Something went wrong" with no path forward.
- For partial successes in batch operations, show which records succeeded and which failed with specific reasons.
- Test error recovery with deliberate fault injection during QA.

**Measure.** Effectiveness: Task success rate, Error rate, Completion rate; Efficiency: Support tickets reduction; Satisfaction & Perception: CSAT, Ease-of-use score; Adoption & Retention: Returning visitors, Renewed subscriptions; How to measure: Instrument error events and recovery actions in analytics to track error-to-recovery rate; compare task completion rate before and after adding recovery paths at key failure points, and monitor CSAT scores submitted after error encounters.

Sources: [Boxes and Arrows — Foundations of Interaction Design](https://boxesandarrows.com/foundations-of-interaction-design/) · [Laws of UX — Peak-End Rule](https://lawsofux.com/peak-end-rule/)
Wireframe: https://files.catbox.moe/phq1u3.jpg
File: library/feedback-and-error-handling/UX-193-design-error-recovery-paths-at-every-failure-point.md

## UX-194 — Inline Error Messages — Proximity to Source Field
- Score 5 · Feedback & Error Handling / Error Message Placement
- Tags: forms, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Use for all form validation in all contexts.

**Why.** Position error messages directly adjacent to the field that caused the error — below the input field is the standard expected position. Errors displayed only at the top or bottom of a form require users to hunt for which field needs correction. Proximity between error message and error source is the single most important factor in error comprehension. For accessibility, errors must also be identified programmatically, not just visually, so screen reader users receive the same information.

**Do.**
- Place error message text directly below the input field.
- Apply a red or error-color border to the input itself.
- Use an error icon (⚠) at the start of the message for redundancy — never rely on color alone.
- Associate the message with the field using `aria-describedby`.
- Apply `aria-invalid="true"` on erroneous input fields.
- Use `role="alert"` on error message containers for live announcement to screen readers.

**Measure.** Effectiveness: Error rate, Completion rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test inline error messages at field level versus top-of-form error summaries, measuring form completion rate, error-correction time, and post-submit CSAT; track the number of resubmission attempts per session as a secondary efficiency indicator.

Sources: [Stack Overflow UX Discussion](https://stackoverflow.com/questions/735701/long-forms-best-way-to-display-errors-usability-question) · [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
Wireframe: https://files.catbox.moe/0o0pht.jpg
File: library/feedback-and-error-handling/UX-194-inline-error-messages-proximity-to-source-field.md

## UX-195 — Graceful Degradation for Network Errors
- Score 5 · Feedback & Error Handling / Network Error Handling
- Tags: error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Use in all web and mobile applications that make network requests, especially enterprise apps used in variable connectivity environments.

**Why.** Network and server errors should never leave users stranded on a blank screen, broken state, or lost data. Provide a clear error message explaining what happened, retain any unsaved user input, and offer a clear recovery path (retry, save draft, contact support). Where possible, implement offline-first patterns that queue operations for when connectivity is restored. Enterprise users who lose work due to unexpected network failures lose trust in the application rapidly and permanently.

**Do.**
- Implement a global error boundary component that intercepts all unhandled network errors.
- Add offline detection with a user-friendly persistent banner ("You're offline — changes will sync when you reconnect").
- Provide a retry button with exponential backoff on transient errors.
- Auto-save form state to localStorage as a safety net against data loss.
- Surface a "Reconnected — syncing your changes" confirmation when connectivity is restored.

**Measure.** Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: CSAT, Ease-of-use score; Engagement & Usage: Abandonment rate, Bounce rate; How to measure: Monitor task abandonment and retry rates during network-error events in analytics; compare CSAT scores collected after error encounters between interfaces with graceful degradation messages versus raw error states.

Sources: [Carbon Design System — Notification Pattern](https://carbondesignsystem.com/patterns/notification-pattern/)
Wireframe: https://files.catbox.moe/t5al8k.jpg
File: library/feedback-and-error-handling/UX-195-graceful-degradation-for-network-errors.md

## UX-196 — Change Blindness — Mark State Changes Explicitly
- Score 5 · Feedback & Error Handling / Real-Time Data Communication
- Tags: animation, data-heavy
- Goals: Design Effective Feedback & Error States
- Use when: Use when designing real-time data displays, status indicators, and alerting systems for monitoring or operational dashboards.

**Why.** Users miss changes in their visual field unless the change is in their area of focus, is immediately adjacent to where they're looking, or is accompanied by an animation or sound that draws peripheral attention. In enterprise applications with real-time data updates — dashboards, monitoring tools, live feeds — updated values that appear without visual emphasis are frequently missed entirely, with serious operational consequences. Even subtle changes in critical metrics can go unnoticed for minutes if the update is not visually marked.

**Do.**
- Mark all changed values with a temporary highlight animation (background color flash or border pulse) that draws attention to the specific element that changed.
- The animation should last 1–2 seconds then fade.
- Provide persistent visual indicators for values outside normal ranges (color coding, icons).
- Consider audible alerts for critical state changes in operational monitoring contexts.
- Test real-time update visibility with eyes-off testing — values should be noticed within 10 seconds of change.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Error counts, Support tickets reduction; Satisfaction & Perception: Confidence rating, Ease-of-use score; How to measure: Run usability tests with tasks involving state changes; measure whether users notice the change (observation) and count errors caused by overlooked state updates; track support tickets citing confusion about current state before and after implementing explicit change markers.

Sources: [100 Things #8 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/1js1lb.jpg
File: library/feedback-and-error-handling/UX-196-change-blindness-mark-state-changes-explicitly.md

## UX-197 — Habituation — Calibrate Alert Frequency to Maintain Urgency
- Score 5 · Feedback & Error Handling / Alert System Design
- Goals: Design Effective Feedback & Error States; Reduce Cognitive Load
- Use when: Use when designing notification and alerting systems, especially for monitoring dashboards and operational applications with high event volume.

**Why.** When an attention-getting mechanism appears frequently, users rapidly habituate and stop perceiving it as urgent. The more an alert fires, the less attention it commands. Enterprise monitoring dashboards and alert systems that fire too frequently create "alert fatigue" — where critical alerts are missed because users have learned to ignore the signal. Alert threshold calibration is as important as alert visual design. If every threshold breach triggers a red alert, red becomes meaningless.

**Do.**
- Implement alert severity tiers with strictly enforced thresholds.
- Reserve the highest visual urgency tier (red, prominent, potentially audible) for genuinely critical events that require immediate action.
- Any alert that fires more than 10 times per day should be re-evaluated — its threshold is wrong or it should be downgraded to informational.
- Route medium-priority alerts to aggregated summaries or a notification inbox rather than real-time interruptions.
- Conduct quarterly alert volume reviews to identify and recalibrate over-firing alerts.

**Measure.** Effectiveness: Critical alert response rate, Alert false positive rate; Efficiency: Mean time to detect critical issues, Alert fatigue reduction; Operational: Incident response time, Alert noise-to-signal ratio; How to measure: Track alert response rate by severity tier; measure time-to-acknowledge for critical alerts; monitor daily alert volume per tier and flag any tier exceeding 10 alerts/day for recalibration.

Sources: [100 Things #43, #45 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/z8wuhs.jpg
File: library/feedback-and-error-handling/UX-197-habituation-calibrate-alert-frequency-to-maintain-urgency.md

## UX-198 — Success State Confirmation
- Score 5 · Feedback & Error Handling / Feedback Delivery
- Tags: forms
- Goals: Design Effective Feedback & Error States
- Use when: Use after all form submissions, save operations, exports, and any consequential user action.

**Why.** After a user completes an action, provide a brief, clear success confirmation. Without feedback, users are uncertain whether their action was registered and may repeat it — causing duplicate records, duplicate submissions, or duplicate exports. The feedback should be proportional to the action's significance: a toast notification for small actions, an inline success message for form completions, and a dedicated success screen for high-stakes actions like onboarding completion or order placement. Tell users not just that something succeeded but what was affected.

**Do.**
- Small actions: toast notification with success icon, auto-dismiss after 4–6 seconds, max 2 lines of text.
- Form-level success: inline success message replacing or augmenting the form.
- Destructive action confirmations: show what was affected ("3 items deleted").
- If the user can take a useful next action, include it in the success state ("View report" or "Back to list").
- For high-stakes actions, the success state should remain visible until the user navigates away.

**Measure.** Effectiveness: Action completion confidence, Duplicate submission rate reduction; Efficiency: Support tickets for 'did it work?' questions; Satisfaction: User trust, Post-action satisfaction; How to measure: Track duplicate submission rates before and after success confirmation; measure support tickets where users repeated actions due to uncertain state; run usability tests counting user uncertainty after completing key actions.

Sources: [AlterSquare — Microinteractions](https://altersquare.io/micro-interactions-that-actually-improve-user-experience-with-examples/)
Wireframe: https://files.catbox.moe/7b9k57.jpg
File: library/feedback-and-error-handling/UX-198-success-state-confirmation.md

## UX-199 — Undo Feedback Toast
- Score 5 · Feedback & Error Handling / Action Feedback
- Tags: error-handling
- Goals: Build Trust & Reduce User Anxiety; Design Effective Feedback & Error States; Reduce Cognitive Load
- Use when: After any destructive or high-impact action — delete, archive, move, status change — especially when undo is technically supported but not visually obvious.

**Why.** After destructive or high-impact actions, immediately showing a toast notification with an "Undo" link (e.g., "3 records deleted — Undo") lets users reverse actions instantly without navigating to a menu. The toast should persist for at least 5–7 seconds to give users time to notice and react. This pattern converts what would be a permanent action into a soft-commit with a grace period — dramatically reducing support requests and user anxiety around bulk operations.

**Do.**
- Trigger automatically after the action completes (not on request to perform it).
- Toast content: action description ("3 items archived"), Undo link, and a countdown progress bar.
- Keep the undo stack consistent with the toast — if the toast expires, the action is committed.
- Handle re-undo gracefully (if undo is triggered, show a "Undo successful — 3 items restored" confirmation toast).
- Position at bottom-right.

**Measure.** Effectiveness: Error rate, Task success rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Track the undo action rate in analytics (how often users invoke the toast undo) to understand the frequency of accidental actions. Run usability tests where participants must recover from a mistaken deletion, measuring recovery time and confidence ratings with and without the undo toast.

Sources: [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
Wireframe: https://files.catbox.moe/y6k5xx.jpg
File: library/feedback-and-error-handling/UX-199-undo-feedback-toast.md

## UX-200 — Error State Messaging with Resolution Guidance
- Score 5 · Feedback & Error Handling / Error Messages
- Tags: ai-patterns, forms, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: All validation errors, system errors, permission errors, and failed operations throughout the application. Generic error messages are the most common source of unnecessary support tickets.

**Why.** Error messages in enterprise applications must answer three questions: (1) What went wrong? (2) Why did it happen? (3) What should I do next? Generic messages like "An error occurred" or "Invalid input" are worse than useless — they add confusion without providing resolution. Specific, actionable error messages reduce support burden, user frustration, and task abandonment. They also communicate that the system is transparent and trustworthy.

**Do.**
- Error anatomy: (1) Short headline describing what failed; (2) Plain-language explanation of why; (3) Specific action to resolve — link to relevant documentation, retry button, or contact support with a pre-populated error code.
- For form validation: show errors inline adjacent to the field immediately after blur (not only on submit).
- For system errors: display a support-friendly error code alongside the human message so users can reference it in a ticket.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure error recovery rate (percentage of users who successfully resolve an error state without abandoning) before and after implementing resolution guidance in error messages. Track support ticket volume for error-state categories and monitor task completion rates on error-prone flows over time.

Sources: [Carbon Design System — Notifications](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/o2a145.jpg
File: library/feedback-and-error-handling/UX-200-error-state-messaging-with-resolution-guidance.md

## UX-201 — Unified Notification and Feedback System
- Score 5 · Feedback & Error Handling / Notifications
- Tags: design-system
- Goals: Design Effective Feedback & Error States; Reduce Cognitive Load
- Use when: Throughout the entire application. Consistent feedback patterns are a core indicator of design system maturity. Inconsistent feedback creates cognitive overhead as users parse what each notification type means.

**Why.** A unified notification system for all user-facing feedback — toast for non-critical confirmations (3–5 second auto-dismiss), inline banner for persistent actionable alerts, modal for critical decisions — prevents the fragmented notification experience common in enterprise applications that have grown organically. When every team ships their own notification pattern, users must develop a new mental model for each section of the application.

**Do.**
- Toast position: bottom-left or bottom-right, stacked vertically for multiple simultaneous notifications.
- Four states: success (green), warning (amber), error (red), informational (blue).
- Toast: brief message + optional Undo link.
- Banner: top of affected content area, persists until dismissed.
- Modal: reserved only for destructive action confirmations and critical system alerts — not informational messages.
- Define in the design system and enforce via code review.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Engagement & Usage: Feature usage, Active users; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track how often users dismiss versus act on notifications to assess relevance and clarity. Monitor support ticket volume for notification-related confusion and measure time-to-acknowledge-critical-alerts in usability sessions to verify that a unified system reduces cognitive overhead versus a fragmented notification approach.

Sources: [Carbon Design System — Notifications](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/52tnkq.jpg
File: library/feedback-and-error-handling/UX-201-unified-notification-and-feedback-system.md

## UX-202 — Confirmation Dialogs for Destructive Actions
- Score 5 · Feedback & Error Handling / Destructive Action Safety
- Goals: Design Effective Feedback & Error States
- Use when: Any action that is difficult or impossible to reverse — permanently deleting records, bulk archiving, overwriting data, revoking permissions.

**Why.** Actions that are irreversible must require explicit user confirmation — this is one of the oldest and most important principles in interface design. The confirmation dialog must clearly describe what will be affected (item count, names) and the consequences, not just ask a generic "Are you sure?" A specific dialog ("Permanently delete 14 records? This cannot be undone. All associated comments and attachments will also be deleted.") allows users to make an informed decision rather than a reflex response.

**Do.**
- Confirmation dialog anatomy: specific title (count/names), consequence description, Cancel (secondary, left) and Delete/Confirm (danger red, right) buttons.
- Never make the destructive action the Enter key default.
- For highest-severity actions (delete account, wipe tenant data): require typing the resource name to confirm (a pattern established by AWS, GitHub, and Vercel).
- Calibrate confirmation friction to severity — soft undo toast for reversible actions, typed confirmation for permanent ones.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Error counts, Support tickets reduction; Satisfaction & Perception: Confidence rating, Ease-of-use score; How to measure: Track accidental deletion or destructive action support tickets before and after introducing confirmation dialogs; run usability tests to measure whether the dialog is read and understood versus dismissed without reading, indicating whether friction is appropriate.

Sources: [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux) · [Carbon Design System — Dialogs](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/f7c10t.jpg
File: library/feedback-and-error-handling/UX-202-confirmation-dialogs-for-destructive-actions.md

## UX-203 — Descriptive Wizard Navigation Button Labels
- Score 4 · Feedback & Error Handling / Dialog Design
- Tags: workflow, forms, navigation
- Goals: Design Effective Feedback & Error States
- Use when: Use in all modal dialogs with primary and secondary actions, especially for destructive or consequential operations.

**Why.** Modal action buttons should describe the specific action that will occur rather than using generic labels like "OK," "Yes," or "Confirm." Descriptive labels reduce cognitive load and eliminate ambiguity, particularly for destructive actions where the cost of a mistake is high. "Delete Project" is unambiguous; "OK" requires the user to hold the full context of the dialog in mind to understand what they're confirming. This principle also applies to cancel buttons — "Cancel" is standard, but "Keep Editing" can be more informative in context.

**Do.**
- Primary action: verb + noun describing what happens ("Save Changes," "Delete Account," "Export Report," "Archive Order").
- Secondary action: "Cancel" or "Go Back." For destructive actions, use a danger/red color on the primary button in addition to the descriptive label.
- Avoid "Yes" / "No" button pairs — they force users to read the dialog body to understand what each button does, which creates errors when dialogs are dismissed quickly.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: A/B test descriptive labels (e.g., 'Save and continue to Billing') versus generic labels ('Next') in multi-step wizards, measuring completion rate, back-navigation rate, and post-task confidence rating.

Sources: [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux) · [Nielsen Norman Group — Wizards: Definition and Design Recommendations](https://www.nngroup.com/articles/wizards/)
Wireframe: https://files.catbox.moe/z7srb8.jpg
File: library/feedback-and-error-handling/UX-203-descriptive-wizard-navigation-button-labels.md

## UX-204 — Notification Center with Categorization
- Score 4 · Feedback & Error Handling / Notifications
- Tags: workflow
- Goals: Design Effective Feedback & Error States; Reduce Cognitive Load
- Use when: Any enterprise application with background events, multi-user activity, approval workflows, or system alerts.

**Why.** Enterprise applications generate a constant stream of background events — approval completions, system alerts, teammate actions, and status changes — that collectively define the user's working context. Without a structured notification center, these events either interrupt users via toast notifications at the worst possible moment or go entirely unnoticed, buried in activity logs users never consult. Research on interruption costs (Czerwinski et al., 2004) demonstrates that task-switching triggered by notifications can cost an average of 23 minutes of recovery time per interruption, making uncontrolled notification delivery one of the highest-friction patterns in enterprise UX.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Findability score; Engagement & Usage: Feature usage, Active users; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track notification center open rates and categorized tab usage in analytics to assess how users navigate notifications. Run usability tests measuring time to locate a specific notification type, comparing a categorized center against a chronological-only feed, and survey users on perceived notification manageability.

Sources: [Carbon Design System — Notifications](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/c2nl3k.jpg
File: library/feedback-and-error-handling/UX-204-notification-center-with-categorization.md
