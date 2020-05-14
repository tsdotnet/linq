/**
 * Returns the last element of a sequence, or `undefined` if no element is found.
 * @param {Iterable<T>} sequence
 * @return {T | undefined}
 */
export default function lastOrDefault<T>(sequence: Iterable<T>): T | undefined;
/**
 * Returns the last element of a sequence, or the default value if no element is found.
 * @param {Iterable<T>} sequence
 * @param {T} defaultValue
 * @return {T}
 */
export default function lastOrDefault<T>(sequence: Iterable<T>, defaultValue: T): T;
