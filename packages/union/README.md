# @type/union

This package provides a set of useful type-level utilities for working with
union types in TypeScript. This is a type-only package with no runtime exports.

## Installation

```bash
deno add jsr:@type/union
```

```bash
npx jsr add @type/union
```

## Usage

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = Union.ToIntersection<A | B | C>;
//   ^? type ABC = { a: string } & { b: number } & { c: boolean }

type ABCKeys = Union.Keys<A | B | C>;
//   ^? type ABCKeys = 'a' | 'b' | 'c'

type ABCValues = Union.Values<A | B | C>;
//   ^? type ABCValues = string | number | boolean

type ABCLast = Union.Last<A | B | C>;
//   ^? type ABCLast = C

type ABCFirst = Union.First<A | B | C>;
//   ^? type ABCFirst = A

type ABCLength = Union.Length<A | B | C>;
//   ^? type ABCLength = 3
```

## API

### `Union.ToIntersection<T>`

Converts a union type `T` into an intersection type. This is useful when you
want to merge multiple types together.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = Union.ToIntersection<A | B | C>;
//   ^? type ABC = { a: string } & { b: number } & { c: boolean }
```

#### Using as a standalone type

```ts
import type { UnionToIntersection } from "@type/union/to-intersection";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = UnionToIntersection<A | B | C>;
//   ^? type ABC = { a: string } & { b: number } & { c: boolean }
```

---

### `Union.ToFlatIntersection<T>`

Converts a union type `T` into a flat intersection type. This is useful when you
want to merge multiple types together, but want the result to be a single, flat
object type rather than multiple intersected subtypes.

Under the hood, this uses the [`Union.ToIntersection`](#uniontointersectiont)
type, and merges the resulting intersection(s) into a single (flat) object.

> [!IMPORTANT]
>
> This type may cause issues with assignability checks in some cases, as it
> infers and creates a new type instead of preserving the originals. If you run
> into issues, try [`Union.ToIntersection`](#uniontointersectiont) instead.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = Union.ToFlatIntersection<A | B | C>;
//   ^? type ABC = { a: string; b: number; c: boolean }
```

#### Using as a standalone type

```ts
import type { UnionToFlatIntersection } from "@type/union/to-flat-intersection";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = UnionToFlatIntersection<A | B | C>;

//   ^? type ABC = { a: string; b: number; c: boolean }
```

---

### `Union.ToTuple<T>`

Converts a union type `T` into a tuple type.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type ABC = "a" | "b" | "c";

type ABCTuple = Union.ToTuple<ABC>;
//   ^? type ABCTuple = ["a", "b", "c"]
```

#### Using as a standalone type

```ts
import type { UnionToTuple } from "@type/union/to-tuple";

type ABC = "a" | "b" | "c";

type ABCTuple = UnionToTuple<ABC>;
//   ^? type ABCTuple = ["a", "b", "c"]
```

---

### `Union.Is<U, True = true, False = false>`

Checks if a type `U` is a union type, returning `True` if it is and `False` if
it is not. You may override the `True` and `False` parameters to implement your
own conditional logic, allowing for more complex types using less boilerplate.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type IsABCUnion = Union.Is<ABC>;
//   ^? type IsABCUnion = true

type IsAUnion = Union.Is<A>;
//   ^? type IsAUnion = false
```

#### Using as a standalone type

```ts
import type { IsUnion } from "@type/union/is";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;

type IsABCUnion = IsUnion<ABC>;
//   ^? type IsABCUnion = true

type IsAUnion = IsUnion<A>;
//   ^? type IsAUnion = false
```

#### Using custom True and False types

```ts
import type { IsUnion } from "@type/union/is";

// omits all entries with union values from a record
type OmitUnions<T> = {
  [K in keyof T as IsUnion<T[K], never, K>]: T[K];
};

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;

type SampleRecord = {
  a: A;
  b: B;
  c: C;
  bc: B | C;
  abc: ABC;
};

type SampleRecordWithoutUnions = OmitUnions<SampleRecord>;
//   ^? type SampleRecordWithoutUnions = {
//     a: A;
//     b: B;
//     c: C;
//   }
```

---

### `Union.Keys<T>`

Extracts the keys from a union type `T`. This is different from the built-in
`keyof T` operator, as that only extracts the _common_ keys between the types.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type NotABCKeys = keyof ABC;
//   ^? type NotABCKeys = never

type ABCKeys = Union.Keys<A | B | C>;
//   ^? type ABCKeys = 'a' | 'b' | 'c'
```

#### Using as a standalone type

```ts
import type { UnionKeys } from "@type/union/keys";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type NotABCKeys = keyof ABC;
//   ^? type NotABCKeys = never

type ABCKeys = UnionKeys<ABC>;
//   ^? type ABCKeys = 'a' | 'b' | 'c'
```

---

### `Union.Last<T>`

Extracts the last type from a union type `T`. Utilizes `UnionToIntersection` and
the concept of function contravariance, as well as TypeScript's established
paradigm of prioritizing the last overload in a union of function signatures.

> **Note**: This type is not guaranteed to be deterministic in all cases, as the
> TypeScript compiler does not treat union types as ordered like it does with
> tuples or intersections.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCLast = Union.Last<ABC>;
//   ^? type ABCLast = C
```

#### Using as a standalone type

```ts
import type { LastInUnion } from "@type/union/last";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCLast = LastInUnion<ABC>;
//   ^? type ABCLast = C
```

---

### `Union.First<T>`

Extracts the first type from a union type `T`. Utilizes `UnionToTuple` to get
the first element from a tuple representation of the union type.

> **Note**: This type is not guaranteed to be deterministic in all cases, as the
> TypeScript compiler does not treat union types as ordered like it does with
> tuples or intersections.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCFirst = Union.First<A | B | C>;
//   ^? type ABCFirst = A
```

#### Using as a standalone type

```ts
import type { FirstInUnion } from "@type/union/first";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCFirst = FirstInUnion<ABC>;
//   ^? type ABCFirst = A
```

---

### `Union.Length<T>`

Extracts the length of a union type `T`. Utilizes `UnionToTuple` to get the
length of a tuple representation of the union type.

> **Note**: This type is not guaranteed to be deterministic in all cases, as the
> TypeScript compiler does not treat union types as ordered like it does with
> tuples or intersections.

#### Using the `Union` namespace

```ts
import type { Union } from "@type/union";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCLength = Union.Length<ABC>;
//   ^? type ABCLength = 3
```

#### Using as a standalone type

```ts
import type { UnionLength } from "@type/union/length";

type A = { a: string };
type B = { b: number };
type C = { c: boolean };

type ABC = A | B | C;
type ABCLength = UnionLength<ABC>;
//   ^? type ABCLength = 3
```

---

<div align="center">

##### [MIT] © [Nicholas Berlette]. All rights reserved.

###### [GitHub] · [Issues] · [Docs] · [JSR] · [NPM]

</div>

[MIT]: https://nick.mit-license.org "MIT License. Copyright © 2024 Nicholas Berlette. All rights reserved."
[Nicholas Berlette]: https://github.com/nberlette "Nicholas Berlette on GitHub"
[GitHub]: https://github.com/nberlette/type/tree/main/packages/union "GitHub Repository for @type/union"
[Issues]: https://github.com/nberlette/type/issues "GitHub Issues for @type/union"
[Docs]: https://n.berlette.com/type/union "Documentation for @type/union"
[JSR]: https://jsr.io/@type/union "Check out @type/union on JSR"
[NPM]: https://www.npmjs.com/package/@type2/union "Check out @type2/union on NPM"
