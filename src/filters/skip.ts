/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import empty from '../iterables/empty';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function skip<T> (count: number): IterableFilter<T> {
	if(isNaN(count) || count<=0) return same;
	if(!isFinite(count)) return empty;
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				if(sequence instanceof Array)
				{
					const len = sequence.length;
					for(let i = count; i<len; i++)
					{
						if(len!==sequence.length) throw Error('Array length changed during iteration.');
						yield sequence[i];
					}
					return;
				}

				let remain = count;
				for(const e of sequence)
				{
					if(0<remain--) continue;
					yield e;
				}
			}
		};
	};
}
