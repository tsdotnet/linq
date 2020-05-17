/**
 * @packageDocumentation
 * @module transforms
 */
/**
 * Filters out null or undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NonNullable<T>>}
 */
export default function notNullOrUndefined<T>(sequence: Iterable<T>): Iterable<NonNullable<T>>;
