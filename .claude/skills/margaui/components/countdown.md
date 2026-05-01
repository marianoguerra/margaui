# countdown

_animated digit transitions for timers / clocks_

## What it does

Animates between digits using CSS counters and `--value`. Works for clocks, timers, large stat displays.

## When to use

- Live countdown timers, clocks, animated number reveals.

## Core classes

`countdown`; child `<span style="--value:N"></span>` per digit group.

## Examples

### Countdown

Source: `playground/components/countdown/countdown.html`

```html
<span class="countdown">
  <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
</span>
```

### Clock countdown with colons

Source: `playground/components/countdown/clock-countdown-with-colons.html`

```html
<span class="countdown font-mono text-2xl">
  <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
  :
  <span style="--value:24; --digits: 2;" aria-live="polite" aria-label="24">24</span>
  :
  <span style="--value:59; --digits: 2;" aria-live="polite" aria-label="59">59</span>
</span>
```

### Clock countdown

Source: `playground/components/countdown/clock-countdown.html`

```html
<span class="countdown font-mono text-2xl">
  <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
  h
  <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
  m
  <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
  s
</span>
```

### In boxes

Source: `playground/components/countdown/in-boxes.html`

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
    <span class="countdown font-mono text-5xl">
      <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```

### Large text with 2 digits

Source: `playground/components/countdown/large-text-with-2-digits.html`

```html
<span class="countdown font-mono text-6xl">
  <span style="--value:59; --digits: 2;" aria-live="polite" aria-label="59">59</span>
</span>
```

### Large text with labels under

Source: `playground/components/countdown/large-text-with-labels-under.html`

```html
<div class="grid auto-cols-max grid-flow-col gap-5 text-center">
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div class="flex flex-col">
    <span class="countdown font-mono text-5xl">
      <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```

### Large text with labels

Source: `playground/components/countdown/large-text-with-labels.html`

```html
<div class="flex gap-5">
  <div>
    <span class="countdown font-mono text-4xl">
      <span style="--value:15;" aria-live="polite" aria-label="15">15</span>
    </span>
    days
  </div>
  <div>
    <span class="countdown font-mono text-4xl">
      <span style="--value:10;" aria-live="polite" aria-label="10">10</span>
    </span>
    hours
  </div>
  <div>
    <span class="countdown font-mono text-4xl">
      <span style="--value:24;" aria-live="polite" aria-label="24">24</span>
    </span>
    min
  </div>
  <div>
    <span class="countdown font-mono text-4xl">
      <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
    </span>
    sec
  </div>
</div>
```
