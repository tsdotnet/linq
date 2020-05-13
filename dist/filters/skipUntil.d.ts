import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 */
export default function skipUntil<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
