# Layout & Visual Hierarchy (13)

## UX-255 — Von Restorff Effect — Visual Isolation for Primary Actions
- Score 5 · Layout & Visual Hierarchy / Attention and visual emphasis
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to primary CTA buttons, recommended pricing plans, critical alert messages, and required field markers. The most important action in any UI should stand apart visually.

**Why.** When multiple similar objects are present, the one that differs from the rest is most likely to be remembered. This is the psychological basis for visually highlighting recommended options and primary action buttons. The critical constraint: if everything is highlighted, nothing is. Maximum 1–2 elements per visible viewport should have high-isolation treatment. Never rely on color alone to communicate distinction — add shape, size, or label changes for color vision deficiency accessibility (~8% of male users).

**Do.**
- Make the primary action button visually distinctive from all secondary actions — different color, fill vs. outline, or size — so it stands apart.
- In pricing tables, visually elevate the "recommended" plan (different background, "Most Popular" badge, slightly larger card).
- In wizard steps with multiple paths, pre-select and visually highlight the recommended option.
- Use isolation sparingly — apply high-contrast emphasis to at most 1–2 elements per viewport.
- Use shape + label changes alongside color for accessibility.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Revenue: Conversion rate, Clickthrough rate; Engagement & Usage: Clickthrough rate; How to measure: Use eye-tracking or heatmap analysis to verify that visually isolated primary actions attract the most attention. A/B test layouts with vs. without Von Restorff isolation on primary CTAs and measure clickthrough rate and conversion rate for those actions.

