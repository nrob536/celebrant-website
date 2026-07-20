Business Card Quickstart

1) Edit content and style values:
- card/template/card.config.json

2) Generate SVG outputs:
- node card/template/generate-card.js

3) Export final PDF with Inkscape:
- bash card/template/export-pdf.sh

Generated files:
- card/generated/marriedbygen-business-card-source.svg (with bleed/cut/safe guides)
- card/generated/marriedbygen-business-card-print.svg (clean print artwork)
- card/generated/marriedbygen-business-card-print.pdf (final export)

Print specs baked into generator:
- Bleed canvas: 96 x 61 mm
- Final cut: 90 x 55 mm
- Safe area: 84 x 49 mm
