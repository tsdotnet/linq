/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Concatenates the sequences.
 */
export default function* concatThese<T> (sequences: Iterable<Iterable<T>>): Iterable<T> {
	for(const s of sequences)
	{
		for(const e of s)
		{
			yield e;
		}
	}
}
