/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 */
export default function onStart<T> (action: () => void): IterableFilter<T> {
	if(!action) throw new ArgumentNullException('action');
	return function* (sequence: Iterable<T>): Iterable<T> {
		action();
		for(const e of sequence) yield e;
	};
}
