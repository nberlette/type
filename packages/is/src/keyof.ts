import { isPropertyKey } from "./property-key.ts";

/**
 * @module keyof
 *
 * Check if the given value is a key of the given object.
 *
 * @example
 * ```ts
 * import { isKeyOf } from "jsr:@type/is/keyof";
 *
 * const obj = { a: 1, b: 2, c: 3 };
 *
 * console.log(isKeyOf(obj, "a")); // true
 * console.log(isKeyOf(obj, "b")); // true
 * console.log(isKeyOf(obj, "c")); // true
 * console.log(isKeyOf(obj, "d")); // false
 * ```
 * @category Objects
 */
// deno-lint-ignore ban-types
export function isKeyOf<const T extends {}, K extends PropertyKey = keyof T>(
  o: T,
  k: K,
): k is K & keyof T {
  return isPropertyKey(k) && k in Object(o);
}

/** @ignore */
export default isKeyOf;
