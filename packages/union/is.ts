/**
 * @module is
 *
 * This module provides the utility type {@linkcode IsUnion}, which checks if a
 * type is a union type. Credit goes to Ron Buckton for this approach.
 *
 * @example
 * ```ts
 * import type { IsUnion } from "@type/union/is";
 *
 * type ABC = "a" | "b" | "c";
 * type D = "d";
 *
 * type IsABCUnion = IsUnion<ABC>;
 * //   ^? type IsABCUnion = true
 *
 * type IsDUnion = IsUnion<D>;
 * //   ^? type IsDUnion = false
 * ```
 * @category Union
 */

/**
 * Checks if a type is a union type.
 *
 * @template U The type to check.
 * @template [True=true] The type to return if `U` is a union type. Defaults to `true`.
 * @template [False=false] The type to return if `U` is not a union type. Defaults to `false`.
 * @example
 * ```ts
 * import type { IsUnion } from "@type/union"
 *
 * type ABC = "a" | "b" | "c";
 * type D = "d";
 *
 * type IsABCUnion = IsUnion<ABC>;
 * //   ^? type IsABCUnion = true
 *
 * type IsDUnion = IsUnion<D>;
 * //   ^? type IsDUnion = false
 * ```
 * @category Union
 */
export type IsUnion<U, True = true, False = false> = [U] extends [never] ? False
  : IsUnionWorker<U, [U], True, False>;

// deno-fmt-ignore
type IsUnionWorker<A, B, True, False> =
  | A extends unknown
    ? Same<[A], [B]> extends infer R
      ? [R] extends [never] ? never
      : R extends false ? True
      : False
    : never
  : never;

// deno-fmt-ignore
type Same<A, B> =
  | [A] extends [never]
    ? [B] extends [never] ? true
    : false
  : [B] extends [never] ? false
  : [A, B] extends [B, A] ? true
  : false;
