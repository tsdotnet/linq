/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { IterableTransform } from '../IterableTransform';

/**
 * Returns an entry from a singular sequence or `undefined` if empty.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T>(): IterableTransform<T, T | undefined>;

/**
 * Returns an entry from a singular sequence or the default value if empty.
 * Throws if more than one entry.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function singleOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;

/**
 * Returns an entry from a singular sequence or a default value if empty.
 * Throws if more than one entry.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T, TDefault>(defaultValue?: TDefault): IterableTransform<T, T | TDefault | undefined> {
	return function (sequence: Iterable<T>): T | TDefault | undefined {
		if (!sequence) return defaultValue;
		if (sequence instanceof Array) {
			switch (sequence.length) {
				case 0: return defaultValue;
				case 1: return sequence[0];
			}
		}
		else {
			const iterator = sequence[Symbol.iterator]();
			const first = iterator.next();
			if (first.done) return defaultValue;
			if (iterator.next().done) return first.value;
		}
		throw new Error('Sequence contains more than one element.');
	};
}
