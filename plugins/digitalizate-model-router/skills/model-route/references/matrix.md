# Matriz de modelos

Generado por `scripts/route.ts matrix --md` desde `hooks/matrix.ts`. No lo edites a mano: cambia la matriz y regenera.

| ID | Tarea | Modelo | Effort | Delegar a | Por qué |
|---|---|---|---|---|---|
| `bug-repro` | Bug con reproducción clara | Sonnet 5.5 | medium | sonnet-implementer | Camino conocido y verificación fácil. |
| `feature-pattern` | Feature con patrón existente en el repo | Sonnet 5.5 | medium | sonnet-implementer | Copia y adapta un patrón conocido. |
| `tests` | Tests, fixtures, mocks | Sonnet 5.5 | medium | sonnet-implementer | Mecánico y verificable al instante. |
| `mechanical-refactor` | Refactor mecánico: renombrar, mover, reemplazar API | Sonnet 5.5 | medium | sonnet-implementer | Muchos archivos, poca decisión. |
| `ui-iteration` | Iterar UI con diseño ya definido | Sonnet 5.5 | medium | sonnet-implementer | Ejecución sobre una spec clara. |
| `docs` | Docs, README, commits, changelog | Sonnet 5.5 | low · medium | sonnet-implementer | Fuerte en documentos pulidos. |
| `scripts-ci` | Scripts, CI, configs, tooling | Sonnet 5.5 | medium | sonnet-implementer | Acotado y fácil de probar. |
| `intermittent-bug` | Bug intermitente, race condition, estado corrupto | Opus 5.5 | high | opus-debugger | Requiere hipótesis y juicio, no solo lectura. |
| `cross-module-feature` | Feature que cruza varios módulos | Opus 5.5 | high | - | Efectos no obvios entre capas. |
| `architecture-refactor` | Refactor de arquitectura | Opus 5.5 | xhigh | - | Cambia contratos entre capas. |
| `pr-review` | Code review de PR grande | Opus 5.5 | high | opus-reviewer | Contexto fresco y distinto del modelo que escribió el código. |
| `frontend-from-scratch` | Frontend desde cero | Opus 5.5 | high | - | Decisiones de diseño. Nombra los patrones a evitar. |
| `vision` | Leer capturas, diagramas, gráficas | Opus 5.5 | high | - | Lectura visual muy superior a Sonnet. |
| `security` | Revisión de seguridad: auth, permisos, secretos | Opus 5.5 | xhigh | opus-reviewer | El costo de un error es alto. |
| `risky-migration` | Migración riesgosa de datos o de framework | Opus 5.5 | xhigh | - | Difícil de revertir. |
| `greenfield` | Greenfield con decisiones estructurales | Opus 5.5 | high | - | Lo que se decide hoy cuesta cambiarlo después. |
| `large-plan` | Plan de proyecto grande | Fable 5.1 | high | fable-researcher | Acota, pregunta y entrega un plan que Sonnet ejecuta. |
| `long-autonomous-run` | Corrida autónoma de horas | Fable 5.1 | high | - | Sub-agentes asíncronos y verificación propia. |
| `legacy-codebase` | Codebase heredado sin documentación | Fable 5.1 | high | fable-researcher | Investigación multipaso larga. |
| `open-problem` | Problema sin solución conocida | Fable 5.1 | xhigh | - | Anthropic recomienda darle primero lo más difícil. |
| `algorithm-math` | Algoritmo o matemática dura | Fable 5.1 | xhigh | - | Razonamiento puro. |
| `research` | Evaluar librerías, research técnico profundo | Fable 5.1 | high | fable-researcher | Investigación con fuentes y comparación. |
| `document-deliverable` | Entregable en documento, hoja de cálculo o slides | Fable 5.1 | high | fable-researcher | Punto fuerte documentado por Anthropic. |

## Cómo decide

- Cada categoría tiene señales por concepto (no palabras sueltas). Cada señal suma su peso una vez; una señal de peso 3 es fuerte.
- Confianza alta: puntaje 4 o más y 2 por encima de la mejor categoría de otro modelo. Media: puntaje 2 o más y 1 por encima. Si no, baja.
- Con confianza baja no se recomienda nada: decide el modelo principal con su juicio.
- Riesgo: si una categoría de riesgo (seguridad, migración riesgosa, bug intermitente, arquitectura) trae una señal fuerte y queda a un punto o menos de la ganadora, la tarea sube a su modelo y effort.
- Empates: primero la categoría de riesgo, después el modelo más barato (Sonnet por defecto, Fable nunca por empate).
- Una pregunta sin verbo de tarea y sin señal fuerte no se enruta. Un mensaje trivial tampoco.

## Ruta según la sesión

- Mismo modelo: sigue.
- La tarea pide un modelo más barato: delega al agente de la categoría; cambia la sesión solo tras 3 tareas mecánicas seguidas y si el costo de reescribir la caché se recupera en 8 turnos o menos. Una tarea chica (un typo, una línea) se hace sin delegar.
- La tarea pide Opus desde Sonnet: bug difícil → opus-debugger; revisar → opus-reviewer (nunca para editar); diseño → plan mode con opusplan o /model opusplan; riesgo → /model opus. Cambiar exige confianza alta, o media con riesgo y señal fuerte.
- La tarea pide Fable: research, informe o codebase heredado → fable-researcher; plan grande, problema abierto, algoritmo o corrida larga → /model fable antes de plan mode, o fable-researcher si la sesión ya carga más de 60K de contexto.
- Código normal en Fable: /model opusplan.
