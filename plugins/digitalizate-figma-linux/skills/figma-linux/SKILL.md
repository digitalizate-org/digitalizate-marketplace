---
name: figma-linux
description: Read, create, edit and annotate Figma designs from Claude Code on Linux without the Figma desktop app and without spending the official Figma MCP quota, plus read and post file comments. Covers choosing the stack (Talk to Figma relay + Community plugin for writes and annotations, figma-console-mcp in token mode for comments), installing it, checking it with doctor.sh, the per-session connect ritual (figma-relay start, plugin, join_channel), how to use the tools well, its limits, and troubleshooting. Use it whenever the user wants Figma MCP on Linux, says the official Figma MCP quota runs out, asks to install, check, repair or use Talk to Figma, TalkToFigma, cursor-talk-to-figma-mcp, figma-console-mcp, figma-relay, or asks to create, edit, annotate or read comments in a Figma file from a Linux machine. Invoke as /figma-linux [install | doctor | connect | use | fix].
---

# figma-linux

Goal: Claude edits a live Figma file from Linux, reads and writes its annotations, and reads its comments, with no desktop app and no official MCP quota.

Answer in the user's language.

## The stack and why

| Need | Tool | Path | Quota |
|---|---|---|---|
| Read, create, edit, annotations | `TalkToFigma` MCP (`cursor-talk-to-figma-mcp`) | Claude → MCP (stdio) → relay `ws://127.0.0.1:3055` → Community plugin in Figma web → Plugin API | None. Everything runs in the user's browser |
| File comments | `figma-console` MCP (`figma-console-mcp`) in token mode | Claude → MCP → Figma REST API with a personal token | REST rate limit of the user's seat. Fine for comments, not for bulk reads |
| Anything the two above cannot do | Official `plugin:figma:figma` MCP | Remote | The quota the user wants to save. Last resort |

