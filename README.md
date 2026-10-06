# AURA Salon Demo

A Next.js demo website. Booking, contact, and newsletter forms are simulated.

## Run locally

Run `npm ci`, then `npm run dev`. For production, run `npm run build`, then `npm run start`.

## GitHub upload and Vercel deployment

Extract `demo-github-upload.zip` and upload its contents directly into the GitHub repository root. Keep every source folder intact. Do not upload the ZIP itself, `node_modules`, or `.next`.

The repository root must contain:

```text
app/layout.tsx
app/page.tsx
app/globals.css
components/
data/
scripts/check-source.mjs
public/
package.json
package-lock.json
next.config.ts
vercel.json
tsconfig.json
postcss.config.mjs
eslint.config.mjs
```

In Vercel, select Next.js and leave Root Directory blank (repository root). Leave Output Directory at its framework default. The included vercel.json sets the install and build commands.

Create a new deployment from the latest GitHub commit after uploading. Redeploying an old commit still uses its old source files.

The missing app/pages error means the deployed source is incomplete or the build root is incorrect. The prebuild check now reports missing source files explicitly. Configuration alone cannot recover files omitted from the upload.
