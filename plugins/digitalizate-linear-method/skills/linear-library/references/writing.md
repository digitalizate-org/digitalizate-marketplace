# writing (references)

Each entry is the full text of its library file. Cite by ID.

## LM-160 Write the description for the workspace's declared reader, outcome first

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: judgment
Deviates from: LM-042
Use when: writing or reviewing any issue description, designing issue templates, or when the client or a business reader reads the tracker or the reports built from it
Verify: When linear-decisions.md declares issue.primary_reader business or external, every open issue with a description starts with what changes and for whom, says why it matters, lists "done when" as results the declared reader can observe, and states what is out of scope; without that line, LM-042 applies
Measured by: LM-139, LM-170
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); DNP, Guía de lenguaje claro para servidores públicos de Colombia (https://sigi.sic.gov.co/SIGI/files/mod_documentos/anexos/221/GUIA%20DEL%20LENGUAJE%20CLARO.pdf, 2015); digital.gov, Plain language principles (https://digital.gov/guides/plain-language/principles, 2026-10); Google, Technical Writing One: Documents (https://developers.google.com/tech-writing/one/documents, 2026-10); Nielsen Norman Group, Plain Language Is for Everyone, Even Experts (https://www.nngroup.com/articles/plain-language-experts/, 2017-10-08); VMware Tanzu (Pivotal), Story Templates for Product Managers (https://blogs.vmware.com/tanzu/?p=2388, 2019-04-24); OpenAI, Codex best practices (https://learn.chatgpt.com/guides/best-practices, 2026-10); Linear changelog, Coding sessions in Linear (https://linear.app/changelog/2026-06-11-coding-sessions, 2026-06-11)
File: library/writing/LM-160-write-for-the-declared-reader.md

### Why

An issue has more than one reader: the person who does the work, the teammates "who need to know" (Linear Method), and whoever reads the reports built from the tracker. Plain-language guidance agrees on one rule: name the reader first and write for them. The Colombian government guide asks "¿Quién es el lector principal? ¿Hay otros?" before writing and, when there are several readers, to write for the most interested group without leaving out what the others need. Google's technical writing course adds that readers may stop after the first paragraph, and that a good document "defines its non-scope". For mixed audiences, the specialist detail goes "in a different content layer" (NN/g).

Agent vendors ask for the same top layer from the other side: Codex wants "Goal, Context, Constraints, Done when"; Linear's coding sessions want "the desired outcome, scope, and constraints". The top of the issue serves both the business reader and the executor; the how is a different layer (LM-161, LM-163).

### Do

- This rule applies when `linear-decisions.md` declares `issue.primary_reader` as business or external. Without that line, LM-042 rules (descriptions are optional) and the five blocks are a suggestion, not a requirement.
- Write five short blocks, in this order: **What changes** (outcome, for whom) · **Why it matters** (what happens if not done, or who asked) · **Done when** (checkboxes the declared reader can observe) · **Out of scope** · **Depends on / Reference**.
- Use the reader's vocabulary. A technical term is fine if the reader needs it; explain it the first time.
- Write "Done when" first: if it cannot be written as observable results, it is not an issue yet.
- Keep it to one screen: the guard warns past 2 500 characters outside the checklist (`writing.description_max_chars` in the decisions file).

### Anti-pattern

A description that opens with file paths, a command or a hash, and buries the one sentence a business reader needs (what it blocks, who is exposed) in the second paragraph.

### Fix

Move the sentence that states the consequence to "Why it matters"; rewrite "Done when" as observable results; move paths, commands and data to the implementer's plan (LM-163) or to the linked document (LM-161).

### Evidence

- "give enough context so that teammates who need to know understand what work is being done" (Linear Method). Official-method.
- "The first rule of plain language is: write for your audience" (digital.gov); "A better document additionally defines its non-scope" (Google). External-method.
- Pivotal Labs wrote stories "in lay language" because stakeholders read them (VMware Tanzu, 2019). Independent company docs.
- The five blocks deviate from LM-042 on purpose for business and external readers, and only then.
- The block order and the "Done when first" step are Digitalizate's interpretation.

## LM-161 Keep the technical trail where it is maintained; the issue links it

Kind: practice · Score: 4 · Tier: external-method · Verifiable by: judgment
Use when: an issue comes from an audit, an investigation or a diagnosis already written somewhere else, or a description carries tables, commands or long procedures
Verify: Open issues link the document, PR or comment that holds the diagnosis and the procedure, and do not copy it or its data tables; when the declared reader is business or external, descriptions also carry no file paths, commands or code blocks (except a log or stack trace pasted in a bug)
Measured by: LM-139, LM-170
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); GitLab handbook, Product development flow (https://handbook.gitlab.com/handbook/product-development/how-we-work/product-development-flow/, 2026-10); Malte Ubl, Design Docs at Google (https://www.industrialempathy.com/posts/design-docs-at-google/, 2020-07-06); Cursor docs, Rules (https://cursor.com/docs/context/rules, 2026-10); Factory docs, AGENTS.md (https://docs.factory.com/cli/configuration/agents-md, 2026-10)
File: library/writing/LM-161-link-the-technical-trail.md

### Why

A diagnosis copied into an issue has two copies that drift: the repo document gets corrected, the issue does not. Copying also turns the issue into a runbook that the business reader cannot read (LM-153). Google's design docs keep code and schemas out ("should rarely contain code", avoid "copy-pasting complete schema definitions"); Cursor's rules say "Reference files instead of copying their contents"; Factory says "Do not paste long run books". The Linear Method already allows "links to deeper discussions" and asks to "Write only as much as you need".

### Do

| Piece | Where |
|---|---|
| Diagnosis from an audit or investigation | A versioned document in the client's repo; the issue links it |
| Root-cause hypothesis of a bug | The implementer's comment, marked as a hypothesis (LM-044) |
| Implementation plan and verification commands | The "Technical plan" comment or the PR description (LM-163) |
| Repo conventions, build and test | `AGENTS.md`, `CLAUDE.md`, rules or agent guidance (LM-094) |
| Data (IP tables, account lists) | The repo document; the issue says how many and what is decided |
| Closing evidence | The linked PR, a screenshot, the deploy link (LM-048) |

- Credentials never go in the tracker. Infrastructure identifiers (IPs, fingerprints, key names) stay in the linked document unless the declared reader is technical.
- When the declared reader is business or external, the description carries no file paths, commands or code blocks (except a log or stack trace pasted in a bug); they live in the linked document or the plan. For a technical reader they may appear, but never copy a document or a table.

### Anti-pattern

An issue with a "Reference" section that links the audit document and, above it, repeats half of that document.

### Fix

Keep the outcome, the consequence and "Done when" in the issue; delete what the linked document already says; move what is not in the document into it.

### Evidence

- GitLab keeps the description as "the single source of truth" and fills technical sections "during the problem validation or breakdown phase" (GitLab handbook and issue templates). Independent company docs.
- Cursor and Factory docs above. External-method.
- The placement table is Digitalizate's interpretation.

## LM-163 The implementer adds the technical plan when taking the issue

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: judgment
Use when: an issue is delegated to an agent, will take more than a day, or was written by someone who will not implement it
Verify: Delegated issues and issues of more than a day have a plan (approach, what it touches, verification, risks) in the PR description or, when there is no PR, in a comment titled "Technical plan"
Sources: Linear Method, Write issues not user stories (https://linear.app/method/write-issues-not-user-stories, 2026-10); Linear docs, Assign and delegate issues (https://linear.app/docs/assigning-issues, 2026-10); OpenAI, Codex best practices (https://learn.chatgpt.com/guides/best-practices, 2026-10); Shape Up, Hand Over Responsibility (https://basecamp.com/shapeup/3.1-chapter-10, 2019); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/writing/LM-163-implementer-writes-the-plan.md

### Why

The Linear Method keeps the solution with the person who knows the system: "Let the assignee come up with the solution and then rewrite the issue as a task." With agents, two things change. The writer is often not the implementer (agents now author a large share of new issues (LM-095)), and the implementer may be an agent that works better with a plan ("ask Codex to plan before it starts coding"; Linear lets prompt templates ask for "a detailed plan before writing any code"). Rewriting the description would erase the record the business reader relies on; a plan in the PR or a comment keeps both. Requiring a plan on every task, including tasks of an hour, is busy work, and the method says "Say no to busy work".

### Do

- The implementer (human or agent) writes the plan first in the PR description: approach, files or systems it touches, the verification it will run, risks, and a link to the diagnosis if one exists.
- When there is no PR, the plan goes in a comment titled "Technical plan".
- If the issue does not hold (scope wrong, outcome unclear), the implementer says so in a comment and asks; it does not rewrite the scope.
- Do not ask for a plan on tasks of an hour: that is busy work.

### Anti-pattern

The writer prescribes the plan in the description, and the implementer follows it without checking (or rewrites the whole description and the client's record disappears).

### Fix

Move the prescription to a plan comment; ask the implementer to confirm or replace it before starting.

### Evidence

- Linear Method quote above. Official-method: what the method asks is "rewrite the issue as a task". The location and content of the plan are Digitalizate's interpretation.
- Codex and Linear delegation docs. External-method and official-docs.
- Shape Up: "The team is going to define their own tasks and their own approach to the work". External-method.
- The PR description first and the comment as fallback are Digitalizate's interpretation; Langfuse uses comments for "durable, on-topic discussion and decisions".

## LM-165 One deliverable is one issue with a checklist; split only for another assignee, another gate or a separate delivery

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: judgment
Use when: deciding between a checklist, sub-issues, sibling issues or a project; reviewing a parent with many children; turning a plan or requirement into issues
Verify: Each sub-issue or sibling differs from the rest in assignee, gate (a third party, another issue, a date or window) or separately shipped verification; parts that share all three are checklist items; sets that span more than one cycle or have a target date are projects
Measured by: LM-171
Sources: Linear docs, Parent and sub-issues (https://linear.app/docs/parent-and-sub-issues, 2026-10); Linear docs, Project milestones (https://linear.app/docs/project-milestones, 2026-10); GitHub docs, About task lists (https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists, 2026-10); Shape Up, Map the Scopes; Show Progress (https://basecamp.com/shapeup/3.3-chapter-12, 2019); Lawrence and Green, The Humanizing Work Guide to Splitting User Stories (https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/, 2026-10); Bill Wake, INVEST in Good Stories, and SMART Tasks (https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/, 2003-08-17); Don Reinertsen, Is One-Piece Flow the Lower Limit for Product Developers? (https://www.goodreads.com/author_blog_posts/5042135, 2012-11-01)
File: library/writing/LM-165-checklist-by-default-three-split-reasons.md

### Why

Trackers place the checklist as the starting form. Linear proposes sub-issues when work is "too large to be a single issue but too small to be a project" and "for splitting up work shared across teammates", and converts a checklist into sub-issues with one shortcut; GitHub promotes a checkbox to an issue "If a task requires further tracking or discussion". Shape Up keeps tasks inside a scope and warns that counting tasks hides progress: "to-do lists actually grow as the team makes progress". Splitting by step of the work produces pieces that cannot be verified alone: "the most obvious split—one step at a time from beginning to end—is the wrong way to go" (Lawrence). Each issue also has a fixed cost (triage, status, the weekly update); Reinertsen frames batch size as a trade-off "between holding cost and transaction cost".

### Do

- Default: one deliverable, one issue, its parts as checkboxes.
- Make a part its own issue only for one of three reasons:
  - **Another assignee** answers for it.
  - **Another gate**: it waits on something the rest does not (a third party, another issue, a date or a window).
  - **A separate delivery**: it can be verified and shipped alone, and shipping it first has value (a vertical slice).
- Size is the trigger (two or three days, LM-046); the three reasons say where to cut. When an issue exceeds two or three days, look for a slice that ships alone (business rule, data variation, simple before complex, defer performance); if none exists, cut the scope and keep the cut part as its own issue or out.
- A set that spans more than one cycle or has its own target date is a project; stages with a different definition of done are milestones.
- A third party that has to answer is a gate, not an assignee.

### Anti-pattern

A requirement written as a parent with one sub-issue per field, screen or step, all created in seconds by the same writer, all with the same assignee and the same delivery.

### Fix

Fold the children into the parent as a checklist; keep as issues only the parts that pass one of the three reasons; cancel the rest with a comment pointing to the parent.

### Evidence

- Linear docs (sub-issues, milestones). Official-docs.
- GitHub task lists, Shape Up, Lawrence, Wake, Reinertsen. External-method.
- The closed list of three reasons is Digitalizate's interpretation of those sources (hence the tier). Evidence on the cost of too many issues in teams of one to three people is weak: the only study found (Baysal et al., FSE 2014) covers large open-source projects.

## LM-166 Turn a report into issues by action, gate and verification, and propose the partition first

Kind: practice · Score: 3 · Tier: interpretation · Verifiable by: judgment
Use when: an audit, a pentest, an investigation, meeting notes or a plan has to become issues, especially when an agent creates them
Verify: Issues created from one source group its findings by action, assignee, gate and verification; no issue maps one-to-one to a finding, field, file or section; the partition was proposed and accepted before the issues were created
Measured by: LM-171
Sources: Shape Up, Map the Scopes (https://basecamp.com/shapeup/3.3-chapter-12, 2019); Endor Labs, Jira integration (https://docs.endorlabs.com/integrations/jira/jira-with-endor-labs.md, 2026-10); Eric Bang, Pentest report remediation guide (Decryption Digest) (https://www.decryptiondigest.com/blog/pentest-report-remediation-guide, 2026-05-20); Langfuse handbook, Using Linear (https://langfuse.com/handbook/tools-and-processes/using-linear, 2026)
File: library/writing/LM-166-report-to-issues-by-action.md

### Why

A report is organised for reading (one finding per section); work is organised by who does what, what waits on what and how it is checked. Tools that push findings into trackers create "One ticket … per finding" by default, and one of them warns that this "can produce a high volume of Jira tickets" and offers grouping instead. A remediation guide for pentest reports says "Do not create Jira tickets for every finding the moment you get the report. Triage first." Shape Up groups work by how parts depend on each other: "Scopes arise from interdependencies."

### Do

1. List the **actions** in the report, not the findings. A finding with no action stays in the report.
2. For each action: who does it, who else has to answer, what it waits on, how it is verified.
3. Group actions that share assignee, gate and verification (LM-165).
4. Order the groups by gates. If the report already has an ordered sequence with gates, use it.
5. More than one cycle or a target date: a project, with the report's business part as its spec.
6. Propose the partition (titles, what each absorbs, the split reason of each) and create the issues only after a human accepts it (LM-095).

### Anti-pattern

A parent whose description says "each finding is a sub-issue", with siblings that overlap because several findings share one remedy.

### Fix

Re-partition with steps 1 to 4; turn the parent into the project spec when the set spans more than a cycle.

### Evidence

- Endor Labs (vendor) and the remediation guide (practitioner). Evidence.
- Shape Up. External-method.
- The procedure is Digitalizate's interpretation; it was tested on one real case only.

## LM-168 Templates ask for outcome, impact and acceptance; technical fields are optional, and absent for business readers

Kind: practice · Score: 3 · Tier: evidence · Verifiable by: judgment
Use when: creating or reviewing issue templates for a team, or when issues written from a template come out technical
Verify: No template requires a repository, file, line, command or PR field; with a business or external reader no template asks for them at all; task templates ask for outcome, why, done-when and out of scope; bug templates ask for the report, steps, expected versus observed, impact and workaround
Sources: GitLab, issue templates (Bug.md, Feature proposal - detailed.md) (https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/issue_templates, 2026-10); GitHub docs, Syntax for issue forms (https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms, 2026-10); Joel Spolsky, Painless Bug Tracking (https://www.joelonsoftware.com/2000/11/08/painless-bug-tracking/, 2000-11-08); The Glimpse, Building Product at Linear with Nan Yu (https://www.theglimpse.co/p/nan-yu, 2023-04-11); Linear docs, Issue templates (https://linear.app/docs/issue-templates, 2026-10); Mozilla, Bug writing guidelines (https://bugzilla.mozilla.org/page.cgi?id=bug-writing.html, 2026-10)
File: library/writing/LM-168-templates-ask-for-outcome-not-file-or-command.md

### Why

A template field gets filled. A field that asks for "evidence: file, line or command" or for "verification (command, screenshot or test)" produces technical issues even when the reader is not technical. None of the vendor templates reviewed (GitHub, GitLab, Mozilla's guidelines) has a required file or line field; GitLab's only request for "the line of code that might be responsible" sits in an optional "Possible fixes" section, and its feature template leaves technical sections for "the problem validation or breakdown phase". Spolsky: "Avoid the temptation to add new fields". Nan Yu on required fields that do not apply: people put in "some kinda placeholder, meaningless value … And then your data quality just goes down".

### Do

| Type | Blocks |
|---|---|
| Task | What changes · Why it matters · Done when · Out of scope · Depends on · Reference |
| Bug | What is reported (quote and source) · How it shows (steps, expected, observed) · Impact · Workaround · Done when · Out of scope |
| Client request | The request in their words and source · Why they ask · Done when · In / Out |
| Support | What is reported and source · How it shows · Impact · Urgency · Workaround |
| Exploration | Question · Deliverable · Time box (LM-049) |

- Repo and verification belong to the implementer's plan (LM-163). The PR is linked by the git integration or by whoever opens it.
- A log or stack trace pasted in a bug is evidence, not a technical field.
- With a technical reader, repository, file or command fields may exist but stay optional.
- Keep templates optional to fill (Linear's standard templates), except the minimum a form template must require.

### Anti-pattern

A task template with "Repo or deliverable / Verification (command, screenshot or test) / PR", or a debt template with "Evidence: file, line or command".

### Fix

Replace those fields with the blocks above; move repo, command and PR to the plan comment and the integration.

### Evidence

- GitHub and GitLab templates; Spolsky. Independent practice.
- Nan Yu interview. Linear-internal.
- The block sets are Digitalizate's interpretation.

