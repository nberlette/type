import { assertEquals } from "jsr:@std/assert";
import { isBigUint64Array } from "../src/biguint64-array.ts";

Deno.test(
  "isBigUint64Array() should return true for BigUint64Array instances",
  () => {
    const arr = new BigUint64Array(8);
    assertEquals(isBigUint64Array(arr), true);
  },
);

Deno.test(
  "isBigUint64Array() should return false for non-BigUint64Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isBigUint64Array(arr), false);
  },
);

Deno.test(
  "isBigUint64Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isBigUint64Array(num), false);
  },
);
