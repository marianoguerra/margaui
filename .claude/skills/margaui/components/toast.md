# toast

_fixed-position notification stack (corner overlays)_

## What it does

Fixed-position container for transient notifications. Position via `toast-start|center|end` × `toast-top|middle|bottom`.

## When to use

- Transient feedback ("saved", "copied", "error sending").
- For inline persistent feedback, use **alert**.

## Core classes

`toast`; horizontal `toast-start|center|end`; vertical `toast-top|middle|bottom`. Typically wraps **alert** children.

## Examples

### Toast center toast bottom default

Source: `playground/components/toast/toast-center-toast-bottom-default.html`

```html
<div class="toast toast-center">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast center toast middle

Source: `playground/components/toast/toast-center-toast-middle.html`

```html
<div class="toast toast-center toast-middle">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast end default toast bottom default

Source: `playground/components/toast/toast-end-default-toast-bottom-default.html`

```html
<div class="toast toast-end">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast end toast middle

Source: `playground/components/toast/toast-end-toast-middle.html`

```html
<div class="toast toast-end toast-middle">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast start toast bottom default

Source: `playground/components/toast/toast-start-toast-bottom-default.html`

```html
<div class="toast toast-start">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast start toast middle

Source: `playground/components/toast/toast-start-toast-middle.html`

```html
<div class="toast toast-start toast-middle">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast top toast center

Source: `playground/components/toast/toast-top-toast-center.html`

```html
<div class="toast toast-top toast-center">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast top toast end

Source: `playground/components/toast/toast-top-toast-end.html`

```html
<div class="toast toast-top toast-end">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast top toast start

Source: `playground/components/toast/toast-top-toast-start.html`

```html
<div class="toast toast-top toast-start">
  <div class="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
```

### Toast with alert inside

Source: `playground/components/toast/toast-with-alert-inside.html`

```html
<div class="toast">
  <div class="alert alert-info">
    <span>New message arrived.</span>
  </div>
</div>
```
