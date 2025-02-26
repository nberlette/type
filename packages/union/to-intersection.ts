/**
 * @module to-intersection
 *
 * This module provides the utility types {@linkcode UnionToIntersection} and
 * {@linkcode UnionToFlatIntersection}, which convert a union (`A | B`) to an
 * intersection (`A & B`) and a flattened intersection, respectively. The
 * flattened intersection type is useful when you have a complex union of
 * object types and want the resulting intersection to be human-readable and
 * easy to work with.
 *
 * @example
 * ```ts
 * import type { UnionToIntersection } from "@type/union/to-intersection";
 *
 * type Characteristics = { name: string } | { age: number };
 * type User = UnionToIntersection<Characteristics>;
 * //    ^? type User = { name: string } & { age: number }
 * ```
 * @example
 * ```ts
 * import type { UnionToFlatIntersection } from "@type/union/to-intersection";
 *
 * type Characteristics = { name: string } | { age: number };
 * type User = UnionToFlatIntersection<Characteristics>;
 * //    ^? type User = { name: string; age: number }
 * ```
 * @category Union
 */

/**
 * Converts a union type (`A | b`) to an intersection type (`A & B`).
 *
 * Note that if the components of the union are not compatible with one
 * another (meaning they are not assignable to each other), the resulting
 * intersection will be reduced to the empty set `never`.
 *
 * Also note that this type **does not** perform any flattening or reshaping
 * of the resulting intersection(s), meaning it will often produce types that
 * look like `{ foo: 1 } & { bar: 2 }` instead of `{ foo: 1; bar: 2 }`. If you
 * want the latter behavior, try {@link UnionToFlatIntersection} instead.
 *
 * @example
 * ```ts
 * type Characteristics = { name: string } | { age: number };
 * type User = UnionToIntersection<Characteristics>;
 * //    ^? type User = { name: string } & { age: number }
 * ```
 *
 * @template U The union type to convert to an intersection type.
 * @category Union
 */
// deno-fmt-ignore
export type UnionToIntersection<U> = (
  U extends unknown ? (U: U) => 0 : never
) extends (I: infer I) => 0 ? I : never;

/**
 * Converts a union type (`A | B`) to a flattened intersection type (`A & B`).
 *
 * This is almost identifcal to {@link UnionToIntersection}, but adds an extra
 * step at the end to flatten the resulting intersection type, attempting to
 * reduce it as close to a single object type as possible.
 *
 * This is useful when you have a complex union of object types and want the
 * resulting intersection to be human-readable and easy to work with.
 *
 * @example
 * ```ts
 * type Characteristics = { name: string } | { age: number };
 * type User = UnionToFlatIntersection<Characteristics>;
 * //    ^? type User = { name: string; age: number }
 *
 * type NotFlatUser = UnionToIntersection<Characteristics>;
 * //    ^? type NotFlatUser = { name: string } & { age: number }
 * ```
 *
 * @template U The union type to convert to a flattened intersection type.
 * @category Union
 */
export type UnionToFlatIntersection<U> = (
  U extends unknown ? (U: U) => 0 : never
) extends (I: infer I) => 0 ? I extends object ? { [K in keyof I]: I[K] } : I
  : never;
