import { isGeneratorFunction } from "../src/generator-function.ts";
import { assert } from "jsr:@std/assert";

Deno.test("isGeneratorFunction should return true for generator function", () => {
  function* gen() {
    yield 1;
  }
  const result = isGeneratorFunction(gen);
  assert(result === true);
});

Deno.test("isGeneratorFunction should return false for non-generator function", () => {
  function nonGen() {
    return 1;
  }
  const result = isGeneratorFunction(nonGen);
  assert(result === false);
});

Deno.test("isGeneratorFunction should return false for generator object", () => {
  const gen = (function* () {
    yield 1;
  })();
  const result = isGeneratorFunction(gen);
  assert(result === false);
});

Deno.test("isGeneratorFunction should return false for non-function value", () => {
  const result = isGeneratorFunction(1);
  assert(result === false);
});
