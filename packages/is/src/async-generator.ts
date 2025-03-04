import { isAsyncIterableIterator } from "./async-iterable-iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Check if the given value is an async generator, which is an asynchronous
 * iterable iterator (`AsyncIterableIterator`) that was created using the
 * `async function*() { ... }` syntax.
 *
 * This is the type of value **_returned_** when an async generator function
 * (`async function*() {}`) is called. To check for the function itself, use
 * `isAsyncGeneratorFunction` instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is an AsyncGenerator, `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncGenerator } from "jsr:@type/is/async-generator";
 *
 * async function* genFn() { yield await Promise.resolve(1); }
 * const gen = genFn();
 *
 * console.log(isAsyncGenerator(gen)); // true
 * console.log(isAsyncGenerator(genFn)); // false
 * ```
 * @category Generators
 * @module async-generator
 */
// deno-lint-ignore no-explicit-any
export function isAsyncGenerator<T = unknown, TReturn = any, TNext = unknown>(
  it: unknown,
): it is AsyncGenerator<T, TReturn, TNext> {
  return isAsyncIterableIterator(it) && typeof it.return === "function" &&
    typeof it.throw === "function" && isTagged(it, "AsyncGenerator");
}

export default isAsyncGenerator;
