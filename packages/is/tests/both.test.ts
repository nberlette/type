import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isBoth } from "../src/both.ts";
import { expectType } from "../src/_internal.ts";

describe("isBoth: fundamentals", () => {
  it("is a function", () => expect(isBoth).toBeInstanceOf(Function));
  it("is named 'isBoth'", () => expect(isBoth.name).toBe("isBoth"));
  it("has an arity of 2", () => expect(isBoth).toHaveLength(2));
  it("returns a boolean", () => expect(() => isBoth(null!, null!)).toThrow());
});

describe("isBoth: behavior", () => {
  const isString = (it: unknown): it is string => typeof it === "string";
  const isEmpty = (it: string): it is "" => it.length === 0;
  const isEmptyString = isBoth(isString, isEmpty);

  it("should return a composite type guard from two base types", () => {
    expect(isEmptyString("")).toBe(true);
    expect(isEmptyString("foo")).toBe(false);
    expect(isEmptyString(1)).toBe(false);
    expect(isEmptyString([])).toBe(false);
    expect(isEmptyString({})).toBe(false);
    expect(isEmptyString(null)).toBe(false);
    expect(isEmptyString(undefined)).toBe(false);
    expect(isEmptyString(true)).toBe(false);
  });

  it("should have the expected signature", () => {
    expectType<(it: unknown) => it is string & "">(isEmptyString);
  });
});
