/**
 * @packageDocumentation
 * @module resolutions
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
 * If no predicate is provided, will resolve true if the sequence is not empty.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function any<T>(predicate?: PredicateWithIndex<T>): IterableTransform<T, boolean>;
