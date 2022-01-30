/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {Comparison} from '@tsdotnet/compare/dist/Comparable';
import Order from '@tsdotnet/compare/dist/Order';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableFilter} from '../IterableTransform';
import toArray from '../resolutions/toArray';

/**
 * An iterable filter that orders elements by use of a comparison function.
 * @param {Comparison<T>} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter<T>}
 */
export default function orderUsing<T> (
	comparison: Comparison<T>,
	order: Order = Order.Ascending): IterableFilter<T> {
	if(!comparison) throw new ArgumentNullException('comparison');
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				for(const e of
					toArray(sequence).sort(order==Order.Descending
						? ((a, b): number => comparison(a, b)* -1)
						: comparison))
				{
					yield e;
				}
			}
		};
	};
}
