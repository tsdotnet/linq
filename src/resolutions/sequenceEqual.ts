/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableTransform} from '../IterableTransform';
import {areEqual, EqualityComparison} from '@tsdotnet/compare';
import areSequencesEqual from '@tsdotnet/compare/dist/areSequencesEqual';

export default function sequenceEqual<T> (
	other: Iterable<T>,
	equalityComparer: EqualityComparison<T> = areEqual): IterableTransform<T, boolean> {
	return function(sequence: Iterable<T>): boolean {
		return areSequencesEqual(sequence, other, equalityComparer);
	};
}
