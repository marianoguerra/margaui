# loading

_loading spinner / dots / bars / ring / ball / infinity_

## What it does

Inline loading indicator with several visual styles.

## When to use

- Pending async operations, skeleton-less loading states.
- For content-shaped placeholders, use **skeleton**.

## Core classes

`loading`; style `loading-spinner|dots|ring|ball|bars|infinity`; size `loading-xs|sm|md|lg|xl`; color via standard `text-primary|…` utilities.

## Examples

### Loading ball

Source: `playground/components/loading/loading-ball.html`

```html
<span class="loading loading-ball loading-xs"></span>
<span class="loading loading-ball loading-sm"></span>
<span class="loading loading-ball loading-md"></span>
<span class="loading loading-ball loading-lg"></span>
<span class="loading loading-ball loading-xl"></span>
```

### Loading bars

Source: `playground/components/loading/loading-bars.html`

```html
<span class="loading loading-bars loading-xs"></span>
<span class="loading loading-bars loading-sm"></span>
<span class="loading loading-bars loading-md"></span>
<span class="loading loading-bars loading-lg"></span>
<span class="loading loading-bars loading-xl"></span>
```

### Loading dots

Source: `playground/components/loading/loading-dots.html`

```html
<span class="loading loading-dots loading-xs"></span>
<span class="loading loading-dots loading-sm"></span>
<span class="loading loading-dots loading-md"></span>
<span class="loading loading-dots loading-lg"></span>
<span class="loading loading-dots loading-xl"></span>
```

### Loading infinity

Source: `playground/components/loading/loading-infinity.html`

```html
<span class="loading loading-infinity loading-xs"></span>
<span class="loading loading-infinity loading-sm"></span>
<span class="loading loading-infinity loading-md"></span>
<span class="loading loading-infinity loading-lg"></span>
<span class="loading loading-infinity loading-xl"></span>
```

### Loading ring

Source: `playground/components/loading/loading-ring.html`

```html
<span class="loading loading-ring loading-xs"></span>
<span class="loading loading-ring loading-sm"></span>
<span class="loading loading-ring loading-md"></span>
<span class="loading loading-ring loading-lg"></span>
<span class="loading loading-ring loading-xl"></span>
```

### Loading spinner

Source: `playground/components/loading/loading-spinner.html`

```html
<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner loading-md"></span>
<span class="loading loading-spinner loading-lg"></span>
<span class="loading loading-spinner loading-xl"></span>
```

### Loading with colors

Source: `playground/components/loading/loading-with-colors.html`

```html
<span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>
<span class="loading loading-spinner text-neutral"></span>
<span class="loading loading-spinner text-info"></span>
<span class="loading loading-spinner text-success"></span>
<span class="loading loading-spinner text-warning"></span>
<span class="loading loading-spinner text-error"></span>
```
