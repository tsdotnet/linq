/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import aggregate from './aggregate';

const a = aggregate<any>((p, c) => c);

/**
 * Returns the last element of a sequence, or a the default value if no element is found.
 */
export default function lastOrDefault<T> (sequence: Iterable<T>, defaultValue?: T): T | undefined {
	if(!sequence) return undefined;
	return defaultValue===undefined
		? a(sequence)
		: aggregate<T, T | undefined>(
			(p: T | undefined, c: T) => c,
			defaultValue)(sequence);
}

