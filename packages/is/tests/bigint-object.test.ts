import { assertEquals } from "@std/assert/equals";
import { isBigIntObject } from "../src/bigint-object.ts";
import { expectType } from "../src/_internal.ts";

Deno.test("isBigIntObject: basic tests", () => {
  assertEquals(typeof isBigIntObject, "function", "should be a function");
  assertEquals(
    isBigIntObject.name,
    "isBigIntObject",
    "should have the correct name",
  );
  assertEquals(isBigIntObject.length, 1, "should have the correct arity");
});

Deno.test("isBigIntObject: behavior", () => {
  assertEquals(isBigIntObject(0n), false, "should return false for bigint");
  assertEquals(
    isBigIntObject(Object(0n)),
    true,
    "should return true for BigInt object",
  );
});

Deno.test("isBigIntObject: edge cases", () => {
  assertEquals(isBigIntObject(null), false, "should return false for null");
  assertEquals(
    isBigIntObject("true"),
    false,
    "should return false for string",
  );
  assertEquals(isBigIntObject(1), false, "should return false for number");
  assertEquals(isBigIntObject({}), false, "should return false for object");
  assertEquals(isBigIntObject([]), false, "should return false for array");
  assertEquals(
    isBigIntObject(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(
    isBigIntObject(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isBigIntObject: type narrowing", () => {
  const x: unknown = Object(0n);
  // deno-lint-ignore ban-types
  if (isBigIntObject(x)) expectType<BigInt>(x);
  expectType<unknown>(x);
});
