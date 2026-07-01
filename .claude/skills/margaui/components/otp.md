# otp

_one-time-password digit input (2FA / verification codes)_

## What it does

A `<label class="otp">` wrapping N empty `<span>` boxes (one per digit) plus a single real `<input>`; the spans render as the visual digit boxes overlaying the input.

## When to use

- 2FA / passwordless-login verification code entry.
- Number of `<span>` elements must match the input's `maxlength`/`pattern`.

## Core classes

`otp`; modifier `otp-joined`; size `otp-xs|sm|md|lg|xl`; color `otp-neutral|primary|secondary|accent|info|success|warning|error`.

## Examples

### Otp

Source: `playground/components/otp/otp.html`

```html
<label class="otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```

### Otp joined

Source: `playground/components/otp/otp-joined.html`

```html
<label class="otp otp-joined">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
</label>
```

### Otp sizes

Source: `playground/components/otp/otp-sizes.html`

```html
<div class="flex flex-col gap-4 items-center">
  <label class="otp otp-xs">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-sm">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-md">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-lg">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-xl">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
</div>
```

### Otp with 6 digits

Source: `playground/components/otp/otp-with-6-digits.html`

```html
<label class="otp">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="6" pattern="[0-9]{6}" required />
</label>
```

### Otp with colors

Source: `playground/components/otp/otp-with-colors.html`

```html
<div class="flex flex-col gap-4 items-center">
  <label class="otp otp-neutral">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-primary">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-secondary">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-accent">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-info">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-success">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-warning">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
  <label class="otp otp-error">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
  </label>
</div>
```
