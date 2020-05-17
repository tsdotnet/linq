/**
 * @packageDocumentation
 * @module resolutions
 */
/**
 * Returns an array (copy) of all the elements in a sequence if the sequence isn't already an array.
 * If the sequence is an array, it's returned as is.
 * @param {Iterable<T>} sequence
 * @return {T[]}
 */
export default function asArray<T>(sequence: Iterable<T>): T[];
