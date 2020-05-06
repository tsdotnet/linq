/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Generates a sequence that contains one repeated value.
 */
export default function* repeat<T> (
	item: T,
	count: number = Infinity): Iterable<T> {
	for(let i = 0; i<count; i++) yield item;
}
