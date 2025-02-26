import type { UnionToIntersection } from "./to-intersection.ts";

/**
 * @module last
 *
 * This module provides the utility type {@linkcode LastInUnion}, which uses
 * the type {@linkcode UnionToIntersection} and functional contravariance to
 * extract the last type in a union.
 *
 * @remarks
 * Please note there is **no true guarantee** this type will always return the
 * same type for any given union, since TypeScript does not enforce a specific
 * ordering in unions like it does in tuples and intersections. This is not a
 * limitation of this type, but rather a design characteristic of the compiler
 * itself that we have to work with and around. Recent versions of TypeScript
 * (5.3+) seem to produce relatively consistent results when using this utility
 * with unions of literal types.
 *
 * @example
 * ```ts
 * import type { LastInUnion } from "@type/union"
 *
 * type Characters = {
 *   A: "Ana",
 *   B: "Bob",
 *   C: "Curt",
 *   D: "David",
 *   E: "Eve",
 *   F: "Frank",
 * };
 * type Category = keyof Characters;
 * //   ^? type Category = "A" | "B" | "C" | "D" | "E" | "F"
 * type Character = Characters[Category];
 * //   ^? type Character = "Ana" | "Bob" | "Curt" | "David" | "Eve" | "Frank"
 * type LastCategory = LastInUnion<Category>;
 * //   ^? type LastCategory = "F"
 * type LastCharacter1 = Characters[LastCategory];
 * //   ^? type LastCharacter1 = "Frank"
 * type LastCharacter2 = LastInUnion<Character>;
 * //   ^? type LastCharacter2 = "Frank"
 * ```
 * @category Union
 */

/**
 * Extracts the last type in a union.
 *
 * This is accomplished by leveraging the {@link UnionToIntersection} utility
 * type to convert the union into an intersection, from which the `last` type
 * can be read to get the last type in the union.
 *
 * @template U The union type to extract the last type from.
 * @example
 * ```ts
 * import type { LastInUnion } from "@type/union"
 *
 * type Characters = {
 *   A: "Ana",
 *   B: "Bob",
 *   C: "Curt",
 *   D: "David",
 *   E: "Eve",
 *   F: "Frank",
 * };
 * type Category = keyof Characters;
 * //   ^? type Category = "A" | "B" | "C" | "D" | "E" | "F"
 * type Character = Characters[Category];
 * //   ^? type Character = "Ana" | "Bob" | "Curt" | "David" | "Eve" | "Frank"
 * type LastCategory = LastInUnion<Category>;
 * //   ^? type LastCategory = "F"
 * type LastCharacter1 = Characters[LastCategory];
 * //   ^? type LastCharacter1 = "Frank"
 * type LastCharacter2 = LastInUnion<Character>;
 * //   ^? type LastCharacter2 = "Frank"
 * ```
 * @category Union
 */
export type LastInUnion<U> =
  UnionToIntersection<U extends unknown ? (U: U) => 0 : never> extends
    (x: infer L) => 0 ? L : never;
