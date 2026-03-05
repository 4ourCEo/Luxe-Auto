#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${OPENAI_API_KEY:-}" ]]; then
  echo "OPENAI_API_KEY is required. Set it locally, then rerun."
  exit 1
fi

CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
SORA_CLI="${SORA_CLI:-$CODEX_HOME/skills/sora/scripts/sora.py}"

if [[ ! -f "$SORA_CLI" ]]; then
  echo "Sora CLI not found at: $SORA_CLI"
  echo "Install the sora skill or set SORA_CLI to the script path."
  exit 1
fi

mkdir -p public/media tmp/sora

PROMPT_FILE="tmp/sora/luxe-hero-prompt.txt"
cat > "$PROMPT_FILE" <<'EOF'
Use case: website hero background
Primary request: a cinematic luxury auto detailing reveal shot
Scene/background: modern studio garage, polished floor reflections, dusk ambience
Subject: a glossy black performance coupe with visible mirror-finish paint
Action: slow left-to-right dolly while soft mist clears to reveal the finish
Camera: low angle, 35mm, smooth stabilized motion
Lighting/mood: dramatic softbox key lights with subtle rim glow, premium mood
Color palette: black, graphite, silver, warm white
Style/format: photoreal, commercial automotive ad
Timing/beats: reveal starts at 0.5s, full hero shine by 3.5s
Audio: none
Constraints: no logos, no on-screen text, no people, suitable for all audiences
Avoid: artifacts, jitter, flicker, warped body panels
EOF

UV_CACHE_DIR="${UV_CACHE_DIR:-/tmp/uv-cache}" uv run --with openai python "$SORA_CLI" create-and-poll \
  --model sora-2 \
  --prompt-file "$PROMPT_FILE" \
  --no-augment \
  --size 1280x720 \
  --seconds 4 \
  --download \
  --variant video \
  --out public/media/hero-sora.mp4

echo "Saved Sora hero video to public/media/hero-sora.mp4"
