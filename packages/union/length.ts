import type { UnionToTuple } from "./to-tuple.ts";

/**
 * @module length
 *
 * This module provides the utility type {@link UnionLength}, which gets the
 * length of a union type (the number of elements it contains). This is
 * accomplished by leveraging the {@link UnionToTuple} utility type to convert
 * the union into a tuple, from which the `length` property can be read to get
 * a literal number measuring the union's size.
 *
 * @example
 * ```ts
 * import type { UnionLength } from "@type/union/length";
 *
 * type ABC = "a" | "b" | "c";
 * type ABCLength = Length<ABC>;
 * //   ^? type ABCLength = 3
 * ```
 * @category Union
 */

/**
 * Gets the length of a union type (the number of elements it contains).
 *
 * This is accomplished by leveraging the {@link UnionToTuple} utility type to
 * convert the union into a tuple, from which the `length` property can be read
 * to get a literal number of the union's length.
 *
 * @template T The union type to get the length of.
 * @example
 * ```ts
 * import type { UnionLength } from "@type/union"
 *
 * type ABC = "a" | "b" | "c"
 * type ABCLength = Length<ABC>;
 * //   ^? type ABCLength = 3
 * ```
 * @category Union
 */
export type UnionLength<T> = UnionToTuple<T> extends {
  length: infer L extends number;
} ? L
  : never;
