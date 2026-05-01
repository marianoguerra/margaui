# mockup-phone

_phone-frame wrapper for screenshots_

## What it does

Visual phone-frame wrapper.

## When to use

- Marketing screenshots showing mobile layouts.

## Examples

### Iphone mockup

Source: `playground/components/mockup-phone/iphone-mockup.html`

```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display text-white grid place-content-center bg-neutral-900">
    It's Glowtime.
  </div>
</div>
```

### With color and wallpaper

Source: `playground/components/mockup-phone/with-color-and-wallpaper.html`

```html
<div class="mockup-phone border-[#ff8938]">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">
    <img alt="wallpaper" src="https://img.daisyui.com/images/stock/453966.webp" />
  </div>
</div>
```
