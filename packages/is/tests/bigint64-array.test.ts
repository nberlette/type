import { assertEquals } from "jsr:@std/assert";
import { isBigInt64Array } from "../src/bigint64-array.ts";

Deno.test(
  "isBigInt64Array() should return true for BigInt64Array instances",
  () => {
    const arr = new BigInt64Array(8);
    assertEquals(isBigInt64Array(arr), true);
  },
);

Deno.test(
  "isBigInt64Array() should return false for non-BigInt64Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isBigInt64Array(arr), false);
  },
);

Deno.test(
  "isBigInt64Array() should return false for non-array-like objects",
  () => {
    const obj = { length: 8 };
    assertEquals(isBigInt64Array(obj), false);
  },
);
