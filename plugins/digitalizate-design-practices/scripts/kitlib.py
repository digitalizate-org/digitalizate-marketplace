"""Utilidades compartidas por los scripts de digitalizate-design-practices.

- Carga de config y de la librería en markdown (library/<categoría>/<ID>-<slug>.md)
- Front matter: subconjunto de YAML (escalares y listas de texto), sin dependencias
- Slugs, grupos (ux / agentic), prefijos de ID y validación de la librería
- Parseo del cuerpo de una ficha en secciones
"""
from __future__ import annotations

import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONFIG_PATH = ROOT / "config" / "build.json"
LIBRARY_DIR = ROOT / "library"
DATA_DIR = ROOT / "data"
RAW_DIR = DATA_DIR / "raw"
REPORTS_DIR = ROOT / "reports"

FRONT_MATTER_KEYS = (
    "id", "title", "category", "subcategory", "score", "context", "avoid_when",
    "goals", "tags", "status", "verify", "verifiable_by", "anti_pattern",
    "wireframe", "notion",
)
VERIFIABLE_BY = ("lint", "test", "visual", "judgment")


def load_config() -> dict:
    return json.loads(CONFIG_PATH.read_text(encoding="utf-8"))


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


ID_RE = re.compile(r"^([A-Z]{2,5})-(\d{1,5})$")


def parse_id(value: str | None):
    if not value or not isinstance(value, str):
        return None
    m = ID_RE.match(value.strip())
    if not m:
        return None
    return m.group(1), int(m.group(2))


CONTEXT_PREFIX = re.compile(r"^\s*(use when|when to use|apply when)\s*:\s*", re.IGNORECASE)


def clean_context(text: str) -> str:
    """Quita el prefijo 'Use when:' que algunos lotes repiten dentro del campo Context."""
    return CONTEXT_PREFIX.sub("", text or "", count=1).strip()


# ---------------------------------------------------------------------------
# Front matter (subconjunto de YAML)
# ---------------------------------------------------------------------------
#
# Gramática admitida, suficiente para las fichas y editable a mano:
#   clave: valor                 escalar en una línea; texto entre comillas dobles
#                                (escapes JSON), comillas simples o sin comillas;
#                                enteros; true/false; vacío o null = sin valor
#   clave:                       lista de escalares en las líneas siguientes
#     - valor
#   # comentario                 línea completa
# No se admiten bloques multilínea (| o >), mapas anidados ni secuencias [a, b].

_KEY_RE = re.compile(r"^([A-Za-z_][\w-]*):(?:[ \t]+(.*?))?[ \t]*$")
_ITEM_RE = re.compile(r"^[ \t]+-(?:[ \t]+(.*?))?[ \t]*$")


def _parse_scalar(raw: str | None):
    if raw is None:
        return None
    s = raw.strip()
    if s == "" or s in ("null", "~"):
        return None
    if s[0] == '"':
        return json.loads(s)
    if s[0] == "'":
        if len(s) < 2 or not s.endswith("'"):
            raise ValueError(f"comilla simple sin cerrar: {raw!r}")
        return s[1:-1].replace("''", "'")
    if s in ("true", "True"):
        return True
    if s in ("false", "False"):
        return False
    if re.fullmatch(r"-?\d+", s):
        return int(s)
    if s[0] in "[{|>&*!%@`":
        raise ValueError(f"valor no admitido {s!r}: usa comillas dobles; no hay secuencias [a, b], mapas ni bloques | o >")
    return s


def parse_front_matter(text: str) -> tuple[dict, str]:
    """Devuelve (front_matter, cuerpo). Falla con ValueError si la sintaxis no es la admitida."""
    if not text.startswith("---\n"):
        raise ValueError("la ficha debe empezar con una línea '---'")
    end = text.find("\n---\n", 3)
    if end < 0:
        if text.rstrip("\n").endswith("\n---"):
            end = text.rstrip("\n").rfind("\n---")
            head, body = text[4:end], ""
        else:
            raise ValueError("front matter sin la línea '---' de cierre")
    else:
        head, body = text[4:end], text[end + 5:]
    data: dict = {}
    key = None
    for n, line in enumerate(head.splitlines(), 2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        m = _KEY_RE.match(line)
        if m and not line[0].isspace():
            key = m.group(1)
            if key in data:
                raise ValueError(f"línea {n}: clave repetida '{key}'")
            data[key] = _parse_scalar(m.group(2))
            continue
        m = _ITEM_RE.match(line)
        if m and key is not None:
            if data[key] is None:
                data[key] = []
            if not isinstance(data[key], list):
                raise ValueError(f"línea {n}: '{key}' tiene un valor y además una lista")
            data[key].append(_parse_scalar(m.group(1)))
            continue
        raise ValueError(f"línea {n}: sintaxis no admitida en el front matter: {line.strip()!r}")
    return data, body


def _dump_scalar(value) -> str:
    if value is None:
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, int):
        return str(value)
    return json.dumps(str(value), ensure_ascii=False)


def dump_front_matter(data: dict) -> str:
    lines = ["---"]
    order = list(FRONT_MATTER_KEYS) + [k for k in data if k not in FRONT_MATTER_KEYS]
    for key in order:
        if key not in data:
            continue
        value = data[key]
        if value is None or value == "" or value == []:
            continue
        if isinstance(value, list):
            lines.append(f"{key}:")
            lines.extend(f"  - {_dump_scalar(x)}" for x in value)
        else:
            lines.append(f"{key}: {_dump_scalar(value)}")
    lines.append("---")
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# Librería en markdown
# ---------------------------------------------------------------------------

