import { assertEquals } from "jsr:@std/assert";
import { isReader } from "../src/reader.ts";

Deno.test("isReader should return true for an object with a read method", () => {
  const mockReader = {
    read: () => new Promise((resolve) => resolve(0)),
  };
  assertEquals(isReader(mockReader), true);
});

Deno.test("isReader should return false for an object without a read method", () => {
  const mockObject = {
    notRead: () => new Promise((resolve) => resolve(0)),
  };
  assertEquals(isReader(mockObject), false);
});

Deno.test("isReader should return false for null", () => {
  assertEquals(isReader(null), false);
});

Deno.test("isReader should return false for non-object values", () => {
  assertEquals(isReader(123), false);
  assertEquals(isReader("abc"), false);
  assertEquals(isReader(undefined), false);
});

Deno.test("isReader should return false for objects with a read method that is not a function", () => {
  const mockObject = {
    read: 123,
  };
  assertEquals(isReader(mockObject), false);
});
