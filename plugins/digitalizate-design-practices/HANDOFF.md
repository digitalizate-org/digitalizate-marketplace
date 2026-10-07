# HANDOFF para Claude Code: completar ux-kit contra Notion

Eres la instancia que termina este trabajo. El kit ya está escrito y probado con datos de prueba; lo que falta es correrlo contra la base real de Notion, validar que el parseo no pierde contenido, llevar los IDs canónicos de vuelta a Notion, probar las skills sobre un proyecto real y ajustar lo que falle. Trabaja paso a paso, verifica cada paso con los criterios indicados antes de pasar al siguiente, y reporta al usuario con números, no con adjetivos.

Idioma con el usuario: español. Los SKILL.md y el contenido de la librería están en inglés; no los traduzcas.

## 0. Contexto que ya se sabe

- Base de Notion: "Design - Best Practices Library", database `460a9aed534483afb4a301699e3d9614`, data source `3dca9aed-5344-83a7-88bc-077efc9615a4`. Ambos están en `config/build.json`.
- La base tiene **843 fichas**, no 633. 633 es la cantidad de IDs distintos. El lote "Agentic Patterns" (198 fichas) reusó los IDs UX-357 a UX-552, que ya tenían las fichas de psicología. Hay **14 fichas sin ID** (títulos "Design - ..." y "AI - ..."). La descripción del campo ID en Notion dice "UX-001 through UX-356" y está desactualizada.
- "Agentic Patterns" son patrones de arquitectura de agentes (p. ej. "Intrinsic Alignment Pattern"), no prácticas de interfaz. El build los compila en una skill aparte (`agentic-patterns`, prefijo AGP) y la skill `ux-library` no los carga.
- Cada ficha tiene cuerpo con: imagen de wireframe, callout "When to use" (y a veces "Avoid when"), "What & Why", "How to Implement", "How to Present It", "Metrics Impact" y un toggle "Sources & References" o "Metrics & Use Cases". "How to Present It" es texto plantilla repetido y el build lo descarta (`drop_sections` en la config).
- Los wireframes apuntan a `files.catbox.moe` o `raw.githubusercontent.com`. No los descargues ni los valides; sólo se conserva el enlace.

Lee primero, en este orden: `README.md`, `config/build.json`, `skills/ux-library/SKILL.md`, `skills/ux-sync/SKILL.md`, y `scripts/kitlib.py` por encima para entender la asignación de IDs y el parseo de secciones.

## 1. Entorno

1. Confirma `python3 --version` ≥ 3.10. Los scripts usan sólo biblioteca estándar; no instales nada.
2. Pide al usuario el `NOTION_TOKEN` si no está en el entorno. Es un token de integración interna; la integración debe estar conectada a la página de la base (⋯ → Connections). No lo escribas en ningún archivo del repo.
3. Si el kit no está en un repo, haz `git init` y un commit inicial con todo lo que hay. `.gitignore` ya excluye `data/raw/`.
4. Valida el entorno con el fixture:
   ```bash
   python3 scripts/make_fixture.py
   python3 scripts/audit_library.py
   python3 scripts/build_skills.py --clean
   ```
   Criterio: el build reporta `ux 6 fichas` y `agentic 2 fichas`, `data/id_changes.csv` tiene 3 filas (dos AGP y un UX-501), `reports/duplicates.md` lista un par. Luego borra los artefactos del fixture: `rm -rf data/practices.json data/id_map.json data/id_changes.csv reports skills/ux-library/index skills/ux-library/references skills/agentic-patterns/index skills/agentic-patterns/references`.

## 2. Export de prueba (20 páginas)

```bash
python3 scripts/export_notion.py --limit 20
```

- Si la API responde 404 en `/data_sources/...`, usa `--legacy` en todas las llamadas de export y push de aquí en adelante, y anótalo en el reporte final.
- Si responde 401/403, la integración no está conectada a la base; díselo al usuario y espera.

Criterios sobre `data/practices.json` (escribe un script corto o usa Python inline para revisarlos):
- 20 entradas, todas con `title`, `category`, `score` y `context` no vacíos.
- Al menos 18 con `sections.how_to_implement` no vacío y `sections.what_why` no vacío.
- `sections.wireframe_url` no vacío en al menos 15.
- `sections.sources` con al menos un enlace en la mayoría.
- Ningún `body_md` contiene `<!-- bloque no soportado`. Si alguno lo contiene, lista los tipos de bloque y extiende `block_to_md` en `scripts/export_notion.py` para soportarlos; vuelve a correr con `--full --limit 20`.
- Abre una ficha en `data/raw/` y compara a ojo su `body_md` con la página en Notion (usa el MCP de Notion si está disponible). Lo que debe coincidir: encabezados, bullets de How to Implement, enlaces de Sources.

Si algo no cumple, arregla el parseo antes de seguir. Cualquier cambio en `kitlib.split_sections` o en el conversor de bloques se vuelve a validar con el fixture (paso 1.4) y con este export de prueba.

