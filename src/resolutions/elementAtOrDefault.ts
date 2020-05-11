/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableTransform} from '../IterableTransform';
import integer from '@tsdotnet/integer';

/*
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @param defaultValue The optional default value to use if the element is not found.
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAtOrDefault<T> (
	index: number,
	defaultValue?: T): IterableTransform<T, T | undefined> {
	integer.assertZeroOrGreater(index);
	return function(sequence: Iterable<T>): T | undefined {
		if(!sequence) return defaultValue;
		let count = 0;
		for(const e of sequence)
		{
			if(index===count++) return e;
		}
		return defaultValue;
	};
}
