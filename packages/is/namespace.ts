/**
 * This module provides all of the type guards in the library, renamed into the
 * naming convention of `isString -> is.string`.
 *
 * This is used internally to construct the default export of the library
 * (which is also available as the named `is` export), and also exposed for
 * direct import if desired.
 *
 * @module default
 */

// #region Imports
import arguments_ from "./src/arguments.ts";
import arrayBufferLike from "./src/array-buffer-like.ts";
import arrayBufferView from "./src/array-buffer-view.ts";
import arrayBuffer from "./src/array-buffer.ts";
import arrayIterator, { type ArrayIterator } from "./src/array-iterator.ts";
import arrayLike, {
  type ArrayLikeObject,
  isArrayLikeObject as arrayLikeObject,
} from "./src/array-like.ts";
import array, { isNonEmptyArray, type NonEmptyArray } from "./src/array.ts";
import asyncDisposable from "./src/async-disposable.ts";
import asyncFunction, { type AsyncFunction } from "./src/async-function.ts";
import asyncGeneratorFunction from "./src/async-generator-function.ts";
import asyncGenerator from "./src/async-generator.ts";
import asyncIterableIterator from "./src/async-iterable-iterator.ts";
import asyncIterable from "./src/async-iterable.ts";
import asyncIterableObject, {
  type AsyncIterableObject,
} from "./src/async-iterable-object.ts";
import asyncIterator from "./src/async-iterator.ts";
import bigint, { isBigInt as bigInt } from "./src/bigint.ts";
import bigIntObject from "./src/bigint-object.ts";
import bigInt64Array from "./src/bigint64-array.ts";
import bigUint64Array from "./src/biguint64-array.ts";
import boolean from "./src/boolean.ts";
import booleanObject from "./src/boolean-object.ts";
import both from "./src/both.ts";
import boxedPrimitive from "./src/boxed-primitive.ts";
import bufferSource from "./src/buffer-source.ts";
import class_, { type Class } from "./src/class.ts";
import constructor from "./src/constructor.ts";
import closer, { type Closer } from "./src/closer.ts";
import dataView from "./src/data-view.ts";
import date from "./src/date.ts";
import dateString, { type DateString } from "./src/date-string.ts";
import defined from "./src/defined.ts";
import disposable from "./src/disposable.ts";
import either from "./src/either.ts";
import error from "./src/error.ts";
import empty from "./src/empty.ts";
import falsy, { type Falsy } from "./src/falsy.ts";
import enum_ from "./src/enum.ts";
import float16Array from "./src/float16-array.ts";
import float32Array from "./src/float32-array.ts";
import float64Array from "./src/float64-array.ts";
import function_ from "./src/function.ts";
import generatorFunction from "./src/generator-function.ts";
import generator from "./src/generator.ts";
import identifier, { type Identifier } from "./src/identifier.ts";
import instance, { isInstance } from "./src/instance.ts";
import int16Array from "./src/int16-array.ts";
import int32Array from "./src/int32-array.ts";
import int8Array from "./src/int8-array.ts";
import iterableIterator from "./src/iterable-iterator.ts";
import iterableObject, { type IterableObject } from "./src/iterable-object.ts";
import iterable from "./src/iterable.ts";
import iterator from "./src/iterator.ts";
import keyof, { isKeyOf as keyOf } from "./src/keyof.ts";
import mapIterator, { type MapIterator } from "./src/map-iterator.ts";
import {
  isMapLike as mapLike,
  type MapLike,
  type MapLikeConstructor,
} from "./src/map-like.ts";
import map from "./src/map.ts";
import missing from "./src/missing.ts";
import null_ from "./src/null.ts";
import numberObject from "./src/number-object.ts";
import objectLike from "./src/object-like.ts";
import object, { type ObjectLike } from "./src/object.ts";
import plainObject from "./src/plain-object.ts";
import present from "./src/present.ts";
import primitive, { type Primitive } from "./src/primitive.ts";
import printable, { type Printable } from "./src/printable.ts";
import promiseLike from "./src/promise-like.ts";
import promise from "./src/promise.ts";
import propertyKey from "./src/property-key.ts";
import readableStream from "./src/readable-stream.ts";
import readerSync, { type ReaderSync } from "./src/reader-sync.ts";
import reader, { type Reader } from "./src/reader.ts";
import regexp, { isRegExp as regExp } from "./src/regexp.ts";
import semver, { type SemVer } from "./src/semver.ts";
import setIterator, { type SetIterator } from "./src/set-iterator.ts";
import {
  type ExtendedSetLike,
  type ExtendedSetLikeConstructor,
  isExtendedSetLike,
  isReadonlyCollection,
  isSetLike as setLike,
  type ReadonlyCollection,
  type ReadonlyCollectionConstructor,
  type SetLike,
  type SetLikeConstructor,
  type SupportedSetLike,
  type SupportedSetLikeConstructor,
} from "./src/set-like.ts";
import set from "./src/set.ts";
import sharedArrayBuffer from "./src/shared-array-buffer.ts";
import stringIterator, { type StringIterator } from "./src/string-iterator.ts";
import string from "./src/string.ts";
import stringObject from "./src/string-object.ts";
import symbol from "./src/symbol.ts";
import symbolObject from "./src/symbol-object.ts";
import wellKnownSymbol, {
  type WellKnownSymbol,
} from "./src/well-known-symbol.ts";
import registeredSymbol, {
  type RegisteredSymbol,
} from "./src/registered-symbol.ts";
import uniqueSymbol, { type UniqueSymbol } from "./src/unique-symbol.ts";
import tagged from "./src/tagged.ts";
import {
  isTemplateStringsArray,
  isTemplateStringsObject,
  isTemplateStringsObject as templateLiteral,
} from "./src/template-literal.ts";
import truthy from "./src/truthy.ts";
import typedArray from "./src/typed-array.ts";
import uint16Array from "./src/uint16-array.ts";
import uint32Array from "./src/uint32-array.ts";
import uint8Array from "./src/uint8-array.ts";
import uint8ClampedArray from "./src/uint8-clamped-array.ts";
import undefined_ from "./src/undefined.ts";
import weakKey from "./src/weak-key.ts";
import weakMap from "./src/weak-map.ts";
import weakRef from "./src/weak-ref.ts";
import weakSet from "./src/weak-set.ts";
import writableStream from "./src/writable-stream.ts";
import writerSync, { type WriterSync } from "./src/writer-sync.ts";
import writer, { type Writer } from "./src/writer.ts";
import url from "./src/url.ts";
import urlString from "./src/url-string.ts";
import urlSearchParams from "./src/url-search-params.ts";

