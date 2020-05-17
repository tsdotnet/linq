/**
 * @packageDocumentation
 * @module filters
 */
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 * @param {number} size
 * @return {IterableFilter<T>}
 */
export default function buffer<T>(size: number): IterableFilter<T>;
