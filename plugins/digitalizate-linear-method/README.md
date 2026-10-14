# digitalizate-linear-method

Plugin de Claude Code (y de claude.ai con el conector de Linear) para trabajar en Linear según el Linear Method: un canon de reglas con fuentes, una auditoría sobre datos reales del workspace, pre-flight al crear objetos, implantación desde cero, correcciones en lote con deshacer y planificación de ciclos. Los guards bloquean las escrituras que rompen las reglas duras.

## Qué incluye

| Pieza | Para qué | Cómo se invoca |
|---|---|---|
| `linear-library` | Canon de 143 reglas (`LM-001`…) con score, tier de fuente, evidencia y criterio de verificación | Lo consultan las demás skills; también sirve para preguntar "qué dice el método sobre X" |
| `linear-audit` | Diagnóstico de un team o del workspace: señales automáticas sobre un snapshot del API más hallazgos de juicio, citando IDs con evidencia numérica | `/linear-audit [team]` |
| `linear-build` | Pre-flight y plantillas para crear issues, proyectos, specs, iniciativas, updates, ciclos, decisiones de triage y labels | `/linear-build <qué quieres crear>` |
| `linear-setup` | Implantación canónica desde cero: teams, estados, labels, ciclos, triage, plantillas, integraciones, `linear-decisions.md` | `/linear-setup [team]` |
| `linear-fix` | Correcciones desde los hallazgos, en lote y reversibles, con log por run y `undo` | `/linear-fix` |
| `linear-plan` | Planificación y revisión de ciclos con capacidad medida | `/linear-plan [team] [next, current, review]` |
| `linear-sync` | Recompila índices y references desde `library/` y corre las pruebas | `/linear-sync` |
| Hooks | `PreToolUse` bloquea escrituras del MCP que violan reglas duras; `PostToolUse` registra cada escritura y muestra las advertencias | Automático en Claude Code |

## Requisitos

- Node 20.6 o superior.
- El MCP de Linear conectado en Claude Code o en claude.ai.
- `LINEAR_API_KEY` en el entorno para `snapshot.ts` y `fix.ts` (la auditoría por MCP sin API key es más ligera y lo dice en el informe).

## Instalación

Desde el marketplace de Digitalízate. Los repos son privados: hace falta una credencial git con lectura (`gh auth login` y `gh auth setup-git`).

```
/plugin marketplace add digitalizate-org/digitalizate-marketplace
/plugin install digitalizate-linear-method@digitalizate
```

En local durante el desarrollo:

```bash
claude --plugin-dir /ruta/a/digitalizate-marketplace/plugins/digitalizate-linear-method
```

Dentro de `plugins/digitalizate-linear-method/`, una vez:

```bash
npm install
npm run build   # recompila skills/linear-library/index y references
npm test        # 24 pruebas: librería, motor de señales, fixtures, guard, redacción de issues
```

Los scripts se ejecutan con `npx --yes tsx`, así que las skills funcionan aunque no se haya hecho `npm install` en la carpeta del plugin.

## Primeros pasos

Probar el pipeline sin tocar un workspace real:

```bash
cd /tu/proyecto
npx tsx /ruta/al/plugin/scripts/fixture.ts messy     # workspace sintético con todos los antipatrones
npx tsx /ruta/al/plugin/scripts/evaluate.ts          # informe de señales en markdown
npx tsx /ruta/al/plugin/scripts/fix.ts plan --include LM-118,LM-128
npx tsx /ruta/al/plugin/scripts/fix.ts apply --owner "Tu nombre" --dry-run
```

Auditar un workspace real:

```bash
export LINEAR_API_KEY=lin_api_...
npx tsx /ruta/al/plugin/scripts/snapshot.ts --team ENG
npx tsx /ruta/al/plugin/scripts/evaluate.ts
```

Todo lo que generan los scripts vive en `.linear-method/` del proyecto: `snapshot.json`, `raw.json`, `findings.json`, `plan.json`, `runs/`, `mcp-writes.log`, `warnings.log`.

## Convenciones del workspace

`linear-decisions.md` (en la raíz del proyecto, `.linear-method/` o `docs/`) guarda las decisiones del equipo: teams y su razón, duración de ciclo, rota de triage, definiciones de prioridad, Definition of Done, política de agentes, excepciones a reglas (`LM-108: razón`), el lector principal de las issues (`issue.primary_reader: technical | business | external`, sección «Issue writing»; sin esa línea el plugin sigue el método) y overrides de umbrales en un bloque JSON, con tres números opcionales bajo la clave `writing`: `description_max_chars` (2500, texto fuera del checklist), `subissue_batch_count` (5) y `subissue_batch_minutes` (10). La plantilla está en `templates/linear-decisions.md`. Las skills lo leen antes de actuar y lo actualizan cuando establecen una convención nueva.

## Autonomía y seguridad

