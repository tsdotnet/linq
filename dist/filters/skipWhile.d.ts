/**
 * @packageDocumentation
 * @module filters
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that bypasses elements in sequence while the predicate condition is true and if false will iterate the rest.
 * Inverse of skipUntil.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function skipWhile<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
