/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { IterableTransform } from '../IterableTransform';

/**
 * An iterable transform that returns the first element of a sequence, or `undefined` if no element is found.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function firstOrDefault<T>()
	: IterableTransform<T, T | undefined>;

/**
 * An iterable transform that returns the first element of a sequence, or the default value if no element is found.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault>}
 */
export default function firstOrDefault<T, TDefault>(defaultValue: TDefault)
	: IterableTransform<T, T | TDefault>;

/**
 * An iterable transform that returns the first element of a sequence, or a default value if no element is found.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault | undefined>}
 */
export default function firstOrDefault<T, TDefault>(defaultValue?: TDefault)
	: IterableTransform<T, T | TDefault | undefined> {
	return function (sequence: Iterable<T>) {
		if (!sequence) return defaultValue;
		if (sequence instanceof Array)
			return sequence.length == 0 ? defaultValue : sequence[0];

		const iterator = sequence[Symbol.iterator]();
		const first = iterator.next();
		return first.done ? defaultValue : first.value;
	};
}
