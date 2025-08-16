/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {ArgumentNullException} from '@tsdotnet/exceptions';

/**
 * Returns the sum (+) of a sequence of numbers.
 * Returns 0 if sequence is empty.  Returns NaN if any entries are NaN.
 * @param {Iterable<number>} sequence The sequence of numbers to sum (add+ together).
 * @return {number} The sum of the sequence.
 */
export default function sum (sequence: Iterable<number>): number {
	if(!sequence) throw new ArgumentNullException('sequence');
	let sum = 0;
	for(const s of sequence)
	{
		if(isNaN(s)) return NaN;
		sum += s;
	}
	return sum;
}
