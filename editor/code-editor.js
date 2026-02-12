let withCodeMirror;

export function setCodeMirrorPath(path) {
  withCodeMirror = lazyDynamicImportToWithFn(path);
  return withCodeMirror;
}

const isDarkTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export class CodeMirror extends HTMLElement {
  static isVimMode = false;
  constructor() {
    super();
    this._lang = null;
    this._code = null;
    this._rev = null;
    this._initialized = false;
    this._root = this.attachShadow({ mode: "open" });
    this._rootNode = null;
    this._editor = null;
    this._codemirror = null;
  }

  handleEvent(e) {
    console.log("CodeMirror event", e);
  }

  connectedCallback() {
    const node = document.createElement("div");
    this._root.appendChild(node);
    this._rootNode = node;
    this._code ??= this.getAttribute("code");
    this._lang ??= this.getAttribute("lang");
    this._maybeInitialize();
  }

  _maybeInitialize() {
    if (this._initialized || this._code === null || this._lang === null) {
      return;
    }
    this._initialized = true;
    withCodeMirror((mod) => {
      const { EditorView } = mod;
      this._codemirror = mod;
      this._editor = new EditorView({
        extensions: this._getExtensionsForLang(),
        doc: this._code,
        parent: this._rootNode,
      });
    });
  }

  _replaceCode(v) {
    if (this._editor) {
      const { EditorState } = this._codemirror;
      const transaction = {
        doc: v,
        extensions: this._getExtensionsForLang(),
      };
      this._editor.setState(EditorState.create(transaction));
    }
  }

  _bubble(name, detail) {
    this.dispatchEvent(
      new CustomEvent(name, {
        detail,
        bubbles: true,
      }),
    );
  }

  _getExtensionsForLang() {
    const {
      basicSetup,
      css,
      javascript,
      html,
      vim,
      Vim,
      darkTheme,
      EditorView,
    } = this._codemirror;
    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const code = update.view.state.doc.toString();
        this._bubble("code-editor-update", { code, update });
      }
    });
    let exts;
    switch (this._lang.toLowerCase()) {
      case "js":
      case "javascript":
        exts = [basicSetup, javascript(), updateListener];
        break;
      case "html":
        exts = [basicSetup, html(), updateListener];
        break;
      case "css":
        exts = [basicSetup, css(), updateListener];
        break;
      default:
        console.warn("unknown codemirror lang", this._lang);
        exts = [basicSetup, updateListener];
    }

    if (CodeMirror.isVimMode) {
      exts.unshift(vim());
      Vim.defineEx("write", "w", () => {
        this._bubble("code-editor-save", {});
      });
    }
    if (isDarkTheme()) {
      exts.push(darkTheme);
    }
    return exts;
  }

  set code(v) {
    this._code = v;
    this._maybeInitialize();
  }

  get code() {
    return this._code;
  }

  set lang(v) {
    this._lang = v;
    this._maybeInitialize();
  }

  get lang() {
    return this._lang;
  }

  set rev(v) {
    if (this._rev === v) {
      return;
    }
    this._rev = v;
    if (this._initialized) {
      this._replaceCode(this._code);
    } else {
      this._maybeInitialize();
    }
  }

  get rev() {
    return this._rev;
  }
}

function lazyDynamicImportToPromise(path) {
  let prom = null;
  return async () => {
    if (prom === null) {
      console.log("loading dynamic import", path);
      prom = import(path);
    }

    return await prom;
  };
}

function lazyDynamicImportToWithFn(path) {
  const loader = lazyDynamicImportToPromise(path);
  return async (fn) => {
    const lib = await loader();
    return fn(lib);
  };
}
