/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {PredicateWithIndex} from '@tsdotnet/common-interfaces';

/**
 * An iterable filter that bypasses elements in sequence while the predicate condition is true and if false will iterate the rest.
 * Inverse of skipUntil.
 */
export default function skipWhile<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function* (sequence: Iterable<T>): Iterable<T> {
		let i = 0, skipped = false;
		for(const e of sequence)
		{
			if(skipped || !predicate(e, i))
			{
				skipped = true;
				yield e;
			}
			i++;
		}
	};
}
