/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Returns the product (*) of a sequence of numbers.
 * Returns NaN if sequence is empty or if any entries are NaN.
 * @param {Iterable<number>} sequence The sequence of numbers to multiply together.
 * @return {number} The product of the sequence.
 */
export default function product (sequence: Iterable<number>): number {
	if(!sequence) throw new ArgumentNullException('sequence');
	let product = 1, hasEntries = false;
	for(const s of sequence)
	{
		if(isNaN(s)) return NaN;
		hasEntries = true;
		product *= s;
	}
	return hasEntries ? product : NaN;
}
