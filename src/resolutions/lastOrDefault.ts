/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that returns the last element of a sequence, or `undefined` if no element is found.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function lastOrDefault<T> (): IterableTransform<T, T | undefined>;

/**
 * An iterable transform that returns the last element of a sequence, or the default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function lastOrDefault<T> (defaultValue: T): IterableTransform<T, T>;

/**
 * An iterable transform that returns the last element of a sequence, or a default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function lastOrDefault<T> (defaultValue?: T): IterableTransform<T, T | undefined> {
	return function(sequence: Iterable<T>): T | undefined {
		if(!sequence) return defaultValue;
		if(sequence instanceof Array)
		{
			return sequence.length
				? sequence[sequence.length - 1]
				: defaultValue;
		}

		let last = defaultValue;
		for(const current of sequence) last = current;
		return last;
	};
}
