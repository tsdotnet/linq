/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {ArgumentNullException} from '@tsdotnet/exceptions';

/**
 * Returns an array (copy) of all the elements in a sequence.
 * @param {Iterable<T>} sequence
 * @return {T[]}
 */
export default function toArray<T> (sequence: Iterable<T>): T[] {
	if(!sequence) throw new ArgumentNullException('sequence');
	if(sequence instanceof Array) return sequence.slice();
	const result: T[] = [];
	for(const e of sequence) result.push(e);
	return result;
}
