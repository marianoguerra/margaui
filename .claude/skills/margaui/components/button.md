# button

_`btn` with color / size / shape / style modifiers_

## What it does

Primary action element. The `btn` class works on `<button>`, `<a>`, `<input>`, `<label>`, `<div>`, etc.

## When to use

- Any clickable action.
- For navigation-only links inside body text, use **link** instead.
- For floating action buttons, use **fab**.

## Core classes

`btn`; color `btn-primary|secondary|accent|info|success|warning|error|neutral`; style `btn-outline|dash|soft|ghost|link`; size `btn-xs|sm|md|lg|xl`; shape `btn-square|circle|wide|block`; state `btn-active|disabled`.

Color, style, size, shape, and state are independent axes — combine freely (e.g. `btn btn-soft btn-primary btn-sm`).

## Examples

### Button (canonical)

Source: `playground/components/button/button.html`

```html
<button class="btn">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Outline</button>
<button class="btn btn-soft btn-accent">Soft</button>
<button class="btn btn-dash btn-info">Dash</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>
<button class="btn btn-active btn-primary">Active</button>
```

### Sizes

```html
<button class="btn btn-xs">Xsmall</button>
<button class="btn btn-sm">Small</button>
<button class="btn">Medium</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Xlarge</button>
```

### Responsive size

```html
<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button>
```

### Shapes

```html
<button class="btn btn-block">block</button>
<button class="btn btn-wide">Wide</button>
<button class="btn btn-square"><!-- icon SVG --></button>
<button class="btn btn-circle"><!-- icon SVG --></button>
```

### With icon

```html
<button class="btn">
  <!-- icon SVG (size-[1.2em] to scale with text) -->
  Like
</button>
```

### With loading spinner

```html
<button class="btn btn-square">
  <span class="loading loading-spinner"></span>
</button>
<button class="btn">
  <span class="loading loading-spinner"></span>
  loading
</button>
```

### Disabled

```html
<button class="btn" disabled>Disabled via attribute</button>
<button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">
  Disabled via class (use on non-button elements)
</button>
```

### Any HTML tag

`btn` works on any element that should look like a button.

```html
<a role="button" class="btn">Link</a>
<input type="submit" value="Submit" class="btn" />
<input type="checkbox" aria-label="Checkbox" class="btn" />
```

### Neutral on light backgrounds

`btn-neutral` with `outline` or `dash` reads better against a light surface.

```html
<div class="bg-white p-6">
  <button class="btn btn-neutral btn-outline">Outline</button>
  <button class="btn btn-neutral btn-dash">Dash</button>
</div>
```

### Brand-colored login buttons

Brand login buttons use hard-coded brand colors (Tailwind arbitrary values) — these are *intentionally* not theme-driven because brand identity is fixed.

```html
<!-- GitHub -->
<button class="btn bg-black text-white border-black">
  <!-- GitHub icon SVG -->
  Login with GitHub
</button>

<!-- Google -->
<button class="btn bg-white text-black border-[#e5e5e5]">
  <!-- Google icon SVG -->
  Login with Google
</button>

<!-- Facebook -->
<button class="btn bg-[#1A77F2] text-white border-[#005fd8]">
  <!-- Facebook icon SVG -->
  Login with Facebook
</button>
```

The same pattern applies for X (`bg-black`), Apple (`bg-black`), Microsoft (`bg-[#2F2F2F]`), Slack (`bg-[#622069]`), LinkedIn (`bg-[#0967C2]`), Amazon (`bg-[#FF9900]`), Line (`bg-[#03C755]`), VK (`bg-[#47698F]`), WeChat (`bg-[#5EBB2B]`), Kakao (`bg-[#FEE502]`), MetaMask (`bg-white`).
