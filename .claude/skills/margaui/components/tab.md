# tab

_tabbed content (radio inputs or anchors)_

## What it does

Tab strip — radio-driven (CSS-only, supports content panels per tab) or anchor-driven (just visual styling).

## When to use

- Section switchers within a page.

## Core classes

`tabs`; style `tabs-box|border|lift`; size `tabs-xs|sm|md|lg|xl`; child `tab`, `tab-active`; content `tab-content`.

## Examples

### Radio tabs border — tab content

Source: `playground/components/tab/radio-tabs-border--tab-content.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-border">
  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 1" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

  <input type="radio" name="my_tabs_2" class="tab" aria-label="Tab 3" />
  <div class="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
</div>
```

### Radio tabs box — tab content

Source: `playground/components/tab/radio-tabs-box--tab-content.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-box">
  <input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_6" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```

### Radio tabs lift — tab content on bottom

Source: `playground/components/tab/radio-tabs-lift--tab-content-on-bottom.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-lift tabs-bottom">
  <input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```

### Radio tabs lift — tab content

Source: `playground/components/tab/radio-tabs-lift--tab-content.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 1" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 2" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <input type="radio" name="my_tabs_3" class="tab" aria-label="Tab 3" />
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```

### Radio tabs lift with icons — tab content

Source: `playground/components/tab/radio-tabs-lift-with-icons--tab-content.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-lift">
  <label class="tab">
    <input type="radio" name="my_tabs_4" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
    Live
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <label class="tab">
    <input type="radio" name="my_tabs_4" checked="checked" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
    Laugh
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

  <label class="tab">
    <input type="radio" name="my_tabs_4" />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
    Love
  </label>
  <div class="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
</div>
```

### Sizes

Source: `playground/components/tab/sizes.html`

```html

<div role="tablist" class="tabs tabs-lift tabs-xs">
  <a role="tab" class="tab">Xsmall</a>
  <a role="tab" class="tab tab-active">Xsmall</a>
  <a role="tab" class="tab">Xsmall</a>
</div>

<div role="tablist" class="tabs tabs-lift tabs-sm">
  <a role="tab" class="tab">Small</a>
  <a role="tab" class="tab tab-active">Small</a>
  <a role="tab" class="tab">Small</a>
</div>

<div role="tablist" class="tabs tabs-lift">
  <a role="tab" class="tab">Medium</a>
  <a role="tab" class="tab tab-active">Medium</a>
  <a role="tab" class="tab">Medium</a>
</div>

<div role="tablist" class="tabs tabs-lift tabs-lg">
  <a role="tab" class="tab">Large</a>
  <a role="tab" class="tab tab-active">Large</a>
  <a role="tab" class="tab">Large</a>
</div>

<div role="tablist" class="tabs tabs-lift tabs-xl">
  <a role="tab" class="tab">Xlarge</a>
  <a role="tab" class="tab tab-active">Xlarge</a>
  <a role="tab" class="tab">Xlarge</a>
</div>
```

### Tabs border

Source: `playground/components/tab/tabs-border.html`

```html
<div role="tablist" class="tabs tabs-border">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```

### Tabs box using radio inputs

Source: `playground/components/tab/tabs-box-using-radio-inputs.html`

```html
<!-- name of each tab group should be unique -->
<div class="tabs tabs-box">
  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 2" checked="checked" />
  <input type="radio" name="my_tabs_1" class="tab" aria-label="Tab 3" />
</div>
```

### Tabs box with a horizontal scroll when theres no space

Source: `playground/components/tab/tabs-box-with-a-horizontal-scroll-when-theres-no-space.html`

```html
<div class="overflow-x-auto max-w-60">
  <div class="tabs-lift tabs min-w-max">
    <input type="radio" name="my_tabs_7" class="tab z-1" aria-label="Tab title 1" />
    <div class="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 1</div>
    <input type="radio" name="my_tabs_7" class="tab z-1" aria-label="Tab title 2" checked="checked" />
    <div class="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 2</div>
    <input type="radio" name="my_tabs_7" class="tab z-1" aria-label="Tab title 3" />
    <div class="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 3</div>
    <input type="radio" name="my_tabs_7" class="tab z-1" aria-label="Tab title 4" />
    <div class="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 4</div>
  </div>
</div>
```

### Tabs box

Source: `playground/components/tab/tabs-box.html`

```html
<div role="tablist" class="tabs tabs-box">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```

### Tabs lift

Source: `playground/components/tab/tabs-lift.html`

```html
<div role="tablist" class="tabs tabs-lift">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```

### Tabs with custom color

Source: `playground/components/tab/tabs-with-custom-color.html`

```html
<div role="tablist" class="tabs tabs-lift">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active text-primary [--tab-bg:orange] [--tab-border-color:red]"> Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```

### Tabs

Source: `playground/components/tab/tabs.html`

```html
<div role="tablist" class="tabs">
  <a role="tab" class="tab">Tab 1</a>
  <a role="tab" class="tab tab-active">Tab 2</a>
  <a role="tab" class="tab">Tab 3</a>
</div>
```