// #region Number Guards
import {
  type BigInteger,
  type Cast,
  type CastInt,
  isZero,
  type MaybeZero,
  type NegativeBigInteger,
  type PositiveBigInteger,
  type Unwrap,
  type Zero,
} from "./src/number/mod.ts";
import infinity, { type Infinity } from "./src/number/infinity.ts";
import nan, { type NaN } from "./src/number/nan.ts";
import even, { type Even, type IsEven } from "./src/number/even.ts";
import odd, { type IsOdd, type Odd } from "./src/number/odd.ts";
import float, { type Float } from "./src/number/float.ts";
import float16, {
  type Float16,
  type MaybeFloat16,
} from "./src/number/float16.ts";
import float32, {
  type Float32,
  type MaybeFloat32,
} from "./src/number/float32.ts";
import float64, {
  type Float64,
  type MaybeFloat64,
} from "./src/number/float64.ts";
import integer, {
  type Integer,
  type MaybeInteger,
} from "./src/number/integer.ts";
import int16, { type Int16, type MaybeInt16 } from "./src/number/int16.ts";
import int32, { type Int32, type MaybeInt32 } from "./src/number/int32.ts";
import int8, { type Int8, type MaybeInt8 } from "./src/number/int8.ts";
import negative, {
  type MaybeNegative,
  type Negative,
} from "./src/number/negative.ts";
import positive, {
  type MaybePositive,
  type Positive,
} from "./src/number/positive.ts";
import negativeInfinity, {
  type NegativeInfinity,
} from "./src/number/negative-infinity.ts";
import positiveInfinity, {
  type PositiveInfinity,
} from "./src/number/positive-infinity.ts";
import type {
  PositiveFiniteInteger,
} from "./src/number/positive-finite-integer.ts";
import type {
  NegativeFiniteInteger,
} from "./src/number/negative-finite-integer.ts";
import {
  isNonZeroFiniteInteger,
  type NonZeroFiniteInteger,
} from "./src/number/nonzero-finite-integer.ts";
import {
  isNegativeNonZeroInteger,
  type NegativeNonZeroInteger,
} from "./src/number/negative-nonzero-integer.ts";
import {
  isNegativeNonZeroFiniteInteger,
  type NegativeNonZeroFiniteInteger,
} from "./src/number/negative-nonzero-finite-integer.ts";
import {
  isPositiveNonZeroFiniteInteger,
  type PositiveNonZeroFiniteInteger,
} from "./src/number/positive-nonzero-finite-integer.ts";
import {
  isPositiveNonZeroInteger,
  type PositiveNonZeroInteger,
} from "./src/number/positive-nonzero-integer.ts";
import finiteInteger from "./src/number/finite-integer.ts";
import {
  isNonZeroInteger,
  type NonZeroInteger,
} from "./src/number/nonzero-integer.ts";
import {
  isNegativeInteger,
  type NegativeInteger,
} from "./src/number/negative-integer.ts";
import {
  isPositiveInteger,
  type PositiveInteger,
} from "./src/number/positive-integer.ts";
import {
  isPositiveZero,
  type MaybePositiveZero,
  type PositiveZero,
} from "./src/number/positive-zero.ts";
import {
  isNegativeZero,
  type MaybeNegativeZero,
  type NegativeZero,
} from "./src/number/negative-zero.ts";
import {
  isNegativeNonZeroFiniteNumber as isNegativeNonZeroFinite,
  type MaybeNegativeNonZeroFinite,
  type NegativeNonZeroFinite,
} from "./src/number/negative-nonzero-finite.ts";
import {
  isPositiveNonZeroFiniteNumber as isPositiveNonZeroFinite,
  type MaybePositiveNonZeroFinite,
  type PositiveNonZeroFinite,
} from "./src/number/positive-nonzero-finite.ts";
import {
  isNonZeroFiniteNumber as isNonZeroFinite,
  type MaybeNonZeroFinite,
  type NonZeroFinite,
} from "./src/number/nonzero-finite.ts";
import {
  isNegativeFiniteNumber,
  type MaybeNegativeFinite,
  type NegativeFinite,
} from "./src/number/negative-finite.ts";
import {
  isPositiveFiniteNumber,
  type MaybePositiveFinite,
  type PositiveFinite,
} from "./src/number/positive-finite.ts";
import finite, { type Finite, type MaybeFinite } from "./src/number/finite.ts";
import {
  isNegativeNonZeroNumber as isNegativeNonZero,
  type MaybeNegativeNonZero,
  type NegativeNonZero,
} from "./src/number/negative-nonzero.ts";
import {
  isPositiveNonZeroNumber as isPositiveNonZero,
  type MaybePositiveNonZero,
  type PositiveNonZero,
} from "./src/number/positive-nonzero.ts";
import {
  isNonZero as isNonZeroNumber,
  type MaybeNonZero,
  type NonZero,
} from "./src/number/nonzero.ts";
import { isNumber as number } from "./src/number/number.ts";
import { type InRange, inRange, type Range } from "./src/number/in-range.ts";
import uint16, { type MaybeUint16, type Uint16 } from "./src/number/uint16.ts";
import uint32, { type MaybeUint32, type Uint32 } from "./src/number/uint32.ts";
import uint8, { type MaybeUint8, type Uint8 } from "./src/number/uint8.ts";
// #endregion Number Guards

