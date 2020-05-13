/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 */

export default function onComplete<T> (action: () => void): IterableFilter<T> {
	if(!action) throw new ArgumentNullException('action');
	return function* (sequence: Iterable<T>): Iterable<T> {
		for(const e of sequence) yield e;
		action();
	};
}
