import type { UnionToTuple } from "./to-tuple.ts";

/**
 * @module first
 *
 * This module provides the utility type {@linkcode FirstInUnion}, which
 * extracts the first type in a union. Unlike the `LastInUnion` type provided
 * by the `@type/union` package, this is implemented using {@link UnionToTuple}
 * to extract the first element from the union's tuple representation.
 *
 * @example
 * ```ts
 * import type { FirstInUnion } from "@type/union/first";
 *
 * type Characters = {
 *   A: "Ana",
 *   B: "Bob",
 *   C: "Curt",
 *   D: "David",
 * };
 *
 * type Category = keyof Characters;
 * //   ^? type Category = "A" | "B" | "C" | "D"
 *
 * type Character = Characters[Category];
 * //   ^? type Character = "Ana" | "Bob" | "Curt" | "David"
 *
 * type FirstCategory = FirstInUnion<Category>;
 * //   ^? type FirstCategory = "A"
 *
 * type FirstCharacter1 = Characters[FirstCategory];
 * //   ^? type FirstCharacter1 = "Ana"
 *
 * type FirstCharacter2 = FirstInUnion<Character>;
 * //   ^? type FirstCharacter2 = "Ana"
 * ```
 * @category Union
 */

/**
 * Extracts the first type in a union.
 *
 * This is accomplished by leveraging the {@link UnionToTuple} utility type to
 * convert the union into a tuple, from which the `first` type can be read to
 * get the first type in the union.
 *
 * @template U The union type to extract the first type from.
 * @example
 * ```ts
 * import type { FirstInUnion } from "@type/union/first";
 *
 * type Characters = {
 *  A: "Ana",
 *   B: "Bob",
 *   C: "Curt",
 *   D: "David",
 * };
 *
 * type Category = keyof Characters;
 * //   ^? type Category = "A" | "B" | "C" | "D"
 *
 * type Character = Characters[Category];
 * //   ^? type Character = "Ana" | "Bob" | "Curt" | "David"
 *
 * type FirstCategory = FirstInUnion<Category>;
 * //   ^? type FirstCategory = "A"
 *
 * type FirstCharacter1 = Characters[FirstCategory];
 * //   ^? type FirstCharacter1 = "Ana"
 *
 * type FirstCharacter2 = FirstInUnion<Character>;
 * //   ^? type FirstCharacter2 = "Ana"
 * ```
 * @category Union
 */
// deno-fmt-ignore
export type FirstInUnion<U> =
  | UnionToTuple<U> extends [infer F, ...unknown[]] ? F : never;
