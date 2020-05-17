/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import ArgumentOutOfRangeException from '@tsdotnet/exceptions/dist/ArgumentOutOfRangeException';
import integer from '@tsdotnet/integer';
import {IterableTransform} from '../IterableTransform';

/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @return {IterableTransform<T, T>} A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAt<T> (index: number): IterableTransform<T, T> {
	integer.assertZeroOrGreater(index);
	return function(sequence: Iterable<T>): T {
		if(!sequence) throw new ArgumentNullException('sequence');
		let count = 0;
		if(sequence instanceof Array)
		{
			count = sequence.length;
			if(index<count) return sequence[index];
		}
		else
		{
			for(const e of sequence)
			{
				if(index===count++) return e;
			}
		}
		throw new ArgumentOutOfRangeException('index', index, 'Exceeds the total number of elements: ' + count);
	};
}
