#!/usr/bin/env node
// Bundle margaui.js into dist/margaui.min.js against the minified VFS in
// dist/vfs.js, leaving the tracked dev vfs.js at the repo root untouched.
// (esbuild's --alias doesn't accept relative keys, hence the plugin.)

import { build } from "esbuild";
import { resolve } from "node:path";

await build({
  entryPoints: ["margaui.js"],
  bundle: true,
  minify: true,
  format: "esm",
  outfile: "dist/margaui.min.js",
  plugins: [
    {
      name: "dist-vfs",
      setup(b) {
        b.onResolve({ filter: /^\.\/vfs\.js$/ }, () => ({
          path: resolve("dist/vfs.js"),
        }));
      },
    },
  ],
});
