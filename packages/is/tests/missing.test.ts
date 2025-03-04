import { assertEquals } from "jsr:@std/assert";
import { isMissing } from "../src/missing.ts";

Deno.test("isMissing should return true for null and undefined", () => {
  assertEquals(isMissing(null), true);
  assertEquals(isMissing(undefined), true);
});

Deno.test("isMissing should return false for other values", () => {
  assertEquals(isMissing(0), false);
  assertEquals(isMissing(""), false);
  assertEquals(isMissing(false), false);
});
