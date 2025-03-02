// deno-lint-ignore-file ban-types
/**
 * Expansive collection of dependency-free modular type guard utilities, built
 * to be platform-agnostic and compatible with virtually all modern JavaScript
 * and TypeScript runtime environments.
 *
 * Developed with a focus on performance, reliability, and ease of use, this
 * library provides a comprehensive set of tree-shakeable modules for a wide
 * variety of different types. It also provides numerous type-level predicates
 * and utilities for querying and narrowing types on a purely type-level basis.
 *
 * ## Install
 *
 * The primary distribution channel for this package is [JSR].
 *
 * #### Deno
 *
 * If you're running Deno 2.x, JSR is built right into the Deno CLI:
 *
 * ```sh
 * deno add jsr:@type/is
 * ```
 *
 * #### Bun, PNPM, Yarn, NPM
 *
 * You can also install `@type/is` right into any Node codebase using the `jsr`
 * CLI, either via `npx` or an equivalent from your package manager of choice:
 *
 * ```sh
 * npx jsr add @type/is
 * ```
 *
 * ```sh
 * bunx jsr add @type/is
 * ```
 *
 * ```sh
 * pnpm dlx jsr add @type/is
 * ```
 *
 * ```sh
 * yarn dlx jsr add @type/is
 * ```
 *
 * ## Usage
 *
 * The recommended way to use the functions in this library is to import them
 * on an as-needed basis, directly from their respective submodules. [^1]
 *
 * [^1]: Known as "tree-shaking", bundlers like [esbuild] and [rollup] tend to
 * favor codebases that use explicitly-named, granular imports rather than the
 * "barrel" imports which include everything regardless of if it's been used.
 * This is because tree-shaking relies on static analysis of the codebase to
 * identify and remove any unused code; and this is **much** easier to do when
 * the code is organized in a way that makes it obvious what is and isn't used
 * in the codebase.
 *
 * ```ts
 * import { isString } from "@type/is/string";
 * import { isNumber } from "@type/is/number";
 * import { isFiniteInteger } from "@type/is/number/finite-integer";
 * ```
 *
 * #### Naming Conventions
 *
 * The naming conventions between submodules and their respective type guards
 * is consistent throughout the library. Type guard functions all begin with
 * the prefix `is`, followed by the PascalCase name of the type they check for.
 * The submodule name is the same, but in kebab-case:
 *
 * ```ts
 * import { isArrayBuffer } from "@type/is/array-buffer";
 * import { isArrayBufferView } from "@type/is/array-buffer-view";
 * import { isIterableIterator } from "@type/is/iterable-iterator";
 * import { isReadableStream } from "@type/is/readable-stream";
 * import { isString } from "@type/is/string";
 * ```
 *
 * > [!TIP]
 * >
 * > For added convenience, each submodule also exposes its type guard as the
 * > default export of the module, allowing you to easily rename the function
 * > to suit your project's naming conventions.
 *
 * ### Everything, All at Once
 *
 * The `@type/is` project also exposes **all** of its type guards as named
 * exports from the root module, allowing you to import everything at once.
 *
 * #### Individual Named Imports
 *
 * ```ts
 * import { isString, isNumber } from "@type/is";
 *
 * console.assert(isString("@type/is")); // OK
 * console.assert(isNumber(0)) // OK
 * ```
 *
 * > [!TIP]
 * >
 * > Once you've determined which type guards your codebase actually needs, its
 * > recommended that you migrate to explicit named imports for tree-shaking,
 * > quicker build times, and a smaller bundle size.
 *
 * #### Default Export (`is`)
 *
 * The root module also provides a namespaced re-export of **every** guard
 * in the library as the default export, also exported as the named `is`
 * export for added convenience.
 *
 * ```ts
 * import is from "@type/is";
 *
 * console.assert(is.string("@type/is")); // OK
 * console.assert(is.number(0)) // OK
 * ```
 *
 * #### Named Export (`is`)
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * console.assert(is.string("@type/is")); // OK
 * console.assert(is.number(0)) // OK
 * ```
 *
 * #### Namespace Re-export (`@type/is/namespace`)
 *
 * The named `is` export from the root module is actually a namespace re-export
 * from the `@type/is/namespace` module, which exports all of the type guards
 * in the library as named exports, but without the `is` prefix in their names.
 *
 * ```ts
 * import * as is from "@type/is/namespace";
 *
 * console.assert(is.string("@type/is")); // OK
 * console.assert(is.number(0)) // OK
 * ```
 *
 * > This is not recommended for use in production code, as it includes all of
 * > the 160+ type guards in the library. It's suggested to migrate to explicit
 * > named imports as your codebase progresses from rapid prototyping into the
 * > stable/production phase.
 *
 * In production code, it's considered best practice to import only the exact
 * modules that your codebase needs. It's also suggested to pin dependencies to
 * the exact version that your codebase was developed and tested against.
 *
 * In development environments, however, these practices can often be a bit of
 * a nuisance, and can slow down the pace of development. It's often much more
 * conducive to rapid iteration to import _more_ than what you'll end up using
 * in the final build, typically using the latest version of the library. This
 * allows you to quickly prototype and experiment with the newest APIs, without
 * having to decide which one's you're going to need in advance.
 *
 * ---
 *
 * ## Type Guards
 *
 * > **Note**: This is not an exhaustive list of all the guards included in the
 * > `@type/is` package. Refer to the [API documentation] for a complete list
 * > of the available type guards in the library.
 *
 * [API Documentation]: https://jsr.io/@type/is/-/doc
 *
 * ### Primitives
 *
 * #### `is.null` / `isNull`
 *
 * Checks if a given value is `null`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.null(null); // true
 * is.null(undefined); // false
 * ```
 *
 * #### `is.undefined` / `isUndefined`
 *
 * Checks if a given value is `undefined`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.undefined(undefined); // true
 * is.undefined(null); // false
 * ```
 *
 * #### `is.nullish` / `is.missing` / `isMissing`
 *
 * Checks if a given value is `null` or `undefined`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.nullish(null); // true
 * is.nullish(undefined); // true
 * is.nullish(0); // false
 * ```
 *
 * #### `is.defined` / `isDefined`
 *
 * Checks if a given value is **_not_** `undefined`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.defined(0); // true
 * is.defined(undefined); // false
 * ```
 *
 * #### `is.string` / `isString`
 *
 * Checks if a given value is a `string`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.string("hello"); // true
 * is.string(0); // false
 * ```
 *
 * #### `is.number` / `isNumber`
 *
 * Checks if a given value is a `number`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.number(0); // true
 * is.number("hello"); // false
 * ```
 *
 * #### `is.symbol` / `isSymbol`
 *
 * Checks if a given value is a `symbol`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.symbol(Symbol()); // true
 * is.symbol("hello"); // false
 * ```
 *
 * #### `is.bigint` / `isBigInt`
 *
 * Checks if a given value is a `bigint`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.bigint(BigInt(0)); // true
 * is.bigint(0); // false
 * ```
 *
 * #### `is.boolean` / `isBoolean`
 *
 * Checks if a given value is a `boolean`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.boolean(true); // true
 * is.boolean(0); // false
 * ```
 *
 * #### `is.function` / `isFunction`
 *
 * Checks if a given value is a `function`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.function(() => {}); // true
 * is.function(0); // false
 * ```
 *
 * #### `is.propertyKey` / `isPropertyKey`
 *
 * Checks if a given value is a valid property key, meaning it is either a
 * `string` or a `symbol`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.propertyKey("hello"); // true
 * is.propertyKey(Symbol()); // true
 * is.propertyKey(0); // false
 * ```
 *
 * #### `is.identifier` / `isIdentifier`
 *
 * Checks if a given value is a valid ECMAScript identifier, meaning it is a
 * `string` that is not a reserved word and is a valid identifier name.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.identifier("hello"); // true
 * is.identifier("if"); // false
 * ```
 *
 * ---
 *
 * ### Objects
 *
 * #### `is.object` / `isObject`
 *
 * Checks if a given value is an `object`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.object({}); // true
 * is.object([]); // true
 * is.object(() => {}); // false
 * is.object(null); // false
 * ```
 *
 * #### `is.objectLike` / `isObjectLike`
 *
 * Checks if a given value is object-like, meaning it is not `null` and is not
 * a primitive value.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.objectLike({}); // true
 * is.objectLike([]); // true
 * is.objectLike(() => {}); // true
 * is.objectLike(null); // false
 * ```
 *
 * #### `is.plainObject` / `isPlainObject`
 *
 * Checks if a given value is a plain object, meaning it is an object that was
 * created with the `Object` constructor or a literal object.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.plainObject({}); // true
 * is.plainObject(Object.create(null)); // true
 * is.plainObject(new Map()); // false
 * ```
 *
 * ---
 *
 * ### Async/Await
 *
 * #### `is.promise` / `isPromise`
 *
 * Checks if a given value is a `Promise` object.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const promise = new Promise(() => {});
 * is.promise(promise); // true
 * is.promise(0); // false
 * ```
 *
 * #### `is.promiseLike` / `isPromiseLike`
 *
 * Checks if a given value is a thenable, meaning it has a `then` method.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const promise = { then() {} };
 * is.promiseLike(promise); // true
 * is.promiseLike(0); // false
 * ```
 *
 * ---
 *
 * ### Indexed Collections
 *
 * #### `is.array` / `isArray`
 *
 * Checks if a given value is an array.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.array([]); // true
 * is.array({}); // false
 * ```
 *
 * #### `is.arrayLike` / `isArrayLike`
 *
 * Checks if a given value is array-like, meaning it has a `length` property
 * and its elements can be accessed using integer indices.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.arrayLike([]); // true
 * is.arrayLike("hello"); // true
 * is.arrayLike({}); // false
 * ```
 *
 * #### `is.arrayLikeObject` / `isArrayLikeObject`
 *
 * Checks if a given value is an array-like object, meaning it is an object
 * with a `length` property and its elements can be accessed using integer
 * indices.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.arrayLikeObject([]); // true
 * is.arrayLikeObject("hello"); // false
 * is.arrayLikeObject({}); // false
 * ```
 *
 * ---
 *
 * ### Keyed Collections
 *
 * #### `is.map` / `isMap`
 *
 * Checks if a given value is a `Map` object. This is more reliable than the
 * `it instanceof Map` method, as it will work across different realms and
 * environments, and it does not consider objects that were not created with
 * `new Map()` to be instances of a `Map`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const map = new Map();
 * is.map(map); // true
 * is.map({}); // false
 * ```
 *
 * #### `is.set` / `isSet`
 *
 * Checks if a given value is a `Set` object. This is more reliable than the
 * `it instanceof Set` method, as it will work across different realms and
 * environments, and it does not consider objects that were not created with
 * `new Set()` to be instances of a `Set`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const set = new Set();
 * is.set(set); // true
 * is.set({}); // false
 * ```
 *
 * ---
 *
 * ### Weak Collections
 *
 * #### `is.weakMap` / `isWeakMap`
 *
 * Checks if a given value is a `WeakMap` object. This is more reliable than
 * the `it instanceof WeakMap` method, as it will work across different realms
 * and environments, and it does not consider objects that were not created
 * with `new WeakMap()` to be instances of a `WeakMap`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const weakMap = new WeakMap();
 * is.weakMap(weakMap); // true
 * is.weakMap({}); // false
 * ```
 *
 * #### `is.weakSet` / `isWeakSet`
 *
 * Checks if a given value is a `WeakSet` object. This is more reliable than
 * the `it instanceof WeakSet` method, as it will work across different realms
 * and environments, and it does not consider objects that were not created
 * with `new WeakSet()` to be instances of a `WeakSet`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const weakSet = new WeakSet();
 * is.weakSet(weakSet); // true
 * is.weakSet({}); // false
 * ```
 *
 * #### `is.weakRef` / `isWeakRef`
 *
 * Checks if a given value is a `WeakRef` object. This is more reliable than
 * the `it instanceof WeakRef` method, as it will work across different realms
 * and environments, and it does not consider objects that were not created
 * with `new WeakRef()` to be instances of a `WeakRef`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const weakRef = new WeakRef({});
 *
 * is.weakRef(weakRef); // true
 * is.weakRef({}); // false
 * ```
 *
 * #### `is.weakKey` / `isWeakKey`
 *
 * Checks if a given value is suitable for use as a key in a `WeakMap` or
 * `WeakSet`, or as a target value in a `WeakRef`. This type of value will
 * always include `object` and `Function` types, and depending on the runtime's
 * ECMAScript version, may also include non-registered `symbol`s.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.weakKey({}); // true
 * is.weakKey(() => {}); // true
 * is.weakKey(Symbol()); // true
 * is.weakKey(0); // false
 * ```
 *
 * ---
 *
 * ### Iterables
 *
 * #### `is.iterable` / `isIterable`
 *
 * Checks if a given value is an iterable with a `Symbol.iterator` method.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * is.iterable([]); // true
 * is.iterable("hello"); // true
 * is.iterable(0); // false
 * ```
 *
 * #### `is.iterator` / `isIterator`
 *
 * Checks if a given value is an iterator, meaning it has a `next` method that
 * returns an object with `value` and `done` properties.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const iterator = [][Symbol.iterator]();
 * is.iterator(iterator); // true
 * is.iterator("hello"); // false
 * ```
 *
 * #### `is.iterableIterator` / `isIterableIterator`
 *
 * Checks if a given value is an `IterableIterator` implementation, meaning it
 * is
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const iterator = [][Symbol.iterator]();
 * const iterable = { *[Symbol.iterator]() { yield 1 } };
 *
 * is.iterableIterator(iterable); // false
 * is.iterableIterator(iterable[Symbol.iterator]()); // true
 * is.iterableIterator(iterator); // true
 * ```
 *
 * #### `is.asyncIterable` / `isAsyncIterable`
 *
 * Checks if a given value is an async iterable object, meaning it has a
 * `Symbol.asyncIterator` method, and therefore is an implementation of the
 * `AsyncIterable` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const posts = {
 *   async *[Symbol.asyncIterator]() {
 *     const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
 *     yield* await posts.json();
 *   },
 * };
 * is.asyncIterable(posts); // true
 *
 * const numbers = [1, 2, 3];
 * is.asyncIterable(numbers); // false
 * ```
 *
 * #### `is.asyncIterator` / `isAsyncIterator`
 *
 * Checks if a given value is an async iterator, meaning it has a `next` method
 * that returns a promise that resolves to an object with `value` and `done`
 * properties, implementing the `AsyncIterator` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * {
 *   await using kv = await Deno.openKv();
 *   const iter = kv.list({ prefix: [] });
 *
 *   if (is.asyncIterator(iter)) {
 *     // this condition  ^^^^  should always evaluate to true
 *     let n = 0;
 *     for await (const { key, value} of iter) {
 *       if (n++ > 10) break; // limit to 10 items
 *       console.log("key:", key, "\nvalue:", value, "\ncursor:", iter.cursor);
 *     }
 *   }
 * }
 * ```
 *
 * #### `is.asyncIterableIterator` / `isAsyncIterableIterator`
 *
 * Checks if a value is an `AsyncIterableIterator` implementation, which is
 * both an async iterator with a `next` method that returns a promise, and also
 * an asynchronous iterable with a `Symbol.asyncIterator` method.
 *
 * `AsyncGenerator` objects are real-world examples of how this API can be
 * implemented; and they will always satisfy this type guard.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const items = {
 *   async *[Symbol.asyncIterator]() {
 *     yield 1;
 *     // simulate blocking I/O
 *     await new Promise((resolve) => setTimeout(resolve, 1000));
 *     yield 2;
 *   },
 * };
 *
 * is.asyncIterableIterator(items); // false
 * is.asyncIterableIterator(items[Symbol.asyncIterator]()); // true
 * ```
 *
 * ---
 *
 * ### Iterators
 *
 * #### `is.arrayIterator` / `isArrayIterator`
 *
 * Checks if a given value is an array iterator, meaning it is an iterator
 * object that was created by calling the `Symbol.iterator` method on an array.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const iterator = [][Symbol.iterator]();
 * is.arrayIterator(iterator); // true
 * is.arrayIterator("hello"); // false
 * ```
 *
 * #### `is.mapIterator` / `isMapIterator`
 *
 * Checks if a given value is a map iterator, meaning it is an iterator object
 * that was created by calling the `entries`, `keys`, or `values` method on a
 * map.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const map = new Map();
 * const iterator = map.entries();
 * is.mapIterator(iterator); // true
 * is.mapIterator(map[Symbol.iterator]()); // true
 * is.mapIterator("hello"[Symbol.iterator]()); // false
 * ```
 *
 * #### `is.setIterator` / `isSetIterator`
 *
 * Checks if a given value is a set iterator, meaning it is an iterator object
 * that was created by calling the `entries`, `keys`, or `values` method on a
 * set.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const set = new Set();
 * const iterator = set.values();
 * is.setIterator(iterator); // true
 * is.setIterator(set[Symbol.iterator]()); // true
 * is.setIterator("hello"[Symbol.iterator]()); // false
 * ```
 *
 * #### `is.stringIterator` / `isStringIterator`
 *
 * Checks if a given value is a string iterator, meaning it is an iterator
 * object that was created by calling the `Symbol.iterator` method on a string.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const iterator = "hello"[Symbol.iterator]();
 * is.stringIterator(iterator); // true
 * is.stringIterator("hello"); // false
 * ```
 *
 * #### `is.iterableObject` / `isIterableObject`
 *
 * Checks if a given value is an iterable object, meaning it is an object with
 * a `Symbol.iterator` method that returns an iterator.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const iterable = { *[Symbol.iterator]() { yield 1; } };
 * is.iterableObject(iterable); // true
 * is.iterableObject("hello"); // false
 * ```
 *
 * ---
 *
 * ### Generators
 *
 * #### `is.generator` / `isGenerator`
 *
 * Checks if a given value is a generator function, meaning it is a function
 * that returns a generator object when called.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const generator = function* () { yield 1; };
 * is.generator(generator); // true
 * is.generator("hello"); // false
 * ```
 *
 * #### `is.generatorFunction` / `isGeneratorFunction`
 *
 * Checks if a given value is a generator function, meaning it is a function
 * that returns a generator object when called.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const generator = function* () { yield 1; };
 * is.generatorFunction(generator); // true
 * is.generatorFunction("hello"); // false
 * ```
 *
 * #### `is.asyncGenerator` / `isAsyncGenerator`
 *
 * Checks if a given value is an async generator function, meaning it is a
 * function that returns an async generator object when called.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const asyncGenerator = async function* () { yield 1; };
 * is.asyncGenerator(asyncGenerator); // true
 * is.asyncGenerator("hello"); // false
 * ```
 *
 * #### `is.asyncGeneratorFunction` / `isAsyncGeneratorFunction`
 *
 * Checks if a given value is an async generator function, meaning it is a
 * function that returns an async generator object when called.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const asyncGenerator = async function* () { yield 1; };
 * is.asyncGeneratorFunction(asyncGenerator); // true
 * is.asyncGeneratorFunction("hello"); // false
 * ```
 *
 * ---
 *
 * ### Streams
 *
 * #### `is.readableStream` / `isReadableStream`
 *
 * Checks if a given value is a readable stream, meaning it is a valid
 * implementation of the `ReadableStream` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const stream = new ReadableStream({ start() {} });
 * is.readableStream(stream); // true
 * is.readableStream("hello"); // false
 * ```
 *
 * #### `is.writableStream` / `isWritableStream`
 *
 * Checks if a given value is a writable stream, meaning it is a valid
 * implementation of the `WritableStream` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const stream = new WritableStream({ write() {} });
 *
 * is.writableStream(stream); // true
 * is.writableStream("hello"); // false
 * ```
 *
 * ---
 *
 * ### I/O
 *
 * #### `is.reader` / `isReader`
 *
 * Checks if a given value is a reader, meaning it is a valid implementation of
 * the `Deno.Reader` interface. This is not the same as the `ReadableStream`
 * interface's `ReadableStreamDefaultReader` type, which is a different kind of
 * reader.
 *
 * Note that this type guard _could_ return a false positive for objects of
 * that type, however, since both are objects with a method named `read`. We
 * have no way of checking the type of the arguments to the `read` method, so
 * we can't distinguish between the two.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const reader = Deno.openSync("hello.txt");
 *
 * is.reader(reader); // true
 * is.reader("hello"); // false
 * ```
 *
 * #### `is.readerSync` / `isReaderSync`
 *
 * Checks if a given value is a synchronous reader, meaning it is a valid
 * implementation of the `ReaderSync` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const reader = Deno.openSync("hello.txt");
 * is.readerSync(reader); // true
 * ```
 *
 * #### `is.writer` / `isWriter`
 *
 * Checks if a given value is a writer, meaning it is a valid implementation of
 * the `Deno.Writer` interface. This is not the same as the `WritableStream`
 * interface's `WritableStreamDefaultWriter` type, which is a different kind of
 * writer.
 *
 * Note that this type guard _could_ return a false positive for objects of
 * that type, however, since both are objects with a method named `write`. We
 * have no way of checking the type of the arguments to the `write` method, so
 * we can't distinguish between the two.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const writer = Deno.openSync("hello.txt");
 *
 * is.writer(writer); // true
 * is.writer("hello"); // false
 * ```
 *
 * #### `is.writerSync` / `isWriterSync`
 *
 * Checks if a given value is a synchronous writer, meaning it is a valid
 * implementation of the `WriterSync` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const writer = Deno.openSync("hello.txt");
 *
 * is.writerSync(writer); // true
 * ```
 *
 * #### `is.closer` / `isCloser`
 *
 * Checks if a given value is a closer, meaning it is a valid implementation of
 * the `Deno.Closer` interface.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const closer = Deno.openSync("hello.txt");
 *
 * is.closer(closer); // true
 * is.closer("hello"); // false
 * ```
 *
 * ---
 *
 * ### Template Literals
 *
 * #### `is.templateStringsArray` / `isTemplateStringsArray`
 *
 * Checks if a given value is a template strings array, meaning it is an array
 * of strings that were used as the first argument to a tagged template literal
 * function.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * function outdent(string: string): string;
 * function outdent(strings: TemplateStringsArray, ...args: unknown[]): string;
 * function outdent(input: string | TemplateStringsArray, ...args: unknown[]) {
 *   if (is.templateStringsArray(input)) {
 *     input = String.raw(input, ...values);
 *   }
 *
 *   // don't actually do it like this...
 *   return input.replace(/^\n/, "").replace(/\n\s+/g, "\n");
 * }
 * ```
 *
 * ---
 *
 * ### Binary Data Structures
 *
 * #### `is.bufferSource` / `isBufferSource`
 *
 * Checks if a given value is a `BufferSource` object, meaning it is either an
 * `ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, or a `DataView`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const array = new Uint8Array(buffer);
 *
 * is.bufferSource(buffer); // true
 * is.bufferSource(view); // true
 * is.bufferSource(array); // true
 * is.bufferSource({}); // false
 * ```
 *
 * #### `is.arrayBuffer` / `isArrayBuffer`
 *
 * Checks if a given value is an `ArrayBuffer` object, which is a fixed-length
 * binary data buffer. This does not consider `SharedArrayBuffer` objects as
 * interchangeable with `ArrayBuffer` objects; to check for both types at once,
 * use the {@link isArrayBufferLike} type guard.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 *
 * is.arrayBuffer(buffer); // true
 * is.arrayBuffer(shared); // false
 * ```
 *
 * #### `is.sharedArrayBuffer` / `isSharedArrayBuffer`
 *
 * Checks if a given value is a `SharedArrayBuffer` object, which is a
 * fixed-length binary data buffer that can be shared between multiple agents
 * (such as workers).
 *
 * This does not consider `ArrayBuffer` objects as interchangeable with
 * `SharedArrayBuffer` objects; to check for both types at once, use the
 * {@link isArrayBufferLike} type guard.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 *
 * is.sharedArrayBuffer(buffer); // false
 * is.sharedArrayBuffer(shared); // true
 * ```
 *
 * #### `is.arrayBufferLike` / `isArrayBufferLike`
 *
 * Checks if a given value is an `ArrayBuffer` or `SharedArrayBuffer` object.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 *
 * is.arrayBufferLike(buffer); // true
 * is.arrayBufferLike(shared); // true
 * ```
 *
 * #### `is.arrayBufferView` / `isArrayBufferView`
 *
 * Checks if a given value is an `ArrayBufferView` object, meaning it is either
 * a `TypedArray` or a `DataView`.
 *
 * This is a more reliable check than the global `ArrayBuffer.isView` method,
 * which may not be available in all environments. If it is available, this
 * defers to using it. Otherwise, it will check if the value is either a
 * `TypedArray` or a `DataView` using the type guards {@link isTypedArray} and
 * {@link isDataView}, respectively.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const array = new Uint8Array(buffer);
 * const object = {};
 *
 * is.arrayBufferView(object); // false
 * is.arrayBufferView(buffer); // false
 * is.arrayBufferView(view); // true
 * is.arrayBufferView(array); // true
 * ```
 *
 * #### `is.dataView` / `isDataView`
 *
 * Checks if a given value is a `DataView` object, which is a view of an
 * `ArrayBuffer` that allows reading and writing of the buffer's contents.
 *
 * This is more reliable than checking via the `it instanceof DataView` method,
 * as it will work across different realms and environments, and it does not
 * consider objects that were not created with `new DataView()` to be instances
 * of a `DataView`.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const object = {};
 *
 * is.dataView(object); // false
 * is.dataView(buffer); // false
 * is.dataView(view); // true
 * ```
 *
 * #### `is.typedArray` / `isTypedArray`
 *
 * Checks if a given value is a typed array, meaning it is an instance of one
 * of the `TypedArray` constructors, such as `Int8Array`, `Uint8Array`, etc.
 *
 * This is a more reliable check than `it instanceof Uint8Array` et. al., as it
 * will work across different realms and environments, and it does not consider
 * objects that were not created with a legitimate `TypedArray` constructor to
 * be instances of a typed array.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const real = new Int8Array();
 * console.log("is.typedArray(real)", is.typedArray(real)); // true
 *
 * const fake = Object.create(Int8Array.prototype);
 * console.log("is.typedArray(fake)", is.typedArray(fake)); // false
 * console.log("fake instanceof", fake instanceof Int8Array); // true (?!)
 * ```
 *
 * You can also use it to check for a specific typed array type by name:
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Uint8Array();
 *
 * console.assert(is.typedArray(array)); // OK
 * console.assert(is.typedArray(array, "Uint8Array")); // OK
 * console.assert(!is.typedArray(array, "Int8Array")); // invalid type
 * console.assert(!is.typedArray(array.buffer)); // ArrayBuffer != TypedArray
 * ```
 *
 * #### `is.uint8Array` / `isUint8Array`
 *
 * Checks if a given value is a `Uint8Array` object, which is a typed array of
 * 8-bit unsigned integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Uint8Array();
 *
 * console.assert(is.uint8Array(array)); // true
 * console.assert(!is.uint8Array(array.buffer)); // false
 * ```
 *
 * #### `is.uint8ClampedArray` / `isUint8ClampedArray`
 *
 * Checks if a given value is a `Uint8ClampedArray` object, which is a typed
 * array of 8-bit unsigned integers that are clamped to 0-255. In a typical
 * `Uint8Array`, overflowing values will wrap around to 0, e.g. setting one of
 * its elements to 300 will result in 44. In a `Uint8ClampedArray`, the same
 * operation will result in 255.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Uint8ClampedArray();
 *
 * console.assert(is.uint8ClampedArray(array)); // true
 * console.assert(!is.uint8ClampedArray(array.buffer)); // false
 * ```
 *
 * #### `is.uint16Array` / `isUint16Array`
 *
 * Checks if a given value is a `Uint16Array` object, which is a typed array of
 * 16-bit unsigned integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Uint16Array();
 *
 * console.assert(is.uint16Array(array)); // true
 * console.assert(!is.uint16Array(array.buffer)); // false
 * ```
 *
 * #### `is.uint32Array` / `isUint32Array`
 *
 * Checks if a given value is a `Uint32Array` object, which is a typed array of
 * 32-bit unsigned integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Uint32Array();
 *
 * console.assert(is.uint32Array(array)); // true
 * console.assert(!is.uint32Array(array.buffer)); // false
 * ```
 *
 * #### `is.int8Array` / `isInt8Array`
 *
 * Checks if a given value is an `Int8Array` object, which is a typed array of
 * 8-bit signed integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Int8Array();
 *
 * console.assert(is.int8Array(array)); // true
 * console.assert(!is.int8Array(array.buffer)); // false
 * ```
 *
 * #### `is.int16Array` / `isInt16Array`
 *
 * Checks if a given value is an `Int16Array` object, which is a typed array of
 * 16-bit signed integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Int16Array();
 *
 * console.assert(is.int16Array(array)); // true
 * console.assert(!is.int16Array(array.buffer)); // false
 * ```
 *
 * #### `is.int32Array` / `isInt32Array`
 *
 * Checks if a given value is an `Int32Array` object, which is a typed array of
 * 32-bit signed integers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Int32Array();
 *
 * console.assert(is.int32Array(array)); // true
 * console.assert(!is.int32Array(array.buffer)); // false
 * ```
 *
 * #### `is.float16Array` / `isFloat16Array`
 *
 * Checks if a given value is a `Float16Array` object, which is a typed array
 * of 16-bit half-precision floating point numbers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Float16Array();
 *
 * console.assert(is.float16Array(array)); // true
 * console.assert(!is.float16Array(array.buffer)); // false
 * ```
 *
 * #### `is.float32Array` / `isFloat32Array`
 *
 * Checks if a given value is a `Float32Array` object, which is a typed array
 * of 32-bit single-precision floating point numbers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Float32Array();
 *
 * console.assert(is.float32Array(array)); // true
 * console.assert(!is.float32Array(array.buffer)); // false
 * ```
 *
 * #### `is.float64Array` / `isFloat64Array`
 *
 * Checks if a given value is a `Float64Array` object, which is a typed array
 * of 64-bit double-precision floating point numbers.
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new Float64Array();
 *
 * console.assert(is.float64Array(array)); // true
 * console.assert(!is.float64Array(array.buffer)); // false
 * ```
 *
 * #### `is.bigInt64Array` / `isBigInt64Array`
 *
 * Checks if a given value is a `BigInt64Array` object, which is a typed array
 * of 64-bit signed integers (BigInts).
 *
 * ```ts
 * import { is } from "@type/is";
 *
 * const array = new BigInt64Array();
 *
 * console.assert(is.bigInt64Array(array)); // true
 * console.assert(!is.bigInt64Array(array.buffer)); // false
 * ```
 */

