#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
INPUT_SVG="$ROOT_DIR/card/generated/marriedbygen-business-card-print.svg"
OUTPUT_PDF="$ROOT_DIR/card/generated/marriedbygen-business-card-print.pdf"

if ! command -v inkscape >/dev/null 2>&1; then
  echo "Error: Inkscape is required for PDF export but was not found in PATH."
  exit 1
fi

if [[ ! -f "$INPUT_SVG" ]]; then
  echo "Error: Missing generated print SVG: $INPUT_SVG"
  echo "Run: node card/template/generate-card.js"
  exit 1
fi

echo "Exporting PDF..."
inkscape "$INPUT_SVG" \
  --export-type=pdf \
  --export-filename="$OUTPUT_PDF" \
  --export-area-page

echo "Done: $OUTPUT_PDF"
