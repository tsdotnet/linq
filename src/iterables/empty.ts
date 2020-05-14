/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export const doneResult = Object.freeze({
	done: true,
	value: undefined
}) as IteratorReturnResult<any>;
export const emptyIterator = Object.freeze({next () { return doneResult; }}) as Iterator<any>;
export const empty = Object.freeze({[Symbol.iterator] (): Iterator<any> { return emptyIterator; }}) as Iterable<any>;
export default function <T = any> (): Iterable<T> {
	return empty;
}
