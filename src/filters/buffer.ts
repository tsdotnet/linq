/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import Queue from '@tsdotnet/queue';
import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 * @param {number} size
 * @return {IterableFilter<T>}
 */
export default function buffer<T> (size: number): IterableFilter<T> {
	if(size<=0) return same;
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				const q = new Queue<T>();
				for(const e of sequence)
				{
					q.enqueue(e);
					if(q.count>size) yield q.dequeue(true);
				}
				while(!q.isEmpty) yield q.dequeue(true);
			}
		};
	};
}
