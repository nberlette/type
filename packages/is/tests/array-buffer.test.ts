import { assertEquals } from "jsr:@std/assert";
import isArrayBuffer from "../src/array-buffer.ts";

Deno.test("isArrayBuffer() should return true for ArrayBuffer instances", () => {
  const buffer = new ArrayBuffer(8);
  assertEquals(isArrayBuffer(buffer), true);
});

Deno.test("isArrayBuffer() should return false for SharedArrayBuffer instances", () => {
  const shared = new SharedArrayBuffer(8);
  assertEquals(isArrayBuffer(shared), false);
});

Deno.test("isArrayBuffer() should return false for ArrayBufferView instances", () => {
  const buffer = new ArrayBuffer(8);
  const array = new Uint8Array(buffer);
  assertEquals(isArrayBuffer(array), false);
});

Deno.test("isArrayBuffer() should return true for the buffer of ArrayBufferView instances", () => {
  const buffer = new ArrayBuffer(8);
  const array = new Uint8Array(buffer);
  assertEquals(isArrayBuffer(array.buffer), true);
});
