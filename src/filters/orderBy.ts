/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import type {Primitive, Selector} from '@tsdotnet/common-interfaces';
import {compare} from '@tsdotnet/compare';
import Order from '@tsdotnet/compare/Order';
import {IterableFilter} from '../IterableTransform';
import toArray from '../resolutions/toArray';

/**
 * An iterable filter that orders elements by a primitive value provided by the key selector.
 * @param {Selector<T, TKey>} keySelector
 * @param {Order} order
 * @return {IterableFilter<T>}
 */
export default function orderBy<T, TKey extends Primitive> (
	keySelector: Selector<T, TKey>, order: Order = Order.Ascending): IterableFilter<T> {
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				for(const e of
					toArray(sequence).sort(
						(a, b) => compare.primitives(keySelector(a), keySelector(b))*order))
				{
					yield e;
				}
			}
		};
	};
}
