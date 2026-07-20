#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const configPath = path.join(__dirname, "card.config.json");
const outputDir = path.join(rootDir, "generated");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function mmToPx(mm, pxPerMm) {
  return Math.round(mm * pxPerMm);
}

function wrapLineByWords(text, maxChars) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return [""];
  }

  const lines = [];
  let current = words[0];

  for (let i = 1; i < words.length; i += 1) {
    const candidate = `${current} ${words[i]}`;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      lines.push(current);
      current = words[i];
    }
  }

  lines.push(current);
  return lines;
}

function splitAndWrapText(rawText, maxCharsPerLine) {
  const paragraphs = String(rawText ?? "").split(/\r?\n/);
  const wrapped = [];

  for (const paragraph of paragraphs) {
    if (paragraph.trim().length === 0) {
      wrapped.push("");
      continue;
    }

    wrapped.push(...wrapLineByWords(paragraph, maxCharsPerLine));
  }

  return wrapped.length > 0 ? wrapped : [""];
}

function buildGuideLayer(dimensions, cut, safe, fonts) {
  return `
  <g id="print-guides" fill="none" font-family="${escapeXml(fonts)}" pointer-events="none">
    <rect x="0.5" y="0.5" width="${dimensions.widthPx - 1}" height="${dimensions.heightPx - 1}" stroke="#d22c2c" stroke-dasharray="12 10" stroke-width="1.5"/>
    <rect x="${cut.x}" y="${cut.y}" width="${cut.width}" height="${cut.height}" stroke="#3a3a3a" stroke-dasharray="10 8" stroke-width="1.4"/>
    <rect x="${safe.x}" y="${safe.y}" width="${safe.width}" height="${safe.height}" stroke="#1b8f3f" stroke-dasharray="9 7" stroke-width="1.4"/>
    <text x="${safe.x + 12}" y="${safe.y + 18}" font-size="18" fill="#1b8f3f">Safe Area (${safe.widthMm} x ${safe.heightMm} mm)</text>
    <text x="${safe.x + 12}" y="${safe.y + 38}" font-size="15" fill="#3a3a3a">Cut Line (${cut.widthMm} x ${cut.heightMm} mm)</text>
    <text x="${safe.x + 12}" y="${safe.y + 58}" font-size="15" fill="#d22c2c">Bleed Edge (${dimensions.widthMm} x ${dimensions.heightMm} mm)</text>
  </g>`;
}

