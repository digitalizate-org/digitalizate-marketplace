#!/usr/bin/env python3
"""Genera un data/practices.json de prueba (sin Notion) para probar audit y build.

Reproduce los casos reales de la base: ID único, IDs repetidos entre el lote
de psicología y el agéntico, ficha sin ID, duplicado cercano, ficha con Status
Merged, el markdown de cuerpo tal como lo exporta export_notion.py, una ficha
con "Metrics Impact" anidado dentro del toggle "Sources & References" (130
fichas reales) y un documento largo sin la plantilla de secciones (las fichas
"Design - ..." sin ID).

Uso: python scripts/make_fixture.py   (sobrescribe data/practices.json)
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402

UX_BODY = """## Wireframe
![Wireframe: {title}](https://files.example.com/{slug}.jpg)
> 💡 **When to use:** {when}
## What & Why
{why}
---
## How to Implement
- Step one of the implementation
- Step two with a concrete example (e.g., 2GB free tier)
- Step three about what to avoid
---
## How to Present It
**To executives and leadership:**
- "This pattern directly impacts conversion. Users who encounter this friction point abandon at 3x the rate."
**To your design and engineering team:**
- "Think about what the user is feeling at this moment in the flow."
---
## Metrics Impact
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Time-on-task
**How to measure**: Track completion by variant.
<details><summary>Sources & References</summary>
- [Nielsen Norman Group – Article](https://www.nngroup.com/articles/example/)
- [Baymard – Research](https://baymard.com/blog/example)
</details>"""

UX_BODY_NESTED = """## Wireframe
![Wireframe: {title}](https://files.example.com/{slug}.jpg)
> 💡 **When to use:** {when}
## What & Why
{why}
---
## How to Implement
-
- Step one of the implementation
-
- Step two with a concrete example
---
## How to Present It
**To executives and leadership:**
- "This pattern directly impacts conversion. Users who encounter this friction point abandon at 3x the rate."
---
<details><summary>Sources & References</summary>
  ## Metrics Impact
  Applying this pattern can positively influence the following UX metrics:
  - **Efficiency**: Time-on-task, Error rate
  **How to measure**: Compare task time before and after the change.
    - [Nielsen Norman Group – Article](https://www.nngroup.com/articles/example/)
    - [Baymard – Research](https://baymard.com/blog/example)
</details>"""

DOC_BODY = """> 🧱 **Original synthesis.** Tokens are the contract between design and code.
## Core practice
Define tokens in three tiers: primitive, semantic and component. Keep the semantic tier as the public API.
## Recommended model
- **Primitive:** raw values (blue-500, 16px).
- **Semantic:** purpose (color-action-primary).
- **Component:** scoped overrides (button-bg).
## Implementation steps
1. Inventory existing values and collapse near-duplicates.
1. Name semantic tokens by purpose, never by appearance.
1. Generate platform outputs from one source with a build step.
## Quality checks
- Every semantic token maps to exactly one primitive per theme.
- No component uses a primitive directly.
## Source
- [Design Tokens Community Group](https://www.designtokens.org/)"""

AGP_BODY = """![Wireframe: {title}](https://raw.githubusercontent.com/example/wireframes/main/{slug}.png)
> 💡 **When to use:** Advanced AI systems with autonomy; Long-term agent deployments
> ⚠️ **Avoid when:** Simple, stateless models; Fully supervised systems
## What & Why
{why}
**Key insight:** Tamper-proof hooks + behavioral invariants = early detection
---
## How to Implement
1. **Embed Monitors** — Place tamper-proof hooks in model layers
1. **Baseline Behavior** — Establish normal activation patterns
1. **Detect Deviations** — Identify alignment faking
- **Do:** Use cryptographic signing for monitor integrity
- **Don't:** Rely solely on external output monitoring
---
## How to Present It
**To executives and leadership:**
- "Agent security failures are product-ending events."
---
<details><summary>Metrics & Use Cases</summary>
## Metrics Impact
Key metrics to track when applying this pattern:
- Alignment Stability (Goal consistency over time)
**Proven use cases:**
- Financial AI: Detecting hidden trading objectives
</details>"""


def entry(n, title, cat, sub, score, ctx, goals, tags, id_notion, body_tpl, status=None, created="2026-01-0"):
    body = body_tpl.format(title=title, slug=kitlib.slug(title), when=ctx, why=f"Why text for {title}. Second sentence with detail. Third sentence.")
    return {
        "page_id": f"00000000-0000-0000-0000-{n:012d}",
        "url": f"https://app.notion.com/p/{n:032d}",
        "created_time": f"{created}{n}T00:00:00.000Z",
        "last_edited_time": "2026-10-01T00:00:00.000Z",
        "title": title, "id_notion": id_notion, "category": cat, "subcategory": sub,
        "score": score, "context": ctx, "goals": goals, "tags": tags, "status": status,
        "verify": "", "verifiable_by": None, "anti_pattern": "",
        "props": {}, "sections": kitlib.split_sections(body), "body_md": body,
    }


def main() -> None:
    rows = [
        entry(1, "Visible Labels for Every Input", "Accessibility", "Forms", 5,
              "Apply to every form field, including search boxes and filters.",
              ["Design for Accessibility & Inclusion", "Design Forms That Work"], ["accessibility", "forms"], "UX-001", UX_BODY),
        entry(2, "Reciprocity Through Value-First Product Design", "Behavioral Psychology", "Reciprocity", 4,
              "Apply when designing freemium funnels or free trial flows.",
              ["Build Trust & Reduce User Anxiety", "Leverage Psychology to Guide User Behavior"], ["behavioral-psychology", "conversion"], "UX-357", UX_BODY),
        entry(3, "Abductive Reasoning (ABR)", "Agentic Patterns", "Reasoning", 3,
              "Use when: Diagnostic agents with incomplete data.", ["Reduce Learning Curve for Complex Tools"], ["ai-patterns"], "UX-357", AGP_BODY),
        entry(4, "Parallelism: Group Elements Sharing Directional Alignment", "Gestalt Principles", "Parallelism", 4,
              "Apply when arranging lists, cards or toolbars.", ["Improve Readability & Visual Clarity"], ["gestalt-principles"], "UX-500", UX_BODY_NESTED),
        entry(5, "Intrinsic Alignment Pattern (IAP)", "Agentic Patterns", "Security & Privacy", 3,
              "Use when: Advanced AI systems with autonomy.", ["Build Trust & Reduce User Anxiety"], ["ai-patterns"], "UX-500", AGP_BODY),
        entry(6, "Design - Token Architecture", "Design Systems & Tokens", "Tokens", 5,
              "Apply when starting or refactoring a design system.", ["Design a Consistent System at Scale"], ["design-system"], None, DOC_BODY, created="2026-09-0"),
        entry(7, "Inline Validation on Blur", "Forms & Input", "Validation", 5,
              "Apply to fields with format rules (email, phone, card).", ["Design Forms That Work", "Design Effective Feedback & Error States"], ["forms", "error-handling"], "UX-118", UX_BODY),
        entry(8, "Inline Validation on Blur for Formatted Fields", "Forms & Input", "Validation", 4,
              "Apply to fields with format rules such as email or phone.", ["Design Forms That Work"], ["forms"], "UX-213", UX_BODY),
        entry(9, "Old Duplicate Entry", "Forms & Input", "Validation", 2,
              "Merged into UX-118.", ["Design Forms That Work"], ["forms"], "UX-219", UX_BODY, status="Merged"),
    ]
    kitlib.save_json(kitlib.PRACTICES_PATH, rows)
    print(f"Fixture: {len(rows)} fichas en {kitlib.PRACTICES_PATH}")


if __name__ == "__main__":
    main()
