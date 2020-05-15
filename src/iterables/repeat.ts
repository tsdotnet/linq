/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Generates a sequence that contains one repeated value.
 * @param {T} entry
 * @param {number} count The number of times to repeat.
 * @return {Iterable<T>}
 */
export default function repeat<T> (
	entry: T,
	count: number): Iterable<T> {
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			for(let i = 0; i<count; i++) yield entry;
		}
	};
}
