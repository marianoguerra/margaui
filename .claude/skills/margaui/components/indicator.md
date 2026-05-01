# indicator

_wrap an element to overlay a badge / status / button at a corner_

## What it does

Wrapper that positions a child element (typically a **badge**, **status**, or small button) at one of nine alignment points relative to its content.

## When to use

- Notification counters on icons, presence dots on avatars, 'new' tags on cards.

## Core classes

`indicator`; child has `indicator-item` plus position `indicator-top|middle|bottom` and `indicator-start|center|end`.

## Examples

### A button as an indicator for a card

Source: `playground/components/indicator/a-button-as-an-indicator-for-a-card.html`

```html
<div class="indicator">
  <div class="indicator-item indicator-bottom">
    <button class="btn btn-primary">Apply</button>
  </div>
  <div class="card border-base-300 border shadow-sm">
    <div class="card-body">
      <h2 class="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
```

### Badge as indicator

Source: `playground/components/indicator/badge-as-indicator.html`

```html
<div class="indicator">
  <span class="indicator-item badge badge-primary">New</span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### For an input

Source: `playground/components/indicator/for-an-input.html`

```html
<div class="indicator">
  <span class="indicator-item badge">Required</span>
  <input type="text" placeholder="Your email address" class="input input-bordered" />
</div>
```

### For avatar

Source: `playground/components/indicator/for-avatar.html`

```html
<div class="avatar indicator">
  <span class="indicator-item badge badge-secondary">Justice</span>
  <div class="h-20 w-20 rounded-lg">
    <img
      alt="Tailwind CSS examples"
      src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
    />
  </div>
</div>
```

### For button

Source: `playground/components/indicator/for-button.html`

```html
<div class="indicator">
  <span class="indicator-item badge badge-secondary">12</span>
  <button class="btn">inbox</button>
</div>
```

### For tab

Source: `playground/components/indicator/for-tab.html`

```html
<div class="tabs tabs-lift">
  <a class="tab">Messages</a>
  <a class="indicator tab tab-active">
    Notifications
    <span class="indicator-item badge">8</span>
  </a>
  <a class="tab">Requests</a>
</div>
```

### In center of an image

Source: `playground/components/indicator/in-center-of-an-image.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-center indicator-middle">
    Only available for Pro users
  </span>
  <img
    alt="Tailwind CSS examples"
    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  />
</div>
```

### Indicator bottom indicator center

Source: `playground/components/indicator/indicator-bottom-indicator-center.html`

```html
<div class="indicator">
  <span
    class="indicator-item indicator-bottom indicator-center badge badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator bottom indicator end default

Source: `playground/components/indicator/indicator-bottom-indicator-end-default.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-bottom badge badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator bottom indicator start

Source: `playground/components/indicator/indicator-bottom-indicator-start.html`

```html
<div class="indicator">
  <span
    class="indicator-item indicator-bottom indicator-start badge badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator middle indicator center

Source: `playground/components/indicator/indicator-middle-indicator-center.html`

```html
<div class="indicator">
  <span
    class="indicator-item indicator-middle indicator-center badge badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator middle indicator end default

Source: `playground/components/indicator/indicator-middle-indicator-end-default.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-middle badge badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator middle indicator start

Source: `playground/components/indicator/indicator-middle-indicator-start.html`

```html
<div class="indicator">
  <span
    class="indicator-item indicator-middle indicator-start badge badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator top default indicator center

Source: `playground/components/indicator/indicator-top-default-indicator-center.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-center badge badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator top default indicator end default

Source: `playground/components/indicator/indicator-top-default-indicator-end-default.html`

```html
<div class="indicator">
  <span class="indicator-item badge badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Indicator top default indicator start

Source: `playground/components/indicator/indicator-top-default-indicator-start.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-start badge badge-secondary"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Multiple indicators

Source: `playground/components/indicator/multiple-indicators.html`

```html
<div class="indicator">
  <span class="indicator-item indicator-top indicator-start badge">↖︎</span>
  <span class="indicator-item indicator-top indicator-center badge">↑</span>
  <span class="indicator-item indicator-top indicator-end badge">↗︎</span>
  <span class="indicator-item indicator-middle indicator-start badge">←</span>
  <span class="indicator-item indicator-middle indicator-center badge">●</span>
  <span class="indicator-item indicator-middle indicator-end badge">→</span>
  <span class="indicator-item indicator-bottom indicator-start badge">↙︎</span>
  <span class="indicator-item indicator-bottom indicator-center badge">↓</span>
  <span class="indicator-item indicator-bottom indicator-end badge">↘︎</span>
  <div class="bg-base-300 grid h-32 w-60 place-items-center">Box</div>
</div>
```

### Responsive

Source: `playground/components/indicator/responsive.html`

```html
<div class="indicator">
  <span
    class="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"
  ></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```

### Status indicator

Source: `playground/components/indicator/status-indicator.html`

```html
<div class="indicator">
  <span class="indicator-item status status-success"></span>
  <div class="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
```
