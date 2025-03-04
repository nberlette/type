import { assertEquals } from "jsr:@std/assert";
import { isNonZeroFiniteInteger } from "../../src/number/nonzero-finite-integer.ts";

Deno.test("isNonZeroFiniteInteger: should return true for nonzero finite integers", () => {
  assertEquals(
    isNonZeroFiniteInteger(1),
    true,
    "1 is a nonzero finite integer",
  );
  assertEquals(isNonZeroFiniteInteger(-1), true, "-1 nonzero finite integer");
});

Deno.test("isNonZeroFiniteInteger: should return false for zero", () => {
  assertEquals(
    isNonZeroFiniteInteger(0),
    false,
    "0 is not a nonzero finite integer",
  );
});

Deno.test("isNonZeroFiniteInteger: should return false for non-finite numbers", () => {
  assertEquals(
    isNonZeroFiniteInteger(Infinity),
    false,
    "Infinity is not a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(Infinity),
    false,
    "Infinity is not a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(-Infinity),
    false,
    "-Infinity is not a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(NaN),
    false,
    "NaN is not a nonzero finite integer",
  );
});

Deno.test("isNonZeroFiniteInteger: should return false non-integer numbers", () => {
  assertEquals(
    isNonZeroFiniteInteger(1.5),
    false,
    "1.5 is not a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(-1.245),
    false,
    "1.5 is not a nonzero finite integer",
  );
});

Deno.test("isNonZeroFiniteInteger: should return false for non-number values", () => {
  assertEquals(
    isNonZeroFiniteInteger("1"),
    false,
    '"1" is not a nonzero finite integer',
  );
  assertEquals(
    isNonZeroFiniteInteger(true),
    false,
    "true is a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(null),
    false,
    "null is not a nonzero finite integer",
  );
  assertEquals(
    isNonZeroFiniteInteger(undefined),
    false,
    "undefined is not a nonzero finite integer",
  );
});
