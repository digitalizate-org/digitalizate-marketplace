#!/usr/bin/env python3
"""Compila library/<categoría>/<ID>-<slug>.md en los archivos que consumen las skills.

Genera, por grupo (ux → skills/ux-library, agentic → skills/agentic-patterns):
  index/_overview.md              fecha de build, conteos, categorías, objetivos
  index/by-category/<cat>.md      una línea por práctica
  index/by-goal/<goal>.md         una línea por práctica, agrupado por "Helps With"
  references/<cat>.md             ficha compactada por práctica
  references/<cat>/<subcat>.md    cuando la categoría supera split_threshold
  references/<cat>/part-N.md      cuando no hay subcategorías útiles y el archivo
                                  superaría max_reference_bytes

Antes de generar valida la librería (IDs únicos y con el prefijo de su grupo,
score de 1 a 5, carpeta igual al slug de la categoría) y se detiene si hay errores.

Uso:
  python3 scripts/build_skills.py [--clean]
"""
from __future__ import annotations

import argparse
import datetime as dt
import re
import shutil
import sys
from collections import defaultdict
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402

SKIP_STATUSES = {"proposed", "merged", "deprecated", "rejected", "draft"}
SCORE_LEGEND = (
    "Score: 5 = must-have, 4 = very important, 3 = situational, 2 = niche, 1 = theoretical. "
    "Default policy: always consider 5, consider 4 unless there is a reason not to, "
    "consider 3 only when the practice's `use:` context matches, 1-2 only on explicit request."
)


# ---------------------------------------------------------------------------
# Render helpers
# ---------------------------------------------------------------------------

def one_line(text: str, limit: int) -> str:
    text = " ".join((text or "").split())
    return kitlib.truncate(text, limit)


def compact_metrics(text: str, limit: int) -> str:
    """Convierte la sección de métricas en una línea: quita la frase introductoria y une los ítems con ';'."""
    items = []
    for raw in (text or "").splitlines():
        line = re.sub(r"^\s*(?:[-*•]|\d+[.)])\s+", "", raw.strip())
        line = line.replace("**", "").strip()
        if not line or line.endswith(":"):
            continue  # vacía o encabezado sin contenido ("Proven use cases:")
        items.append(line)
    return one_line("; ".join(items), limit)


def index_line(p: dict, cfg: dict) -> str:
    ctx = one_line(kitlib.clean_context(p.get("context") or p["sections"].get("when_to_use") or ""), cfg["index_context_max_chars"])
    tags = ", ".join(p.get("tags") or []) or "—"
    sub = f" [{p['subcategory']}]" if p.get("subcategory") else ""
    return f"- {p['id']} · {p['title']}{sub} · ★{int(p.get('score') or 0)} · tags: {tags} · use: {ctx}"


def render_bullets(text: str) -> str:
    """Normaliza listas: convierte '1.' repetidos en numeración real, quita ítems vacíos y deja el resto."""
    out = []
    n = 0
    for line in (text or "").splitlines():
        s = line.rstrip()
        if not s.strip() or kitlib.EMPTY_ITEM.match(s):
            continue
        stripped = s.lstrip()
        indent = len(s) - len(stripped)
        if stripped.startswith("1. ") and indent == 0:
            n += 1
            out.append(f"{n}. {stripped[3:]}")
        else:
            if indent == 0 and not stripped.startswith(("-", "*", "1", ">", "|", "`")):
                n = 0
            out.append(s)
    return "\n".join(out)


def render_reference(p: dict, cfg: dict) -> str:
    s = p["sections"]
    drop = set(cfg.get("drop_sections", []))
    lines = [f"## {p['id']} — {p['title']}"]
    meta = f"- Score {int(p.get('score') or 0)} · {p.get('category')}"
    if p.get("subcategory"):
        meta += f" / {p['subcategory']}"
    lines.append(meta)
    if p.get("tags"):
        lines.append(f"- Tags: {', '.join(p['tags'])}")
    if p.get("goals"):
        lines.append(f"- Goals: {'; '.join(p['goals'])}")
    when = kitlib.clean_context(p.get("context") or s.get("when_to_use") or "")
    if when:
        lines.append(f"- Use when: {one_line(when, 600)}")
    if s.get("avoid_when"):
        lines.append(f"- Avoid when: {one_line(s['avoid_when'], 400)}")
    if p.get("verify"):
        lines.append(f"- Verify: {one_line(p['verify'], 400)}")
    if p.get("verifiable_by"):
        vb = p["verifiable_by"]
        lines.append(f"- Verifiable by: {', '.join(vb) if isinstance(vb, list) else vb}")
    if p.get("anti_pattern"):
        lines.append(f"- Anti-pattern: {one_line(p['anti_pattern'], 400)}")

    if s.get("what_why") and "what_why" not in drop:
        lines.append("")
        lines.append("**Why.** " + kitlib.truncate(" ".join(s["what_why"].split()), cfg["what_why_max_chars"]))
    if s.get("how_to_implement") and "how_to_implement" not in drop:
        lines.append("")
        lines.append("**Do.**")
        lines.append(render_bullets(s["how_to_implement"]))
    if s.get("metrics") and "metrics" not in drop:
        lines.append("")
        lines.append("**Measure.** " + compact_metrics(s["metrics"], 500))
    for name, text in (s.get("other") or {}).items():
        if text and f"other:{name}" not in drop:
            lines.append("")
            lines.append(f"**{name.replace('-', ' ').title()}.**")
            lines.append(render_bullets(kitlib.truncate(text, cfg.get("other_section_max_chars", 3000))))

    tail = []
    if s.get("sources"):
        tail.append("Sources: " + " · ".join(f"[{x['name']}]({x['url']})" for x in s["sources"][:6]))
    if s.get("wireframe_url"):
        tail.append(f"Wireframe: {s['wireframe_url']}")
    tail.append(f"File: {p['path']}")
    lines.append("")
    lines.append("\n".join(tail))
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------

