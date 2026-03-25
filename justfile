TAILWIND_VSN := "4.2.1"

check-sync:
  python3 tools/check_sync.py

gen-vfs-dev:
  python3 tools/make_vfs_esm.py 'src/*.css' 'base/*.css' 'tw/*.css' \
    'tailwindcss=tw/tailwindcss' > vfs.js

gen-component-tree:
  python3 tools/create-component-tree.py playground/components > playground/components.json

playground: gen-vfs-dev gen-component-tree gen-theme-list

fetch-tw:
  bun build --minify "https://esm.sh/tailwindcss@{{TAILWIND_VSN}}" > tailwindcss.js

gen-theme-list:
  python3 tools/gen_theme_list.py themes > playground/themes.json

gen-vfs:
  rm -rf dist
  mkdir dist
  just min-css-dir src
  just min-css-dir themes
  just min-css-dir base
  just min-css-dir tw
  cp tw/tailwindcss dist/tw/
  cd dist; ../tools/make_vfs_esm.py 'src/*.css' 'base/*.css' 'tw/*.css' \
    'tailwindcss=tw/tailwindcss' > ../vfs.js
  bun build --minify margaui.js > dist/margaui.min.js

min-css-dir DIR:
  mkdir -p dist/{{DIR}}
  bunx --bun esbuild --minify --outdir=dist/{{DIR}} {{DIR}}/*.css

dist: gen-vfs
  rm -r dist/src dist/base dist/tw
  cp resources/release/*.html resources/release/README.md dist/

publish-dry: dist
  npm pack --dry-run

pack: dist
  npm pack

publish: dist
  npm publish
