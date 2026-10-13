# digitalizate-marketplace

Marketplace de plugins de Digitalízate para Claude Code, claude.ai y Cowork. Es un monorepo: el manifiesto (`.claude-plugin/marketplace.json`) y los plugins viven juntos, cada plugin en `plugins/<nombre>/`, y el manifiesto los referencia con rutas relativas.

## Plugins

| Plugin | Carpeta | Para qué |
|---|---|---|
| `digitalizate-linear-method` | [`plugins/digitalizate-linear-method`](plugins/digitalizate-linear-method) | Linear Method: canon de reglas, auditoría, pre-flight, setup, correcciones con deshacer y planificación de ciclos |
| `digitalizate-design-practices` | [`plugins/digitalizate-design-practices`](plugins/digitalizate-design-practices) | Librería de buenas prácticas de UX y product design, con skills para construir, auditar, sincronizar y enriquecer interfaces |
| `digitalizate-model-router` | [`plugins/digitalizate-model-router`](plugins/digitalizate-model-router) | Guía de modelos: qué modelo, effort y delegación usar por tarea; en Claude Code, juicio de cada delegación, costo de `/model` y gate de verificación |

Cada plugin tiene su propio README con el detalle de uso y desarrollo.

## Uso

Claude Code:

```
/plugin marketplace add digitalizate-org/digitalizate-marketplace
/plugin install digitalizate-linear-method@digitalizate
/plugin install digitalizate-design-practices@digitalizate
/plugin install digitalizate-model-router@digitalizate
```

claude.ai y Claude desktop: Customize > Plugins > Add marketplace, con `digitalizate-org/digitalizate-marketplace`. Para sincronizarlo a toda la organización, un Owner lo añade en Organization settings > Plugins & skills > Sync from GitHub con la Claude GitHub App instalada sobre este repo; los miembros no necesitan acceso al repo.

El repo es privado. En Claude Code hace falta una credencial git con lectura sobre este repo (`gh auth login` y `gh auth setup-git`).

## Agregar un plugin

1. Crear `plugins/<nombre>/` con su `.claude-plugin/plugin.json`. El nombre va en kebab-case y es el mismo en la carpeta, en `plugin.json` y en el manifiesto.
2. Añadir una entrada a `plugins` en `.claude-plugin/marketplace.json` con `source: "./plugins/<nombre>"`. No fijar `version` en la entrada: manda la de `plugin.json`.
3. No incluir un `bin/` de nivel superior en el plugin: claude.ai lo rechaza. Los ejecutables van en `scripts/` y se invocan con `${CLAUDE_PLUGIN_ROOT}/scripts/<nombre>`.
4. Validar con `claude plugin validate .` y push a `main`.

Las rutas relativas son la vía para plugins privados en la sincronización de claude.ai. Una fuente `github` solo sirve para un plugin en otro repo del mismo owner, y `git-subdir` privado no la acepta.

## Publicar una versión nueva de un plugin

Los usuarios solo reciben cambios cuando sube el campo `version` del `plugin.json` del plugin afectado. Un push sin subir la versión no llega a nadie.

## Historial

Antes de unificarse, cada plugin tuvo su propio repo: `digitalizate-org/digitalizate-linear-method` y `digitalizate-org/digitalizate-design-practices`, ambos archivados. Su historial completo está en este repo: `git log` y `git blame` sobre cualquier archivo de `plugins/<nombre>/` llegan hasta los commits originales, con las rutas ya prefijadas. Los commits `import ... plugin` y el merge `merge snapshot import into history` son el rastro de la migración.
