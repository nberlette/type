/**
 * Checks if the given value is a primitive `bigint` value.
 *
 * @example
 * ```ts
 * import { isBigInt } from "jsr:@type/is/bigint";
 *
 * const x: unknown = 123n;
 * if (isBigInt(x)) {
 *   console.log(x + 1n);
 *   //          ^? const x: bigint
 * }
 * ```
 * @category Primitives
 * @module bigint
 */

import { tryValueOf } from "./_internal.ts";

/**
 * Checks if the given value is a primitive bigint value.
 *
 * @param it The value to check.
 * @returns `true` if the value is a primitive bigint, `false` otherwise.
 * @example
 * ```ts
 * import { isBigInt } from "jsr:@type/is/bigint";
 *
 * const x: unknown = 123n;
 * if (isBigInt(x)) {
 *   console.log(x + 1n);
 *   //          ^? const x: bigint
 * }
 * ```
 * @category Primitives
 */
export function isBigInt(it: unknown): it is bigint {
  return tryValueOf(BigInt.prototype, it);
}

/** @ignore */
export default isBigInt;
