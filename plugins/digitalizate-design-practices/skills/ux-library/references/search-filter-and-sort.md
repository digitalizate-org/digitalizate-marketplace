# Search Filter & Sort (11)

## UX-323 — Provide Navigation Alongside Search — Not Search Alone
- Score 5 · Search Filter & Sort / Search and navigation complementarity
- Tags: search, tables, navigation
- Goals: Build Effective Search & Filter
- Use when: Apply to any application with a large content or data set where users may approach with varying levels of familiarity — search alone fails exploratory and exhaustive seeking modes.

**Why.** Relying solely on search forces users to formulate queries from scratch — a memory-intensive, error-prone process that fails when users don't know the exact terminology or what's available. Navigation alongside search enables users to browse and build a mental model of the available data space. For enterprise tools with specialized vocabularies (field names, system identifiers, product codes), navigation and facets are essential companions to search that allow recognition-over-recall.

**Do.**
- Pair global search with structured faceted navigation for complex datasets.
- Provide category landing pages that expose available subcategories and attributes.
- Implement facets to transform typed search into recognizable option-selection.
- Use autosuggestions to reduce query formulation burden.
- For global search, open a full search overlay on focus that shows recent searches and quick-navigation suggestions.
- Never design search as the only way to reach content.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task; Engagement & Usage: Bounce rate, Pages per session; How to measure: Track zero-result search rates and bounce rates for search-only versus search-plus-navigation interfaces in analytics; run usability tests with browsing and searching tasks to measure findability score across both navigation modalities.

