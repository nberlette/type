// File: ./set.test.ts
import { assertEquals } from "jsr:@std/assert";
import isSet from "../src/set.ts";

Deno.test("isSet() should return true for Set instances", () => {
  assertEquals(isSet(new Set()), true);
});

Deno.test("isSet() should return false for non-Set instances", () => {
  assertEquals(isSet([]), false);
  assertEquals(isSet(new WeakSet()), false);
  assertEquals(isSet(new Map()), false);
  assertEquals(isSet(Object.create(Set.prototype)), false);
});

Deno.test("isSet() should return false for non-object values", () => {
  assertEquals(isSet(null), false);
  assertEquals(isSet(undefined), false);
  assertEquals(isSet(123), false);
  assertEquals(isSet("abc"), false);
  assertEquals(isSet(true), false);
});
