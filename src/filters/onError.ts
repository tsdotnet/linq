/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that invokes the provided handler if there was an error while iterating.
 * Any error while iterating assumes no more results and the iteration will be complete after the error.
 * The handler can decide if it wants to rethrow the error or not.
 * @param {(ex: any, index: number) => void} handler
 * @return {IterableFilter<T>}
 */
export default function onError<T> (
	handler: (ex: any, index: number) => void
): IterableFilter<T> {
	if(!handler) throw new ArgumentNullException('action');
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				const iterator = sequence[Symbol.iterator]();
				let i = 0;
				while(true)
				{
					try
					{
						const next = iterator.next();
						if(next.done) break;
						yield next.value;
					}
					catch(ex)
					{
						handler(ex, i);
						break;
					}
					i++;
				}
			}
		};
	};
}
