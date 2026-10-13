#!/usr/bin/env bash
# Prueba audit y build con la librería de fixture en una copia temporal del kit.
# Uso: bash tests/run_fixture.sh
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/.." && pwd)
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

cp -r "$ROOT/scripts" "$ROOT/config" "$TMP/"
mkdir -p "$TMP/skills"
for d in "$ROOT"/skills/*/; do
    n=$(basename "$d")
    mkdir -p "$TMP/skills/$n"
    cp "$d/SKILL.md" "$TMP/skills/$n/"
done
cd "$TMP"

fail() { echo "FAIL: $1" >&2; exit 1; }

python3 scripts/make_fixture.py > /dev/null
python3 scripts/audit_library.py > /dev/null
grep -q 'duplicados cercanos: 1 ' reports/audit.md || fail "la auditoría debía encontrar 1 par de duplicados"
grep -q 'errores de validación: 0' reports/audit.md || fail "la auditoría debía validar sin errores"

out=$(python3 scripts/build_skills.py --clean)
echo "$out" | grep -qE 'ux +6 fichas · 5 categorías' || fail "build ux: se esperaban 6 fichas en 5 categorías"
echo "$out" | grep -qE 'agentic +2 fichas · 1 categorías' || fail "build agentic: se esperaban 2 fichas"
echo "$out" | grep -q 'omitidas por Status: 1' || fail "la ficha Merged debía omitirse"
echo "$out" | grep -q 'siguiente ID libre UX: UX-645 · AGP: AGP-101' || fail "siguiente ID libre incorrecto: $out"
grep -q '^- Verify: Typing a partial value' skills/ux-library/references/forms-and-input.md || fail "falta la línea Verify de UX-118"
grep -q '^\*\*Quality Checks\.\*\*' skills/ux-library/references/design-systems-and-tokens.md || fail "falta la sección propia del documento"
grep -q '^1\. Inventory existing values' skills/ux-library/references/design-systems-and-tokens.md || fail "faltan los pasos numerados del documento"
grep -q '^Sources: \[Design Tokens Community Group\]' skills/ux-library/references/design-systems-and-tokens.md || fail "falta la fuente del documento"
grep -q '^- Avoid when: Simple, stateless models' skills/agentic-patterns/references/agentic-patterns.md || fail "falta Avoid when"
[ "$(grep -c '^| .* | index/by-category/' skills/ux-library/index/_overview.md)" = 5 ] || fail "el overview debía listar 5 categorías"

# partición por tamaño
python3 - <<'PY'
import json; from pathlib import Path
p = Path("config/build.json"); c = json.loads(p.read_text()); c["max_reference_bytes"] = 1500; p.write_text(json.dumps(c, indent=2))
PY
python3 scripts/build_skills.py --clean > /dev/null
[ -f skills/ux-library/references/forms-and-input/part-1.md ] || fail "la partición por tamaño no generó part-1.md"
grep -q '^## Part 1 ' skills/ux-library/index/by-category/forms-and-input.md || fail "el índice no anuncia las partes"
[ "$(grep -rho '^## UX-[0-9]*' skills/ux-library/references | sort | uniq -c | awk '$1!=1' | wc -l)" = 0 ] || fail "hay IDs repetidos entre partes"

# un ID repetido debe detener el build
cp library/forms-and-input/UX-118-*.md library/forms-and-input/UX-118-copy.md
if python3 scripts/build_skills.py --clean > /dev/null 2>&1; then fail "el build aceptó un ID repetido"; fi
rm library/forms-and-input/UX-118-copy.md

# un front matter inválido debe detener el build
printf -- '---\nid: UX-900\ntitle: Broken\ncategory: "Forms & Input"\nscore: 5\ntags: [a, b]\n---\n\n## Why\nx\n' > library/forms-and-input/UX-900-broken.md
if python3 scripts/build_skills.py --clean > /dev/null 2>&1; then fail "el build aceptó un front matter con secuencia [a, b]"; fi

echo "fixture OK"
