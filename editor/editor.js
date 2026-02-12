import { CodeMirror, setCodeMirrorPath } from "./code-editor.js";
import { getCompiler } from "../margaui.js";

// Vim mode from URL params
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("vim")) {
  CodeMirror.isVimMode = true;
}

// Load codemirror bundle, then define element
const withCodeMirror = setCodeMirrorPath("./codemirror.js");
customElements.define("code-editor", CodeMirror);
await withCodeMirror((m) => console.log("codemirror loaded", m));

// Init compiler
const compiler = await getCompiler();

// Compile page shell classes
const PAGE_CLASSES = [
  "navbar", "bg-base-100",
  "select", "select-sm", "select-bordered",
  "btn", "btn-sm", "btn-primary",
];
document.getElementById("page-styles").textContent = compiler.build(PAGE_CLASSES);
document.body.style.visibility = "visible";

// Theme setup
const themeSelect = document.getElementById("theme-select");
const themeKeys = await fetch("../playground/themes.json").then(r => r.json());

let currentTheme = urlParams.get("theme") || "light";

for (const t of themeKeys) {
  const opt = document.createElement("option");
  opt.value = t;
  opt.textContent = t;
  if (t === currentTheme) opt.selected = true;
  themeSelect.appendChild(opt);
}

function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ':root, :host, $1{');
}

const themeSheet = new CSSStyleSheet();
themeSheet.replaceSync(adoptableThemeCss(await fetch(`../themes/${currentTheme}.css`).then(r => r.text())));
document.adoptedStyleSheets = [...document.adoptedStyleSheets, themeSheet];
document.body.setAttribute("data-theme", currentTheme);
themeSelect.addEventListener("change", async () => {
  currentTheme = themeSelect.value;
  const css = await fetch(`../themes/${currentTheme}.css`).then(r => r.text());
  themeSheet.replaceSync(adoptableThemeCss(css));
  document.body.setAttribute("data-theme", currentTheme);
});

// Component selector
const components = await fetch("../playground/components.json").then(r => r.json());
const componentSelect = document.getElementById("component-select");
const fileSelect = document.getElementById("file-select");
const loadBtn = document.getElementById("load-btn");

for (const comp of components) {
  const opt = document.createElement("option");
  opt.value = comp.name;
  opt.textContent = comp.name;
  componentSelect.appendChild(opt);
}

function populateFiles() {
  const comp = components.find(c => c.name === componentSelect.value);
  fileSelect.innerHTML = "";
  if (!comp) return;
  for (const f of comp.files) {
    const opt = document.createElement("option");
    opt.value = f;
    opt.textContent = f.replace(".html", "").replace(/-/g, " ");
    fileSelect.appendChild(opt);
  }
}
componentSelect.addEventListener("change", populateFiles);
populateFiles();

// Editors
const htmlInput = document.getElementById("html-input");
const cssOutput = document.getElementById("css-output");
cssOutput.readonly = true;
const previewFrame = document.getElementById("preview-frame");
const statSize = document.getElementById("stat-size");
const statTime = document.getElementById("stat-time");

let currentCode = "";
let rev = 0;

function setEditorCode(code) {
  currentCode = code;
  htmlInput.code = code;
  htmlInput.rev = ++rev;
}

loadBtn.addEventListener("click", async () => {
  const comp = componentSelect.value;
  const file = fileSelect.value;
  if (!comp || !file) return;
  const html = await fetch(`../playground/components/${comp}/${file}`).then(r => r.text());
  setEditorCode(html);
  render();
});

// Tab switching
const tabs = document.querySelectorAll(".ed-tab");
const panelPreview = document.getElementById("ed-panel-preview");
const panelCss = document.getElementById("ed-panel-css");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));
    tab.setAttribute("aria-selected", "true");
    const panel = tab.dataset.panel;
    panelPreview.classList.toggle("ed-hidden", panel !== "preview");
    panelCss.classList.toggle("ed-hidden", panel !== "css");
  });
});

// Shadow DOM for preview isolation
const shadow = previewFrame.attachShadow({ mode: "open" });
shadow.adoptedStyleSheets = [themeSheet];

function render() {
  const html = currentCode;

  // Extract class names
  const classRegex = /class="([^"]*)"/g;
  const classes = new Set();
  let match;
  while ((match = classRegex.exec(html)) !== null) {
    for (const cls of match[1].split(/\s+/)) {
      if (cls) classes.add(cls);
    }
  }

  // Compile CSS
  let css = "";
  let buildMs = 0;
  if (classes.size > 0) {
    const t0 = performance.now();
    css = compiler.build([...classes]);
    buildMs = performance.now() - t0;
  }

  // Update preview (inside shadow DOM)
  shadow.innerHTML = `
    <style>${css}</style>
    <div style="display:flex;flex-wrap:wrap;align-items:start;gap:1rem;padding:2rem">${html}</div>
  `;

  // Update CSS tab
  cssOutput.code = css;
  cssOutput.rev = rev;

  // Update stats
  const kb = (new Blob([css]).size / 1024).toFixed(2);
  const ms = buildMs.toFixed(1);
  statSize.textContent = `${kb} KB`;
  statTime.textContent = `${ms} ms`;
}

// Editor dark theme toggle
const editorDark = document.getElementById("editor-dark");
editorDark.checked = htmlInput.dark;
editorDark.addEventListener("change", () => {
  htmlInput.dark = editorDark.checked;
  cssOutput.dark = editorDark.checked;
});

// Vim mode toggle
const editorVim = document.getElementById("editor-vim");
editorVim.checked = CodeMirror.isVimMode;
editorVim.addEventListener("change", () => {
  CodeMirror.isVimMode = editorVim.checked;
  htmlInput.refresh();
  cssOutput.refresh();
  const url = new URL(location.href);
  if (editorVim.checked) {
    url.searchParams.set("vim", "");
  } else {
    url.searchParams.delete("vim");
  }
  history.replaceState(null, "", url);
});

// Listen for editor changes (debounced)
let debounceTimer = null;
htmlInput.addEventListener("code-editor-update", (e) => {
  currentCode = e.detail.code;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(render, 100);
});

// Load from URL params (?component=button&file=button.html)
const params = new URLSearchParams(location.search);
const paramComp = params.get("component");
const paramFile = params.get("file");
if (paramComp && paramFile) {
  componentSelect.value = paramComp;
  populateFiles();
  fileSelect.value = paramFile;
  const html = await fetch(`../playground/components/${paramComp}/${paramFile}`).then(r => r.text());
  setEditorCode(html);
}

// Initial render
render();
