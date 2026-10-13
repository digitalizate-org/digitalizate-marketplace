#!/usr/bin/env python3
"""Audita library/ y escribe reports/audit.md y reports/duplicates.md.

Qué revisa:
  1. Validación: IDs inválidos o repetidos, prefijo ajeno al grupo, carpeta, score.
  2. Duplicados cercanos (títulos muy parecidos dentro del mismo grupo).
  3. Texto repetido entre fichas en "Why".
  4. Fichas sin "How to implement" o sin "Why".
  5. Resumen por categoría.

Uso:
  python3 scripts/audit_library.py [--threshold 0.82]

No modifica la librería.
"""
from __future__ import annotations

import argparse
import hashlib
import re
import sys
from collections import defaultdict
from difflib import SequenceMatcher
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402

STOP = {"the", "a", "an", "of", "for", "and", "to", "in", "on", "with", "&", "vs", "or", "by", "your", "users", "user", "design"}


def norm_title(t: str) -> str:
    t = re.sub(r"\(.*?\)", "", t or "").lower()
    words = [w for w in re.findall(r"[a-z0-9]+", t) if w not in STOP]
    return " ".join(words)


def similarity(a: str, b: str) -> float:
    """Máximo entre similitud de secuencia y contención de tokens (≥3 tokens compartidos).

    La contención detecta "Inline validation on blur" dentro de "Inline validation on
    blur for formatted fields", que la similitud de secuencia deja pasar.
    """
    ratio = SequenceMatcher(None, a, b).ratio()
    ta, tb = set(a.split()), set(b.split())
    shared = len(ta & tb)
    if shared >= 3 and ta and tb:
        containment = shared / min(len(ta), len(tb))
        return max(ratio, containment)
    return ratio


def find_duplicates(practices: list[dict], cfg: dict, threshold: float) -> list[dict]:
    by_group: dict[str, list[dict]] = defaultdict(list)
    for p in practices:
        by_group[kitlib.group_of(p.get("category"), cfg)].append(p)
    pairs = []
    for group, items in by_group.items():
        normed = [(p, norm_title(p["title"])) for p in items]
        for i in range(len(normed)):
            pi, ni = normed[i]
            if not ni:
                continue
            for j in range(i + 1, len(normed)):
                pj, nj = normed[j]
                if not nj:
                    continue
                if not set(ni.split()) & set(nj.split()):
                    continue
                s = similarity(ni, nj)
                if s >= threshold:
                    ctx = similarity((pi.get("context") or "").lower(), (pj.get("context") or "").lower())
                    pairs.append({"group": group, "a": pi, "b": pj, "title_sim": s, "context_sim": ctx})
    pairs.sort(key=lambda x: (-x["title_sim"], -x["context_sim"]))
    return pairs


def boilerplate(practices: list[dict], section: str, min_count: int = 3):
    buckets: dict[str, list[dict]] = defaultdict(list)
    for p in practices:
        text = (p.get("sections") or {}).get(section) or ""
        text = re.sub(r"\s+", " ", text).strip().lower()
        if len(text) < 40:
            continue
        buckets[hashlib.sha1(text.encode()).hexdigest()].append(p)
    return sorted((v for v in buckets.values() if len(v) >= min_count), key=len, reverse=True)


def label(p: dict) -> str:
    return f"{p.get('id') or '—'} {p['title']}"


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--threshold", type=float, default=None)
    args = ap.parse_args()

    cfg = kitlib.load_config()
    threshold = args.threshold or cfg.get("duplicate_similarity", 0.82)
    practices = kitlib.load_library()
    kitlib.REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    errors = kitlib.validate_library(practices, cfg)
    dups = find_duplicates(practices, cfg, threshold)
    bp_why = boilerplate(practices, "what_why")
    no_impl = [p for p in practices if not (p.get("sections") or {}).get("how_to_implement")]
    no_why = [p for p in practices if not (p.get("sections") or {}).get("what_why")]
    no_sources = [p for p in practices if not (p.get("sections") or {}).get("sources")]
    cats: dict[str, list[dict]] = defaultdict(list)
    for p in practices:
        cats[p.get("category") or "(sin categoría)"].append(p)

    out = ["# Auditoría de la librería\n",
           f"Fichas: {len(practices)} · categorías: {len(cats)} · errores de validación: {len(errors)} · "
           f"duplicados cercanos: {len(dups)} · sin How to implement: {len(no_impl)} · sin Why: {len(no_why)} · "
           f"sin fuentes: {len(no_sources)}\n",
           "## 1. Validación\n"]
    if errors:
        out.append("El build se detiene mientras existan estos errores:\n")
        out += [f"- {e}" for e in errors]
    else:
        out.append("Sin errores: IDs únicos con el prefijo de su grupo, carpetas y scores correctos.")
    out.append("")

    out.append("## 2. Duplicados cercanos\n")
    out.append(f"{len(dups)} pares con similitud de título ≥ {threshold}. Detalle en reports/duplicates.md. "
               "Un par es candidato a fusión cuando además la similitud de Context es alta o comparten subcategoría.\n")

    out.append("## 3. Texto repetido\n")
    if bp_why:
        out.append(f"\"Why\" repetido en {sum(len(b) for b in bp_why)} fichas ({len(bp_why)} bloques):")
        for b in bp_why[:10]:
            out.append("- " + "; ".join(label(p) for p in b[:6]))
    else:
        out.append("\"Why\": sin bloques repetidos.")
    out.append("")

    out.append("## 4. Secciones faltantes\n")
    out.append(f"### Sin How to implement ({len(no_impl)})\n")
    out += [f"- {label(p)} ({p.get('category')}) `{p['path']}`" for p in no_impl]
    out.append(f"\n### Sin Why ({len(no_why)})\n")
    out += [f"- {label(p)} ({p.get('category')}) `{p['path']}`" for p in no_why]
    out.append("")

    out.append("## 5. Categorías\n")
    out.append("| Categoría | Grupo | Fichas | Score medio | ≥4 | Subcategorías | Con Verify |\n|---|---|---|---|---|---|---|")
    for cat, items in sorted(cats.items(), key=lambda kv: -len(kv[1])):
        scores = [p.get("score") or 0 for p in items]
        subs = len({p.get("subcategory") for p in items if p.get("subcategory")})
        out.append(f"| {cat} | {kitlib.group_of(cat, cfg)} | {len(items)} | {sum(scores)/len(scores):.2f} | "
                   f"{sum(1 for s in scores if s >= 4)} | {subs} | {sum(1 for p in items if p.get('verify'))} |")
    (kitlib.REPORTS_DIR / "audit.md").write_text("\n".join(out) + "\n", encoding="utf-8")

    d = ["# Duplicados cercanos\n",
         "Revisar a mano. Para fusionar: deja una ficha, mueve lo que aporte la otra y pon `status: \"Merged\"` "
         "en la sobrante (el build omite Proposed, Merged y Deprecated).\n"]
    for pair in dups:
        a, b = pair["a"], pair["b"]
        d.append(f"- [{pair['title_sim']:.2f} título / {pair['context_sim']:.2f} contexto] "
                 f"**{label(a)}** ({a.get('category')}) ↔ **{label(b)}** ({b.get('category')})")
        d.append(f"  - `{a['path']}`\n  - `{b['path']}`")
    (kitlib.REPORTS_DIR / "duplicates.md").write_text("\n".join(d) + "\n", encoding="utf-8")

    print("\n".join(out[:2]))
    print(f"Reportes: {kitlib.REPORTS_DIR / 'audit.md'} y {kitlib.REPORTS_DIR / 'duplicates.md'}")
    if errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
