# Component Patterns (16)

## UX-037 — Modals — Reserve for Critical Focus-Required Interactions
- Score 5 · Component Patterns / Modal dialog usage
- Tags: keyboard
- Goals: Simplify a Cluttered Interface; Design a Consistent System at Scale
- Use when: Apply when deciding whether to use a modal. The cost is always an interruption to the user's current task — justify it with the severity of the consequence.

**Why.** Modal dialogs interrupt the user's current task and add an extra goal to their workflow. This cost is justified only when (1) action could result in data loss or is irreversible, (2) missing information would block a user-initiated process, or (3) the decision significantly lessens subsequent user effort. Modals are routinely overused for non-critical purposes in enterprise software — this erodes trust in modal importance and causes users to dismiss critical modals reflexively. Never stack modals; if a second action is needed, use a drawer or queue it.

**Do.**
- Use modals for: confirmations before irreversible actions (delete, overwrite), required information critical to continuing a process, and occasionally for progressive profiling that streamlines immediate workflow.
- Never use for non-essential information, promotional content, or announcements.
- Always provide dismiss mechanisms: Escape key, X button (top-right), and backdrop click for non-critical modals.
- Size modals to their content — never full-screen for a 2-field confirmation.
- Trap keyboard focus inside while open (WCAG 2.4.3); return focus to trigger element on close.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track modal dismissal and completion rates in analytics to identify modals that are frequently abandoned; A/B test appropriate versus overused modal patterns to measure task success rate and CSAT changes.

