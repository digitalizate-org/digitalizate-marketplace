# ux-kit

Plugin de Claude Code que convierte la base de Notion "Design - Best Practices Library" en skills que un agente puede usar para construir y auditar interfaces citando prácticas por ID.

Notion sigue siendo la fuente de verdad. Los archivos de `skills/ux-library/index` y `references` se regeneran con `/ux-sync` y no se editan a mano.

## Qué incluye

| Pieza | Para qué |
|---|---|
| `skills/ux-library` | La librería compilada. Índices de una línea por práctica y referencias completas por categoría. La leen las otras skills. |
| `skills/ux-build` | Pre-flight antes de diseñar o implementar una pantalla. Elige prácticas, las aplica y registra decisiones en `design-decisions.md`. |
| `skills/ux-review` | Auditoría de código, capturas o URLs. Devuelve hallazgos con ID, severidad, evidencia y arreglo. |
| `skills/ux-sync` | Corre el pipeline de scripts y resume qué cambió. |
| `skills/ux-enrich` | Fase 2. Propone "How to Verify", "Verifiable By" y "Anti-pattern" por práctica para que los revises. |
| `skills/agentic-patterns` | Los 198 patrones de arquitectura de agentes, separados porque no son prácticas de interfaz. |
| `scripts/` | Export desde Notion, auditoría, build, push de cambios a Notion. Solo biblioteca estándar de Python. |
| `templates/design-decisions.md` | Plantilla del registro por proyecto. |

## Requisitos

- Python 3.10 o superior.
- Un token de integración interna de Notion con acceso a la base. Settings → Connections → Develop or manage integrations → New integration. Luego abre la base, menú ⋯ → Connections → agrega la integración.

```bash
export NOTION_TOKEN=ntn_xxx
```

## Primera sincronización

```bash
python scripts/export_notion.py          # baja 843 fichas con cuerpo, 8 a 10 min por el rate limit
python scripts/audit_library.py          # reports/audit.md y reports/duplicates.md
python scripts/build_skills.py --clean   # genera index/ y references/, asigna IDs canónicos
```

Lo que vas a encontrar en la auditoría, porque ya lo vi en la base:

- 196 IDs repetidos. El lote "Agentic Patterns" reusó UX-357 a UX-552, que ya tenían las fichas de psicología. El build deja el ID a la ficha de psicología y da AGP-001 en adelante a las agénticas.
- 14 fichas sin ID: 12 de proceso de design system con título "Design - ..." (reciben UX-634 a UX-645) y 2 con título "AI - ..." en la categoría Agentic Patterns (reciben AGP-004 y AGP-005).
- La descripción del campo ID dice "UX-001 through UX-356". Actualízala en Notion.

Para que Notion y el plugin coincidan:

```bash
python scripts/push_notion.py --ids          # muestra qué escribiría
python scripts/push_notion.py --ids --apply  # escribe los IDs canónicos en Notion
python scripts/export_notion.py && python scripts/build_skills.py --clean
```

`data/id_map.json` guarda la relación página → ID canónico. Súbelo al repo junto con `skills/` y `data/practices.json`. `data/raw/` es caché y puede quedar fuera.

## Propiedades que conviene crear en Notion

El plugin funciona sin ellas, pero cada una abre algo:

- `Status`, tipo select, con opciones Proposed, Merged, Deprecated. El build omite esas tres; vacío o cualquier otro valor cuenta como activa. Sirve para el ciclo de propuestas que generan ux-build y ux-review, y para retirar duplicados sin borrarlos.
- `How to Verify`, texto. Condición que se responde sí o no. Sin ella el reviewer recita la práctica en vez de comprobarla.
- `Verifiable By`, select con lint, test, visual, judgment. Las de lint y test se pueden mover a CI.
- `Anti-pattern`, texto. Cómo se ve la práctica mal hecha.

Los nombres se configuran en `config/build.json`. `/ux-enrich` propone los valores por categoría y `push_notion.py --updates` los escribe cuando los apruebes.

## Instalación en Claude Code

Verificado con Claude Code 2.1.292: `claude --plugin-dir <ruta>` carga un plugin desde una carpeta o un `.zip` sólo para esa sesión y se puede repetir para cargar varios. Antes de probarlo, `claude plugin validate <ruta>` comprueba el manifiesto.

