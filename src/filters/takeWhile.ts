/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {PredicateWithIndex} from '@tsdotnet/common-interfaces';

/**
 * An iterable filter that will skip results while the condition is true and if false will iterate the rest.
 */
export default function skipWhile<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function* (sequence: Iterable<T>): Iterable<T> {
		let i = 0, skipped = false;
		for(const e of sequence)
		{
			if(skipped || !predicate(e, i)) {
				skipped = true;
				yield e;
			}
			i++;
		}
	};
}
