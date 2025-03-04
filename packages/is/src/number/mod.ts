/**
 * @module number
 *
 * This module provides a set of type guards for working with numeric values,
 * including integers, floats, and special numbers like `NaN`, `Infinity`, and
 * `-Infinity`. Each sub-module provides a runtime type guard function and a
 * compile-time type alias for TypeScript, allowing you to perform strict type
 * checks and utilize strict type annotations in your code with minimal effort.
 *
 * @example
 * ```ts
 * import { isNumber, isNegative, type Negative } from "jsr:@type/number";
 *
 * let x = -1, y = 0;
 *
 * let z = -2 as Negative;
 *
 * if (isNegative(x)) z = x;
 * ```
 *
 * @category Numbers
 */

export * from "./positive-finite-integer.ts";
export * from "./positive-nonzero.ts";
export * from "./positive-nonzero-finite.ts";
export * from "./odd.ts";
export * from "./positive-zero.ts";
export * from "./negative-zero.ts";
export * from "./negative-nonzero.ts";
export * from "./positive-nonzero-integer.ts";
export * from "./positive-nonzero-finite-integer.ts";
export * from "./nonzero-integer.ts";
export * from "./nan.ts";
export * from "./nonzero-finite-integer.ts";
export * from "./finite.ts";
export * from "./positive-finite.ts";
export * from "./negative-nonzero-finite.ts";
export * from "./finite-integer.ts";
export * from "./integer.ts";
export * from "./nonzero.ts";
export * from "./negative-nonzero-finite-integer.ts";
export * from "./types.ts";
export * from "./zero.ts";
export * from "./positive-integer.ts";
export * from "./number.ts";
export * from "./negative-integer.ts";
export * from "./negative.ts";
export * from "./negative-finite.ts";
export * from "./negative-nonzero-integer.ts";
export * from "./positive.ts";
export * from "./negative-finite-integer.ts";
export * from "./even.ts";
export * from "./nonzero-finite.ts";
export * from "./infinity.ts";
export * from "./positive-infinity.ts";
export * from "./negative-infinity.ts";
export * from "./float.ts";
export * from "./float16.ts";
export * from "./float32.ts";
export * from "./float64.ts";
export * from "./uint8.ts";
export * from "./uint16.ts";
export * from "./uint32.ts";
export * from "./int8.ts";
export * from "./int16.ts";
export * from "./int32.ts";
export * from "./in-range.ts";

export { isPositive as isPositiveNumber } from "./positive.ts";
export { isNegative as isNegativeNumber } from "./negative.ts";
export { isFinite as isFiniteNumber } from "./finite.ts";
export { isNonZero as isNonZeroNumber } from "./nonzero.ts";
export { isEven as isEvenNumber } from "./even.ts";
export { isOdd as isOddNumber } from "./odd.ts";