function buildArtwork(config, metrics) {
  const { brand, content, assets, layout } = config;
  const { dimensions, cut } = metrics;

  const taglineLines = splitAndWrapText(content.tagline, 42);
  const taglineY = 106;
  const taglineLineHeight = 30;
  const taglineTspans = taglineLines
    .map((line, index) => {
      const dy = index === 0 ? 0 : taglineLineHeight;
      return `<tspan x="0" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join("");

  const rowGap = 40;
  const taglineBottomY = taglineY + (taglineLines.length - 1) * taglineLineHeight;
  const firstRowY = Math.max(186, taglineBottomY + 44);
  const rowLines = content.contactRows
    .map((row, index) => {
      const y = firstRowY + index * rowGap;
      const bulletColor = index % 2 === 0 ? brand.primary : brand.secondary;
      return `
      <circle cx="9" cy="${y - 8}" r="4" fill="${escapeXml(bulletColor)}"/>
      <text x="22" y="${y}" font-family="${escapeXml(brand.bodyFont)}" font-size="24" fill="${escapeXml(brand.text)}">${escapeXml(row)}</text>`;
    })
    .join("\n");

  return `
  <defs>
    <linearGradient id="bgGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${escapeXml(brand.background)}"/>
      <stop offset="70%" stop-color="#f4eeea"/>
      <stop offset="100%" stop-color="#edf3f4"/>
    </linearGradient>

    <linearGradient id="accentStroke" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${escapeXml(brand.primary)}"/>
      <stop offset="100%" stop-color="${escapeXml(brand.secondary)}"/>
    </linearGradient>

  </defs>

  <rect x="0" y="0" width="${dimensions.widthPx}" height="${dimensions.heightPx}" fill="url(#bgGlow)"/>

  <circle cx="48" cy="34" r="248" fill="${escapeXml(brand.primary)}" fill-opacity="0.06"/>
  <circle cx="${dimensions.widthPx - 10}" cy="${dimensions.heightPx - 10}" r="250" fill="${escapeXml(brand.secondary)}" fill-opacity="0.06"/>

  <rect x="${cut.x}" y="${cut.y}" width="${cut.width}" height="${cut.height}" rx="${layout.cardCornerRadiusPx}" fill="none" stroke="${escapeXml(brand.primary)}" stroke-opacity="0.18" stroke-width="2"/>
  <rect x="60" y="60" width="840" height="490" rx="10" fill="none" stroke="#8f7a6a" stroke-opacity="0.22" stroke-width="1.2"/>
  <rect x="76" y="84" width="806" height="8" rx="4" fill="url(#accentStroke)" fill-opacity="0.32"/>

  <line x1="414" y1="138" x2="414" y2="472" stroke="url(#accentStroke)" stroke-opacity="0.55" stroke-width="2"/>

  <g id="logo-panel">
    <rect x="${layout.leftPanel.x + 4}" y="${layout.leftPanel.y + 6}" width="${layout.leftPanel.width}" height="${layout.leftPanel.height}" rx="${layout.leftPanel.radius}" fill="#000000" fill-opacity="0.06"/>
    <rect x="${layout.leftPanel.x}" y="${layout.leftPanel.y}" width="${layout.leftPanel.width}" height="${layout.leftPanel.height}" rx="${layout.leftPanel.radius}" fill="#ffffff" fill-opacity="0.90"/>
    <rect x="${layout.leftPanel.x + 16}" y="${layout.leftPanel.y + 16}" width="${layout.leftPanel.width - 32}" height="${layout.leftPanel.height - 80}" rx="10" fill="none" stroke="#8f7a6a" stroke-opacity="0.35" stroke-width="1"/>
    <image href="${escapeXml(assets.logoPath)}" x="${layout.logo.x}" y="${layout.logo.y}" width="${layout.logo.width}" height="${layout.logo.height}" preserveAspectRatio="xMidYMid meet"/>
    <text x="${layout.leftPanel.x + layout.leftPanel.width / 2}" y="${layout.leftPanelLabelY}" text-anchor="middle" font-family="${escapeXml(brand.bodyFont)}" font-size="20" letter-spacing="1.8" fill="${escapeXml(brand.secondary)}">${escapeXml(content.title)}</text>
  </g>

  <g id="content" transform="translate(${layout.rightBlock.x},${layout.rightBlock.y})">
    <text x="0" y="0" font-family="${escapeXml(brand.headingFont)}" font-size="64" font-weight="700" fill="${escapeXml(brand.primary)}">${escapeXml(content.name)}</text>
    <text x="2" y="40" font-family="${escapeXml(brand.bodyFont)}" font-size="23" font-weight="700" letter-spacing="1.6" fill="${escapeXml(brand.secondary)}">${escapeXml(content.title)}</text>

    <line x1="0" y1="62" x2="${layout.rightBlock.maxWidth}" y2="62" stroke="url(#accentStroke)" stroke-width="3" stroke-linecap="round"/>

    <text x="0" y="${taglineY}" font-family="${escapeXml(brand.headingFont)}" font-size="23" font-style="italic" fill="#5d2b2b">${taglineTspans}</text>

    <g transform="translate(0,0)">
${rowLines}
    </g>
  </g>

  `;
}

function buildSvg(config, includeGuides) {
  const { spec, brand } = config;

  const cutWidthMm = spec.finalCutMm.width;
  const cutHeightMm = spec.finalCutMm.height;
  const bleedMm = spec.bleedMm;
  const safeInsetMm = spec.safeInsetMm;
  const pxPerMm = spec.pxPerMm;

  const widthMm = cutWidthMm + bleedMm * 2;
  const heightMm = cutHeightMm + bleedMm * 2;

  const dimensions = {
    widthMm,
    heightMm,
    widthPx: mmToPx(widthMm, pxPerMm),
    heightPx: mmToPx(heightMm, pxPerMm)
  };

  const cut = {
    x: mmToPx(bleedMm, pxPerMm),
    y: mmToPx(bleedMm, pxPerMm),
    width: mmToPx(cutWidthMm, pxPerMm),
    height: mmToPx(cutHeightMm, pxPerMm),
    widthMm: cutWidthMm,
    heightMm: cutHeightMm
  };

  const safe = {
    x: mmToPx(bleedMm + safeInsetMm, pxPerMm),
    y: mmToPx(bleedMm + safeInsetMm, pxPerMm),
    width: mmToPx(cutWidthMm - safeInsetMm * 2, pxPerMm),
    height: mmToPx(cutHeightMm - safeInsetMm * 2, pxPerMm),
    widthMm: cutWidthMm - safeInsetMm * 2,
    heightMm: cutHeightMm - safeInsetMm * 2
  };

  const artwork = buildArtwork(config, { dimensions, cut, safe });
  const guides = includeGuides ? buildGuideLayer(dimensions, cut, safe, brand.bodyFont) : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${dimensions.widthMm}mm" height="${dimensions.heightMm}mm" viewBox="0 0 ${dimensions.widthPx} ${dimensions.heightPx}" version="1.1">
  <title>Married by Gen Business Card ${includeGuides ? "Source" : "Print"}</title>
  <desc>Single-sided business card generated from card/template/card.config.json.</desc>${artwork}
${guides}
</svg>
`;
}

function writeOutputs(config) {
  fs.mkdirSync(outputDir, { recursive: true });

  const sourceSvg = buildSvg(config, true);
  const printSvg = buildSvg(config, false);

  const sourcePath = path.join(outputDir, "marriedbygen-business-card-source.svg");
  const printPath = path.join(outputDir, "marriedbygen-business-card-print.svg");

  fs.writeFileSync(sourcePath, sourceSvg, "utf8");
  fs.writeFileSync(printPath, printSvg, "utf8");

  return { sourcePath, printPath };
}

function main() {
  const config = readJson(configPath);
  const results = writeOutputs(config);

  console.log("Generated business card files:");
  console.log(`- ${results.sourcePath}`);
  console.log(`- ${results.printPath}`);
  console.log("\nNext: export print SVG to PDF (96x61 mm, 100% scale, bleed retained).");
}

main();
