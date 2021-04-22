/**
 * Produces the set union of all sequences provided..
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function union<T>(...sequences: Iterable<T>[]): Iterable<T>;
