/**
 * @packageDocumentation
 * @module filters
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that will return results while the predicate condition is true and stops when false.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function takeWhile<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
