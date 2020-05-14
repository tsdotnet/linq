/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import merge from './merge';

/**
 * Concatenates the provided sequences.
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function concat<T> (...sequences: Iterable<T>[]): Iterable<T> {
	return merge(sequences);
}