El plugin está configurado para ejecutar sin pedir confirmación. La seguridad viene de otro lado:

- Guards deterministas sobre cada escritura del MCP: título corto y sin formato de user story, labels que no sean estados ni prioridades, Urgent solo con justificación de incidente, proyecto con lead, update con salud, issue delegado con asignado humano. Lo grave se bloquea; lo leve se avisa después de la escritura. Tres avisos nuevos, ninguno bloquea: descripción de más de 2 500 caracteres fuera del checklist (LM-161), al crear y al editar; rastro técnico en la descripción (LM-160), solo si `linear-decisions.md` declara lector `business` o `external`; y la quinta sub-issue del mismo padre en diez minutos (LM-165), a partir de `mcp-writes.log`, que ahora registra `parentId`.
- Crear más de una issue desde una misma fuente propone la lista primero y crea tras la confirmación de un humano (LM-095).
- Operaciones reversibles únicamente: archivar, cancelar con comentario, retirar labels, cambiar ajustes. Nunca borrar.
- Cada escritura queda en `.linear-method/mcp-writes.log` con el dueño del run (`LINEAR_METHOD_RUN_OWNER`). Cada run de `fix.ts` guarda sus operaciones con su inversa en `.linear-method/runs/` y se revierte con `fix.ts undo --run <archivo>`.
- Lotes con tope por ejecución (200 por defecto) y un comentario estándar en cada objeto tocado.
- La salud de un proyecto la escribe el lead; el agente solo redacta el borrador.

Los dos precedentes reales (Langfuse y la propia Linear) dejan los cambios de estado a una persona. Este plugin elige autonomía completa y compensa con lo anterior. Para desactivar el guard en una emergencia: `LINEAR_METHOD_GUARD=off` (queda registrado).

## El canon

Una regla por archivo en `library/<categoría>/LM-nnn-slug.md`, con frontmatter: `id`, `kind` (principle, practice, model, antipattern, signal), `score`, `source_tier`, `sources` con URL y fecha, `use_when`, `verify`, `verifiable_by`, y en las señales `check`, `check_scope` y `severity`. Los tiers distinguen lo que dice Linear (`official-method`, `official-docs`), cómo trabaja Linear según entrevistas (`linear-internal`), casos reales de otras empresas (`evidence`) y recomendaciones del autor (`interpretation`, score 3 como máximo). `external-method` recoge métodos y documentación de fuera de Linear; ante un conflicto con el método gana `official-method`, salvo que la entrada declare la desviación en el campo `deviates_from`, que el build lista en `index/_overview.md`. Ningún caso simulado se cita como evidencia.

Para añadir una regla: copia un archivo vecino, toma el siguiente ID libre del bloque de su categoría y ejecuta `/linear-sync`. El bloque de señales LM-100 a LM-139 está lleno: las señales nuevas continúan en LM-170 a LM-179. El build muestra el estado `Proposed` en el índice y en las referencias, y lista esas entradas en `_overview.md`. La categoría `writing` (LM-160 a LM-168) reúne las reglas de redacción de issues. Una señal nueva necesita además su métrica en `scripts/lib/metrics.ts` y una prueba.

## Estructura

```
.claude-plugin/plugin.json    manifiesto
library/                      canon (fuente de verdad)
skills/                       siete skills; linear-library lleva index/ y references/ generados
hooks/                        hooks.json, rules.mjs (reglas puras), guard.mjs, log.mjs
scripts/                      snapshot.ts, evaluate.ts, fix.ts, fixture.ts, build-index.ts, lib/
templates/                    bug, tarea (técnica y de negocio), solicitud, soporte, spec, update, iniciativa, linear-decisions
tests/                        helpers con fixtures, evaluate.test.ts, guard.test.ts, writing.test.ts
docs/HANDOFF.md               lista de verificación en vivo para Claude Code
```

## Límites conocidos

- Los hooks solo existen en Claude Code. En claude.ai el pre-flight de `linear-build` es el único guard.
- El MCP de Linear no cambia ajustes de team; eso lo hace `fix.ts` por GraphQL o la interfaz de Linear.
- Los nombres de las herramientas del MCP se verificaron en claude.ai (`save_issue`, `save_project`, `save_initiative`, `save_status_update`, `save_document`, `save_comment`). El matcher de los hooks acepta también `create_*` y `update_*` por si la instalación de Claude Code los expone así; `docs/HANDOFF.md` incluye la comprobación.
- El esquema GraphQL se verificó contra `@linear/sdk` 97.1.0 (octubre de 2026). Si Linear cambia campos, `snapshot.ts` falla con el mensaje del API; corrige la query y vuelve a correr.
- Las métricas de ciclos usan el historial que Linear expone (`issueCountHistory`, `completedIssueCountHistory`, `uncompletedIssuesUponClose`); para ciclos sin historial se marcan como no evaluadas.

## Licencia

MIT.
