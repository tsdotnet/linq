/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import isEmpty from './isEmpty';

/**
 * Returns true if the sequence is not empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
export default function hasAny (sequence: Iterable<any>): boolean {
	return !isEmpty(sequence);
}
