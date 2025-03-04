// File: ./arguments.test.ts
import { assertEquals } from "jsr:@std/assert";
import isArguments from "../src/arguments.ts";

Deno.test("isArguments should return true for arguments", function () {
  assertEquals(isArguments(arguments), true);
});

Deno.test("isArguments should return false for mock arguments", () => {
  const args = {
    0: "zero",
    1: "one",
    length: 2,
    callee: () => {},
  };
  assertEquals(isArguments(args), false);
});

Deno.test("isArguments should return false for non-arguments", () => {
  const nonArgs = {
    0: "zero",
    1: "one",
    length: 2,
  };
  assertEquals(isArguments(nonArgs), false);
});

Deno.test("isArguments should return false for non-objects", () => {
  assertEquals(isArguments("not an object"), false);
  assertEquals(isArguments(123), false);
  assertEquals(isArguments(null), false);
  assertEquals(isArguments(undefined), false);
});
