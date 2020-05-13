/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import takeWhile from './takeWhile';

/**
 * An iterable filter that will return results until the predicate condition is true.
 */
export default function takeUntil<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return takeWhile((e, i) => !predicate(e, i));
}
