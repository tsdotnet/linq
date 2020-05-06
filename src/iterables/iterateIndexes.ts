/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike} source
 * @returns {Iterable}
 */
export default function* iterateIndexes<T> (source: ArrayLike<T>): Iterable<T> {
	const len = source?.length;
	if(len)
	{
		for(let i = 0; i<len; i++)
		{
			yield source[i];
		}
	}
}
