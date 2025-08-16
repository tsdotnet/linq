/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {ArgumentNullException} from '@tsdotnet/exceptions';
import {InvalidOperationException} from '@tsdotnet/exceptions';

/**
 * Returns the first element of a sequence.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function first<T> (sequence: Iterable<T>): T {
	if(!sequence) throw new ArgumentNullException('sequence');
	if(sequence instanceof Array)
	{
		if(sequence.length != 0) return sequence[0];
	}
	else
	{
		const iterator = sequence[Symbol.iterator]();
		const first = iterator.next();
		if(!first.done) return first.value;
	}
	throw new InvalidOperationException('The sequence is empty.');
}
