import { entries } from "./vfs.js";
import { input } from "./input.js";
import { makeCompiler } from "./twcompiler.js";

const startCompiler = performance.now();
const compiler = await makeCompiler(input, entries, {});
const endCompiler = performance.now();
const startBuild = performance.now();
const styles = compiler.build(["btn", "btn-sm"]);
const endBuild = performance.now();
const style = document.createElement("style");
style.textContent = styles;
document.head.appendChild(style);
console.log(
  `Compiler creation: ${endCompiler - startCompiler}ms, Build: ${endBuild - startBuild}ms`,
);