import type {
  IsAny,
  IsArray,
  IsEqual,
  IsIndexSignature,
  IsLiteral,
  IsLowerCase,
  IsNever,
  IsNonTupleArray,
  IsNumeric,
  IsTuple,
  IsUnknown,
  IsUnknownOrNever,
  IsUpperCase,
  IsWhitespace,
  OmitNever,
} from "./src/types.ts";

// #endregion Imports

/**
 * # `@type/is`
 *
 * Collection of universal type guards for TypeScript and JavaScript projects.
 *
 * ---
 *
 * The `is` export is a module namespace that bundles together **all** the
 * type guards individually available in this library, renaming them into
 * methods in the naming convention of `isString -> is.string`. In total, this
 * object has over 120 different predicates in it, spanning a range of
 * different purposes, types, and use cases.
 *
 * #### Features
 *
 * - **120+ Type Guards**: A comprehensive collection of type guards for
 *  JavaScript and TypeScript projects.
 * - **Tree-Shakeable**: Import only the guards you need to reduce bundle size.
 * - **Well-Documented**: Every guard is thoroughly documented with examples.
 * - **Type-Safe**: Guards are written to be as type-safe as possible.
 * - **Compatible**: Works in Deno, Node, Bun, Browsers, and Cloudflare Workers
 * - **No Dependencies**: No external dependencies, just pure TypeScript.
 * - **Zero Configuration**: Works out of the box with no setup required.
 *
 * #### Chainable API (experimental)
 *
 * The `@type/is` library also offers an experimental chainable API that allows
 * you to compose complex custom type guards from combinations of the built-in
 * predicates, using natural language logical combinators (`and`, `or`, `not`).
 *
 * While this feature is still considered unstable it isn't included in the
 * the default module or the default exports of the library. To use it, you can
 * simply import `is` from `@type/is/chain` instead of `@type/is` - all of the
 * predicates in the default module's `is` object are also available in the
 * chainable module, but have the added ability to be combined together.
 *
 * @example
 * ```ts
 * import { is } from "@type/is/chain";
 *
 * is.string.or.number("hello"); // true
 * is.string.or.number(42); // true
 * is.string.or.number(true); // false
 *
 * is.number.and.not.nan(42); // true
 * is.number.and.not.nan(NaN); // false
 *
 * is.negative.zero(-0); // true
 * is.negative.zero(0); // false
 * ```
 *
 * #### Suggestions
 *
 * If you'd like to see a type guard for a specific type that isn't already
 * included, please open an issue on the GitHub repository. Please include a
 * detailed explanation of the desired type guard and your use case for it, and
 * it will be considered for inclusion in a future release.
 *
 * #### Treeshaking
 *
 * This import type is the most convenient (and least peformant) way to use
 * the library. Since you most likely won't be using _all_ of these methods in
 * any one project, it's typically much more efficient to only import the
 * guards that are actually needed. These are accessible as named exports in
 * granular submodules like `@type/is/string`, `@type/is/array-buffer`, etc.
 *
 * Utilizing this submodule-based approach allows bundlers to tree-shake out
 * the code that is unused, greatly reducing the final file size.
 */
