# digitalizate-design-practices

Plugin de Claude Code con una librería de 843 buenas prácticas de UX, product design y patrones de agentes, escrita en markdown y versionada en este repositorio, más las skills que la usan para construir y auditar interfaces citando prácticas por ID.

El plugin vive en `plugins/digitalizate-design-practices/` y la raíz del repositorio es su marketplace; todas las rutas de este README son relativas a esa carpeta salvo que se diga lo contrario. La fuente de verdad es `library/<categoría>/<ID>-<slug>.md`: un archivo por ficha. Los archivos de `skills/*/index/` y `skills/*/references/` se compilan desde ahí con `/ux-sync` y no se editan a mano. La librería nació como copia de la base pública de Notion de 30k Strategy (https://30kstrategy.notion.site/83d76ed618e4463db4a6d78396feeff1), importada el 2026-10-07; Notion ya no interviene en el flujo.

## Qué incluye

| Pieza | Para qué |
|---|---|
| `library/` | Las fichas. 645 de UX en 27 categorías y 198 patrones de agentes en `agentic-patterns/`. |
| `skills/ux-library` | La librería compilada: índices de una línea por práctica y referencias completas por categoría. La leen las otras skills. |
| `skills/ux-build` | Pre-flight antes de diseñar o implementar una pantalla. Elige prácticas, las aplica y registra decisiones en `design-decisions.md`. |
| `skills/ux-review` | Auditoría de código, capturas o URLs. Devuelve hallazgos con ID, severidad, evidencia y arreglo. |
| `skills/ux-sync` | Valida, audita y recompila la librería; resume qué cambió. |
| `skills/ux-enrich` | Propone `verify`, `verifiable_by` y `anti_pattern` en el front matter de cada ficha, para revisarlos en el diff. |
| `skills/agentic-patterns` | Los 198 patrones de arquitectura de agentes, separados porque no son prácticas de interfaz. |
| `scripts/` | Validación, auditoría y build. Solo biblioteca estándar de Python. `import_notion.py` queda para reimportar desde una base de Notion si hiciera falta. |
| `tests/run_fixture.sh` | Prueba audit y build con una librería de fixture en una copia temporal. |
| `templates/design-decisions.md` | Plantilla del registro por proyecto. |
| `evals/evals.json` | Prompts y criterios de las pruebas de `ux-review` y `ux-build`. |

## Requisitos

Python 3.10 o superior, sin dependencias. No hace falta ningún token: solo `import_notion.py` necesita `NOTION_TOKEN`.

## Instalación

El repositorio es el marketplace privado (`.claude-plugin/marketplace.json` en la raíz) y contiene el plugin en `plugins/digitalizate-design-practices/`, el layout que piden Claude Code y la sincronización de claude.ai. Puede instalarlo quien tenga acceso de lectura al repo en GitHub: el control de acceso es el del repositorio, así que para dar acceso a alguien basta con añadirlo como colaborador.

### Claude Code (terminal, app de escritorio y VS Code)

```bash
claude plugin marketplace add digitalizate-org/digitalizate-design-practices
claude plugin install digitalizate-design-practices@digitalizate
```

Claude Code clona el repo con las credenciales de git de la máquina y nunca pregunta: hace falta una llave SSH para github.com cargada en el agente, o credenciales HTTPS guardadas (`gh auth login` y luego `gh auth setup-git`). Las skills aparecen con el prefijo del plugin: `/digitalizate-design-practices:ux-review`, `…:ux-build`, `…:ux-sync` y `…:ux-enrich`; al escribir `/ux-review` el menú las filtra. Para recibir cambios: `claude plugin update digitalizate-design-practices@digitalizate`, o activa la actualización automática del marketplace en `/plugin` → Marketplaces. Claude Code solo descarga una versión nueva cuando cambia `version` en `.claude-plugin/plugin.json`, así que súbela al publicar.

### claude.ai y Cowork

En claude.ai: **Customize → Plugins → Add → Add marketplace** con `digitalizate-org/digitalizate-design-practices`. Para un repo privado el diálogo pide conectar la cuenta de GitHub y dar acceso al repo a la Claude GitHub App. El plugin queda guardado en la cuenta: sus skills funcionan en el chat y en Cowork, y Claude Code lo sincroniza como `digitalizate-design-practices@synced` al iniciar sesión con esa cuenta. Si usas esta vía no lo instales además con el CLI, o tendrás las skills dos veces.

### Para desarrollar

Verificado con Claude Code 2.1.292: `claude --plugin-dir /ruta/al/checkout/plugins/digitalizate-design-practices` carga el plugin solo para esa sesión, sin instalarlo; `claude plugin validate /ruta/al/checkout` comprueba el marketplace y el manifiesto del plugin. Para `/ux-sync` y `/ux-enrich` abre Claude Code en `plugins/digitalizate-design-practices/` (ahí viven `scripts/` y `library/`) con el plugin cargado desde otra ruta, por ejemplo la instalación del marketplace: Claude Code bloquea las escrituras del agente (herramientas de archivos y comandos Bash) dentro del directorio cargado con `--plugin-dir`, así que si plugin y carpeta de trabajo son la misma ninguna de las dos skills puede escribir.

## Compilar la librería

Desde `plugins/digitalizate-design-practices/`:

```bash
python3 scripts/audit_library.py         # reports/audit.md y reports/duplicates.md
python3 scripts/build_skills.py --clean  # valida library/ y genera index/ y references/
bash tests/run_fixture.sh                # prueba audit y build con el fixture, en una copia temporal
```

El build se detiene si hay IDs repetidos o inválidos, prefijos que no corresponden al grupo de la categoría, carpetas que no coinciden con el slug de la categoría, front matter fuera de la gramática o scores fuera de 1 a 5. Al final imprime el siguiente ID libre de cada prefijo.

## Editar o añadir una ficha

```markdown
---
id: "UX-209"
title: "Single-Column Form Layouts and Logical Field Sequencing"
category: "Forms & Input"
subcategory: "Form layout and field ordering"
score: 5
context: "Apply to all forms with more than 3 fields."
avoid_when: "Two or three short, inseparable fields such as City / State / ZIP."
goals:
  - "Design Forms That Work"
tags:
  - "forms"
verify: "In a form with more than 3 fields, each row holds one field, except short inseparable groups."
verifiable_by: "visual"
anti_pattern: "A two-column grid of unrelated fields that makes the eye zig-zag."
wireframe: "https://files.catbox.moe/cqdxwn.jpg"
---

## Why
Por qué funciona, con la evidencia que haya.

## How to implement
- Pasos concretos, uno por viñeta.

## Metrics
Qué métricas mueve y cómo medirlo.

## Sources
- [Nombre de la fuente](https://…)
```

- Front matter en un subconjunto de YAML: escalares de una línea entre comillas dobles, enteros, y listas de texto con `- "item"`. Sin bloques `|` o `>`, sin `[a, b]`, sin mapas anidados. `verify`, `verifiable_by` (`lint`, `test`, `visual` o `judgment`), `anti_pattern`, `avoid_when`, `wireframe` y `status` son opcionales.
- El archivo se llama `<ID>-<slug>.md` y vive en la carpeta con el slug de su categoría (`Forms & Input` → `forms-and-input/`). El `id` lleva el prefijo del grupo: `UX-` para todas las categorías salvo Agentic Patterns, que usa `AGP-`. Para una ficha nueva usa el siguiente ID libre que imprime el build.
- `status: "Proposed"`, `"Merged"` o `"Deprecated"` deja la ficha fuera del build sin borrarla; sirve para las propuestas que generan `ux-build` y `ux-review` y para retirar duplicados.
- Cualquier otra sección `## …` del cuerpo se conserva como bloque propio en la referencia compilada (así están las 14 fichas de proceso "Design - …" y "AI - …").
- Después de editar: `python3 scripts/build_skills.py --clean` y commit de `library/` y `skills/` juntos.

## Uso en un proyecto

1. Copia `templates/design-decisions.md` a la raíz del repo y llena el contexto del producto.
2. Al construir: `/ux-build pantalla de alta de clientes con validación de NIT y dirección`. Deja los IDs aplicados y las excepciones en `design-decisions.md`.
3. Al revisar: `/ux-review src/pages/Checkout.tsx` o una captura. Los hallazgos citan IDs; lo que el proyecto marcó como excepción no vuelve a salir.
4. Cuando una revisión encuentra un problema recurrente sin práctica en la librería, lo deja en "Library proposals". Crea la ficha en `library/` con `status: "Proposed"`, revísala, quita el status y el siguiente `/ux-sync` la compila.

## Enriquecimiento

`/ux-enrich <categoría> [--min-score N]` escribe `verify`, `verifiable_by` y `anti_pattern` en el front matter de las fichas de esa categoría; se revisan con `git diff library/<categoría>/` y se compilan con `/ux-sync`. Las 14 fichas de Forms & Input con score 4 y 5 ya los tienen; el resto de la librería está pendiente.

## Reimportar desde Notion (opcional)

```bash
export NOTION_TOKEN=ntn_xxx
python3 scripts/import_notion.py --clean   # reescribe library/ desde la base de config/build.json → notion
```

Cada página necesita un ID válido (`UX-001`, `AGP-001`) en su propiedad ID; el script se detiene y las lista si falta alguno. La caché por página queda en `data/raw/` (ignorada por git). Es solo para traer una copia nueva: después, la librería en markdown vuelve a ser la fuente. El texto plantilla "How to Present It", idéntico en decenas de fichas, no se importa.

## Estructura

```
digitalizate-design-practices/            repositorio = marketplace privado
├── .claude-plugin/marketplace.json
├── README.md
├── docs/                          historia del proyecto
└── plugins/digitalizate-design-practices/   el plugin
    ├── .claude-plugin/plugin.json
    ├── config/build.json              grupos por categoría, prefijos de ID, umbrales de partición, ajustes del importador
    ├── library/<categoría>/<ID>-<slug>.md   la fuente de verdad
    ├── scripts/
    │   ├── build_skills.py            library/ → index/ y references/ de cada skill; valida antes
    │   ├── audit_library.py           validación, duplicados cercanos, texto repetido, secciones faltantes
    │   ├── import_notion.py           reimportación desde Notion (opcional)
    │   ├── make_fixture.py            librería de prueba
    │   └── kitlib.py                  front matter, carga y validación de la librería, parseo de secciones
    ├── skills/
    │   ├── ux-library/   SKILL.md + index/ + references/   (generados)
    │   ├── agentic-patterns/  SKILL.md + index/ + references/   (generados)
    │   ├── ux-build/     SKILL.md
    │   ├── ux-review/    SKILL.md
    │   ├── ux-sync/      SKILL.md
    │   └── ux-enrich/    SKILL.md
    ├── tests/run_fixture.sh
    ├── templates/design-decisions.md
    ├── evals/evals.json
    └── reports/                       audit.md, duplicates.md
```

## Decisiones de diseño

- El plugin va en `plugins/<nombre>/` y el marketplace en la raíz: la sincronización de claude.ai solo acepta fuentes relativas que empiecen por `./` dentro de carpetas del repo, y es el layout de todos los ejemplos de la documentación.
- Markdown versionado como fuente de verdad: sin API, sin token, historial y revisión por ficha con git, y el agente puede proponer fichas como archivos. Notion fue solo el origen de la copia.
- Los IDs `UX-xxx` y `AGP-xxx` son la identidad de cada archivo. El build rechaza duplicados y prefijos ajenos al grupo, y nunca renumera.
- Las categorías con más de 60 fichas se parten por subcategoría; si no hay subcategorías útiles o el archivo superaría `max_reference_bytes` (120 KB) se parten por tamaño en `part-N.md`, ordenadas por score y luego por ID. El índice de la categoría dice qué parte contiene cada ficha.
- Las prácticas de score 3 solo entran cuando el contexto coincide, y las de 1 y 2 solo a pedido. Está en el SKILL.md de la librería y en el overview generado.
- Lo que había en Notion y no está aquí: el boilerplate "How to Present It" y el export crudo (`data/practices.json`), ambos recuperables en el historial de git (commit `c4c4205`).
