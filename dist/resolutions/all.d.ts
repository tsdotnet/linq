import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function all<T>(predicate: PredicateWithIndex<T>): IterableTransform<T, boolean>;
