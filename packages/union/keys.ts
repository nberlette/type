/**
 * @module keys
 *
 * This module provides the utility type {@link UnionKeys}, which extracts the
 * keys of a given union type. This is different than the built-in `keyof T`
 * operator as that only extracts the _common_ keys of a union type.
 *
 * @example
 * ```ts
 * import type { UnionKeys } from "@type/union/keys";
 *
 * type A = { a: string };
 * type B = { b: number };
 * type C = { c: boolean };
 *
 * type ABC = A | B | C;
 * type NotABCKeys = keyof ABC;
 * //   ^? type NotABCKeys = never
 *
 * type ABCKeys = UnionKeys<A | B | C>;
 * //   ^? type ABCKeys = "a" | "b" | "c"
 * ```
 */

/**
 * Extracts the keys of a given union type. This is different than the built-in
 * `keyof` operator as that only extracts the _common_ keys of a union type.
 *
 * @template T The union type to extract keys from.
 * @example
 * ```ts
 * import type { UnionKeys } from "@type/union/keys"
 *
 * type A = { a: string };
 * type B = { b: number };
 * type C = { c: boolean };
 *
 * type ABC = A | B | C;
 * type NotABCKeys = keyof ABC;
 * //   ^? type NotABCKeys = never
 *
 * type ABCKeys = UnionKeys<A | B | C>;
 * //   ^? type ABCKeys = "a" | "b" | "c"
 * ```
 * @category Union
 */
export type UnionKeys<T> = T extends T ? keyof T : never;
