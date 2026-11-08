# Tool map

Pinned versions: `cursor-talk-to-figma-mcp@0.3.5` (40 tools, 6 prompts) and `figma-console-mcp@1.46.0` in token mode.

## TalkToFigma: connection

| Tool | Use |
|---|---|
| `join_channel` | First call of every session, with the channel the plugin shows |

## TalkToFigma: read

| Tool | Use |
|---|---|
| `get_document_info` | Current page and its top-level nodes. Smoke test after `join_channel` |
| `get_selection` | Ids and types of what the user selected |
| `read_my_design` | Selection with full node detail |
| `get_node_info`, `get_nodes_info` | Detail for one or many node ids |
| `scan_text_nodes` | Every text node under a node, chunked for large trees |
| `scan_nodes_by_types` | Children of given types (`FRAME`, `INSTANCE`, `COMPONENT`…) |
| `get_styles` | Local paint, text, effect and grid styles |
| `get_local_components` | Local components with ids |
| `get_annotations` | Dev Mode annotations of the document or one node, and their categories |
| `get_instance_overrides` | Overrides of a source instance, to copy to others |
| `get_reactions` | Prototype reactions. Process with the `reaction_to_connector_strategy` prompt |
| `export_node_as_image` | PNG of a node, to verify a change visually |

## TalkToFigma: create and edit

| Tool | Use |
|---|---|
| `create_frame` | Frame with position, size, fill, stroke and `parentId`. Auto layout params included |
| `create_rectangle` | Rectangle |
| `create_text` | Text with `fontSize`, `fontWeight`, `fontColor`. No font family |
| `create_component_instance` | Instance of a local component (`componentId`) or a published library one (`componentKey`) |
| `clone_node` | Copy a node, optionally to a new position |
| `move_node`, `resize_node` | Position and size |
| `set_fill_color`, `set_stroke_color` | RGBA 0–1 |
| `set_corner_radius` | All corners or a per-corner mask |
| `set_text_content` | One text node |
| `set_multiple_text_contents` | Many text nodes in one call |
| `set_layout_mode` | `HORIZONTAL`, `VERTICAL`, `NONE`, and wrap |
| `set_padding`, `set_item_spacing` | Auto layout spacing |
| `set_axis_align` | Primary and counter axis alignment |
| `set_layout_sizing` | `FIXED`, `HUG`, `FILL` per axis |
| `set_instance_overrides` | Swap targets to the source component and apply its overrides |
| `set_annotation` | Create or update one annotation, markdown allowed |
| `set_multiple_annotations` | Many annotations under one node |
| `set_default_connector`, `create_connections` | FigJam connectors between nodes |
| `delete_node`, `delete_multiple_nodes` | Destructive. Confirm with the user first |
| `set_focus`, `set_selections` | Select and scroll the viewport to show the result |

## TalkToFigma: prompts

`design_strategy`, `read_design_strategy`, `text_replacement_strategy`, `annotation_conversion_strategy`, `swap_overrides_instances`, `reaction_to_connector_strategy`.

## figma-console (token mode)

Comments and REST reads only. Every call counts against the seat's REST rate limit.

| Tool | Use |
|---|---|
| `figma_get_comments` | Threads of a file, filterable by node, thread and date, paged (30 threads by default) |
| `figma_post_comment` | New comment or reply, optionally pinned to a node |
| `figma_delete_comment` | Delete one of your comments |
| `figma_get_status` | Shows the mode. Without the bridge, write tools are unavailable |

Do not use figma-console to read design trees when TalkToFigma is connected. That spends REST quota for data the plugin gives for free.