```bash
claude plugin validate /ruta/a/ux-kit
cd /ruta/al/proyecto
claude --plugin-dir /ruta/a/ux-kit
```

Las skills quedan disponibles por nombre y como comandos: `/ux-build`, `/ux-review`, `/ux-sync`, `/ux-enrich`.

Para `/ux-sync` y `/ux-enrich` abre Claude Code en la carpeta del kit (ahí viven `scripts/` y `data/`) y carga el plugin desde otra ruta, una copia o la instalación desde marketplace: Claude Code bloquea las escrituras del agente (herramientas de archivos y comandos Bash) dentro del directorio cargado con `--plugin-dir`, así que si plugin y carpeta de trabajo son la misma ni `/ux-sync` puede escribir en `data/` ni `/ux-enrich` guardar su JSON (verificado en 2.1.292). Para una instalación permanente el plugin tiene que publicarse en un marketplace (`claude plugin marketplace add` acepta una ruta local o un repositorio); ese flujo no se probó aquí.

En claude.ai puedes subir cada carpeta de `skills/` como skill individual. La de `ux-library` pesa lo que pesen las referencias, así que conviene subirla después del primer build y no antes.

## Uso en un proyecto

1. Copia `templates/design-decisions.md` a la raíz del repo y llena el contexto del producto.
2. Al construir: `/ux-build pantalla de alta de clientes con validación de NIT y dirección`. Deja los IDs aplicados y las excepciones en `design-decisions.md`.
3. Al revisar: `/ux-review src/pages/Checkout.tsx` o una captura. Los hallazgos citan IDs; lo que el proyecto marcó como excepción no vuelve a salir.
4. Cuando una revisión encuentra un problema recurrente sin práctica en la librería, lo deja en "Library proposals". Crea la ficha en Notion con Status Proposed, revísala, y el siguiente `/ux-sync` la compila.

## Probar sin token

```bash
python scripts/make_fixture.py    # escribe un data/practices.json de prueba
python scripts/audit_library.py && python scripts/build_skills.py --clean
```

El fixture reproduce los casos reales: ID único, IDs repetidos entre psicología y agéntico, ficha sin ID, duplicado cercano y una ficha con Status Merged.

## Estructura

```
ux-kit/
├── .claude-plugin/plugin.json
├── config/build.json              mapa de categorías a grupos, prefijos de ID, secciones que se descartan
├── scripts/
│   ├── export_notion.py           Notion → data/practices.json, caché incremental en data/raw/
│   ├── audit_library.py           colisiones, sin ID, duplicados, plantilla repetida, secciones faltantes
│   ├── build_skills.py            practices.json → index/ y references/ de cada skill
│   ├── push_notion.py             IDs canónicos y propiedades de vuelta a Notion, dry-run por defecto
│   ├── make_fixture.py            datos de prueba
│   └── kitlib.py                  lo compartido
├── skills/
│   ├── ux-library/   SKILL.md + index/ + references/   (generados)
│   ├── agentic-patterns/  SKILL.md + index/ + references/   (generados)
│   ├── ux-build/     SKILL.md
│   ├── ux-review/    SKILL.md
│   ├── ux-sync/      SKILL.md
│   └── ux-enrich/    SKILL.md
├── templates/design-decisions.md
├── evals/evals.json               prompts y criterios de las pruebas de ux-review y ux-build
├── data/                          practices.json, id_map.json, id_changes.csv, raw/, enrichment/
└── reports/                       audit.md, duplicates.md
```

## Decisiones de diseño del kit

- La llave real es el ID de página de Notion. Los IDs UX-xxx son etiquetas para citar y se asignan de forma estable desde `id_map.json`.
- Las referencias descartan "How to Present It" porque es texto plantilla repetido entre fichas. Si en algún momento lo personalizas, quítalo de `drop_sections` en la config.
- Las categorías con más de 60 fichas se parten por subcategoría para que el agente no cargue 30 mil tokens por una consulta. Si no hay subcategorías útiles o el archivo superaría `max_reference_bytes` (120 KB), se parten por tamaño en `part-N.md`, ordenadas por score y luego por ID; el índice de la categoría dice qué parte contiene cada ficha.
- Las prácticas de score 3 solo entran cuando el contexto coincide, y las de 1 y 2 solo a pedido. Está en el SKILL.md de la librería y en el overview generado.
