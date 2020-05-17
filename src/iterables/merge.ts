/**
 * @packageDocumentation
 * @module iterables
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Concatenates the sequences.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
export default function merge<T> (sequences: Iterable<Iterable<T>>): Iterable<T> {
	if(!sequences) throw new ArgumentNullException('sequences');
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			for(const s of sequences)
			{
				for(const e of s)
				{
					yield e;
				}
			}
		}
	};
}
