// Builds one wide cover collage per project from its photos (16:9, AVIF).
// Run after images-to-avif.mjs: node scripts/project-collages.mjs
import path from "node:path";
import sharp from "sharp";

const SOURCE = "/home/paullaster/Documents/projects/bigbro/project images";
const WA = (n) =>
  path.join(
    SOURCE,
    `WhatsApp Image 2026-10-30 at 14.07.42${n === 0 ? "" : `(${n})`}.jpeg`,
  );
const W = 1600;
const H = 900;
const GAP = 8;

const tile = (file, width, height) =>
  sharp(file)
    .rotate()
    .resize(width, height, { fit: "cover", position: "attention" })
    .toBuffer();

// One large photo on the left and two stacked on the right.
async function threeUp(out, big, top, bottom) {
  const left = Math.round(W * 0.6);
  const right = W - left - GAP;
  const half = Math.round((H - GAP) / 2);
  const layers = [
    { input: await tile(big, left, H), left: 0, top: 0 },
    { input: await tile(top, right, half), left: left + GAP, top: 0 },
    {
      input: await tile(bottom, right, H - half - GAP),
      left: left + GAP,
      top: half + GAP,
    },
  ];
  const info = await sharp({
    create: { width: W, height: H, channels: 3, background: "#ffffff" },
  })
    .composite(layers)
    .avif({ quality: 55, effort: 4 })
    .toFile(out);
  console.log(`${out}  ${(info.size / 1024).toFixed(0)} KB`);
}

// A project with no photos yet: the company mark on a plain ground, so nothing from another project is shown.
async function placeholder(out) {
  const mark = await sharp("public/brand/sm-solar-electrical.png")
    .resize({ width: 760 })
    .toBuffer();
  const info = await sharp({
    create: { width: W, height: H, channels: 3, background: "#f5f7f4" },
  })
    .composite([{ input: mark, gravity: "centre" }])
    .avif({ quality: 60, effort: 4 })
    .toFile(out);
  console.log(`${out}  ${(info.size / 1024).toFixed(0)} KB`);
}

if (process.env.ALL === "1")
  await threeUp(
    "public/images/projects/kikuyu/cover.avif",
    WA(20),
    WA(9),
    WA(7),
  );
if (process.env.ALL === "1")
  await threeUp(
    "public/images/projects/ruaka/cover.avif",
    WA(14),
    WA(13),
    WA(15),
  );
if (process.env.ALL === "1")
  await threeUp(
    "public/images/projects/zawadi/cover.avif",
    "assets-src/site/zawadi apartment building.png",
    "assets-src/site/Zawadi Meter Box Outside view.png",
    "assets-src/site/zawadi meter box inside.png",
  );

// Western Fresh: the roof photo is a small wide strip, so it is cropped to the roof itself and shown as a band, with the
// drive and protection equipment as a second band. Stacked, neither photo loses what it is meant to show.
const wf = path.join(SOURCE, "wefi 11kw panel installations cropped.png");
const drive = path.join(SOURCE, "Wefi 11kW offgrid solar power 2.png");
const band = (file, region, width, height) =>
  sharp(file)
    .rotate()
    .extract(region)
    .resize(width, height, { fit: "cover" })
    .toBuffer();

async function stacked(out, top, bottom, topHeight) {
  const info = await sharp({
    create: { width: W, height: H, channels: 3, background: "#ffffff" },
  })
    .composite([
      {
        input: await band(top.file, top.region, W, topHeight),
        left: 0,
        top: 0,
      },
      {
        input: await band(bottom.file, bottom.region, W, H - topHeight - GAP),
        left: 0,
        top: topHeight + GAP,
      },
    ])
    .avif({ quality: 55, effort: 4 })
    .toFile(out);
  console.log(`${out}  ${(info.size / 1024).toFixed(0)} KB`);
}

const roofWide = {
  file: wf,
  region: { left: 130, top: 104, width: 675, height: 218 },
};
const roofSlim = {
  file: wf,
  region: { left: 250, top: 190, width: 555, height: 130 },
};
const driveBand = {
  file: drive,
  region: { left: 0, top: 505, width: 1402, height: 330 },
};
const driveTall = {
  file: drive,
  region: { left: 0, top: 450, width: 1402, height: 452 },
};

await stacked(
  "public/images/projects/western-fresh/cover-solar.avif",
  roofWide,
  driveBand,
  516,
);
await stacked(
  "public/images/projects/western-fresh/cover-electrical.avif",
  driveTall,
  roofSlim,
  516,
);
await placeholder("public/images/projects/basanga-inn/cover.avif");
