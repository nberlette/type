/**
 * @module template-strings-array
 *
 * Checks if the given value is a template strings array, which is an array of
 * strings with an own property named `raw` that also is an array of strings.
 * This is the type of array provided to tagged template literals for the first
 * argument, represented as the type `TemplateStringsArray` in TypeScript.
 *
 * @remarks
 * This predicate's type is a supertype of the one checked by its more lenient
 * counterpart, {@linkcode isTemplateStringsObject}, which only checks if the
 * value is an object with a `raw` property that is an array of strings.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@type/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * const tag = (strings: TemplateStringsArray, ...values: unknown[]) => {
 *   console.log(isTemplateStringsArray(strings)); // true
 *   return String.raw(strings, ...values);
 * };
 *
 * tag(["a", "b", "c"], 1, 2, 3); // Logs: false
 *
 * tag`a${1}b${2}c${3}`; // Logs: true
 * ```
 * @category Template Literals
 */
import { isArray } from "./array.ts";
import { isString } from "./string.ts";
import { isTemplateStringsObject } from "./template-strings-object.ts";

/**
 * Checks if the given value is a template strings array, which is an array of
 * strings with an own property named `raw` that also is an array of strings.
 * This is the type of array provided to tagged template literals for the first
 * argument, and is represented as the type `TemplateStringsArray` in
 * TypeScript.
 *
 * This predicate's type is a supertype of the one checked by its more lenient
 * counterpart, {@linkcode isTemplateStringsObject}, which only checks if the
 * value is an object with a `raw` property that is an array of strings.
 *
 * @param it The value to check.
 * @returns `true` if the value is a TemplateStringsArray, `false` otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@type/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * const tag = (strings: TemplateStringsArray, ...values: unknown[]) => {
 *   console.log(isTemplateStringsArray(strings)); // true
 *   return String.raw(strings, ...values);
 * };
 *
 * tag(["a", "b", "c"], 1, 2, 3); // Logs: false
 *
 * tag`a${1}b${2}c${3}`; // Logs: true
 * ```
 * @category Template Literals
 */
export function isTemplateStringsArray(
  it: unknown,
): it is TemplateStringsArray {
  return isTemplateStringsObject(it) && isArray(it, isString);
}

/**
 * A template strings array is an array of strings with an own property named
 * `raw` that is also an array of strings. This is the type of array provided
 * to tagged template literals for the first argument, and is represented as
 * the type `TemplateStringsArray` in TypeScript.
 *
 * Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s,
 * not all `TemplateStringsObject`s are `TemplateStringsArray`s.
 *
 * @category Types
 * @tags TemplateStringsArray
 */
export interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: ReadonlyArray<string>;
}

/**
 * A type guard for `TemplateStringsArray` values.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `TemplateStringsArray`, `false` otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@type/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * const tag = (strings: TemplateStringsArray, ...values: unknown[]) => {
 *   console.log(isTemplateStringsArray(strings)); // true
 *   return String.raw(strings, ...values);
 * };
 *
 * tag(["a", "b", "c"], 1, 2, 3); // Logs: false
 *
 * tag`a${1}b${2}c${3}`; // Logs: true
 * ```
 * @category Template Literals
 * @tags TemplateStringsArray
 */
export default isTemplateStringsArray;
