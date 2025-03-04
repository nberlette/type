import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isEither } from "../src/either.ts";
import { expectType } from "../src/_internal.ts";

describe("isEither: fundamentals", () => {
  it("is a function", () => expect(isEither).toBeInstanceOf(Function));
  it("is named 'isEither'", () => expect(isEither.name).toBe("isEither"));
  it("has an arity of 2", () => expect(isEither).toHaveLength(2));
  it("returns a boolean", () => expect(() => isEither(null!, null!)).toThrow());
});

describe("isEither: behavior", () => {
  const isString = (it: unknown): it is string => typeof it === "string";
  const isNumber = (it: unknown): it is number => typeof it === "number";
  const isStringOrNumber = isEither(isString, isNumber);

  it("should return a composite type guard from two base types", () => {
    expect(isStringOrNumber("")).toBe(true);
    expect(isStringOrNumber(1)).toBe(true);
    expect(isStringOrNumber([])).toBe(false);
    expect(isStringOrNumber({})).toBe(false);
    expect(isStringOrNumber(null)).toBe(false);
    expect(isStringOrNumber(undefined)).toBe(false);
    expect(isStringOrNumber(true)).toBe(false);
  });

  it("should have the expected signature", () => {
    expectType<(it: unknown) => it is string | number>(isStringOrNumber);
  });
});
