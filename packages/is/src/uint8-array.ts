import { isTypedArray } from "./typed-array.ts";

/**
 * Check if the given value is a `Uint8Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Uint8Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isUint8Array } from "jsr:@type/is/uint8array";
 *
 * const arr = new Uint8Array(8);
 * isUint8Array(arr); // true
 * isUint8Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module uint8array
 */
export function isUint8Array(it: unknown): it is Uint8Array {
  return isTypedArray(it, "Uint8Array");
}

export default isUint8Array;
