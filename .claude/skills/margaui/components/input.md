# input

_themed text-style input wrapper_

## What it does

Themed wrapper for `<input>` with optional inner icon, label, and **validator** support.

## When to use

- Any single-line text input (text, email, search, password, number, date, etc.).
- For multi-line, use **textarea**.
- For dropdowns, use **select**.

## Core classes

`input`; color `input-primary|secondary|accent|info|success|warning|error|neutral`; style `input-ghost`; size `input-xs|sm|md|lg|xl`.

## Examples

### Date input

Source: `playground/components/input/date-input.html`

```html
<input type="date" class="input" />
```

### Datetime local input

Source: `playground/components/input/datetime-local-input.html`

```html
<input type="datetime-local" class="input" />
```

### Disabled

Source: `playground/components/input/disabled.html`

```html
<input type="text" placeholder="You can't touch this" class="input" disabled />
```

### Email input with icon and validator

Source: `playground/components/input/email-input-with-icon-and-validator.html`

```html
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div class="validator-hint hidden">Enter valid email address</div>
```

### Email input with icon validator button join

Source: `playground/components/input/email-input-with-icon-validator-button-join.html`

```html
<div class="join">
  <div>
    <label class="input validator join-item">
      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div class="validator-hint hidden">Enter valid email address</div>
  </div>
  <button class="btn btn-neutral join-item">Join</button>
</div>
```

### Ghost style

Source: `playground/components/input/ghost-style.html`

```html
<input type="text" placeholder="Type here" class="input input-ghost" />
```

### Input colors

Source: `playground/components/input/input-colors.html`

```html
<input type="text" placeholder="neutral" class="input input-neutral" />
<input type="text" placeholder="Primary" class="input input-primary" />
<input type="text" placeholder="Secondary" class="input input-secondary" />
<input type="text" placeholder="Accent" class="input input-accent" />

<input type="text" placeholder="Info" class="input input-info" />
<input type="text" placeholder="Success" class="input input-success" />
<input type="text" placeholder="Warning" class="input input-warning" />
<input type="text" placeholder="Error" class="input input-error" />
```

### Number input with validator

Source: `playground/components/input/number-input-with-validator.html`

```html
<input
  type="number"
  class="input validator"
  required
  placeholder="Type a number between 1 to 10"
  min="1"
  max="10"
  title="Must be between be 1 to 10"
/>
<p class="validator-hint">Must be between be 1 to 10</p>
```

### Password input with icon and validator

Source: `playground/components/input/password-input-with-icon-and-validator.html`

```html
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p class="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>
```

### Search input with icon

Source: `playground/components/input/search-input-with-icon.html`

```html
<label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
```

### Sizes

Source: `playground/components/input/sizes.html`

```html
<input type="text" placeholder="Xsmall" class="input input-xs" />
<input type="text" placeholder="Small" class="input input-sm" />
<input type="text" placeholder="Medium" class="input input-md" />
<input type="text" placeholder="Large" class="input input-lg" />
<input type="text" placeholder="Xlarge" class="input input-xl" />
```

### Telephone number input with icon and validator

Source: `playground/components/input/telephone-number-input-with-icon-and-validator.html`

```html
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none">
      <path
        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
  <input
    type="tel"
    class="tabular-nums"
    required
    placeholder="Phone"
    pattern="[0-9]*"
    minlength="10"
    maxlength="10"
    title="Must be 10 digits"
  />
</label>
<p class="validator-hint">Must be 10 digits</p>
```

### Text input with data list suggestion

Source: `playground/components/input/text-input-with-data-list-suggestion.html`

```html
<input type="text" class="input" placeholder="Which browser do you use" list="browsers" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Opera"></option>
  <option value="Edge"></option>
</datalist>
```

### Text input with text label inside

Source: `playground/components/input/text-input-with-text-label-inside.html`

```html
<label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" class="grow" placeholder="Search" />
  <kbd class="kbd kbd-sm">⌘</kbd>
  <kbd class="kbd kbd-sm">K</kbd>
</label>
<label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    </g>
  </svg>
  <input type="text" class="grow" placeholder="index.php" />
</label>
<label class="input">
  Path
  <input type="text" class="grow" placeholder="src/app/" />
  <span class="badge badge-neutral badge-xs">Optional</span>
</label>
```

### Text input

Source: `playground/components/input/text-input.html`

```html
<input type="text" placeholder="Type here" class="input" />
```

### Time input

Source: `playground/components/input/time-input.html`

```html
<input type="time" class="input" />
```

### Url with icon and validator

Source: `playground/components/input/url-with-icon-and-validator.html`

```html
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </g>
  </svg>
  <input
    type="url"
    required
    placeholder="https://"
    value="https://"
    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
    title="Must be valid URL"
  />
</label>
<p class="validator-hint">Must be valid URL</p>
```

### Username text input with icon and validator

Source: `playground/components/input/username-text-input-with-icon-and-validator.html`

```html
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
</label>
<p class="validator-hint">
  Must be 3 to 30 characters
  <br />containing only letters, numbers or dash
</p>
```

### With fieldset and fieldset legend

Source: `playground/components/input/with-fieldset-and-fieldset-legend.html`

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">What is your name?</legend>
  <input type="text" class="input" placeholder="Type here" />
  <p class="label">Optional</p>
</fieldset>
```
