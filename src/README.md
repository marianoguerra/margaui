# `src/`

One Tailwind v4 `@utility` file per component. Everything here is loaded through the in-browser VFS (`vfs.js`) and also imported individually by the CLI entry (`entry.css`).

## Shared tokens (defined in `base/`)

Components should drive sizes and colors from these tokens rather than inlining calcs or color-mix expressions:

| Token | Defined in | Purpose |
|---|---|---|
| `--size-field` | themes | unit for form-input heights (input, select, button, file-input, textarea) |
| `--size-selector` | themes | unit for small-control heights (checkbox, radio, toggle, badge, kbd) |
| `--mg-field-{xs,sm,md,lg,xl}` | `base/properties.css` | resolved field sizes — use in `@utility *-xs` etc. |
| `--mg-selector-{xs,sm,md,lg,xl}` | `base/properties.css` | resolved selector sizes |
| `--mg-subtle-{10,20,40}` | `base/colormix.css` | `color-mix` of `--color-base-content` with transparent — use inside `@supports (color: color-mix(...))` blocks for borders, placeholders, disabled text |
| `--radius-field` / `--radius-selector` / `--radius-box` | themes | corner radii |
| `--border`, `--depth`, `--noise` | themes | border width, shadow depth, noise factor |

## Conventions

- **Sizing**: use `--mg-field-*` or `--mg-selector-*` rather than `calc(var(--size-field) * N)`. The scale lives in `base/properties.css`.
- **Component-local vars**: prefix with the component name (`--btn-bg`, `--input-color`, `--badge-fg`). These are your public-ish knobs for users to override per-instance.
- **Color-mix fallbacks**: any `color-mix(...)` must be inside `@supports (color: color-mix(in lab, red, red)) { ... }` with an adequate fallback outside. Shared tints live in `--mg-subtle-*`.
- **Theme safety**: never hardcode colors/radii/sizes that happen to look right on `light`. Drive everything from `--color-*` / `--radius-*` / `--size-*` / `--border` / `--depth` / `--noise`. Changes must hold across every theme in `themes/`.
- **Join support**: form components opt into sibling rounding via `border-*-*-radius: var(--join-{ss,se,es,ee}, var(--radius-field))`.

## Adding a new component

1. Create `src/<component>.css` with one or more `@utility` blocks.
2. Add an `@import "./src/<component>.css";` line to `entry.css`.
3. Run `npm run check-sync` to confirm the import set matches the file set.
4. Run `npm run gen-vfs-dev` to refresh `vfs.js` for the in-browser compiler.
5. Add example HTML under `playground/components/<component>/*.html` and regen the component tree with `npm run gen-component-tree`.
