# fab

_floating action button (single or speed-dial)_

## What it does

Floating action button with optional speed-dial children.

## When to use

- Single primary action floating over scrollable content (compose, add).

## Core classes

`fab`; modifier `fab-flower` for radial speed-dial; inner `fab-main-action`, `fab-close`.

## Examples

### A single fab floating action button

Source: `playground/components/fab/a-single-fab-floating-action-button.html`

```html
<div class="fab">
  <button class="btn btn-lg btn-circle btn-primary">F</button>
</div>
```

### Fab and flower speed dial with svg icons

Source: `playground/components/fab/fab-and-flower-speed-dial-with-svg-icons.html`

```html
<div class="fab fab-flower">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-circle btn-lg">
    <svg
      aria-label="New"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path
        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
      />
    </svg>
  </div>

  <!-- Main Action button replaces the original button when FAB is open -->
  <button class="fab-main-action btn btn-circle btn-lg btn-primary">
    <svg
      aria-label="New post"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <!-- buttons that show up when FAB is open -->
  <button class="btn btn-circle btn-lg">
    <svg
      aria-label="New camera photo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path d="M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path
        fill-rule="evenodd"
        d="M2.5 5A1.5 1.5 0 0 0 1 6.5v5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 5h-.879a1.5 1.5 0 0 1-1.06-.44l-1.122-1.12A1.5 1.5 0 0 0 9.38 3H6.62a1.5 1.5 0 0 0-1.06.44L4.439 4.56A1.5 1.5 0 0 1 3.38 5H2.5ZM11 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <button class="btn btn-circle btn-lg">
    <svg
      aria-label="New poll"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path
        d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  </button>
  <button class="btn btn-circle btn-lg">
    <svg
      aria-label="New gallery photo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <button class="btn btn-circle btn-lg">
    <svg
      aria-label="New voice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="size-6"
    >
      <path d="M8 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Z" />
      <path
        d="M4.5 7A.75.75 0 0 0 3 7a5.001 5.001 0 0 0 4.25 4.944V13.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.556A5.001 5.001 0 0 0 13 7a.75.75 0 0 0-1.5 0 3.5 3.5 0 1 1-7 0Z"
      />
    </svg>
  </button>
</div>
```

### Fab and flower speed dial with tooltip

Source: `playground/components/fab/fab-and-flower-speed-dial-with-tooltip.html`

```html
<div class="fab fab-flower">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-info btn-circle">F</div>

  <!-- Main Action button replaces the original button when FAB is open -->
  <button class="fab-main-action btn btn-circle btn-lg btn-success">M</button>

  <!-- buttons that show up when FAB is open -->
  <div class="tooltip tooltip-left" data-tip="Label A">
    <button class="btn btn-lg btn-circle">A</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="Label B">
    <button class="btn btn-lg btn-circle">B</button>
  </div>
  <div class="tooltip" data-tip="Label C">
    <button class="btn btn-lg btn-circle">C</button>
  </div>
  <div class="tooltip" data-tip="Label D">
    <button class="btn btn-lg btn-circle">D</button>
  </div>
</div>
```

### Fab and speed dial vertical

Source: `playground/components/fab/fab-and-speed-dial-vertical.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">F</div>

  <!-- buttons that show up when FAB is open -->
  <button class="btn btn-lg btn-circle">A</button>
  <button class="btn btn-lg btn-circle">B</button>
  <button class="btn btn-lg btn-circle">C</button>
</div>
```

### Fab and speed dial with labels and fab close button

Source: `playground/components/fab/fab-and-speed-dial-with-labels-and-fab-close-button.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-info">F</div>

  <!-- close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder -->
  <div class="fab-close">
    Close <span class="btn btn-circle btn-lg btn-error">✕</span>
  </div>

  <!-- buttons that show up when FAB is open -->
  <div>Label A <button class="btn btn-lg btn-circle">A</button></div>
  <div>Label B <button class="btn btn-lg btn-circle">B</button></div>
  <div>Label C <button class="btn btn-lg btn-circle">C</button></div>
</div>
```

### Fab and speed dial with labels and fab main action button

Source: `playground/components/fab/fab-and-speed-dial-with-labels-and-fab-main-action-button.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">F</div>

  <!-- Main Action button replaces the original button when FAB is open -->
  <div class="fab-main-action">
    Main Action <button class="btn btn-circle btn-secondary btn-lg">M</button>
  </div>

  <!-- buttons that show up when FAB is open -->
  <div>Label A <button class="btn btn-lg btn-circle">A</button></div>
  <div>Label B <button class="btn btn-lg btn-circle">B</button></div>
  <div>Label C <button class="btn btn-lg btn-circle">C</button></div>
</div>
```

### Fab and speed dial with labels

Source: `playground/components/fab/fab-and-speed-dial-with-labels.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">F</div>

  <!-- buttons that show up when FAB is open -->
  <div>Label B <button class="btn btn-lg btn-circle">A</button></div>
  <div>Label C <button class="btn btn-lg btn-circle">B</button></div>
  <div>Label D <button class="btn btn-lg btn-circle">C</button></div>
</div>
```

### Fab and speed dial with rectangle buttons

Source: `playground/components/fab/fab-and-speed-dial-with-rectangle-buttons.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">F</div>

  <!-- buttons that show up when FAB is open -->
  <button class="btn btn-lg">Button A</button>
  <button class="btn btn-lg">Button B</button>
  <button class="btn btn-lg">Button C</button>
</div>
```

### Fab and speed dial with svg icons

Source: `playground/components/fab/fab-and-speed-dial-with-svg-icons.html`

```html
<div class="fab">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-secondary">
    <svg
      aria-label="New"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="size-6"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </div>

  <!-- buttons that show up when FAB is open -->
  <button class="btn btn-lg btn-circle">
    <svg
      aria-label="Camera"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  </button>
  <button class="btn btn-lg btn-circle">
    <svg
      aria-label="Gallery"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  </button>
  <button class="btn btn-lg btn-circle">
    <svg
      aria-label="Voice"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      />
    </svg>
  </button>
</div>
```

### Fab flower and speed dial

Source: `playground/components/fab/fab-flower-and-speed-dial.html`

```html
<div class="fab fab-flower">
  <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
  <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">F</div>

  <!-- Main Action button replaces the original button when FAB is open -->
  <button class="fab-main-action btn btn-circle btn-lg">M</button>

  <!-- buttons that show up when FAB is open -->
  <button class="btn btn-lg btn-circle">A</button>
  <button class="btn btn-lg btn-circle">B</button>
  <button class="btn btn-lg btn-circle">C</button>
  <button class="btn btn-lg btn-circle">D</button>
</div>
```
