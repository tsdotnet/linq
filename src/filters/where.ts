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
 * An iterable filter that only returns elements that match the provided predicate.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function where<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				let i = 0;
				for(const e of sequence)
				{
					if(predicate(e, i++)) yield e;
				}
			}
		};
	};
}
