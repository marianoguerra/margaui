import { entries } from "./vfs.js";
import { input } from "./input.js";
import { makeCompiler } from "./twcompiler.js";

let _compiler = null;
export async function getCompiler() {
  _compiler ??= await makeCompiler(input, entries, {});
  return _compiler;
}

export async function compile(classes) {
  return (await getCompiler()).build(classes);
}
