# Reading Psychology (29)

## UX-417 — Layer-Cake Scanning: Make Headings Do the Navigation Work
- Score 5 · Reading Psychology / Scanning Patterns
- Tags: content-design, reading-psychology, typography
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Essential for documentation pages, help centers, long-form articles, settings pages, and any content exceeding three paragraphs. Most impactful when users arrive with a specific question or task in mind.

**Why.** When pages are broken into well-labeled sections, users engage in 'layer-cake' scanning: fixations land primarily on headings, with brief dips into body text only when a heading signals relevant content. Eye-tracking heatmaps show horizontal stripes of attention on headings with white space between — resembling layers of a cake. This is the most effective scanning pattern for long-form content, far superior to F-pattern scanning, because it enables users to self-direct toward what they need. The pattern only activates when headings are visually distinct and content-rich.

**Do.**
- Make subheadings visually unmistakable: use consistent size increase (18–24px for H2), weight contrast (bold vs. regular), and optionally color or spacing above the heading
- Write headings that describe the section content precisely — avoid clever, vague, or question-based headings that don't reveal what follows
- Lead headings with the most information-rich word (e.g., 'Error handling strategies' not 'Strategies for handling errors')
- Chunk body content into logical sections of 3–5 paragraphs each, each governed by exactly one heading
- Apply the layer-cake pattern beyond articles: use labeled card groups, section titles on dashboards, and category headers in lists
- Test heading scannability: if a user can get the gist of the page by reading only headings, the structure is working

**Measure.** Efficiency: Time on task, Completion time; Engagement & Usage: Scroll depth, Bounce rate, Pages per session; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure heading-click rates and scroll depth on documentation and article pages to confirm users are navigating via the heading layer. Compare time-to-information on pages with strong heading hierarchies vs. those with weak or missing headings using task-based usability testing.

