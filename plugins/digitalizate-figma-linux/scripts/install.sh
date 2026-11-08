#!/usr/bin/env bash
# Instala Talk to Figma (crear, editar, anotar) y, con --comments, figma-console-mcp en modo token.
# Idempotente: correrlo de nuevo solo completa lo que falte.
set -euo pipefail

TTF_COMMIT="ddd90f3a6d454ea0b2fc29f1b084f50fd062b880"
TTF_NPM="cursor-talk-to-figma-mcp@0.3.5"
FCM_NPM="figma-console-mcp@1.46.0"

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
dir="${TALK_TO_FIGMA_HOME:-$HOME/.local/share/talk-to-figma}"
bin="$HOME/.local/bin"
with_comments=0
[[ ${1:-} == "--comments" ]] && with_comments=1

ok() { printf '✔ %s\n' "$*"; }
die() { printf '✘ %s\n' "$*" >&2; exit 1; }

[[ $(uname -s) == Linux ]] || die "este instalador es para Linux"
command -v node >/dev/null || die "falta Node.js (>= 18)"
command -v npx >/dev/null || die "falta npx"
command -v claude >/dev/null || die "falta el CLI de Claude Code"

if ! command -v bun >/dev/null; then
  npm install -g bun@1 >/dev/null 2>&1 || true
  command -v bun >/dev/null || die "no se pudo instalar bun por npm; usa https://bun.sh/docs/installation y vuelve a correr"
fi
ok "bun $(bun --version)"

mkdir -p "$dir" "$bin"
curl -fsSL "https://raw.githubusercontent.com/grab/cursor-talk-to-figma-mcp/$TTF_COMMIT/src/socket.ts" -o "$dir/socket.ts.tmp"
# Bun.serve escucha en 0.0.0.0 por defecto y el relay no autentica: se ata a loopback.
sed -i 's|^  // hostname: "0.0.0.0",|  hostname: "127.0.0.1",|' "$dir/socket.ts.tmp"
grep -q '^  hostname: "127.0.0.1",' "$dir/socket.ts.tmp" || die "el parche de hostname no aplicó; revisa socket.ts en $TTF_COMMIT"
mv "$dir/socket.ts.tmp" "$dir/socket.ts"
echo "$TTF_COMMIT" >"$dir/COMMIT"
ok "relay en $dir/socket.ts (commit ${TTF_COMMIT:0:7}, solo 127.0.0.1)"

install -m 0755 "$here/figma-relay" "$bin/figma-relay"
ok "figma-relay en $bin/figma-relay"
[[ :$PATH: == *":$bin:"* ]] || printf '! %s no está en el PATH\n' "$bin"

if claude mcp get TalkToFigma >/dev/null 2>&1; then
  ok "MCP TalkToFigma ya registrado"
else
  claude mcp add TalkToFigma -s user -- npx -y "$TTF_NPM" >/dev/null
  ok "MCP TalkToFigma registrado ($TTF_NPM)"
fi

if (( with_comments )); then
  [[ -n ${FIGMA_ACCESS_TOKEN:-} ]] || die "exporta FIGMA_ACCESS_TOKEN (figd_…) en esta terminal antes de usar --comments"
  code=$(curl -s -o /dev/null -w '%{http_code}' -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" https://api.figma.com/v1/me)
  [[ $code == 200 ]] || die "Figma rechazó el token (HTTP $code)"
  claude mcp remove figma-console -s user >/dev/null 2>&1 || true
  claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN="$FIGMA_ACCESS_TOKEN" -- npx -y "$FCM_NPM" >/dev/null
  ok "MCP figma-console registrado en modo token ($FCM_NPM)"
fi

echo
echo "Siguiente: figma-relay start, luego abre una sesión nueva de Claude Code y corre doctor.sh"
