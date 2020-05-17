/**
 * @packageDocumentation
 * @module iterables
 */
/**
 * Concatenates the sequences.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
export default function merge<T>(sequences: Iterable<Iterable<T>>): Iterable<T>;
