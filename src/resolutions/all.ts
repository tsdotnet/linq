/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import type {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {ArgumentNullException} from '@tsdotnet/exceptions';
import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function all<T> (predicate: PredicateWithIndex<T>): IterableTransform<T, boolean> {
	if(!predicate) throw new ArgumentNullException('predicate');
	return function(sequence: Iterable<T>): boolean {
		if(!sequence) throw new ArgumentNullException('sequence');
		if(sequence instanceof Array) return sequence.every(predicate);
		let i = 0;
		for(const e of sequence)
		{
			if(!predicate(e, i++)) return false;
		}
		return true;
	};
}
