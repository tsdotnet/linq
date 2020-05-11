/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {Primitive, Selector} from '@tsdotnet/common-interfaces';
import {comparePrimitives} from '@tsdotnet/compare/dist/comparePrimitives';
import Order from '@tsdotnet/compare/dist/Order';
import toArray from '../resolutions/toArray';

export default function orderBy<T, TKey extends Primitive> (
	keySelector: Selector<T, TKey>, order: Order = Order.Ascending): IterableFilter<T> {
	return function* (sequence: Iterable<T>): Iterable<T> {
		for(const e of
			toArray(sequence).sort(
				(a, b) => comparePrimitives(keySelector(a), keySelector(b))*order))
		{
			yield e;
		}
	};
}
