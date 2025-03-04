import { assertEquals } from "jsr:@std/assert";
import isArrayBufferLike from "../src/array-buffer-like.ts";

Deno.test("isArrayBufferLike() should return true for ArrayBuffer", () => {
  const buffer = new ArrayBuffer(8);
  assertEquals(isArrayBufferLike(buffer), true);
});

Deno.test("isArrayBufferLike() should return true for SharedArrayBuffer", () => {
  const shared = new SharedArrayBuffer(8);
  assertEquals(isArrayBufferLike(shared), true);
});

Deno.test("isArrayBufferLike() should return false for non-ArrayBufferLike", () => {
  const array = new Uint8Array(8);
  assertEquals(isArrayBufferLike(array), false);
});

Deno.test("isArrayBufferLike() should return true for ArrayBuffer in ArrayBufferLike", () => {
  const array = new Uint8Array(8);
  assertEquals(isArrayBufferLike(array.buffer), true);
});
