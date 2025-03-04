/**
 * Checks if a value is an `ArrayBufferView`, which includes all typed arrays
 * and `DataView` objects, but not `ArrayBuffer` or `SharedArrayBuffer`.
 *
 * @example
 * ```ts
 * import { isArrayBufferView } from "jsr:@type/is/array-buffer-view";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBufferView(buffer); // false
 * isArrayBufferView(view); // true
 * isArrayBufferView(array); // true
 * ```
 * @category Binary Data Structures
 * @module array-buffer-view
 */
import { isDataView } from "./data-view.ts";
import { isTypedArray } from "./typed-array.ts";

/**
 * Checks if a value is an `ArrayBufferView`, which includes all typed arrays
 * and `DataView` objects, but not `ArrayBuffer` or `SharedArrayBuffer`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `ArrayBufferView`, `false` otherwise.
 * @example
 * ```ts
 * import { isArrayBufferView } from "jsr:@type/is/array-buffer-view";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBufferView(buffer); // false
 * isArrayBufferView(view); // true
 * isArrayBufferView(array); // true
 * ```
 * @category Binary Data Structures
 */
export function isArrayBufferView(it: unknown): it is ArrayBufferView {
  if (
    typeof globalThis.ArrayBuffer === "function" &&
    typeof globalThis.ArrayBuffer.isView === "function"
  ) {
    return globalThis.ArrayBuffer?.isView?.(it);
  }

  return isDataView(it) || isTypedArray(it);
}

export default isArrayBufferView;
