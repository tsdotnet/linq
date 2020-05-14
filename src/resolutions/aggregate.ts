/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableTransform} from '../IterableTransform';

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: (T | undefined), current: T, index: number) => T} reduction
 * @return {IterableTransform<T, T | undefined>}
 */
export default function aggregate<T> (
	reduction: (
		previous: T | undefined,
		current: T,
		index: number) => T): IterableTransform<T, T | undefined>;

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: U, current: T, index: number) => U} reduction
 * @param {U} initialValue
 * @return {IterableTransform<T, U>}
 */
export default function aggregate<T, U> (
	reduction: (
		previous: U,
		current: T,
		index: number) => U,
	initialValue: U): IterableTransform<T, U>;

/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: (U | undefined), current: T, index: number) => U} reduction
 * @param {U} initialValue
 * @return {IterableTransform<T, U | undefined>}
 */
export default function aggregate<T, U> (
	reduction: (
		previous: U | undefined,
		current: T,
		index: number) => U,
	initialValue?: U): IterableTransform<T, U | undefined> {
	return function(sequence: Iterable<T>): U | undefined {
		if(!sequence) throw new ArgumentNullException('sequence');
		let previous = initialValue, i = 0;
		for(const current of sequence) previous = reduction(previous, current, i++);
		return previous;
	};
}

