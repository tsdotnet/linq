/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that returns everything from the sequence except the last count of items.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function skipLast<T> (count: number): IterableFilter<T> {
	if(isNaN(count) || count<=0) return same;
	if(!isFinite(count)) return empty;
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				if(sequence instanceof Array)
				{
					const len = sequence.length;
					for(let i = 0; i<len - count; i++)
					{
						if(len!==sequence.length) throw Error('Array length changed during iteration.');
						yield sequence[i];
					}
					return;
				}

				const q = new Queue<T>();
				for(const e of sequence)
				{
					q.enqueue(e);
					if(q.count>count) yield q.dequeue(true);
				}
				q.clear();
			}
		};
	};
}
