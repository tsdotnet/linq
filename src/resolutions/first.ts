/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Returns the first element of a sequence.
 */
export default function first<T> (elements: Iterable<T>): T {
	// noinspection LoopStatementThatDoesntLoopJS
	for(const e of elements)
	{
		return e;
	}
	throw new Error('The sequence is empty.');
}
