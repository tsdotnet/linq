/**
 * Generates a sequence that contains one repeated value.
 * @param {T} entry
 * @param {number} count The number of times to repeat.
 * @return {Iterable<T>}
 */
export default function repeat<T>(entry: T, count: number): Iterable<T>;
