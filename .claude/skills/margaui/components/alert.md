# alert

_inline notification box (info / success / warning / error)_

## What it does

Inline, non-blocking notification box with an icon and message, optionally with action buttons.

## When to use

- Persistent feedback inline with content (form errors, status banners).
- For transient pop-ups that auto-dismiss, use **toast** instead.

## Core classes

`alert`; color `alert-info|success|warning|error`; style `alert-outline|dash|soft`; usually paired with `role="alert"`.

## Examples

### Alert

Source: `playground/components/alert/alert.html`

```html
<div role="alert" class="alert w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>12 unread messages. Tap to see.</span>
</div>
```

### Alert dash style

Source: `playground/components/alert/alert-dash-style.html`

```html
<div role="alert" class="alert alert-info alert-dash w-full">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert alert-success alert-dash w-full">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert alert-warning alert-dash w-full">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert alert-error alert-dash w-full">
  <span>Error! Task failed successfully.</span>
</div>
```

### Alert outline style

Source: `playground/components/alert/alert-outline-style.html`

```html
<div role="alert" class="alert alert-info alert-outline w-full">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert alert-success alert-outline w-full">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert alert-warning alert-outline w-full">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert alert-error alert-outline w-full">
  <span>Error! Task failed successfully.</span>
</div>
```

### Alert soft style

Source: `playground/components/alert/alert-soft-style.html`

```html
<div role="alert" class="alert alert-info alert-soft w-full">
  <span>12 unread messages. Tap to see.</span>
</div>
<div role="alert" class="alert alert-success alert-soft w-full">
  <span>Your purchase has been confirmed!</span>
</div>
<div role="alert" class="alert alert-warning alert-soft w-full">
  <span>Warning: Invalid email address!</span>
</div>
<div role="alert" class="alert alert-error alert-soft w-full">
  <span>Error! Task failed successfully.</span>
</div>
```

### Alert with buttons — responsive

Source: `playground/components/alert/alert-with-buttons--responsive.html`

```html
<div role="alert" class="alert alert-vertical sm:alert-horizontal w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button class="btn btn-sm">Deny</button>
    <button class="btn btn-sm btn-primary">Accept</button>
  </div>
</div>
```

### Alert with title and description

Source: `playground/components/alert/alert-with-title-and-description.html`

```html
<div role="alert" class="alert alert-vertical sm:alert-horizontal w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current text-info h-6 w-6 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 class="font-bold">New message!</h3>
    <div class="text-xs">You have 1 unread message</div>
  </div>
  <button class="btn btn-sm">See</button>
</div>
```

### Error color

Source: `playground/components/alert/error-color.html`

```html
<div role="alert" class="alert alert-error w-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Task failed successfully.</span>
</div>
```

### Info color

Source: `playground/components/alert/info-color.html`

```html
<div role="alert" class="alert alert-info w-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>New software update available.</span>
</div>
```

### Success color

Source: `playground/components/alert/success-color.html`

```html
<div role="alert" class="alert alert-success w-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>
```

### Warning color

Source: `playground/components/alert/warning-color.html`

```html
<div role="alert" class="alert alert-warning w-full">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: Invalid email address!</span>
</div>
```
