import { assertEquals } from "jsr:@std/assert";
import { isUint32Array } from "../src/uint32-array.ts";

Deno.test(
  "isUint32Array() should return true for Uint32Array instances",
  () => {
    const arr = new Uint32Array(8);
    assertEquals(isUint32Array(arr), true);
  },
);

Deno.test(
  "isUint32Array() should return false for non-Uint32Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isUint32Array(arr), false);
  },
);

Deno.test("isUint32Array() should return false for primitive values", () => {
  const num = 8;
  assertEquals(isUint32Array(num), false);
});

Deno.test(
  "isUint32Array() should return true for Uint32Array subarrays",
  () => {
    const arr = new Uint32Array(8);
    const view = arr.subarray(2);
    assertEquals(isUint32Array(view), true);
  },
);
