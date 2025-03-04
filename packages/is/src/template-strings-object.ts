/**
 * This module provides a type guard to check if a value is a template strings
 * object, which has a `raw` property containing an array of strings.
 *
 * This type is used to loosely represent the first argument passed to a tagged
 * template function, which is a template strings array.
 *
 * @example
 * ```ts
 * import {
 *   isTemplateStringsObject,
 * } from "jsr:@type/is/template-strings-object";
 *
 * console.log(
 *   isTemplateStringsObject({ raw: ["a", "b", "c"] })
 * ); // true
 *
 * // Additional properties are allowed:
 * console.log(
 *   isTemplateStringsObject({ raw: ["a", "b", "c"], other: 1 })
 * ); // true
 *
 * // Mimicking a template strings array will pass:
 * console.log(
 *   isTemplateStringsObject(Object.assign(["\1"], { raw: ["\\1"] })
 * ); // true
 *
 * // However, just having any old `raw` property is not enough:
 * console.log(
 *   isTemplateStringsObject({ raw: 1 })
 * ); // false
 * ```
 * @module template-strings-object
 */
import { isArray } from "./array.ts";
import { isObjectLike } from "./object-like.ts";
import { isString } from "./string.ts";

/**
 * Checks if the given value is a template strings object, which is an object
 * with a `raw` property that is an array of strings.
 *
 * This type fulfills the requirements of the `String.raw` method without
 * necessarily being an array of strings, as well. Useful for validating
 * template literal call sites in tagged template functions, which often times
 * are called with just a plain object with a `raw` property.
 *
 * For a more strict check see {@linkcode isTemplateStringsArray}, which checks
 * if the value is _also_ an array of strings.
 *
 * @param it The value to check.
 * @returns `true` if the value is a template strings object, `false`
 * otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsObject,
 * } from "jsr:@type/is/template-strings-object";
 *
 * console.log(
 *   isTemplateStringsObject({ raw: ["a", "b", "c"] })
 * ); // true
 *
 * // Additional properties are allowed:
 * console.log(
 *   isTemplateStringsObject({ raw: ["a", "b", "c"], other: 1 })
 * ); // true
 *
 * // Mimicking a template strings array will pass:
 * console.log(
 *   isTemplateStringsObject(Object.assign(["\1"], { raw: ["\\1"] })
 * ); // true
 *
 * // However, just having any old `raw` property is not enough:
 * console.log(
 *   isTemplateStringsObject({ raw: 1 })
 * ); // false
 * ```
 * @category Template Literals
 * @module template-strings-object
 */
export function isTemplateStringsObject(
  it: unknown,
): it is TemplateStringsObject {
  return isObjectLike(it) && "raw" in it && isArray(it.raw, isString);
}

/**
 * A template strings object is an object with a `raw` property containing an
 * array of strings. This type is used to loosely represent the first argument
 * passed to a tagged template function, which is a template strings array.
 *
 * Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s,
 * not all `TemplateStringsObject`s are `TemplateStringsArray`s.
 *
 * @category Template Literals
 */
export interface TemplateStringsObject {
  readonly raw: readonly string[];
}

/** @ignore */
export default isTemplateStringsObject;
