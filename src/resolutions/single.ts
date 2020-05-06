/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Returns a single, specific element of a sequence.
 */
export default function single<T> (sequence: Iterable<T>): T {
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
	throw new Error('The sequence is empty.');
}
