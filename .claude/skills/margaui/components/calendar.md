# calendar

_date picker (uses external Cally web component)_

## What it does

Styled wrapper around the [Cally](https://wicg.github.io/cal-cally/) `<calendar-date>` / `<calendar-range>` web components — margaui supplies the styling, Cally supplies the behavior.

## When to use

- Inline date picker or date-range picker.
- Requires loading Cally separately (CDN script tag in the example).

## Core classes

`cally` on the Cally element.

## Examples

### Cally calendar example

Source: `playground/components/calendar/cally-calendar-example.html`

```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
```

### Cally date picker example

Source: `playground/components/calendar/cally-date-picker-example.html`

```html
<!--
* Import Cally web component from CDN
<script type="module" src="https://unpkg.com/cally"></script>

* Or install as a dependency:
npm i cally
* and import it in JS
import "cally";
-->

<button popovertarget="cally-popover1" class="input input-border" id="cally1" style="anchor-name:--cally1">
  Pick a date
</button>
<div popover id="cally-popover1" class="dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--cally1">
  <calendar-date class="cally" onchange={document.getElementById('cally1').innerText = this.value}>
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div>
```
