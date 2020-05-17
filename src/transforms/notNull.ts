/**
 * @packageDocumentation
 * @module transforms
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

type NotNull<T> = T extends null ? never : T;

/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotNull<T>>}
 */
export default function notNull<T> (sequence: Iterable<T>): Iterable<NotNull<T>> {
	return {
		* [Symbol.iterator] (): Iterator<NotNull<T>>
		{
			for(const e of sequence) if(e!==null) yield e as NotNull<T>;
		}
	};
}
