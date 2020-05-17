/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableFilter} from '../IterableTransform';
import skipWhile from './skipWhile';

/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function skipUntil<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return skipWhile((e, i) => !predicate(e, i));
}