Sources: [Nielsen Norman Group — Layer-Cake Pattern: Heading-Dominant Scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/) · [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
Wireframe: https://files.catbox.moe/sw9kky.jpg
File: library/reading-psychology/UX-417-layer-cake-scanning-make-headings-do-the-navigation-work.md

## UX-419 — Banner Blindness: Avoid Ad-Like Visual Patterns in Critical UI
- Score 5 · Reading Psychology / Attention
- Tags: cognitive-load, content-design, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Critical for any web app that contains advertisements, sponsored content, or promotional banners. Also applies to SaaS dashboards where feature announcement banners or upgrade prompts risk being ignored if styled like ads.

**Why.** Three decades of eye-tracking research from the Nielsen Norman Group demonstrates that users have developed a powerful learned reflex to ignore content that resembles advertising — in placement, visual treatment, or proximity to ads. The 'hot-potato' scanning pattern describes how users briefly fixate on an ad-like element and then systematically avoid that entire area for the rest of the session — even on other pages and other websites. In one study, a right-rail column occupying 25% of the content area received only 0.8% of fixations. Even legitimate, helpful content gets dismissed if it looks like an ad.

**Do.**
- Avoid placing important content in traditional ad locations: top horizontal banner, right rail, between content blocks on mobile
- Do not style critical notifications, alerts, or feature announcements with animated effects, colored backgrounds, or rectangular card shapes that resemble display ads
- Be cautious about 'promotional-looking' visual treatments on onboarding tooltips, feature callouts, or upsell banners — users will ignore them
- When content must appear near actual ads, use strong visual separation (whitespace, contrasting background color) to break the proximity association
- Apply the Gestalt law of proximity intentionally: ensure helpful content is not visually grouped with ad zones
- Test new UI components with eye-tracking or attention heatmaps to verify they are receiving expected fixations

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Engagement & Usage: Clickthrough rate, Abandonment rate; How to measure: Use eye-tracking or heatmaps to identify whether users are ignoring critical UI elements that resemble ads. A/B test critical messaging presented in ad-like vs. content-native visual styles, measuring clickthrough rate and task completion rates for actions triggered by those elements.

Sources: [Nielsen Norman Group — Banner Blindness: Old and New Findings](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)
Wireframe: https://files.catbox.moe/ubbo8n.jpg
File: library/reading-psychology/UX-419-banner-blindness-avoid-ad-like-visual-patterns-in-critical-u.md

## UX-421 — Chunking: Break Content into Scannable, Meaningful Units
- Score 5 · Reading Psychology / Cognitive Processing
- Tags: accessibility, cognitive-load, content-design, reading-psychology
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Universal best practice for all web content: forms, articles, dashboards, product pages, documentation, error messages, and onboarding. Most impactful when the target audience includes users in a hurry or users with varying literacy levels.

**Why.** Cognitive psychology research by George Miller and subsequent UX research by Nielsen Norman Group establishes that the brain processes information by grouping it into 'chunks' — meaningful units that reduce the working memory load required to parse content. On the web, chunking transforms intimidating walls of text into visually discrete, processable units. Short paragraphs (2–4 sentences), clear subheadings, and bulleted lists signal the boundaries between chunks. Unchunked content is not just harder to read — it signals cognitive effort, causing users to abandon the page before starting.

**Do.**
- Keep body paragraphs to 2–4 sentences maximum; one idea per paragraph
- Use bulleted or numbered lists for any content with 3 or more parallel items (benefits, steps, features)
- Group related form fields visually and label each group with a section heading
- Separate content sections with visible whitespace (24–48px between sections minimum) rather than just a thin rule
- In data tables, use alternating row colors or grouped row sections to chunk related rows
- Apply chunking to phone numbers, credit card numbers, dates, and codes: format as (555) 123-4567 not 5551234567
- Test readability: if a paragraph could be split and both halves make sense independently, split it

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Completion rate, Task success rate; Engagement & Usage: Scroll depth, Abandonment rate; How to measure: Compare reading comprehension accuracy and time-to-find-information between chunked and unchunked content variants in a usability test. Track scroll depth and session duration in analytics to verify that chunked layouts sustain engagement without increasing abandonment.

Sources: [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/) · [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/) · [UX Myths — Myth 23: Choices Should Be Limited to 7+/-2](https://uxmyths.com/post/931925744/myth-23-choices-should-always-be-limited-to-seven)
Wireframe: https://files.catbox.moe/zclui6.jpg
File: library/reading-psychology/UX-421-chunking-break-content-into-scannable-meaningful-units.md

## UX-422 — Optimal Line Length: 45–75 Characters for Maximum Readability
- Score 5 · Reading Psychology / Typography Cognition
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to all body text on web applications: articles, help docs, form instructions, onboarding copy, marketing pages. Critical for responsive design systems where line length can vary dramatically across viewports.

**Why.** Typography research consistently identifies an optimal line length (measure) of 45–90 characters per line for body text — approximately 50–75 characters is the most cited sweet spot. Lines that are too long (90+ CPL) force the eye to travel a greater horizontal distance, making it difficult to locate the start of the next line and increasing the risk of losing one's place. Lines that are too short (under 40 CPL) create awkward hyphenation, disrupt reading rhythm, and force excessive return sweeps. Butterick's Practical Typography recommends 45–90 CPL; Google Material Design specifies 40–60 CPL for body, up to 120 CPL for wide desktop layouts with increased line height. NNGroup's chunking research recommends approximately 50–75 CPL.

**Do.**
- Set body text column width using CSS max-width to enforce line-length limits: approximately 600–750px for a 16px font yields ~65–75 CPL
- Use the 'alphabet test': the ideal column width fits roughly 2–2.5 repetitions of the lowercase alphabet
- On responsive designs, ensure that widening the viewport does not cause the content column to stretch beyond ~800px
- For wider layouts (dashboards, data-heavy interfaces), increase line-height to 1.6–1.8 when line length exceeds 75 CPL
- For mobile, ensure minimum body text of 16px and column padding of at least 16px on each side
- Do not use percentage-width for main content columns without max-width constraints: on large monitors, full-width columns can easily exceed 200 CPL
- Use the reading experience of your own product at different viewport sizes as a continuous quality check

**Measure.** Efficiency: Time on task, Average session duration; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; Engagement & Usage: Scroll depth, Bounce rate; How to measure: A/B test pages with short (under 45 characters), optimal (45-75 characters), and long (over 75 characters) line lengths; measure scroll depth and time-on-page via analytics, and collect post-read ease-of-use ratings in usability tests.

Sources: [Butterick's Practical Typography — Line Length](https://practicaltypography.com/line-length.html) · [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html) · [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/)
Wireframe: https://files.catbox.moe/v1l6n4.jpg
File: library/reading-psychology/UX-422-optimal-line-length-4575-characters-for-maximum-readability.md

## UX-425 — Whitespace: Cognitive Breathing Room Improves Comprehension
- Score 5 · Reading Psychology / Cognitive Processing
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Universal principle for all web interfaces. Most impactful when redesigning dense legacy interfaces, building data dashboards, or designing mobile layouts where space is at a premium. Whitespace is also an accessibility lever for users with cognitive disabilities.

**Why.** Whitespace (negative space) is not wasted space — it is an active cognitive tool. By visually separating content elements, whitespace reduces the parsing load on working memory, signals grouping relationships (Gestalt proximity), and allows users' eyes to rest between information units. Research in reading psychology shows that increasing whitespace around body text can improve comprehension by up to 20%. In UI design, insufficient whitespace forces users to spend cognitive resources on decoding layout rather than absorbing content. Generous margins and padding also elevate perceived quality and brand trustworthiness.

**Do.**
- Use a minimum of 24px vertical spacing between content sections; 48–64px for major page sections
- Ensure body text has horizontal margins of at least 16px on mobile and 20–24px (or 10–15% of column width) on desktop
- Use whitespace to encode relationships: elements that belong together should be closer; elements that are separate should have more space (Gestalt proximity)
- Do not fill every available pixel: leave 30–40% of any given screen area as empty space in content-rich interfaces
- Increase padding inside cards and content containers (24px+ internal padding) so text never touches the container edge
- On dense dashboards, use micro-whitespace (4–8px between related data items) consistently to create scannable visual rhythm
- Resist stakeholder pressure to 'use the space' by adding more content — empty space serves the user's comprehension

**Measure.** Efficiency: Time on task, Completion time; Engagement & Usage: Scroll depth, Abandonment rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test high-whitespace layouts against denser alternatives on content-heavy pages, measuring time on task for comprehension tasks and scroll depth as a proxy for engagement. Collect post-reading comprehension quiz scores to directly assess understanding gains.

Sources: [Nielsen Norman Group — Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) · [Nielsen Norman Group — How Chunking Helps Content Processing](https://www.nngroup.com/articles/chunking/) · [GOV.UK](http://gov.uk/) · [Content Design — Typography](https://design-system.service.gov.uk/styles/typography/)
Wireframe: https://files.catbox.moe/1kxzn3.jpg
File: library/reading-psychology/UX-425-whitespace-cognitive-breathing-room-improves-comprehension.md

## UX-426 — Visual Hierarchy: Size, Weight, and Contrast Guide Reading Order
- Score 5 · Reading Psychology / Hierarchy
- Tags: accessibility, cognitive-load, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Applies to every screen of every web application. Especially critical for first-time user experiences (onboarding), dashboards with multiple KPIs, pricing pages, and any interface where users must quickly identify the primary action or information.

**Why.** Visual hierarchy is the deliberate organization of design elements so that the eye travels in the intended order of importance. The brain processes relative differences in scale, weight, and contrast preattentively — before conscious reading begins. A clear hierarchy (large headline → medium subhead → small body text) allows users to build a mental model of content structure in under two seconds. NNGroup research recommends limiting type sizes to three levels (body: 14–16px, subhead: 18–22px, header: 24–32px+) and contrast variations to three levels. When everything competes for attention, nothing stands out.

**Do.**
- Establish a 3-level typographic scale: body text (14–16px, regular weight), subheadings (18–22px, medium/semibold), primary headings (24–36px, bold)
- Use visual weight (bold vs. regular) as the primary hierarchy signal; use size as secondary, color as tertiary — never rely on color alone (accessibility)
- Apply the 'squint test': blur the design to 5–10px radius and verify the intended primary element (headline, CTA) still stands out
- Limit the number of high-contrast elements on a single screen to 2–3 maximum; if everything is bold and colorful, the hierarchy collapses
- Use warm/saturated colors (red, orange) for highest-priority elements (warnings, primary CTAs); cooler/less saturated tones for secondary information
- Ensure heading size differences are substantial enough to register preattentively: a 2px difference is invisible; a 6–8px difference is perceivable; a 4–8pt jump per level is a sound starting ratio
- In data tables, use column header weight (bold) and body text (regular) to signal the hierarchy between label and value

**Measure.** Efficiency: Time on task, Completion time; Effectiveness: Task success rate, Findability score; Engagement & Usage: Scroll depth, Abandonment rate; How to measure: Run first-click tests to verify that users correctly identify the primary action or most important element first. Measure time-to-first-click on key CTAs with eye-tracking or first-click analytics to confirm that hierarchy guides attention as intended.

Sources: [Nielsen Norman Group — Visual Hierarchy in UX: Definition](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) · [Crazy Egg — Font Psychology](https://www.crazyegg.com/blog/font-psychology/)
Wireframe: https://files.catbox.moe/m406y0.jpg
File: library/reading-psychology/UX-426-visual-hierarchy-size-weight-and-contrast-guide-reading-orde.md

## UX-428 — Progressive Disclosure: Show Complexity Gradually
- Score 5 · Reading Psychology / Information Architecture
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Essential for any feature-rich web application, complex settings screens, multi-step forms, and developer tools. Particularly valuable in B2B SaaS where power users and novice users share the same interface.

**Why.** Progressive disclosure is a UX principle that defers advanced, rare, or complex features to secondary screens or states, showing users only what they need for their current task. NNGroup research shows that progressive disclosure improves learnability, reduces error rates, and improves task efficiency — users spend less cognitive effort scanning irrelevant options and build better mental models by starting with the essentials. The principle exploits the working memory constraint: users can only hold ~4 chunks of information in active working memory, so reducing the number of visible options directly reduces cognitive overload.

**Do.**
- Identify the 20% of features used by 80% of users (via analytics or task analysis) and promote those to primary visibility
- Use collapsible sections, 'Advanced options' toggles, or expandable accordions to hide rarely-used settings behind a clear disclosure control
- Limit progressive disclosure to 2 levels maximum: primary view and one secondary view; 3+ levels causes disorientation
- Label disclosure controls with strong information scent: 'Advanced settings (7 options)' is better than 'More'
- In forms, show conditional fields only when they become relevant (triggered by a prior answer), not all at once
- In onboarding, reveal features progressively as users demonstrate readiness — don't show a feature's full power until users have successfully used the basic version
- Validate the split with user research: if users frequently search for features hidden in 'Advanced', the split needs recalibration

**Measure.** Effectiveness: Task success rate, Learnability; Efficiency: Time on task, Error rate reduction; Satisfaction: Perceived simplicity, First-use satisfaction; How to measure: Track search/help usage for features hidden in 'Advanced' — high rates signal miscalibrated disclosure thresholds; measure time-to-complete primary tasks; run A/B tests comparing progressive vs. full-disclosure layouts.

Sources: [Nielsen Norman Group — Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/) · [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/)
Wireframe: https://files.catbox.moe/1exk88.jpg
File: library/reading-psychology/UX-428-progressive-disclosure-show-complexity-gradually.md

## UX-436 — Microcopy: Small Words Drive Big Behavioral Outcomes
- Score 5 · Reading Psychology / Content Design
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Applies to every touchpoint in any digital interface. Highest ROI in conversion funnels, error recovery flows, form completion, and onboarding sequences. Microcopy is often the last piece of the UX puzzle to receive attention but frequently delivers the largest usability improvements.

**Why.** Microcopy refers to the small, functional text in interfaces: button labels, form field instructions, error messages, empty states, loading messages, and tooltips. Despite their brevity, these words operate at the highest-stakes moments of user interaction — when users are deciding whether to trust, proceed, or abandon. NNGroup research indicates that unclear interface instructions cause 50% of user errors, and 79% of users who encounter errors will abandon the page. Research by Content Verve found that adding privacy microcopy next to an email field increased form completions by 28%. Changing 'Continue' to 'Continue to Payment' increased conversions by 17%.

**Do.**
- Use action verbs in button labels that describe the specific outcome: 'Delete Account' instead of 'Yes', 'Send Application' instead of 'Submit'
- Write error messages in plain language that explain what went wrong and what to do next: 'Your password needs at least one number — try again' instead of 'Invalid password'
- Add privacy microcopy next to fields collecting sensitive data: 'We'll never sell your email address' placed directly below email fields
- Use progress framing in multi-step flows: 'Step 2 of 4' and 'You're almost done' reduce abandonment by signaling achievable completion
- Match microcopy tone to emotional context: be more formal and precise during high-stakes actions (checkout, deletion) and more conversational during low-stakes moments (loading screens)
- Avoid jargon and system language: 'Error 403' means nothing to most users; 'You don't have permission to view this page — contact your admin' is actionable
- Test microcopy variants with A/B testing: button label changes often show measurable conversion impact within days

**Measure.** Effectiveness: Completion rate, Error rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; Revenue: Conversion rate; Adoption & Retention: Signup completion rate; How to measure: A/B test microcopy variants on CTAs, error messages, and form labels, measuring conversion rate and form completion rate; track error submission rates as a proxy for how well instruction copy prevents mistakes.

Sources: [Amelie Pollak — Microcopy Matters: How Small Text Makes a Big Difference](https://www.ameliepollak.com/blog/microcopy-matters-how-small-text-makes-a-big-difference-in-ux) · [VERSIONS — The Microcopy Effect](https://versions.com/concepts/the-microcopy-effect-small-words-big-impact/) · [UX Psychology — How to Optimize Button Microcopy](https://uxpsychology.substack.com/p/how-to-optimize-button-microcopy) · [UX Magazine — Essential Guide to Microcopy](https://uxmag.com/articles/the-essential-guide-to-microcopy-and-becoming-a-more-literate-designer)
Wireframe: https://files.catbox.moe/m0s86h.jpg
File: library/reading-psychology/UX-436-microcopy-small-words-drive-big-behavioral-outcomes.md

## UX-438 — Plain Language: Replace Jargon with Clarity
- Score 5 · Reading Psychology / Content Design
- Tags: accessibility, cognitive-load, content-design, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Universal principle for all user-facing text. Priority areas: error messages, onboarding instructions, help documentation, legal/terms language, notification copy, and any content accessed under stress or time pressure.

**Why.** Plain language is the practice of writing content that any reader can understand on first reading without specialist knowledge. Research and government content design guidelines ([GOV.UK](http://gov.uk/)) demonstrate that plain language directly reduces cognitive load, increases task completion rates, and improves inclusivity for users with lower literacy levels, cognitive disabilities, or who are reading in a second language. [GOV.UK](http://gov.uk/)'s principle is that content should be readable by a 9-year-old using the 5,000 most common English words. Beyond inclusion, plain language enhances cognitive fluency — familiarity with word choice translates directly into faster comprehension and higher trust.

**Do.**
- Use short, common words: 'help' not 'assist', 'buy' not 'purchase', 'use' not 'utilize', 'show' not 'demonstrate'
- Write sentences of 15–20 words maximum for body text; under 10 words for critical instructions and error messages
- Use active voice: 'Click Save to continue' not 'Completion of saving is required before continuation'
- Eliminate buzzwords and marketing language ('synergize', 'leverage', 'best-in-class') that add words without adding meaning
- Explain technical terms on first use; better yet, replace them with plain alternatives where possible
- Test content readability using Flesch-Kincaid Grade Level tools; target grade 6–8 for general audiences, grade 4–6 for high-volume transactional content
- Review all error messages, notification copy, and instructional text for jargon before launch — technical teams often write for themselves, not for users

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; Adoption & Retention: Signup completion rate; How to measure: Run comprehension tests on key interface labels and instructions before and after plain-language rewrites; track support ticket themes related to terminology confusion and measure drop in tickets after copy simplification.

Sources: [GOV.UK](http://gov.uk/) · [— Writing for](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) · [GOV.UK](http://gov.uk/) · [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) · [VERSIONS — Cognitive Fluency](https://versions.com/topics/cognitive-fluency/)
Wireframe: https://files.catbox.moe/cfuf72.jpg
File: library/reading-psychology/UX-438-plain-language-replace-jargon-with-clarity.md

## UX-441 — Scannable Lists: Use Bullets and Numbers for Parallel Information
- Score 5 · Reading Psychology / Content Design
- Tags: cognitive-load, content-design, reading-psychology
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Universal best practice for all web content types. Most impactful in feature comparison pages, help documentation, onboarding checklists, terms and conditions, and instructional content where users need to process a set of related information.

**Why.** Bulleted and numbered lists are one of the most powerful tools for web readability because they exploit multiple psychological mechanisms simultaneously: they force chunking (each item is a discrete unit), they create vertical whitespace between items (visual separation), they remove prose connectives (words like 'and', 'also', 'furthermore') that slow scanning, and they signal parallelism (all items share equal visual weight). NNGroup's 1997 study found scannable layout (including the use of lists) improved measured usability by 47%. Ordered lists (numbered) communicate sequence or priority; unordered lists (bulleted) communicate equivalence.

**Do.**
- Convert any sentence containing 3 or more items joined by commas into a bulleted list
- Use numbered lists exclusively for sequential steps, ranked priorities, or ordered procedures — where the order matters
- Keep each list item to 1–2 lines; longer items defeat the scanning benefit and should become separate paragraphs with subheadings
- Ensure grammatical parallelism within a list: all items should start with the same grammatical form (all verbs, all nouns, all phrases)
- Introduce every list with a stem sentence that contextualizes the list and ends with a colon
- Do not nest lists more than 2 levels deep; deeper nesting signals a need to restructure content
- Avoid using lists for fewer than 3 items — two-item lists often read more naturally as a sentence

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task; Engagement & Usage: Scroll depth, Bounce rate; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: A/B test instructional or informational content with scannable bullet/numbered lists versus dense prose; measure comprehension accuracy in reading tests, time-to-find specific information, and scroll depth to confirm improved scannability.

Sources: [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) · [Nielsen Norman Group — Chunking](https://www.nngroup.com/articles/chunking/) · [GOV.UK](http://gov.uk/) · [— Writing for](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) · [GOV.UK](http://gov.uk/)
Wireframe: https://files.catbox.moe/q9606e.jpg
File: library/reading-psychology/UX-441-scannable-lists-use-bullets-and-numbers-for-parallel-informa.md

## UX-443 — Contrast Sensitivity: Meet WCAG Standards for All Text
- Score 5 · Reading Psychology / Contrast and Readability
- Tags: accessibility, cognitive-load, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Non-negotiable baseline requirement for all web interfaces. Legal compliance consideration in many jurisdictions. Especially critical for audiences with higher proportions of older users, government and healthcare applications, and any product seeking ADA/EN 301 549 compliance.

**Why.** Contrast sensitivity — the ability to distinguish text from its background — deteriorates with age, in low-light conditions, and for users with visual impairments including cataracts, glaucoma, and color vision deficiencies. The WCAG 2.1 standard specifies a minimum contrast ratio of 4.5:1 for body text (under 18pt) and 3:1 for large text (18pt+ or 14pt+ bold). WebAIM research shows that a large proportion of the web fails basic contrast requirements, creating systemic exclusion. Beyond accessibility compliance, contrast also affects fluency for unimpaired users: low-contrast text (light gray on white) is routinely described as 'elegant' in design reviews but measurably slows reading speed and increases errors.

**Do.**
- Use a contrast checker (WebAIM Contrast Checker, Figma plugins) on all text colors before shipping — automate this in your CI/CD pipeline
- Set a minimum body text color of #595959 on white (#FFFFFF) backgrounds to safely meet 4.5:1 WCAG AA; prefer #4A4A4A or darker for large text blocks
- Avoid the design trend of light gray body text (#999, #AAA on white) — these typically fail WCAG AA and create measurable reading friction for all users
- Ensure placeholder text in form fields meets at least 4.5:1 — placeholder text that is 'intentionally subtle' is a common accessibility violation
- For color-coded text (status labels, badges), verify contrast with the background color, not just with white
- Provide a high-contrast mode option for users who need it, triggered via prefers-contrast: more CSS media query
- Re-check contrast whenever the design system's color palette is updated — changes to brand colors frequently introduce new violations

**Measure.** Effectiveness: Task success rate, Error rate; Efficiency: Time on task, Completion time; Adoption & Retention: New visitors from organic search, Returning visitors; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run automated contrast ratio audits (e.g., using axe or Colour Contrast Analyser) before and after remediating text contrast, tracking the percentage of passing elements.

Sources: [WebAIM — Fonts and Contrast](https://webaim.org/techniques/fonts/) · [Nielsen Norman Group — Dark Mode vs. Light Mode](https://www.nngroup.com/articles/dark-mode/) · [GOV.UK](http://gov.uk/) · [— Typography Guidelines](https://design-system.service.gov.uk/styles/typography/)
Wireframe: https://files.catbox.moe/rney99.jpg
File: library/reading-psychology/UX-443-contrast-sensitivity-meet-wcag-standards-for-all-text.md

## UX-420 — Serial Position Effect: Put Critical Items First or Last
- Score 4 · Reading Psychology / Attention
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to navigation menus, feature lists, pricing tiers, onboarding checklists, error message lists, and any content where users must remember or choose from a sequence. Especially important for CTAs and checkout flows.

**Why.** Psychologist Hermann Ebbinghaus demonstrated that people remember items at the beginning (primacy effect) and end (recency effect) of a list or sequence far better than items in the middle. The primacy effect operates through long-term memory encoding — early items receive more rehearsal. The recency effect uses short-term working memory — the last items are still active when recall happens. In web design, this means that navigation items, feature lists, pricing tiers, and onboarding steps all suffer from a 'forgettable middle' where the most important content can be buried.

**Do.**
- Place the most important navigation items first (primary destination) and last (key utility like settings or logout) in menu structures
- In feature comparison tables and pricing pages, lead with your strongest value point and end with a memorable differentiator; move average features to the middle
- In multi-step forms and onboarding flows, put the most cognitively demanding step in the middle (primacy captures motivation, recency captures completion satisfaction)
- In bulleted lists, front-load the most critical item and put the second-most critical last; pad the middle with supporting context
- Use visual cues (bold, color, icons) to rescue important middle-position items from the serial position penalty
- Limit list length to 7 or fewer items where recall matters; beyond that, consider grouping with subheadings

**Measure.** Effectiveness: Task success rate, Findability score; Efficiency: Time on task, Error counts; Engagement & Usage: Clickthrough rate, Bounce rate; How to measure: Use first-click testing and eye-tracking to verify that critical items in primacy and recency positions receive the most attention and action. A/B test navigation and list layouts with critical items repositioned to first/last positions and measure clickthrough and task success rates.

Sources: [LogRocket — Using the Serial Position Effect in UX Design](https://blog.logrocket.com/ux-design/serial-position-effect-ux-design/) · [AB Tasty — Using Serial Position Effect in UX Design](https://www.abtasty.com/blog/using-serial-position-effect-ux-design/) · [CXL — The Serial Position Effect](https://cxl.com/blog/serial-position-effect/)
Wireframe: https://files.catbox.moe/om238h.jpg
File: library/reading-psychology/UX-420-serial-position-effect-put-critical-items-first-or-last.md

## UX-424 — Line Height and Spacing: Vertical Rhythm Reduces Reading Fatigue
- Score 4 · Reading Psychology / Typography Cognition
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Applies across all text-containing interfaces. Critical for accessibility — WCAG 1.4.12 requires no loss of content when users override to 1.5× line height. Most impactful for interfaces with dense information such as dashboards, data tables, or long-form content.

**Why.** Line height (leading) is the vertical distance between lines of text. Too little leading causes lines to visually merge, forcing readers to re-read lines and increasing eye fatigue. Too much leading breaks the visual cohesion of paragraphs, making the reader work harder to track from line end to next line start. Research and industry standards converge on 1.4–1.6× the font size as optimal for body text. For example, 16px body text should use 22–26px line height. Letter-spacing (tracking) also affects readability: slightly increased tracking improves legibility for smaller text; tighter tracking works for large display headings.

**Do.**
- Set body text line-height to 1.5–1.6× the font size as a baseline: line-height: 1.5 for 16px body text yields 24px leading
- Increase line-height toward 1.7–1.8 when line lengths are longer (above 70 CPL) to preserve visual return-sweep tracking
- Set paragraph spacing to at least 0.75× the font size (e.g., 12px gap between paragraphs for 16px text); prefer 1.0–1.5× for more generous breathing room
- Do not allow CSS to set line-height below 1.2 for any multi-line body text; this creates text blocks that are physically difficult to parse
- For headings, reduce line-height to 1.1–1.2 (since single-line headings do not require as much vertical space)
- Add letter-spacing of 0.01–0.02em to body text rendered below 14px to compensate for reduced inter-character visual separation
- Use a baseline grid (multiples of 4px or 8px) to ensure consistent vertical rhythm across the entire interface

**Measure.** Efficiency: Time on task, Average session duration; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; Engagement & Usage: Scroll depth, Bounce rate; How to measure: A/B test tight versus properly spaced line-height variants on documentation or article pages; measure scroll depth and time-on-page via analytics, and capture reading fatigue scores via a post-task questionnaire in usability sessions.

Sources: [WebAIM — Fonts and Readability](https://webaim.org/techniques/fonts/) · [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html) · [Crazy Egg — Font Psychology](https://www.crazyegg.com/blog/font-psychology/)
Wireframe: https://files.catbox.moe/7okcfd.jpg
File: library/reading-psychology/UX-424-line-height-and-spacing-vertical-rhythm-reduces-reading-fati.md

## UX-427 — Gestalt Principles: Group Related Content, Separate Unrelated Content
- Score 4 · Reading Psychology / Hierarchy
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Foundation-level principle for all UI layout decisions. Critical when designing form layouts, navigation structures, dashboards, and any interface where the relationship between elements must be communicated without explicit labels.

**Why.** Gestalt psychology establishes that the brain perceives visual elements as organized wholes, not collections of parts. Six principles directly govern how users parse web content: Proximity (close elements are perceived as related), Similarity (visually matching elements are perceived as a group), Continuity (the eye follows lines and paths through layouts), Closure (the brain completes incomplete shapes), Figure-Ground (foreground elements pop against background), and Enclosure (bordered regions are perceived as distinct groups). These are not aesthetic guidelines — they are descriptions of how the visual system is wired, meaning violations create measurable confusion.

**Do.**
- Apply Proximity intentionally: place form labels closer to their fields than to other labels; place button groups closer together than to unrelated page content; use 8–16px internal spacing vs. 24–48px between sections
- Use Similarity to signal 'same function': all primary buttons share the same color/shape, all secondary buttons share a different style, all links share the same underline convention
- Use Enclosure (cards, panels, bounding boxes) to group complex content clusters that cannot be separated by proximity alone — effective for settings panels, filter groups, and modal content
- Apply Continuity in multi-step flows: use a consistent progress indicator, line, or visual thread that the eye follows from step to step
- Use Figure-Ground contrast: ensure sufficient color/lightness difference between content cards and their background (minimum 3:1 for non-text elements)
- Avoid accidental grouping: if an ad or unrelated element appears near key content, users may perceive them as related — maintain clear visual separation

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Average session duration; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: Run first-click tests and usability sessions to measure findability score and time-to-target before and after applying Gestalt-based content grouping; collect ease-of-use ratings via post-task survey.

Sources: [UX Tigers — Gestalt Principles for Visual UI Design](https://www.uxtigers.com/post/gestalt-principles) · [Interaction Design Foundation — Gestalt Principles](https://www.interaction-design.org/literature/topics/gestalt-principles) · [Nielsen Norman Group — Banner Blindness](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)
Wireframe: https://files.catbox.moe/elujct.jpg
File: library/reading-psychology/UX-427-gestalt-principles-group-related-content-separate-unrelated.md

## UX-429 — Inverted Pyramid Writing: Lead with the Conclusion
- Score 4 · Reading Psychology / Content Design
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Apply to all user-facing text: help articles, product descriptions, in-app notifications, onboarding copy, email communications, and error messages. Essential for SEO and AI snippet generation — search engines extract the inverted pyramid's lead content as featured snippets.

**Why.** The inverted pyramid is a writing structure from journalism adapted for web content: the most critical information (the conclusion, the key finding, the answer to the user's question) appears in the first sentence or paragraph, followed by supporting details in descending order of importance. NNGroup research shows that only 16% of users read web pages word-for-word; 79% always scan. The inverted pyramid serves all readers: scanners get the key point immediately; readers who continue get increasing context and depth. [GOV.UK](http://gov.uk/)'s content design guidelines mandate this structure because users read only 20–28% of page content.

**Do.**
- Open every page, article, section, and help document with the single most important statement — the answer to the user's likely question
- Write a summary paragraph (2–3 sentences maximum) above any long-form content; this summary should stand alone as a complete communication
- Within each paragraph, lead with the main point of that paragraph in the first sentence (a 'core sentence'), then support it
- Never use narrative build-up or background context before the key point: the user may leave before reaching it
- In error messages and system notifications, state the outcome or required action first, then explain why
- In product feature descriptions, lead with the user benefit ('Save 3 hours per week') not the feature description ('Our AI scheduler automatically…')
- Apply the 'cut from the bottom' test: if you deleted the last paragraph, would users still have the core information? If yes, the structure is correct

**Measure.** Efficiency: Time on task, Completion time; Engagement & Usage: Scroll depth, Bounce rate; Satisfaction & Perception: Ease-of-use score, CSAT, Confidence rating; How to measure: A/B test content structured with inverted pyramid (conclusion first) against traditional narrative structure, measuring time-to-key-information and bounce rate. Track task completion rates for decision-making tasks that rely on reading product or feature descriptions, confirming faster time-to-decision with lead-conclusion structure.

Sources: [GOV.UK](http://gov.uk/) · [— Writing for](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) · [GOV.UK](http://gov.uk/) · [Yoast — First Things First: Writing with the Inverted Pyramid Style](https://yoast.com/inverted-pyramid/) · [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
Wireframe: https://files.catbox.moe/mt11s4.jpg
File: library/reading-psychology/UX-429-inverted-pyramid-writing-lead-with-the-conclusion.md

## UX-431 — Information Scent: Make Links and Labels Predictive of Destination
- Score 4 · Reading Psychology / Information Architecture
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Critical for navigation design, search results pages, content cards, recommendation widgets, and any interface where users must decide which link to follow to accomplish their goal. Particularly important in complex information architectures like documentation sites, e-commerce catalogs, and knowledge bases.

**Why.** Information scent theory (from information foraging theory) describes how users evaluate links, labels, and navigation cues as a proxy for the content they will find on the destination page. Strong information scent means the link text accurately and specifically describes what the user will find; weak scent (generic labels like 'Learn more', 'Click here', 'More') forces users to guess and often leads to abandoned navigation paths. NNGroup research shows that the link label is the single most important cue, followed by context (surrounding text and images), followed by prior experience. Clickbait-style over-promising erodes long-term scent by breaking user expectations.

**Do.**
- Write link text that is specific, self-explanatory, and describes the destination content: 'View Q3 sales report' not 'View report' not 'Click here'
- Avoid generic CTA labels ('Submit', 'Learn more', 'More') in isolation; either add specificity or pair with context
- Use descriptive anchor text for internal links in body copy: the link text should be readable in isolation and still communicate the destination
- Provide summary text (1–2 sentences) beneath card titles and navigation links to add secondary scent cues
- Use representative images as scent cues for categories: a prototypical example image (a robin for 'Birds', not a penguin) communicates the category more accurately than a generic image
- Avoid context-breaking navigation labels: internal jargon and branded terminology reduce scent for new users who lack that context
- Ensure the page users land on after clicking a link fulfills the scent promise — mismatch between link text and landing page content destroys trust

**Measure.** Effectiveness: Findability score, Direct success rate, Task success rate; Efficiency: Time on task, Completion time; Engagement & Usage: Clickthrough rate, Bounce rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: Conduct tree testing measuring direct success rates for navigation paths where link and label clarity is varied.

Sources: [Nielsen Norman Group — Information Scent: How Users Decide Where to Go Next](https://www.nngroup.com/articles/information-scent/)
Wireframe: https://files.catbox.moe/0nebt8.jpg
File: library/reading-psychology/UX-431-information-scent-make-links-and-labels-predictive-of-destin.md

## UX-432 — Cognitive Fluency: Easy to Read = Easy to Trust
- Score 4 · Reading Psychology / Cognitive Processing
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Build Trust & Reduce User Anxiety; Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Foundational principle for all UX decisions. Most critical for first-time user experiences, conversion funnels, financial transactions, and any flow where user trust directly impacts conversion or engagement.

**Why.** Cognitive fluency is the subjective sense of ease with which information is processed. Research in psychology (processing fluency studies) demonstrates that fluent information — easy to read, familiar in structure, clearly organized — is rated as more credible, more truthful, and more trustworthy than identical information presented in a disfluent form. Users experience cognitive ease as a positive emotional signal and interpret it as familiarity and competence. Conversely, cognitive strain from poor typography, cluttered layouts, or confusing navigation creates a negative signal of incompetence. Stanford research shows users form first impressions in 50 milliseconds, largely based on fluency signals.

**Do.**
- Use familiar, predictable interface patterns: place navigation where users expect it (top or left), use conventional button shapes, maintain consistent layout across pages
- Ensure high text contrast (minimum 4.5:1 for body text per WCAG AA) — low-contrast text is a direct cognitive disfluency driver
- Use simple, common vocabulary in interface copy; avoid jargon, technical terms, or unusual phrasing that forces users to decode meaning
- Maintain consistent typographic styling: the same heading level should always look the same, the same action type should always use the same label
- Minimize the number of cognitive choices on any screen — each additional choice option increases cognitive load and reduces fluency
- Test fluency: if users describe the interface as 'clean', 'simple', or 'professional' in usability testing, fluency is working; if they say 'confusing' or 'busy', investigate fluency breakdowns
- Use consistent spacing, alignment, and grid systems — visual consistency is a primary fluency signal

**Measure.** Efficiency: Time on task, Completion time; Satisfaction & Perception: Confidence rating, CSAT, Brand perception; Revenue: Conversion rate; How to measure: A/B test high-fluency layouts (clear fonts, adequate contrast, simple phrasing) against lower-fluency variants on landing or checkout pages, measuring conversion rate and confidence ratings. Use a brief post-task trust survey to capture the perceived credibility effect.

Sources: [The Website Design Agency — The Psychology of Trust in Web Design](https://www.thewebsitedesignagency.co.uk/blog/the-psychology-of-trust-in-web-design-how-to-make-users-feel-safe) · [VERSIONS — Cognitive Fluency: The Science of Easier Thinking](https://versions.com/topics/cognitive-fluency/) · [UX Bulletin — Leveraging Cognitive Fluency in UX Design](https://www.ux-bulletin.com/cognitive-fluency-in-ux/)
Wireframe: https://files.catbox.moe/844l99.jpg
File: library/reading-psychology/UX-432-cognitive-fluency-easy-to-read-easy-to-trust.md

## UX-433 — Color Coding for Scanning: Use Hue to Encode Status and Category
- Score 4 · Reading Psychology / Attention
- Tags: accessibility, cognitive-load, reading-psychology, typography
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Essential for dashboards, status indicators, data visualizations, notification systems, form validation, and any interface with categorical data. Critical to address in design systems to ensure consistent application across teams.

**Why.** Color is processed preattentively — the visual system detects color before conscious attention is directed. This means color coding can serve as a primary scanning aid, allowing users to identify status (success/warning/error), category, or priority without reading a single word. Research shows that comprehension rates can improve by up to 73% when color is strategically applied to encode meaning. However, color must always be paired with a secondary signal (icon, label, shape) to maintain accessibility for color-blind users (~8% of male users). Pure color coding without redundancy violates WCAG 1.4.1.

**Do.**
- Use a consistent color vocabulary across the entire application: red = error/danger, yellow/amber = warning, green = success/positive, blue = informational — never reverse these conventions
- Pair every color signal with a redundant non-color signal: icon (✓ ✗ ⚠), label, or pattern so color-blind users receive the same information
- Use color to group related content categories in navigation, dashboards, and calendars — but maintain only 4–6 color categories maximum before the system becomes unmemorable
- Ensure color-coded text meets contrast requirements: a colored success message in light green text on white background may fail WCAG 4.5:1 contrast even if the color itself is semantically correct
- Do not use color alone to indicate clickability (links) — always pair with underline, weight change, or other affordance
- Apply the Stroop principle cautiously: avoid situations where text color and text content conflict (e.g., the word 'ERROR' in green), as this creates measurable cognitive interference
- Test designs in grayscale to verify the interface still communicates status and category without color

**Measure.** Effectiveness: Findability score, Task success rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score; How to measure: Run usability tests with scanning tasks (e.g., find all critical-status items), measuring time-to-target and accuracy with and without color-coded categories; track task success rates and note improvements in findability score via first-click tests.

Sources: [Attention and Color Theories — Dr. Pamela Rutledge](https://www.pamelarutledge.com/resources/articles/attention-and-color-theories-applied-to-website-design/) · [SHIFT eLearning — 6 Ways Color Psychology Can Be Used in Design](https://www.shiftelearning.com/blog/bid/348188/6-ways-color-psychology-can-be-used-to-design-effective-elearning) · [WebAIM — Fonts and Contrast](https://webaim.org/techniques/fonts/)
Wireframe: https://files.catbox.moe/ahg0tg.jpg
File: library/reading-psychology/UX-433-color-coding-for-scanning-use-hue-to-encode-status-and-categ.md

## UX-435 — Fitts's Law: Make Interactive Text Targets Large and Accessible
- Score 4 · Reading Psychology / Interaction Design
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Critical for all interactive elements: navigation links, form submission buttons, inline content links, icon buttons, table action columns. Especially important on mobile where touch imprecision is greater than cursor precision.

**Why.** Fitts's Law states that the time required to move a pointer to a target is a logarithmic function of the distance to the target divided by its size. Applied to web text, this means that inline links, small CTA buttons, and icon-only controls that have small clickable areas cause measurably slower interaction and higher error rates. The WCAG 2.5.5 standard recommends a minimum 44×44px touch target; WCAG 2.5.8 sets a minimum of 24×24px. For text-only links, the clickable area is often just the character height (~16px) — far below safe minimums without padding.

**Do.**
- Extend the clickable area of inline text links using CSS padding (top and bottom padding of at least 8–10px) without changing the visual text size
- Ensure navigation items have a clickable area of at least 44×44px by setting padding on the anchor element, not just the container
- Place submit buttons and primary CTAs at the bottom of forms in the user's natural 'completion zone'; make them visually large and easily tappable (minimum 44px height)
- Increase target size for primary actions: a primary CTA should be noticeably larger than secondary actions, leveraging both Fitts's Law and visual hierarchy simultaneously
- Add at least 8–10px of space between adjacent clickable elements (buttons, links) to prevent fat-finger errors on touch devices
- For destructive actions (Delete, Remove), make them smaller or further away to exploit Fitts's Law in reverse — slower acquisition gives users time to reconsider
- On mobile, position frequently-used interactive elements within the natural thumb zone (the lower 60% of the screen)

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Task success rate, Error rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Test tap/click accuracy on text-based interactive targets of varying sizes using usability testing on both desktop and mobile, measuring error rate (missed clicks/taps) and task time. Measure whether larger text targets reduce selection errors and improve efficiency in high-frequency interaction workflows.

Sources: [Figma — What Is Fitts' Law?](https://www.figma.com/resource-library/fitts-law/) · [Ahmad Shadeed — Enhancing the Clickable Area Size](https://ishadeed.com/article/clickable-area/) · [Nielsen Norman Group — Touch Target Size](https://www.nngroup.com/articles/touch-target-size/) · [LogRocket — Fitts' Law UI Examples](https://blog.logrocket.com/ux-design/fitts-law-ui-examples-best-practices/)
Wireframe: https://files.catbox.moe/4weks4.jpg
File: library/reading-psychology/UX-435-fitts-s-law-make-interactive-text-targets-large-and-accessib.md

## UX-439 — Text Alignment: Left-Align Body Text, Avoid Justified and Centered for Long Copy
- Score 4 · Reading Psychology / Typography Cognition
- Tags: accessibility, cognitive-load, content-design, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Applies to all textual content in web interfaces. Most commonly violated in marketing-designed product pages and feature sections where centered text blocks are used for aesthetic effect, creating readability problems at scale.

**Why.** Left-aligned text (for left-to-right languages) produces consistent word spacing and predictable line endings, enabling readers to locate the start of the next line without searching. Justified text creates variable word spacing that disrupts reading rhythm and creates 'rivers' — diagonal white channels through text blocks that the eye follows instead of the intended horizontal reading path. Centered text should never be used for more than 2–3 lines; the irregular left edge of centered text forces the eye to search for each line start, significantly slowing reading and increasing fatigue. [GOV.UK](http://gov.uk/) explicitly prohibits right-aligned or justified text in their design system.

**Do.**
- Default all body text (paragraphs, help text, instructions) to left-aligned (text-align: left)
- Use centered text only for short display copy: page titles (1 line), pull quotes (2–3 lines), button labels, or success/error headings
- Never justify body text in web interfaces — CSS text-align: justify without hyphenation support creates severely uneven word spacing on responsive layouts
- Right-align only numeric data in table cells (to align decimal points) and RTL-language text
- Verify alignment at all responsive breakpoints: short lines (mobile) with centered or justified text create especially poor readability
- For mixed-language interfaces, default to the alignment direction of the dominant language; use CSS logical properties (text-align: start) for auto-adaptation in RTL languages

**Measure.** Efficiency: Time on task, Average session duration; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; Engagement & Usage: Scroll depth, Bounce rate; How to measure: A/B test left-aligned versus justified body text on content-heavy pages, measuring time-on-page and scroll depth via analytics; collect post-reading ease-of-use and fatigue ratings in a short usability survey.

Sources: [GOV.UK](http://gov.uk/) · [— Typography Guidelines](https://design-system.service.gov.uk/styles/typography/) · [Google Material Design — Understanding Typography](https://m2.material.io/design/typography/understanding-typography.html) · [Butterick's Practical Typography — Line Length](https://practicaltypography.com/line-length.html)
Wireframe: https://files.catbox.moe/h85w2z.jpg
File: library/reading-psychology/UX-439-text-alignment-left-align-body-text-avoid-justified-and-cent.md

## UX-440 — Keyword Emphasis: Bold Key Phrases to Support Scanning
- Score 4 · Reading Psychology / Scanning Patterns
- Tags: content-design, reading-psychology, typography
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Apply to all long-form content, help articles, feature descriptions, and any page where users are likely to scan for specific information. Particularly valuable in e-commerce product descriptions, pricing pages, and technical documentation.

**Why.** Since 79% of web users scan rather than read, the words that receive visual emphasis through bold or color function as a 'second layer' of communication — users can extract key information from a page's emphasized words without reading full sentences. NNGroup's landmark 'How Users Read on the Web' research identifies highlighted keywords (hypertext links, typeface variations, color) as one of the five most effective techniques for improving usability through scannable text. However, overuse of emphasis destroys the hierarchy: if 30% of text is bold, nothing stands out and users' scanning efficiency degrades.

**Do.**
- Bold 2–4 key terms or phrases per paragraph maximum — the terms that, if read in isolation, would convey the main point
- Use bold for genuinely critical information: key data points, product names, action steps, warnings — not for decorative emphasis
- Do not use italic for emphasis in body text (it slows reading by disrupting the regular word-shape recognition process); reserve italic for citations, titles, and technical terms
- Use color emphasis (e.g., blue or brand color) only for hyperlinks, not for non-interactive emphasis, to maintain a consistent affordance vocabulary
- In help articles and documentation, bold the first mention of a technical term or key concept in each section
- Do not use underline for emphasis (it signals hyperlink in all user mental models)
- Audit existing pages: if more than 15–20% of body text is bolded, the emphasis system has broken down and requires a content audit

**Measure.** Efficiency: Time on task, Completion time; Engagement & Usage: Scroll depth, Bounce rate; Satisfaction & Perception: Ease-of-use score, CSAT, Confidence rating; How to measure: A/B test content pages with strategic keyword bolding against unformatted versions, measuring time-to-find-key-information and scroll depth. Use eye-tracking studies to verify that bolded keywords guide scanning patterns and reduce time spent re-reading paragraphs.

Sources: [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) · [Nielsen Norman Group — Layer-Cake Pattern Scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/)
Wireframe: https://files.catbox.moe/2uyb13.jpg
File: library/reading-psychology/UX-440-keyword-emphasis-bold-key-phrases-to-support-scanning.md

## UX-442 — Attention Distraction: Minimize Competing Stimuli During Reading Tasks
- Score 4 · Reading Psychology / Attention
- Tags: accessibility, cognitive-load, content-design, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Critical for documentation platforms, e-learning products, help centers, and content-heavy web applications. Also relevant for checkout and form flows where notification popups and chat widgets measurably increase abandonment rates.

**Why.** A meta-analysis of 32 empirical studies (Frontiers in Psychology, 2025) synthesizing evidence on attentional interference in digital reading environments found an overall negative effect size of Hedges' g = -0.64 on reading comprehension from attentional distractions. Specific interference types (TV, background audio, animations) showed effect sizes of up to g = -0.82. Attentional interference is most harmful for cognitively demanding reading tasks, for users with lower working memory capacity, and for reading on digital screens (vs. paper). Visual distractions — advertisements, animations, notifications — reduce both reading speed and text processing efficiency.

**Do.**
- Suppress auto-playing media (video, GIF animations, audio) on all pages containing substantial text content
- Defer or batch notification prompts (push notification requests, cookie banners, chat widgets) until the user completes a reading or task flow — never interrupt mid-reading
- Minimize the number of animated UI elements visible while users are in reading mode; motion captures involuntary attention regardless of intent
- Design 'focus modes' or distraction-free reading views for documentation, long-form articles, and help content
- Avoid infinite scroll patterns that constantly load new content while users are reading existing content — the visual change captures involuntary attention
- Limit the number of simultaneously active visual elements on any content page to reduce competition for attentional resources
- Consider reducing the visual complexity of page chrome (sidebars, related content widgets) for pages designed to support deep reading

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task, Completion time; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: Conduct eye-tracking or attention-tracking usability tests comparing focused versus distraction-laden layouts; measure task success rate and time-on-task in moderated sessions, noting where attention is diverted from primary content.

Sources: [Frontiers in Psychology — A Meta-Analysis of Attentional Interference Effects on Digital Reading](https://pmc.ncbi.nlm.nih.gov/articles/PMC12684101/) · [Nielsen Norman Group — Banner Blindness](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)
Wireframe: https://files.catbox.moe/87yv2v.jpg
File: library/reading-psychology/UX-442-attention-distraction-minimize-competing-stimuli-during-read.md

## UX-416 — F-Pattern Scanning: Design for the Left Edge and First Lines
- Score 3 · Reading Psychology / Scanning Patterns
- Tags: cognitive-load, content-design, navigation, reading-psychology
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Apply whenever designing content-heavy pages, blog articles, documentation, or any interface where users are likely to skim rather than read word-by-word. Especially critical for landing pages and product pages where the key message must land in the first seconds.

**Why.** Eye-tracking research by the Nielsen Norman Group confirms that users reading unformatted web content follow an F-shaped pattern: a horizontal scan across the top, a shorter horizontal scan below, then a vertical scan down the left edge. The right side of pages routinely receives little attention, and critical information buried in the middle or right of body text is often skipped entirely. This pattern emerges because users are efficient, not lazy — they maximize information gained per unit of time. F-pattern scanning is especially prevalent when content appears as undifferentiated walls of text with no clear visual structure.

**Do.**
- Place the most critical message or call-to-action within the first two paragraphs where top horizontal scans are concentrated
- Front-load each paragraph: put the key idea in the first sentence, supporting detail after
- Never bury essential information (pricing, deadlines, key actions) in the right half of body text columns
- Use the left-edge vertical scan to your advantage: start list items, subheadings, and paragraph lead sentences with the most information-rich words
- Break up wall-of-text layouts with subheadings, bullets, and visual groupings to disrupt pure F-pattern scanning and promote richer engagement
- On mobile, recognize that the entire width is a 'left edge' — ensure full-width content is structured with strong opening sentences

**Measure.** Efficiency: Time on task, Completion time; Engagement & Usage: Scroll depth, Bounce rate, Pages per session; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Use eye-tracking studies to verify F-pattern scanning behavior on text-heavy pages and confirm that critical information and CTAs are placed in the high-attention left edge and first lines. Measure time-to-find-information and compare task completion times for layouts designed vs. not designed for F-pattern reading.

Sources: [Nielsen Norman Group — F-Shaped Pattern Reading Web Content](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) · [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
Wireframe: https://files.catbox.moe/o2mqzv.jpg
File: library/reading-psychology/UX-416-f-pattern-scanning-design-for-the-left-edge-and-first-lines.md

## UX-418 — Z-Pattern Layout: Guide Attention on Low-Text Pages
- Score 3 · Reading Psychology / Scanning Patterns
- Tags: cognitive-load, content-design, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Use primarily for marketing landing pages, hero banners, email headers, onboarding screens, and card-based layouts where text is minimal and images drive the experience. Less applicable to documentation or text-heavy utility interfaces.

**Why.** On pages with sparse text and a strong visual layout — such as landing pages, hero sections, and marketing layouts — users follow a Z-shaped path: left-to-right across the top, diagonally down to the lower-left, then right across the bottom. This differs from the F-pattern which applies to text-heavy content. Understanding which pattern applies depends on content density and page type. Designers can deliberately place key elements (logo, headline, CTA, social proof) at the four corners and diagonal midpoint of the Z to align with this natural eye path.

**Do.**
- On hero sections and landing pages, place the brand/logo at top-left, primary headline at top-right or center-top
- Position a supporting image or value proposition along the diagonal midpoint
- Place the primary call-to-action (CTA) button at the bottom-right — the natural termination point of the Z
- On cards and grid layouts, put the most important element (product name, price, badge) at the top-left of each card
- Avoid placing critical information in the center-middle where the diagonal scan crosses: this area receives the least dwell time
- Use visual weight (size, color, contrast) at Z anchor points to confirm the intended reading order

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task; Revenue: Conversion rate, Clickthrough rate (as Revenue driver); Engagement & Usage: Clickthrough rate; How to measure: Use eye-tracking or heatmap tools to verify attention follows the Z-pattern on low-text pages such as landing pages; A/B test Z-pattern layouts against alternative arrangements and measure CTA click rate and conversion rate.

Sources: [Nielsen Norman Group — F-Shaped Pattern Reading Web Content](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) · [Attention and Color Theories Applied to Website Design — Dr. Pamela Rutledge](https://www.pamelarutledge.com/resources/articles/attention-and-color-theories-applied-to-website-design/)
Wireframe: https://files.catbox.moe/gc5fb7.jpg
File: library/reading-psychology/UX-418-z-pattern-layout-guide-attention-on-low-text-pages.md

## UX-423 — Typography Psychology: Font Choice Signals Trust and Affects Comprehension
- Score 3 · Reading Psychology / Typography Cognition
- Tags: accessibility, cognitive-load, reading-psychology, typography
- Goals: Design a Consistent System at Scale; Build Trust & Reduce User Anxiety; Improve Readability & Visual Clarity
- Use when: Applies to all product design decisions about the type system. Especially high-stakes in B2B SaaS (where trust is critical), healthcare, finance, and e-commerce checkout flows. Revisit when brand-refreshing or expanding to new user segments.

**Why.** Font psychology research establishes that typeface selection has measurable, largely unconscious effects on users' trust, comprehension speed, and emotional response before a single word is consciously processed. Serif fonts (Georgia, Garamond) are associated with authority, credibility, and tradition — making them effective for finance, legal, and long-form publishing. Sans-serif fonts (Inter, Verdana, Helvetica) signal modernity, clarity, and efficiency, making them dominant in web applications and SaaS products. Mismatched font personality and brand context creates cognitive dissonance that undermines trust. Script and decorative fonts add to cognitive load in body text and should be used only for display purposes.

**Do.**
- Use sans-serif fonts (Inter, Roboto, Helvetica, Verdana) for body text in digital interfaces: they are optimized for screen rendering and scan efficiently
- Reserve serif fonts for long-form reading (blog articles, documentation) where they provide continuity between letterforms and reduce eye fatigue over extended reading sessions
- Use a maximum of 2 typefaces per interface: one for headings (display personality), one for body (high legibility)
- Ensure the font has a sufficient x-height (the height of lowercase letters) for readability at small sizes; fonts with tall x-heights (Verdana, Trebuchet) are more legible at 14–16px
- Match font personality to brand context: use slab serifs (Rockwell, Arvo) for strong, confident brands; humanist sans-serifs (Gill Sans, Frutiger) for approachable services
- Avoid novelty, condensed, or display fonts for any text users need to read and comprehend

**Measure.** Efficiency: Time on task, Completion time; Satisfaction & Perception: Brand perception, Confidence rating, CSAT; Engagement & Usage: Scroll depth, Abandonment rate; How to measure: Run comprehension tests or reading-speed measurements on alternative typeface treatments to quantify legibility differences. Use unmoderated prototype testing with a brand-trust survey item to capture whether font choice affects user confidence in the product or organization.

Sources: [Crazy Egg — Font Psychology: How Typeface Shapes Meaning and Trust](https://www.crazyegg.com/blog/font-psychology/) · [A List Apart — On Web Typography](https://alistapart.com/article/on-web-typography/) · [WebAIM — Fonts](https://webaim.org/techniques/fonts/)
Wireframe: https://files.catbox.moe/owlf50.jpg
File: library/reading-psychology/UX-423-typography-psychology-font-choice-signals-trust-and-affects.md

## UX-430 — Dual Coding: Pair Text with Semantically Aligned Visuals
- Score 3 · Reading Psychology / Cognitive Processing
- Tags: accessibility, cognitive-load, content-design, navigation, reading-psychology
- Goals: Improve Readability & Visual Clarity
- Use when: Essential for onboarding flows, help documentation, data visualization, product feature explanations, and instructional content. Most impactful when explaining abstract concepts, complex workflows, or unfamiliar domain knowledge.

**Why.** Dual coding theory (Allan Paivio, 1971) proposes that the brain has two separate but interconnected cognitive systems: a verbal system for processing language and a non-verbal system for processing images. When information is encoded through both channels simultaneously, the brain creates multiple retrieval routes, dramatically improving comprehension and retention. The critical requirement is semantic alignment — the image must express the same concept as the text, not merely decorate it. Misaligned visuals create cognitive interference and reduce comprehension. When text and visuals are aligned and co-located, comprehension can improve by 40–79%.

**Do.**
- For every complex concept, process, or relationship in body text, evaluate whether a diagram, illustration, icon, or chart could communicate the same idea through the visual channel
- Place visuals within 8–16px of the text they illustrate — never separate them to different sections of the page
- Present visual and verbal content simultaneously (not sequentially) when possible; avoid carousels that show images separate from their captions
- Ensure visuals are semantically congruent with their adjacent text: a diagram showing a workflow must match the steps described in the text exactly
- Use icons next to navigation labels and category headings to encode meaning in both channels simultaneously
- Avoid purely decorative stock images adjacent to important copy — they consume visual attention without adding meaning and may actually reduce comprehension by occupying cognitive resources
- For instructional content (tutorials, onboarding), use step-by-step annotated screenshots rather than generic product images

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task; Engagement & Usage: Scroll depth, Bounce rate; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: Run comprehension tests measuring accuracy and speed when users interpret text-only versus dual-coded (text + aligned visual) content; track scroll depth and time-on-page to confirm that paired visuals improve engagement with instructional or informational content.; For every complex…

Sources: [BCL Training — Dual Coding Theory](https://bcltraining.com/learning-library/dual-coding-theory/) · [Nottingham Trent University — Dual Coding: Delivering Learning Content](https://www.ntu.ac.uk/about-us/teaching/academic-development-and-quality/cadq-blogs/dual-coding-exploring-opportunities-to-deliver-learning-content-in-now) · [Lindamood-Bell — What Is Dual Coding Theory?](https://lindamoodbell.com/for-schools/what-is-dual-coding-theory-strengthening-reading-and-comprehension)
Wireframe: https://files.catbox.moe/9k0klr.jpg
File: library/reading-psychology/UX-430-dual-coding-pair-text-with-semantically-aligned-visuals.md

## UX-434 — Working Memory Constraints: Limit Active Cognitive Demands
- Score 3 · Reading Psychology / Cognitive Processing
- Tags: accessibility, cognitive-load, content-design, navigation, reading-psychology
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Most impactful in multi-step forms and checkout flows, complex configuration interfaces, data entry workflows, and any sequence where users must refer back to previous information while completing a current step.

**Why.** Working memory — the cognitive system that holds and manipulates information in active use — is severely limited. While Miller's original '7±2' figure is often misapplied to navigation design, the underlying principle is sound: users cannot simultaneously maintain too many active pieces of information while reading and navigating. More recent research (Cowan, 2001) suggests a capacity of only ~4 chunks. The key design implication is not to limit menus to 7 items, but to minimize the number of pieces of information users must hold in working memory while completing any reading or task sequence — for example, showing breadcrumbs so users don't have to remember where they are.

**Do.**
- Display context continuously: show where the user is (breadcrumbs, section headings, page titles, progress indicators) so they don't need to hold their location in working memory
- Keep instructions visible while users complete a task — never put instructions on one page and the form on the next
- Reduce recall demands: use autocomplete, saved states, and default values so users don't need to remember information from earlier in the session
- Limit the number of choices that require simultaneous evaluation: more than 4–5 options requiring cross-comparison should be presented with a comparison table, not a list
- In multi-step flows, show a summary of previous choices at each new step so users don't need to remember what they entered
- Use inline help text and tooltips to surface contextual information exactly when needed, eliminating the need to memorize requirements
- Minimize the number of distinct visual styles per screen — every new style requires a working memory slot to decode

**Measure.** Efficiency: Time on task, Error counts; Effectiveness: Completion rate, Task success rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Use moderated usability tests with a dual-task methodology or think-aloud protocol to surface working memory strain. Compare completion rates and error counts between designs that chunk information into manageable units versus those that present it all at once.

Sources: [LogRocket — Miller's Law in UX Design](https://blog.logrocket.com/ux-design/millers-law-ux-design/) · [Wikipedia — The Magical Number Seven, Plus or Minus Two](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two) · [UX Myths — Myth 23](https://uxmyths.com/post/931925744/myth-23-choices-should-always-be-limited-to-seven)
Wireframe: https://files.catbox.moe/gk26xl.jpg
File: library/reading-psychology/UX-434-working-memory-constraints-limit-active-cognitive-demands.md

## UX-437 — Dark Mode vs. Light Mode: Default to Light for Readability
- Score 3 · Reading Psychology / Contrast and Readability
- Tags: accessibility, cognitive-load, reading-psychology, typography
- Goals: Improve Readability & Visual Clarity
- Use when: Critical design decision for any application used for extended reading periods (documentation, publishing, note-taking, code editing). Dark mode demand has grown significantly since 2019 with OS-level support. Always a user preference, never a forced aesthetic choice.

**Why.** Multiple empirical studies (Piepenbrock et al., 2013; Dobres et al., 2017) demonstrate that positive contrast polarity — dark text on a light background — produces superior visual performance for most users: faster reading speeds, fewer errors, and better acuity. The mechanism is that a lighter background contracts the pupil, reducing spherical aberrations and increasing depth of field. However, dark mode is preferred by users with certain vision impairments (cataracts, low vision) and may reduce long-term myopia risk with extended reading. The evidence-based recommendation from NNGroup is: default to light mode, offer dark mode as a user preference.

**Do.**
- Default all new interfaces to light mode (dark text on light background) as the primary experience
- Implement a dark mode toggle tied to the OS-level preference via CSS prefers-color-scheme media query, ensuring dark mode activates automatically for users who prefer it system-wide
- For dark mode, use off-white text (#E8E8E8) on dark-gray backgrounds (#1A1A1A to #2D2D2D) rather than pure white on pure black — extreme contrast can cause halos for some users
- Increase font weight slightly in dark mode: lighter fonts that look fine on white backgrounds can appear thin and hard to read on dark backgrounds
- Never use pure black (#000000) text on pure white (#FFFFFF) — use #1A1A1A on #FAFAFA to reduce glare while maintaining high contrast
- Ensure dark mode maintains WCAG 4.5:1 contrast for body text and 3:1 for large text and UI components
- Accommodate user accessibility preferences by offering three modes where feasible: light, dark, and high-contrast

**Measure.** Effectiveness: Task success rate, Completion rate; Efficiency: Time on task; Satisfaction & Perception: Ease-of-use score, Satisfaction rating; How to measure: Conduct reading speed and comprehension tests under light versus dark mode for text-heavy interfaces; run preference studies and measure task accuracy to determine whether defaulting to light mode improves readability outcomes for the target content type.; Default all new interfaces to light mode (dark text on light background) as the…

Sources: [Nielsen Norman Group — Dark Mode vs. Light Mode: Which Is Better?](https://www.nngroup.com/articles/dark-mode/) · [WebAIM — Fonts and Contrast Guidelines](https://webaim.org/techniques/fonts/)
Wireframe: https://files.catbox.moe/d63rv0.jpg
File: library/reading-psychology/UX-437-dark-mode-vs-light-mode-default-to-light-for-readability.md

## UX-444 — Scannability vs. Credibility: Balance Brevity with Sufficient Depth
- Score 3 · Reading Psychology / Content Design
- Tags: cognitive-load, content-design, reading-psychology
- Goals: Reduce Cognitive Load; Improve Readability & Visual Clarity
- Use when: Applies to all web content creation and content auditing. Most impactful for marketing pages, product feature descriptions, about pages, and any content that has accumulated over time without structured editing. Balance varies by content type: transactional content should be shorter; editorial and research content can justify greater depth when structured for scanning.

**Why.** Jakob Nielsen's landmark 1997 web readability study found that concise text improved usability by 58%, scannable layout by 47%, and objective (non-promotional) language by 27%. When all three were combined, usability improved by 124%. However, content that is too sparse creates a credibility problem: NNGroup research also identifies high-quality writing and outbound hyperlinks to authoritative sources as key trust signals. The optimal balance is: lead with the user's need, be concise, structure for scanning, but provide sufficient depth that users who want more can find it without leaving the site.

**Do.**
- Target 50% of conventional word count for web pages by eliminating preamble, repetition, and promotional language
- Replace superlatives and vague claims ('the most powerful', 'industry-leading') with specific, verifiable facts ('processes 10,000 records per second', 'used by 50,000 teams')
- Front-load answers; link to deeper content for users who want more — this supports both scanning readers and deep readers
- Include hyperlinks to authoritative external sources to signal credibility (this also improves SEO as a trust signal to search engines)
- Eliminate introductory paragraphs that describe what the article will cover instead of just covering it ('In this article, we will discuss...')
- Audit every paragraph for 'zombie sentences' — sentences that do not add unique information and can be deleted without loss
- Use the 'newspaper test': if you cut the last 50% of the content, does the page still fully serve the user's primary need?

**Measure.** Efficiency: Time on task, Error counts; Engagement & Usage: Scroll depth, Bounce rate, Pages per session; Satisfaction & Perception: CSAT, Confidence rating; How to measure: A/B test page layouts optimized for scannability (short paragraphs, headers, bullets) against credibility-rich versions (detailed explanations, data, citations), measuring scroll depth, time on page, and post-read confidence ratings. Track bounce rates for content pages by reading-pattern optimization level.

Sources: [Nielsen Norman Group — How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/) · [GOV.UK](http://gov.uk/) · [— Writing for](https://www.gov.uk/guidance/content-design/writing-for-gov-uk) · [GOV.UK](http://gov.uk/)
Wireframe: https://files.catbox.moe/ilrv9e.jpg
File: library/reading-psychology/UX-444-scannability-vs-credibility-balance-brevity-with-sufficient.md
