import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
 * If no predicate is provided, will resolve true if the sequence is not empty.
 * @param predicate The optional predicate to evaluate with.
 * @return {IterableTransform} The transform that will invoke the predicate.
 */
export default function any<T>(predicate?: PredicateWithIndex<T>): IterableTransform<T, boolean>;
