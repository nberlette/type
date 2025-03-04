import { assertEquals } from "jsr:@std/assert";
import { isUint16Array } from "../src/uint16-array.ts";

Deno.test(
  "isUint16Array() should return true for Uint16Array instances",
  () => {
    const arr = new Uint16Array(8);
    assertEquals(isUint16Array(arr), true);
  },
);

Deno.test(
  "isUint16Array() should return false for non-Uint16Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isUint16Array(arr), false);
  },
);

Deno.test(
  "isUint16Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isUint16Array(num), false);
  },
);

Deno.test("isUint16Array() should return false for null", () => {
  assertEquals(isUint16Array(null), false);
});
