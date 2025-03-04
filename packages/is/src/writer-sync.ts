/**
 * Checks if a given value is a synchronous writer, which is an object that
 * implements a `writeSync` method as per Deno's `WriterSync` interface.
 *
 * @param it The value to check.
 * @returns `true` if the value is a synchronous writer, `false` otherwise.
 * @example
 * ```ts
 * import { isWriterSync } from "jsr:@type/is/writer-sync";
 *
 * const file = Deno.openSync("file.txt", { write: true });
 * isWriterSync(file); // true
 *
 * const socket = new WebSocket("ws://example.com");
 * isWriterSync(socket); // false
 * ```
 * @category I/O
 * @module writer-sync
 */
export function isWriterSync(it: unknown): it is WriterSync {
  return typeof it === "object" && it !== null && "writeSync" in it &&
    typeof it.writeSync === "function";
}

export default isWriterSync;

/**
 * An abstract interface which when implemented provides an interface to write
 * bytes from an array buffer to a file/resource synchronously.
 *
 * @category I/O
 */
export interface WriterSync {
  /** Writes `p.byteLength` bytes from `p` to the underlying data stream. It
   * returns the number of bytes written from `p` (`0` <= `n` <=
   * `p.byteLength`) and any error encountered that caused the write to stop
   * early. `writeSync()` must throw a non-null error if it returns `n` <
   * `p.byteLength`. `writeSync()` must not modify the slice data, even
   * temporarily.
   *
   * Implementations should not retain a reference to `p`.
   */
  writeSync(p: Uint8Array): number;
}
