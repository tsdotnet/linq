import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param predicate The predicate to evaluate with.
 * @return {IterableTransform} The transform that will invoke the predicate.
 */
export default function all<T>(predicate: PredicateWithIndex<T>): IterableTransform<T, boolean>;
