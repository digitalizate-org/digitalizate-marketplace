# digitalizate-marketplace

Marketplace de plugins de Digitalízate para Claude Code, claude.ai y Cowork. Este repo solo contiene el manifiesto (`.claude-plugin/marketplace.json`); cada plugin vive en su propio repo y el manifiesto apunta a él.

## Plugins

| Plugin | Repo | Para qué |
|---|---|---|
| `digitalizate-linear-method` | [digitalizate-org/digitalizate-linear-method](https://github.com/digitalizate-org/digitalizate-linear-method) | Linear Method: canon de reglas, auditoría, pre-flight, setup, correcciones con deshacer y planificación de ciclos |
| `digitalizate-design-practices` | [digitalizate-org/digitalizate-design-practices](https://github.com/digitalizate-org/digitalizate-design-practices) (`plugins/digitalizate-design-practices`) | Librería de buenas prácticas de UX y product design, con skills para construir, auditar, sincronizar y enriquecer interfaces |

## Uso

Claude Code:

```
/plugin marketplace add digitalizate-org/digitalizate-marketplace
/plugin install digitalizate-linear-method@digitalizate
```

claude.ai y Claude desktop: Customize > Plugins > Add marketplace, con `digitalizate-org/digitalizate-marketplace`.

Los repos son privados. En Claude Code hace falta una credencial git con lectura sobre el marketplace y sobre cada plugin (`gh auth login` y `gh auth setup-git`). En claude.ai hay que conectar la cuenta de GitHub y dar acceso a la GitHub App de Claude.

## Agregar un plugin

1. Añadir una entrada a `plugins` en `.claude-plugin/marketplace.json` con `source: { "source": "github", "repo": "digitalizate-org/<repo>" }`. Si el plugin vive en una subcarpeta del repo, usar `{ "source": "git-subdir", "url": "<repo>.git", "path": "<subcarpeta>" }`.
2. El `name` de la entrada debe coincidir con el `name` de su `plugin.json`, en kebab-case.
3. No fijar `version` en la entrada: manda la de `plugin.json`.
4. Validar con `claude plugin validate .` y push a `main`.

## Publicar una versión nueva de un plugin

Los usuarios solo reciben cambios cuando sube el campo `version` del `plugin.json` del plugin. Un push sin subir la versión no llega a nadie.
