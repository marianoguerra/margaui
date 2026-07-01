# carousel

_horizontal/vertical scroll-snap slideshow_

## What it does

CSS scroll-snap based slideshow. No JS required; navigation via anchor links to `id`-tagged items.

## When to use

- Image galleries or feature walkthroughs where the user controls pacing.
- For purely hover-driven image switching, use **hover-gallery**.

## Core classes

`carousel`; modifiers `carousel-start|center|end`, `carousel-vertical`; items use `carousel-item`.

## Examples

### Carousel with full width items

Source: `playground/components/carousel/carousel-with-full-width-items.html`

```html
<div class="carousel rounded-box w-64">
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
</div>
```

### Carousel with half width items

Source: `playground/components/carousel/carousel-with-half-width-items.html`

```html
<div class="carousel rounded-box w-96">
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="w-full" />
  </div>
  <div class="carousel-item w-1/2">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="w-full" />
  </div>
</div>
```

### Carousel with indicator buttons

Source: `playground/components/carousel/carousel-with-indicator-buttons.html`

```html
<div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
  </div>
  <div id="item2" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
  </div>
  <div id="item3" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
  </div>
  <div id="item4" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
  </div>
</div>
<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="btn btn-xs">1</a>
  <a href="#item2" class="btn btn-xs">2</a>
  <a href="#item3" class="btn btn-xs">3</a>
  <a href="#item4" class="btn btn-xs">4</a>
</div>
```

### Carousel with nextprev buttons

Source: `playground/components/carousel/carousel-with-nextprev-buttons.html`

```html
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="btn btn-circle">❮</a>
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
```

### Full bleed carousel

Source: `playground/components/carousel/full-bleed-carousel.html`

```html
<div class="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="rounded-box" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="rounded-box" />
  </div>
</div>
```

### Snap to center

Source: `playground/components/carousel/snap-to-center.html`

```html
<div class="carousel carousel-center rounded-box">
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Pizza" />
  </div>
</div>
```

### Snap to end

Source: `playground/components/carousel/snap-to-end.html`

```html
<div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Drink" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Drink" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Drink" />
  </div>
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
  </div>
  <div class="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Drink" />
  </div>
</div>
```

### Snap to start default

Source: `playground/components/carousel/snap-to-start-default.html`

```html
<div class="carousel rounded-box">
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      alt="Burger" />
  </div>
  <div class="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Burger" />
  </div>
</div>
```

### Vertical carousel

Source: `playground/components/carousel/vertical-carousel.html`

```html
<div class="carousel carousel-vertical rounded-box h-96">
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
  </div>
  <div class="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
  </div>
</div>
```
