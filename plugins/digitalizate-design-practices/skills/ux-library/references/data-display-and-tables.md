# Data Display & Tables (20)

## UX-072 — Data Tables — Support All Four Core User Tasks by Design
- Score 5 · Data Display & Tables / Table task design
- Tags: search, enterprise, tables
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Apply to any enterprise data table — records lists, transaction logs, user management, inventory, analytics exports. All four tasks will be performed regardless of whether the design supports them.

**Why.** Data tables in enterprise applications must support four primary user tasks: (1) finding records that fit criteria, (2) comparing data across records, (3) viewing/editing/adding a single row's data, and (4) taking actions on records. Designing for only one task creates friction on the others. The Component Gallery documents data tables as present across 74 design systems including Carbon, Atlassian, Lightning, PatternFly, and Primer — it is the most critical enterprise UI component.

**Do.**
- Use human-readable record identifiers in the first column (not auto-generated system IDs).
- Default column order should reflect importance with related columns adjacent.
- Provide discoverable, powerful filters with clear visual indication when active.
- Support column hiding, reordering, and sorting as baseline.
- Support inline row editing for narrow tables and nonmodal side panels for complex record editing.
- Implement column-level sorting with clickable headers showing sort direction.
- For tables with 500+ rows, use virtual scrolling for performance.

**Measure.** Effectiveness: Task success rate, Completion rate, Findability score; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Design a usability test covering all four core user tasks (find, compare, filter, sort); measure success rate and time on task for each. Track support ticket volume related to data table interactions as a longitudinal indicator of whether the design adequately supports user needs.

