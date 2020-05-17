/**
 * @packageDocumentation
 * @module filters
 */
import { IterableFilter } from '../IterableTransform';
/**
 * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
 * @param {T} defaultValue
 * @return {IterableFilter<T>}
 */
export default function defaultIfEmpty<T>(defaultValue: T): IterableFilter<T>;
