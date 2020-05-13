/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import concat from '../iterables/concat';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
export default function prepend<T> (...elements: T[]): IterableFilter<T> {
	if(!elements.length) return same;
	return function(sequence: Iterable<T>): Iterable<T> {
		return concat(elements, sequence);
	};
}
