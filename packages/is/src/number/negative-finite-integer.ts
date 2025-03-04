import { isFiniteInteger } from "./finite-integer.ts";
import type { Cast, FINITE, INTEGER, NEGATIVE } from "./types.ts";

/**
 * Casts a value into a negative finite integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & FINITE & INTEGER
>;

/**
 * Checks if a given value is a negative finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeFiniteInteger } from "jsr:@type/is/integer";
 *
 * console.log(isNegativeFiniteInteger(0)); // false
 * console.log(isNegativeFiniteInteger(1)); // false
 * console.log(isNegativeFiniteInteger(-1)); // true
 * console.log(isNegativeFiniteInteger(1.5)); // false
 * console.log(isNegativeFiniteInteger(NaN)); // false
 * console.log(isNegativeFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeFiniteInteger<const N = number>(
  it: N,
): it is NegativeFiniteInteger<N>;

/**
 * Checks if a given value is a negative finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeFiniteInteger } from "jsr:@type/is/integer";
 *
 * console.log(isNegativeFiniteInteger(0)); // false
 * console.log(isNegativeFiniteInteger(1)); // false
 * console.log(isNegativeFiniteInteger(-1)); // true
 * console.log(isNegativeFiniteInteger(1.5)); // false
 * console.log(isNegativeFiniteInteger(NaN)); // false
 * console.log(isNegativeFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeFiniteInteger(
  it: unknown,
): it is NegativeFiniteInteger;

/** @ignore */
export function isNegativeFiniteInteger(
  it: unknown,
): it is NegativeFiniteInteger {
  return isFiniteInteger(it) && +it < 0;
}

/** @ignore */
export default isNegativeFiniteInteger;
