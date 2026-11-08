# digitalizate-figma-linux

Figma desde Claude Code en Linux: leer, crear, editar y anotar un archivo vivo sin la app de escritorio y sin gastar la cuota del MCP oficial, y leer o publicar comentarios.

## Qué trae

| Pieza | Qué hace |
|---|---|
| Skill `figma-linux` | Elige el stack, instala, chequea, conecta cada sesión, dice cómo usar las herramientas y qué hacer cuando algo falla |
| `scripts/install.sh` | Instala `bun`, el relay fijado a un commit y atado a `127.0.0.1`, `figma-relay` y el MCP `TalkToFigma`. Con `--comments` registra `figma-console` en modo token |
| `scripts/doctor.sh` | Chequea relay, puerto, MCPs y canal. Sale con 0 si lo obligatorio pasa |
| `scripts/figma-relay` | `start`, `stop`, `restart`, `status`, `channels`, `log` del relay |

## Cómo funciona

```
Claude Code ── stdio ──▶ TalkToFigma MCP ── ws ──▶ relay 127.0.0.1:3055 ◀── ws ── plugin de Community en Figma web
Claude Code ── stdio ──▶ figma-console MCP ── HTTPS + token ──▶ API REST de Figma (comentarios)
```

El plugin ejecuta todo con la Plugin API dentro del navegador, así que no hay cuota. Los comentarios no existen en la Plugin API: por eso van por REST con un token personal.

## Uso

```
/plugin install digitalizate-figma-linux --marketplace digitalizate-org/digitalizate-marketplace
```

Después, desde la raíz de este repo o con `${CLAUDE_PLUGIN_ROOT}` en lugar de `plugins/digitalizate-figma-linux`:

```bash
bash plugins/digitalizate-figma-linux/scripts/install.sh
figma-relay start
bash plugins/digitalizate-figma-linux/scripts/doctor.sh
```

Luego, en Figma web, abre el plugin [Cursor Talk to Figma MCP](https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin), dale Connect y pásale a Claude el canal. El detalle está en la skill.

## Versiones fijadas

| Pieza | Versión |
|---|---|
| Relay `socket.ts` | `grab/cursor-talk-to-figma-mcp@ddd90f3` |
| MCP de escritura | `cursor-talk-to-figma-mcp@0.3.5` |
| MCP de comentarios | `figma-console-mcp@1.46.0` |

Auditadas el 2026-11-07: sin scripts de instalación ni telemetría en los servidores MCP. El plugin de Community sí manda eventos anónimos a Google Analytics. Subir una versión exige leer su diff primero.

## Probado

Fedora 43, Node 24, Bun 1.4.4: `install.sh` y `doctor.sh` en verde, relay escuchando solo en loopback, y un mensaje de ida y vuelta entre dos clientes del mismo canal.
