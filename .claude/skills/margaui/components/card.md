# card

_container with figure, body, title, actions_

## What it does

Self-contained content card with optional figure (image), body, title, and actions row.

## When to use

- Product tiles, summary panels, pricing tiles, blog post previews.
- For a thin labelled chip, use **badge** instead.

## Core classes

`card`; size `card-xs|sm|md|lg|xl`; layout `card-side` (image on side); style `card-border|dash`; modifier `image-full` (figure becomes a background overlay). Inner: `card-body`, `card-title`, `card-actions`, plus a `<figure>` for media.

Set surface via theme tokens: `bg-base-100` (default), `bg-primary text-primary-content`, `bg-neutral text-neutral-content`, etc.

## Examples

### Card with image (canonical)

Source: `playground/components/card/card.html`

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img src="…" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card has a figure, a body, and inside body a title and actions row.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### No image / minimal

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>Body copy.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### Sizes

`card-xs|sm|md|lg|xl` adjusts internal padding and type scale; layout is otherwise identical.

```html
<div class="card card-xs w-96 bg-base-100 shadow-sm">…</div>
<div class="card card-sm w-96 bg-base-100 shadow-sm">…</div>
<div class="card card-lg w-96 bg-base-100 shadow-sm">…</div>
```

### Border styles

Drop the shadow and use a border instead.

```html
<div class="card card-border bg-base-100 w-96">…</div>
<div class="card card-dash  bg-base-100 w-96">…</div>
```

### Custom surface color

```html
<div class="card bg-primary text-primary-content w-96">…</div>
<div class="card bg-neutral text-neutral-content w-96">…</div>
```

### Centered content

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img src="…" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Card Title</h2>
    <p>Body copy.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### Image on side

```html
<div class="card card-side bg-base-100 shadow-sm">
  <figure><img src="…" alt="Movie" /></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
```

### Responsive (column on small, row on large)

```html
<div class="card lg:card-side bg-base-100 shadow-sm">
  <figure><img src="…" alt="Album" /></figure>
  <div class="card-body">…</div>
</div>
```

### Bottom image (figure after body)

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">…</div>
  <figure><img src="…" alt="Shoes" /></figure>
</div>
```

### Image as full overlay

`image-full` makes the figure fill the card; the body floats above it with a darkened backdrop.

```html
<div class="card bg-base-100 image-full w-96 shadow-sm">
  <figure><img src="…" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Body copy.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

### With badges in title and actions

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <figure><img src="…" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>Body copy.</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
```

### Card with action button at top (e.g. dismissible)

```html
<div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
    <div class="card-actions justify-end">
      <button class="btn btn-square btn-sm"><!-- close icon --></button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
```

### Pricing card

```html
<div class="card w-96 bg-base-100 shadow-sm">
  <div class="card-body">
    <span class="badge badge-xs badge-warning">Most Popular</span>
    <div class="flex justify-between">
      <h2 class="text-3xl font-bold">Premium</h2>
      <span class="text-xl">$29/mo</span>
    </div>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li><!-- check icon --> High-resolution image generation</li>
      <li><!-- check icon --> Customizable style templates</li>
      <li class="opacity-50"><!-- check icon --> <span class="line-through">Seamless cloud integration</span></li>
    </ul>
    <div class="mt-6">
      <button class="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
```
