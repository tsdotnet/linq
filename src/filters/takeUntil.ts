/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {PredicateWithIndex} from '@tsdotnet/common-interfaces';

/**
 * An iterable filter that will return results while the predicate condition is true and stops when false.
 */
export default function takeWhile<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function* (sequence: Iterable<T>): Iterable<T> {
		let i = 0;
		for(const e of sequence)
		{
			if(!predicate(e, i++)) break;
			yield e;
		}
	};
}
