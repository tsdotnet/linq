/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike} source
 * @returns {Iterable}
 */
export default function iterateIndexes<T>(source: ArrayLike<T>): Iterable<T>;
