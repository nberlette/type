import { assertEquals } from "jsr:@std/assert";
import { isPositiveNonZeroFiniteInteger } from "../../src/number/positive-nonzero-finite-integer.ts";

Deno.test("isPositiveNonZeroFiniteInteger: should return true for positive nonzero finite integers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(1),
    true,
    "should return true for positive nonzero finite integers",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for negative zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(-0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for negative finite integer", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(-1),
    false,
    "should return false for negative finite integer",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for non-finite numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(-Infinity),
    false,
    "should return false for -Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(NaN),
    false,
    "should return false for NaN",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false non-integer numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(1.5),
    false,
    "should return false for 1.5",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(-1.245),
    false,
    "should return false for -1.245",
  );
});
