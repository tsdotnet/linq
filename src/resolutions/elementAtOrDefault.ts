/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import integer from '@tsdotnet/integer';
import { IterableTransform } from '../IterableTransform';

/**
 * Produces a function that returns the element at a specified index in a sequence or `undefined` if out of bounds.
 * @param {number} index
 * @return {IterableTransform<T, T | undefined>}
 */
export default function elementAtOrDefault<T>(index: number)
: IterableTransform<T, T | undefined>;

/**
 * Produces a function that returns the element at a specified index in a sequence or the default value if out of bounds.
 * @param {number} index
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault>}
 */
export default function elementAtOrDefault<T, TDefault>(index: number, defaultValue: T)
	: IterableTransform<T, T | TDefault>;

/**
 * Produces a function that returns the element at a specified index in a sequence or a default value if out of bounds.
 * @param {number} index
 * @param {TDefault} defaultValue The optional default value to use if the element is not found.
 * @return {IterableTransform<T, T | TDefault | undefined>} A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAtOrDefault<T, TDefault>(index: number, defaultValue?: T)
	: IterableTransform<T, T | TDefault | undefined> {
	integer.assertZeroOrGreater(index);
	return function (sequence: Iterable<T>) {
		if (!sequence) return defaultValue;
		if (sequence instanceof Array)
			return index < sequence.length ? sequence[index] : defaultValue;

		let count = 0;
		for (const e of sequence) {
			if (index === count++) return e;
		}
		return defaultValue;
	};
}
