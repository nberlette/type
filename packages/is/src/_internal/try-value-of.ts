import { tryMethod } from "./try-method.ts";

/**
 * Attempt to call the `valueOf` method on the provided {@link prototype}
 * object, with the given {@link it} as the contextual `this` binding.
 */
export function tryValueOf<
  const T extends { valueOf(this: unknown): U },
  U = unknown,
>(prototype: T | { valueOf(this: unknown): U }, it: unknown): it is U {
  try {
    return tryMethod(prototype, "valueOf", it);
  } catch {
    return false;
  }
}
