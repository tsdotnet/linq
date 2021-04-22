/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableFilter} from '../IterableTransform';
import takeWhile from './takeWhile';

/**
 * An iterable filter that will return results until the predicate condition is true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function takeUntil<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return takeWhile((e, i) => !predicate(e, i));
}
