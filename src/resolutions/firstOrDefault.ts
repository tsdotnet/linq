/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Returns the first element of a sequence, or a default value if no element is found.
 */
export default function firstOrDefault<T> (sequence: Iterable<T>): T | undefined {
	// noinspection LoopStatementThatDoesntLoopJS
	for(const e of sequence)
	{
		return e;
	}
	return undefined;
}
