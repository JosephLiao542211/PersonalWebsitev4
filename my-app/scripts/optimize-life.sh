#!/usr/bin/env bash
# Builds the LIFE polaroid photos (macOS: needs swiftc + cwebp).
#
# Sources: every image in public/life (including subfolders like food/), the
# HEICs in public/, and the original life photos that only exist as optimized webps.
# Outputs per photo, in public/optimized:
#   polaroid-<slug>-400.webp   400px square crop shown on the board
#   polaroid-<slug>-1600.webp  full photo for the lightbox
# plus life-photos.json, the manifest script.js imports.
#
# Re-run after adding photos: `bun run optimize:life`. Unchanged photos are skipped.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=public/optimized
THUMB_QUALITY=74
FULL_QUALITY=78
EXCLUDE=("public/IMG_1313.HEIC")

# Originals from the first LIFE section: "<thumb source>|<lightbox image>".
ORIGINALS=(
  "public/optimized/life-wt-1600.webp|/optimized/life-wt-1600.webp"
  "public/optimized/portrait-1536.webp|/optimized/portrait-1536.webp"
  "public/optimized/life-life-1200.webp|/optimized/life-life-1200.webp"
  "public/optimized/life-mic-1920.webp|/optimized/life-mic-1920.webp"
  "public/optimized/life-bjj-259.webp|/optimized/life-bjj-259.webp"
  "public/optimized/life-life3-1440.webp|/optimized/life-life3-1440.webp"
  "public/optimized/life-ddqic-531.webp|/optimized/life-ddqic-531.webp"
  "public/optimized/life-bananda-1200.webp|/optimized/life-bananda-1200.webp"
)

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
swiftc -O scripts/life-thumb.swift -o "$TMP/life-thumb" 2>/dev/null

slug() {
  local rel=${1#public/}
  echo "${rel%.*}" | tr 'A-Z' 'a-z' | sed -E 's/[^a-z0-9]+/-/g; s/^-|-$//g'
}

# Writes $OUT/<name>.webp from $1 unless it is already newer than the source.
encode() {
  local src=$1 name=$2 size=$3 mode=$4 quality=$5
  local out="$OUT/$name.webp"
  [[ "$out" -nt "$src" ]] && return
  "$TMP/life-thumb" "$src" "$TMP/$name.png" "$size" "$mode"
  cwebp -quiet -q "$quality" "$TMP/$name.png" -o "$out"
  echo "  $out  $(($(stat -f%z "$out") / 1024)) KB"
}

entries=()

for pair in "${ORIGINALS[@]}"; do
  src=${pair%%|*}
  name="polaroid-$(slug "$src" | sed -E 's/^optimized-//; s/-[0-9]+$//')-400"
  encode "$src" "$name" 400 square "$THUMB_QUALITY"
  entries+=("{\"thumb\":\"/optimized/$name.webp\",\"full\":\"${pair#*|}\"}")
done

while IFS= read -r src; do
  [[ " ${EXCLUDE[*]} " == *" $src "* ]] && continue
  base="polaroid-$(slug "$src")"
  encode "$src" "$base-400" 400 square "$THUMB_QUALITY"
  encode "$src" "$base-1600" 1600 fit "$FULL_QUALITY"
  entries+=("{\"thumb\":\"/optimized/$base-400.webp\",\"full\":\"/optimized/$base-1600.webp\"}")
done < <(find public -maxdepth 1 -iname "*.heic" | sort; find public/life -type f \( -iname "*.heic" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort)

(IFS=,; echo "[${entries[*]}]") > "$OUT/life-photos.json"
echo "Wrote $OUT/life-photos.json (${#entries[@]} photos)"
