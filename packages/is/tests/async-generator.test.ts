import { assertEquals } from "jsr:@std/assert";
import { isAsyncGenerator } from "../src/async-generator.ts";

Deno.test("isAsyncGenerator should return true for an async generator", () => {
  async function* genFn() {
    yield await Promise.resolve(1);
  }
  const gen = genFn();
  assertEquals(isAsyncGenerator(gen), true);
});

Deno.test("isAsyncGenerator should return false for an async generator function", () => {
  assertEquals(isAsyncGenerator(async function () {}), false);
});

Deno.test("isAsyncGenerator should return true for an async generator iterator", () => {
  const gen = (async function* () {
    yield;
  })();
  const iter = gen[Symbol.asyncIterator]();
  assertEquals(isAsyncGenerator(iter), true);
});

Deno.test("isAsyncGenerator should return false for a non-async iterable iterator", () => {
  const gen = function* () {
    yield 1;
  };
  const iter = gen();
  assertEquals(isAsyncGenerator(iter), false);
});
