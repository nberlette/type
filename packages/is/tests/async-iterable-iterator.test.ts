import { assertEquals } from "jsr:@std/assert";
import isAsyncIterableIterator from "../src/async-iterable-iterator.ts";

Deno.test("isAsyncIterableIterator should return true for AsyncIterableIterator", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterableIterator(iter), true);
});

Deno.test("isAsyncIterableIterator should return true for AsyncIterator", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterableIterator(iter[Symbol.asyncIterator]()), true);
});

Deno.test("isAsyncIterableIterator should return false for non-AsyncIterableIterator", () => {
  assertEquals(isAsyncIterableIterator(1), false);
  assertEquals(isAsyncIterableIterator("string"), false);
  assertEquals(isAsyncIterableIterator(null), false);
  assertEquals(isAsyncIterableIterator(undefined), false);
  assertEquals(isAsyncIterableIterator(true), false);
  assertEquals(isAsyncIterableIterator(false), false);
  assertEquals(isAsyncIterableIterator(Symbol()), false);
  assertEquals(isAsyncIterableIterator({}), false);
});
