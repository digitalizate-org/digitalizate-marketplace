"""Utilidades compartidas por los scripts de ux-kit.

- Carga de config y de data/practices.json
- Slugs, grupos (ux / agentic), prefijos de ID
- Asignación de IDs canónicos estable (persistida en data/id_map.json)
- Parseo del cuerpo markdown de una ficha en secciones
"""
from __future__ import annotations

import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "config" / "build.json"
DATA_DIR = ROOT / "data"
RAW_DIR = DATA_DIR / "raw"
PRACTICES_PATH = DATA_DIR / "practices.json"
ID_MAP_PATH = DATA_DIR / "id_map.json"
ID_CHANGES_PATH = DATA_DIR / "id_changes.csv"
ENRICHMENT_DIR = DATA_DIR / "enrichment"
REPORTS_DIR = ROOT / "reports"


def load_config() -> dict:
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


def load_practices(path: Path = PRACTICES_PATH) -> list[dict]:
    if not path.exists():
        raise SystemExit(
            f"No existe {path}. Corre primero: python scripts/export_notion.py"
        )
    return json.loads(path.read_text(encoding="utf-8"))


def load_json(path: Path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def save_json(path: Path, obj) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")


def slug(text: str) -> str:
    text = unicodedata.normalize("NFKD", text or "").encode("ascii", "ignore").decode()
    text = re.sub(r"[&/]+", " and ", text)
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "untitled"


def group_of(category: str | None, config: dict) -> str:
    groups = config["groups"]
    return groups["by_category"].get(category or "", groups["default"])


# ---------------------------------------------------------------------------
# IDs canónicos
# ---------------------------------------------------------------------------

ID_RE = re.compile(r"^([A-Z]{2,5})-(\d{1,5})$")


def parse_id(value: str | None):
    if not value:
        return None
    m = ID_RE.match(value.strip())
    if not m:
        return None
    return m.group(1), int(m.group(2))


def assign_ids(practices: list[dict], id_map: dict, config: dict) -> list[dict]:
    """Asigna un ID canónico a cada ficha y devuelve la lista de cambios.

    Reglas, en orden:
    1. Si la página ya está en id_map, se respeta (estabilidad entre builds).
    2. Si el ID de Notion es único y libre, se conserva.
    3. Si el ID está repetido, lo conserva la ficha cuyo grupo NO está en
       config.reassign_groups (la de psicología gana sobre la agéntica).
    4. Lo demás recibe un ID nuevo con el prefijo de su grupo, numerado a
       continuación del máximo existente para ese prefijo.

    El orden de recorrido es por created_time y título, así el resultado es
    determinista aunque Notion devuelva las filas en otro orden.
    """
    used: dict[str, str] = {}  # id -> page_id
    for page_id, cid in id_map.items():
        used[cid] = page_id

    by_notion_id: dict[str, list[dict]] = defaultdict(list)
    for p in practices:
        if p.get("id_notion"):
            by_notion_id[p["id_notion"]].append(p)

    ordered = sorted(practices, key=lambda p: (p.get("created_time") or "", p.get("title") or ""))
    changes: list[dict] = []

    def next_free(prefix: str) -> str:
        top = 0
        for cid in used:
            parsed = parse_id(cid)
            if parsed and parsed[0] == prefix:
                top = max(top, parsed[1])
        # también considera los IDs existentes en Notion para no pisarlos
        for nid in by_notion_id:
            parsed = parse_id(nid)
            if parsed and parsed[0] == prefix:
                top = max(top, parsed[1])
        return f"{prefix}-{top + 1:03d}"

    for p in ordered:
        page_id = p["page_id"]
        if page_id in id_map:
            p["id"] = id_map[page_id]
            continue
        group = group_of(p.get("category"), config)
        oid = p.get("id_notion")
        keep = False
        if oid and parse_id(oid) and oid not in used:
            siblings = by_notion_id[oid]
            if len(siblings) == 1:
                keep = True
            else:
                keepers = [
                    q for q in siblings
                    if group_of(q.get("category"), config) not in config["reassign_groups"]
                ]
                # si varias fichas "no reasignables" chocan, gana la más antigua
                keepers.sort(key=lambda q: (q.get("created_time") or "", q.get("title") or ""))
                keep = bool(keepers) and keepers[0]["page_id"] == page_id
        if keep:
            cid = oid
        else:
            cid = next_free(config["id_prefix"].get(group, "UX"))
            changes.append({
                "page_id": page_id,
                "title": p.get("title"),
                "category": p.get("category"),
                "old_id": oid or "",
                "new_id": cid,
                "reason": "sin ID" if not oid else "ID repetido",
            })
        id_map[page_id] = cid
        used[cid] = page_id
        p["id"] = cid

    return changes


# ---------------------------------------------------------------------------
# Parseo de secciones del cuerpo
# ---------------------------------------------------------------------------

SECTION_ALIASES = {
    "wireframe": ("wireframe",),
    "what_why": ("what & why", "what and why", "what & why?", "why", "what"),
    "how_to_implement": ("how to implement", "implementation", "how to apply"),
    "how_to_present": ("how to present it", "how to present", "how to pitch it"),
    "metrics": ("metrics impact", "metrics & use cases", "metrics and use cases", "metrics"),
    "sources": ("sources & references", "sources and references", "sources", "source", "references"),
}

CALLOUT_WHEN = re.compile(r"when to use:?\**\s*(.+)", re.IGNORECASE)
CALLOUT_AVOID = re.compile(r"avoid when:?\**\s*(.+)", re.IGNORECASE)
IMAGE_RE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
LINK_RE = re.compile(r"(?<!!)\[([^\]]+)\]\((https?://[^)]+)\)")
SOURCE_LINE = re.compile(r"^(?:[-*•]|\d+[.)])\s+.*\]\(https?://")


def _norm_heading(text: str) -> str:
    text = re.sub(r"[*_`]+", "", text)
    text = re.sub(r"^[^\w]+", "", text)  # quita emojis iniciales
    return text.strip().lower()


def _section_key(heading: str) -> str:
    h = _norm_heading(heading)
    for key, aliases in SECTION_ALIASES.items():
        if h in aliases or any(h.startswith(a) for a in aliases):
            return key
    return "other:" + slug(h)


def split_sections(body_md: str) -> dict:
    """Divide el markdown de la ficha por encabezados y extrae campos útiles.

    Los toggles se exportan como <details><summary>Título</summary>; el
    summary cuenta como encabezado para que "Sources & References" y
    "Metrics & Use Cases" queden en su propia sección.

    En muchas fichas el encabezado "Metrics Impact" quedó dentro del toggle
    "Sources & References". Mientras ese toggle esté abierto, las viñetas con
    enlace se atribuyen a `sources` aunque un encabezado anidado haya cambiado
    la sección activa; el resto del texto sigue en la sección anidada.
    """
    sections: dict[str, list[str]] = defaultdict(list)
    current = "_pre"
    stack: list[str] = []  # sección activa antes de entrar a un toggle
    open_toggles: list[str] = []  # claves de sección de los toggles abiertos
    for raw in (body_md or "").splitlines():
        line = raw.rstrip()
        stripped = line.strip()
        m = re.match(r"^#{1,4}\s+(.*)", stripped)
        s = re.match(r"^<details>\s*<summary>(.*?)</summary>", stripped)
        if m:
            current = _section_key(m.group(1))
            continue
        if s:
            stack.append(current)
            current = _section_key(s.group(1))
            open_toggles.append(current)
            continue
        if stripped == "</details>":
            current = stack.pop() if stack else current
            if open_toggles:
                open_toggles.pop()
            continue
        if stripped in ("---", "<details>"):
            continue
        if "sources" in open_toggles and current != "sources" and SOURCE_LINE.match(stripped):
            sections["sources"].append(line)
            continue
        sections[current].append(line)

    def text_of(key: str) -> str:
        return "\n".join(sections.get(key, [])).strip()

    all_text = body_md or ""
    when = CALLOUT_WHEN.search(all_text)
    avoid = CALLOUT_AVOID.search(all_text)
    images = IMAGE_RE.findall(all_text)
    sources = []
    for name, url in LINK_RE.findall(text_of("sources")):
        sources.append({"name": name.strip(), "url": url.strip()})

    out = {
        "when_to_use": (when.group(1).strip() if when else ""),
        "avoid_when": (avoid.group(1).strip() if avoid else ""),
        "wireframe_url": images[0] if images else "",
        "what_why": _strip_images(text_of("what_why")),
        "how_to_implement": _strip_images(text_of("how_to_implement")),
        "how_to_present": text_of("how_to_present"),
        "metrics": _strip_images(text_of("metrics")),
        "sources": sources,
        "other": {k[6:]: "\n".join(v).strip() for k, v in sections.items() if k.startswith("other:")},
    }
    return out


def _strip_images(text: str) -> str:
    text = IMAGE_RE.sub("", text)
    # quita líneas de callout repetidas (ya se extrajo When to use)
    lines = [l for l in text.splitlines() if not CALLOUT_WHEN.search(l) and not CALLOUT_AVOID.search(l)]
    return "\n".join(lines).strip()


SENTENCE_END = re.compile(r"[.!?][\"')\]]?(?=\s)")


def truncate(text: str, limit: int) -> str:
    """Recorta a `limit` caracteres sin partir oraciones ni palabras.

    Tolera un 10 % de exceso antes de cortar; corta en el último fin de oración
    si está pasado el 50 % del límite y, si no hay ninguno, en el último espacio.
    """
    text = (text or "").strip()
    if len(text) <= limit * 1.1:
        return text
    cut = text[:limit]
    ends = [m.end() for m in SENTENCE_END.finditer(cut)]
    if ends and ends[-1] > limit * 0.5:
        return cut[: ends[-1]]
    space = cut.rfind(" ")
    if space > limit * 0.5:
        cut = cut[:space]
    return cut.rstrip(" ,;:—-(") + "…"
