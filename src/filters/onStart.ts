/**
 * @packageDocumentation
 * @module filters
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that invokes the provided action before iterating results.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
export default function onStart<T> (action: () => void): IterableFilter<T> {
	if(!action) throw new ArgumentNullException('action');
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				action();
				for(const e of sequence) yield e;
			}
		};
	};
}
