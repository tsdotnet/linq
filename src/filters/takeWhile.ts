/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that will return results while the predicate condition is true and stops when false.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function takeWhile<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				let i = 0;
				for(const e of sequence)
				{
					if(!predicate(e, i++)) break;
					yield e;
				}
			}
		};
	};
}
