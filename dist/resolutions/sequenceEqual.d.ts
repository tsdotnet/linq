/**
 * @packageDocumentation
 * @module resolutions
 */
import { EqualityComparison } from '@tsdotnet/compare';
import { IterableTransform } from '../IterableTransform';
/**
 * Resolves true if the sequences are equal.
 * @param {Iterable<T>} other
 * @param {EqualityComparison<T>} equalityComparer
 * @return {IterableTransform<T, boolean>}
 */
export default function sequenceEqual<T>(other: Iterable<T>, equalityComparer?: EqualityComparison<T>): IterableTransform<T, boolean>;
