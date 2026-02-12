check-sync:
  python3 tools/check_sync.py

gen-vfs-dev:
  python3 tools/make_vfs_esm.py 'src/*.css' 'themes/*.css' 'base/*.css' 'tw/*.css' \
    'tailwindcss=tw/tailwindcss' > vfs.js

gen-component-tree:
  python3 tools/create-component-tree.py playground/components > playground/components.json

playground: gen-vfs-dev gen-component-tree

fetch-tw:
  deno bundle --minify "https://esm.sh/tailwindcss" > tailwindcss.js

gen-vfs: dist
  cd dist; ../tools/make_vfs_esm.py 'src/*.css' 'themes/*.css' 'base/*.css' 'tw/*.css' \
    'tailwindcss=tw/tailwindcss' > vfs.js

min-css-dir DIR:
  mkdir -p dist/{{DIR}}
  for file in {{DIR}}/*.css; do base=$(basename "$file"); npx esbuild "$file" --minify --outfile="dist/{{DIR}}/$base"; done

dist:
  rm -rf dist
  mkdir dist
  just min-css-dir src
  just min-css-dir themes
  just min-css-dir base
  just min-css-dir tw
  cp tw/tailwindcss dist/tw/
  deno bundle --minify margaui.js > dist/margaui.min.js

