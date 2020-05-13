/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param predicate The predicate to evaluate with.
 * @return {IterableTransform} The transform that will invoke the predicate.
 */
export default function all<T> (predicate: PredicateWithIndex<T>): IterableTransform<T, boolean> {
	if(!predicate) throw new ArgumentNullException('predicate');
	return function(sequence: Iterable<T>): boolean {
		let i = 0;
		for(const e of sequence)
		{
			if(!predicate(e, i++)) return false;
		}
		return true;
	};
}
