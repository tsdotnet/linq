/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
export default function onComplete<T> (action: () => void): IterableFilter<T> {
	if(!action) throw new ArgumentNullException('action');
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				for(const e of sequence) yield e;
				action();
			}
		};
	};
}
