import { assertEquals } from "jsr:@std/assert";
import {
  isTemplateStringsArray,
  isTemplateStringsObject,
} from "../src/template-literal.ts";

Deno.test("isTemplateStringsObject", function (): void {
  assertEquals(isTemplateStringsObject({ raw: ["a", "b", "c"] }), true);
  assertEquals(
    isTemplateStringsObject({ raw: ["a", "b", "c"], other: 1 }),
    true,
  );
  assertEquals(
    isTemplateStringsObject(Object.assign(["\x01"], { raw: ["\\x01"] })),
    true,
  );
  assertEquals(isTemplateStringsObject({ raw: 1 }), false);
});

Deno.test("isTemplateStringsArray", function (): void {
  assertEquals(isTemplateStringsArray(["a", "b", "c"]), false);
  assertEquals(
    isTemplateStringsArray(Object.assign(["\x01"], { raw: ["\\x01"] })),
    true,
  );
  assertEquals(isTemplateStringsArray({ raw: ["a", "b", "c"] }), false);
  assertEquals(
    isTemplateStringsArray({ raw: ["a", "b", "c"], other: 1 }),
    false,
  );
  assertEquals(isTemplateStringsArray({ raw: 1 }), false);
});
