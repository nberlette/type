/**
 * Checks if the value is `null`, and nothing else.
 *
 * @param it The value to check.
 * @returns `true` if the value is `null`, or `false` otherwise.
 * @example
 * ```ts
 * import { isNull } from "jsr:@type/is/null";
 *
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull(0); // false
 * isNull(''); // false
 * isNull(false); // false
 * ```
 * @category Primitives
 * @module null
 */
export function isNull(it: unknown): it is null {
  return it === null;
}

export default isNull;
