import { getCompiler } from "../margaui.js";
import { PreviewComponent } from "./preview-component.js";
import { CodeMirror, setCodeMirrorPath } from "../editor/code-editor.js";

// Vim/dark from URL params
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("vim")) CodeMirror.isVimMode = true;
let editorDark = urlParams.has("dark");

// Load codemirror bundle, then define element
const withCodeMirror = setCodeMirrorPath("../editor/codemirror.js");
customElements.define("code-editor", CodeMirror);
await withCodeMirror((m) => console.log("codemirror loaded", m));

// Init compiler (shared with margaui.js)
const compiler = await getCompiler();
PreviewComponent.compiler = compiler;

// Compile only DaisyUI component classes needed by the page shell
const PAGE_CLASSES = [
  "navbar", "bg-base-100",
  "select", "select-sm", "select-bordered",
  "menu", "menu-title", "active",
  "loading", "loading-spinner", "loading-lg",
  "tabs", "tabs-lift", "tab", "tab-content",
  "badge", "badge-sm", "badge-ghost",
  "flex", "gap-2", "justify-end", "mt-4", "opacity-50",
];
const pageCss = compiler.build(PAGE_CLASSES);
document.getElementById("page-styles").textContent = pageCss;

// Reveal page
document.body.style.visibility = "visible";

// Theme setup
const themeSelect = document.getElementById("theme-select");
const themeKeys = await fetch("./themes.json").then(r => r.json());

for (const t of themeKeys) {
  const opt = document.createElement("option");
  opt.value = t;
  opt.textContent = t;
  if (t === "light") opt.selected = true;
  themeSelect.appendChild(opt);
}

