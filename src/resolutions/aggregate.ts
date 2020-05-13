/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableTransform} from '../IterableTransform';

function aggregate<T> (
	reduction: (
		previous: T | undefined,
		current: T,
		index: number) => T): IterableTransform<T, T | undefined>;

function aggregate<T, U> (
	reduction: (
		previous: U,
		current: T,
		index: number) => U,
	initialValue: U): IterableTransform<T, U>;

function aggregate<T, U> (
	reduction: (
		previous: U | undefined,
		current: T,
		index: number) => U,
	initialValue?: U): IterableTransform<T, U | undefined>
{

	return function(sequence: Iterable<T>): U | undefined {
		if(!sequence) throw new ArgumentNullException('sequence');
		let previous = initialValue, i = 0;
		for(const current of sequence) previous = reduction(previous, current, i++);
		return previous;
	};
}

export default aggregate;
