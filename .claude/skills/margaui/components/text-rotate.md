# text-rotate

_cycle through words in place (CSS animation)_

## What it does

CSS-only animated text that cycles through a list of words/phrases.

## When to use

- Marketing headlines ("build {fast|easy|cheap} apps").

## Examples

### Text rotate

Source: `playground/components/text-rotate/text-rotate.html`

```html
<span class="text-rotate">
  <span>
    <span>ONE</span>
    <span>TWO</span>
    <span>THREE</span>
  </span>
</span>
```

### Custom line height

Source: `playground/components/text-rotate/custom-line-height.html`

```html
<span class="text-rotate text-7xl leading-[2]">
  <span class="justify-items-center">
    <span>📐 DESIGN</span>
    <span>⌨️ DEVELOP</span>
    <span>🌎 DEPLOY</span>
    <span>🌱 SCALE</span>
    <span>🔧 MAINTAIN</span>
    <span>♻️ REPEAT</span>
  </span>
</span>
```

### Rotating 3 words with custom duration

Source: `playground/components/text-rotate/rotating-3-words-with-custom-duration.html`

```html
<span class="text-rotate text-7xl duration-6000">
  <span class="justify-items-center">
  <span>BLAZING</span>
  <span class="font-bold italic px-2">FAST ▶︎▶︎</span>
  </span>
</span>
```

### Rotating 6 words

Source: `playground/components/text-rotate/rotating-6-words.html`

```html
<span class="text-rotate text-7xl">
  <span class="justify-items-center">
    <span>DESIGN</span>
    <span>DEVELOP</span>
    <span>DEPLOY</span>
    <span>SCALE</span>
    <span>MAINTAIN</span>
    <span>REPEAT</span>
  </span>
</span>
```

### Rotating words in a sentence

Source: `playground/components/text-rotate/rotating-words-in-a-sentence.html`

```html
<span>
  Providing AI Agents for 
  <span class="text-rotate">
    <span>
      <span class="bg-teal-400 text-teal-800 px-2">Designers</span>
      <span class="bg-red-400 text-red-800 px-2">Developers</span>
      <span class="bg-blue-400 text-blue-800 px-2">Managers</span>
    </span>
  </span>
</span>
```
