/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function notNull<T>(sequence: Iterable<T>): Iterable<T>;
