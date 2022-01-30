/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import concat from '../iterables/concat';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/*
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
export default function append<T> (...elements: T[]): IterableFilter<T> {
	if(elements.length === 0) return same;
	return function(sequence: Iterable<T>): Iterable<T> {
		return concat(sequence, elements);
	};
}
