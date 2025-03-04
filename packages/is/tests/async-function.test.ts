import { isAsyncFunction } from "../src/async-function.ts";
import { assert } from "jsr:@std/assert";

Deno.test("isAsyncFunction should return true for async function", () => {
  const asyncFunc = async () => {};
  assert(isAsyncFunction(asyncFunc));
});

Deno.test("isAsyncFunction should return true for async arrow function", () => {
  const asyncArrowFunc = async () => {};
  assert(isAsyncFunction(asyncArrowFunc));
});

Deno.test("isAsyncFunction should return false for async generator function", () => {
  const asyncGenFunc = async function* () {};
  assert(!isAsyncFunction(asyncGenFunc));
});

Deno.test("isAsyncFunction should return false for regular function", () => {
  const regularFunc = () => {};
  assert(!isAsyncFunction(regularFunc));
});
