# avatar

_user picture / placeholder, with optional ring, mask, presence_

## What it does

User-image container with sizing, rounding, ring, mask shape, presence indicator, and group-stack support.

## When to use

- Anywhere a user/account is represented.
- Use `avatar-placeholder` when no image is available (renders initials).
- For decorative shape masking on non-avatar images, use **mask** directly.

## Core classes

`avatar`; modifiers `avatar-group`, `avatar-placeholder`; inner `<img>` typically wrapped in a sized `<div>` with `rounded-full` or a `mask mask-…` class.

## Examples

### Avatar

Source: `playground/components/avatar/avatar.html`

```html
<div class="avatar">
  <div class="w-24 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>
```

### Avatar group with counter

Source: `playground/components/avatar/avatar-group-with-counter.html`

```html
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div class="avatar avatar-placeholder">
    <div class="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>
```

### Avatar group

Source: `playground/components/avatar/avatar-group.html`

```html
<div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
    </div>
  </div>
</div>
```

### Avatar in custom sizes

Source: `playground/components/avatar/avatar-in-custom-sizes.html`

```html
<div class="avatar">
  <div class="w-32 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/superperson@192.webp" />
  </div>
</div>
<div class="avatar">
  <div class="w-20 rounded">
    <img
      src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
      alt="Tailwind-CSS-Avatar-component"
    />
  </div>
</div>
<div class="avatar">
  <div class="w-16 rounded">
    <img
      src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
      alt="Tailwind-CSS-Avatar-component"
    />
  </div>
</div>
<div class="avatar">
  <div class="w-8 rounded">
    <img
      src="https://img.daisyui.com/images/profile/demo/superperson@192.webp"
      alt="Tailwind-CSS-Avatar-component"
    />
  </div>
</div>
```

### Avatar placeholder

Source: `playground/components/avatar/avatar-placeholder.html`

```html
<div class="avatar avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-24 rounded-full">
    <span class="text-3xl">D</span>
  </div>
</div>
<div class="avatar avatar-online avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-16 rounded-full">
    <span class="text-xl">AI</span>
  </div>
</div>
<div class="avatar avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-12 rounded-full">
    <span>SY</span>
  </div>
</div>
<div class="avatar avatar-placeholder">
  <div class="bg-neutral text-neutral-content w-8 rounded-full">
    <span class="text-xs">UI</span>
  </div>
</div>
```

### Avatar rounded

Source: `playground/components/avatar/avatar-rounded.html`

```html
<div class="avatar">
  <div class="w-24 rounded-xl">
    <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
  </div>
</div>
<div class="avatar">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
  </div>
</div>
```

### Avatar with mask

Source: `playground/components/avatar/avatar-with-mask.html`

```html
<div class="avatar">
  <div class="mask mask-heart w-24">
    <img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" />
  </div>
</div>
<div class="avatar">
  <div class="mask mask-squircle w-24">
    <img src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp" />
  </div>
</div>
<div class="avatar">
  <div class="mask mask-hexagon-2 w-24">
    <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
  </div>
</div>
```

### Avatar with presence indicator

Source: `playground/components/avatar/avatar-with-presence-indicator.html`

```html
<div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>
<div class="avatar avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
  </div>
</div>
```

### Avatar with ring

Source: `playground/components/avatar/avatar-with-ring.html`

```html
<div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
  </div>
</div>
```
