import type { Cast, INTEGER, POSITIVE } from "./types.ts";
import { isInteger } from "./integer.ts";

// #region PositiveInteger
/**
 * Casts a value into a positive finite type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numbers
 */

export type PositiveInteger<N = number> = Cast<N, POSITIVE & INTEGER>;
/**
 * Checks if a given value is a positive integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive integer, `false` otherwise.
 * @example
 * ```ts
 * import { isPositiveInteger } from "jsr:@type/is/integer";
 *
 * console.log(isPositiveInteger(0)); // true
 * console.log(isPositiveInteger(1)); // true
 * console.log(isPositiveInteger(-1)); // false
 * console.log(isPositiveInteger(1.5)); // false
 * console.log(isPositiveInteger(NaN)); // false
 * console.log(isPositiveInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveInteger<const N = number>(
  it: N,
): it is PositiveInteger<N>;

/**
 * Checks if a given value is a positive integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive integer, `false` otherwise.
 * @example
 * ```ts
 * import { isPositiveInteger } from "jsr:@type/is/integer";
 *
 * console.log(isPositiveInteger(0)); // true
 * console.log(isPositiveInteger(1)); // true
 * console.log(isPositiveInteger(-1)); // false
 * console.log(isPositiveInteger(1.5)); // false
 * console.log(isPositiveInteger(NaN)); // false
 * console.log(isPositiveInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveInteger(it: unknown): it is PositiveInteger;

/** @ignore */
export function isPositiveInteger(it: unknown): it is PositiveInteger {
  return isInteger(it) && it >= 0;
}

/** @ignore */
export default isPositiveInteger;
