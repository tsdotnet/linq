/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that bypasses elements in sequence while the predicate condition is true and if false will iterate the rest.
 * Inverse of skipUntil.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function skipWhile<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
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
			}
		};
	};
}
