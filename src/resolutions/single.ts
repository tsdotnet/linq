/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Returns a single, specific element of a sequence.
 */
export default function single<T> (elements: Iterable<T>): T {
	// noinspection LoopStatementThatDoesntLoopJS
	let i = 0;
	let value: T;
	for(const e of elements)
	{
		if(i++) throw new Error('Sequence contains more than one element.');
		value = e;
	}
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	if(i) return value!;
	throw new Error('The sequence is empty.');
}
