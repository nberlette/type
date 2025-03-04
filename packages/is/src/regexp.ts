import { isObjectLike } from "./object-like.ts";
import { isTaggedNative } from "./_internal.ts";

/**
 * Check if the given value is a regular expression, which is an object that
 * represents a pattern of text that can be used to perform pattern matching
 * with strings.
 *
 * @param it The value to check.
 * @returns `true` if the value is a regular expression, `false` otherwise.
 * @example
 * ```ts
 * import { isRegExp } from "jsr:@type/is/regexp";
 *
 * const regex = /foo/;
 * console.log(isRegExp(regex)); // true
 * console.log(isRegExp("foo")); // false
 * ```
 * @category Standard
 * @module regexp
 */
export function isRegExp(it: unknown): it is RegExp {
  return isObjectLike(it) && isTaggedNative(it, "RegExp");
}

export default isRegExp;
