import { assertEquals } from "jsr:@std/assert";
import { isNull } from "../src/null.ts";

Deno.test("isNull() should return true for null values", () => {
  assertEquals(isNull(null), true);
});

Deno.test("isNull() should return false for undefined values", () => {
  assertEquals(isNull(undefined), false);
});

Deno.test("isNull() should return false for numeric values", () => {
  assertEquals(isNull(0), false);
});

Deno.test("isNull() should return false for string values", () => {
  assertEquals(isNull(""), false);
});

Deno.test("isNull() should return false for boolean values", () => {
  assertEquals(isNull(false), false);
});
