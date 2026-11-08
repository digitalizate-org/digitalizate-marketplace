#!/usr/bin/env bash
set -uo pipefail

dir="${TALK_TO_FIGMA_HOME:-$HOME/.local/share/talk-to-figma}"
log="${XDG_STATE_HOME:-$HOME/.local/state}/talk-to-figma/relay.log"
fails=0

pass() { printf '✔ %s\n' "$*"; }
fail() { printf '✘ %s\n' "$*"; fails=$((fails + 1)); }
warn() { printf '! %s\n' "$*"; }

command -v bun >/dev/null && pass "bun $(bun --version)" || fail "bun no está instalado: corre install.sh"

if [[ -f $dir/socket.ts ]]; then
  if grep -q '^  hostname: "127.0.0.1",' "$dir/socket.ts"; then
    pass "relay atado a 127.0.0.1 (commit $(cut -c1-7 "$dir/COMMIT" 2>/dev/null || echo '?'))"
  else
    fail "socket.ts escucha en todas las interfaces: corre install.sh de nuevo"
  fi
else
  fail "falta $dir/socket.ts: corre install.sh"
fi

command -v figma-relay >/dev/null && pass "figma-relay en el PATH" || fail "figma-relay no está en el PATH"

listen=$(ss -ltnH 'sport = :3055' 2>/dev/null | awk '{print $4}')
if [[ -z $listen ]]; then
  fail "nada escucha en :3055: figma-relay start"
elif [[ $listen == 127.0.0.1:3055 ]]; then
  pass "relay escuchando en $listen"
else
  fail "el puerto 3055 escucha en $listen, no en loopback: figma-relay stop y revisa quién lo ocupa"
fi

[[ $(curl -s --max-time 2 http://127.0.0.1:3055) == "WebSocket server running" ]] && pass "relay responde" || fail "el relay no responde por HTTP"

if claude mcp get TalkToFigma 2>/dev/null | grep -q 'Connected'; then
  pass "MCP TalkToFigma conectado"
else
  fail "MCP TalkToFigma no registrado o caído: claude mcp get TalkToFigma"
fi

last=$(grep -o 'joined channel "[^"]*" ([0-9]* total clients)' "$log" 2>/dev/null | tail -n 1)
if [[ $last == *"(2 total clients)"* || $last =~ \(([3-9]|[1-9][0-9]+)\ total ]]; then
  pass "plugin y MCP en el mismo canal: $last"
elif [[ -n $last ]]; then
  warn "último canal con un solo cliente ($last): falta join_channel o el plugin se desconectó"
else
  warn "nadie se ha unido a un canal: abre el plugin en Figma y pide join_channel"
fi

if claude mcp get figma-console >/dev/null 2>&1; then
  claude mcp get figma-console 2>/dev/null | grep -q 'Connected' && pass "MCP figma-console conectado (comentarios)" || fail "MCP figma-console registrado pero caído"
else
  warn "figma-console no está: sin lectura de comentarios (install.sh --comments)"
fi

if claude mcp get plugin:figma:figma >/dev/null 2>&1; then
  warn "el MCP oficial de Figma también está activo: úsalo solo para lo que Talk to Figma no cubre"
fi

echo
(( fails == 0 )) && echo "todo en orden" || echo "$fails chequeo(s) fallaron"
exit $(( fails > 0 ))
