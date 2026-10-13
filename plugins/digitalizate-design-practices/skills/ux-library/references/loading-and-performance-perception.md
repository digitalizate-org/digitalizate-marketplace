# Loading & Performance Perception (8)

## UX-268 — Skeleton Screens for Full-Page Loads (2–10 Seconds)
- Score 5 · Loading & Performance Perception / Loading Patterns
- Tags: performance, forms
- Goals: Improve Perceived Performance & Loading; Reduce Cognitive Load
- Use when: Use for page-level loads, card grids, data tables, dashboard widgets, and any container-based layout where content structure is known before data arrives.

**Why.** Use skeleton screens — animated placeholder layouts that mimic the structure of incoming content — for loading states in content-heavy applications. Unlike spinners, skeleton screens show the shape and layout of the content before it loads, dramatically reducing perceived wait time by giving users a preview of the interface structure. The skeleton must precisely match the loaded content layout — if the loaded content is a different size or arrangement, the jarring shift destroys the benefit and contributes to Cumulative Layout Shift (CLS). Include a pulsing or wave animation to communicate active loading.

**Do.**
- Create placeholder elements matching the actual content dimensions.
- Use a pulsing opacity animation or a horizontal wave/shimmer animation (preferred over static pulse) for all skeletons expected to display more than 500ms.
- Ensure loaded state matches skeleton dimensions exactly to prevent layout shift.
- Design skeleton components alongside the real components so dimension accuracy is maintained.
- Apply CSS `prefers-reduced-motion` media query to reduce animation for users who have requested it.

**Measure.** Efficiency: Page load time (perceived), Time on task; Satisfaction & Perception: Ease-of-use score, CSAT; Engagement & Usage: Bounce rate, Abandonment rate; How to measure: A/B test skeleton screens against blank loading states and measure bounce rate and abandonment rate via analytics; supplement with a post-task CSAT survey to capture perceived wait-time satisfaction.

