# carousel

_horizontal/vertical scroll-snap slideshow_

## What it does

CSS scroll-snap based slideshow. No JS required; navigation via anchor links to `id`-tagged items.

## When to use

- Image galleries or feature walkthroughs where the user controls pacing.
- For purely hover-driven image switching, use **hover-gallery**.

## Core classes

`carousel`; snap modifiers `carousel-start` (default), `carousel-center`, `carousel-end`; orientation `carousel-vertical`; items use `carousel-item`. Item width is up to you (`w-full`, `w-1/2`, intrinsic).

## Examples

### Full-width items (canonical)

Source: `playground/components/carousel/carousel-with-full-width-items.html`

```html
<div class="carousel rounded-box w-64">
  <div class="carousel-item w-full"><img src="…" class="w-full" alt="" /></div>
  <div class="carousel-item w-full"><img src="…" class="w-full" alt="" /></div>
  <div class="carousel-item w-full"><img src="…" class="w-full" alt="" /></div>
</div>
```

### Half-width items (two visible at once)

```html
<div class="carousel rounded-box w-96">
  <div class="carousel-item w-1/2"><img src="…" class="w-full" /></div>
  <div class="carousel-item w-1/2"><img src="…" class="w-full" /></div>
  <div class="carousel-item w-1/2"><img src="…" class="w-full" /></div>
</div>
```

### Snap variants

`carousel` defaults to snap-start. Add `carousel-center` or `carousel-end` for other snap alignments.

```html
<div class="carousel rounded-box">…</div>                <!-- start (default) -->
<div class="carousel carousel-center rounded-box">…</div>
<div class="carousel carousel-end rounded-box">…</div>
```

### Full bleed with padding/spacing

```html
<div class="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div class="carousel-item"><img src="…" class="rounded-box" /></div>
  <div class="carousel-item"><img src="…" class="rounded-box" /></div>
</div>
```

### Indicator buttons (jump to item)

Tag each item with an `id`, then use anchor links to scroll-snap to it.

```html
<div class="carousel w-full">
  <div id="item1" class="carousel-item w-full"><img src="…" class="w-full" /></div>
  <div id="item2" class="carousel-item w-full"><img src="…" class="w-full" /></div>
  <div id="item3" class="carousel-item w-full"><img src="…" class="w-full" /></div>
</div>
<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="btn btn-xs">1</a>
  <a href="#item2" class="btn btn-xs">2</a>
  <a href="#item3" class="btn btn-xs">3</a>
</div>
```

### Next/prev buttons overlaid on each slide

Each slide has its own positioned next/prev anchors pointing at neighboring slide IDs.

```html
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="…" class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img src="…" class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>
  <!-- repeat for slide3 -->
</div>
```

### Vertical

Add `carousel-vertical` and give the wrapper an explicit height; items take `h-full`.

```html
<div class="carousel carousel-vertical rounded-box h-96">
  <div class="carousel-item h-full"><img src="…" /></div>
  <div class="carousel-item h-full"><img src="…" /></div>
  <div class="carousel-item h-full"><img src="…" /></div>
</div>
```
