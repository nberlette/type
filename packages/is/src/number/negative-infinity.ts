import { isNumber } from "./number.ts";

/**
 * @module negative-infinity
 * Checks if a given value is negative infinity (`Number.NEGATIVE_INFINITY`).
 *
 * @param it The value to check.
 * @returns `true` if the value is negative infinity, `false` otherwise.
 * @example
 * ```ts
 * import { isNegativeInfinity } from "@type/is/number/infinity";
 *
 * console.log(isNegativeInfinity(Infinity)); // false
 * console.log(isNegativeInfinity(-Infinity)); // true
 * console.log(isNegativeInfinity(1)); // false
 * console.log(isNegativeInfinity(-1)); // false
 * console.log(isNegativeInfinity(NaN)); // false
 * ```
 * @category Numbers
 * @tags number, negative, infinity
 */
export function isNegativeInfinity(it: unknown): it is NegativeInfinity {
  return isNumber(it) && !isFinite(it) && it === Number.NEGATIVE_INFINITY;
}

/**
 * Special type representing negative infinity (`Number.NEGATIVE_INFINITY`).
 *
 * @category Numbers
 * @tags types, number, infinity, negative
 */
export type NegativeInfinity = -1e313;

/** @ignore */
export default isNegativeInfinity;