Sources: [Nielsen Norman Group — Search Is Not Enough](https://www.nngroup.com/articles/search-not-enough/)
Wireframe: https://files.catbox.moe/ywlp41.jpg
Notion: https://app.notion.com/p/Provide-Navigation-Alongside-Search-Not-Search-Alone-b28a9aed534483698d5c01f437d86ee1

## UX-324 — Filter Categories — Appropriate, Predictable, and Prioritized
- Score 5 · Search Filter & Sort / Filter design and taxonomy
- Tags: search
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products
- Use when: Apply to any filtering or faceted navigation system in enterprise applications. Filters are only as valuable as their alignment with user mental models.

**Why.** The value of a filtering system depends entirely on whether filter categories match the dimensions users actually care about and are labeled in their vocabulary. Poorly named, hidden, or misaligned filter categories lead to filters being ignored. Making filter controls prominently visible (rather than hidden behind a button) increases filter usage and engagement with filtered content. Visible filters communicate that filtering is possible — hidden filters communicate it doesn't exist.

**Do.**
- Ensure filter categories cover the most important content dimensions based on user research.
- Place general, high-level filters at the top; specific filters below.
- Use plain user language — avoid internal codes, technical field names, or database column names.
- Surface the most commonly-used filter dimensions (status, date range, assigned user, category) as always-visible filter chips or a filter sidebar panel.
- Make filters visible and discoverable, not buried in "Advanced Search" modals.
- Show a count of active filters and a "Clear All" option.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Feature usage, Abandonment rate; How to measure: Track filter usage rates in analytics to identify which categories are used versus ignored, then measure whether restructuring filter categories (based on actual usage data) improves time-to-filter-result. Run a tree test on filter taxonomy to validate that category labels are intuitive to target users.

Sources: [Nielsen Norman Group — Helpful Filter Categories and Values](https://www.nngroup.com/articles/filter-categories-values/) · [Good UI — Visible Filters](https://goodui.org/)
Wireframe: https://files.catbox.moe/k3nm4w.jpg
Notion: https://app.notion.com/p/Filter-Categories-Appropriate-Predictable-and-Prioritized-3d5a9aed534482fb859b019f66de1708

## UX-325 — Faceted Search — Show Filters and Results Simultaneously
- Score 5 · Search Filter & Sort / Faceted search architecture
- Tags: search, tables, navigation
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products
- Use when: Apply to all faceted search implementations in enterprise data management, content management, and any large record set where progressive filtering is the primary navigation mode.

**Why.** The key advantage of faceted search over "advanced search" forms is simultaneous display of filter controls and results. Instant result updates as filters are applied make the relationship between selection and outcome immediately visible, enabling trial-and-error filtering without pogo-sticking between screens. Avoid "Apply" buttons for filter selection — applying filters immediately on selection creates the real-time feedback that makes faceted search powerful.

**Do.**
- Display facet controls in a left sidebar or inline panel adjacent to results.
- Update result counts dynamically as users select/deselect filters.
- Show active filters as removable chips above the results set.
- Avoid "Apply" buttons — apply filters immediately on selection.
- Provide a "Clear All Filters" shortcut to reset the search state.
- Show "No results" states specifically when filters cause an empty set, with a suggestion to adjust filters — differentiate from "nothing exists" states.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Sessions per user, Pages per session; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run task-based usability tests where users must locate specific items within a large catalog, measuring time on task and success rate for faceted versus non-faceted search. Track search abandonment rate in analytics as a proxy for unmet search intent.

Sources: [Nielsen Norman Group — Filters vs. Facets](https://www.nngroup.com/articles/filters-vs-facets/) · [A List Apart — Design Patterns: Faceted Navigation](https://alistapart.com/article/design-patterns-faceted-navigation/)
Wireframe: https://files.catbox.moe/ipbd28.jpg
Notion: https://app.notion.com/p/Faceted-Search-Show-Filters-and-Results-Simultaneously-73ea9aed534483508e4401b7c5114113

## UX-326 — Autocomplete and Autosuggestion in Search
- Score 5 · Search Filter & Sort / Search input assistance
- Tags: search, ai-patterns, forms
- Goals: Build Effective Search & Filter
- Use when: Apply to global search, record lookup fields, tag/label inputs, user assignment fields, and filter value inputs in enterprise applications.

**Why.** Typed search requires users to recall the exact terminology the system recognizes — a difficult task when users are unfamiliar with the domain or data vocabulary. Autocomplete and autosuggestion shift this to recognition-over-recall by presenting options as users type. Show up to 5–7 suggestions in the dropdown, grouped by entity type if the search spans multiple types. Use a combobox over a plain select for any list with 10+ items — filtering dramatically reduces scan time.

**Do.**
- Trigger suggestions after 2–3 characters — not after 1 (too broad) and not requiring the full term.
- Show 5–7 suggestions grouped by type (Users, Reports, Records) if multi-entity.
- Include recent searches at the top before the user has typed anything.
- Keyboard-navigate suggestions with arrow keys, confirm with Enter, dismiss with Escape.
- Handle typos, partial matches, and case variations gracefully.
- Debounce live search queries 300–500ms to avoid excessive API calls.
- Show a spinner inside the input when loading remote options.

**Measure.** Effectiveness: Task success rate, Search success rate; Efficiency: Time to find information, Keystrokes to complete search; Satisfaction: User satisfaction score (CSAT/NPS); How to measure: Monitor search completion rate and time-to-first-result; track how often users refine searches (indicating poor autocomplete); A/B test with and without suggestions to quantify conversion lift.

Sources: [Good UI — Auto-Suggest / Autocomplete](https://goodui.org/) · [Component Gallery — Combobox / Autocomplete](https://component.gallery/components/combobox/) · [Nielsen Norman Group — Search Is Not Enough](https://www.nngroup.com/articles/search-not-enough/)
Wireframe: https://files.catbox.moe/fs14ff.jpg
Notion: https://app.notion.com/p/Autocomplete-and-Autosuggestion-in-Search-559a9aed5344829db231810bc970a455

## UX-327 — Persistent Global Search Across All Entities
- Score 5 · Search Filter & Sort / Global Search
- Tags: search, enterprise, navigation
- Goals: Build Effective Search & Filter; Design for Enterprise & B2B Scale
- Use when: Use in any enterprise application with 3+ entity types and significant data volume, especially where users cannot always predict where data is stored.

**Why.** Provide a persistent, fast search experience that lets users find any entity — record, document, setting, action — from anywhere in the application without navigating to a specific section first. Enterprise applications with thousands of records and multiple entity types make navigation-first finding deeply frustrating. Global search with entity-type indicators, fuzzy matching, and recent-items history provides the fastest possible path from intent to content and serves as the universal fallback when navigation fails.

**Do.**
- Always-visible search bar in the top navigation, or a keyboard shortcut (Cmd/Ctrl+K) to open a command palette-style search.
- Include entity-type indicators in results (e.g., icon or label showing "Customer," "Order," "Report").
- Support fuzzy/partial matching.
- Show recent items before any query is entered.
- Group results by entity type in the results dropdown.
- Ensure search latency stays below 200ms for the first visible results.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Feature usage, Sessions per user; How to measure: Track global search usage rate, zero-result rate, and click-through rate on search results in analytics; run findability usability tests comparing global search against per-section search, measuring time-to-result and task success rate.

Sources: [HashBuilds — Command Palette Pattern](https://www.hashbuilds.com/patterns/what-is-command-palette) · [About Face Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/ozfkvo.jpg
Notion: https://app.notion.com/p/Persistent-Global-Search-Across-All-Entities-5c9a9aed534483669ae6813396b48c6a

## UX-328 — Faceted Filtering Over Browse Hierarchies
- Score 5 · Search Filter & Sort / Filter Design
- Tags: search, enterprise, tables, forms
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products
- Use when: Use when designing search and retrieval for data-rich applications and when users report difficulty finding records in hierarchical navigation.

**Why.** For large data sets, faceted search — multi-dimensional filtering across multiple attributes simultaneously — is dramatically more efficient than hierarchical browse trees. Users searching for "Q3 reports, approved, finance department" should apply all three filters simultaneously, not drill down through a three-level hierarchy one step at a time. Faceted search aligns with how users actually think about data — in multiple dimensions — rather than how databases organize it. Show result counts per facet value to help users calibrate their filter selections.

**Do.**
- Identify the 5–8 most common filter dimensions for each major entity type through user research.
- Implement facet panels that show available values and record counts.
- Support multi-select within facets.
- Persist filter state in the URL for shareability.
- Show applied filters as removable chips or tags above results with a "Clear all" option.
- Update result counts dynamically as filters are applied to give users immediate feedback on filter impact.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Feature usage, Bounce rate, Pages per session; How to measure: A/B test faceted filtering against browse-hierarchy navigation for catalog or search-result pages; measure findability score and time-to-result in usability tests, and track filter engagement rate and bounce rate via analytics.

Sources: [About Face Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/2z1vr8.jpg
Notion: https://app.notion.com/p/Faceted-Filtering-Over-Browse-Hierarchies-936a9aed53448379b33981925f20b196

## UX-329 — Per-Column Filtering and Global Search
- Score 5 · Search Filter & Sort / Table Filtering
- Tags: search, tables
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products
- Use when: Any table with more than 50 rows or more than one dimension users may want to filter on. Without filtering, users must manually scroll through hundreds of records to find relevant items.

**Why.** Providing both a global search bar (searching across key fields) and per-column filters for precise data narrowing gives users two complementary paths to data discovery: broad search for known items, faceted filtering for exploratory narrowing. Active filters must be visually prominent — filter chips or highlighted column headers — so users always know they're viewing a subset. Invisible filters are a significant cause of enterprise data errors when users make decisions based on incomplete views.

**Do.**
- Debounce filter input at 300ms.
- Show a "Filters active" badge or banner whenever any filter is applied.
- For complex multi-field filtering, use a slide-out filter panel rather than inline dropdowns per column.
- Use client-side filtering for fewer than 1,000 rows; server-side for larger datasets to avoid performance degradation.
- Persist filter state in URL query parameters for shareability.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Findability score, Task success rate; Engagement & Usage: Feature usage, Sessions per user; How to measure: Track feature usage analytics on filter interactions to understand adoption rates. Conduct task-based tests where users must locate specific records, measuring time on task and success rate with per-column filters versus without, and verify that the combination of both global search and column filters covers diverse user strategies.

Sources: [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/) · [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
Wireframe: https://files.catbox.moe/qrav05.jpg
Notion: https://app.notion.com/p/Per-Column-Filtering-and-Global-Search-535a9aed534482c7b91381d7d7b53a58

## UX-330 — Saved Filters and Search Views
- Score 5 · Search Filter & Sort / Filter Management
- Tags: search
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products; Design for Enterprise & B2B Scale
- Use when: Any enterprise application where users repeat the same filter combinations. Baseline feature for CRM, project management, analytics, and operations tools.

**Why.** Allowing users to name and save complex filter configurations as "views" or "saved searches" for reuse dramatically reduces repeat navigation effort for power users who routinely apply the same multi-facet filters (e.g., "My Open High-Priority Tickets," "Overdue Invoices This Quarter"). Without saved views, power users spend significant time daily rebuilding the same filter context — a tax on productivity that compounds across the entire organization.

**Do.**
- Provide a "Save this view" button when active filters are present.
- Allow naming the view, setting visibility (personal or shared with the team), and pinning to a sidebar or tab bar for one-click access.
- Support deleting and editing saved views.
- For team-shared views, include ownership metadata, modification history, and a "Make a copy" option for personal variations.

**Measure.** Efficiency: Time on task, Time saved per task; Effectiveness: Task success rate, Completion rate; Engagement & Usage: Feature usage, Sessions per user, Active users; Adoption & Retention: Returning visitors, Session frequency; How to measure: Track adoption of the saved filters feature via analytics (percentage of users who create at least one saved view) and measure average time-to-active-filter-set for users with versus without saved views. Monitor returning user rates to test whether saved views increase habitual product usage.

Sources: [Pencil & Paper — Data Table UX Patterns](https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables)
Wireframe: https://files.catbox.moe/xb8pya.jpg
Notion: https://app.notion.com/p/Saved-Filters-and-Search-Views-d37a9aed53448334bf9501643f861163

## UX-331 — Global Search with Federated Results
- Score 5 · Search Filter & Sort / Global Search
- Tags: search
- Goals: Build Effective Search & Filter
- Use when: Any enterprise application with multiple object types and more than 1,000 total records across the system.

**Why.** A global search spanning multiple entity types (Customers, Orders, Projects, Documents, Settings, Users) and presenting grouped, type-labeled results in a single overlay lets users find anything without knowing where it lives in the navigation hierarchy. This is particularly powerful in enterprise applications where the information architecture may not be intuitive to all users or where users work across multiple modules. Including recently viewed items as default suggestions creates a "recent work" shortcut that eliminates navigating to commonly accessed records.

**Do.**
- Trigger: Ctrl+K.
- Show recent items as defaults before typing.
- As user types: federated search with <200ms debounce, results grouped by entity type with section headers.
- Include a "Search everything for 'X'" footer option to expand to full results page.
- Show keyboard shortcuts for opening results.
- Enforce access control: only show results the user has permission to view (checked server-side, not just filtered client-side).

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time to find information, Support tickets reduction; Satisfaction: User satisfaction score (CSAT/NPS), Perceived performance; How to measure: Track zero-results search rate and time-to-find-item before and after; monitor support ticket volume for navigation/search issues; run satisfaction surveys tied to search usage.

Sources: [Merveilleux.design](http://merveilleux.design/) · [— SaaS Navigation Types](https://www.merveilleux.design/en/blog/article/comprehensive-guide-for-saas-products-on-ux-navigation-types)
Wireframe: https://files.catbox.moe/juqw27.jpg
Notion: https://app.notion.com/p/Global-Search-with-Federated-Results-2e6a9aed534483359f1481802577bd9d

## UX-332 — Filter Panel Persistence and Active Filter Badges
- Score 5 · Search Filter & Sort / Filter Management
- Tags: search
- Goals: Build Effective Search & Filter; Structure Navigation for Deep Products; Design for Enterprise & B2B Scale
- Use when: All filterable data views in enterprise applications. Filter persistence prevents the frustrating "lost context" experience when users return to a view.

**Why.** When a user applies filters to a data view and navigates away, persisting the filter state so they return to their filtered context prevents a constant loss of workflow context that compounds across a full workday. More critically, visually prominent active filter chips/badges above the data set ensure users always know they're viewing a filtered subset — invisible active filters are one of the most dangerous UX failures in enterprise data systems, leading to decisions made on unknowingly incomplete data.

**Do.**
- Persist filter state in URL query parameters (shareability, browser back/forward support) or sessionStorage.
- Show active filter chips below the filter panel/above the data with individual ✕ remove buttons and a "Clear all" option.
- Show a "Filters active" badge on the filter panel toggle button when any filter is applied.
- When filters are active, show the total matching count ("47 of 3,247 records") prominently near the data set to reinforce that a subset is shown.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track active-filter badge click rates and session filter-change counts in analytics to assess comprehension; run usability tests comparing persistent versus non-persistent filter panels on findability score and time-on-task.

Sources: [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table) · [Nielsen Norman Group — Data Tables](https://www.nngroup.com/articles/data-tables/)
Wireframe: https://files.catbox.moe/7e3nc9.jpg
Notion: https://app.notion.com/p/Filter-Panel-Persistence-and-Active-Filter-Badges-828a9aed53448396901f01365616f360

## UX-333 — Design for All Four Information-Seeking Modes
- Score 4 · Search Filter & Sort / Information architecture for varied seeking behaviors
- Tags: search, forms
- Goals: Build Effective Search & Filter
- Use when: Apply to IA and navigation design for complex systems with large content or data sets where users approach with varying levels of familiarity and intent.

**Why.** Frame product requirements around what users "hire" a product to do — the job they need accomplished in a specific context — rather than around features or user characteristics. JTBD shifts focus from "who the user is" to "what they're trying to accomplish and why."

**Do.**
- For each significant user request, apply the JTBD format: "When [situation], I want to [motivation], so I can [expected outcome]." Identify functional, social, and emotional jobs separately.
- Design solutions to satisfy the job, not just implement the requested feature.
- Conduct 30–60 minute JTBD interviews focused on context and timeline of decisions, not opinions about specific features.

**Measure.** Effectiveness: Task success rate, Findability score, Direct success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Abandonment rate, Sessions per user; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Use tree testing and usability task testing across all four information-seeking modes (known-item, exploratory, exhaustive, re-finding) to measure findability scores and direct success rates.

Sources: [Boxes and Arrows — Four Modes of Seeking Information](https://boxesandarrows.com/four-modes-of-seeking-information-and-how-to-design-for-them/)
Wireframe: https://files.catbox.moe/3m2bbh.jpg
Notion: https://app.notion.com/p/Design-for-All-Four-Information-Seeking-Modes-1eda9aed53448382bacf817b38041d09
