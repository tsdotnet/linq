/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {areEqual, EqualityComparison} from '@tsdotnet/compare';
import areSequencesEqual from '@tsdotnet/compare/dist/areSequencesEqual';
import {IterableTransform} from '../IterableTransform';

/**
 * Resolves true if the sequences are equal.
 * @param {Iterable<T>} other
 * @param {EqualityComparison<T>} equalityComparer
 * @return {IterableTransform<T, boolean>}
 */
export default function sequenceEqual<T> (
	other: Iterable<T>,
	equalityComparer: EqualityComparison<T> = areEqual): IterableTransform<T, boolean> {
	return function(sequence: Iterable<T>): boolean {
		return areSequencesEqual(sequence, other, equalityComparer);
	};
}
