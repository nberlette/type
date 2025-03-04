import { assertEquals } from "jsr:@std/assert";
import { isGenerator } from "../src/generator.ts";

Deno.test("isGenerator should return true for a generator", () => {
  function* gen() {
    yield 1;
  }
  const iter = gen();
  assertEquals(isGenerator(iter), true);
});

Deno.test("isGenerator should return false for a function", () => {
  function gen() {
    return 1;
  }
  assertEquals(isGenerator(gen), false);
});

Deno.test("isGenerator should return false for an object", () => {
  assertEquals(isGenerator({}), false);
});

Deno.test("isGenerator should return false for a non-iterable iterator", () => {
  const iter = { next: () => ({ value: 1, done: false }) };
  assertEquals(isGenerator(iter), false);
});
