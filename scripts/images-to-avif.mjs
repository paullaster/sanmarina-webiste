// Builds the site's AVIF pictures from the originals.
// Run from the website folder: node scripts/images-to-avif.mjs
// Uses the copy of sharp that Next.js already installs; nothing is added to package.json.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE = "/home/paullaster/Documents/projects/bigbro/project images";
const WA = (n) =>
  `WhatsApp Image 2026-10-30 at 14.07.42${n === 0 ? "" : `(${n})`}.jpeg`;
const NEW = (t) => `WhatsApp Image 2026-11-05 at ${t}.jpeg`;

// [original, output under public/images, longest edge in pixels]
const photos = [
  // Kikuyu: 10 kW system
  [path.join(SOURCE, WA(20)), "projects/kikuyu/array.avif", 1600],
  [path.join(SOURCE, WA(7)), "projects/kikuyu/team.avif", 1600],
  [path.join(SOURCE, WA(8)), "projects/kikuyu/wiring.avif", 1600],
  [path.join(SOURCE, WA(9)), "projects/kikuyu/inverter.avif", 1600],
  [path.join(SOURCE, NEW("14.03.05")), "projects/kikuyu/summary.avif", 1600],
  // Ruaka: 5 kWp array, 10 kW inverter, 10.24 kWh battery
  [path.join(SOURCE, NEW("10.40.24")), "projects/ruaka/summary.avif", 1600],
  [path.join(SOURCE, WA(14)), "projects/ruaka/array.avif", 1600],
  [path.join(SOURCE, WA(15)), "projects/ruaka/inverter.avif", 1600],
  // Kitengela, Kajiado County: 24 kWp array, 24 kW inverter, 40 kWh battery
  [path.join(SOURCE, WA(13)), "projects/kitengela/roof.avif", 1600],
  [path.join(SOURCE, WA(11)), "projects/kitengela/inverters.avif", 1600],
  [path.join(SOURCE, WA(12)), "projects/kitengela/batteries.avif", 1600],
  // Western Fresh Industries
  [
    path.join(SOURCE, "wefi 11kw panel installations cropped.png"),
    "projects/western-fresh/roof.avif",
    1600,
  ],
  [
    path.join(SOURCE, "Wefi 11kW offgrid solar power 2.png"),
    "projects/western-fresh/drive.avif",
    1600,
  ],
];

// Pictures already on the site, converted in place of the PNGs.
const existing = [
  [
    "assets-src/site/zawadi apartment building.png",
    "projects/zawadi/building.avif",
    1600,
  ],
  [
    "assets-src/site/Zawadi Meter Box Outside view.png",
    "projects/zawadi/meter-box-outside.avif",
    1600,
  ],
  [
    "assets-src/site/zawadi meter box inside.png",
    "projects/zawadi/meter-box-inside.avif",
    1600,
  ],
  [
    "assets-src/site/solar installation work.png",
    "site/solar-installation-work.avif",
    1600,
  ],
  ["assets-src/site/1mw solar cables.png", "site/solar-cables.avif", 1600],
  [
    "assets-src/site/Transformer Inspection.png",
    "site/transformer-inspection.avif",
    1600,
  ],
  [
    "assets-src/site/Transformer Insepction 2.png",
    "site/transformer-terminals.avif",
    1600,
  ],
];

const run = async (jobs, quality, effort = 4) => {
  for (const [from, to, edge] of jobs) {
    const out = path.join("public/images", to);
    await mkdir(path.dirname(out), { recursive: true });
    const info = await sharp(from)
      .rotate()
      .resize({
        width: edge,
        height: edge,
        fit: "inside",
        withoutEnlargement: true,
      })
      .avif({ quality, effort })
      .toFile(out);
    console.log(
      `${to}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`,
    );
  }
};

await run(photos, 55);
await run(existing, 55);

// The partner logos were converted once (480 px wide, quality 70) and are kept only as AVIF.
// The brand logo keeps its PNG and WebP too: search engines read those from structured data.
const logo = await sharp("public/brand/sm-solar-electrical.png")
  .avif({ quality: 75, effort: 4 })
  .toFile("public/brand/sm-solar-electrical.avif");
console.log(`brand logo  ${(logo.size / 1024).toFixed(1)} KB`);
