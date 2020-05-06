/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import IterableTransform from '../IterableTransform';
import integer from '@tsdotnet/integer';

/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAt<T> (index: number): IterableTransform<T, T | undefined> {
	integer.assertZeroOrGreater(index);
	return function(elements: Iterable<T>): T | undefined {
		let count = 0;
		for(const e of elements)
		{
			if(index===count++) return e;
		}
		return undefined;
	};
}
