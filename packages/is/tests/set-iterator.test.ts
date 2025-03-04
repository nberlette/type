// File: ./set-iterator.test.ts
import { isSetIterator } from "../src/set-iterator.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("isSetIterator should return true for Set Iterator", () => {
  const set = new Set(["foo", "bar", "foo"]);
  const iter = set[Symbol.iterator]();
  assertEquals(isSetIterator(iter), true);
});

Deno.test("isSetIterator should return false for non-Set Iterator", () => {
  const set = new Set(["foo", "bar", "foo"]);
  assertEquals(isSetIterator(set), false);
});
