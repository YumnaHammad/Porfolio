import { removeBackground } from "@imgly/background-removal-node";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SRC = "public/assets/Yumna.jpeg";
const OUT = "public/assets/yumna-cutout.png";

// Point the loader at the model files inside node_modules instead of a CDN.
const publicPath = pathToFileURL(
  path.resolve("node_modules/@imgly/background-removal-node/dist/"),
).toString() + "/";

const blob = await removeBackground(SRC, {
  publicPath,
  model: "medium",
  output: { format: "image/png", quality: 1 },
  progress: (key, cur, total) => {
    if (key.startsWith("compute")) process.stdout.write(`\r${key} ${cur}/${total}`);
  },
});

const buf = Buffer.from(await blob.arrayBuffer());
fs.writeFileSync(OUT, buf);
console.log(`\nwrote ${OUT} — ${(buf.length / 1024).toFixed(0)}KB`);
