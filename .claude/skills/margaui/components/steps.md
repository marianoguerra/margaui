# steps

_multi-step progress indicator_

## What it does

Multi-step progress indicator (horizontal or vertical).

## When to use

- Wizards, checkout flows, onboarding.

## Core classes

`steps`; orientation `steps-horizontal|vertical`; child `step`; state `step-primary|secondary|accent|info|success|warning|error|neutral`.

## Examples

### Custom colors

Source: `playground/components/steps/custom-colors.html`

```html
<ul class="steps">
  <li class="step step-info">Fly to moon</li>
  <li class="step step-info">Shrink the moon</li>
  <li class="step step-info">Grab the moon</li>
  <li class="step step-error" data-content="?">Sit on toilet</li>
</ul>
```

### Horizontal

Source: `playground/components/steps/horizontal.html`

```html
<ul class="steps">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
```

### Responsive vertical on small screen horizontal on large screen

Source: `playground/components/steps/responsive-vertical-on-small-screen-horizontal-on-large-screen.html`

```html
<ul class="steps steps-vertical lg:steps-horizontal">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
```

### Vertical

Source: `playground/components/steps/vertical.html`

```html
<ul class="steps steps-vertical">
  <li class="step step-primary">Register</li>
  <li class="step step-primary">Choose plan</li>
  <li class="step">Purchase</li>
  <li class="step">Receive Product</li>
</ul>
```

### With custom content in step icon

Source: `playground/components/steps/with-custom-content-in-step-icon.html`

```html
<ul class="steps">
  <li class="step step-neutral">
    <span class="step-icon">😕</span>Step 1
  </li>
  <li class="step step-neutral">
    <span class="step-icon">😃</span>Step 2
  </li>
  <li class="step">
    <span class="step-icon">😍</span>Step 3
  </li>
</ul>
```

### With data content

Source: `playground/components/steps/with-data-content.html`

```html
<ul class="steps">
  <li data-content="?" class="step step-neutral">Step 1</li>
  <li data-content="!" class="step step-neutral">Step 2</li>
  <li data-content="✓" class="step step-neutral">Step 3</li>
  <li data-content="✕" class="step step-neutral">Step 4</li>
  <li data-content="★" class="step step-neutral">Step 5</li>
  <li data-content="" class="step step-neutral">Step 6</li>
  <li data-content="●" class="step step-neutral">Step 7</li>
</ul>
```

### With scrollable wrapper

Source: `playground/components/steps/with-scrollable-wrapper.html`

```html
<div class="overflow-x-auto">
  <ul class="steps">
    <li class="step">start</li>
    <li class="step step-secondary">2</li>
    <li class="step step-secondary">3</li>
    <li class="step step-secondary">4</li>
    <li class="step">5</li>
    <li class="step step-accent">6</li>
    <li class="step step-accent">7</li>
    <li class="step">8</li>
    <li class="step step-error">9</li>
    <li class="step step-error">10</li>
    <li class="step">11</li>
    <li class="step">12</li>
    <li class="step step-warning">13</li>
    <li class="step step-warning">14</li>
    <li class="step">15</li>
    <li class="step step-neutral">16</li>
    <li class="step step-neutral">17</li>
    <li class="step step-neutral">18</li>
    <li class="step step-neutral">19</li>
    <li class="step step-neutral">20</li>
    <li class="step step-neutral">21</li>
    <li class="step step-neutral">22</li>
    <li class="step step-neutral">23</li>
    <li class="step step-neutral">end</li>
  </ul>
</div>
```
