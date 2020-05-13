import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that will return results until the predicate condition is true.
 */
export default function takeUntil<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
