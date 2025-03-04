/**
 * Checks if the given value is a number. This includes all numbers, without
 * distinguishing between `NaN`, `Infinity`, and other special values.
 *
 * @param it The value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 * @example
 * ```ts
 * import { isNumber } from "jsr:@type/is/number";
 *
 * isNumber("123"); // false
 * isNumber(123); // true
 * ```
 * @example
 * ```ts
 * import { isNumber } from "jsr:@type/is/number";
 *
 * const x: unknown = 123;
 * if (isNumber(x)) {
 *   console.log(x + 1);
 *   //          ^? const x: number
 * }
 * ```
 * @category Primitives
 * @module number
 */
export function isNumber(it: unknown): it is number {
  return typeof it === "number";
}

/** @ignore */
export default isNumber;