export {
  arguments_ as arguments,
  array,
  arrayBuffer,
  arrayBufferLike,
  arrayBufferView,
  arrayIterator,
  arrayLike,
  arrayLikeObject,
  asyncDisposable,
  asyncFunction,
  asyncGenerator,
  asyncGeneratorFunction,
  asyncIterable,
  asyncIterableIterator,
  asyncIterableObject,
  asyncIterator,
  bigInt,
  bigint,
  bigInt64Array,
  bigIntObject,
  bigIntObject as bigintObject,
  bigUint64Array,
  boolean,
  booleanObject,
  both,
  boxedPrimitive,
  bufferSource,
  class_ as class,
  closer,
  constructor,
  dataView,
  date,
  dateString,
  defined,
  disposable,
  either,
  empty,
  enum_ as enum,
  error,
  even,
  falsy,
  finite,
  finiteInteger,
  float,
  float16,
  float16Array,
  float32,
  float32Array,
  float64,
  float64Array,
  function_ as function,
  generator,
  generatorFunction,
  identifier,
  infinity,
  inRange,
  instance,
  int16,
  int16Array,
  int32,
  int32Array,
  int8,
  int8Array,
  integer,
  isExtendedSetLike as extendedSetLike,
  isInstance as instanceof,
  isNegativeFiniteNumber as negativeFinite,
  isNegativeInteger as negativeInteger,
  isNegativeNonZero as negativeNonZero,
  isNegativeNonZeroFinite as negativeNonZeroFinite,
  isNegativeNonZeroFiniteInteger as negativeNonZeroFiniteInteger,
  isNegativeNonZeroInteger as negativeNonZeroInteger,
  isNegativeZero as negativeZero,
  isNonEmptyArray as nonEmptyArray,
  isNonZeroFinite as nonZeroFinite,
  isNonZeroFiniteInteger as nonZeroFiniteInteger,
  isNonZeroInteger as nonZeroInteger,
  isNonZeroNumber as nonZero,
  isPositiveFiniteNumber as positiveFinite,
  isPositiveInteger as positiveInteger,
  isPositiveNonZero as positiveNonZero,
  isPositiveNonZeroFinite as positiveNonZeroFinite,
  isPositiveNonZeroFiniteInteger as positiveNonZeroFiniteInteger,
  isPositiveNonZeroInteger as positiveNonZeroInteger,
  isPositiveZero as positiveZero,
  isReadonlyCollection as readonlyCollection,
  isTemplateStringsArray as templateStringsArray,
  isTemplateStringsObject as templateStringsObject,
  isZero as zero,
  iterable,
  iterableIterator,
  iterableObject,
  iterator,
  keyOf,
  keyof,
  map,
  mapIterator,
  mapLike,
  missing,
  nan,
  negative,
  negativeInfinity,
  null_ as null,
  number,
  numberObject,
  object,
  objectLike,
  odd,
  plainObject,
  positive,
  positiveInfinity,
  present,
  primitive,
  printable,
  promise,
  promiseLike,
  propertyKey,
  readableStream,
  reader,
  readerSync,
  regExp,
  regexp,
  registeredSymbol,
  semver,
  set,
  setIterator,
  setLike,
  sharedArrayBuffer,
  string,
  stringIterator,
  stringObject,
  symbol,
  symbolObject,
  tagged,
  templateLiteral,
  truthy,
  typedArray,
  uint16,
  uint16Array,
  uint32,
  uint32Array,
  uint8,
  uint8Array,
  uint8ClampedArray,
  undefined_ as undefined,
  uniqueSymbol,
  url,
  urlSearchParams,
  urlString,
  weakKey,
  weakMap,
  weakRef,
  weakSet,
  wellKnownSymbol,
  writableStream,
  writer,
  writerSync,
};

