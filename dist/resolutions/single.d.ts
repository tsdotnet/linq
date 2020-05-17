/**
 * @packageDocumentation
 * @module resolutions
 */
/**
 * Returns an entry from a singular sequence.
 * Will throw if no elements or more than one.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function single<T>(sequence: Iterable<T>): T;
