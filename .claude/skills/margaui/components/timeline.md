# timeline

_vertical or horizontal event timeline_

## What it does

Event timeline with start/middle/end slots per item; supports horizontal and vertical, single- or two-sided layouts.

## When to use

- Activity histories, version histories, changelogs.

## Core classes

`timeline`; orientation `timeline-vertical|horizontal` (horizontal is default); per-item slots `timeline-start`, `timeline-middle`, `timeline-end`; the `timeline-middle` icon is what touches the line; `timeline-box` adds a card surface; per-item `<hr />` siblings to `<li>` draw the connecting line — color them with `bg-primary`, `bg-success`, etc.

Item structure for two-sided layouts: `<li>` contains an optional leading `<hr />`, `timeline-start`, `timeline-middle`, `timeline-end`, and a trailing `<hr />`. Omit `timeline-start` or `timeline-end` for one-sided layouts.

## Examples

### Horizontal, two-sided (canonical)

Source: `playground/components/timeline/responsive-vertical-by-default-horizontal-on-large-screen.html`

The same item structure repeats per event. Use `timeline-vertical lg:timeline-horizontal` for a vertical mobile / horizontal desktop pattern.

```html
<ul class="timeline timeline-vertical lg:timeline-horizontal">
  <li>
    <div class="timeline-start">1984</div>
    <div class="timeline-middle">
      <!-- icon SVG (e.g. checkmark, class="h-5 w-5") -->
    </div>
    <div class="timeline-end timeline-box">First Macintosh computer</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">1998</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">iMac</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start">2001</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">iPod</div>
  </li>
</ul>
```

### One-sided (top or bottom only)

Drop `timeline-start` (bottom-only) or `timeline-end` (top-only).

```html
<!-- Bottom only -->
<ul class="timeline">
  <li>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">First Macintosh</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">iMac</div>
  </li>
</ul>

<!-- Top only: same structure with timeline-start instead of timeline-end -->
```

### Different sides per item

Mix `timeline-start` and `timeline-end` per `<li>` to alternate which side each event sits on.

```html
<ul class="timeline">
  <li>
    <div class="timeline-start timeline-box">First</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">Second</div>
    <hr />
  </li>
</ul>
```

### Colorful lines

Style the connecting `<hr />` with theme color utilities to indicate state.

```html
<ul class="timeline">
  <li>
    <div class="timeline-start">FF1</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">First</div>
    <hr class="bg-primary" />
  </li>
  <li>
    <hr class="bg-primary" />
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">Second</div>
    <hr class="bg-primary" />
  </li>
</ul>
```

### Text on both sides with icon

Both `timeline-start` and `timeline-end` populated.

```html
<ul class="timeline">
  <li>
    <div class="timeline-start">FF1</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">First</div>
    <hr />
  </li>
</ul>
```

### Icon snapped to the start of each item

Pass `timeline-compact` (or use `before:hidden` on the line side you want suppressed). For full effect see `playground/components/timeline/timeline-with-icon-snapped-to-the-start.html`.

### Without icons

Drop `timeline-middle`; the line still renders.

```html
<ul class="timeline">
  <li>
    <div class="timeline-start">1984</div>
    <div class="timeline-end timeline-box">First Macintosh</div>
    <hr />
  </li>
</ul>
```

### Vertical variant

Add `timeline-vertical`. The same item structure works.

```html
<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start">1984</div>
    <div class="timeline-middle"><!-- icon SVG --></div>
    <div class="timeline-end timeline-box">First Macintosh</div>
    <hr />
  </li>
</ul>
```

All the variants above (one-sided, different-sides-per-item, colorful lines, text-both-sides, without-icons) work identically in vertical orientation.
