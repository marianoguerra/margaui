# `tw/`

These four files mirror the upstream Tailwind v4 entry graph and are served to the in-browser compiler through the virtual filesystem in `vfs.js`.

- `tailwindcss.css` — the entry imported by the compiler under the synthetic name `tailwindcss`. It `@layer`-orders the other three.
- `theme.css` — upstream `@theme` tokens.
- `preflight.css` — upstream preflight/reset.
- `utilities.css` — upstream utilities layer.

All four are bundled into `vfs.js` by `tools/make_vfs_esm.py` and resolved at runtime by `twcompiler.js`'s `loadStylesheet`. Do not rename or edit these files except when syncing with a new upstream Tailwind version (`npm run fetch-tw` refreshes the JS bundle; the CSS mirrors above are manual).
