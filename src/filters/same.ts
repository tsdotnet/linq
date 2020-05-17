/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

/**
 * Returns the sequence provided.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function same<T> (sequence: Iterable<T>): Iterable<T> {
	return sequence;
}
