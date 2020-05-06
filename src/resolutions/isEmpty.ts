/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import any from './any';

/**
 * Returns true if the sequence is empty.
 */
export default function isEmpty<T> (sequence: Iterable<T>): boolean {
	return !any(sequence);
}
