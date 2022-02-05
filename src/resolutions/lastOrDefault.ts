/*
* @author electricessence / https://github.com/electricessence/
* @license MIT
*/

import { IterableTransform } from '../IterableTransform';

/**
 * An iterable transform that returns the last element of a sequence, or `undefined` if no element is found.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function lastOrDefault<T>(): IterableTransform<T, T | undefined>;

/**
 * An iterable transform that returns the last element of a sequence, or the default value if no element is found.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault>}
 */
export default function lastOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;

/**
 * An iterable transform that returns the last element of a sequence, or a default value if no element is found.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault | undefined>}
 */
export default function lastOrDefault<T, TDefault>(defaultValue?: TDefault): IterableTransform<T, T | TDefault | undefined> {
	return function (sequence: Iterable<T>): T | TDefault | undefined {
		if (!sequence) return defaultValue;
		if (sequence instanceof Array) {
			return sequence.length == 0
				? defaultValue
				: sequence[sequence.length - 1];
		}

		let last: T | TDefault | undefined = defaultValue;
		for (const current of sequence) last = current;
		return last;
	};
}
