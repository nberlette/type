import type { Cast, FINITE, INTEGER, NEGATIVE, NON_ZERO } from "./types.ts";

/**
 * Casts a value into a negative nonzero finite integer type. If the value is
 * not a number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeNonZeroFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & FINITE & INTEGER
>;

/**
 * Checks if a given value is a negative nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroFiniteInteger } from "jsr:@type/is/integer";
 *
 * console.log(isNegativeNonZeroFiniteInteger(0)); // false
 * console.log(isNegativeNonZeroFiniteInteger(1)); // false
 * console.log(isNegativeNonZeroFiniteInteger(-1)); // true
 * console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
 * console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
 * console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroFiniteInteger<const N = number>(
  it: N,
): it is NegativeNonZeroFiniteInteger<N>;

/**
 * Checks if a given value is a negative nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroFiniteInteger } from "jsr:@type/is/integer";
 *
 * console.log(isNegativeNonZeroFiniteInteger(0)); // false
 * console.log(isNegativeNonZeroFiniteInteger(1)); // false
 * console.log(isNegativeNonZeroFiniteInteger(-1)); // true
 * console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
 * console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
 * console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroFiniteInteger(
  it: unknown,
): it is NegativeNonZeroFiniteInteger<number>;

/** @ignore */
export function isNegativeNonZeroFiniteInteger(
  it: unknown,
): it is NegativeNonZeroFiniteInteger {
  return isNegativeNonZeroFiniteInteger(it) && +it !== 0;
}

/** @ignore */
export default isNegativeNonZeroFiniteInteger;
