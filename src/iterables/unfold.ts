/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {SelectorWithIndex} from '@tsdotnet/common-interfaces';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

/**
 * A generator function for creating entries based upon the previous entry.
 * @param {T} seed The first value to be fed the valueFactory.
 * @param {SelectorWithIndex<T, T>} valueFactory
 * @param {boolean} skipSeed If false (default), the seed value is the first value returned.  Otherwise it is skipped.
 * @return {Iterable<T>}
 */
export default function unfold<T> (
	seed: T,
	valueFactory: SelectorWithIndex<T, T>,
	skipSeed = false
): Iterable<T> {
	if(!valueFactory) throw new ArgumentNullException('valueFactory');
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			if(!skipSeed) yield seed;
			let value = seed, i = skipSeed ? 0 : 1;
			while(true)
			{
				value = valueFactory(value, i++);
				yield value;
			}
		}
	};
}
