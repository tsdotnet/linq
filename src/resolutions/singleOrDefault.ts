/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableTransform} from '../IterableTransform';

/**
 * Returns an entry from a singular sequence or `undefined` if empty.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T> (): IterableTransform<T, T | undefined>;

/**
 * Returns an entry from a singular sequence or the default value if empty.
 * Throws if more than one entry.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function singleOrDefault<T> (defaultValue: T): IterableTransform<T, T>;

/**
 * Returns an entry from a singular sequence or a default value if empty.
 * Throws if more than one entry.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T> (defaultValue?: T): IterableTransform<T, T | undefined> {
	return function(sequence: Iterable<T>): T | undefined {
		if(!sequence) return defaultValue;
		if(sequence instanceof Array)
		{
			if(sequence.length<2) return sequence.length ? sequence[0] : defaultValue;
		}
		else
		{
			const iterator = sequence[Symbol.iterator]();
			const first = iterator.next();
			if(first.done) return defaultValue;
			if(iterator.next().done) return first.value;
		}
		throw new Error('Sequence contains more than one element.');
	};
}
