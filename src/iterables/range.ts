/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Generates a sequence of numbers within a specified range.
 * @param {number} start
 * @param {number} maxInclusive
 * @param {number} step
 * @returns {Iterable<number>}
 */
export default function range (
	start: number        = 0,
	maxInclusive: number = Infinity,
	step: number         = 1): Iterable<number> {
	return {
		* [Symbol.iterator] (): Iterator<number>
		{
			for(let i = start; i<=maxInclusive; i += step)
			{
				yield i;
			}
		}
	};
}