// #region Imports

import { isArguments } from "./src/arguments.ts";
import { isArrayBufferLike } from "./src/array-buffer-like.ts";
import { isArrayBufferView } from "./src/array-buffer-view.ts";
import { isArrayBuffer } from "./src/array-buffer.ts";
import { isArrayIterator } from "./src/array-iterator.ts";
import {
  isArrayLike,
  isArrayLikeObject,
} from "./src/array-like.ts";
import { isArray, isNonEmptyArray } from "./src/array.ts";
import { isAsyncDisposable } from "./src/async-disposable.ts";
import { isAsyncFunction } from "./src/async-function.ts";
import { isAsyncGeneratorFunction } from "./src/async-generator-function.ts";
import { isAsyncGenerator } from "./src/async-generator.ts";
import { isAsyncIterableIterator } from "./src/async-iterable-iterator.ts";
import { isAsyncIterable } from "./src/async-iterable.ts";
import {
  isAsyncIterableObject,
} from "./src/async-iterable-object.ts";
import { isAsyncIterator } from "./src/async-iterator.ts";
import { isBigInt } from "./src/bigint.ts";
import { isBigIntObject } from "./src/bigint-object.ts";
import { isBigInt64Array } from "./src/bigint64-array.ts";
import { isBigUint64Array } from "./src/biguint64-array.ts";
import { isBoolean } from "./src/boolean.ts";
import { isBooleanObject } from "./src/boolean-object.ts";
import { isBoth } from "./src/both.ts";
import { isBoxedPrimitive } from "./src/boxed-primitive.ts";
import { isBufferSource } from "./src/buffer-source.ts";
import { isClass } from "./src/class.ts";
import { isConstructor } from "./src/constructor.ts";
import { isCloser } from "./src/closer.ts";
import { isDataView } from "./src/data-view.ts";
import { isDate } from "./src/date.ts";
import { isDateString } from "./src/date-string.ts";
import { isDefined } from "./src/defined.ts";
import { isDisposable } from "./src/disposable.ts";
import { isEither } from "./src/either.ts";
import { isError } from "./src/error.ts";
import { isEmpty } from "./src/empty.ts";
import { isFalsy } from "./src/falsy.ts";
import { isEnum } from "./src/enum.ts";
import { isFloat16Array } from "./src/float16-array.ts";
import { isFloat32Array } from "./src/float32-array.ts";
import { isFloat64Array } from "./src/float64-array.ts";
import { isFunction } from "./src/function.ts";
import { isGeneratorFunction } from "./src/generator-function.ts";
import { isGenerator } from "./src/generator.ts";
import { isIdentifier } from "./src/identifier.ts";
import { isInstance } from "./src/instance.ts";
import { isInt16Array } from "./src/int16-array.ts";
import { isInt32Array } from "./src/int32-array.ts";
import { isInt8Array } from "./src/int8-array.ts";
import { isIterableIterator } from "./src/iterable-iterator.ts";
import {
  isIterableObject,
} from "./src/iterable-object.ts";
import { isIterable } from "./src/iterable.ts";
import { isIterator } from "./src/iterator.ts";
import { isKeyOf } from "./src/keyof.ts";
import { isMapIterator } from "./src/map-iterator.ts";
import {
  isMapLike,
  isMapLikeConstructor,
} from "./src/map-like.ts";
import { isMap } from "./src/map.ts";
import { isMissing } from "./src/missing.ts";
import { isNull } from "./src/null.ts";
import { isNumberObject } from "./src/number-object.ts";
import { isObjectLike } from "./src/object-like.ts";
import { isObject } from "./src/object.ts";
import { isPlainObject } from "./src/plain-object.ts";
import { isPresent } from "./src/present.ts";
import { isPrimitive } from "./src/primitive.ts";
import { isPrintable } from "./src/printable.ts";
import { isPromiseLike } from "./src/promise-like.ts";
import { isPromise } from "./src/promise.ts";
import { isPropertyKey } from "./src/property-key.ts";
import { isReadableStream } from "./src/readable-stream.ts";
import { isReaderSync } from "./src/reader-sync.ts";
import { isReader } from "./src/reader.ts";
import { isRegExp } from "./src/regexp.ts";
import { isSemVer } from "./src/semver.ts";
import { isSetIterator } from "./src/set-iterator.ts";
import {
  isExtendedSetLike,
  isExtendedSetLikeConstructor,
  isReadonlyCollection,
  isReadonlyCollectionConstructor,
  isSetLike,
  isSetLikeConstructor,
} from "./src/set-like.ts";
import { isSet } from "./src/set.ts";
import { isSharedArrayBuffer } from "./src/shared-array-buffer.ts";
import {
  isStringIterator,
} from "./src/string-iterator.ts";
import { isString } from "./src/string.ts";
import { isStringObject } from "./src/string-object.ts";
import { isSymbol } from "./src/symbol.ts";
import { isSymbolObject } from "./src/symbol-object.ts";
import {
  isWellKnownSymbol,
} from "./src/well-known-symbol.ts";
import {
  isRegisteredSymbol,
} from "./src/registered-symbol.ts";
import { isUniqueSymbol } from "./src/unique-symbol.ts";
import { isTagged } from "./src/tagged.ts";
import { isTruthy } from "./src/truthy.ts";
import { isTypedArray } from "./src/typed-array.ts";
import { isUint16Array } from "./src/uint16-array.ts";
import { isUint32Array } from "./src/uint32-array.ts";
import { isUint8Array } from "./src/uint8-array.ts";
import { isUint8ClampedArray } from "./src/uint8-clamped-array.ts";
import { isUndefined } from "./src/undefined.ts";
import { isWeakKey } from "./src/weak-key.ts";
import { isWeakMap } from "./src/weak-map.ts";
import { isWeakRef } from "./src/weak-ref.ts";
import { isWeakSet } from "./src/weak-set.ts";
import { isWritableStream } from "./src/writable-stream.ts";
import { isWriterSync } from "./src/writer-sync.ts";
import { isWriter } from "./src/writer.ts";
import { isURL } from "./src/url.ts";
import { isURLString } from "./src/url-string.ts";
import { isURLSearchParams } from "./src/url-search-params.ts";