## 3. Export completo

```bash
python3 scripts/export_notion.py
```

Tarda entre 8 y 12 minutos por el rate limit (unas 1.700 llamadas). Si aparecen muchos 429, sube `throttle_seconds` a 0.5 en la config y continúa; el export es incremental y no repite lo ya bajado.

Criterios: `843` fichas (si Notion cambió desde el 6 de octubre de 2026 puede variar; reporta la cifra real), `sin cuerpo` = 0 en la auditoría del paso siguiente. Guarda el conteo de fichas sin `how_to_implement`.

## 4. Auditoría

```bash
python3 scripts/audit_library.py
```

Lee `reports/audit.md` y `reports/duplicates.md` completos. Verifica y reporta:
- IDs repetidos: se esperan 196. Fichas sin ID: se esperan 14. Si los números difieren, explica por qué (fichas nuevas, IDs corregidos a mano).
- "How to Present It" aparece como bloque repetido. Está bien, se descarta.
- "What & Why" **no** debería aparecer como repetido. Si lo está, lista las fichas afectadas: es un problema de contenido que el usuario debe conocer.
- Fichas sin "How to Implement": lista completa con enlace a Notion.
- Duplicados cercanos: revisa cada par con similitud de título ≥ 0.9 o contexto ≥ 0.9 y clasifícalos en tres grupos: (a) misma práctica, fusionar; (b) variantes legítimas, conservar; (c) dudoso. No fusiones nada tú; entrega la clasificación al usuario. Si en el grupo (a) hay más de 20 pares, el umbral está bien; si hay más de 60 o casi todos son falsos positivos, ajusta `duplicate_similarity` en la config y vuelve a correr.

## 5. Build

```bash
python3 scripts/build_skills.py --clean
```

Criterios:
- Grupo `ux` ≈ 645 fichas en 27 categorías; grupo `agentic` = 198 en 1 categoría. La suma debe ser 843 menos las omitidas por Status (hoy no hay propiedad Status, así que 0).
- `data/id_changes.csv` tiene 210 filas (196 reasignadas + 14 sin ID). Las reasignadas son todas de "Agentic Patterns" con prefijo AGP; las sin ID reciben UX-634 en adelante.
- Tamaño de archivos: corre `wc -c skills/ux-library/references/*.md skills/ux-library/references/*/*.md skills/agentic-patterns/references/*/*.md | sort -n | tail -15`. Regla de trabajo: 4 caracteres ≈ 1 token. Ningún archivo de `references/` debería superar 120 KB. Si alguno lo supera, baja `split_threshold` en la config (p. ej. a 40) y reconstruye con `--clean`. "Human Biases in Interfaces" (85 fichas) debe quedar partida por subcategoría; "Gestalt Principles" (55) no, salvo que exceda el tamaño.
- Los índices de `index/by-category/` no deberían superar 12 KB cada uno.
- Abre `skills/ux-library/index/_overview.md` y confirma que la tabla de categorías lista 27 filas con sus rutas.

## 6. Revisión de contenido compilado

Toma 8 fichas al azar del grupo ux (distintas categorías, al menos dos con score 5 y una con score 2) y 3 del grupo agentic. Para cada una compara el bloque en `references/` con su `body_md` en `data/practices.json`:
- `Use when` presente y sin el prefijo repetido "Use when: Use when:".
- `Avoid when` presente cuando la ficha lo tiene.
- Todos los bullets de How to Implement están en **Do.** (cuenta bullets en ambos lados).
- **Why.** es el primer tramo de What & Why cortado en fin de oración, no a mitad de palabra.
- **Measure.** es una línea legible, sin restos de `**` ni encabezados huérfanos.
- Las fuentes aparecen como enlaces y el enlace a Notion al final.

Si encuentras un patrón de pérdida (por ejemplo, listas anidadas que se pierden, tablas, callouts con varios párrafos), corrige `build_skills.py` o `kitlib.py`, vuelve a probar con el fixture y reconstruye. Anota en el reporte qué cambiaste y por qué.

## 7. Consistencia del router

`skills/ux-library/SKILL.md` tiene una tabla "Screen type → categories" mantenida a mano con slugs. Compara cada slug con los que aparecen en `index/_overview.md` (columna Index). Corrige en el SKILL.md cualquier slug que no exista. Haz lo mismo con los ejemplos de slugs de objetivos en la sección "Goal → index".

Actualiza también la primera línea del `description` de `skills/ux-library/SKILL.md` si la cifra "~645" quedó lejos de la real.

## 8. Push de IDs a Notion

Este paso escribe en Notion. Requiere aprobación explícita del usuario.

