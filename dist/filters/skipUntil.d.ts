/**
 * @packageDocumentation
 * @module filters
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function skipUntil<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