// #region Exports

// #region Functions
// export {
//   isArguments,
//   isArray,
//   isArrayBuffer,
//   isArrayBufferLike,
//   isArrayBufferLike as isAnyArrayBuffer,
//   isArrayBufferView,
//   isArrayIterator,
//   isArrayLike,
//   isArrayLikeObject,
//   isAsyncDisposable,
//   isAsyncFunction,
//   isAsyncGenerator,
//   isAsyncGeneratorFunction,
//   isAsyncIterable,
//   isAsyncIterableIterator,
//   isAsyncIterableObject,
//   isAsyncIterator,
//   isBigInt,
//   isBigInt64Array,
//   isBigIntObject,
//   isBigUint64Array,
//   isBoolean,
//   isBooleanObject,
//   isBoth,
//   isBoxedPrimitive,
//   isBufferSource,
//   isClass,
//   isCloser,
//   isConstructor,
//   isDataView,
//   isDate,
//   isDateString,
//   isDefined,
//   isDisposable,
//   isEither,
//   isEmpty,
//   isEnum,
//   isError,
//   isEven,
//   isExtendedSetLike,
//   isExtendedSetLikeConstructor,
//   isFalsy,
//   isFinite,
//   isFiniteInteger,
//   isFiniteNumber,
//   isFloat,
//   isFloat16,
//   isFloat16Array,
//   isFloat32,
//   isFloat32Array,
//   isFloat64,
//   isFloat64Array,
//   isFunction,
//   isGenerator,
//   isGeneratorFunction,
//   isIdentifier,
//   isInfinity,
//   isInRange,
//   isInstance,
//   isInt16,
//   isInt16Array,
//   isInt32,
//   isInt32Array,
//   isInt8,
//   isInt8Array,
//   isInteger,
//   isIterable,
//   isIterableIterator,
//   isIterableObject,
//   isIterator,
//   isKeyOf,
//   isMap,
//   isMapIterator,
//   isMapLike,
//   isMapLikeConstructor,
//   isMissing,
//   isNaN,
//   isNegative,
//   isNegativeFinite,
//   isNegativeFiniteInteger,
//   isNegativeFiniteNumber,
//   isNegativeInfinity,
//   isNegativeInteger,
//   isNegativeNonZeroFinite,
//   isNegativeNonZeroFiniteInteger,
//   isNegativeNonZeroFiniteNumber,
//   isNegativeNumber,
//   isNegativeZero,
//   isNonEmptyArray,
//   isNonZero,
//   isNonZeroFinite,
//   isNonZeroFiniteInteger,
//   isNonZeroFiniteNumber,
//   isNonZeroInteger,
//   isNonZeroNumber,
//   isNull,
//   isNumber,
//   isNumberObject,
//   isObject,
//   isObjectLike,
//   isOdd,
//   isPlainObject,
//   isPositive,
//   isPositiveFinite,
//   isPositiveFiniteInteger,
//   isPositiveFiniteNumber,
//   isPositiveInfinity,
//   isPositiveInteger,
//   isPositiveNonZero,
//   isPositiveNonZeroFinite,
//   isPositiveNonZeroFiniteInteger,
//   isPositiveNonZeroFiniteNumber,
//   isPositiveNonZeroNumber,
//   isPositiveNumber,
//   isPositiveZero,
//   isPresent,
//   isPrimitive,
//   isPrintable,
//   isPromise,
//   isPromiseLike,
//   isPropertyKey,
//   isReadableStream,
//   isReader,
//   isReaderSync,
//   isReadonlyCollection,
//   isReadonlyCollectionConstructor,
//   isRegExp,
//   isRegisteredSymbol,
//   isSemVer,
//   isSet,
//   isSetIterator,
//   isSetLike,
//   isSetLikeConstructor,
//   isSharedArrayBuffer,
//   isString,
//   isStringIterator,
//   isStringObject,
//   isSymbol,
//   isSymbolObject,
//   isTagged,
//   isTruthy,
//   isTypedArray,
//   isUint16,
//   isUint16Array,
//   isUint32,
//   isUint32Array,
//   isUint8,
//   isUint8Array,
//   isUint8ClampedArray,
//   isUndefined,
//   isUniqueSymbol,
//   isURL,
//   isURLSearchParams,
//   isURLString,
//   isWeakKey,
//   isWeakMap,
//   isWeakRef,
//   isWeakSet,
//   isWellKnownSymbol,
//   isWritableStream,
//   isWriter,
//   isWriterSync,
//   isZero,
// };
// #endregion Functions

