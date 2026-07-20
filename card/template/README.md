# Business Card Reproducible Template

This template gives you a clean, tidy, and reproducible workflow:

1. Edit content and layout in `card.config.json`.
2. Run one command to regenerate both SVG outputs.
3. Export the print SVG to final PDF following printer specs.

## Files

- `card.config.json`: all editable settings (text, colors, spacing, positions).
- `generate-card.js`: deterministic generator.
- `../generated/marriedbygen-business-card-source.svg`: generated with bleed/cut/safe guides.
- `../generated/marriedbygen-business-card-print.svg`: generated clean print artwork.

## Why this is tidier

- Curved lines are removed entirely to prevent any overlap with text.
- Text/content area is kept in the safe zone.
- Layout is split into left logo panel and right text block with fixed spacing.
- Decorative elements are subtle and fixed outside the key text hierarchy.

## Regenerate

From repository root:

```bash
node card/template/generate-card.js
```

## Edit common fields

In `card.config.json`:

- Business details: `content.name`, `content.tagline`, and `content.contactRows`.
- Tip: `content.tagline` supports line breaks using `\n` (for example: `"Line one\nLine two"`).
- Branding: `brand.primary`, `brand.secondary`, fonts.
- Visual balance: `layout.rightBlock`, `layout.leftPanel`, and `layout.logo`.
- Logo source: `assets.logoPath`.

## Print output

Final printer requirement is already encoded:

- Final cut: 90 x 55 mm
- Bleed canvas: 96 x 61 mm
- Safe area: 84 x 49 mm

To export PDF (recommended with Inkscape):

1. Open `card/generated/marriedbygen-business-card-print.svg`.
2. Confirm page is 96 x 61 mm.
3. Convert text to paths if you need portability (`Path > Object to Path`).
4. Save as PDF.
5. Upload at 100% scale with no fit-to-page.

## Optional: add crop marks

If your printer requests crop marks, keep using the print SVG artwork and add crop marks at export time in your design tool.
