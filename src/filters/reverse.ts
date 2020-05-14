/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


import toArray from '../resolutions/toArray';

/**
 * Returns an array (copy) of all the elements of a sequence in reverse order.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function* reverse<T> (sequence: Iterable<T>): Iterable<T> {
	// Placing this inside a generator allows it to be lazy.
	for(const e of toArray(sequence).reverse())
	{
		yield e;
	}
}
