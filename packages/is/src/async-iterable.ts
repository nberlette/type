/**
 * Checks if a given value is an object with a `Symbol.asyncIterator` method.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `AsyncIterable`, `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncIterable } from "jsr:@type/is/async-iterable";
 *
 * const iter = (async function*() { yield 1; })();
 * console.log(isAsyncIterable(iter)); // true
 * ```
 * @category Iterables
 * @module async-iterable
 */
export function isAsyncIterable<T>(it: unknown): it is AsyncIterable<T> {
  return it != null && Reflect.has(Object(it), Symbol.asyncIterator) &&
    typeof (it as AsyncIterable<T>)[Symbol.asyncIterator] === "function";
}

export default isAsyncIterable;
