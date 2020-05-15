/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

type NotUndefined<T> = T extends undefined ? never : T;

/**
 * Filters out undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotUndefined<T>>}
 */
export default function notUndefined<T> (sequence: Iterable<T>): Iterable<NotUndefined<T>> {
	return {
		* [Symbol.iterator] (): Iterator<NotUndefined<T>>
		{
			for(const e of sequence) if(e!==undefined) yield e as NotUndefined<T>;
		}
	};
}
