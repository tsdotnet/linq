/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


import {IterableTransform} from '../IterableTransform';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

export default function aggregate<T> (
	reduction: (
		previous: T | undefined,
		current: T,
		index: number) => T): IterableTransform<T, T | undefined>;

export default function aggregate<T, U> (
	reduction: (
		previous: U,
		current: T,
		index: number) => U,
	initialValue: U): IterableTransform<T, U>;

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
