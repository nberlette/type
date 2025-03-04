import { assert } from "jsr:@std/assert";
import { isURLSearchParams } from "../mod.ts";

Deno.test("isURLSearchParams should return true for URLSearchParams instances", () => {
  assert(isURLSearchParams(new URLSearchParams()));
  assert(isURLSearchParams(new URLSearchParams("a=1&b=2")));
});

Deno.test("isURLSearchParams should return false for non-URLSearchParams instances", () => {
  assert(!isURLSearchParams({}));
  assert(!isURLSearchParams(new URL("data:")));
});

Deno.test("isURLSearchParams should return true for URL instances with URLSearchParams properties", () => {
  assert(isURLSearchParams(new URL("https://foobar.com?a=1").searchParams));
});

Deno.test("isURLSearchParams should return false for null and undefined", () => {
  assert(!isURLSearchParams(null));
  assert(!isURLSearchParams(undefined));
});