Sources: [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/) · [Component Gallery — Data Table](https://component.gallery/components/table/)
Wireframe: https://files.catbox.moe/yalkzy.jpg
Notion: https://app.notion.com/p/Data-Tables-Support-All-Four-Core-User-Tasks-by-Design-af9a9aed53448358a6ba81d151145f95

## UX-073 — Frozen Headers and Visual Anchors in Large Tables
- Score 5 · Data Display & Tables / Table scrolling and orientation
- Tags: tables
- Goals: Design for Enterprise & B2B Scale; Design Data-Heavy Screens & Dashboards; Improve Readability & Visual Clarity
- Use when: Apply to any table with more rows than fit on screen, or with more than ~8 columns. Users lose orientation during scroll without visual anchors.

**Why.** When tables exceed visible screen area, users lose their place as they scroll — they forget which column or row they were reviewing. Frozen headers, frozen first columns, zebra striping, and hover highlighting maintain orientation without requiring users to scroll back to the top. These patterns are foundational in every major enterprise design system (IBM Carbon, Salesforce Lightning, Atlassian) because the problem appears in virtually every enterprise data view.

**Do.**
- Freeze header rows when tables scroll vertically.
- Freeze the first column (row identifier) and optionally the last column (row actions) when tables scroll horizontally.
- Apply zebra striping (alternating row backgrounds) for dense tables.
- Apply hover-triggered row highlighting so users can track their current row visually.
- Use subtle column separators to maintain alignment across large datasets.
- Sticky/frozen left and right columns are documented in IBM Carbon and Salesforce Lightning as baseline requirements for enterprise tables.

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct task-based usability testing on large data tables where users must look up values while scrolling, comparing time on task and error counts with and without frozen headers. Use post-task ease-of-use ratings to capture perceived effort reduction.

Sources: [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/) · [UX Planet — Data Table Best Practices](https://uxplanet.org/best-practices-for-usable-and-efficient-data-table-in-applications-4a1d1fb29550) · [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/3zcmh1.jpg
Notion: https://app.notion.com/p/Frozen-Headers-and-Visual-Anchors-in-Large-Tables-edfa9aed53448329aec6017be528cf93

## UX-074 — Column Management for Comparison Work
- Score 5 · Data Display & Tables / Personalization
- Tags: tables
- Goals: Build Effective Search & Filter; Design Data-Heavy Screens & Dashboards
- Use when: Use for data tables with 8+ possible columns or where different user roles have different data priorities.

**Why.** Allow users to show/hide columns and save their preferred view. Enterprise tables often have 10–30 possible columns, but a given user role may need only 5–8 regularly. Forcing all columns to be visible creates overwhelming density and forces horizontal scrolling for data users don't care about. User-controlled column visibility dramatically improves usability for power users and allows a single table component to serve multiple role-specific use cases without building separate views.

**Do.**
- Provide a "Columns" button in the table toolbar that opens a checklist panel.
- Include a search in the column picker for tables with more than 10 columns.
- Include "Save View" functionality to persist column preferences per user.
- Set role-appropriate defaults (show only the columns each role cares about most).
- Support column reordering via drag-and-drop in the column picker.
- Allow saving multiple named views ("My View," "Manager View").

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Completion rate; Engagement & Usage: Feature usage, Active users; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track the feature adoption rate of column show/hide or reorder controls via analytics. Conduct task-based usability tests for multi-column comparison scenarios, measuring time on task and success rate with and without column management controls.

Sources: [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables) · [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/) · [Component Gallery — Data Table](https://component.gallery/components/table/) · [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
Wireframe: https://files.catbox.moe/nbukwg.jpg
Notion: https://app.notion.com/p/Column-Management-for-Comparison-Work-cbda9aed534482d6a1c081ae3b30eba4

## UX-075 — Row-Level and Batch Actions Design in Tables
- Score 5 · Data Display & Tables / Table action patterns
- Tags: workflow, tables
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Apply to all enterprise data tables where users manage records — delete, archive, export, assign, approve, reject. Both single-record and batch workflows are essential.

**Why.** Single-record and batch actions are essential in enterprise tables but easily become unusable when poorly placed. Row-level actions crowded without labels become indistinguishable; batch actions hidden from sight prevent efficient multi-record operations. Never use hover-only reveals for critical row actions — this creates accessibility failures and discoverability problems for unfamiliar users. The rule: if the action is important enough to include, it must be discoverable without hover.

**Do.**
- For 1–2 single-record actions: place inline in the row as labeled icon-buttons.
- For 3+ single-record actions: use a contextual overflow menu per row (ellipsis icon).
- For batch actions: use per-row checkboxes with an action bar appearing above the table on selection.
- Provide a "Select All" shortcut for applying actions to the full dataset (and a "Select All on this page" vs "Select All matching records" distinction for paginated tables).
- Never use hover-only reveals for critical actions.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Time saved per task; Engagement & Usage: Feature usage; How to measure: Track batch-action feature usage rates in analytics; run task-based usability tests to measure time savings and error rates when users perform multi-item operations with well-designed batch controls versus row-by-row repetition.

Sources: [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/) · [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
Wireframe: https://files.catbox.moe/pq5c7i.jpg
Notion: https://app.notion.com/p/Row-Level-and-Batch-Actions-Design-in-Tables-8aaa9aed53448336b1c9815fabaa42c8

## UX-076 — Pagination vs. Infinite Scroll — Choose by Task Type
- Score 5 · Data Display & Tables / List Navigation
- Tags: search, tables, navigation
- Goals: Design Data-Heavy Screens & Dashboards; Design for Enterprise & B2B Scale
- Use when: Use when deciding how users will navigate long lists — different content types and user tasks require different navigation patterns.

**Why.** Use pagination (numbered pages) for data tables where users need to find specific records, share a specific view, or compare items across a dataset. Use infinite scroll for feed-type content where users browse without a specific destination. Infinite scroll in data tables makes it impossible to jump to a specific record, track position, return to the same spot after navigating away, or share a specific page state via URL. For enterprise applications, pagination is almost always the correct choice for data tables, and infinite scroll is only appropriate for activity feeds and notification streams.

**Do.**
- For enterprise data tables: implement pagination with a "Rows per page" selector (10/25/50/100 options), first/previous/next/last controls, total row count displayed, and current page indicator.
- Encode page state in the URL so users can share specific views.
- As a middle ground for moderate-length lists where scrolling feels natural, implement a "Load More" button (not automatic infinite scroll).
- For truly infinite feeds, infinite scroll is appropriate but include a "Back to top" affordance.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Page load time; Engagement & Usage: Scroll depth, Abandonment rate; How to measure: A/B test pagination versus infinite scroll for the specific task type (e.g., goal-directed search vs. exploratory browsing); measure task success rate, time-on-task, and abandonment rate to determine which pattern fits user intent.

Sources: [UX Planet — Data Table Best Practices](https://uxplanet.org/best-practices-for-usable-and-efficient-data-table-in-applications-4a1d1fb29550) · [Component Gallery — Pagination](https://component.gallery/components/pagination/)
Wireframe: https://files.catbox.moe/ssf129.jpg
Notion: https://app.notion.com/p/Pagination-vs-Infinite-Scroll-Choose-by-Task-Type-161a9aed5344831f8ff501086b288198

## UX-077 — Three-Level Density System for Tables and Lists
- Score 5 · Data Display & Tables / Density Controls
- Tags: enterprise, tables
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Use for any enterprise data table used in multiple contexts or by users with varying display needs and accessibility requirements.

**Why.** Enterprise interfaces should support three density levels: Comfortable (spacious, larger touch targets, more whitespace — suitable for accessibility and casual use), Default (balanced for standard desktop use), and Compact (reduced row heights and padding, maximizing data visibility — for power users comparing many rows). Many enterprise products offer only one density and fail both accessibility needs and power-user productivity simultaneously. A single density toggle in the table toolbar gives users control with minimal UI cost.

**Do.**
- Define density as a set of spacing tokens that cascade from a single density variable.
- Comfortable: row-height 56px, cell-padding 12px 16px.
- Default: 40px row-height, 8px 16px cell-padding.
- Compact: 24–28px row-height, 4px 8px cell-padding.
- Include a 3-icon density toggle in the table toolbar.
- Persist the setting per user in account preferences.
- Apply density tokens consistently across all table instances in the application.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; Engagement & Usage: Feature usage, Sessions per user; How to measure: Survey users about their preferred density setting and track which density mode is most frequently selected in production. Run task-based tests at each density level with different user personas (power user vs. occasional user) to confirm that the appropriate density optimizes their time on task.

Sources: [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/fdzk4t.jpg
Notion: https://app.notion.com/p/Three-Level-Density-System-for-Tables-and-Lists-055a9aed53448301891701c4ecd6bc9c

## UX-078 — Correct Data Alignment in Tables
- Score 5 · Data Display & Tables / Data Formatting
- Goals: Design Data-Heavy Screens & Dashboards; Improve Readability & Visual Clarity
- Use when: Use in all data tables containing numeric, financial, or quantitative data.

**Why.** Always right-align numeric columns (especially financial figures) to enable fast visual comparison of magnitudes. Left-align text and string columns. Center alignment prevents quick scanning and forces the eye to jump between values irregularly. Right-aligning numbers ensures decimal points and thousands separators align vertically, allowing users to compare values at a glance without reading each number individually. This is a foundational rule of financial data presentation adopted across Bloomberg, trading terminals, and accounting software.

**Do.**
- Default all number columns to `text-align: right`.
- Align column headers to match their column content (right-align numeric headers too).
- For mixed columns (mostly text with occasional numbers), left-align and format numbers consistently within the column (same number of decimal places).
- Apply monospaced font or tabular numeric font variant for financial figures to ensure proper alignment at the character level.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run timed data-lookup tasks comparing right-aligned numeric columns against center- or left-aligned variants. Measure error rate on comparison tasks (e.g., "Which row has the largest value?") to confirm that correct alignment reduces misreading.

Sources: [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/bwznuc.jpg
Notion: https://app.notion.com/p/Correct-Data-Alignment-in-Tables-74ba9aed534482eb80f601cd094be3a2

## UX-079 — Contextual Hover Actions in Data Tables
- Score 5 · Data Display & Tables / Row Interaction Patterns
- Tags: tables
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Use in all data tables with per-row actions (CRUD tables, management interfaces, list views).

**Why.** Reveal row-level actions (Edit, Delete, View) only when the user hovers over a row, rather than displaying action buttons in every row permanently. Persistent action buttons in every row create significant visual noise in long tables and waste horizontal space. Hover-revealed actions keep the table clean while remaining immediately accessible. The hover state itself signals interactivity and communicates that each row has available actions. This is standard behavior in Google Workspace, Linear, Notion, and Salesforce.

**Do.**
- Actions appear on row hover in the rightmost column or as a "..." overflow menu.
- Primary action (e.g., Edit or Open) can also be triggered by clicking anywhere on the row.
- Ensure hover actions are keyboard-accessible — Tab to row, then arrow keys or Shift+F10 to reveal action buttons.
- For tables with 3+ row actions, use a "..." overflow menu that expands on click.
- For destructive actions (Delete), always require a confirmation step.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Completion rate; Engagement & Usage: Feature usage, Clickthrough rate; How to measure: Instrument row-level action interactions with analytics to measure click-through rates on hover-revealed actions versus always-visible action columns. Run a usability test comparing both patterns for speed and discoverability, measuring time to find and execute an action.

Sources: [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/lr5zlc.jpg
Notion: https://app.notion.com/p/Contextual-Hover-Actions-in-Data-Tables-81ea9aed534482afb15b81cfdfad94a1

## UX-080 — Sortable Columns with Clear State Indicators
- Score 5 · Data Display & Tables / Table Interaction
- Tags: tables
- Goals: Build Effective Search & Filter; Design Data-Heavy Screens & Dashboards
- Use when: Any table with data that users need to prioritize or compare — dates, values, statuses, names. Absent sorting, users must scan the entire table to find relevant records.

**Why.** All relevant table columns should be sortable via column header click, with the current sort column and direction clearly indicated by an arrow icon (▲ ascending, ▼ descending). The default sort order should reflect the primary use case — typically most recent first or highest priority first. Unsorted columns that look sortable (same header style) break user expectations and create frustration when clicks have no effect.

**Do.**
- Make only logically sortable columns sortable — not image columns, multi-value fields, or richly formatted cells.
- Align the sort indicator with the column header text, not always right-aligned.
- Support multi-column sort via Shift+click for power users, with a visual indicator of sort priority (1st sort, 2nd sort).
- Preserve sort state across pagination and filter changes.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Task users with finding records in a large table using sort, measuring time on task and error rate when sort state indicators are present versus ambiguous. Survey users on their confidence in understanding the current sort state to capture the perceived clarity benefit.

Sources: [UX Patterns for Developers — Data Table](https://uxpatterns.dev/patterns/data-display/table) · [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/yh9swl.jpg
Notion: https://app.notion.com/p/Sortable-Columns-with-Clear-State-Indicators-a45a9aed534483fc9e0a813d569f0a8d

## UX-081 — Virtual Scrolling for Large Datasets
- Score 5 · Data Display & Tables / Performance Optimization
- Tags: performance, forms
- Goals: Design Data-Heavy Screens & Dashboards; Design for Enterprise & B2B Scale
- Use when: Tables with server-side data that may grow to thousands of rows. Critical in audit logs, transaction history, event streams, and large inventory tables.

**Why.** Virtual (windowed) scrolling renders only the visible rows plus a small buffer, updating the DOM dynamically as the user scrolls. This keeps memory usage low, maintains 60 FPS scroll performance, and supports datasets of 10,000+ rows without interface degradation. Rendering all rows at once is the most common cause of data table performance failures in enterprise applications — a table with 5,000 fully rendered rows can consume hundreds of megabytes of DOM and produce unacceptable scroll lag.

**Do.**
- Target performance thresholds: initial render <300ms for first 50 rows, <50MB memory for 10,000 rows, 60 FPS scrolling.
- Use row height estimates for variable-height rows with a correction pass after first render.
- Show skeleton loading state while fetching new rows during scroll.
- Keep sticky headers and action toolbars outside the virtual scroll container so they remain functional at all times.

**Measure.** Efficiency: Page load time, Time on task; Effectiveness: Task success rate, Completion rate; Engagement & Usage: Abandonment rate, Sessions per user; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure page rendering time and Time to Interactive for large dataset views before and after implementing virtual scrolling, using browser performance profiling. Track task completion rates and abandonment rates on data-heavy screens as a functional indicator that performance improvements translate to better user outcomes.

Sources: [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
Wireframe: https://files.catbox.moe/efv9is.jpg
Notion: https://app.notion.com/p/Virtual-Scrolling-for-Large-Datasets-6d2a9aed53448354bbd881fc39cf67c5

## UX-082 — Inline Editing with Friction Calibration
- Score 5 · Data Display & Tables / Inline Editing
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: All tables where data is editable. The choice of inline vs. modal editing should be driven by the risk and frequency of the edit operation.

**Why.** For low-risk edits (status change, tag assignment, priority update), click-to-edit inline within a table cell provides maximum efficiency. For high-stakes or multi-field edits (financial data, legal content, records with downstream dependencies), a detail panel or modal with explicit Save/Cancel controls provides appropriate friction. Matching friction to risk level prevents both the bottleneck of over-cautious modals for trivial changes and the danger of under-cautious inline editing for consequential data.

**Do.**
- Confirm inline edits via click-outside, Enter key, or a checkmark button; Escape cancels.
- Show a brief success indicator (cell highlight flash or small checkmark) after save.
- For modal edits, disable the background table but keep it visible for context reference.
- Provide undo for both modes.
- For high-frequency inline edits (bulk data entry workflows), support Tab to advance to the next row's same field.

**Measure.** Efficiency: Time on task, Time saved per task, Completion time; Effectiveness: Task success rate, Error rate; Engagement & Usage: Feature usage, Active users; How to measure: Track edit action frequency via analytics to confirm inline editing is used when available. Compare task completion times for table-editing workflows with inline editing vs. modal-based editing, and track accidental edit errors as a measure of friction calibration effectiveness.

Sources: [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables) · [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
Wireframe: https://files.catbox.moe/gdxfup.jpg
Notion: https://app.notion.com/p/Inline-Editing-with-Friction-Calibration-e14a9aed5344830cae92810504a96c67

## UX-083 — Expandable Row Details and Sidebar Panels
- Score 5 · Data Display & Tables / Row Interaction
- Tags: ai-patterns, tables, navigation
- Goals: Design Data-Heavy Screens & Dashboards; Design for Enterprise & B2B Scale
- Use when: When records have significant associated detail — attachments, related records, history, notes. Common in CRM, support ticket systems, and order management.

**Why.** Providing in-table expansion (click row or chevron to expand inline) or a slide-out sidebar panel for detail access keeps users in context rather than navigating to a separate record page. Inline expansion is better for comparing detail across multiple records simultaneously; sidebars are better for deep, multi-tabbed record detail. Using a full-page navigation for every record view forces users to context-switch away from their list, breaking scan-and-act workflows.

**Do.**
- Inline expand: toggle on chevron click, animate slide-down (150–200ms), indent expanded content slightly, show a collapse chevron.
- Sidebar: slide in from the right at 400–600px width, keeping the table scrollable behind it.
- Add tabs within the sidebar for different record aspects (Details, Activity, Related Records).
- Support keyboard navigation (Escape to close sidebar, arrow keys to move between records).

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Completion rate; Engagement & Usage: Feature usage, Sessions per user; How to measure: Instrument the expand/collapse interaction with analytics to track feature usage rates. Run moderated usability sessions measuring time on task for detail-lookup workflows, comparing expandable rows against full-page navigation to the same detail.

Sources: [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables) · [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
Wireframe: https://files.catbox.moe/1sizqo.jpg
Notion: https://app.notion.com/p/Expandable-Row-Details-and-Sidebar-Panels-6daa9aed534483c692c081f99a74ac3f

## UX-084 — Tables Over Cards for Dense Multi-Variate Data
- Score 4 · Data Display & Tables / Layout pattern selection
- Tags: workflow, tables, data-heavy
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Apply when users need to compare attributes across many records simultaneously, detect outliers, or perform bulk actions. Cards are better for visual browsing with fewer comparison needs.

**Why.** Card-based layouts are visually appealing but sacrifice the spatial comparison advantages of tables. Tables are space-efficient and ideal for comparing records and detecting patterns across many variables. Cards are better for visual browsing with fewer comparison needs, media libraries, or when visual identity per item matters. The default for enterprise record management should be table view, with card/grid as an optional toggle for relevant use cases.

**Do.**
- Default to table view for record management, analytics, transaction history, and data entry contexts.
- Offer a toggle between table and card/grid views when both browsing and comparison tasks are present.
- Use tables with appropriate density settings (compact, default, spacious) matching user needs.
- Reserve card layouts for catalog browsing, media libraries, or when visual identity per item matters.
- For dashboard KPI items, use cards; for record lists, use tables.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run head-to-head usability tests with comparison tasks (e.g., "Find the item with the lowest price and highest rating") using both a card layout and a table layout, measuring time on task and error rate for multi-variate decision tasks.

Sources: [Nielsen Norman Group — Data Tables: Four Major User Tasks](https://www.nngroup.com/articles/data-tables/)
Wireframe: https://files.catbox.moe/c91mvb.jpg
Notion: https://app.notion.com/p/Tables-Over-Cards-for-Dense-Multi-Variate-Data-b6ca9aed5344828598a2010bffb281de

## UX-085 — Smart Defaults for Sort Order
- Score 4 · Data Display & Tables / Default State Design
- Tags: tables
- Goals: Build Effective Search & Filter; Design Data-Heavy Screens & Dashboards
- Use when: Use when designing any sortable data table — the default sort order should reflect the primary user task, not technical defaults.

**Why.** Choose the default sort order based on the most common user task, not arbitrary or technically convenient criteria. For most management tables, the most recently created or modified entries should appear first. For priority queues, highest-urgency items should appear first. For alphabetical reference lists, alphabetical sort is appropriate. A wrong default forces every user to re-sort on every visit, imposing unnecessary repetitive work. The default sort is one of the highest-impact low-effort improvements to any data table.

**Do.**
- Before setting a default sort, analyze the primary user task for the table through user research or analytics.
- Set the initial sort to match that task.
- Display a visible sort indicator (chevron or arrow) on the active sort column in its default state so users know the table is sorted.
- Allow multi-column sorting for power users (Shift+click column header).
- Persist user-selected sort order per session; reset to default on next login unless the user has saved the view.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track sort-change event rates in analytics — low rates suggest the default is meeting user needs; run usability tests comparing findability and time-on-task with different default sort orders to identify the most efficient setting.

Sources: [Pencil & Paper — Enterprise Data Tables](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/jell7x.jpg
Notion: https://app.notion.com/p/Smart-Defaults-for-Sort-Order-ff1a9aed534482a7ad94016a222759b7

## UX-086 — Column Order Reflecting Data Importance
- Score 4 · Data Display & Tables / Table Structure
- Tags: search, tables, forms
- Goals: Build Effective Search & Filter; Design Data-Heavy Screens & Dashboards
- Use when: All data tables. Collaborate with primary users during design to validate column priority before launch — column order has a larger impact on task performance than most other table design choices.

**Why.** Default column order should reflect the importance and frequency of use for the primary user persona, with related columns adjacent to minimize eye movement. When users must jump between column 1 and column 18 to interpret a single record, cognitive load and error rates increase substantially. Column order is a design decision that embeds an implicit theory of what users need to see together — it should be validated with real users, not assumed.

**Do.**
- Lead with identifier, then status/priority, then key data fields for the primary use case.
- Push system metadata (created date, modified by) to the far right or into a detail panel.
- Support user-defined column reordering via drag-and-drop column headers.
- Persist user preferences (column order, visibility) via localStorage or user profile so customizations survive page reload.

**Measure.** Efficiency: Time on task, Completion time, Error counts; Effectiveness: Task success rate, Findability score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct usability tests on table-scanning tasks, measuring time-to-locate specific data points in tables with importance-ordered vs. arbitrary column ordering. Track eye-tracking fixation counts on leftmost columns to verify that high-priority data in primary columns reduces scanning overhead.

Sources: [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
Wireframe: https://files.catbox.moe/nsjxx9.jpg
Notion: https://app.notion.com/p/Column-Order-Reflecting-Data-Importance-957a9aed534482eca5c181a7f5f81126

## UX-087 — Row Density Controls
- Score 4 · Data Display & Tables / Table Customization
- Tags: tables
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: Any enterprise table used by power users or in data-heavy workflows. Standard in ERP, analytics, and financial applications where users range from data entry operators to occasional reviewers.

**Why.** A density toggle adjusting row height between compact (~40px), default (~52px), and comfortable (~64px) modes serves the full range of enterprise user needs — power users processing large datasets prefer compact density; users reviewing rich records prefer comfortable. The same table design cannot optimally serve both personas simultaneously, making this toggle a high-ROI feature that directly impacts daily productivity for intensive users.

**Do.**
- Place the density control in the table toolbar as an icon switcher (three horizontal lines with increasing spacing).
- Apply the change instantly without page reload.
- In compact mode, show row actions only on hover to preserve row height.
- Ensure click targets remain accessible (minimum 24px) even in compact mode.
- Remember the preference per-user and per-table via user profile or localStorage.

**Measure.** Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT, Satisfaction rating; Effectiveness: Task success rate, Completion rate; How to measure: Survey users on preferred row density settings via in-product settings instrumentation and correlate density preference with task completion times. Measure scan accuracy on data tables across density levels in usability testing to identify whether control over density improves performance for different user roles.

Sources: [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/d8ida6.jpg
Notion: https://app.notion.com/p/Row-Density-Controls-9b8a9aed534482638b7c01da10e22d53

## UX-088 — Pagination vs. Virtual Scrolling Decision Framework
- Score 4 · Data Display & Tables / Data Navigation
- Tags: tables, navigation
- Goals: Design Data-Heavy Screens & Dashboards; Design for Enterprise & B2B Scale
- Use when: Any enterprise data table. The choice between pagination and scrolling has downstream effects on performance, shareability, and user orientation within the dataset.

**Why.** Pagination is appropriate when users need to navigate to a specific page, reference a specific record set, or share a view with a defined position; 67% of users prefer pagination over infinite scroll for data tables. Infinite/virtual scrolling is appropriate for timeline-like data, activity feeds, or real-time streams where sequential browsing is the primary behavior. Choosing scrolling for enterprise data tables forces users to scroll through hundreds of records to reach a known page, destroying efficiency.

**Do.**
- Default to pagination for enterprise data tables.
- Default page size: 25 rows, with user-selectable options for 10, 25, 50, 100.
- Show current position ("26–50 of 3,247 records").
- Maintain filter/sort state when paginating — page changes should not reset the user's filter context.
- Allow typing a page number directly for large datasets.
- Use server-side pagination for datasets over 1,000 rows.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Page load time; Engagement & Usage: Abandonment rate, Bounce rate; How to measure: Compare task success rates and time-on-task in usability tests for find/retrieve tasks using pagination versus virtual scrolling; monitor page load performance metrics and abandonment rates to confirm the chosen pattern matches the task type.

Sources: [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
Wireframe: https://files.catbox.moe/nhu9cf.jpg
Notion: https://app.notion.com/p/Pagination-vs-Virtual-Scrolling-Decision-Framework-9baa9aed534483e2a34c014e0a671f58

## UX-089 — Expandable Row Detail (Inline Master-Detail)
- Score 4 · Data Display & Tables / Row Expansion
- Tags: ai-patterns, tables
- Goals: Design Data-Heavy Screens & Dashboards; Design for Enterprise & B2B Scale
- Use when: When detail content is compact (3–10 fields or a small nested table) and users need to compare detail across multiple records simultaneously — order lines, BOM views, financial statement detail.

**Why.** Expanding detail inline within a table row on click — pushing down subsequent rows and showing supplementary content within the expanded space — preserves table context while providing record-level detail access. This is preferable to a sidebar panel when users need to compare detail across multiple open records simultaneously, as multiple rows can be expanded at once. The inline expansion pattern is particularly powerful for financial statement drill-down and order line detail.

**Do.**
- Use a right-aligned chevron (▶ collapsed, ▼ expanded) at the row level.
- Animate expansion with smooth slide-down (150–200ms).
- Allow multiple rows to be expanded simultaneously.
- Lazy-load detail content on first expand if it requires an API call, showing a skeleton while loading.
- Provide a "Collapse all" control when multiple rows are expanded.

**Measure.** Efficiency: Time on task, Time saved per task, Completion time; Effectiveness: Task success rate, Completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare task completion times when users access record details via expandable rows vs. navigating to a separate detail page. Track page navigation depth as a proxy for context switching, and survey users on preference and perceived efficiency.

Sources: [Infragistics — Master-Detail Layout](https://www.infragistics.com/blogs/master-detail-layout/)
Wireframe: https://files.catbox.moe/v50a0j.jpg
Notion: https://app.notion.com/p/Expandable-Row-Detail-Inline-Master-Detail-3d8a9aed534482a4b95f815764e5a5f4

## UX-090 — Dense Numerical Display — Monospace and Column Alignment
- Score 4 · Data Display & Tables / Typography for Data
- Tags: tables
- Goals: Build Effective Search & Filter; Design Data-Heavy Screens & Dashboards; Improve Readability & Visual Clarity
- Use when: All tables and data views with numerical data — financial reports, inventory counts, performance metrics, analytics tables.

**Why.** Using monospace or tabular-numeral fonts for numerical data in tables makes digits align vertically across rows, enabling instant visual comparison of magnitude without cognitive effort. When numbers use proportional fonts, digit widths vary (1 is narrower than 8), causing misalignment that forces users to read each number individually rather than comparing them as a column. Right-aligning numerical columns by decimal position further reinforces the visual comparison structure.

**Do.**
- Apply `font-variant-numeric: tabular-nums` CSS property to data columns in supported variable fonts, or use a monospace font specifically for data cells.
- Right-align all numerical columns, aligned by decimal position.
- Use consistent decimal places per column: 2 decimal places for currency, 0 for whole-number counts.
- For very large numbers (millions, billions), use K/M/B abbreviations with the full number in a tooltip.
- Ensure consistent column widths to maintain alignment across rows.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Benchmark number-comparison accuracy and speed in usability tests comparing monospace-aligned vs. proportional-font numerical tables. Track data-entry errors in workflows where users transcribe or compare values, as column alignment directly affects scan accuracy.

Sources: [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/659e40.jpg
Notion: https://app.notion.com/p/Dense-Numerical-Display-Monospace-and-Column-Alignment-cb8a9aed5344820da1cc81f68551de11

## UX-091 — Treemap for Hierarchical Quantitative Data
- Score 3 · Data Display & Tables / Data Visualization
- Tags: data-heavy
- Goals: Design Data-Heavy Screens & Dashboards
- Use when: When users need to compare relative sizes across a hierarchy — portfolio analysis, budget roll-ups, storage usage, sales composition. Use sparingly; only when hierarchy and proportion are both critical.

**Why.** A treemap is a space-filling visualization that encodes hierarchical data as nested rectangles, where each rectangle's area is proportional to a quantitative value. Invented by Ben Shneiderman in 1991 at the University of Maryland, treemaps solve a specific perceptual challenge: displaying both the structure of a hierarchy and the relative magnitude of values within that hierarchy simultaneously in a single, compact view.

**Do.**
- Use treemaps when users must understand both hierarchy (parent-child relationships) and relative size within that hierarchy simultaneously.
- Limit treemap depth to 2 levels in the initial view; allow drill-down for deeper exploration via click.
- Use color to encode a second variable (e.g., positive/negative change, category) when space labels are too small to read.
- Always provide a tooltip with exact values on hover, since comparing precise sizes is difficult with area encoding.
- Pair treemaps with a sortable table view as an alternate representation for users who prefer data over visualization.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Findability score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run comparison tasks ("Which category occupies the largest share?") against alternative visualizations (e.g., nested lists, bar charts) measuring time on task and accuracy rate. Use a comprehension survey after each chart type to assess whether the treemap produces correct mental models of part-to-whole relationships.

Sources: [Nielsen Norman Group — Treemaps](https://www.nngroup.com/articles/treemaps/)
Wireframe: https://files.catbox.moe/fkl11x.jpg
Notion: https://app.notion.com/p/Treemap-for-Hierarchical-Quantitative-Data-135a9aed53448268a8ef8199cc2673ac
