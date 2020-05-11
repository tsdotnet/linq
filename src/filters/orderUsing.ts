/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {Comparison} from '@tsdotnet/compare/dist/Comparison';
import Order from '@tsdotnet/compare/dist/Order';
import toArray from '../resolutions/toArray';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * Orders elements by use of a comparison function.
 * @param {Comparison} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter}
 */
export default function orderUsing<T> (
	comparison: Comparison<T>,
	order: Order = Order.Ascending): IterableFilter<T> {
	if(!comparison) throw new ArgumentNullException('comparison');
	return function* (sequence: Iterable<T>): Iterable<T> {
		for(const e of
			toArray(sequence).sort(order==Order.Descending
				? ((a, b): number => comparison(a, b)* -1)
				: comparison))
		{
			yield e;
		}
	};
}
