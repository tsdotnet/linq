/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableTransform} from '../IterableTransform';
import integer from '@tsdotnet/integer';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAt<T> (index: number): IterableTransform<T, T | undefined> {
	integer.assertZeroOrGreater(index);
	return function(sequence: Iterable<T>): T | undefined {
		if(!sequence) throw new ArgumentNullException('sequence');
		let count = 0;
		for(const e of sequence)
		{
			if(index===count++) return e;
		}
		return undefined;
	};
}
