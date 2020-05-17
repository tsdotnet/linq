/**
 * @packageDocumentation
 * @module transforms
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

/**
 * Filters out null or undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NonNullable<T>>}
 */
export default function notNullOrUndefined<T> (sequence: Iterable<T>): Iterable<NonNullable<T>> {
	return {
		* [Symbol.iterator] (): Iterator<NonNullable<T>>
		{
			for(const e of sequence) if(e!=null) yield e as NonNullable<T>;
		}
	};
}