Sources: [Nielsen Norman Group — Modal & Nonmodal Dialogs](https://www.nngroup.com/articles/modal-nonmodal-dialog/) · [Component Gallery — Modal / Dialog](https://component.gallery/components/modal/) · [About Face 4th Ed., Ch. 21 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf) · [Eleken — Modal UX](https://www.eleken.co/blog-posts/modal-ux)
Wireframe: https://files.catbox.moe/8b1zsx.jpg
File: library/component-patterns/UX-037-modals-reserve-for-critical-focus-required-interactions.md

## UX-038 — Nonmodal Side Panels as Default for Non-Critical Interactions
- Score 5 · Component Patterns / Drawer and side panel usage
- Tags: ai-patterns
- Goals: Simplify a Cluttered Interface; Design a Consistent System at Scale
- Use when: Apply to record detail views, annotation panels, help documentation, search result previews, settings that don't require interruption — wherever users need context alongside the primary view.

**Why.** Nonmodal dialogs allow users to continue their main activity while the dialog is open — less disruptive and more appropriate for reference, annotation, and supplementary interactions. Side panels are particularly effective when users need to reference underlying content while the panel is open. Right-side drawers are conventional for detail/edit panels; left-side for navigation panels. Drawers avoid the primary failure mode of modals: blocking access to context needed to respond to the modal itself.

**Do.**
- Use a right-side sliding panel that opens without obscuring the primary content area for record detail, edit, and annotation workflows.
- Allow minimization or collapse of the panel.
- For composing workflows requiring reference to other content, use a floating nonmodal panel.
- Provide clear close affordance: X button in top-right AND clicking outside the drawer (for non-critical contexts).
- Size the drawer to content — avoid full-screen drawers on desktop unless genuinely necessary.
- Use drawers instead of modals when users need to reference background content while working.

**Measure.** Effectiveness: Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test side-panel versus modal implementations for non-critical interactions, measuring task abandonment rate and time-on-task; collect CSAT scores to gauge which pattern users find less disruptive.

Sources: [Nielsen Norman Group — Modal & Nonmodal Dialogs](https://www.nngroup.com/articles/modal-nonmodal-dialog/) · [Component Gallery — Drawer / Side Panel](https://component.gallery/components/drawer/)
Wireframe: https://files.catbox.moe/zzcj2c.jpg
File: library/component-patterns/UX-038-nonmodal-side-panels-as-default-for-non-critical-interaction.md

## UX-039 — Tabs — Use Only for Clear Independent Content Groupings
- Score 5 · Component Patterns / Tab usage and tab design
- Tags: navigation, accessibility
- Goals: Design a Consistent System at Scale
- Use when: Apply to detail views with distinctly typed sections (Overview / Settings / History / Permissions), module organization in complex forms. Avoid when users need to compare content across tabs simultaneously.
- Avoid when: users need to compare content across tabs simultaneously.

**Why.** Tabs are appropriate when content has clear, mutually exclusive groupings that users need to switch between and where content in each tab doesn't need simultaneous comparison. Essential/primary content must be in the first (default) tab — tabs hide content, and hidden content is missed by many users. When tab count exceeds 7, consider a sidebar navigation pattern instead. Always ensure tab keyboard accessibility: Tab key to the tab list, Arrow keys between tabs, Space/Enter to activate.

**Do.**
- Use tabs when content has clear distinct groupings and the count is ≤7.
- Avoid tabs when users need to simultaneously see information across multiple tabs.
- Default to the highest-use tab (not necessarily the first).
- Never mix in-page tabs and global navigation tabs in the same control.
- Use at least two visual indicators for the selected tab (border + bold text, or background fill + underline).
- Use one row of tabs only.
- Implement ARIA: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run tree tests or first-click tests verifying tab labels clearly correspond to independent content sections; measure task success rate and navigation error rate in usability sessions, and track tab-switching patterns via analytics to detect mismatched content groupings.; Use tabs when content has clear distinct groupings and the count…

Sources: [Nielsen Norman Group — Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right/) · [Component Gallery — Tabs](https://component.gallery/components/tabs/)
Wireframe: https://files.catbox.moe/yjacn3.jpg
File: library/component-patterns/UX-039-tabs-use-only-for-clear-independent-content-groupings.md

## UX-040 — Tooltips — Supplementary Clarification, Not Critical Information
- Score 5 · Component Patterns / Tooltip usage and design
- Tags: keyboard
- Goals: Design Forms That Work; Design a Consistent System at Scale; Design Effective Feedback & Error States
- Use when: Apply to all unlabeled icon buttons, abbreviated labels, technical terms, and form fields with non-obvious requirements. Never put task-critical information in a tooltip.

**Why.** Tooltips are hover-triggered microcontent — they disappear as soon as the user moves away. Any information required to complete a task must be persistently visible, not hidden behind a hover. Tooltips are best for additional explanation of elements whose purpose isn't immediately obvious: icon button labels, keyboard shortcut hints, abbreviated column headers. Showing keyboard shortcuts in tooltips passively teaches power users without forcing a tutorial. Tooltips must be accessible via keyboard focus (Tab key), not just mouse hover.

**Do.**
- Do not put field requirements (password rules) solely in a tooltip — users must commit them to memory.
- Use tooltips for: explaining what an icon does, defining a technical term, showing keyboard shortcuts ("Delete (⌫)" or "Save (Ctrl+S)").
- Keep tooltip text to 1–2 sentences maximum.
- Ensure accessibility via `role="tooltip"` and `aria-describedby`.
- Never put essential information only in tooltips.
- Use tooltip arrows when multiple nearby elements could be the target.
- Add tooltips to every icon-only button without a visible text label as a minimum — better yet, add text labels.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score; How to measure: Track tooltip hover rates in analytics to identify which elements need clarification; run usability tests to confirm that critical information in tooltips causes task failures, and measure error rate before and after moving critical content to always-visible positions.

Sources: [Nielsen Norman Group — Tooltip Guidelines](https://www.nngroup.com/articles/tooltip-guidelines/) · [Component Gallery — Tooltip](https://component.gallery/components/tooltip/)
Wireframe: https://files.catbox.moe/97dyjx.jpg
File: library/component-patterns/UX-040-tooltips-supplementary-clarification-not-critical-informatio.md

## UX-041 — Distinct Visual States for Clickable, Selected, and Plain Elements
- Score 5 · Component Patterns / Visual affordance and state encoding
- Tags: design-system
- Goals: Design Forms That Work; Design a Consistent System at Scale
- Use when: Apply to navigation systems, data table rows, button sets, filter chips, and any interactive component in a design system.

**Why.** Interactive elements (clickable), selected elements (chosen), and plain text must have clearly distinct visual styles applied consistently. Blurring these three states creates navigation confusion — users don't know what they can interact with or what their current selection is. A system-wide three-state visual language is fundamental to every enterprise design system. Inconsistency between modules (one team uses blue links, another uses gray underlines) is a common sign of missing design system governance.

**Do.**
- Establish a system-wide three-state visual language: default/interactive (e.g., blue underline or hover cue), selected/active (e.g., filled background, stronger weight), and non-interactive plain text.
- Apply these consistently across all components in the design system.
- In data tables, selected rows must have an unambiguous highlight distinct from hover state.
- Ensure links are visually differentiated from plain text independent of hover state.
- Enforce these states through a design system component library with documented state variants.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Confidence rating, Ease-of-use score, CSAT; How to measure: Run usability tests with tasks requiring users to distinguish interactive from non-interactive elements, measuring error rate and hesitation time. Track misclick rates in production analytics on pages where visual state distinctions are weak vs. strong.

Sources: [Good UI — Distinct Clickable/Selected Styles](https://goodui.org/#6)
Wireframe: https://files.catbox.moe/f9dnd7.jpg
File: library/component-patterns/UX-041-distinct-visual-states-for-clickable-selected-and-plain-elem.md

## UX-042 — Toast Notifications — Transient Confirmation for Completed Actions
- Score 5 · Component Patterns / Toast design and usage
- Tags: error-handling
- Goals: Design a Consistent System at Scale
- Use when: Apply to post-action confirmation (record saved, email sent, export complete), undo prompts after soft deletions, and brief system status updates that don't require user action.

**Why.** Toasts are transient alerts appearing in a layer above other content — appropriate for non-critical, informational feedback that doesn't require user action. Auto-dismiss after 4–6 seconds for informational toasts. Critical errors requiring action must use inline alerts or persistent banners — not toasts that auto-dismiss. The undo-in-toast pattern for soft-delete operations is particularly effective: include the undo action in the toast for 5–8 seconds before committing.

**Do.**
- Use toasts for non-critical, transient information only.
- Auto-dismiss after 4–6 seconds for informational toasts; provide a manual dismiss option.
- Limit to one toast visible at a time (queue additional toasts).
- Include undo action in the toast for reversible operations (5–8 seconds).
- Position consistently: enterprise apps most commonly use bottom-left or bottom-right.
- Never use toasts for critical errors requiring action — use inline alerts or persistent banners.
- Use `role="status"` for informational toasts and `role="alert"` for error toasts for screen reader accessibility.

**Measure.** Effectiveness: Undo utilization rate, Accidental deletion recovery rate; Efficiency: Workflow confidence, Task completion rate; Accessibility: Screen reader notification compliance (WCAG 4.1.3); How to measure: Track undo action usage rate from toasts; measure accidental deletion support tickets; run accessibility audits for ARIA role compliance on toast notifications.

Sources: [Component Gallery — Toast / Snackbar](https://component.gallery/components/toast/)
Wireframe: https://files.catbox.moe/0azyqz.jpg
File: library/component-patterns/UX-042-toast-notifications-transient-confirmation-for-completed-act.md

## UX-043 — Progress Bar — Determinate and Indeterminate Patterns
- Score 5 · Component Patterns / Progress bar design
- Tags: workflow
- Goals: Design a Consistent System at Scale
- Use when: Apply to file uploads, bulk data imports/exports, report generation, batch processing, and multi-step wizard completion.

**Why.** Progress bars communicate completion status of long-running tasks. Determinate (0–100%) bars are appropriate when remaining work can be calculated; indeterminate (animated pulsing) when duration is unknown. Always pair a progress bar with text showing percentage AND/OR an ETA ("Processing 1,247 of 5,000 records — ~2 min remaining"). For background tasks, a persistent progress indicator in the app header/status bar allows users to continue working rather than blocking the current view.

**Do.**
- Use determinate progress bars when remaining work can be calculated; indeterminate animated bars when duration is unknown.
- Always pair with text: percentage complete AND/OR an ETA.
- For background tasks, show a persistent progress indicator in the header/status bar — don't block the current view.
- Update in real time — don't jump from 0% to 100%.
- For long-running operations (over 30 seconds), send a completion notification when done, with a summary of results.
- Consider a "Cancel" option for long operations where the user might want to abort.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Error counts; Engagement & Usage: Abandonment rate, Sessions per user; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Run moderated usability tests comparing tasks with and without clear progress indicators, tracking completion rates and perceived wait time via post-task surveys. Monitor abandonment rates in analytics for multi-step flows where progress bars are introduced via A/B test.

Sources: [Component Gallery — Progress Bar](https://component.gallery/components/progress-bar/)
Wireframe: https://files.catbox.moe/j4n3ez.jpg
File: library/component-patterns/UX-043-progress-bar-determinate-and-indeterminate-patterns.md

## UX-044 — Badge / Tag / Chip — Semantic Color and Label Consistency
- Score 5 · Component Patterns / Status badge design
- Tags: search, accessibility
- Goals: Design a Consistent System at Scale; Design Effective Feedback & Error States
- Use when: Apply to status indicators on records (Active, Pending, Closed), category labels, count indicators, user role labels, and filter chips.

**Why.** Badges are among the most widely implemented components (122 design systems in Component Gallery) and serve multiple purposes: status indicators, category labels, count badges on navigation items, and dismissible filter chips. The critical requirement: always include a text label alongside color — never color alone (accessibility). Semantic colors must be consistent across all badge usages throughout the application — this is a core design system governance requirement.

**Do.**
- Use semantic colors consistently: green for positive/active, red for error/critical, yellow for warning/pending, gray for neutral/inactive.
- Always include a text label alongside color — never color alone.
- Use count badges on navigation items for pending items — show "9+" for counts above 9.
- In filter systems, use dismissible chips with an X to remove individual filters.
- Include badges in the design system with documented semantic meanings so all teams apply them consistently.
- Ensure badge text meets 4.5:1 contrast against the badge background.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Run first-click and usability tests measuring time-to-correct-action and error rate when users must interpret badge and tag status; compare findability scores before and after introducing consistent semantic labeling and color standards.

Sources: [Component Gallery — Badge / Tag / Chip](https://component.gallery/components/badge/)
Wireframe: https://files.catbox.moe/l05ejq.jpg
File: library/component-patterns/UX-044-badge-and-tag-and-chip-semantic-color-and-label-consistency.md

## UX-045 — Combobox / Autocomplete for Long-List Dropdowns
- Score 5 · Component Patterns / Combobox and autocomplete design
- Tags: search, ai-patterns, forms
- Goals: Build Effective Search & Filter; Design a Consistent System at Scale
- Use when: Apply when a dropdown list has 10+ items — filtering dramatically reduces scan time compared to standard select dropdowns.

**Why.** Comboboxes combine a text input with a filtered dropdown — appropriate whenever a list has 10+ items because the filtering dramatically reduces scan time compared to scrolling through a standard select dropdown. Multi-select comboboxes show selected values as chips/tags inside the input. Support keyboard navigation throughout: type to filter, arrow keys to highlight, Enter to select, Escape to dismiss. Used across 37 design systems.

**Do.**
- Use combobox over a plain select when the list has 10+ items.
- Support full keyboard navigation: type to filter, arrow keys to highlight, Enter to select, Escape to dismiss.
- Show "Create new" option at the bottom if the app supports adding new values.
- For multi-select, show selected values as chips/tags inside the input.
- Indicate loading remote options with a spinner.
- Trigger suggestions after 2–3 characters.
- Implement ARIA: `role="combobox"`, `aria-autocomplete`, `aria-expanded`, `aria-controls` pointing to the listbox.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare time-on-task and selection error rate in usability tests between standard long-list dropdowns and combobox/autocomplete implementations; A/B test on high-traffic forms and measure completion rate and time-to-field-completion.

Sources: [Component Gallery — Combobox / Autocomplete](https://component.gallery/components/combobox/)
Wireframe: https://files.catbox.moe/hf1vsf.jpg
File: library/component-patterns/UX-045-combobox-and-autocomplete-for-long-list-dropdowns.md

## UX-046 — Search Input Component Design Standards
- Score 5 · Component Patterns / Search input component
- Tags: search, forms
- Goals: Build Effective Search & Filter; Design Forms That Work; Design a Consistent System at Scale
- Use when: Apply to global application search, in-table/list filtering, record lookup fields, and within-page text search.

**Why.** Search inputs must follow established conventions: magnifying glass icon on the left (users expect this), a clear/reset button (X) on the right to return to the full dataset, and for global search — a full search overlay on focus that shows recent searches. Debounce live search queries 300–500ms to avoid excessive API calls on each keystroke. Always show result counts and handle the "no results" state with guidance.

**Do.**
- Use a magnifying glass icon on the left as a standard visual cue.
- Provide a clear button (X) to reset the field.
- For global search, open a full search overlay/panel on focus showing recent searches and quick-navigation suggestions.
- Debounce live search queries 300–500ms.
- Show a count of results ("47 results") and handle "no results" with guidance (suggest related terms, offer filter adjustments).
- On mobile/narrow viewports, expand the search input to full width on focus.
- Implement `role="search"` on the search form wrapper.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Findability score, Task success rate; Engagement & Usage: Feature usage, Abandonment rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track search interaction rates (searches initiated, searches abandoned without a click) in analytics.

Sources: [Component Gallery — Search Input](https://component.gallery/components/search-input/)
Wireframe: https://files.catbox.moe/ybkhyl.jpg
File: library/component-patterns/UX-046-search-input-component-design-standards.md

## UX-047 — Descriptive, Concise Tab Labels
- Score 4 · Component Patterns / Tab label writing
- Tags: forms, navigation
- Goals: Design a Consistent System at Scale
- Use when: Apply to all tab labels in enterprise applications. Labels are navigation — they must predict content before the user clicks.

**Why.** Tab labels are navigation: they must give users enough information to predict what's in each tab before clicking. Generic or overly long labels defeat tabs as a quick navigation mechanism. Labels of more than 2–3 words usually indicate that the tab groupings haven't been thought through properly — if you can't describe a tab's content in 1–2 nouns, the grouping may need refinement. Labels must distinguish tabs clearly from each other with no overlapping meaning.

**Do.**
- Keep labels to 1–2 words; longer labels suggest tabs may not be the right pattern.
- Use strong, noun-led descriptive language ("Alerts," "Configuration," "Activity Log").
- Use sentence- or title-case consistently; avoid ALL CAPS.
- Ensure labels distinguish each tab clearly from others — no overlapping meaning.
- Test by asking users to predict content before clicking — if they consistently guess wrong, revise the label or the grouping.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct label comprehension tests asking users to predict tab content before clicking; measure first-click accuracy and task success rate in usability sessions; track tab-switching frequency as a proxy for label clarity — high switching suggests users are not finding content where expected.; Keep labels to 1–2 words; longer labels…

Sources: [Nielsen Norman Group — Tabs, Used Right](https://www.nngroup.com/articles/tabs-used-right/)
Wireframe: https://files.catbox.moe/xlgg5f.jpg
File: library/component-patterns/UX-047-descriptive-concise-tab-labels.md

## UX-048 — Disable, Don't Hide, Irrelevant Menu Items
- Score 4 · Component Patterns / Contextual menu state management
- Tags: cognitive-load, enterprise
- Goals: Design a Consistent System at Scale
- Use when: Apply to role-based or context-sensitive contextual menus and toolbars in enterprise applications where item availability changes based on state or permissions.

**Why.** Hiding irrelevant actions makes their position unpredictable — users who expect an action in a certain position won't find it and may doubt the menu's completeness. Disabling preserves spatial memory of the menu structure while clearly communicating unavailability in the current context. This is especially important in role-based enterprise UIs where available actions differ by permission level — users need to see what exists even if they can't execute it.

**Do.**
- Keep the full set of contextually related commands visible, with irrelevant ones disabled.
- Provide a tooltip or brief reason why a disabled action is unavailable when the reason is non-obvious ("You don't have permission to delete" or "This record is locked").
- Include the full family of related commands: if "Back" appears, include "Forward"; if "Cut" appears, include "Copy" and "Paste." Apply this to toolbars as well as contextual menus.
- Consider a permission prompt (rather than silent disabling) for role-restricted actions.

**Measure.** Effectiveness: Menu discoverability, Task success rate; Efficiency: Time to find available actions, Error rate reduction; Satisfaction: User confidence in menu completeness, Learnability; How to measure: Track user frustration events from unexpected menu changes (session recordings); measure time-to-find-action when switching between states; test spatial memory retention with vs. without disabled vs. hidden menu items.

Sources: [Nielsen Norman Group — Contextual Menus: Delivering Relevant Tools for Tasks](https://www.nngroup.com/articles/contextual-menus/)
Wireframe: https://files.catbox.moe/pralra.jpg
File: library/component-patterns/UX-048-disable-don-t-hide-irrelevant-menu-items.md

## UX-049 — Popovers for Interactive Supplemental Content
- Score 4 · Component Patterns / Popover vs tooltip distinction
- Tags: forms
- Goals: Design a Consistent System at Scale; Design Effective Feedback & Error States
- Use when: Apply when supplemental content needs to be interactive (clickable, form-like) — use popovers for click-triggered interactive content, tooltips for hover-triggered non-interactive content.

**Why.** Popovers are distinguished from tooltips by being click-triggered (not hover) and capable of containing interactive elements (forms, buttons, links). This makes them appropriate for quick filters, inline comments, record preview cards, user profile previews, and mini-forms triggered from a data table row. Large, complex popovers should be replaced by drawers or modals — popovers are best for focused, contained interactions.

**Do.**
- Use popovers for interactive content triggered by click; use tooltips for non-interactive supplemental information triggered by hover.
- Position popovers using smart placement libraries that auto-detect and flip position to avoid clipping at viewport edges.
- Dismiss on Escape key and on click outside.
- Implement focus trapping for keyboard-accessible popovers with interactive content.
- For complex multi-step interactions, use a drawer or modal instead.
- Ensure sufficient contrast between popover background and page background.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Engagement & Usage: Feature usage, Clickthrough rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track feature usage analytics to confirm popover-triggered content is being accessed and reduces support ticket volume for the related feature. Conduct usability testing to measure whether users successfully complete tasks requiring supplemental information without leaving the current context.

Sources: [Component Gallery — Popover](https://component.gallery/components/popover/)
Wireframe: https://files.catbox.moe/9gantb.jpg
File: library/component-patterns/UX-049-popovers-for-interactive-supplemental-content.md

## UX-050 — Accordion — Collapsible Sections for Occasionally Needed Content
- Score 4 · Component Patterns / Accordion usage and design
- Tags: search
- Goals: Design a Consistent System at Scale
- Use when: Apply to settings panels with many sections, FAQ sections, filtering panels with collapsible filter groups, and long detail pages where not all sections are always relevant.

**Why.** Accordions allow vertical stacks of interactive headings to toggle display of further information. Used across 101 design systems, they are the most widely implemented content-organization component. They are appropriate when information is occasionally needed but not always — hiding it by default reduces perceived complexity without reducing availability. Do not use accordions for essential information that users must see — hidden content is missed by users who don't expand it.

**Do.**
- Allow multiple sections to be open simultaneously unless there is a specific reason to enforce single-open mode.
- Use clear expand/collapse icons (chevron or +/-) that rotate/change state to signal current state visually.
- Don't use accordions for essential first-view information.
- Use `aria-expanded` on the trigger button and `aria-controls` linking to the content panel.
- Accordions work particularly well in narrow right-rail panels and filter sidebars.
- For filter panels: allow individual filter category accordions to be collapsed to save vertical space.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task; Engagement & Usage: Scroll depth, Abandonment rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track accordion expand rates via analytics to confirm users engage with optional content; run usability tests measuring time-to-find information in accordion versus fully expanded layouts and survey users on perceived information density.; Allow multiple sections to be open simultaneously unless…

Sources: [Component Gallery — Accordion](https://component.gallery/components/accordion/)
Wireframe: https://files.catbox.moe/r6a8ab.jpg
File: library/component-patterns/UX-050-accordion-collapsible-sections-for-occasionally-needed-conte.md

## UX-051 — Tree View for Hierarchical Data Navigation
- Score 4 · Component Patterns / Tree view design and accessibility
- Tags: navigation
- Goals: Design Data-Heavy Screens & Dashboards; Design a Consistent System at Scale
- Use when: Apply to file system navigation, nested project/folder structures, organizational hierarchies, taxonomy editors, and settings with nested categories.

**Why.** Tree views display nested hierarchical information with expandable parent nodes. Used across 14 design systems, they are less common than flat navigation but essential for applications with genuine hierarchical data — file systems, org charts, taxonomy editors, and nested project structures. Keyboard navigation must be fully implemented: arrow keys to traverse nodes, Enter/Space to toggle expand/collapse. For very deep trees, lazy-load children of large parent nodes on expand to maintain performance.

**Do.**
- Use expand/collapse chevrons consistently on parent nodes; leaf nodes have no toggle.
- Support keyboard navigation: arrow keys to traverse, Enter/Space to toggle expand/collapse.
- For trees with 5+ levels, limit default visible depth and provide an "Expand All" option.
- Highlight the currently selected node clearly (distinct background); show hover state on all nodes.
- Lazy-load children of large parent nodes on expand to maintain performance.
- Use `role="tree"`, `role="treeitem"`, `aria-expanded`, and `aria-level` for screen reader accessibility.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct tree testing or usability studies on hierarchical navigation tasks, measuring success rate and time-to-locate for items at varying depths. Compare these metrics for tree-view navigation against alternative flat-list or breadcrumb-only approaches.

Sources: [Component Gallery — Tree View](https://component.gallery/components/tree-view/) · [Koruux — Enterprise Data Visualization](https://www.koruux.com/blog/enterprise-data-visualization)
Wireframe: https://files.catbox.moe/ccyvh4.jpg
File: library/component-patterns/UX-051-tree-view-for-hierarchical-data-navigation.md

## UX-052 — Toggle / Switch — Immediate-Effect Binary Settings
- Score 4 · Component Patterns / Toggle and switch design
- Goals: Design a Consistent System at Scale
- Use when: Apply to feature enable/disable settings, notification preferences, integration toggles, column visibility, and view mode switches — settings that take immediate effect.

**Why.** A toggle (or switch) is a binary UI control that moves between exactly two mutually exclusive states — on and off — and whose effect takes place immediately without requiring the user to click a separate Save button. This immediate-effect contract is the defining characteristic that distinguishes the toggle from the checkbox: while a checkbox is a form input that captures intent and defers action until form submission, a toggle is an action control that executes the state change the moment it is flipped. The cognitive model users bring to a toggle is the physical light switch — an artifact they have operated thousands of times with predictable, zero-latency results.

**Do.**
- Use toggles only for binary settings that take immediate effect — on or off with no confirmation step.
- Apply visual feedback immediately on toggle: color change (green/gray is common), animation, and a status label ('On'/'Off') adjacent to the toggle.
- Don't use toggles for settings that require a save action — use a checkbox inside a form instead.
- Never use a toggle for destructive actions; use a modal confirmation instead.
- Pair toggles with descriptive labels that describe the effect of the on state, not the setting name ('Receive email notifications' not 'Email').
- For settings with significant downstream effects, show a brief inline confirmation message after toggling.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Use usability testing to measure error rates when users interact with toggles for immediate-effect settings, particularly observing whether users understand the current state without needing confirmation dialogs. Track support tickets related to accidental setting changes before and after applying the pattern.

Sources: [Component Gallery — Toggle / Switch](https://component.gallery/components/toggle/)
Wireframe: https://files.catbox.moe/tef5si.jpg
File: library/component-patterns/UX-052-toggle-and-switch-immediate-effect-binary-settings.md
