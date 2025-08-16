/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {areEqual} from '@tsdotnet/compare';
import {ArgumentNullException} from '@tsdotnet/exceptions';
import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} item
 * @return {IterableTransform<T, number>}
 */
export default function lastIndexOf<T> (item: T): IterableTransform<T, number> {
	return function(sequence: Iterable<T>): number {
		if(!sequence) throw new ArgumentNullException('sequence');
		if(sequence instanceof Array) return sequence.lastIndexOf(item);
		let i = 0, last = -1;
		for(const e of sequence)
		{
			if(areEqual(e, item)) last = i;
			i++;
		}
		return last;
	};
}