// #region Number Guards
import {
  isFinite,
  isFinite as isFiniteNumber,
  isZero,
} from "./src/number/mod.ts";
import { isInfinity } from "./src/number/infinity.ts";
import { isNaN } from "./src/number/nan.ts";
import { isEven } from "./src/number/even.ts";
import { isOdd } from "./src/number/odd.ts";
import { isFloat } from "./src/number/float.ts";
import {
  isFloat16,
} from "./src/number/float16.ts";
import {
  isFloat32,
} from "./src/number/float32.ts";
import {
  isFloat64,
} from "./src/number/float64.ts";
import {
  isInteger,
} from "./src/number/integer.ts";
import { isInt16 } from "./src/number/int16.ts";
import { isInt32 } from "./src/number/int32.ts";
import { isInt8 } from "./src/number/int8.ts";
import {
  isNegative,
  isNegative as isNegativeNumber,
} from "./src/number/negative.ts";
import {
  isPositive,
  isPositive as isPositiveNumber,
} from "./src/number/positive.ts";
import {
  isNegativeInfinity,
} from "./src/number/negative-infinity.ts";
import {
  isPositiveInfinity,
} from "./src/number/positive-infinity.ts";
import {
  isPositiveFiniteInteger,
} from "./src/number/positive-finite-integer.ts";
import {
  isNegativeFiniteInteger,
} from "./src/number/negative-finite-integer.ts";
import {
  isNonZeroFiniteInteger,
} from "./src/number/nonzero-finite-integer.ts";
import {
  isNegativeNonZeroFiniteInteger,
} from "./src/number/negative-nonzero-finite-integer.ts";
import {
  isPositiveNonZeroFiniteInteger,
} from "./src/number/positive-nonzero-finite-integer.ts";
import { isFiniteInteger } from "./src/number/finite-integer.ts";
import {
  isNonZeroInteger,
} from "./src/number/nonzero-integer.ts";
import {
  isNegativeInteger,
} from "./src/number/negative-integer.ts";
import {
  isPositiveInteger,
} from "./src/number/positive-integer.ts";
import {
  isPositiveZero,
} from "./src/number/positive-zero.ts";
import {
  isNegativeZero,
} from "./src/number/negative-zero.ts";
import {
  isNegativeNonZeroFiniteNumber,
  isNegativeNonZeroFiniteNumber as isNegativeNonZeroFinite,
} from "./src/number/negative-nonzero-finite.ts";
import {
  isPositiveNonZeroFiniteNumber,
  isPositiveNonZeroFiniteNumber as isPositiveNonZeroFinite,
} from "./src/number/positive-nonzero-finite.ts";
import {
  isNonZeroFiniteNumber,
  isNonZeroFiniteNumber as isNonZeroFinite,
} from "./src/number/nonzero-finite.ts";
import {
  isNegativeFiniteNumber,
  isNegativeFiniteNumber as isNegativeFinite,
} from "./src/number/negative-finite.ts";
import {
  isPositiveFiniteNumber,
  isPositiveFiniteNumber as isPositiveFinite,
} from "./src/number/positive-finite.ts";
import {
  isPositiveNonZeroNumber,
  isPositiveNonZeroNumber as isPositiveNonZero,
} from "./src/number/positive-nonzero.ts";
import {
  isNonZero,
  isNonZero as isNonZeroNumber,
} from "./src/number/nonzero.ts";
import { isNumber } from "./src/number/number.ts";
import {
  inRange as isInRange,
} from "./src/number/in-range.ts";
import {
  isUint16,
} from "./src/number/uint16.ts";
import {
  isUint32,
} from "./src/number/uint32.ts";
import { isUint8 } from "./src/number/uint8.ts";
// #endregion Number Guards


