/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Concatenates the provided sequences.
 */
export default function zip<T1, T2, TResult> (
	sequence1: Iterable<T1>,
	sequence2: Iterable<T2>,
	selector: (r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult
): Iterable<TResult> {
	if(!sequence1) throw new ArgumentNullException('sequence1');
	if(!sequence2) throw new ArgumentNullException('sequence2');
	if(!selector) throw new ArgumentNullException('selector');
	return {
		* [Symbol.iterator] (): Iterator<TResult>
		{
			const i1 = sequence1[Symbol.iterator](), i2 = sequence2[Symbol.iterator]();
			let n1: IteratorResult<T1>, n2: IteratorResult<T2>, i = 0;
			do
			{
				n1 = i1.next();
				n2 = i2.next();
				yield selector(n1, n2, i++);
			}
			while(!n1.done || !n2.done);
		}
	};
}
