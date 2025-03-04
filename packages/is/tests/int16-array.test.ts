import { assertEquals } from "jsr:@std/assert";
import isInt16Array from "../src/int16-array.ts";

Deno.test("isInt16Array() should return true for Int16Array instances", () => {
  const arr = new Int16Array(8);
  assertEquals(isInt16Array(arr), true);
});

Deno.test(
  "isInt16Array() should return false for non-Int16Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isInt16Array(arr), false);
  },
);

Deno.test(
  "isInt16Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isInt16Array(num), false);
  },
);

Deno.test("isInt16Array() should return false for null", () => {
  assertEquals(isInt16Array(null), false);
});

Deno.test("isInt16Array() should return false for undefined", () => {
  assertEquals(isInt16Array(undefined), false);
});
