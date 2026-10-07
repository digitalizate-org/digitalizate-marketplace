# Accessibility (13)

## UX-001 — Color Contrast — Minimum 4.5:1 for Normal Text
- Score 5 · Accessibility / Color contrast compliance
- Tags: accessibility
- Goals: Design for Accessibility & Inclusion; Improve Readability & Visual Clarity
- Use when: Apply to all text — labels, table cells, form fields, error messages, chart labels, navigation items. Test both light and dark modes independently.

**Why.** Poor color contrast is among the most common and impactful accessibility failures in enterprise applications. WCAG 2.1 sets minimum contrast ratios: 4.5:1 for normal text and 3:1 for large text (≥18pt or ≥14pt bold). Beyond compliance, good contrast reduces eye strain and improves readability for all users — critical in extended-use enterprise tools where users spend hours per day. Low contrast on muted gray helper text and placeholder text is the most commonly missed failure.

**Do.**
- Apply minimum 4.5:1 contrast ratio for all normal text against its background.
- Apply minimum 3:1 for large text (≥18pt or ≥14pt bold).
- Test both light mode and dark mode independently for contrast compliance.
- Use [accessible-colors.com](http://accessible-colors.com/) or browser devtools contrast checkers.
- Pay special attention to muted/helper text, placeholder text, and disabled state text — these are the most commonly sub-compliant.
- Test chart label contrast against chart background colors, which often differ from page background.

**Measure.** Effectiveness: Task success rate, Error rate; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run accessibility audits before and after implementing contrast fixes, then track task success rate and error rate in moderated usability sessions with users who have low-vision or are working in challenging lighting conditions. Monitor organic search traffic as WCAG compliance improves SEO indexing.

Sources: [Nielsen Norman Group — 5 Visual Treatments That Improve Accessibility](https://www.nngroup.com/articles/visual-treatments-accessibility/) · [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/) · [ROSSUL — Enterprise UX Best Practices](https://www.rossul.com/2024/blog/enhancing-user-experience-in-b2b-enterprise-web-applications-ux-best-practices/) · [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux)
Wireframe: https://files.catbox.moe/pgrnvr.jpg
Notion: https://app.notion.com/p/Color-Contrast-Minimum-4-5-1-for-Normal-Text-b38a9aed534483478cd9817e221cc048

## UX-002 — Never Rely on Color Alone to Convey Information
- Score 5 · Accessibility / Color Accessibility
- Tags: data-heavy, dashboard, accessibility
- Goals: Design for Accessibility & Inclusion; Improve Readability & Visual Clarity
- Use when: Use when designing status indicators, data visualizations, charts, and any color-coded system.

**Why.** Approximately 9% of men and 0.5% of women have color vision deficiencies, most commonly affecting red-green discrimination. Data visualizations, status indicators, and navigation elements that rely solely on color — red for error, green for success — are inaccessible to a significant portion of enterprise users. This is not a niche edge case: in a team of 50 engineers, approximately 4–5 will have red-green color blindness. Designing for color-blind accessibility by default improves the design for everyone by adding visual redundancy that clarifies status even in unfavorable display conditions.

**Do.**
- Test all color-coded systems using a color-blindness simulator (Coblis, Color Oracle, Figma plugins).
- Ensure every status communicated by color is also communicated by: shape (different icon shapes), pattern (different chart fills), text label, or position.
- Never use red/green alone as the primary status distinction.
- In status badges, add icons (✓ for success, ✗ for error) alongside color.
- In charts, use different shapes for data series in addition to colors.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, SUS score; Adoption & Retention: New visitors, Account creation rate; How to measure: Conduct accessibility audits using color-blindness simulation tools to identify color-only information; test with color-blind users in usability sessions measuring task success rate and error rate before and after adding secondary indicators (icons, labels, patterns).

Sources: [100 Things #11 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf) · [Nielsen Norman Group — 5 Visual Treatments That Improve Accessibility](https://www.nngroup.com/articles/visual-treatments-accessibility/)
Wireframe: https://files.catbox.moe/gyhd15.jpg
Notion: https://app.notion.com/p/Never-Rely-on-Color-Alone-to-Convey-Information-568a9aed5344837a91ab8182d7f0848b

## UX-003 — Full Keyboard Accessibility for All Interactive Elements
- Score 5 · Accessibility / Keyboard navigation
- Tags: keyboard, navigation, accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: Apply to all interactive elements. Keyboard navigation is critical for users with motor impairments and is also the preferred method for many enterprise power users.

**Why.** Keyboard navigation is critical for users with motor impairments and is the preferred method for many power users. Any interactive element inaccessible by keyboard is completely unusable for this population. Focus indicators must be visible, obvious, and never suppressed — replacing the default browser outline with a custom design is acceptable, but removing it entirely is not. Follow W3C/WCAG keyboard conventions: Tab, Shift+Tab, Enter, Escape, Arrow keys.

**Do.**
- Ensure all interactive elements are reachable via Tab key navigation.
- Never suppress the default focus outline — replace with a custom thick colored border if aesthetics require.
- Include a "Skip Navigation" link at the top of pages with extensive navigation menus.
- Test keyboard navigation end-to-end with a dedicated QA pass.
- Ensure modal dialogs trap keyboard focus inside while open and restore focus to trigger on close.
- For custom components (dropdowns, date pickers, data tables), implement full ARIA keyboard patterns.
- Use `aria-current="page"` on active nav items.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Completion time; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct keyboard-only usability tests with both keyboard-reliant users (power users, users with motor disabilities) and average users, measuring task success rate and time on task across all interactive elements.

Sources: [Nielsen Norman Group — Keyboard-Only Navigation for Improved Accessibility](https://www.nngroup.com/articles/keyboard-accessibility/) · [Good UI — Keyboard Shortcuts](https://goodui.org/#40) · [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
Wireframe: https://files.catbox.moe/vfvyl9.jpg
Notion: https://app.notion.com/p/Full-Keyboard-Accessibility-for-All-Interactive-Elements-86ca9aed53448351a801818e9876e326

## UX-004 — Visible Focus Indicators
- Score 5 · Accessibility / Focus Management
- Tags: keyboard, navigation, accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: Use for all interactive elements: links, buttons, inputs, custom components in all application states.

**Why.** Every focusable element must display a clearly visible focus indicator when focused via keyboard. Browsers provide default focus outlines that are frequently removed by design teams for aesthetic reasons, creating a product that is unusable for keyboard-only users. WCAG 2.1 requires focus indicators that meet minimum contrast requirements; WCAG 2.2 adds more specific size requirements. Design custom focus styles that are visually distinctive but aesthetically consistent with the product's design language.

**Do.**
- Never use `outline: none` without providing a custom equivalent of equal or greater visibility.
- Design a custom focus style: typically a 2–3px solid ring or box-shadow in the brand primary color.
- Ensure the focus indicator has 3:1 contrast against both the element and its background.
- Apply consistently across all interactive elements including custom components.
- Test all focus indicators against the WCAG 2.2 Focus Appearance criteria (minimum 2px perimeter, minimum contrast 3:1).

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Error counts, Time on task; Satisfaction & Perception: CSAT, Ease-of-use score, App store rating; How to measure: Conduct keyboard-only navigation usability tests measuring task success rate and error rate for users who rely on focus indicators. Run automated accessibility audits (e.g., axe, Lighthouse) to identify focus indicator failures and track remediation progress over time alongside accessibility support ticket volume.

Sources: [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/) · [Level Access — WCAG 2.1](https://www.levelaccess.com/blog/wcag-2-1-exploring-new-success-criteria/)
Wireframe: https://files.catbox.moe/jnndxc.jpg
Notion: https://app.notion.com/p/Visible-Focus-Indicators-56da9aed5344829c83f3811ba73570af

## UX-005 — Semantic HTML and ARIA Roles
- Score 5 · Accessibility / Semantic Markup
- Tags: accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: Use for all UI component development — the foundation of accessible interface implementation.

**Why.** Use native HTML elements for their intended purposes — buttons for actions, links for navigation, headings for hierarchy, lists for groups of items. When custom components must be built, use ARIA roles, states, and properties to communicate their semantics to assistive technologies. The first rule of ARIA is: don't use ARIA if a native HTML element can do the job. Native HTML elements have keyboard interaction and accessibility semantics built in; ARIA requires manual implementation of all these behaviors.

**Do.**
- Use `<button>` for all actions, `<a href>` for all navigation.
- Use `role="dialog"` + `aria-modal="true"` for custom modals.
- Use `aria-expanded` for expandable components (accordions, dropdowns).
- Use `aria-label` for icon-only buttons.
- Use `aria-live="polite"` for dynamically updated regions (search results, notifications).
- Use `aria-describedby` to associate help text and error messages with their form fields.
- Test with at least one screen reader (NVDA, VoiceOver, JAWS) before launch.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: CSAT, Ease-of-use score, App store rating; How to measure: Run automated accessibility audits (axe, Lighthouse) to measure ARIA role coverage and semantic HTML compliance, tracking issue count over time. Conduct screen reader usability tests measuring task success rates for keyboard and AT users before and after semantic HTML improvements.

Sources: [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/)
Wireframe: https://files.catbox.moe/23bna0.jpg
Notion: https://app.notion.com/p/Semantic-HTML-and-ARIA-Roles-03ba9aed534483f3a97481289e3132f3

## UX-006 — Keyboard Navigation with Tab Focus Management
- Score 5 · Accessibility / Keyboard Accessibility
- Tags: desktop, keyboard, navigation, accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: Every enterprise application. Non-negotiable for WCAG AA compliance and a strong productivity feature for power users who prefer keyboard-first interaction.

**Why.** All interactive elements in enterprise desktop applications must be keyboard-navigable: Tab/Shift+Tab to move focus, Enter/Space to activate, arrow keys for directional navigation within components, Escape to close/dismiss. Clear visible focus states are required for both accessibility compliance and power-user efficiency. Enterprise applications that fail keyboard navigation fail both a legal compliance requirement and a significant portion of their expert user base.

**Do.**
- Define a logical focus order that mirrors the visual layout.
- Never remove default focus outlines without replacing them with a visible alternative (minimum 2px solid focus ring in a brand or high-contrast color).
- Manage focus programmatically: on dialog open (move focus inside), dialog close (return focus to trigger), after destructive actions (move to next available item).
- Test the entire application with keyboard only — no mouse — at least once per quarter.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, SUS score; Adoption & Retention: New visitors, Account creation rate; How to measure: Conduct accessibility audits with keyboard-only testing to identify focus management failures; measure task success rate for keyboard users in usability tests before and after remediation, and track support tickets related to navigation barriers.

Sources: [Eleken — Bulk Action UX](https://www.eleken.co/blog-posts/bulk-actions-ux) · [UX Patterns — Data Table](https://uxpatterns.dev/patterns/data-display/table)
Wireframe: https://files.catbox.moe/dnyn7q.jpg
Notion: https://app.notion.com/p/Keyboard-Navigation-with-Tab-Focus-Management-858a9aed53448295b1e901fbf76f38f4

## UX-007 — Keyboard-Navigable Modals and Focus Trapping
- Score 5 · Accessibility / Modal Accessibility
- Tags: keyboard, navigation, accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: All modal dialogs, drawer panels, and dropdown menus across the application.

**Why.** Modal dialogs must implement focus trapping: when a modal opens, focus moves inside it; Tab/Shift+Tab cycles only within the modal; Escape closes it; on close, focus returns to the trigger element. Without focus trapping, keyboard and screen reader users escape the modal unintentionally, interact with background content they cannot see (because the modal's visual overlay hides it), and experience a broken workflow. This is both a WCAG requirement and a fundamental modal interaction contract.

**Do.**
- On modal open: move focus to the modal's heading or first interactive element (not the container div).
- Implement focus trap: intercept Tab/Shift+Tab to cycle within modal bounds, wrapping from last to first element.
- Bind Escape to the Close handler.
- On modal close: return focus to the triggering element.
- Announce modal open/close to screen readers via `aria-modal="true"` and `role="dialog"` with an `aria-labelledby` pointing to the modal title.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, SUS score; Adoption & Retention: New visitors, Account creation rate; How to measure: Test keyboard navigation and focus trapping with assistive technology (screen reader and keyboard) as part of accessibility audits; measure task success rate for keyboard-only users before and after implementing proper focus management.

Sources: [Carbon Design System — Dialogs](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/rcpes1.jpg
Notion: https://app.notion.com/p/Keyboard-Navigable-Modals-and-Focus-Trapping-dfba9aed534482b982fe01d35b1d2cce

## UX-008 — Meaningful Alternative Text for Images and Data Visualizations
- Score 4 · Accessibility / Screen reader accessibility
- Tags: data-heavy, accessibility
- Goals: Design for Accessibility & Inclusion; Improve Readability & Visual Clarity
- Use when: Apply to all images, icons, charts, and graphic elements. ALT text for data visualizations must describe the insight conveyed, not the chart type.

**Why.** Screen reader users receive no information from images, charts, or data visualizations without meaningful alternative text. ALT text for data visualizations must describe the key meaning/insight conveyed, not just the visual appearance — "bar chart showing revenue" provides no value; "Bar chart showing Q3 revenue up 23% year-over-year, with North America leading at $4.2M" provides real information. Purely decorative images must have empty ALT attributes so screen readers skip them.

**Do.**
- Informative images: describe the key information conveyed, not visual appearance.
- Functional images (buttons/icons): describe the action they perform.
- Decorative images: use empty `alt=""` so screen readers skip them.
- Charts/data visualizations: describe the key trend or insight.
- Do not replicate image captions as ALT text — both will be read sequentially.
- For complex interactive charts, provide a tabular data alternative (a summary table).
- Never use an image as the only way to convey critical system information.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: CSAT, Ease-of-use score, App store rating; Adoption & Retention: Returning visitors, Account creation rate; How to measure: Conduct accessibility audits to identify images and visualizations lacking meaningful alt text, and measure task success rates for screen-reader users on image-dependent workflows. Track accessibility-related support tickets and app store ratings mentioning screen reader or visual impairment issues.

Sources: [Nielsen Norman Group — 5 Visual Treatments That Improve Accessibility](https://www.nngroup.com/articles/visual-treatments-accessibility/)
Wireframe: https://files.catbox.moe/1rbgb5.jpg
Notion: https://app.notion.com/p/Meaningful-Alternative-Text-for-Images-and-Data-Visualizations-5a3a9aed534482809ff6816218cfe342

## UX-009 — Minimum Target Size — 44×44px
- Score 4 · Accessibility / Touch and Click Targets
- Tags: mobile, accessibility
- Goals: Design for Accessibility & Inclusion
- Use when: Use for all interactive controls, especially those in dense data tables, toolbars, and compact table row actions.

**Why.** Interactive controls should have a minimum target size of 44×44 CSS pixels to be operable by users with motor disabilities and to reduce accidental activations. Small tap targets are a leading cause of accidental activation and are particularly problematic in dense data tables and toolbars where adjacent targets are close together. This requirement applies to the clickable/tappable area, not necessarily the visual size — invisible padding can extend the hit area without changing the visual design.

**Do.**
- Ensure minimum 44×44px click target for all interactive controls.
- For visually smaller elements (icons, small buttons), increase the invisible hit area using padding or a `::after` pseudo-element with the larger area.
- Maintain adequate spacing between adjacent targets to prevent accidental activation of neighbors.
- In dense table rows, use padding to ensure row action buttons meet the minimum target size even when rows are compact.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Error counts, Time on task; Satisfaction & Perception: CSAT, Ease-of-use score, App store rating; How to measure: Conduct usability testing on touch interfaces with tasks requiring tapping small targets, measuring miss rate and task completion time for targets at 44x44px vs. smaller sizes. Track accessibility-related app store reviews and support tickets mentioning tap or click difficulty.

Sources: [Level Access — WCAG 2.1 New Criteria](https://www.levelaccess.com/blog/wcag-2-1-exploring-new-success-criteria/)
Wireframe: https://files.catbox.moe/j87zxg.jpg
Notion: https://app.notion.com/p/Minimum-Target-Size-44-44px-60da9aed534483dcae5e01bbbfa85165

## UX-010 — Respect prefers-reduced-motion
- Score 4 · Accessibility / Motion Accessibility
- Tags: animation, accessibility
- Goals: Design for Accessibility & Inclusion
- Use when: Use for all CSS and JavaScript animations, transitions, and scroll-triggered effects in the application.

**Why.** Users with vestibular disorders — motion sickness, vertigo — can experience physical discomfort from animations in interfaces. The CSS media query `prefers-reduced-motion` indicates the user has requested reduced animation from their operating system settings. All non-essential animations should be disabled or minimized when this preference is set. Essential motion (loading spinners, progress bars) can be preserved; decorative transitions, parallax effects, and entrance animations should be disabled.

**Do.**
- Apply `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; } }` as a base reset in the global stylesheet.
- Then selectively restore essential motion (loading spinners) with specific rules.
- Use the media query in JavaScript animations too: `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
- Test the application with reduced-motion enabled to verify all essential UI state changes remain comprehensible without animation.

**Measure.** Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; Adoption & Retention: New visitors, Visitors from organic search; How to measure: Use automated accessibility testing tools to verify prefers-reduced-motion compliance across UI components; conduct usability sessions with motion-sensitive users to measure task success rate and collect CSAT scores before and after implementing reduced-motion alternatives.

Sources: [AlterSquare — Microinteractions](https://altersquare.io/micro-interactions-that-actually-improve-user-experience-with-examples/)
Wireframe: https://files.catbox.moe/lbjomn.jpg
Notion: https://app.notion.com/p/Respect-prefers-reduced-motion-b37a9aed53448313bd73814996d5bfd8

## UX-011 — Keyboard-Accessible Drag and Drop
- Score 4 · Accessibility / Drag and Drop
- Tags: keyboard, accessibility
- Goals: Reduce Learning Curve for Complex Tools; Design for Accessibility & Inclusion
- Use when: All drag-and-drop interactions. WCAG 2.1 SC 2.1.1 requires all functionality to be operable via keyboard — drag-and-drop without keyboard equivalents is a compliance failure.

**Why.** Drag-and-drop interactions must have keyboard equivalents for accessibility compliance and power-user usage. Without keyboard support, users with motor disabilities, keyboard-focused workflows, or remote desktop sessions cannot access reordering functionality at all. The keyboard pattern must be intentionally designed — it does not emerge automatically from implementing mouse drag-and-drop.

**Do.**
- Implement the Salesforce accessibility pattern: Tab to focus item → Space to enter move mode → Arrow keys to navigate positions → Space/Enter to drop → Escape to cancel.
- Add aria-live region announcements: "Item [Name] grabbed. Use arrow keys to move. Press Space to drop." Provide visible up/down arrow buttons as permanent fallbacks beside each reorderable item.
- Test with NVDA and VoiceOver screen readers.

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Completion time; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run keyboard-only usability tests on drag-and-drop workflows, measuring task success rate and time on task for users who rely on keyboard navigation. Compare against a mouse-only baseline to confirm that keyboard equivalency achieves comparable success rates.

Sources: [Smart Interface Design Patterns — Drag and Drop UX](https://smart-interface-design-patterns.com/articles/drag-and-drop-ux/) · [Eleken — Drag and Drop UI](https://www.eleken.co/blog-posts/drag-and-drop-ui)
Wireframe: https://files.catbox.moe/tv3110.jpg
Notion: https://app.notion.com/p/Keyboard-Accessible-Drag-and-Drop-149a9aed53448319aa8f01813c6b7f08

## UX-012 — Data Visualization Accessibility
- Score 4 · Accessibility / Chart Accessibility
- Tags: data-heavy, accessibility
- Goals: Design for Accessibility & Inclusion
- Use when: All charts, status indicators, heatmaps, and any visualization using color to encode data.

**Why.** Charts and data visualizations must not rely on color alone to convey meaning — this requirement serves both color-blind users (affecting ~8% of males) and users in suboptimal display conditions (projected dashboards, bright environments, monochrome printouts). Pairing color with secondary signals (patterns/textures for fills, icons for status, direct labels on chart elements, interactive tooltips showing data values) makes visualizations universally accessible without sacrificing their visual impact for users without color vision deficiency.

**Do.**
- Never use red + green together as the primary distinguishing dimension — add shapes, patterns, or icons as secondary differentiators.
- Add a data table as a fallback view for every chart (accessible via a "Show data" toggle).
- Include alt-text on chart images for screen readers describing the trend.
- Test all color schemes with Coblis or Color Oracle color blindness simulation tools.
- Design legends to use patterns in addition to colors for bar and pie charts.

**Measure.** Effectiveness: Task success rate, Error rate; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Conduct accessibility audits (automated and manual) on data visualizations and measure task success rates with screen reader users and color-blind participants. Track whether accessible visualizations reduce support ticket volume for users who previously could not interpret charts independently.

Sources: [Nielsen Norman Group — Treemaps](https://www.nngroup.com/articles/treemaps/) · [Pencil & Paper — Dashboard UX](https://www.pencilandpaper.io/articles/ux-pattern-analysis-data-dashboards)
Wireframe: https://files.catbox.moe/iwwuh1.jpg
Notion: https://app.notion.com/p/Data-Visualization-Accessibility-d23a9aed534482df9f518101354a0765

## UX-013 — Cultural Context in Color and Symbol Interpretation
- Score 3 · Accessibility / Global Design
- Goals: Design for Accessibility & Inclusion; Improve Readability & Visual Clarity
- Use when: Use when designing for international or global enterprise markets, and when choosing status colors and iconography.

**Why.** Color carries profound cultural meaning that varies dramatically across global markets, and interface designs that rely solely on Western color conventions risk miscommunication, mistrust, or even offense when deployed internationally. Red, for instance, signals danger, error, or financial loss in European and North American contexts, but represents prosperity, luck, and celebration in China and much of East Asia. White is associated with purity and cleanliness in Western design, yet signifies mourning in numerous Asian cultures.

**Do.**
- Avoid using color alone to convey meaning; pair color signals with icons, labels, or patterns (e.g., red + X icon for error, not red alone)
- Document culturally variable color associations in your design system: red means danger in Western cultures but prosperity in China; white means purity in Western cultures but mourning in some Asian cultures
- Use text labels alongside icons wherever global reach is expected; icons are far less universal than designers assume
- For status indicators, use universally understood shapes + color combinations: green circle = ok, yellow triangle = warning, red circle = error
- Test iconography and color choices with representatives from your key non-Western markets before shipping globally

**Measure.** Effectiveness: Task success rate, Error rate; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: CSAT, Brand perception; How to measure: Conduct international usability tests with users from target cultural regions, measuring task success rate and error rate for color- or symbol-dependent tasks. Survey participants about cultural appropriateness and track regional bounce rates before and after localization improvements.

Sources: [100 Things #12, #39 (New Riders, 2011)](http://www.r-5.org/files/books/computers/interface/design/Susan_Weinschenk-100_Things_About_People-EN.pdf)
Wireframe: https://files.catbox.moe/38cxy7.jpg
Notion: https://app.notion.com/p/Cultural-Context-in-Color-and-Symbol-Interpretation-c0aa9aed534483db88520161b975209f
