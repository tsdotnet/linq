/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import distinct from '../filters/distinct';
import merge from './merge';

/**
 * Produces the set union of all sequences provided..
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function union<T> (...sequences: Iterable<T>[]): Iterable<T> {
	return distinct(merge(sequences));
}
