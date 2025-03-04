import { assertEquals } from "jsr:@std/assert";
import isAsyncGeneratorFunction from "../src/async-generator-function.ts";

Deno.test("isAsyncGeneratorFunction", () => {
  const genFnAsync = async function* () {
    yield 1;
  };
  assertEquals(isAsyncGeneratorFunction(genFnAsync), true);

  const genObjAsync = genFnAsync();
  assertEquals(isAsyncGeneratorFunction(genObjAsync), false);

  const genFn = function* () {
    yield 1;
  };
  assertEquals(isAsyncGeneratorFunction(genFn), false);

  const genObj = genFn();
  assertEquals(isAsyncGeneratorFunction(genObj), false);

  const notAGen = () => {};
  assertEquals(isAsyncGeneratorFunction(notAGen), false);
});
