# Forms & Input (15)

## UX-205 — Error Prevention
- Score 5 · Forms & Input / Proactive error elimination
- Tags: ai-patterns, forms, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Before designing error messages, first ask whether the error can be prevented entirely. Especially critical for irreversible or high-cost operations — data deletion, financial transactions, bulk writes.
- Verify: Every irreversible or bulk action (delete, purge, bulk write, payment) shows a confirmation step naming what will be affected, and its trigger sits apart from the safe primary action.
- Verifiable by: test
- Anti-pattern: A red Delete button placed right next to Save that removes the record on a single click with no confirmation and no undo.

**Why.** Good error messages are important, but the best designs prevent problems before they occur. There are two error types: slips (inattention-based, where users know the right action but mis-execute) and mistakes (mental model mismatches, where users believe their incorrect action is correct). Slips are addressed through helpful constraints and input formats; mistakes through removing memory burdens and warning users proactively. The cost of preventing a high-consequence error always outweighs the engineering cost of the constraint.

**Do.**
- Prioritize prevention for highest-cost errors first (irreversible data loss, financial transactions).
- Use inline validation and input constraints to prevent slips at entry time.
- Disable (not hide) destructive actions that would be errors in the current context.
- Present confirmation options before committing irreversible actions, especially bulk ones.
- Pre-fill known data to reduce memory-dependent input errors.
- Separate destructive action buttons (Delete, Purge) spatially from safe actions (Save, Export) with sufficient padding to prevent mis-clicks per Fitts's Law.

**Measure.** Effectiveness: Error rate, Completion rate; Efficiency: Time on task, Error counts, Support tickets reduction; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Instrument form submissions and workflow actions to log error frequency at each step. Compare error rates before and after applying error prevention patterns (inline validation, confirmation dialogs for destructive actions, smart defaults). Track support ticket volume for user error-related issues as a longitudinal quality indicator.

