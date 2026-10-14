---
id: LM-160
title: Write the description for the workspace's declared reader, outcome first
kind: practice
category: writing
score: 3
source_tier: interpretation
deviates_from: [LM-042]
sources:
  - "Linear Method, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | 2026-10"
  - "DNP, Guía de lenguaje claro para servidores públicos de Colombia | https://sigi.sic.gov.co/SIGI/files/mod_documentos/anexos/221/GUIA%20DEL%20LENGUAJE%20CLARO.pdf | 2015"
  - "digital.gov, Plain language principles | https://digital.gov/guides/plain-language/principles | 2026-10"
  - "Google, Technical Writing One: Documents | https://developers.google.com/tech-writing/one/documents | 2026-10"
  - "Nielsen Norman Group, Plain Language Is for Everyone, Even Experts | https://www.nngroup.com/articles/plain-language-experts/ | 2017-10-08"
  - "VMware Tanzu (Pivotal), Story Templates for Product Managers | https://blogs.vmware.com/tanzu/?p=2388 | 2019-04-24"
  - "OpenAI, Codex best practices | https://learn.chatgpt.com/guides/best-practices | 2026-10"
  - "Linear changelog, Coding sessions in Linear | https://linear.app/changelog/2026-06-11-coding-sessions | 2026-06-11"
use_when: writing or reviewing any issue description, designing issue templates, or when the client or a business reader reads the tracker or the reports built from it
verify: When linear-decisions.md declares issue.primary_reader business or external, every open issue with a description starts with what changes and for whom, says why it matters, lists "done when" as results the declared reader can observe, and states what is out of scope; without that line, LM-042 applies
verifiable_by: judgment
measured_by: [LM-139, LM-170]
tags: [issues, writing, reader, plain-language]
status: Active
---

## Why

An issue has more than one reader: the person who does the work, the teammates "who need to know" (Linear Method), and whoever reads the reports built from the tracker. Plain-language guidance agrees on one rule: name the reader first and write for them. The Colombian government guide asks "¿Quién es el lector principal? ¿Hay otros?" before writing and, when there are several readers, to write for the most interested group without leaving out what the others need. Google's technical writing course adds that readers may stop after the first paragraph, and that a good document "defines its non-scope". For mixed audiences, the specialist detail goes "in a different content layer" (NN/g).

Agent vendors ask for the same top layer from the other side: Codex wants "Goal, Context, Constraints, Done when"; Linear's coding sessions want "the desired outcome, scope, and constraints". The top of the issue serves both the business reader and the executor; the how is a different layer (LM-161, LM-163).

## Do

- This rule applies when `linear-decisions.md` declares `issue.primary_reader` as business or external. Without that line, LM-042 rules (descriptions are optional) and the five blocks are a suggestion, not a requirement.
- Write five short blocks, in this order: **What changes** (outcome, for whom) · **Why it matters** (what happens if not done, or who asked) · **Done when** (checkboxes the declared reader can observe) · **Out of scope** · **Depends on / Reference**.
- Use the reader's vocabulary. A technical term is fine if the reader needs it; explain it the first time.
- Write "Done when" first: if it cannot be written as observable results, it is not an issue yet.
- Keep it to one screen: the guard warns past 2 500 characters outside the checklist (`writing.description_max_chars` in the decisions file).

## Anti-pattern

A description that opens with file paths, a command or a hash, and buries the one sentence a business reader needs (what it blocks, who is exposed) in the second paragraph.

## Fix

Move the sentence that states the consequence to "Why it matters"; rewrite "Done when" as observable results; move paths, commands and data to the implementer's plan (LM-163) or to the linked document (LM-161).

## Evidence

- "give enough context so that teammates who need to know understand what work is being done" (Linear Method). Official-method.
- "The first rule of plain language is: write for your audience" (digital.gov); "A better document additionally defines its non-scope" (Google). External-method.
- Pivotal Labs wrote stories "in lay language" because stakeholders read them (VMware Tanzu, 2019). Independent company docs.
- The five blocks deviate from LM-042 on purpose for business and external readers, and only then.
- The block order and the "Done when first" step are Digitalizate's interpretation.