import * as is from "./namespace.ts";
type is = typeof is;

export * from "./types.ts";

// #endregion Imports

/**
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
 * - **150+ Type Guards**: A comprehensive collection of type guards for
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
export { is, is as default };

// #region Exports

// #region Functions
export {
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayBufferLike,
  isArrayBufferLike as isAnyArrayBuffer,
  isArrayBufferView,
  isArrayIterator,
  isArrayLike,
  isArrayLikeObject,
  isAsyncDisposable,
  isAsyncFunction,
  isAsyncGenerator,
  isAsyncGeneratorFunction,
  isAsyncIterable,
  isAsyncIterableIterator,
  isAsyncIterableObject,
  isAsyncIterator,
  isBigInt,
  isBigInt64Array,
  isBigIntObject,
  isBigUint64Array,
  isBoolean,
  isBooleanObject,
  isBoth,
  isBoxedPrimitive,
  isBufferSource,
  isClass,
  isCloser,
  isConstructor,
  isDataView,
  isDate,
  isDateString,
  isDefined,
  isDisposable,
  isEither,
  isEmpty,
  isEnum,
  isError,
  isEven,
  isExtendedSetLike,
  isExtendedSetLikeConstructor,
  isFalsy,
  isFinite,
  isFiniteInteger,
  isFiniteNumber,
  isFloat,
  isFloat16,
  isFloat16Array,
  isFloat32,
  isFloat32Array,
  isFloat64,
  isFloat64Array,
  isFunction,
  isGenerator,
  isGeneratorFunction,
  isIdentifier,
  isInfinity,
  isInRange,
  isInstance,
  isInt16,
  isInt16Array,
  isInt32,
  isInt32Array,
  isInt8,
  isInt8Array,
  isInteger,
  isIterable,
  isIterableIterator,
  isIterableObject,
  isIterator,
  isKeyOf,
  isMap,
  isMapIterator,
  isMapLike,
  isMapLikeConstructor,
  isMissing,
  isNaN,
  isNegative,
  isNegativeFinite,
  isNegativeFiniteInteger,
  isNegativeFiniteNumber,
  isNegativeInfinity,
  isNegativeInteger,
  isNegativeNonZeroFinite,
  isNegativeNonZeroFiniteInteger,
  isNegativeNonZeroFiniteNumber,
  isNegativeNumber,
  isNegativeZero,
  isNonEmptyArray,
  isNonZero,
  isNonZeroFinite,
  isNonZeroFiniteInteger,
  isNonZeroFiniteNumber,
  isNonZeroInteger,
  isNonZeroNumber,
  isNull,
  isNumber,
  isNumberObject,
  isObject,
  isObjectLike,
  isOdd,
  isPlainObject,
  isPositive,
  isPositiveFinite,
  isPositiveFiniteInteger,
  isPositiveFiniteNumber,
  isPositiveInfinity,
  isPositiveInteger,
  isPositiveNonZero,
  isPositiveNonZeroFinite,
  isPositiveNonZeroFiniteInteger,
  isPositiveNonZeroFiniteNumber,
  isPositiveNonZeroNumber,
  isPositiveNumber,
  isPositiveZero,
  isPresent,
  isPrimitive,
  isPrintable,
  isPromise,
  isPromiseLike,
  isPropertyKey,
  isReadableStream,
  isReader,
  isReaderSync,
  isReadonlyCollection,
  isReadonlyCollectionConstructor,
  isRegExp,
  isRegisteredSymbol,
  isSemVer,
  isSet,
  isSetIterator,
  isSetLike,
  isSetLikeConstructor,
  isSharedArrayBuffer,
  isString,
  isStringIterator,
  isStringObject,
  isSymbol,
  isSymbolObject,
  isTagged,
  isTruthy,
  isTypedArray,
  isUint16,
  isUint16Array,
  isUint32,
  isUint32Array,
  isUint8,
  isUint8Array,
  isUint8ClampedArray,
  isUndefined,
  isUniqueSymbol,
  isURL,
  isURLSearchParams,
  isURLString,
  isWeakKey,
  isWeakMap,
  isWeakRef,
  isWeakSet,
  isWellKnownSymbol,
  isWritableStream,
  isWriter,
  isWriterSync,
  isZero,
};
// #endregion Functions