// #region Type Aliases
export type {
  ArrayIterator,
  ArrayLikeObject,
  AsyncFunction,
  AsyncIterableObject,
  BigInteger,
  Cast,
  CastInt,
  Class,
  Closer,
  DateString,
  Even,
  ExtendedSetLike,
  ExtendedSetLikeConstructor,
  Falsy,
  Finite,
  Float,
  Float16,
  Float32,
  Float64,
  Float64 as Double,
  Identifier,
  Infinity,
  InRange,
  Int16,
  Int32,
  Int8,
  Integer,
  IsEven,
  IsOdd,
  IterableObject,
  MapIterator,
  MapLike,
  MapLikeConstructor,
  MaybeFinite,
  MaybeFloat16,
  MaybeFloat32,
  MaybeFloat64,
  MaybeInt16,
  MaybeInt32,
  MaybeInt8,
  MaybeInteger,
  MaybeNegative,
  MaybeNegativeFinite,
  MaybeNegativeNonZero,
  MaybeNegativeNonZeroFinite,
  MaybeNegativeZero,
  MaybeNonZero,
  MaybeNonZeroFinite,
  MaybePositive,
  MaybePositiveFinite,
  MaybePositiveNonZero,
  MaybePositiveNonZeroFinite,
  MaybePositiveZero,
  MaybeUint16,
  MaybeUint32,
  MaybeUint8,
  MaybeZero,
  NaN,
  Negative,
  NegativeBigInteger,
  NegativeFinite,
  NegativeFiniteInteger,
  NegativeInfinity,
  NegativeInteger,
  NegativeNonZero,
  NegativeNonZeroFinite,
  NegativeNonZeroFiniteInteger,
  NegativeNonZeroInteger,
  NegativeZero,
  NonEmptyArray,
  NonZero,
  NonZeroFinite,
  NonZeroFiniteInteger,
  NonZeroInteger,
  ObjectLike,
  Odd,
  Positive,
  PositiveBigInteger,
  PositiveFinite,
  PositiveFiniteInteger,
  PositiveInfinity,
  PositiveInteger,
  PositiveNonZero,
  PositiveNonZeroFinite,
  PositiveNonZeroFiniteInteger,
  PositiveNonZeroInteger,
  PositiveZero,
  Primitive,
  Printable,
  Range,
  Reader,
  ReaderSync,
  ReadonlyCollection,
  ReadonlyCollectionConstructor,
  RegisteredSymbol,
  SemVer,
  SetIterator,
  SetLike,
  SetLikeConstructor,
  StringIterator,
  SupportedSetLike,
  SupportedSetLikeConstructor,
  Uint16,
  Uint32,
  Uint8,
  UniqueSymbol,
  Unwrap,
  WellKnownSymbol,
  Writer,
  WriterSync,
  Zero,
};
// #endregion Type Aliases

// #region Type-Level Guards
export type {
  IsAny,
  IsArray,
  IsEqual,
  IsIndexSignature,
  IsLiteral,
  IsLowerCase,
  IsNever,
  IsNonTupleArray,
  IsNumeric,
  IsTuple,
  IsUnknown,
  IsUnknownOrNever,
  IsUpperCase,
  IsWhitespace,
  OmitNever,
};
// #endregion Type-Level Guards

// #endregion Exports
