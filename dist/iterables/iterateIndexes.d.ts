/**
 * @packageDocumentation
 * @module iterables
 */
/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike<T>} source
 * @return {Iterable<T>}
 */
export default function iterateIndexes<T>(source: ArrayLike<T>): Iterable<T>;
