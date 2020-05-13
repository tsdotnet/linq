/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import Queue from '@tsdotnet/queue';
import same from './same';

/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 */
export default function buffer<T> (size: number): IterableFilter<T> {
	if(size<=0) return same;
	return function* (sequence: Iterable<T>): Iterable<T> {
		const q = new Queue<T>();
		for(const e of sequence)
		{
			q.enqueue(e);
			if(q.count>size) yield q.dequeue(true);
		}
		while(!q.isEmpty) yield q.dequeue(true);
	};
}
