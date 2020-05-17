/**
 * @packageDocumentation
 * @module filters
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that only returns elements that match the provided predicate.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function where<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
