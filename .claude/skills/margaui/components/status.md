# status

_small colored status dot_

## What it does

Small colored dot for status indication (online, busy, etc.), with optional bounce/ping animation.

## When to use

- Presence dots, system-health indicators.
- For text + dot, combine with **badge** or **indicator**.

## Core classes

`status`; color `status-primary|secondary|accent|info|success|warning|error|neutral`; size `status-xs|sm|md|lg|xl`.

## Examples

### Status

Source: `playground/components/status/status.html`

```html
<span class="status"></span>
```

### Status sizes

Source: `playground/components/status/status-sizes.html`

```html
<div aria-label="status" class="status status-xs"></div>
<div aria-label="status" class="status status-sm"></div>
<div aria-label="status" class="status status-md"></div>
<div aria-label="status" class="status status-lg"></div>
<div aria-label="status" class="status status-xl"></div>
```

### Status with bounce animation

Source: `playground/components/status/status-with-bounce-animation.html`

```html
<div class="status status-info animate-bounce"></div> Unread messages
```

### Status with colors

Source: `playground/components/status/status-with-colors.html`

```html
<div aria-label="status" class="status status-primary"></div>
<div aria-label="status" class="status status-secondary"></div>
<div aria-label="status" class="status status-accent"></div>
<div aria-label="status" class="status status-neutral"></div>

<div aria-label="info" class="status status-info"></div>
<div aria-label="success" class="status status-success"></div>
<div aria-label="warning" class="status status-warning"></div>
<div aria-label="error" class="status status-error"></div>
```

### Status with ping animation

Source: `playground/components/status/status-with-ping-animation.html`

```html
<div class="inline-grid *:[grid-area:1/1]">
  <div class="status status-error animate-ping"></div>
  <div class="status status-error"></div>
</div> Server is down
```
