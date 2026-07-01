/*
 * Shared page-shell helpers used by both the editor and the playground:
 *   - compilePageStyles: compile a fixed list of utility classes on boot.
 *   - compileHtmlClasses: extract class names from an HTML snippet and
 *     compile them, reporting the build time.
 *   - humanize: file name -> title-case display label.
 *   - createThemeSwitcher: populate a <select> with the theme list and
 *     install an adopted CSSStyleSheet that follows the selected theme.
 */

function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ":root, :host, $1{");
}

export function extractClasses(html) {
  const classRegex = /class="([^"]*)"/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(html)) !== null) {
    for (const cls of match[1].split(/\s+/)) {
      if (cls) classes.add(cls);
    }
  }
  return [...classes];
}

export function compileHtmlClasses(compiler, html) {
  const classes = extractClasses(html);
  let css = "";
  let buildMs = 0;
  if (compiler && classes.length > 0) {
    const t0 = performance.now();
    css = compiler.build(classes);
    buildMs = performance.now() - t0;
  }
  return { css, buildMs };
}

// Humanize file names: "my-example.html" -> "My Example"
export function humanize(filename) {
  return filename
    .replace(/\.html$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function compilePageStyles(compiler, classes, styleEl) {
  styleEl.textContent = compiler.build(classes);
}

export async function createThemeSwitcher({
  selectEl,
  themesJsonUrl,
  themesBaseUrl,
  initial = "light",
  onChange,
}) {
  const themeKeys = await fetch(themesJsonUrl).then((r) => r.json());
  for (const t of themeKeys) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    if (t === initial) opt.selected = true;
    selectEl.appendChild(opt);
  }

  const loadTheme = (name) => fetch(`${themesBaseUrl}/${name}.css`).then((r) => r.text());

  const sheet = new CSSStyleSheet();
  sheet.replaceSync(adoptableThemeCss(await loadTheme(initial)));
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  document.body.setAttribute("data-theme", initial);

  let current = initial;
  selectEl.addEventListener("change", async () => {
    current = selectEl.value;
    sheet.replaceSync(adoptableThemeCss(await loadTheme(current)));
    document.body.setAttribute("data-theme", current);
    onChange?.(current);
  });

  return {
    sheet,
    get current() {
      return current;
    },
  };
}
