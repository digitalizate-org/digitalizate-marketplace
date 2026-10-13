# Decisiones de diseño

Registro vivo de qué prácticas de la ux-library aplica este proyecto, cuáles no y por qué. Lo leen `ux-build` antes de construir y `ux-review` antes de auditar, así que mantenlo corto: IDs y razones de una línea.

## Contexto del producto

- Usuarios: <quién usa esto, nivel de experiencia, interno/externo>
- Dispositivo: <desktop / mobile / ambos; tamaño mínimo soportado>
- Dominio y restricciones: <regulación, densidad de datos, idioma, accesibilidad exigida>
- Stack UI: <framework, librería de componentes, design system, tooling de a11y (eslint-plugin-jsx-a11y, axe, Storybook)>

## Excepciones vigentes

Prácticas que este proyecto decidió no seguir. Una línea por práctica: ID, título, razón, mitigación si la hay, fecha.

- <UX-000 Título — razón — mitigación — fecha>

## Convenciones del proyecto

Decisiones transversales que ya no se discuten por pantalla (p. ej. "validación inline al blur en todos los formularios", "tablas con paginación servidor por encima de 500 filas").

- <convención>

## Historial

Una entrada por pantalla o feature, añadida por `ux-build` o manualmente.

## <fecha> — <pantalla o feature>
Context: <tipo de pantalla, objetivo, usuario, dispositivo>
Applied: <UX-000 Título (dónde), …>
Skipped: <UX-000 Título — razón>
Exceptions (user decision): <UX-000 Título — razón — mitigación>
Open: <UX-000 Título — qué falta para decidir>
Library proposals: <patrón necesario que no existe en la librería>, o none