Sources: [Laws of UX — Von Restorff Effect](https://lawsofux.com/von-restorff-effect/)
Wireframe: https://files.catbox.moe/bpz66u.jpg
Notion: https://app.notion.com/p/Von-Restorff-Effect-Visual-Isolation-for-Primary-Actions-8b6a9aed53448231bd4901b8301274e4

## UX-256 — Avoid Visual Clutter — Remove Redundant Elements
- Score 5 · Layout & Visual Hierarchy / Visual noise and redundancy reduction
- Tags: cognitive-load, enterprise
- Goals: Improve Readability & Visual Clarity
- Use when: Apply during all design reviews, especially in data-dense enterprise dashboards and configuration screens. Each redundant element subtracts from attention available for meaningful content.

**Why.** Visual clutter forces the brain to process and discard irrelevant information on every interaction. Each redundant link, decorative image, or meaningless typographic element subtracts from attention available for meaningful content. Using proximity, aligned spacing, background color, and shared typography to define visual relationships eliminates the need for explicit borders — borders themselves compete for attention with content. Use zebra striping instead of row border lines; background color sections instead of bordered boxes for form groups.

**Do.**
- Retain only links, images, and visual elements that convey unique meaningful value.
- Audit decorative images and animations — if they don't convey information, remove them.
- Eliminate redundant navigation elements (same destination linked twice without reason).
- Reduce font sizes, weights, and colors to those serving clear hierarchy purposes.
- Use zebra striping instead of row border lines in data tables.
- Use background color instead of bordered boxes for form sections.
- Default to borderless table structures — add borders only where explicit column separation adds clarity.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Engagement & Usage: Bounce rate, Abandonment rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test pages with redundant elements removed versus originals, measuring task completion rates, time on task, and bounce rate. Conduct usability testing with eye-tracking or click heatmaps to confirm that removing redundant elements directs attention to priority content.

Sources: [Nielsen Norman Group — Minimize Cognitive Load to Maximize Usability](https://www.nngroup.com/articles/minimize-cognitive-load/) · [Good UI — Fewer Borders](https://goodui.org/#23)
Wireframe: https://files.catbox.moe/ufwi9q.jpg
Notion: https://app.notion.com/p/Avoid-Visual-Clutter-Remove-Redundant-Elements-30ca9aed53448370b7b78101d259b4ee

## UX-257 — Visual Hierarchy — Establish a Clear Type Scale
- Score 5 · Layout & Visual Hierarchy / Typography and information hierarchy
- Tags: forms
- Goals: Simplify a Cluttered Interface; Improve Readability & Visual Clarity
- Use when: Apply to dashboard layouts, data tables, report output, settings pages, detail panels — any screen with multiple levels of information density.

**Why.** Visual hierarchy guides the eye through content using size, weight, color, spacing, and indentation to differentiate important elements from supporting ones. Without explicit hierarchy, all elements compete equally for attention. In enterprise apps with high information density, establishing a clear 4-level type scale — primary headings, secondary labels, body data, meta/helper text — is foundational to readability and scanning efficiency.

**Do.**
- Establish a clear type scale: primary headings (18–24px/bold), secondary labels (14px/medium), body data (14px/regular), meta/helper text (12px/regular/muted).
- Use weight (bold) for primary data points, color for status/state, size for heading levels — don't apply all three simultaneously to the same element.
- Give the most important number on a dashboard card the largest font size; supporting context text should be 30–50% smaller.
- Use intentional whitespace as a hierarchy signal — dense sections read as secondary, airy sections as primary.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Findability score; Satisfaction & Perception: Ease-of-use score, Brand perception; How to measure: Run a first-click test or information-finding task on pages with a defined type scale versus pages with inconsistent sizing, measuring time to locate key headings and sections. Use post-session ratings to capture perceived clarity and professionalism.

Sources: [Good UI — Visual Hierarchy](https://goodui.org/#31)
Wireframe: https://files.catbox.moe/m46t94.jpg
Notion: https://app.notion.com/p/Visual-Hierarchy-Establish-a-Clear-Type-Scale-284a9aed534483b89459810118e30886

## UX-258 — Design for Scanning — Leverage F-Pattern and Layer-Cake Patterns
- Score 5 · Layout & Visual Hierarchy / Reading Patterns
- Tags: performance, forms
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Use when designing page layouts, dashboard arrangements, and data table column ordering.

**Why.** Users scan screens based on past experience and expectations, typically following F-patterns (reading-heavy content, with more attention on the left side and first lines) or Z-patterns (task-focused layouts, where attention moves diagonally from top-left to top-right then to bottom-left to bottom-right). The most important information should be placed in positions users scan first. Data tables are scanned column-by-column at the header level before individual rows are examined. This pattern knowledge should directly inform information placement decisions.

**Do.**
- Place primary status indicators and most-needed actions in the top-left/top-center zone.
- Design data table column ordering for the scan pattern of the primary user workflow — most-frequently-referenced columns should appear first (leftmost).
- For dashboard layouts, place the single most important KPI in the top-left hero position.
- For text-heavy content areas, front-load the most important information in the first line and first few words of each section.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Findability score, Task success rate; Engagement & Usage: Scroll depth, Bounce rate; How to measure: Use eye-tracking studies or click heatmaps to verify that information placed in F-pattern hotspots receives attention, and compare time-to-locate-target-information on scanning-optimized layouts against paragraph-heavy alternatives. Track bounce rate changes on content pages after restructuring for scannability.

Sources: [100 Things #6 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Nielsen Norman Group — F-Shaped Pattern for Reading Web Content](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
Wireframe: https://files.catbox.moe/gxx6cv.jpg
Notion: https://app.notion.com/p/Design-for-Scanning-Leverage-F-Pattern-and-Layer-Cake-Patterns-68aa9aed534483b58c6a81ec4975f6f9

## UX-259 — Make Important Information Visually Salient
- Score 5 · Layout & Visual Hierarchy / Visual salience and critical information emphasis
- Tags: cognitive-load, forms, data-heavy
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to dashboards, alert systems, status indicators, and dense data views where critical information must be found quickly during visual search.

**Why.** Complex-app tasks require extensive visual search across huge tables, dashboards, and alert systems. The sheer volume of competing information hinders finding critical items. Removing nonessential elements is often more effective at creating salience than adding emphasis — reducing noise increases the signal strength of important items. Critical alerts should be positioned at the visual entry point of the screen (top-left for LTR layouts) and use contrast-based attention guidance.

**Do.**
- Remove superfluous graphics, decorative illustrations, and non-functional visual elements to increase salience of critical content.
- Use color, bold weight, and size to create a clear visual hierarchy with 1–2 maximum emphasis levels.
- Apply contrast-based guidance: critical alerts in high-contrast red/orange, normal data in neutral tones.
- Position critical status indicators at the visual entry point (top-left in LTR layouts).
- Reduce the number of competing elements rather than adding more emphasis to important ones.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Engagement & Usage: Clickthrough rate, Abandonment rate; Revenue: Conversion rate; How to measure: Use click heatmaps and scroll depth analytics to verify that visually salient elements receive the intended attention and clicks. A/B test layouts where key calls-to-action or information are given higher visual weight, measuring clickthrough and conversion rate improvements.

Sources: [Nielsen Norman Group — 8 Guidelines for Complex Applications](https://www.nngroup.com/articles/complex-application-design/)
Wireframe: https://files.catbox.moe/0lfrbi.jpg
Notion: https://app.notion.com/p/Make-Important-Information-Visually-Salient-c08a9aed53448265bfda01049ec1b9da

## UX-260 — Visual Hierarchy Through Grouping and Weight
- Score 5 · Layout & Visual Hierarchy / Visual Organization
- Goals: Simplify a Cluttered Interface; Improve Readability & Visual Clarity
- Use when: Use when designing dashboards, data tables, and any complex screen, and when users report difficulty identifying what to do or look at on a screen.

**Why.** Use visual properties — proximity, size, weight, color, and whitespace — to create clear hierarchy that guides user attention to the most important information first, then secondary, then detail. Users scan before they read, and visual hierarchy determines what they notice and in what order. Data-heavy enterprise dashboards fail when they present all data at equal visual weight, forcing users to decide what matters rather than guiding them. Half the brain's resources are dedicated to visual processing; designs that work with visual processing shortcuts (proximity, similarity, pattern recognition) are processed faster and with less cognitive effort.

**Do.**
- Apply the 3-level hierarchy rule: primary elements at maximum contrast and size, secondary at medium weight, tertiary at minimum weight.
- Test hierarchy by squinting at the screen — can you identify the primary content at low resolution? Primary KPIs and action triggers should remain identifiable.
- Use consistent typographic scale (3–4 sizes maximum), consistent color weight (one primary action color, used sparingly), and whitespace grouping rather than borders.

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Findability score; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Use first-click testing to verify that users correctly identify primary and secondary content zones without prompting. Measure time-to-locate-target-element across grouped and ungrouped layout variants in unmoderated usability tests.

Sources: [About Face 4th Ed., Ch. 13 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf) · [100 Things #1 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/m2gngw.jpg
Notion: https://app.notion.com/p/Visual-Hierarchy-Through-Grouping-and-Weight-60aa9aed53448374917c011066378813

## UX-261 — Avoid Visual Noise — Reduce Without Losing Capability
- Score 5 · Layout & Visual Hierarchy / Visual Simplification
- Goals: Improve Readability & Visual Clarity
- Use when: Use during visual design review of data-heavy screens, when users describe interfaces as "overwhelming" or "busy," and when preparing existing interfaces for density improvements.

**Why.** Visual noise — unnecessary borders, redundant labels, decorative elements, equal-weight dividers — makes complex interfaces feel overwhelming even when the underlying information density is appropriate. Reducing visual noise is not the same as reducing information. Users can process more information when it is visually organized, not just visually present. The primary sources of noise in enterprise UIs are: every-row borders in tables (replaced by alternating backgrounds or spacing), field labels repeated as column headers, decorative horizontal rules, and low-value helper text at full opacity.

**Do.**
- Audit each screen for: redundant borders (replace with spacing), redundant labels (column headers eliminating repeated row labels), decorative dividers (replace with whitespace), and low-contrast helper text (reduce to 40% opacity or remove).
- Replace table row borders with zebra striping or row-hover highlights.
- Remove section header background fills when proximity already creates grouping.
- Aim for a 50% reduction in visual border elements on any screen flagged as "too busy."

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Support tickets reduction; Engagement & Usage: Bounce rate, Feature usage; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Audit pages for visual noise and run A/B tests comparing reduced-noise versus original layouts, measuring bounce rate, task completion, and error counts. Track support tickets related to UI confusion before and after noise reduction to quantify the operational benefit.

Sources: [About Face 4th Ed., Ch. 13 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/lcztih.jpg
Notion: https://app.notion.com/p/Avoid-Visual-Noise-Reduce-Without-Losing-Capability-c97a9aed534482f39ad1813a52e1d539

## UX-262 — Proximity Creates Grouping — Gestalt Principle
- Score 5 · Layout & Visual Hierarchy / Gestalt Design Principles
- Goals: Simplify a Cluttered Interface; Improve Readability & Visual Clarity
- Use when: Use when designing form layouts, dashboard cards, data tables, and any multi-section screen where visual grouping must replace decorative borders.

**Why.** Elements placed close together are perceived as belonging to the same group, regardless of other visual properties. This Gestalt principle is the primary tool for creating visual organization in data-heavy interfaces — using spacing rather than borders to communicate grouping reduces visual noise while maintaining perceptual organization. Misapplied proximity — placing unrelated elements close together — creates false grouping that confuses users and generates trust issues with data. The spacing system itself becomes the grouping mechanism when applied consistently.

**Do.**
- Replace all decorative borders and dividers with spacing.
- Maintain consistent spacing ratios: elements within a group spaced at X, groups spaced at 2–3X of that value.
- Apply an 8pt grid spatial system (4, 8, 16, 24, 32, 48, 64px steps) for all spacing decisions.
- Audit screens for proximity violations where unrelated elements appear adjacent.
- In forms, group related fields together with tight spacing and separate logical groups with 24–32px of vertical space.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score; How to measure: Run first-click tests comparing layouts with tight proximity grouping versus spread-out arrangements to measure findability score; collect ease-of-use ratings post-task in moderated usability sessions.

Sources: [100 Things #9 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/1w0sh8.jpg
Notion: https://app.notion.com/p/Proximity-Creates-Grouping-Gestalt-Principle-022a9aed534483cba52f81b8cb8cf759

## UX-263 — Aesthetic and Minimalist Design
- Score 4 · Layout & Visual Hierarchy / Visual noise reduction
- Goals: Simplify a Cluttered Interface; Improve Readability & Visual Clarity
- Use when: Apply during design review passes, especially in data-dense enterprise dashboards and configuration screens where feature creep creates visual competition for attention.

**Why.** Every extra unit of information competes with relevant information and diminishes its relative visibility. The Law of Prägnanz states people interpret visual information as the simplest possible form — complex icons, cluttered layouts, and overloaded screens increase interpretation effort. Occam's Razor applied to UX: prefer the simplest design that achieves the goal. This isn't about visual flatness or hiding capability — it's about ruthless prioritization of what earns screen space relative to user goals.

**Do.**
- For each UI element, ask: if removed, would a user's task be meaningfully impaired? Remove what fails this test.
- Apply progressive disclosure to hide infrequently used controls.
- Reduce font sizes, weights, and colors to those that serve explicit hierarchy purposes.
- Remove decorative images and animations that don't convey information.
- Use whitespace purposefully — dense sections read as secondary, airy sections as primary.
- Before adding any element, challenge whether it earns its place.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, SUS score, Brand perception; How to measure: A/B test cluttered versus minimalist design variants, measuring time-on-task and task success rate; collect SUS or ease-of-use scores via post-task survey to quantify perceived simplicity improvements.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [Laws of UX — Occam's Razor](https://lawsofux.com/occams-razor/) · [Laws of UX — Law of Prägnanz](https://lawsofux.com/)
Wireframe: https://files.catbox.moe/jb7lso.jpg
Notion: https://app.notion.com/p/Aesthetic-and-Minimalist-Design-1b4a9aed5344839ab3c5010e78640762

## UX-264 — Serial Position Effect — Place Critical Items First and Last
- Score 4 · Layout & Visual Hierarchy / List and menu ordering
- Tags: tables, navigation
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to navigation menu ordering, toolbar button placement, table column ordering, pricing plan ordering, and step sequencing in wizards.

**Why.** Users best remember the first and last items in a series (primacy and recency effects) — middle items are recalled with less accuracy. This applies to navigation (most important items at first and last positions), data tables (most important columns leftmost and rightmost), pricing tables (recommended plan first or last, never buried in the middle), and notification lists (most urgent at top). Applying this principle to navigation without analytics data leads to homepage bias — validate with actual usage data.

**Do.**
- Place the most important navigation items first (Home, Dashboard) and last (Settings, Help) in sidebars.
- Put the most important data table columns leftmost (primary identifier) and include a key status/action column rightmost.
- In pricing tables, place the recommended plan first or last — never bury it.
- Put critical form fields at the top of sections and a clear CTA at the bottom.
- In notification lists, ensure the most urgent items appear at the top.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Engagement & Usage: Clickthrough rate, Bounce rate; How to measure: Use eye-tracking studies or first-click testing to verify that critical items placed in primacy and recency positions receive the most attention and action. Compare clickthrough rates on navigation elements and CTAs before and after repositioning to serial-position-optimized locations.

Sources: [Laws of UX — Serial Position Effect](https://lawsofux.com/serial-position-effect/)
Wireframe: https://files.catbox.moe/zews1e.jpg
Notion: https://app.notion.com/p/Serial-Position-Effect-Place-Critical-Items-First-and-Last-dc2a9aed5344820e8fcd81e0978ef540

## UX-265 — Sticky Primary CTAs on Long Pages
- Score 4 · Layout & Visual Hierarchy / Persistent action accessibility
- Tags: forms
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to long configuration pages, multi-section forms, and detailed record views with a primary action (Save, Submit, Approve) that must remain accessible at all times.

**Why.** Keeping a primary CTA visible as users scroll ensures the action remains accessible throughout their journey without requiring scroll-back. This is critical for long enterprise forms and record detail pages where users may spend minutes reading/editing before committing. The CTA repetition principle also applies to long pages: a soft CTA early and a specific CTA at the bottom after the user has consumed supporting information.

**Do.**
- Use a sticky action bar at the bottom of long forms — always visible, shows Save/Cancel without scrolling.
- In record detail pages, keep the primary action button (Approve, Assign, Send) in the sticky header or a fixed right-rail panel.
- Place a soft CTA near the top of a long page and a stronger, more specific CTA at the bottom.
- Ensure the sticky element doesn't occlude content — use only for the primary action, not a full nav bar.
- On dashboard pages with long data views, keep a sticky action bar so primary actions stay accessible.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task; Revenue: Conversion rate; Engagement & Usage: Abandonment rate; How to measure: A/B test pages with sticky CTAs versus non-sticky CTAs; measure CTA click rate, conversion rate, and scroll-to-click distance to quantify the accessibility benefit of persistent primary actions on long-form pages.

Sources: [Good UI — Sticky / Persistent CTA](https://goodui.org/) · [Good UI — CTA Repetition](https://goodui.org/#5)
Wireframe: https://files.catbox.moe/r2spla.jpg
Notion: https://app.notion.com/p/Sticky-Primary-CTAs-on-Long-Pages-033a9aed53448267aaa101e54b1fbcaa

## UX-266 — Avoid False Bottoms — Visual Continuity in Scrollable Views
- Score 4 · Layout & Visual Hierarchy / Scrollable page design
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to long dashboard pages, infinite scroll tables, report output pages, analytics views, and documentation pages. False bottoms kill content discovery.

**Why.** A false bottom occurs when a visual break or whitespace gap on a scrollable page makes users think they've reached the end when they haven't. This kills content discovery below the break. Consistent visual rhythm — consistent card spacing, row heights, section breaks — teaches users a pattern that signals "content continues." Show partial content of the next section above the fold to explicitly signal "more content below."

**Do.**
- Never place a full-width visual break or large empty gap in the middle of a scrollable content area.
- Use consistent visual rhythm (card spacing, row heights, section breaks) so users learn a pattern and continue scrolling.
- Show partial content of the next section above the fold to signal continuation.
- Use "load more" triggers or pagination instead of empty-space separators between data sections.
- Test with users whether they scroll to the bottom — if they consistently stop at a visual break, eliminate the break.

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task; Engagement & Usage: Scroll depth, Abandonment rate; How to measure: Use scroll-depth analytics to identify where users stop scrolling and correlate with content truncation or visual breaks; A/B test designs with false bottoms removed versus present and measure scroll depth and content engagement rates.

Sources: [Good UI — Visual Continuity](https://goodui.org/#15)
Wireframe: https://files.catbox.moe/xege92.jpg
Notion: https://app.notion.com/p/Avoid-False-Bottoms-Visual-Continuity-in-Scrollable-Views-650a9aed53448360ad40018de0c11c05

## UX-267 — Peripheral Vision Determines Dashboard Character
- Score 4 · Layout & Visual Hierarchy / Visual Perception
- Tags: animation, dashboard
- Goals: Design Data-Heavy Screens & Dashboards; Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Use when designing dashboard layouts and evaluating whether animations are appropriate for enterprise contexts.

**Why.** Peripheral vision — the parafoveal and far-peripheral regions outside the foveal fixation point — does not resolve fine detail but is highly sensitive to motion, change, and luminance contrast. In a dashboard context, this means that animations, blinking elements, and high-contrast micro-interactions outside the user's current focal area trigger involuntary attention capture, a phenomenon documented extensively in visual search research (Treisman & Gelade, 1980; Yantis & Jonides, 1984). For consumer applications designed for entertainment or content discovery, this motion sensitivity can be leveraged to guide attention.

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, Brand perception; How to measure: Conduct a five-second test where participants view a dashboard briefly and report their impression of information density, clarity, and trust. Compare results for layouts with different peripheral visual weights to verify that the overall dashboard character (calm vs. busy) aligns with user expectations and the intended audience.

Sources: [100 Things #2 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/7xvmw9.jpg
Notion: https://app.notion.com/p/Peripheral-Vision-Determines-Dashboard-Character-45ba9aed5344831ab1cc811f38e77bf5
