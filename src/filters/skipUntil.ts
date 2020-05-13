/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter} from '../IterableTransform';
import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import skipWhile from './skipWhile';

/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 */
export default function skipUntil<T> (predicate: PredicateWithIndex<T>): IterableFilter<T> {
	return skipWhile((e, i) => !predicate(e, i));
}
