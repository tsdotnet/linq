/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Primitive} from '@tsdotnet/common-interfaces';
import ArgumentException from '@tsdotnet/exceptions/dist/ArgumentException';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Returns the entry in the sequence that has the lowest/least value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export function min<T extends Primitive> (sequence: Iterable<T>): T
{
	if(!sequence) throw new ArgumentNullException('sequence');
	const i = sequence[Symbol.iterator]();
	let n = i.next();
	if(n.done) throw new ArgumentException('sequence', 'Is empty.'); // Use defaultIfEmpty first.

	let min: T = n.value;
	while(!(n = i.next()).done)
	{
		if(n.value<min) min = n.value;
	}
	return min;
}
