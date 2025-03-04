import { isTypedArray } from "./typed-array.ts";

/**
 * Check if the given value is a `Float16Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Float16Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat16Array } from "jsr:@type/is/float16array";
 *
 * const arr = new Float16Array(8);
 * isFloat16Array(arr); // true
 * isFloat16Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module float16array
 */
export function isFloat16Array(it: unknown): it is Float16Array {
  return isTypedArray(it, "Float16Array");
}

export default isFloat16Array;
