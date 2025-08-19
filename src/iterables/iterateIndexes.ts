/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {ArgumentNullException} from '@tsdotnet/exceptions';

/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike<T>} source
 * @return {Iterable<T>}
 */
export default function iterateIndexes<T> (source: ArrayLike<T>): Iterable<T> {
	if(!source) throw new ArgumentNullException('source');
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			const len = source?.length;
			if(len)
			{
				for(let i = 0; i<len; i++)
				{
					yield source[i]!;
				}
			}
		}
	};
}