Sources: [LogRocket — Skeleton Loading Screens](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/) · [Nielsen Norman Group — Skeleton Screens 101](https://www.nngroup.com/articles/skeleton-screens/) · [Component Gallery — Skeleton Loader](https://component.gallery/components/skeleton/) · [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/) · [Smashing Magazine — UX Strategies for Real-Time Dashboards](https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/)
Wireframe: https://files.catbox.moe/rga1i3.jpg
File: library/loading-and-performance-perception/UX-268-skeleton-screens-for-full-page-loads-210-seconds.md

## UX-269 — Match Loading Indicator to Operation Type and Duration
- Score 5 · Loading & Performance Perception / Loading indicator selection
- Tags: performance
- Goals: Improve Perceived Performance & Loading
- Use when: Apply any time a user must wait for a system operation. Mismatching indicator type to operation context causes confusion about what the system is doing.

**Why.** Skeleton screens, spinners, and progress bars serve different purposes and work best in different contexts. Using a skeleton screen for a file upload or a spinner for an expected 30-second report generation mismatches user expectations. For background tasks, a persistent progress indicator in the app header/status bar allows users to continue working rather than blocking on the current view. Determinate progress bars (0–100%) should be used when remaining work can be calculated.

**Do.**
- Spinner: use for isolated element loads (single card, table row, button state) with waits under 10 seconds.
- Skeleton screen: use for full-page or major panel loads with waits of 2–10 seconds.
- Progress bar: use for process-related operations (file upload, download, batch processing) — required for anything over 10 seconds.
- Never use a full-page spinner — replace with skeleton screen for full-page loads.
- For background tasks, use a persistent progress indicator in the header/status bar.
- Always pair progress bars with text ("Processing 1,247 of 5,000 records — ~2 min remaining").

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, Confidence rating; Engagement & Usage: Abandonment rate; How to measure: Use session recordings to identify operations where users take redundant actions (repeated clicks, navigating away prematurely) and correlate with operations that lack appropriate loading indicators. A/B test progress bars versus spinners for operations over 3 seconds, measuring abandonment rate and confidence ratings post-task.

Sources: [Nielsen Norman Group — Skeleton Screens 101](https://www.nngroup.com/articles/skeleton-screens/) · [Good UI — Faster Load Times / Progress Indicators](https://goodui.org/#39) · [Component Gallery — Progress Bar](https://component.gallery/components/progress-bar/) · [Carbon Design System — Loading](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/t19jwk.jpg
File: library/loading-and-performance-perception/UX-269-match-loading-indicator-to-operation-type-and-duration.md

## UX-270 — Doherty Threshold — Target Sub-400ms Response for Interactive Operations
- Score 5 · Loading & Performance Perception / Performance and perceived responsiveness
- Tags: performance, forms, tables
- Goals: Improve Perceived Performance & Loading
- Use when: Apply to all interactive operations in data-heavy applications — search queries, filter application, record saves, chart renders, table sorts, API calls, form validation.

**Why.** Productivity soars when a computer and users interact at a pace under 400ms, ensuring neither has to wait. Operations taking longer than 400ms break the user's flow state and signal that the system is slow — eroding trust. For operations that cannot complete in 400ms, immediate visual feedback within 100ms of the user action is the minimum requirement. Counterintuitively, adding a deliberate brief delay to a "Save" confirmation (showing a progress animation for 600ms even if the save took 50ms) can increase perceived reliability and trust.

**Do.**
- Target sub-400ms response for all interactive operations; optimize queries, add caching, paginate results server-side.
- For operations not completable in 400ms, provide immediate visual feedback (button state change, spinner) within 100ms.
- Use skeleton screens and progress indicators to reduce perceived wait.
- Animate non-critical transitions to occupy perception during background processing.
- For "Save" confirmations, show a brief progress animation even if the save was instant — this increases perceived reliability.
- Load critical above-the-fold data first; progressively load secondary panels.

**Measure.** Efficiency: Time on task, Completion time, Time saved per task; Satisfaction & Perception: Ease-of-use score, CSAT, Satisfaction rating; Engagement & Usage: Abandonment rate, Bounce rate, Sessions per user; How to measure: Measure interaction latency using performance monitoring tools (e.g., Real User Monitoring) and correlate response times against abandonment rates and satisfaction scores. A/B test optimized vs. unoptimized interactions and track session continuation rates post-interaction.

Sources: [Laws of UX — Doherty Threshold](https://lawsofux.com/doherty-threshold/)
Wireframe: https://files.catbox.moe/f1r0h6.jpg
File: library/loading-and-performance-perception/UX-270-doherty-threshold-target-sub-400ms-response-for-interactive.md

## UX-271 — Perceived Progress Reduces Wait Frustration
- Score 5 · Loading & Performance Perception / Loading State Design
- Tags: ai-patterns, performance, forms
- Goals: Build Trust & Reduce User Anxiety; Improve Perceived Performance & Loading
- Use when: Use when designing loading states for data-heavy queries, long-running processes, and any operation where users must wait more than 2 seconds.

**Why.** Users experience waiting more negatively when they have nothing to do during the wait. Loading screens and progress indicators that show forward movement are perceived more positively than blank waiting periods, even when the actual duration is the same. For enterprise applications with slow queries or data-intensive processing, designing active waiting states — showing what's being processed, displaying partial results as they arrive — significantly improves perceived performance without any change to actual performance. Perception of progress is a real UX metric, not just a superficial polish concern.

**Do.**
- Replace all blank loading spinners with descriptive progress indicators that communicate what is happening ("Loading 12 months of transaction data...").
- For operations over 3 seconds, show partial results as they arrive.
- For operations over 10 seconds, provide progress percentages and estimated completion times.
- Allow users to navigate away from long operations with a persistent background task indicator showing progress.

**Measure.** Efficiency: Completion time; Satisfaction & Perception: CSAT, Ease-of-use score; Engagement & Usage: Abandonment rate, Bounce rate; How to measure: A/B test progress bars or step indicators against blank loading screens during long operations, measuring abandonment rate and post-task CSAT; use analytics to track drop-off rates at high-latency steps.

Sources: [100 Things #77 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/xldx9p.jpg
File: library/loading-and-performance-perception/UX-271-perceived-progress-reduces-wait-frustration.md

## UX-272 — Performance Budgeting for Data-Heavy Interfaces
- Score 5 · Loading & Performance Perception / Performance Standards
- Tags: enterprise, performance, forms
- Goals: Improve Perceived Performance & Loading; Design for Enterprise & B2B Scale
- Use when: During design (IA choices affect performance), development (rendering strategy), and QA (performance regression testing). Performance is a UX feature — slow interfaces are productivity bottlenecks.

**Why.** Enterprise data-heavy applications must meet defined performance targets: initial page load <3 seconds on a corporate network, table sort/filter operations <200ms, dashboard widget render <1 second per widget, and 60 FPS scroll performance. Every millisecond beyond these thresholds translates directly into wasted time for users who may interact with the system hundreds of times per day. Performance requirements must be defined at project start, not measured at launch as an afterthought.

**Do.**
- Define performance budgets per page type in the PRD.
- For data tables: server-side pagination for >1,000 rows, virtual scrolling for rendering, debounced search/filter at 300ms, memoized sort/filter computations.
- For dashboards: lazy-load each widget independently, show skeletons immediately, prioritize above-the-fold widgets first.
- Set automated performance regression alerts in the CI/CD pipeline with failure thresholds.

**Measure.** Efficiency: Page load time, Time on task; Effectiveness: Completion rate, Task success rate; Engagement & Usage: Bounce rate, Abandonment rate; Adoption & Retention: Returning visitors, Traffic growth; How to measure: Establish a performance budget (e.g., Time to Interactive < 3s) and measure it on each release using Lighthouse or WebPageTest.

Sources: [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table) · [ROSSUL — Enterprise UX](https://www.rossul.com/2024/blog/enhancing-user-experience-in-b2b-enterprise-web-applications-ux-best-practices/)
Wireframe: https://files.catbox.moe/lii7ma.jpg
File: library/loading-and-performance-perception/UX-272-performance-budgeting-for-data-heavy-interfaces.md

## UX-273 — Progress Bars for Deterministic Operations
- Score 4 · Loading & Performance Perception / Progress Communication
- Tags: workflow, performance
- Goals: Build Trust & Reduce User Anxiety; Improve Perceived Performance & Loading
- Use when: Use for file uploads, batch data imports/exports, any multi-phase operation where server-side progress can be communicated in real time.

**Why.** When the progress of an operation can be measured, use a determinate progress bar that shows actual completion percentage rather than an indeterminate spinner. A spinning loader for a 2-minute file upload gives users no information about how long to wait and no reassurance that progress is occurring. Provide numerical percentage alongside the bar, and time-remaining estimates when derivable. Allow cancellation for all long-running operations. Multi-phase operations should show step labels ("Uploading... Validating... Processing...") to communicate what is happening at each phase.

**Do.**
- Show percentage as both a bar and a numeric label.
- Include time remaining estimate if derivable (calculated from rate × remaining quantity).
- Allow cancellation at any point with a prominent Cancel button.
- Show step labels for multi-phase operations using a labeled progress stepper.
- For file uploads, show file name and size alongside the progress bar.
- Report per-file progress in bulk upload scenarios.

**Measure.** Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT, Confidence rating; Engagement & Usage: Abandonment rate; How to measure: Compare abandonment rates for long-running operations with progress bars vs. without (or with spinners only), measuring how many users cancel operations before completion. Use post-operation surveys to measure confidence and satisfaction scores when progress is visible vs. opaque.

Sources: [LogRocket — Skeleton Loading Screens](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/)
Wireframe: https://files.catbox.moe/is5weg.jpg
File: library/loading-and-performance-perception/UX-273-progress-bars-for-deterministic-operations.md

## UX-274 — Spinners for Short, Simple Loading States
- Score 4 · Loading & Performance Perception / Loading Patterns
- Tags: performance
- Goals: Improve Perceived Performance & Loading
- Use when: Use for button loading states after submission, small component updates, and non-structural asynchronous operations under 3 seconds.

**Why.** Use a spinner (indeterminate circular indicator) for short operations under 1–2 seconds or for tasks where the loaded content structure is not predictable. Spinners are appropriate for form submissions, small component updates, and button loading states — contexts where a skeleton screen would be more complex to implement than the content it represents. The most common failure mode is using spinners as full-page loading states for operations that take more than 3 seconds, where skeleton screens or progress bars would dramatically improve the experience.

**Do.**
- Replace button label with a spinner icon and descriptive text on click (e.g., "Saving...").
- Prevent double-submission by disabling the button during loading.
- Indicate text alongside the spinner for operations over 500ms.
- For operations that complete in under 300ms, no loading state is needed.
- Ensure spinners are visually accessible — use sufficient contrast against their background and consider a text label for screen reader users ("Loading, please wait").

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; Engagement & Usage: Abandonment rate; How to measure: Measure the rate at which users retry or abandon actions during loading states (double-click errors, rage clicks) using session recording tools. Compare abandonment rates between loading states with spinners versus those without feedback, and survey users on their confidence that actions were registered.

Sources: [LogRocket — Skeleton Loading Screens](https://blog.logrocket.com/ux-design/skeleton-loading-screen-design/)
Wireframe: https://files.catbox.moe/ojw97w.jpg
File: library/loading-and-performance-perception/UX-274-spinners-for-short-simple-loading-states.md

## UX-275 — Time Perception — Accurate Estimates Reduce Frustration
- Score 4 · Loading & Performance Perception / Wait Time Communication
- Tags: ai-patterns
- Goals: Build Trust & Reduce User Anxiety; Improve Perceived Performance & Loading
- Use when: Use when designing progress feedback for long-running operations, and when setting user expectations for report generation, data export, or batch processing.

**Why.** Human time perception is fundamentally subjective and nonlinear — a well-documented phenomenon in psychophysics research (Eagleman, 2011; Zakay & Block, 1996). Waiting without information about duration feels disproportionately long relative to waiting with accurate time estimates, a finding replicated across dozens of controlled studies measuring perceived wait time in queuing, loading, and procedural contexts.

**Measure.** Efficiency: Time on task, Completion time; Satisfaction & Perception: CSAT, Ease-of-use score; Engagement & Usage: Abandonment rate, Bounce rate; How to measure: A/B test interfaces with accurate time estimates (e.g., progress bars with time remaining) against vague indicators and track task abandonment rate and post-task CSAT scores.

Sources: [100 Things #36, #94 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/lnll13.jpg
File: library/loading-and-performance-perception/UX-275-time-perception-accurate-estimates-reduce-frustration.md
