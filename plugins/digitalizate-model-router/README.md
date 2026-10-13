# digitalizate-model-router

La [guía de modelos](https://claude.ai/artifact/USw64DdU4VteRg9iusWtvg) de Digitalízate hecha herramienta. Decide qué modelo (Sonnet 5.5, Opus 5.5, Fable 5.1), con qué effort y por qué camino (seguir, delegar, cambiar con `/model`, plan mode) corre cada tarea, y lo hace cumplir en Claude Code.

Regla corta: Sonnet por defecto. Opus cuando el cambio es estructural o Sonnet titubea. Fable solo para planear cosas grandes o soltarle un problema abierto durante horas. Costo por tarea terminada, no por token.

## Qué trae

| Pieza | Dónde corre | Qué hace |
|---|---|---|
| Skill `model-route` | Claude Code, claude.ai, Cowork | Evalúa una tarea, reparte un plan entre modelos, escribe el brief para el sub-agente, calcula si un cambio de modelo se paga y revisa tu setup |
| Mod (`hooks/`) | Claude Code | Clasifica cada prompt, revisa cada delegación, mide el costo de `/model`, levanta señales para escalar y no deja que Sonnet cierre sin verificar |
| Agentes (`agents/`) | Claude Code | `sonnet-implementer`, `opus-reviewer`, `opus-debugger`, `fable-researcher`: los destinos de delegación con modelo y effort fijos |
| CLI (`scripts/route.ts`) | Donde haya Node | Lo que la skill corre: `evaluate`, `split`, `cost`, `doctor`, `matrix` |

La skill y el mod leen la misma matriz (`hooks/matrix.ts`): una sola fuente para las 23 categorías de la guía.

## El loop del mod

```
prompt del usuario
  │
  ▼
1. CLASIFICAR ── matriz por señales (23 tareas) → si duda, clasificador pequeño (máx. 1.5 s)
  ▼
2. DECIDIR ───── tarea → modelo + effort + confianza, contra el modelo real de la sesión
  │               (opusplan = Opus en plan mode, Sonnet al ejecutar)
  │               → sigo · delego <agente> · /model <alias> · plan mode
  │               con confianza baja no recomienda nada; cambiar exige evidencia fuerte
  ▼
3. INFORMAR ──── contexto al modelo + rúbrica por modelo en el system prompt
  │               + [ROUTER] en el pie del prompt: ✓ todo en orden, una acción (⇢ ↻ ◇ ↑) cuando hay algo que hacer, ✗ si un hook del router falló (/route dice cuál); la banda con botón /model aparece cuando hay un cambio recomendado
  ▼
4. EJECUTAR
  ├─ Agent ───── juicio del brief: rechaza el agente equivocado nombrando el correcto,
  │               reescribe el modelo de general-purpose/Plan, deja pasar lo dudoso
  ├─ Edit/Bash ─ señales para escalar: volver a poner código quitado,
  │               3 fallos seguidos de tests tras editar → aviso al modelo y a la banda
  ▼
5. CERRAR ────── Sonnet editó código sin correr tests, build ni el comando cambiado → bloquea una vez
  ▼
6. MEDIR ─────── costo por tarea y por modelo → calibración entre sesiones
                  /model: cifra del engine (precio, TTL, caché fría o caliente) y confirmación si es caro
```

`/route` abre el panel (decisión, matriz, sub-agentes, costo, calibración); `/route <texto>` simula una decisión; `/route matrix` imprime la tabla.

## Configuración (`/config`)

| Opción | Valores | Por defecto |
|---|---|---|
| `mode` | `enforce` corrige y bloquea · `advise` solo informa | `enforce` |
| `classifier` | `hybrid` · `heuristic` | `hybrid` |
| `effort` | `session` respeta /effort · `matrix` aplica el effort de la tarea (cada cambio invalida la caché de mensajes) | `session` |
| `verification` | `sonnet` · `all` · `off` | `sonnet` |
| `switchThreshold` | USD de re-cacheo desde los que `/model` pide confirmación | `1` |

## Instalar

```
/plugin install digitalizate-model-router@digitalizate
```

Si ya tienes los cuatro agentes en `~/.claude/agents`, borra tu copia: el plugin trae los suyos (aparecen como `digitalizate-model-router:<agente>` y el mod los reconoce con o sin prefijo). Si usabas el hook `~/.claude/hooks/model-router.sh`, quítalo de `SessionStart` y `UserPromptSubmit`: el mod lo reemplaza. `/model-route doctor` revisa todo esto.

## Desarrollo

```
claude plugin validate plugins/digitalizate-model-router
claude plugin test plugins/digitalizate-model-router
npx --yes tsx plugins/digitalizate-model-router/scripts/route.ts check
```

Los tipos del engine (`.claude-plugin/types/`) los escribe Claude Code al cargar el plugin desde una carpeta de desarrollo (`claude --plugin-dir plugins/digitalizate-model-router`); después, `npx -p typescript tsc -p plugins/digitalizate-model-router`. Si cambias `hooks/matrix.ts`, regenera la referencia de la skill:

```
npx --yes tsx scripts/route.ts matrix --md > skills/model-route/references/matrix.md
```

## Límites conocidos

- La matriz es heurística. Una tarea ambigua queda en confianza baja y el mod no recomienda nada: decide el modelo principal.
- El gate de verificación reconoce los comandos habituales de test, build, lint y typecheck, y correr el archivo editado. Un comando exótico no cuenta; el modelo puede decir que no pudo verificar y el gate lo deja cerrar.
- El libro de costo es una estimación con precios de lista; `/cost` es la cifra oficial.
- El mod nunca cambia el modelo de la sesión por su cuenta: reescribiría la caché y descartaría el razonamiento sin que lo veas. Recomienda y deja el botón.
