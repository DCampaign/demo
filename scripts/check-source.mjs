import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const required = ["app/layout.tsx", "app/page.tsx", "app/globals.css", "components", "data"];
const missing = required.filter((path) => !existsSync(new URL(path, root)));

if (missing.length) {
  console.error(`Incomplete deployment source in ${fileURLToPath(root)}.`);
  console.error(`Missing: ${missing.join(", ")}`);
  console.error("Upload all source folders beside package.json and set Vercel Root Directory to the repository root.");
  process.exit(1);
}

console.log("Deployment source verified: app directory and supporting source folders are present.");
