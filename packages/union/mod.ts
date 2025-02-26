/**
 * @module union
 *
 * The `@type/union` module provides a collection of utility types for working
 * with union types in TypeScript. This is a type-only package, so it does not
 * provide any runtime functionality.
 *
 * All utility types are exported as individual named exports, as well as a
 * single namespace export {@linkcode Union}. You can also import individual
 * types directly from their respective submodules, such as `@type/union/is`
 * or `@type/union/keys`.
 *
 * @example
 * ```ts
 * import type { Union } from "@type/union";
 *
 * type ABC = "a" | "b" | "c";
 *
 * type ABCTuple = Union.ToTuple<ABC>;
 * //   ^? type ABCTuple = ["a", "b", "c"]
 *
 * type ABCTuple2 = Union.Is<ABC, Union.ToTuple<ABC>, never>;
 * //   ^? type ABCTuple2 = ["a", "b", "c"]
 * ```
 */
export type * from "./first.ts";
export type * from "./is.ts";
export type * from "./keys.ts";
export type * from "./last.ts";
export type * from "./length.ts";
export type * from "./to-tuple.ts";
export type * from "./to-intersection.ts";

/**
 * The `@type/union` module's namespace provides a collection of utility types
 * for working with union types in TypeScript. This is a type-only package, so
 * it does not provide any runtime functionality. All utility types
 */
export type * as Union from "./_namespace.ts";
