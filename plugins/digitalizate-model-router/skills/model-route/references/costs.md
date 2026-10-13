# Costos

Precios de lista por millón de tokens. El costo real de una sesión está en `/cost`; aquí van los órdenes de magnitud para decidir.

| Modelo | Entrada | Salida | Lectura de caché | Escritura de caché (TTL 5 min · 1 h) |
|---|---|---|---|---|
| Sonnet 5.5 | $2 | $10 | $0.20 | $2.50 · $4 |
| Opus 5.5 | $4 | $20 | $0.20 | $5 · $8 |
| Fable 5.1 | $10 | $50 | $0.25 | $12.50 · $20 |
| Haiku 5.5 | $0.10 | $0.50 | $0.01 | $0.125 · $0.20 |

## Tres hechos que deciden

1. **La caché es de un modelo.** Cambiar de modelo reescribe todo el contexto en la caché del modelo nuevo y descarta el razonamiento previo. Volver también la reescribe. Delegar no toca la caché de la sesión: el sub-agente arranca con un contexto propio y chico.
2. **Leer historia cuesta lo mismo en Sonnet y en Opus** ($0.20 por millón). En una sesión larga, Sonnet ahorra en la salida y en la entrada nueva, no en la historia. Por eso pasar a Sonnet a mitad de sesión tarda varios turnos en pagarse.
3. **Cambiar el effort a mitad de sesión invalida la caché de mensajes.** No subas y bajes effort por prompt en una sesión larga; fíjalo por modelo en `modelSettings` y usa `/effort` cuando cambie la naturaleza del trabajo.

## Turno típico

El script modela un turno como: contexto × lectura de caché + 6K de entrada nueva escrita en caché + 4K de salida (pensamiento incluido).

| Contexto | Sonnet 5.5 | Opus 5.5 | Fable 5.1 |
|---|---|---|---|
| 15K (sub-agente recién creado) | ≈$0.07 | ≈$0.13 | ≈$0.32 |
| 100K (sesión larga) | ≈$0.08 | ≈$0.15 | ≈$0.35 |

## Cambiar o delegar

| Situación (100K de contexto, caché caliente, TTL 1 h) | Costo |
|---|---|
| Opus → Sonnet | reescribe ≈$0.40; ahorra ≈$0.06 por turno; se recupera en ~7 turnos |
| Opus → Fable | reescribe ≈$2.00; cada turno cuesta ≈$0.20 más |
| Delegar a `sonnet-implementer` | ≈$0.07 por turno del sub-agente; la sesión no paga nada extra |
| Delegar a `fable-researcher` | ≈$0.32 por turno del sub-agente; la sesión no paga nada extra |

Reglas que salen de esto:

- Una subtarea acotada se delega. Cambiar la sesión entera solo paga cuando lo que queda de trabajo es mayoritariamente del otro modelo.
- Con contexto grande, Fable va por `fable-researcher`, no por `/model fable`.
- Si la sesión estuvo inactiva más que el TTL, su caché ya expiró: cambiar de modelo cuesta casi lo mismo que quedarse. Es el mejor momento para cambiar.
- Una tarea chica (un typo, una línea) se hace en el modelo actual: abrir un sub-agente cuesta más que hacerla.
- Mide costo por tarea terminada: un modelo barato que necesita tres intentos sale más caro que uno que acierta a la primera.

En Claude Code con el mod del plugin, el guard de `/model` muestra antes de cambiar la cifra del engine (precio configurado de la organización si existe, TTL real y si la caché sigue caliente) y pide confirmación cuando el cambio es caro o choca con la tarea en curso.
