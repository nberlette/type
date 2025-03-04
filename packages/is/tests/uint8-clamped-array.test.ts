import { assertEquals } from "jsr:@std/assert";
import { isUint8ClampedArray } from "../src/uint8-clamped-array.ts";

Deno.test("isUint8ClampedArray() should return true for Uint8ClampedArray instances", () => {
  const arr = new Uint8ClampedArray(8);
  assertEquals(isUint8ClampedArray(arr), true);
});

Deno.test("isUint8ClampedArray() should return false for non-Uint8ClampedArray instances", () => {
  const arr = new ArrayBuffer(8);
  assertEquals(isUint8ClampedArray(arr), false);
});

Deno.test("isUint8ClampedArray() should return false for non-array-buffer instances", () => {
  const num = 8;
  assertEquals(isUint8ClampedArray(num), false);
});
