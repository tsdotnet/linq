/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Returns an array (copy) of all the elements in a sequence if the sequence isn't already an array.
 * If the sequence is an array, it's returned as is.
 * @param {Iterable<T>} sequence
 * @return {T[]}
 */
export default function asArray<T> (sequence: Iterable<T>): T[] {
	if(!sequence) throw new ArgumentNullException('sequence');
	if(sequence instanceof Array) return sequence;
	const result: T[] = [];
	for(const e of sequence) result.push(e);
	return result;
}
