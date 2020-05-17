/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that returns the first element of a sequence, or `undefined` if no element is found.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function firstOrDefault<T> (): IterableTransform<T, T | undefined>;

/**
 * An iterable transform that returns the first element of a sequence, or the default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function firstOrDefault<T> (defaultValue: T): IterableTransform<T, T>;

/**
 * An iterable transform that returns the first element of a sequence, or a default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function firstOrDefault<T> (defaultValue?: T): IterableTransform<T, T | undefined> {
	return function(sequence: Iterable<T>): T | undefined {
		if(!sequence) return defaultValue;
		if(sequence instanceof Array)
			return sequence.length ? sequence[0] : defaultValue;

		const iterator = sequence[Symbol.iterator]();
		const first = iterator.next();
		return first.done ? defaultValue : first.value;
	};
}
