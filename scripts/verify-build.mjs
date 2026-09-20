import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "out");
const html = await readFile(join(output, "index.html"), "utf8");
const requiredCopy = [
  "Chat that never",
  "Private by design.",
  "Bluetooth-native",
  "End-to-end encrypted",
  "Four steps.",
  "Download for Windows",
  "Inside a live session",
  "Memory only",
  "No signal here. Still with me?",
  ".\\TermLink.exe --chat",
];

for (const copy of requiredCopy) {
  if (!html.includes(copy)) throw new Error(`Static page is missing: ${copy}`);
}

await stat(join(output, "manifest.webmanifest"));
await stat(join(output, "robots.txt"));

const archivePath = join(output, "downloads", "TermLink-Windows.zip");
const archive = await readFile(archivePath);
const expectedSize = 703714;
const expectedHash = "2e8f98f680861373959440b08c8c7d845d46ee833eb970317d1a20ef40417a24";
const actualHash = createHash("sha256").update(archive).digest("hex");

if (archive.byteLength !== expectedSize) {
  throw new Error(`Download size changed: expected ${expectedSize}, received ${archive.byteLength}`);
}
if (actualHash !== expectedHash) {
  throw new Error(`Download checksum changed: expected ${expectedHash}, received ${actualHash}`);
}

console.log("TermLink static export and portable download verified.");
