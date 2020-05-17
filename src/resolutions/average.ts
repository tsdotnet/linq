/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';

/**
 * Returns the average of a sequence of numbers.
 * @param {Iterable<number>} sequence
 * @return {number}
 */
export default function average (sequence: Iterable<number>): number {
	if(!sequence) throw new ArgumentNullException('sequence');
	let sum = 0, count = 0;
	for(const s of sequence)
	{
		if(isNaN(s)) return NaN;
		sum += s;
		count++;
	}
	if(count===0) throw new InvalidOperationException('Sequence is empty.');
	return sum/count;
}
