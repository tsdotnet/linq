/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import concatThese from './concatThese';

/**
 * Concatenates the provided sequences.
 */
export default function concat<T> (...sequences: Iterable<T>[]): Iterable<T> {
	return concatThese(sequences);
}