def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def chunk_by_size(items: list[tuple[dict, str]], max_bytes: int) -> list[list[tuple[dict, str]]]:
    """Agrupa fichas ya renderizadas en partes que no superen max_bytes; una ficha nunca se parte."""
    parts: list[list[tuple[dict, str]]] = []
    current: list[tuple[dict, str]] = []
    size = 0
    for p, rendered in items:
        n = len(rendered.encode("utf-8")) + 1
        if current and size + n > max_bytes:
            parts.append(current)
            current, size = [], 0
        current.append((p, rendered))
        size += n
    if current:
        parts.append(current)
    return parts


def score_label(part: list[tuple[dict, str]]) -> str:
    scores = sorted({int(p.get("score") or 0) for p, _ in part}, reverse=True)
    return f"score {scores[0]}" if len(scores) == 1 else f"score {scores[0]}–{scores[-1]}"


def build_group(group: str, items: list[dict], cfg: dict, build_date: str, clean: bool) -> dict:
    skill_dir = kitlib.ROOT / cfg["skills"][group]
    index_dir = skill_dir / "index"
    ref_dir = skill_dir / "references"
    if clean:
        shutil.rmtree(index_dir, ignore_errors=True)
        shutil.rmtree(ref_dir, ignore_errors=True)
    for d in (index_dir / "by-category", index_dir / "by-goal", ref_dir):
        d.mkdir(parents=True, exist_ok=True)

    by_cat: dict[str, list[dict]] = defaultdict(list)
    for p in items:
        by_cat[p.get("category") or "Uncategorized"].append(p)

    cat_rows = []
    max_bytes = cfg.get("max_reference_bytes", 120000)
    for cat, plist in sorted(by_cat.items()):
        plist.sort(key=lambda p: (-(p.get("score") or 0), p["id"]))
        cslug = kitlib.slug(cat)
        head = [f"# {cat} ({len(plist)})", "", f"Reference: references/{cslug}.md"]
        subs = {p.get("subcategory") for p in plist if p.get("subcategory")}
        split = len(plist) > cfg["split_threshold"] and len(subs) > 1
        if split:
            ref_label = f"references/{cslug}/ (split by subcategory)"
            head[2] = f"References split by subcategory under references/{cslug}/"
            by_sub: dict[str, list[dict]] = defaultdict(list)
            for p in plist:
                by_sub[p.get("subcategory") or "General"].append(p)
            for sub, sl in sorted(by_sub.items()):
                body = f"# {cat} / {sub} ({len(sl)})\n\n" + "\n".join(render_reference(p, cfg) for p in sl)
                write(ref_dir / cslug / f"{kitlib.slug(sub)}.md", body)
            body_idx = head + [""]
            for sub, sl in sorted(by_sub.items()):
                body_idx.append(f"## {sub} → references/{cslug}/{kitlib.slug(sub)}.md")
                body_idx += [index_line(p, cfg) for p in sl] + [""]
            write(index_dir / "by-category" / f"{cslug}.md", "\n".join(body_idx))
        else:
            rendered = [render_reference(p, cfg) for p in plist]
            parts = chunk_by_size(list(zip(plist, rendered)), max_bytes - 256)
            if len(parts) == 1:
                ref_label = f"references/{cslug}.md"
                write(ref_dir / f"{cslug}.md", f"# {cat} ({len(plist)})\n\n" + "\n".join(rendered))
                write(index_dir / "by-category" / f"{cslug}.md",
                      "\n".join(head + [""] + [index_line(p, cfg) for p in plist]) + "\n")
            else:
                # sin subcategorías útiles y demasiado grande para un archivo: partes por tamaño,
                # en el mismo orden del índice (score descendente, luego ID)
                ref_label = f"references/{cslug}/ ({len(parts)} parts by size)"
                head[2] = (f"References split into {len(parts)} parts under references/{cslug}/ "
                           "(ordered by score, then ID; each part header below says which IDs it holds)")
                body_idx = head + [""]
                for n, part in enumerate(parts, 1):
                    label = score_label(part)
                    fname = f"part-{n}.md"
                    body = (f"# {cat} · part {n}/{len(parts)} ({len(part)} entries, {label})\n\n"
                            + "\n".join(r for _, r in part))
                    write(ref_dir / cslug / fname, body)
                    body_idx.append(f"## Part {n} ({label}, {part[0][0]['id']} … {part[-1][0]['id']}) → references/{cslug}/{fname}")
                    body_idx += [index_line(p, cfg) for p, _ in part] + [""]
                write(index_dir / "by-category" / f"{cslug}.md", "\n".join(body_idx))
        scores = [p.get("score") or 0 for p in plist]
        cat_rows.append((cat, cslug, len(plist), sum(scores) / len(scores), sum(1 for s in scores if s >= 4), ref_label))

    # índice por objetivo (Helps With)
    by_goal: dict[str, list[dict]] = defaultdict(list)
    for p in items:
        for g in p.get("goals") or []:
            by_goal[g].append(p)
    goal_rows = []
    for goal, gl in sorted(by_goal.items()):
        gl.sort(key=lambda p: (-(p.get("score") or 0), p["id"]))
        gslug = kitlib.slug(goal)
        lines = [f"# Goal: {goal} ({len(gl)})", "",
                 "Each line ends with the category; open references/<category>.md (or the split folder) for the full entry.", ""]
        for p in gl:
            lines.append(index_line(p, cfg) + f" · cat: {kitlib.slug(p.get('category') or '')}")
        write(index_dir / "by-goal" / f"{gslug}.md", "\n".join(lines) + "\n")
        goal_rows.append((goal, gslug, len(gl)))

    # overview
    enriched = sum(1 for p in items if p.get("verify"))
    ov = [f"# Library overview ({group})", "",
          f"Built {build_date} from library/ · {len(items)} entries · {len(by_cat)} categories · {len(by_goal)} goals · "
          f"{enriched} entries with a verification criterion.", "",
          SCORE_LEGEND, "",
          "## Categories", "",
          "| Category | Index | Entries | Avg score | ≥4 | Reference |", "|---|---|---|---|---|---|"]
    for cat, cslug, n, avg, high, ref in sorted(cat_rows, key=lambda r: -r[2]):
        ov.append(f"| {cat} | index/by-category/{cslug}.md | {n} | {avg:.2f} | {high} | {ref} |")
    ov += ["", "## Goals (Helps With)", "", "| Goal | Index | Entries |", "|---|---|---|"]
    for goal, gslug, n in sorted(goal_rows, key=lambda r: -r[2]):
        ov.append(f"| {goal} | index/by-goal/{gslug}.md | {n} |")
    tag_counts: dict[str, int] = defaultdict(int)
    for p in items:
        for t in p.get("tags") or []:
            tag_counts[t] += 1
    ov += ["", "## Tags", "",
           ", ".join(f"{t} ({n})" for t, n in sorted(tag_counts.items(), key=lambda kv: (-kv[1], kv[0])))]
    write(index_dir / "_overview.md", "\n".join(ov) + "\n")

    return {"entries": len(items), "categories": len(by_cat), "goals": len(by_goal), "dir": str(skill_dir.relative_to(kitlib.ROOT))}


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--clean", action="store_true", help="borra index/ y references/ antes de generar")
    args = ap.parse_args()

    cfg = kitlib.load_config()
    practices = kitlib.load_library()
    errors = kitlib.validate_library(practices, cfg)
    if errors:
        print(f"La librería tiene {len(errors)} errores; corrígelos antes de compilar:")
        for err in errors[:50]:
            print("  -", err)
        raise SystemExit(1)

    skipped = [p for p in practices if (p.get("status") or "").strip().lower() in SKIP_STATUSES]
    active = [p for p in practices if p not in skipped]

    groups: dict[str, list[dict]] = defaultdict(list)
    for p in active:
        groups[kitlib.group_of(p.get("category"), cfg)].append(p)

    build_date = dt.date.today().isoformat()
    summary = {}
    for group, items in groups.items():
        if group not in cfg["skills"]:
            print(f"Aviso: grupo '{group}' sin skill configurada; se omite ({len(items)} fichas)")
            continue
        summary[group] = build_group(group, items, cfg, build_date, args.clean)

    print(f"Build {build_date}")
    for group, s in summary.items():
        print(f"  {group:8s} {s['entries']:4d} fichas · {s['categories']} categorías · {s['goals']} objetivos → {s['dir']}")
    next_ids = " · ".join(f"{prefix}: {kitlib.next_free_id(practices, prefix)}" for prefix in cfg["id_prefix"].values())
    print(f"  omitidas por Status: {len(skipped)} · con criterio Verify: {sum(1 for p in active if p.get('verify'))} · "
          f"siguiente ID libre {next_ids}")


if __name__ == "__main__":
    main()
