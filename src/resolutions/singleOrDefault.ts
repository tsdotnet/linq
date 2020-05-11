/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Returns a single, specific element of a sequence, or a default value if that element is not found.
 */
export default function singleOrDefault<T> (
	sequence: Iterable<T>,
	defaultValue?: T): T | undefined {
	if(!sequence) return defaultValue;
	const iterator = sequence[Symbol.iterator]();
	const first = iterator.next();
	if(first.done) return defaultValue;
	if(iterator.next().done) return first.value;
	throw new Error('Sequence contains more than one element.');
}
