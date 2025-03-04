import { assertEquals } from "jsr:@std/assert";
import { isFloat32Array } from "../src/float32-array.ts";

Deno.test(
  "isFloat32Array() should return true for Float32Array instances",
  () => {
    const arr = new Float32Array(8);
    assertEquals(isFloat32Array(arr), true);
  },
);

Deno.test(
  "isFloat32Array() should return false for non-Float32Array TypedArrays",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isFloat32Array(arr), false);
    assertEquals(isFloat32Array(Object.create(Float32Array.prototype)), false);
    assertEquals(isFloat32Array(new Float16Array(8)), false);
    assertEquals(isFloat32Array(new Float64Array(8)), false);
    assertEquals(isFloat32Array(new Int8Array(8)), false);
    assertEquals(isFloat32Array(new Int16Array(8)), false);
    assertEquals(isFloat32Array(new Int32Array(8)), false);
    assertEquals(isFloat32Array(new Uint8Array(8)), false);
    assertEquals(isFloat32Array(new Uint8ClampedArray(8)), false);
    assertEquals(isFloat32Array(new Uint16Array(8)), false);
    assertEquals(isFloat32Array(new Uint32Array(8)), false);
    assertEquals(isFloat32Array(new BigInt64Array(8)), false);
    assertEquals(isFloat32Array(new BigUint64Array(8)), false);
  },
);

Deno.test(
  "isFloat32Array() should return false for other non-Float32Array objects",
  () => {
    assertEquals(isFloat32Array(() => {}), false);
    assertEquals(isFloat32Array([]), false);
    assertEquals(isFloat32Array({}), false);
    assertEquals(isFloat32Array(/foo/), false);
    assertEquals(isFloat32Array(new class Float32Array {}()), false);
  },
);

Deno.test(
  "isFloat32Array() should return false for non-objects",
  () => {
    assertEquals(isFloat32Array(8), false);
    assertEquals(isFloat32Array(8n), false);
    assertEquals(isFloat32Array("foo"), false);
    assertEquals(isFloat32Array(true), false);
    assertEquals(isFloat32Array(Symbol("foo")), false);
    assertEquals(isFloat32Array(null), false);
    assertEquals(isFloat32Array(undefined), false);
  },
);
