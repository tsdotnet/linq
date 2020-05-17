/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

/**
 * An iterable filter that returns distinct elements from a sequence.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function distinct<T> (sequence: Iterable<T>): Iterable<T> {
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			const s = new Set<T>();
			for(const e of sequence)
			{
				if(s.has(e)) continue;
				s.add(e);
				yield e;
			}
			s.clear();
		}
	};
}
