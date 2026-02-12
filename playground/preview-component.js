export class PreviewComponent extends HTMLElement {
  static compiler = null;

  static get observedAttributes() {
    return ["html-src", "theme"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._loadSequence = 0;
    this._rawHtml = "";
    this._rawCss = "";
  }

  get rawHtml() {
    return this._rawHtml;
  }

  get rawCss() {
    return this._rawCss;
  }

  async connectedCallback() {
    await new Promise((resolve) => setTimeout(resolve, 0));
    await this.load();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.load();
    }
  }

  async load() {
    const currentSequence = ++this._loadSequence;
    const htmlSrc = this.getAttribute("html-src");
    const theme = this.getAttribute("theme") || "light";

    if (!htmlSrc) return;

    const html = await fetch(htmlSrc).then((r) => r.text());
    if (currentSequence !== this._loadSequence) return;

    // Extract class names from HTML
    const classRegex = /class="([^"]*)"/g;
    const classes = new Set();
    let match;
    while ((match = classRegex.exec(html)) !== null) {
      for (const cls of match[1].split(/\s+/)) {
        if (cls) classes.add(cls);
      }
    }

    // Compile CSS using shared compiler
    let css = "";
    let buildMs = 0;
    if (PreviewComponent.compiler && classes.size > 0) {
      const t0 = performance.now();
      css = PreviewComponent.compiler.build([...classes]);
      buildMs = performance.now() - t0;
    }

    if (currentSequence !== this._loadSequence) return;

    this._rawHtml = html;
    this._rawCss = css;

    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <div data-theme="${theme}">${html}</div>
    `;

    const cssBytes = new Blob([css]).size;
    this.dispatchEvent(
      new CustomEvent("load", { detail: { html, css, buildMs, cssBytes } }),
    );
  }
}

customElements.define("preview-component", PreviewComponent);
