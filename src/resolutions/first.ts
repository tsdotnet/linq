/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';

/**
 * Returns the first element of a sequence.
 */
export default function first<T> (sequence: Iterable<T>): T {
	if(!sequence) throw new ArgumentNullException('sequence');
	const iterator = sequence[Symbol.iterator]();
	const first = iterator.next();
	if(first.done) throw new InvalidOperationException('The sequence is empty.');
	return first.value;
}
