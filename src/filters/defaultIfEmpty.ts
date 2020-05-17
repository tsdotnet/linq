/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableFilter} from '../IterableTransform';

/**
 * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
 * @param {T} defaultValue
 * @return {IterableFilter<T>}
 */
export default function defaultIfEmpty<T> (defaultValue: T): IterableFilter<T> {
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				let hasElements = false;
				for(const e of sequence)
				{
					hasElements = true;
					yield e;
				}
				if(!hasElements) yield defaultValue;
			}
		};
	};
}
