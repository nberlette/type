import { assertEquals } from "jsr:@std/assert";
import { isOdd } from "../../src/number/odd.ts";

Deno.test("isOdd should return true for odd numbers", () => {
  assertEquals(isOdd(1), true);
  assertEquals(isOdd(3), true);
  assertEquals(isOdd(5), true);
  assertEquals(isOdd(7), true);
  assertEquals(isOdd(9), true);
});

Deno.test("isOdd: should return false for even numbers", () => {
  assertEquals(isOdd(2), false);
  assertEquals(isOdd(4), false);
  assertEquals(isOdd(6), false);
  assertEquals(isOdd(8), false);
  assertEquals(isOdd(10), false);
});

Deno.test("isOdd: should return true for odd bigints", () => {
  assertEquals(isOdd(1n), true);
  assertEquals(isOdd(3n), true);
  assertEquals(isOdd(5n), true);
  assertEquals(isOdd(7n), true);
  assertEquals(isOdd(9), true);
});

Deno.test("isOdd: should return false for even bigints", () => {
  assertEquals(isOdd(2n), false);
  assertEquals(isOdd(4n), false);
  assertEquals(isOdd(6n), false);
  assertEquals(isOdd(8n), false);
  assertEquals(isOdd(10), false);
});

Deno.test("isOdd: should return true for odd numbers in string format", () => {
  assertEquals(isOdd("1"), true);
  assertEquals(isOdd("3"), true);
  assertEquals(isOdd("5"), true);
  assertEquals(isOdd("7"), true);
  assertEquals(isOdd("9"), true);
});

Deno.test("isOdd: should return false for even numbers in string format", () => {
  assertEquals(isOdd("2"), false);
  assertEquals(isOdd("4"), false);
  assertEquals(isOdd("6"), false);
  assertEquals(isOdd("8"), false);
  assertEquals(isOdd("10"), false);
});
