import { assertEquals } from "jsr:@std/assert";
import { isPositiveZero } from "../../src/number/positive-zero.ts";

Deno.test("isZero should return true positive zero", () => {
  const result = isPositiveZero(0);
  assertEquals(result, true, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for negative zero", () => {
  const result = isPositiveZero(-0);
  assertEquals(result, false, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for nonzero numbers", () => {
  const result = isPositiveZero(1);
  assertEquals(result, false, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for non-number values", () => {
  const result = isPositiveZero("");
  assertEquals(result, false, "isPositiveZero() functions as expected");
});
