#!/usr/bin/env python3
"""Audita data/practices.json y escribe reports/audit.md y reports/duplicates.md.

Qué revisa:
  1. IDs repetidos y fichas sin ID, con el ID canónico que propondrá el build.
  2. Duplicados cercanos (títulos muy parecidos dentro del mismo grupo).
  3. Texto plantilla repetido entre fichas (p. ej. "How to Present It").
  4. Fichas sin "How to Implement" o sin "What & Why".
  5. Resumen por categoría.

Uso:
  python scripts/audit_library.py [--threshold 0.82]

No modifica Notion ni data/id_map.json; para eso está build_skills.py.
"""
from __future__ import annotations

import argparse
import copy
import hashlib
import re
import sys
from collections import Counter, defaultdict
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
                # filtro rápido: comparten al menos una palabra
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


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--threshold", type=float, default=None)
    args = ap.parse_args()

    cfg = kitlib.load_config()
    threshold = args.threshold or cfg.get("duplicate_similarity", 0.82)
    practices = kitlib.load_practices()
    kitlib.REPORTS_DIR.mkdir(parents=True, exist_ok=True)

    # --- 1. IDs ---------------------------------------------------------
    id_map_preview = copy.deepcopy(kitlib.load_json(kitlib.ID_MAP_PATH, {}))
    sim = copy.deepcopy(practices)
    changes = kitlib.assign_ids(sim, id_map_preview, cfg)
    collisions = Counter(p["id_notion"] for p in practices if p.get("id_notion"))
    collided = sorted(k for k, v in collisions.items() if v > 1)
    missing = [p for p in practices if not p.get("id_notion")]

    # --- 2. duplicados --------------------------------------------------
    dups = find_duplicates(practices, cfg, threshold)

    # --- 3. boilerplate -------------------------------------------------
    bp_present = boilerplate(practices, "how_to_present")
    bp_why = boilerplate(practices, "what_why")

    # --- 4. secciones faltantes ----------------------------------------
    no_impl = [p for p in practices if not (p.get("sections") or {}).get("how_to_implement")]
    no_why = [p for p in practices if not (p.get("sections") or {}).get("what_why")]
    no_body = [p for p in practices if not (p.get("body_md") or "").strip()]

    # --- 5. categorías --------------------------------------------------
    cats: dict[str, list[dict]] = defaultdict(list)
    for p in practices:
        cats[p.get("category") or "(sin categoría)"].append(p)

    out = []
    out.append("# Auditoría de la librería\n")
    out.append(f"Fichas: {len(practices)} · IDs distintos en Notion: {len(collisions)} · "
               f"IDs repetidos: {len(collided)} · sin ID: {len(missing)} · sin cuerpo: {len(no_body)}\n")

    out.append("## 1. IDs\n")
    out.append(f"El build asignará {len(changes)} IDs nuevos (ver data/id_changes.csv tras correr build_skills.py). "
               "Regla: en una colisión conserva el ID la ficha cuyo grupo no está en `reassign_groups`; "
               "las demás reciben el siguiente número libre de su prefijo.\n")
    if collided:
        out.append(f"IDs repetidos ({len(collided)}): " + ", ".join(collided[:40]) + (" …" if len(collided) > 40 else "") + "\n")
    if changes:
        out.append("| Título | Categoría | ID Notion | ID propuesto | Motivo |\n|---|---|---|---|---|")
        for c in changes:
            out.append(f"| {c['title']} | {c['category']} | {c['old_id'] or '—'} | {c['new_id']} | {c['reason']} |")
        out.append("")

    out.append("## 2. Duplicados cercanos\n")
    out.append(f"{len(dups)} pares con similitud de título ≥ {threshold}. Detalle en reports/duplicates.md. "
               "Un par es candidato a fusión cuando además la similitud de Context es alta o comparten subcategoría.\n")

    out.append("## 3. Texto plantilla repetido\n")
    if bp_present:
        out.append(f"\"How to Present It\": {len(bp_present)} bloques idénticos repetidos; el mayor aparece en "
                   f"{len(bp_present[0])} fichas. Esta sección se descarta en el build (config.drop_sections).")
    else:
        out.append("\"How to Present It\": sin repeticiones detectadas.")
    if bp_why:
        out.append(f"\n\"What & Why\" repetido en {sum(len(b) for b in bp_why)} fichas ({len(bp_why)} bloques). "
                   "Esto sí es un problema de contenido:")
        for b in bp_why[:10]:
            out.append("- " + "; ".join(f"{p.get('id_notion') or '?'} {p['title']}" for p in b[:6]))
    out.append("")

    out.append("## 4. Secciones faltantes\n")
    out.append(f"Sin How to Implement: {len(no_impl)} · Sin What & Why: {len(no_why)}")
    for p in (no_impl + no_why)[:30]:
        out.append(f"- {p.get('id_notion') or '—'} {p['title']} ({p.get('category')}) {p.get('url')}")
    out.append("")

    out.append("## 5. Categorías\n")
    out.append("| Categoría | Grupo | Fichas | Score medio | ≥4 | Subcategorías |\n|---|---|---|---|---|---|")
    for cat, items in sorted(cats.items(), key=lambda kv: -len(kv[1])):
        scores = [p.get("score") or 0 for p in items]
        subs = len({p.get("subcategory") for p in items if p.get("subcategory")})
        out.append(f"| {cat} | {kitlib.group_of(cat, cfg)} | {len(items)} | {sum(scores)/len(scores):.2f} | "
                   f"{sum(1 for s in scores if s >= 4)} | {subs} |")

    (kitlib.REPORTS_DIR / "audit.md").write_text("\n".join(out) + "\n", encoding="utf-8")

    d = ["# Duplicados cercanos\n",
         "Revisar a mano. Para fusionar: deja una ficha, mueve lo que aporte la otra, y marca la sobrante "
         "con Status = Merged (el build ignora Status Merged/Deprecated).\n"]
    for pair in dups:
        a, b = pair["a"], pair["b"]
        d.append(f"- [{pair['title_sim']:.2f} título / {pair['context_sim']:.2f} contexto] "
                 f"**{a.get('id_notion') or '—'} {a['title']}** ({a.get('category')}) ↔ "
                 f"**{b.get('id_notion') or '—'} {b['title']}** ({b.get('category')})")
        d.append(f"  - {a.get('url')}\n  - {b.get('url')}")
    (kitlib.REPORTS_DIR / "duplicates.md").write_text("\n".join(d) + "\n", encoding="utf-8")

    print("\n".join(out[:4]))
    print(f"Duplicados cercanos: {len(dups)} · sin How to Implement: {len(no_impl)}")
    print(f"Reportes: {kitlib.REPORTS_DIR / 'audit.md'} y {kitlib.REPORTS_DIR / 'duplicates.md'}")


if __name__ == "__main__":
    main()
