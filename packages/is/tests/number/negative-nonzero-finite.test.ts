import { assertEquals } from "jsr:@std/assert";
import { isNegativeNonZeroFiniteNumber } from "../../src/number/negative-nonzero-finite.ts";

Deno.test("isNegativeNonZeroFiniteNumber: should return true for negative nonzero finite numbers", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(-1),
    true,
    "should return true for negative nonzero finite numbers",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false zero", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for positive nonzero finite numbers", () => {
  (isNegativeNonZeroFiniteNumber(1),
    false,
    "should return false for positive nonzero finite numbers");
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for non-finite numbers", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(NaN),
    false,
    "should return false for NaN",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(-Infinity),
    false,
    "should return false for -Infinity",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for non-number values", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(""),
    false,
    "should return false for strings",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(true),
    false,
    "should for booleans",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(null),
    false,
    "should return false for null",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(undefined),
    false,
    "should return false for undefined",
  );
});
