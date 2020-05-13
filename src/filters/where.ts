/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableFilter} from '../IterableTransform';

/**
 * An iterable filter that only returns elements that match the provided predicate.
 */
export default function where<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return function* (sequence: Iterable<T>): Iterable<T> {
		let i = 0;
		for(const e of sequence)
		{
			if(predicate(e, i++)) yield e;
		}
	};
}
