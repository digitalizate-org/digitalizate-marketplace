#!/usr/bin/env python3
"""Escribe cambios de propiedades en Notion. Dry-run por defecto.

Modos:
  --ids                     lee data/id_changes.csv y escribe el ID canónico en
                            la propiedad `properties.id` de config (ID)
  --updates archivo.json    lista de {"page_id": ..., "properties": {"Nombre": valor}}
                            p. ej. la salida de /ux-enrich o un cambio de Status

Añade --apply para ejecutar de verdad. Sin --apply sólo imprime lo que haría.

El tipo de cada propiedad se lee del esquema del data source, así que basta
con pasar valores simples: texto para rich_text/title, nombre para select o
status, lista de nombres para multi_select, número para number, bool para
checkbox.

Requiere NOTION_TOKEN en el entorno y que las propiedades existan ya en la
base (créalas en la UI de Notion antes de usar --updates con campos nuevos).
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import kitlib  # noqa: E402
from export_notion import Notion  # noqa: E402


def schema_types(client: Notion, data_source_id: str, database_id: str, legacy: bool) -> dict:
    if legacy:
        res = client.request("GET", f"/databases/{database_id}")
    else:
        res = client.request("GET", f"/data_sources/{data_source_id}")
    return {name: p["type"] for name, p in res.get("properties", {}).items()}


def encode(ptype: str, value):
    if value is None:
        value = "" if ptype in ("rich_text", "title") else None
    if ptype == "title":
        return {"title": [{"type": "text", "text": {"content": str(value)}}]}
    if ptype == "rich_text":
        return {"rich_text": [{"type": "text", "text": {"content": str(value)}}] if value != "" else []}
    if ptype == "select":
        return {"select": {"name": str(value)} if value else None}
    if ptype == "status":
        return {"status": {"name": str(value)}}
    if ptype == "multi_select":
        values = value if isinstance(value, list) else [v.strip() for v in str(value).split(",") if v.strip()]
        return {"multi_select": [{"name": v} for v in values]}
    if ptype == "number":
        return {"number": None if value in ("", None) else float(value)}
    if ptype == "checkbox":
        return {"checkbox": bool(value)}
    if ptype == "url":
        return {"url": value or None}
    if ptype == "date":
        return {"date": {"start": value} if value else None}
    raise ValueError(f"Tipo de propiedad no soportado para escritura: {ptype}")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--ids", action="store_true", help="aplica data/id_changes.csv")
    ap.add_argument("--updates", type=Path, help="JSON con [{page_id, properties}]")
    ap.add_argument("--apply", action="store_true", help="ejecuta las escrituras (sin esto es dry-run)")
    ap.add_argument("--legacy", action="store_true")
    args = ap.parse_args()
    if not args.ids and not args.updates:
        ap.error("indica --ids o --updates archivo.json")

    cfg = kitlib.load_config()
    ncfg = cfg["notion"]
    props = cfg["properties"]

    updates: list[dict] = []
    if args.ids:
        if not kitlib.ID_CHANGES_PATH.exists():
            raise SystemExit("No existe data/id_changes.csv; corre build_skills.py primero.")
        with open(kitlib.ID_CHANGES_PATH, encoding="utf-8") as f:
            for row in csv.DictReader(f):
                updates.append({"page_id": row["page_id"], "properties": {props["id"]: row["new_id"]},
                                "_label": f"{row['title']}: {row['old_id'] or '—'} → {row['new_id']}"})
    if args.updates:
        for row in kitlib.load_json(args.updates, []):
            updates.append({"page_id": row["page_id"], "properties": row["properties"],
                            "_label": row.get("title") or row["page_id"]})

    if not updates:
        print("Nada que escribir.")
        return

    print(f"{len(updates)} páginas a actualizar" + ("" if args.apply else " (dry-run, añade --apply para ejecutar)"))
    for u in updates[:15]:
        print(f"  {u['_label']}  ←  {json.dumps(u['properties'], ensure_ascii=False)}")
    if len(updates) > 15:
        print(f"  … y {len(updates) - 15} más")
    if not args.apply:
        return

    token = os.environ.get("NOTION_TOKEN")
    if not token:
        raise SystemExit("Falta NOTION_TOKEN.")
    version = ncfg["legacy_api_version"] if args.legacy else ncfg["api_version"]
    client = Notion(token, version, ncfg.get("throttle_seconds", 0.35))
    types = schema_types(client, ncfg["data_source_id"], ncfg["database_id"], args.legacy)

    done = 0
    for u in updates:
        payload = {}
        for name, value in u["properties"].items():
            if name not in types:
                raise SystemExit(f"La propiedad '{name}' no existe en la base. Créala en Notion primero.")
            payload[name] = encode(types[name], value)
        client.request("PATCH", f"/pages/{u['page_id']}", body={"properties": payload})
        done += 1
        if done % 25 == 0:
            print(f"  {done}/{len(updates)}")
    print(f"Listo: {done} páginas actualizadas. Vuelve a correr export_notion.py y build_skills.py.")


if __name__ == "__main__":
    main()
