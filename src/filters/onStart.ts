/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that invokes the provided action before iterating results.
 */
export default function onStart<T> (action: () => void): IterableFilter<T> {
	if(!action) throw new ArgumentNullException('action');
	return function* (sequence: Iterable<T>): Iterable<T> {
		action();
		for(const e of sequence) yield e;
	};
}