Rejected options, so nobody re-litigates them:
- **Official desktop MCP** (`127.0.0.1:3845`): only ships in the official Figma desktop app, which has no Linux build.
- **figma-linux** (Electron wrapper): never exposed the desktop MCP (issue #429 open, no answer) and has had no release since 2024-10.
- **figma-local-mcp**: reads a static ZIP export. No writes, no comments.
- **figma-console-mcp full mode**: its Desktop Bridge plugin must be imported from a manifest, which needs the desktop app. The maintainer confirms it does not run on Linux (issue #70). Token mode works.

## Install

Run once per machine:

```bash
bash "${CLAUDE_PLUGIN_ROOT}/scripts/install.sh"
```

The script is idempotent. It:
1. Installs `bun` through npm if it is missing. The relay is Bun-only.
2. Downloads the relay `socket.ts` pinned to commit `ddd90f3`, and patches it to listen on `127.0.0.1` only.
3. Installs `figma-relay` into `~/.local/bin`.
4. Registers the `TalkToFigma` MCP at user scope, pinned to `cursor-talk-to-figma-mcp@0.3.5`.

The user installs the Figma plugin once, from Figma web: https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin

For comments, the user creates a personal access token in Figma (Settings → Security → Personal access tokens) with these scopes: **File content** read, **Comments** read and write, and **Current user** read. Then the user runs, in their own terminal:

```bash
export FIGMA_ACCESS_TOKEN=figd_...
bash "${CLAUDE_PLUGIN_ROOT}/scripts/install.sh" --comments
```

Never ask the user to paste the token into the chat, and never write it into a repo file. `claude mcp add -e` stores it in plain text in `~/.claude.json`. Tell the user so.

Register MCPs at **user** scope only. A project `.mcp.json` is an AI tool file that must never be versioned.

New MCPs load at session start. After install, the user opens a new Claude Code session.

## Check

```bash
bash "${CLAUDE_PLUGIN_ROOT}/scripts/doctor.sh"
```

| Line | Meaning | Fix |
|---|---|---|
| `relay atado a 127.0.0.1` ✘ | `socket.ts` listens on all interfaces | Re-run `install.sh` |
| `nada escucha en :3055` | Relay down | `figma-relay start` |
| Port 3055 not on loopback | Another process holds the port | `ss -ltnp 'sport = :3055'`, stop that process |
| `MCP TalkToFigma` ✘ | Not registered, or `npx` failed | `claude mcp get TalkToFigma`, re-run `install.sh` |
| Channel with one client | Plugin open but no `join_channel`, or the reverse | Connect ritual below |
| `figma-console` missing | No comments | `install.sh --comments` |

Exit code 0 means everything required passed. Warnings (`!`) do not fail the check.

## Connect, every session

1. `figma-relay start`. It does nothing if the relay already runs.
2. The user opens the file in Figma web, then Plugins → Development or Saved → **Cursor Talk to Figma MCP Plugin**, then **Connect**. The plugin shows a channel name.
3. The user gives Claude the channel name, and Claude calls `join_channel` with it.
4. Claude calls `get_document_info`. A real answer means the round trip works. `figma-relay channels` shows `(2 total clients)` for that channel.

The MCP reconnects to the relay every 2 s on its own. If the relay restarts, repeat steps 2 and 3. The channel changes each time the plugin connects.

The plugin acts on the page and file open in that tab. A different file needs its own plugin run and a new `join_channel`.

## Use well

Read before writing:
- `get_selection` or `read_my_design` when the user points at something. `get_document_info` for the page. `get_node_info` or `get_nodes_info` for detail.
- Large trees: `scan_text_nodes` and `scan_nodes_by_types` (chunked) instead of walking the tree by hand.
- `get_styles` and `get_local_components` before creating anything, so new work reuses the file's system.

Write in batches and inside the right parent:
- Pass `parentId` to `create_frame`, `create_text` and `create_rectangle`. Without it, nodes land at the page root.
- Set auto layout right after creating a frame: `set_layout_mode`, `set_padding`, `set_item_spacing`, `set_axis_align`, `set_layout_sizing`.
- Prefer `create_component_instance` from the file's components over drawing primitives.
- Use batch tools for many changes: `set_multiple_text_contents`, `set_multiple_annotations`, `delete_multiple_nodes`. Each call is one round trip with a 30 s timeout.
- Instance overrides: `get_instance_overrides`, then `set_instance_overrides` on the targets.

Verify visually:
- `export_node_as_image` on the frame you changed, then look at it before reporting done.
- `set_focus` or `set_selections` to show the user what changed.

Annotations are native Dev Mode annotations: `get_annotations`, `set_annotation` (markdown), `set_multiple_annotations`. Comments are a different thing and need `figma-console`: `figma_get_comments`, `figma_post_comment`, `figma_delete_comment`.

The server also ships guided prompts: `design_strategy`, `read_design_strategy`, `text_replacement_strategy`, `annotation_conversion_strategy`, `swap_overrides_instances`, `reaction_to_connector_strategy`. Load the matching one for bulk text replacement, annotation migration, or turning prototype reactions into FigJam connectors (`get_reactions`, `set_default_connector`, `create_connections`).

Changes land in the user's file at once and go into Figma's undo history. Before a destructive batch (`delete_multiple_nodes`, mass text replacement), say what will change and wait for approval.

The full tool map lives in [references/tools.md](references/tools.md).

## Limits

Talk to Figma cannot:
- create or edit variables, styles or components (it only creates instances);
- place images, or create vectors, ellipses or boolean ops;
- change a font family (`create_text` takes size, weight and color);
- read comments, because the Plugin API has no access to them.

For variables or a component library, say so and offer the official MCP for that single step, once. Do not fall back to it silently.

## Fix

| Symptom | Cause | Fix |
|---|---|---|
| `Not connected to Figma` | Relay down, or MCP started before the relay | `figma-relay start`, wait 2 s, retry |
| `join_channel` succeeds but every call times out | Plugin closed, or connected to another channel | Reopen the plugin, use the new channel |
| Plugin shows a disconnect right after Connect | Relay not running, or bound to another port | `figma-relay status`, `doctor.sh` |
| Tools missing in Claude | Session predates the install | New session, `claude mcp get TalkToFigma` |
| `figma_get_comments` → 403 | Token lacks the Comments scope, or no access to the file | New token with Comments, then `install.sh --comments` |
| `figma_get_comments` → 429 | REST rate limit of the seat | Wait. Filter by node or thread, do not poll |
| Writes go to the wrong page | Plugin acts on the page open in the browser | Ask the user to switch page, or pass explicit node ids |

Relay logs: `figma-relay log 80`. They hold full design payloads, so do not paste them into issues.

## Security notes for the user

- The relay has no authentication. Any local process can join a channel and send commands to the open file. This is why `install.sh` binds it to `127.0.0.1`. Stop it when you are not using it: `figma-relay stop`.
- The Community plugin sends anonymous usage events to Google Analytics. Its manifest declares it.
- Both MCPs are pinned to versions audited on 2026-11-07: no install scripts, no telemetry in the MCP servers. Upgrade a pin only after reading the new diff.
