import { isTypedArray } from "./typed-array.ts";

/**
 * Check if the given value is a `Float64Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Float64Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat64Array } from "jsr:@type/is/float64array";
 *
 * const arr = new Float64Array(8);
 * isFloat64Array(arr); // true
 * isFloat64Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module float64array
 */
export function isFloat64Array(it: unknown): it is Float64Array {
  return isTypedArray(it, "Float64Array");
}

export default isFloat64Array;
