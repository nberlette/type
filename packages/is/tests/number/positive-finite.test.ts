import { assertEquals } from "jsr:@std/assert";
import { isPositiveFiniteNumber } from "../../src/number/positive-finite.ts";

Deno.test("isPositiveFiniteNumber: should return false for non-positive numbers", () => {
  assertEquals(
    isPositiveFiniteNumber(-1),
    false,
    "-1 is not a positive finite number",
  );
});

Deno.test("isPositiveFiniteNumber: should return false for non-finite numbers", () => {
  assertEquals(
    isPositiveFiniteNumber(Infinity),
    false,
    "Infinity is not a finite number",
  );
  assertEquals(
    isPositiveFiniteNumber(NaN),
    false,
    "NaN is not a finite number",
  );
});

Deno.test("isPositiveFiniteNumber: should return false for non-number values", () => {
  assertEquals(isPositiveFiniteNumber("1"), false, "String is not a number");
  assertEquals(isPositiveFiniteNumber(null), false, "Null is not a number");
  assertEquals(
    isPositiveFiniteNumber(undefined),
    false,
    "Undefined is not a number",
  );
});

Deno.test("isPositiveFiniteNumber: should return true for positive finite numbers", () => {
  assertEquals(
    isPositiveFiniteNumber(1),
    true,
    "1 is a positive finite number",
  );
  assertEquals(
    isPositiveFiniteNumber(1.5),
    true,
    "1.5 is a positive finite number",
  );
});
