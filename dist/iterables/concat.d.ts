/**
 * @packageDocumentation
 * @module iterables
 */
/**
 * Concatenates the provided sequences.
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function concat<T>(...sequences: Iterable<T>[]): Iterable<T>;
