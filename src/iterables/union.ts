/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import distinct from '../filters/distinct.js';
import merge from './merge.js';

/**
 * Produces the set union of all sequences provided..
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function union<T> (...sequences: Iterable<T>[]): Iterable<T> {
	return distinct(merge(sequences));
}
