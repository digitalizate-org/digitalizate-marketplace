# Briefs por modelo

Un sub-agente arranca sin el contexto de la conversación. Lo que no esté en el brief no existe para él. Cada modelo falla de una forma distinta, y el brief se escribe contra esa falla.

Todo brief, sea cual sea el modelo:

- Una frase de objetivo y el porqué, si cambia decisiones.
- Rutas exactas: archivos, módulos, comandos. Nada de "el archivo de auth".
- Lo que queda fuera de alcance, nombrado.
- Cuándo está hecho y cómo se comprueba.
- El formato del reporte.

## Sonnet 5.5 · `sonnet-implementer`

Rinde casi igual que Opus en tareas acotadas, a la mitad del precio. Su falla documentada: con poco effort reporta "listo" sin correr tests ni build. El brief exige la verificación y nombra el comando.

```
Objetivo: <una frase>.
Alcance: <archivos o módulo exactos>.
Sigue el patrón de: <archivo del repo que hace algo parecido>.
No toques: <lo que queda fuera>.
Verificación: corre `<comando>` y lee la salida. Si falla, arregla la causa, no el síntoma; si no ves la causa en dos intentos, para y repórtalo.
Reporte: archivos cambiados, comando corrido con su resultado, y lo que quedó pendiente.
```

Señal para cortar y escalar: da vueltas sobre el mismo archivo, vuelve a poner código que quitó, o encadena fallos del mismo test. Eso pasa a `opus-debugger`, no a otro intento de Sonnet.

## Opus 5.5 · `opus-debugger` o `general-purpose` con `model: "opus"`

Para trabajo con juicio: bugs sin causa clara, cambios que cruzan módulos, decisiones de diseño. El brief da el problema y las restricciones, no la solución.

```
Problema: <síntoma observable, desde cuándo, con qué frecuencia>.
Lo que ya sabemos: <hipótesis descartadas, logs, intentos que fallaron y por qué>.
Restricciones: <contratos, datos, API pública o dependencias que no pueden cambiar>.
Hipótesis a probar primero: <si las hay>.
Hecho cuando: <la reproducción pasa y los tests del proyecto también>.
Reporte: causa raíz en dos frases, evidencia, cambio aplicado, verificación y riesgos residuales.
```

Frontend desde cero: nombra los patrones a evitar uno por uno. "Evita el look de IA" no funciona; "sin gradiente violeta, sin tarjetas con sombra en todo, sin hero centrado con dos botones, sin emojis en los títulos" sí.

A `xhigh` o `max` los turnos se alargan mucho. Si necesitas una respuesta breve, baja el effort antes de pedir brevedad.

## Opus 5.5 · `opus-reviewer`

Contexto fresco y distinto del autor, solo lectura. Nunca le pidas que arregle: no puede editar.

```
Revisa: <rango de commits, diff o archivos>.
Prioriza: corrección (lógica, casos borde, contratos entre módulos), luego seguridad (auth, permisos, secretos, inyección), luego simplificación evidente.
Si el cambio dice estar verificado, corre tú los tests o el build.
No edites archivos.
Reporte: hallazgos por severidad, cada uno con archivo:línea, el problema, un escenario concreto de fallo y la corrección propuesta.
```

## Fable 5.1 · `fable-researcher` o la sesión con `/model fable`

Para planes grandes, problemas abiertos, research con fuentes, codebases heredados y razonamiento duro. Rinde peor con prompts muy prescriptivos, amplía alcance si no se lo limitas y a `xhigh` redacta archivos largos dos veces. El brief da el porqué, el objetivo y los límites, no los pasos.

```
Por qué importa: <contexto de negocio o técnico que decide qué es relevante>.
Objetivo: <el resultado esperado, no la secuencia de pasos>.
Restricciones: <stack fijo, presupuesto, plazos, lo que no se puede cambiar>.
Memoria: anota lo que aprendas en <ruta>.md mientras avanzas.
Límites: no modifiques código del proyecto; pregunta antes de ampliar el alcance.
Entregable: <plan con pasos verificables, criterio de hecho, riesgos y qué modelo ejecuta cada paso | informe con fuentes y una recomendación clara>.
```

Cuando el plan quede aprobado, la ejecución vuelve a `opusplan`: Sonnet ejecuta, Opus re-planea si algo se tuerce. Implementar en Fable cuesta 2.5 veces Opus y rinde menos en código.
