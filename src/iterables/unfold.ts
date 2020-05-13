/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {SelectorWithIndex} from '@tsdotnet/common-interfaces';

/**
 * A generator function for creating entries based upon the previous entry.
 * @param seed The first value to be fed the valueFactory.
 * @param {SelectorWithIndex} valueFactory
 * @param {boolean} skipSeed If false (default), the seed value is the first value returned.  Otherwise it is skipped.
 * @return {Iterable}
 */
export default function* unfold<T> (
	seed: T,
	valueFactory: SelectorWithIndex<T, T>,
	skipSeed: boolean = false): Iterable<T> {

	if(!skipSeed) yield seed;
	let value = seed, i = skipSeed ? 0 : 1;
	while(true)
	{
		value = valueFactory(value, i++);
		yield value;
	}
}
