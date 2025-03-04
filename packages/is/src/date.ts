/**
 * Checks if a given value is a `Date` instance. This is a more reliable check
 * than `it instanceof Date` because it also works across different realms.
 *
 * This only returns `true` for values that are valid `Date` instances, meaning
 * `Object.create(Date.prototype)` and similar constructs will return `false`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Date` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isDate } from "jsr:@type/is/date";
 *
 * isDate(new Date()); // true
 * isDate(new Date(0)); // true
 * isDate(new Date("2021-01-01")); // true
 * ```
 * @category Standard
 */
export function isDate(it: unknown): it is Date {
  try {
    const DatePrototypeGetTime = globalThis.Object.getOwnPropertyDescriptor(
      globalThis.Date.prototype,
      "getTime",
    )?.value ?? (() => {
      throw new Error();
    });
    DatePrototypeGetTime?.call?.(it);
    return true;
  } catch {
    return false;
  }
}

export default isDate;
