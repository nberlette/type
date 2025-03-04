import { isSymbol } from "../src/symbol.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("isSymbol() should return true for a Symbol", () => {
  assertEquals(isSymbol(Symbol("foo")), true);
});

Deno.test("isSymbol() should return true for Symbol.iterator", () => {
  assertEquals(isSymbol(Symbol.iterator), true);
});

Deno.test("isSymbol() should return true for Symbol.for", () => {
  assertEquals(isSymbol(Symbol.for("foo")), true);
});

Deno.test("isSymbol() should return false for a string", () => {
  assertEquals(isSymbol("@@foo"), false);
});

Deno.test("isSymbol() should return false for a number", () => {
  assertEquals(isSymbol(123), false);
});

Deno.test("isSymbol() should return false for an object", () => {
  assertEquals(isSymbol({}), false);
});
