/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Returns true if sequence is not empty.
 */
export default function any<T> (sequence: Iterable<T>): boolean {
	// noinspection LoopStatementThatDoesntLoopJS
	for(const _ of sequence)
	{
		return true;
	}
	return false;
}