1. `python3 scripts/push_notion.py --ids` (dry-run). Muestra al usuario el resumen: cuántas filas, ejemplos de las dos clases (reasignadas y sin ID), y pregunta si procede.
2. Sólo con un "sí" claro: `python3 scripts/push_notion.py --ids --apply`.
3. Después: `python3 scripts/export_notion.py && python3 scripts/build_skills.py --clean`. Criterio: `data/id_changes.csv` queda con sólo la fila de encabezado y `data/id_map.json` no cambia (compara su hash antes y después).
4. Recuérdale al usuario actualizar a mano la descripción del campo ID en Notion ("UX-001 through UX-356" ya no es cierto).

Nunca borres páginas ni modifiques en Notion otra cosa que la propiedad ID en este paso.

## 9. Propiedades nuevas en Notion

Propón al usuario crear cuatro propiedades: `Status` (select: Proposed, Merged, Deprecated), `How to Verify` (texto), `Verifiable By` (select: lint, test, visual, judgment), `Anti-pattern` (texto). Los nombres están en `config/build.json` → `properties`.

Opciones: el usuario las crea en la interfaz de Notion, o tú las creas con `PATCH /v1/data_sources/{id}` (o `/v1/databases/{id}` en modo legacy) enviando el objeto `properties` con los tipos indicados. Si lo haces por API, muestra primero el payload exacto y espera aprobación. Después de crearlas, vuelve a exportar para que `practices.json` traiga los campos (vacíos por ahora).

## 10. Instalación y prueba de las skills

1. Averigua cómo cargar un plugin local en esta versión de Claude Code (`claude --help`; busca `--plugin-dir` o el equivalente). Si no hay opción de carpeta local, usa la vía que exista (marketplace local). Documenta el comando exacto en el README, sección "Instalación en Claude Code", reemplazando la nota tentativa.
2. Pide al usuario un proyecto real con interfaz para probar. Si no indica uno, pregunta antes de elegir.
3. Copia `templates/design-decisions.md` a la raíz de ese proyecto y llena el contexto con lo que puedas inferir del código; marca lo que no sepas.
4. Corre `/ux-review` sobre una pantalla concreta de ese proyecto. Evalúa el resultado contra estos criterios y anótalo:
   - Cada hallazgo cita un ID que existe en `references/` (verifica con grep los primeros cinco).
   - Cada hallazgo tiene evidencia con archivo y líneas o región de pantalla.
   - Ningún ID AGP en una pantalla que no es de agentes.
   - No más de 15 hallazgos; los de score 5 salen primero.
   - El reporte respeta las excepciones de `design-decisions.md` si las hay.
5. Corre `/ux-build` sobre una pantalla pequeña nueva o un cambio acotado. Criterios: shortlist de 5 a 15 prácticas, referencias abiertas antes de construir, entrada añadida a `design-decisions.md` con el formato del template.
6. Si alguna skill falla un criterio, corrige su SKILL.md (no el contenido generado) y repite la prueba una vez. Registra qué cambiaste. Guarda los prompts de prueba en `evals/evals.json` con el esquema simple `{skill_name, evals: [{id, prompt, expected_output, files}]}` para reutilizarlos.

## 11. Piloto de enriquecimiento

Sólo si los pasos anteriores quedaron verdes y el usuario está de acuerdo. Corre `/ux-enrich forms-and-input --min-score 4` (unas 14 fichas). Entrega la tabla para revisión y guarda `data/enrichment/forms-and-input.json`. No lo empujes a Notion en esta sesión salvo instrucción explícita; con el JSON guardado, `build_skills.py` ya lo mezcla en las referencias.

## 12. Cierre

1. Commit con mensaje descriptivo. Incluye `skills/`, `data/practices.json`, `data/id_map.json`, `reports/`, `config/`, `scripts/`, `README.md`. Excluye `data/raw/`.
2. Reporte final al usuario, en este orden y con cifras:
   - Fichas exportadas, sin cuerpo, sin How to Implement.
   - Colisiones resueltas, IDs nuevos, estado del push.
   - Duplicados: cuántos en cada grupo (fusionar / conservar / dudoso), con los pares del grupo "fusionar".
   - Tamaños: archivo de referencia más grande, índice más grande, umbral de split usado.
   - Qué cambiaste en scripts o SKILL.md y por qué.
   - Resultado de las pruebas de `/ux-review` y `/ux-build` contra los criterios del paso 10.
   - Pendientes que requieren decisión del usuario.

## Reglas durante todo el trabajo

- Nunca ejecutes `push_notion.py --apply` ni crees propiedades en Notion sin un "sí" explícito del usuario en esa misma conversación.
- No edites a mano nada dentro de `index/` ni `references/`; se regeneran. Si el contenido está mal, arregla el script o la ficha en Notion.
- Mantén los scripts sin dependencias externas. Si algo necesita una librería, pregunta antes.
- Cada cambio en un script se valida con el fixture antes de usarlo con datos reales.
- Si un criterio no se cumple y no puedes arreglarlo en dos intentos, para y reporta en vez de seguir acumulando pasos sobre una base rota.
- No inventes cifras en el reporte final; si no mediste algo, dilo.
