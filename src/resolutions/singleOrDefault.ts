/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Returns a single, specific element of a sequence, or a default value if that element is not found.
 */
export default function singleOrDefault<T> (sequence: Iterable<T>): T | undefined {
	if(!sequence) throw new ArgumentNullException('sequence');
	// noinspection LoopStatementThatDoesntLoopJS
	let i = 0;
	let value: T;
	for(const e of sequence)
	{
		if(i++) throw new Error('Sequence contains more than one element.');
		value = e;
	}
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	if(i) return value!;
	return undefined;
}
