import { isTypedArray } from "./typed-array.ts";

/**
 * Check if the given value is a `Uint16Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Uint16Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isUint16Array } from "jsr:@type/is/uint16array";
 *
 * const arr = new Uint16Array(8);
 * isUint16Array(arr); // true
 * isUint16Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module uint16array
 */
export function isUint16Array(it: unknown): it is Uint16Array {
  return isTypedArray(it, "Uint16Array");
}

export default isUint16Array;
