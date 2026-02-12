check-sync:
  python3 tools/check_sync.py

gen-vfs-dev:
  python3 tools/make_vfs_esm.py 'src/*.css' 'base/*.css' 'tw/*.css' \
    'tailwindcss=tw/tailwindcss' > vfs.js

gen-component-tree:
  python3 tools/create-component-tree.py playground/components > playground/components.json

playground: gen-vfs-dev gen-component-tree gen-theme-list

fetch-tw:
  deno bundle --minify "https://esm.sh/tailwindcss" > tailwindcss.js

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
  deno bundle --minify margaui.js > dist/margaui.min.js

min-css-dir DIR:
  mkdir -p dist/{{DIR}}
  for file in {{DIR}}/*.css; do base=$(basename "$file"); npx esbuild "$file" --minify --outfile="dist/{{DIR}}/$base"; done

dist: gen-vfs
  rm -r dist/src dist/base dist/tw
  cp resources/release/*.html resources/release/README.md dist/
