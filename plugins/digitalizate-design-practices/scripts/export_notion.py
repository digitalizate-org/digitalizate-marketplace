#!/usr/bin/env python3
"""Exporta la Design Best Practices Library de Notion a data/practices.json.

Uso:
  export NOTION_TOKEN=ntn_xxx        # token de una integración interna con
                                     # acceso a la base (Share > Connections)
  python scripts/export_notion.py            # incremental: sólo baja cuerpos
                                             # de páginas editadas desde el
                                             # último export
  python scripts/export_notion.py --full     # vuelve a bajar todos los cuerpos
  python scripts/export_notion.py --legacy   # usa /databases/{id}/query y la
                                             # API version 2022-06-28
  python scripts/export_notion.py --limit 20 # para probar

Sin dependencias: sólo biblioteca estándar.

Salida:
  data/practices.json   lista de fichas con propiedades aplanadas, cuerpo en
                        markdown y secciones parseadas
  data/raw/<page>.json  caché por página (propiedades + cuerpo) con
                        last_edited_time, para exports incrementales
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402

API = "https://api.notion.com/v1"


class Notion:
    def __init__(self, token: str, version: str, throttle: float):
        self.token = token
        self.version = version
        self.throttle = throttle
        self.calls = 0

    def request(self, method: str, path: str, body=None, params=None, retries: int = 6):
        url = API + path
        if params:
            url += "?" + urllib.parse.urlencode(params)
        data = json.dumps(body).encode("utf-8") if body is not None else None
        last_err = None
        for attempt in range(retries):
            req = urllib.request.Request(
                url,
                data=data,
                method=method,
                headers={
                    "Authorization": f"Bearer {self.token}",
                    "Notion-Version": self.version,
                    "Content-Type": "application/json",
                },
            )
            try:
                with urllib.request.urlopen(req, timeout=60) as resp:
                    self.calls += 1
                    time.sleep(self.throttle)
                    return json.loads(resp.read().decode("utf-8"))
            except urllib.error.HTTPError as e:
                payload = e.read().decode("utf-8", "replace")[:400]
                if e.code == 429:
                    wait = float(e.headers.get("Retry-After", "2") or 2)
                    time.sleep(wait + 0.5)
                    continue
                if e.code >= 500:
                    time.sleep(2 ** attempt)
                    last_err = f"{e.code}: {payload}"
                    continue
                raise RuntimeError(f"{method} {path} -> {e.code}: {payload}")
            except urllib.error.URLError as e:
                last_err = str(e)
                time.sleep(2 ** attempt)
        raise RuntimeError(f"Sin respuesta tras {retries} intentos en {method} {path}: {last_err}")

    # -- consultas --------------------------------------------------------
    def query_pages(self, data_source_id: str, database_id: str, legacy: bool, limit: int | None):
        path = f"/databases/{database_id}/query" if legacy else f"/data_sources/{data_source_id}/query"
        cursor = None
        pages = []
        while True:
            body = {"page_size": 100}
            if cursor:
                body["start_cursor"] = cursor
            res = self.request("POST", path, body=body)
            pages.extend(res.get("results", []))
            if limit and len(pages) >= limit:
                return pages[:limit]
            if not res.get("has_more"):
                return pages
            cursor = res.get("next_cursor")

    def children(self, block_id: str):
        cursor = None
        out = []
        while True:
            params = {"page_size": 100}
            if cursor:
                params["start_cursor"] = cursor
            res = self.request("GET", f"/blocks/{block_id}/children", params=params)
            out.extend(res.get("results", []))
            if not res.get("has_more"):
                return out
            cursor = res.get("next_cursor")


# ---------------------------------------------------------------------------
# Propiedades
# ---------------------------------------------------------------------------

def flatten_prop(prop: dict):
    t = prop.get("type")
    v = prop.get(t)
    if t in ("title", "rich_text"):
        return "".join(x.get("plain_text", "") for x in (v or []))
    if t in ("select", "status"):
        return v["name"] if v else None
    if t == "multi_select":
        return [o["name"] for o in (v or [])]
    if t in ("number", "checkbox", "url", "email", "phone_number"):
        return v
    if t == "date":
        return v.get("start") if v else None
    if t == "unique_id":
        if not v:
            return None
        prefix = v.get("prefix")
        return f"{prefix}-{v['number']}" if prefix else str(v["number"])
    if t in ("created_time", "last_edited_time"):
        return v
    if t == "formula":
        return v.get(v.get("type")) if v else None
    if t == "relation":
        return [r["id"] for r in (v or [])]
    if t == "people":
        return [u.get("name") or u.get("id") for u in (v or [])]
    if t == "files":
        return [(f.get("external") or f.get("file") or {}).get("url") for f in (v or [])]
    return None


# ---------------------------------------------------------------------------
# Bloques -> markdown
# ---------------------------------------------------------------------------

def rich_text(rt: list) -> str:
    out = []
    for x in rt or []:
        text = x.get("plain_text", "")
        a = x.get("annotations", {}) or {}
        href = x.get("href")
        if a.get("code"):
            text = f"`{text}`"
        if a.get("bold"):
            text = f"**{text}**"
        if a.get("italic"):
            text = f"*{text}*"
        if a.get("strikethrough"):
            text = f"~~{text}~~"
        if href:
            text = f"[{text}]({href})"
        out.append(text)
    return "".join(out)


def block_to_md(client: Notion, block: dict, depth: int = 0) -> str:
    t = block.get("type")
    d = block.get(t, {}) or {}
    ind = "  " * depth
    lines: list[str] = []
    handled_children = False

    def kids(extra_depth: int = 1) -> list[str]:
        if not block.get("has_children"):
            return []
        return [block_to_md(client, c, depth + extra_depth) for c in client.children(block["id"])]

    if t == "paragraph":
        lines.append(ind + rich_text(d.get("rich_text")))
    elif t in ("heading_1", "heading_2", "heading_3"):
        level = int(t[-1])
        lines.append(ind + "#" * level + " " + rich_text(d.get("rich_text")))
    elif t == "bulleted_list_item":
        lines.append(ind + "- " + rich_text(d.get("rich_text")))
    elif t == "numbered_list_item":
        lines.append(ind + "1. " + rich_text(d.get("rich_text")))
    elif t == "to_do":
        box = "[x]" if d.get("checked") else "[ ]"
        lines.append(ind + f"- {box} " + rich_text(d.get("rich_text")))
    elif t == "quote":
        lines.append(ind + "> " + rich_text(d.get("rich_text")))
    elif t == "callout":
        icon = (d.get("icon") or {}).get("emoji", "")
        text = rich_text(d.get("rich_text"))
        for i, ln in enumerate(text.split("\n")):
            prefix = f"> {icon} " if (i == 0 and icon) else "> "
            lines.append(ind + prefix + ln)
    elif t == "code":
        lang = d.get("language", "") or ""
        lines.append(ind + f"```{lang}")
        lines.append(rich_text(d.get("rich_text")))
        lines.append(ind + "```")
    elif t == "divider":
        lines.append("---")
    elif t == "image":
        src = (d.get("external") or d.get("file") or {}).get("url", "")
        cap = rich_text(d.get("caption"))
        lines.append(ind + f"![{cap}]({src})")
    elif t in ("bookmark", "embed", "link_preview", "video", "file", "pdf"):
        src = d.get("url") or (d.get("external") or d.get("file") or {}).get("url", "")
        cap = rich_text(d.get("caption")) or t
        lines.append(ind + f"[{cap}]({src})")
    elif t == "toggle":
        lines.append(ind + "<details><summary>" + rich_text(d.get("rich_text")) + "</summary>")
        lines.extend(kids())
        lines.append(ind + "</details>")
        handled_children = True
    elif t == "table":
        rows = client.children(block["id"]) if block.get("has_children") else []
        for i, row in enumerate(rows):
            cells = row.get("table_row", {}).get("cells", [])
            lines.append(ind + "| " + " | ".join(rich_text(c) for c in cells) + " |")
            if i == 0:
                lines.append(ind + "|" + " --- |" * max(1, len(cells)))
        handled_children = True
    elif t == "child_page":
        lines.append(ind + f"[[child page: {d.get('title', '')}]]")
    elif t == "child_database":
        lines.append(ind + f"[[child database: {d.get('title', '')}]]")
    elif t in ("column_list", "column", "synced_block"):
        pass  # sólo contenedores: sus hijos se procesan abajo
    elif t == "equation":
        lines.append(ind + f"$$ {d.get('expression', '')} $$")
    elif t == "table_of_contents" or t == "breadcrumb":
        pass
    else:
        lines.append(ind + f"<!-- bloque no soportado: {t} -->")

    if not handled_children:
        extra = 0 if t in ("column_list", "column", "synced_block") else 1
        lines.extend(kids(extra))
    return "\n".join(l for l in lines if l is not None)


def page_body(client: Notion, page_id: str) -> str:
    blocks = client.children(page_id)
    return "\n".join(block_to_md(client, b) for b in blocks).strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--full", action="store_true", help="ignora la caché y vuelve a bajar todos los cuerpos")
    ap.add_argument("--legacy", action="store_true", help="usa /databases/{id}/query con la API version legacy")
    ap.add_argument("--limit", type=int, default=None, help="máximo de páginas (para pruebas)")
    ap.add_argument("--no-body", action="store_true", help="sólo propiedades, sin bajar cuerpos")
    args = ap.parse_args()

    token = os.environ.get("NOTION_TOKEN")
    if not token:
        raise SystemExit("Falta NOTION_TOKEN en el entorno.")

    cfg = kitlib.load_config()
    ncfg = cfg["notion"]
    props = cfg["properties"]
    version = ncfg["legacy_api_version"] if args.legacy else ncfg["api_version"]
    client = Notion(token, version, ncfg.get("throttle_seconds", 0.35))

    kitlib.RAW_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Consultando {'database' if args.legacy else 'data source'}…", flush=True)
    pages = client.query_pages(ncfg["data_source_id"], ncfg["database_id"], args.legacy, args.limit)
    print(f"{len(pages)} páginas encontradas", flush=True)

    practices = []
    downloaded = 0
    cached = 0
    for i, page in enumerate(pages, 1):
        page_id = page["id"]
        raw_path = kitlib.RAW_DIR / f"{page_id}.json"
        flat = {name: flatten_prop(p) for name, p in page.get("properties", {}).items()}

        body = ""
        if not args.no_body:
            cache = kitlib.load_json(raw_path, None)
            if (
                cache
                and not args.full
                and cache.get("last_edited_time") == page.get("last_edited_time")
                and cache.get("body_md") is not None
            ):
                body = cache["body_md"]
                cached += 1
            else:
                body = page_body(client, page_id)
                downloaded += 1
            kitlib.save_json(raw_path, {
                "page_id": page_id,
                "last_edited_time": page.get("last_edited_time"),
                "properties": flat,
                "body_md": body,
            })

        sections = kitlib.split_sections(body)
        entry = {
            "page_id": page_id,
            "url": page.get("url"),
            "created_time": page.get("created_time"),
            "last_edited_time": page.get("last_edited_time"),
            "title": flat.get(props["title"]) or "",
            "id_notion": (flat.get(props["id"]) or "").strip() or None,
            "category": flat.get(props["category"]),
            "subcategory": (flat.get(props["subcategory"]) or "").strip(),
            "score": flat.get(props["score"]),
            "context": (flat.get(props["context"]) or "").strip(),
            "goals": flat.get(props["goals"]) or [],
            "tags": flat.get(props["tags"]) or [],
            "status": flat.get(props.get("status", "Status")),
            "verify": (flat.get(props.get("verify", "")) or "").strip() if props.get("verify") else "",
            "verifiable_by": flat.get(props.get("verifiable_by", "")) if props.get("verifiable_by") else None,
            "anti_pattern": (flat.get(props.get("anti_pattern", "")) or "").strip() if props.get("anti_pattern") else "",
            "props": flat,
            "sections": sections,
            "body_md": body,
        }
        practices.append(entry)
        if i % 25 == 0 or i == len(pages):
            print(f"  {i}/{len(pages)}  (bajadas {downloaded}, caché {cached}, llamadas {client.calls})", flush=True)

    practices.sort(key=lambda p: (p.get("created_time") or "", p.get("title") or ""))
    kitlib.save_json(kitlib.PRACTICES_PATH, practices)
    print(f"\nListo: {len(practices)} fichas en {kitlib.PRACTICES_PATH.relative_to(kitlib.ROOT)}")
    print("Siguiente paso: python scripts/audit_library.py && python scripts/build_skills.py")


if __name__ == "__main__":
    main()
