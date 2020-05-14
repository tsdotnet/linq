/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import empty from '../iterables/empty';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function take<T> (count: number): IterableFilter<T> {
	if(count<=0) return empty;
	if(!isFinite(count)) return same;
	return function* (sequence: Iterable<T>): Iterable<T> {
		let remain = count;
		for(const e of sequence)
		{
			yield e;
			if(--remain<=0) break;
		}
	};
}
