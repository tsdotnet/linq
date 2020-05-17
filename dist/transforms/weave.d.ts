/**
 * @packageDocumentation
 * @module transforms
 */
/**
 * Returns an item from each iterable before calling next on each.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
export default function weave<T>(sequences: Iterable<Iterable<T>>): Iterable<T>;
