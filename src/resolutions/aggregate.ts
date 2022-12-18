/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The first entry is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: (T | undefined), current: T, index: number) => T} reducer
 * @return {IterableTransform<T, T | undefined>}
 */
export default function aggregate<T> (
	reducer: (
		previous: T,
		current: T,
		index: number) => T): IterableTransform<T, T>;

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: U, current: T, index: number) => U} reducer
 * @param {U} initialValue
 * @return {IterableTransform<T, U>}
 */
export default function aggregate<T, U> (
	reducer: (
		previous: U,
		current: T,
		index: number) => U,
	initialValue: U): IterableTransform<T, U>;

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified `initialValue` is used as the initial accumulator value, and the specified function is used to select the result value.
 * If no `initialValue` is specified, the first entry in the sequence is used.
 * @param {(previous: (U | undefined), current: T, index: number) => U} reducer
 * @param {U} initialValue
 * @return {IterableTransform<T, U | undefined>}
 */

export default function aggregate<T, U> (
	reducer: (
		previous: U,
		current: T,
		index: number) => U,
	initialValue?: U
): IterableTransform<T, U | undefined> {
	return function(sequence: Iterable<T>): U | undefined {
		if(!sequence) throw new ArgumentNullException('sequence');
		let i = 0;
		if(initialValue===undefined)
		{
			const iterator = sequence[Symbol.iterator]();
			let n = iterator.next();
			if(n.done) throw new InvalidOperationException('Sequence is empty.  Specify an initial value allow for an empty iterable.');
			let previous: any = n.value;
			while(!(n = iterator.next()).done)
			{
				previous = reducer(previous, n.value, ++i);
			}
			return previous;
		}
		else
		{
			let previous: any = initialValue;
			for(const current of sequence) previous = reducer(previous, current, i++);
			return previous;
		}
	};
}

