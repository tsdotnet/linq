/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import aggregate from './aggregate';

const a = aggregate<any>((p, c) => c);

/**
 * Returns the last element of a sequence, or `undefined` if no element is found.
 * @param {Iterable<T>} sequence
 * @return {T | undefined}
 */
export default function lastOrDefault<T> (sequence: Iterable<T>): T | undefined

/**
 * Returns the last element of a sequence, or the default value if no element is found.
 * @param {Iterable<T>} sequence
 * @param {T} defaultValue
 * @return {T}
 */
export default function lastOrDefault<T> (sequence: Iterable<T>, defaultValue: T): T

/**
 * Returns the last element of a sequence, or a default value if no element is found.
 * @param {Iterable<T>} sequence
 * @param {T} defaultValue
 * @return {T | undefined}
 */
export default function lastOrDefault<T> (sequence: Iterable<T>, defaultValue?: T): T | undefined {
	if(!sequence) return defaultValue;
	if(sequence instanceof Array)
	{
		return sequence.length
			? sequence[sequence.length - 1]
			: defaultValue;
	}

	return defaultValue===undefined
		? a(sequence)
		: aggregate<T, T | undefined>((p: T | undefined, c: T) => c, defaultValue)(sequence);
}