function adoptableThemeCss(css) {
  return css.replace(/^([^{]*)\{/, ':root, :host, $1{');
}

const themeSheet = new CSSStyleSheet();
themeSheet.replaceSync(adoptableThemeCss(await fetch("../themes/light.css").then(r => r.text())));
document.adoptedStyleSheets = [...document.adoptedStyleSheets, themeSheet];
PreviewComponent.themeSheet = themeSheet;

let currentTheme = "light";
themeSelect.addEventListener("change", async () => {
  currentTheme = themeSelect.value;
  const css = await fetch(`../themes/${currentTheme}.css`).then(r => r.text());
  themeSheet.replaceSync(adoptableThemeCss(css));
  document.body.setAttribute("data-theme", currentTheme);
});

// Track all visible code editors for dark/vim toggling
let allEditors = [];

// Dark toggle
const darkCheckbox = document.getElementById("editor-dark");
darkCheckbox.checked = editorDark;
darkCheckbox.addEventListener("change", () => {
  editorDark = darkCheckbox.checked;
  for (const ed of allEditors) ed.dark = editorDark;
});

// Vim toggle
const vimCheckbox = document.getElementById("editor-vim");
vimCheckbox.checked = CodeMirror.isVimMode;
vimCheckbox.addEventListener("change", () => {
  CodeMirror.isVimMode = vimCheckbox.checked;
  for (const ed of allEditors) ed.refresh();
});

// Build edit URL with current state
function editUrl(name, file) {
  const params = new URLSearchParams();
  params.set("component", name);
  params.set("file", file);
  params.set("theme", currentTheme);
  if (CodeMirror.isVimMode) params.set("vim", "");
  if (editorDark) params.set("dark", "");
  return `../editor/?${params}`;
}

// Fetch component tree
const components = await fetch("./components.json").then(r => r.json());

// Render sidebar menu
const menuEl = document.getElementById("menu");
const menuTitle = document.createElement("li");
menuTitle.className = "menu-title";
menuTitle.textContent = "Components";
menuEl.appendChild(menuTitle);

for (const comp of components) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = comp.name;
  a.href = `#${comp.name}`;
  a.dataset.name = comp.name;
  li.appendChild(a);
  menuEl.appendChild(li);
}

// Helper: humanize file name
function humanize(filename) {
  return filename
    .replace(".html", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Navigation
const contentEl = document.getElementById("pg-content");
const loadingEl = document.getElementById("pg-loading");
let activeLink = null;

function showComponent(name) {
  const comp = components.find(c => c.name === name);
  if (!comp) return;

  // Update active menu item
  if (activeLink) activeLink.classList.remove("active");
  activeLink = menuEl.querySelector(`a[data-name="${name}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Clear previous
  contentEl.innerHTML = "";
  loadingEl.classList.add("pg-hidden");
  allEditors = [];

  // Component heading
  const heading = document.createElement("h1");
  heading.className = "pg-heading";
  heading.textContent = humanize(name);
  contentEl.appendChild(heading);

  for (let i = 0; i < comp.files.length; i++) {
    const file = comp.files[i];
    const tabsName = `tabs-${name}-${i}`;

    // Section wrapper
    const section = document.createElement("div");
    section.className = "pg-section";

    // Section title
    const title = document.createElement("h3");
    title.className = "pg-section-title";
    const hash = document.createElement("span");
    hash.className = "pg-hash";
    hash.textContent = "#";
    title.appendChild(hash);
    title.appendChild(document.createTextNode(humanize(file)));
    const editLink = document.createElement("a");
    editLink.className = "pg-edit-link";
    editLink.href = editUrl(name, file);
    editLink.textContent = "Edit";
    editLink.addEventListener("click", () => {
      editLink.href = editUrl(name, file);
    });
    title.appendChild(editLink);
    section.appendChild(title);

    // Tabs
    const tabsDiv = document.createElement("div");
    tabsDiv.className = "tabs tabs-lift";

    // Preview tab
    const previewRadio = document.createElement("input");
    previewRadio.type = "radio";
    previewRadio.name = tabsName;
    previewRadio.className = "tab";
    previewRadio.setAttribute("aria-label", "Preview");
    previewRadio.checked = true;

    const previewContent = document.createElement("div");
    previewContent.className = "tab-content pg-preview";

    const previewInner = document.createElement("div");
    previewInner.className = "pg-preview-inner";
    const daisyEl = document.createElement("preview-component");
    daisyEl.setAttribute("html-src", `./components/${name}/${file}`);
    previewInner.appendChild(daisyEl);
    previewContent.appendChild(previewInner);

    const statsDiv = document.createElement("div");
    statsDiv.className = "flex gap-2 justify-end mt-4 opacity-50";
    previewContent.appendChild(statsDiv);

    // HTML tab
    const htmlRadio = document.createElement("input");
    htmlRadio.type = "radio";
    htmlRadio.name = tabsName;
    htmlRadio.className = "tab";
    htmlRadio.setAttribute("aria-label", "HTML");

    const htmlContent = document.createElement("div");
    htmlContent.className = "tab-content pg-code";
    const htmlEditor = document.createElement("code-editor");
    htmlEditor.lang = "html";
    htmlEditor.readonly = true;
    htmlEditor.dark = editorDark;
    htmlEditor.code = "";
    htmlContent.appendChild(htmlEditor);
    allEditors.push(htmlEditor);

    // CSS tab
    const cssRadio = document.createElement("input");
    cssRadio.type = "radio";
    cssRadio.name = tabsName;
    cssRadio.className = "tab";
    cssRadio.setAttribute("aria-label", "CSS");

    const cssContent = document.createElement("div");
    cssContent.className = "tab-content pg-code";
    const cssEditor = document.createElement("code-editor");
    cssEditor.lang = "css";
    cssEditor.readonly = true;
    cssEditor.dark = editorDark;
    cssEditor.code = "";
    cssContent.appendChild(cssEditor);
    allEditors.push(cssEditor);

    // Listen for load event
    let rev = 0;
    daisyEl.addEventListener("load", (e) => {
      rev++;
      htmlEditor.code = e.detail.html;
      htmlEditor.rev = rev;
      cssEditor.code = e.detail.css;
      cssEditor.rev = rev;
      const kb = (e.detail.cssBytes / 1024).toFixed(2);
      const ms = e.detail.buildMs.toFixed(1);
      statsDiv.innerHTML =
        `<span class="badge badge-sm badge-ghost">${kb} KB</span>` +
        `<span class="badge badge-sm badge-ghost">${ms} ms</span>`;
    });

    // Assemble tabs
    tabsDiv.appendChild(previewRadio);
    tabsDiv.appendChild(previewContent);
    tabsDiv.appendChild(htmlRadio);
    tabsDiv.appendChild(htmlContent);
    tabsDiv.appendChild(cssRadio);
    tabsDiv.appendChild(cssContent);

    section.appendChild(tabsDiv);
    contentEl.appendChild(section);
  }
}

// Hash navigation
function navigateFromHash() {
  const hash = location.hash.replace("#", "");
  const name = hash || (components.length ? components[0].name : "");
  if (name) showComponent(name);
}

window.addEventListener("hashchange", navigateFromHash);
navigateFromHash();
