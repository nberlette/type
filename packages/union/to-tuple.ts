import type { LastInUnion } from "./last.ts";

/**
 * @module to-tuple
 *
 * This module provides the utility types {@linkcode UnionToTuple} and
 * {@linkcode UnionToReadonlyTuple}, which convert a union type (`A | B`) to a
 * tuple (`[A, B]`) and a readonly tuple (`readonly [A, B]`), respectively.
 *
 * @example
 * ```ts
 * import type { UnionToTuple } from "@type/union/to-tuple";
 *
 * type ABC = "a" | "b" | "c";
 * type ABCTuple = UnionToTuple<ABC>;
 * //   ^? type ABCTuple = ["a", "b", "c"]
 * ```
 * @category Union
 */

/**
 * Converts a union type (`A | B`) to a tuple type `[A, B]`.
 *
 * This type is useful when you want to extract the individual components of a
 * union type and operate on them as a list.
 *
 * @template U The union type to convert to a tuple.
 * @template [Fallback=[]] An optional fallback type if the union is empty
 * or the conversion fails. Defaults to an empty tuple (`[]`).
 * @example
 * ```ts
 * import type { UnionToTuple } from "@type/union"
 *
 * type ABC = "a" | "b" | "c"
 * type ABCTuple = UnionToTuple<ABC>;
 * //   ^? type ABCTuple = ["a", "b", "c"]
 * ```
 * @category Union
 */
// deno-fmt-ignore
export type UnionToTuple<U, Fallback = []> =
  | UnionToTupleWorker<U, Fallback> extends infer T extends readonly unknown[]
    ? T
  : Fallback;

/**
 * Converts a union type (`A | B`) to a tuple type `readonly [A, B]`.
 *
 * This type is useful when you want to extract the individual components of a
 * union type and operate on them as a list, and must satisfy type constraints
 * that require the tuple be readonly. It is similar to {@link UnionToTuple},
 * but the resulting tuple is a non-mutable, readonly tuple.
 *
 * @template U The union type to convert to a readonly tuple.
 * @template [Fallback=readonly []] An optional fallback type if the union is
 * empty or the conversion fails. Defaults to an empty tuple (`readonly []`).
 * @example
 * ```ts
 * import type { UnionToReadonlyTuple } from "@type/union"
 *
 * type ABC = "a" | "b" | "c"
 * type ABCTuple = UnionToReadonlyTuple<ABC>;
 * //   ^? type ABCTuple = readonly ["a", "b", "c"]
 * ```
 * @category Union
 */
// deno-fmt-ignore
export type UnionToReadonlyTuple<U, Fallback = readonly []> =
  | UnionToTupleWorker<U, Fallback> extends infer T extends readonly unknown[]
    ? readonly [...T]
  : Fallback;

// deno-fmt-ignore
type UnionToTupleWorker<U, Last = LastInUnion<U>, Fallback = []> =
  | [U] extends [never] ? Fallback
  : [...UnionToTupleWorker<Exclude<U, Last>>, Last];
