# skeleton

_shimmering placeholder for loading content_

## What it does

Animated content-shaped placeholder for loading states.

## When to use

- Loading states where you want the layout to pre-fill (lists, cards).
- For abstract spinners, use **loading**.

## Core classes

`skeleton`.

## Examples

### Skeleton

Source: `playground/components/skeleton/skeleton.html`

```html
<div class="skeleton h-32 w-32"></div>
```

### Skeleton —  circle with content

Source: `playground/components/skeleton/skeleton---circle-with-content.html`

```html
<div class="flex w-52 flex-col gap-4">
  <div class="flex items-center gap-4">
    <div class="skeleton h-16 w-16 shrink-0 rounded-full"></div>
    <div class="flex flex-col gap-4">
      <div class="skeleton h-4 w-20"></div>
      <div class="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="skeleton h-32 w-full"></div>
</div>
```

### Skeleton —  rectangle with content

Source: `playground/components/skeleton/skeleton---rectangle-with-content.html`

```html
<div class="flex w-52 flex-col gap-4">
  <div class="skeleton h-32 w-full"></div>
  <div class="skeleton h-4 w-28"></div>
  <div class="skeleton h-4 w-full"></div>
  <div class="skeleton h-4 w-full"></div>
</div>
```

### Skeleton text —  animated gradient text

Source: `playground/components/skeleton/skeleton-text---animated-gradient-text.html`

```html
<span class="skeleton skeleton-text">AI is thinking harder...</span>
```
