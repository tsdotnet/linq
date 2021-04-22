/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
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
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				if(sequence instanceof Array)
				{
					const len = sequence.length;
					count = Math.min(count, len);
					for(let i = 0; i<count; i++)
					{
						if(len!==sequence.length) throw Error('Array length changed during iteration.');
						yield sequence[i];
					}
					return;
				}

				let remain = count;
				for(const e of sequence)
				{
					yield e;
					if(--remain<=0) break;
				}
			}
		};
	};
}
