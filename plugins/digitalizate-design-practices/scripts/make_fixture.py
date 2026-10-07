#!/usr/bin/env python3
"""Genera una librería de prueba en library/ para probar audit y build sin la librería real.

Solo escribe si library/ no existe o está vacía; en el repositorio real usa
tests/run_fixture.sh, que corre todo en una copia temporal.

Casos cubiertos: ficha UX normal con fuentes, ficha con campos de verificación,
duplicado cercano, ficha con status Merged (el build la omite), ficha agéntica
con Avoid when y Do/Don't, documento largo sin plantilla (secciones propias y
pasos de implementación), títulos con dos puntos y comillas en el front matter.
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402

WHY = "Why text for {title}. Second sentence with detail. Third sentence."
UX_BODY = """## Why
{why}

## How to implement
- Step one of the implementation
- Step two with a concrete example (e.g., 2GB free tier)
- Step three about what to avoid

## Metrics
Applying this pattern can positively influence the following UX metrics:
- **Effectiveness**: Task success rate, Time-on-task
**How to measure**: Track completion by variant.

## Sources
- [Nielsen Norman Group – Article](https://www.nngroup.com/articles/example/)
- [Baymard – Research](https://baymard.com/blog/example)"""

AGP_BODY = """## Why
{why}
**Key insight:** Tamper-proof hooks + behavioral invariants = early detection

## How to implement
1. **Embed Monitors** — Place tamper-proof hooks in model layers
1. **Baseline Behavior** — Establish normal activation patterns
1. **Detect Deviations** — Identify alignment faking
- **Do:** Use cryptographic signing for monitor integrity
- **Don't:** Rely solely on external output monitoring

## Metrics
Key metrics to track when applying this pattern:
- Alignment Stability (Goal consistency over time)
**Proven use cases:**
- Financial AI: Detecting hidden trading objectives"""

DOC_BODY = """## Core practice
Define tokens in three tiers: primitive, semantic and component. Keep the semantic tier as the public API.

## Recommended model
- **Primitive:** raw values (blue-500, 16px).
- **Semantic:** purpose (color-action-primary).
- **Component:** scoped overrides (button-bg).

## How to implement
1. Inventory existing values and collapse near-duplicates.
1. Name semantic tokens by purpose, never by appearance.
1. Generate platform outputs from one source with a build step.

## Quality checks
- Every semantic token maps to exactly one primitive per theme.
- No component uses a primitive directly.

## Sources
- [Design Tokens Community Group](https://www.designtokens.org/)"""


def entry(pid, title, cat, sub, score, ctx, goals, tags, body, **extra):
    p = {
        "id": pid, "title": title, "category": cat, "subcategory": sub, "score": score, "context": ctx,
        "goals": goals, "tags": tags, "wireframe": f"https://files.example.com/{kitlib.slug(title)}.jpg",
        "body": body.format(title=title, why=WHY.format(title=title)),
    }
    p.update(extra)
    return p


def main() -> None:
    lib = kitlib.LIBRARY_DIR
    if lib.exists() and any(lib.rglob("*.md")):
        raise SystemExit(f"{lib} ya tiene fichas. Para probar con el fixture usa tests/run_fixture.sh (corre en una copia temporal).")
    rows = [
        entry("UX-001", "Visible Labels for Every Input", "Accessibility", "Forms", 5,
              "Apply to every form field, including search boxes and filters.",
              ["Design for Accessibility & Inclusion", "Design Forms That Work"], ["accessibility", "forms"], UX_BODY),
        entry("UX-357", "Reciprocity Through Value-First Product Design", "Behavioral Psychology", "Reciprocity", 4,
              "Apply when designing freemium funnels or free trial flows.",
              ["Build Trust & Reduce User Anxiety", "Leverage Psychology to Guide User Behavior"], ["behavioral-psychology", "conversion"], UX_BODY),
        entry("AGP-007", "Abductive Reasoning (ABR)", "Agentic Patterns", "Reasoning", 3,
              "Diagnostic agents with incomplete data.", ["Reduce Learning Curve for Complex Tools"], ["ai-patterns"], AGP_BODY,
              avoid_when="Simple, stateless models; Fully supervised systems"),
        entry("UX-500", "Parallelism: Group Elements Sharing Directional Alignment", "Gestalt Principles", "Parallelism", 4,
              "Apply when arranging lists, cards or toolbars.", ["Improve Readability & Visual Clarity"], ["gestalt-principles"], UX_BODY),
        entry("AGP-100", "Intrinsic Alignment Pattern (IAP)", "Agentic Patterns", "Security & Privacy", 3,
              "Advanced AI systems with autonomy.", ["Build Trust & Reduce User Anxiety"], ["ai-patterns"], AGP_BODY,
              avoid_when="Simple, stateless models"),
        entry("UX-644", "Design - Token Architecture", "Design Systems & Tokens", "Tokens", 5,
              "Apply when starting or refactoring a design system.", ["Design a Consistent System at Scale"], ["design-system"], DOC_BODY,
              wireframe=None),
        entry("UX-118", "Inline Validation on Blur", "Forms & Input", "Validation", 5,
              "Apply to fields with format rules (email, phone, card).",
              ["Design Forms That Work", "Design Effective Feedback & Error States"], ["forms", "error-handling"], UX_BODY,
              verify="Typing a partial value shows no error until the field loses focus.", verifiable_by="test",
              anti_pattern='An onChange validator that shows "Invalid email" after the first character.'),
        entry("UX-213", "Inline Validation on Blur for Formatted Fields", "Forms & Input", "Validation", 4,
              "Apply to fields with format rules such as email or phone.", ["Design Forms That Work"], ["forms"], UX_BODY),
        entry("UX-219", "Old Duplicate Entry", "Forms & Input", "Validation", 2,
              "Merged into UX-118.", ["Design Forms That Work"], ["forms"], UX_BODY, status="Merged"),
    ]
    for p in rows:
        kitlib.write_practice(p)
    print(f"Fixture: {len(rows)} fichas en {lib}")


if __name__ == "__main__":
    main()
