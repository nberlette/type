import { isTypedArray } from "./typed-array.ts";

/**
 * Check if the given value is a `BigInt64Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `BigInt64Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isBigInt64Array } from "jsr:@type/is/bigint64array";
 *
 * const arr = new BigInt64Array(8);
 * isBigInt64Array(arr); // true
 * isBigInt64Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module bigint64array
 */
export function isBigInt64Array(it: unknown): it is BigInt64Array {
  return isTypedArray(it, "BigInt64Array");
}

export default isBigInt64Array;
