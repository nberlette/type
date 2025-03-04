/**
 * Checks if {@linkcode it} is an `ArrayBuffer` or a `SharedArrayBuffer`.
 *
 * or `false` otherwise.
 * @example
 * ```ts
 * import { isArrayBufferLike } from "jsr:@type/is/any-array-buffer";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBufferLike(buffer); // true
 * isArrayBufferLike(shared); // true
 * isArrayBufferLike(array); // false
 * isArrayBufferLike(array.buffer); // true
 * ```
 * @category Binary Data Structures
 * @module array-buffer-like
 */

import { isSharedArrayBuffer } from "./shared-array-buffer.ts";
import { isArrayBuffer } from "./array-buffer.ts";

/**
 * Checks if {@linkcode it} is an `ArrayBuffer` or a `SharedArrayBuffer`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `ArrayBuffer` or a `SharedArrayBuffer`,
 * or `false` otherwise.
 * @example
 * ```ts
 * import { isArrayBufferLike } from "jsr:@type/is/any-array-buffer";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBufferLike(buffer); // true
 * isArrayBufferLike(shared); // true
 * isArrayBufferLike(array); // false
 * isArrayBufferLike(array.buffer); // true
 * ```
 * @category Binary Data Structures
 */
export function isArrayBufferLike(it: unknown): it is ArrayBufferLike {
  return isArrayBuffer(it) || isSharedArrayBuffer(it);
}

export default isArrayBufferLike;