Sources: [Nielsen Norman Group — 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) · [About Face 4th Ed., Ch. 15 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf) · [Nielsen Norman Group — Heuristic 5](https://cleverx.com/blog/heuristic-evaluation-10-nielsen-principles-explained) · [UX Stack Exchange](https://ux.stackexchange.com/)
Wireframe: https://files.catbox.moe/2ko6ya.jpg
File: library/forms-and-input/UX-205-error-prevention.md

## UX-206 — Inline Validation — Validate on Field Blur, Not on Keystroke
- Score 5 · Forms & Input / Real-Time Feedback
- Tags: forms, data-heavy, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Use when designing any data entry form, especially multi-field enterprise forms with complex validation rules.
- Verify: Typing a partial valid value (e.g. the first characters of an email) in a standard field shows no error until the field loses focus or the form is submitted.
- Verifiable by: test
- Anti-pattern: An onChange handler that sets the error state, so "Invalid email" appears after the first typed character.

**Why.** Validate form input when the field loses focus (on blur) rather than on every keystroke. This allows users to finish typing before seeing an error, preventing false-positive errors and the frustration of being flagged as wrong mid-input. Validate on keystroke only for fields where partial state is always valid (e.g., a counter) or where positive reinforcement is valuable (e.g., password strength meter). Deferred validation that only shows errors after full form submission forces users to search for problems across the entire form and interrupts flow; inline validation reduces errors, reduces submission failures, and creates a sense of forward momentum.

**Do.**
- Bind validation to the `blur` event for standard fields.
- Show success states (green checkmark) immediately when a field becomes valid.
- Delay error state until blur or first failed submission attempt.
- For complex formats (phone, dates, IDs), provide format hints as placeholder text.
- For fields where positive feedback is meaningful, add progress indicators (password strength) that respond on keystroke without triggering error states prematurely.

**Measure.** Effectiveness: Error rate, Task success rate, Completion rate; Efficiency: Error counts, Time on task; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test keystroke vs. blur validation timing on forms and measure error rate per submission and form abandonment rate. Run usability tests to capture subjective frustration ratings when validation fires at different timings.

Sources: [About Face 4th Ed., Ch. 14 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf) · [UX Stack Exchange](https://www.reddit.com/r/UXDesign/comments/1kllxg1/best_uxui_practices_for_displaying_multiple/) · [Nielsen Norman Group — 10 Design Guidelines for Errors in Forms](https://www.nngroup.com/articles/errors-forms-design-guidelines/) · [Good UI — Inline Validation](https://goodui.org/#33)
Wireframe: https://files.catbox.moe/5mv9fc.jpg
File: library/forms-and-input/UX-206-inline-validation-validate-on-field-blur-not-on-keystroke.md

## UX-207 — Postel's Law — Accept Varied Input, Output Consistent Data
- Score 5 · Forms & Input / Input tolerance and normalization
- Tags: forms
- Goals: Design Forms That Work
- Use when: Apply to all input fields with specific expected formats — phone numbers, dates, currencies, URLs, CSV imports, search fields — in any enterprise data entry context.
- Verify: Entering the same phone number as "555-123-4567", "(555) 123 4567" and " 5551234567 " is accepted in all three cases and stored in one normalized format.
- Verifiable by: test
- Anti-pattern: A strict regex like /^\d{10}$/ that rejects dashes, spaces or surrounding whitespace with "Invalid format".

**Why.** "Be liberal in what you accept, and conservative in what you send." Accept varied, imperfect user inputs flexibly while outputting consistent, well-formatted data. Users enter phone numbers with dashes, without dashes, with parentheses, with spaces — all of these are correct from the user's perspective. Rejecting them with "invalid format" errors is a system failure, not a user failure. The system should do the normalization work so users don't have to remember format rules.

**Do.**
- Accept phone numbers in any format and normalize to a standard format on save/display.
- Accept date inputs in natural language ("next Friday," "Q3 2025") where feasible.
- Trim leading/trailing whitespace from all text inputs automatically.
- In CSV import, auto-detect column types, handle missing headers gracefully, and show what was parsed before committing.
- Accept currency variants ("$1,000," "1000," "$1000") and normalize to canonical format.
- For search, handle typos, partial matches, and case variations — never return zero results from simple variants.

**Measure.** Effectiveness: Task success rate, Error rate, Completion rate; Efficiency: Error counts, Time on task; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Track form submission error rates related to input format validation before and after applying liberal input acceptance (e.g., accepting phone numbers with or without dashes). Measure form abandonment rates for fields with strict input formatting requirements vs. those that accept varied input formats.

Sources: [Laws of UX — Postel's Law](https://lawsofux.com/postels-law/) · [Good UI — Forgiving Inputs](https://goodui.org/#34)
Wireframe: https://files.catbox.moe/s83jtn.jpg
File: library/forms-and-input/UX-207-postel-s-law-accept-varied-input-output-consistent-data.md

## UX-208 — Keep Forms as Short as Possible — Eliminate Unnecessary Fields
- Score 5 · Forms & Input / Form length and field reduction
- Tags: forms
- Goals: Design Forms That Work
- Use when: Apply to all form design — registration, data entry, configuration, checkout, filtering dialogs. Each additional field adds cognitive burden and increases abandonment.
- Verify: Every field in the form is either needed to complete the current task or clearly marked optional, and none asks for data already available from the account.
- Verifiable by: judgment
- Anti-pattern: A signup form that asks for company size, phone, job title and address before the user can create an account, and re-asks the email in a second field.

**Why.** Each additional form field adds cognitive burden and increases abandonment. Fields that can be derived from other data, collected later, or safely omitted should be removed. Progressive profiling — collecting additional data across multiple sessions rather than all at once — is preferable to front-loading a long form. Parkinson's Law applies: if you give users unlimited time to complete a form by adding optional fields, they'll spend time on them even when irrelevant.

**Do.**
- Audit every field: can it be derived, defaulted, or collected post-onboarding? Remove or defer what passes this test.
- Minimize optional fields; if included, clearly label them.
- Move optional fields to a "Additional Details" section or post-submission step.
- Pre-populate fields from existing account data, integrations, or browser autofill.
- Use autofill, smart defaults, and pre-populated fields to eliminate known-data re-entry.
- Show estimated completion time for long forms — constraining expectations reduces form inflation.

**Measure.** Effectiveness: Completion rate, Task success rate, Error rate; Efficiency: Time on task, Completion time; Revenue: Conversion rate, Signup completion rate; How to measure: A/B test shortened forms (removing non-essential fields) against full-field versions, measuring form completion rate, time-on-form, and downstream conversion rate. Use form analytics to identify which specific fields have the highest abandonment or error rates as candidates for elimination.

Sources: [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/) · [Good UI — Fewer Form Fields](https://goodui.org/#13) · [Laws of UX — Parkinson's Law](https://lawsofux.com/parkinsons-law/)
Wireframe: https://files.catbox.moe/2n6ljc.jpg
File: library/forms-and-input/UX-208-keep-forms-as-short-as-possible-eliminate-unnecessary-fields.md

## UX-209 — Single-Column Form Layouts and Logical Field Sequencing
- Score 5 · Forms & Input / Form layout and field ordering
- Tags: tables, forms
- Goals: Design Forms That Work
- Use when: Apply to all forms with more than 3 fields. Single-column layouts maintain a clear reading path and eliminate eye-tracking ambiguity.
- Verify: In a form with more than 3 fields, each row holds one field, except short inseparable groups (First/Last name, City/State/ZIP), and the tab order matches the visual order.
- Verifiable by: visual
- Anti-pattern: A two-column grid of unrelated fields (Email next to Company, Password next to Role) that makes the eye zig-zag.

**Why.** Single-column forms maintain a clear vertical reading path and eliminate the ambiguity of multi-column layouts where eye-tracking shows users frequently skip fields. Field order should follow logical sequences matching how users think about providing information — general to specific, easy to hard, least to most sensitive. Multi-column layouts appear to save space but increase completion errors and cognitive effort by breaking the natural vertical scanning rhythm.

**Do.**
- Use one field per row except for logically inseparable, short fields (City / State / ZIP, First / Last Name).
- Follow standard sequences (credit card number → expiration date → security code).
- Sequence questions from general to specific, easy to hard, least to most sensitive.
- Use branching logic to show only relevant fields based on previous answers.
- For enterprise data entry forms, a slightly wider column with comfortable line-length is preferable to filling the full screen width.

**Measure.** Effectiveness: Completion rate, Error rate, Task success rate; Efficiency: Time on task, Completion time, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Compare completion rates and error rates between single-column and multi-column form layouts using A/B testing. Track time-on-form as a measure of cognitive effort, and monitor submission error rates to assess whether logical field sequencing reduces mistakes.

Sources: [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
Wireframe: https://files.catbox.moe/cqdxwn.jpg
File: library/forms-and-input/UX-209-single-column-form-layouts-and-logical-field-sequencing.md

## UX-210 — Group Related Form Fields With Section Headings
- Score 5 · Forms & Input / Form section organization
- Tags: cognitive-load, forms
- Goals: Design Forms That Work
- Use when: Apply to forms with more than ~6 fields, or forms covering multiple distinct topics (personal information, billing, shipping, preferences).
- Verify: A form with more than ~6 fields splits them into sections with a visible heading each, with more space between sections than between fields inside one.
- Verifiable by: visual
- Anti-pattern: A 15-field form as one flat list with uniform spacing, no headings, and Save and Delete in the same block.

**Why.** Long forms as a single undifferentiated list feel overwhelming. Grouping related fields into sections reduces the sense of scale, allows focus on one information category at a time, minimizes context switching, and creates a sense of progress as each section is completed. The Law of Common Region states that elements sharing an area with a clearly defined boundary are perceived as a group — use background fills or bordered fieldsets to create sections without excessive visual noise.

**Do.**
- Group logically related fields together with clear section headings.
- Use consistent spacing: tighter within a group, more space between sections.
- Reinforce grouping with subtle visual containers, dividers, or background color differentiation.
- Use background fill or a bordered fieldset to create visible section regions (Law of Common Region).
- Place destructive controls in a visually separate group from safe controls — never intermix Save and Delete in the same section.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: A/B test form layouts with and without section headings, tracking form completion rates, field-level error rates, and time to submit. Supplementary usability testing can capture qualitative data on whether groupings reduce confusion and improve user confidence in filling out complex forms.

Sources: [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/) · [Laws of UX — Law of Common Region](https://lawsofux.com/law-of-common-region/)
Wireframe: https://files.catbox.moe/en2rqo.jpg
File: library/forms-and-input/UX-210-group-related-form-fields-with-section-headings.md

## UX-211 — Never Use Placeholder Text as a Substitute for Labels
- Score 5 · Forms & Input / Field Labeling Conventions
- Tags: forms, accessibility
- Goals: Design Forms That Work; Reduce Cognitive Load
- Use when: Use when designing any form where the ratio of required to optional fields is significantly unbalanced in either direction.
- Verify: Every input has a persistent visible label (a <label> bound to it) that stays on screen after the user types, and the placeholder never carries the only description of the field.
- Verifiable by: lint
- Anti-pattern: <input placeholder="Email"> with no <label>, so the field name disappears once the user starts typing (jsx-a11y/label-has-associated-control catches the missing label).

**Why.** If most fields in a form are required, label only the exceptions as "Optional" rather than marking every required field with an asterisk. [Gov.uk](http://gov.uk/) research shows this reduces user confusion because users don't have to infer rules from a symbol system, and the form feels less intimidating. Conversely, if most fields are optional, label only the required ones. When the split is roughly equal (40–60%), label both required and optional fields explicitly. The asterisk convention is so widely misunderstood that avoiding it for the majority case consistently improves form completion rates.

**Do.**
- Audit each form for the required/optional ratio.
- If 80%+ are required, use "(Optional)" text label next to the minority of optional fields only — remove all asterisks.
- If 80%+ are optional, mark required fields with "(Required)".
- If split is roughly equal, mark both.
- Never use asterisk alone without a visible legend explaining it.
- Place labels inline with the field label, not below the input.

**Measure.** Effectiveness: Task success rate, Error rate, Completion rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run A/B tests comparing forms with placeholder-only labels vs. persistent visible labels, measuring form completion rate and error rate. Use eye-tracking or usability testing to observe whether users lose context mid-entry when labels disappear.

Sources: [Nielsen Norman Group /](https://www.youtube.com/watch?v=KgXSeWM50vU) · [Gov.uk](http://gov.uk/) · [research](https://www.youtube.com/watch?v=KgXSeWM50vU) · [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
Wireframe: https://files.catbox.moe/h9mm7d.jpg
File: library/forms-and-input/UX-211-never-use-placeholder-text-as-a-substitute-for-labels.md

## UX-212 — Smart Defaults in Forms and Configuration
- Score 5 · Forms & Input / Intelligent defaults and pre-filling
- Tags: onboarding
- Goals: Design Forms That Work
- Use when: Apply to new record creation, report configuration, filter defaults, notification preferences, and user profile completion wherever context enables educated defaults.
- Verify: On a new record form, fields that can be inferred (owner = current user, date range = last full period, country/timezone/currency from the account) arrive pre-filled.
- Verifiable by: test
- Anti-pattern: "Assigned to" left blank, date range defaulting to "All time", and timezone showing "Select..." even though the account already has one.

**Why.** Pre-filling form fields with context-based educated guesses removes friction and demonstrates the system understands the user. Smart defaults should be the most likely value for the current user segment, not a blank slate requiring active configuration. Defaulting new records to the logged-in user, defaulting date ranges to the most recent full period, and defaulting currency and timezone from account settings all significantly reduce form completion time and errors.

**Do.**
- Default new records to the most likely values based on user role, team, or previous entries ("Assigned To" defaults to logged-in user).
- Default date ranges to the most recent full period (last 30 days, last quarter) rather than "all time." Use geolocation or account data to pre-select country, timezone, currency.
- Remember and re-apply user's last-used filter configuration on return.
- Pre-complete wizard steps that can be inferred from account context.
- Use opt-out defaults for settings that benefit most users — make the recommended state the starting point.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Error counts; Adoption & Retention: Signup completion rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: A/B test forms with smart defaults versus blank forms; measure completion rate, time-to-submit, and error rate; track onboarding completion rates as an indicator of whether smart defaults reduce friction for new users.; Default date ranges to the most recent full period (last 30 days, last…

Sources: [Good UI — Smart Defaults](https://goodui.org/#28) · [Nielsen Norman Group — Minimize Cognitive Load](https://www.nngroup.com/articles/minimize-cognitive-load/)
Wireframe: https://files.catbox.moe/63oxco.jpg
File: library/forms-and-input/UX-212-smart-defaults-in-forms-and-configuration.md

## UX-213 — Appropriate Control Selection for Form Inputs
- Score 5 · Forms & Input / Control Design
- Tags: forms
- Goals: Design Forms That Work
- Use when: Use when designing form controls and data entry interfaces, and when reviewing existing forms for control type appropriateness.
- Verify: Mutually exclusive choices of 2-5 options use radios, independent multi-selects use checkboxes, and structured data (date, number) does not use a plain text input.
- Verifiable by: visual
- Anti-pattern: Checkboxes for mutually exclusive options (allowing impossible states) or a free-text input for a date that accepts "tomorrow-ish".

**Why.** Match form controls to the nature of the input: radio buttons for mutually exclusive small sets (2–5 options), checkboxes for independent multi-select, dropdowns for large sets of mutually exclusive options (6+), sliders for continuous values with known range, date pickers for date inputs, text fields for unconstrained text. Mismatched controls — checkboxes for mutually exclusive options (creating impossible states), text fields for structured data (inviting format errors) — create unnecessary errors and reduce input efficiency. The control itself communicates the input rules.

**Do.**
- Create a control selection guide for your product: for each input type (boolean, small enumerated set, large enumerated set, numeric range, date, multi-select, free text), specify the appropriate control type with rationale.
- Audit existing forms against this guide.
- Replace mismatched controls systematically.
- Validate borderline cases (5–8 options: radio vs. dropdown) with user research to understand which format users navigate more efficiently in your specific context.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run task-based usability tests comparing appropriate controls (e.g., radio buttons for mutually exclusive single-select) against mismatched controls (e.g., dropdowns for the same task), measuring time on task and error rate per field. Track field-level abandonment and error frequency in production form analytics to identify control mismatches at scale.

Sources: [About Face Ch. 21 (Wiley, 2014)](https://fall14se.wordpress.com/wp-content/uploads/2017/04/alan-cooper-robert-reimann-david-cronin-christopher-noessel-about-face_-the-essentials-of-interaction-design-wiley-2014.pdf)
Wireframe: https://files.catbox.moe/ihv24t.jpg
File: library/forms-and-input/UX-213-appropriate-control-selection-for-form-inputs.md

## UX-214 — Enterprise Form Design
- Score 5 · Forms & Input / Enterprise Forms
- Tags: enterprise, forms
- Goals: Design Forms That Work; Design for Enterprise & B2B Scale
- Use when: All data entry forms in enterprise applications — record creation, settings configuration, wizard steps, import mapping, approval request forms.
- Verify: Each field has its label above the input, shows its error/success state after blur, and a long form keeps Save/Cancel visible without scrolling.
- Verifiable by: visual
- Anti-pattern: Validation that only runs on submit, labels living inside the input as placeholders, and Save buttons at the bottom of a 3-screen-tall form.

**Why.** Enterprise forms handle complex data entry across many required and optional fields, demanding deliberate design to reduce errors and completion time. Grouping related fields into labeled sections, marking required fields consistently, validating inline on blur rather than only on submit, and enabling autofill where appropriate are the foundational practices that separate usable enterprise forms from ones that generate support tickets and data quality issues.

**Do.**
- Field label above input (never placeholder-as-label — it disappears on focus).
- Required indicator: red asterisk (*) with a legend at the form top.
- Inline validation: show error/success state after the user leaves each field.
- Character counts for text fields with limits, shown near the limit (not always).
- Sticky Save/Cancel buttons for long forms so they're always accessible.
- Auto-save drafts every 30 seconds for forms that cannot be completed in one session.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Error counts; Adoption & Retention: Signup completion rate, Account creation rate; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Instrument form fields with analytics to capture field-level abandonment and error frequency. Run moderated usability sessions with representative enterprise users to identify friction points, measuring overall form completion rate and time on task before and after applying enterprise form design standards.

Sources: [Carbon Design System — Forms](https://carbondesignsystem.com/patterns/overview/)
Wireframe: https://files.catbox.moe/zom5ql.jpg
File: library/forms-and-input/UX-214-enterprise-form-design.md

## UX-215 — Match Input Field Type and Size to Expected Input
- Score 4 · Forms & Input / Input field affordance
- Tags: forms
- Goals: Design Forms That Work; Reduce Cognitive Load
- Use when: Apply to any form with varied input types — short IDs, addresses, descriptions, comments. Field size provides a visual affordance for expected input length.
- Verify: Field width reflects expected length (a ZIP field is visibly short, a description is a multi-line textarea) and numeric fields use type=number or inputmode with min/max.
- Verifiable by: lint
- Anti-pattern: A full-width single-line input for a 5-digit ZIP code, and a one-line text input for a multi-paragraph comment.

**Why.** Field size provides a visual affordance for expected input length. A short field signals a brief response; a long field signals detailed input. Using the wrong field size creates cognitive friction: users question whether they understand the question when the field doesn't match their expectations. Choosing the right input type (radio buttons for 2–3 exclusive options vs. dropdowns, checkboxes for multi-select) dramatically reduces interaction cost.

**Do.**
- Size text fields to approximately match expected input length (city field ~19 characters wide).
- Use radio buttons for 2–3 exclusive options instead of dropdowns — exposed options reduce interaction cost.
- Use checkboxes for multi-select options.
- Use textareas for long free-text responses.
- Use number inputs with min/max constraints for numeric values.
- For 10+ option lists where users know what they're looking for, use a combobox/autocomplete instead of a plain select.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Run usability tests on forms with matched versus mismatched field sizes and types (e.g., a full-width field for a 5-digit zip code), measuring error rate and time to complete each field. Track field-level error rates in production form analytics to identify which fields generate the most corrections.

Sources: [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
Wireframe: https://files.catbox.moe/wsp082.jpg
File: library/forms-and-input/UX-215-match-input-field-type-and-size-to-expected-input.md

## UX-216 — Progress Communication in Multi-Step Forms
- Score 4 · Forms & Input / Form transparency and progress indicators
- Tags: forms
- Goals: Handle Complex Multi-Step Workflows; Design Forms That Work
- Use when: Apply to multi-step or multi-page forms, forms requiring external documents, and forms taking more than 2–3 minutes. Uncertainty increases cognitive load and abandonment.
- Verify: A multi-step form shows the full list of steps with the current one highlighted from step 1, and states before starting what documents are needed and whether progress can be saved.
- Verifiable by: visual
- Anti-pattern: A wizard that reveals one step at a time with no step count, so the user learns on step 4 that a tax ID document is required.

**Why.** Uncertainty about form length, required materials, and save-ability increases cognitive load and causes abandonment. Users who don't know how long a form will take spend mental energy on speculation rather than completion. Showing all steps upfront helps users form an accurate mental model and commit to starting with realistic expectations. For forms requiring external reference numbers or document uploads, listing requirements before the user begins prevents mid-form abandonment.

**Do.**
- For long forms: show estimated time, list required materials, indicate whether progress can be saved.
- Mark required fields with asterisk (*) and explain the convention; explicitly mark optional fields.
- Display a progress indicator showing completed and remaining steps.
- Show all steps upfront so users can form a mental model before starting.
- For complex enterprise forms (compliance, configuration), consider a pre-form requirements checklist that users can review before starting.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Completion time; Adoption & Retention: Signup completion rate, Account creation rate; Satisfaction & Perception: Ease-of-use score, Confidence rating; How to measure: A/B test multi-step forms with and without a progress indicator, measuring step-by-step completion rates and overall form completion rate. Track drop-off at each step to identify where users abandon and whether progress indicators reduce abandonment by setting expectations for remaining effort.

Sources: [Nielsen Norman Group — Web Form Design Top 10](https://www.nngroup.com/articles/web-form-design/)
Wireframe: https://files.catbox.moe/gy9qab.jpg
File: library/forms-and-input/UX-216-progress-communication-in-multi-step-forms.md

## UX-217 — Prioritized Multi-Error Display
- Score 4 · Forms & Input / Validation Error Hierarchy
- Tags: forms, error-handling
- Goals: Design Forms That Work; Design Effective Feedback & Error States
- Use when: Use when designing forms with multi-layer validation logic, especially in enterprise data entry tools where fields have format, logical, and cross-field consistency requirements.
- Verify: A field that fails several rules shows exactly one error message at a time, the format error before range or cross-field errors.
- Verifiable by: test
- Anti-pattern: Entering "abc" in a numeric field shows "Must be a number", "Must be between 1 and 100" and "Must be less than End" at the same time.

**Why.** When a single field can generate multiple validation errors (format, logical, and consistency errors), show only the most actionable error first rather than stacking all errors simultaneously. A format error ("Must be numeric") makes a logical comparison error moot — displaying both creates confusion and implies the user must fix multiple independent problems when fixing the first will resolve all. Progress through the error hierarchy as the user corrects issues. This approach reduces perceived form complexity and guides users through correction efficiently.

**Do.**
- Define an error priority hierarchy per field: format errors first (wrong data type or structure) → logical errors second (value out of acceptable range) → consistency errors last (cross-field dependencies violated).
- Only surface the highest-priority unresolved error per field at any time.
- As the user fixes each error, reveal the next.
- Never show more than one error per field simultaneously.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Error counts; Satisfaction & Perception: Ease-of-use score, CSAT; How to measure: Measure form completion rate and average time-to-resolution for multi-error states, comparing prioritized (critical errors first) versus unordered error displays. Track how many form re-submission attempts users make on average when errors are prioritized versus when they are displayed in field order.

Sources: [UX Stack Exchange / r/UXDesign](https://www.reddit.com/r/UXDesign/comments/1kllxg1/best_uxui_practices_for_displaying_multiple/)
Wireframe: https://files.catbox.moe/6kxnlx.jpg
File: library/forms-and-input/UX-217-prioritized-multi-error-display.md

## UX-218 — Save & Resume for Long Forms
- Score 4 · Forms & Input / Form Persistence
- Tags: forms
- Goals: Handle Complex Multi-Step Workflows; Design Forms That Work
- Use when: Use for any form expected to take more than 3 minutes to complete or that requires information users may need to look up.
- Verify: Reloading or reopening a form mid-way restores the last step with all previously entered values, and a "Last saved" timestamp is visible near the primary action.
- Verifiable by: test
- Anti-pattern: State kept only in component memory, so a tab refresh or session timeout after 10 minutes of typing returns an empty step 1.

**Why.** Allow users to save their progress and return to complete long forms later. Long enterprise forms — procurement requests, configuration wizards, compliance submissions — can take significant time and may require information users don't have immediately available. Without a save mechanism, users must restart from scratch, which dramatically increases abandonment and error rates as they rush to complete before losing work. Auto-save at minimum; provide explicit "Save and continue later" as best practice.

**Do.**
- Auto-save to server at each step completion, and implement localStorage fallback for network failures.
- Provide an explicit "Save and continue later" action.
- For authenticated users, send a resumption link by email.
- Show a persistent "Last saved [timestamp]" indicator near the primary action.
- On return, restore the user to their last position with all previously entered data intact.

**Measure.** Effectiveness: Completion rate, Task success rate; Efficiency: Time on task, Completion time; Adoption & Retention: Signup completion rate, Account creation rate; Revenue: Conversion rate; How to measure: Instrument the form with analytics to track save-and-resume usage rates and compare completion rates between users who use the feature versus those who abandon. A/B test long forms with and without save-and-resume on high-stakes applications (e.g., insurance, finance, enterprise onboarding) to measure conversion rate uplift.

Sources: [FormAssembly — Multi-Step Forms](https://www.formassembly.com/blog/multi-step-form-best-practices/)
Wireframe: https://files.catbox.moe/o85omi.jpg
File: library/forms-and-input/UX-218-save-and-resume-for-long-forms.md

## UX-219 — Parkinson's Law — Constrain Forms and Workflows to Reduce Task Inflation
- Score 3 · Forms & Input / Workflow efficiency and form design
- Tags: forms
- Goals: Design Forms That Work
- Use when: Apply to form design, checkout/onboarding flow length, and complex wizard configuration where open-ended time availability leads to over-deliberation on simple decisions.

**Why.** Parkinson's Law — originally formulated by British naval historian C. Northcote Parkinson in 1955 and subsequently validated across dozens of organizational psychology studies — states that work expands to fill the time available for its completion. Applied to interface design, this principle predicts that open-ended forms, unconstrained wizards, and unbounded configuration screens will generate over-deliberation, excessive iteration, and decision fatigue in proportion to their perceived complexity and open-endedness.

**Measure.** Effectiveness: Completion rate, Error rate; Efficiency: Time on task, Completion time; Revenue: Conversion rate; Adoption & Retention: Signup completion rate; How to measure: Track form completion rate and time-on-task in analytics before and after reducing optional fields or constraining steps; A/B test tighter vs. open-ended workflows to measure conversion rate lift.

Sources: [Laws of UX — Parkinson's Law](https://lawsofux.com/parkinsons-law/)
Wireframe: https://files.catbox.moe/l47seh.jpg
File: library/forms-and-input/UX-219-parkinson-s-law-constrain-forms-and-workflows-to-reduce-task.md
