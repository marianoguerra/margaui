---
name: margaui
description: Use when writing or editing HTML/JSX that uses **margaui** or **daisyUI** component classes — `btn`, `card`, `alert`, `modal`, `navbar`, `dropdown`, `toast`, `badge`, `menu`, `tab`, `drawer`, `hero`, `stat`, `chat`, `timeline`, theme tokens like `bg-base-100`, `text-base-content`, `bg-primary`, `text-primary-content`, or themes set via `data-theme="…"`. margaui is a Tailwind v4-native port API-compatible with daisyUI, so this skill applies to either. Not for vanilla Tailwind code that does not use these classes. Provides per-component usage notes, copy-paste examples, and theme-safe color guidance.
---

# margaui

margaui is a Tailwind v4–native CSS component library: 65 components defined as Tailwind v4 `@utility` classes, plus 35 themes selected via `data-theme` on any ancestor element.

## Relationship to daisyUI

margaui is **API-compatible with [daisyUI](https://daisyui.com/)**. The class names (`btn`, `btn-primary`, `card`, `card-body`, `alert-info`, `modal-box`, `dropdown-content`, …), modifier vocabulary, and DOM structure mirror daisyUI. Differences are implementation-level (Tailwind v4 native, in-browser compiler, `@supports` fallbacks for `color-mix`), not API-level.

Practical implication: **daisyUI documentation and examples are valid references** when this skill doesn't cover something. If a component is documented for daisyUI, the same markup works in margaui.

## Themes

Set on any element (most often `<html>` or `<body>`):

```html
<html data-theme="dracula">
```

`light` is the default — applied via `:root` and `:host`, so pages work without an explicit `data-theme`. 35 themes available: `abyss`, `acid`, `aqua`, `autumn`, `black`, `bumblebee`, `business`, `caramellatte`, `cmyk`, `coffee`, `corporate`, `cupcake`, `cyberpunk`, `dark`, `dim`, `dracula`, `emerald`, `fantasy`, `forest`, `garden`, `halloween`, `lemonade`, `light`, `lofi`, `luxury`, `night`, `nord`, `pastel`, `retro`, `silk`, `sunset`, `synthwave`, `valentine`, `winter`, `wireframe`.

## Conventions across components

- **Theme-driven colors.** Use semantic color utilities (`bg-base-100`, `bg-base-200`, `text-base-content`, `text-primary`, `bg-primary`, `text-primary-content`, etc.) rather than hard-coded palette colors — this keeps components correct across all 35 themes.
- **Modifier suffixes are consistent.** Most components share the same vocabulary: color (`-primary`, `-secondary`, `-accent`, `-info`, `-success`, `-warning`, `-error`, `-neutral`, `-ghost`), style (`-outline`, `-soft`, `-dash`), size (`-xs`, `-sm`, `-md`, `-lg`, `-xl`), state (`-active`, `-disabled`).
- **Tailwind utilities work normally.** Responsive prefixes (`sm:`, `md:`, …), state variants (`hover:`, `focus:`, …), and arbitrary values all compose with margaui classes.
- **`@utility` classes, not `@apply`.** Internally components are defined with Tailwind v4's `@utility` directive, so they tree-shake on demand and can be combined freely.

## Common mistakes

- **Don't use palette colors** (`bg-blue-500`, `text-red-600`, `border-gray-300`). Use `bg-primary`, `text-error`, `bg-base-200`, `border-base-300`. Palette colors break across the 35 themes; semantic tokens follow `data-theme`.
- **Modal:** prefer the native `<dialog class="modal">` form with `showModal()`. The `modal-toggle` checkbox and anchor-link variants are legacy fallbacks.
- **Pop-ups:** dropdown for menus attached to a trigger, modal for blocking dialogs, toast for non-blocking corner notifications, alert for inline messages.
- **Pop-up containers need their own surface.** `dropdown-content`, `menu` inside `dropdown`, etc. are not styled by default — add `bg-base-100`, `rounded-box`, `shadow-sm`, and `z-1` so they render correctly.

## Component index

Read the linked file when the user's task involves that component. Each file has _What it does_, _When to use_, _Core classes_, and copy-paste HTML examples drawn from `playground/components/<name>/`.

- [accordion](components/accordion.md) — collapsible sections (single-open via radio, free via details). For a single region, use **collapse**; for switching panels, use **tab**.
- [alert](components/alert.md) — inline notification box (info / success / warning / error). For corner-stacked notifications use **toast**; for blocking dialogs use **modal**.
- [avatar](components/avatar.md) — user picture / placeholder, with optional ring, mask, presence
- [badge](components/badge.md) — small label / counter chip
- [breadcrumbs](components/breadcrumbs.md) — path-style navigation trail
- [button](components/button.md) — `btn` with color / size / shape / style modifiers
- [calendar](components/calendar.md) — date picker (uses external Cally web component)
- [card](components/card.md) — container with figure, body, title, actions
- [carousel](components/carousel.md) — horizontal/vertical scroll-snap slideshow
- [chat](components/chat.md) — chat bubble (start/end alignment)
- [checkbox](components/checkbox.md) — styled `<input type="checkbox">`
- [collapse](components/collapse.md) — single show/hide region (details/summary or checkbox). For multiple stacked sections use **accordion**.
- [countdown](components/countdown.md) — animated digit transitions for timers / clocks
- [diff](components/diff.md) — side-by-side image/text comparison with draggable handle
- [divider](components/divider.md) — horizontal / vertical separator with optional label
- [dock](components/dock.md) — bottom navigation bar (mobile-style)
- [drawer](components/drawer.md) — off-canvas sidebar (toggle via checkbox). For a small attached menu use **dropdown**; for a blocking dialog use **modal**.
- [dropdown](components/dropdown.md) — click/hover/focus menu attached to a trigger. For full-screen/blocking dialogs use **modal**; for nav lists use **menu**.
- [fab](components/fab.md) — floating action button (single or speed-dial)
- [fieldset](components/fieldset.md) — themed `<fieldset>` group with legend + label slots
- [file-input](components/file-input.md) — styled file picker
- [filter](components/filter.md) — radio-button filter group (with reset)
- [footer](components/footer.md) — page footer with column groupings
- [hero](components/hero.md) — full-width banner section (centered or with figure)
- [hover-3d](components/hover-3d.md) — 3D tilt effect on hover (cards / images)
- [hover-gallery](components/hover-gallery.md) — swap images by hovering across regions
- [indicator](components/indicator.md) — wrap an element to overlay a badge / status / button at a corner
- [input](components/input.md) — themed text-style input wrapper
- [join](components/join.md) — group adjacent items so borders/radii merge
- [kbd](components/kbd.md) — keyboard-key visual
- [label](components/label.md) — input label (inline or floating)
- [link](components/link.md) — themed `<a>`
- [list](components/list.md) — vertical list with grid-style columns
- [loading](components/loading.md) — loading spinner / dots / bars / ring / ball / infinity
- [mask](components/mask.md) — clip an element to a shape (circle, hex, star, …)
- [menu](components/menu.md) — vertical/horizontal nav list (sidebar, sub-menus)
- [mockup](components/mockup.md) — chrome wrappers for screenshots: `mockup-window`, `mockup-browser`, `mockup-phone`, `mockup-code` (terminal / code block)
- [modal](components/modal.md) — dialog / pop-up (prefer native `<dialog>`; checkbox/anchor variants are legacy). For non-blocking notices use **toast** or **alert**.
- [navbar](components/navbar.md) — top navigation bar with start/center/end slots
- [pagination](components/pagination.md) — paged-navigation button row
- [progress](components/progress.md) — linear progress bar (`<progress>`)
- [radial-progress](components/radial-progress.md) — circular progress indicator
- [radio](components/radio.md) — styled `<input type="radio">`
- [range](components/range.md) — styled `<input type="range">` slider
- [rating](components/rating.md) — star / heart rating (radio inputs + masks)
- [select](components/select.md) — styled `<select>`
- [skeleton](components/skeleton.md) — shimmering placeholder for loading content
- [stack](components/stack.md) — stack children (Z-axis)
- [stat](components/stat.md) — KPI / metric tile (title + value + desc)
- [status](components/status.md) — small colored status dot
- [steps](components/steps.md) — multi-step progress indicator
- [swap](components/swap.md) — toggle between two children (icon swap, hamburger)
- [tab](components/tab.md) — tabbed content (radio inputs or anchors). For collapsible stacked sections use **accordion**.
- [table](components/table.md) — themed `<table>` (zebra, hover, pinned rows/cols, sizes)
- [text-rotate](components/text-rotate.md) — cycle through words in place (CSS animation)
- [textarea](components/textarea.md) — styled `<textarea>`
- [theme-controller](components/theme-controller.md) — checkbox / radio / dropdown that switches `data-theme`
- [timeline](components/timeline.md) — vertical or horizontal event timeline
- [toast](components/toast.md) — fixed-position notification stack (corner overlays). For inline messages use **alert**; for blocking dialogs use **modal**.
- [toggle](components/toggle.md) — on/off switch (styled checkbox)
- [tooltip](components/tooltip.md) — hover/focus tooltip on any element
- [validator](components/validator.md) — show validation message tied to a form input
