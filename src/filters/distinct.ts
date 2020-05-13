/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * An iterable filter that returns distinct elements from a sequence.
 */
export default function* distinct<T> (sequence: Iterable<T>): Iterable<T> {
	const s = new Set<T>();
	for(const e of sequence)
	{
		if(s.has(e)) continue;
		s.add(e);
		yield e;
	}
	s.clear();
}