def practice_filename(p: dict) -> str:
    return f"{p['id']}-{slug(p['title'])[:60].rstrip('-')}.md"


def write_practice(p: dict, library_dir: Path = LIBRARY_DIR) -> Path:
    """Escribe una ficha. `p` trae las claves del front matter y `body` (markdown sin front matter)."""
    fm = {k: p.get(k) for k in FRONT_MATTER_KEYS}
    path = library_dir / slug(p["category"]) / practice_filename(p)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(dump_front_matter(fm) + "\n" + (p.get("body") or "").strip() + "\n", encoding="utf-8")
    return path


def load_library(library_dir: Path = LIBRARY_DIR) -> list[dict]:
    """Lee library/**/*.md y devuelve una lista de fichas con la misma forma que usan build y audit."""
    if not library_dir.exists():
        raise SystemExit(f"No existe {library_dir}. La librería vive en library/<categoría>/<ID>-<slug>.md")
    practices = []
    for path in sorted(library_dir.rglob("*.md")):
        text = path.read_text(encoding="utf-8")
        try:
            fm, body = parse_front_matter(text)
        except ValueError as e:
            raise SystemExit(f"{path.relative_to(ROOT) if path.is_relative_to(ROOT) else path}: {e}") from e
        sections = split_sections(body)
        sections["wireframe_url"] = fm.get("wireframe") or sections.get("wireframe_url") or ""
        sections["avoid_when"] = fm.get("avoid_when") or sections.get("avoid_when") or ""
        sections["when_to_use"] = fm.get("context") or sections.get("when_to_use") or ""
        rel = path.relative_to(ROOT) if path.is_relative_to(ROOT) else path.relative_to(library_dir.parent)
        practices.append({
            "id": fm.get("id"),
            "title": (fm.get("title") or "").strip(),
            "category": fm.get("category"),
            "subcategory": fm.get("subcategory") or "",
            "score": fm.get("score"),
            "context": fm.get("context") or "",
            "goals": fm.get("goals") or [],
            "tags": fm.get("tags") or [],
            "status": fm.get("status"),
            "verify": fm.get("verify") or "",
            "verifiable_by": fm.get("verifiable_by"),
            "anti_pattern": fm.get("anti_pattern") or "",
            "url": fm.get("notion"),
            "path": str(rel),
            "front_matter": fm,
            "sections": sections,
            "body_md": body,
        })
    return practices


def validate_library(practices: list[dict], config: dict) -> list[str]:
    """Errores que impiden compilar: IDs inválidos o repetidos, prefijo ajeno al grupo, campos obligatorios."""
    errors: list[str] = []
    seen: dict[str, str] = {}
    for p in practices:
        where = p["path"]
        pid = p.get("id")
        parsed = parse_id(pid)
        if not parsed:
            errors.append(f"{where}: id inválido {pid!r}; formato UX-001 o AGP-001")
        else:
            expected = config["id_prefix"].get(group_of(p.get("category"), config), "UX")
            if parsed[0] != expected:
                errors.append(f"{where}: el prefijo {parsed[0]} no corresponde al grupo de su categoría ({expected})")
            if pid in seen:
                errors.append(f"{where}: id {pid} repetido, también en {seen[pid]}")
            seen.setdefault(pid, where)
            if not Path(where).name.startswith(f"{pid}-"):
                errors.append(f"{where}: el nombre del archivo debe empezar por '{pid}-'")
        if not p.get("title"):
            errors.append(f"{where}: falta title")
        if not p.get("category"):
            errors.append(f"{where}: falta category")
        elif slug(p["category"]) != Path(where).parent.name:
            errors.append(f"{where}: la carpeta debería llamarse {slug(p['category'])} (slug de category)")
        if not isinstance(p.get("score"), int) or isinstance(p.get("score"), bool) or not 1 <= p["score"] <= 5:
            errors.append(f"{where}: score debe ser un entero de 1 a 5")
        if p.get("verifiable_by") and p["verifiable_by"] not in VERIFIABLE_BY:
            errors.append(f"{where}: verifiable_by debe ser uno de {', '.join(VERIFIABLE_BY)}")
    return errors


def next_free_id(practices: list[dict], prefix: str) -> str:
    numbers = [parse_id(p.get("id"))[1] for p in practices if parse_id(p.get("id")) and parse_id(p["id"])[0] == prefix]
    return f"{prefix}-{(max(numbers) if numbers else 0) + 1:03d}"


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
EMPTY_ITEM = re.compile(r"^\s*(?:[-*•]|\d+[.)])\s*$")


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

    Acepta tanto el formato de la librería (## Why, ## How to implement, ## Metrics,
    ## Sources) como el markdown exportado de Notion (toggles como
    <details><summary>…</summary>, callouts, "Metrics Impact" anidado dentro del
    toggle de fuentes).
    """
    sections: dict[str, list[str]] = defaultdict(list)
    current = "_pre"
    stack: list[str] = []
    open_toggles: list[str] = []
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
    sources = [{"name": n.strip(), "url": u.strip()} for n, u in LINK_RE.findall(text_of("sources"))]
    return {
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


def _strip_images(text: str) -> str:
    text = IMAGE_RE.sub("", text)
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
