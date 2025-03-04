import { assertEquals } from "jsr:@std/assert";
import { isPromise } from "../src/promise.ts";

Deno.test("isPromise should return true for Promise instances", () => {
  assertEquals(isPromise(Promise.resolve()), true);
});

Deno.test("isPromise should return false for non-Promise instances", () => {
  assertEquals(isPromise({ then: () => {} }), false);
  assertEquals(isPromise({}), false);
  assertEquals(isPromise(null), false);
  assertEquals(isPromise(undefined), false);
  assertEquals(isPromise(1), false);
  assertEquals(isPromise("string"), false);
});

Deno.test("isPromise should return false for Promise-like objects", () => {
  assertEquals(isPromise({ then: () => {} }), false);
});
