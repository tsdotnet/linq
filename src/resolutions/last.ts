/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';

/**
 * Returns the first element of a sequence.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function last<T> (sequence: Iterable<T>): T {
	if(!sequence) throw new ArgumentNullException('sequence');
	if(sequence instanceof Array)
	{
		if(sequence.length != 0)
			return sequence[sequence.length - 1];
	}
	else
	{
		const iterator = sequence[Symbol.iterator]();
		let next = iterator.next();
		if(!next.done)
		{
			let last: T;
			do
			{
				last = next.value;
				next = iterator.next();
			}
			while(!next.done);
			return last;
		}
	}
	throw new InvalidOperationException('The sequence is empty.');
}

