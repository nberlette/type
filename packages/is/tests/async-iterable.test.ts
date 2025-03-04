import { assertEquals } from "jsr:@std/assert";
import isAsyncIterable from "../src/async-iterable.ts";

Deno.test("isAsyncIterable should return true for an async iterable", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterable(iter), true);
});

Deno.test("isAsyncIterable should return false for a non-async iterable", () => {
  const nonIterable = { next: () => ({ value: 1, done: false }) };
  assertEquals(isAsyncIterable(nonIterable), false);
});

Deno.test("isAsyncIterable should return false for null", () => {
  assertEquals(isAsyncIterable(null), false);
});

Deno.test("isAsyncIterable should return false for undefined", () => {
  assertEquals(isAsyncIterable(undefined), false);
});
